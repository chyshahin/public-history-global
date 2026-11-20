import type { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/lib/data"
export const metadata: Metadata = {
  title: "Blog | Public History Global",
  description:
    "Long-form, source-based history writing from Public History Global, covering every era and region.",
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Blog</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Essays &amp; long-form history
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Every piece is written from primary and peer-reviewed sources, and revised as new
          scholarship comes to light.
        </p>
      </header>

      <section className="mt-10 grid gap-5 sm:mt-12" aria-label="Blog posts">
        {blogPosts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-sm border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-muted/40 sm:p-8"
          >
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
              {post.region}
            </p>
            <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-foreground group-hover:text-primary sm:text-3xl">
              {post.title}
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {post.excerpt}
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground sm:text-sm">
              <span>{post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
          </Link>
        ))}
      </section>
    </div>
  )
}
