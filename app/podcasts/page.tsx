import type { Metadata } from "next"
import Image from "next/image"
import { podcastEpisodes } from "@/lib/data"
import { PodcastPlayer } from "@/components/podcast-player"

export const metadata: Metadata = {
  title: "Podcasts | Public History Global",
  description:
    "Narrative history podcast episodes from Public History Global, covering global history in depth.",
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function PodcastsPage() {
  const [latest, ...rest] = podcastEpisodes

  return (
    <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Podcasts</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Conversations in history
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Long-form episodes exploring one topic at a time, researched with the same rigor as our
          written work.
        </p>
      </header>

      {/* Latest episode, featured */}
      <section className="mt-10 overflow-hidden rounded-sm border border-border bg-card">
        <div className="grid sm:grid-cols-[220px_1fr]">
          <div className="relative aspect-square sm:aspect-auto">
            <Image
              src={latest.image || "/placeholder.svg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col gap-3 p-6 sm:p-8">
            <p className="text-xs font-semibold tracking-widest text-primary uppercase">
              Latest · Episode {latest.episodeNumber}
            </p>
            <h2 className="font-serif text-xl leading-snug text-balance text-foreground sm:text-2xl">
              {latest.title}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">{latest.description}</p>
            <p className="text-xs text-muted-foreground">
              {formatDate(latest.date)} · {latest.duration}
            </p>
            <div className="mt-2">
              <PodcastPlayer episode={latest} />
            </div>
          </div>
        </div>
      </section>

      {/* All episodes */}
      <section className="mt-14">
        <h2 className="font-serif text-xl font-semibold text-foreground sm:text-2xl">
          All episodes
        </h2>

        <ul className="mt-6 divide-y divide-border border-t border-border">
          {rest.map((episode) => (
            <li key={episode.slug} className="py-6">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-sm">
                  <Image
                    src={episode.image || "/placeholder.svg"}
                    alt=""
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                    Episode {episode.episodeNumber}
                  </p>
                  <h3 className="mt-1 font-serif text-lg leading-snug text-balance text-foreground">
                    {episode.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {episode.description}
                  </p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {formatDate(episode.date)} · {episode.duration}
                  </p>
                  <div className="mt-3 max-w-md">
                    <PodcastPlayer episode={episode} />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
