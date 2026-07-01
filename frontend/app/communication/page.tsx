'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const services = [
  {
    title: 'Marketing Digital',
    description:
      'Stratégies de croissance basées sur la data : SEO, campagnes payantes, email marketing, réseaux sociaux et automation. Nous construisons des funnels d\'acquisition mesurables et rentables.',
    items: ['SEO & SEM', 'Social media management', 'Email automation', 'Analytics & reporting'],
    variant: 'primary' as const,
  },
  {
    title: 'Branding & Identité',
    description:
      'Création et refonte d\'identités de marque cohérentes et mémorables. Naming, logo, charte graphique, guidelines et application sur tous supports — print et digital.',
    items: ['Naming & positionnement', 'Design de logo', 'Charte graphique complète', 'Brand guidelines'],
    variant: 'gold' as const,
  },
  {
    title: 'Production Audiovisuelle',
    description:
      'Production de contenus vidéo et audio à haute valeur perçue : films institutionnels, spots publicitaires, documentaires d\'entreprise, podcasts et contenus social media.',
    items: ['Films institutionnels', 'Spots publicitaires', 'Motion design & animation', 'Podcasts & interviews'],
    variant: 'accent' as const,
  },
  {
    title: 'Communication Institutionnelle',
    description:
      'Accompagnement des organisations (entreprises, ONG, institutions publiques) dans leur stratégie de communication externe : relations presse, rapports annuels, présentations investisseurs.',
    items: ['Relations presse & médias', 'Rapports annuels', 'Présentations investisseurs', 'Communication de crise'],
    variant: 'primary' as const,
  },
]

const metrics = [
  { target: 3, suffix: 'x', label: 'Croissance organique moyenne' },
  { target: 20, suffix: '+', label: 'Marques accompagnées' },
  { target: 85, suffix: '%', label: 'Taux de satisfaction clients' },
  { target: 6, suffix: '', label: 'Expertises métier' },
]

const process = [
  { title: 'Diagnostic', description: 'Audit de votre communication actuelle, analyse de la concurrence et définition des objectifs mesurables.' },
  { title: 'Stratégie', description: 'Élaboration d\'une stratégie de communication multi-canal alignée sur vos objectifs business.' },
  { title: 'Production', description: 'Création des contenus (texte, visuel, vidéo) par nos équipes créatives et nos partenaires locaux.' },
  { title: 'Déploiement', description: 'Diffusion sur les canaux ciblés, monitoring des performances et optimisation continue.' },
]

const faqs = [
  {
    question: 'Travaillez-vous avec des entreprises de toutes tailles ?',
    answer: 'Oui, de la PME locale à l\'organisation internationale. Nous adaptons nos packages selon le stade de développement et le budget disponible. Certaines de nos solutions digitales (SEO, social media) sont accessibles dès les premières phases de croissance.',
  },
  {
    question: 'Proposez-vous de la production vidéo localement en RDC ?',
    answer: 'Oui, nous disposons d\'une équipe de production basée à Bunia et d\'un réseau de partenaires à Kinshasa, Goma et Lubumbashi. Nous couvrons l\'ensemble du territoire et pouvons déployer des tournages dans des contextes variés — y compris en zones à logistique complexe.',
  },
  {
    question: 'Comment mesurez-vous le ROI de vos campagnes marketing ?',
    answer: 'Nous définissons dès le départ des KPIs précis (trafic, leads, conversions, coût par acquisition) et utilisons des outils de tracking (Analytics, UTM, CRM) pour mesurer chaque action. Des rapports mensuels détaillés sont fournis à tous nos clients.',
  },
  {
    question: 'Peut-on vous confier uniquement une partie de la communication (ex: social media) ?',
    answer: 'Absolument. Nous proposons des services à la carte ou des retainers mensuels selon vos besoins. Vous pouvez démarrer par un seul canal et étendre progressivement.',
  },
]

export default function CommunicationPage() {
  return (
    <>
      <PageHero
        eyebrow="Communication & Marketing"
        title="Faites rayonner votre marque en Afrique et au-delà"
        description="JuntoX accompagne les entreprises et institutions dans leur communication : du branding stratégique à la production audiovisuelle, du marketing digital à la communication institutionnelle. Une approche intégrée, data-driven et culturellement ancrée."
        badge="gold"
      >
        <Button href="/contact">Démarrer une collaboration</Button>
        <Button href="/portfolio" variant="secondary">Voir nos réalisations</Button>
      </PageHero>

      {/* Stats */}
      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="px-6 py-10 text-center">
              <p className="font-serif text-heading-2 font-semibold text-white">
                <AnimatedCounter target={m.target} suffix={m.suffix} />
              </p>
              <p className="mt-2 text-caption text-neutral-500">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="gold">Nos expertises</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              4 pôles pour une communication complète
            </h2>
          </AnimatedSection>
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <div className="card-base h-full">
                  <Badge variant={s.variant}>{s.title}</Badge>
                  <p className="mt-4 text-body text-neutral-400">{s.description}</p>
                  <ul className="mt-5 space-y-1.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-neutral-500">
                        <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Process */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="accent">Notre approche</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Communication intégrée, de la stratégie à l&apos;exécution
            </h2>
          </AnimatedSection>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.1}>
                <div className="card-base h-full">
                  <span className="font-serif text-heading-2 font-semibold text-white/[0.06]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="mt-3 text-base font-semibold text-white">{step.title}</h4>
                  <p className="mt-2 text-sm text-neutral-500">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Pourquoi nous */}
      <section className="section-padding">
        <div className="container-content">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <AnimatedSection>
              <Badge variant="primary">Différenciation</Badge>
              <h2 className="mt-6 font-serif text-heading-1 font-semibold text-white">
                Une communication ancrée dans la réalité africaine
              </h2>
              <p className="mt-5 text-body text-neutral-400">
                Nos équipes combinent expertise internationale et connaissance profonde des marchés africains. Nous créons des communications qui résonnent localement tout en répondant aux standards globaux.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} direction="right">
              <div className="space-y-4">
                {[
                  { label: 'Ancrage local', detail: 'Équipes basées en RDC, réseau continental' },
                  { label: 'Maîtrise digitale', detail: 'Outils analytics, IA générative, automation' },
                  { label: 'Production intégrée', detail: 'Copywriting, design, vidéo, photo en interne' },
                  { label: 'Reporting transparent', detail: 'Tableaux de bord partagés, KPIs mesurables' },
                  { label: 'Plurilinguisme', detail: 'Contenus en français, anglais, langues locales' },
                ].map((item) => (
                  <div key={item.label} className="card-base !p-5 flex gap-4 items-start">
                    <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold" />
                    <div>
                      <p className="text-sm font-semibold text-white">{item.label}</p>
                      <p className="mt-0.5 text-xs text-neutral-500">{item.detail}</p>
                    </div>
                  </div>
                ))}
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
              Ce que nos clients demandent
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding">
        <AnimatedSection className="container-content text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Votre marque mérite mieux
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Parlez-nous de vos objectifs de communication. Nous construisons une stratégie sur mesure.
          </p>
          <div className="mt-8">
            <Button href="/contact" size="lg">Lancer un projet</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
