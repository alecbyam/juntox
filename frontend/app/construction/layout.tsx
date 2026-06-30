import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Construction',
  description: 'Conception, gestion et supervision de projets de construction en RDC et en Afrique. Estimation IA, smart buildings et suivi digital.',
  path: '/construction',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
