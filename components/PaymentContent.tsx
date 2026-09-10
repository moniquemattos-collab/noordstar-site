"use client";

import { ModalProvider } from "@/lib/modal-context";
import { useLanguage } from "@/lib/language-context";
import { MOLLIE_PAYMENT_LINK } from "@/lib/constants";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { CompassMark } from "./CompassMark";

export function PaymentContent() {
  const { t } = useLanguage();
  const isConfigured = MOLLIE_PAYMENT_LINK.startsWith("http");

  return (
    <ModalProvider>
      <Header />
      <main className="bg-cream">
        <div className="mx-auto flex max-w-content flex-col items-center px-5 py-20 text-center sm:px-8 sm:py-28">
          <CompassMark className="h-6 w-6 text-accent" />

          <h1 className="mt-5 max-w-xl font-head text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {t.payment.h1}
          </h1>
          <p className="mt-3 max-w-xl text-lg font-medium text-accent-dark">
            {t.payment.subheading}
          </p>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
            {t.payment.body}
          </p>

          {isConfigured ? (
            <a
              href={MOLLIE_PAYMENT_LINK}
              className="mt-8 rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:text-base"
            >
              {t.payment.cta}
            </a>
          ) : (
            <p className="mt-8 max-w-sm rounded-xl2 border border-line bg-white px-6 py-4 text-sm text-ink/60">
              {t.payment.notReady}
            </p>
          )}

          <div className="mt-8 max-w-md space-y-1 text-sm text-ink/50">
            <p>{t.payment.supporting1}</p>
            <p>{t.payment.supporting2}</p>
          </div>
        </div>
      </main>
      <Footer />
    </ModalProvider>
  );
}
