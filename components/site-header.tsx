import { AUTHOR, BOOK_PRICE, BOOK_TITLE } from '@/lib/book'

export function SiteHeader() {
  return (
    <header>
      <a href="#contents" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:bg-card focus:px-3 focus:py-2">
        Skip to book contents
      </a>
      <div className="bg-secondary py-2 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        {BOOK_TITLE} · {BOOK_PRICE}
      </div>
      <div className="mx-auto flex max-w-5xl items-center justify-between border-b border-border px-6 py-5">
        <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em]">
          <span className="h-0.5 w-5 bg-primary" aria-hidden="true" />
          {AUTHOR}
        </span>
        <span className="hidden text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:block">{BOOK_TITLE}</span>
      </div>
    </header>
  )
}
