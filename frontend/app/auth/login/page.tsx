'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Badge } from '../../../components/ui/Badge'
import { GridPattern } from '../../../components/ui/GridPattern'
import { postJson } from '../../../lib/api'
import { useToast } from '../../../components/ui/Toast'
import { setToken, dashboardPathForRole } from '../../../lib/auth'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const { showToast } = useToast()

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const data = await postJson<{ access_token: string; role: string }>('/api/auth/login', { email, password })
      setToken(data.access_token)
      showToast('Connexion réussie. Redirection...', 'success')
      window.location.href = dashboardPathForRole(data.role)
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Impossible de se connecter'
      setError(msg)
      showToast(msg, 'error')
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
            <div className="relative mt-2">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 pr-11 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                placeholder="Votre mot de passe"
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                className="absolute right-1 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-lg text-neutral-500 transition hover:text-white"
              >
                {showPassword ? (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
          </label>

          <div className="flex items-center justify-end">
            <Link
              href="/auth/forgot-password"
              className="text-xs text-neutral-500 transition hover:text-primary-light"
            >
              Mot de passe oublié ?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-light shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Connexion...' : 'Se connecter'}
          </button>

          {error && <p className="text-sm text-red-400">{error}</p>}
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
