import type { MetadataRoute } from 'next'
import { pagesIndex } from '../lib/pages-index'
import { siteConfig } from '../lib/site-config'

export default function sitemap(): MetadataRoute.Sitemap {
  const publicPages = pagesIndex.filter(
    (page) => !page.href.startsWith('/dashboard') && !page.href.startsWith('/auth')
  )

  return publicPages.map((page) => ({
    url: `${siteConfig.url}${page.href}`,
    lastModified: new Date(),
    changeFrequency: page.href === '/' ? 'weekly' : 'monthly',
    priority: page.href === '/' ? 1 : 0.7,
  }))
}
