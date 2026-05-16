import { revalidateTag } from 'next/cache'
import { publishReadyPosts } from '@/lib/blog'

export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { published, warnings } = await publishReadyPosts()

    if (warnings.length > 0) {
      console.warn('Blog queue warning:', warnings.join(' | '))
    }

    // Revalidate blog cache so new posts are visible immediately
    revalidateTag('blog', 'default')

    return Response.json({ ok: true, published, warnings })
  } catch (err) {
    console.error('publish-posts cron error:', err)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
