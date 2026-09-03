"use client";

import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { ReportSlideVisual } from "./ReportSlideVisual";
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
  const { openSample } = useModal();

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

        <div className="mt-16">
          <p className="section-label text-ink/45">{t.whatYouGet.insideLabel}</p>
          <div className="mt-5 flex gap-5 overflow-x-auto pb-2 no-scrollbar">
            {t.whatYouGet.slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => openSample(i)}
                className="group w-[260px] shrink-0 text-left sm:w-[300px]"
              >
                <div className="aspect-[4/5] w-full rounded-xl2 border border-line bg-cream shadow-sm transition-shadow group-hover:shadow-md">
                  <ReportSlideVisual index={i as 0 | 1 | 2} />
                </div>
                <p className="mt-3 text-sm font-medium text-ink">
                  {slide.title}
                </p>
                <p className="text-xs text-ink/50">{slide.caption}</p>
              </button>
            ))}
          </div>
          <p className="mt-4 text-sm text-ink/50">{t.whatYouGet.carouselNote}</p>
        </div>
      </div>
    </section>
  );
}
