import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Laboratoire IA',
  description: 'Notre laboratoire d\'intelligence artificielle — modèles en production, projets de recherche et vision pour l\'IA en Afrique.',
  path: '/laboratoire-ia',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
