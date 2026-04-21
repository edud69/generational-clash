import { Link, NavLink } from 'react-router-dom'
import { REGIONS } from '../data/regions'
import { useRegion } from '../state/RegionContext'

export function Header() {
  const { region, setRegion } = useRegion()

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1.5 rounded-lg text-sm font-medium transition ${
      isActive ? 'bg-ink-900 text-white' : 'text-ink-700 hover:bg-ink-100'
    }`

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-ink-200">
      <div className="container-page flex items-center gap-4 h-16">
        <Link to="/" className="flex items-center gap-2 font-display font-bold text-lg">
          <span className="text-2xl">⚡</span>
          <span>Choc des générations</span>
        </Link>
        <nav className="hidden md:flex items-center gap-1 ml-4">
          <NavLink to="/" end className={linkClass}>Accueil</NavLink>
          <NavLink to="/generations" className={linkClass}>Générations</NavLink>
          <NavLink to="/comparer" className={linkClass}>Comparer</NavLink>
          <NavLink to="/clashs" className={linkClass}>Points de friction</NavLink>
          <NavLink to="/sources" className={linkClass}>Sources</NavLink>
        </nav>
        <div className="ml-auto flex items-center gap-2">
          <label className="text-xs text-ink-500 hidden sm:block">Région</label>
          <select
            value={region}
            onChange={e => setRegion(e.target.value as typeof region)}
            className="text-sm rounded-lg border border-ink-200 bg-white px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-500"
            aria-label="Choisir une région"
          >
            {REGIONS.map(r => (
              <option key={r.id} value={r.id}>{r.flag} {r.shortLabel}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="md:hidden border-t border-ink-100 bg-white">
        <div className="container-page flex gap-1 overflow-x-auto py-2">
          <NavLink to="/" end className={linkClass}>Accueil</NavLink>
          <NavLink to="/generations" className={linkClass}>Générations</NavLink>
          <NavLink to="/comparer" className={linkClass}>Comparer</NavLink>
          <NavLink to="/clashs" className={linkClass}>Frictions</NavLink>
          <NavLink to="/sources" className={linkClass}>Sources</NavLink>
        </div>
      </div>
    </header>
  )
}
