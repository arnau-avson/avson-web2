import { useEffect, useRef, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShieldBackground from '../components/ShieldBackground'

const normativas = [
  {
    tag: 'NIS2',
    title: 'Network and Information Systems Directive 2',
    description: 'Cumplimiento de la nueva directiva europea de ciberseguridad',
    items: [
      'Evaluación de riesgos cibernéticos',
      'Medidas técnicas y organizativas',
      'Reporting de incidentes en 24h',
      'Formación especializada',
      'Auditorías de cumplimiento',
      'Gestión de cadena de suministro',
    ],
    bg: '#0f1b3d',
    textColor: 'text-white',
    descColor: 'text-blue-200/60',
    itemColor: 'text-blue-100/80',
  },
  {
    tag: 'ENS',
    title: 'Esquema Nacional de Seguridad',
    description: 'Marco español para seguridad de sistemas públicos',
    items: [
      'Categorización de sistemas',
      '75 medidas de seguridad',
      'Auditorías oficiales',
      'Declaración de conformidad',
      'Mejora continua',
      'Integración CCN-CERT',
    ],
    bg: '#ffffff',
    textColor: 'text-gray-900',
    descColor: 'text-gray-500',
    itemColor: 'text-gray-600',
  },
  {
    tag: 'ISO 27001',
    title: 'Gestión de Seguridad de la Información',
    description: 'Estándar internacional para SGSI',
    items: [
      'Sistema de gestión completo',
      'Análisis de riesgos',
      '114 controles de seguridad',
      'Mejora continua PDCA',
      'Certificación internacional',
      'Integración con otros ISOs',
    ],
    bg: '#0a2e1a',
    textColor: 'text-white',
    descColor: 'text-emerald-200/60',
    itemColor: 'text-emerald-100/80',
  },
  {
    tag: 'ISO 22301',
    title: 'Gestión de Continuidad de Negocio',
    description: 'Garantiza la continuidad operativa ante interrupciones',
    items: [
      'Análisis de impacto (BIA)',
      'Estrategias de continuidad',
      'Planes de recuperación',
      'Gestión de crisis',
      'Ejercicios y simulacros',
      'Cultura de resiliencia',
    ],
    bg: '#1a1a2e',
    textColor: 'text-white',
    descColor: 'text-indigo-200/60',
    itemColor: 'text-indigo-100/80',
  },
  {
    tag: 'DORA',
    title: 'Digital Operational Resilience Act',
    description: 'Resiliencia operacional digital para servicios financieros en vigor',
    items: [
      'Gestión de riesgos TIC',
      'Reporting de incidentes',
      'Pruebas de resiliencia operacional',
      'Gestión de riesgos de terceros',
      'Intercambio de información sobre amenazas',
      'Supervisión de proveedores críticos',
    ],
    bg: '#d4a017',
    textColor: 'text-gray-900',
    descColor: 'text-gray-700',
    itemColor: 'text-gray-800',
  },
]

const soluciones = [
  {
    tab: 'Consultoría estratégica',
    subtitle: 'Diseño e implantación GRC end-to-end',
    items: [
      'Evaluación y diseño de marcos',
      'Análisis de brecha (gap)',
      'Roadmap priorizado',
      'Gestión del cambio',
    ],
    label: 'Servicio #1',
    bg: '#0f1b3d',
    cardBg: 'bg-white/[0.05]',
    cardBorder: 'border-white/10',
    textColor: 'text-white',
    itemColor: 'text-blue-100/80',
  },
  {
    tab: 'Certificaciones',
    subtitle: 'Acompañamiento completo',
    items: ['ISO 27001', 'ENS', 'NIS2', 'ISO 22301', 'Auditoría interna'],
    label: 'Servicio #2',
    bg: '#ffffff',
    cardBg: 'bg-gray-100',
    cardBorder: 'border-gray-200',
    textColor: 'text-gray-900',
    itemColor: 'text-gray-600',
  },
  {
    tab: 'Continuidad de negocio',
    subtitle: 'Resiliencia operativa',
    items: ['BIA', 'Estrategias BCM', 'Planes BCP/DRP', 'Simulacros'],
    label: 'Servicio #3',
    bg: '#0a2e1a',
    cardBg: 'bg-white/[0.05]',
    cardBorder: 'border-white/10',
    textColor: 'text-white',
    itemColor: 'text-emerald-100/80',
  },
  {
    tab: 'Formación especializada',
    subtitle: 'Directivos y equipos técnicos',
    items: ['Marcos y mejores prácticas', 'Talleres prácticos', 'Programas a medida'],
    label: 'Servicio #4',
    bg: '#2d1b4e',
    cardBg: 'bg-white/[0.05]',
    cardBorder: 'border-white/10',
    textColor: 'text-white',
    itemColor: 'text-purple-100/80',
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

export default function GrcPage() {
  const isMobile = useIsMobile()
  const normSteps = isMobile ? normativas.length : normativas.length - 1
  const solSteps = soluciones.length
  const totalSections = 1 + normSteps + solSteps + 1

  const [sectionIndex, setSectionIndex] = useState(0)
  // activeSolucion is derived from sectionIndex below
  const currentIndex = useRef(0)
  const lastScrollTime = useRef(0)
  const touchStartY = useRef(0)
  const touchMoved = useRef(false)

  const heroRef = useRef(null)
  const normRef = useRef(null)
  const solucionesRef = useRef(null)
  const ctaRef = useRef(null)

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
    } else if (clamped >= 1 && clamped <= normSteps) {
      target = normRef.current
    } else if (clamped >= normSteps + 1 && clamped <= normSteps + solSteps) {
      target = solucionesRef.current
    } else {
      target = ctaRef.current
    }

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [totalSections, normSteps, solSteps])

  useEffect(() => {
    const handleWheel = (e) => {
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

  const activeNormIndex = sectionIndex >= 1 && sectionIndex <= normSteps
    ? sectionIndex - 1
    : sectionIndex > normSteps
      ? normSteps - 1
      : 0

  const norm = normativas[activeNormIndex]

  // Soluciones: which step (0 to solSteps-1)
  const solStartIndex = normSteps + 1
  const activeSolucion = sectionIndex >= solStartIndex && sectionIndex < solStartIndex + solSteps
    ? sectionIndex - solStartIndex
    : sectionIndex >= solStartIndex + solSteps
      ? solSteps - 1
      : 0

  const isLight = soluciones[activeSolucion].bg === '#ffffff'

  return (
    <div>
      {/* Section 0: Hero */}
      <section
        ref={heroRef}
        className="h-screen flex flex-col relative overflow-hidden bg-black"
      >
        {/* Animated light lines background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute h-px w-[45%] animate-[pulse_4s_ease-in-out_infinite]"
            style={{ top: '18%', left: '8%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
          <div className="absolute h-px w-[55%] animate-[pulse_5s_ease-in-out_infinite_0.5s]"
            style={{ top: '35%', left: '25%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
          <div className="absolute h-px w-[35%] animate-[pulse_6s_ease-in-out_infinite_1s]"
            style={{ top: '55%', right: '10%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />
          <div className="absolute h-px w-[50%] animate-[pulse_4.5s_ease-in-out_infinite_1.5s]"
            style={{ top: '75%', left: '15%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
          <div className="absolute h-px w-[30%] animate-[pulse_5.5s_ease-in-out_infinite_2s]"
            style={{ top: '88%', right: '20%', background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.04), transparent)' }} />
        </div>

        <ShieldBackground />

        <Navbar />

        <div className="flex-1 flex flex-col justify-center px-8 md:px-20 gap-5 w-full md:max-w-[50%] text-center md:text-left relative z-10">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-6">
              <span>&larr;</span> Volver al inicio
            </Link>
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">01 — GRC Estratégico</p>
            <div className="flex items-end gap-4 mb-3">
              <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">GRC</h1>
              <a href="https://praesys.ai/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full bg-green-500/15 text-green-400 hover:bg-green-500/25 transition-all">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Plataforma activa
              </a>
            </div>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-6">
              Governance &bull; Risk &bull; Compliance
            </p>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">
              Automatizamos y fortalecemos la gestión de cumplimiento normativo de tu organización. Certificaciones estratégicas, resiliencia operativa y auditorías inteligentes.
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-2 pb-8 text-gray-500 text-xs uppercase tracking-widest opacity-50">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gray-500 animate-pulse" />
        </div>
      </section>

      {/* Sections 1-N: Normativas horizontal carousel */}
      <section
        ref={normRef}
        className="h-screen relative overflow-hidden bg-black"
      >
        <div
          className="flex h-full transition-transform duration-700 ease-in-out will-change-transform"
          style={{
            width: `${normativas.length * (isMobile ? 100 : 50)}vw`,
            transform: `translateX(-${activeNormIndex * (isMobile ? 100 : 50)}vw)`,
          }}
        >
          {normativas.map((item, i) => (
            <div
              key={i}
              className="w-screen md:w-[50vw] h-full flex items-center justify-center relative shrink-0 px-8 md:px-16"
              style={{ backgroundColor: item.bg }}
            >
              <div className="max-w-2xl w-full flex flex-col gap-6">
                <div>
                  <p className={`text-sm uppercase tracking-widest mb-2 ${item.descColor}`}>Normativas y marcos</p>
                  <span className="inline-block text-accent text-sm font-medium px-3 py-1 border border-accent/30 rounded-full mb-4">
                    {item.tag}
                  </span>
                  <h2 className={`text-2xl md:text-3xl font-bold tracking-tight mb-3 ${item.textColor}`}>
                    {item.title}
                  </h2>
                  <p className={`text-base leading-relaxed mb-4 ${item.descColor}`}>
                    {item.description}
                  </p>
                </div>

                <ul className="space-y-3">
                  {item.items.map((it, idx) => (
                    <li key={idx} className={`flex items-center gap-3 text-sm md:text-base ${item.itemColor}`}>
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>

                <a href="/#contacto" className={`inline-block self-start border text-sm font-medium px-6 py-2.5 rounded-lg hover:border-accent hover:text-accent transition-all ${item.bg === '#ffffff' || item.bg === '#d4a017' ? 'border-gray-400 text-gray-900' : 'border-white/20 text-white'}`}>
                  Más información
                </a>
              </div>

              {/* Counter */}
              <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 text-sm ${item.descColor}`}>
                {String(i + 1).padStart(2, '0')} / {String(normativas.length).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sections: Soluciones (scroll-driven) */}
      <section
        ref={solucionesRef}
        className="h-screen relative overflow-hidden flex items-center justify-center px-8 md:px-20 bg-black"
      >

        <div className="max-w-6xl w-full relative z-10">
          <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-start">
            {/* Left: header + vertical tabs */}
            <div className="md:w-[280px] shrink-0">
              <p className="text-sm uppercase tracking-widest text-accent mb-3">Soluciones</p>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-white">
                GRC, de principio a fin
              </h2>
              <p className="text-sm mb-8 leading-relaxed text-gray-400">
                Servicios modulares que combinan gobierno, riesgo y cumplimiento para acelerar la adopción y sostener la mejora continua.
              </p>

              {/* Vertical step indicators */}
              <div className="flex flex-row md:flex-col gap-1 flex-wrap">
                {soluciones.map((sol, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-3 px-4 py-3 text-sm transition-all duration-500 ${
                      i === activeSolucion
                        ? 'bg-accent/10 border-l-2 border-accent text-white'
                        : 'border-l-2 text-gray-500 border-white/10'
                    }`}
                  >
                    <span className={`text-xs font-mono ${i === activeSolucion ? 'text-accent' : 'text-gray-600'}`}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {sol.tab}
                  </div>
                ))}
              </div>
            </div>

            {/* Right: active card */}
            <div className="flex-1 relative min-h-[320px] overflow-hidden">
              {soluciones.map((sol, i) => (
                <div
                  key={i}
                  className={`transition-all duration-700 ease-in-out ${
                    i === activeSolucion
                      ? 'opacity-100 translate-y-0 translate-x-0'
                      : i < activeSolucion
                        ? 'opacity-0 -translate-y-full translate-x-0 absolute inset-0 pointer-events-none'
                        : 'opacity-0 translate-y-0 translate-x-full absolute inset-0 pointer-events-none'
                  }`}
                >
                  <div className={`border rounded-2xl p-8 md:p-10 ${sol.cardBorder}`} style={{ backgroundColor: sol.bg }}>
                    <div className="flex items-center gap-4 mb-6">
                      <span className={`text-5xl md:text-6xl font-bold ${sol.bg === '#ffffff' ? 'text-gray-200' : 'text-white/10'}`}>{sol.label.split('#')[1]}</span>
                      <div>
                        <h3 className={`text-2xl md:text-3xl font-bold ${sol.textColor}`}>{sol.tab}</h3>
                        <p className="text-base text-accent">{sol.subtitle}</p>
                      </div>
                    </div>
                    <ul className="space-y-4 mb-8">
                      {sol.items.map((it, idx) => (
                        <li key={idx} className={`flex items-center gap-4 text-sm md:text-base ${sol.itemColor}`}>
                          <span className="w-6 h-6 rounded-full border border-accent/30 flex items-center justify-center shrink-0">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          </span>
                          {it}
                        </li>
                      ))}
                    </ul>
                    <a href="/#contacto" className="inline-block bg-accent text-white text-sm font-medium px-8 py-3 rounded-lg hover:opacity-90 hover:-translate-y-0.5 transition-all">
                      Solicitar información
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              ¿No encuentras lo que necesitas? Diseñamos paquetes a medida con KPIs de avance.
            </p>
            <a href="/#contacto" className="text-accent text-sm font-medium hover:underline whitespace-nowrap">
              Hablar con un consultor &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer ref={ctaRef} />
    </div>
  )
}
