import type { BlogPost } from "@/lib/blog";
import { SITE_URL } from "@/lib/constants";
import { Header } from "./Header";
import { Footer } from "./Footer";

function BlogBody({ post }: { post: BlogPost }) {
  return (
    <div className="mt-10 max-w-2xl space-y-6 text-base leading-relaxed text-ink/75">
      {post.body.map((block, i) => {
        switch (block.type) {
          case "heading":
            return (
              <h2 key={i} className="font-head text-xl font-bold text-ink">
                {block.text}
              </h2>
            );
          case "paragraph":
            return <p key={i}>{block.text}</p>;
          case "list":
            return (
              <ul key={i} className="list-disc space-y-2 pl-5">
                {block.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            );
          case "image":
            return (
              <img
                key={i}
                src={block.src}
                alt={block.alt}
                width={block.width}
                height={block.height}
                loading="lazy"
                decoding="async"
                className="w-full rounded-xl2"
              />
            );
          case "link":
            return (
              <p key={i}>
                <a href={block.href} className="text-accent-dark underline-offset-2 hover:underline">
                  {block.text}
                </a>
              </p>
            );
        }
      })}
    </div>
  );
}

export function BlogPostContent({ post }: { post: BlogPost }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.seoDescription,
    image: `${SITE_URL}${post.image.src}`,
    datePublished: post.datePublished,
    dateModified: post.dateModified ?? post.datePublished,
    ...(post.author ? { author: { "@type": "Person", name: post.author } } : {}),
    publisher: {
      "@type": "Organization",
      name: "Noordstar",
      url: SITE_URL,
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="bg-cream">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-24">
          <a href="/blog" className="text-sm text-ink/55 underline-offset-2 hover:underline">
            ← Blog
          </a>

          <p className="mt-6 text-xs text-ink/45">
            {post.datePublished}
            {post.author ? ` · ${post.author}` : ""}
          </p>
          <h1 className="mt-2 max-w-2xl font-head text-3xl font-bold leading-tight text-ink sm:text-4xl">
            {post.title}
          </h1>

          <img
            src={post.image.src}
            alt={post.image.alt}
            width={post.image.width}
            height={post.image.height}
            className="mt-8 w-full max-w-2xl rounded-xl2"
          />

          <BlogBody post={post} />

          <a
            href={post.cta.href}
            className="mt-10 inline-block rounded-full bg-accent px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-accent-dark sm:text-base"
          >
            {post.cta.label}
          </a>
        </div>
      </main>
      <Footer />
    </>
  );
}
