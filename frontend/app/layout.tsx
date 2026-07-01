import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { MainNav } from '../components/MainNav'
import { Footer } from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'
import { ToastProvider } from '../components/ui/Toast'
import { LanguageProvider } from '../components/LanguageProvider'
import { siteConfig, socialLinks } from '../lib/site-config'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#060608',
}

export const metadata: Metadata = {
  title: {
    default: 'JuntoX — Intelligence transformée en impact',
    template: '%s — JuntoX SARL',
  },
  description: siteConfig.description,
  keywords: [
    'JuntoX',
    'groupe multidisciplinaire Afrique',
    'intelligence artificielle Afrique',
    'ingénierie IoT robotique RDC',
    'construction génie civil RDC',
    'logistique transport transit Afrique',
    'consultance études stratégie Afrique',
    'formation professionnelle Afrique',
    'marketing digital communication Afrique',
    'investissement incubation startup Afrique',
    'énergie solaire santé numérique FinTech EdTech Afrique',
    'Bunia Ituri technologie RDC',
  ],
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'JuntoX — Intelligence transformée en impact',
    description: siteConfig.description,
    siteName: siteConfig.name,
    url: siteConfig.url,
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JuntoX — Intelligence transformée en impact',
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon`,
    description: siteConfig.description,
    email: siteConfig.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.locality,
      addressRegion: siteConfig.region,
      addressCountry: siteConfig.country,
    },
    sameAs: socialLinks().map((link) => link.href),
  }

  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-background font-sans text-neutral-300 antialiased">
        <LanguageProvider>
          <ToastProvider>
            <a href="#main-content" className="skip-link">
              Aller au contenu principal
            </a>
            <MainNav />
            <main id="main-content" className="min-h-screen">{children}</main>
            <Footer />
            <ScrollToTop />
          </ToastProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
