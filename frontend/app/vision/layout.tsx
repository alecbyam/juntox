import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Notre Vision',
  description: 'Construire une entreprise qui inspire et qui dure. JuntoX vise à faire de l\'Afrique une source de technologies standards mondiales.',
  path: '/vision',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
