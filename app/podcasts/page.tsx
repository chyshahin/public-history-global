import type { Metadata } from "next"
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

    </div>
  )
}
