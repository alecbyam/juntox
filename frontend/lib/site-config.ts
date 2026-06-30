// Single source of truth for site-wide identity, social presence and
// related products. Fill in links as accounts/products go live — every
// consumer (Footer, JSON-LD structured data, sitemap) reads from here,
// so adding a value is enough to make it appear across the site.

export const siteConfig = {
  name: 'JuntoX SARL',
  url: 'https://juntox.africa',
  description:
    'JuntoX SARL — Plateforme technologique africaine. IA, innovation, investissement, construction, logistique et formation pour bâtir les entreprises de demain.',
  email: 'contact@juntox.africa',
  locality: 'Kinshasa',
  country: 'CD',

  // Leave a value empty ('') to hide that platform everywhere until the
  // account exists. Fill in the full URL (Instagram/LinkedIn/TikTok) or
  // international phone number with country code, no spaces (WhatsApp).
  social: {
    instagram: '',
    linkedin: '',
    tiktok: '',
    facebook: '',
    x: '',
    youtube: '',
    whatsapp: '', // e.g. '243900000000' — used to build a wa.me link
  },

  // Sibling products in the JuntoX ecosystem. Adding an entry here makes
  // it eligible to appear in cross-product navigation once that surface
  // is built — for now it documents what's coming.
  ecosystem: [
    {
      name: 'Livroto',
      description: 'Plateforme de commerce en ligne JuntoX',
      url: '',
      status: 'in_development' as const,
    },
  ],
}

export function socialLinks() {
  const { instagram, linkedin, tiktok, facebook, x, youtube, whatsapp } = siteConfig.social
  const links: { label: string; href: string }[] = []
  if (instagram) links.push({ label: 'Instagram', href: instagram })
  if (linkedin) links.push({ label: 'LinkedIn', href: linkedin })
  if (tiktok) links.push({ label: 'TikTok', href: tiktok })
  if (facebook) links.push({ label: 'Facebook', href: facebook })
  if (x) links.push({ label: 'X', href: x })
  if (youtube) links.push({ label: 'YouTube', href: youtube })
  if (whatsapp) links.push({ label: 'WhatsApp', href: `https://wa.me/${whatsapp}` })
  return links
}
