import { AboutSection } from '@/components/about-section'
import { Hero } from '@/components/hero'
import { ProductGrid } from '@/components/product-grid'

export default function Home() {
  return (
    <>
      <Hero />
      <ProductGrid />
      <AboutSection />
    </>
  )
}
