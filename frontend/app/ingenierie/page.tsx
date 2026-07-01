'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'
import { CaseStudy } from '../../components/ui/CaseStudy'

const poles = [
  {
    title: 'Électronique & Prototypage',
    description:
      'Conception de circuits électroniques, cartes PCB et systèmes de contrôle embarqués. Du prototype au produit industriel, nous accompagnons chaque étape du cycle de développement matériel.',
    items: ['Conception PCB', 'Systèmes de contrôle', 'Prototypage rapide', 'Tests & homologation'],
    badge: 'primary',
  },
  {
    title: 'IoT — Internet des Objets',
    description:
      'Déployez des réseaux de capteurs intelligents, des passerelles connectées et des plateformes de gestion des données IoT. Nous transformons vos infrastructures physiques en systèmes intelligents et communicants.',
    items: ['Réseaux de capteurs', 'Gateways & connectivité', 'Plateforme IoT cloud', 'Monitoring temps réel'],
    badge: 'accent',
  },
  {
    title: 'Robotique & Automatisation',
    description:
      'Intégration de systèmes robotiques et de bras automatisés dans les chaînes de production industrielle. Nous combinons mécanique, électronique et logiciel pour créer des solutions d\'automatisation robustes.',
    items: ['Bras robotiques industriels', 'Systèmes de vision artificielle', 'Programmation PLC', 'Maintenance prédictive'],
    badge: 'gold',
  },
  {
    title: 'Systèmes Embarqués',
    description:
      'Développement de firmware et de logiciels embarqués pour des applications à contraintes critiques : médical, industriel, défense civile et télécommunications.',
    items: ['Firmware temps réel (RTOS)', 'Optimisation énergétique', 'Sécurité embarquée', 'Certification IEC/ISO'],
    badge: 'primary',
  },
  {
    title: 'Automatisation Industrielle',
    description:
      'Modernisation complète des lignes de production : intégration SCADA, supervision PLC, optimisation des flux de production et mise en conformité avec les standards industriels internationaux.',
    items: ['Supervision SCADA', 'Intégration MES', 'Optimisation OEE', 'Formation opérateurs'],
    badge: 'accent',
  },
]

const metrics = [
  { target: 15, suffix: '+', label: 'Projets IoT déployés' },
  { target: 3, suffix: '', label: 'Pays d\'intervention' },
  { target: 40, suffix: '%', label: 'Gain productivité moyen' },
  { target: 99, suffix: '%', label: 'Uptime systèmes déployés' },
]

const methodology = [
  { step: 'Audit', description: 'Analyse de vos processus existants, cartographie des besoins techniques et définition des contraintes.' },
  { step: 'Conception', description: 'Architecture solution, sélection des technologies et validation du design avec vos équipes.' },
  { step: 'Développement', description: 'Prototypage, tests en conditions réelles et itérations rapides jusqu\'à la validation.' },
  { step: 'Déploiement', description: 'Installation, intégration dans votre SI, formation des équipes et suivi post-lancement.' },
]

const faqs = [
  {
    question: 'Pouvez-vous intervenir sur des systèmes industriels existants ou uniquement sur des projets neufs ?',
    answer: 'Nous intervenons sur les deux. Nous avons une expertise particulière en rétrofit — la modernisation de systèmes existants (anciens automates, lignes de production datées) pour les connecter à des architectures IoT ou les rendre plus performants sans remplacer l\'infrastructure entière.',
  },
  {
    question: 'Quels secteurs bénéficient le plus de vos solutions d\'ingénierie ?',
    answer: 'Nos solutions sont particulièrement adaptées à l\'industrie manufacturière, l\'agro-industrie, la construction, l\'énergie et les télécommunications. En RDC, nous avons une expérience spécifique sur les environnements à forte contrainte (alimentation électrique intermittente, conditions climatiques extrêmes).',
  },
  {
    question: 'Proposez-vous du support et de la maintenance après déploiement ?',
    answer: 'Oui, tous nos projets incluent une période de garantie et nous proposons des contrats de maintenance préventive et corrective. Nous offrons également une télémaintenance pour les systèmes connectés, réduisant significativement les délais d\'intervention.',
  },
  {
    question: 'Comment gérez-vous la cybersécurité des systèmes IoT ?',
    answer: 'La sécurité est intégrée dès la conception : chiffrement des communications (TLS/mTLS), authentification des dispositifs, segmentation réseau et mises à jour OTA sécurisées. Nous suivons les recommandations ETSI EN 303 645 pour l\'IoT grand public et IEC 62443 pour l\'OT industriel.',
  },
]

const variantMap: Record<string, 'primary' | 'accent' | 'gold'> = {
  primary: 'primary',
  accent: 'accent',
  gold: 'gold',
}

export default function IngenieriePage() {
  return (
    <>
      <PageHero
        eyebrow="Ingénierie & Systèmes"
        title="Des systèmes intelligents qui transforment la production"
        description="JuntoX conçoit et déploie des solutions d'ingénierie avancées — de l'électronique embarquée à l'automatisation industrielle complète — pour moderniser vos infrastructures et maximiser votre efficacité opérationnelle."
        badge="accent"
      >
        <Button href="/contact">Démarrer un projet</Button>
        <Button href="/laboratoire-ia" variant="secondary">Notre Laboratoire IA</Button>
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

      {/* Pôles */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="accent">Nos spécialités</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              5 pôles d&apos;expertise intégrés
            </h2>
            <p className="mt-5 max-w-xl text-body text-neutral-400">
              De la composante électronique à la chaîne de production entière, nous couvrons l&apos;ensemble
              du spectre de l&apos;ingénierie des systèmes.
            </p>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {poles.map((pole, i) => (
              <AnimatedSection key={pole.title} delay={i * 0.08}>
                <div className="card-base h-full">
                  <Badge variant={variantMap[pole.badge]}>{pole.title}</Badge>
                  <p className="mt-4 text-body text-neutral-400">{pole.description}</p>
                  <ul className="mt-5 space-y-1.5">
                    {pole.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-neutral-500">
                        <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
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

      {/* Méthodologie */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="gold">Méthodologie</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              De l&apos;idée au système opérationnel
            </h2>
          </AnimatedSection>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {methodology.map((step, i) => (
              <AnimatedSection key={step.step} delay={i * 0.1}>
                <div className="card-base h-full">
                  <span className="font-serif text-heading-2 font-semibold text-white/[0.06]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="mt-3 text-base font-semibold text-white">{step.step}</h4>
                  <p className="mt-2 text-sm text-neutral-500">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Étude de cas</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Automatisation d&apos;une ligne agro-industrielle
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1} className="mt-10">
            <CaseStudy
              tag="Automatisation industrielle — Ituri"
              title="Passage d'une chaîne manuelle à 40 % de gain de productivité en 6 mois"
              description="Un client de l'agro-industrie en Ituri cherchait à réduire ses pertes post-récolte. JuntoX a déployé une ligne de tri automatisée avec vision artificielle, des capteurs d'humidité IoT et un tableau de bord de supervision en temps réel. Résultat : 40 % de productivité en plus, 30 % de déchets en moins."
              metrics={[
                { value: '6 mois', label: 'Durée du projet' },
                { value: '+40%', label: 'Productivité' },
                { value: '-30%', label: 'Pertes post-récolte' },
              ]}
            />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

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
            Modernisez vos systèmes industriels
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Décrivez votre défi technique et recevez une analyse de faisabilité de notre équipe d&apos;ingénieurs.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">Soumettre un projet</Button>
            <Button href="/portfolio" variant="secondary" size="lg">Voir les réalisations</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
