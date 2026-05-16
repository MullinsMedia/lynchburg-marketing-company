import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About | Who Is Lynchburg Marketing Company?',
  description:
    'Lynchburg Marketing Company is an SEO experiment run by Mullins Media Co., a real marketing agency in Lynchburg, VA.',
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-6">
        About Lynchburg Marketing Company
      </h1>

      <div className="prose max-w-none">
        <p>
          Let&apos;s cut to the chase: <strong>Lynchburg Marketing Company</strong> is a website built
          by{' '}
          <a href="https://mullinsmediaco.com" target="_blank" rel="noopener noreferrer">
            Mullins Media Co.
          </a>{' '}
          — a real digital marketing agency based in Lynchburg, Virginia — to rank on Google for
          local marketing keywords.
        </p>

        <p>
          That&apos;s not a secret. In fact, the transparency is part of the strategy. We believe the
          best way to show a potential client what you can do is to do it in public.
        </p>

        <h2>Who is Adam Mullins?</h2>

        <p>
          Adam Mullins is the owner of Mullins Media Co., a marketing agency in Lynchburg, VA. He
          works with small businesses, service providers, and growth-minded entrepreneurs throughout
          Lynchburg and the surrounding region to help them get found online, generate leads, and
          build lasting brands.
        </p>

        <h2>Why does this site exist?</h2>

        <p>
          We built this site to rank on Google for local marketing keywords in Lynchburg — terms like
          &ldquo;Lynchburg marketing company,&rdquo; &ldquo;Lynchburg SEO,&rdquo; &ldquo;marketing agency in
          Lynchburg VA,&rdquo; and &ldquo;Lynchburg advertising.&rdquo;
        </p>

        <p>
          It&apos;s a live, public SEO experiment. We publish content, build topical authority, optimize
          for search intent, and let Google see exactly what we&apos;re doing. The site runs on a Google
          Sheets-powered blog pipeline that auto-publishes content on a schedule. Every piece of
          content is written to rank for something specific.
        </p>

        <p>
          We do the same thing for our clients — but privately, under their brand. This site just
          happens to let you watch over our shoulder.
        </p>

        <h2>Is this a real business?</h2>

        <p>
          Mullins Media Co. is absolutely a real marketing agency operating in Lynchburg, Virginia.
          If you&apos;re a Lynchburg business looking for help with SEO, digital advertising, content
          marketing, or website design, we&apos;d love to talk.
        </p>
      </div>

      <div className="mt-12 bg-[#E63946] text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-extrabold mb-3">We do this for clients too</h2>
        <p className="text-lg mb-6 text-red-100">
          Less publicly. More focused on your specific Lynchburg market.
          Visit Mullins Media Co. to learn more.
        </p>
        <a
          href="https://mullinsmediaco.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-[#E63946] font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Visit mullinsmediaco.com →
        </a>
      </div>
    </div>
  )
}
