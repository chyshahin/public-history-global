const socialLinks = [
  {
    label: "X",
    value: "Chyshahin",
    href: "https://x.com/Chyshahin",
    external: true,
  },
  {
    label: "Facebook",
    value: "Chyshahin",
    href: "https://www.facebook.com/Chyshahin",
    external: true,
  },
  {
    label: "Email",
    value: "chyshahin@yahoo.co.uk",
    href: "mailto:chyshahin@yahoo.co.uk",
    external: false,
  },
]

export function SocialLinksBanner() {
  return (
    <nav
      aria-label="Social media and email"
      className="border-b border-border bg-muted/70"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 sm:px-6 lg:px-8">
        <p className="text-[10px] font-semibold tracking-[0.18em] text-muted-foreground uppercase">
          Connect
        </p>
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={`${link.label}: ${link.value}`}
                className="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary focus-visible:text-primary"
              >
                <span className="font-semibold text-primary">{link.label}</span>
                <span>{link.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
