import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Incubateur',
  description: 'Accélérateur de startups technologiques africaines — mentorat, ressources, capital et réseau mondial.',
  path: '/incubateur',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
