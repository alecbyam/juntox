import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'À propos',
  description: 'Découvrez JuntoX SARL — une plateforme technologique africaine qui lie capital, intelligence et exécution concrète pour transformer les territoires.',
  path: '/about',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
