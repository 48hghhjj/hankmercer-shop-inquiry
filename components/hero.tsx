import Link from 'next/link'
import { ArrowDown } from 'lucide-react'

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pb-24 md:pt-28">
      <p className="mb-6 text-xs uppercase tracking-[0.25em] text-primary">Digital goods for working creatives</p>
      <h1 className="max-w-4xl text-balance font-serif text-5xl leading-[1.05] md:text-7xl">
        Tools, textures, and templates <em className="text-primary">made by hand.</em>
      </h1>
      <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <p className="max-w-md text-pretty leading-relaxed text-muted-foreground">
          A small shop of instant downloads I use in my own work every day. Built to save you hours and make your
          projects feel a little more human.
        </p>
        <Link
          href="#shop"
          className="inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Browse the shop
          <ArrowDown className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
