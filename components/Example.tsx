"use client";

import { useLanguage } from "@/lib/language-context";

export function Example() {
  const { t } = useLanguage();

  return (
    <section className="bg-cream-deep">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-2xl font-head text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {t.example.h2}
        </h2>

        <div className="mt-10 space-y-3">
          {t.example.turns.map((turn, i) => {
            const isYou = i !== 1;
            return (
              <div
                key={turn.label}
                className={`max-w-2xl rounded-xl2 border p-5 sm:p-6 ${
                  isYou
                    ? "border-line bg-white"
                    : "border-transparent bg-accent-soft sm:ml-8"
                }`}
              >
                <p className="section-label text-accent-dark">{turn.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/85 sm:text-base">
                  {turn.text}
                </p>
              </div>
            );
          })}
        </div>

        <p className="mt-8 max-w-2xl font-head text-xl font-bold text-ink sm:text-2xl">
          {t.example.closing}
        </p>
      </div>
    </section>
  );
}
