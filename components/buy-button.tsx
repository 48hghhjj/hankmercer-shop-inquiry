import { BOOK_PAGES, BOOK_PRICE, PAYHIP_PRODUCT_ID, PAYHIP_PRODUCT_URL } from '@/lib/book'

export function BuyButton({
  className = '',
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  return (
    <div className={`flex w-full flex-col items-center gap-3 ${className}`}>
      <a
        href={PAYHIP_PRODUCT_URL}
        className="payhip-buy-button"
        data-theme="green"
        data-product={PAYHIP_PRODUCT_ID}
      >
        Buy Now
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
