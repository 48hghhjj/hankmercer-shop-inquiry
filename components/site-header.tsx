import { AUTHOR, BOOK_PRICE } from '@/lib/book'
import { CountdownTimer } from '@/components/countdown-timer'

const links = [
  { href: '#contents', label: 'The Playbook' },
  { href: '#inside', label: 'Inside' },
  { href: '#hank', label: 'Hank' },
  { href: '#faq', label: 'FAQ' },
]

export function SiteHeader() {
  return (
    <header>
      <a href="#contents" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-card focus:px-3 focus:py-2">
        Skip to book contents
      </a>
      <div className="bg-[#142739] py-2 text-center text-[11px] font-bold uppercase tracking-[0.2em] text-[#fbf8ea]">
        Instant digital delivery · 15-day money-back policy · <CountdownTimer className="text-primary" />
      </div>
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <span className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.2em]">
          <span className="h-1 w-5 bg-primary" aria-hidden="true" />
          {AUTHOR}
        </span>
        <nav className="hidden items-center gap-6 md:flex" aria-label="Page sections">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#offer"
          className="bg-primary px-4 py-2 text-xs font-black uppercase tracking-[0.1em] text-[#142739] transition-colors hover:brightness-95"
        >
          Get it · {BOOK_PRICE}
        </a>
      </div>
    </header>
  )
}
