"use client";

import { useLanguage } from "@/lib/language-context";
import { CompassMark } from "./CompassMark";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-line bg-cream">
      <div className="mx-auto max-w-content px-5 py-10 sm:px-8">
        <div className="flex items-center gap-2 text-ink">
          <CompassMark className="h-4 w-4 text-accent" />
          <span className="font-head text-base font-bold">Noordstar</span>
        </div>

        <p className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-ink/55">
          <span>{t.footer.line1}</span>
          <span aria-hidden="true">·</span>
          <span>{t.footer.kvk}</span>
          <span aria-hidden="true">·</span>
          <span>{t.footer.btw}</span>
          <span aria-hidden="true">·</span>
          <a href="/privacy" className="underline-offset-2 hover:underline">
            {t.footer.privacy}
          </a>
          <span aria-hidden="true">·</span>
          <a href="/terms" className="underline-offset-2 hover:underline">
            {t.footer.terms}
          </a>
          <span aria-hidden="true">·</span>
          <span>
            {t.footer.contactLabel}:{" "}
            <a
              href="mailto:info@noordstar.nl"
              className="underline-offset-2 hover:underline"
            >
              info@noordstar.nl
            </a>
          </span>
        </p>
      </div>
    </footer>
  );
}
