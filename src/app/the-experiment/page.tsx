import type { Metadata } from 'next'
import Link from 'next/link'

const pageUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'}/the-experiment`

export const metadata: Metadata = {
  title: 'The Experiment | We Built This Site in One Day With AI',
  description:
    'Mullins Media Co. built this entire website in one day using AI — code, copy, SEO strategy, blog posts, all of it. Here\'s exactly how we did it, what worked, what didn\'t, and what it means for your business.',
  alternates: { canonical: pageUrl },
  openGraph: {
    title: 'The Experiment | We Built This Site in One Day With AI',
    description: 'We built an entire marketing website in one day using AI. It ranked on Google. Here\'s the full breakdown.',
    url: pageUrl,
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Experiment | We Built This Site in One Day With AI',
    description: 'We built an entire marketing website in one day using AI. It ranked on Google. Here\'s the full breakdown.',
  },
}

const timeline = [
  {
    time: 'Hour 1',
    heading: 'Keyword research and site architecture',
    body: 'Before writing a single line of code, we mapped out every keyword we wanted to rank for — "Lynchburg marketing company," "advertising agency Lynchburg VA," "SEO company Lynchburg," and dozens of variations. Then we designed a page structure where every URL targets a specific term. The strategy came first. The AI came second.',
  },
  {
    time: 'Hours 2–4',
    heading: 'Full website, built by AI',
    body: 'Every line of code on this site was written by Claude (Anthropic\'s AI). The homepage, the service pages, the location pages, the blog system, the admin panel, the Google Sheets integration — all of it. A human directed the process. AI did the building. What used to take a developer weeks took a few hours.',
  },
  {
    time: 'Hours 5–6',
    heading: 'Content pipeline — 17 blog posts, automated',
    body: 'We set up an automated content pipeline using n8n (a workflow tool) connected to a Google Sheet. AI wrote 17 keyword-targeted blog posts on topics like "HVAC marketing Lynchburg VA," "contractor SEO," and "billboards in Lynchburg." Each post was written to rank for a specific search term. The posts are long because that\'s what Google rewards.',
  },
  {
    time: 'Hour 7',
    heading: 'SEO infrastructure',
    body: 'Sitemap, robots.txt, canonical tags, Open Graph meta, Twitter cards, JSON-LD schema, FAQ schema, article schema — all configured. Google Search Console connected. Both www and non-www domains pointing correctly. Technical SEO done properly, not as an afterthought.',
  },
  {
    time: 'Hour 8',
    heading: 'Deployed and submitted',
    body: 'Pushed to Vercel. Sitemap submitted to Google Search Console. DNS pointed. Both lynchburgmarketingcompany.com and www.lynchburgmarketingcompany.com live. Done.',
  },
]

const whatWorked = [
  {
    heading: 'Targeting works',
    body: 'Every page was built around a specific keyword. Not "marketing," but "marketing company Lynchburg VA." Not "SEO," but "SEO company Lynchburg Virginia." Specificity is what gets you ranked.',
  },
  {
    heading: 'Volume works',
    body: '17 blog posts targeting different search terms means 17 different paths someone can find this site. Each post is an entry point. More content = more surface area for Google to discover.',
  },
  {
    heading: 'Technical SEO works',
    body: 'Clean code, fast load times, proper schema markup, correct canonical tags, mobile-first design — Google notices. A technically sound site gets indexed faster and ranks better than a sloppy one.',
  },
  {
    heading: 'Depth works',
    body: 'Yes, the blog posts are long. Intentionally. Google\'s algorithm rewards comprehensive coverage of a topic. A 2,000-word post that covers a subject thoroughly consistently outranks a 300-word post that skims it.',
  },
]

const whatWeKnow = [
  'Some blog images don\'t perfectly match the content. The AI workflow that selected them wasn\'t perfect. We left them because it\'s part of the experiment — and because fixing every image wasn\'t the point.',
  'The design is competent but not award-winning. It was built in hours, not weeks. A real client project gets full design attention. This got "good enough to rank."',
  'Some copy is a little stiff. AI-generated prose has a certain cadence. Humans edit it out over time. We did minimal editing here because this was a speed experiment.',
  'Not every page is perfect. That\'s the point. Perfection wasn\'t the goal. Ranking was the goal. And it ranked.',
]

export default function TheExperimentPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">

      {/* Header */}
      <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">The Experiment</p>
      <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#2C3539] mb-6 leading-tight">
        We built this entire website in one day using AI. Then we ranked it on Google.
      </h1>
      <div className="border-b border-[#CBD4D7] mb-10" />

      {/* Lede */}
      <div className="prose max-w-none text-[#4C4C4C] mb-16">
        <p className="text-lg leading-relaxed">
          Here&apos;s the truth: <strong>Lynchburg Marketing Company is an SEO experiment.</strong> Mullins
          Media Co. — a real marketing agency in Lynchburg, VA — built this site in a single day to
          prove a point about how AI, applied correctly, can produce real search rankings fast.
        </p>
        <p>
          If you found this site by searching for &ldquo;Lynchburg marketing company&rdquo; or &ldquo;advertising
          agency Lynchburg VA&rdquo; or something similar — congratulations. You just watched the experiment
          succeed in real time.
        </p>
        <p>
          This page is the full breakdown: what we built, how long it took, what worked, what we know
          isn&apos;t perfect, and what it means for your business.
        </p>
      </div>

      {/* The "we know" callout */}
      <div className="bg-[#2C3539] text-white p-10 mb-16">
        <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-4">Yes, we know</p>
        <ul className="space-y-3">
          {whatWeKnow.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-[#97a8b0] font-sans font-light leading-relaxed text-sm">
              <span className="text-[#61717A] flex-shrink-0 mt-0.5 font-semibold">→</span>
              {item}
            </li>
          ))}
        </ul>
        <p className="text-[#CBD4D7] font-sans font-light mt-6 text-sm italic">
          None of that stopped it from ranking. That&apos;s the point.
        </p>
      </div>

      {/* What we built and how */}
      <div className="mb-16">
        <h2 className="font-serif text-3xl font-semibold text-[#2C3539] mb-10">
          What got built, hour by hour
        </h2>
        <div className="space-y-10">
          {timeline.map(item => (
            <div key={item.time} className="grid grid-cols-[80px_1fr] gap-6">
              <div className="pt-1">
                <span className="text-xs font-sans font-semibold uppercase tracking-widest text-[#61717A] bg-[#F5F6F6] border border-[#CBD4D7] px-2 py-1 whitespace-nowrap">
                  {item.time}
                </span>
              </div>
              <div>
                <p className="font-serif font-semibold text-[#2C3539] mb-2">{item.heading}</p>
                <p className="text-sm text-[#4C4C4C] font-sans font-light leading-relaxed">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* What worked */}
      <div className="mb-16">
        <h2 className="font-serif text-3xl font-semibold text-[#2C3539] mb-8">
          What actually worked
        </h2>
        <div className="space-y-6">
          {whatWorked.map(item => (
            <div key={item.heading} className="border-l-4 border-[#61717A] pl-6 py-2">
              <p className="font-serif font-semibold text-[#2C3539] mb-2">{item.heading}</p>
              <p className="text-sm text-[#4C4C4C] font-sans font-light leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The real point */}
      <div className="prose max-w-none text-[#4C4C4C] mb-16">
        <h2>What this means for your business</h2>
        <p>
          AI is not magic. It does not replace strategy. It does not replace experience. It does not
          replace knowing what Google actually rewards, what customers actually respond to, or what
          it takes to compete in a specific local market.
        </p>
        <p>
          What AI <em>does</em> do is compress time. Work that used to take weeks takes days. Work that
          took days takes hours. That means we can do more, test faster, and iterate in ways that
          weren&apos;t possible before.
        </p>
        <p>
          Mullins Media Co. has been building marketing systems since 2013. We were using automation
          tools before AI was a buzzword. We were doing content strategy before everyone discovered
          SEO. We have decades of combined experience knowing <em>what to build</em>. AI just changed
          how fast we can build it.
        </p>
        <p>
          Most businesses are using AI to generate funny social media posts or write emails that sound
          vaguely robotic. That&apos;s fine, but it&apos;s not leverage. Real leverage is using AI to build
          marketing infrastructure — content pipelines, SEO systems, advertising frameworks — that
          runs and compounds over time.
        </p>
        <p>
          This site is what that looks like at its most basic. A real campaign, pointed at your actual
          business and your actual customers, looks a lot more targeted — and gets a lot more results.
        </p>

        <h2>The tools we used</h2>
        <ul>
          <li><strong>Claude (Anthropic)</strong> — wrote every line of code, every page, every blog post</li>
          <li><strong>Next.js</strong> — the framework (AI-generated, but a real production stack)</li>
          <li><strong>Vercel</strong> — hosting and deployment</li>
          <li><strong>Google Sheets + n8n</strong> — automated blog publishing pipeline</li>
          <li><strong>Unsplash API</strong> — automated image selection (the imperfect part)</li>
          <li><strong>Supabase</strong> — database for the blog system</li>
          <li><strong>Google Search Console</strong> — sitemap submission and indexing</li>
        </ul>

        <h2>Would we do anything differently?</h2>
        <p>
          The images. The automated image selector picked stock photos based on post titles and they
          do not always match perfectly. A real project would have a human reviewing and approving
          every image. For a one-day experiment proving a point about SEO? It didn&apos;t matter enough
          to fix.
        </p>
        <p>
          Everything else worked as intended.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-[#2C3539] text-white p-10 text-center">
        <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-4">
          The experiment worked. Now let&apos;s talk about yours.
        </p>
        <h2 className="text-2xl font-serif font-semibold mb-4">
          Want this kind of thinking applied to your business?
        </h2>
        <p className="text-[#97a8b0] mb-8 font-sans font-light leading-relaxed max-w-lg mx-auto">
          We built this to prove we know what we&apos;re doing. If you want a team that actually
          understands how to use AI to grow a real business in Lynchburg, VA — let&apos;s talk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
          >
            Get Your Free Consultation
          </Link>
          <a
            href="https://mullinsmediaco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-[#61717A] text-[#CBD4D7] font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:border-white hover:text-white transition-colors"
          >
            Visit Mullins Media Co →
          </a>
        </div>
      </div>
    </div>
  )
}
