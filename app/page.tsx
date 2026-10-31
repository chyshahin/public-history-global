import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BookOpen, Mic, Images } from "lucide-react"
import { blogPosts, podcastEpisodes, galleryImages } from "@/lib/data"

export default function HomePage() {
  const latestPost = blogPosts[0]
  const latestEpisode = podcastEpisodes[0]
  const featuredGalleryItem = galleryImages[0]

  const recentWorks = [
    {
      kind: "Blog",
      icon: BookOpen,
      href: `/blog/${latestPost.slug}`,
      title: latestPost.title,
      meta: `${latestPost.region} · ${latestPost.readTime}`,
      image: latestPost.image,
    },
    {
      kind: "Podcast",
      icon: Mic,
      href: "/podcasts",
      title: latestEpisode.title,
      meta: `Episode ${latestEpisode.episodeNumber} · ${latestEpisode.duration}`,
      image: latestEpisode.image,
    },
    {
      kind: "Gallery",
      icon: Images,
      href: "/gallery",
      title: featuredGalleryItem.title,
      meta: featuredGalleryItem.era,
      image: featuredGalleryItem.image,
    },
  ]

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
        <div className="flex items-end justify-between gap-4">
          <h2 className="font-serif text-2xl font-semibold text-foreground sm:text-3xl">
            Recent works
          </h2>
        </div>
        <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
          A sample of our latest writing, audio, and visual research.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {recentWorks.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-colors hover:border-primary/60"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5">
                <div className="flex items-center gap-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
                  <item.icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {item.kind}
                </div>
                <h3 className="font-serif text-lg leading-snug text-balance text-foreground">
                  {item.title}
                </h3>
                <p className="mt-auto text-xs text-muted-foreground">{item.meta}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
