import { AUTHOR, CONTACT_EMAIL } from '@/lib/book'

export function SiteFooter() {
  return (
    <footer className="mx-auto mt-8 flex max-w-5xl flex-col items-center gap-3 border-t border-border px-6 py-10 text-center text-xs text-muted-foreground">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">{AUTHOR}</p>
      <p>© 2026 {AUTHOR}.</p>
      <p className="max-w-md text-pretty">
        AI assisted the creation of this website, content, and images. Examples and photographs are illustrative.
      </p>
      <p>
        Contact:{' '}
        <a href={`mailto:${CONTACT_EMAIL}`} className="text-primary underline underline-offset-2">
          {CONTACT_EMAIL}
        </a>
      </p>
    </footer>
  )
}
