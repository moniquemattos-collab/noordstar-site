import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SITE_URL } from "@/lib/constants";
import { getPostBySlug, getPublishedPosts } from "@/lib/blog";
import { BlogPostContent } from "@/components/BlogPostContent";

export function generateStaticParams() {
  // Only published posts get a statically generated route. A draft's slug
  // isn't in this list, so visiting it 404s — draft content never becomes
  // publicly reachable just by existing in lib/blog.ts.
  return getPublishedPosts().map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.seoTitle,
    description: post.seoDescription,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.seoTitle,
      description: post.seoDescription,
      type: "article",
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified ?? post.datePublished,
      authors: post.author ? [post.author] : undefined,
      images: [{ url: post.image.src, width: post.image.width, height: post.image.height, alt: post.image.alt }],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return <BlogPostContent post={post} />;
}
