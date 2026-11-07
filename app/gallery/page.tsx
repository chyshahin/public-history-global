import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "Gallery | Public History Global",
  description: "A visual archive of historical artifacts, sites, and artwork.",
}

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Gallery</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          A visual archive
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Artifacts, sites, and artwork from across history. Select an image for more detail and
          sourcing notes.
        </p>
      </header>

    </div>
  )
}
