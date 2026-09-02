import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy | Noordstar",
  description:
    "How Noordstar (Lumina Fortuna) collects, uses and protects information in connection with the AI Opportunity Report.",
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
