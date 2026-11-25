import type { Metadata } from "next"
import { readFileSync } from "node:fs"
import { join } from "node:path"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { blogPosts } from "@/lib/data"
import { BlogBanner } from "@/components/blog-banner"
import { cn } from "@/lib/utils"

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

  const northamptonText =
    slug === "unveiling-northampton-castle-history"
      ? readFileSync(join(process.cwd(), "public/northampton-castle-article.txt"), "utf8")
      : ""
  const [northamptonTitle = "", ...northamptonBodyLines] = northamptonText.split(/\r?\n/)
  const empoweringArticleText =
    slug === "empowering-global-and-public-history"
      ? readFileSync(
          join(process.cwd(), "public/empowering-global-and-public-history-article.txt"),
          "utf8",
        )
          .replace(/\r\n?/g, "\n")
          .split("\n")
          .filter((line) => !/^\s*\d+\s*$/.test(line))
          .join("\n")
          .replace(/\n{3,}/g, "\n\n")
          .trim()
      : ""
  const [empoweringTitleFirst = "", empoweringTitleSecond = "", empoweringAuthorLine = "", ...empoweringBodyLines] =
    empoweringArticleText.split("\n")
  const empoweringArticleTitle = `${empoweringTitleFirst.trimEnd()} ${empoweringTitleSecond.trimStart()}`

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

        {slug !== "bangladesh-july-24-revolution" &&
        slug !== "unveiling-northampton-castle-history" &&
        slug !== "empowering-global-and-public-history" ? (
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
        <div
          className={cn(
            "relative mt-8 overflow-hidden rounded-sm border border-border",
            post.slug === "empowering-global-and-public-history"
              ? "aspect-[3/2] bg-background"
              : "aspect-[16/9]",
          )}
        >
          <Image
            src={post.image}
            alt={
              post.slug === "empowering-global-and-public-history"
                ? "Infographic comparing the printing press, digital media, and generative AI as communication revolutions shaping global debate."
                : ""
            }
            fill
            className={
              post.slug === "empowering-global-and-public-history"
                ? "object-contain"
                : "object-cover"
            }
          />
        </div>
      ) : null}

      {slug === "empowering-global-and-public-history" ? (
        <>
          <header className="mt-10">
            <h1 className="font-serif text-3xl leading-tight font-semibold text-balance text-foreground sm:text-4xl">
              {empoweringArticleTitle}
            </h1>
            <p className="mt-4 text-sm text-muted-foreground sm:text-base">
              {empoweringAuthorLine}
            </p>
          </header>
          <pre className="mt-8 whitespace-pre-wrap break-words font-sans text-base leading-relaxed text-foreground/90 sm:text-lg">
            {empoweringBodyLines.join("\n")}
          </pre>
          <section className="mt-10 border-t border-border pt-6" aria-labelledby="transcription-source">
            <h2 id="transcription-source" className="font-serif text-xl font-semibold text-foreground">
              Bibliographic source
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Shahin, Chy. “Empowering Global and Public History: Unlocking the Transformative Potential of Digital Media.” PDF manuscript, 7 December 2025. Author-provided source document. The article&apos;s original notes and further readings are reproduced above.
            </p>
          </section>
        </>
      ) : slug === "indian-cotton-globalisation-industrialisation" ? (
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
      ) : slug === "unveiling-northampton-castle-history" ? (
        <div className="mt-6">
          <h1 className="font-serif text-3xl leading-tight font-semibold text-balance text-foreground sm:text-4xl">
            {northamptonTitle}
          </h1>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Northampton%20Castle_%20Fortress%20to%20Park-b8CrduS3zNxd0PD5EHV4DbTvc44rXt.png"
            alt="A timeline infographic tracing Northampton Castle from its 11th-century Norman motte and bailey to the modern Castle Park."
            width={1680}
            height={940}
            unoptimized
            className="mt-6 h-auto w-full rounded-sm border border-border"
          />
          <pre className="mt-8 whitespace-pre-wrap break-words font-sans text-base leading-relaxed text-foreground/90 sm:text-lg">
            {northamptonBodyLines.join("\n")}
          </pre>
        </div>
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
