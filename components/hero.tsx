import Image from 'next/image'
import { BuyButton } from '@/components/buy-button'
import { BOOK_PAGES, BOOK_PRICE } from '@/lib/book'

export function Hero() {
  return (
    <section
      className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-16 pt-12 md:grid-cols-[1.08fr_0.92fr]"
      style={{ background: 'linear-gradient(110deg, #fbf8ea 0 57%, #f6f0d8 57%)' }}
    >
      <div className="max-w-xl">
        <p className="inline-flex items-center gap-3 text-[11px] font-black uppercase tracking-[0.2em] text-[#294a68]">
          <span aria-hidden="true" className="h-1.5 w-12 bg-primary" />
          A field guide for the long haul
        </p>
        <h1 className="mt-5 text-6xl font-black uppercase leading-[0.85] tracking-tight text-[#294a68] md:text-8xl">
          Working
          <br />
          Driver&apos;s
          <br />
          Playbook
        </h1>
        <p className="mt-6 text-xl font-extrabold leading-snug text-foreground md:text-2xl">
          Sharp on the road. Steady at home.
        </p>
        <p className="mt-3 text-sm font-semibold text-muted-foreground">
          17 chapters. 17 worksheets. Zero fluff.
        </p>
        <div className="mt-7 flex max-w-md flex-wrap gap-3">
          <BuyButton compact />
          <a
            href="#contents"
            className="inline-flex min-h-[52px] items-center justify-center border-2 border-[#294a68] px-6 text-sm font-black text-[#294a68] transition-transform hover:-translate-y-0.5"
          >
            See what&apos;s inside
          </a>
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          {BOOK_PAGES} designed pages · Secure digital delivery · 15-day money-back policy
        </p>
      </div>
      <div className="relative mx-auto grid w-fit place-items-center py-8">
        <div
          aria-hidden="true"
          className="absolute inset-0 rotate-3 border-2 border-[#294a68]/25"
        />
        <figure className="relative z-10 w-[min(360px,72vw)] -rotate-2 bg-white p-3 pb-10 shadow-[26px_32px_0_#294a68,0_28px_70px_rgba(20,39,57,0.22)]">
          <div className="relative aspect-[3/4] w-full overflow-hidden">
            <Image
              src="/hank/hank-portrait.png"
              alt="Hank Mercer, the veteran driver behind the playbook"
              fill
              priority
              sizes="360px"
              className="object-cover"
            />
          </div>
          <span
            aria-hidden="true"
            className="absolute -bottom-1 right-4 rotate-3 bg-primary px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-[#142739] shadow-md"
          >
            Playbook · 01
          </span>
        </figure>
      </div>
    </section>
  )
}
