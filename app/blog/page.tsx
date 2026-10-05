import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/constants";
import { getPublishedPosts } from "@/lib/blog";
import { BlogListContent } from "@/components/BlogListContent";

export const metadata: Metadata = {
  title: "Blog | Noordstar",
  description:
    "Practical notes on applying AI in small businesses — from the team behind the Noordstar Quick Fix.",
  alternates: { canonical: `${SITE_URL}/blog` },
};

export default function BlogIndexPage() {
  const posts = getPublishedPosts();

  // No published posts yet: don't serve an empty "Blog" section. The route
  // starts resolving as soon as the first post in lib/blog.ts is flipped
  // to status: "published" — nothing else to change.
  if (posts.length === 0) {
    notFound();
  }

  return <BlogListContent posts={posts} />;
}
