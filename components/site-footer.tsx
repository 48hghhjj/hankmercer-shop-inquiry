import { AUTHOR, CONTACT_EMAIL } from '@/lib/book'

export function SiteFooter() {
  return (
    <footer className="bg-[#142739] text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-6 px-6 py-10 text-xs md:grid-cols-[1fr_auto]">
        <div className="flex flex-col gap-2">
          <p className="inline-flex items-center gap-3 text-sm font-black uppercase tracking-[0.15em] text-white">
            <span aria-hidden="true" className="h-1.5 w-8 bg-primary" />
            {AUTHOR}
          </p>
          <p className="text-[#becbd3]">© 2026 {AUTHOR}. All rights reserved.</p>
          <p className="max-w-xl text-[#becbd3]">
            AI assisted the creation of this website, content, and images. Examples and photographs are illustrative.
          </p>
        </div>
        <p className="text-[#becbd3]">
          Contact:{' '}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-bold text-white underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
    </footer>
  )
}
