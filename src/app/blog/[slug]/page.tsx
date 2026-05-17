import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPublishedPosts, getPostBySlug } from '@/lib/blog'
import { parseFaqQuestions, buildFaqSchema } from '@/lib/seo'

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = await getPublishedPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'
  const url = `${siteUrl}/blog/${post.slug}`
  const description = post.metaDescription || post.content.slice(0, 160)
  const images = post.featuredImageUrl ? [{ url: post.featuredImageUrl, width: 1200, height: 630, alt: post.title }] : []

  return {
    title: post.title,
    description,
    keywords: post.secondaryKeywords || post.targetKeyword,
    alternates: { canonical: url },
    openGraph: {
      title: post.title,
      description,
      url,
      type: 'article',
      publishedTime: post.publishedDate,
      modifiedTime: post.publishedDate,
      authors: ['Adam Mullins'],
      tags: post.secondaryKeywords ? post.secondaryKeywords.split(',').map(s => s.trim()) : [],
      images,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description,
      images: post.featuredImageUrl ? [post.featuredImageUrl] : [],
    },
  }
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'
  const url = `${siteUrl}/blog/${post.slug}`

  // Article schema
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    headline: post.title,
    description: post.metaDescription || post.content.slice(0, 160),
    keywords: post.secondaryKeywords || post.targetKeyword,
    author: {
      '@type': 'Person',
      name: 'Adam Mullins',
      url: 'https://mullinsmediaco.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Lynchburg Marketing Company',
      url: siteUrl,
    },
    datePublished: post.publishedDate,
    dateModified: post.publishedDate,
    url,
    ...(post.featuredImageUrl && {
      image: {
        '@type': 'ImageObject',
        url: post.featuredImageUrl,
        width: 1200,
        height: 630,
      },
    }),
  }

  // FAQ schema — parsed from the sheet's faqQuestions field
  const faqEntries = parseFaqQuestions(post.faqQuestions || '')
  const faqSchema = buildFaqSchema(faqEntries)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-20">
        {/* Post header */}
        <header className="mb-10">
          {post.category && (
            <span className="inline-block text-xs font-sans font-semibold uppercase tracking-widest text-[#61717A] mb-4">
              {post.category}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#2C3539] leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-3 text-xs font-sans text-[#97a8b0] uppercase tracking-wide">
            {post.publishedDate && <span>{formatDate(post.publishedDate)}</span>}
            <span>·</span>
            <span>Adam Mullins | Mullins Media Co.</span>
          </div>
          <div className="mt-6 border-b border-[#CBD4D7]" />
        </header>

        {/* Featured image */}
        {post.featuredImageUrl && (
          <div className="relative w-full aspect-video overflow-hidden mb-10">
            <Image
              src={post.featuredImageUrl}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        {/* Content */}
        <div
          className="prose max-w-none text-[#4C4C4C]"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* FAQ section — rendered visibly if questions exist */}
        {faqEntries.length > 0 && (
          <div className="mt-16 border-t border-[#CBD4D7] pt-12">
            <h2 className="font-serif text-2xl font-semibold text-[#2C3539] mb-8">
              Frequently Asked Questions
            </h2>
            <dl className="space-y-6">
              {faqEntries.map((faq, i) => (
                <div key={i} className="border-b border-[#F5F6F6] pb-6">
                  <dt className="font-sans font-semibold text-[#2C3539] mb-2">{faq.question}</dt>
                  <dd className="font-sans font-light text-[#61717A] leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-20 bg-[#2C3539] text-white p-10 text-center">
          <p className="text-xs text-[#CBD4D7] uppercase tracking-widest font-sans mb-4">Work with us</p>
          <h2 className="text-2xl font-serif font-semibold mb-4">Need marketing help in Lynchburg?</h2>
          <p className="text-[#97a8b0] mb-8 font-sans font-light leading-relaxed">
            Mullins Media Co. is a real digital marketing agency serving Lynchburg, VA and beyond.
            Let&apos;s talk about what we can do for your business.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-[#61717A] text-white font-sans font-semibold text-sm uppercase tracking-widest px-10 py-4 hover:bg-[#4f6069] transition-colors"
          >
            Get Your Free Consultation
          </Link>
        </div>
      </article>
    </>
  )
}
