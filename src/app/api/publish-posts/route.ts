import { revalidateTag } from 'next/cache'
import { publishReadyPosts } from '@/lib/blog'
import { Resend } from 'resend'

export async function GET(req: Request) {
  const authHeader = req.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    const { published, warnings } = await publishReadyPosts()

    // Revalidate blog cache so new posts are visible immediately
    revalidateTag('blog', 'default')

    // Send warning email if queue is running low
    if (warnings.length > 0 && process.env.ADMIN_EMAIL && process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      await resend.emails.send({
        from: 'Lynchburg Marketing Company <onboarding@resend.dev>',
        to: process.env.ADMIN_EMAIL,
        subject: 'Blog queue warning: content running low',
        text: warnings.join('\n'),
      })
    }

    return Response.json({
      ok: true,
      published,
      warnings,
    })
  } catch (err) {
    console.error('publish-posts cron error:', err)
    return Response.json({ error: 'Internal server error' }, { status: 500 })
  }
}
