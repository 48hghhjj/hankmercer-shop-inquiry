import { Chapters, Faq, FinalCta, FromTheChannel, Gallery, MeetHank, SampleQuote, SignalBand, UseTheBook, WhyThisBook, WideImage, Worksheets } from '@/components/book-sections'
import { Hero } from '@/components/hero'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignalBand />
      <WhyThisBook />
      <WideImage />
      <Chapters />
      <Gallery />
      <UseTheBook />
      <Worksheets />
      <FromTheChannel />
      <SampleQuote />
      <MeetHank />
      <Faq />
      <FinalCta />
    </>
  )
}
