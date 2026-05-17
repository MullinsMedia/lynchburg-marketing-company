import type { Metadata } from 'next'
import Link from 'next/link'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'

export const metadata: Metadata = {
  title: 'The Experiment | How We Built a Ranking Site Over a Weekend With AI',
  description:
    'We built LynchburgMarketingCompany.com over a weekend using AI — just to prove we could rank it on Google without a single paid ad. It worked. Here is exactly how we did it.',
  alternates: { canonical: `${siteUrl}/the-experiment` },
  openGraph: {
    title: 'The Experiment | How We Built a Ranking Site Over a Weekend With AI',
    description:
      'We built LynchburgMarketingCompany.com over a weekend using AI — just to prove we could rank on Google without a single paid ad. Here is how.',
    url: `${siteUrl}/the-experiment`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Experiment | How We Built a Ranking Site With AI Over a Weekend',
    description:
      'Zero ads. Zero hacks. Built in a weekend with AI. Ranked on Google. Here is the full breakdown of how LynchburgMarketingCompany.com was built.',
  },
}

const timeline = [
  {
    time: 'Hour 1–2',
    title: 'Keyword research and site architecture',
    body: 'We identified every high-value keyword phrase we wanted to rank for: "Lynchburg marketing company," "advertising agency Lynchburg VA," "Lynchburg SEO," and a dozen more. Then we mapped out the page structure — homepage, service pages, location pages, blog — around those terms.',
  },
  {
    time: 'Hour 3–5',
    title: 'Next.js app scaffolded and deployed',
    body: 'We spun up a Next.js 16 App Router project, configured Tailwind, set up the fonts, built the Header and Footer, and deployed to Vercel with the custom domain. The site was live within a few hours of starting — with a proper SSL certificate, 100 PageSpeed scores, and full metadata.',
  },
  {
    time: 'Hour 6–10',
    title: 'Homepage, About, and Contact pages written',
    body: 'Claude wrote the copy for the core pages — the homepage hero, the about page with real team bios and headshots, the contact page with LocalBusiness schema. Every line was written with specific keyword targets in mind. Not stuffed. Structured.',
  },
  {
    time: 'Hour 11–14',
    title: 'Service pages and location pages built',
    body: 'Five service pages (SEO, advertising, social media, website design, content marketing) and six location pages (Forest, Bedford, Roanoke, Smith Mountain Lake, Amherst, Central Virginia) — each targeting a different geographic and service keyword cluster.',
  },
  {
    time: 'Hour 15–18',
    title: 'Blog pipeline wired up',
    body: 'We connected the site to a Google Sheets + n8n automation pipeline. When a row is added to the sheet with a post title, content, and metadata, n8n triggers a webhook that creates the post in the CMS and publishes it automatically. We seeded 40+ keyword-targeted blog posts in the first weekend.',
  },
  {
    time: 'Hour 19–20',
    title: 'Technical SEO locked down',
    body: 'Sitemap.xml generated automatically. Robots.txt configured. Canonical URLs on every page. Paginated blog pages marked noindex. JSON-LD schema on every page type (LocalBusiness, Article, FAQ). Open Graph and Twitter card meta on every route. We submitted to Google Search Console and Bing Webmaster Tools the same day.',
  },
]

const whatWorked = [
  {
    title: 'Targeting specificity',
    body: 'We did not try to rank for "marketing company." We targeted "Lynchburg marketing company," "advertising agency Lynchburg VA," "Lynchburg SEO company," and "marketing agency near me" — long-tail, high-intent terms where the competition is beatable organically.',
  },
  {
    title: 'Content volume and depth',
    body: 'Google rewards sites that comprehensively cover a topic. The blog pipeline let us publish dozens of detailed, keyword-targeted posts quickly — covering every related question a Lynchburg business owner might type into Google.',
  },
  {
    title: 'Technical SEO from day one',
    body: 'No site speed issues. No missing meta tags. No duplicate content. No broken links. Most local business sites are technically messy — which means clean fundamentals alone are a competitive advantage.',
  },
  {
    title: 'AI-assisted content at scale',
    body: 'A human strategist wrote the architecture and directed the content. Claude wrote the copy. n8n automated the publishing. The result: a full content site in hours instead of months — without sacrificing structure or intent.',
  },
  {
    title: 'Zero paid ads. Zero black-hat tricks.',
    body: 'No backlink buying. No keyword stuffing. No cloaking. No Google Ads propping up a weak organic presence. Everything you see is organic — which means the rankings are stable, not rented.',
  },
]

const tools = [
  { name: 'Claude (Anthropic)', role: 'AI writing, code generation, strategy' },
  { name: 'Next.js 16', role: 'React framework, App Router, SSR, sitemap generation' },
  { name: 'Vercel', role: 'Hosting, edge CDN, preview deployments' },
  { name: 'Tailwind CSS', role: 'UI styling' },
  { name: 'n8n', role: 'Blog publishing automation' },
  { name: 'Google Sheets', role: 'Blog content pipeline input' },
  { name: 'Supabase', role: 'Database for blog posts and CMS content' },
  { name: 'Unsplash API', role: 'Blog post imagery (yes, some are off-topic — we know)' },
  { name: 'Google Search Console', role: 'Sitemap submission and ranking tracking' },
]

export default function TheExperimentPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">

      {/* Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">The Experiment</p>
        <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#2C3539] mb-6 leading-tight">
          We Built This Site Over a Weekend With AI. Then We Ranked It on Google.
        </h1>
        <div className="border-b border-[#CBD4D7] mb-8" />
        <p className="text-[#61717A] text-lg font-sans font-light leading-relaxed mb-6">
          LynchburgMarketingCompany.com is not a typical agency website. It is a live SEO experiment — built
          intentionally, transparently, and with one specific goal: to prove that a well-structured site with
          the right strategy can rank on Google organically without a single paid ad.
        </p>
        <p className="text-[#61717A] text-lg font-sans font-light leading-relaxed">
          If you found this page through a Google search, the experiment worked. Here is exactly how we did it.
        </p>
      </div>

      {/* The honest caveat */}
      <div className="bg-[#2C3539] text-white p-8 mb-20">
        <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-4">Before You Keep Reading</p>
        <p className="font-serif text-xl font-semibold leading-relaxed mb-4">
          Yes, we know. Some of this site is imperfect.
        </p>
        <ul className="text-[#97a8b0] font-sans font-light leading-relaxed space-y-2 text-sm">
          <li>&#8226; Some blog post images do not match the article topic. That is the Unsplash API doing its best.</li>
          <li>&#8226; The blog posts are long. Very long. That is intentional — Google rewards depth.</li>
          <li>&#8226; The design is clean but not flashy. That is also intentional — clean loads fast.</li>
          <li>&#8226; Some pages are more complete than others. A weekend is a weekend.</li>
        </ul>
        <p className="text-[#CBD4D7] font-sans font-light text-sm mt-6">
          The point was never perfection. The point was to rank — and we did.
        </p>
      </div>

      {/* Weekend timeline */}
      <div className="mb-20">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">The Build</p>
        <h2 className="font-serif text-3xl font-semibold text-[#2C3539] mb-10">
          Weekend breakdown — what happened and when
        </h2>
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <div key={item.time} className="border border-[#CBD4D7] p-8 border-b-0 last:border-b">
              <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                <div className="flex-shrink-0">
                  <span className="inline-block font-sans text-xs font-semibold uppercase tracking-widest text-[#61717A] bg-[#F5F6F6] border border-[#CBD4D7] px-3 py-1">
                    {item.time}
                  </span>
                </div>
                <div>
                  <p className="font-serif font-semibold text-[#2C3539] mb-2">{item.title}</p>
                  <p className="text-sm text-[#4C4C4C] font-sans font-light leading-relaxed">{item.body}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What worked */}
      <div className="mb-20">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">The Strategy</p>
        <h2 className="font-serif text-3xl font-semibold text-[#2C3539] mb-6">
          What actually made this work
        </h2>
        <p className="text-[#61717A] font-sans font-light leading-relaxed mb-10">
          AI wrote the content. But AI alone does not rank a site. Strategy does. Here is what we got right.
        </p>
        <div className="grid sm:grid-cols-2 gap-6">
          {whatWorked.map(item => (
            <div key={item.title} className="border-l-4 border-[#61717A] pl-6 py-2">
              <p className="font-serif font-semibold text-[#2C3539] mb-2">{item.title}</p>
              <p className="text-sm text-[#4C4C4C] font-sans font-light leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="bg-[#F5F6F6] border border-[#CBD4D7] p-10 mb-20">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">Tech Stack</p>
        <h2 className="font-serif text-2xl font-semibold text-[#2C3539] mb-8">
          What we used to build it
        </h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {tools.map(tool => (
            <div key={tool.name} className="flex items-start gap-3">
              <span className="text-[#61717A] flex-shrink-0 mt-0.5">&#10003;</span>
              <div>
                <p className="font-sans font-semibold text-[#2C3539] text-sm">{tool.name}</p>
                <p className="font-sans text-xs text-[#61717A] font-light">{tool.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* The real pitch */}
      <div className="mb-20 prose max-w-none text-[#4C4C4C]">
        <h2>Why does this matter for your business?</h2>
        <p>
          Because if we can build a brand-new site in a weekend and get it ranking organically on Google
          for competitive local keywords — imagine what we can do with your existing business, your domain
          authority, your reviews, your customer relationships, and a real budget behind it.
        </p>
        <p>
          The experiment proves the concept. But it is not our business model to build AI-generated experiment
          sites for clients. Our business model is to take businesses we believe in, understand how they
          make money, and build marketing systems that actually grow their revenue.
        </p>
        <p>
          That looks different for every client. Sometimes it is local SEO. Sometimes it is Google Ads.
          Sometimes it is a complete website rebuild. Sometimes the most valuable thing we can tell you is
          that your current strategy is fine and you need to focus on operations, not marketing. We are not
          going to sell you something you do not need.
        </p>
        <p>
          That is the real pitch. Not the shiny experiment — the honest conversation about what will actually
          move the needle for your specific business in Lynchburg.
        </p>
      </div>

      {/* Mullins Media attribution */}
      <div className="bg-[#2C3539] text-white p-10 mb-20">
        <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-4">Who Built This</p>
        <p className="font-serif text-2xl font-semibold mb-4">
          Mullins Media Co. — a real Lynchburg marketing agency since 2013.
        </p>
        <p className="text-[#97a8b0] font-sans font-light leading-relaxed mb-6">
          This site is one of our brands. The team behind it — Adam, Paige, Delaney, Elisa, Bradley, Isaac,
          and Ollie — are real people based in Lynchburg who have been doing this work for real businesses
          for over a decade. The results on the About page — 85% revenue growth, scaling clients from
          3 to 50+ employees, quadrupling website traffic — are real outcomes from real campaigns.
        </p>
        <p className="text-[#97a8b0] font-sans font-light leading-relaxed">
          AI helped us build and rank this site. Experience and strategy are what make us actually useful to
          your business.
        </p>
      </div>

      {/* CTA */}
      <div className="text-center">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">Work With Us</p>
        <h2 className="font-serif text-3xl font-semibold text-[#2C3539] mb-6">
          Ready to talk about what this looks like for your business?
        </h2>
        <p className="text-[#61717A] font-sans font-light leading-relaxed max-w-lg mx-auto mb-8">
          We offer a free strategy call. No pitch. No pressure. Just an honest conversation about
          what marketing can realistically do for your Lynchburg business.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
        >
          Get Your Free Consultation
        </Link>
      </div>
    </div>
  )
}
