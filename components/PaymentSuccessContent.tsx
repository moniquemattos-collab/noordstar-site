"use client";

import { useLanguage } from "@/lib/language-context";
import { Footer } from "./Footer";
import { CompassMark } from "./CompassMark";
import { IconCheck } from "./icons";

export function PaymentSuccessContent() {
  const { t, lang, setLang } = useLanguage();
  const p = t.paymentSuccess;

  return (
    <>
      {/*
        Deliberately minimal header for this page: logo + language toggle
        only. No nav links and no purchase CTA — the customer has just
        paid, nothing here should compete with "you're done."
      */}
      <header className="sticky top-0 z-40 border-b border-line bg-cream/95 backdrop-blur">
        <div className="mx-auto flex max-w-content items-center justify-between px-5 py-4 sm:px-8">
          <a href="/" className="flex items-center gap-2">
            <CompassMark className="h-5 w-5 text-accent" />
            <span className="font-head text-lg font-bold tracking-tight text-ink">
              Noordstar
            </span>
          </a>

          <div className="flex items-center rounded-full border border-line p-0.5 text-xs font-semibold">
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
        </div>
      </header>

      <main className="bg-cream">
        <div className="mx-auto flex max-w-content flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-28">
          <div className="flex items-center gap-2 text-accent">
            <CompassMark className="h-4 w-4" />
            <span className="section-label">{p.eyebrow}</span>
          </div>

          <h1 className="mt-5 max-w-xl font-head text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {p.h1}
          </h1>

          <div className="mt-6 max-w-md space-y-4 text-base leading-relaxed text-ink/70">
            {p.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 w-full max-w-sm rounded-xl2 border border-line bg-white p-6 text-left">
            <ul className="space-y-3">
              {p.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink/80 sm:text-base">
                  <IconCheck className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 max-w-md">
            <p className="font-head text-xl font-bold text-ink sm:text-2xl">
              {p.closingLine1}
            </p>
            <p className="mt-1 font-head text-xl font-bold text-accent-dark sm:text-2xl">
              {p.closingLine2}
            </p>
          </div>

          <a
            href="/"
            className="mt-10 text-sm text-ink/55 underline-offset-2 hover:underline"
          >
            ← {p.backLink}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
