import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { getPublishedPosts } from '@/lib/blog'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export const metadata: Metadata = {
  title: 'Lynchburg Marketing Company | Local SEO & Advertising in Lynchburg VA',
  description:
    'Lynchburg Marketing Company — powered by Mullins Media Co. — delivers SEO, local advertising, paid media, social management, and website design for businesses in Lynchburg, VA. Get found on Google.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Lynchburg Marketing Company | Local SEO & Advertising in Lynchburg VA',
    description: "Lynchburg's full-service marketing agency. SEO, advertising, social media, and web design for businesses in Lynchburg, VA.",
    url: siteUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lynchburg Marketing Company | Local SEO & Advertising in Lynchburg VA',
    description: "Lynchburg's full-service marketing agency. SEO, advertising, social media, and web design for businesses in Lynchburg, VA.",
  },
}

const phone = process.env.NEXT_PUBLIC_PHONE || '(434) 485-5739'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lynchburg Marketing Company',
  description: 'Full-service marketing and advertising agency serving Lynchburg, Virginia — SEO, paid ads, social media, website design, content, and brand strategy.',
  url: 'https://lynchburgmarketingcompany.com',
  telephone: '434-485-5739',
  email: 'hello@mullinsmediaco.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lynchburg',
    addressRegion: 'VA',
    postalCode: '24501',
    addressCountry: 'US',
  },
  areaServed: [
    { '@type': 'City', name: 'Lynchburg', sameAs: 'https://en.wikipedia.org/wiki/Lynchburg,_Virginia' },
    { '@type': 'City', name: 'Forest' },
    { '@type': 'City', name: 'Bedford' },
    { '@type': 'City', name: 'Amherst' },
    { '@type': 'City', name: 'Appomattox' },
    { '@type': 'City', name: 'Roanoke' },
  ],
  sameAs: [
    'https://mullinsmediaco.com',
    'https://www.instagram.com/mullinsmediaco/',
    'https://www.facebook.com/MullinsMediaCo/',
  ],
  founder: {
    '@type': 'Person',
    name: 'Adam Mullins',
  },
  foundingDate: '2013',
}

const services = [
  {
    title: 'Search Engine Optimization',
    description:
      'We get your Lynchburg business found on Google — and keep it there. Content strategy, technical SEO, local keyword targeting, and link building that drives organic traffic month after month. SEO is $750/mo as a standalone service.',
    keywords: ['Lynchburg SEO', 'local SEO Lynchburg VA', 'search engine optimization Lynchburg'],
  },
  {
    title: 'Pay-Per-Click Advertising',
    description:
      'Google Ads and paid social campaigns that convert browsers into customers. We have quadrupled website traffic for clients in weeks and built campaigns so effective we were asked to turn them off because the client could not keep up with orders.',
    keywords: ['Google Ads Lynchburg', 'PPC advertising Lynchburg VA', 'paid search Lynchburg'],
  },
  {
    title: 'Social Media Management',
    description:
      'Strategy, content creation, scheduling, and community management across every platform your customers use. We build a social presence that actually tells your story — not just posts for the sake of posting.',
    keywords: ['social media management Lynchburg', 'social media marketing Lynchburg VA'],
  },
  {
    title: 'Website Design & Development',
    description:
      'Fast, conversion-focused websites starting at $3,000. We handle everything — branding, photos, copy, development, and launch. Built on platforms that work: WordPress, Shopify, and more. Designed to rank from day one.',
    keywords: ['website design Lynchburg VA', 'web design Lynchburg', 'website development Lynchburg'],
  },
  {
    title: 'TV, Radio & Billboard Advertising',
    description:
      'We are a media partner with WSET (local TV), WLNI (radio), and Central Virginia Home Magazine. 3-month brand awareness campaigns starting at $1,900 for print, $4,900 for radio, and $9,990 for TV — all produced in-house.',
    keywords: ['Lynchburg advertising', 'TV advertising Lynchburg VA', 'radio advertising Lynchburg'],
  },
  {
    title: 'Brand Identity & Content',
    description:
      'Logo design, brand guidelines, photography, video, and email marketing. We have grown revenue 85% in months and scaled businesses from 3 employees to 50+ in just a few years. Content is how brands win.',
    keywords: ['branding Lynchburg VA', 'content marketing Lynchburg', 'marketing agency Lynchburg'],
  },
]

const results = [
  { stat: '85%', label: 'Revenue growth for a Lynchburg client in just a few months' },
  { stat: '3→50+', label: 'Employees: one client scaled their team in a few years' },
  { stat: '4×', label: 'Website traffic increase in a matter of weeks' },
  { stat: '5,000+', label: 'Properties photographed across central Virginia' },
]

const clientLogos = [
  { name: 'The Happy Waffle', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/a4757f7b-82f4-4b44-9c37-49fa39e3a40e/Happy+Waffle.png' },
  { name: 'Saltus Aesthetics', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/bf6a5777-6db3-4390-8cad-a565ef8efa59/Saltus+Aesthetics.png' },
  { name: 'City View Venues', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/33b24f93-e837-4b0c-8cfd-9740bdf5e727/City+View+%281%29.png' },
  { name: 'Avoca', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/c38bbaa6-ee74-46b0-8520-3864d588e567/Avoca.png' },
  { name: 'Leisr Stays', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/35eb2749-96cb-4eb3-bf40-18df4fdb9056/Liesr+Stays.png' },
  { name: 'Impact Autism Services', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/abc697c0-bff9-4279-b880-114840dc51f3/IAS.png' },
]

const mediaPartners = ['WSET TV', 'WLNI Radio', 'Central Virginia Home Magazine', 'Billboards']

const serviceAreas = ['Lynchburg', 'Forest', 'Bedford', 'Smith Mountain Lake', 'Amherst', 'Appomattox', 'Roanoke', 'Central Virginia']

export default async function HomePage() {
  const allPosts = await getPublishedPosts()
  const recentPosts = allPosts.slice(0, 3)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="bg-[#2C3539] text-white py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#CBD4D7] text-xs uppercase tracking-widest font-sans mb-6">
                Lynchburg, Virginia · Est. 2013
              </p>
              <h1 className="text-5xl sm:text-6xl font-serif font-semibold leading-tight mb-6 text-white">
                Lynchburg&apos;s Full-Service Marketing &amp; Advertising Company
              </h1>
              <p className="text-lg text-[#97a8b0] mb-10 leading-relaxed font-sans font-light">
                We are a real marketing agency based in Lynchburg, VA. SEO, paid advertising, social media,
                TV &amp; radio, website design, and content — all under one roof, all built to grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-[#4f6069] transition-colors text-center"
                >
                  Get a Free Consultation
                </Link>
                <a
                  href={`tel:${phone.replace(/\D/g, '')}`}
                  className="inline-block border border-[#61717A] text-[#CBD4D7] font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-white hover:text-white transition-colors text-center"
                >
                  {phone}
                </a>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 overflow-hidden hidden lg:block">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/4375cd1b-e144-4dad-8820-b66b39caab5d/Mullins+Media+2024-84.jpg"
                alt="Mullins Media Co. team — Lynchburg marketing and advertising agency"
                fill
                className="object-cover object-top"
                priority
                sizes="(max-width: 1024px) 0px, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-12 px-4 bg-[#F5F6F6] border-b border-[#CBD4D7]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: '15+', label: 'Years in Lynchburg' },
            { value: '5,000+', label: 'Projects completed' },
            { value: '2013', label: 'Year founded' },
            { value: '9', label: 'Person team' },
          ].map(s => (
            <div key={s.label}>
              <p className="font-serif text-3xl font-semibold text-[#2C3539] mb-1">{s.value}</p>
              <p className="text-xs font-sans text-[#61717A] uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 bg-white" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2C3539] mb-4">
              Marketing &amp; Advertising Services for Lynchburg Businesses
            </h2>
            <p className="text-[#61717A] max-w-2xl mx-auto font-sans font-light leading-relaxed">
              From local SEO and Google Ads to TV commercials, social media, and website design — we handle
              every channel your Lynchburg customers use to find businesses like yours.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <div
                key={service.title}
                className="bg-[#F5F6F6] border border-[#CBD4D7] p-8 hover:border-[#61717A] transition-colors"
              >
                <h3 className="text-lg font-serif font-semibold text-[#2C3539] mb-3">{service.title}</h3>
                <p className="text-[#61717A] text-sm leading-relaxed font-sans font-light">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block bg-[#2C3539] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#61717A] transition-colors"
            >
              Talk About Your Business →
            </Link>
          </div>
        </div>
      </section>

      {/* Real results */}
      <section className="py-20 px-4 bg-[#2C3539] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-3">Proven Results</p>
            <h2 className="text-3xl font-serif font-semibold mb-4">
              Real outcomes for real Lynchburg businesses
            </h2>
            <p className="text-[#97a8b0] font-sans font-light max-w-xl mx-auto leading-relaxed">
              We have grown revenue, scaled teams, and dominated search results for clients throughout
              central Virginia. These are not projections — they are things that actually happened.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map(r => (
              <div key={r.stat} className="border border-[#61717A] p-8 text-center">
                <p className="font-serif text-4xl font-semibold text-white mb-3">{r.stat}</p>
                <p className="text-sm text-[#97a8b0] font-sans font-light leading-relaxed">{r.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-white border-b border-[#CBD4D7]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-8">What clients say</p>
          <blockquote className="font-serif text-xl sm:text-2xl text-[#2C3539] leading-relaxed font-semibold mb-6">
            &ldquo;Adam and his team are the best! Our business uses them for product and project photos regularly.
            They created our two websites and manage them, make our ads and videos, and even designed our business
            cards. They are creative, detailed, and literally so fun to work with!&rdquo;
          </blockquote>
          <p className="text-sm text-[#61717A] font-sans uppercase tracking-widest">Curtains, Blinds &amp; Bath — Lynchburg, VA</p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 px-4 bg-[#F5F6F6]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">Why Mullins Media Co.</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2C3539] mb-6">
                A Lynchburg marketing team that lives here, works here, and knows this market
              </h2>
              <p className="text-[#4C4C4C] leading-relaxed mb-4 font-sans font-light">
                Adam Mullins started building content and marketing strategies in Lynchburg over 15 years ago.
                He founded Mullins Media Co. in 2013 and has since assembled a nine-person team covering
                every marketing and media discipline a growing business needs.
              </p>
              <p className="text-[#4C4C4C] leading-relaxed mb-6 font-sans font-light">
                We are not a national agency that treats Lynchburg like a ZIP code. We have advertised on
                WSET, placed billboards around the city, been featured in Central Virginia Home Magazine, and
                helped dozens of local businesses build brands people actually remember.
              </p>
              <blockquote className="border-l-4 border-[#61717A] pl-6 italic text-[#61717A] font-sans font-light leading-relaxed">
                &ldquo;We show up. We answer the phone. We don&apos;t miss deadlines. We walk alongside you
                to help your company grow.&rdquo;
              </blockquote>
            </div>
            <div className="space-y-4">
              {[
                {
                  heading: 'Full-service under one roof',
                  body: 'SEO, paid ads, social, TV, radio, billboards, websites, photography, video, and email — no juggling multiple vendors. One team, one strategy, one point of contact.',
                },
                {
                  heading: 'Lynchburg-specific expertise',
                  body: 'We know the Lynchburg market, the local media landscape, and the competitive dynamics across dozens of industries in central Virginia.',
                },
                {
                  heading: 'Limited client roster',
                  body: 'We only onboard a limited number of marketing clients at a time. You get real attention — not a shared account manager stretched across 50 accounts.',
                },
                {
                  heading: 'One size does not fit all',
                  body: 'Every strategy is built around your specific business, audience, and goals. We customize every campaign, every piece of content, every ad dollar spent.',
                },
              ].map(item => (
                <div key={item.heading} className="bg-white border border-[#CBD4D7] p-6">
                  <p className="font-serif font-semibold text-[#2C3539] mb-2">{item.heading}</p>
                  <p className="text-sm text-[#61717A] font-sans font-light leading-relaxed">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media partners */}
      <section className="py-14 px-4 bg-white border-y border-[#CBD4D7]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-center text-[#61717A] uppercase tracking-widest font-sans mb-8">Media Partners &amp; Advertising Channels</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            {mediaPartners.map(p => (
              <span key={p} className="font-serif text-lg font-semibold text-[#CBD4D7]">{p}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-20 px-4 bg-[#F5F6F6]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-center text-[#61717A] uppercase tracking-widest font-sans mb-10">Trusted by Lynchburg businesses</p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
            {clientLogos.map(logo => (
              <div key={logo.name} className="relative h-12 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
                <Image
                  src={logo.url}
                  alt={logo.name}
                  fill
                  className="object-contain"
                  sizes="120px"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-2">From the Blog</p>
              <h2 className="text-3xl font-serif font-semibold text-[#2C3539]">Marketing Insights for Lynchburg Businesses</h2>
            </div>
            <Link href="/blog" className="text-sm text-[#61717A] font-sans font-medium uppercase tracking-widest hover:text-[#2C3539] transition-colors hidden sm:block">
              View all →
            </Link>
          </div>

          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-[#F5F6F6] border border-[#CBD4D7] p-16 text-center">
              <p className="text-[#61717A] font-sans font-light text-lg">
                Content is coming soon. We&apos;re building out the Lynchburg marketing blog with useful SEO tips,
                advertising guides, and local business growth strategies.
              </p>
            </div>
          )}

          <div className="mt-6 sm:hidden text-center">
            <Link href="/blog" className="text-sm text-[#61717A] font-sans font-medium uppercase tracking-widest hover:text-[#2C3539] transition-colors">
              View all posts →
            </Link>
          </div>
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 px-4 bg-[#F5F6F6] border-t border-[#CBD4D7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">Service Area</p>
          <h2 className="font-serif text-2xl font-semibold text-[#2C3539] mb-4">
            Serving businesses across central Virginia
          </h2>
          <p className="text-[#61717A] font-sans font-light mb-6">
            We primarily serve Lynchburg and the surrounding region:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map(area => (
              <span
                key={area}
                className="text-xs font-sans font-semibold uppercase tracking-widest px-3 py-1.5 border border-[#CBD4D7] text-[#61717A]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Honest disclaimer */}
      <section className="py-20 px-4 bg-white border-y border-[#CBD4D7]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">Full transparency</p>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2C3539] mb-6">
            Yes, this website is an SEO experiment. And it&apos;s working.
          </h2>
          <p className="text-[#4C4C4C] leading-relaxed mb-4 font-sans font-light">
            Lynchburg Marketing Company is a site we built specifically to rank on Google for terms like
            &ldquo;Lynchburg marketing company,&rdquo; &ldquo;Lynchburg advertising company,&rdquo; and
            &ldquo;SEO agency Lynchburg VA.&rdquo; If you found us through one of those searches, the strategy worked.
          </p>
          <p className="text-[#4C4C4C] leading-relaxed mb-10 font-sans font-light">
            Behind this site is Mullins Media Co. — a real agency with a real team, real clients, and over a
            decade of proven results in Lynchburg. We do this kind of strategic marketing for our clients
            too. Want to see what it looks like when it&apos;s pointed at your business?
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#2C3539] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#61717A] transition-colors"
          >
            Let&apos;s Talk About Your Business →
          </Link>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 bg-[#2C3539] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-4">Ready to grow?</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6">
            Ready to dominate your local market in Lynchburg?
          </h2>
          <p className="text-[#97a8b0] text-lg mb-10 font-sans font-light leading-relaxed">
            We are a full-service marketing and advertising agency in Lynchburg, VA. We can get you
            ranking on Google, running ads that convert, and building a brand that lasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Get Your Free Consultation
            </Link>
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              className="inline-block border border-[#61717A] text-[#CBD4D7] font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:border-white hover:text-white transition-colors"
            >
              Call {phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
