import { useEffect, useRef, useCallback, useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShieldBackground from '../components/ShieldBackground'
import SEO from '../components/SEO'
import GeoShape from '../components/GeoShape'
import { isMenuOpen } from '../utils/menuOpen'
import { useLanguage } from '../i18n/LanguageContext'
import { mergeTranslatedData } from '../utils/mergeTranslations'

const solutions = [
  {
    title: 'IA Predictiva de Amenazas',
    subtitle: 'Anticipación Inteligente',
    description: 'Algoritmos de machine learning que analizan patrones globales para predecir amenazas antes de que ocurran, con redes neuronales profundas y análisis de comportamiento.',
    items: [
      'Análisis predictivo en tiempo real',
      'Modelos especializados por sector',
      'Detección de anomalías',
      'Predicción de vectores de ataque',
      'Análisis de tendencias geopolíticas',
      'Correlación de threat intelligence',
    ],
    bg: '#0f1b3d',
    textColor: 'text-white',
    descColor: 'text-blue-200/60',
    itemColor: 'text-blue-100/80',
    shapeColor: 'rgba(255,255,255,0.08)',
    shapes: ['circle-outline', 'hexagon', 'square-outline'],
  },
  {
    title: 'IA Defensiva Autónoma',
    subtitle: 'Protección Automatizada',
    description: 'Sistemas de IA que ejecutan respuestas defensivas autónomas: desde contención automática hasta reconfiguración de seguridad en tiempo real.',
    items: [
      'Respuesta autónoma instantánea',
      'Contención quirúrgica de amenazas',
      'Reconfiguración automática de firewalls',
      'Aislamiento inteligente de sistemas',
      'Escalación automática de privilegios',
      'Orquestación de contramedidas',
    ],
    bg: '#ffffff',
    textColor: 'text-gray-900',
    descColor: 'text-gray-500',
    itemColor: 'text-gray-600',
    shapeColor: 'rgba(0,0,0,0.15)',
    shapes: ['square', 'circle-outline', 'hexagon-outline'],
  },
  {
    title: 'Computer Vision Security',
    subtitle: 'Vigilancia Inteligente',
    description: 'Visión por computadora aplicada a la seguridad física y digital para detectar comportamientos sospechosos y anomalías visuales en tiempo real.',
    items: [
      'Detección de comportamientos anómalos',
      'Análisis facial y de gestos',
      'Reconocimiento de objetos peligrosos',
      'Monitorización de espacios críticos',
      'Análisis de flujos de personas',
      'Integración con control de accesos',
    ],
    bg: '#0a2e1a',
    textColor: 'text-white',
    descColor: 'text-emerald-200/60',
    itemColor: 'text-emerald-100/80',
    shapeColor: 'rgba(255,255,255,0.07)',
    shapes: ['hexagon-outline', 'square', 'circle'],
  },
  {
    title: 'Natural Language Processing',
    subtitle: 'Análisis Semántico',
    description: 'PLN para analizar comunicaciones, detectar ingeniería social y monitorizar sentimientos en tiempo real.',
    items: [
      'Análisis de comunicaciones internas',
      'Detección de phishing avanzado',
      'Análisis de sentimientos',
      'Procesamiento de threat intelligence',
      'Análisis de redes sociales',
      'Detección de fugas de información',
    ],
    bg: '#2d1b4e',
    textColor: 'text-white',
    descColor: 'text-purple-200/60',
    itemColor: 'text-purple-100/80',
    shapeColor: 'rgba(255,255,255,0.08)',
    shapes: ['hexagon', 'circle-outline', 'square-outline'],
  },
]

const innovations = [
  { tag: 'En desarrollo', title: 'Federated Learning Security', desc: 'Entrenamiento distribuido entre organizaciones sin compartir datos sensibles. Privacidad total y cumplimiento GDPR con detección colectiva de amenazas.' },
  { tag: 'Investigación', title: 'Quantum-Resistant AI', desc: 'Algoritmos de IA con criptografía post-cuántica integrada para proteger modelos y comunicaciones frente a la amenaza cuántica emergente.' },
  { tag: 'Beta', title: 'Explainable AI Security', desc: 'IA transparente que explica cada decisión de seguridad con trazabilidad completa. Esencial para auditorías y cumplimiento normativo.' },
  { tag: 'Disponible', title: 'Edge AI Security', desc: 'IA directamente en dispositivos edge para respuesta en milisegundos sin depender de la nube. Ideal para infraestructuras críticas y entornos con conectividad limitada.' },
]

const stats = [
  { value: '99.7%', label: 'Detección de Amenazas' },
  { value: '2.3s', label: 'Tiempo de Respuesta' },
  { value: '847%', label: 'Incremento del ROI' },
  { value: '24/7', label: 'Monitoreo con IA' },
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

export default function AiPage() {
  const { t, ta, isRTL } = useLanguage()

  // Merge translated content for innovations and solutions
  const innovationsData = useMemo(() => {
    const translated = ta('ai.innovations')
    return mergeTranslatedData(innovations, translated)
  }, [ta])

  const solutionsData = useMemo(() => {
    const translated = ta('ai.solutions')
    return mergeTranslatedData(solutions, translated)
  }, [ta])

  const isMobile = useIsMobile()

  const solSteps = isMobile ? solutionsData.length : solutionsData.length - 1
  const innovSteps = innovationsData.length
  // hero(0) + solutions(1..solSteps) + innovations(solSteps+1..solSteps+innovSteps) + footer
  const totalSections = 1 + solSteps + innovSteps + 1

  const [sectionIndex, setSectionIndex] = useState(0)
  const currentIndex = useRef(0)
  const lastScrollTime = useRef(0)
  const touchStartY = useRef(0)
  const touchMoved = useRef(false)

  const heroRef = useRef(null)
  const solRef = useRef(null)
  const innovRef = useRef(null)
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
    } else if (clamped >= 1 && clamped <= solSteps) {
      target = solRef.current
    } else if (clamped >= solSteps + 1 && clamped <= solSteps + innovSteps) {
      target = innovRef.current
    } else {
      target = footerRef.current
    }

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [totalSections, solSteps, innovSteps])

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
      const tag = e.target.tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || e.target.isContentEditable) return
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

  const activeSolIndex = sectionIndex >= 1 && sectionIndex <= solSteps
    ? sectionIndex - 1
    : sectionIndex > solSteps
      ? solSteps - 1
      : 0

  const innovStartIndex = solSteps + 1
  const activeInnovIndex = sectionIndex >= innovStartIndex && sectionIndex < innovStartIndex + innovSteps
    ? sectionIndex - innovStartIndex
    : sectionIndex >= innovStartIndex + innovSteps
      ? innovSteps - 1
      : 0

  return (
    <div>
      <SEO page="ai" />
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

        <div className={`flex-1 flex flex-col justify-center px-8 md:px-20 gap-5 w-full md:max-w-[50%] text-center ${isRTL ? 'md:text-right' : 'md:text-left'} relative z-10`}>
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-6">
              <span>&larr;</span> {t('ai.back')}
            </Link>
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">{t('ai.tag')}</p>
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-3">
              Inteligencia Artificial
            </h1>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
              {t('ai.subtitle')}
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed">
              {t('ai.desc')}
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-2 pb-8 text-gray-500 text-xs uppercase tracking-widest opacity-50">
          <span>{t('ai.scroll')}</span>
          <div className="w-px h-8 bg-gray-500 animate-pulse" />
        </div>
      </section>

      {/* Sections: Solutions horizontal carousel */}
      <section
        ref={solRef}
        className="h-screen relative overflow-hidden bg-black"
      >
        <div
          className="layout-ltr flex h-full transition-transform duration-700 ease-in-out will-change-transform"
          style={{
            width: `${solutionsData.length * (isMobile ? 100 : 50)}vw`,
            transform: `translateX(-${activeSolIndex * (isMobile ? 100 : 50)}vw)`,
          }}
        >
          {solutionsData.map((sol, i) => (
            <div
              key={i}
              className="w-screen md:w-[50vw] h-full flex items-center justify-center relative shrink-0 px-8 md:px-16"
              style={{ backgroundColor: sol.bg }}
            >
              {/* Decorative light lines */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute h-px w-[40%] animate-[pulse_5s_ease-in-out_infinite]"
                  style={{ top: '15%', left: '5%', background: `linear-gradient(90deg, transparent, ${sol.shapeColor}, transparent)` }} />
                <div className="absolute h-px w-[30%] animate-[pulse_6s_ease-in-out_infinite_1s]"
                  style={{ top: '85%', right: '10%', background: `linear-gradient(90deg, transparent, ${sol.shapeColor}, transparent)` }} />
              </div>

              {/* Top-left tag */}
              <div className="absolute top-8 left-8 md:top-12 md:left-16 flex items-center gap-3">
                <span className={`text-xs font-mono uppercase tracking-widest ${sol.bg === '#ffffff' || sol.bg === '#d4a017' ? 'text-gray-400' : 'text-white/20'}`}>
                  {String(i + 1).padStart(2, '0')} / {String(solutionsData.length).padStart(2, '0')}
                </span>
                <div className={`w-12 h-px ${sol.bg === '#ffffff' || sol.bg === '#d4a017' ? 'bg-gray-300' : 'bg-white/10'}`} />
              </div>

              <div className="max-w-2xl w-full">
                <div className="flex items-center gap-3 md:gap-5 mb-4 md:mb-6">
                  <span className={`text-4xl md:text-7xl font-bold ${sol.bg === '#ffffff' ? 'text-gray-200' : 'text-white/5'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className={`text-xs uppercase tracking-widest mb-1 ${sol.descColor} hidden md:block`}>{t('ai.solTag')}</p>
                    <h2 className={`text-xl md:text-3xl font-bold tracking-tight ${sol.textColor}`}>
                      {sol.title}
                    </h2>
                    <div className={`h-px w-16 mb-1 mt-1 ${sol.bg === '#ffffff' || sol.bg === '#d4a017' ? 'bg-gray-300' : 'bg-white/10'}`} />
                    <p className="text-xs md:text-sm text-accent">{sol.subtitle}</p>
                  </div>
                </div>

                <p className={`text-xs md:text-base leading-relaxed mb-4 md:mb-6 border-l-2 border-accent/30 pl-3 md:pl-4 ${sol.descColor}`}>
                  {sol.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4 md:mb-6">
                  {sol.items.map((it, idx) => (
                    <div key={idx} className={`flex items-start gap-2 md:gap-3 p-2 md:p-3 border rounded-lg ${sol.bg === '#ffffff' ? 'border-gray-200' : 'border-white/5'}`}>
                      <span className="w-4 h-4 md:w-5 md:h-5 rounded-full border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent" />
                      </span>
                      <span className={`text-xs md:text-sm ${sol.itemColor}`}>{it}</span>
                    </div>
                  ))}
                </div>  
              </div>

              {/* Geometric shapes */}
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 opacity-60">
                <div className="flex flex-col items-end -space-y-3">
                  <div className="transition-transform duration-300 ease-out" style={{ transform: `rotate(${activeSolIndex * (i % 2 === 0 ? 90 : -90)}deg)` }}>
                    <GeoShape type={sol.shapes[0]} color={sol.shapeColor} size={60} />
                  </div>
                  <div className="flex items-end -space-x-5">
                    <div className="transition-transform duration-300 ease-out" style={{ transform: `rotate(${activeSolIndex * (i % 2 === 0 ? -90 : 90)}deg)` }}>
                      <GeoShape type={sol.shapes[1]} color={sol.shapeColor} size={75} />
                    </div>
                    <div className="transition-transform duration-300 ease-out" style={{ transform: `rotate(${activeSolIndex * 90}deg)` }}>
                      <GeoShape type={sol.shapes[2]} color={sol.shapeColor} size={90} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Counter */}
              <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 text-sm ${sol.descColor}`}>
                {String(i + 1).padStart(2, '0')} / {String(solutionsData.length).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sections: Innovations (scroll-driven) */}
      <section
        ref={innovRef}
        className="h-screen relative overflow-hidden bg-black flex items-center justify-center px-8 md:px-20"
      >
        {/* Particle cloud background dimmed */}
        <div className="absolute inset-0 z-0 opacity-30">
          <ShieldBackground />
        </div>

        {/* Light lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute h-px w-[40%] transition-all duration-[1500ms] ease-in-out"
            style={{ top: `${15 + activeInnovIndex * 10}%`, left: `${8 + activeInnovIndex * 18}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
          <div className="absolute h-px w-[50%] transition-all duration-[1500ms] ease-in-out"
            style={{ top: `${75 - activeInnovIndex * 8}%`, right: `${5 + activeInnovIndex * 12}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />
        </div>

        <div className="max-w-6xl w-full relative z-10 flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          {/* Left: active innovation card */}
          <div className="flex-1 relative min-h-[300px] overflow-hidden">
            {innovationsData.map((inn, i) => {
              const tagColor = inn.tag === 'Disponible'
                ? 'bg-green-500/15 text-green-400'
                : inn.tag === 'Beta'
                  ? 'bg-blue-500/15 text-blue-400'
                  : inn.tag === 'Investigación'
                    ? 'bg-purple-500/15 text-purple-400'
                    : 'bg-yellow-500/15 text-yellow-400'
              return (
                <div
                  key={i}
                  className={`transition-all duration-700 ease-in-out ${
                    i === activeInnovIndex
                      ? 'opacity-100 translate-y-0 translate-x-0'
                      : i < activeInnovIndex
                        ? 'opacity-0 -translate-y-full absolute inset-0 pointer-events-none'
                        : 'opacity-0 translate-x-full absolute inset-0 pointer-events-none'
                  }`}
                >
                  <p className="text-sm uppercase tracking-widest text-accent mb-4">{t('ai.innovTag')}</p>
                  <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full mb-5 ${tagColor}`}>
                    {inn.tag}
                  </span>
                  <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">
                    {inn.title}
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed mb-8 max-w-lg">
                    {inn.desc}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Right: step indicators */}
          <div className="md:w-[280px] shrink-0 flex flex-col gap-3">
            {innovationsData.map((inn, i) => {
              const tagColor = inn.tag === 'Disponible'
                ? 'text-green-400'
                : inn.tag === 'Beta'
                  ? 'text-blue-400'
                  : inn.tag === 'Investigación'
                    ? 'text-purple-400'
                    : 'text-yellow-400'
              return (
                <div
                  key={i}
                  className={`p-4 border transition-all duration-500 ${
                    i === activeInnovIndex
                      ? 'border-accent/50 bg-accent/5'
                      : 'border-white/5 opacity-40'
                  }`}
                >
                  <p className={`text-xs font-medium mb-1 ${i === activeInnovIndex ? tagColor : 'text-gray-600'}`}>
                    {inn.tag}
                  </p>
                  <p className={`text-sm font-bold ${i === activeInnovIndex ? 'text-white' : 'text-gray-500'}`}>
                    {inn.title}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer ref={footerRef} />
    </div>
  )
}
