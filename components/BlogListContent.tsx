import type { BlogPost } from "@/lib/blog";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function BlogListContent({ posts }: { posts: BlogPost[] }) {
  return (
    <>
      <Header />
      <main className="bg-cream">
        <div className="mx-auto max-w-content px-5 py-16 sm:px-8 sm:py-24">
          <h1 className="font-head text-3xl font-bold text-ink sm:text-4xl">
            Blog
          </h1>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block overflow-hidden rounded-xl2 border border-line bg-white"
              >
                <img
                  src={post.image.src}
                  alt={post.image.alt}
                  width={post.image.width}
                  height={post.image.height}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="p-6">
                  <p className="text-xs text-ink/45">{post.datePublished}</p>
                  <h2 className="mt-2 font-head text-xl font-bold text-ink group-hover:underline">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-ink/65">
                    {post.summary}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
