import { Route, Routes, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Home } from './pages/Home'
import { Generations } from './pages/Generations'
import { GenerationDetail } from './pages/GenerationDetail'
import { Compare } from './pages/Compare'
import { Clashes } from './pages/Clashes'
import { Sources } from './pages/Sources'
import { RegionProvider } from './state/RegionContext'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])
  return null
}

export default function App() {
  return (
    <RegionProvider>
      <div className="min-h-screen flex flex-col">
        <Header />
        <ScrollToTop />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generations" element={<Generations />} />
            <Route path="/generations/:id" element={<GenerationDetail />} />
            <Route path="/comparer" element={<Compare />} />
            <Route path="/clashs" element={<Clashes />} />
            <Route path="/sources" element={<Sources />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </RegionProvider>
  )
}
