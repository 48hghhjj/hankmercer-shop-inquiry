import Image from 'next/image'
import { BookCover } from '@/components/book-cover'
import { BuyButton } from '@/components/buy-button'
import { BOOK_PAGES } from '@/lib/book'

export function Hero() {
  return (
    <section className="mx-auto grid max-w-5xl items-center gap-10 px-6 pt-12 md:grid-cols-2">
      <div className="text-center md:text-left">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-foreground">
          A field guide for the road ahead
        </p>
        <h1 className="mt-5 text-4xl font-black leading-[1.02] tracking-tight text-balance md:text-6xl">
          A working driver&apos;s playbook for staying sharp, organized, and steady on the long haul.
        </h1>
        <p className="mt-5 text-sm font-bold tracking-[0.06em] text-foreground">
          17 chapters. 17 worksheets. Zero fluff.
        </p>
        <div className="mx-auto mt-6 max-w-sm md:mx-0">
          <BuyButton />
        </div>
        <p className="mt-5 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {BOOK_PAGES} designed pages · Secure digital delivery · 15-day money-back policy
        </p>
      </div>
      <div className="relative mx-auto w-fit">
        <BookCover />
        <span
          aria-hidden="true"
          className="absolute -right-5 bottom-10 rotate-3 bg-primary px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-[#142739] shadow-md"
        >
          Playbook · 01
        </span>
      </div>
    </section>
  )
}
