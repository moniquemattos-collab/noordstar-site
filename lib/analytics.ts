"use client";

// Thin wrapper so CTA clicks and the payment-success view can be tracked
// the moment real analytics is turned on (see app/layout.tsx), without the
// rest of the codebase caring which tool is active.
//
// - No-ops safely if neither Plausible nor GA4 is loaded, so this is safe
//   to call unconditionally today, before analytics is configured.
// - Never pass personal data or form content as event parameters — these
//   calls only ever carry a fixed event name plus a static "location"
//   label (which CTA fired it), never anything the visitor typed.
// - "cta_click" and "purchase_confirmed" are deliberately distinct event
//   names so a click is never counted as a completed purchase downstream.

declare global {
  interface Window {
    plausible?: (event: string, options?: { props?: Record<string, string> }) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(name: string, params?: Record<string, string>) {
  if (typeof window === "undefined") return;

  try {
    if (typeof window.plausible === "function") {
      window.plausible(name, params ? { props: params } : undefined);
    }
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  } catch {
    // Analytics must never break the page.
  }
}
