'use client'

import { useCallback, useEffect, useState } from 'react'
import { BOOK_PRICE, PAYHIP_PRODUCT_URL } from '@/lib/book'

const SEEN_KEY = 'hank-popup-seen'

export function ExitPopup() {
  const [open, setOpen] = useState(false)

  const show = useCallback(() => {
    try {
      if (localStorage.getItem(SEEN_KEY)) return
    } catch {
      return
    }
    setOpen(true)
  }, [])

  const close = useCallback(() => {
    setOpen(false)
    try {
      localStorage.setItem(SEEN_KEY, '1')
    } catch {
      /* ignore */
    }
  }, [])

  useEffect(() => {
    let shown = false
    const trigger = () => {
      if (shown) return
      shown = true
      show()
    }
    // Exit intent (desktop): mouse leaves viewport from the top
    const onMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget && e.clientY <= 0) trigger()
    }
    // Fallback for touch devices / no mouse: show after 45s on first visit
    const timer = setTimeout(trigger, 45000)
    document.addEventListener('mouseout', onMouseOut)
    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseout', onMouseOut)
    }
  }, [show])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, close ])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Special offer"
    >
      <div
        className="relative w-full max-w-md bg-[#fbf8ea] p-8 text-center shadow-2xl md:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 text-xl font-bold text-muted-foreground hover:text-foreground"
        >
          ×
        </button>
        <p className="text-[11px] font-black uppercase tracking-[0.3em] text-[#294a68]">
          Before you pull out
        </p>
        <h2 className="mt-4 text-3xl font-black leading-tight text-foreground md:text-4xl">
          The next load won&apos;t wait. Neither will this price.
        </h2>
        <p className="mx-auto mt-4 max-w-sm leading-relaxed text-muted-foreground">
          Take 15 days to decide it&apos;s right. If it isn&apos;t, every dollar comes back. The only thing you
          can&apos;t get back is the next run without a system.
        </p>
        <a
          href={PAYHIP_PRODUCT_URL}
          className="mt-6 flex min-h-[52px] w-full items-center justify-center bg-primary px-6 text-sm font-black uppercase tracking-[0.1em] text-[#142739] transition-transform hover:-translate-y-0.5"
        >
          Get it for {BOOK_PRICE} ›
        </a>
        <button
          onClick={close}
          className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-muted-foreground underline underline-offset-4 hover:text-foreground"
        >
          No thanks, I&apos;ll keep winging it
        </button>
      </div>
    </div>
  )
}
