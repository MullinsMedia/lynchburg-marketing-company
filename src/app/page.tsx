import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { getPublishedPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Lynchburg Marketing Company | Local SEO & Advertising in Lynchburg VA',
  description:
    'Lynchburg Marketing Company delivers SEO, local advertising, and digital marketing for businesses in Lynchburg, Virginia. Get found on Google.',
  openGraph: {
    title: 'Lynchburg Marketing Company | Local SEO & Advertising in Lynchburg VA',
    description: "Get found on Google with Lynchburg's most self-aware marketing company.",
    images: ['/og-home.jpg'],
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
      <section className="bg-gray-900 text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight mb-6">
            Lynchburg Marketing Company
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            The only marketing company in Lynchburg, VA that openly admits they built this website to rank on Google.
          </p>
          <a
            href="https://mullinsmediaco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E63946] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
          >
            Work With Us at Mullins Media Co →
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
            Marketing Services for Lynchburg Businesses
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            From local SEO to paid advertising, we help businesses in Lynchburg, VA get found, get leads, and grow.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(service => (
              <div
                key={service.title}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:border-[#E63946] transition-colors"
              >
                <div className="text-3xl mb-3">{service.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honest disclaimer */}
      <section className="py-16 px-4 bg-[#E63946]">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-2xl font-extrabold mb-4">Let&apos;s be honest with you</h2>
          <p className="text-lg leading-relaxed mb-6">
            Yes, this website exists specifically to rank on Google for &ldquo;Lynchburg Marketing Company.&rdquo; That&apos;s not a bug — it&apos;s a feature. We&apos;re a marketing agency. This is literally what we do, and we&apos;re doing it in public so you can watch how it works. Meta, right?
          </p>
          <p className="text-lg leading-relaxed mb-8">
            If you want this kind of thinking applied to your Lynchburg business, you know where to find us.
          </p>
          <a
            href="https://mullinsmediaco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#E63946] font-bold text-lg px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Visit mullinsmediaco.com →
          </a>
        </div>
      </section>

      {/* Blog teaser */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">Latest from the Blog</h2>
            <Link href="/blog" className="text-[#E63946] font-semibold hover:underline">
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
            <div className="bg-white border border-gray-200 rounded-xl p-12 text-center">
              <p className="text-gray-500 text-lg">
                Content is coming soon. We&apos;re loading up the Lynchburg marketing blog with useful stuff.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-4">
            Ready to dominate your local market?
          </h2>
          <p className="text-gray-300 text-lg mb-8">
            We&apos;re a real digital marketing agency in Lynchburg, VA. We can help your business rank on Google, generate leads, and grow. Let&apos;s talk.
          </p>
          <a
            href="https://mullinsmediaco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E63946] text-white font-bold text-lg px-8 py-4 rounded-lg hover:bg-red-700 transition-colors"
          >
            Let&apos;s Talk at Mullins Media Co →
          </a>
        </div>
      </section>
    </>
  )
}
