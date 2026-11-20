import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div>
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

        <div className="relative mx-auto max-w-4xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
          <figure className="mx-auto mb-8 max-w-3xl text-left sm:mb-10">
            <blockquote className="border-l-2 border-primary pl-5 font-serif text-sm leading-relaxed text-foreground sm:pl-7 sm:text-base">
              <p>
                In evolutionary time, Homo sapiens emerged very recently, no more than 200,000 years ago. Humans have not physically evolved since, apart from some minor and inherently meaningless variations in skin color, hair, and body shape. According to the latest scientific research, everyone alive today is descended from a small group of anatomically modern humans, Homo sapiens, which emerged in East Africa. Recent genetic studies demonstrate that all mitochondria within human cells descend from a single woman, who lived in Africa between 150,000 and 200,000 years ago.
              </p>
            </blockquote>
            <figcaption className="mt-3 pl-5 text-xs text-muted-foreground sm:pl-7 sm:text-sm">
              (Kevin Kenny, <cite>Diaspora: A Very Short Introduction</cite> (Oxford: Oxford University Press, 2013), P.17)
            </figcaption>
          </figure>
          <h1 className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
            Public Debates and Global History
          </h1>
          <p className="mx-auto mt-3 max-w-2xl text-balance leading-relaxed text-muted-foreground sm:text-lg">
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

    </div>
  )
}
