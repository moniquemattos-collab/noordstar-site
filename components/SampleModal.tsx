"use client";

import { useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { ReportSlideVisual } from "./ReportSlideVisual";

export function SampleModal() {
  const { t } = useLanguage();
  const { sampleOpen, sampleIndex, closeSample, openSample } = useModal();

  useEffect(() => {
    if (!sampleOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeSample();
      if (e.key === "ArrowRight") openSample((sampleIndex + 1) % 3);
      if (e.key === "ArrowLeft") openSample((sampleIndex + 2) % 3);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [sampleOpen, sampleIndex, closeSample, openSample]);

  if (!sampleOpen) return null;

  const slide = t.whatYouGet.slides[sampleIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-navy-dark/80 p-5"
      role="dialog"
      aria-modal="true"
      aria-label={t.sampleModal.title}
      onClick={closeSample}
    >
      <div
        className="relative w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 flex items-center justify-between text-ivory">
          <p className="section-label text-gold">{t.sampleModal.title}</p>
          <button
            type="button"
            onClick={closeSample}
            className="text-sm text-ivory/70 hover:text-ivory"
          >
            {t.sampleModal.close} ✕
          </button>
        </div>

        <div className="aspect-[4/5] w-full rounded-sm bg-ivory shadow-xl">
          <ReportSlideVisual index={sampleIndex as 0 | 1 | 2} />
        </div>

        <div className="mt-4 flex items-center justify-between text-ivory">
          <div>
            <p className="text-sm font-medium">{slide.title}</p>
            <p className="text-xs text-ivory/60">{slide.caption}</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => openSample((sampleIndex + 2) % 3)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 hover:border-ivory/50"
              aria-label="Previous"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => openSample((sampleIndex + 1) % 3)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/25 hover:border-ivory/50"
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
