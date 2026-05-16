import { Resend } from 'resend'

export async function POST(req: Request) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return Response.json({ error: 'All fields required' }, { status: 400 })
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'Lynchburg Marketing Company <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL!,
      subject: `New contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Failed to send contact email:', err)
    return Response.json({ error: 'Failed to send message. Please try again.' }, { status: 500 })
  }
}
