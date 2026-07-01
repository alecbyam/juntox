import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Construction',
  description: 'Construction de bâtiments, génie civil, rénovation, promotion immobilière, fourniture de matériaux et supervision de chantiers en RDC et en Afrique. Estimation IA et management de projets.',
  path: '/construction',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
