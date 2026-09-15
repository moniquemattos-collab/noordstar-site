import type { Metadata } from "next";
import { PaymentSuccessContent } from "@/components/PaymentSuccessContent";

export const metadata: Metadata = {
  title: "Payment confirmed | Noordstar",
  description: "Your Quick Fix request and payment are complete.",
  robots: { index: false, follow: false },
};

export default function PaymentSuccessPage() {
  return <PaymentSuccessContent />;
}
