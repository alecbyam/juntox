import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Contact',
  description: 'Contactez JuntoX SARL pour discuter de votre projet, investir ou devenir partenaire. Kinshasa, RD Congo.',
  path: '/contact',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
