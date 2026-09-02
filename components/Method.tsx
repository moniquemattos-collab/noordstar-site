"use client";

import { useLanguage } from "@/lib/language-context";
import { NorthStar } from "./NorthStar";

export function Method() {
  const { t } = useLanguage();

  return (
    <section id="method" className="bg-navy text-ivory">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex items-center gap-2 text-gold">
          <NorthStar className="h-4 w-4" />
          <span className="section-label">Method</span>
        </div>
        <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl">
          {t.method.h2}
        </h2>

        <div className="mt-14 grid gap-8 sm:grid-cols-5">
          {t.method.steps.map((step, i) => (
            <div key={step.title} className="relative">
              <div className="flex items-center gap-3 sm:block">
                <span className="font-serif text-2xl text-gold">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-lg sm:mt-3">{step.title}</h3>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                {step.line}
              </p>
              {i < t.method.steps.length - 1 && (
                <span className="mt-6 hidden h-px w-full bg-ivory/15 sm:block" />
              )}
            </div>
          ))}
        </div>

        <p className="mt-14 max-w-2xl border-l-2 border-gold pl-5 text-base leading-relaxed text-ivory/80">
          {t.method.closing}
        </p>
      </div>
    </section>
  );
}
