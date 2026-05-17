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

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Lynchburg Marketing Company',
  description:
    'SEO, digital marketing, and advertising agency serving Lynchburg, Virginia',
  url: 'https://lynchburgmarketingcompany.com',
  telephone: '',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lynchburg',
    addressRegion: 'VA',
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
      'Get your Lynchburg business found on Google. We build content strategies and technical SEO that drives organic traffic.',
  },
  {
    icon: '✍️',
    title: 'Content Marketing',
    description:
      'Blog posts, landing pages, and copy that ranks. Real content written for real people — and optimized for search engines.',
  },
  {
    icon: '📱',
    title: 'Social Media',
    description:
      'Build a presence where your Lynchburg customers spend their time. Strategy, content, and management that actually works.',
  },
  {
    icon: '📣',
    title: 'Paid Advertising',
    description:
      'Google Ads and social campaigns that convert. We run Lynchburg advertising that spends your budget wisely.',
  },
  {
    icon: '💻',
    title: 'Website Design',
    description:
      'Fast, modern websites built to convert visitors into leads. Clean design, mobile-first, and built to rank.',
  },
  {
    icon: '📍',
    title: 'Local SEO',
    description:
      'Dominate local search results in Lynchburg, VA. Google Business Profile, local citations, and map pack optimization.',
  },
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
            If you want this kind of thinking applied to your Lynchburg business, you know where to find us.
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
