import { createMetadata } from '../../lib/metadata'

export const metadata = createMetadata({
  title: 'Commerce International',
  description: 'Import-export, sourcing international et conformité réglementaire pour connecter l\'Afrique au commerce mondial.',
  path: '/commerce',
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
