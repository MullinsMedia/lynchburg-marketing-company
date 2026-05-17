import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { getPublishedPosts } from '@/lib/blog'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export const metadata: Metadata = {
  title: 'Lynchburg Marketing Company | Local SEO & Advertising in Lynchburg VA',
  description:
    'Lynchburg Marketing Company delivers SEO, local advertising, and digital marketing for businesses in Lynchburg, Virginia. Get found on Google.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Lynchburg Marketing Company | Local SEO & Advertising in Lynchburg VA',
    description: "Get found on Google with Lynchburg's most self-aware marketing company.",
    url: siteUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lynchburg Marketing Company | Local SEO & Advertising in Lynchburg VA',
    description: "Get found on Google with Lynchburg's most self-aware marketing company.",
  },
}

const phone = process.env.NEXT_PUBLIC_PHONE

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lynchburg Marketing Company',
  description:
    'SEO, digital marketing, and advertising agency serving Lynchburg, Virginia',
  url: 'https://lynchburgmarketingcompany.com',
  ...(phone ? { telephone: phone } : {}),
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lynchburg',
    addressRegion: 'VA',
    postalCode: '24501',
    addressCountry: 'US',
  },
  areaServed: {
    '@type': 'City',
    name: 'Lynchburg',
    sameAs: 'https://en.wikipedia.org/wiki/Lynchburg,_Virginia',
  },
  sameAs: ['https://mullinsmediaco.com'],
}

const services = [
  {
    icon: '🔍',
    title: 'SEO & Search Ranking',
    description:
      'Get your Lynchburg business found on Google. We build content strategies, technical SEO foundations, and link profiles that drive lasting organic traffic — not quick tricks that stop working next quarter.',
  },
  {
    icon: '✍️',
    title: 'Content Marketing',
    description:
      'Blog posts, landing pages, and copy that ranks. Real content written for real people — researched for search intent, optimized for keywords, and published on a consistent schedule.',
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    description:
      'Build a presence where your Lynchburg customers spend their time. We handle strategy, content creation, scheduling, and community management — so you can focus on your business.',
  },
  {
    icon: '📣',
    title: 'Paid Advertising',
    description:
      'Google Ads, social campaigns, and local advertising that converts. We manage your budget, write the ads, test the audiences, and report what actually works.',
  },
  {
    icon: '💻',
    title: 'Website Design',
    description:
      'Fast, modern websites built to convert visitors into leads. Clean design, mobile-first, and engineered to rank in search from day one. We have designed dozens of sites for Lynchburg businesses.',
  },
  {
    icon: '📍',
    title: 'Local SEO',
    description:
      'Dominate local search results in Lynchburg, VA. We optimize your Google Business Profile, build local citations, target map pack keywords, and help you outrank competitors in your own backyard.',
  },
]

const stats = [
  { value: '15+', label: 'Years in Lynchburg' },
  { value: '5,000+', label: 'Properties photographed' },
  { value: '2013', label: 'Year founded' },
  { value: '9', label: 'Person team' },
]

const clients = [
  'Happy Waffle',
  'Artisan Venue',
  'City View Venue',
  'Avoca',
  'Leisr Stays',
]

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
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#CBD4D7] text-sm uppercase tracking-widest font-sans mb-6">
            Lynchburg, Virginia
          </p>
          <h1 className="text-5xl sm:text-6xl font-serif font-semibold leading-tight mb-6 text-white">
            Lynchburg Marketing Company
          </h1>
          <p className="text-lg sm:text-xl text-[#97a8b0] mb-10 max-w-2xl mx-auto leading-relaxed font-sans font-light">
            The only marketing company in Lynchburg, VA that openly admits they built this website to rank on Google.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">What We Do</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2C3539] mb-4">
              Marketing Services for Lynchburg Businesses
            </h2>
            <p className="text-[#61717A] max-w-2xl mx-auto font-sans font-light leading-relaxed">
              From local SEO to paid advertising, we help businesses in Lynchburg, VA get found, get leads, and grow.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div
                key={service.title}
                className="bg-[#F5F6F6] border border-[#CBD4D7] p-8 hover:border-[#61717A] transition-colors"
              >
                <div className="text-2xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-serif font-semibold text-[#2C3539] mb-3">{service.title}</h3>
                <p className="text-[#61717A] text-sm leading-relaxed font-sans font-light">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-[#2C3539]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-4xl font-semibold text-white mb-1">{s.value}</p>
              <p className="text-xs font-sans text-[#97a8b0] uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 px-4 bg-[#F5F6F6] border-y border-[#CBD4D7]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">Why Mullins Media Co.</p>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2C3539] mb-6">
                A Lynchburg marketing team that actually shows up
              </h2>
              <p className="text-[#4C4C4C] leading-relaxed mb-4 font-sans font-light">
                Adam Mullins started building marketing strategies in Lynchburg over 15 years ago.
                Since founding Mullins Media Co. in 2013, the agency has grown into a nine-person team
                covering everything from SEO and paid advertising to website design, photography, video,
                and social media.
              </p>
              <p className="text-[#4C4C4C] leading-relaxed mb-8 font-sans font-light">
                We are not a national agency that treats Lynchburg like a zip code. We live here, work
                here, and understand the local market in a way that outsiders simply cannot. When you
                work with us, you get real people who answer the phone and do not miss deadlines.
              </p>
              <blockquote className="border-l-4 border-[#61717A] pl-6 italic text-[#61717A] font-sans font-light leading-relaxed">
                &ldquo;We show up. We answer the phone. We don&apos;t miss deadlines. We walk alongside you
                to help your company grow.&rdquo;
              </blockquote>
            </div>
            <div className="space-y-4">
              {[
                { heading: 'Local expertise', body: 'We have worked with Lynchburg businesses across dozens of industries. We know the market, the competition, and what it takes to rank here.' },
                { heading: 'Full-service team', body: 'One agency for SEO, ads, content, social, design, photography, and video. No juggling multiple vendors or losing context between them.' },
                { heading: 'Limited client roster', body: 'We only onboard a limited number of marketing clients at a time. You get actual attention — not a shared account manager stretched across 50 brands.' },
                { heading: 'Transparent strategy', body: 'We tell you exactly what we are doing and why. No black boxes, no vague reports. You will always know where your money is going.' },
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

      {/* Clients */}
      <section className="py-16 px-4 bg-white border-b border-[#CBD4D7]">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-8">Trusted by Lynchburg businesses</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {clients.map(client => (
              <span key={client} className="font-serif text-lg text-[#CBD4D7] font-semibold">{client}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Honest disclaimer */}
      <section className="py-20 px-4 bg-[#F5F6F6] border-y border-[#CBD4D7]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">Full transparency</p>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-[#2C3539] mb-6">
            Let&apos;s be honest with you
          </h2>
          <p className="text-[#4C4C4C] leading-relaxed mb-4 font-sans font-light">
            Yes, this website exists specifically to rank on Google for &ldquo;Lynchburg Marketing Company.&rdquo; That&apos;s not a bug — it&apos;s a feature. We&apos;re a marketing agency. This is literally what we do, and we&apos;re doing it in public so you can watch how it works. Meta, right?
          </p>
          <p className="text-[#4C4C4C] leading-relaxed mb-10 font-sans font-light">
            We build content systems, optimize for local search, and help businesses compete in Lynchburg and beyond. This site is a live demonstration that it works. If you want this kind of strategy applied to your business, you know where to find us.
          </p>
          <a
            href="https://mullinsmediaco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#2C3539] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#61717A] transition-colors"
          >
            Visit Mullins Media Co →
          </a>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-2">From the Blog</p>
              <h2 className="text-3xl font-serif font-semibold text-[#2C3539]">Latest from Lynchburg</h2>
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
                Content is coming soon. We&apos;re loading up the Lynchburg marketing blog with useful stuff.
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

      {/* Bottom CTA */}
      <section className="py-24 px-4 bg-[#2C3539] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-4">Ready to grow?</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6">
            Ready to dominate your local market?
          </h2>
          <p className="text-[#97a8b0] text-lg mb-10 font-sans font-light leading-relaxed">
            We&apos;re a real digital marketing agency in Lynchburg, VA. We can help your business rank on Google, generate leads, and grow.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
