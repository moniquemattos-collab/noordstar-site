"use client";

import { useLanguage } from "@/lib/language-context";
import { CompassMark } from "./CompassMark";

export function Independence() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream-deep">
      <div className="mx-auto max-w-content px-5 py-20 text-center sm:px-8 sm:py-28">
        <div className="mx-auto flex justify-center text-accent">
          <CompassMark className="h-7 w-7" />
        </div>
        <h2 className="mx-auto mt-5 max-w-2xl font-head text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {t.independence.h2}
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
          {t.independence.body}
        </p>
      </div>
    </section>
  );
}
