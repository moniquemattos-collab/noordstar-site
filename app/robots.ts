import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Operational, post-purchase pages — not search-facing content.
      // These also carry their own noindex meta tag (robots.txt alone
      // isn't enough: it stops crawling, not indexing of an already-linked
      // URL, and it doesn't replace access control for anything that
      // actually needs auth).
      disallow: ["/payment", "/payment-success"],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
