import type { Metadata } from 'next'
import { siteConfig } from './site-config'

const baseUrl = siteConfig.url
const siteName = siteConfig.name

export function createMetadata(options: {
  title: string
  description: string
  path?: string
}): Metadata {
  const { title, description, path = '' } = options
  const fullTitle = `${title} — ${siteName}`

  return {
    title: fullTitle,
    description,
    openGraph: {
      title: fullTitle,
      description,
      url: `${baseUrl}${path}`,
      siteName,
      locale: 'fr_FR',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
    },
    alternates: {
      canonical: `${baseUrl}${path}`,
    },
  }
}
