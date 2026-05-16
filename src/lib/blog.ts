import { unstable_cache } from 'next/cache'
import { getSheetData, updateRowStatus, BlogPost } from './sheets'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'

export type PublishedPost = BlogPost & {
  contentHtml: string
}

async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(markdown)
  return result.toString()
}

export const getPublishedPosts = unstable_cache(
  async (): Promise<PublishedPost[]> => {
    const rows = await getSheetData()
    const published = rows.filter(row => row.status === 'published' && row.title)

    const posts = await Promise.all(
      published.map(async post => ({
        ...post,
        contentHtml: await markdownToHtml(post.content),
      }))
    )

    // Sort by published date descending
    return posts.sort((a, b) => {
      const dateA = new Date(a.publishedDate || 0).getTime()
      const dateB = new Date(b.publishedDate || 0).getTime()
      return dateB - dateA
    })
  },
  ['published-posts'],
  { revalidate: 86400, tags: ['blog'] } // revalidate daily
)

export async function getPostBySlug(slug: string): Promise<PublishedPost | null> {
  const posts = await getPublishedPosts()
  return posts.find(p => p.slug === slug) || null
}

// Called by the publish-posts cron API route
export async function publishReadyPosts(): Promise<{ published: string[]; warnings: string[] }> {
  const rows = await getSheetData()
  const today = new Date().toISOString().split('T')[0] // YYYY-MM-DD

  const published: string[] = []
  const warnings: string[] = []

  const readyRows = rows
    .map((row, index) => ({ row, index }))
    .filter(({ row }) => row.status === 'ready' && row.title)

  if (readyRows.length < 5) {
    warnings.push(`Only ${readyRows.length} posts marked 'ready' — queue is running low.`)
  }

  for (const { row, index } of readyRows) {
    const scheduled = row.scheduledDate
    if (!scheduled) continue

    // Publish if scheduled date is today or in the past
    const scheduledDate = new Date(scheduled)
    const todayDate = new Date(today)
    if (scheduledDate <= todayDate) {
      await updateRowStatus(index, today)
      published.push(row.title)
    }
  }

  return { published, warnings }
}
