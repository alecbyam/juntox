import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Blog',
  description: 'Idées, analyses et perspectives sur la technologie, l\'innovation et l\'avenir de l\'Afrique par JuntoX.',
  path: '/blog',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
