import { REGIONS } from '../data/regions'
import { useRegion } from '../state/RegionContext'

export function RegionNote() {
  const { region } = useRegion()
  const r = REGIONS.find(x => x.id === region)!
  return (
    <div className="card p-3 text-xs text-ink-600 flex items-center gap-2 mb-6">
      <span className="text-base">{r.flag}</span>
      <span>
        Vous consultez la version <strong className="text-ink-900">{r.label}</strong>.
        {r.note && <span className="text-ink-500"> {r.note}</span>}
        {' '}Changez de région dans la barre du haut.
      </span>
    </div>
  )
}
