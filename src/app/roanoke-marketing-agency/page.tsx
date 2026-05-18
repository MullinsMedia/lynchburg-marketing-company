import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Marketing Company Roanoke VA | Advertising Agency | Mullins Media Co.',
    description:
      'Mullins Media Co. serves Roanoke, VA businesses with SEO, Google Ads, social media, website design, TV, and more. 15+ years in western Virginia. Call (434) 204-4226.',
    alternates: {
      canonical: `${siteUrl}/roanoke-marketing-agency`,
    },
    openGraph: {
      title: 'Marketing Company Roanoke VA | Mullins Media Co.',
      description:
        'Full-service advertising agency serving the Roanoke, VA market. SEO, digital ads, social media, TV, and brand strategy. Founded 2013. Results-focused.',
      url: `${siteUrl}/roanoke-marketing-agency`,
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mullins Media Co. — Lynchburg Marketing Company',
  alternateName: 'Lynchburg Marketing Company',
  description:
    'Full-service marketing and advertising agency serving Roanoke, VA and the greater western Virginia region. SEO, Google Ads, social media, website design, TV, radio, and outdoor advertising.',
  url: siteUrl,
  telephone: '+14342042042226',
  email: 'hello@mullinsmediaco.com',
  foundingDate: '2013',
  areaServed: [
    { '@type': 'City', name: 'Roanoke', addressRegion: 'VA' },
    { '@type': 'City', name: 'Lynchburg', addressRegion: 'VA' },
    { '@type': 'AdministrativeArea', name: 'Western Virginia' },
  ],
  sameAs: [],
}

export default function RoanokeMarketingPage() {
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
            Serving Roanoke &amp; Western Virginia
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            A Marketing Agency That Competes in the Roanoke, VA Market
          </h1>
          <p className="font-sans text-[#CBD4D7] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Roanoke is the Star City — the largest, most competitive market in western Virginia.
            If you&rsquo;re going to grow here, you need a marketing partner who understands the
            stakes, knows the media landscape, and can execute at a high level. That&rsquo;s what
            Mullins Media Co. delivers.
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
            Marketing in a Market Like Roanoke Demands More
          </h2>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            Roanoke is the economic and cultural hub of western Virginia. With a population of
            roughly 100,000 in the city proper and a regional metro area nearly four times that
            size, Roanoke has a more established, more competitive business environment than most
            surrounding markets. Healthcare, manufacturing, tourism, and a growing technology sector
            all make their home here.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            That competitiveness cuts both ways. It means there is real revenue to be captured —
            but it also means your competitors are not standing still. Many Roanoke businesses are
            already investing in digital marketing, running Google Ads, and working to own their
            local search rankings. If your strategy lags, customers go elsewhere.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            At the same time, Roanoke benefits from exceptional quality-of-life assets — Mill
            Mountain and the Star, the Blue Ridge Parkway, the Roanoke River Greenway, a vibrant
            downtown Market District — that create real marketing angles for tourism, hospitality,
            food and beverage, real estate, and lifestyle businesses.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed">
            We bring strategy, creative execution, and honest reporting to Roanoke clients who are
            done with agencies that overpromise and underdeliver. Located 45 minutes east in
            Lynchburg, we are embedded in the western Virginia market and have been since 2013.
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
              Marketing Services for Roanoke, VA Businesses
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'SEO — Rank in the Star City',
                desc: 'Roanoke search competition is real. We conduct a full competitive audit, identify ranking opportunities your competitors have missed, and execute a long-term SEO strategy that builds durable organic visibility in Google.',
              },
              {
                title: 'Google Ads & PPC',
                desc: 'Own the top of the page for the searches that matter most in Roanoke. We build targeted campaigns, write compelling ad copy, and optimize continuously to keep your cost-per-lead as low as possible.',
              },
              {
                title: 'Social Media Advertising',
                desc: 'Reach Roanoke consumers on Facebook, Instagram, and beyond. We build audience segments based on geography, interests, and behavior — then create ads that stop the scroll and drive action.',
              },
              {
                title: 'Website Design & Development',
                desc: 'In a competitive market like Roanoke, your website cannot afford to be slow, outdated, or hard to navigate. We build modern, high-converting sites that reflect the quality of your business.',
              },
              {
                title: 'Content Marketing & SEO Writing',
                desc: 'Long-form content, service pages, and blog articles optimized for Roanoke-area search terms. Content that builds authority, earns rankings, and answers the questions your customers are already asking.',
              },
              {
                title: 'Email Marketing',
                desc: 'Nurture your existing Roanoke customer base with strategic email campaigns — promotions, newsletters, re-engagement sequences, and more. Your list is one of your most valuable assets.',
              },
              {
                title: 'TV Advertising (WSET)',
                desc: 'WSET ABC 13 covers the Lynchburg–Roanoke–Martinsville DMA. Television advertising remains one of the most powerful brand-building tools available in this market, and we know how to use it.',
              },
              {
                title: 'Radio (WLNI) & Billboards',
                desc: 'Drive-time radio and high-traffic outdoor placements that keep your brand visible to Roanoke-area commuters and consumers. We handle placement, creative, and measurement.',
              },
              {
                title: 'Brand Identity & Strategy',
                desc: 'In a sophisticated market like Roanoke, brand matters. We develop logos, brand systems, and messaging frameworks that position your business credibly against well-established local competitors.',
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
              What Sets Us Apart in a Competitive Market
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                heading: 'Strategy Built for Western Virginia',
                body: 'We have spent 15+ years in the Lynchburg–Roanoke corridor. We understand the regional media markets, the audience behaviors, and the competitive dynamics specific to this geography. Our work is not templated from a playbook built for a generic metro — it\'s built for your specific market.',
              },
              {
                heading: 'We Hold Ourselves Accountable',
                body: '"We show up. We answer the phone. We don\'t miss deadlines." In a market as competitive as Roanoke, you cannot afford a marketing partner that goes quiet. We maintain clear communication, regular reporting, and full transparency — always.',
              },
              {
                heading: 'Full-Service, In-House Team',
                body: 'Our 9-person team handles SEO, paid media, creative, social, content, and traditional media — all under one roof. You get coordinated strategy, not disconnected vendors pointing fingers at each other when results disappoint.',
              },
              {
                heading: 'Results That Compound Over Time',
                body: 'The best marketing investments don\'t just produce short-term spikes — they build lasting competitive advantages. Our clients have seen 85% revenue growth in months, scaled from 3 to 50+ employees, and quadrupled website traffic through strategies built to last.',
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
            The Kind of Growth That Changes a Business
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { stat: '85%', label: 'Revenue growth in months for a western Virginia client' },
              { stat: '3 → 50+', label: 'Employees at a business we helped scale rapidly' },
              { stat: '4×', label: 'Website traffic increase driven by SEO and content' },
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
                src="https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/f415a90a-31e1-4426-bb9c-97859e4c72fb/Mullins+Media+Headshots+2025-19.jpg"
                alt="Isaac Gibson, Multimedia Specialist at Mullins Media Co."
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Isaac Gibson</h2>
              <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-6">Multimedia Specialist</p>
              <p className="font-sans text-[#CBD4D7] leading-relaxed">
                Isaac Gibson has over 15 years of digital media experience and leads media production for our Roanoke-area clients. From brand photography to video campaigns, Isaac handles the creative execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F6F6] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-6">
            Ready to Win More Business in Roanoke?
          </h2>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-10">
            We offer a free consultation for Roanoke-area businesses. We&rsquo;ll assess your
            current digital presence, benchmark you against your top competitors in the Roanoke
            market, and share exactly where we see opportunities. No obligation, no jargon — just
            a straightforward conversation about what marketing can do for your business.
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
            Founded 2013 &middot; Lynchburg, VA &middot; Serving Roanoke &amp; Western Virginia
          </p>
        </div>
      </section>
    </>
  )
}
