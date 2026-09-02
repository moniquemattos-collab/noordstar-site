"use client";

import { useLanguage } from "@/lib/language-context";

export function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section id="how-it-works" className="bg-ivory">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-2xl font-serif text-3xl leading-tight text-navy sm:text-4xl">
          {t.howItWorks.h2}
        </h2>

        <div className="mt-14 grid gap-10 sm:grid-cols-5">
          {t.howItWorks.steps.map((step, i) => (
            <div key={step.title} className="relative pl-8 sm:pl-0">
              <div className="absolute left-0 top-1 h-6 w-6 rounded-full border border-gold text-center text-xs leading-6 text-gold sm:static sm:mb-4 sm:inline-flex sm:h-8 sm:w-8 sm:items-center sm:justify-center sm:rounded-full sm:border sm:leading-none">
                {i + 1}
              </div>
              <h3 className="font-serif text-lg text-navy">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                {step.line}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
