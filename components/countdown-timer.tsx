'use client'

import { useEffect, useState } from 'react'
import { OFFER_LABEL, getOfferDeadline } from '@/lib/book'

function getParts() {
  const diff = Math.max(0, getOfferDeadline().getTime() - Date.now())
  const d = Math.floor(diff / 86400000)
  const h = Math.floor((diff % 86400000) / 3600000)
  const m = Math.floor((diff % 3600000) / 60000)
  const s = Math.floor((diff % 60000) / 1000)
  return { d, h, m, s, expired: diff <= 0 }
}

const pad = (n: number) => String(n).padStart(2, '0')

export function CountdownTimer({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const [t, setT] = useState(getParts)

  useEffect(() => {
    setMounted(true)
    setT(getParts())
    const id = setInterval(() => setT(getParts()), 1000)
    return () => clearInterval(id)
  }, [])

  if (!mounted) {
    return (
      <span className={className} aria-hidden="true">
        {OFFER_LABEL} --:--:--
      </span>
    )
  }

  if (t.expired) {
    return <span className={className}>Offer ended</span>
  }

  const label = t.d > 0 ? `${t.d}d ${pad(t.h)}:${pad(t.m)}:${pad(t.s)}` : `${pad(t.h)}:${pad(t.m)}:${pad(t.s)}`

  return (
    <span className={className}>
      {OFFER_LABEL} {label}
    </span>
  )
}

export function CountdownBoxes({ className = '' }: { className?: string }) {
  const [mounted, setMounted] = useState(false)
  const [t, setT] = useState(getParts)

  useEffect(() => {
    setMounted(true)
    setT(getParts())
    const id = setInterval(() => setT(getParts()), 1000)
    return () => clearInterval(id)
  }, [])

  const units = mounted
    ? [
        { value: pad(t.h + t.d * 24), label: 'Hours' },
        { value: pad(t.m), label: 'Minutes' },
        { value: pad(t.s), label: 'Seconds' },
      ]
    : [
        { value: '--', label: 'Hours' },
        { value: '--', label: 'Minutes' },
        { value: '--', label: 'Seconds' },
      ]

  return (
    <div className={`flex items-stretch gap-2 ${className}`} role="timer" aria-label={`${OFFER_LABEL} countdown`}>
      {units.map((u) => (
        <div key={u.label} className="flex min-w-[76px] flex-col items-center bg-[#142739] px-3 py-2">
          <span className="text-3xl font-black tabular-nums text-primary">{u.value}</span>
          <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white/70">{u.label}</span>
        </div>
      ))}
    </div>
  )
}
