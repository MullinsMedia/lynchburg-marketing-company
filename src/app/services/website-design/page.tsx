import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Website Design in Lynchburg, VA | Web Design Company | Mullins Media Co.',
    description:
      'Professional website design for Lynchburg businesses. WordPress, Shopify, and custom sites starting at $3,000. Built with SEO, copy, and photography — done for you. Call (434) 204-4226.',
    alternates: {
      canonical: `${siteUrl}/services/website-design`,
    },
    openGraph: {
      title: 'Website Design in Lynchburg, VA | Mullins Media Co.',
      description:
        'Website design for Lynchburg businesses. WordPress, Shopify, and custom development starting at $3,000 — SEO, copy, and photography included.',
      url: `${siteUrl}/services/website-design`,
    },
  }
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Website Design & Development',
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
    'Website design and development for Lynchburg, VA businesses. WordPress, Shopify, and custom sites starting at $3,000, with SEO, copywriting, and photography included.',
  offers: {
    '@type': 'Offer',
    price: '3000',
    priceCurrency: 'USD',
  },
}

const processSteps = [
  {
    step: '01',
    title: 'Discovery',
    body: 'We start by understanding your business, your customers, and your goals. What do you need the website to do? Who is the ideal visitor and what action do you want them to take? We also audit your existing site and assess your competitive landscape before we write a single line of code.',
  },
  {
    step: '02',
    title: 'Branding & Design',
    body: 'Before we build anything, we establish the visual direction. Colors, typography, imagery, layout — all of it is presented to you for approval before development begins. We never surprise you with a design direction you did not see coming.',
  },
  {
    step: '03',
    title: 'Development',
    body: 'We build your site on the platform that fits your needs — WordPress for most service businesses, Shopify for e-commerce, or a custom solution for more complex requirements. All sites are built mobile-first, load fast, and are set up for SEO from the ground up.',
  },
  {
    step: '04',
    title: 'Content, Photos & Launch',
    body: 'We write the copy, shoot the photos, and handle all the technical setup — domain, hosting, analytics, Google Search Console. When we hand you the keys, everything is done. There is no half-finished launch where you still need to write all the content.',
  },
]

const faqs = [
  {
    q: 'What platform do you build on?',
    a: 'Most of our service-business clients get a WordPress site — it is flexible, well-supported, and easy to update yourself once it is built. E-commerce businesses typically get Shopify, which is purpose-built for selling online. For businesses with complex custom requirements, we build custom. During our initial call, we will recommend the right platform for your specific situation and explain why.',
  },
  {
    q: 'How long does a website project take?',
    a: 'Our typical project runs 6 to 8 weeks from kick-off to launch. The biggest variable is feedback cycles — when clients respond to design reviews and content requests quickly, we can often move faster. We set a clear project timeline in our proposal and stick to it.',
  },
  {
    q: 'Do you handle ongoing maintenance after launch?',
    a: 'Yes. We offer optional maintenance retainers that cover plugin updates, security patches, uptime monitoring, backups, and content updates. Most of our website clients stay on a maintenance plan because it is much cheaper than emergency repairs or a security incident. We can discuss options during your project.',
  },
  {
    q: 'We already have a website. Can you redesign it instead of starting from scratch?',
    a: 'Absolutely. Many of our projects are redesigns rather than new builds. We audit your existing site, identify what is working and what is not, preserve your SEO equity where possible, and rebuild it properly. A redesign typically costs the same as a new build and takes the same amount of time.',
  },
]

export default function WebsiteDesignPage() {
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
            Website Design · Lynchburg, VA
          </p>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Website Design for Lynchburg Businesses That Want to Grow
          </h1>
          <p className="font-sans text-lg text-[#CBD4D7] max-w-2xl mx-auto mb-10">
            We design and build websites that look sharp, rank on Google, and convert visitors into customers — with copy, photography, and launch support included. Starting at $3,000.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
          >
            Talk About Your Website
          </Link>
        </div>
      </section>

      {/* Why Website Matters */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-8">
            Your Website Is the Foundation of Everything
          </h2>
          <div className="prose max-w-none text-[#4C4C4C]">
            <p className="font-sans leading-relaxed mb-6">
              A bad website does not just look unprofessional. It actively undermines every other marketing investment you make. When your Google Ads send traffic to a slow, confusing, or outdated site, that traffic does not convert — you are paying for clicks that leave without doing anything. When your SEO earns you a ranking on page one, a bad website means the person clicks and immediately leaves, damaging your ranking in the process. Your website is where every marketing channel sends people. If it is broken, everything is broken.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              We build websites that are designed from the ground up to convert. That means clear calls to action, fast load times, mobile-first design, and messaging that speaks directly to what your customer needs. It also means SEO built into the architecture from day one — not added on afterwards as an afterthought. The businesses in Lynchburg that are ranking well on Google and converting that traffic have websites that were built correctly, not cheaply.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              What makes us different from most web design shops is that we handle everything. Copy, photography, development, launch, and SEO setup — all done by our team. You do not have to hire a separate copywriter, find a photographer, and coordinate a developer. You have one project manager and one team responsible for the entire thing, start to finish.
            </p>
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="py-20 px-6 bg-[#F5F6F6]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-4">
              What We Build
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                platform: 'WordPress',
                description: 'Our go-to platform for service businesses, professional services, restaurants, healthcare, and most local businesses. WordPress gives you a beautiful custom design, easy content management, and robust SEO capability.',
                bestFor: 'Service businesses, local businesses, professional services',
              },
              {
                platform: 'Shopify',
                description: 'Built for businesses that sell products online. Shopify handles inventory, payments, shipping, and all the complexity of e-commerce while we focus on making your store look great and convert well.',
                bestFor: 'E-commerce, retail, product-based businesses',
              },
              {
                platform: 'Custom',
                description: 'For businesses with specific functionality requirements that off-the-shelf platforms cannot meet — booking systems, custom portals, complex integrations — we build from scratch.',
                bestFor: 'Complex functionality, custom integrations, SaaS-adjacent tools',
              },
            ].map(({ platform, description, bestFor }) => (
              <div key={platform} className="bg-white border border-[#CBD4D7] p-8 flex flex-col">
                <h3 className="font-serif text-xl text-[#2C3539] font-bold mb-4">{platform}</h3>
                <p className="font-sans text-[#4C4C4C] text-sm leading-relaxed mb-6 flex-grow">{description}</p>
                <p className="font-sans text-xs text-[#61717A] border-t border-[#CBD4D7] pt-4">
                  <span className="font-semibold">Best for:</span> {bestFor}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl text-[#2C3539] font-bold mb-4">
              Our Process
            </h2>
            <p className="font-sans text-[#61717A] max-w-xl mx-auto">
              A clear, 6 to 8 week timeline from discovery to launch — with no surprises.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {processSteps.map(({ step, title, body }) => (
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
              Website projects start at <strong>$3,000</strong> for a straightforward service business site — typically 5 to 10 pages, professional copy, photography, SEO setup, and launch support.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              Most projects land in the $4,000 to $8,000 range depending on the number of pages, the complexity of the design, whether e-commerce functionality is required, and the scope of content production. We provide a detailed, fixed-price proposal before any work begins — no hourly billing, no scope creep surprises.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              Every website we build includes SEO fundamentals — proper site structure, meta titles and descriptions, Google Analytics, Google Search Console setup, and a sitemap. If you want to add an ongoing SEO strategy after launch, our{' '}
              <Link href="/services/seo" className="text-[#61717A] hover:underline">
                SEO service
              </Link>{' '}
              integrates directly with your new site.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Get a Website Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-10 text-center">
            Why Choose Mullins Media Co. for Your Website?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'We do everything',
                body: 'Copy, photos, design, development, and launch — all handled by our team. No coordinating between three different vendors. One point of contact, one project, one result.',
              },
              {
                title: 'SEO built in from day one',
                body: 'We have been doing SEO in Lynchburg since 2013. Every site we build is structured to rank — proper architecture, fast load times, keyword-informed content, and schema markup included.',
              },
              {
                title: 'Designed to convert, not just impress',
                body: 'A beautiful website that does not convert is just an expensive brochure. We design with conversion in mind — clear CTAs, logical user journeys, and messaging that speaks to what your customers actually care about.',
              },
              {
                title: 'We know what happens after launch',
                body: 'Because our team also manages SEO, advertising, and social media, we build websites that are ready for traffic — not just ready to look at. Your site is built to perform, not just to exist.',
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
            Results Our Clients Have Seen
          </h2>
          <div className="prose max-w-none text-[#4C4C4C]">
            <p className="font-sans leading-relaxed mb-6">
              One of our clients came to us with a dated website that was losing them business every day. The site was slow, hard to navigate on mobile, and offered no clear reason for a visitor to call or email. We rebuilt it from the ground up — new design, new copy, professional photography, and an SEO foundation — and combined the launch with a Google Ads campaign.
            </p>
            <p className="font-sans leading-relaxed mb-6">
              Within months, that business had grown from 3 employees to over 50. Their website traffic quadrupled. Revenue grew 85%. Eventually, we had to scale back their advertising because they could not keep up with the volume of new business the website was generating. A rebuilt website was the starting point for all of it.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-10">
            {[
              { stat: '4x', label: 'Traffic increase' },
              { stat: '85%', label: 'Revenue growth' },
              { stat: '3 → 50+', label: 'Employees scaled' },
              { stat: '6–8 wks', label: 'Typical launch timeline' },
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

      {/* Related */}
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
              href="/services/advertising"
              className="font-sans text-sm font-semibold text-[#2C3539] uppercase tracking-widest border border-[#CBD4D7] px-8 py-4 hover:border-[#61717A] transition-colors"
            >
              Advertising
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
                src="https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/5948e93a-c4b8-4fab-add1-3701c2b3615f/Mullins+Media+Headshots+2025.jpg"
                alt="Delaney Poff, Project Manager at Mullins Media Co."
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold mb-2">Delaney Poff</h2>
              <p className="font-sans text-[#CBD4D7] text-sm uppercase tracking-widest mb-6">Project Manager</p>
              <p className="font-sans text-[#CBD4D7] leading-relaxed">
                Delaney Poff manages website design projects at Mullins Media Co. A Liberty University graduate with a degree in Strategic Communication, Delaney coordinates every website build from initial strategy through launch — making sure projects stay on time, on budget, and on brand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#2C3539] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
            Your Website Should Be Working for You
          </h2>
          <p className="font-sans text-[#CBD4D7] leading-relaxed mb-10">
            If your current website is outdated, slow, or failing to convert visitors into customers — let&apos;s fix it. We offer a free consultation where we look at your existing site and tell you honestly what we would change and why.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
            >
              Get a Free Website Consultation
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
