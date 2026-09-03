"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { useModal } from "@/lib/modal-context";

export function ReserveModal() {
  const { t } = useLanguage();
  const { reserveOpen, closeReserve } = useModal();
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!reserveOpen) {
      setSubmitted(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeReserve();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [reserveOpen, closeReserve]);

  if (!reserveOpen) return null;

  const priceLabel = reserveOpen === "plus" ? t.pricing.plus.price : t.pricing.main.price;
  const tierLabel = reserveOpen === "plus" ? t.pricing.plus.title : t.pricing.main.title;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-5"
      role="dialog"
      aria-modal="true"
      aria-label={t.reserveModal.title}
      onClick={closeReserve}
    >
      <div
        className="w-full max-w-md rounded-xl2 border border-line bg-white p-8 shadow-xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between">
          <div>
            <p className="section-label text-accent">{tierLabel} · {priceLabel}</p>
            <h3 className="mt-2 font-head text-2xl font-bold text-ink">
              {t.reserveModal.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={closeReserve}
            aria-label={t.reserveModal.close}
            className="text-ink/40 hover:text-ink"
          >
            ✕
          </button>
        </div>

        {submitted ? (
          <p className="mt-6 text-sm leading-relaxed text-ink/70">
            {t.reserveModal.success}
          </p>
        ) : (
          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              /*
                Backend / payment integration placeholder.
                Wire this submit handler to your CRM, email service, or
                order-creation endpoint once the iDEAL checkout is live.
              */
              setSubmitted(true);
            }}
          >
            <p className="text-sm leading-relaxed text-ink/60">
              {t.reserveModal.intro}
            </p>

            <div>
              <label className="text-xs font-medium text-ink/55" htmlFor="reserve-name">
                {t.reserveModal.nameLabel}
              </label>
              <input
                id="reserve-name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-ink/55" htmlFor="reserve-company">
                {t.reserveModal.companyLabel}
              </label>
              <input
                id="reserve-company"
                name="company"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
              />
            </div>

            <div>
              <label className="text-xs font-medium text-ink/55" htmlFor="reserve-email">
                {t.reserveModal.emailLabel}
              </label>
              <input
                id="reserve-email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-line bg-white px-3 py-2.5 text-sm text-ink focus:border-accent focus:outline-none"
              />
            </div>

            {/*
              Briefing questionnaire placeholder.
              Once the order flow is live, embed the Tally or Typeform
              briefing questionnaire here (or link out to it) so clients
              can complete the ±35 minute intake right after checkout:

              <iframe
                data-tally-src="https://tally.so/embed/REPLACE_WITH_FORM_ID"
                title="Noordstar briefing questionnaire"
              />
            */}

            <button
              type="submit"
              className="mt-2 w-full rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
            >
              {t.reserveModal.submit}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
