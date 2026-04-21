import { GENERATIONS } from '../data/generations'
import { GenerationCard } from '../components/GenerationCard'
import { RegionNote } from '../components/RegionNote'

export function Generations() {
  return (
    <div className="container-page py-10">
      <h1 className="text-3xl font-display font-extrabold mb-2">Les six générations</h1>
      <p className="text-ink-700 max-w-3xl mb-6">
        De la génération silencieuse aux Alpha — un siècle de transformations sociales, technologiques et économiques.
        Cliquez sur une carte pour voir le profil régional détaillé.
      </p>
      <RegionNote />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {GENERATIONS.map(g => (
          <GenerationCard key={g.id} g={g} />
        ))}
      </div>
    </div>
  )
}
