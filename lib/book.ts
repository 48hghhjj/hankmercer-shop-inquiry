export const AUTHOR = 'Hank Mercer'
export const BOOK_TITLE = "The Working Driver's Playbook"
export const BOOK_PRICE = 'US$27.99'
export const BOOK_PAGES = 66
export const BOOK_TAGLINE = 'Sharp on the road. Steady at home.'
export const CONTACT_EMAIL = 'hello@hankmercer.shop'

// Payhip checkout — product "The Working Driver's Playbook by Hank Mercer"
// (Payhip product ID BtLI7). The buy buttons open Payhip's secure checkout.
export const PAYHIP_PRODUCT_URL = 'https://payhip.com/b/BtLI7'
export const PAYHIP_PRODUCT_ID = 'BtLI7'
export const CHECKOUT_URL = PAYHIP_PRODUCT_URL

// Offer countdown mode: 'midnight' = timer counts down to the visitor's local
// midnight and resets every day. Or put an ISO date string here for a fixed
// one-time deadline, e.g. '2026-10-31T23:59:59Z'.
export const OFFER_DEADLINE: 'midnight' | string = 'midnight'
export const OFFER_LABEL = 'Offer ends tonight in'

export function getOfferDeadline(): Date {
  if (OFFER_DEADLINE === 'midnight') {
    const now = new Date()
    const midnight = new Date(now)
    midnight.setHours(24, 0, 0, 0)
    return midnight
  }
  return new Date(OFFER_DEADLINE)
}

export function getCheckoutHref() {
  if (CHECKOUT_URL) return CHECKOUT_URL
  const subject = `Order: ${BOOK_TITLE}`
  const body = `Hi Hank,\n\nI'd like to get a copy of ${BOOK_TITLE} (${BOOK_PRICE}).\n\nThanks,`
  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export const chapters = [
  {
    range: '01–03',
    title: 'Come home to a little order.',
    description: 'A landing routine for the first evening back, a laundry-and-bag reset, and a kitchen-table spot for paperwork — plus a wind-down that actually lets you rest.',
  },
  {
    range: '04–06',
    title: 'Keep the paperwork findable.',
    description: 'Trip envelopes and simple folders for receipts, settlements, and logs — a paperwork system that works in the cab and at home, plus a monthly ten-minute check you can actually keep.',
  },
  {
    range: '07–09',
    title: 'Make the next call clearer.',
    description: 'Plain ways to ask dispatch a question, confirm a detail, and follow up without the back-and-forth — on the road and from home.',
  },
  {
    range: '10–13',
    title: 'Make room for the people at home.',
    description: 'Shared calendars, the handover conversation, chores while you are out, and small rituals that travel well.',
  },
  {
    range: '14–17',
    title: 'Keep the habits that help.',
    description: 'Know your numbers — what a kilometre costs you loaded and empty — plus notes on your phone, a personal checklist, and a home-time plan that fits the way you already live.',
  },
]

export const gallery = [
  { src: '/hank/kitchen-table.png', alt: 'Coffee mug, logbook, and reading glasses on a wooden kitchen table', caption: 'The kitchen-table office.' },
  { src: '/hank/radio-desk.png', alt: 'CB radio, road atlas, and a model truck on a home desk', caption: 'Old habits, new place.' },
  { src: '/hank/porch-dog.png', alt: 'Black Labrador lying on a porch next to work boots and a thermos', caption: 'Somebody waited up.' },
]

export const faqs = [
  {
    q: 'Who is this for?',
    a: 'Working truck drivers — company drivers and owner-operators across the US and Canada — who want practical systems for everything around the driving: paperwork, communication, money math, and home time.',
  },
  {
    q: 'What format do I receive?',
    a: 'A 66-page designed PDF with 17 chapters and a worksheet in every chapter. Instant download — read it on your phone or print the worksheets.',
  },
  {
    q: 'Do I need to read it cover to cover?',
    a: 'No. Open it at whatever is biting you this week. Each chapter stands on its own, and the worksheets work even if you only do one.',
  },
  {
    q: 'What if it is not for me?',
    a: 'Every order is covered by a 15-day money-back policy. If the playbook does not earn its place, you get your money back.',
  },
]
