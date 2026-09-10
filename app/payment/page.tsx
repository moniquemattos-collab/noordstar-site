import type { Metadata } from "next";
import { PaymentContent } from "@/components/PaymentContent";

export const metadata: Metadata = {
  title: "Complete your payment | Noordstar",
  description: "Complete secure payment to start your Quick Fix analysis.",
  robots: { index: false, follow: false },
};

export default function PaymentPage() {
  return <PaymentContent />;
}
