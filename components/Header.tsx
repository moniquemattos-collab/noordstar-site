"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";
import { CompassMark } from "./CompassMark";

export function Header() {
  const { t, lang, setLang } = useLanguage();
  const { openReserve } = useModal();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: "#what-you-get", label: t.nav.whatYouGet },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#method", label: t.nav.method },
    { href: "#pricing", label: t.nav.pricing },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <CompassMark className="h-5 w-5 text-accent" />
          <span className="font-head text-lg font-bold tracking-tight text-ink">
            Noordstar
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center rounded-full border border-line p-0.5 text-xs font-semibold sm:flex">
            <button
              type="button"
              onClick={() => setLang("nl")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "nl" ? "bg-ink text-cream" : "text-ink/50"
              }`}
              aria-pressed={lang === "nl"}
            >
              {t.langToggle.nl}
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`rounded-full px-2.5 py-1 transition-colors ${
                lang === "en" ? "bg-ink text-cream" : "text-ink/50"
              }`}
              aria-pressed={lang === "en"}
            >
              {t.langToggle.en}
            </button>
          </div>

          <button
            type="button"
            onClick={() => openReserve("report")}
            className="hidden rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:inline-block"
          >
            {t.nav.cta}
          </button>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-line lg:hidden"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <span className="relative block h-3 w-4">
              <span className="absolute left-0 top-0 h-px w-4 bg-ink" />
              <span className="absolute left-0 top-1.5 h-px w-4 bg-ink" />
              <span className="absolute left-0 top-3 h-px w-4 bg-ink" />
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-line bg-cream px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-ink/70"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center rounded-full border border-line p-0.5 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setLang("nl")}
                className={`rounded-full px-2.5 py-1 ${
                  lang === "nl" ? "bg-ink text-cream" : "text-ink/50"
                }`}
              >
                {t.langToggle.nl}
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`rounded-full px-2.5 py-1 ${
                  lang === "en" ? "bg-ink text-cream" : "text-ink/50"
                }`}
              >
                {t.langToggle.en}
              </button>
            </div>
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                openReserve("report");
              }}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-white"
            >
              {t.nav.cta}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
