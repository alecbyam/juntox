import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { MainNav } from '../components/MainNav'
import { Footer } from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'

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
  title: 'JuntoX — Intelligence transformée en impact',
  description:
    'JuntoX SARL — Plateforme technologique africaine. IA, innovation, investissement, construction, logistique et formation pour bâtir les entreprises de demain.',
  metadataBase: new URL('https://juntox.africa'),
  openGraph: {
    title: 'JuntoX — Intelligence transformée en impact',
    description:
      'Plateforme technologique africaine pour l\'IA, l\'innovation, l\'investissement et l\'infrastructure.',
    siteName: 'JuntoX SARL',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JuntoX — Intelligence transformée en impact',
    description:
      'Plateforme technologique africaine pour l\'IA, l\'innovation, l\'investissement et l\'infrastructure.',
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen bg-background font-sans text-neutral-300 antialiased">
        <a href="#main-content" className="skip-link">
          Aller au contenu principal
        </a>
        <MainNav />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  )
}
