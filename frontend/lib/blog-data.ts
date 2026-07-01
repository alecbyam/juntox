export interface BlogArticle {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  dateISO: string
  readTime: string
  featured: boolean
  author: { name: string; role: string }
  tags: string[]
  sections: { heading?: string; paragraphs: string[] }[]
}

export const CATEGORIES = [
  'Tous',
  'Vision',
  'Intelligence Artificielle',
  'Philosophie',
  'Logistique',
  'Technologie',
  'Investissements',
]

export const ARTICLES: BlogArticle[] = [
  /* ── 1 ── FEATURED ───────────────────────────────────────── */
  {
    slug: 'afrique-hub-technologique',
    title: "Pourquoi l'Afrique sera le prochain hub technologique mondial",
    excerpt:
      "Une analyse des facteurs démographiques, économiques et technologiques qui positionnent l'Afrique comme le prochain centre d'innovation mondiale, et les secteurs à plus fort potentiel pour la décennie à venir.",
    category: 'Vision',
    date: '15 juin 2026',
    dateISO: '2026-06-15',
    readTime: '8 min',
    featured: true,
    author: { name: 'Équipe JuntoX', role: 'Analyse stratégique' },
    tags: ['Afrique', 'technologie', 'innovation', 'démographie', 'investissement'],
    sections: [
      {
        paragraphs: [
          "L'Afrique regorge de clichés. On parle de ses ressources naturelles, de ses conflits, de son « potentiel ». Rarement de son avenir technologique. C'est une erreur d'analyse profonde. Les signaux sont là, convergents et puissants : le continent africain est en train de devenir le prochain grand terrain d'innovation mondiale.",
          "Chez JuntoX, nous ne croyons pas à cette thèse par optimisme naïf. Nous y croyons parce que les données le montrent, parce que nous le vivons depuis Bunia, en Ituri, et parce que comprendre cette dynamique change radicalement les décisions d'investissement et de construction que nous prenons chaque jour.",
        ],
      },
      {
        heading: '1,4 milliard de personnes, 60 % de moins de 25 ans',
        paragraphs: [
          "La démographie est la variable la moins comprise et la plus déterminante. Avec 1,4 milliard d'habitants aujourd'hui et une projection de 2,5 milliards d'ici 2050, l'Afrique va accueillir la plus grande population active de la planète. Ce qui change tout, c'est l'âge : 60 % de la population a moins de 25 ans. Cette jeunesse n'est pas freinée par les habitudes technologiques des générations précédentes — elle apprend directement sur mobile, adopte les nouveaux outils sans friction, et innove dans des environnements contraints qui exigent la créativité par nécessité.",
          "La Chine a compris cette dynamique dans les années 90. L'Inde dans les années 2000. L'Afrique, dans les années 2020, présente la même courbe d'accélération — mais avec une différence structurelle majeure : ses marchés sont fragmentés et profonds, ce qui crée des niches locales que les géants globaux ne peuvent pas facilement dominer.",
        ],
      },
      {
        heading: "Le saut technologique : l'avantage du retard",
        paragraphs: [
          "Beaucoup de pays africains n'ont jamais construit d'infrastructure téléphonique fixe à grande échelle. Ce qui semblait être un retard est devenu un avantage : le continent a directement adopté le mobile. Résultat, l'Afrique subsaharienne affiche des taux d'adoption du mobile money supérieurs à ceux de l'Europe de l'Ouest. M-Pesa au Kenya, Orange Money en Afrique de l'Ouest, et leurs équivalents locaux ont transformé des millions de personnes en utilisateurs de services financiers en quelques années — sans passer par la case banque traditionnelle.",
          "Le même phénomène se reproduit avec l'IA, le cloud et les données. Des pays qui n'ont pas encore construit leurs systèmes informatiques classiques peuvent directement adopter les architectures cloud-native. Ce n'est pas un retard — c'est une opportunité de construire sans le poids de la dette technique.",
        ],
      },
      {
        heading: 'Les capitaux suivent la thèse',
        paragraphs: [
          "L'investissement en capital-risque sur le continent africain a été multiplié par dix en cinq ans. Des fonds comme Partech Africa, TLcom Capital, Novastar Ventures et des dizaines d'autres ont compris que les rendements de demain se trouvent ici. En 2025, les startups africaines ont levé plus de 4 milliards de dollars — un chiffre qui ne reflète pas encore tout le potentiel, mais qui valide la thèse.",
          "Lagos, Nairobi, Le Cap, Cairo et Accra sont devenus des écosystèmes entrepreneuriaux reconnus. Mais la prochaine vague ne viendra pas seulement de ces grandes métropoles. Elle émergera de villes comme Bunia, Mbuji-Mayi, Kisangani — des centres régionaux avec leurs propres problèmes à résoudre et leurs propres entrepreneurs pour les résoudre.",
        ],
      },
      {
        heading: 'Les obstacles restent réels',
        paragraphs: [
          "Reconnaître le potentiel africain ne signifie pas ignorer les défis. L'accès à l'électricité reste insuffisant dans les zones rurales. La fracture numérique entre villes et campagnes est encore profonde. Les systèmes réglementaires sont souvent inadaptés aux entreprises technologiques. Et la fuite des cerveaux — ces ingénieurs, médecins et entrepreneurs qui partent vers l'Europe ou l'Amérique du Nord — prive le continent de certains de ses talents les plus précieux.",
          "Ces obstacles ne sont pas insurmontables. Mais ils requièrent des solutions pensées depuis l'intérieur, par des acteurs qui comprennent les réalités locales — et non des solutions importées qui ignorent les contraintes du terrain.",
        ],
      },
      {
        heading: 'Notre pari',
        paragraphs: [
          "C'est précisément pour cela que JuntoX existe. Pas pour observer cette transformation depuis l'extérieur — pour en être un acteur à part entière, depuis Bunia, en Ituri. Notre pari est simple : les problèmes les plus profonds de la RDC ne manquent pas de solutions. Ils manquent de bâtisseurs qui y croient, qui y restent, et qui construisent avec rigueur et ambition.",
          "L'Afrique ne sera pas le prochain hub technologique mondial parce que les conditions seront parfaites. Elle le sera parce que des milliers d'entrepreneurs africains choisiront de construire ici, maintenant, avec ce qu'ils ont — et refuseront d'attendre que les conditions s'améliorent.",
        ],
      },
    ],
  },

  /* ── 2 ── IA ──────────────────────────────────────────────── */
  {
    slug: 'ia-entreprises-africaines',
    title: "L'IA au service des entreprises africaines : état des lieux et perspectives",
    excerpt:
      "Comment l'intelligence artificielle transforme déjà les entreprises du continent et les opportunités concrètes à saisir dans les prochaines années — agriculture, finance, santé et au-delà.",
    category: 'Intelligence Artificielle',
    date: '8 juin 2026',
    dateISO: '2026-06-08',
    readTime: '6 min',
    featured: false,
    author: { name: 'Équipe JuntoX', role: 'Technologies & IA' },
    tags: ['intelligence artificielle', 'Afrique', 'agriculture', 'fintech', 'santé'],
    sections: [
      {
        paragraphs: [
          "L'intelligence artificielle n'est plus un luxe réservé aux grandes corporations occidentales. En 2026, elle remodèle déjà des secteurs entiers sur le continent africain — avec des résultats souvent plus disruptifs qu'ailleurs, précisément parce que les contraintes y sont plus fortes et les gaps de marché plus profonds.",
          "Là où les pays développés doivent remplacer des systèmes existants, l'Afrique a l'avantage de construire directement sur les nouvelles architectures. C'est une position rare — et une opportunité que JuntoX entend saisir pleinement.",
        ],
      },
      {
        heading: 'Agriculture : anticiper les récoltes',
        paragraphs: [
          "En Afrique subsaharienne, l'agriculture emploie plus de 60 % de la population active mais reste largement non numérisée. L'IA change cela à grande vitesse. Des algorithmes de vision par ordinateur et de données satellitaires permettent de prédire les rendements, détecter les maladies des cultures et optimiser la distribution — réduisant les pertes post-récolte de 30 à 40 % dans les projets pilotes.",
          "Dans la RDC, le potentiel agricole est immense : le pays possède 80 millions d'hectares de terres arables, dont moins de 10 % sont cultivés. L'intégration de l'IA dans les pratiques agricoles congolaises n'est pas une question de si — c'est une question de quand et comment.",
        ],
      },
      {
        heading: "Finance : l'inclusion par l'IA",
        paragraphs: [
          "L'IA permet de créer des modèles de crédit alternatifs. Au lieu d'exiger un historique bancaire traditionnel — que la majorité des Africains n'ont pas — des systèmes analysent des milliers de micro-comportements digitaux : historique d'appels, patterns d'utilisation du mobile money, géolocalisation. Ces données non conventionnelles permettent d'évaluer la solvabilité avec une précision remarquable.",
          "C'est l'inclusion financière par l'intelligence — sans besoin d'une carte de crédit, d'un relevé bancaire ou d'une garantie immobilière. Pour la RDC, où 70 % de la population n'a pas accès aux services bancaires formels, c'est une révolution structurelle.",
        ],
      },
      {
        heading: 'Santé : des diagnostics plus accessibles',
        paragraphs: [
          "Le déficit médical en Afrique subsaharienne est criant : 2,3 médecins pour 10 000 habitants en moyenne, contre 30+ en Europe. L'IA ne remplace pas les médecins — elle multiplie leur capacité d'action. Des algorithmes de diagnostic assisté permettent à un agent de santé communautaire en zone rurale d'analyser une radiographie pulmonaire ou un frottis sanguin avec la précision d'un spécialiste.",
          "Des outils de détection de maladies par image ou par son montrent que l'IA peut opérer dans des environnements à faibles ressources — là précisément où l'impact est le plus fort.",
        ],
      },
      {
        heading: 'Ce que nous construisons chez JuntoX',
        paragraphs: [
          "Notre département Technologies & IA développe des solutions adaptées aux réalités locales : plateformes de gestion d'entreprise avec IA intégrée, outils d'analyse de données pour les institutions et PME congolaises, et un assistant IA multilingue capable de fonctionner en français et en langues locales.",
          "Notre approche : commencer par comprendre le problème réel, puis choisir la technologie la plus adaptée — pas l'inverse. L'IA n'est pas une fin en soi. Elle est un outil au service d'une mission concrète : moderniser et autonomiser les organisations qui construisent la RDC.",
        ],
      },
    ],
  },

  /* ── 3 ── PHILOSOPHIE ────────────────────────────────────── */
  {
    slug: 'first-principles-juntox',
    title: 'First Principles Thinking : comment nous concevons JuntoX',
    excerpt:
      "Au lieu de copier les modèles existants, nous repartons des fondamentaux pour construire une entreprise véritablement différente. Retour sur la méthode qui guide chacune de nos décisions.",
    category: 'Philosophie',
    date: '1er juin 2026',
    dateISO: '2026-06-01',
    readTime: '5 min',
    featured: false,
    author: { name: 'Équipe JuntoX', role: 'Stratégie & Philosophie' },
    tags: ['philosophie', 'stratégie', 'innovation', 'first principles', 'méthode'],
    sections: [
      {
        paragraphs: [
          "Il existe deux façons de raisonner. La première est par analogie : on regarde ce que font les autres, on adapte, on copie avec quelques modifications. C'est rapide, rassurant, et souvent insuffisant. La seconde est par principes fondamentaux : on décompose un problème jusqu'à ses composants irréductibles, puis on reconstruit en partant de là. C'est plus difficile — mais c'est la source de la véritable innovation.",
        ],
      },
      {
        heading: "Qu'est-ce que raisonner par principes fondamentaux ?",
        paragraphs: [
          "Le concept est attribué à Aristote, mais c'est Elon Musk qui l'a popularisé dans le monde entrepreneurial. Confronté au coût prohibitif des fusées, il ne s'est pas demandé « comment faire moins cher que les constructeurs existants ? » — il s'est demandé « qu'est-ce qu'une fusée, fondamentalement ? » La réponse : de l'acier, de l'aluminium, du carbone, du cuivre, du titane et quelques composants électroniques. En achetant ces matériaux directement et en les assemblant autrement, il a réduit le coût de fabrication d'une fusée de 97 %.",
          "Ce n'est pas de la magie. C'est du raisonnement rigoureux, appliqué sans les contraintes mentales de « c'est comme ça que ça se fait ».",
        ],
      },
      {
        heading: 'Appliqué à JuntoX : reprendre depuis zéro',
        paragraphs: [
          "Quand nous avons conçu JuntoX, nous aurions pu regarder ce que font les grandes entreprises congolaises et copier leur modèle. Nous avons fait l'inverse : nous avons d'abord cherché à comprendre les problèmes réels du pays — sans préjugé, sans modèle préétabli.",
          "Ce que nous avons trouvé : la RDC n'a pas besoin d'une énième entreprise de conseil ou d'un nouveau développeur web. Elle a besoin d'un système intégré qui couvre les besoins en technologie, ingénierie, formation et investissement — parce que ces dimensions sont interdépendantes dans les réalités du terrain. Un entrepreneur à Bunia ne cherche pas un logiciel seul. Il a besoin d'un logiciel, d'une formation pour l'utiliser, d'un accompagnement pour le financer, et d'une infrastructure pour livrer ses produits.",
        ],
      },
      {
        heading: 'Ce que ça change concrètement',
        paragraphs: [
          "Raisonner par principes fondamentaux change nos critères de décision. Quand nous choisissons une technologie, nous ne demandons pas « quelle est la technologie la plus populaire ? » mais « quelle est la technologie la mieux adaptée à ce contexte précis, avec ces contraintes précises ? » Quand nous structurons un service, nous ne demandons pas « comment le font nos concurrents ? » mais « quel est le vrai problème à résoudre ? »",
          "Cela nous évite la pire des erreurs entrepreneuriales : optimiser la mauvaise chose.",
        ],
      },
      {
        heading: 'Une méthode exigeante mais libératrice',
        paragraphs: [
          "Le raisonnement par principes fondamentaux est plus exigeant intellectuellement. Il demande de résister à l'envie rassurante de copier ce qui existe. Mais il est libérateur : une fois qu'on comprend vraiment pourquoi quelque chose fonctionne, on peut le reproduire, l'adapter, l'améliorer — et parfois, le dépasser complètement.",
          "Chez JuntoX, c'est notre mode de pensée par défaut. Pour chaque projet, pour chaque service, pour chaque décision stratégique. L'objectif n'est pas d'être différent pour être différent — c'est de trouver la meilleure réponse possible à chaque question, même si cette réponse ressemble à ce que font les autres.",
        ],
      },
    ],
  },

  /* ── 4 ── LOGISTIQUE ─────────────────────────────────────── */
  {
    slug: 'defi-logistique-rdc',
    title: 'Le défi logistique en RDC : problèmes et solutions',
    excerpt:
      "Analyse des bottlenecks logistiques en République Démocratique du Congo — routes, fleuve Congo, chaîne du froid — et les solutions technologiques concrètes que nous développons.",
    category: 'Logistique',
    date: '25 mai 2026',
    dateISO: '2026-05-25',
    readTime: '7 min',
    featured: false,
    author: { name: 'Équipe JuntoX', role: 'Logistique & Transport' },
    tags: ['logistique', 'RDC', 'infrastructure', 'transport', 'supply chain'],
    sections: [
      {
        paragraphs: [
          "La République Démocratique du Congo est deux fois et demie la superficie de l'Europe de l'Ouest. Avec 2,3 millions de kilomètres carrés, elle est le deuxième plus grand pays d'Afrique — et l'un des plus mal desservis logistiquement au monde. Ce n'est pas une fatalité. C'est un problème d'ingénierie avec des solutions concrètes.",
        ],
      },
      {
        heading: "L'infrastructure routière : le défi premier",
        paragraphs: [
          "Sur les 160 000 km de routes censés exister en RDC, moins de 3 % sont bitumées. La grande majorité sont des pistes en latérite qui deviennent impraticables en saison des pluies. Résultat : le coût de transport d'une tonne de marchandise entre Lubumbashi et Kinshasa est souvent supérieur à celui entre Rotterdam et Shanghai — sur une distance pourtant six fois inférieure.",
          "Ce n'est pas seulement une question d'argent. C'est une question de priorités et de méthode. Les investissements routiers en RDC ont souvent été mal ciblés, mal entretenus, ou captés avant d'atteindre le bitume. Corriger cela nécessite autant d'innovation dans la gouvernance que dans l'ingénierie.",
        ],
      },
      {
        heading: 'Le fleuve Congo : autoroute naturelle sous-utilisée',
        paragraphs: [
          "Le Congo est le deuxième plus long fleuve d'Afrique et le plus puissant du monde en volume d'eau. Son réseau navigable représente plus de 16 000 km de voies d'eau potentielles — une autoroute naturelle qui traverse le pays de part en part. Pourtant, le transport fluvial représente moins de 15 % du fret intérieur congolais.",
          "Les raisons : vétusté des embarcations, insécurité sur certains tronçons, manque de terminaux de chargement, absence de systèmes de tracking des marchandises. Résoudre ces problèmes un par un, avec des solutions digitales et des équipements adaptés, peut transformer le fleuve Congo en épine dorsale logistique du pays.",
        ],
      },
      {
        heading: 'La chaîne du froid et la perte alimentaire',
        paragraphs: [
          "Plus de 40 % des denrées alimentaires produites en RDC sont perdues avant d'atteindre le consommateur final — principalement à cause de l'absence de chaîne du froid. Ce chiffre représente des milliards de dollars de valeur détruite chaque année, et des millions de personnes privées de nourriture pourtant produite sur le sol national.",
          "Construire une chaîne du froid moderne nécessite trois ingrédients : de l'énergie fiable (solaire dans ce contexte), des équipements réfrigérés adaptés aux conditions africaines, et un système d'information pour tracker les produits en temps réel. Aucune de ces solutions n'est inaccessible — elles nécessitent simplement d'être assemblées intelligemment.",
        ],
      },
      {
        heading: 'Nos solutions technologiques',
        paragraphs: [
          "JuntoX Logistique développe une plateforme de gestion de fret intégrant tracking GPS, optimisation d'itinéraires, gestion des entrepôts et coordination multimodale (route, fleuve, air). Notre approche s'appuie sur des partenariats avec des transporteurs locaux existants — nous ne réinventons pas une infrastructure : nous la rationalisons et la digitalisons.",
          "Notre objectif à moyen terme : réduire de 30 % le coût de transport des entreprises qui utilisent notre plateforme, en optimisant la consolidation de fret et en éliminant les intermédiaires inutiles.",
        ],
      },
    ],
  },

  /* ── 5 ── TECHNOLOGIE ────────────────────────────────────── */
  {
    slug: 'architecture-logicielle-100-ans',
    title: "Construire pour 100 ans : notre approche de l'architecture logicielle",
    excerpt:
      "Les principes techniques et philosophiques qui guident nos choix architecturaux — API-first, modularité, scalabilité — pour une plateforme conçue pour durer des décennies.",
    category: 'Technologie',
    date: '18 mai 2026',
    dateISO: '2026-05-18',
    readTime: '10 min',
    featured: false,
    author: { name: 'Équipe JuntoX', role: 'Architecture & Ingénierie' },
    tags: ['architecture', 'Next.js', 'FastAPI', 'Supabase', 'API', 'scalabilité'],
    sections: [
      {
        paragraphs: [
          "« Construire pour 100 ans » n'est pas une figure de style. C'est une contrainte de conception réelle. Quand vous décidez que votre plateforme doit servir des entreprises, des institutions et des millions d'utilisateurs pendant des décennies — et pas seulement jusqu'au prochain pivot startup — vous prenez des décisions architecturales radicalement différentes.",
        ],
      },
      {
        heading: "L'API-first : tout commence par un contrat",
        paragraphs: [
          "Notre première décision structurante a été de construire une API avant toute interface. Pas d'abord un site web, pas d'abord une application mobile — d'abord une API claire, versionnée et documentée qui définit ce que le système fait. L'interface est ensuite un consommateur de cette API, au même titre que toute application tierce.",
          "Cette approche garantit la séparabilité : le frontend peut changer, l'application mobile peut évoluer, de nouveaux clients peuvent s'y connecter — sans jamais toucher à la logique métier centrale. C'est la différence entre une maison construite pour durer et un château de cartes.",
        ],
      },
      {
        heading: "L'architecture modulaire : des briques indépendantes",
        paragraphs: [
          "JuntoX est architecturé en modules fonctionnels indépendants : CRM, ERP, gestion de projets, assistant IA, facturation, espace multi-rôles. Chaque module a ses propres tables en base de données, ses propres routes API, ses propres tests. Ils communiquent entre eux via des interfaces définies — pas par des appels directs qui créent des dépendances invisibles.",
          "Cela signifie qu'on peut déployer une mise à jour du module CRM sans toucher à l'ERP. Ou ajouter un nouveau module sans réécrire l'existant. Dans dix ans, quand les technologies auront évolué, on pourra remplacer un module sans refaire la plateforme entière.",
        ],
      },
      {
        heading: 'Nos choix technologiques et pourquoi',
        paragraphs: [
          "Next.js 15 pour le frontend : le meilleur écosystème React du marché, avec SSR, SSG et App Router pour des performances Lighthouse 95+. TypeScript pour la rigueur : pas de surprise à runtime, refactoring sans risque. FastAPI pour le backend : performance native en Python, validation automatique via Pydantic, documentation OpenAPI générée automatiquement.",
          "Supabase pour la base de données : PostgreSQL en production, avec auth, storage et realtime inclus. Docker pour la reproductibilité : le code tourne de la même façon sur tous les environnements. Ce ne sont pas des choix à la mode — ce sont des choix raisonnés sur la longévité, la maintenabilité et la performance.",
        ],
      },
      {
        heading: 'La scalabilité dès le premier jour',
        paragraphs: [
          "On entend souvent « on optimisera quand on aura les utilisateurs ». C'est une erreur. L'architecture ne se refait pas facilement après coup. Depuis le premier commit, notre infrastructure est conçue pour supporter plusieurs milliers d'utilisateurs simultanés : connection pooling, rate limiting, mise en cache des ressources statiques, optimisation des requêtes.",
          "Cela ne coûte pas plus cher à construire. Cela coûte moins cher à maintenir — et évite la catastrophe de la ré-architecture sous pression, quand le service est déjà en production et les utilisateurs attendent.",
        ],
      },
      {
        heading: "L'obsession de la maintenabilité",
        paragraphs: [
          "Le code qu'on écrit aujourd'hui sera lu et modifié par des personnes qui ne sont pas encore dans l'équipe. Peut-être dans cinq ans, peut-être dans vingt. Cette contrainte change radicalement la façon dont on code.",
          "Chez JuntoX, nos standards : pas de magic numbers, conventions de nommage strictes, tests unitaires sur les fonctions critiques, et une documentation à jour du système. Ce n'est pas glamour — mais c'est ce qui fait qu'une plateforme reste maintenable après avoir changé d'équipe trois fois.",
        ],
      },
    ],
  },

  /* ── 6 ── INVESTISSEMENTS ────────────────────────────────── */
  {
    slug: 'impact-investing-afrique',
    title: "L'impact investing en Afrique : au-delà du rendement financier",
    excerpt:
      "Comment concilier performance financière et impact social mesurable dans le contexte africain — et pourquoi l'Afrique est le terrain idéal pour cette classe d'actifs.",
    category: 'Investissements',
    date: '10 mai 2026',
    dateISO: '2026-05-10',
    readTime: '6 min',
    featured: false,
    author: { name: 'Équipe JuntoX', role: 'Investissement & Incubation' },
    tags: ['investissement', 'impact investing', 'ESG', 'Afrique', 'financement'],
    sections: [
      {
        paragraphs: [
          "Il y a une idée reçue persistante dans le monde de l'investissement : que le rendement financier et l'impact social sont fondamentalement en tension. Que pour faire du bien, il faut accepter de moins gagner. Cette idée est fausse — et l'Afrique est en train de le prouver.",
        ],
      },
      {
        heading: "Qu'est-ce que l'impact investing ?",
        paragraphs: [
          "L'investissement à impact désigne le déploiement de capital avec l'intention explicite de générer un impact social ou environnemental positif mesurable, en plus du rendement financier. Ce n'est pas de la philanthropie — l'investisseur attend un retour. Ce n'est pas non plus l'ESG classique — le critère d'impact n'est pas une contrainte négative (éviter le tabac), mais un objectif positif (créer X emplois, réduire Y émissions de CO₂).",
          "La différence est fondamentale : l'impact investing cherche des entreprises dont le modèle économique est structurellement lié à la création de valeur sociale. Quand l'entreprise réussit commercialement, l'impact positif s'amplifie — pas l'inverse.",
        ],
      },
      {
        heading: "L'Afrique : terrain idéal pour l'investissement à impact",
        paragraphs: [
          "Les marchés africains présentent une caractéristique rare : les gaps de marché coïncident avec les gaps sociaux. Là où les besoins humains sont les plus urgents — santé, éducation, énergie, eau, logistique — les marchés sont les plus inexploités. Pour un investisseur d'impact, c'est une convergence idéale : les entreprises qui résolvent les vrais problèmes ont un marché adressable immense et peu de concurrence locale.",
          "Un exemple : le marché de l'énergie solaire hors-réseau en Afrique subsaharienne. Environ 600 millions de personnes n'ont pas accès à l'électricité. Chaque foyer qui adopte un kit solaire représente un client payant, une famille sortie de la précarité énergétique, et une réduction des émissions de CO₂. Impact + rendement + croissance du marché : l'alignement est parfait.",
        ],
      },
      {
        heading: 'Les métriques qui comptent',
        paragraphs: [
          "Mesurer l'impact, c'est le défi central de cette classe d'actifs. Il existe plusieurs cadres : les ODD, les Principes Opérationnels pour la Gestion de l'Impact de l'IFC, ou les métriques IRIS+ du GIIN. Mais au-delà des frameworks, ce qui compte c'est la logique causale : pourquoi est-ce que cette entreprise, en faisant du business, produit cet impact précis ?",
          "Chez JuntoX, nos métriques prioritaires : emplois directs et indirects créés, PME formées et accompagnées, projets d'infrastructure livrés, entreprises locales numérisées. Ces chiffres sont mesurables, vérifiables, et directement liés à nos activités.",
        ],
      },
      {
        heading: 'Notre approche chez JuntoX',
        paragraphs: [
          "Notre département Investissement & Incubation déploie du capital patient — c'est-à-dire du capital qui accepte un horizon de rendement de 5 à 10 ans, en échange d'un impact démontrable et d'un potentiel de croissance substantiel. Nous ciblons les entreprises à fort potentiel dans les secteurs sous-investis de la RDC : agritech, santé numérique, énergie décentralisée, logistique.",
          "Notre valeur ajoutée n'est pas seulement financière. Nous apportons un réseau, des expertises transversales (technique, stratégique, opérationnelle), et une compréhension profonde du contexte congolais que peu d'investisseurs internationaux possèdent.",
        ],
      },
    ],
  },

  /* ── 7 ── PHILOSOPHIE ────────────────────────────────────── */
  {
    slug: 'golden-circle-applique',
    title: 'Golden Circle appliqué : pourquoi commencer par le Why change tout',
    excerpt:
      "Retour d'expérience sur l'application du modèle de Simon Sinek à la construction de notre stratégie d'entreprise — et pourquoi le Why doit être opérationnel, pas décoratif.",
    category: 'Philosophie',
    date: '2 mai 2026',
    dateISO: '2026-05-02',
    readTime: '5 min',
    featured: false,
    author: { name: 'Équipe JuntoX', role: 'Stratégie & Culture' },
    tags: ['philosophie', 'stratégie', 'Simon Sinek', 'Golden Circle', 'culture'],
    sections: [
      {
        paragraphs: [
          "Simon Sinek a présenté le Golden Circle pour la première fois en 2009, dans un TED Talk devenu l'un des plus regardés de l'histoire de la plateforme. L'idée est simple : les entreprises qui inspirent commencent par le Pourquoi, pas par le Quoi. Sa mise en pratique, elle, est plus difficile que sa compréhension intellectuelle.",
        ],
      },
      {
        heading: 'Le modèle de Simon Sinek',
        paragraphs: [
          "Le Golden Circle est constitué de trois cercles concentriques. Le cercle externe est le WHAT : ce que l'entreprise fait concrètement. Le cercle du milieu est le HOW : comment elle le fait, ce qui la différencie. Le cercle interne est le WHY : pourquoi elle existe, sa raison d'être profonde, ce en quoi elle croit.",
          "La plupart des entreprises communiquent de l'extérieur vers l'intérieur : « Nous faisons X, de cette façon, donc achetez notre produit. » Les entreprises qui inspirent font l'inverse : « Nous croyons en Y, c'est pourquoi nous agissons ainsi, et ça se traduit concrètement par X. » Apple ne dit pas « Nous fabriquons des ordinateurs » — Apple dit « Nous défions le statu quo. Nous pensons différemment. »",
        ],
      },
      {
        heading: 'Notre Why, notre How, notre What',
        paragraphs: [
          "Pour JuntoX, le Why est clair depuis le premier jour : la RDC possède un potentiel humain, économique et technologique immense qui reste insuffisamment valorisé. Nous croyons que ses défis peuvent être relevés par des solutions intelligentes, adaptées au contexte local et ouvertes aux standards internationaux.",
          "Le How découle directement de ce Why : en réunissant plusieurs expertises dans un même écosystème intégré — technologie, ingénierie, construction, formation, conseil, investissement — parce que les problèmes du terrain ne se résolvent pas en silos. Le What, c'est ce que nous livrons : des projets construits, des entreprises accompagnées, des emplois créés, des institutions numérisées.",
        ],
      },
      {
        heading: "Pourquoi ça change tout dans la pratique",
        paragraphs: [
          "Quand une entreprise a un Why clair, les décisions difficiles deviennent plus simples. Faut-il accepter ce client dont les pratiques ne correspondent pas à nos valeurs ? Non, parce que notre Why l'interdit. Faut-il choisir la solution rapide qui maximise le profit à court terme ou la solution rigoureuse qui maximise l'impact à long terme ? La deuxième, parce que notre Why l'exige.",
          "Un Why fort crée aussi une attraction naturelle pour les talents et les partenaires qui partagent les mêmes valeurs. Les personnes ne rejoignent pas JuntoX uniquement pour un salaire — elles rejoignent parce qu'elles croient à la même vision. Cette cohérence est une force compétitive rare, difficile à imiter.",
        ],
      },
      {
        heading: 'Une boussole, pas un slogan',
        paragraphs: [
          "La plus grande erreur que font les entreprises avec le Golden Circle : le traiter comme un exercice de communication. On construit un beau Why pour la page « À propos » du site, on le met dans les présentations investisseurs, et on continue à décider comme avant. C'est une erreur coûteuse.",
          "Le Why doit être opérationnel. Chaque réunion stratégique, chaque décision de recrutement, chaque choix de service doit pouvoir être ramené à cette question : est-ce que ça sert notre Why ? Si la réponse est non, la décision est probablement mauvaise — peu importe le revenu qu'elle génère à court terme. C'est exigeant. C'est aussi ce qui fait les entreprises durables.",
        ],
      },
    ],
  },
]

export const FEATURED_ARTICLE = ARTICLES.find((a) => a.featured) ?? ARTICLES[0]
