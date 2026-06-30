import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Recherche & Innovation',
  description: 'Veille technologique, études de marché, prototypage rapide et R&D appliquée pour identifier les prochaines grandes opportunités.',
  path: '/recherche',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
