"use client";

import { useLanguage } from "@/lib/language-context";
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
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#free-check"
            className="rounded-full bg-accent px-7 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:text-base"
          >
            {t.hero.primaryCta}
          </a>
          <a
            href="#how-it-works"
            className="rounded-full border border-cream/30 px-7 py-4 text-center text-sm font-semibold text-cream transition-colors hover:border-cream/60 sm:text-base"
          >
            {t.hero.secondaryCta}
          </a>
        </div>
      </div>
    </section>
  );
}
