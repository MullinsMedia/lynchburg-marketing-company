import { MetadataRoute } from 'next'
import { getPublishedPosts } from '@/lib/blog'
import { categoryToSlug } from '@/lib/seo'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lynchburgmarketingcompany.com'
  const posts = await getPublishedPosts()

  const postUrls = posts.map(post => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedDate),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Unique category pages
  const categories = [...new Set(posts.map(p => p.category).filter(Boolean))]
  const categoryUrls = categories.map(cat => ({
    url: `${siteUrl}/blog/category/${categoryToSlug(cat)}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Service pages
  const servicePages = [
    '/services',
    '/services/seo',
    '/services/advertising',
    '/services/social-media',
    '/services/website-design',
    '/services/content-marketing',
  ].map(path => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Location pages
  const locationPages = [
    '/forest-va-marketing',
    '/bedford-va-marketing',
    '/roanoke-marketing-agency',
    '/smith-mountain-lake-marketing',
    '/amherst-va-marketing',
    '/central-virginia-marketing',
  ].map(path => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${siteUrl}/about`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${siteUrl}/contact`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ...servicePages,
    ...locationPages,
    ...categoryUrls,
    ...postUrls,
  ]
}
