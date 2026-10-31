"use client"

import { Play } from "lucide-react"
import type { PodcastEpisode } from "@/lib/data"

export function PodcastPlayer({ episode }: { episode: PodcastEpisode }) {
  const hasAudio = Boolean(episode.audioSrc)

  if (!hasAudio) {
    return (
      <div
        className="flex items-center gap-3 rounded-sm border border-dashed border-border bg-muted/40 px-4 py-3 text-xs text-muted-foreground"
        role="status"
      >
        <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border">
          <Play className="h-3.5 w-3.5" aria-hidden="true" />
        </span>
        Audio for this episode is coming soon.
      </div>
    )
  }

  return (
    <div className="rounded-sm border border-border bg-secondary/60 px-4 py-3">
      <audio
        src={episode.audioSrc}
        className="w-full"
        controls
        preload="none"
        aria-label={`Audio player for ${episode.title}`}
      >
        <track kind="captions" />
      </audio>
    </div>
  )
}
