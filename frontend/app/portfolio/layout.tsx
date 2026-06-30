import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Portfolio',
  description: 'Nos projets et réalisations — plateformes IA, études stratégiques, programmes de formation et plus.',
  path: '/portfolio',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
