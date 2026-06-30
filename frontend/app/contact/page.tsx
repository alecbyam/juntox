'use client'

import { useState, type FormEvent } from 'react'
import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Accordion } from '../../components/ui/Accordion'
import { postJson } from '../../lib/api'

const contactInfo = [
  { label: 'Email', value: 'contact@juntox.africa' },
  { label: 'Téléphone', value: '+243 999 000 000' },
  { label: 'Adresse', value: 'Kinshasa, RD Congo' },
  { label: 'Horaires', value: 'Lun–Ven, 8h–17h (UTC+1)' },
]

const reasons = [
  { title: 'Proposer un projet', description: 'Vous avez une idée ou un besoin ? Partagez-le et nous évaluerons ensemble la meilleure approche.' },
  { title: 'Investir avec nous', description: 'Vous souhaitez investir dans l\'innovation africaine ? Accédez à notre pipeline de projets.' },
  { title: 'Devenir partenaire', description: 'Entreprise, institution ou organisation — construisons un partenariat stratégique.' },
  { title: 'Rejoindre l\'équipe', description: 'Ingénieurs, consultants, chercheurs — nous recrutons les meilleurs talents.' },
]

const faqs = [
  {
    question: 'Sous combien de temps recevrai-je une réponse ?',
    answer: 'Nous répondons à tous les messages sous 48 heures ouvrables. Pour les demandes urgentes, précisez-le dans votre message et nous priorisons.',
  },
  {
    question: 'Puis-je planifier un appel directement ?',
    answer: 'Oui, indiquez vos disponibilités dans votre message et notre équipe vous proposera un créneau pour un appel ou une visioconférence.',
  },
  {
    question: 'Avez-vous des bureaux que je peux visiter ?',
    answer: 'Notre siège est à Kinshasa. Les visites se font sur rendez-vous — contactez-nous pour organiser votre venue.',
  },
  {
    question: 'Acceptez-vous les candidatures via ce formulaire ?',
    answer: 'Pour les candidatures, nous recommandons de consulter notre page Carrières et d\'indiquer le poste visé dans l\'objet de votre message.',
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      await postJson('/api/contact', form)
      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors de l\'envoi')
    } finally {
      setLoading(false)
    }
  }

  function update(field: string, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Parlons de votre projet"
        description="Nous sommes à l'écoute des clients, partenaires et investisseurs qui veulent construire l'avenir avec JuntoX. Chaque conversation est le début d'une collaboration potentielle."
      />

      <section className="section-padding">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            {/* Form */}
            <AnimatedSection>
              {submitted ? (
                <div className="card-base text-center py-16">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="mt-6 font-serif text-heading-3 font-semibold text-white">
                    Message envoyé
                  </h3>
                  <p className="mt-3 text-body text-neutral-400">
                    Merci pour votre intérêt. Notre équipe vous répondra dans les 48 heures.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <label className="block">
                      <span className="text-caption font-medium text-neutral-500">Nom complet</span>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => update('name', e.target.value)}
                        required
                        className="mt-2 w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                        placeholder="Votre nom"
                      />
                    </label>
                    <label className="block">
                      <span className="text-caption font-medium text-neutral-500">Email</span>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        required
                        className="mt-2 w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                        placeholder="votre@email.com"
                      />
                    </label>
                  </div>
                  <label className="block">
                    <span className="text-caption font-medium text-neutral-500">Sujet</span>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => update('subject', e.target.value)}
                      required
                      className="mt-2 w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20"
                      placeholder="Objet de votre message"
                    />
                  </label>
                  <label className="block">
                    <span className="text-caption font-medium text-neutral-500">Message</span>
                    <textarea
                      value={form.message}
                      onChange={(e) => update('message', e.target.value)}
                      required
                      rows={6}
                      className="mt-2 w-full rounded-xl border border-white/[0.08] bg-surface-elevated/60 px-4 py-3 text-sm text-white outline-none transition placeholder:text-neutral-600 focus:border-primary/40 focus:ring-1 focus:ring-primary/20 resize-none"
                      placeholder="Décrivez votre projet, besoin ou proposition..."
                    />
                  </label>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-primary-light shadow-glow hover:shadow-glow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Envoi en cours...' : 'Envoyer le message'}
                  </button>
                  {error && <p className="text-sm text-red-400">{error}</p>}
                </form>
              )}
            </AnimatedSection>

            {/* Sidebar */}
            <AnimatedSection delay={0.2} direction="right">
              <div className="space-y-8">
                {/* Contact info */}
                <div className="card-base">
                  <Badge>Coordonnées</Badge>
                  <div className="mt-6 space-y-4">
                    {contactInfo.map((info) => (
                      <div key={info.label}>
                        <p className="text-xs font-medium uppercase tracking-[0.12em] text-neutral-600">
                          {info.label}
                        </p>
                        <p className="mt-1 text-sm text-neutral-300">{info.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Reasons */}
                <div className="space-y-3">
                  {reasons.map((reason) => (
                    <div key={reason.title} className="card-base !p-5">
                      <h4 className="text-sm font-semibold text-white">{reason.title}</h4>
                      <p className="mt-1.5 text-sm text-neutral-500">{reason.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection className="max-w-2xl">
            <Badge>Questions fréquentes</Badge>
            <h2 className="mt-6 font-serif text-heading-1 font-semibold text-white">
              Avant de nous écrire
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
