import { BOOK_PAGES, BOOK_PRICE, getCheckoutHref } from '@/lib/book'

export function BuyButton({
  className = '',
  variant = 'primary',
  compact = false,
}: {
  className?: string
  variant?: 'primary' | 'outline'
  compact?: boolean
}) {
  const styles =
    variant === 'primary'
      ? 'bg-primary text-[#142739] hover:-translate-y-0.5 hover:shadow-[0_8px_rgba(20,39,57,0.12)]'
      : 'border-2 border-[#294a68] text-[#294a68] hover:-translate-y-0.5'
  return (
    <div className={`flex w-full flex-col items-center gap-3 ${className}`}>
      <a
        href={getCheckoutHref()}
        className={`inline-flex min-h-[52px] w-full items-center justify-center px-6 text-sm font-black transition-transform ${styles}`}
      >
        {compact ? `Get the companion · ${BOOK_PRICE} ›` : 'Get the companion'}
      </a>
      {!compact && (
        <>
          <p className="text-center text-xs text-muted-foreground">
            {BOOK_PAGES}-page PDF · {BOOK_PRICE} + applicable taxes · Instant download
          </p>
          <p className="text-center text-xs text-muted-foreground">15-day money-back policy</p>
        </>
      )}
    </div>
  )
}
