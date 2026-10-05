import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { TermsContent } from "@/components/TermsContent";

export const metadata: Metadata = {
  title: "Terms & Disclaimer | Noordstar",
  description:
    "Terms governing the purchase and use of the Noordstar AI Opportunity Report.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return <TermsContent />;
}
