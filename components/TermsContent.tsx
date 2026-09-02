"use client";

import { useLanguage } from "@/lib/language-context";
import { LegalPage } from "./LegalPage";

export function TermsContent() {
  const { t } = useLanguage();

  return (
    <LegalPage
      title={t.terms.title}
      updated={t.terms.updated}
      intro={t.terms.intro}
      sections={t.terms.sections}
    />
  );
}
