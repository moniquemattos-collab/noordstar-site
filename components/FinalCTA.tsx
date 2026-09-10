"use client";

import { useLanguage } from "@/lib/language-context";
import { QUICK_FIX_FORM_URL } from "@/lib/constants";
import { CompassMark } from "./CompassMark";

export function FinalCTA() {
  const { t } = useLanguage();

  return (
    <section className="bg-ink text-cream">
      <div className="mx-auto flex max-w-content flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-28">
        <CompassMark className="h-6 w-6 text-accent-light" />
        <h2 className="mt-5 max-w-2xl font-head text-3xl font-bold leading-tight sm:text-4xl">
          {t.finalCta.h2}
        </h2>
        <p className="mt-4 max-w-xl text-base text-cream/70 sm:text-lg">
          {t.finalCta.sub}
        </p>
        <a
          href={QUICK_FIX_FORM_URL}
          className="mt-10 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:text-base"
        >
          {t.hero.primaryCta}
        </a>
      </div>
    </section>
  );
}
