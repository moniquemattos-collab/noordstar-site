"use client";

import { useLanguage } from "@/lib/language-context";
import {
  IconBalance,
  IconChecklist,
  IconDashboard,
  IconDecision,
  IconQuestion,
  IconRoadmap,
} from "./icons";

const icons = [
  IconDashboard,
  IconDecision,
  IconBalance,
  IconRoadmap,
  IconChecklist,
  IconQuestion,
];

export function WhatYouGet() {
  const { t } = useLanguage();

  return (
    <section id="what-you-get" className="bg-white">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-2xl font-head text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {t.whatYouGet.h2}
        </h2>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.whatYouGet.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div
                key={card.title}
                className="rounded-xl2 border border-line bg-cream p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-head text-lg font-bold text-ink">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/60">
                  {card.line}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
