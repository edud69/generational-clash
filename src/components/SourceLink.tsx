import { SOURCES } from '../data/sources'

export function SourceLink({ id }: { id: string }) {
  const s = SOURCES[id]
  if (!s) return <span className="text-xs text-ink-400">[source manquante: {id}]</span>
  return (
    <a
      href={s.url}
      target="_blank"
      rel="noreferrer"
      className="text-xs text-brand-700 dark:text-brand-400 hover:underline inline-flex items-center gap-1"
      title={`${s.org}${s.year ? ' — ' + s.year : ''}`}
    >
      <span>{s.org}</span>
      {s.year && <span className="text-ink-400">{s.year}</span>}
    </a>
  )
}

export function SourceList({ ids }: { ids: string[] }) {
  if (!ids.length) return null
  return (
    <div className="flex flex-wrap gap-x-3 gap-y-1 mt-3">
      <span className="text-xs uppercase tracking-wide text-ink-400 font-semibold">Sources :</span>
      {ids.map(id => <SourceLink key={id} id={id} />)}
    </div>
  )
}
