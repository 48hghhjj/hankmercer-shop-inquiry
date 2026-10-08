import { INQUIRY_EMAIL } from '@/lib/products'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-8 text-sm text-muted-foreground md:flex-row md:justify-between">
        <p>{`© ${new Date().getFullYear()} Hank Mercer. All rights reserved.`}</p>
        <a href={`mailto:${INQUIRY_EMAIL}`} className="hover:text-foreground">
          {INQUIRY_EMAIL}
        </a>
      </div>
    </footer>
  )
}
