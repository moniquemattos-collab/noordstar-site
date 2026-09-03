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

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          <div className="flex flex-col rounded-xl2 border border-line bg-white p-8">
            <h3 className="font-head text-xl font-bold text-ink">
              {t.pricing.free.title}
            </h3>
            <p className="mt-2 font-head text-3xl font-bold text-ink">
              {t.pricing.free.price}
            </p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-ink/65">
              {t.pricing.free.body}
            </p>
            <a
              href="#free-check"
              className="mt-8 w-full rounded-full border border-ink px-6 py-3.5 text-center text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-cream"
            >
              {t.pricing.free.cta}
            </a>
          </div>

          <div className="relative flex flex-col rounded-xl2 border-2 border-accent bg-white p-8">
            <span className="absolute -top-3 left-8 rounded-full bg-accent px-3 py-1 text-xs font-semibold text-white">
              {t.pricing.quickFix.badge}
            </span>
            <h3 className="font-head text-xl font-bold text-ink">
              {t.pricing.quickFix.title}
            </h3>
            <p className="mt-2 font-head text-3xl font-bold text-accent-dark">
              {t.pricing.quickFix.price}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink/65">
              {t.pricing.quickFix.body}
            </p>

            <ul className="mt-6 space-y-3">
              {t.pricing.quickFix.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-ink/80">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {bullet}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => openReserve("quickfix")}
              className="mt-8 w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              {t.pricing.quickFix.cta}
            </button>

            <p className="mt-5 border-t border-line pt-5 text-sm leading-relaxed text-ink/55">
              {t.pricing.quickFix.note}
            </p>
          </div>

          <div className="flex flex-col rounded-xl2 border border-ink bg-ink p-8 text-cream">
            <div className="flex items-center gap-2 text-accent-light">
              <CompassMark className="h-4 w-4" />
              <span className="section-label">{t.pricing.fullPlan.title}</span>
            </div>
            <p className="mt-3 font-head text-3xl font-bold text-accent-light">
              {t.pricing.fullPlan.price}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              {t.pricing.fullPlan.body}
            </p>

            <ul className="mt-6 space-y-3">
              {t.pricing.fullPlan.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-cream/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-light" />
                  {bullet}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => openReserve("full")}
              className="mt-8 w-full rounded-full border border-cream/40 px-6 py-3.5 text-sm font-semibold text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              {t.pricing.fullPlan.cta}
            </button>
          </div>
        </div>

        <p className="mt-8 text-sm text-ink/50">{t.pricing.note}</p>
      </div>
    </section>
  );
}
