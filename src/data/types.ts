export type RegionId = 'qc-ca' | 'europe' | 'asie' | 'moyen-orient'

export type Region = {
  id: RegionId
  label: string
  shortLabel: string
  flag: string
  note?: string
}

export type Source = {
  id: string
  label: string
  org: string
  url: string
  year?: number
}

export type DimensionId =
  | 'travail'
  | 'communication'
  | 'argent'
  | 'tech'
  | 'famille'
  | 'politique'
  | 'valeurs'

export type Dimension = {
  id: DimensionId
  label: string
  icon: string
  description: string
}

export type RegionalProfile = {
  contexteHistorique: string
  travail: string
  communication: string
  argent: string
  tech: string
  famille: string
  politique: string
  valeurs: string[]
  sources: string[]
}

export type Generation = {
  id: string
  name: string
  alias?: string
  yearRange: [number, number]
  emoji: string
  color: string
  tagline: string
  bigPicture: string
  defining: string[]
  regional: Partial<Record<RegionId, RegionalProfile>>
  sources: string[]
}

export type ClashAxis = {
  id: string
  label: string
  description: string
  examples: { generations: [string, string]; example: string }[]
}
