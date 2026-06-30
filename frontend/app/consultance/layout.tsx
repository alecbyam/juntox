import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Consultance & Études',
  description: 'Études stratégiques, due diligence, transformation digitale et analyses financières pour les entreprises africaines et internationales.',
  path: '/consultance',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
