import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Marketing Company Forest VA | Mullins Media Co.',
    description:
      'Looking for a marketing company in Forest, VA? Mullins Media Co. serves Bedford County businesses with SEO, Google Ads, social media, website design, and more. Call (434) 485-5739.',
    alternates: {
      canonical: `${siteUrl}/forest-va-marketing`,
    },
    openGraph: {
      title: 'Marketing Company Forest VA | Mullins Media Co.',
      description:
        'Forest, VA businesses grow with Mullins Media Co. — SEO, Google Ads, social media, TV, radio, and more. Founded 2013. Local team. Real results.',
      url: `${siteUrl}/forest-va-marketing`,
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mullins Media Co. — Lynchburg Marketing Company',
  alternateName: 'Lynchburg Marketing Company',
  description:
    'Full-service marketing agency serving Forest, VA and Bedford County businesses. SEO, Google Ads, social media, website design, TV, radio, and billboard advertising.',
  url: siteUrl,
  telephone: '+14344855739',
  email: 'hello@mullinsmediaco.com',
  foundingDate: '2013',
  areaServed: [
    { '@type': 'City', name: 'Forest', addressRegion: 'VA' },
    { '@type': 'County', name: 'Bedford County', addressRegion: 'VA' },
    { '@type': 'City', name: 'Lynchburg', addressRegion: 'VA' },
  ],
  sameAs: [],
}

export default function ForestVAMarketingPage() {
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
            Serving Forest &amp; Bedford County
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            The Marketing Company Forest, VA Businesses Trust
          </h1>
          <p className="font-sans text-[#CBD4D7] text-lg md:text-xl max-w-2xl mx-auto mb-10">
            From Timberlake Road to the back roads of Bedford County, Mullins Media Co. helps
            Forest-area businesses get found, get leads, and grow. We&rsquo;ve been doing it since
            2013 — and we&rsquo;re right down the road.
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
            Marketing Built for the Forest, VA Market
          </h2>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            Forest is one of the fastest-growing communities in central Virginia. As an
            unincorporated community in Bedford County just west of Lynchburg, Forest has developed
            into a thriving commercial hub — particularly along the Timberlake Road corridor — while
            maintaining the residential feel that draws families and professionals from across the
            region.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-5">
            That growth is an opportunity. New residents are searching for doctors, dentists,
            contractors, restaurants, and service providers they can trust. If your business
            isn&rsquo;t showing up when they search — on Google, on social media, or in local
            directories — you&rsquo;re handing those customers to a competitor.
          </p>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed">
            We understand the Forest market: the Bedford County zip codes, the affluent demographics
            along Timberlake Road, the mix of established medical practices and newer retail shops.
            Our campaigns are built around where your customers actually are — not generic
            playbooks designed for a city three states away.
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
              Full-Service Marketing for Forest, VA Businesses
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Search Engine Optimization (SEO)',
                desc: 'Rank higher on Google when Forest and Bedford County residents search for your services. We handle everything: on-page optimization, local citations, Google Business Profile management, and content strategy.',
              },
              {
                title: 'Google Ads & PPC',
                desc: 'Appear at the top of Google the day your campaign launches. We build and manage campaigns that target Forest zip codes specifically — so your ad budget reaches the customers closest to you.',
              },
              {
                title: 'Social Media Marketing',
                desc: 'Facebook and Instagram advertising tailored to Bedford County demographics. Build brand awareness, run promotions, and keep your business top-of-mind with Forest residents.',
              },
              {
                title: 'Website Design & Development',
                desc: 'A fast, professional website that converts visitors into customers. Mobile-first design, clear calls to action, and built-in SEO from day one.',
              },
              {
                title: 'TV Advertising (WSET)',
                desc: 'Reach Forest households through WSET ABC 13 — the region\'s most-watched local news station. We handle scripting, production coordination, and placement.',
              },
              {
                title: 'Radio & Billboards',
                desc: 'WLNI radio and strategic outdoor billboard placements along Timberlake Road and Routes 221 and 460 — high-visibility locations that reach your neighbors every day.',
              },
              {
                title: 'Content Marketing',
                desc: 'Blog posts, email newsletters, and social content that establishes your expertise and keeps your business in front of Forest-area customers between purchase decisions.',
              },
              {
                title: 'Email Marketing',
                desc: 'Stay connected with your existing customer base. We design, write, and send campaigns that drive repeat business and referrals.',
              },
              {
                title: 'Brand Identity',
                desc: 'Logo design, color palettes, typography, and brand guidelines that make your business look as professional as you are — whether a customer sees you online or on Timberlake Road.',
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
              A Marketing Partner That Actually Shows Up
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                heading: 'We Know the Local Market',
                body: 'Our team has been embedded in the Lynchburg–Forest–Bedford County market since 2013. We know the roads, the zip codes, the local media landscape, and the seasonal patterns that affect businesses along the Timberlake corridor. You won\'t spend time explaining your market to us.',
              },
              {
                heading: 'No Dropped Balls. Ever.',
                body: '"We show up. We answer the phone. We don\'t miss deadlines." That\'s not a tagline — it\'s the standard we hold ourselves to. If you\'ve worked with a marketing agency that went dark after signing the contract, you know how rare this is.',
              },
              {
                heading: 'Real Results, Not Vanity Metrics',
                body: 'We care about revenue growth, new customers, and phone calls — not impressions and follower counts. Our clients have seen 85% revenue growth in months, scaled from 3 to 50+ employees, and quadrupled their website traffic.',
              },
              {
                heading: 'A Full Team, Not a Freelancer',
                body: 'Our 9-person team includes strategists, designers, writers, ad buyers, and SEO specialists. When you hire Mullins Media Co., you get the whole bench — not a solo operator who burns out or drops your account when they get busy.',
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
            Numbers That Speak for Themselves
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { stat: '85%', label: 'Revenue growth in months for a regional client' },
              { stat: '3 → 50+', label: 'Employees scaled at a client we helped grow' },
              { stat: '4×', label: 'Website traffic increase through SEO and content' },
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
                src="https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/5948e93a-c4b8-4fab-add1-3701c2b3615f/Mullins+Media+Headshots+2025.jpg"
                alt="Delaney Poff, Project Manager at Mullins Media Co."
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Delaney Poff</h2>
              <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-6">Project Manager</p>
              <p className="font-sans text-[#CBD4D7] leading-relaxed">
                Delaney Poff, our Project Manager, was born and raised in Bedford, VA — just minutes from Forest. She&rsquo;s your main point of contact for projects serving the Forest and Bedford County area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#F5F6F6] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-6">
            Ready to Grow Your Forest, VA Business?
          </h2>
          <p className="font-sans text-[#4C4C4C] text-lg leading-relaxed mb-10">
            We offer a free, no-pressure consultation for Forest and Bedford County businesses.
            We&rsquo;ll look at what you&rsquo;re doing, what your competitors are doing, and where
            the biggest opportunities are. No jargon, no sales pitch — just an honest conversation
            about what marketing can realistically do for your business.
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
            Founded 2013 &middot; Lynchburg, VA &middot; Serving Forest, Bedford County &amp; Central Virginia
          </p>
        </div>
      </section>
    </>
  )
}
