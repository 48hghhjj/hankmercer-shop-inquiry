import Image from 'next/image'
import { AUTHOR, BOOK_PAGES, BOOK_PRICE, BOOK_TITLE, chapters, faqs, gallery } from '@/lib/book'
import { BuyButton } from '@/components/buy-button'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-primary">{children}</p>
}

export function WhyThisBook() {
  return (
    <section className="mx-auto mt-20 max-w-2xl border-t border-border px-6 pt-14">
      <Eyebrow>Why this book</Eyebrow>
      <h2 className="mt-4 font-serif text-3xl leading-tight text-balance md:text-4xl">
        Don&apos;t let the small stuff ride all day.
      </h2>
      <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
        <p>
          The road is already demanding. A loose first ten minutes becomes a missing receipt, a scattered stop, an
          unanswered message from dispatch, and one more thing pulling at your attention.
        </p>
        <p>
          This book gives those pressure points a home: a repeatable way to land back home, keep paperwork findable,
          ask clearer questions, make room for the people waiting, and keep the habits that hold it all together.
        </p>
        <p>
          <strong className="font-semibold text-foreground">{BOOK_TITLE}</strong> is seventeen chapters of
          field-tested structure — not theory. Short guides, plain-language examples, and reusable worksheets you can
          come back to whenever they help.
        </p>
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
      <Eyebrow>
        17 chapters · {BOOK_PAGES} pages
      </Eyebrow>
      <h2 className="mt-4 font-serif text-3xl md:text-4xl">A simple operating system for the working life.</h2>
      <ol className="mt-8 flex flex-col">
        {chapters.map((chapter, index) => (
          <li key={chapter.range} className="flex gap-6 border-t border-border py-6">
            <span className="w-10 shrink-0 font-serif text-2xl text-primary">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                Chapters {chapter.range}
              </p>
              <h3 className="mt-1 font-serif text-xl">{chapter.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{chapter.description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function Gallery() {
  return (
    <section className="mx-auto mt-20 max-w-5xl border-t border-border px-6 pt-14 text-center">
      <Eyebrow>From inside the book</Eyebrow>
      <h2 className="mt-4 font-serif text-3xl md:text-4xl">The road and home, as they actually feel.</h2>
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

export function UseTheBook() {
  return (
    <section className="mx-auto mt-20 max-w-2xl border-t border-border px-6 pt-14">
      <Eyebrow>Built for parked moments</Eyebrow>
      <h2 className="mt-4 font-serif text-3xl md:text-4xl">Use the book. Don&apos;t just read it.</h2>
      <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
        <p>
          Run one worksheet for a week. Keep what earns its space. Then add the next one. That&apos;s the whole method —
          small, repeatable, and built for the ten minutes you actually have.
        </p>
      </div>
    </section>
  )
}

const worksheetHighlights = [
  'The 60-minute landing routine',
  'The trip envelope setup',
  'The read-back script for dispatch calls',
  'The per-kilometre math sheet',
  'The home-time plan',
]

export function Worksheets() {
  return (
    <section className="mx-auto mt-20 max-w-2xl border-t border-border px-6 pt-14">
      <Eyebrow>Keep the useful part close</Eyebrow>
      <h2 className="mt-4 font-serif text-3xl md:text-4xl">17 worksheets for the moments that matter.</h2>
      <ul className="mt-8 flex flex-col">
        {worksheetHighlights.map((item) => (
          <li key={item} className="flex items-baseline gap-3 border-t border-border py-4">
            <span className="text-primary" aria-hidden="true">
              →
            </span>
            <span className="font-serif text-lg">{item}</span>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
        …and twelve more. Every chapter ends with one — fill it in, keep it in the cab, come back to it.
      </p>
    </section>
  )
}

export function FromTheChannel() {
  return (
    <section className="mx-auto mt-20 max-w-2xl border-t border-border px-6 pt-14">
      <Eyebrow>From the channel</Eyebrow>
      <h2 className="mt-4 font-serif text-3xl md:text-4xl">The book behind the breakdowns.</h2>
      <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
        <p>
          Every video on the Hank Mercer channel ends in the same place: the decisions a working driver makes alone —
          in the cab, at the fuel island, at the kitchen table. This book is those decisions, written down.
        </p>
        <p>
          No single video covers it all. The playbook does — the checklists, the numbers, and the habits behind thirty
          years of staying sharp on the road and steady at home.
        </p>
      </div>
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

export function MeetHank() {
  return (
    <section className="mx-auto mt-20 max-w-5xl border-t border-border px-6 pt-14">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center md:flex-row md:text-left">
        <div className="relative aspect-square w-44 shrink-0 overflow-hidden rounded-sm">
          <Image
            src="/hank/hank-portrait.png"
            alt={`${AUTHOR} sitting in his den at home`}
            fill
            sizes="176px"
            className="object-cover"
          />
        </div>
        <div>
          <Eyebrow>The voice in the driver&apos;s seat</Eyebrow>
          <h2 className="mt-4 font-serif text-3xl md:text-4xl">Meet Hank.</h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Plainspoken. Practical. Thirty years of runs behind every page. Hank Mercer is the veteran-driver voice of
            the channel — the systems in this book are the ones that survived three decades of long hauls, bad weather,
            and kitchen tables.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section className="mx-auto mt-20 max-w-2xl border-t border-border px-6 pt-14">
      <Eyebrow>Straight answers</Eyebrow>
      <h2 className="mt-4 font-serif text-3xl md:text-4xl">Before you roll.</h2>
      <dl className="mt-8 flex flex-col">
        {faqs.map((faq) => (
          <div key={faq.q} className="border-t border-border py-6">
            <dt className="font-serif text-xl">{faq.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{faq.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="mx-auto mt-24 flex max-w-xl flex-col items-center px-6 text-center">
      <Eyebrow>The complete digital playbook</Eyebrow>
      <h2 className="mt-4 font-serif text-4xl leading-tight text-balance">{BOOK_TITLE}</h2>
      <p className="mt-4 font-serif text-2xl text-primary">{BOOK_PRICE} USD</p>
      <ul className="mt-6 flex w-full flex-col gap-2 text-left text-sm text-muted-foreground">
        <li className="border-t border-border py-3">66-page designed PDF, instant download</li>
        <li className="border-t border-border py-3">17 chapters, 17 reusable worksheets</li>
        <li className="border-t border-border py-3">Read it on your phone or print the pages</li>
        <li className="border-y border-border py-3">15-day money-back policy</li>
      </ul>
      <BuyButton className="mt-8" />
      <p className="mt-6 font-serif text-lg italic text-muted-foreground">
        One page. One week. One steadier mile at a time.
      </p>
      <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground">
        General organisation and communication ideas. No promise of increased pay or career advancement.
      </p>
    </section>
  )
}
