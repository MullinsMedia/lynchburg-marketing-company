import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { getPublishedPosts, getPostBySlug } from '@/lib/blog'

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

  return {
    title: post.title,
    description: post.metaDescription || post.content.slice(0, 160),
    alternates: {
      canonical: `${siteUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.content.slice(0, 160),
      images: post.featuredImageUrl ? [{ url: post.featuredImageUrl }] : [],
      type: 'article',
      publishedTime: post.publishedDate,
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

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    author: { '@type': 'Person', name: 'Adam Mullins' },
    publisher: { '@type': 'Organization', name: 'Lynchburg Marketing Company' },
    datePublished: post.publishedDate,
    image: post.featuredImageUrl || undefined,
    url: `${siteUrl}/blog/${post.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
        {/* Post header */}
        <header className="mb-8">
          {post.category && (
            <span className="inline-block text-xs font-semibold uppercase tracking-wide text-[#E63946] mb-3">
              {post.category}
            </span>
          )}
          <h1 className="text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500">
            {post.publishedDate && <span>{formatDate(post.publishedDate)}</span>}
            <span>·</span>
            <span>Adam Mullins | Mullins Media Co.</span>
          </div>
        </header>

        {/* Featured image */}
        {post.featuredImageUrl && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-8">
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
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />

        {/* Bottom CTA */}
        <div className="mt-16 bg-gray-900 text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-extrabold mb-3">Need marketing help in Lynchburg?</h2>
          <p className="text-gray-300 mb-6">
            Mullins Media Co. is a real digital marketing agency serving Lynchburg, VA and beyond.
            Let&apos;s talk about what we can do for your business.
          </p>
          <a
            href="https://mullinsmediaco.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#E63946] text-white font-bold px-8 py-3 rounded-lg hover:bg-red-700 transition-colors"
          >
            Visit Mullins Media Co →
          </a>
        </div>
      </article>
    </>
  )
}
