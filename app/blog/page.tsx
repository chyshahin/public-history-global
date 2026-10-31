import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/data"
import { HorizontalScroller } from "@/components/horizontal-scroller"

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
  const [latest, ...rest] = blogPosts

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

      {/* Featured latest post */}
      <Link
        href={`/blog/${latest.slug}`}
        className="group mt-10 grid overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-primary/60 sm:grid-cols-2"
      >
        <div className="relative aspect-[16/10] sm:aspect-auto">
          <Image
            src={latest.image || "/placeholder.svg"}
            alt=""
            fill
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-col justify-center gap-4 p-6 sm:p-10">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase">
            <span>Latest</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-muted-foreground">{latest.region}</span>
          </div>
          <h2 className="font-serif text-2xl leading-snug text-balance text-foreground sm:text-3xl">
            {latest.title}
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
            {latest.excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span>{latest.author}</span>
            <span>·</span>
            <span>{formatDate(latest.date)}</span>
            <span>·</span>
            <span>{latest.readTime}</span>
          </div>
          <span className="mt-1 inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Read the full piece
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </Link>

      {/* Archive - horizontal scroll */}
      <section className="mt-16">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
            More from the archive
          </h2>
          <p className="hidden text-xs text-muted-foreground sm:block">Scroll for more →</p>
        </div>

        <div className="mt-6">
          <HorizontalScroller>
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex w-72 shrink-0 flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-primary/60 sm:w-80"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-2 p-5">
                  <div className="text-xs font-semibold tracking-widest text-primary uppercase">
                    {post.region}
                  </div>
                  <h3 className="font-serif text-base leading-snug text-balance text-foreground">
                    {post.title}
                  </h3>
                  <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <p className="mt-auto text-xs text-muted-foreground">
                    {formatDate(post.date)} · {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </HorizontalScroller>
        </div>
      </section>
    </div>
  )
}
