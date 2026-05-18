import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Marketing Company Smith Mountain Lake VA | Mullins Media Co.',
    description:
      'Marketing and advertising for Smith Mountain Lake businesses — vacation rentals, marinas, restaurants, real estate, and hospitality. Mullins Media Co. Call (434) 485-5739.',
    alternates: {
      canonical: `${siteUrl}/smith-mountain-lake-marketing`,
    },
    openGraph: {
      title: 'Marketing Company Smith Mountain Lake | Mullins Media Co.',
      description:
        'Grow your Smith Mountain Lake business with targeted digital marketing — SEO, Google Ads, social media, and more. Local team, real results. Founded 2013.',
      url: `${siteUrl}/smith-mountain-lake-marketing`,
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mullins Media Co. — Lynchburg Marketing Company',
  alternateName: 'Lynchburg Marketing Company',
  description:
    'Full-service marketing agency serving Smith Mountain Lake businesses in Bedford and Franklin Counties. SEO, Google Ads, social media, website design, and hospitality marketing.',
  url: siteUrl,
  telephone: '+14344855739',
  email: 'hello@mullinsmediaco.com',
  foundingDate: '2013',
  areaServed: [
    { '@type': 'LakeBodyOfWater', name: 'Smith Mountain Lake', addressRegion: 'VA' },
    { '@type': 'County', name: 'Bedford County', addressRegion: 'VA' },
    { '@type': 'County', name: 'Franklin County', addressRegion: 'VA' },
  ],
  sameAs: [],
}

export default function SmithMountainLakeMarketingPage() {
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
            Serving Smith Mountain Lake &amp; Surrounding Communities
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Marketing Company for Smith Mountain Lake Businesses
          </h1>
          <p className="font-sans text-[#CBD4D7] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Virginia&rsquo;s premier lake resort community attracts visitors from across the East
            Coast — and they&rsquo;re searching online before they arrive. Mullins Media Co. helps
            Smith Mountain Lake businesses get found, fill bookings, and build loyal customer bases
            that return season after season.
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
            The Unique Marketing Challenges of a Resort Community
          </h2>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            Smith Mountain Lake is Virginia&rsquo;s second largest freshwater lake — a 22,000-acre
            resort community spread across Bedford and Franklin Counties, about 35 miles from
            Lynchburg. The lake draws visitors year-round, but the economy is intensely seasonal,
            with summer weekends driving the bulk of revenue for marinas, restaurants, vacation
            rentals, and waterfront businesses.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            That seasonal dynamic requires a marketing strategy that&rsquo;s different from a
            typical retail or service business. You need to capture summer visitors when
            they&rsquo;re planning — often weeks or months before they arrive. You need to build
            off-season loyalty among permanent residents. And you need to compete for short-term
            rental bookings against both local competitors and national platforms.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            The lake&rsquo;s resident community is also notable — a mix of affluent retirees,
            second-home owners from Northern Virginia and beyond, and full-time residents who expect
            a high level of professionalism from local businesses. Your marketing needs to match
            that expectation.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed">
            We&rsquo;ve been based 35 miles from Smith Mountain Lake since 2013. We know this
            market — the geography, the audience, the media options, and the seasonal patterns
            that shape business success at the lake.
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
              Marketing Services Designed for Lake Businesses
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'SEO for Lake Searches',
                desc: 'Visitors planning a Smith Mountain Lake trip search months in advance. We optimize your site for the long-tail searches — "vacation rental Smith Mountain Lake," "restaurants at SML," "boat rental Smith Mountain Lake" — that bring high-intent customers directly to you.',
              },
              {
                title: 'Google Ads — Capture Visitors Early',
                desc: 'Reach visitors before they book. Google Ads allow you to appear at the top of search results the moment someone starts researching a Smith Mountain Lake trip. We build campaigns targeting both geographic and behavioral signals.',
              },
              {
                title: 'Social Media & Visual Marketing',
                desc: 'Smith Mountain Lake is visually beautiful — and social media is where visitors discover it and share their experiences. We manage your Instagram and Facebook presence to drive awareness, engagement, and bookings.',
              },
              {
                title: 'Vacation Rental Marketing',
                desc: 'Beyond listing sites, we help vacation rental owners build direct booking channels. A great website, SEO, and targeted advertising can significantly reduce your dependence on VRBO and Airbnb commissions.',
              },
              {
                title: 'Website Design',
                desc: 'For lake businesses, your website is your storefront. It must load fast, look great on mobile, showcase your property or menu beautifully, and make booking or reserving as easy as possible.',
              },
              {
                title: 'Email Marketing & Guest Retention',
                desc: 'Past guests are your most valuable marketing asset. We build email sequences that stay in touch with past visitors, promote early-season deals, and drive repeat bookings — year after year.',
              },
              {
                title: 'Content Marketing',
                desc: 'Lake guides, activity roundups, seasonal posts, and local event coverage that position your business as a trusted resource for Smith Mountain Lake visitors — and keep you ranking in search year-round.',
              },
              {
                title: 'TV & Radio Advertising',
                desc: 'WSET and WLNI reach regional audiences in the Lynchburg–Roanoke DMA — the primary feeder market for Smith Mountain Lake visitors. Television and radio are powerful tools for building awareness before peak season.',
              },
              {
                title: 'Brand Identity',
                desc: 'Lake businesses compete on atmosphere and experience as much as price. A professional, cohesive brand — logo, colors, photography direction, messaging — signals quality to affluent visitors who have choices.',
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
              We Know What Works at the Lake
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                heading: 'Seasonal Strategy Built In',
                body: 'We do not apply generic marketing playbooks to lake businesses. Our campaigns are built around Smith Mountain Lake\'s seasonal patterns — ramping up before Memorial Day, sustaining through summer, converting fall visitors, and building off-season loyalty. Timing is everything here.',
              },
              {
                heading: 'We Understand Resort Market Dynamics',
                body: 'Vacation rental owners, marina operators, waterfront restaurants, and real estate agents all face marketing challenges that are fundamentally different from a Main Street retail shop. We have the experience and the playbooks for resort and hospitality marketing specifically.',
              },
              {
                heading: 'Reliability That Matches Your Busy Season',
                body: '"We show up. We answer the phone. We don\'t miss deadlines." When your peak season is compressed into a few summer months, a missed campaign launch or a slow response to a booking surge can cost you real revenue. We don\'t let that happen.',
              },
              {
                heading: 'Proven Regional Results',
                body: 'Our clients across the central Virginia region have seen 85% revenue growth in months, scaled from 3 to 50+ employees, and quadrupled their website traffic. We bring that same commitment to results to every Smith Mountain Lake client we serve.',
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
            Growth Our Clients Can Measure
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { stat: '85%', label: 'Revenue growth in months for a central Virginia business' },
              { stat: '3 → 50+', label: 'Team size scaled for a client we helped grow rapidly' },
              { stat: '4×', label: 'Website traffic increased through SEO and content strategy' },
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
                src="https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/7bd1b5c9-2cf2-457d-afbc-b180567bbc32/Ollie+Headshot-2.jpg"
                alt="Ollie Mullins, Drone Pilot at Mullins Media Co."
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Ollie Mullins</h2>
              <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-6">Drone Pilot</p>
              <p className="font-sans text-[#CBD4D7] leading-relaxed">
                Ollie Mullins is our drone pilot and is a skilled FPV and cinema drone operator. For Smith Mountain Lake properties and businesses, drone photography and video are often the most powerful marketing tool available.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F6F6] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-6">
            Let&rsquo;s Talk About Growing Your Lake Business
          </h2>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-10">
            We offer a free consultation for Smith Mountain Lake businesses. We&rsquo;ll look at
            your current online presence, how you show up in searches relevant to your business,
            and where your biggest opportunities are heading into the next season. No sales pressure
            — just a direct, useful conversation.
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
            Founded 2013 &middot; Lynchburg, VA &middot; Serving Smith Mountain Lake, Bedford &amp; Franklin Counties
          </p>
        </div>
      </section>
    </>
  )
}
