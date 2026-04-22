import { useMemo, useState } from 'react'
import { GENERATIONS } from '../data/generations'
import { DIMENSIONS, REGIONS } from '../data/regions'
import { useRegion } from '../state/RegionContext'
import { SourceList } from '../components/SourceLink'
import { RegionNote } from '../components/RegionNote'
import type { DimensionId, Generation, RegionalProfile } from '../data/types'

export function Compare() {
  const { region } = useRegion()
  const [aId, setAId] = useState<string>('boomers')
  const [bId, setBId] = useState<string>('z')

  const a = GENERATIONS.find(g => g.id === aId)!
  const b = GENERATIONS.find(g => g.id === bId)!
  const pa = a.regional[region]
  const pb = b.regional[region]

  const allSources = useMemo(
    () => Array.from(new Set([...(pa?.sources ?? []), ...(pb?.sources ?? []), ...a.sources, ...b.sources])),
    [pa, pb, a, b],
  )

  const yearGap = Math.abs(((a.yearRange[0] + a.yearRange[1]) / 2) - ((b.yearRange[0] + b.yearRange[1]) / 2))

  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-display font-extrabold mb-2">Comparer deux générations</h1>
      <p className="text-ink-700 dark:text-ink-300 max-w-3xl mb-6">
        Choisissez deux générations pour les voir côte à côte sur les sept dimensions clés.
        Le contexte régional s'applique aux deux.
      </p>
      <RegionNote />

      <div className="grid md:grid-cols-2 gap-3 mb-6">
        <Picker label="Génération A" value={aId} onChange={setAId} exclude={bId} accent="brand" />
        <Picker label="Génération B" value={bId} onChange={setBId} exclude={aId} accent="rose" />
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        <GenerationHeader g={a} accent="from-brand-100 to-brand-50 dark:from-brand-900/30 dark:to-brand-900/10" />
        <GenerationHeader g={b} accent="from-rose-100 to-rose-50 dark:from-rose-900/30 dark:to-rose-900/10" />
      </div>

      {(!pa || !pb) ? (
        <div className="card p-6 text-ink-700 dark:text-ink-300">
          Données indisponibles pour la région {REGIONS.find(r => r.id === region)?.label} sur l'une des deux générations.
          Essayez une autre région.
        </div>
      ) : (
        <>
          <div className="card p-5 mb-6">
            <div className="text-xs uppercase tracking-wide text-ink-500 dark:text-ink-400 font-semibold mb-1">Écart générationnel</div>
            <div className="text-ink-900 dark:text-ink-100">
              Environ <strong>{Math.round(yearGap)} ans</strong> séparent le centre des deux générations.
              {yearGap > 40 && ' C'est probablement deux fois la distance entre un parent et son enfant.'}
            </div>
          </div>

          <div className="space-y-3">
            <ContextRow a={a} b={b} pa={pa} pb={pb} />
            {DIMENSIONS.map(d => (
              <CompareRow key={d.id} dimension={d} a={a} b={b} pa={pa} pb={pb} />
            ))}
          </div>

          <div className="mt-8">
            <SourceList ids={allSources} />
          </div>
        </>
      )}
    </div>
  )
}

function Picker({
  label,
  value,
  onChange,
  exclude,
  accent,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  exclude: string
  accent: 'brand' | 'rose'
}) {
  return (
    <label className="card p-4 block">
      <span className={`text-xs uppercase tracking-wide font-semibold ${accent === 'brand' ? 'text-brand-700 dark:text-brand-400' : 'text-rose-700 dark:text-rose-400'}`}>
        {label}
      </span>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="mt-2 w-full rounded-lg border border-ink-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-ink-700 dark:bg-ink-700 dark:text-ink-200"
      >
        {GENERATIONS.map(g => (
          <option key={g.id} value={g.id} disabled={g.id === exclude}>
            {g.emoji} {g.name} ({g.yearRange[0]}–{g.yearRange[1]})
          </option>
        ))}
      </select>
    </label>
  )
}

function GenerationHeader({ g, accent }: { g: Generation; accent: string }) {
  return (
    <div className={`rounded-2xl p-5 bg-gradient-to-br ${accent} border border-ink-100 dark:border-ink-700`}>
      <div className="flex items-center gap-3">
        <div className="text-4xl">{g.emoji}</div>
        <div>
          <div className="text-xs text-ink-600 dark:text-ink-400">{g.yearRange[0]}–{g.yearRange[1]}</div>
          <div className="font-display font-bold text-lg">{g.name}</div>
        </div>
      </div>
      <p className="mt-2 text-sm text-ink-700 dark:text-ink-300">{g.tagline}</p>
    </div>
  )
}

function ContextRow({
  a, b, pa, pb,
}: { a: Generation; b: Generation; pa: RegionalProfile; pb: RegionalProfile }) {
  return (
    <div className="card overflow-hidden">
      <div className="px-5 py-3 bg-ink-100 dark:bg-ink-700 flex items-center gap-2">
        <span className="text-xl">📜</span>
        <span className="font-semibold">Contexte historique</span>
      </div>
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ink-100 dark:divide-ink-700">
        <Cell label={a.name}>{pa.contexteHistorique}</Cell>
        <Cell label={b.name}>{pb.contexteHistorique}</Cell>
      </div>
    </div>
  )
}

function CompareRow({
  dimension, a, b, pa, pb,
}: {
  dimension: { id: DimensionId; label: string; icon: string; description: string }
  a: Generation
  b: Generation
  pa: RegionalProfile
  pb: RegionalProfile
}) {
  const renderValue = (p: RegionalProfile) => {
    if (dimension.id === 'valeurs') {
      return (
        <div className="flex flex-wrap gap-1.5">
          {p.valeurs.map(v => (
            <span key={v} className="chip bg-ink-100 dark:bg-ink-700 text-ink-800 dark:text-ink-200">{v}</span>
          ))}
        </div>
      )
    }
    return p[dimension.id as keyof RegionalProfile] as string
  }
  return (
    <div className="card overflow-hidden">
      <div className="px-5 py-3 bg-ink-100 dark:bg-ink-700 flex items-center gap-2">
        <span className="text-xl">{dimension.icon}</span>
        <span className="font-semibold">{dimension.label}</span>
        <span className="text-xs text-ink-500 dark:text-ink-400 ml-2 hidden sm:inline">{dimension.description}</span>
      </div>
      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-ink-100 dark:divide-ink-700">
        <Cell label={a.name}>{renderValue(pa)}</Cell>
        <Cell label={b.name}>{renderValue(pb)}</Cell>
      </div>
    </div>
  )
}

function Cell({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="p-5">
      <div className="text-xs uppercase tracking-wide text-ink-500 dark:text-ink-400 font-semibold mb-1">{label}</div>
      <div className="text-sm text-ink-800 dark:text-ink-200 leading-relaxed">{children}</div>
    </div>
  )
}
