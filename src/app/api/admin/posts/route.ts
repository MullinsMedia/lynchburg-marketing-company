import { getAdminPosts } from '@/lib/sheets'

function checkAuth(req: Request) {
  return req.headers.get('authorization') === `Bearer ${process.env.ADMIN_PASSWORD}`
}

export async function GET(req: Request) {
  if (!checkAuth(req)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const posts = await getAdminPosts()

  const ready = posts.filter(p => p.status === 'ready')
  const published = posts.filter(p => p.status === 'published')
  const draft = posts.filter(p => p.status === 'draft')

  return Response.json({
    stats: {
      ready: ready.length,
      published: published.length,
      draft: draft.length,
    },
    ready: ready.sort((a, b) => {
      if (!a.scheduledDate) return 1
      if (!b.scheduledDate) return -1
      return new Date(a.scheduledDate).getTime() - new Date(b.scheduledDate).getTime()
    }),
  })
}
