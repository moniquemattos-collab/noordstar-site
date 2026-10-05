import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Noordstar",
  description:
    "How Noordstar (Lumina Fortuna) collects, uses and protects information in connection with the AI Opportunity Report.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
