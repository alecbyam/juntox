'use client'

import { PageHero } from '../../components/PageHero'
import { AnimatedSection } from '../../components/ui/AnimatedSection'
import { Badge } from '../../components/ui/Badge'
import { Button } from '../../components/ui/Button'
import { Accordion } from '../../components/ui/Accordion'
import { AnimatedCounter } from '../../components/ui/AnimatedCounter'

const pillars = [
  {
    title: 'La connaissance congolaise comme infrastructure',
    description:
      'En RDC, les savoirs locaux sont une richesse sous-exploitée. Nous transformons chaque expertise — congolaise ou internationale — en systèmes durables, produits réels et entreprises qui restent. Chaque mission que nous menons devient une brique permanente du développement local.',
  },
  {
    title: 'La RDC comme source de solutions',
    description:
      "La RDC n'a pas besoin de copier les modèles d'ailleurs. Elle a ses propres défis, son propre rythme, ses propres ressources — cobalt, forêts, jeunesse, terres agricoles. Nous concevons des solutions nées ici, adaptées au contexte congolais, et capables de s'exporter ensuite.",
  },
  {
    title: "L'impact avant le profit",
    description:
      "Moderniser une PME de Bunia, digitaliser une administration de l'Ituri, former un ingénieur de Goma, construire une infrastructure en zone reculée — chaque mission JuntoX crée de la valeur réelle, mesurable et durable pour les communautés que nous servons.",
  },
]

const lovePillars = [
  {
    title: "L'amour comme moteur d'excellence",
    description:
      "Nous ne construisons pas JuntoX par calcul financier. Nous le faisons par amour profond pour la RDC — pour Bunia, pour l'Ituri, pour chaque famille que nous servons. Cet amour nous rend intraitables sur la qualité : on ne livre pas du travail médiocre à ceux qu'on aime.",
  },
  {
    title: "L'expérience de terrain, pas les hypothèses",
    description:
      "Nous n'analysons pas la RDC depuis un bureau à l'étranger. Nous vivons ses réalités : l'intermittence du réseau, les défis logistiques, les coupures d'électricité, la profondeur des talents locaux. Cette connaissance incarnée est notre avantage compétitif le plus durable.",
  },
  {
    title: "La passion libère l'impossible",
    description:
      "Quand on fait ce qu'on aime pour les gens qu'on aime, on dépasse les limites du probable. Chaque ligne de code, chaque fondation coulée, chaque rapport livré — nous les faisons avec la conviction que cela changera concrètement quelque chose dans la vie de quelqu'un en RDC.",
  },
]

const values = [
  { title: 'Excellence', description: "Chaque détail compte. Livrer du travail médiocre en RDC n'est pas une option — c'est une trahison de la mission." },
  { title: 'Rigueur', description: "Nos décisions sont fondées sur l'analyse du terrain, pas sur des hypothèses importées d'ailleurs." },
  { title: 'Audace', description: "Croire qu'on peut créer de l'excellence depuis Bunia, Goma ou Kisangani. Et le prouver." },
  { title: 'Durabilité', description: 'Construire pour les générations de Congolais qui viennent, pas pour le prochain rapport trimestriel.' },
  { title: 'Innovation', description: "Résoudre les problèmes congolais par les premiers principes — pas en copiant des modèles inadaptés." },
  { title: 'Intégrité', description: 'La confiance se bâtit sur la cohérence entre ce que nous disons et ce que nous faisons sur le terrain.' },
]

const juntoQuestions = [
  {
    n: '01',
    question: "Quel problème congolais mérite d'être résolu par l'intelligence collective ?",
  },
  {
    n: '02',
    question: "Quelle compétence as-tu développée que tu pourrais partager avec un pair ?",
  },
  {
    n: '03',
    question: "Quel bâtisseur, ingénieur ou entrepreneur mérite d'être soutenu et reconnu ?",
  },
  {
    n: '04',
    question: "Comment JuntoX peut-il servir concrètement son territoire et son peuple aujourd'hui ?",
  },
]

const timeline = [
  { year: '2024', event: "Fondation de JuntoX SARL à Bunia — premières missions de consultance et développement logiciel" },
  { year: '2025', event: "Lancement de la plateforme IA, expansion construction, logistique et commerce international" },
  { year: '2026', event: "Élargissement de l'objet social — 10 pôles d'expertise couvrant technologie, ingénierie, communication et secteurs émergents" },
  { year: '2027+', event: "Échelle continentale, partenariats internationaux, déploiement FinTech, EdTech, Énergie et AgriTech" },
]

const faqs = [
  {
    question: 'JuntoX est-elle un groupe ou une seule entreprise ?',
    answer: "JuntoX est une SARL dont l'objet social couvre 10 pôles d'expertise : technologies, ingénierie, construction, logistique, conseil, formation, communication, investissement et secteurs émergents. Nous opérons comme un groupe intégré depuis une structure unique, ce qui nous permet de proposer des solutions multidisciplinaires sans rupture.",
  },
  {
    question: "JuntoX est-elle une société de conseil, une entreprise tech ou un fonds d'investissement ?",
    answer: "Les trois à la fois — et c'est précisément notre différenciation. Nous combinons conseil stratégique, développement logiciel, ingénierie, construction, communication et capital pour accompagner un projet de l'idée jusqu'à l'industrialisation, sans rupture entre les étapes.",
  },
  {
    question: "Où JuntoX opère-t-elle aujourd'hui ?",
    answer: "Notre siège est à Bunia, en Ituri, RD Congo. Nous intervenons activement en Afrique centrale et de l'Est, avec des clients et partenaires en Europe et en Asie pour le commerce international et l'investissement.",
  },
  {
    question: 'Comment JuntoX se finance-t-elle ?',
    answer: "Par les revenus de nos missions de consultance et de construction, complétés par des investissements stratégiques de partenaires qui partagent notre vision à long terme.",
  },
  {
    question: "Quelle est la structure juridique de l'entreprise ?",
    answer: "JuntoX est une Société à Responsabilité Limitée (SARL) enregistrée en République Démocratique du Congo, conforme aux réglementations locales en vigueur.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="À propos"
        title="Nés en Ituri. Construits pour la RDC. Ouverts au monde."
        description="JuntoX est née à Bunia, au cœur de l'Est congolais, avec une conviction claire : la République Démocratique du Congo a tout ce qu'il faut pour se transformer de l'intérieur. Notre rôle est de fournir les outils, les compétences et les structures pour que cela arrive — projet après projet."
      >
        <Button href="/vision">Découvrir notre vision</Button>
        <Button href="/contact" variant="secondary">Nous contacter</Button>
      </PageHero>

      {/* Stats */}
      <section className="border-y border-white/[0.03] bg-surface/30">
        <div className="container-content grid grid-cols-2 gap-px sm:grid-cols-4">
          {[
            { target: 2024, suffix: '', label: 'Année de fondation' },
            { target: 10, suffix: '', label: "Pôles d'expertise" },
            { target: 50, suffix: '+', label: 'Services proposés' },
            { target: 100, suffix: '+', label: 'Années de vision' },
          ].map((stat) => (
            <div key={stat.label} className="px-6 py-10 text-center">
              <p className="font-serif text-heading-2 font-semibold text-white">
                <AnimatedCounter target={stat.target} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-caption text-neutral-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Nos fondations</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Trois piliers pour une entreprise centenaire
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {pillars.map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.12}>
                <div className="card-base h-full">
                  <div className="mb-4 h-1 w-12 rounded-full bg-primary/60" />
                  <h3 className="font-serif text-heading-3 font-semibold text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-body text-neutral-400">{pillar.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Values */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="accent">Nos valeurs</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Ce qui guide chaque décision
            </h2>
          </AnimatedSection>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.08}>
                <div className="card-base">
                  <h4 className="text-base font-semibold text-white">{value.title}</h4>
                  <p className="mt-2 text-sm text-neutral-500">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Love Can Do */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.05] via-transparent to-transparent" />
        <div className="container-content relative">
          <AnimatedSection>
            <Badge variant="primary">Notre philosophie</Badge>
            <div className="mt-8 flex items-start gap-5">
              <div className="mt-1 h-16 w-1 shrink-0 rounded-full bg-primary" />
              <div>
                <blockquote className="max-w-3xl font-serif text-heading-1 font-semibold leading-tight text-white">
                  &ldquo;Ce que vous aimez, vous le faites mieux.&nbsp;
                  <span className="text-primary">Love Can Do.</span>&rdquo;
                </blockquote>
                <p className="mt-3 text-sm text-neutral-500">— Idriss Aberkane, neuroscientifique & philosophe</p>
              </div>
            </div>
          </AnimatedSection>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {lovePillars.map((p, i) => (
              <AnimatedSection key={p.title} delay={i * 0.12}>
                <div className="card-base h-full border-primary/[0.12]">
                  <div className="mb-4 h-0.5 w-10 rounded-full bg-primary/60" />
                  <h3 className="font-serif text-heading-3 font-semibold text-white">{p.title}</h3>
                  <p className="mt-4 text-body text-neutral-400">{p.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3} className="mt-10">
            <div className="max-w-3xl rounded-xl border border-primary/[0.18] bg-primary/[0.04] p-7 sm:p-9">
              <p className="font-serif text-body-lg leading-relaxed text-neutral-200">
                L&apos;approche <strong className="text-white">Love Can Do</strong> n&apos;est pas un slogan marketing.
                C&apos;est une conviction opérationnelle que nous avons adoptée dès la naissance de JuntoX à Bunia :
                quand on agit par amour — pour sa terre, pour son peuple, pour les générations futures —
                on accepte des défis que la logique pure déconseille. On persévère là où le calcul rendrait.
                Et c&apos;est précisément cette énergie, ancrée dans les réalités du terrain congolais,
                qui nous permet de construire ce que les autres disent impossible depuis l&apos;Ituri.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      {/* Benjamin Franklin & le Junto */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge variant="gold">L'origine du nom</Badge>
            <h2 className="mt-6 max-w-3xl font-serif text-heading-1 font-semibold text-white">
              Benjamin Franklin &amp; le Junto — Philadelphia, 1727
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
              {/* Left: story */}
              <div className="space-y-6 text-body text-neutral-400">
                <p>
                  À 21 ans, Benjamin Franklin fonde à Philadelphia un cercle de réflexion qu'il baptise
                  le <strong className="text-neutral-200">Junto</strong> — du latin <em>juncto</em>, « ensemble ».
                  Douze artisans, imprimeurs et commerçants se réunissent chaque vendredi soir autour d'une
                  règle simple : <strong className="text-neutral-200">partager librement le savoir, s'améliorer
                  mutuellement et servir la communauté.</strong>
                </p>
                <p>
                  Pas de hiérarchie. Pas de secrets. Chaque membre pose des questions, partage une découverte,
                  signale une opportunité ou défend une idée devant le groupe. Le Junto durera quarante ans et
                  donnera naissance à la première bibliothèque publique américaine, au premier corps de pompiers
                  organisé, à une académie — et in fine aux Lumières américaines.
                </p>
                <p>
                  Franklin avait compris avant tout le monde que l'excellence individuelle ne suffit pas :
                  c'est l'intelligence <em>collective</em>, la générosité du partage et l'ancrage
                  dans une communauté réelle qui créent des civilisations durables.
                </p>
                <p>
                  Le <strong className="text-neutral-200">X</strong> de JuntoX porte trois sens simultanés :
                  l'<strong className="text-neutral-200">excellence</strong> comme standard non négociable,
                  l'<strong className="text-neutral-200">expansion</strong> de l'Afrique vers le monde,
                  et l'<strong className="text-neutral-200">inconnu</strong> — tout ce que le continent
                  n'a pas encore révélé au monde et que nous nous engageons à faire émerger.
                </p>
              </div>

              {/* Right: quote + questions */}
              <div className="space-y-6">
                <div className="rounded-xl border border-accent/[0.18] bg-accent/[0.04] p-7">
                  <svg className="mb-4 h-6 w-6 text-accent/60" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <blockquote className="font-serif text-heading-3 font-semibold leading-snug text-white">
                    Un investissement dans la connaissance paie les meilleurs intérêts.
                  </blockquote>
                  <figcaption className="mt-4 text-sm text-neutral-500">
                    — Benjamin Franklin, fondateur du Junto · Philadelphia, 1727
                  </figcaption>
                </div>

                <div className="rounded-xl border border-white/[0.06] bg-surface-elevated/40 p-6">
                  <p className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-neutral-600">
                    Les 4 questions du Junto — version JuntoX
                  </p>
                  <div className="space-y-4">
                    {juntoQuestions.map((q) => (
                      <div key={q.n} className="flex gap-4">
                        <span className="mt-0.5 shrink-0 font-serif text-sm font-semibold text-primary/60">
                          {q.n}
                        </span>
                        <p className="text-sm leading-relaxed text-neutral-400">{q.question}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Philadelphia → Bunia bridge */}
          <AnimatedSection delay={0.2} className="mt-12">
            <div className="flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-0">
              <div className="flex flex-1 flex-col items-center rounded-xl border border-white/[0.06] bg-surface-elevated/30 p-5 text-center sm:items-start sm:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-neutral-600">Origine</span>
                <p className="mt-1 font-serif text-lg font-semibold text-white">Philadelphia</p>
                <p className="text-sm text-neutral-500">1727 · Benjamin Franklin</p>
              </div>
              <div className="flex items-center justify-center px-4">
                <svg className="h-5 w-5 rotate-90 text-neutral-700 sm:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </div>
              <div className="flex flex-1 flex-col items-center rounded-xl border border-primary/[0.18] bg-primary/[0.04] p-5 text-center sm:items-start sm:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-primary/60">Continuation</span>
                <p className="mt-1 font-serif text-lg font-semibold text-white">Bunia, Ituri</p>
                <p className="text-sm text-neutral-500">2024 · JuntoX SARL</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      {/* Timeline */}
      <section className="section-padding">
        <div className="container-content">
          <AnimatedSection>
            <Badge>Notre parcours</Badge>
            <h2 className="mt-6 max-w-2xl font-serif text-heading-1 font-semibold text-white">
              Une trajectoire ambitieuse et mesurée
            </h2>
          </AnimatedSection>

          <div className="mt-14 space-y-0">
            {timeline.map((item, i) => (
              <AnimatedSection key={item.year} delay={i * 0.1}>
                <div className="flex gap-8 border-l border-white/[0.08] py-8 pl-8">
                  <span className="text-heading-2 font-semibold text-primary/80">{item.year}</span>
                  <p className="text-body-lg text-neutral-300 pt-2">{item.event}</p>
                </div>
              </AnimatedSection>
            ))}
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
              Ce que l&apos;on nous demande souvent
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-10 max-w-3xl">
            <Accordion items={faqs} />
          </AnimatedSection>
        </div>
      </section>

      <div className="divider" />

      <section className="section-padding relative overflow-hidden">
        <AnimatedSection className="container-content relative text-center">
          <h2 className="mx-auto max-w-2xl font-serif text-heading-1 font-semibold text-white">
            Prêt à faire partie de l&apos;aventure ?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-body-lg text-neutral-400">
            Investisseurs, partenaires, talents — contactez-nous pour construire ensemble.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/contact" size="lg">Nous contacter</Button>
            <Button href="/carrieres" variant="secondary" size="lg">Rejoindre l&apos;équipe</Button>
          </div>
        </AnimatedSection>
      </section>
    </>
  )
}
