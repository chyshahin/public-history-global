import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div>
      <section
        aria-label="Site status"
        className="border-b-4 border-primary bg-primary px-4 py-10 text-center text-primary-foreground sm:py-14"
      >
        <p className="text-4xl font-black tracking-[0.12em] uppercase sm:text-6xl lg:text-8xl">
          Under Construction
        </p>
        <p className="mt-3 text-xs font-semibold tracking-[0.2em] uppercase sm:text-sm">
          Please check back soon
        </p>
      </section>

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="absolute inset-0">
          <Image
            src="/hero-archive-historical-maps.png"
            alt=""
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6 sm:py-32 lg:px-8">
          <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Public Debates and Global History
          </p>
          <h1 className="mt-5 font-serif text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl">
            PublicHistoryGlobal
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance leading-relaxed text-muted-foreground sm:text-lg">
            PublicHistoryGlobal is dedicated to enhancing understanding of historical contexts by
            facilitating collaborative discussions and insights, especially in an era characterised
            by the rise of &apos;alternative&apos; information, to foster social cohesion, tolerance, and
            peaceful coexistence—emphasising historical and rational arguments, which are a
            fundamental cornerstone of the development of our civilisation. Our mission is to engage
            with current global debates surrounding social, cultural, and political issues, while
            rigorously verifying these discussions with historical knowledge. We examine the origins
            of these debates, their evolution over time, and their ongoing influence on contemporary
            discourse. Join us in exploring key narratives that are shaping our world.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Read the blog
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/podcasts"
              className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Listen to episodes
            </Link>
          </div>
        </div>
      </section>

      {/* Recent works */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="border border-border bg-card px-6 py-16 text-center sm:px-10 sm:py-24">
          <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            Recent works
          </h2>
          <p className="mt-4 text-lg font-semibold tracking-wide text-primary uppercase sm:text-2xl">
            Check back soon
          </p>
        </div>
      </section>
    </div>
  )
}
