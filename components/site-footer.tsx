import Link from "next/link"
import { Mail, MapPin, Landmark } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2 font-serif text-base font-semibold text-foreground">
              <Landmark className="h-4 w-4 text-primary" aria-hidden="true" />
              Public History Global
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Rigorously researched history, told plainly, for a global audience.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Explore
            </h2>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <Link href="/blog" className="text-foreground/80 hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/podcasts" className="text-foreground/80 hover:text-primary">
                  Podcasts
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-foreground/80 hover:text-primary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-foreground/80 hover:text-primary">
                  Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
              Contact
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-foreground/80">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
                <a href="mailto:editors@publichistoryglobal.org" className="hover:text-primary">
                  editors@publichistoryglobal.org
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>Public History Global, PO Box 1848, Remote Editorial Collective</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Public History Global. All rights reserved.</p>
          <p>Committed to accurate, source-based history.</p>
        </div>
      </div>
    </footer>
  )
}
