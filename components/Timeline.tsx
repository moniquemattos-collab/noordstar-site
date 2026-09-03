"use client";

import { useLanguage } from "@/lib/language-context";

export function Timeline() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-2xl font-head text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {t.timeline.h2}
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-5">
          {t.timeline.steps.map((step, i) => (
            <div key={step.title} className="relative pl-8 sm:pl-0">
              <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-accent text-xs font-semibold text-accent sm:static sm:mb-4 sm:flex sm:h-8 sm:w-8">
                {i + 1}
              </div>
              <h3 className="font-head text-lg font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/60">
                {step.line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
