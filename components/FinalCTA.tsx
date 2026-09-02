"use client";

import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { NorthStar } from "./NorthStar";

export function FinalCTA() {
  const { t } = useLanguage();
  const { openReserve, openSample } = useModal();

  return (
    <section className="starfield bg-navy text-ivory">
      <div className="mx-auto flex max-w-content flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-28">
        <NorthStar className="h-6 w-6 text-gold" />
        <h2 className="mt-5 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
          {t.finalCta.h2}
        </h2>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button
            type="button"
            onClick={() => openReserve("report")}
            className="rounded-sm bg-gold px-7 py-4 text-sm font-semibold text-navy transition-colors hover:bg-gold-light sm:text-base"
          >
            {t.finalCta.primaryCta}
          </button>
          <button
            type="button"
            onClick={() => openSample()}
            className="rounded-sm border border-ivory/30 px-7 py-4 text-sm font-semibold text-ivory transition-colors hover:border-ivory/60 sm:text-base"
          >
            {t.finalCta.secondaryCta}
          </button>
        </div>
      </div>
    </section>
  );
}
