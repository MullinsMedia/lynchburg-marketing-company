import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogCard from '@/components/BlogCard'
import { getPublishedPosts } from '@/lib/blog'
import { categoryToSlug, slugToCategory } from '@/lib/seo'
import Link from 'next/link'

type Props = { params: Promise<{ category: string }> }

export async function generateStaticParams() {
  const posts = await getPublishedPosts()
  const categories = [...new Set(posts.map(p => p.category).filter(Boolean))]
  return categories.map(cat => ({ category: categoryToSlug(cat) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params
  const label = slugToCategory(category)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'
  const url = `${siteUrl}/blog/category/${category}`

  return {
    title: `${label} | Lynchburg Marketing Blog`,
    description: `Browse all ${label} articles from Lynchburg Marketing Company — practical tips and insights for Lynchburg, VA businesses.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${label} | Lynchburg Marketing Blog`,
      description: `Browse all ${label} articles from Lynchburg Marketing Company.`,
      url,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${label} | Lynchburg Marketing Blog`,
      description: `Browse all ${label} articles from Lynchburg Marketing Company.`,
    },
  }
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params
  const allPosts = await getPublishedPosts()
  const posts = allPosts.filter(p => categoryToSlug(p.category) === category)

  if (posts.length === 0) notFound()

  const label = slugToCategory(category)

  // All unique categories for nav
  const allCategories = [...new Set(allPosts.map(p => p.category).filter(Boolean))]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="mb-10">
        <Link href="/blog" className="text-xs font-sans text-[#61717A] uppercase tracking-widest hover:text-[#2C3539] transition-colors">
          ← All Posts
        </Link>
        <h1 className="font-serif text-4xl font-semibold text-[#2C3539] mt-4 mb-2">{label}</h1>
        <p className="text-[#61717A] font-sans font-light">{posts.length} article{posts.length !== 1 ? 's' : ''}</p>
      </div>

      {/* Category nav */}
      <div className="flex flex-wrap gap-2 mb-12">
        {allCategories.map(cat => {
          const slug = categoryToSlug(cat)
          const active = slug === category
          return (
            <Link
              key={cat}
              href={`/blog/category/${slug}`}
              className={`text-xs font-sans font-semibold uppercase tracking-widest px-3 py-1.5 border transition-colors ${
                active
                  ? 'bg-[#2C3539] text-white border-[#2C3539]'
                  : 'text-[#61717A] border-[#CBD4D7] hover:border-[#61717A]'
              }`}
            >
              {cat}
            </Link>
          )
        })}
      </div>

      {/* Post grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
