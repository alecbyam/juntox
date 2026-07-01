import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Consultance & Études',
  description: 'Conseil stratégique, informatique et financier, études de faisabilité, baseline, M&E, gestion de projets, AMO et accompagnement institutionnel pour les entreprises et ONG en Afrique.',
  path: '/consultance',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
