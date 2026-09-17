declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const trackEvent = (eventName: string) => {
  window.fbq?.('trackCustom', eventName);
};

export const trackCheckout = () => {
  window.fbq?.('trackCustom', 'click_quero_me_capacitar');
  window.fbq?.('track', 'InitiateCheckout');
  window.fbq?.('trackCustom', 'begin_checkout');
  window.fbq?.('trackCustom', 'click_checkout');
};