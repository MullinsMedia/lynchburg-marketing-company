import type { Metadata } from 'next'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import { getPublishedPosts } from '@/lib/blog'
import { categoryToSlug } from '@/lib/seo'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'
const blogUrl = `${siteUrl}/blog`

export async function generateMetadata({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}): Promise<Metadata> {
  const params = await searchParams
  const page = Math.max(1, parseInt(params.page || '1', 10))
  const isFirstPage = page === 1

  const title = isFirstPage
    ? 'Blog | Lynchburg Marketing & SEO Insights'
    : `Blog — Page ${page} | Lynchburg Marketing & SEO Insights`
  const description = isFirstPage
    ? 'Marketing tips, SEO strategies, and advertising insights for businesses in Lynchburg, VA. Written by Mullins Media Co.'
    : `Page ${page} of the Lynchburg Marketing Company blog — SEO and marketing tips for Lynchburg, VA businesses.`
  // Paginated pages use the base /blog URL as canonical to avoid duplicate issues
  const canonical = isFirstPage ? blogUrl : `${blogUrl}?page=${page}`

  return {
    title,
    description,
    alternates: { canonical },
    // Noindex paginated pages beyond page 1 so Google only indexes /blog
    ...(isFirstPage ? {} : { robots: { index: false, follow: true } }),
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  }
}

const POSTS_PER_PAGE = 12

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>
}) {
  const params = await searchParams
  const page = Math.max(1, parseInt(params.page || '1', 10))
  const allPosts = await getPublishedPosts()
  const totalPages = Math.max(1, Math.ceil(allPosts.length / POSTS_PER_PAGE))
  const start = (page - 1) * POSTS_PER_PAGE
  const posts = allPosts.slice(start, start + POSTS_PER_PAGE)
  const allCategories = [...new Set(allPosts.map(p => p.category).filter(Boolean))]

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="mb-10">
        <p className="text-xs text-[#61717A] uppercase tracking-widest font-sans mb-3">Lynchburg Marketing Blog</p>
        <h1 className="text-4xl sm:text-5xl font-serif font-semibold text-[#2C3539] mb-4">
          Marketing Insights
        </h1>
        <p className="text-[#61717A] text-lg max-w-2xl font-sans font-light leading-relaxed">
          SEO-focused content about marketing, advertising, and growing businesses in Lynchburg, VA.
          Written by the team at Mullins Media Co.
        </p>
      </div>

      {/* Category filter */}
      {allCategories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-12">
          {allCategories.map(cat => (
            <Link
              key={cat}
              href={`/blog/category/${categoryToSlug(cat)}`}
              className="text-xs font-sans font-semibold uppercase tracking-widest px-3 py-1.5 border border-[#CBD4D7] text-[#61717A] hover:border-[#61717A] hover:text-[#2C3539] transition-colors"
            >
              {cat}
            </Link>
          ))}
        </div>
      )}

      {posts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-14">
            {posts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-4">
              {page > 1 && (
                <a
                  href={`/blog?page=${page - 1}`}
                  className="px-6 py-2 border border-[#CBD4D7] text-[#4C4C4C] text-sm font-sans font-medium uppercase tracking-widest hover:border-[#61717A] hover:text-[#61717A] transition-colors"
                >
                  ← Previous
                </a>
              )}
              <span className="px-4 py-2 text-[#61717A] text-sm font-sans">
                Page {page} of {totalPages}
              </span>
              {page < totalPages && (
                <a
                  href={`/blog?page=${page + 1}`}
                  className="px-6 py-2 border border-[#CBD4D7] text-[#4C4C4C] text-sm font-sans font-medium uppercase tracking-widest hover:border-[#61717A] hover:text-[#61717A] transition-colors"
                >
                  Next →
                </a>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="bg-white border border-[#CBD4D7] p-16 text-center">
          <h2 className="font-serif text-xl font-semibold text-[#2C3539] mb-3">Content coming soon</h2>
          <p className="text-[#61717A] font-sans font-light">
            We&apos;re building out our Lynchburg marketing blog. Check back soon for SEO tips,
            advertising insights, and local marketing strategies.
          </p>
        </div>
      )}
    </div>
  )
}
