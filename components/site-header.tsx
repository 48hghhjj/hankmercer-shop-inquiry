import Link from 'next/link'
import { inquiryHref } from '@/lib/products'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link href="/" className="font-serif text-2xl tracking-tight">
          Hank Mercer
        </Link>
        <nav aria-label="Main" className="flex items-center gap-6 text-sm">
          <Link href="/#shop" className="text-muted-foreground transition-colors hover:text-foreground">
            Shop
          </Link>
          <Link href="/#about" className="text-muted-foreground transition-colors hover:text-foreground">
            About
          </Link>
          <a
            href={inquiryHref()}
            className="rounded-full border border-border px-4 py-1.5 transition-colors hover:border-primary hover:text-primary"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
