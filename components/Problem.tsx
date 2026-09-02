"use client";

import { useLanguage } from "@/lib/language-context";

export function Problem() {
  const { t } = useLanguage();

  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <div className="max-w-3xl">
          <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
            {t.problem.h2}
          </h2>
          <p className="mt-6 text-base leading-relaxed text-navy/75 sm:text-lg">
            {t.problem.body}
          </p>
          <p className="mt-8 border-l-2 border-gold pl-5 font-serif text-xl leading-snug text-navy sm:text-2xl">
            {t.problem.highlight}
          </p>
        </div>
      </div>
    </section>
  );
}
