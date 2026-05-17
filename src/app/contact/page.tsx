import type { Metadata } from 'next'
import Script from 'next/script'

const contactUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'}/contact`

export const metadata: Metadata = {
  title: 'Free Marketing Consultation | Lynchburg Marketing Company',
  description:
    'Schedule a free marketing consultation with Mullins Media Co. in Lynchburg, VA. We help local businesses with SEO, digital advertising, content strategy, and website design.',
  alternates: { canonical: contactUrl },
  openGraph: {
    title: 'Free Marketing Consultation | Lynchburg Marketing Company',
    description: 'Schedule a free marketing consultation with Mullins Media Co. in Lynchburg, VA. No pressure, no obligation.',
    url: contactUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Marketing Consultation | Lynchburg Marketing Company',
    description: 'Schedule a free marketing consultation with Mullins Media Co. in Lynchburg, VA. No pressure, no obligation.',
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
    body: 'We review your submission and get back to you quickly to schedule a call. We answer the phone and reply to emails — that is the baseline standard around here.',
  },
  {
    step: '03',
    heading: 'Free 30-minute consultation',
    body: 'We will talk through your goals, your market, and what is actually working (or not) for your business online. No pitch deck, no hard sell — just a real conversation.',
  },
  {
    step: '04',
    heading: 'A strategy built for Lynchburg',
    body: 'If we are a fit, we build a custom plan around your specific business and your local competitive landscape. We only onboard clients we are confident we can help.',
  },
]

export default function ContactPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">

      {/* Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">Let&apos;s talk</p>
        <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#2C3539] mb-6 leading-tight">
          Get Your Free Consultation
        </h1>
        <div className="border-b border-[#CBD4D7] mb-8" />
        <p className="text-[#61717A] text-lg font-sans font-light leading-relaxed">
          Whether you need SEO, paid advertising, social media, a new website, or you are not sure
          where to start — we can help. Fill out the form and we will reach out within one business
          day to schedule a free 30-minute strategy call.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

        {/* Left: form + contact info */}
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

          {/* Direct contact */}
          <div className="border-t border-[#CBD4D7] pt-8">
            <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">Or reach us directly</p>
            <div className="space-y-3">
              <p className="font-sans text-[#4C4C4C]">
                <span className="text-[#61717A] text-sm uppercase tracking-widest font-semibold mr-3">Phone</span>
                <a href="tel:4344855739" className="hover:text-[#61717A] transition-colors">
                  (434) 485-5739
                </a>
              </p>
              <p className="font-sans text-[#4C4C4C]">
                <span className="text-[#61717A] text-sm uppercase tracking-widest font-semibold mr-3">Email</span>
                <a href="mailto:hello@mullinsmediaco.com" className="hover:text-[#61717A] transition-colors">
                  hello@mullinsmediaco.com
                </a>
              </p>
              <p className="font-sans text-[#4C4C4C]">
                <span className="text-[#61717A] text-sm uppercase tracking-widest font-semibold mr-3">Location</span>
                Lynchburg, VA
              </p>
            </div>
          </div>
        </div>

        {/* Right: what to expect */}
        <div className="lg:col-span-2">
          <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-6">What to expect</p>
          <div className="space-y-8">
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

          {/* Who we work with */}
          <div className="mt-12 bg-[#F5F6F6] border border-[#CBD4D7] p-6">
            <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">Who we work with</p>
            <p className="text-sm text-[#4C4C4C] font-sans font-light leading-relaxed mb-4">
              We work with small businesses, service providers, and growth-minded entrepreneurs in
              Lynchburg, VA and the surrounding central Virginia region. If you are trying to get
              found on Google, generate more leads, or build a brand people actually remember —
              we should talk.
            </p>
            <p className="text-sm text-[#4C4C4C] font-sans font-light leading-relaxed">
              We only take on a limited number of clients at a time. If we are not the right fit,
              we will tell you that too.
            </p>
          </div>

          {/* Services quick list */}
          <div className="mt-8">
            <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">Services we offer</p>
            <ul className="space-y-2">
              {[
                'Search engine optimization (SEO)',
                'Google Ads & paid search',
                'Social media management',
                'Website design & development',
                'Content marketing & blogging',
                'Local SEO & Google Business Profile',
                'Email marketing',
                'Brand identity & design',
                'Photography & video',
              ].map(service => (
                <li key={service} className="text-sm text-[#4C4C4C] font-sans font-light flex items-center gap-2">
                  <span className="text-[#61717A]">→</span> {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom reassurance */}
      <div className="mt-20 border-t border-[#CBD4D7] pt-12 text-center max-w-2xl mx-auto">
        <p className="font-serif text-xl font-semibold text-[#2C3539] mb-4">
          A real agency. Real results. No fluff.
        </p>
        <p className="text-[#61717A] font-sans font-light leading-relaxed">
          Mullins Media Co. has been serving Lynchburg businesses since 2013. Our team of nine
          specialists covers everything from SEO and paid ads to photography, video, and brand
          design. We show up, we answer the phone, and we do not miss deadlines.
        </p>
      </div>
    </div>
  )
}
