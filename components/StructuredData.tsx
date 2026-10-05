import { SITE_URL } from "@/lib/constants";
import { translations } from "@/lib/translations";

// Server-rendered JSON-LD for the homepage, built only from facts that are
// already live and approved on the page itself (no ratings, reviews or
// credentials that don't exist). Always sourced from the EN copy: the
// EN/NL toggle is a client-side preference with no effect on the URL, so
// EN is what's actually in the server-rendered HTML search engines see —
// see the SEO report for how this was confirmed.
export function StructuredData() {
  const t = translations.en;

  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Noordstar",
    legalName: "Lumina Fortuna",
    url: SITE_URL,
    email: "info@noordstar.nl",
    identifier: "KvK 96199954",
  };

  const product = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: t.pricing.title,
    description: t.pricing.body,
    offers: {
      "@type": "Offer",
      url: `${SITE_URL}/#pricing`,
      priceCurrency: "EUR",
      price: "49.00",
      valueAddedTaxIncluded: false,
      availability: "https://schema.org/InStock",
    },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a.replace(/\n\n/g, " "),
      },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
    </>
  );
}
