/**
 * Envío del formulario de contacto con Web3Forms.
 *
 * Web3Forms gratuito solo acepta envíos desde el navegador: la entrega desde
 * un servidor exige plan Pro. Por eso la access key viaja en el bundle; es un
 * identificador público de formulario, no una credencial de acceso a datos.
 * El spam se frena con el campo trampa `website` y con `botcheck`.
 */
export const WEB3FORMS_ACCESS_KEY = 'ba79d95e-e6f0-4c79-95af-d75a2e27a67d';

const ENDPOINT = 'https://api.web3forms.com/submit';

export type ContactMessage = {
  name: string;
  email: string;
  message: string;
  /** Campo trampa: si llega relleno, se descarta el envío. */
  website?: string;
};

export async function sendContactMessage(payload: ContactMessage): Promise<boolean> {
  if (payload.website?.trim()) {
    return true;
  }

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'content-type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `Portfolio · ${payload.name}`,
      from_name: 'Portfolio Eduardo Orellana',
      name: payload.name,
      email: payload.email,
      message: payload.message,
      replyto: payload.email,
      botcheck: false,
    }),
  });

  if (!response.ok) {
    return false;
  }

  const result = (await response.json().catch(() => null)) as { success?: boolean } | null;

  return result?.success === true;
}
