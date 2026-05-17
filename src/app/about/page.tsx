import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const aboutUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'}/about`

export const metadata: Metadata = {
  title: 'About | Lynchburg Marketing Company — Mullins Media Co.',
  description:
    'Meet the team behind Lynchburg Marketing Company. Adam Mullins and the Mullins Media Co. crew have been helping Lynchburg, VA businesses grow since 2013.',
  alternates: { canonical: aboutUrl },
  openGraph: {
    title: 'About | Lynchburg Marketing Company — Mullins Media Co.',
    description: 'Meet the real marketing team behind Lynchburg Marketing Company — Mullins Media Co., a full-service agency serving Lynchburg, VA since 2013.',
    url: aboutUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Lynchburg Marketing Company — Mullins Media Co.',
    description: 'Meet the real marketing team behind Lynchburg Marketing Company — Mullins Media Co., a full-service agency serving Lynchburg, VA since 2013.',
  },
}

const team = [
  {
    name: 'Adam Mullins',
    role: 'Founder & Lead Strategist',
    bio: 'Adam has been building content strategies and marketing campaigns in Lynchburg since before most social media platforms existed. He founded Mullins Media Co. in 2013 and has since photographed over 5,000 properties, documented nearly 300 weddings, designed dozens of websites, and built marketing systems for businesses across central Virginia. He lives in Lynchburg with his wife Sarah and their family.',
  },
  {
    name: 'Paige Howell',
    role: 'Strategic Growth Manager',
    bio: 'Paige brings a rare combination of business ownership experience and marketing strategy to the team. She previously owned and operated a successful Lynchburg-based business before joining Mullins Media Co., which means she knows exactly what it feels like to be the client.',
  },
  {
    name: 'Delaney Poff',
    role: 'Project Manager',
    bio: 'Delaney graduated from Liberty University in 2023 with a Strategic Communication degree and jumped straight into managing client projects, websites, and timelines. Her job is to make sure everything runs on time and nothing falls through the cracks — so clients can focus on running their business.',
  },
  {
    name: 'Elisa Forshey',
    role: 'Social Media Manager',
    bio: 'Elisa is a writer and strategist with eight years of experience in graphic design, copywriting, social media management, and email marketing. She helps small businesses tell their story online — clearly, consistently, and in a voice that actually sounds like a human being.',
  },
  {
    name: 'Bradley Mejia',
    role: 'Multimedia Specialist',
    bio: 'Bradley brings photography, videography, marketing, and design skills to every project. He is a motivated creative with a background in community service and a passion for helping businesses look their best on every platform.',
  },
  {
    name: 'Isaac Gibson',
    role: 'Multimedia Specialist',
    bio: 'Isaac has over 15 years of digital media experience, spanning nature photography, action sports videography, graphic design, and content production. He spent years coaching Liberty University\'s Ski & Snowboard team and brings that same level of precision and attention to detail to every shoot.',
  },
]

const stats = [
  { value: '5,000+', label: 'Properties photographed' },
  { value: '300+', label: 'Weddings documented' },
  { value: '2013', label: 'Year founded' },
  { value: '9', label: 'Person team' },
]

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-20">

      {/* Header */}
      <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">About</p>
      <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#2C3539] mb-6 leading-tight">
        The Real People Behind<br />Lynchburg Marketing Company
      </h1>
      <div className="border-b border-[#CBD4D7] mb-10" />

      {/* Intro */}
      <div className="prose max-w-none text-[#4C4C4C] mb-16">
        <p className="text-lg leading-relaxed">
          <strong>Lynchburg Marketing Company</strong> is a brand operated by{' '}
          <a href="https://mullinsmediaco.com" target="_blank" rel="noopener noreferrer">
            Mullins Media Co.
          </a>{' '}
          — a full-service marketing and media agency headquartered in Lynchburg, Virginia. We built
          this site to rank on Google for local marketing keywords. We are telling you this
          openly because transparency is one of our values, and because it makes for a better story.
        </p>
        <p>
          We have been helping Lynchburg businesses grow since 2013. That is over a decade of SEO
          campaigns, brand builds, content strategies, websites, photo and video projects, and more
          than a few lessons learned the hard way. When you work with us, you get a team of nine
          people who show up, answer the phone, and do not miss deadlines.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-20">
        {stats.map(s => (
          <div key={s.label} className="bg-white border border-[#CBD4D7] p-6 text-center">
            <p className="font-serif text-3xl font-semibold text-[#2C3539] mb-1">{s.value}</p>
            <p className="text-xs font-sans text-[#61717A] uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Who is Adam */}
      <div className="mb-20">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">The Founder</p>
        <h2 className="font-serif text-3xl font-semibold text-[#2C3539] mb-6">Who is Adam Mullins?</h2>
        <div className="flex flex-col sm:flex-row gap-8 items-start">
          <div className="sm:w-48 flex-shrink-0">
            <div className="relative w-48 h-48 overflow-hidden bg-[#CBD4D7]">
              <Image
                src="https://mullinsmediaco.com/wp-content/uploads/2024/01/adam-mullins-headshot.jpg"
                alt="Adam Mullins — Founder of Mullins Media Co. and Lynchburg Marketing Company"
                fill
                className="object-cover"
                sizes="192px"
                onError={undefined}
              />
            </div>
          </div>
          <div className="prose max-w-none text-[#4C4C4C]">
            <p>
              Adam Mullins started creating content and building marketing strategies in Lynchburg
              over 15 years ago. He established Mullins Media Co. as a full-time venture in 2013,
              and since then the agency has grown into a nine-person team serving clients across
              central Virginia and beyond.
            </p>
            <p>
              His background is unusually broad: thousands of portrait sessions, nearly 1,000
              residential properties photographed, hundreds of wedding assignments, and dozens of
              websites designed and launched. That range is not accidental — he believes that
              understanding how to tell a visual story makes you a better marketer, and understanding
              marketing makes you a better content creator.
            </p>
            <p>
              Adam married Sarah in 2009. Their family also includes adopted children and children
              in foster care. When he is not running campaigns or building websites, he is probably
              wrangling a drone, or letting his son Ollie fly it.
            </p>
          </div>
        </div>
      </div>

      {/* Philosophy */}
      <div className="bg-[#F5F6F6] border border-[#CBD4D7] p-10 mb-20">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">How we work</p>
        <h2 className="font-serif text-2xl font-semibold text-[#2C3539] mb-6">
          Our philosophy is embarrassingly simple
        </h2>
        <p className="text-[#4C4C4C] text-lg leading-relaxed font-sans font-light mb-4">
          &ldquo;We show up. We answer the phone. We don&apos;t miss deadlines. We walk alongside you to
          help your company grow.&rdquo;
        </p>
        <p className="text-[#61717A] font-sans font-light leading-relaxed">
          One size does not fit all. Every Lynchburg business is different — different industry,
          different audience, different competitive landscape. We do not package clients into
          templates. We build strategies around what your specific business actually needs, and we
          only onboard a limited number of clients at a time so we can give each one real attention.
        </p>
      </div>

      {/* Team */}
      <div className="mb-20">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">The Team</p>
        <h2 className="font-serif text-3xl font-semibold text-[#2C3539] mb-10">
          Nine people, one goal
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {team.map(member => (
            <div key={member.name} className="border border-[#CBD4D7] bg-white p-6">
              <p className="font-serif font-semibold text-lg text-[#2C3539] mb-1">{member.name}</p>
              <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">{member.role}</p>
              <p className="text-sm text-[#4C4C4C] font-sans font-light leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Why this site */}
      <div className="prose max-w-none text-[#4C4C4C] mb-20">
        <h2>Why does this website exist?</h2>
        <p>
          We built LynchburgMarketingCompany.com to rank on Google for local marketing and SEO
          keywords — terms like &ldquo;Lynchburg marketing company,&rdquo; &ldquo;Lynchburg SEO,&rdquo;
          &ldquo;marketing agency in Lynchburg VA,&rdquo; and &ldquo;Lynchburg digital advertising.&rdquo;
        </p>
        <p>
          The site runs on a Google Sheets-powered blog pipeline that publishes SEO-focused content
          on a regular schedule. Every post is written to rank for a specific search term relevant
          to Lynchburg businesses. It is a live, public SEO experiment — and you are watching it work
          in real time.
        </p>
        <p>
          We do the same thing for our clients. We build content systems, optimize their sites for
          local search, and help them compete against larger competitors with bigger budgets. The
          difference is that for clients, we do it quietly, under their brand. This site just happens
          to let you see behind the curtain.
        </p>
        <p>
          Mullins Media Co. is a real company. The team above is real. If you are a Lynchburg
          business looking for marketing help — whether that is SEO, paid advertising, content
          strategy, website design, or something else — we would genuinely love to talk.
        </p>
      </div>

      {/* Work with us CTA */}
      <div className="bg-[#2C3539] text-white p-10 text-center">
        <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-4">Work with us</p>
        <h2 className="text-2xl font-serif font-semibold mb-4">Ready to grow your Lynchburg business?</h2>
        <p className="text-[#97a8b0] mb-8 font-sans font-light leading-relaxed max-w-lg mx-auto">
          We work with a limited number of clients at a time. If you want a marketing partner who
          actually shows up, let&apos;s talk.
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
