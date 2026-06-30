import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Intelligence Artificielle',
  description: 'Solutions IA sur mesure — analyse de projets, business plans, études financières et rapports automatisés par JuntoX AI.',
  path: '/ai',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
