import Image from 'next/image'
import { AUTHOR, BOOK_PAGES, BOOK_PRICE, BOOK_TITLE, chapters, faqs, gallery } from '@/lib/book'
import { BuyButton } from '@/components/buy-button'
import { CountdownBoxes } from '@/components/countdown-timer'

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      className={`inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] ${
        light ? 'text-white' : 'text-[#294a68]'
      }`}
    >
      <span aria-hidden="true" className="h-1.5 w-12 bg-primary" />
      {children}
    </p>
  )
}

export function SignalBand() {
  const items = ['Less paperwork chase', 'Clearer dispatch calls', 'Steadier home time']
  return (
    <div className="bg-primary py-5" aria-label="What the book delivers">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-2 px-6">
        {items.map((item) => (
          <span key={item} className="flex items-center gap-10">
            <span className="text-xs font-black uppercase tracking-[0.15em] text-[#142739]">{item}</span>
            <span aria-hidden="true" className="hidden h-2 w-2 rotate-45 bg-[#294a68] sm:block" />
          </span>
        ))}
      </div>
    </div>
  )
}

export function WhyThisBook() {
  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[0.45fr_1.55fr] md:py-28">
      <p
        aria-hidden="true"
        className="select-none text-7xl font-black uppercase leading-[0.8] tracking-tight text-[#142739]/10 md:text-8xl"
      >
        Why
        <br />
        this
        <br />
        book
      </p>
      <div className="max-w-2xl">
        <Eyebrow>Why this book</Eyebrow>
        <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#294a68] md:text-6xl">
          Don&apos;t let the small stuff ride all day.
        </h2>
        <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
          <p className="text-lg font-bold leading-snug text-foreground">
            The road is already demanding. A loose first ten minutes becomes a missing receipt, a scattered stop, an
            unanswered message from dispatch, and one more thing pulling at your attention.
          </p>
          <p>
            This book gives those pressure points a home: a repeatable way to land back home, keep paperwork findable,
            ask clearer questions, make room for the people waiting, and keep the habits that hold it all together.
          </p>
          <p>
            <strong className="font-bold text-foreground">{BOOK_TITLE}</strong> is seventeen chapters of field-tested
            structure — not theory. Short guides, plain-language examples, and reusable worksheets you can come back to
            whenever they help.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Chapters() {
  return (
    <section id="contents" className="scroll-mt-8 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>
            17 chapters · {BOOK_PAGES} pages
          </Eyebrow>
          <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#294a68] md:text-6xl">
            A simple operating system for the working life.
          </h2>
        </div>
        <ol className="mt-12 grid grid-cols-1 border-l border-t border-[#c8c1ac] md:grid-cols-2 lg:grid-cols-4">
          {chapters.map((chapter, index) => (
            <li
              key={chapter.range}
              className="group border-b border-r border-[#c8c1ac] p-7 transition-all hover:-translate-y-1 hover:bg-[#f6f0d8]"
            >
              <span className="block text-5xl font-black text-primary">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Chapters {chapter.range}
              </p>
              <h3 className="mt-2 text-lg font-black uppercase leading-tight text-[#294a68]">{chapter.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{chapter.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

const galleryTitles = ['The kitchen-table office.', 'Old habits, new place.', 'Somebody waited up.']

export function Gallery() {
  return (
    <section id="inside" className="scroll-mt-8 bg-[#142739] py-20 text-white md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Eyebrow light>From inside the book</Eyebrow>
        <h2 className="mt-4 max-w-3xl text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl">
          The road and home, as they actually feel.
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {gallery.map((item, index) => (
            <figure key={item.src} className={index === 1 ? 'md:mt-12' : ''}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <figcaption className="border-t-4 border-primary pt-4">
                <p className="text-sm font-black uppercase tracking-wide text-white">{galleryTitles[index] ?? item.caption}</p>
                <p className="mt-1 text-sm text-[#afbec7]">{item.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PhotoBreak() {
  return (
    <section className="grid bg-[#294a68] text-white md:grid-cols-2">
      <div className="relative min-h-[320px] w-full md:min-h-[560px]">
        <Image
          src="/hank/driveway.png"
          alt="A blue semi truck parked beside a farmhouse at golden hour"
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center px-6 py-16 md:px-16 md:py-24">
        <Eyebrow light>Built for parked moments</Eyebrow>
        <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white md:text-6xl">
          Use the book. Don&apos;t just read it.
        </h2>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-white/85">
          Run one worksheet for a week. Keep what earns its space. Then add the next one. That&apos;s the whole method —
          small, repeatable, and built for the ten minutes you actually have.
        </p>
      </div>
    </section>
  )
}

const worksheetHighlights = [
  { title: 'The 60-minute landing routine', desc: 'An evening-back sequence that puts the bag, the laundry, and the paperwork where they belong.' },
  { title: 'The trip envelope setup', desc: 'One envelope per trip. Every receipt finds its home before you lose it.' },
  { title: 'The read-back script', desc: 'Confirm dispatch details in one clean call — no back-and-forth.' },
  { title: 'The per-kilometre math sheet', desc: 'Know what a kilometre costs you, loaded and empty.' },
  { title: 'The home-time plan', desc: 'A short plan that fits the way you already live.' },
]

export function Worksheets() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:py-28">
      <div>
        <Eyebrow>Keep the useful part close</Eyebrow>
        <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#294a68] md:text-6xl">
          17 worksheets for the moments that matter.
        </h2>
        <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
          …and twelve more. Every chapter ends with one — fill it in, keep it in the cab, come back to it.
        </p>
        <div className="mt-8 max-w-xs">
          <BuyButton />
        </div>
      </div>
      <ol className="flex flex-col justify-center">
        {worksheetHighlights.map((item, index) => (
          <li key={item.title} className="grid grid-cols-[auto_1fr] gap-5 border-t border-[#c8c1ac] py-5 last:border-b">
            <span className="text-xl font-black text-primary">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <p className="font-black text-[#294a68]">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export function FromTheChannel() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:py-24">
      <div className="max-w-2xl">
        <Eyebrow>From the channel</Eyebrow>
        <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#294a68] md:text-5xl">
          The book behind the breakdowns.
        </h2>
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
      </div>
    </section>
  )
}

export function SampleQuote() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-20 md:pb-24">
      <div className="max-w-2xl">
        <Eyebrow>Pick a page. Make it yours.</Eyebrow>
        <h2 className="mt-4 text-3xl font-black uppercase leading-[0.95] tracking-tight text-[#294a68] md:text-4xl">
          Useful words for an ordinary question.
        </h2>
        <blockquote className="mt-8 border-l-4 border-primary bg-[#f6f0d8] p-6 text-xl font-bold leading-snug text-foreground">
          {'“I have the pickup number. Could you also confirm which appointment time goes with this load?”'}
        </blockquote>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          {'That’s the spirit of the book: name the question, separate what’s known from what’s still open, and keep the next step clear.'}
        </p>
      </div>
    </section>
  )
}

export function Offer() {
  return (
    <section id="offer" className="scroll-mt-8 bg-[#142739] py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 md:grid-cols-2">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/hank/hank-portrait.png"
            alt={`${AUTHOR} — thirty years of runs behind every page`}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="bg-[#fbf8ea] p-8 shadow-[16px_16px_0_#e9c84a] md:p-12">
          <Eyebrow>The complete digital playbook</Eyebrow>
          <h2 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-tight text-[#294a68] md:text-6xl">
            {BOOK_TITLE}
          </h2>
          <p className="mt-6 font-black leading-none text-[#294a68]">
            <sup className="align-top text-3xl">$</sup>
            <span className="text-8xl tracking-tight">27</span>
            <span className="text-lg">.99 USD</span>
          </p>
          <p className="mt-4 text-xs font-black uppercase tracking-[0.15em] text-[#142739]">
            Launch pricing ends in
          </p>
          <CountdownBoxes className="mt-2" />
          <ul className="mt-6 flex flex-col gap-3 text-sm">
            {[
              '66-page designed PDF, instant download',
              '17 chapters, 17 reusable worksheets',
              'Read it on your phone or print the pages',
              'Secure digital delivery',
            ].map((item) => (
              <li key={item} className="flex items-baseline gap-3 text-foreground">
                <span aria-hidden="true" className="font-black text-[#294a68]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
          <BuyButton className="mt-8" />
          <div className="mt-8 flex items-center gap-5 border-t border-[#c8c1ac] pt-6">
            <span className="text-6xl font-black leading-none text-[#294a68]">15</span>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.12em] text-[#142739]">
                Day money-back policy
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Try the worksheets. If the playbook doesn&apos;t earn its place, you get your money back.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function MeetHank() {
  return (
    <section id="hank" className="scroll-mt-8 bg-[#294a68] text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-20 md:grid-cols-[0.85fr_1.15fr] md:py-28">
        <div className="relative aspect-[4/5] w-full overflow-hidden">
          <Image
            src="/hank/hank-portrait.png"
            alt={`${AUTHOR} sitting in his den at home`}
            fill
            sizes="(min-width: 768px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div>
          <Eyebrow light>The voice in the driver&apos;s seat</Eyebrow>
          <h2 className="mt-4 text-5xl font-black uppercase leading-[0.9] tracking-tight text-white md:text-7xl">
            Meet Hank.
          </h2>
          <p className="mt-6 text-xl font-bold leading-snug text-white">
            Plainspoken. Practical. Thirty years of runs behind every page.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-[#dbe4e9]">
            Hank Mercer is the veteran-driver voice of the channel — the systems in this book are the ones that survived
            three decades of long hauls, bad weather, and kitchen tables.
          </p>
        </div>
      </div>
    </section>
  )
}

export function Faq() {
  return (
    <section id="faq" className="scroll-mt-8 bg-white py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Eyebrow>Straight answers</Eyebrow>
        <h2 className="mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#294a68] md:text-6xl">
          Before you roll.
        </h2>
        <div className="mt-10 max-w-4xl">
          {faqs.map((faq) => (
            <details key={faq.q} className="group border-t border-[#c8c1ac] py-5 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-black text-[#294a68] [&::-webkit-details-marker]:hidden">
                {faq.q}
                <span aria-hidden="true" className="text-2xl font-black text-primary transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function FinalCta() {
  return (
    <section className="bg-[#f6f0d8] px-6 py-20 text-center md:py-28">
      <div className="mx-auto max-w-3xl">
        <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#294a68]">
          One page. One week. One steadier mile at a time.
        </p>
        <h2 className="mx-auto mt-4 text-4xl font-black uppercase leading-[0.95] tracking-tight text-[#294a68] md:text-6xl">
          Put the next decision back in your hands.
        </h2>
        <div className="mx-auto mt-10 max-w-md">
          <BuyButton />
        </div>
        <p className="mx-auto mt-6 max-w-md text-[11px] leading-relaxed text-muted-foreground">
          General organisation and communication ideas. No promise of increased pay or career advancement.
        </p>
      </div>
    </section>
  )
}
