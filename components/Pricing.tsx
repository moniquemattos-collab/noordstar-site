"use client";

import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { CompassMark } from "./CompassMark";

export function Pricing() {
  const { t } = useLanguage();
  const { openReserve } = useModal();

  return (
    <section id="pricing" className="bg-cream">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-head text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {t.pricing.h2}
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr,1fr]">
          <div className="rounded-xl2 border border-ink bg-ink p-8 text-cream sm:p-10">
            <div className="flex items-center gap-2 text-accent-light">
              <CompassMark className="h-4 w-4" />
              <span className="section-label">{t.pricing.main.badge}</span>
            </div>
            <h3 className="mt-4 font-head text-2xl font-bold">{t.pricing.main.title}</h3>
            <p className="mt-2 font-head text-4xl font-bold text-accent-light">
              {t.pricing.main.price}
            </p>

            <ul className="mt-8 space-y-3">
              {t.pricing.main.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-cream/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                  {bullet}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => openReserve("report")}
              className="mt-8 w-full rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:text-base"
            >
              {t.pricing.main.cta}
            </button>

            <p className="mt-6 border-t border-cream/15 pt-6 text-sm leading-relaxed text-cream/70">
              {t.pricing.main.guarantee}
            </p>
          </div>

          <div className="rounded-xl2 border border-line bg-white p-8 sm:p-10">
            <h3 className="font-head text-xl font-bold text-ink">
              {t.pricing.plus.title}
            </h3>
            <p className="mt-2 font-head text-3xl font-bold text-ink">
              {t.pricing.plus.price}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              {t.pricing.plus.description}
            </p>
            <button
              type="button"
              onClick={() => openReserve("plus")}
              className="mt-8 w-full rounded-full border border-ink px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              {t.pricing.plus.cta}
            </button>
          </div>
        </div>

        <p className="mt-8 text-sm text-ink/50">{t.pricing.note}</p>
      </div>
    </section>
  );
}
