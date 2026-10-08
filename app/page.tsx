import { Chapters, FinalCta, FromTheChannel, Gallery, Intro, SampleQuote, WideImage } from '@/components/book-sections'
import { Hero } from '@/components/hero'

export default function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <WideImage />
      <Chapters />
      <FromTheChannel />
      <SampleQuote />
      <Gallery />
      <FinalCta />
    </>
  )
}
