import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-ink-200 bg-white dark:bg-ink-900 dark:border-ink-800">
      <div className="container-page py-10 text-sm text-ink-600 dark:text-ink-400 grid gap-6 md:grid-cols-3">
        <div>
          <div className="font-display font-bold text-ink-900 dark:text-ink-100 text-base mb-2">⚡ Choc des générations</div>
          <p>Outil pédagogique pour comprendre et comparer les générations. Données vulgarisées, sources publiques.</p>
        </div>
        <div>
          <div className="font-semibold text-ink-900 dark:text-ink-100 mb-2">Méthode</div>
          <p>
            Les bornes par génération suivent la convention de Pew Research, complétée par McCrindle pour la génération Alpha.
            Les profils régionaux sont des synthèses, pas des vérités absolues : chaque personne est plus que sa génération.
          </p>
        </div>
        <div>
          <div className="font-semibold text-ink-900 dark:text-ink-100 mb-2">Liens</div>
          <ul className="space-y-1">
            <li><Link to="/sources" className="hover:underline">Toutes les sources</Link></li>
            <li><a href="https://github.com/edud69/generational-clash" target="_blank" rel="noreferrer" className="hover:underline">Code source (GitHub)</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100 dark:border-ink-800">
        <div className="container-page py-4 text-xs text-ink-500 dark:text-ink-500 flex flex-wrap items-center justify-between gap-2">
          <span>v0.1 — première itération. Suggestions et corrections bienvenues via les Issues GitHub.</span>
          <span>Données mises à jour : 2026</span>
        </div>
      </div>
    </footer>
  )
}
