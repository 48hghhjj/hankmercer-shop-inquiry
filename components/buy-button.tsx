import { ArrowRight } from 'lucide-react'
import { BOOK_PAGES, BOOK_PRICE, getCheckoutHref } from '@/lib/book'

export function BuyButton({ className = '' }: { className?: string }) {
  return (
    <div className={`flex w-full flex-col items-center gap-3 ${className}`}>
      <a
        href={getCheckoutHref()}
        className="flex w-full items-center justify-between rounded-sm bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Get the companion
        <ArrowRight className="size-4" aria-hidden="true" />
      </a>
      <p className="text-center text-xs text-muted-foreground">
        {BOOK_PAGES}-page PDF · {BOOK_PRICE} + applicable taxes · Instant download
      </p>
      <p className="text-center text-xs text-muted-foreground">15-day money-back policy</p>
    </div>
  )
}
