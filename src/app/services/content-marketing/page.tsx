import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Content Marketing in Lynchburg, VA | Blog, Video & Email | Mullins Media Co.',
    description:
      'Content marketing for Lynchburg businesses. Blog posts, video scripts, email campaigns, and more — content that builds authority, drives organic traffic, and converts readers into customers.',
    alternates: {
      canonical: `${siteUrl}/services/content-marketing`,
    },
    openGraph: {
      title: 'Content Marketing in Lynchburg, VA | Mullins Media Co.',
      description:
        'Blog posts, email campaigns, video scripts, and SEO content for Lynchburg businesses. Content that builds authority and drives real results.',
      url: `${siteUrl}/services/content-marketing`,
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Content Marketing',
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
    'Content marketing for Lynchburg, VA businesses. Blog writing, email campaigns, video scripts, landing page copy, and SEO content strategy to build authority and drive organic growth.',
}

const contentTypes = [
  {
    type: 'Blog Posts & Articles',
    description: 'Long-form content that answers your customers\' most common questions, establishes your expertise, and earns Google rankings for keywords your competitors are ignoring.',
  },
  {
    type: 'Email Marketing',
    description: 'Newsletters, promotional sequences, and nurture campaigns that keep your audience engaged and drive repeat business from people who already know you.',
  },
  {
    type: 'Video Scripts',
    description: 'Scripts for YouTube videos, social media content, TV commercials, and explainer videos — written to be engaging on camera and optimized for the platform.',
  },
  {
    type: 'Website Copy',
    description: 'Service pages, about pages, landing pages, and homepage copy that speaks clearly to your ideal customer and tells them exactly why they should choose you.',
  },
  {
    type: 'Social Media Content',
    description: 'Captions, post copy, and content calendars that give your social media team a consistent voice and clear direction — or that we execute for you through our social media management service.',
  },
  {
    type: 'Case Studies & Testimonials',
    description: 'Written case studies that turn your best client results into credible, shareable stories — the most persuasive marketing asset most businesses never bother to create.',
  },
]

const approach = [
  {
    step: '01',
    title: 'Understand Your Audience',
    body: 'Before we write anything, we learn who your customers are, what they care about, and what questions they are asking — before, during, and after they buy from you. Content that does not speak to a real person does not perform.',
  },
  {
    step: '02',
    title: 'Build a Content Strategy',
    body: 'We map out a content plan tied to your business goals and your SEO keyword targets. Every piece of content we create serves a strategic purpose — driving search traffic, nurturing email subscribers, or converting landing page visitors.',
  },
  {
    step: '03',
    title: 'Create and Publish',
    body: 'Our writers produce content that sounds like your brand — informed, specific, and useful. We do not outsource to content farms. Every piece is researched, written, and edited in-house, and we handle publishing so you never have to.',
  },
  {
    step: '04',
    title: 'Measure and Refine',
    body: 'We track which content is driving traffic, which is converting readers into leads, and which topics are resonating with your audience. We use that data to improve the strategy and do more of what is working.',
  },
]

const faqs = [
  {
    q: 'How does content marketing actually drive revenue?',
    a: "Content marketing drives revenue in two ways. First, it earns organic search traffic — a well-written blog post targeting the right keyword can sit at the top of Google for years, sending a steady stream of relevant visitors to your site without ongoing ad spend. Second, it builds trust. People who read three helpful articles from your company before ever reaching out are far more likely to hire you than people who see one ad. The content does the relationship-building before the first conversation even happens.",
  },
  {
    q: 'How long does it take to see results from content marketing?',
    a: "Organic content takes time to build momentum — typically 3 to 6 months before you see meaningful traffic from blog content, and 6 to 12 months to see significant ranking improvements. Email marketing and social media content can drive engagement immediately. Content marketing is a long-term investment, and it compounds: content you publish today can drive traffic for years, while the cost of creating it is a one-time expense.",
  },
  {
    q: 'Do you write in our brand voice, or does it sound like a generic agency?',
    a: "We spend time learning your brand voice before we write a single word. We interview you, review your existing content, and study how your best customers talk about your business. Then we write content that sounds like you — not like a marketing agency trying to impersonate you. Most of our clients say our content sounds more like them than what they write themselves.",
  },
  {
    q: 'How does content marketing work with SEO?',
    a: "They are inseparable. SEO without content has nothing to rank. Content without SEO gets no search traffic. Our content strategy is built around keyword research — every blog post and service page we create is designed to rank for specific terms your customers are searching. If you are also on our SEO plan, we coordinate the content calendar with your overall keyword strategy so everything builds toward the same goals.",
  },
]

export default function ContentMarketingPage() {
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
            Content Marketing · Lynchburg, VA
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Content That Builds Your Authority and Drives Real Traffic
          </h1>
          <p className="font-sans text-lg text-[#CBD4D7] max-w-2xl mx-auto mb-10">
            Blog posts, email campaigns, video scripts, and website copy — all written by our team, in your voice, with a clear strategy behind every word. Content marketing for Lynchburg businesses that want to be the obvious choice in their market.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
          >
            Talk About Your Content Strategy
          </Link>
        </div>
      </section>

      {/* What Is Content Marketing */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-8">
            What Content Marketing Is — and Why Most Lynchburg Businesses Get It Wrong
          </h2>
          <div className="prose max-w-none text-[#4C4C4C]">
            <p className="font-sans leading-relaxed mb-6">
              Content marketing is the practice of creating genuinely useful, interesting content that attracts your ideal customers — rather than interrupting them with ads. When someone searches &ldquo;how much does a new roof cost in Virginia&rdquo; and lands on a detailed, well-written article from a local roofing company, that article has done more marketing work than most paid ads. The reader found the answer they were looking for, they trust the company that provided it, and when they are ready to get quotes, that company is the first one they call.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              The mistake most businesses make is treating content as an afterthought — something you do when you have extra time, usually by posting generic social media content that no one reads. Real content marketing is strategic. It starts with understanding exactly what your customers are searching for and what questions they have before, during, and after they buy. Then it produces content that answers those questions better than anyone else — consistently, over time, on the platforms where your customers spend their time.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              Done right, content marketing creates a compounding return. A blog post written today can drive organic search traffic for three to five years. An email newsletter built over two years becomes a direct line to thousands of warm leads. A YouTube channel with 50 helpful videos becomes your best salesperson — one that works 24 hours a day and never asks for a raise. The businesses in Lynchburg that are hardest to compete with have usually been investing in content for years. The best time to start was five years ago. The second best time is now.
            </p>
          </div>
        </div>
      </section>

      {/* What We Create */}
      <section className="py-20 px-6 bg-[#F5F6F6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-4">
              What We Create
            </h2>
            <p className="font-sans text-[#61717A] max-w-xl mx-auto">
              Every content format serves a different role in your marketing strategy. We help you figure out which ones to prioritize and then execute them properly.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contentTypes.map(({ type, description }) => (
              <div key={type} className="bg-white border border-[#CBD4D7] p-8">
                <h3 className="font-serif text-lg text-[#2C3539] font-bold mb-4">{type}</h3>
                <p className="font-sans text-[#4C4C4C] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-4">
              How We Approach Content Marketing
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {approach.map(({ step, title, body }) => (
              <div key={step} className="border border-[#CBD4D7] p-8">
                <p className="font-sans text-[#61717A] text-sm font-semibold mb-3">{step}</p>
                <h3 className="font-serif text-xl text-[#2C3539] font-bold mb-4">{title}</h3>
                <p className="font-sans text-[#4C4C4C] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 px-6 bg-[#F5F6F6]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-8">
            Investment
          </h2>
          <div className="prose max-w-none text-[#4C4C4C]">
            <p className="font-sans leading-relaxed mb-6">
              Content marketing packages are custom-scoped based on what types of content you need, how frequently you need it, and which channels you are prioritizing. A typical content marketing engagement for a Lynchburg business might include two blog posts per month, a monthly email newsletter, and content strategy consultation — running $1,000 to $2,000 per month depending on scope.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              Many of our clients bundle content marketing with their{' '}
              <Link href="/services/seo" className="text-[#61717A] hover:underline">
                SEO package
              </Link>{' '}
              or their{' '}
              <Link href="/services/social-media" className="text-[#61717A] hover:underline">
                social media management
              </Link>
              , since the content we create serves both channels. Bundled pricing is available for clients that want a comprehensive content + SEO approach.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              We also work on a project basis for businesses that need a specific piece of content — a full website copy rewrite, a series of case studies, or a launch email sequence. Reach out and tell us what you are working on.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Get a Custom Content Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 text-center">
            Why Choose Mullins Media Co. for Content Marketing?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Strategy first, always',
                body: 'We do not just produce content — we build a strategy behind it. Every piece of content we create is tied to a specific business goal, a keyword target, or an audience segment. Random acts of content are a waste of money.',
              },
              {
                title: 'Written in your voice',
                body: 'We invest time learning how your business thinks and talks before we write a word. The result is content that sounds like it came from you — not from a generic content factory.',
              },
              {
                title: 'Connected to your SEO',
                body: 'Our content is built around keyword research and SEO best practices. Every blog post, every service page, every FAQ is designed to rank — not just to exist.',
              },
              {
                title: 'One team, all channels',
                body: 'The same team writing your blog posts is managing your social media and SEO. Content gets amplified across every channel automatically, without you having to coordinate anything.',
              },
            ].map(({ title, body }) => (
              <div key={title} className="border border-[#61717A] p-8">
                <h3 className="font-serif text-lg font-bold text-white mb-3">{title}</h3>
                <p className="font-sans text-[#CBD4D7] text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-8">
            What Our Clients Have Seen
          </h2>
          <div className="prose max-w-none text-[#4C4C4C]">
            <p className="font-sans leading-relaxed mb-6">
              Content marketing is rarely the only thing driving results for our clients — it is almost always part of an integrated strategy alongside SEO, advertising, and social media. But it is consistently one of the channels with the strongest long-term return. The organic traffic that content drives costs nothing per click, builds over time, and continues to deliver results long after the initial investment.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              Our clients who have committed to a consistent content strategy — typically 6 to 12 months before expecting major results — have seen their website traffic quadruple, their organic lead volume double, and their cost per acquisition drop significantly because warm prospects who already read their content convert at higher rates than cold paid traffic.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { stat: '4x', label: 'Traffic increase from organic content' },
              { stat: '85%', label: 'Client revenue growth' },
              { stat: '15+', label: 'Years marketing in Lynchburg' },
              { stat: '9', label: 'Person in-house team' },
            ].map(({ stat, label }) => (
              <div key={stat} className="border border-[#CBD4D7] p-6 text-center">
                <p className="font-serif text-3xl text-[#2C3539] font-bold mb-2">{stat}</p>
                <p className="font-sans text-xs text-[#61717A]">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 bg-[#F5F6F6]">
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
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-[#61717A] text-sm uppercase tracking-widest mb-6">Related Services</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/services/seo"
              className="font-sans text-sm font-semibold text-[#2C3539] uppercase tracking-widest border border-[#CBD4D7] px-8 py-4 hover:border-[#61717A] transition-colors"
            >
              SEO Services
            </Link>
            <Link
              href="/services/social-media"
              className="font-sans text-sm font-semibold text-[#2C3539] uppercase tracking-widest border border-[#CBD4D7] px-8 py-4 hover:border-[#61717A] transition-colors"
            >
              Social Media Management
            </Link>
          </div>
        </div>
      </section>

      {/* Behind the scenes photo */}
      <section className="relative w-full aspect-video overflow-hidden">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/dfabac6d-d57a-4f13-ba2e-76a484b7043b/Mullins+Media+Co.+Branding+Images+-7.jpg"
          alt="Mullins Media Co. team at work — content strategy session"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Start Building Authority in Your Market
          </h2>
          <p className="font-sans text-[#CBD4D7] leading-relaxed mb-10">
            We offer a free strategy session for new clients — we will look at what content your competitors are producing, where you have gaps, and what a realistic content roadmap looks like for your business. No charge. No pressure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Get a Free Content Strategy Session
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
