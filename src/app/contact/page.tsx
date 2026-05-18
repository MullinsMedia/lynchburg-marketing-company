import type { Metadata } from 'next'
import Script from 'next/script'

const contactUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'}/contact`

export const metadata: Metadata = {
  title: 'Contact | Free Marketing Consultation — Lynchburg, VA',
  description:
    'Get a free marketing consultation with Mullins Media Co. in Lynchburg, VA. Call (434) 204-4226 or fill out the form. We help Lynchburg businesses with SEO, advertising, social media, and web design.',
  alternates: { canonical: contactUrl },
  openGraph: {
    title: 'Contact | Free Marketing Consultation — Lynchburg, VA',
    description: 'Get a free marketing consultation with Mullins Media Co. in Lynchburg, VA. Call (434) 204-4226 or fill out the form.',
    url: contactUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Free Marketing Consultation — Lynchburg, VA',
    description: 'Get a free marketing consultation with Mullins Media Co. in Lynchburg, VA. Call (434) 204-4226 or fill out the form.',
  },
}

const whatToExpect = [
  {
    step: '01',
    heading: 'Tell us about your business',
    body: 'Fill out the form with a bit of info about your business and what you are hoping to accomplish. No lengthy questionnaires — just the basics.',
  },
  {
    step: '02',
    heading: 'We reach out within one business day',
    body: 'We review your submission and contact you to schedule a call. We answer the phone and reply to emails — that is the baseline standard here.',
  },
  {
    step: '03',
    heading: 'Free 30-minute strategy call',
    body: 'We will talk through your goals, your Lynchburg market, and what is working (or not) for your business online. No pitch deck, no hard sell.',
  },
  {
    step: '04',
    heading: 'A custom plan for your business',
    body: 'If we are a fit, we build a strategy around your specific business and local competitive landscape. We only onboard clients we are confident we can help.',
  },
]

const services = [
  'Search engine optimization (SEO)',
  'Google Ads & pay-per-click',
  'Social media management',
  'TV advertising (WSET)',
  'Radio advertising (WLNI)',
  'Billboard placement',
  'Website design & development',
  'Content marketing & blogging',
  'Local SEO & Google Business Profile',
  'Email marketing',
  'Brand identity & logo design',
  'Photography & video production',
]

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">

      {/* Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">Let&apos;s Talk</p>
        <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#2C3539] mb-6 leading-tight">
          Get Your Free Marketing Consultation
        </h1>
        <div className="border-b border-[#CBD4D7] mb-8" />
        <p className="text-[#61717A] text-lg font-sans font-light leading-relaxed">
          Whether you need SEO, Google Ads, TV advertising, social media, a new website, or you are not
          sure where to start — we can help. Mullins Media Co. has been growing Lynchburg businesses since
          2013. Fill out the form or call us directly and we will get back to you within one business day.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

        {/* Left: form + direct contact */}
        <div className="lg:col-span-3">
          <div className="overflow-hidden mb-8" style={{ height: '492px' }}>
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/lEGmlsfBKzqHmjEqdS4Q"
              style={{ width: '100%', height: '100%', border: 'none' }}
              id="inline-lEGmlsfBKzqHmjEqdS4Q"
              data-layout="{&apos;id&apos;:&apos;INLINE&apos;}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Lynchburg Marketing Company"
              data-height="492"
              data-layout-iframe-id="inline-lEGmlsfBKzqHmjEqdS4Q"
              data-form-id="lEGmlsfBKzqHmjEqdS4Q"
              title="Lynchburg Marketing Company Contact Form"
            />
          </div>

          <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="lazyOnload" />

          {/* Direct contact — visible NAP for local SEO */}
          <div className="border border-[#CBD4D7] bg-[#F5F6F6] p-8">
            <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-6">Or reach us directly</p>
            <address className="not-italic space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#61717A] w-16 flex-shrink-0 mt-0.5">Phone</span>
                <a
                  href="tel:4342042042226"
                  itemProp="telephone"
                  className="text-[#2C3539] font-sans font-medium hover:text-[#61717A] transition-colors"
                >
                  (434) 204-4226
                </a>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#61717A] w-16 flex-shrink-0 mt-0.5">Email</span>
                <a
                  href="mailto:hello@mullinsmediaco.com"
                  className="text-[#2C3539] font-sans font-medium hover:text-[#61717A] transition-colors"
                >
                  hello@mullinsmediaco.com
                </a>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#61717A] w-16 flex-shrink-0 mt-0.5">Location</span>
                <span className="text-[#2C3539] font-sans font-medium">
                  <span itemProp="addressLocality">Lynchburg</span>,{' '}
                  <span itemProp="addressRegion">VA</span>
                </span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#61717A] w-16 flex-shrink-0 mt-0.5">Web</span>
                <a
                  href="https://mullinsmediaco.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#2C3539] font-sans font-medium hover:text-[#61717A] transition-colors"
                >
                  mullinsmediaco.com
                </a>
              </div>
            </address>
          </div>
        </div>

        {/* Right: what to expect + services */}
        <div className="lg:col-span-2">
          <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-6">What to Expect</p>
          <div className="space-y-8 mb-12">
            {whatToExpect.map(item => (
              <div key={item.step} className="flex gap-4">
                <span className="font-serif text-2xl font-semibold text-[#CBD4D7] flex-shrink-0 leading-none mt-1">
                  {item.step}
                </span>
                <div>
                  <p className="font-serif font-semibold text-[#2C3539] mb-2">{item.heading}</p>
                  <p className="text-sm text-[#61717A] font-sans font-light leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t border-[#CBD4D7] pt-8">
            <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-6">Services We Offer</p>
            <ul className="space-y-2">
              {services.map(service => (
                <li key={service} className="text-sm text-[#4C4C4C] font-sans font-light flex items-start gap-2">
                  <span className="text-[#61717A] flex-shrink-0 mt-0.5">→</span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 bg-[#2C3539] text-white p-6">
            <p className="font-serif font-semibold mb-2">Limited availability</p>
            <p className="text-sm text-[#97a8b0] font-sans font-light leading-relaxed">
              We only onboard a limited number of marketing clients at a time so every client gets real
              attention. If we are not the right fit, we will tell you that too.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom reassurance */}
      <div className="mt-20 border-t border-[#CBD4D7] pt-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { heading: 'Founded 2013', body: 'Over a decade of growing Lynchburg businesses through marketing, media, and advertising.' },
            { heading: 'Team of 9', body: 'SEO strategists, social media managers, designers, videographers, photographers, and drone pilots.' },
            { heading: 'Full service', body: 'From Google rankings to TV commercials — every marketing channel your customers use, handled in-house.' },
          ].map(item => (
            <div key={item.heading} className="px-4">
              <p className="font-serif text-lg font-semibold text-[#2C3539] mb-2">{item.heading}</p>
              <p className="text-sm text-[#61717A] font-sans font-light leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
