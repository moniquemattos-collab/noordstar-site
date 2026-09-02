"use client";

import { useLanguage } from "@/lib/language-context";
import { NorthStar } from "./NorthStar";

export function Independence() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-content px-5 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto flex justify-center text-gold">
          <NorthStar className="h-6 w-6" />
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl font-serif text-3xl leading-tight text-navy sm:text-4xl">
          {t.independence.h2}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-navy/70 sm:text-lg">
          {t.independence.body}
        </p>
      </div>
    </section>
  );
}
