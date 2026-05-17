import type { Metadata } from 'next'
import Link from 'next/link'

const aboutUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'}/about`

export const metadata: Metadata = {
  title: 'About | Who Is Lynchburg Marketing Company?',
  description:
    'Lynchburg Marketing Company is an SEO experiment run by Mullins Media Co., a real marketing agency in Lynchburg, VA.',
  alternates: { canonical: aboutUrl },
  openGraph: {
    title: 'About | Who Is Lynchburg Marketing Company?',
    description: 'Lynchburg Marketing Company is an SEO experiment run by Mullins Media Co., a real marketing agency in Lynchburg, VA.',
    url: aboutUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Who Is Lynchburg Marketing Company?',
    description: 'Lynchburg Marketing Company is an SEO experiment run by Mullins Media Co., a real marketing agency in Lynchburg, VA.',
  },
}

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
      <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">About</p>
      <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#2C3539] mb-6 leading-tight">
        About Lynchburg Marketing Company
      </h1>
      <div className="border-b border-[#CBD4D7] mb-10" />

      <div className="prose max-w-none text-[#4C4C4C]">
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

      <div className="mt-16 bg-[#2C3539] text-white p-10 text-center">
        <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-4">Work with us</p>
        <h2 className="text-2xl font-serif font-semibold mb-4">We do this for clients too</h2>
        <p className="text-[#97a8b0] mb-8 font-sans font-light leading-relaxed">
          Less publicly. More focused on your specific Lynchburg market.
          Visit Mullins Media Co. to learn more.
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
