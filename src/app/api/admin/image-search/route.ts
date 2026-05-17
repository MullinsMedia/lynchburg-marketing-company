function checkAuth(req: Request) {
  return req.headers.get('authorization') === `Bearer ${process.env.ADMIN_PASSWORD}`
}

export async function GET(req: Request) {
  if (!checkAuth(req)) {
    return Response.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { searchParams } = new URL(req.url)
  const query = searchParams.get('query')

  if (!query) {
    return Response.json({ error: 'query is required' }, { status: 400 })
  }

  const accessKey = process.env.UNSPLASH_ACCESS_KEY
  if (!accessKey) {
    return Response.json({ error: 'Unsplash not configured' }, { status: 500 })
  }

  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}&per_page=12&orientation=landscape`,
    { headers: { Authorization: `Client-ID ${accessKey}` } }
  )

  if (!res.ok) {
    return Response.json({ error: 'Unsplash request failed' }, { status: 502 })
  }

  const data = await res.json()
  const photos = (data.results || []).map((p: { id: string; urls: { regular: string; thumb: string }; alt_description: string; user: { name: string } }) => ({
    id: p.id,
    url: p.urls.regular,
    thumb: p.urls.thumb,
    alt: p.alt_description || query,
    credit: p.user.name,
  }))

  return Response.json({ photos })
}
