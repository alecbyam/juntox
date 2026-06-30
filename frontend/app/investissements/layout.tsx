import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Investissements',
  description: 'Capital-risque, structuration financière et accompagnement d\'entreprises à fort potentiel en Afrique.',
  path: '/investissements',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
