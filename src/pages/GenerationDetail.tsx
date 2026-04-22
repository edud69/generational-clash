import { Link, useParams } from 'react-router-dom'
import { GENERATIONS } from '../data/generations'
import { DIMENSIONS, REGIONS } from '../data/regions'
import { useRegion } from '../state/RegionContext'
import { SourceList } from '../components/SourceLink'
import type { DimensionId, RegionalProfile } from '../data/types'

export function GenerationDetail() {
  const { id } = useParams<{ id: string }>()
  const { region, setRegion } = useRegion()
  const g = GENERATIONS.find(x => x.id === id)

  if (!g) {
    return (
      <div className="container-page py-16">
        <p>Génération introuvable. <Link to="/generations" className="text-brand-700 dark:text-brand-400">Retour à la liste</Link>.</p>
      </div>
    )
  }

  const profile = g.regional[region]
  const allSources = Array.from(new Set([...(profile?.sources ?? []), ...g.sources]))

  return (
    <div className="container-page py-10">
      <Link to="/generations" className="text-sm text-brand-700 dark:text-brand-400 hover:underline">← Toutes les générations</Link>

      <div className={`mt-4 rounded-3xl p-6 sm:p-10 bg-gradient-to-br ${g.color}`}>
        <div className="flex items-start gap-4">
          <div className="text-6xl">{g.emoji}</div>
          <div>
            <div className="text-sm font-semibold text-ink-800/80">
              {g.yearRange[0]}–{g.yearRange[1]}
              {g.alias && <span> · aussi appelés {g.alias}</span>}
            </div>
            <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-ink-900 mt-1">{g.name}</h1>
            <p className="mt-3 text-lg text-ink-800 max-w-3xl">{g.tagline}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-2 card p-6">
          <h2 className="font-display font-bold text-xl mb-2">Vue d'ensemble</h2>
          <p className="text-ink-700 dark:text-ink-300 leading-relaxed">{g.bigPicture}</p>
          <h3 className="mt-6 font-semibold text-ink-900 dark:text-ink-100">Événements et conditions formatrices</h3>
          <ul className="mt-2 space-y-1 text-ink-700 dark:text-ink-300 list-disc list-inside">
            {g.defining.map(d => <li key={d}>{d}</li>)}
          </ul>
        </div>
        <div className="card p-6">
          <h3 className="font-display font-bold mb-3">Région</h3>
          <div className="flex flex-wrap gap-2">
            {REGIONS.map(r => (
              <button
                key={r.id}
                onClick={() => setRegion(r.id)}
                className={`text-xs px-3 py-1.5 rounded-full border transition ${
                  region === r.id
                    ? 'bg-ink-900 text-white border-ink-900 dark:bg-ink-100 dark:text-ink-900 dark:border-ink-100'
                    : 'bg-white text-ink-700 border-ink-200 hover:border-ink-400 dark:bg-ink-700 dark:text-ink-300 dark:border-ink-600 dark:hover:border-ink-400'
                }`}
              >
                {r.flag} {r.shortLabel}
              </button>
            ))}
          </div>
          {!profile && (
            <p className="mt-4 text-sm text-ink-600 dark:text-ink-400">
              Données détaillées indisponibles pour cette région — sélectionnez-en une autre.
            </p>
          )}
          {profile && (
            <>
              <h4 className="mt-5 font-semibold text-sm text-ink-900 dark:text-ink-100">Valeurs clés</h4>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {profile.valeurs.map(v => (
                  <span key={v} className="chip bg-brand-50 dark:bg-brand-900/30 text-brand-800 dark:text-brand-300 border border-brand-100 dark:border-brand-700">{v}</span>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {profile && (
        <div className="mt-8">
          <div className="card p-6 mb-4">
            <h2 className="font-display font-bold text-xl">Contexte historique</h2>
            <p className="mt-2 text-ink-700 dark:text-ink-300">{profile.contexteHistorique}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {DIMENSIONS.filter(d => d.id !== 'valeurs').map(d => (
              <DimensionCard key={d.id} dimensionId={d.id} icon={d.icon} label={d.label} profile={profile} />
            ))}
          </div>

          <div className="mt-6">
            <SourceList ids={allSources} />
          </div>
        </div>
      )}
    </div>
  )
}

function DimensionCard({
  dimensionId,
  icon,
  label,
  profile,
}: {
  dimensionId: DimensionId
  icon: string
  label: string
  profile: RegionalProfile
}) {
  const text = profile[dimensionId as keyof RegionalProfile] as string
  return (
    <div className="card p-5">
      <div className="flex items-center gap-2">
        <span className="text-2xl">{icon}</span>
        <h3 className="font-display font-bold">{label}</h3>
      </div>
      <p className="mt-2 text-ink-700 dark:text-ink-300 text-sm leading-relaxed">{text}</p>
    </div>
  )
}
