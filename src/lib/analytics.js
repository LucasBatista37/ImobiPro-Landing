const GA4_ID   = import.meta.env.VITE_GA4_MEASUREMENT_ID;
const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

function loadGA4() {
  if (!GA4_ID) return;
  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', GA4_ID, { send_page_view: false });
}

function loadPixel() {
  if (!PIXEL_ID) return;
  // eslint-disable-next-line
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  window.fbq('init', PIXEL_ID);
}

/** Call once on app mount — loads scripts only when env vars are configured */
export function initAnalytics() {
  loadGA4();
  loadPixel();
}

const FB_EVENT_MAP = {
  page_view:        () => window.fbq('track', 'PageView'),
  lead_form_submit: () => window.fbq('track', 'Lead'),
  pricing_click:    () => window.fbq('track', 'InitiateCheckout'),
};

/**
 * Send a custom event to GA4 and Meta Pixel.
 * @param {string} name   GA4 event name (snake_case)
 * @param {object} params GA4 event parameters
 */
export function trackEvent(name, params = {}) {
  if (window.gtag) window.gtag('event', name, params);
  if (window.fbq) {
    const fbSend = FB_EVENT_MAP[name];
    fbSend ? fbSend() : window.fbq('trackCustom', name, params);
  }
}

export function trackPageView() {
  trackEvent('page_view');
}
