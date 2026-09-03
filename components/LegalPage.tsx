"use client";

import { ModalProvider } from "@/lib/modal-context";
import { useLanguage } from "@/lib/language-context";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ReserveModal } from "./ReserveModal";

type Section = { h: string; p: string };

export function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: readonly Section[];
}) {
  const { t } = useLanguage();

  return (
    <ModalProvider>
      <Header />
      <main className="bg-cream">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-24">
          <a
            href="/"
            className="text-sm text-ink/55 underline-offset-2 hover:underline"
          >
            ← {t.common.backHome}
          </a>

          <h1 className="mt-6 font-head text-3xl font-bold text-ink sm:text-4xl">
            {title}
          </h1>
          <p className="mt-2 text-xs uppercase tracking-widest2 text-ink/40">
            {updated}
          </p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70">
            {intro}
          </p>

          <div className="mt-12 max-w-2xl space-y-10">
            {sections.map((section) => (
              <div key={section.h}>
                <h2 className="font-head text-xl font-bold text-ink">{section.h}</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {section.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <ReserveModal />
    </ModalProvider>
  );
}
