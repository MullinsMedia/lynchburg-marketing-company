import { updateScheduledDate } from '@/lib/sheets'
import { revalidateTag } from 'next/cache'

function checkAuth(req: Request) {
  return req.headers.get('authorization') === `Bearer ${process.env.ADMIN_PASSWORD}`
}

export async function PATCH(req: Request) {
  if (!checkAuth(req)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { rowIndex, newDate } = await req.json()

  if (typeof rowIndex !== 'number' || !newDate) {
    return Response.json({ error: 'rowIndex and newDate are required' }, { status: 400 })
  }

  await updateScheduledDate(rowIndex, newDate)
  revalidateTag('blog', 'default')

  return Response.json({ ok: true })
}
