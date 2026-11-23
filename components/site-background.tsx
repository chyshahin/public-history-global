'use client'

import { usePathname } from 'next/navigation'
import type { ReactNode } from 'react'

type SiteBackgroundProps = {
  children: ReactNode
}

export function SiteBackground({ children }: SiteBackgroundProps) {
  const pathname = usePathname()
  const isBlogRoute = pathname === '/blog' || pathname.startsWith('/blog/')

  return (
    <div className={`flex min-h-screen flex-col${isBlogRoute ? '' : ' site-image-background'}`}>
      {children}
    </div>
  )
}
