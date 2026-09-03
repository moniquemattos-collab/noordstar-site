"use client";

import { useLanguage } from "@/lib/language-context";
import { IconCheck } from "./icons";

export function Recognition() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream-deep">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-2xl font-head text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {t.recognition.h2}
        </h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {t.recognition.items.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl2 border border-line bg-white p-4"
            >
              <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
              <p className="text-sm leading-relaxed text-ink/80 sm:text-base">
                {item}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl rounded-xl2 bg-accent-soft px-6 py-5 text-base leading-relaxed text-ink sm:text-lg">
          {t.recognition.closing}
        </p>
      </div>
    </section>
  );
}
