import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Ingénierie & Systèmes',
  description: 'Solutions d\'ingénierie avancées : électronique, IoT, robotique, systèmes embarqués et automatisation industrielle pour moderniser vos processus de production en RDC et en Afrique.',
  path: '/ingenierie',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
