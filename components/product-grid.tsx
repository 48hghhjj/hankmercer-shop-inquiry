import Image from 'next/image'
import Link from 'next/link'
import { products } from '@/lib/products'

export function ProductGrid() {
  return (
    <section id="shop" aria-labelledby="shop-heading" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10 flex items-baseline justify-between">
          <h2 id="shop-heading" className="font-serif text-3xl md:text-4xl">
            The Shop
          </h2>
          <span className="text-sm text-muted-foreground">{products.length} products</span>
        </div>
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
          {products.map((product) => (
            <li key={product.slug}>
              <Link href={`/products/${product.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-card">
                  <Image
                    src={product.image || '/placeholder.svg'}
                    alt={product.name}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{product.category}</p>
                    <h3 className="mt-1 font-serif text-2xl transition-colors group-hover:text-primary">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{product.tagline}</p>
                  </div>
                  <span className="shrink-0 font-medium">${product.price}</span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
