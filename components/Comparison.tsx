"use client";

import { useLanguage } from "@/lib/language-context";

export function Comparison() {
  const { t } = useLanguage();

  return (
    <section className="bg-ivory">
      <div className="mx-auto max-w-content px-5 py-20 sm:px-8 sm:py-28">
        <h2 className="max-w-2xl font-serif text-3xl leading-tight text-navy sm:text-4xl">
          {t.buying.h2}
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy/70">
          {t.buying.intro}
        </p>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse text-left">
            <thead>
              <tr>
                <th className="w-1/2 border-b border-navy/15 pb-4 pr-6 text-sm font-medium text-navy/50">
                  {t.buying.tableHead.generic}
                </th>
                <th className="w-1/2 border-b-2 border-gold pb-4 text-sm font-semibold text-navy">
                  {t.buying.tableHead.noordstar}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.buying.rows.map((row) => (
                <tr key={row.generic} className="border-b border-navy/10">
                  <td className="py-4 pr-6 text-sm text-navy/45 line-through decoration-navy/20">
                    {row.generic}
                  </td>
                  <td className="py-4 text-sm font-medium text-navy sm:text-base">
                    {row.noordstar}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-10 font-serif text-xl text-navy sm:text-2xl">
          {t.buying.closing}
        </p>
      </div>
    </section>
  );
}
