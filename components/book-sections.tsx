import Image from 'next/image'
import { BuyButton } from '@/components/buy-button'
import { BOOK_PAGES, BOOK_TITLE, chapters, gallery } from '@/lib/book'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{children}</p>
}

export function Intro() {
  return (
    <section className="mx-auto mt-20 max-w-2xl border-t border-border px-6 pt-14">
      <Eyebrow>A book for the parts that add up</Eyebrow>
      <h2 className="mt-4 font-serif text-3xl leading-tight text-balance md:text-4xl">
        The paperwork. The phone calls.
        <br />
        The bag by the door you never quite unpack.
      </h2>
      <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
        <p>
          A lot of life happens around the driving. A receipt you need to find. A message to dispatch that could be
          clearer. A few days at home that go by faster than they should.
        </p>
        <p>
          <strong className="font-semibold text-foreground">{BOOK_TITLE}</strong> puts those everyday details in one
          place. Short guides, plain-language examples, and reusable worksheets you can come back to whenever they help.
        </p>
        <p>No need to adopt a whole new system. Start with the one small thing you want to make easier.</p>
      </div>
    </section>
  )
}

export function WideImage() {
  return (
    <figure className="mx-auto mt-16 max-w-5xl px-6">
      <div className="relative aspect-[21/9] w-full overflow-hidden rounded-sm">
        <Image
          src="/hank/driveway.png"
          alt="A blue semi truck parked beside a farmhouse at golden hour"
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 font-serif text-sm italic text-muted-foreground">
        Ordinary places. Everyday working life.
      </figcaption>
    </figure>
  )
}

export function Chapters() {
  return (
    <section id="contents" className="mx-auto mt-20 max-w-2xl scroll-mt-8 px-6">
      <Eyebrow>17 chapters · {BOOK_PAGES} pages</Eyebrow>
      <h2 className="mt-4 font-serif text-3xl md:text-4xl">{'What’s in the companion'}</h2>
      <ol className="mt-8 flex flex-col">
        {chapters.map((chapter) => (
          <li key={chapter.range} className="flex gap-6 border-t border-border py-6">
            <span className="w-12 shrink-0 pt-1 text-xs font-semibold text-primary">{chapter.range}</span>
            <div>
              <h3 className="font-serif text-xl">{chapter.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{chapter.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function SampleQuote() {
  return (
    <section className="mx-auto mt-16 max-w-2xl border-t border-border px-6 pt-14">
      <Eyebrow>Pick a page. Make it yours.</Eyebrow>
      <h2 className="mt-4 font-serif text-3xl md:text-4xl">Useful words for an ordinary question.</h2>
      <blockquote className="mt-8 border-l-2 border-primary pl-6 font-serif text-2xl leading-snug text-primary">
        {'“I have the pickup number. Could you also confirm which appointment time goes with this load?”'}
      </blockquote>
      <p className="mt-6 leading-relaxed text-muted-foreground">
        {'That’s the spirit of the book: name the question, separate what’s known from what’s still open, and keep the next step clear.'}
      </p>
    </section>
  )
}

export function Gallery() {
  return (
    <section className="mx-auto mt-20 max-w-5xl border-t border-border px-6 pt-14 text-center">
      <Eyebrow>Life between hauls</Eyebrow>
      <h2 className="mt-4 font-serif text-3xl md:text-4xl">A few pages from the everyday.</h2>
      <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
        {gallery.map((item, index) => (
          <figure key={item.src} className={index === 1 ? 'md:mt-12' : ''}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <Image src={item.src} alt={item.alt} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            </div>
            <figcaption className="mt-3 font-serif text-sm italic text-muted-foreground">{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="mx-auto mt-24 flex max-w-xl flex-col items-center px-6 text-center">
      <Eyebrow>{BOOK_TITLE}</Eyebrow>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-balance">
        A place to start.
        <br />A book to come back to.
      </h2>
      <p className="mt-4 text-muted-foreground">Everyday organisation, clearer conversations, and better home time.</p>
      <BuyButton className="mt-8" />
      <p className="mt-6 text-[11px] leading-relaxed text-muted-foreground">
        General organisation and communication ideas. No promise of increased pay or career advancement.
      </p>
    </section>
  )
}
