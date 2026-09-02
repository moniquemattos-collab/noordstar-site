import type { Metadata } from "next";
import { TermsContent } from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Disclaimer | Noordstar",
  description:
    "Terms governing the purchase and use of the Noordstar AI Opportunity Report.",
};

export default function TermsPage() {
  return <TermsContent />;
}
