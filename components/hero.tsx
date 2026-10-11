import Image from 'next/image'
import { BookCover } from '@/components/book-cover'
import { BuyButton } from '@/components/buy-button'
import { AUTHOR, BOOK_PAGES } from '@/lib/book'

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-12 text-center">
      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground">From the Hank Mercer channel</p>
      <h1 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight text-balance md:text-7xl">
        Sharp on the road.
        <br />
        <span className="bg-primary px-3">Steady at home.</span>
      </h1>
      <p className="mt-6 max-w-md text-pretty text-lg leading-relaxed text-muted-foreground">
        The working driver&apos;s playbook for staying sharp, organized, and steady — on the long haul and between hauls.
      </p>
      <p className="mt-4 text-sm font-bold tracking-[0.08em] text-foreground">
        17 chapters. 17 worksheets. Zero fluff.
      </p>

      <div className="relative mt-10 aspect-video w-full max-w-3xl overflow-hidden rounded-sm">
        <Image
          src="/hank/hank-portrait.png"
          alt={`${AUTHOR} sitting in his den at home`}
          fill
          priority
          sizes="(min-width: 768px) 768px, 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-10 flex w-full max-w-xl flex-col items-center gap-8 sm:flex-row sm:items-center">
        <figure className="relative flex flex-col items-center gap-3">
          <BookCover />
          <span
            aria-hidden="true"
            className="absolute -right-4 top-6 rotate-3 bg-primary px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-[#142739] shadow-md"
          >
            Field-tested
          </span>
          <figcaption className="text-xs text-muted-foreground">Your {BOOK_PAGES}-page digital companion</figcaption>
        </figure>
        <div className="flex w-full flex-col items-center gap-3">
          <BuyButton />
          <a href="#contents" className="text-xs font-medium text-foreground hover:text-primary">
            {'See what’s inside ↓'}
          </a>
        </div>
      </div>
      <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
        {BOOK_PAGES} designed pages · Secure digital delivery · 15-day money-back policy
      </p>
    </section>
  )
}
