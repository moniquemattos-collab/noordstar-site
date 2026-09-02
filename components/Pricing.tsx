"use client";

import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { NorthStar } from "./NorthStar";

export function Pricing() {
  const { t } = useLanguage();
  const { openReserve } = useModal();

  return (
    <section id="pricing" className="bg-white">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
          {t.pricing.h2}
        </h2>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.2fr,1fr]">
          <div className="rounded-sm border-2 border-navy bg-navy p-8 text-ivory sm:p-10">
            <div className="flex items-center gap-2 text-gold">
              <NorthStar className="h-4 w-4" />
              <span className="section-label">{t.pricing.main.badge}</span>
            </div>
            <h3 className="mt-4 font-serif text-2xl">{t.pricing.main.title}</h3>
            <p className="mt-2 font-serif text-4xl text-gold">
              {t.pricing.main.price}
            </p>

            <ul className="mt-8 space-y-3">
              {t.pricing.main.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-sm text-ivory/85">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {bullet}
                </li>
              ))}
            </ul>

            <button
              type="button"
              onClick={() => openReserve("report")}
              className="mt-8 w-full rounded-sm bg-gold px-6 py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold-light sm:text-base"
            >
              {t.pricing.main.cta}
            </button>

            <p className="mt-6 border-t border-ivory/15 pt-6 text-sm leading-relaxed text-ivory/70">
              {t.pricing.main.guarantee}
            </p>
          </div>

          <div className="rounded-sm border border-navy/15 bg-ivory p-8 sm:p-10">
            <h3 className="font-serif text-xl text-navy">
              {t.pricing.plus.title}
            </h3>
            <p className="mt-2 font-serif text-3xl text-navy">
              {t.pricing.plus.price}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-navy/70">
              {t.pricing.plus.description}
            </p>
            <button
              type="button"
              onClick={() => openReserve("plus")}
              className="mt-8 w-full rounded-sm border border-navy px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-ivory"
            >
              {t.pricing.plus.cta}
            </button>
          </div>
        </div>

        <p className="mt-8 text-sm text-navy/55">{t.pricing.note}</p>
      </div>
    </section>
  );
}
