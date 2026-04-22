import { Link, NavLink } from 'react-router-dom'
import { REGIONS } from '../data/regions'
import { useRegion } from '../state/RegionContext'
import { useTheme } from '../state/ThemeContext'

export function Header() {
  const { region, setRegion } = useRegion()
  const { theme, toggleTheme } = useTheme()

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1.5 rounded-lg text-sm font-medium transition ${
      isActive
        ? 'bg-ink-900 text-white dark:bg-white/20 dark:text-white'
        : 'text-ink-700 hover:bg-ink-100 dark:text-ink-300 dark:hover:bg-ink-700/60'
    }`

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-ink-200 dark:bg-ink-900/80 dark:border-ink-800">
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
          <label className="text-xs text-ink-500 hidden sm:block dark:text-ink-400">Région</label>
          <select
            value={region}
            onChange={e => setRegion(e.target.value as typeof region)}
            className="text-sm rounded-lg border border-ink-200 bg-white px-2 py-1.5 focus:outline-none focus:ring-2 focus:ring-brand-500 dark:border-ink-700 dark:bg-ink-800 dark:text-ink-200"
            aria-label="Choisir une région"
          >
            {REGIONS.map(r => (
              <option key={r.id} value={r.id}>{r.flag} {r.shortLabel}</option>
            ))}
          </select>
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Passer en mode clair' : 'Passer en mode sombre'}
            className="p-1.5 rounded-lg text-ink-500 hover:bg-ink-100 transition dark:text-ink-400 dark:hover:bg-ink-700"
          >
            {theme === 'dark' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      <div className="md:hidden border-t border-ink-100 bg-white dark:bg-ink-900 dark:border-ink-800">
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
