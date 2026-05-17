import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { getPublishedPosts } from '@/lib/blog'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export const metadata: Metadata = {
  title: 'Lynchburg Marketing Company | Local SEO & Advertising in Lynchburg VA',
  description:
    'This site was built entirely by AI in one day to rank on Google for Lynchburg marketing. It worked. Mullins Media Co. can do the same for your business.',
  alternates: { canonical: siteUrl },
  openGraph: {
    title: 'Lynchburg Marketing Company | Built by AI. Ranked by Google.',
    description: "This site was built entirely by AI in one day to rank on Google. It worked. That's why you're here.",
    url: siteUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lynchburg Marketing Company | Built by AI. Ranked by Google.',
    description: "This site was built entirely by AI in one day to rank on Google. It worked. That's why you're here.",
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
    description: 'Get found on Google and stay there. We built this site in a day and it ranked. Imagine what a real campaign looks like for your business.',
  },
  {
    title: 'Digital & Traditional Advertising',
    href: '/services/advertising',
    description: 'Google Ads, social campaigns, TV (WSET), radio (WLNI), and billboards — managed by humans who\'ve been doing this for 15 years, powered by tools that didn\'t exist 5 years ago.',
  },
  {
    title: 'Social Media Management',
    href: '/services/social-media',
    description: 'AI can write posts. Humans decide what actually resonates. We use both. Strategy, content, scheduling, and community management across every platform.',
  },
  {
    title: 'Website Design & Development',
    href: '/services/website-design',
    description: 'We built this site in one day. A real client website takes 6–8 weeks and looks a lot better. Starting at $3,000 — built to rank from day one.',
  },
  {
    title: 'Content Marketing',
    href: '/services/content-marketing',
    description: 'Yes, our blog posts are long. That\'s intentional — Google rewards depth. We know the difference between content that ranks and content that just exists.',
  },
  {
    title: 'Brand Identity & Strategy',
    href: '/services/advertising',
    description: 'AI generates ideas. Experience filters them. We\'ve been building brands in Lynchburg since 2013 — we know what works here and what doesn\'t.',
  },
]

const results = [
  { stat: '1 day', label: 'To build and launch this entire site from scratch' },
  { stat: '85%', label: 'Revenue growth for a client in just a few months' },
  { stat: '4×', label: 'Website traffic increase for a client in weeks' },
  { stat: '2013', label: 'Year we started — before AI, during AI, after whatever comes next' },
]

const serviceAreas = ['Lynchburg', 'Forest', 'Bedford', 'Smith Mountain Lake', 'Amherst', 'Appomattox', 'Roanoke', 'Central Virginia']

const clientLogos = [
  { name: 'The Happy Waffle', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/a4757f7b-82f4-4b44-9c37-49fa39e3a40e/Happy+Waffle.png' },
  { name: 'Saltus Aesthetics', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/bf6a5777-6db3-4390-8cad-a565ef8efa59/Saltus+Aesthetics.png' },
  { name: 'City View Venues', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/33b24f93-e837-4b0c-8cfd-9740bdf5e727/City+View+%281%29.png' },
  { name: 'Avoca', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/c38bbaa6-ee74-46b0-8520-3864d588e567/Avoca.png' },
  { name: 'Leisr Stays', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/35eb2749-96cb-4eb3-bf40-18df4fdb9056/Liesr+Stays.png' },
  { name: 'Impact Autism Services', url: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/abc697c0-bff9-4279-b880-114840dc51f3/IAS.png' },
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

      {/* Hero — lead with the experiment */}
      <section className="bg-[#2C3539] text-white py-28 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#CBD4D7] text-xs uppercase tracking-widest font-sans mb-6">
                An AI experiment · Lynchburg, Virginia · Est. 2013
              </p>
              <h1 className="text-5xl sm:text-6xl font-serif font-semibold leading-tight mb-6 text-white">
                This website was built by AI. You found it on Google. That&apos;s the point.
              </h1>
              <p className="text-lg text-[#97a8b0] mb-6 leading-relaxed font-sans font-light">
                Mullins Media Co. built this site in a single day using AI — the code, the copy, the
                blog posts, the SEO strategy, all of it. Then we pointed it at Google and walked away.
                You being here means it worked.
              </p>
              <p className="text-lg text-[#97a8b0] mb-10 leading-relaxed font-sans font-light">
                We&apos;re a real marketing agency in Lynchburg, VA. We know how to use AI to actually
                grow your business — not just make funny pictures. Let&apos;s talk.
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

      {/* "Yeah, we know" banner */}
      <section className="bg-[#61717A] text-white py-5 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm font-sans">
          <p>
            <span className="font-semibold">Yes, we know:</span> some blog images are random, the posts are long, and not everything is perfect.
            It was built in one day by AI. <span className="italic">That&apos;s the whole point.</span>
          </p>
          <Link href="/the-experiment" className="whitespace-nowrap font-semibold underline underline-offset-2 hover:no-underline">
            Read the full story →
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

      {/* The real pitch */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">The actual pitch</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2C3539] mb-6 leading-tight">
              We know how to use AI to grow your business. Not just generate memes.
            </h2>
            <p className="text-[#4C4C4C] leading-relaxed mb-4 font-sans font-light">
              Everyone has access to ChatGPT now. The difference between AI that helps your business
              and AI that wastes your time is knowing what to ask for, what to do with the output, and
              how to deploy it in a way that actually moves the needle.
            </p>
            <p className="text-[#4C4C4C] leading-relaxed mb-4 font-sans font-light">
              Adam Mullins has been building marketing systems in Lynchburg since 2013 — before AI,
              during the rise of AI, and now with AI as a core part of the workflow. The team at
              Mullins Media Co. has decades of combined experience using whatever tools are available
              to grow businesses. Right now, those tools include AI. And they are very, very good.
            </p>
            <p className="text-[#4C4C4C] leading-relaxed mb-8 font-sans font-light">
              This site is not the product. This site is the demo. If you want to see what happens
              when that same energy gets pointed at your business — with real strategy, real targeting,
              and real humans making the decisions — that&apos;s what we do.
            </p>
            <Link
              href="/the-experiment"
              className="inline-block border border-[#2C3539] text-[#2C3539] font-sans font-semibold text-sm uppercase tracking-widest px-8 py-3 hover:bg-[#2C3539] hover:text-white transition-colors"
            >
              See exactly how we built this →
            </Link>
          </div>
          <div className="space-y-4">
            {[
              {
                heading: 'AI wrote the code. Humans wrote the strategy.',
                body: 'Every line of code on this site was generated by AI. But the keyword strategy, the page structure, the targeting — that came from 15 years of knowing what Google actually rewards.',
              },
              {
                heading: 'We know the photos don\'t always match.',
                body: 'The blog images were auto-selected by an AI workflow. Some of them are a little off. We left them because they\'re part of the experiment — and because you noticed, which means you\'re paying attention.',
              },
              {
                heading: 'We know the blog posts are long.',
                body: 'Intentional. Google rewards depth and comprehensiveness. Every post is written to rank for a specific search term. Length is part of the strategy, not a bug.',
              },
              {
                heading: 'We built it in one day.',
                body: 'One day. One person. AI tools. A real marketing strategy. The result is a site ranking for competitive local keywords in Lynchburg, VA. That\'s the proof of concept.',
              },
            ].map(item => (
              <div key={item.heading} className="border-l-4 border-[#61717A] pl-6 py-2">
                <p className="font-serif font-semibold text-[#2C3539] mb-2">{item.heading}</p>
                <p className="text-sm text-[#61717A] font-sans font-light leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 px-4 bg-[#F5F6F6]" id="services">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">What we actually do</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-[#2C3539] mb-4">
              Real marketing services for Lynchburg businesses
            </h2>
            <p className="text-[#61717A] max-w-2xl mx-auto font-sans font-light leading-relaxed">
              The experiment proves the tools work. The services below are what happens when you
              apply those tools to your actual business, with a real strategy behind them.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(service => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white border border-[#CBD4D7] p-8 hover:border-[#61717A] transition-colors block"
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
              Talk About Your Business →
            </Link>
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
          <p className="text-sm text-[#61717A] font-sans uppercase tracking-widest">
            Curtains, Blinds &amp; Bath — Lynchburg, VA
          </p>
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

      {/* Blog */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-4">
            <div>
              <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-2">The AI-written blog</p>
              <h2 className="text-3xl font-serif font-semibold text-[#2C3539]">
                Yes, these posts were written by AI
              </h2>
            </div>
            <Link href="/blog" className="text-sm text-[#61717A] font-sans font-medium uppercase tracking-widest hover:text-[#2C3539] transition-colors hidden sm:block">
              View all →
            </Link>
          </div>
          <p className="text-[#61717A] font-sans font-light mb-12 max-w-2xl">
            Every post targets a specific search term. They&apos;re long because Google rewards depth.
            They&apos;re ranking because the strategy behind them is real. That&apos;s the whole experiment.
          </p>

          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentPosts.map(post => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          ) : (
            <div className="bg-[#F5F6F6] border border-[#CBD4D7] p-16 text-center">
              <p className="text-[#61717A] font-sans font-light text-lg">
                Posts loading. The AI is working on it.
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
          <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">Where we work</p>
          <h2 className="font-serif text-2xl font-semibold text-[#2C3539] mb-4">
            Serving businesses across central Virginia
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mt-6">
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

      {/* Bottom CTA */}
      <section className="py-24 px-4 bg-[#2C3539] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-4">
            The experiment worked. Now let&apos;s talk about yours.
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6">
            We built this in a day. Imagine what a real campaign looks like.
          </h2>
          <p className="text-[#97a8b0] text-lg mb-10 font-sans font-light leading-relaxed">
            Mullins Media Co. is a real marketing agency in Lynchburg, VA with 15+ years of experience
            and a team that actually knows how to use AI to grow businesses. Not generate memes. Grow
            businesses.
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
