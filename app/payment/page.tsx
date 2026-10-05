import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { PaymentContent } from "@/components/PaymentContent";

export const metadata: Metadata = {
  title: "Complete your payment | Noordstar",
  description: "Complete secure payment to start your Quick Fix analysis.",
  robots: { index: false, follow: false },
  alternates: { canonical: `${SITE_URL}/payment` },
};

export default function PaymentPage() {
  return <PaymentContent />;
}
