'use client'

import { useState, type FormEvent } from 'react'
import Link from 'next/link'
import { Badge } from '../../../components/ui/Badge'
import { GridPattern } from '../../../components/ui/GridPattern'
import { postJson } from '../../../lib/api'

export default function RegisterPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    try {
      await postJson('/api/auth/register', { full_name: fullName, email, password, role: 'client' })
      setMessage('Compte créé avec succès. Vous pouvez vous connecter.')
    } catch (err) {
      setMessage(err instanceof Error ? err.message : 'Erreur lors de la création du compte')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative flex min-h-[80vh] items-center justify-center">
      <GridPattern className="opacity-20 mask-fade-b" />

      <div className="relative w-full max-w-md px-6 py-16">
        <div className="text-center">
          <Badge variant="primary">Inscription</Badge>
          <h1 className="mt-6 font-serif text-heading-1 font-semibold text-white">
            Rejoignez JuntoX
          </h1>
          <p className="mt-3 text-body text-neutral-400">
            Créez votre compte et accédez à la plateforme.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 space-y-5">
          <label className="block">
            <span className="text-caption font-medium text-neutral-500">Nom complet</span>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="mt-2 w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
              placeholder="Votre nom complet"
            />
          </label>
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
              minLength={8}
              className="mt-2 w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
              placeholder="Minimum 8 caractères"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-light shadow-glow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Création...' : 'Créer mon compte'}
          </button>

          {message && (
            <p className={`text-sm ${message.includes('succès') ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </p>
          )}
        </form>

        <p className="mt-8 text-center text-sm text-neutral-500">
          Déjà un compte ?{' '}
          <Link href="/auth/login" className="text-primary transition hover:text-primary-light">
            Se connecter
          </Link>
        </p>
      </div>
    </div>
  )
}
