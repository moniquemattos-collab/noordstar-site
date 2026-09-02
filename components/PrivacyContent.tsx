"use client";

import { useLanguage } from "@/lib/language-context";
import { LegalPage } from "./LegalPage";

export function PrivacyContent() {
  const { t } = useLanguage();

  return (
    <LegalPage
      title={t.privacy.title}
      updated={t.privacy.updated}
      intro={t.privacy.intro}
      sections={t.privacy.sections}
    />
  );
}
