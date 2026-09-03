"use client";

import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { CompassMark } from "./CompassMark";

export function ProductDemo() {
  const { t } = useLanguage();
  const { openReserve } = useModal();
  const d = t.productDemo;

  return (
    <section id="the-product" className="bg-cream-deep">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-2xl font-head text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {d.h2}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
          {d.intro}
        </p>

        <div className="mt-10 max-w-2xl overflow-hidden rounded-xl2 border border-line bg-white shadow-sm">
          <div className="flex items-center gap-2 border-b border-line bg-accent-soft px-6 py-4">
            <CompassMark className="h-4 w-4 text-accent" />
            <span className="section-label text-accent-dark">{d.cardLabel}</span>
          </div>

          <div className="divide-y divide-line">
            <div className="px-6 py-5">
              <p className="section-label text-ink/40">{d.problemLabel}</p>
              <p className="mt-2 font-head text-lg font-semibold leading-snug text-ink">
                {d.problemText}
              </p>
            </div>

            <div className="px-6 py-5">
              <p className="section-label text-ink/40">{d.foundLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75 sm:text-base">
                {d.foundText}
              </p>
            </div>

            <div className="px-6 py-5">
              <p className="section-label text-ink/40">{d.fixLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75 sm:text-base">
                {d.fixText}
              </p>
            </div>

            <div className="px-6 py-5">
              <p className="section-label text-ink/40">{d.diyLabel}</p>
              <p className="mt-2 text-sm font-medium text-ink">{d.diyText}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 px-6 py-5">
              <div>
                <p className="section-label text-ink/40">{d.difficultyLabel}</p>
                <p className="mt-1 font-head text-base font-bold text-accent-dark">
                  {d.difficultyValue}
                </p>
              </div>
              <div>
                <p className="section-label text-ink/40">{d.costLabel}</p>
                <p className="mt-1 font-head text-base font-bold text-accent-dark">
                  {d.costValue}
                </p>
              </div>
            </div>

            <div className="bg-cream px-6 py-5">
              <p className="section-label text-ink/40">{d.dontDoLabel}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75 sm:text-base">
                {d.dontDoText}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <p className="text-base font-medium text-ink sm:text-lg">{d.closing}</p>
          <button
            type="button"
            onClick={() => openReserve()}
            className="shrink-0 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            {t.hero.primaryCta}
          </button>
        </div>
      </div>
    </section>
  );
}
