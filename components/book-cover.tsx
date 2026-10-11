import Image from 'next/image'
import { AUTHOR } from '@/lib/book'

export function BookCover() {
  return (
    <div
      className="flex w-40 shrink-0 flex-col items-center gap-2 rounded-sm bg-[#142739] px-3 py-4 text-center shadow-[6px_8px_20px_rgba(20,39,57,0.35)]"
      role="img"
      aria-label={`Book cover: The Working Driver's Playbook by ${AUTHOR}`}
    >
      <span className="bg-primary px-2 py-0.5 text-[9px] font-black uppercase tracking-[0.2em] text-[#142739]">
        The
      </span>
      <span className="text-base font-black uppercase leading-none tracking-wide text-[#fbf8ea]">
        Working Driver&apos;s
      </span>
      <span className="text-sm font-black uppercase leading-none tracking-wide text-[#fbf8ea]">Playbook</span>
      <span className="text-[6px] uppercase tracking-[0.18em] text-[#fbf8ea]/70">
        Sharp on the road. Steady at home.
      </span>
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image src="/hank/hank-portrait.png" alt="" fill sizes="160px" className="object-cover" />
      </div>
      <span className="text-xs font-bold uppercase tracking-[0.15em] text-primary">{AUTHOR}</span>
    </div>
  )
}
