export const AUTHOR = 'Hank Mercer'
export const BOOK_TITLE = 'The Home Time Companion'
export const BOOK_PRICE = 'US$27.99'
export const BOOK_PAGES = 184
export const CONTACT_EMAIL = 'hello@hankmercer.shop'

// Paste your Hotmart / Gumroad / Shopify checkout link here. Until then the
// button opens an email inquiry so no purchase link is broken.
export const CHECKOUT_URL = ''

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
    description: 'A landing routine for the first evening back, a laundry-and-bag reset, and a kitchen-table spot for paperwork.',
  },
  {
    range: '04–06',
    title: 'Keep the paperwork findable.',
    description: 'Simple folders for receipts, settlements, and logs, plus a monthly ten-minute check you can actually keep.',
  },
  {
    range: '07–09',
    title: 'Make the next call clearer.',
    description: 'Plain ways to ask dispatch a question, confirm a detail, and follow up on an office exchange without the back-and-forth.',
  },
  {
    range: '10–13',
    title: 'Make room for the people at home.',
    description: 'Shared calendars, the handover conversation, chores while you are out, and small rituals that travel well.',
  },
  {
    range: '14–17',
    title: 'Keep the habits that help.',
    description: 'Notes on your phone, a personal checklist, and a home-time plan that fits the way you already live.',
  },
]

export const gallery = [
  { src: '/hank/kitchen-table.png', alt: 'Coffee mug, logbook, and reading glasses on a wooden kitchen table', caption: 'The kitchen-table office.' },
  { src: '/hank/radio-desk.png', alt: 'CB radio, road atlas, and a model truck on a home desk', caption: 'Old habits, new place.' },
  { src: '/hank/porch-dog.png', alt: 'Black Labrador lying on a porch next to work boots and a thermos', caption: 'Somebody waited up.' },
]
