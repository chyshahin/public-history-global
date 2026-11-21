import type { Metadata } from "next"
import { readFileSync } from "node:fs"
import { join } from "node:path"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { blogPosts } from "@/lib/data"
import { BlogBanner } from "@/components/blog-banner"

function formatDate(dateStr: string) {
  if (/^\d{4}$/.test(dateStr)) return dateStr

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
    title: `${post.title} | PublicHistory.Online`,
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
    <>
      <BlogBanner />
      <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-muted-foreground uppercase hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
          Back to blog
        </Link>

        {slug !== "bangladesh-july-24-revolution" ? (
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
        ) : null}

      {post.image ? (
        <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-sm border border-border">
          <Image src={post.image} alt="" fill className="object-cover" />
        </div>
      ) : null}

      {slug === "indian-cotton-globalisation-industrialisation" ? (
        <div className="mt-10 space-y-6">
          {readFileSync(
            join(process.cwd(), "public/indian-cotton-article.txt"),
            "utf8",
          )
            .split(/\r?\n/)
            .slice(3)
            .map((line, index) => {
              const text = line.trim()
              if (!text) return null
              const sectionHeadings = new Set([
                "INTRODUCTION",
                "Indian Cotton, History, Trade, and Globalisation",
                "Globalisation and Indian Cotton",
                "Empire, Imitation and Industrialisation",
                "Summary",
                "Conclusion",
                "Bibliography",
              ])
              return sectionHeadings.has(text) ? (
                <h2
                  key={index}
                  className="pt-4 font-serif text-2xl font-semibold text-foreground sm:text-3xl"
                >
                  {text}
                </h2>
              ) : (
                <p
                  key={index}
                  className="text-base leading-relaxed text-foreground/90 sm:text-lg"
                >
                  {text}
                </p>
              )
            })}
        </div>
      ) : slug === "bangladesh-july-24-revolution" ? (
        <pre className="mt-10 whitespace-pre-wrap break-words font-sans text-base leading-relaxed text-foreground/90 sm:text-lg">
          {readFileSync(join(process.cwd(), "public/july-24-revolution.txt"), "utf8")}
        </pre>
      ) : (
        <div className="mt-10 space-y-6">
          {post.body.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-foreground/90 sm:text-lg">
              {paragraph}
            </p>
          ))}
        </div>
      )}
      </article>
    </>
  )
}
