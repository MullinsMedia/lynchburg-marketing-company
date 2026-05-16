import Image from 'next/image'
import Link from 'next/link'
import type { PublishedPost } from '@/lib/blog'

function stripMarkdown(text: string): string {
  return text
    .replace(/#{1,6}\s/g, '')
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/\[(.*?)\]\(.*?\)/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/\n/g, ' ')
    .trim()
}

function formatDate(dateStr: string): string {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return dateStr
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function BlogCard({ post }: { post: PublishedPost }) {
  const excerpt = stripMarkdown(post.content).slice(0, 150) + (post.content.length > 150 ? '…' : '')

  return (
    <article className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
      {post.featuredImageUrl && (
        <div className="relative w-full aspect-video">
          <Image
            src={post.featuredImageUrl}
            alt={post.title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1">
        {post.category && (
          <span className="inline-block text-xs font-semibold uppercase tracking-wide text-[#E63946] mb-2">
            {post.category}
          </span>
        )}
        <h2 className="text-lg font-bold text-gray-900 mb-2 leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-[#E63946] transition-colors">
            {post.title}
          </Link>
        </h2>
        {post.publishedDate && (
          <p className="text-sm text-gray-400 mb-3">{formatDate(post.publishedDate)}</p>
        )}
        <p className="text-gray-600 text-sm leading-relaxed flex-1">{excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 text-sm font-semibold text-[#E63946] hover:underline"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}
