import Image from "next/image"

export function BlogBanner() {
  return (
    <div className="w-full overflow-hidden bg-background">
      <Image
        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Global%20History%20Through%20the%20Ages-v9Y4Nx0C79eJ7Za64L7X0Gd2PFn27L.png"
        alt="A world history timeline illustrating prehistory, ancient, classical, medieval, early modern, and modern eras with historic landmarks and artifacts."
        width={1672}
        height={940}
        priority
        sizes="100vw"
        className="h-auto w-full"
      />
    </div>
  )
}
