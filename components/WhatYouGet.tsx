"use client";

import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { ReportSlideVisual } from "./ReportSlideVisual";
import {
  IconBalance,
  IconChecklist,
  IconDashboard,
  IconDecision,
  IconMatrix,
  IconRoadmap,
} from "./icons";

const icons = [IconDashboard, IconMatrix, IconBalance, IconRoadmap, IconChecklist, IconDecision];

export function WhatYouGet() {
  const { t } = useLanguage();
  const { openSample } = useModal();

  return (
    <section id="what-you-get" className="bg-white">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-2xl font-serif text-3xl leading-tight text-navy sm:text-4xl">
          {t.whatYouGet.h2}
        </h2>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {t.whatYouGet.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <div key={card.title} className="bg-white p-7">
                <Icon className="h-6 w-6 text-gold" />
                <h3 className="mt-4 font-serif text-lg text-navy">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/65">
                  {card.line}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16">
          <p className="section-label text-navy/50">{t.whatYouGet.insideLabel}</p>
          <div className="mt-5 flex gap-5 overflow-x-auto pb-2 no-scrollbar">
            {t.whatYouGet.slides.map((slide, i) => (
              <button
                key={slide.title}
                type="button"
                onClick={() => openSample(i)}
                className="group w-[260px] shrink-0 text-left sm:w-[300px]"
              >
                <div className="aspect-[4/5] w-full rounded-sm border border-navy/10 bg-ivory shadow-sm transition-shadow group-hover:shadow-md">
                  <ReportSlideVisual index={i as 0 | 1 | 2} />
                </div>
                <p className="mt-3 text-sm font-medium text-navy">
                  {slide.title}
                </p>
                <p className="text-xs text-navy/55">{slide.caption}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
