import Image from 'next/image'
import { BookCover } from '@/components/book-cover'
import { BuyButton } from '@/components/buy-button'
import { AUTHOR, BOOK_PAGES } from '@/lib/book'

export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 pt-12 text-center">
      <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">Everyday American trucking life</p>
      <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl">
        Home between
        <br />
        <em className="text-primary">the hauls.</em>
      </h1>
      <p className="mt-6 max-w-md text-pretty font-serif text-lg leading-relaxed text-muted-foreground">
        A practical companion for a smoother home time, clearer paperwork, and the ordinary parts of the job.
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
        <figure className="flex flex-col items-center gap-3">
          <BookCover />
          <figcaption className="text-xs text-muted-foreground">Your {BOOK_PAGES}-page digital companion</figcaption>
        </figure>
        <div className="flex w-full flex-col items-center gap-3">
          <BuyButton />
          <a href="#contents" className="text-xs font-medium text-foreground hover:text-primary">
            {'See what’s inside ↓'}
          </a>
        </div>
      </div>
    </section>
  )
}
