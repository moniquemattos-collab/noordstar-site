"use client";

import { useLanguage } from "@/lib/language-context";
import {
  IconClock,
  IconGrowthBlocked,
  IconLatePayment,
  IconRepeat,
  IconSlowDoc,
} from "./icons";

const icons = [IconClock, IconSlowDoc, IconRepeat, IconLatePayment, IconGrowthBlocked];

export function Problem() {
  const { t } = useLanguage();

  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
          {t.familiar.h2}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy/70">
          {t.familiar.intro}
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.familiar.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={card}
                className="rounded-sm border border-navy/10 bg-white p-7"
              >
                <Icon className="h-6 w-6 text-gold" />
                <p className="mt-4 text-sm leading-relaxed text-navy/80 sm:text-base">
                  {card}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-10 max-w-3xl border-l-2 border-gold pl-5 text-lg leading-relaxed text-navy sm:text-xl">
          {t.familiar.closing}
        </p>
      </div>
    </section>
  );
}
