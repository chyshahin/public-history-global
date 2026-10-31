"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import type { GalleryImage } from "@/lib/data"

export function GalleryGrid({ images }: { images: GalleryImage[] }) {
  const [activeSlug, setActiveSlug] = useState<string | null>(null)
  const active = images.find((img) => img.slug === activeSlug) ?? null

  return (
    <>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
        {images.map((img) => (
          <button
            key={img.slug}
            type="button"
            onClick={() => setActiveSlug(img.slug)}
            className="group relative aspect-square overflow-hidden rounded-sm border border-border text-left"
          >
            <Image
              src={img.image || "/placeholder.svg"}
              alt={img.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 to-transparent p-3">
              <p className="text-xs font-semibold text-foreground">{img.title}</p>
              <p className="text-[11px] text-muted-foreground">{img.era}</p>
            </div>
          </button>
        ))}
      </div>

      <Dialog open={Boolean(active)} onOpenChange={(open) => !open && setActiveSlug(null)}>
        <DialogContent className="max-w-3xl gap-0 overflow-hidden border-border bg-card p-0">
          {active && (
            <>
              <DialogTitle className="sr-only">{active.title}</DialogTitle>
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={active.image || "/placeholder.svg"}
                  alt={active.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold tracking-widest text-primary uppercase">
                  {active.era}
                </p>
                <h3 className="mt-1 font-serif text-xl text-foreground">{active.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {active.caption}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
