import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Partenaires',
  description: 'Devenez partenaire de JuntoX — technologie, institutions, académie et commerce pour construire l\'écosystème ensemble.',
  path: '/partenaires',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
