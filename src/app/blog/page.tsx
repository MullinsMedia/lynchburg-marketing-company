import type { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'
import { getPublishedPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog | Lynchburg Marketing & SEO Insights',
  description:
    'Marketing tips, SEO strategies, and advertising insights for businesses in Lynchburg, VA. Written by Mullins Media Co.',
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

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-12">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Lynchburg Marketing Blog</h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          SEO-focused content about marketing, advertising, and growing businesses in Lynchburg, VA.
          Written by the team at Mullins Media Co.
        </p>
      </div>

      {posts.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {posts.map(post => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center gap-4">
              {page > 1 && (
                <a
                  href={`/blog?page=${page - 1}`}
                  className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-[#E63946] hover:text-[#E63946] transition-colors font-medium"
                >
                  ← Previous
                </a>
              )}
              <span className="px-5 py-2 text-gray-500 font-medium">
                Page {page} of {totalPages}
              </span>
              {page < totalPages && (
                <a
                  href={`/blog?page=${page + 1}`}
                  className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:border-[#E63946] hover:text-[#E63946] transition-colors font-medium"
                >
                  Next →
                </a>
              )}
            </div>
          )}
        </>
      ) : (
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-16 text-center">
          <h2 className="text-xl font-bold text-gray-700 mb-3">Content coming soon</h2>
          <p className="text-gray-500">
            We&apos;re building out our Lynchburg marketing blog. Check back soon for SEO tips,
            advertising insights, and local marketing strategies.
          </p>
        </div>
      )}
    </div>
  )
}
