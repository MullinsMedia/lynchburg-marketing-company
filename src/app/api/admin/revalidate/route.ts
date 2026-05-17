import { revalidateTag } from 'next/cache'

function checkAuth(req: Request) {
  return req.headers.get('authorization') === `Bearer ${process.env.ADMIN_PASSWORD}`
}

export async function POST(req: Request) {
  if (!checkAuth(req)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  revalidateTag('blog', 'default')

  return Response.json({ ok: true })
}
