import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Secteurs Émergents',
  description: 'JuntoX investit dans les secteurs d\'avenir en Afrique : énergie solaire, agriculture intelligente, santé numérique (eHealth), éducation digitale (EdTech) et finance numérique (FinTech). Solutions intégrées pour les marchés en croissance.',
  path: '/secteurs-emergents',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
