"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X, Landmark } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/podcasts", label: "Podcasts" },
  { href: "/gallery", label: "Gallery" },
  { href: "/support", label: "Support" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-serif text-lg font-semibold tracking-tight text-foreground"
          onClick={() => setOpen(false)}
        >
          <Landmark className="h-5 w-5 text-primary" aria-hidden="true" />
          <span>Public History Global</span>
        </Link>

        <nav className="hidden items-center gap-1 sm:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + "/")
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-sm px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors",
                  active
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-sm p-2 text-foreground sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t border-border sm:hidden"
        >
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-medium tracking-wide uppercase text-muted-foreground hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
