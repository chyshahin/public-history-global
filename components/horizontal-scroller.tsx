"use client"

import { useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function HorizontalScroller({ children }: { children: React.ReactNode }) {
  const scrollerRef = useRef<HTMLDivElement>(null)

  const scrollBy = (direction: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: direction * Math.min(el.clientWidth * 0.9, 640), behavior: "smooth" })
  }

  return (
    <div className="relative">
      <div
        ref={scrollerRef}
        className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth pb-2"
      >
        {children}
      </div>

      <div className="mt-4 hidden justify-end gap-2 sm:flex">
        <button
          type="button"
          onClick={() => scrollBy(-1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          aria-label="Scroll left"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => scrollBy(1)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-border text-foreground transition-colors hover:border-primary hover:text-primary"
          aria-label="Scroll right"
        >
          <ChevronRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
