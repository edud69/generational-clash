import type { Region, Dimension } from './types'

export const REGIONS: Region[] = [
  {
    id: 'qc-ca',
    label: 'Québec / Canada',
    shortLabel: 'QC/CA',
    flag: '🍁',
    note: 'Région de référence — données les plus détaillées.',
  },
  {
    id: 'europe',
    label: 'Europe (occidentale)',
    shortLabel: 'Europe',
    flag: '🇪🇺',
    note: 'France, Allemagne, Royaume-Uni, pays nordiques.',
  },
  {
    id: 'asie',
    label: 'Asie (Est et Sud-Est)',
    shortLabel: 'Asie',
    flag: '🌏',
    note: 'Chine, Japon, Corée du Sud, Inde — très grandes variations internes.',
  },
  {
    id: 'moyen-orient',
    label: 'Moyen-Orient et Afrique du Nord',
    shortLabel: 'MENA',
    flag: '🕌',
    note: 'Arabie saoudite, Émirats, Égypte, Maroc, Iran, Turquie.',
  },
]

export const DIMENSIONS: Dimension[] = [
  {
    id: 'valeurs',
    label: 'Valeurs',
    icon: '✨',
    description: 'Ce qui compte le plus, ce qui guide les décisions.',
  },
  {
    id: 'travail',
    label: 'Travail',
    icon: '💼',
    description: 'Rapport au travail, à la carrière, à la hiérarchie.',
  },
  {
    id: 'communication',
    label: 'Communication',
    icon: '💬',
    description: 'Manières de communiquer, canaux préférés, codes sociaux.',
  },
  {
    id: 'argent',
    label: 'Argent',
    icon: '💰',
    description: 'Rapport à l’argent, à la consommation, à la propriété.',
  },
  {
    id: 'tech',
    label: 'Technologie',
    icon: '🖥️',
    description: 'Adoption des technologies, niveau d’aisance numérique.',
  },
  {
    id: 'famille',
    label: 'Famille',
    icon: '🏡',
    description: 'Modèle familial, parentalité, place des aînés.',
  },
  {
    id: 'politique',
    label: 'Politique & société',
    icon: '🗳️',
    description: 'Engagement civique, vision du collectif, rapport aux institutions.',
  },
]
