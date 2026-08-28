import type { MetadataRoute } from 'next'
import { pagesIndex } from '../lib/pages-index'
import { siteConfig } from '../lib/site-config'
import { fetchPublishedPosts } from '../lib/blog-api'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const publicPages = pagesIndex.filter(
    (page) => !page.href.startsWith('/dashboard') && !page.href.startsWith('/auth')
  )

  const staticEntries: MetadataRoute.Sitemap = publicPages.map((page) => ({
    url: `${siteConfig.url}${page.href}`,
    lastModified: new Date(),
    changeFrequency: page.href === '/' ? 'weekly' : 'monthly',
    priority: page.href === '/' ? 1 : 0.7,
  }))

  // Articles individuels — vivent en base (CMS admin), absents de pagesIndex
  // qui ne liste que la navigation statique du site.
  const posts = await fetchPublishedPosts()
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(post.created_at),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticEntries, ...blogEntries]
}
