"use client";

import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { CompassMark } from "./CompassMark";

export function Hero() {
  const { t } = useLanguage();
  const { openReserve } = useModal();

  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="mx-auto flex max-w-content flex-col items-start px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-6 flex items-center gap-2 text-accent">
          <CompassMark className="h-4 w-4" />
          <span className="section-label">{t.hero.eyebrow}</span>
        </div>

        <h1 className="max-w-3xl font-head text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl md:text-6xl">
          {t.hero.h1}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
          {t.hero.sub}
        </p>

        <p className="mt-4 max-w-2xl text-sm font-medium text-accent-dark sm:text-base">
          {t.hero.reassurance}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => openReserve()}
            className="rounded-full bg-accent px-7 py-4 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:text-base"
          >
            {t.hero.primaryCta}
          </button>
          <a
            href="#the-product"
            className="rounded-full border border-ink/20 px-7 py-4 text-center text-sm font-semibold text-ink transition-colors hover:border-ink/40 sm:text-base"
          >
            {t.hero.secondaryCta}
          </a>
        </div>

        <p className="mt-8 max-w-xl text-xs text-ink/50 sm:text-sm">
          {t.hero.trust}
        </p>
      </div>
    </section>
  );
}
