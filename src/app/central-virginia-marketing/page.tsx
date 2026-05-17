import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Marketing Company Central Virginia | Advertising Agency | Mullins Media Co.',
    description:
      'Mullins Media Co. is the marketing company central Virginia businesses trust for SEO, Google Ads, social media, website design, TV, and more. Founded 2013. Call (434) 485-5739.',
    alternates: {
      canonical: `${siteUrl}/central-virginia-marketing`,
    },
    openGraph: {
      title: 'Marketing Company Central Virginia | Mullins Media Co.',
      description:
        'Full-service advertising agency serving central Virginia — Lynchburg, Bedford, Amherst, Appomattox, Campbell, and Nelson counties. Real results since 2013.',
      url: `${siteUrl}/central-virginia-marketing`,
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mullins Media Co. — Lynchburg Marketing Company',
  alternateName: 'Lynchburg Marketing Company',
  description:
    'Full-service marketing and advertising agency serving central Virginia businesses across Lynchburg, Bedford, Amherst, Appomattox, Campbell, and Nelson counties.',
  url: siteUrl,
  telephone: '+14344855739',
  email: 'hello@mullinsmediaco.com',
  foundingDate: '2013',
  areaServed: [
    { '@type': 'City', name: 'Lynchburg', addressRegion: 'VA' },
    { '@type': 'County', name: 'Bedford County', addressRegion: 'VA' },
    { '@type': 'County', name: 'Amherst County', addressRegion: 'VA' },
    { '@type': 'County', name: 'Appomattox County', addressRegion: 'VA' },
    { '@type': 'County', name: 'Campbell County', addressRegion: 'VA' },
    { '@type': 'County', name: 'Nelson County', addressRegion: 'VA' },
    { '@type': 'AdministrativeArea', name: 'Central Virginia' },
  ],
  sameAs: [],
}

export default function CentralVirginiaMarketingPage() {
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
            Lynchburg, Bedford, Amherst, Appomattox, Campbell &amp; Nelson Counties
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The Marketing Company Central Virginia Businesses Rely On
          </h1>
          <p className="font-sans text-[#CBD4D7] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Central Virginia is a diverse, growing region with a business community that deserves
            serious marketing support. Mullins Media Co. has been embedded in this market since
            2013 — helping businesses across the region attract more customers, build stronger
            brands, and grow in ways that last.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Get a Free Consultation
            </Link>
            <a
              href="tel:+14344855739"
              className="border border-[#CBD4D7] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-white hover:text-[#2C3539] transition-colors"
            >
              (434) 485-5739
            </a>
          </div>
        </div>
      </section>

      {/* City Context */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-6">
            One Agency for the Entire Central Virginia Region
          </h2>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            Central Virginia is not a single city — it&rsquo;s a region. Anchored by Lynchburg
            and reaching across Bedford, Amherst, Appomattox, Campbell, and Nelson counties, it
            encompasses one of the most economically diverse and historically rich corridors in the
            Commonwealth. Healthcare, education, agriculture, manufacturing, tourism, and a growing
            entrepreneurial community all share the same geography.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            Many businesses in this region don&rsquo;t fit neatly into one city. A home services
            company based in Campbell County serves customers from Rustburg to the Lynchburg city
            limits. A manufacturer in Amherst County sells to clients across three counties. A
            healthcare network has locations in multiple communities. For these businesses, a
            city-specific marketing campaign isn&rsquo;t enough — they need regional reach.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            That&rsquo;s exactly what we&rsquo;re built for. Mullins Media Co. is based in
            Lynchburg and has spent 15+ years developing deep knowledge of the central Virginia
            market — its geography, its media landscape, its consumer behavior, and its business
            community. We know which zip codes respond to which messages. We know the local media
            that reaches which audiences. We know what works here, because we&rsquo;ve been doing
            it here since 2013.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed">
            Whether your customers are in Forest or Farmville, Amherst or Appomattox, our campaigns
            reach across central Virginia without wasting your budget on markets that don&rsquo;t
            matter to you.
          </p>
        </div>
      </section>

      {/* Counties / Service Area */}
      <section className="bg-[#F5F6F6] py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-3xl text-[#2C3539] font-bold">
              Communities We Serve Across Central Virginia
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              'Lynchburg',
              'Forest',
              'Bedford',
              'Bedford County',
              'Amherst',
              'Amherst County',
              'Appomattox',
              'Campbell County',
              'Rustburg',
              'Nelson County',
              'Lovingston',
              'Smith Mountain Lake',
              'Altavista',
              'Madison Heights',
              'Brookneal',
              'Clifford',
            ].map((place) => (
              <div
                key={place}
                className="bg-white border border-[#CBD4D7] px-4 py-3 text-center font-sans text-[#4C4C4C] text-sm"
              >
                {place}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-[#61717A] text-sm uppercase tracking-widest mb-3">
              What We Do
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold">
              Marketing Services for Central Virginia Businesses
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Regional SEO Strategy',
                desc: 'Dominate search results across your entire central Virginia service area. We optimize for the specific cities and counties your business serves — not just one city — so you capture searches from every corner of your market.',
              },
              {
                title: 'Google Ads & Pay-Per-Click',
                desc: 'Targeted advertising campaigns with geographic radius controls that match your actual service area — whether that\'s a single county or the entire central Virginia region. Pay for clicks only from the customers who can become your customers.',
              },
              {
                title: 'Social Media Marketing',
                desc: 'Facebook and Instagram audience targeting across central Virginia communities. We build custom audiences based on location, demographics, and behavior to reach the right people across your entire market.',
              },
              {
                title: 'Website Design & Development',
                desc: 'A professional website that serves as the hub of all your marketing activity. Fast, mobile-optimized, and built to generate leads and conversions from visitors across the region.',
              },
              {
                title: 'TV Advertising (WSET)',
                desc: 'WSET ABC 13 covers the Lynchburg DMA — reaching households across Lynchburg, Bedford, Amherst, Campbell, Appomattox, and Nelson counties. One of the most efficient ways to build regional brand awareness.',
              },
              {
                title: 'Radio (WLNI) & Outdoor',
                desc: 'WLNI reaches drive-time listeners across central Virginia, and strategic billboard placements on US 29, US 460, and US 501 put your brand in front of the region\'s daily commuters and travelers.',
              },
              {
                title: 'Content Marketing',
                desc: 'Content strategy built around the search behaviors of central Virginia consumers. Blog posts, service area pages, and local content that builds authority and expands your regional search footprint over time.',
              },
              {
                title: 'Email Marketing',
                desc: 'Keep your central Virginia customer base engaged. Email campaigns for promotions, seasonal messaging, and customer retention — designed to work across a regionally distributed customer list.',
              },
              {
                title: 'Brand Identity',
                desc: 'A brand that works across markets. We create logo systems, brand guidelines, and messaging frameworks that represent your business consistently whether a customer encounters you in Lynchburg, Rustburg, or Nelson County.',
              },
            ].map((service) => (
              <div key={service.title} className="bg-[#F5F6F6] border border-[#CBD4D7] p-6">
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
      <section className="bg-[#F5F6F6] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-sans text-[#61717A] text-sm uppercase tracking-widest mb-3">
              Why Mullins Media Co.
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold">
              Why Central Virginia Businesses Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                heading: '15+ Years in This Market',
                body: 'We have been working in the central Virginia business community since 2013. We know the local media market, the geography, the seasonal patterns, and the consumer behaviors specific to this region. That institutional knowledge is not something a national agency can replicate.',
              },
              {
                heading: 'We Do What We Say We\'ll Do',
                body: '"We show up. We answer the phone. We don\'t miss deadlines." Central Virginia is a small enough market that your reputation travels. Ours is built on reliability and results. Our clients stay with us because we consistently deliver what we promise.',
              },
              {
                heading: 'A Full-Service Team in Your Market',
                body: 'Our 9-person team handles strategy, SEO, paid media, creative, social, content, and traditional media — all under one roof, all embedded in the central Virginia market. You deal with one agency. We handle everything.',
              },
              {
                heading: 'Results That Show Up in Revenue',
                body: 'We measure what matters: new customers, phone calls, website leads, and revenue growth — not impressions and follower counts. Our track record includes 85% revenue growth in months, businesses scaled from 3 to 50+ employees, and website traffic quadrupled through organic search.',
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
            Growth Across Central Virginia
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { stat: '85%', label: 'Revenue growth in months for a central Virginia client' },
              { stat: '3 → 50+', label: 'Employees at a regional business we helped scale' },
              { stat: '4×', label: 'Website traffic growth through SEO and content strategy' },
            ].map((item) => (
              <div key={item.label}>
                <p className="font-serif text-5xl font-bold text-white mb-3">{item.stat}</p>
                <p className="font-sans text-[#CBD4D7] text-sm leading-relaxed">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-6">
            Let&rsquo;s Talk About Your Central Virginia Business
          </h2>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-10">
            We offer a free consultation for central Virginia businesses — no matter where in the
            region you&rsquo;re based. We&rsquo;ll look at your current marketing, assess your
            competitive position, and tell you honestly what we think the best opportunities are.
            If we&rsquo;re the right fit, we&rsquo;ll tell you what we&rsquo;d do and what to
            expect. If we&rsquo;re not, we&rsquo;ll say so.
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
            Founded 2013 &middot; Based in Lynchburg, VA &middot; Serving Central Virginia Since Day One
          </p>
        </div>
      </section>
    </>
  )
}
