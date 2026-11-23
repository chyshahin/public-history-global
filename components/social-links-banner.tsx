import Image from "next/image"

const socialLinks = [
  {
    label: "X",
    value: "Chy Shahin",
    href: "https://x.com/Chyshahin",
    icon: "/social-icons/x.svg",
    external: true,
  },
  {
    label: "Facebook",
    value: "Chy Shahin",
    href: "https://www.facebook.com/Chyshahin",
    icon: "/social-icons/facebook.svg",
    external: true,
  },
  {
    label: "Yahoo",
    value: "chyshahin@yahoo.co.uk",
    href: "mailto:chyshahin@yahoo.co.uk",
    icon: "/social-icons/yahoo.svg",
    external: false,
  },
  {
    label: "Instagram",
    value: "Chy Shahin",
    href: "https://www.instagram.com/Chyshahin",
    icon: "/social-icons/instagram.svg",
    external: true,
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
                <Image
                  src={link.icon}
                  width={16}
                  height={16}
                  alt=""
                  aria-hidden="true"
                  className="size-4 shrink-0 object-contain"
                />
                <span>{link.value}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
