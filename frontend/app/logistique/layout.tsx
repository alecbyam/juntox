import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Logistique',
  description: 'Optimisation des chaînes d\'approvisionnement, gestion d\'entrepôts et solutions logistiques à l\'échelle africaine.',
  path: '/logistique',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
