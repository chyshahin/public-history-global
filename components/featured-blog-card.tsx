import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/data"
import { cn } from "@/lib/utils"

type FeaturedBlogCardProps = {
  className?: string
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function FeaturedBlogCard({ className = "" }: FeaturedBlogCardProps) {
  const post = blogPosts[0]
  if (!post) return null

  const postHref = `/blog/${post.slug}`

  return (
    <article
      className={cn("overflow-hidden rounded-sm border border-border bg-card", className)}
    >
      <div className="grid md:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <Link
          href={postHref}
          aria-label={`Read ${post.title}`}
          className="relative block aspect-[3/2] bg-background md:aspect-auto md:min-h-[320px]"
        >
          <Image
            src={post.image}
            alt="Infographic comparing the printing press, digital media, and generative AI as communication revolutions shaping global debate."
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain"
          />
        </Link>

        <div className="flex flex-col items-start justify-center p-6 sm:p-8">
          <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">
            Featured article <span aria-hidden="true">·</span> {post.region}
          </p>
          <h2 className="mt-3 font-serif text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            <Link href={postHref} className="transition-colors hover:text-primary">
              {post.title}
            </Link>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {post.excerpt}
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground sm:text-sm">
            <span>{post.author}</span>
            <span aria-hidden="true">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{post.readTime}</span>
          </div>
          <Link
            href={postHref}
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-75"
          >
            Read the article
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  )
}
