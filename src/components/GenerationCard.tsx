import { Link } from 'react-router-dom'
import type { Generation } from '../data/types'

export function GenerationCard({ g }: { g: Generation }) {
  return (
    <Link
      to={`/generations/${g.id}`}
      className="group card p-5 hover:shadow-md hover:-translate-y-0.5 transition flex flex-col"
    >
      <div className={`h-24 -m-5 mb-4 rounded-t-2xl bg-gradient-to-br ${g.color} flex items-end justify-between p-4`}>
        <span className="text-4xl drop-shadow-sm">{g.emoji}</span>
        <span className="text-xs font-semibold text-ink-800 bg-white/80 rounded-full px-2 py-0.5">
          {g.yearRange[0]}–{g.yearRange[1]}
        </span>
      </div>
      <div className="font-display font-bold text-lg text-ink-900 dark:text-ink-100">{g.name}</div>
      {g.alias && <div className="text-xs text-ink-500 dark:text-ink-400 mb-2">aussi appelés {g.alias}</div>}
      <p className="text-sm text-ink-700 dark:text-ink-300 mt-1">{g.tagline}</p>
      <div className="mt-auto pt-4 text-xs text-brand-600 dark:text-brand-400 font-medium group-hover:underline">
        Découvrir →
      </div>
    </Link>
  )
}
