/**
 * POST /api/contact
 *
 * Valida el formulario y lo entrega a Web3Forms. La clave vive en
 * WEB3FORMS_ACCESS_KEY y nunca llega al navegador.
 *
 * Usa la firma `fetch` de Vercel: un handler por método HTTP que recibe un
 * `Request` y devuelve un `Response`. Así no depende de tipos de Node.
 */

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();
const NO_STORE = { 'cache-control': 'no-store' } as const;

function json(body: unknown, status: number): Response {
  return Response.json(body, { status, headers: NO_STORE });
}

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const bucket = buckets.get(ip);

  if (!bucket || bucket.resetAt < now) {
    buckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > MAX_REQUESTS;
}

function text(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export function GET(): Response {
  return json({ ok: false, error: 'method_not_allowed' }, 405);
}

export async function POST(request: Request): Promise<Response> {
  const forwarded = request.headers.get('x-forwarded-for');
  const ip = forwarded?.split(',')[0]?.trim() || 'unknown';

  if (rateLimited(ip)) {
    return json({ ok: false, error: 'rate_limited' }, 429);
  }

  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  if (!body || typeof body !== 'object') {
    return json({ ok: false, error: 'invalid_json' }, 400);
  }

  // Honeypot: un bot lo rellena; respondemos ok para no darle pistas.
  if (text(body['website'])) {
    return json({ ok: true }, 200);
  }

  const name = text(body['name']);
  const email = text(body['email']);
  const message = text(body['message']);
  const consent = body['consent'] === true;

  if (name.length < 2 || name.length > 80) {
    return json({ ok: false, error: 'invalid_name' }, 400);
  }

  if (email.length > 160 || !EMAIL.test(email)) {
    return json({ ok: false, error: 'invalid_email' }, 400);
  }

  if (message.length < 10 || message.length > 4000) {
    return json({ ok: false, error: 'invalid_message' }, 400);
  }

  if (!consent) {
    return json({ ok: false, error: 'consent_required' }, 400);
  }

  const accessKey = process.env['WEB3FORMS_ACCESS_KEY'];
  if (!accessKey) {
    return json({ ok: false, error: 'not_configured' }, 500);
  }

  try {
    const result = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'content-type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `Portfolio · ${name}`,
        from_name: 'Portfolio Eduardo Orellana',
        name,
        email,
        message,
        replyto: email,
      }),
    });

    if (!result.ok) {
      return json({ ok: false, error: 'delivery_failed' }, 502);
    }

    return json({ ok: true }, 200);
  } catch {
    return json({ ok: false, error: 'delivery_failed' }, 502);
  }
}
