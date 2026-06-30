import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Investisseurs',
  description: 'Investir dans l\'infrastructure technologique africaine. Thèse d\'investissement, pipeline et opportunités JuntoX.',
  path: '/investisseurs',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
