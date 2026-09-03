"use client";

import { useLanguage } from "@/lib/language-context";
import { CompassMark } from "./CompassMark";

export function Proof() {
  const { t } = useLanguage();

  return (
    <section id="method" className="bg-ink text-cream">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex items-center gap-2 text-accent-light">
          <CompassMark className="h-4 w-4" />
          <span className="section-label">Noordstar Method™</span>
        </div>
        <h2 className="mt-4 max-w-2xl font-head text-3xl font-bold leading-tight sm:text-4xl">
          {t.proof.h2}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/70">
          {t.proof.intro}
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-4">
          {t.proof.steps.map((step, i) => (
            <div key={step} className="flex items-center gap-3">
              <span className="rounded-full border border-cream/25 px-4 py-2 text-sm font-medium">
                {step}
              </span>
              {i < t.proof.steps.length - 1 && (
                <span className="text-cream/30" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-xl2 border border-cream/15 bg-cream/[0.04] p-6 sm:p-10">
          <h3 className="font-head text-xl font-bold sm:text-2xl">
            {t.proof.tableTitle}
          </h3>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[520px] border-collapse text-left">
              <thead>
                <tr>
                  <th className="w-1/2 border-b border-cream/15 pb-4 pr-6 text-sm font-medium text-cream/45">
                    {t.proof.tableHead.generic}
                  </th>
                  <th className="w-1/2 border-b-2 border-accent-light pb-4 text-sm font-semibold text-cream">
                    {t.proof.tableHead.noordstar}
                  </th>
                </tr>
              </thead>
              <tbody>
                {t.proof.rows.map((row) => (
                  <tr key={row.generic} className="border-b border-cream/10">
                    <td className="py-4 pr-6 text-sm text-cream/40 line-through decoration-cream/20">
                      {row.generic}
                    </td>
                    <td className="py-4 text-sm font-medium text-cream sm:text-base">
                      {row.noordstar}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-8 font-head text-xl font-bold text-accent-light sm:text-2xl">
            {t.proof.closing}
          </p>
        </div>
      </div>
    </section>
  );
}
