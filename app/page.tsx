import { Chapters, Faq, FinalCta, FromTheChannel, Gallery, MeetHank, Offer, PhotoBreak, SampleQuote, SignalBand, WhyThisBook, Worksheets } from '@/components/book-sections'
import { Hero } from '@/components/hero'

export default function HomePage() {
  return (
    <>
      <Hero />
      <SignalBand />
      <WhyThisBook />
      <Chapters />
      <Gallery />
      <PhotoBreak />
      <Worksheets />
      <FromTheChannel />
      <SampleQuote />
      <Offer />
      <MeetHank />
      <Faq />
      <FinalCta />
    </>
  )
}
