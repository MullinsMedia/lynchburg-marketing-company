import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Marketing Company Amherst VA | Advertising Agency | Mullins Media Co.',
    description:
      'Mullins Media Co. provides SEO, digital advertising, social media, and website design to Amherst, VA businesses. Local team. Proven results. Call (434) 204-4226.',
    alternates: {
      canonical: `${siteUrl}/amherst-va-marketing`,
    },
    openGraph: {
      title: 'Marketing Company Amherst VA | Mullins Media Co.',
      description:
        'Digital marketing for Amherst, VA businesses — right across the James River from Lynchburg. SEO, Google Ads, social media, website design, and more. Founded 2013.',
      url: `${siteUrl}/amherst-va-marketing`,
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mullins Media Co. — Lynchburg Marketing Company',
  alternateName: 'Lynchburg Marketing Company',
  description:
    'Full-service marketing agency serving Amherst, VA and Amherst County. SEO, Google Ads, social media, website design, TV, radio, and advertising services.',
  url: siteUrl,
  telephone: '+14342042042226',
  email: 'hello@mullinsmediaco.com',
  foundingDate: '2013',
  areaServed: [
    { '@type': 'City', name: 'Amherst', addressRegion: 'VA' },
    { '@type': 'County', name: 'Amherst County', addressRegion: 'VA' },
    { '@type': 'City', name: 'Lynchburg', addressRegion: 'VA' },
  ],
  sameAs: [],
}

export default function AmherstVAMarketingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#2C3539] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-4">
            Serving Amherst &amp; Amherst County
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The Marketing Company Amherst, VA Businesses Have Been Looking For
          </h1>
          <p className="font-sans text-[#CBD4D7] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Amherst County businesses face a unique challenge: competing for attention in a market
            right next door to a larger city. Mullins Media Co. helps Amherst-area businesses
            establish their own identity, capture local customers, and grow — without constantly
            losing leads to Lynchburg competitors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Get a Free Consultation
            </Link>
            <a
              href="tel:+14342042042226"
              className="border border-[#CBD4D7] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-white hover:text-[#2C3539] transition-colors"
            >
              (434) 204-4226
            </a>
          </div>
        </div>
      </section>

      {/* City Context */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-6">
            Marketing for Amherst County&rsquo;s Growing Business Community
          </h2>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            Amherst is the county seat of Amherst County, sitting directly north of Lynchburg
            across the James River. It&rsquo;s a small town with deep roots — agricultural,
            historically, with a growing commercial presence that serves both longtime residents and
            the professionals who commute to Lynchburg for work.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            Sweet Briar College adds an educated, community-minded demographic to Amherst County
            that businesses rarely capitalize on fully. Meanwhile, the US 29 corridor between
            Amherst and Lynchburg sees significant daily traffic — opportunity for visibility that
            many local businesses are not actively pursuing.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            The bedroom community dynamic matters too. Many Amherst residents work in Lynchburg but
            prefer to spend their money locally when a good local option exists. For Amherst
            businesses, that preference is a real advantage — but only if residents can find you
            when they search.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed">
            We work with Amherst County businesses across retail, services, agriculture, health,
            and professional sectors — helping them build the kind of digital presence that turns
            local preference into local revenue.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-[#F5F6F6] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-[#61717A] text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold">
              Full-Service Marketing for Amherst, VA Businesses
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Local SEO for Amherst',
                desc: 'When Amherst County residents search for what you offer, your business should appear — not a Lynchburg competitor. We handle Google Business Profile optimization, local citations, on-page SEO, and content that ranks for Amherst-specific searches.',
              },
              {
                title: 'Google Ads & Digital Advertising',
                desc: 'Targeted pay-per-click advertising that reaches Amherst County zip codes specifically. We make your ad budget work harder by targeting the people most likely to become your customers — not paying for clicks from outside your service area.',
              },
              {
                title: 'Social Media Marketing',
                desc: 'Facebook and Instagram are where Amherst County residents discover local businesses and share recommendations. We manage your social presence, create content, and run targeted ads that build your local audience.',
              },
              {
                title: 'Website Design & Development',
                desc: 'A professional, mobile-friendly website that makes a strong first impression and converts visitors into customers. Fast load times, clear service descriptions, easy contact options — built for Amherst business owners who want results.',
              },
              {
                title: 'Content Marketing',
                desc: 'Blog posts, service pages, and local content that establish your expertise and keep your Amherst business ranking in search results. We write content that is genuinely useful to your customers — not just keyword filler.',
              },
              {
                title: 'Email Marketing',
                desc: 'Stay connected with your Amherst customer base between purchases. We design and send email campaigns that drive repeat business, seasonal promotions, and referrals from your most loyal customers.',
              },
              {
                title: 'TV Advertising (WSET)',
                desc: 'WSET ABC 13 reaches households across Amherst County and the broader Lynchburg DMA. Television advertising is one of the most effective tools for building brand recognition in a market this size.',
              },
              {
                title: 'Radio (WLNI) & Outdoor',
                desc: 'Drive-time radio on WLNI and billboard placements along US 29 put your business in front of Amherst County commuters every day — a consistent, high-frequency way to build local brand awareness.',
              },
              {
                title: 'Brand Identity',
                desc: 'A professional brand — logo, colors, typography, messaging — helps Amherst businesses compete credibly with Lynchburg competitors and establish the kind of presence that builds long-term customer trust.',
              },
            ].map((service) => (
              <div key={service.title} className="bg-white border border-[#CBD4D7] p-6">
                <h3 className="font-serif text-lg text-[#2C3539] font-bold mb-3">
                  {service.title}
                </h3>
                <p className="font-sans text-[#61717A] text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-[#61717A] text-sm uppercase tracking-widest mb-3">
              Why Mullins Media Co.
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold">
              Why Amherst Businesses Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                heading: 'We Know the Lynchburg–Amherst Dynamic',
                body: 'Amherst County businesses operate in the orbit of a larger neighboring city. That means your marketing has to be sharp — targeting local residents specifically, not just blending into the broader Lynchburg market. We build campaigns that help Amherst businesses win locally.',
              },
              {
                heading: 'Responsive, Reliable Service',
                body: '"We show up. We answer the phone. We don\'t miss deadlines." Small-town businesses especially can\'t afford a marketing agency that\'s hard to reach. You will always have a direct line to our team and a clear picture of what we\'re doing and why.',
              },
              {
                heading: 'Right-Sized for Small Business',
                body: 'We work with businesses of all sizes, but we have deep experience with the kind of owner-operated businesses that make up most of Amherst County\'s economy. We don\'t pitch you on services you don\'t need. We focus on what will actually move your numbers.',
              },
              {
                heading: 'A Track Record of Real Results',
                body: 'Our clients have grown revenue by 85% in months, scaled from 3 to 50+ employees, and quadrupled their website traffic. We bring the same strategic discipline to Amherst County clients that produced those results in other central Virginia markets.',
              },
            ].map((item) => (
              <div key={item.heading} className="flex gap-5">
                <div className="w-1 bg-[#61717A] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-xl text-[#2C3539] font-bold mb-2">
                    {item.heading}
                  </h3>
                  <p className="font-sans text-[#4C4C4C] leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Metrics */}
      <section className="bg-[#2C3539] text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-4">
            Client Results
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-14">
            The Growth Our Clients Experience
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { stat: '85%', label: 'Revenue growth in months for a regional Virginia business' },
              { stat: '3 → 50+', label: 'Employees at a business we helped scale' },
              { stat: '4×', label: 'Website traffic growth through strategic SEO and content' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-serif text-5xl font-bold text-white mb-3">{item.stat}</p>
                <p className="font-sans text-[#CBD4D7] text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Team Member */}
      <section className="bg-[#2C3539] py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-10 text-center">Your Local Contact</p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/65c3410f-cef7-4c05-9b25-78d99c139942/Mullins+Media+Headshots+2025-10.jpg"
                alt="Paige Howell, Strategic Growth Manager at Mullins Media Co."
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Paige Howell</h2>
              <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-6">Strategic Growth Manager</p>
              <p className="font-sans text-[#CBD4D7] leading-relaxed">
                Paige Howell, our Strategic Growth Manager, leads business development for clients in Amherst County and the surrounding area. Her experience as a former Lynchburg business owner means she approaches every engagement with real-world perspective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F6F6] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-6">
            Ready to Grow Your Amherst Business?
          </h2>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-10">
            We offer a free, no-obligation consultation for Amherst and Amherst County businesses.
            We&rsquo;ll review your current marketing, look at what your competitors are doing, and
            share the specific opportunities we see for your business. Honest, direct, useful — even
            if you don&rsquo;t hire us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Schedule a Free Consultation
            </Link>
            <a
              href="mailto:hello@mullinsmediaco.com"
              className="border border-[#CBD4D7] text-[#2C3539] font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#2C3539] hover:text-white transition-colors"
            >
              hello@mullinsmediaco.com
            </a>
          </div>
          <p className="font-sans text-[#61717A] text-sm mt-8">
            Founded 2013 &middot; Lynchburg, VA &middot; Serving Amherst, Amherst County &amp; Central Virginia
          </p>
        </div>
      </section>
    </>
  )
}
