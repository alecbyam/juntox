import { PageHero } from '../../components/PageHero'
import { fetchPublishedPosts } from '../../lib/blog-api'
import { BlogPageClient } from './BlogPageClient'

// Revalide toutes les 5 min : un article publié via le CMS admin apparaît
// sans attendre un nouveau déploiement (voir lib/blog-api.ts).
export const revalidate = 300

export default async function BlogPage() {
  const posts = await fetchPublishedPosts()
  const [featured, ...rest] = posts

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Idées, analyses et perspectives"
        description="Notre réflexion sur la technologie, l'innovation, l'investissement et l'avenir de l'Afrique. Des articles pour comprendre notre vision et les tendances qui façonnent le monde."
      />
      <BlogPageClient featured={featured ?? null} rest={rest} />
    </>
  )
}
