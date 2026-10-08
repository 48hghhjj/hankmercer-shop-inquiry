export type Product = {
  slug: string
  name: string
  category: string
  price: number
  image: string
  tagline: string
  description: string
  includes: string[]
  format: string
}

export const INQUIRY_EMAIL = 'hello@hankmercer.shop'

export const products: Product[] = [
  {
    slug: 'field-presets',
    name: 'Field Notes Presets',
    category: 'Lightroom Presets',
    price: 24,
    image: '/products/field-presets.png',
    tagline: 'Warm, filmic color for photos that feel lived-in.',
    description:
      'Twelve hand-tuned presets built from years of shooting on the road. Soft highlights, rich shadows, and skin tones that stay true across any light.',
    includes: ['12 desktop + mobile presets', 'Install guide (PDF)', 'Free lifetime updates'],
    format: '.xmp / .dng',
  },
  {
    slug: 'studio-os',
    name: 'Studio OS',
    category: 'Notion Template',
    price: 19,
    image: '/products/studio-os.png',
    tagline: 'One workspace to run clients, projects, and invoices.',
    description:
      'A calm, opinionated system for solo creatives. Track leads, plan projects, log hours, and keep every deliverable in one place.',
    includes: ['Client CRM + project board', 'Time & invoice tracker', 'Video walkthrough'],
    format: 'Notion duplicate link',
  },
  {
    slug: 'grain-textures',
    name: 'Grain & Light',
    category: 'Texture Pack',
    price: 15,
    image: '/products/grain-textures.png',
    tagline: 'Analog texture for digital work.',
    description:
      'Forty high-resolution scans of film grain, paper, light leaks, and dust. Drop them over photos, posters, or UI to add warmth and depth.',
    includes: ['40 textures at 6000px', 'Blend mode cheat sheet', 'Commercial license'],
    format: '.png / .jpg',
  },
  {
    slug: 'freelance-playbook',
    name: 'The Freelance Playbook',
    category: 'eBook',
    price: 29,
    image: '/products/freelance-playbook.png',
    tagline: 'Price, pitch, and protect your creative business.',
    description:
      'A practical field guide to going independent: setting rates, writing proposals that land, contracts that protect you, and building steady work.',
    includes: ['140-page eBook', 'Proposal + contract templates', 'Pricing calculator sheet'],
    format: 'PDF / EPUB',
  },
]

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug)
}

export function inquiryHref(product?: Product) {
  const subject = product ? `Purchase inquiry: ${product.name}` : 'Inquiry from hankmercer.shop'
  const body = product
    ? `Hi Hank,\n\nI'd like to buy ${product.name} ($${product.price}).\n\nName:\n`
    : 'Hi Hank,\n\n'
  return `mailto:${INQUIRY_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
