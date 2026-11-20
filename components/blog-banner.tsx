import Image from "next/image"

export function BlogBanner() {
  return (
    <div className="relative h-32 overflow-hidden sm:h-40 lg:h-48" aria-hidden="true">
      <Image
        src="/global-history-banner.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background" />
    </div>
  )
}
