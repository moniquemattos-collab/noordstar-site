import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { PaymentSuccessContent } from "@/components/PaymentSuccessContent";

export const metadata: Metadata = {
  title: "Payment confirmed | Noordstar",
  description: "Your Quick Fix request and payment are complete.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/payment-success` },
};

export default function PaymentSuccessPage() {
  return <PaymentSuccessContent />;
}
