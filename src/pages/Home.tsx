import { Link } from 'react-router-dom'
import { GENERATIONS } from '../data/generations'
import { GenerationCard } from '../components/GenerationCard'
import { useRegion } from '../state/RegionContext'
import { REGIONS } from '../data/regions'

export function Home() {
  const { region } = useRegion()
  const r = REGIONS.find(x => x.id === region)!

  return (
    <div className="container-page py-10">
      <section className="grid lg:grid-cols-5 gap-8 items-center">
        <div className="lg:col-span-3">
          <div className="chip bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300 mb-4">v0.1 — édition francophone</div>
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold leading-tight text-ink-900 dark:text-ink-50">
            Comprendre les générations,<br />sans les caricaturer.
          </h1>
          <p className="mt-5 text-lg text-ink-700 dark:text-ink-300 max-w-2xl">
            Une application interactive pour explorer ce qui définit chaque génération, comparer
            leurs visions, et comprendre les vraies sources de friction. Données vulgarisées,
            sources publiques, six grandes générations couvertes.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/comparer" className="btn-primary">Comparer deux générations →</Link>
            <Link to="/clashs" className="btn-ghost">Voir les points de friction</Link>
          </div>
          <div className="mt-6 text-sm text-ink-500 dark:text-ink-400">
            Région active : <span className="font-semibold text-ink-700 dark:text-ink-300">{r.flag} {r.label}</span>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="card p-5 bg-gradient-to-br from-brand-50 to-white dark:from-brand-900/20 dark:to-ink-800">
            <div className="font-display font-bold text-ink-900 dark:text-ink-100 mb-2">Pourquoi cet outil ?</div>
            <p className="text-sm text-ink-700 dark:text-ink-300 leading-relaxed">
              On parle souvent des « différences générationnelles » comme d'un fait établi, mais sans données.
              Ce site rassemble des sources reconnues (Pew Research, Statistique Canada, McCrindle, OCDE, Eurostat,
              Arab Youth Survey, World Values Survey…) pour distinguer ce qui est documenté de ce qui relève du cliché.
            </p>
            <p className="text-sm text-ink-700 dark:text-ink-300 mt-3">
              <strong>Mise en garde :</strong> chaque personne est plus que sa génération. Les profils ci-dessous sont
              des moyennes statistiques, pas des prédictions individuelles.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="flex items-end justify-between mb-5">
          <h2 className="text-2xl font-display font-bold">Les six générations</h2>
          <Link to="/generations" className="text-sm text-brand-700 dark:text-brand-400 hover:underline">Tout voir →</Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {GENERATIONS.map(g => (
            <GenerationCard key={g.id} g={g} />
          ))}
        </div>
      </section>

      <section className="mt-14 grid md:grid-cols-3 gap-4">
        <FeatureCard
          to="/generations"
          icon="👥"
          title="Profils détaillés"
          desc="Chaque génération expliquée par dimension : valeurs, travail, communication, argent, technologie, famille, politique."
        />
        <FeatureCard
          to="/comparer"
          icon="↔️"
          title="Comparateur"
          desc="Choisissez deux générations et voyez les similarités et différences en un coup d'œil, dimension par dimension."
        />
        <FeatureCard
          to="/clashs"
          icon="⚡"
          title="Points de friction"
          desc="Les vrais sujets qui crispent : logement, travail, climat, identité, technologie. Avec ponts proposés."
        />
      </section>
    </div>
  )
}

function FeatureCard({ to, icon, title, desc }: { to: string; icon: string; title: string; desc: string }) {
  return (
    <Link to={to} className="card p-5 hover:shadow-md transition">
      <div className="text-3xl">{icon}</div>
      <div className="mt-2 font-display font-bold text-ink-900 dark:text-ink-100">{title}</div>
      <p className="mt-1 text-sm text-ink-700 dark:text-ink-300">{desc}</p>
    </Link>
  )
}
