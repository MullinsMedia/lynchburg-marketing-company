import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'SEO Company in Lynchburg, VA | Local SEO Agency | Mullins Media Co.',
    description:
      'Looking for a Lynchburg SEO agency? Mullins Media Co. helps local businesses rank on Google, drive organic traffic, and grow revenue. Starting at $750/mo. Call (434) 485-5739.',
    alternates: {
      canonical: `${siteUrl}/services/seo`,
    },
    openGraph: {
      title: 'SEO Company in Lynchburg, VA | Mullins Media Co.',
      description:
        'Lynchburg SEO agency helping local businesses rank higher, drive more traffic, and grow revenue. Starting at $750/mo.',
      url: `${siteUrl}/services/seo`,
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Search Engine Optimization (SEO)',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Mullins Media Co. — Lynchburg Marketing Company',
    url: siteUrl,
    telephone: '+14344855739',
    email: 'hello@mullinsmediaco.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lynchburg',
      addressRegion: 'VA',
      addressCountry: 'US',
    },
  },
  areaServed: {
    '@type': 'City',
    name: 'Lynchburg',
    containedInPlace: { '@type': 'State', name: 'Virginia' },
  },
  description:
    'Local and national SEO services for Lynchburg, VA businesses. Keyword research, on-page optimization, Google Business Profile management, content strategy, and citation building.',
  offers: {
    '@type': 'Offer',
    price: '750',
    priceCurrency: 'USD',
    priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'month' },
  },
}

const approach = [
  {
    step: '01',
    title: 'Keyword Research & Competitive Analysis',
    body: 'We start by understanding how your customers actually search — the specific phrases they type into Google when they need what you offer. Then we analyze your competitors to find the gaps where you can outrank them fastest.',
  },
  {
    step: '02',
    title: 'On-Page Optimization',
    body: 'Title tags, meta descriptions, header structure, internal linking, page speed, mobile usability — every technical and content element on your site gets audited and optimized so Google knows exactly what each page is about.',
  },
  {
    step: '03',
    title: 'Local Citations & Google Business Profile',
    body: 'For Lynchburg businesses, showing up in the local map pack is often more valuable than ranking #1 in organic results. We build and manage your citations across directories and fully optimize your Google Business Profile.',
  },
  {
    step: '04',
    title: 'Content Strategy & Link Building',
    body: 'Ranking requires relevance and authority. We develop a content strategy that answers the questions your customers are asking, and we build the backlink profile your site needs to outrank competitors in your niche.',
  },
]

const faqs = [
  {
    q: 'How long does SEO take to work?',
    a: 'Most clients start seeing meaningful movement in 3 to 6 months, with significant results at 6 to 12 months. SEO is not a quick fix — it is a compounding investment. The businesses that commit to it for 12 months almost always outperform the ones who try it for 90 days and quit. We are transparent about this from day one.',
  },
  {
    q: "What's the difference between local SEO and national SEO?",
    a: "Local SEO targets searches in a specific geographic area — 'plumber in Lynchburg VA' or 'best HVAC company near me.' It prioritizes your Google Business Profile, local citations, and reviews. National SEO targets broader, non-geographic keywords and is better suited for businesses that sell online or serve customers across multiple states. Most of our Lynchburg clients benefit most from a local-first approach.",
  },
  {
    q: "Do I need SEO if I'm already running Google Ads?",
    a: 'Yes — and they work better together. Google Ads put you at the top of the page instantly but stop the moment you stop paying. SEO builds organic rankings that do not cost you money per click and hold their value over time. Businesses that run both channels typically see the best results: ads drive immediate traffic while SEO builds long-term authority. We can show you exactly how to allocate budget between them.',
  },
  {
    q: 'Will you work with businesses outside of Lynchburg?',
    a: 'Yes. While we are based in Lynchburg and specialize in the Central Virginia market, we work with clients across Virginia and the Mid-Atlantic. If you are targeting national keywords, we handle that too.',
  },
]

export default function SEOPage() {
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
            SEO Services · Lynchburg, VA
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            The Lynchburg SEO Agency That Actually Gets You to Page One
          </h1>
          <p className="font-sans text-lg text-[#CBD4D7] max-w-2xl mx-auto mb-10">
            If your competitors are showing up on Google and you are not, you are losing customers every single day. We fix that — with a local SEO strategy built specifically for your business, your market, and your goals.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
          >
            Get a Free SEO Audit
          </Link>
        </div>
      </section>

      {/* What is SEO */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-8">
            What Is SEO and Why Does It Matter for Lynchburg Businesses?
          </h2>
          <div className="prose max-w-none text-[#4C4C4C]">
            <p className="font-sans leading-relaxed mb-6">
              Search engine optimization — SEO — is the practice of making your website appear higher in Google search results when people look for what you offer. If someone in Lynchburg searches for &ldquo;best HVAC company near me&rdquo; or &ldquo;Lynchburg family dentist,&rdquo; and you are not on the first page, you effectively do not exist to that customer. They are going to click one of the businesses that does appear — likely a competitor.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              The difference between local SEO and national SEO comes down to geography. Local SEO is designed to win searches in a specific area — Lynchburg, Bedford County, Amherst, Forest — by optimizing your Google Business Profile, building local citations, gathering reviews, and targeting location-specific keywords. National SEO is about ranking for broader terms across the country, which typically requires more content, more backlinks, and more time.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              For most small and mid-sized businesses in Lynchburg, local SEO is the highest-ROI marketing investment available. Unlike advertising, where you pay for every click and the traffic stops when the budget runs out, SEO rankings are an asset. Once you earn a top position, it drives traffic day after day without additional spend per visit. We have seen local businesses quadruple their website traffic within twelve months of committing to a consistent SEO strategy — and that traffic converts at a higher rate than paid traffic because the intent is there.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6 bg-[#F5F6F6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-4">
              How We Approach SEO
            </h2>
            <p className="font-sans text-[#61717A] max-w-xl mx-auto">
              No gimmicks. No &ldquo;link farms.&rdquo; No keyword stuffing. Just a systematic, white-hat approach that builds durable rankings Google actually respects.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {approach.map(({ step, title, body }) => (
              <div key={step} className="bg-white border border-[#CBD4D7] p-8">
                <p className="font-sans text-[#61717A] text-sm font-semibold mb-3">{step}</p>
                <h3 className="font-serif text-xl text-[#2C3539] font-bold mb-4">{title}</h3>
                <p className="font-sans text-[#4C4C4C] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-8">
            What Does SEO Cost?
          </h2>
          <div className="prose max-w-none text-[#4C4C4C]">
            <p className="font-sans leading-relaxed mb-6">
              Our SEO engagements start at <strong>$750 per month</strong>. That entry-level package is built for businesses that are new to SEO and want to establish a strong local foundation — Google Business Profile optimization, citation building, on-page optimization for your top 10 to 15 pages, and monthly reporting.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              For businesses targeting competitive keywords, operating in multiple locations, or wanting to add content creation (blog posts, service pages, FAQ content), our full-service SEO packages run $1,500 to $3,000 per month. These are custom-scoped based on your market, your goals, and how aggressively you want to grow.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              Every engagement starts with a free audit. We will look at where your site currently stands, what keywords are realistic targets, and what a 12-month roadmap looks like for your business specifically. There is no charge for this and no obligation to move forward.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Request a Free SEO Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                What Our Clients Have Seen
              </h2>
              <p className="font-sans text-[#CBD4D7] leading-relaxed mb-6">
                One of our clients — a local service business that had never invested in SEO before — quadrupled their website traffic within a year of working with us. The organic rankings we built combined with their Google Ads campaign created so much demand they had to turn the ads off temporarily because they could not keep up with the volume of new customers.
              </p>
              <p className="font-sans text-[#CBD4D7] leading-relaxed">
                We have helped businesses in Lynchburg grow revenue by 85% in months, scale from 3 employees to over 50, and establish dominant positions in their local markets that competitors have not been able to touch. SEO is a meaningful part of every one of those success stories.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: '4x', label: 'Website traffic increase' },
                { stat: '85%', label: 'Revenue growth in months' },
                { stat: '#1', label: 'Rankings in competitive local markets' },
                { stat: 'Zero', label: 'Cookie-cutter strategies' },
              ].map(({ stat, label }) => (
                <div key={stat} className="border border-[#61717A] p-6 text-center">
                  <p className="font-serif text-3xl font-bold text-white mb-2">{stat}</p>
                  <p className="font-sans text-xs text-[#CBD4D7]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-[#F5F6F6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-10 text-center">
            Why Choose Mullins Media Co. for SEO?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'We know the Lynchburg market',
                body: 'We have been working with local businesses here since 2013. We understand the local search landscape, which directories matter, how seasonal patterns affect search volume, and what your Lynchburg competitors are doing online.',
              },
              {
                title: 'SEO that connects to everything else',
                body: 'Our SEO is not siloed. The keyword research we do informs your ad copy. The content we create feeds your social media. Your website is optimized to convert the organic traffic we drive. Everything is integrated.',
              },
              {
                title: 'No long-term lock-in',
                body: 'We do not trap you in 24-month contracts. We believe if our work is delivering results, you will want to keep going. If it is not, you should be free to leave. We earn your business every month.',
              },
              {
                title: 'Real reporting you can understand',
                body: 'We send monthly reports that show rankings, traffic, and leads in plain language — not a 40-page PDF full of metrics that obscure whether you are actually winning. You will always know exactly where you stand.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white border border-[#CBD4D7] p-8">
                <h3 className="font-serif text-lg text-[#2C3539] font-bold mb-3">{title}</h3>
                <p className="font-sans text-[#4C4C4C] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-10">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            {faqs.map(({ q, a }) => (
              <div key={q} className="border-b border-[#CBD4D7] pb-8">
                <h3 className="font-serif text-lg text-[#2C3539] font-bold mb-3">{q}</h3>
                <p className="font-sans text-[#4C4C4C] text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 px-6 bg-[#F5F6F6]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-[#61717A] text-sm uppercase tracking-widest mb-6">Related Services</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/services/advertising"
              className="font-sans text-sm font-semibold text-[#2C3539] uppercase tracking-widest border border-[#CBD4D7] px-8 py-4 hover:border-[#61717A] transition-colors"
            >
              Advertising (Google Ads &amp; More)
            </Link>
            <Link
              href="/services/content-marketing"
              className="font-sans text-sm font-semibold text-[#2C3539] uppercase tracking-widest border border-[#CBD4D7] px-8 py-4 hover:border-[#61717A] transition-colors"
            >
              Content Marketing
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Your Specialist */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-10 text-center">Meet Your Specialist</p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/a3fe5367-fd6b-48f6-8db1-217abf513504/Mullins+Media+Headshots+2025-16.jpg"
                alt="Adam Mullins, Founder of Mullins Media Co."
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Adam Mullins</h2>
              <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-6">Founder &amp; SEO Strategist</p>
              <p className="font-sans text-[#CBD4D7] leading-relaxed">
                Adam Mullins leads SEO strategy for Mullins Media Co. He has been building organic search campaigns in Lynchburg since 2013 and built this very site — LynchburgMarketingCompany.com — over a weekend as a live SEO experiment. It ranked on Google without a single paid ad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Let&apos;s Get You to the Top of Google
          </h2>
          <p className="font-sans text-[#CBD4D7] leading-relaxed mb-10">
            Start with a free SEO audit. We will look at where your site currently ranks, where your competitors are beating you, and what a realistic path to page one looks like for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Get Your Free Audit
            </Link>
            <a
              href="tel:+14344855739"
              className="font-sans text-[#CBD4D7] text-sm font-semibold hover:text-white transition-colors"
            >
              Or call (434) 485-5739
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
