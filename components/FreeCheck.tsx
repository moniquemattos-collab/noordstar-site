"use client";

import { useLanguage } from "@/lib/language-context";
import { CompassMark } from "./CompassMark";

// TODO: replace with the published Tally form URL (Publish → Copy link in Tally).
const TALLY_FORM_URL = "TALLY_FORM_URL";

export function FreeCheck() {
  const { t } = useLanguage();
  const isConfigured = TALLY_FORM_URL.startsWith("http");

  return (
    <section id="free-check" className="bg-white">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-2xl font-head text-3xl font-bold leading-tight text-ink sm:text-4xl">
          {t.freeCheck.h2}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-ink/70 sm:text-lg">
          {t.freeCheck.body}
        </p>

        <div className="mt-10 max-w-2xl overflow-hidden rounded-xl2 border border-line bg-cream">
          {isConfigured ? (
            <iframe
              src={TALLY_FORM_URL}
              title="Noordstar Free Check"
              className="h-[640px] w-full border-0"
              loading="lazy"
            />
          ) : (
            <div className="flex h-[320px] flex-col items-center justify-center gap-3 p-10 text-center">
              <CompassMark className="h-8 w-8 text-accent" />
              <p className="max-w-sm text-sm text-ink/50">
                {t.freeCheck.placeholder}
              </p>
            </div>
          )}
        </div>

        <p className="mt-4 max-w-2xl text-sm text-ink/50">{t.freeCheck.note}</p>
      </div>
    </section>
  );
}
