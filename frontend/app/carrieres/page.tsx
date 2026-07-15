'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'

const values = [
  { title: 'Impact réel', description: 'Votre travail transforme directement des entreprises et des territoires en RDC.' },
  { title: 'Autonomie', description: 'Nous faisons confiance à notre équipe pour prendre des décisions et innover.' },
  { title: 'Croissance', description: 'Formation continue, mentorat et accès à des projets de plus en plus ambitieux.' },
  { title: 'Mission partagée', description: "Une équipe unie par la même conviction : bâtir l'excellence depuis l'intérieur de l'Afrique." },
]

export default function CarrieresPage() {
  return (
    <>
      <PageHero
        eyebrow="Carrières"
        title="Construisez le futur avec nous"
        description="JuntoX cherche des bâtisseurs passionnés qui veulent avoir un impact réel et durable sur la RDC et l'Afrique. Si vous partagez notre conviction — que l'excellence se construit de l'intérieur — votre place est ici."
      >
        <Button href="/contact">Rejoindre notre équipe</Button>
      </PageHero>

      {/* Why join */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Pourquoi nous rejoindre</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Une culture d&apos;excellence et d&apos;impact
            </h2>
            <p className="mt-5 max-w-xl text-body text-neutral-400">
              Chez JuntoX, chaque collaborateur est un bâtisseur. Nous travaillons par amour de la RDC,
              avec la rigueur de ceux qui veulent laisser quelque chose de durable.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div className="card-base h-full text-center">
                  <div className="mx-auto mb-4 h-0.5 w-10 rounded-full bg-primary/60" />
                  <h3 className="text-base font-semibold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm text-neutral-400">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* CTA */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent" />
        <AnimatedSection className="container-content relative text-center">
          <Badge variant="primary">Candidature</Badge>
          <h2 className="mx-auto mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Prêt à faire partie de l&apos;aventure ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Envoyez-nous votre profil et dites-nous comment vous souhaitez contribuer à la mission JuntoX.
            Les meilleurs talents trouvent toujours leur place ici.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Nous contacter</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
