export const QUICK_FIX_FORM_URL = "https://tally.so/r/obPoDV";

// TODO: replace with the real Mollie Payment Link once it's generated.
// Used by app/payment (the fallback post-Tally payment step) — see
// components/PaymentContent.tsx. Leaving this as a non-URL sentinel makes
// the page render a "payment link not ready yet" state instead of a dead
// or fake link.
export const MOLLIE_PAYMENT_LINK = "MOLLIE_PAYMENT_LINK";
