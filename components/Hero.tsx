"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { DEFAULT_HERO_VARIANT, type HeroVariantKey } from "@/lib/translations";
import { NorthStar } from "./NorthStar";

const VARIANT_KEYS: HeroVariantKey[] = [
  "staff",
  "admin",
  "time",
  "margin",
  "leaks",
  "ai",
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
    <section
      id="top"
      className="starfield relative overflow-hidden bg-navy text-ivory"
    >
      <div className="mx-auto flex max-w-content flex-col items-start px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-6 flex items-center gap-2 text-gold">
          <NorthStar className="h-4 w-4" />
          <span className="section-label">Noordstar</span>
        </div>

        <h1 className="max-w-3xl font-serif text-4xl leading-[1.15] tracking-tight sm:text-5xl md:text-6xl">
          {h1}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ivory/80 sm:text-lg">
          {sub}
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => openReserve("report")}
            className="rounded-sm bg-gold px-7 py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold-light sm:text-base"
          >
            {t.hero.primaryCta}
          </button>
          <button
            type="button"
            onClick={() => openSample()}
            className="rounded-sm border border-ivory/30 px-7 py-4 text-sm font-semibold text-ivory transition-colors hover:border-ivory/60 sm:text-base"
          >
            {t.hero.secondaryCta}
          </button>
        </div>

        <p className="mt-8 max-w-xl text-xs text-ivory/60 sm:text-sm">
          {t.hero.trust}
        </p>
      </div>
    </section>
  );
}
