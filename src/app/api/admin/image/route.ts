import { updateFeaturedImage } from '@/lib/sheets'
import { revalidateTag } from 'next/cache'

function checkAuth(req: Request) {
  return req.headers.get('authorization') === `Bearer ${process.env.ADMIN_PASSWORD}`
}

export async function PATCH(req: Request) {
  if (!checkAuth(req)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { rowIndex, imageUrl } = await req.json()

  if (typeof rowIndex !== 'number' || !imageUrl) {
    return Response.json({ error: 'rowIndex and imageUrl are required' }, { status: 400 })
  }

  await updateFeaturedImage(rowIndex, imageUrl)
  revalidateTag('blog', 'default')

  return Response.json({ ok: true })
}
