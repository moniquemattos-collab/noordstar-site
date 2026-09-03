"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-cream-deep">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-head text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {t.faq.h2}
        </h2>

        <div className="mt-10 space-y-3">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className="rounded-xl2 border border-line bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-medium text-ink sm:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-accent transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="px-6 pb-5 pr-10 text-sm leading-relaxed text-ink/65 sm:text-base">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
