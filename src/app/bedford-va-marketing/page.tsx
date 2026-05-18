import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Marketing Company Bedford VA | Mullins Media Co.',
    description:
      'Mullins Media Co. is the marketing company Bedford, VA businesses rely on for SEO, Google Ads, social media, website design, and digital marketing. Call (434) 485-5739.',
    alternates: {
      canonical: `${siteUrl}/bedford-va-marketing`,
    },
    openGraph: {
      title: 'Marketing Company Bedford VA | Mullins Media Co.',
      description:
        'Digital marketing for Bedford, VA businesses — from tourism and wineries to retail and service industries. Local team, proven results. Founded 2013.',
      url: `${siteUrl}/bedford-va-marketing`,
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mullins Media Co. — Lynchburg Marketing Company',
  alternateName: 'Lynchburg Marketing Company',
  description:
    'Full-service marketing agency serving Bedford, VA and Bedford County. SEO, Google Ads, social media, website design, TV, radio, and billboard advertising.',
  url: siteUrl,
  telephone: '+14344855739',
  email: 'hello@mullinsmediaco.com',
  foundingDate: '2013',
  areaServed: [
    { '@type': 'City', name: 'Bedford', addressRegion: 'VA' },
    { '@type': 'County', name: 'Bedford County', addressRegion: 'VA' },
    { '@type': 'City', name: 'Lynchburg', addressRegion: 'VA' },
  ],
  sameAs: [],
}

export default function BedfordVAMarketingPage() {
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
            Serving Bedford &amp; Bedford County
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The Marketing Company Bedford, VA Businesses Rely On
          </h1>
          <p className="font-sans text-[#CBD4D7] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Whether you run a winery, a retail shop, a service business, or a tourism destination
            near the National D-Day Memorial — Mullins Media Co. helps Bedford County businesses
            reach more customers and grow their revenue. We&rsquo;ve been doing this for more than a
            decade, right here in central Virginia.
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
            Marketing for Bedford&rsquo;s Unique Business Mix
          </h2>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            Bedford is not just another small Virginia town. As the county seat of Bedford County,
            it anchors a diverse local economy — and as home to the National D-Day Memorial, it
            draws visitors from across the country year-round. That creates genuine marketing
            opportunities for businesses that know how to capture them.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            Tourism is a growth engine here. The wineries and breweries that have flourished in
            Bedford County compete for weekend visitors alongside the D-Day Memorial, Smith Mountain
            Lake day-trippers, and Blue Ridge foothills recreation seekers. If you run a
            hospitality, food and beverage, or experience-based business in Bedford, there is an
            audience looking for exactly what you offer — you just need to be findable.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed">
            At the same time, Bedford has a strong base of retail, professional services, and trades
            businesses serving local residents. We work across all of these verticals — with the
            same strategic discipline whether we&rsquo;re helping a downtown shop grow its
            foot traffic or helping a Bedford County winery fill its event calendar.
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
              Digital Marketing Services for Bedford, VA
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'SEO for Bedford Businesses',
                desc: 'When someone searches "things to do in Bedford VA" or "winery near Bedford Virginia," will they find you? We optimize your website and local listings so you rank for the searches that matter most to your business.',
              },
              {
                title: 'Google Ads & Pay-Per-Click',
                desc: 'Reach visitors planning a trip to the D-Day Memorial, a wine trail, or Smith Mountain Lake — before they arrive. Targeted Google campaigns that reach people actively searching for Bedford-area businesses.',
              },
              {
                title: 'Social Media Marketing',
                desc: 'Facebook and Instagram are where Bedford County customers discover new businesses and share experiences. We manage your social presence, run targeted ads, and help you build a loyal local following.',
              },
              {
                title: 'Website Design',
                desc: 'A website that makes a great first impression and turns visitors into customers. Fast, mobile-friendly, and designed with your specific Bedford County audience in mind.',
              },
              {
                title: 'Content Marketing',
                desc: 'Blog content, destination guides, event previews, and seasonal promotions that keep your business visible year-round — especially important for tourism-dependent Bedford businesses with seasonal peaks.',
              },
              {
                title: 'Email Marketing',
                desc: 'Keep past visitors coming back. Email campaigns for events, specials, and seasonal promotions that work especially well for Bedford wineries, restaurants, and hospitality businesses.',
              },
              {
                title: 'TV Advertising (WSET)',
                desc: 'WSET ABC 13 reaches households across the Lynchburg–Bedford region. Television spots remain one of the most powerful tools for building brand recognition in a market this size.',
              },
              {
                title: 'Radio (WLNI)',
                desc: 'Drive-time radio on WLNI reaches commuters traveling between Bedford and Lynchburg daily. A consistent, affordable way to build awareness with a captive, local audience.',
              },
              {
                title: 'Brand Identity',
                desc: 'Professional logos, color systems, and brand guidelines that give your Bedford business a polished, consistent look across every marketing channel — online and off.',
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
              Why Bedford Businesses Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                heading: 'We Know the Regional Tourism Economy',
                body: 'The Bedford market is tied to regional tourism in ways that most marketing agencies never consider. We understand seasonal traffic patterns, the role of events like those at the D-Day Memorial, and how to reach visitors from outside the region who are planning trips to Bedford County.',
              },
              {
                heading: 'We Deliver What We Promise',
                body: '"We show up. We answer the phone. We don\'t miss deadlines." Every Bedford County client gets that same commitment — not just at the start of the engagement, but throughout. We don\'t sign contracts and disappear.',
              },
              {
                heading: 'Local Knowledge, Regional Reach',
                body: 'Based in Lynchburg, we have deep relationships with local media — WSET, WLNI, and regional billboard vendors. We also manage digital campaigns with reach far beyond Bedford County lines, giving you the best of both local and regional marketing.',
              },
              {
                heading: 'Proven, Measurable Growth',
                body: 'We don\'t report on likes and shares. We report on revenue, leads, and foot traffic. Our clients have grown revenue by 85% in months, scaled from 3 to 50+ employees, and seen website traffic quadruple — those are the numbers we care about.',
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
            Growth You Can Take to the Bank
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { stat: '85%', label: 'Revenue growth in months for a central Virginia client' },
              { stat: '3 → 50+', label: 'Team size scaled for a high-growth client we supported' },
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

      {/* Local Team Member */}
      <section className="bg-[#2C3539] py-20 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-10 text-center">Your Local Contact</p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/2af41cda-67c5-4a94-a622-b8ecb513ab29/Mullins+Media+Headshots+2025-14.jpg"
                alt="Bradley Mejia, Multimedia Specialist at Mullins Media Co."
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Bradley Mejia</h2>
              <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-6">Multimedia Specialist</p>
              <p className="font-sans text-[#CBD4D7] leading-relaxed">
                Bradley Mejia is one of our multimedia specialists and has photographed and filmed dozens of Bedford County businesses. He brings a background in photography, videography, and marketing to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F6F6] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-6">
            Let&rsquo;s Talk About Growing Your Bedford Business
          </h2>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-10">
            We offer a free, no-obligation consultation for Bedford and Bedford County businesses.
            We&rsquo;ll take a look at your current marketing, your competitive landscape, and the
            opportunities we see for your specific business type. If we&rsquo;re a good fit,
            we&rsquo;ll tell you exactly what we&rsquo;d do and what to expect. If not, we&rsquo;ll
            point you in the right direction.
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
            Founded 2013 &middot; Lynchburg, VA &middot; Serving Bedford, Bedford County &amp; Central Virginia
          </p>
        </div>
      </section>
    </>
  )
}
