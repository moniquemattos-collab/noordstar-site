"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";

export function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-ivory">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="font-serif text-3xl leading-tight text-navy sm:text-4xl">
          {t.faq.h2}
        </h2>

        <div className="mt-10 divide-y divide-navy/10 border-y border-navy/10">
          {t.faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-medium text-navy sm:text-lg">
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 text-xl text-gold transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="pb-5 pr-8 text-sm leading-relaxed text-navy/70 sm:text-base">
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
