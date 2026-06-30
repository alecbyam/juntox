import type { MetadataRoute } from 'next'
import { siteConfig } from '../lib/site-config'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'JuntoX',
    description: siteConfig.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#060608',
    theme_color: '#060608',
    icons: [
      { src: '/icon', sizes: '512x512', type: 'image/png' },
    ],
  }
}
