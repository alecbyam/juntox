'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Badge } from '../../../../components/ui/Badge'
import { getToken } from '../../../../lib/auth'

type Post = {
  id: number
  title: string
  slug: string
  excerpt: string | null
  content: string | null
  category: string | null
  published: boolean
  created_at: string
  updated_at: string | null
}

type FormState = {
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  published: boolean
}

const EMPTY_FORM: FormState = {
  title: '',
  slug: '',
  excerpt: '',
  content: '',
  category: 'Vision',
  published: false,
}

const CATEGORIES = [
  'Vision',
  'Intelligence Artificielle',
  'Philosophie',
  'Logistique',
  'Technologie',
  'Investissements',
]

const API = process.env.NEXT_PUBLIC_API_URL ?? ''

function authFetch(path: string, init: RequestInit = {}) {
  const token = getToken()
  return fetch(`${API}${path}`, {
    ...init,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...((init.headers as Record<string, string>) ?? {}),
    },
  })
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

export default function BlogAdminPage() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [fetchError, setFetchError] = useState<string | null>(null)
  const [modal, setModal] = useState<'create' | 'edit' | null>(null)
  const [editingPost, setEditingPost] = useState<Post | null>(null)
  const [form, setForm] = useState<FormState>(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState<string | null>(null)

  const fetchPosts = useCallback(async () => {
    setLoading(true)
    setFetchError(null)
    try {
      const res = await authFetch('/api/blog/all')
      if (!res.ok) throw new Error(`Erreur ${res.status}`)
      setPosts(await res.json())
    } catch (e) {
      setFetchError(e instanceof Error ? e.message : 'Erreur réseau')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  function openCreate() {
    setForm(EMPTY_FORM)
    setEditingPost(null)
    setSaveError(null)
    setModal('create')
  }

  function openEdit(post: Post) {
    setForm({
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt ?? '',
      content: post.content ?? '',
      category: post.category ?? 'Vision',
      published: post.published,
    })
    setEditingPost(post)
    setSaveError(null)
    setModal('edit')
  }

  function closeModal() {
    setModal(null)
    setEditingPost(null)
    setSaveError(null)
  }

  async function handleSave() {
    if (!form.title || !form.slug) return
    setSaving(true)
    setSaveError(null)
    try {
      const method = modal === 'create' ? 'POST' : 'PUT'
      const path = modal === 'create' ? '/api/blog' : `/api/blog/${editingPost!.slug}`
      const res = await authFetch(path, {
        method,
        body: JSON.stringify(form),
      })
      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data.detail ?? `Erreur ${res.status}`)
      }
      closeModal()
      await fetchPosts()
    } catch (e) {
      setSaveError(e instanceof Error ? e.message : 'Erreur')
    } finally {
      setSaving(false)
    }
  }

  async function togglePublish(post: Post) {
    try {
      const res = await authFetch(`/api/blog/${post.slug}`, {
        method: 'PUT',
        body: JSON.stringify({ published: !post.published }),
      })
      if (!res.ok) throw new Error()
      setPosts((prev) =>
        prev.map((p) => (p.id === post.id ? { ...p, published: !post.published } : p)),
      )
    } catch {
      alert('Impossible de changer le statut')
    }
  }

  async function handleDelete(post: Post) {
    if (!confirm(`Supprimer définitivement "${post.title}" ?`)) return
    try {
      const res = await authFetch(`/api/blog/${post.slug}`, { method: 'DELETE' })
      if (!res.ok && res.status !== 204) throw new Error()
      setPosts((prev) => prev.filter((p) => p.id !== post.id))
    } catch {
      alert('Impossible de supprimer cet article')
    }
  }

  const published = posts.filter((p) => p.published).length
  const drafts = posts.length - published

  return (
    <div className="px-5 py-6 sm:px-8 sm:py-8">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Badge variant="primary">Contenu</Badge>
            <h1 className="mt-3 font-serif text-heading-2 font-semibold text-white sm:text-heading-1">
              Blog CMS
            </h1>
            <p className="mt-1 text-sm text-neutral-500">Gérez les articles publiés sur le blog JuntoX.</p>
          </div>
          <button
            onClick={openCreate}
            className="flex items-center gap-2 self-start rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-light sm:self-auto"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
            Nouvel article
          </button>
        </div>

        {/* Stats */}
        <div className="mt-6 grid grid-cols-3 gap-3">
          {[
            { label: 'Total', value: posts.length, color: 'text-white' },
            { label: 'Publiés', value: published, color: 'text-green-400' },
            { label: 'Brouillons', value: drafts, color: 'text-yellow-400' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/[0.06] bg-surface-elevated/50 p-4 text-center"
            >
              <p className={`text-2xl font-semibold ${stat.color}`}>{stat.value}</p>
              <p className="mt-1 text-xs text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Posts table */}
        <div className="mt-6 overflow-hidden rounded-xl border border-white/[0.06] bg-surface-elevated/50">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/[0.06] border-t-primary" />
            </div>
          ) : fetchError ? (
            <div className="py-16 text-center">
              <p className="text-sm text-red-400">{fetchError}</p>
              <button
                onClick={fetchPosts}
                className="mt-3 text-sm text-primary-light hover:underline"
              >
                Réessayer
              </button>
            </div>
          ) : posts.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-sm text-neutral-500">Aucun article. Créez le premier !</p>
              <button
                onClick={openCreate}
                className="mt-4 text-sm text-primary-light hover:underline"
              >
                Créer un article
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px]">
                <thead>
                  <tr className="border-b border-white/[0.04]">
                    <th className="px-5 py-3 text-left text-[0.65rem] font-medium uppercase tracking-[0.12em] text-neutral-600">
                      Titre
                    </th>
                    <th className="px-3 py-3 text-left text-[0.65rem] font-medium uppercase tracking-[0.12em] text-neutral-600">
                      Catégorie
                    </th>
                    <th className="px-3 py-3 text-left text-[0.65rem] font-medium uppercase tracking-[0.12em] text-neutral-600">
                      Statut
                    </th>
                    <th className="hidden px-3 py-3 text-left text-[0.65rem] font-medium uppercase tracking-[0.12em] text-neutral-600 md:table-cell">
                      Date
                    </th>
                    <th className="px-3 py-3" />
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.03]">
                  {posts.map((post) => (
                    <tr key={post.id} className="group">
                      <td className="px-5 py-4">
                        <p className="line-clamp-1 text-sm font-medium text-white">{post.title}</p>
                        <p className="mt-0.5 font-mono text-[0.65rem] text-neutral-600">{post.slug}</p>
                      </td>
                      <td className="px-3 py-4">
                        <span className="text-xs text-neutral-500">{post.category ?? '—'}</span>
                      </td>
                      <td className="px-3 py-4">
                        <button
                          onClick={() => togglePublish(post)}
                          title="Cliquer pour changer le statut"
                          className={`rounded-full px-2.5 py-1 text-xs font-medium transition hover:opacity-75 ${
                            post.published
                              ? 'bg-green-500/10 text-green-400'
                              : 'bg-yellow-500/10 text-yellow-400'
                          }`}
                        >
                          {post.published ? 'Publié' : 'Brouillon'}
                        </button>
                      </td>
                      <td className="hidden px-3 py-4 md:table-cell">
                        <span className="text-xs text-neutral-600">{formatDate(post.created_at)}</span>
                      </td>
                      <td className="px-3 py-4">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => openEdit(post)}
                            title="Modifier"
                            className="rounded-lg p-2 text-neutral-500 transition hover:bg-white/[0.04] hover:text-white"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931z" />
                            </svg>
                          </button>
                          <button
                            onClick={() => handleDelete(post)}
                            title="Supprimer"
                            className="rounded-lg p-2 text-neutral-500 transition hover:bg-red-500/10 hover:text-red-400"
                          >
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </motion.div>

      {/* Create / Edit modal */}
      <AnimatePresence>
        {modal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={closeModal}
            />
            <motion.div
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="fixed left-1/2 top-[4vh] z-[51] max-h-[92vh] w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 overflow-y-auto"
            >
              <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-surface-elevated p-6 shadow-elevated">
                <div className="flex items-center justify-between">
                  <h2 className="font-serif text-lg font-semibold text-white">
                    {modal === 'create' ? 'Nouvel article' : "Modifier l'article"}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 transition hover:text-white"
                  >
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mt-5 space-y-4">
                  {/* Title */}
                  <div>
                    <label className="text-xs font-medium text-neutral-500">Titre *</label>
                    <input
                      value={form.title}
                      onChange={(e) => {
                        const title = e.target.value
                        setForm((f) => ({
                          ...f,
                          title,
                          slug: modal === 'create' ? slugify(title) : f.slug,
                        }))
                      }}
                      placeholder="Titre de l'article..."
                      className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                    />
                  </div>

                  {/* Slug */}
                  <div>
                    <label className="text-xs font-medium text-neutral-500">Slug *</label>
                    <input
                      value={form.slug}
                      onChange={(e) => setForm((f) => ({ ...f, slug: e.target.value }))}
                      placeholder="mon-article-en-kebab-case"
                      className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-mono text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                    />
                  </div>

                  {/* Category + Status */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-neutral-500">Catégorie</label>
                      <select
                        value={form.category}
                        onChange={(e) => setForm((f) => ({ ...f, category: e.target.value }))}
                        className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-surface-elevated px-4 py-3 text-sm text-white outline-none focus:border-primary/40"
                      >
                        {CATEGORIES.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-xs font-medium text-neutral-500">Statut</label>
                      <select
                        value={form.published ? 'published' : 'draft'}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, published: e.target.value === 'published' }))
                        }
                        className="mt-1.5 w-full rounded-xl border border-white/[0.08] bg-surface-elevated px-4 py-3 text-sm text-white outline-none focus:border-primary/40"
                      >
                        <option value="draft">Brouillon</option>
                        <option value="published">Publié</option>
                      </select>
                    </div>
                  </div>

                  {/* Excerpt */}
                  <div>
                    <label className="text-xs font-medium text-neutral-500">Résumé</label>
                    <textarea
                      value={form.excerpt}
                      onChange={(e) => setForm((f) => ({ ...f, excerpt: e.target.value }))}
                      rows={2}
                      placeholder="Un bref résumé de l'article..."
                      className="mt-1.5 w-full resize-none rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <label className="text-xs font-medium text-neutral-500">Contenu (Markdown)</label>
                    <textarea
                      value={form.content}
                      onChange={(e) => setForm((f) => ({ ...f, content: e.target.value }))}
                      rows={12}
                      placeholder={"# Titre\n\nContenu de l'article en Markdown..."}
                      className="mt-1.5 w-full resize-y rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 font-mono text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                    />
                  </div>

                  {saveError && (
                    <p className="rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-2.5 text-sm text-red-400">
                      {saveError}
                    </p>
                  )}
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={closeModal}
                    className="rounded-full border border-white/[0.08] px-5 py-2.5 text-sm text-neutral-400 transition hover:text-white"
                  >
                    Annuler
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={saving || !form.title || !form.slug}
                    className="flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-light disabled:opacity-50"
                  >
                    {saving && (
                      <span className="h-3.5 w-3.5 animate-spin rounded-full border border-white/30 border-t-white" />
                    )}
                    {modal === 'create' ? 'Créer' : 'Sauvegarder'}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
