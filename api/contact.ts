/**
 * POST /api/contact
 *
 * Valida el formulario y lo entrega a Web3Forms. La clave vive en
 * WEB3FORMS_ACCESS_KEY y nunca llega al navegador.
 */
import type { VercelRequest, VercelResponse } from '@vercel/node';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS = 5;

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

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

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
): Promise<void> {
  response.setHeader('Cache-Control', 'no-store');

  if (request.method !== 'POST') {
    response.status(405).json({ ok: false, error: 'method_not_allowed' });
    return;
  }

  const forwarded = request.headers['x-forwarded-for'];
  const ip = (Array.isArray(forwarded) ? forwarded[0] : forwarded)?.split(',')[0]?.trim() || 'unknown';

  if (rateLimited(ip)) {
    response.status(429).json({ ok: false, error: 'rate_limited' });
    return;
  }

  let body: Record<string, unknown>;
  try {
    body = typeof request.body === 'string' ? JSON.parse(request.body) : (request.body ?? {});
  } catch {
    response.status(400).json({ ok: false, error: 'invalid_json' });
    return;
  }

  // Honeypot: un bot lo rellena; respondemos ok para no darle pistas.
  if (text(body['website'])) {
    response.status(200).json({ ok: true });
    return;
  }

  const name = text(body['name']);
  const email = text(body['email']);
  const message = text(body['message']);
  const consent = body['consent'] === true;

  if (name.length < 2 || name.length > 80) {
    response.status(400).json({ ok: false, error: 'invalid_name' });
    return;
  }

  if (email.length > 160 || !EMAIL.test(email)) {
    response.status(400).json({ ok: false, error: 'invalid_email' });
    return;
  }

  if (message.length < 10 || message.length > 4000) {
    response.status(400).json({ ok: false, error: 'invalid_message' });
    return;
  }

  if (!consent) {
    response.status(400).json({ ok: false, error: 'consent_required' });
    return;
  }

  const accessKey = process.env['WEB3FORMS_ACCESS_KEY'];
  if (!accessKey) {
    response.status(500).json({ ok: false, error: 'not_configured' });
    return;
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
      response.status(502).json({ ok: false, error: 'delivery_failed' });
      return;
    }

    response.status(200).json({ ok: true });
  } catch {
    response.status(502).json({ ok: false, error: 'delivery_failed' });
  }
}
