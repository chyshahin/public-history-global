import type { Metadata } from "next"
import { ExternalLink, BookOpen, Mic, ShieldCheck } from "lucide-react"

export const metadata: Metadata = {
  title: "Support | Public History Global",
  description:
    "Support independent, source-based history writing and podcasting from Public History Global.",
}

const PAYPAL_URL = "https://www.paypal.com/donate/?hosted_button_id=REPLACE_WITH_YOUR_ID"

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">Support</p>
        <h1 className="mt-3 font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Keep independent history writing going
        </h1>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Public History Global is reader- and listener-supported. Contributions go directly
          toward research time, audio production, and keeping our work free and ad-light for
          everyone.
        </p>
      </header>

      <div className="mt-10 rounded-sm border border-border bg-card p-6 sm:p-10">
        <div className="flex flex-col items-start gap-5">
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-primary uppercase">
            <ShieldCheck className="h-4 w-4" aria-hidden="true" />
            One-time or recurring
          </div>
          <h2 className="font-serif text-xl text-foreground sm:text-2xl">Donate via PayPal</h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Every contribution, of any size, helps fund the archival research, fact-checking, and
            production that goes into each post and episode.
          </p>
          <a
            href={PAYPAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Donate on PayPal
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
          <p className="text-xs text-muted-foreground">
            You will be redirected to PayPal to complete your donation securely.
          </p>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        <div className="rounded-sm border border-border p-6">
          <BookOpen className="h-5 w-5 text-primary" aria-hidden="true" />
          <h3 className="mt-3 font-serif text-base text-foreground">Fund new essays</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Long-form pieces take weeks of primary-source research. Your support funds that time.
          </p>
        </div>
        <div className="rounded-sm border border-border p-6">
          <Mic className="h-5 w-5 text-primary" aria-hidden="true" />
          <h3 className="mt-3 font-serif text-base text-foreground">Fund new episodes</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Recording, editing, and hosting costs for every podcast episode we release.
          </p>
        </div>
      </div>
    </div>
  )
}
