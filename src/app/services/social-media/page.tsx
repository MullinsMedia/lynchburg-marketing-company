import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Social Media Management Lynchburg, VA | Social Media Agency | Mullins Media Co.',
    description:
      'Professional social media management for Lynchburg businesses. We handle Facebook, Instagram, TikTok, and YouTube — strategy, content creation, and community management. Starting at $2,000/mo.',
    alternates: {
      canonical: `${siteUrl}/services/social-media`,
    },
    openGraph: {
      title: 'Social Media Management in Lynchburg, VA | Mullins Media Co.',
      description:
        'Full-service social media management for Lynchburg businesses. Content creation, scheduling, and community management across all platforms.',
      url: `${siteUrl}/services/social-media`,
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Social Media Management',
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
    'Social media management for Lynchburg, VA businesses. Strategy, content creation, photo and video production, scheduling, and community management across Facebook, Instagram, TikTok, and YouTube.',
  offers: {
    '@type': 'Offer',
    price: '2000',
    priceCurrency: 'USD',
    priceSpecification: { '@type': 'UnitPriceSpecification', unitText: 'month' },
  },
}

const steps = [
  {
    step: '01',
    title: 'Strategy First',
    body: 'We start by understanding your business, your audience, and your goals. Who are you trying to reach? What do you want them to do? What does success look like in six months? The answers to these questions drive every content decision we make.',
  },
  {
    step: '02',
    title: 'Content Creation',
    body: 'Our team creates everything in-house — photography, short-form video, graphics, and copy. No stock photos. No generic templates. Content that actually looks like your business and speaks to your specific customers in Lynchburg.',
  },
  {
    step: '03',
    title: 'Scheduling & Consistency',
    body: 'We build a content calendar and handle all posting across your platforms on a consistent schedule. The algorithm rewards consistency, and so do your followers. You never have to wonder if something went up this week.',
  },
  {
    step: '04',
    title: 'Community Management',
    body: 'Comments, messages, reviews — we monitor and respond so your audience feels heard and your brand stays active. For local businesses, this kind of engagement is often the difference between a follower and a loyal customer.',
  },
]

const platforms = [
  {
    name: 'Facebook',
    description: 'Still the highest-reach platform for local businesses in most Virginia markets. We manage your page, create content, run engagement posts, and handle community interaction.',
  },
  {
    name: 'Instagram',
    description: 'Photo and video content that shows your work, your team, and your brand personality. Instagram is where you make people want to choose you before they ever need you.',
  },
  {
    name: 'TikTok',
    description: 'Short-form video that can reach new audiences at scale. We script, film, and edit TikToks built around your business — not trend-chasing, but content your customers actually want to watch.',
  },
  {
    name: 'YouTube',
    description: 'Long-form video for businesses that want to demonstrate expertise, showcase projects, or build a deeper relationship with their audience. YouTube content also supports your SEO strategy.',
  },
]

const faqs = [
  {
    q: 'How often should we be posting on social media?',
    a: 'It depends on the platform, but for most local businesses we recommend 3 to 5 posts per week on Facebook and Instagram, daily on TikTok if you are active there, and 1 to 2 times per week on YouTube. Consistency matters more than volume — a sporadic burst of posts followed by weeks of silence is worse for your brand than a steady, modest cadence. Our team handles all of this for you on a planned schedule.',
  },
  {
    q: 'Do you create the content, or do you just schedule what we give you?',
    a: 'We create everything. Our team has in-house photography and video production capability, which is genuinely unusual for a marketing agency of our size. We develop the content strategy, plan the shoots, capture the content, edit it, write the captions, and post it. We may occasionally ask you for assets (logos, product photos, specific event details), but our goal is for you to be able to hand this off completely.',
  },
  {
    q: 'What platforms do you manage?',
    a: 'Our core platforms are Facebook, Instagram, TikTok, and YouTube. We can also manage LinkedIn for B2B clients, Pinterest for relevant industries, and Google Business Profile posts. In our initial strategy conversation, we help you decide which platforms make sense for your specific audience and goals — we do not recommend being everywhere just for the sake of it.',
  },
  {
    q: 'How does social media management connect to advertising?',
    a: "Organic social media (your regular posts) and social media advertising (paid ads on Facebook and Instagram) work best together. Organic content builds your brand and community over time. Paid ads can accelerate reach and drive specific actions like website visits or lead forms. We manage both and can show you how to allocate budget between them based on your goals.",
  },
]

export default function SocialMediaPage() {
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
            Social Media Management · Lynchburg, VA
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Social Media Management for Lynchburg Businesses
          </h1>
          <p className="font-sans text-lg text-[#CBD4D7] max-w-2xl mx-auto mb-10">
            We handle everything — strategy, content creation, scheduling, and community management across Facebook, Instagram, TikTok, and YouTube. Professional, consistent, and done for you.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
          >
            Let&apos;s Talk Social Strategy
          </Link>
        </div>
      </section>

      {/* What We Manage */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-8">
            What Consistent Social Media Actually Does for Your Business
          </h2>
          <div className="prose max-w-none text-[#4C4C4C]">
            <p className="font-sans leading-relaxed mb-6">
              Most small business owners in Lynchburg know they should be posting on social media. The problem is not motivation — it is time. Running a business is a full-time job. Social media is a full-time job. Trying to do both means one of them suffers, and it is almost always the social media.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              The businesses with strong social media presence — the ones whose posts get saved, shared, and commented on — are doing three things: posting consistently, creating content that actually looks good, and engaging with their community. None of that happens when social media is an afterthought squeezed in between client calls. It requires a dedicated team with dedicated time.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              That is what we provide. Our team manages social media for local Lynchburg businesses as a primary service — not as a bolt-on to something else. We have the equipment to capture quality photo and video content, the writers to craft captions that sound like your brand (not a robot), and the systems to post consistently and monitor your accounts daily. When you hand this off to us, it actually gets done — and done well.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 px-6 bg-[#F5F6F6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-4">
              Platforms We Manage
            </h2>
            <p className="font-sans text-[#61717A] max-w-xl mx-auto">
              We work across every major platform. In your initial strategy session, we help you decide where to focus your energy based on where your customers actually spend their time.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {platforms.map(({ name, description }) => (
              <div key={name} className="bg-white border border-[#CBD4D7] p-8">
                <h3 className="font-serif text-xl text-[#2C3539] font-bold mb-4">{name}</h3>
                <p className="font-sans text-[#4C4C4C] text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-4">
              Our Process
            </h2>
            <p className="font-sans text-[#61717A] max-w-xl mx-auto">
              Four steps that take social media completely off your plate.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {steps.map(({ step, title, body }) => (
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
              Our social media management packages start at <strong>$2,000 per month</strong>. This covers strategy, content creation (including on-site photography or video shoots as needed), scheduling across your platforms, and community management.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              What separates our pricing from other agencies is what is included: real content creation. Most agencies at this price point will design graphics using your existing photos and write captions. We actually produce content — our team comes to your location, captures photo and video, and builds a content library that is specific to your business. That is a meaningfully different product.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              For businesses that also want to run paid social ads (Facebook Ads, Instagram Ads), we can add that to your engagement. Ad spend is separate from our management fee, but we handle all the strategy, creative, targeting, and reporting.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Get a Custom Quote
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
                What Strong Social Media Delivers
              </h2>
              <p className="font-sans text-[#CBD4D7] leading-relaxed mb-6">
                Social media rarely drives results in isolation. Its real power is in the compound effect — every post builds brand recognition, every comment builds a relationship, and over time that awareness converts into customers who already trust you before they ever reach out.
              </p>
              <p className="font-sans text-[#CBD4D7] leading-relaxed">
                Our clients who pair strong social media presence with SEO and advertising see meaningfully lower customer acquisition costs because their audiences already know who they are. That brand familiarity — built post by post over months — is hard to replicate with any other channel.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { stat: '85%', label: 'Client revenue growth' },
                { stat: '4x', label: 'Website traffic increase' },
                { stat: '3 → 50+', label: 'Employees at one client' },
                { stat: '15+', label: 'Years in the Lynchburg market' },
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
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-10 text-center">
            Why Mullins Media Co. for Social Media?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'We create real content',
                body: 'In-house photo and video capability means your content looks like your actual business — not a stock photo from 2019. We show up, capture content, and build a library that is genuinely yours.',
              },
              {
                title: 'Strategy, not just posting',
                body: 'We do not just put content on your wall. We build a strategy around your business goals, your audience, and your competitors — and we measure results against that strategy every month.',
              },
              {
                title: 'Connected to everything else',
                body: 'Your social content feeds your blog, supports your SEO, and works alongside your advertising. Because one team manages all of it, nothing falls through the cracks.',
              },
              {
                title: 'Local knowledge',
                body: 'We know Lynchburg. We know the local events worth piggybacking on, the audiences that respond to certain content formats, and the platforms that are actually worth the investment in this market.',
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

      {/* Related */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-sans text-[#61717A] text-sm uppercase tracking-widest mb-6">Related Services</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/services/content-marketing"
              className="font-sans text-sm font-semibold text-[#2C3539] uppercase tracking-widest border border-[#CBD4D7] px-8 py-4 hover:border-[#61717A] transition-colors"
            >
              Content Marketing
            </Link>
            <Link
              href="/services/advertising"
              className="font-sans text-sm font-semibold text-[#2C3539] uppercase tracking-widest border border-[#CBD4D7] px-8 py-4 hover:border-[#61717A] transition-colors"
            >
              Advertising &amp; Paid Media
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
                src="https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/58948c6a-8615-414b-b162-c0f1fa639320/Mullins+Media+Headshots+2025-5.jpg"
                alt="Elisa Forshey, Social Media Manager at Mullins Media Co."
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Elisa Forshey</h2>
              <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-6">Social Media Manager</p>
              <p className="font-sans text-[#CBD4D7] leading-relaxed">
                Elisa Forshey manages social media for Mullins Media clients. With 8 years of experience in graphic design, copywriting, and social media strategy, she builds social presences that tell a compelling brand story — not just post for the sake of posting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Hand Off Your Social Media Today
          </h2>
          <p className="font-sans text-[#CBD4D7] leading-relaxed mb-10">
            We take on a limited number of social media clients so every account gets real attention from our team. If you are tired of social media being the thing that never gets done — let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Start the Conversation
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
