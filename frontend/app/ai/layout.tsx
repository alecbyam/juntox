import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Intelligence Artificielle',
  description: 'Technologies de l\'information et IA — développement logiciel, applications web et mobiles, cybersécurité, cloud computing, automatisation RPA et transformation digitale par JuntoX SARL.',
  path: '/ai',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
