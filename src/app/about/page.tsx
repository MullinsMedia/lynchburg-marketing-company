import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

const aboutUrl = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'}/about`

export const metadata: Metadata = {
  title: 'About | Mullins Media Co. — Lynchburg Marketing & Advertising Agency',
  description:
    'Meet the nine-person team behind Lynchburg Marketing Company. Mullins Media Co. has been helping Lynchburg, VA businesses grow with SEO, advertising, and marketing since 2013.',
  alternates: { canonical: aboutUrl },
  openGraph: {
    title: 'About | Mullins Media Co. — Lynchburg Marketing & Advertising Agency',
    description: 'Meet the real marketing team behind Lynchburg Marketing Company — Mullins Media Co., a full-service agency serving Lynchburg, VA since 2013.',
    url: aboutUrl,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About | Mullins Media Co. — Lynchburg Marketing & Advertising Agency',
    description: 'Meet the real marketing team behind Lynchburg Marketing Company — Mullins Media Co., a full-service agency serving Lynchburg, VA since 2013.',
  },
}

const team = [
  {
    name: 'Adam Mullins',
    role: 'Founder',
    headshot: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/a3fe5367-fd6b-48f6-8db1-217abf513504/Mullins+Media+Headshots+2025-16.jpg',
    bio: 'Adam has been a full-time content creator since 2013. He has photographed thousands of people, hundreds of weddings, nearly 1,000 homes, and designed dozens of websites. Adam owns and operates several businesses and has formed an amazing media and marketing team to help grow your business. Adam and Sarah got married in 2009 and have been shooting photos together ever since. They have several children, some biological, some adopted, and they also do foster care.',
  },
  {
    name: 'Paige Howell',
    role: 'Strategic Growth Manager',
    headshot: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/65c3410f-cef7-4c05-9b25-78d99c139942/Mullins+Media+Headshots+2025-10.jpg',
    bio: 'Paige is our Strategic Growth Manager, bringing years of business and marketing expertise to the team. Before joining Mullins Media, Paige owned and operated her own successful business in Lynchburg. As a longtime family friend of Adam\'s, Paige has been instrumental in driving our company\'s success through her strategic vision and collaborative spirit.',
  },
  {
    name: 'Delaney Poff',
    role: 'Project Manager',
    headshot: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/5948e93a-c4b8-4fab-add1-3701c2b3615f/Mullins+Media+Headshots+2025.jpg',
    bio: 'Delaney was born and raised in Bedford, VA, making her a homegrown local to the central Virginia area. She graduated from Liberty University in 2023 with a degree in Strategic Communication. Delaney wears many hats — from project coordination to website updates — and has a passion for helping clients achieve their goals and focus on running their business.',
  },
  {
    name: 'Elisa Forshey',
    role: 'Social Media Manager',
    headshot: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/58948c6a-8615-414b-b162-c0f1fa639320/Mullins+Media+Headshots+2025-5.jpg',
    bio: 'Elisa is a writer and serial entrepreneur with previous careers in healthcare, music education, wedding design, and indie bookselling. She has spent the last 8 years in graphic design, copywriting, social media, and email marketing — and is passionate about helping small business owners develop a social presence that tells a compelling story about their brand.',
  },
  {
    name: 'Bradley Mejia',
    role: 'Multimedia Specialist',
    headshot: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/2af41cda-67c5-4a94-a622-b8ecb513ab29/Mullins+Media+Headshots+2025-14.jpg',
    bio: 'Bradley is always hungry for growth and eager to learn. With a background in photography, videography, marketing, and design, he has spent years capturing moments and crafting digital experiences. Serving others is his passion — whether in his community, with his family, or through his work with Lynchburg businesses.',
  },
  {
    name: 'Isaac Gibson',
    role: 'Multimedia Specialist',
    headshot: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/f415a90a-31e1-4426-bb9c-97859e4c72fb/Mullins+Media+Headshots+2025-19.jpg',
    bio: 'Isaac has over 15 years of digital media experience — photography, videography, graphic design, and more hats than one bio can hold. In college, he became the head coach of Liberty University\'s Ski & Snowboard team (2018–2023) and oversaw all Snowflex programs (2016–2022). As a short-term rental owner himself, he brings firsthand perspective to every property shoot.',
  },
  {
    name: 'Ollie Mullins',
    role: 'Drone Pilot',
    headshot: 'https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/7bd1b5c9-2cf2-457d-afbc-b180567bbc32/Ollie+Headshot-2.jpg',
    bio: 'Ollie has been flying drones for as long as he can remember. Heading into fourth grade, he is already a skilled FPV and cinema drone pilot with a creative eye and serious talent behind the controls. When he\'s not in the sky, you\'ll find him working a gimbal like a pro.',
  },
]

const stats = [
  { value: '15+', label: 'Years in Lynchburg' },
  { value: '5,000+', label: 'Homes photographed' },
  { value: '300+', label: 'Weddings documented' },
  { value: '9', label: 'Person team' },
]

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20">

      {/* Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">About Us</p>
        <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#2C3539] mb-6 leading-tight">
          A Real Lynchburg Marketing &amp; Advertising Agency
        </h1>
        <div className="border-b border-[#CBD4D7] mb-8" />
        <p className="text-[#61717A] text-lg font-sans font-light leading-relaxed">
          Mullins Media Co. is a full-service marketing and media agency based in Lynchburg, Virginia.
          We have been helping businesses grow since 2013 — with a nine-person team covering SEO, paid
          advertising, social media, website design, TV and radio, photography, video, and brand strategy.
          Lynchburg Marketing Company is one of our brands, built specifically to demonstrate what
          modern SEO looks like when it is done in public.
        </p>
      </div>

      {/* Team photo */}
      <div className="relative w-full aspect-video overflow-hidden mb-16">
        <Image
          src="https://images.squarespace-cdn.com/content/v1/60f6d968e0d96036f369360f/f58712e1-0f03-48de-9477-45fc64342dde/Mullins+Media+2024-79_websize.jpg"
          alt="Mullins Media Co. team — Lynchburg marketing and advertising agency"
          fill
          className="object-cover object-center"
          sizes="(max-width: 768px) 100vw, 960px"
          priority
        />
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-20">
        {stats.map(s => (
          <div key={s.label} className="bg-[#F5F6F6] border border-[#CBD4D7] p-6 text-center">
            <p className="font-serif text-3xl font-semibold text-[#2C3539] mb-1">{s.value}</p>
            <p className="text-xs font-sans text-[#61717A] uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Mission */}
      <div className="bg-[#2C3539] text-white p-10 mb-20">
        <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-4">Who We Are</p>
        <p className="font-serif text-xl sm:text-2xl font-semibold leading-relaxed mb-6">
          We&apos;re a Lynchburg-based creative team made up of business owners, property owners, and
          storytellers. We bring real-world experience, diverse skill sets, and a shared passion for
          supporting small businesses into every project.
        </p>
        <p className="text-[#97a8b0] font-sans font-light leading-relaxed">
          At Mullins Media Co., we believe media and marketing all work together. It is difficult to
          run successful Google pay-per-click ads if you are directing traffic to a poorly designed
          website. An amazing video is not nearly as effective if your social media has no engagement.
          We are a full-service team of experts dedicated to building and growing relationships with
          small businesses and assisting them in reaching and serving their ideal clients. One size
          does NOT fit all.
        </p>
      </div>

      {/* Philosophy */}
      <div className="mb-20">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">How We Work</p>
        <h2 className="font-serif text-3xl font-semibold text-[#2C3539] mb-8">
          Simple philosophy, real results
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { heading: 'We show up', body: 'Deadlines are not suggestions. We deliver on time, every time — because your business depends on it.' },
            { heading: 'We answer the phone', body: 'You will not get a ticketing system or a bot. You will get a real person on our team who knows your account.' },
            { heading: 'We customize everything', body: 'No cookie-cutter packages. Every ad campaign, website, content strategy, and brand plan is built specifically for your business.' },
            { heading: 'We walk alongside you', body: 'We are not a vendor. We are a growth partner — invested in your success because your success is how we measure ours.' },
          ].map(item => (
            <div key={item.heading} className="border-l-4 border-[#61717A] pl-6 py-2">
              <p className="font-serif font-semibold text-[#2C3539] mb-2">{item.heading}</p>
              <p className="text-sm text-[#61717A] font-sans font-light leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mb-20">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">The Team</p>
        <h2 className="font-serif text-3xl font-semibold text-[#2C3539] mb-10">
          Nine people. One goal — grow your business.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map(member => (
            <div key={member.name} className="bg-white border border-[#CBD4D7] overflow-hidden">
              <div className="relative w-full aspect-square overflow-hidden bg-[#F5F6F6]">
                <Image
                  src={member.headshot}
                  alt={`${member.name} — ${member.role} at Mullins Media Co., Lynchburg VA`}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <p className="font-serif font-semibold text-lg text-[#2C3539] mb-1">{member.name}</p>
                <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">{member.role}</p>
                <p className="text-sm text-[#4C4C4C] font-sans font-light leading-relaxed">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Media credentials */}
      <div className="bg-[#F5F6F6] border border-[#CBD4D7] p-10 mb-20">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-4">Media Presence</p>
        <h2 className="font-serif text-2xl font-semibold text-[#2C3539] mb-4">
          We advertise on the same channels we manage for clients
        </h2>
        <p className="text-[#4C4C4C] font-sans font-light leading-relaxed mb-6">
          Our work has appeared in magazines and on billboards throughout central Virginia. We are media
          partners with WSET (Lynchburg&apos;s local TV station), WLNI (radio), and Central Virginia Home
          Magazine — the same channels we use to run advertising campaigns for clients.
        </p>
        <div className="flex flex-wrap gap-3">
          {['WSET TV', 'WLNI Radio', 'Central Virginia Home Magazine', 'Lynchburg Billboards', 'Atelier Studio'].map(c => (
            <span key={c} className="text-xs font-sans font-semibold uppercase tracking-widest px-3 py-1.5 border border-[#CBD4D7] text-[#61717A] bg-white">{c}</span>
          ))}
        </div>
      </div>

      {/* Why this site exists */}
      <div className="prose max-w-none text-[#4C4C4C] mb-20">
        <h2>Why does LynchburgMarketingCompany.com exist?</h2>
        <p>
          This website is a live SEO experiment. We built it specifically to rank on Google for search terms
          like &ldquo;Lynchburg marketing company,&rdquo; &ldquo;Lynchburg advertising company,&rdquo;
          &ldquo;marketing agency Lynchburg VA,&rdquo; and &ldquo;Lynchburg SEO.&rdquo; The site runs on a
          content pipeline that publishes keyword-targeted blog posts on a regular schedule. Every piece of
          copy is written to rank for something specific.
        </p>
        <p>
          We tell you this openly because transparency is one of our values — and because it makes for a
          better story. If you found this site through a Google search, the strategy worked. If you are a
          Lynchburg business owner who wants this kind of thinking applied to your own brand, that is
          exactly what we do for clients.
        </p>
        <p>
          Mullins Media Co. is a real company. The team you see above is the real team. The results we
          describe — growing client revenue 85% in months, scaling a business from 3 to 50+ employees,
          quadrupling website traffic — are real outcomes. We would love to talk about what that could
          look like for your Lynchburg business.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-[#2C3539] text-white p-10 text-center">
        <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-4">Work with us</p>
        <h2 className="text-2xl font-serif font-semibold mb-4">
          Ready to grow your Lynchburg business?
        </h2>
        <p className="text-[#97a8b0] mb-8 font-sans font-light leading-relaxed max-w-lg mx-auto">
          We work with a limited number of marketing clients at a time. If you want a partner who
          shows up, answers the phone, and actually moves the needle — let&apos;s talk.
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
