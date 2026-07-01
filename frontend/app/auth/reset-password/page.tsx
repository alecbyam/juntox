'use client'

import { useState, useEffect, useMemo } from 'react'
import Link from 'next/link'
import { Badge } from '../../../components/ui/Badge'
import { GridPattern } from '../../../components/ui/GridPattern'

function getPasswordStrength(password: string) {
  if (!password) return { score: 0, label: '' }
  let score = 0
  if (password.length >= 8) score++
  if (password.length >= 12) score++
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
  if (/\d/.test(password)) score++
  if (/[^A-Za-z0-9]/.test(password)) score++
  if (score <= 1) return { score, label: 'Faible' }
  if (score <= 3) return { score, label: 'Moyen' }
  return { score, label: 'Fort' }
}

export default function ResetPasswordPage() {
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const strength = useMemo(() => getPasswordStrength(password), [password])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const t = params.get('token')
    if (t) setToken(t)
  }, [])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!token || !password) return
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL ?? ''}/api/auth/reset-password`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ token, new_password: password }),
        },
      )
      const data = await res.json()
      if (!res.ok) throw new Error(data.detail ?? 'Erreur')
      setSuccess(true)
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
          <Badge variant="primary">Nouveau mot de passe</Badge>
          <h1 className="mt-6 font-serif text-heading-1 font-semibold text-white">
            Définir un nouveau mot de passe
          </h1>
          <p className="mt-3 text-body text-neutral-400">
            Choisissez un mot de passe sécurisé d&apos;au moins 8 caractères.
          </p>
        </div>

        {success ? (
          <div className="mt-10 rounded-2xl border border-green-500/20 bg-green-500/[0.04] p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500/10">
              <svg className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </div>
            <p className="mt-4 text-sm font-medium text-white">Mot de passe réinitialisé !</p>
            <p className="mt-2 text-sm text-neutral-400">Vous pouvez maintenant vous connecter avec votre nouveau mot de passe.</p>
            <Link
              href="/auth/login"
              className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-light"
            >
              Se connecter
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-10 space-y-5">
            {!token && (
              <label className="block">
                <span className="text-caption font-medium text-neutral-500">Token de réinitialisation</span>
                <input
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  required
                  placeholder="Collez votre token ici"
                  className="mt-2 w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 font-mono text-xs text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                />
              </label>
            )}

            <label className="block">
              <span className="text-caption font-medium text-neutral-500">Nouveau mot de passe</span>
              <div className="relative mt-2">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={8}
                  autoFocus
                  placeholder="Minimum 8 caractères"
                  className="w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 pr-11 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  aria-label={showPassword ? 'Masquer' : 'Afficher'}
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

              {password && (
                <div className="mt-2.5 flex items-center gap-2">
                  <div className="flex flex-1 gap-1">
                    {[0, 1, 2, 3, 4].map((i) => (
                      <span
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          i < strength.score
                            ? strength.label === 'Faible'
                              ? 'bg-red-500'
                              : strength.label === 'Moyen'
                              ? 'bg-amber-500'
                              : 'bg-green-500'
                            : 'bg-white/[0.06]'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-neutral-500">{strength.label}</span>
                </div>
              )}
            </label>

            <button
              type="submit"
              disabled={loading || !token || password.length < 8}
              className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:bg-primary-light disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Réinitialisation...' : 'Définir le nouveau mot de passe'}
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
