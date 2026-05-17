import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { getPublishedPosts } from '@/lib/blog'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export const metadata: Metadata = {
  title: 'Lynchburg Marketing Company | Local SEO & Advertising in Lynchburg VA',
  description:
    'Built by AI over a weekend. Ranked on Google without a single paid ad. Mullins Media Co. is a real marketing agency in Lynchburg, VA that actually helps businesses make money.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Lynchburg Marketing Company | Built by AI. Zero Ads. Ranked Organically.',
    description: "We built this site over a weekend using AI, spent nothing on ads, and ranked it on Google. That's proof. We can do the same for your business.",
    url: siteUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lynchburg Marketing Company | Built by AI. Zero Ads. Ranked Organically.',
    description: "We built this site over a weekend using AI, spent nothing on ads, and ranked it on Google. That's proof. We can do the same for your business.",
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
  founder: { '@type': 'Person', name: 'Adam Mullins' },
  foundingDate: '2013',
}

const services = [
  {
    title: 'Search Engine Optimization',
    href: '/services/seo',
    description: 'Organic rankings built the right way — no hacks, no shortcuts. This site ranks without a single paid ad. We can build the same for your business. Starting at $750/mo.',
  },
  {
    title: 'Digital & Traditional Advertising',
    href: '/services/advertising',
    description: 'Google Ads, social campaigns, TV (WSET), radio (WLNI), billboards. When paid media is the right tool for your business, we run it well enough that clients have asked us to turn campaigns off because they couldn\'t keep up with orders.',
  },
  {
    title: 'Social Media Management',
    href: '/services/social-media',
    description: 'Real strategy, real content, real community management. We have dedicated social media experts — not generalists who also happen to post sometimes. And for some businesses, social is the best ROI. We\'ll tell you if that\'s you.',
  },
  {
    title: 'Website Design & Development',
    href: '/services/website-design',
    description: 'We built this site over a weekend. A proper client site takes 6–8 weeks and is built to convert visitors into customers. Starting at $3,000, built to rank from day one.',
  },
  {
    title: 'Content Marketing',
    href: '/services/content-marketing',
    description: 'The blog posts on this site are long and AI-written on purpose. Depth ranks. We use the same principle for clients — but with human strategy, editing, and a plan tied to actual revenue goals.',
  },
  {
    title: 'Brand Identity & Graphic Design',
    href: '/services/advertising',
    description: 'Logos, brand guidelines, print, digital — we have dedicated graphic designers on staff. Not every business needs an SEO campaign. Some just need to look the part first.',
  },
]

const howWeWork = [
  {
    number: '01',
    heading: 'We learn your business first',
    body: 'Before we recommend anything, we spend time understanding how your business actually makes money. Who your best customers are. What your margins look like. What you\'ve tried before and why it did or didn\'t work. Most agencies skip this step. We don\'t.',
  },
  {
    number: '02',
    heading: 'We recommend what\'s actually right — not what we sell most',
    body: 'Local SEO is not always the best answer. If your best customers come from referrals, the right move might be a referral system, not Google rankings. If you have a visual product, social media might outperform everything else. We tell you what we actually think, even when it\'s not what you came in expecting to hear.',
  },
  {
    number: '03',
    heading: 'We match you with the right experts',
    body: 'We have dedicated specialists in SEO, paid advertising, social media, graphic design, website development, video production, email marketing, and brand strategy. You get the person who actually knows your channel — not a junior account manager who learned it last quarter.',
  },
  {
    number: '04',
    heading: 'We measure success by profitability — not vanity metrics',
    body: 'Clicks, impressions, and follower counts are fine. Revenue is better. We build campaigns around the question: is this actually making your business more profitable? If it\'s not, we change what we\'re doing.',
  },
  {
    number: '05',
    heading: 'We build long-term relationships',
    body: 'Most of our clients have been with us for years. That\'s not an accident. It\'s because we actually care whether their business grows, we communicate like human beings, and we don\'t disappear after the contract is signed.',
  },
]

const results = [
  { stat: '0', label: 'Paid ads purchased to rank this site. Pure organic SEO.' },
  { stat: '85%', label: 'Revenue growth for a client in just a few months' },
  { stat: '4×', label: 'Website traffic increase for a client in weeks' },
  { stat: '1 weekend', label: 'To build and rank this entire site from scratch' },
]

const clientLogos = [
  { name: 'The Happy Waffle', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/a4757f7b-82f4-4b44-9c37-49fa39e3a40e/Happy+Waffle.png' },
  { name: 'Saltus Aesthetics', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/bf6a5777-6db3-4390-8cad-a565ef8efa59/Saltus+Aesthetics.png' },
  { name: 'City View Venues', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/33b24f93-e837-4b0c-8cfd-9740bdf5e727/City+View+%281%29.png' },
  { name: 'Avoca', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/c38bbaa6-ee74-46b0-8520-3864d588e567/Avoca.png' },
  { name: 'Leisr Stays', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/35eb2749-96cb-4eb3-bf40-18df4fdb9056/Liesr+Stays.png' },
  { name: 'Impact Autism Services', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/abc697c0-bff9-4279-b880-114840dc51f3/IAS.png' },
]

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
                An AI experiment · Lynchburg, Virginia · Est. 2013
              </p>
              <h1 className="text-5xl sm:text-6xl font-serif font-semibold leading-tight mb-6 text-white">
                We built this site over a weekend. Zero ads. You found it on Google anyway.
              </h1>
              <p className="text-lg text-[#97a8b0] mb-4 leading-relaxed font-sans font-light">
                This entire site — code, content, SEO strategy, all of it — was built by AI over a
                weekend as an experiment. We spent nothing on advertising. Not a single paid placement.
                You found us organically because we know how to rank.
              </p>
              <p className="text-lg text-[#97a8b0] mb-10 leading-relaxed font-sans font-light">
                Mullins Media Co. is the real agency behind this. We have been helping Lynchburg
                businesses actually make money through marketing since 2013. Let&apos;s talk about
                what that looks like for you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:bg-[#4f6069] transition-colors text-center"
                >
                  Get a Free Consultation
                </Link>
                <Link
                  href="/the-experiment"
                  className="inline-block border border-[#61717A] text-[#CBD4D7] font-sans font-semibold text-sm uppercase tracking-widest px-8 py-4 hover:border-white hover:text-white transition-colors text-center"
                >
                  How We Built This →
                </Link>
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

      {/* "Yeah we know" acknowledgment bar */}
      <section className="bg-[#61717A] text-white py-4 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-sans">
          <p>
            <span className="font-semibold">Yes, we know:</span> some blog images are off, the posts are long, and parts of the copy are a little stiff. Built in a weekend. Ranked anyway.{' '}
            <span className="italic">That&apos;s the whole point.</span>
          </p>
          <Link href="/the-experiment" className="whitespace-nowrap font-semibold underline underline-offset-2 hover:no-underline flex-shrink-0">
            Full breakdown →
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-4 bg-[#F5F6F6] border-b border-[#CBD4D7]">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {results.map(s => (
            <div key={s.stat}>
              <p className="font-serif text-3xl font-semibold text-[#2C3539] mb-1">{s.stat}</p>
              <p className="text-xs font-sans text-[#61717A] leading-snug">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* No ads. No hacks. */}
      <section className="py-20 px-4 bg-white border-b border-[#CBD4D7]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">Proof of concept</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2C3539] mb-6 leading-tight">
              Not a single paid ad. Not a single SEO hack. Just doing it right.
            </h2>
            <p className="text-[#4C4C4C] leading-relaxed mb-4 font-sans font-light">
              Every ranking this site has earned came from organic search — clean technical SEO,
              keyword-targeted content, proper schema markup, and a site structure built around how
              Google actually works. No link schemes. No keyword stuffing. No shortcuts.
            </p>
            <p className="text-[#4C4C4C] leading-relaxed mb-4 font-sans font-light">
              We built this over a weekend to demonstrate something: when you understand SEO at a
              deep level, you don&apos;t need to cheat. You also don&apos;t need to wait years. The right
              strategy, executed correctly, gets results fast.
            </p>
            <p className="text-[#4C4C4C] leading-relaxed font-sans font-light">
              That is what we do for clients. Organic growth, built properly, that compounds over time
              instead of disappearing the moment you stop paying for it.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {[
              { label: '$0', desc: 'Spent on advertising to rank this site' },
              { label: '0 hacks', desc: 'No link schemes, no keyword stuffing, no shortcuts' },
              { label: '1 weekend', desc: 'From blank page to ranking on Google' },
              { label: '100%', desc: 'Organic traffic — every visitor found us naturally' },
            ].map(item => (
              <div key={item.label} className="flex items-center gap-6 border border-[#CBD4D7] bg-[#F5F6F6] p-5">
                <p className="font-serif text-2xl font-semibold text-[#2C3539] w-28 flex-shrink-0">{item.label}</p>
                <p className="text-sm text-[#61717A] font-sans font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work — the real differentiator */}
      <section className="py-24 px-4 bg-[#F5F6F6]">
        <div className="max-w-5xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">How we work</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2C3539] mb-4 leading-tight">
              We are not a cookie-cutter marketing company. Not everyone needs the same thing.
            </h2>
            <p className="text-[#61717A] font-sans font-light leading-relaxed">
              Local SEO is not always the right answer. Paid ads are not always the right answer.
              We start every client relationship by actually learning your business — how you make
              money, who your best customers are, and what marketing approach is most likely to
              move the needle for you specifically.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {howWeWork.map(step => (
              <div key={step.number} className="bg-white border border-[#CBD4D7] p-8">
                <p className="font-serif text-3xl font-semibold text-[#CBD4D7] mb-4">{step.number}</p>
                <p className="font-serif font-semibold text-[#2C3539] mb-3 leading-snug">{step.heading}</p>
                <p className="text-sm text-[#61717A] font-sans font-light leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 bg-white" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">What we do</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2C3539] mb-4">
              Specialists in every channel. Generalists in none.
            </h2>
            <p className="text-[#61717A] max-w-2xl mx-auto font-sans font-light leading-relaxed">
              We have dedicated experts in each discipline — not one person managing ten accounts
              across six channels they sort of know. The right specialist for your business,
              focused on making you more profitable.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-[#F5F6F6] border border-[#CBD4D7] p-8 hover:border-[#61717A] transition-colors block"
              >
                <h3 className="text-lg font-serif font-semibold text-[#2C3539] mb-3 group-hover:text-[#61717A] transition-colors">
                  {service.title} →
                </h3>
                <p className="text-[#61717A] text-sm leading-relaxed font-sans font-light">{service.description}</p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-block bg-[#2C3539] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#61717A] transition-colors"
            >
              Let&apos;s Figure Out What&apos;s Right For You →
            </Link>
          </div>
        </div>
      </section>

      {/* AI + experience */}
      <section className="py-20 px-4 bg-[#2C3539] text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-3">AI + experience</p>
            <h2 className="text-3xl font-serif font-semibold mb-6 leading-tight">
              We know how to use AI to actually grow your business. Not just make funny pictures.
            </h2>
            <p className="text-[#97a8b0] font-sans font-light leading-relaxed mb-4">
              Everyone has access to the same AI tools now. The difference is knowing what to do with
              them. Adam Mullins has been building marketing systems in Lynchburg since 2013 — before
              AI, during the rise of AI, and now with AI deeply embedded in how we work.
            </p>
            <p className="text-[#97a8b0] font-sans font-light leading-relaxed mb-4">
              We use AI to move faster, produce more, and test things that would have taken months.
              But AI does not replace the decades of experience it takes to know <em>what</em> to build,
              <em> who</em> to target, and <em>how</em> to turn marketing spend into actual profit.
            </p>
            <p className="text-[#97a8b0] font-sans font-light leading-relaxed">
              This site is the demo. A real campaign, pointed at your business, is the product.
            </p>
          </div>
          <div className="space-y-4">
            {[
              { label: 'AI wrote the code and content on this site', sub: 'Humans wrote the keyword strategy, site architecture, and targeting logic' },
              { label: 'We know the images are a little off', sub: 'The automated image picker isn\'t perfect. We left it because the rankings aren\'t about images.' },
              { label: 'We know the blog posts are long', sub: 'That\'s the strategy. Google rewards depth. Every word is intentional.' },
              { label: 'We built this in a weekend', sub: 'That\'s what 15 years of experience plus modern AI tools looks like.' },
            ].map(item => (
              <div key={item.label} className="border border-[#61717A] p-5">
                <p className="font-sans font-semibold text-white text-sm mb-1">{item.label}</p>
                <p className="font-sans font-light text-[#97a8b0] text-xs leading-relaxed">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 px-4 bg-white border-y border-[#CBD4D7]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-8">
            From an actual client — not AI-generated
          </p>
          <blockquote className="font-serif text-xl sm:text-2xl text-[#2C3539] leading-relaxed font-semibold mb-6">
            &ldquo;Adam and his team are the best! They created our two websites, manage them, make our
            ads and videos, and even designed our business cards. They are creative, detailed, and
            literally so fun to work with!&rdquo;
          </blockquote>
          <p className="text-sm text-[#61717A] font-sans uppercase tracking-widest">Curtains, Blinds &amp; Bath — Lynchburg, VA</p>
        </div>
      </section>

      {/* Client logos */}
      <section className="py-20 px-4 bg-[#F5F6F6]">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-center text-[#61717A] uppercase tracking-widest font-sans mb-10">
            Real clients. Real results. Not AI-generated logos.
          </p>
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
            {clientLogos.map(logo => (
              <div key={logo.name} className="relative h-12 grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all">
                <Image src={logo.url} alt={logo.name} fill className="object-contain" sizes="120px" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-2">The AI-written blog</p>
              <h2 className="text-3xl font-serif font-semibold text-[#2C3539]">Yes, these posts were written by AI</h2>
            </div>
            <Link href="/blog" className="text-sm text-[#61717A] font-sans font-medium uppercase tracking-widest hover:text-[#2C3539] transition-colors hidden sm:block">
              View all →
            </Link>
          </div>
          <p className="text-[#61717A] font-sans font-light mb-12 max-w-2xl">
            Every post targets a specific search term. They&apos;re long because that&apos;s what ranks.
            They&apos;re ranking because the strategy behind them is real — even if the images are a little random.
          </p>
          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-[#F5F6F6] border border-[#CBD4D7] p-16 text-center">
              <p className="text-[#61717A] font-sans font-light text-lg">The AI is writing. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* Service area */}
      <section className="py-16 px-4 bg-[#F5F6F6] border-t border-[#CBD4D7]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">Where we work</p>
          <h2 className="font-serif text-2xl font-semibold text-[#2C3539] mb-4">Serving businesses across central Virginia</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            {serviceAreas.map(area => (
              <span key={area} className="text-xs font-sans font-semibold uppercase tracking-widest px-3 py-1.5 border border-[#CBD4D7] text-[#61717A]">
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-4 bg-[#2C3539] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-4">The experiment worked. Now let&apos;s talk about yours.</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6">
            We built this in a weekend. Imagine a real campaign aimed at your business.
          </h2>
          <p className="text-[#97a8b0] text-lg mb-10 font-sans font-light leading-relaxed">
            No cookie-cutter packages. No one-size-fits-all plans. We learn your business, figure
            out what will actually make you more profitable, and build a strategy around that. Then
            we execute it with people who are actually experts in their channel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors">
              Get Your Free Consultation
            </Link>
            <a href={`tel:${phone.replace(/\D/g, '')}`} className="inline-block border border-[#61717A] text-[#CBD4D7] font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:border-white hover:text-white transition-colors">
              Call {phone}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
