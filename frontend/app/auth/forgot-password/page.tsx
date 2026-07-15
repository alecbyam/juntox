'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Badge } from '../../../components/ui/Badge'
import { GridPattern } from '../../../components/ui/GridPattern'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
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
      setSent(true)
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

        {sent ? (
          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/[0.04] p-6 text-center">
            <svg className="mx-auto h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            <p className="mt-4 text-sm font-medium text-white">Email envoyé</p>
            <p className="mt-2 text-sm text-neutral-400">
              Si cet email est enregistré, vous recevrez un lien de réinitialisation sous peu.
            </p>
            <Link href="/auth/login" className="mt-6 inline-block text-sm text-primary hover:text-primary-light transition">
              ← Retour à la connexion
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
