/**
 * Google Tag Manager & GA4 — utilidades de tracking
 *
 * SETUP:
 *  1. Crea tu cuenta en https://tagmanager.google.com
 *  2. Crea un contenedor Web para alianzaindigo.org
 *  3. Reemplaza GTM_ID abajo con tu ID real (formato GTM-XXXXXXX)
 *  4. Dentro de GTM configura:
 *     a) Tag: Google Analytics GA4 Configuration (con tu Measurement ID G-XXXXXXXXXX)
 *     b) Tag: GA4 Event por cada evento listado aquí
 *     c) Marca como conversión en GA4: contact_form_submit, donation_intent, volunteer_form_submit
 *     d) Vincula GA4 con Google Ads para importar conversiones
 */

export const GTM_ID = 'GTM-XXXXXXX'; // ← REEMPLAZAR con tu ID real

// Extiende Window para que TypeScript no se queje del dataLayer
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

/** Empuja cualquier evento al dataLayer de GTM */
export function pushEvent(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...params });
}

// ─── Eventos de conversión principal ────────────────────────────────────────

/** Formulario de contacto enviado exitosamente */
export const trackContactFormSubmit = (type: string) =>
  pushEvent('contact_form_submit', { form_type: type || 'general' });

/** Formulario de voluntariado enviado */
export const trackVolunteerFormSubmit = (area: string) =>
  pushEvent('volunteer_form_submit', { volunteer_area: area || 'general' });

/** Usuario hace clic en "Donar ahora" o selecciona membresía */
export const trackDonationIntent = (type: 'single' | 'membership' | 'sponsor', amount?: number | string) =>
  pushEvent('donation_intent', { donation_type: type, donation_amount: amount });

/** Suscripción al boletín */
export const trackNewsletterSubscribe = () =>
  pushEvent('newsletter_subscribe');

// ─── Eventos de microconversión ─────────────────────────────────────────────

/** Solicitud de certificación CENI u otra */
export const trackCertificationRequest = (cert: string) =>
  pushEvent('certification_request', { certification_type: cert });

/** Clic en "Comprar boleto" de rifa */
export const trackRaffleTicketClick = (raffle: string) =>
  pushEvent('raffle_ticket_click', { raffle_name: raffle });

/** Vista de página (se llama desde AppLayout en cada cambio de ruta) */
export const trackPageView = (path: string, title: string) =>
  pushEvent('page_view', { page_path: path, page_title: title });
