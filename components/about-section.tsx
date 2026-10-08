import { inquiryHref } from '@/lib/products'

const steps = [
  { title: 'Pick a product', text: 'Choose anything from the shop and hit "Request to buy".' },
  { title: 'Send the email', text: 'A pre-filled message opens. Add your name and send it over.' },
  { title: 'Get your files', text: 'You will receive a payment link, then your download, usually within a day.' },
]

export function AboutSection() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-16 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
        <div>
          <h2 id="about-heading" className="font-serif text-3xl md:text-4xl">
            How buying works
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
            {"This is a one-person shop, so every order is handled personally. Questions about licensing, bundles, or custom work? Just ask."}
          </p>
          <a
            href={inquiryHref()}
            className="mt-8 inline-block text-sm text-primary underline underline-offset-4 hover:opacity-80"
          >
            Send a general inquiry
          </a>
        </div>
        <ol className="flex flex-col gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="flex gap-5">
              <span className="font-serif text-3xl text-primary" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className="font-medium">{step.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
