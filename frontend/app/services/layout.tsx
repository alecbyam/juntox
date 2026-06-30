import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Nos Services',
  description: 'IA, consultance, construction, logistique, commerce, formation et investissement — une offre complète pour l\'entreprise intelligente.',
  path: '/services',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
