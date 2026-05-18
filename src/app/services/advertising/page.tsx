import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Advertising Agency in Lynchburg, VA | Google Ads, TV, Radio | Mullins Media Co.',
    description:
      'Full-funnel advertising for Lynchburg businesses. Google Ads, TV on WSET, radio on WLNI, and billboards — digital and traditional under one roof. Call (434) 204-4226.',
    alternates: {
      canonical: `${siteUrl}/services/advertising`,
    },
    openGraph: {
      title: 'Advertising Agency in Lynchburg, VA | Mullins Media Co.',
      description:
        'Google Ads, TV, radio, and billboard advertising for Lynchburg businesses. Full-funnel campaigns that drive real results.',
      url: `${siteUrl}/services/advertising`,
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Advertising Services — Digital & Traditional',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Mullins Media Co. — Lynchburg Marketing Company',
    url: siteUrl,
    telephone: '+14342042042226',
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
    'Full-funnel advertising for Lynchburg, VA businesses. Google Ads, PPC, television advertising on WSET, radio advertising on WLNI, and billboard placements across the Lynchburg market.',
}

const digitalPackages = [
  {
    name: 'Google Ads Management',
    price: 'Starting at $2,000/mo',
    includes: [
      'Search campaign setup and management',
      'Ad copywriting and A/B testing',
      'Landing page recommendations',
      'Conversion tracking setup',
      'Monthly performance reporting',
    ],
  },
]

const traditionalPackages = [
  {
    name: 'Television — WSET',
    price: '$9,990 / 3 months',
    includes: [
      '50+ airings per month',
      'Ad creative production',
      'Prime and fringe time placement',
      'Reach the full Lynchburg DMA',
    ],
  },
  {
    name: 'Radio — WLNI',
    price: '$4,900 / 3 months',
    includes: [
      '4 spots per day',
      'Script writing included',
      'Morning and afternoon drive time',
      'Lynchburg & Central Virginia listeners',
    ],
  },
  {
    name: 'Billboards',
    price: '$2,500 / 3 months',
    includes: [
      'High-traffic Lynchburg locations',
      'Design and production included',
      '24/7 visibility',
      'Strategic placement consultation',
    ],
  },
]

const faqs = [
  {
    q: "What's a reasonable advertising budget for a small business in Lynchburg?",
    a: "It depends on your goals and your market. A local service business just getting started with Google Ads can see meaningful results at $1,500 to $2,500 per month in ad spend. If you want to add TV or radio, expect to budget $5,000 to $10,000 per quarter for those channels on top of digital. The honest answer is that advertising works better when you commit to a real budget — underfunded campaigns rarely produce meaningful data, and it becomes hard to tell if the strategy is working.",
  },
  {
    q: 'Should I do digital advertising, traditional advertising, or both?',
    a: "Both, if you can afford it — and here is why. Digital advertising (Google Ads, social ads) is great for capturing people who are actively searching for what you offer right now. Traditional advertising (TV, radio, billboards) builds awareness and keeps your brand top of mind for people who are not searching yet but will be. The businesses we have seen grow fastest in Lynchburg use traditional media to create demand and digital to capture it. The two channels make each other more effective.",
  },
  {
    q: 'How quickly do Google Ads start working?',
    a: "You can have campaigns running within a week. Traffic starts immediately. But optimization takes 30 to 90 days — Google's algorithm needs time to gather data and optimize your campaigns toward the people most likely to convert. Most clients see their cost-per-lead improve meaningfully between months 2 and 4 as we learn what works for their specific market.",
  },
  {
    q: 'Do you handle the creative — the actual TV commercial or radio script?',
    a: "Yes. Our packages include creative production. For TV, we work with production partners to produce a professional commercial that fits your brand. For radio, we write and produce the spot. For Google Ads, we write all ad copy and continuously test variations. You never have to hire a separate production company.",
  },
]

export default function AdvertisingPage() {
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
            Advertising Services · Lynchburg, VA
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Lynchburg&apos;s Full-Funnel Advertising Agency
          </h1>
          <p className="font-sans text-lg text-[#CBD4D7] max-w-2xl mx-auto mb-10">
            Google Ads, TV on WSET, radio on WLNI, billboards across Lynchburg — we plan, produce, and manage digital and traditional advertising campaigns that work together to build your brand and drive customers through the door.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
          >
            Get a Free Advertising Plan
          </Link>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-8">
            Digital and Traditional Advertising for Lynchburg Businesses
          </h2>
          <div className="prose max-w-none text-[#4C4C4C]">
            <p className="font-sans leading-relaxed mb-6">
              Most advertising agencies in Virginia will steer you toward one channel — usually whatever they make the most margin on. We do not work that way. We have been running both digital and traditional advertising campaigns for Lynchburg businesses for over a decade, and we have learned that the most effective strategies combine both.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              Digital advertising — Google Ads, pay-per-click, social ads — is exceptionally good at capturing demand. When someone in Lynchburg searches &ldquo;emergency plumber near me&rdquo; at 10pm, a well-run Google Ads campaign puts your business at the very top of the results instantly. The ROI is measurable, the targeting is precise, and you can turn it up or down based on capacity.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              Traditional advertising — television, radio, billboards — creates demand. It puts your name in front of people before they need you, so that when they do need you, you are the business they think of first. A 30-second spot on WSET seen 50 times over three months builds brand recognition in a way that no amount of keyword bidding can replicate. When you combine the brand awareness of TV and radio with the precision targeting of Google Ads, your cost per acquisition drops significantly because you are no longer a stranger to the person who clicks your ad.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Callout */}
      <section className="py-16 px-6 bg-[#F5F6F6]">
        <div className="max-w-4xl mx-auto">
          <div className="border-l-4 border-[#61717A] pl-8">
            <p className="font-serif text-xl text-[#2C3539] italic mb-4">
              &ldquo;We had to turn the ads off.&rdquo;
            </p>
            <p className="font-sans text-[#4C4C4C] leading-relaxed mb-4">
              One of our Lynchburg clients came to us with a solid business but inconsistent marketing. We built them a full-funnel campaign — Google Ads for search capture, radio for local awareness, and a rebuilt website to convert the traffic. The results came faster than anyone anticipated. Within a few months, their phones were ringing so often and orders were stacking up so fast that their operations team could not keep up. We literally had to pause the Google Ads campaign and pull back on other channels to give them time to hire and scale their staff. They went from 3 employees to over 50 during our engagement.
            </p>
            <p className="font-sans text-[#61717A] text-sm font-semibold">
              Mullins Media Co. Client · Lynchburg, VA
            </p>
          </div>
        </div>
      </section>

      {/* Digital Advertising */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-4">
            Digital Advertising
          </h2>
          <p className="font-sans text-[#61717A] mb-12 max-w-2xl">
            Pay-per-click advertising that captures customers at the exact moment they are searching for what you offer.
          </p>
          {digitalPackages.map((pkg) => (
            <div key={pkg.name} className="border border-[#CBD4D7] p-10 mb-8">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                <h3 className="font-serif text-2xl text-[#2C3539] font-bold">{pkg.name}</h3>
                <p className="font-sans text-[#61717A] font-semibold mt-2 md:mt-0">{pkg.price}</p>
              </div>
              <ul className="grid md:grid-cols-2 gap-3">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 font-sans text-[#4C4C4C] text-sm">
                    <span className="text-[#61717A] mt-0.5 flex-shrink-0">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="font-sans text-[#61717A] text-sm">
            Note: Ad spend is billed separately directly to Google or the platform. Our fee covers strategy, setup, and ongoing management.
          </p>
        </div>
      </section>

      {/* Traditional Advertising */}
      <section className="py-20 px-6 bg-[#F5F6F6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-4">
            Traditional Advertising in Lynchburg
          </h2>
          <p className="font-sans text-[#61717A] mb-12 max-w-2xl">
            TV, radio, and outdoor advertising that builds brand recognition across the Lynchburg market.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {traditionalPackages.map((pkg) => (
              <div key={pkg.name} className="bg-white border border-[#CBD4D7] p-8 flex flex-col">
                <h3 className="font-serif text-xl text-[#2C3539] font-bold mb-2">{pkg.name}</h3>
                <p className="font-sans text-[#61717A] font-semibold text-sm mb-6">{pkg.price}</p>
                <ul className="space-y-3 flex-grow">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 font-sans text-[#4C4C4C] text-sm">
                      <span className="text-[#61717A] mt-0.5 flex-shrink-0">&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Integrate */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-8">
            How We Integrate Digital and Traditional
          </h2>
          <div className="prose max-w-none text-[#4C4C4C]">
            <p className="font-sans leading-relaxed mb-6">
              A TV commercial with no digital follow-through is a missed opportunity. A Google Ads campaign with no brand awareness backing it costs more than it should. We plan both channels together from the start so your messaging is consistent, your targeting is complementary, and your budget is working as efficiently as possible.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              In practice, this means your TV spots and radio scripts use the same brand voice as your Google Ads copy. We set up remarketing campaigns that show your Google Ads to people who have already seen your TV commercial. We make sure your website landing pages are built to convert the traffic each specific campaign sends. And we report on all channels together — so you can see the full picture of where your marketing dollars are working.
            </p>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-[#F5F6F6]">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-10 text-center">
            Why Choose Mullins Media Co.?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Relationships with Lynchburg media',
                body: "We have worked with WSET, WLNI, and outdoor vendors in this market for years. That means we know the right contacts, we negotiate better rates than you could on your own, and we know what placements actually perform.",
              },
              {
                title: 'Results, not vanity metrics',
                body: "We optimize for leads and revenue, not impressions or reach. Every campaign we build is tied to a real business outcome — phone calls, form submissions, store visits, or online orders.",
              },
              {
                title: 'Creative included',
                body: "You should not need to hire a production company, a copywriter, and a media buyer separately. We do all of it. Ad creative, scripts, and strategy are included in our packages.",
              },
              {
                title: 'We have seen what works here',
                body: "After 15+ years advertising in this market, we have a clear picture of which channels move buyers in Lynchburg. We will tell you honestly what we think will work for your specific business — not just what sounds impressive.",
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

      {/* Meet Your Specialist */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-5xl mx-auto">
          <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-10 text-center">Meet Your Specialist</p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden">
              <Image
                src="https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/65c3410f-cef7-4c05-9b25-78d99c139942/Mullins+Media+Headshots+2025-10.jpg"
                alt="Paige Howell, Strategic Growth Manager at Mullins Media Co."
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Paige Howell</h2>
              <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-6">Strategic Growth Manager</p>
              <p className="font-sans text-[#CBD4D7] leading-relaxed">
                Paige Howell leads advertising strategy at Mullins Media Co. With a background as a successful Lynchburg business owner herself, Paige understands what it actually takes to run a campaign that drives revenue — not just impressions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Ready to Run Advertising That Actually Works?
          </h2>
          <p className="font-sans text-[#CBD4D7] leading-relaxed mb-10">
            We will put together a free advertising plan for your business — which channels make sense, what realistic results look like, and what your budget should be. No jargon. No pressure. Just a straight answer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Get a Free Advertising Plan
            </Link>
            <a
              href="tel:+14342042042226"
              className="font-sans text-[#CBD4D7] text-sm font-semibold hover:text-white transition-colors"
            >
              Or call (434) 204-4226
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
