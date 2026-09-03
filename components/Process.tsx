"use client";

import { useLanguage } from "@/lib/language-context";

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="bg-cream">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-2xl font-head text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {t.process.h2}
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {t.process.steps.map((step, i) => (
            <div key={step.title}>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-soft font-head text-lg font-bold text-accent">
                {i + 1}
              </div>
              <h3 className="mt-4 font-head text-xl font-bold text-ink">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65 sm:text-base">
                {step.text}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 max-w-2xl rounded-xl2 bg-accent-soft px-6 py-5 text-base font-medium leading-relaxed text-ink sm:text-lg">
          {t.process.guarantee}
        </p>
      </div>
    </section>
  );
}
