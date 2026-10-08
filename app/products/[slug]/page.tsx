import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, Check } from 'lucide-react'
import { getProduct, inquiryHref, products } from '@/lib/products'

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) return {}
  return { title: `${product.name} — Hank Mercer`, description: product.tagline }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = getProduct(slug)
  if (!product) notFound()

  return (
    <article className="mx-auto max-w-6xl px-6 py-10 md:py-16">
      <Link
        href="/#shop"
        className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to shop
      </Link>
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div className="relative aspect-square overflow-hidden rounded-lg bg-card">
          <Image
            src={product.image || '/placeholder.svg'}
            alt={product.name}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-xs uppercase tracking-[0.25em] text-primary">{product.category}</p>
          <h1 className="mt-3 text-balance font-serif text-4xl md:text-5xl">{product.name}</h1>
          <p className="mt-4 text-2xl">${product.price}</p>
          <p className="mt-6 leading-relaxed text-muted-foreground">{product.description}</p>

          <h2 className="mt-8 text-sm font-medium">{"What's included"}</h2>
          <ul className="mt-3 flex flex-col gap-2">
            {product.includes.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                <Check className="size-4 text-primary" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            Format: <span className="text-foreground">{product.format}</span>
          </p>

          <a
            href={inquiryHref(product)}
            className="mt-10 inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Request to buy
          </a>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            Opens a pre-filled email. You will receive a payment link and download.
          </p>
        </div>
      </div>
    </article>
  )
}
