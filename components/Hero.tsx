"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { DEFAULT_HERO_VARIANT, type HeroVariantKey } from "@/lib/translations";
import { CompassMark } from "./CompassMark";

const VARIANT_KEYS: HeroVariantKey[] = [
  "default",
  "staff",
  "admin",
  "time",
  "margin",
  "leaks",
];

export function Hero() {
  const { t } = useLanguage();
  const { openReserve, openSample } = useModal();
  const [variant, setVariant] = useState<HeroVariantKey>(DEFAULT_HERO_VARIANT);

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("v");
    if (param && (VARIANT_KEYS as string[]).includes(param)) {
      setVariant(param as HeroVariantKey);
    }
  }, []);

  const { h1, sub } = t.hero.variants[variant];

  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div className="mx-auto flex max-w-content flex-col items-start px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-6 flex items-center gap-2 text-accent">
          <CompassMark className="h-4 w-4" />
          <span className="section-label">{t.hero.eyebrow}</span>
        </div>

        <h1 className="max-w-3xl font-head text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl md:text-6xl">
          {h1}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
          {sub}
        </p>

        <p className="mt-4 max-w-2xl text-sm font-medium text-accent-dark sm:text-base">
          {t.hero.reassurance}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => openReserve("report")}
            className="rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:text-base"
          >
            {t.hero.primaryCta}
          </button>
          <button
            type="button"
            onClick={() => openSample()}
            className="rounded-full border border-ink/20 px-7 py-4 text-sm font-semibold text-ink transition-colors hover:border-ink/40 sm:text-base"
          >
            {t.hero.secondaryCta}
          </button>
        </div>

        <p className="mt-8 max-w-xl text-xs text-ink/50 sm:text-sm">
          {t.hero.trust}
        </p>
      </div>
    </section>
  );
}
