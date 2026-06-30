import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Carrières',
  description: 'Rejoignez JuntoX — postes ouverts pour ingénieurs, consultants, chercheurs et managers à Kinshasa et en remote.',
  path: '/carrieres',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
