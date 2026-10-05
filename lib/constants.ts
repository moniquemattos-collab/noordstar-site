// Canonical production domain. Single source of truth for metadataBase,
// canonical URLs, sitemap.xml and robots.txt entries, and structured data.
// next.config.js keeps its own copy of the apex domain for the www→apex
// redirect (plain JS config file, can't import this TS module) — keep
// the two in sync if this ever changes.
export const SITE_URL = "https://noordstar.nl";

export const QUICK_FIX_FORM_URL = "https://tally.so/r/obPoDV";

// TODO: replace with the real Mollie Payment Link once it's generated.
// Used by app/payment (the fallback post-Tally payment step) — see
// components/PaymentContent.tsx. Leaving this as a non-URL sentinel makes
// the page render a "payment link not ready yet" state instead of a dead
// or fake link.
export const MOLLIE_PAYMENT_LINK = "MOLLIE_PAYMENT_LINK";
