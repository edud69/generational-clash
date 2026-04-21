import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import type { RegionId } from '../data/types'
import { REGIONS } from '../data/regions'

type Ctx = {
  region: RegionId
  setRegion: (r: RegionId) => void
}

const RegionContext = createContext<Ctx | null>(null)

const STORAGE_KEY = 'gc.region'

export function RegionProvider({ children }: { children: ReactNode }) {
  const [region, setRegionState] = useState<RegionId>(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null
    if (saved && REGIONS.some(r => r.id === saved)) return saved as RegionId
    return 'qc-ca'
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, region)
    } catch {
      /* ignore */
    }
  }, [region])

  return (
    <RegionContext.Provider value={{ region, setRegion: setRegionState }}>
      {children}
    </RegionContext.Provider>
  )
}

export function useRegion() {
  const ctx = useContext(RegionContext)
  if (!ctx) throw new Error('useRegion must be used inside RegionProvider')
  return ctx
}
