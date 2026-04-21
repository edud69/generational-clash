# ⚡ Choc des générations

Application web interactive en français pour comprendre et comparer les générations
(silencieuse, baby-boomers, X, Y/millennials, Z, Alpha) au Québec/Canada,
en Europe, en Asie et au Moyen-Orient.

## Fonctionnalités v0.1

- 🧭 **Profils par génération** — sept dimensions : valeurs, travail, communication, argent, technologie, famille, politique.
- 🌍 **Sélecteur de région** — données contextualisées QC/CA, Europe, Asie, Moyen-Orient.
- ↔️ **Comparateur** — choisissez deux générations et voyez-les côte à côte.
- ⚡ **Points de friction** — sujets qui crispent (logement, travail, climat, identité…) avec ponts proposés.
- 🔗 **Sources** — toutes les données s'appuient sur Pew Research, Statistique Canada, McCrindle, OCDE, Eurostat, Arab Youth Survey, World Values Survey, etc.

## Démarrer en local

```bash
npm install
npm run dev
```

L'application sera disponible sur `http://localhost:5173`.

## Build de production

```bash
npm run build
npm run preview
```

Le build statique se trouve dans `dist/` — déployable sur n'importe quel hébergeur statique
(Vercel, Netlify, GitHub Pages, Cloudflare Pages).

## Stack

- **Vite** + **React 18** + **TypeScript**
- **Tailwind CSS** pour le design
- **React Router** (HashRouter pour compatibilité GitHub Pages)
- 0 backend — tout est statique, données dans `src/data/`.

## Structure

```
src/
├── data/
│   ├── generations.ts   ← le cœur des données
│   ├── clashes.ts       ← points de friction
│   ├── regions.ts       ← régions et dimensions
│   ├── sources.ts       ← références bibliographiques
│   └── types.ts
├── components/          ← Header, Footer, GenerationCard, SourceLink…
├── pages/               ← Home, Generations, Compare, Clashes, Sources
├── state/RegionContext  ← région choisie persistée en localStorage
└── App.tsx
```

## Contribuer

Suggestions et corrections bienvenues via les Issues. Pour ajouter ou affiner
des données régionales, modifier `src/data/generations.ts` et ajouter les sources
dans `src/data/sources.ts`.

## Limites assumées

- Les bornes générationnelles sont des conventions (ici Pew + McCrindle), pas des vérités.
- Les profils régionaux sont des moyennes : chaque personne dépasse sa génération.
- L'Asie regroupe des réalités très diverses (Chine, Japon, Corée, Inde…) ; il faut lire le détail.
- Ne couvre pas (encore) l'Amérique latine ni l'Afrique subsaharienne.
