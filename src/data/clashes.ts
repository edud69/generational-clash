export type ClashTopic = {
  id: string
  title: string
  icon: string
  summary: string
  generations: string[]
  positions: { generationId: string; stance: string }[]
  bridges: string[]
  sources: string[]
}

export const CLASHES: ClashTopic[] = [
  {
    id: 'logement',
    title: 'Logement : « Achète une maison ! » vs « Avec quel argent ? »',
    icon: '🏠',
    summary:
      'Au Québec, le prix médian d’une maison unifamiliale a doublé entre 2010 et 2024 alors que le revenu médian a augmenté d’environ 30 %. Les Boomers ont acheté à des ratios prix/revenu de 3-4× ; les Y et Z font face à des ratios de 8-12× dans les grandes villes.',
    generations: ['boomers', 'x', 'y', 'z'],
    positions: [
      { generationId: 'boomers', stance: '« Nous, on a fait des sacrifices, on n’est pas allés au resto pour acheter notre première maison. »' },
      { generationId: 'x', stance: '« On a acheté de justesse avant l’explosion. On comprend les deux côtés. »' },
      { generationId: 'y', stance: '« Le ratio prix/revenu est complètement différent. Le calcul ne tient plus. »' },
      { generationId: 'z', stance: '« On envisage la location à vie ou la cohabitation. La propriété n’est plus un objectif réaliste. »' },
    ],
    bridges: [
      'Comparer en ratio prix/revenu plutôt qu’en dollars absolus.',
      'Reconnaître que le contexte (taux d’intérêt, inflation, salaires d’entrée) a structurellement changé.',
      'Discuter de transmission patrimoniale anticipée plutôt que d’héritage à 70 ans.',
    ],
    sources: ['statcan_milleniaux', 'isq_pyramide'],
  },
  {
    id: 'travail',
    title: 'Travail : « Sois loyal » vs « Donne-moi du sens »',
    icon: '💼',
    summary:
      'Pour la génération silencieuse et les Boomers, la loyauté à l’employeur était un contrat moral. Pour les Y et Z, c’est l’employeur qui doit gagner leur engagement chaque jour. 76 % des Y et Z disent que les valeurs d’une entreprise pèsent dans leur décision d’y rester (Deloitte 2024).',
    generations: ['boomers', 'x', 'y', 'z'],
    positions: [
      { generationId: 'boomers', stance: '« Vous avez perdu le sens de l’effort et de la loyauté. »' },
      { generationId: 'x', stance: '« On gère les deux camps en réunion. Épuisant. »' },
      { generationId: 'y', stance: '« On a vu nos parents licenciés malgré 25 ans d’ancienneté. La loyauté ne va plus dans les deux sens. »' },
      { generationId: 'z', stance: '« Si l’entreprise ne respecte pas mes limites, je pars (et je le dis sur TikTok). »' },
    ],
    bridges: [
      'Définir explicitement les attentes mutuelles plutôt que présumer.',
      'Reconnaître que le contrat social employeur-employé a changé pour de vraies raisons (mondialisation, fin des régimes à prestations déterminées).',
      'Proposer du mentorat inversé : Z apprennent à X/Boomers les outils numériques, Boomers transmettent leur expérience institutionnelle.',
    ],
    sources: ['deloitte_genz_2024', 'oecd_youth'],
  },
  {
    id: 'communication',
    title: 'Communication : appel téléphonique vs message vocal de 4 minutes',
    icon: '💬',
    summary:
      'Les Boomers et X préfèrent souvent l’appel ou le courriel structuré. Les Y et Z préfèrent le texto, les emojis, les messages vocaux asynchrones. Un appel non annoncé est perçu comme une intrusion par la moitié des Z.',
    generations: ['boomers', 'x', 'y', 'z'],
    positions: [
      { generationId: 'boomers', stance: '« Pourquoi ne réponds-tu pas au téléphone ? C’est plus simple. »' },
      { generationId: 'x', stance: '« Je préfère un courriel clair et un appel quand c’est nécessaire. »' },
      { generationId: 'y', stance: '« Texte-moi d’abord pour qu’on planifie l’appel. »' },
      { generationId: 'z', stance: '« Envoie-moi un vocal, je l’écoute en 1,5×. Et un emoji 👍 n’est pas “je suis d’accord”, c’est passif-agressif. »' },
    ],
    bridges: [
      'Demander explicitement le canal préféré de la personne.',
      'Au travail : convenir d’un canal par type d’information (urgent / décisions / archives).',
      'En famille : accepter les multiples canaux plutôt que d’imposer le sien.',
    ],
    sources: ['pew_genz_tech_2022', 'cefrio_numerique'],
  },
  {
    id: 'tech',
    title: 'Technologie : « Apprends à te débrouiller » vs « Aide-moi à imprimer »',
    icon: '🖥️',
    summary:
      'Les Boomers et la génération silencieuse demandent souvent de l’aide pour des tâches numériques que les Y/Z trouvent triviales. À l’inverse, les Y/Z peuvent ignorer comment fonctionne un fax, une signature notariée, ou un dépôt bancaire en personne. C’est asymétrique mais réciproque.',
    generations: ['silencieuse', 'boomers', 'x', 'y', 'z', 'alpha'],
    positions: [
      { generationId: 'silencieuse', stance: '« Je n’ai jamais appris ces choses-là, je n’ai pas eu ton enfance. »' },
      { generationId: 'boomers', stance: '« On apprend, mais c’est exigeant — chaque mise à jour change tout. »' },
      { generationId: 'y', stance: '« C’est dans Paramètres > Confidentialité… non, l’autre bouton. »' },
      { generationId: 'z', stance: '« Je peux te montrer en 30 secondes si tu me prêtes ton téléphone. »' },
    ],
    bridges: [
      'Patience numérique : montrer plutôt que faire à la place.',
      'Reconnaître la fatigue cognitive des changements d’interface.',
      'Échange de compétences : Z apprennent à X/Boomers l’IA, Boomers leur apprennent la gestion bancaire ou les démarches administratives.',
    ],
    sources: ['cefrio_numerique', 'pew_genz_tech_2022'],
  },
  {
    id: 'climat',
    title: 'Climat : urgence existentielle vs problème parmi d’autres',
    icon: '🌍',
    summary:
      'Pour les Z et Y, le climat est l’enjeu central — Greta Thunberg avait 16 ans aux marches de 2019. Les Boomers et la silencieuse, en moyenne, le placent moins haut dans leurs priorités. Cet écart est documenté dans toutes les enquêtes (Deloitte, Pew, World Values Survey).',
    generations: ['boomers', 'x', 'y', 'z'],
    positions: [
      { generationId: 'boomers', stance: '« On a aussi connu l’écologie (années 70). Mais l’économie passe d’abord. »' },
      { generationId: 'x', stance: '« On essaie de réduire — voiture électrique, recyclage — mais sans changer toute notre vie. »' },
      { generationId: 'y', stance: '« On veut des décisions structurelles, pas du greenwashing. »' },
      { generationId: 'z', stance: '« C’est notre vie qui est en jeu. L’éco-anxiété est documentée. »' },
    ],
    bridges: [
      'Cesser de blâmer une génération pour les choix d’une autre — l’infrastructure carbone a été construite collectivement.',
      'Reconnaître que les Boomers ont aussi des compétences (mobilisation politique, négociation) à offrir au mouvement climatique.',
      'Faire de la transition un projet intergénérationnel concret (rénovation, mobilité partagée).',
    ],
    sources: ['deloitte_genz_2024', 'wvs', 'edelman_trust'],
  },
  {
    id: 'identite',
    title: 'Identité : « C’était plus simple » vs « C’est plus juste »',
    icon: '🌈',
    summary:
      'Les Z (et Alpha) sont la première génération où une part significative s’identifie hors du binaire de genre, ou questionne son orientation. Pour les générations plus âgées, ces vocabulaires nouveaux peuvent dérouter. Les enquêtes (Pew, Statistique Canada) montrent une augmentation réelle, pas seulement un effet d’étiquette.',
    generations: ['silencieuse', 'boomers', 'x', 'y', 'z'],
    positions: [
      { generationId: 'silencieuse', stance: '« On ne parlait pas de ces choses-là. »' },
      { generationId: 'boomers', stance: '« Tant que ça ne fait pas de mal à personne — mais pourquoi tant de catégories ? »' },
      { generationId: 'x', stance: '« On comprend, on essaie de suivre le vocabulaire. »' },
      { generationId: 'y', stance: '« Notre génération a normalisé ces conversations. »' },
      { generationId: 'z', stance: '« Le respect des pronoms est une question de base. »' },
    ],
    bridges: [
      'Distinguer désaccord politique et respect interpersonnel : on peut ne pas comprendre tout en respectant.',
      'Demander plutôt qu’assumer.',
      'Reconnaître que le vocabulaire évolue et que personne ne maîtrise tout.',
    ],
    sources: ['pew_genz_tech_2022', 'twenge_igen', 'wvs'],
  },
]
