import { getAdminPosts, updateRowStatus } from '@/lib/sheets'
import { revalidateTag } from 'next/cache'

function checkAuth(req: Request) {
  return req.headers.get('authorization') === `Bearer ${process.env.ADMIN_PASSWORD}`
}

export async function POST(req: Request) {
  if (!checkAuth(req)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { count } = await req.json()

  if (!count || typeof count !== 'number' || count < 1) {
    return Response.json({ error: 'count must be a positive number' }, { status: 400 })
  }

  const posts = await getAdminPosts()
  const ready = posts
    .filter(p => p.status === 'ready')
    .sort((a, b) => {
      if (!a.scheduledDate) return 1
      if (!b.scheduledDate) return -1
      return new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime()
    })
    .slice(0, count)

  if (ready.length === 0) {
    return Response.json({ ok: true, published: [], message: 'No ready posts found' })
  }

  const today = new Date().toISOString().split('T')[0]
  const published: string[] = []

  for (const post of ready) {
    await updateRowStatus(post.rowIndex, today)
    published.push(post.title)
  }

  revalidateTag('blog', 'default')

  return Response.json({ ok: true, published })
}
