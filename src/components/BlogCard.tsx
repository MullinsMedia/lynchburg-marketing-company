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
    <article className="bg-white border border-[#CBD4D7] overflow-hidden hover:border-[#61717A] transition-colors flex flex-col">
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
          <span className="inline-block text-xs font-sans font-semibold uppercase tracking-widest text-[#61717A] mb-3">
            {post.category}
          </span>
        )}
        <h2 className="font-serif text-lg font-semibold text-[#2C3539] mb-2 leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:text-[#61717A] transition-colors">
            {post.title}
          </Link>
        </h2>
        {post.publishedDate && (
          <p className="text-xs font-sans text-[#97a8b0] mb-3 uppercase tracking-wide">{formatDate(post.publishedDate)}</p>
        )}
        <p className="text-[#61717A] text-sm leading-relaxed flex-1 font-sans font-light">{excerpt}</p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-5 text-xs font-sans font-semibold uppercase tracking-widest text-[#2C3539] hover:text-[#61717A] transition-colors"
        >
          Read more →
        </Link>
      </div>
    </article>
  )
}
