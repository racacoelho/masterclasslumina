// Single source of truth for Lumina's WhatsApp contact.
// Number is always 5562998570375 (with the 9 digit).
export const WHATSAPP_PHONE = '5562998570375';

const WHATSAPP_GREETING =
  'Olá! Vim da página da Formação Dermasilk™ e quero tirar uma dúvida.';

export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(
  WHATSAPP_GREETING,
).replace(/'/g, '%27')}`;
