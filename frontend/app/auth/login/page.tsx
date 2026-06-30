'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Badge } from '../../../components/ui/Badge'
import { GridPattern } from '../../../components/ui/GridPattern'
import { postJson } from '../../../lib/api'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      const data = await postJson<{ access_token: string }>('/api/auth/login', { email, password })
      window.localStorage.setItem('juntox_token', data.access_token)
      setMessage('Connexion réussie.')
      window.location.href = '/dashboard/admin'
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Impossible de se connecter')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center">
      <GridPattern className="opacity-20 mask-fade-b" />

      <div className="relative w-full max-w-md px-6 py-16">
        <div className="text-center">
          <Badge variant="primary">Connexion</Badge>
          <h1 className="mt-6 font-serif text-heading-1 font-semibold text-white">
            Entrez dans l&apos;écosystème
          </h1>
          <p className="mt-3 text-body text-neutral-400">
            Accédez à votre espace et à l&apos;assistant JuntoX AI.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <label className="block">
            <span className="text-caption font-medium text-neutral-500">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-2 w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
              placeholder="votre@email.com"
            />
          </label>
          <label className="block">
            <span className="text-caption font-medium text-neutral-500">Mot de passe</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
              placeholder="Votre mot de passe"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-light shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>

          {message && (
            <p className={`text-sm ${message.includes('réussie') ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </p>
          )}
        </form>

        <p className="mt-8 text-center text-sm text-neutral-500">
          Pas encore de compte ?{' '}
          <Link href="/auth/register" className="text-primary transition hover:text-primary-light">
            Créer un compte
          </Link>
        </p>
      </div>
    </div>
  )
}
