import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Communication & Marketing',
  description: 'Marketing digital, branding, production audiovisuelle et communication institutionnelle pour les entreprises et organisations en Afrique. Faites rayonner votre marque avec JuntoX.',
  path: '/communication',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
