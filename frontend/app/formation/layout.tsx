import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Formation',
  description: 'Programmes de formation en leadership technologique, entrepreneuriat, IA appliquée et gestion de projets pour l\'Afrique.',
  path: '/formation',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
