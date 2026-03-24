import { useEffect, useRef, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShieldBackground from '../components/ShieldBackground'
import SEO from '../components/SEO'
import GeoShape from '../components/GeoShape'
import { isMenuOpen } from '../utils/menuOpen'
import { useLanguage } from '../i18n/LanguageContext'

const modules = [
  {
    id: 'S1',
    status: 'Activo',
    title: 'Geopolítica',
    subtitle: 'Situational Awareness Global',
    description: 'Monitorización en tiempo real de conflictos armados, eventos geopolíticos críticos y movimientos de actores estatales a escala global.',
    capabilities: ['Globo 3D interactivo', 'Mapa de calor de conflictos', 'Alertas de severidad', 'Geolocalización automática por IA'],
    sources: ['ACLED', 'GDELT', 'USGS Earthquakes', 'NASA FIRMS', 'OpenSky'],
    bg: '#0f1b3d',
    textColor: 'text-white',
    descColor: 'text-blue-200/60',
    itemColor: 'text-blue-100/80',
    shapeColor: 'rgba(255,255,255,0.08)',
    shapes: ['hexagon-outline', 'square', 'circle-outline'],
  },
  {
    id: 'S2',
    status: 'Activo',
    title: 'OSINT',
    subtitle: 'Open Source Intelligence',
    description: 'Recopilación y análisis automatizado de fuentes abiertas con IA. Noticias, redes sociales, canales de Telegram y foros especializados.',
    capabilities: ['Análisis de sentimiento', 'Detección de patrones SOCMINT', 'Planes de infiltración IA', 'Filtros de correlación'],
    sources: ['FreshRSS AI News', 'Reddit SOCMINT', 'Telegram', 'Feeds especializados'],
    bg: '#ffffff',
    textColor: 'text-gray-900',
    descColor: 'text-gray-500',
    itemColor: 'text-gray-600',
    shapeColor: 'rgba(0,0,0,0.15)',
    shapes: ['circle-outline', 'hexagon', 'square-outline'],
  },
  {
    id: 'S3',
    status: 'Activo',
    title: 'Cyber Intelligence',
    subtitle: 'Threat Intelligence Platform',
    description: 'Inteligencia de amenazas cibernéticas en tiempo real. CVEs, IOCs, APTs, campañas activas y tendencias del panorama de amenazas global.',
    capabilities: ['Monitorización de CVEs', 'Feeds de IOCs', 'Detección de outages', 'Correlación de APTs'],
    sources: ['CVE Feeds', 'IOC Feeds', 'Cloudflare Radar', 'Threat Intelligence APIs'],
    bg: '#0a2e1a',
    textColor: 'text-white',
    descColor: 'text-emerald-200/60',
    itemColor: 'text-emerald-100/80',
    shapeColor: 'rgba(255,255,255,0.07)',
    shapes: ['square', 'circle-outline', 'hexagon-outline'],
  },
  {
    id: 'S4',
    status: 'Activo',
    title: 'Tracking',
    subtitle: 'Domain Awareness — Air & Sea',
    description: 'Seguimiento en tiempo real de buques y aeronaves. Detección de comportamientos anómalos, rutas sospechosas y activos de interés estratégico.',
    capabilities: ['Mapa de tráfico marítimo', 'Seguimiento aéreo', 'Detección de anomalías', 'Historial de tracks'],
    sources: ['AIS Marine Traffic', 'ADS-B OpenSky', 'Vessel Finder', 'FlightAware'],
    bg: '#d4a017',
    textColor: 'text-gray-900',
    descColor: 'text-gray-700',
    itemColor: 'text-gray-800',
    shapeColor: 'rgba(0,0,0,0.15)',
    shapes: ['hexagon', 'square-outline', 'circle'],
  },
  {
    id: 'S5',
    status: 'Activo',
    title: 'Mercados',
    subtitle: 'Economic & Financial Intelligence',
    description: 'Inteligencia económica y financiera. Mercados globales, indicadores macroeconómicos y mercados de predicción para análisis de riesgo país.',
    capabilities: ['Datos de mercados en tiempo real', 'Indicadores macro FRED', 'Mercados de predicción', 'Correlación geopolítica-económica'],
    sources: ['Finnhub Markets', 'FRED Economic Data', 'Prediction Markets', 'Commodity Feeds'],
    bg: '#1a1a2e',
    textColor: 'text-white',
    descColor: 'text-indigo-200/60',
    itemColor: 'text-indigo-100/80',
    shapeColor: 'rgba(255,255,255,0.08)',
    shapes: ['circle-outline', 'hexagon', 'square'],
  },
]

const useCases = [
  {
    org: 'Mando de Operaciones',
    type: 'Defensa',
    modules: ['S1', 'S2', 'S4'],
    challenge: 'Necesidad de imagen operativa unificada durante operaciones en zona de conflicto con múltiples vectores de amenaza simultáneos.',
  },
  {
    org: 'Centro Nacional de Ciberseguridad',
    type: 'Agencia Gubernamental',
    modules: ['S2', 'S3'],
    challenge: 'Monitorización de amenazas avanzadas persistentes (APT) coordinadas desde actores estatales contra infraestructuras críticas nacionales.',
  },
  {
    org: 'Dirección General de Seguridad',
    type: 'Seguridad del Estado',
    modules: ['S2'],
    challenge: 'Identificación temprana de movimientos de radicalización y coordinación de grupos violentos en plataformas digitales abiertas.',
  },
  {
    org: 'Ministerio de Economía',
    type: 'Gobierno',
    modules: ['S1', 'S5'],
    challenge: 'Análisis de riesgo económico en tiempo real para decisiones de política monetaria y evaluación de impacto de sanciones internacionales.',
  },
]

const COOLDOWN_MS = 800
const DELTA_THRESHOLD = 30

function useIsMobile() {
  const [mobile, setMobile] = useState(() => window.innerWidth < 768)
  useEffect(() => {
    const handler = () => setMobile(window.innerWidth < 768)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])
  return mobile
}

export default function IntelPage() {
  const isMobile = useIsMobile()
  const { t, isRTL } = useLanguage()
  const modSteps = isMobile ? modules.length : modules.length - 1
  const caseSteps = useCases.length
  const totalSections = 1 + modSteps + caseSteps + 1

  const [sectionIndex, setSectionIndex] = useState(0)
  const currentIndex = useRef(0)
  const lastScrollTime = useRef(0)
  const touchStartY = useRef(0)
  const touchMoved = useRef(false)

  const heroRef = useRef(null)
  const modRef = useRef(null)
  const caseRef = useRef(null)
  const footerRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const goToSection = useCallback((index) => {
    const clamped = Math.max(0, Math.min(totalSections - 1, index))
    if (clamped === currentIndex.current) return

    lastScrollTime.current = Date.now()
    currentIndex.current = clamped
    setSectionIndex(clamped)

    let target
    if (clamped === 0) {
      target = heroRef.current
    } else if (clamped >= 1 && clamped <= modSteps) {
      target = modRef.current
    } else if (clamped >= modSteps + 1 && clamped <= modSteps + caseSteps) {
      target = caseRef.current
    } else {
      target = footerRef.current
    }

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [totalSections, modSteps, caseSteps])

  useEffect(() => {
    const handleWheel = (e) => {
      if (isMenuOpen()) return
      e.preventDefault()
      if (Math.abs(e.deltaY) < DELTA_THRESHOLD) return
      if (Date.now() - lastScrollTime.current < COOLDOWN_MS) return
      const direction = e.deltaY > 0 ? 1 : -1
      goToSection(currentIndex.current + direction)
    }

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY
      touchMoved.current = false
    }

    const handleTouchMove = (e) => {
      if (isMenuOpen()) return
      e.preventDefault()
      if (touchMoved.current) return
      const delta = touchStartY.current - e.touches[0].clientY
      if (Math.abs(delta) < 40) return
      touchMoved.current = true
      if (Date.now() - lastScrollTime.current < COOLDOWN_MS) return
      const direction = delta > 0 ? 1 : -1
      goToSection(currentIndex.current + direction)
    }

    const handleTouchEnd = () => {}

    const handleKeyDown = (e) => {
      if (Date.now() - lastScrollTime.current < COOLDOWN_MS) return
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault()
        goToSection(currentIndex.current + 1)
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault()
        goToSection(currentIndex.current - 1)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: false })
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [goToSection])

  const activeModIndex = sectionIndex >= 1 && sectionIndex <= modSteps
    ? sectionIndex - 1
    : sectionIndex > modSteps
      ? modSteps - 1
      : 0

  const caseStartIndex = modSteps + 1
  const activeCaseIndex = sectionIndex >= caseStartIndex && sectionIndex < caseStartIndex + caseSteps
    ? sectionIndex - caseStartIndex
    : sectionIndex >= caseStartIndex + caseSteps
      ? caseSteps - 1
      : 0

  return (
    <div>
      <SEO page="intel" />
      {/* Section 0: Hero */}
      <section
        ref={heroRef}
        className="h-screen flex flex-col relative overflow-hidden bg-black"
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute h-px w-[45%] animate-[pulse_4s_ease-in-out_infinite]"
            style={{ top: '18%', left: '8%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
          <div className="absolute h-px w-[55%] animate-[pulse_5s_ease-in-out_infinite_0.5s]"
            style={{ top: '35%', left: '25%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
          <div className="absolute h-px w-[35%] animate-[pulse_6s_ease-in-out_infinite_1s]"
            style={{ top: '55%', right: '10%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />
          <div className="absolute h-px w-[50%] animate-[pulse_4.5s_ease-in-out_infinite_1.5s]"
            style={{ top: '75%', left: '15%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
        </div>

        <ShieldBackground />
        <Navbar />

        <div className={`flex-1 flex flex-col justify-center px-8 md:px-20 gap-5 w-full md:max-w-[55%] text-center ${isRTL ? 'md:text-right' : 'md:text-left'} relative z-10`}>
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-6">
              <span>&larr;</span> {t('intel.back')}
            </Link>
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">{t('intel.tag')}</p>
            <div className="flex flex-wrap items-end gap-4 mb-3">
              <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                <span className="brand-ltr">NYCTOS</span>
              </h1>
              <a href="https://nyctos.ai/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-6 py-2.5 bg-green-500/20 text-green-400 border border-green-500/40 hover:bg-green-500/30 hover:border-green-400 hover:scale-105 transition-all cursor-pointer mb-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {t('intel.version')}
              </a>
            </div>
            <p className="text-xl md:text-2xl text-gray-400 mb-4">
              {t('intel.subtitle')}
            </p>
            <p className="text-sm md:text-base text-gray-500 leading-relaxed mb-6">
              {t('intel.desc')}
            </p>

          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-2 pb-8 text-gray-500 text-xs uppercase tracking-widest opacity-50">
          <span>{t('intel.scroll')}</span>
          <div className="w-px h-8 bg-gray-500 animate-pulse" />
        </div>
      </section>

      {/* Modules horizontal carousel */}
      <section
        ref={modRef}
        className="h-screen relative overflow-hidden bg-black"
      >
        <div
          className="layout-ltr flex h-full transition-transform duration-700 ease-in-out will-change-transform"
          style={{
            width: `${modules.length * (isMobile ? 100 : 50)}vw`,
            transform: `translateX(-${activeModIndex * (isMobile ? 100 : 50)}vw)`,
          }}
        >
          {modules.map((mod, i) => (
            <div
              key={i}
              className="w-screen md:w-[50vw] h-full flex items-center justify-center relative shrink-0 px-8 md:px-16"
              style={{ backgroundColor: mod.bg }}
            >
              {/* Decorative light lines */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute h-px w-[40%] animate-[pulse_5s_ease-in-out_infinite]"
                  style={{ top: '15%', left: '5%', background: `linear-gradient(90deg, transparent, ${mod.shapeColor}, transparent)` }} />
                <div className="absolute h-px w-[30%] animate-[pulse_6s_ease-in-out_infinite_1s]"
                  style={{ top: '85%', right: '10%', background: `linear-gradient(90deg, transparent, ${mod.shapeColor}, transparent)` }} />
              </div>

              {/* Top-left tag */}
              <div className="absolute top-8 left-8 md:top-12 md:left-16 flex items-center gap-3">
                <span className={`text-xs font-mono uppercase tracking-widest ${mod.bg === '#ffffff' || mod.bg === '#d4a017' ? 'text-gray-400' : 'text-white/20'}`}>
                  {String(i + 1).padStart(2, '0')} / {String(modules.length).padStart(2, '0')}
                </span>
                <div className={`w-12 h-px ${mod.bg === '#ffffff' || mod.bg === '#d4a017' ? 'bg-gray-300' : 'bg-white/10'}`} />
              </div>

              <div className="max-w-2xl w-full">
                <div className="flex items-center gap-3 md:gap-5 mb-4 md:mb-6">
                  <span className={`text-4xl md:text-7xl font-bold ${mod.bg === '#ffffff' || mod.bg === '#d4a017' ? 'text-gray-200' : 'text-white/5'}`}>
                    {mod.id}
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      <span className={`text-xs ${mod.bg === '#ffffff' || mod.bg === '#d4a017' ? 'text-gray-500' : 'text-green-400'}`}>{mod.status}</span>
                    </div>
                    <h2 className={`text-xl md:text-3xl font-bold tracking-tight ${mod.textColor}`}>
                      {mod.title}
                    </h2>
                    <div className={`h-px w-16 mb-1 mt-1 ${mod.bg === '#ffffff' || mod.bg === '#d4a017' ? 'bg-gray-300' : 'bg-white/10'}`} />
                    <p className="text-xs md:text-sm text-accent">{mod.subtitle}</p>
                  </div>
                </div>

                <p className={`text-xs md:text-base leading-relaxed mb-4 md:mb-5 border-l-2 border-accent/30 pl-3 md:pl-4 ${mod.descColor}`}>
                  {mod.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-3">
                  {mod.capabilities.map((cap, idx) => (
                    <div key={idx} className={`flex items-start gap-2 md:gap-3 p-2 md:p-3 border rounded-lg ${mod.bg === '#ffffff' || mod.bg === '#d4a017' ? 'border-gray-200' : 'border-white/5'}`}>
                      <span className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent" />
                      </span>
                      <span className={`text-xs md:text-sm ${mod.itemColor}`}>{cap}</span>
                    </div>
                  ))}
                </div>

                <div className="mb-4">
                  <p className={`text-xs uppercase tracking-widest mb-2 ${mod.descColor}`}>{t('intel.sources')}</p>
                  <div className="flex flex-wrap gap-2">
                    {mod.sources.map((src, idx) => (
                      <span key={idx} className={`text-xs px-2 py-1 rounded border ${mod.bg === '#ffffff' || mod.bg === '#d4a017' ? 'border-gray-300 text-gray-600' : 'border-white/10 text-gray-400'}`}>
                        {src}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Geometric shapes */}
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 opacity-60">
                <div className="flex flex-col items-end -space-y-3">
                  <div className="transition-transform duration-300 ease-out" style={{ transform: `rotate(${activeModIndex * (i % 2 === 0 ? 90 : -90)}deg)` }}>
                    <GeoShape type={mod.shapes[0]} color={mod.shapeColor} size={60} />
                  </div>
                  <div className="flex items-end -space-x-5">
                    <div className="transition-transform duration-300 ease-out" style={{ transform: `rotate(${activeModIndex * (i % 2 === 0 ? -90 : 90)}deg)` }}>
                      <GeoShape type={mod.shapes[1]} color={mod.shapeColor} size={75} />
                    </div>
                    <div className="transition-transform duration-300 ease-out" style={{ transform: `rotate(${activeModIndex * 90}deg)` }}>
                      <GeoShape type={mod.shapes[2]} color={mod.shapeColor} size={90} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Counter */}
              <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 text-sm ${mod.descColor}`}>
                {String(i + 1).padStart(2, '0')} / {String(modules.length).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases (scroll-driven) */}
      <section
        ref={caseRef}
        className="h-screen relative overflow-hidden bg-black flex items-center justify-center px-8 md:px-20"
      >
        <div className="absolute inset-0 z-0 opacity-20">
          <ShieldBackground />
        </div>

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute h-px w-[40%] transition-all duration-[1500ms] ease-in-out"
            style={{ top: `${15 + activeCaseIndex * 12}%`, left: `${8 + activeCaseIndex * 20}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
          <div className="absolute h-px w-[50%] transition-all duration-[1500ms] ease-in-out"
            style={{ top: `${70 - activeCaseIndex * 10}%`, right: `${5 + activeCaseIndex * 15}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />
        </div>

        <div className="max-w-6xl w-full relative z-10 flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          {/* Left: active case */}
          <div className="flex-1 relative min-h-[300px] overflow-hidden">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ease-in-out ${
                  i === activeCaseIndex
                    ? 'opacity-100 translate-y-0 translate-x-0'
                    : i < activeCaseIndex
                      ? 'opacity-0 -translate-y-full absolute inset-0 pointer-events-none'
                      : 'opacity-0 translate-x-full absolute inset-0 pointer-events-none'
                }`}
              >
                <p className="text-sm uppercase tracking-widest text-accent mb-4">{t('intel.caseTag')}</p>
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">{uc.type}</p>
                <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
                  {uc.org}
                </h2>
                <div className="flex gap-2 mb-6">
                  {uc.modules.map((m, idx) => (
                    <span key={idx} className="text-xs font-mono px-3 py-1 border border-accent/30 rounded-full text-accent">
                      {m}
                    </span>
                  ))}
                </div>
                <div className="border-l-2 border-accent/30 pl-4 mb-8">
                  <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">{t('intel.caseChallenge')}</p>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {uc.challenge}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: step indicators */}
          <div className="md:w-[280px] shrink-0 flex flex-col gap-3">
            {useCases.map((uc, i) => (
              <div
                key={i}
                className={`p-4 border transition-all duration-500 ${
                  i === activeCaseIndex
                    ? 'border-accent/50 bg-accent/5'
                    : 'border-white/5 opacity-40'
                }`}
              >
                <p className={`text-xs font-medium mb-1 ${i === activeCaseIndex ? 'text-accent' : 'text-gray-600'}`}>
                  {uc.type}
                </p>
                <p className={`text-sm font-bold ${i === activeCaseIndex ? 'text-white' : 'text-gray-500'}`}>
                  {uc.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer ref={footerRef} />
    </div>
  )
}
