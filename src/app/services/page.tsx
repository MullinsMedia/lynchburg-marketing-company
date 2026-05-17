import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Marketing Services in Lynchburg, VA | Mullins Media Co.',
    description:
      'Full-service marketing and advertising for Lynchburg businesses. SEO, Google Ads, social media, website design, and content marketing — all under one roof. Call (434) 485-5739.',
    alternates: {
      canonical: `${siteUrl}/services`,
    },
    openGraph: {
      title: 'Marketing Services in Lynchburg, VA | Mullins Media Co.',
      description:
        'Full-service marketing and advertising for Lynchburg businesses. SEO, Google Ads, social media, website design, and content marketing — all under one roof.',
      url: `${siteUrl}/services`,
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Mullins Media Co. — Lynchburg Marketing Company',
  url: siteUrl,
  telephone: '+14344855739',
  email: 'hello@mullinsmediaco.com',
  foundingDate: '2013',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lynchburg',
    addressRegion: 'VA',
    addressCountry: 'US',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Marketing Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Search Engine Optimization (SEO)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Advertising (Google Ads, TV, Radio, Billboards)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Social Media Management' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Website Design & Development' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Content Marketing' } },
    ],
  },
}

const services = [
  {
    title: 'Search Engine Optimization',
    slug: 'seo',
    tagline: 'Get found on Google — and stay there.',
    description:
      'We handle everything from local keyword research and on-page optimization to Google Business Profile management and citation building. SEO is the highest-ROI long-term investment most Lynchburg businesses can make.',
    price: 'Starting at $750/mo',
  },
  {
    title: 'Advertising',
    slug: 'advertising',
    tagline: 'Digital and traditional advertising that actually converts.',
    description:
      'From Google Ads and pay-per-click campaigns to TV spots on WSET, radio on WLNI, and billboard placements across Lynchburg — we run full-funnel advertising that puts your brand in front of the right people at the right time.',
    price: 'Google Ads from $2,000/mo · TV from $9,990/3mo · Radio from $4,900/3mo',
  },
  {
    title: 'Social Media Management',
    slug: 'social-media',
    tagline: 'Consistent, professional content on every platform.',
    description:
      'We manage Facebook, Instagram, TikTok, and YouTube — creating content in-house with our own photo and video team, then scheduling, posting, and engaging with your community so you never have to think about it.',
    price: 'Starting at $2,000/mo',
  },
  {
    title: 'Website Design',
    slug: 'website-design',
    tagline: 'A website that works as hard as you do.',
    description:
      'We design and build WordPress, Shopify, and custom sites that look sharp, load fast, and convert visitors into customers. Every site we launch includes SEO fundamentals, professional copy, and photography — done for you, start to finish.',
    price: 'Starting at $3,000',
  },
  {
    title: 'Content Marketing',
    slug: 'content-marketing',
    tagline: 'Content that builds authority and drives traffic.',
    description:
      'Blog posts, video scripts, email campaigns, and more — we create content that answers the questions your customers are already asking and positions you as the obvious choice in your market.',
    price: 'Custom packages available',
  },
]

const everythingWeDo = [
  'Local SEO & Google Business Profile optimization',
  'National SEO campaigns',
  'Google Ads (Search, Display, YouTube)',
  'Pay-per-click campaign management',
  'Television advertising (WSET)',
  'Radio advertising (WLNI)',
  'Billboard & outdoor advertising',
  'Facebook & Instagram advertising',
  'Social media strategy & management',
  'Short-form video (TikTok, Reels)',
  'YouTube channel management',
  'Brand identity & logo design',
  'WordPress website design',
  'Shopify e-commerce development',
  'Landing page design & optimization',
  'Email marketing campaigns',
  'Blog content & article writing',
  'Photography & videography',
  'Reputation management',
  'Marketing strategy consulting',
]

export default function ServicesPage() {
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
            Lynchburg, Virginia
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Marketing Services That Move the Needle
          </h1>
          <p className="font-sans text-lg text-[#CBD4D7] max-w-2xl mx-auto mb-10">
            We are a full-service marketing and advertising agency based in Lynchburg, VA. Whether you need to show up on Google, dominate social media, run television ads, or rebuild your website from the ground up — we handle it all under one roof.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
          >
            Start the Conversation
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-4">
              Our Core Services
            </h2>
            <p className="font-sans text-[#61717A] max-w-xl mx-auto">
              Five service areas. One team. Every strategy built around your specific business goals in Lynchburg and beyond.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.slug}
                className="border border-[#CBD4D7] p-8 flex flex-col"
              >
                <h3 className="font-serif text-xl text-[#2C3539] font-bold mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-sm text-[#61717A] uppercase tracking-wider mb-4">
                  {service.tagline}
                </p>
                <p className="font-sans text-[#4C4C4C] text-sm leading-relaxed mb-6 flex-grow">
                  {service.description}
                </p>
                <p className="font-sans text-xs text-[#61717A] mb-6 border-t border-[#CBD4D7] pt-4">
                  {service.price}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="font-sans text-sm font-semibold text-[#2C3539] uppercase tracking-widest hover:text-[#61717A] transition-colors"
                >
                  Learn More &rarr;
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Everything We Do */}
      <section className="py-20 px-6 bg-[#F5F6F6]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-6">
                The Full List of What We Do
              </h2>
              <p className="font-sans text-[#4C4C4C] leading-relaxed mb-6">
                Most marketing agencies specialize in one or two channels and refer out everything else. We do not work that way. Our 9-person team has been building and running marketing programs for Lynchburg businesses since 2013 — and we have developed real depth across every channel below.
              </p>
              <p className="font-sans text-[#4C4C4C] leading-relaxed mb-6">
                That means your SEO strategy informs your ad copy. Your social content feeds your blog. Your website is built to convert the traffic we send it. When one team is responsible for all of it, everything works together — and results compound faster.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
              >
                Talk to Our Team
              </Link>
            </div>
            <div>
              <ul className="grid grid-cols-1 gap-3">
                {everythingWeDo.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-[#4C4C4C] text-sm">
                    <span className="text-[#61717A] mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="font-sans text-[#CBD4D7] max-w-2xl mx-auto mb-14">
            We have been doing this in Lynchburg for over a decade. Here is what our clients have experienced when they commit to a real marketing strategy.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14">
            {[
              { stat: '85%', label: 'Revenue growth in months, not years' },
              { stat: '3 → 50+', label: 'Employees at a client we scaled' },
              { stat: '4x', label: 'Website traffic increase' },
              { stat: 'Turned off', label: 'Ads because client ran out of inventory' },
            ].map(({ stat, label }) => (
              <div key={stat} className="text-center">
                <p className="font-serif text-4xl font-bold text-white mb-2">{stat}</p>
                <p className="font-sans text-sm text-[#CBD4D7]">{label}</p>
              </div>
            ))}
          </div>
          <p className="font-sans text-[#CBD4D7] text-sm max-w-xl mx-auto">
            We only take on a limited number of clients at any given time. This keeps our team focused and our results high. If you are thinking about working with us, now is the time to reach out.
          </p>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-4">
              Why Lynchburg Businesses Choose Us
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'We know Lynchburg',
                body: 'We have lived and worked here since 2013. We know the market, the media landscape, the seasonal patterns, and which channels actually move buyers in this region.',
              },
              {
                title: 'One team, every channel',
                body: 'No outsourcing. No hand-offs to vendors you have never met. The same 9-person team handles your SEO, your ads, your social media, and your website — and they all talk to each other.',
              },
              {
                title: 'Transparent pricing',
                body: 'We publish our prices. No mystery packages, no surprise invoices. You know exactly what you are getting and what it costs before you sign anything.',
              },
              {
                title: 'We limit our client list',
                body: 'We turn away work on purpose. We take on fewer clients so every account gets genuine attention from experienced people — not an overworked junior account manager.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="border border-[#CBD4D7] p-8">
                <h3 className="font-serif text-lg text-[#2C3539] font-bold mb-3">{title}</h3>
                <p className="font-sans text-[#4C4C4C] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#F5F6F6]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-6">
            Ready to Grow Your Lynchburg Business?
          </h2>
          <p className="font-sans text-[#4C4C4C] leading-relaxed mb-8">
            We offer a free strategy call for new clients — no pitch, no pressure. We will look at what you are doing, where you are leaving revenue on the table, and what a realistic marketing plan looks like for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Get a Free Strategy Call
            </Link>
            <a
              href="tel:+14344855739"
              className="font-sans text-[#2C3539] text-sm font-semibold hover:text-[#61717A] transition-colors"
            >
              Or call (434) 485-5739
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
