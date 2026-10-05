// Blog content model. This file holds the data, not the design — article
// and listing pages (app/blog/) read from here.
//
// HOW TO PUBLISH AN ARTICLE
// 1. Add an object to the `posts` array below, status: "published".
// 2. Fill in every field — see BlogPost for what's required vs optional.
// 3. Build locally (`npm run build`) to confirm it compiles, then deploy.
// The listing page, /blog/[slug] route, sitemap.xml and the header's
// "Blog" nav link all update automatically — nothing else to wire up.
//
// A post with status: "draft" is excluded from the listing page, from
// sitemap.xml, and its URL 404s for visitors — it only exists in this
// file until you flip it to "published".

export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; width: number; height: number }
  | { type: "link"; href: string; text: string };

export type BlogPost = {
  slug: string; // becomes /blog/<slug>
  title: string;
  summary: string; // shown on the listing page
  seoTitle: string;
  seoDescription: string;
  /** Real name only — omit entirely rather than inventing one. */
  author?: string;
  datePublished: string; // ISO date, e.g. "2026-10-05"
  dateModified?: string; // ISO date; omit if never updated after publish
  image: { src: string; alt: string; width: number; height: number };
  body: BlogBlock[];
  /** Link + label for the CTA at the end of the article, pointing at an existing offer (e.g. QUICK_FIX_FORM_URL from lib/constants). */
  cta: { href: string; label: string };
  status: "draft" | "published";
};

export const posts: BlogPost[] = [];

export function getPublishedPosts(): BlogPost[] {
  return posts
    .filter((p) => p.status === "published")
    .sort((a, b) => b.datePublished.localeCompare(a.datePublished));
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug && p.status === "published");
}
