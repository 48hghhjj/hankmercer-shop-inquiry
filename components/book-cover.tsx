import Image from 'next/image'
import { AUTHOR } from '@/lib/book'

export function BookCover() {
  return (
    <div
      className="flex w-40 shrink-0 flex-col items-center gap-2 rounded-sm border border-border bg-card px-3 py-4 text-center shadow-[6px_8px_20px_rgba(38,35,30,0.25)]"
      role="img"
      aria-label={`Book cover: The Home Time Companion by ${AUTHOR}`}
    >
      <span className="font-serif text-[9px] uppercase tracking-[0.2em] text-primary">The</span>
      <span className="font-serif text-lg uppercase leading-none tracking-wide text-primary">Home Time</span>
      <span className="font-serif text-sm uppercase leading-none tracking-wide text-primary">Companion</span>
      <span className="text-[6px] text-muted-foreground">Everyday organisation for life off the road</span>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image src="/hank/hank-portrait.png" alt="" fill sizes="160px" className="object-cover" />
      </div>
      <span className="font-serif text-xs uppercase tracking-[0.15em] text-primary">{AUTHOR}</span>
    </div>
  )
}
