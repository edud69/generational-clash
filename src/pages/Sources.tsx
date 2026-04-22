import { SOURCES } from '../data/sources'

export function Sources() {
  const list = Object.values(SOURCES).sort((a, b) => a.org.localeCompare(b.org))
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-display font-extrabold mb-2">Sources</h1>
      <p className="text-ink-700 dark:text-ink-300 max-w-3xl mb-8">
        Toutes les références utilisées dans cette application. Nous privilégions les sources publiques,
        statistiques officielles et études évaluées par des pairs. Les liens pointent directement vers la source.
      </p>
      <div className="card divide-y divide-ink-100 dark:divide-ink-700">
        {list.map(s => (
          <div key={s.id} className="p-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
            <div className="text-sm font-semibold text-ink-900 dark:text-ink-100 w-56 shrink-0">
              {s.org}
              {s.year && <span className="text-ink-500 dark:text-ink-400 font-normal"> · {s.year}</span>}
            </div>
            <div className="flex-1">
              <a href={s.url} target="_blank" rel="noreferrer" className="text-sm text-brand-700 dark:text-brand-400 hover:underline">
                {s.label}
              </a>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-ink-500 dark:text-ink-400 max-w-3xl">
        Une source manque ou semble inappropriée ? Ouvrez une <a className="underline" href="https://github.com/edud69/generational-clash/issues" target="_blank" rel="noreferrer">issue GitHub</a>.
      </p>
    </div>
  )
}
