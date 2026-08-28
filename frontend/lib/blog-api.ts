// Client de lecture publique pour le blog — appelle directement le backend
// FastAPI (backend/app/routes/blog.py), remplace l'ancien lib/blog-data.ts
// statique. Utilisé côté serveur (Server Components) : les pages se
// revalident toutes les 5 min (voir `revalidate` dans les pages), donc un
// nouvel article publié via le CMS admin apparaît sans nouveau déploiement.

const API_URL = process.env.NEXT_PUBLIC_API_URL || ''
const REVALIDATE_SECONDS = 300

export type BlogPostSummary = {
  id: number
  title: string
  slug: string
  excerpt: string | null
  category: string | null
  published: boolean
  created_at: string
}

export type BlogPost = BlogPostSummary & {
  content: string | null
  updated_at: string | null
}

export const BLOG_CATEGORIES = [
  'Vision',
  'Intelligence Artificielle',
  'Philosophie',
  'Logistique',
  'Technologie',
  'Investissements',
]

/** Temps de lecture estimé (~200 mots/min), calculé côté client — le backend
 * ne stocke pas cette donnée, pas besoin d'un champ dédié pour un calcul aussi simple. */
export function estimateReadTime(content: string | null): string {
  const words = (content ?? '').trim().split(/\s+/).filter(Boolean).length
  const minutes = Math.max(1, Math.round(words / 200))
  return `${minutes} min`
}

export function formatArticleDate(iso: string): string {
  return new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

/** Liste des articles publiés, plus récents en premier. */
export async function fetchPublishedPosts(): Promise<BlogPostSummary[]> {
  try {
    const res = await fetch(`${API_URL}/api/blog?per_page=50`, {
      next: { revalidate: REVALIDATE_SECONDS },
    })
    if (!res.ok) return []
    return await res.json()
  } catch {
    // Backend indisponible : page vide plutôt qu'une erreur 500 sur le site public.
    return []
  }
}

/** Un article publié par son slug, ou null si introuvable/dépublié. */
export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${API_URL}/api/blog/${encodeURIComponent(slug)}`, {
      next: { revalidate: REVALIDATE_SECONDS },
    })
    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}
