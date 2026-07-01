'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Badge } from '../../../components/ui/Badge'
import { GridPattern } from '../../../components/ui/GridPattern'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [token, setToken] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL ?? ''}/api/auth/forgot-password`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        },
      )
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail ?? 'Erreur')
      setToken(data.reset_token ?? null)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur réseau')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center">
      <GridPattern className="opacity-20 mask-fade-b" />

      <div className="relative w-full max-w-md px-6 py-16">
        <div className="text-center">
          <Badge variant="primary">Mot de passe oublié</Badge>
          <h1 className="mt-6 font-serif text-heading-1 font-semibold text-white">
            Réinitialiser l&apos;accès
          </h1>
          <p className="mt-3 text-body text-neutral-400">
            Entrez votre adresse email pour obtenir un lien de réinitialisation.
          </p>
        </div>

        {token ? (
          <div className="mt-10 space-y-4">
            <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-5">
              <div className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                </svg>
                <p className="text-sm font-medium text-white">Token de réinitialisation</p>
              </div>
              <code className="mt-3 block break-all rounded-lg border border-white/[0.06] bg-white/[0.03] p-3 font-mono text-xs text-primary-light">
                {token}
              </code>
              <p className="mt-3 text-xs text-neutral-500">
                Ce token est valide 24 heures. Cliquez sur le bouton ci-dessous pour définir votre nouveau mot de passe.
              </p>
            </div>
            <Link
              href={`/auth/reset-password?token=${encodeURIComponent(token)}`}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-light"
            >
              Définir un nouveau mot de passe
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            <label className="block">
              <span className="text-caption font-medium text-neutral-500">Email</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoFocus
                placeholder="votre@email.com"
                className="mt-2 w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
              />
            </label>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Génération...' : 'Obtenir un lien de réinitialisation'}
            </button>

            {error && <p className="text-sm text-red-400">{error}</p>}
          </form>
        )}

        <p className="mt-8 text-center text-sm text-neutral-500">
          <Link href="/auth/login" className="text-primary transition hover:text-primary-light">
            ← Retour à la connexion
          </Link>
        </p>
      </div>
    </div>
  )
}
