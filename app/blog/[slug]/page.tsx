import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { blogPosts } from "@/lib/data"

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) return {}
  return {
    title: `${post.title} | Public History Global`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
        Back to blog
      </Link>

      <header className="mt-6">
        <p className="text-xs font-semibold tracking-widest text-primary uppercase">
          {post.region}
        </p>
        <h1 className="mt-3 font-serif text-3xl leading-tight font-semibold text-balance text-foreground sm:text-4xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-sm border border-border">
        <Image src={post.image || "/placeholder.svg"} alt="" fill className="object-cover" />
      </div>

      <div className="mt-10 space-y-6">
        {post.body.map((paragraph, i) => (
          <p key={i} className="text-base leading-relaxed text-foreground/90 sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </article>
  )
}
