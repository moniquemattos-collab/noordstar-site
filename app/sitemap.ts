import type { MetadataRoute } from "next";
import { execSync } from "node:child_process";
import { SITE_URL } from "@/lib/constants";
import { getPublishedPosts } from "@/lib/blog";

// Real last-modified date per page, taken from the last git commit that
// touched its source files — not "now" on every build. Falls back to a
// fixed date if git history isn't available in the build environment
// (e.g. a shallow checkout without the relevant commit) rather than
// failing the build or silently using today's date.
const FALLBACK_DATE = "2026-10-05";

function lastModified(paths: string[]): string {
  try {
    const out = execSync(
      `git log -1 --format=%cs -- ${paths.map((p) => `"${p}"`).join(" ")}`,
      { cwd: process.cwd(), encoding: "utf8" }
    ).trim();
    return out || FALLBACK_DATE;
  } catch {
    return FALLBACK_DATE;
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: lastModified(["app/page.tsx", "lib/translations.ts", "components/Hero.tsx"]),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: lastModified(["app/privacy/page.tsx", "components/PrivacyContent.tsx"]),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE_URL}/terms`,
      lastModified: lastModified(["app/terms/page.tsx", "components/TermsContent.tsx"]),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // /payment and /payment-success are deliberately excluded: operational,
  // post-purchase pages, already noindex, never part of the public sitemap.

  const blogEntries: MetadataRoute.Sitemap = getPublishedPosts().map((post) => ({
    url: `${SITE_URL}/blog/${post.slug}`,
    lastModified: post.dateModified ?? post.datePublished,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  if (blogEntries.length > 0) {
    staticEntries.push({
      url: `${SITE_URL}/blog`,
      lastModified: blogEntries[0].lastModified,
      changeFrequency: "weekly",
      priority: 0.5,
    });
  }

  return [...staticEntries, ...blogEntries];
}
