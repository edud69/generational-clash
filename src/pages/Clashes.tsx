import { CLASHES } from '../data/clashes'
import { GENERATIONS } from '../data/generations'
import { SourceList } from '../components/SourceLink'

export function Clashes() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-display font-extrabold mb-2">Points de friction</h1>
      <p className="text-ink-700 dark:text-ink-300 max-w-3xl mb-8">
        Les sujets qui crispent les relations intergénérationnelles. Pour chacun :
        ce que disent les données, les positions typiques de chaque génération, et des ponts possibles.
      </p>

      <div className="space-y-6">
        {CLASHES.map(c => (
          <article key={c.id} className="card p-6">
            <div className="flex items-start gap-4">
              <div className="text-4xl">{c.icon}</div>
              <div className="flex-1">
                <h2 className="font-display font-bold text-xl text-ink-900 dark:text-ink-100">{c.title}</h2>
                <p className="mt-2 text-ink-700 dark:text-ink-300">{c.summary}</p>
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-xs uppercase tracking-wide text-ink-500 dark:text-ink-400 font-semibold mb-2">Positions typiques</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {c.positions.map(p => {
                  const g = GENERATIONS.find(x => x.id === p.generationId)
                  if (!g) return null
                  return (
                    <div key={p.generationId} className="rounded-xl border border-ink-100 dark:border-ink-700 p-4 bg-ink-50/40 dark:bg-ink-700/30">
                      <div className="flex items-center gap-2 text-sm font-semibold text-ink-900 dark:text-ink-100">
                        <span className="text-lg">{g.emoji}</span>
                        <span>{g.name}</span>
                      </div>
                      <p className="mt-1.5 text-sm text-ink-700 dark:text-ink-300 italic">{p.stance}</p>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="mt-5">
              <h3 className="text-xs uppercase tracking-wide text-ink-500 dark:text-ink-400 font-semibold mb-2">Ponts possibles</h3>
              <ul className="space-y-1.5">
                {c.bridges.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink-800 dark:text-ink-200">
                    <span className="text-brand-600 dark:text-brand-400">→</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <SourceList ids={c.sources} />
          </article>
        ))}
      </div>
    </div>
  )
}
