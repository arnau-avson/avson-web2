import { useEffect, useRef, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './components/Navbar'
import Typewriter from './components/Typewriter'
import BubblesBackground from './components/BubblesBackground'
import SplashScreen from './components/SplashScreen'
import Footer from './components/Footer'
import './App.css'

const panels = [
  {
    title: 'GRC Estratégico',
    subtitle: 'Gobierno, Riesgo y Cumplimiento Inteligente',
    bullets: [
      'Certificaciones estratégicas ISO 27001, ENS, NIS2, DORA',
      'Resiliencia operativa ISO 22301 con enfoque predictivo',
      'Auditorías inteligentes y gestión proactiva de riesgos',
    ],
    bg: '#0f1b3d',
    textColor: 'text-white',
    subtitleColor: 'text-blue-300/60',
    bulletColor: 'text-blue-100/70',
    iconColor: 'text-white/5',
    icon: '01',
    link: '/grc',
  },
  {
    title: 'Inteligencia Artificial Aplicada',
    subtitle: 'IA Real, No Hype',
    bullets: [
      'Agentes autónomos para procesos críticos',
      'Plataformas adaptativas con aprendizaje continuo',
      'Ciberinteligencia predictiva y preventiva',
    ],
    bg: '#ffffff',
    textColor: 'text-gray-900',
    subtitleColor: 'text-gray-500',
    bulletColor: 'text-gray-600',
    iconColor: 'text-gray-200',
    icon: '02',
  },
  {
    title: 'Ciberseguridad Ejecutiva',
    subtitle: 'CISO as a Service + Threat Intelligence',
    bullets: [
      'CISO as a Service con experiencia C-Suite real',
      'Threat Intelligence potenciado por IA propia',
      'Respuesta adaptativa a amenazas emergentes',
    ],
    bg: '#0a2e1a',
    textColor: 'text-white',
    subtitleColor: 'text-emerald-300/60',
    bulletColor: 'text-emerald-100/70',
    iconColor: 'text-white/5',
    icon: '03',
  },
  {
    title: 'Inteligencia & Defensa',
    subtitle: 'Capacidades soberanas para seguridad nacional',
    bullets: [
      'Análisis de amenazas para Defensa, CNI y entornos clasificados',
      'Plataformas OSINT e inteligencia de fuentes abiertas con IA',
      'Sistemas de apoyo a la decisión en tiempo real para operaciones críticas',
    ],
    bg: '#d4a017',
    textColor: 'text-gray-900',
    subtitleColor: 'text-gray-700',
    bulletColor: 'text-gray-800',
    iconColor: 'text-black/5',
    icon: '04',
  },
]

const circleQuarters = [
  {
    label: 'GRC',
    color: '#ffffff',
    border: '#a3a3a3',
    title: 'Governance, Risk & Compliance',
    description: 'Gestión integral del cumplimiento normativo, evaluación de riesgos y gobernanza corporativa en una sola plataforma automatizada.',
    status: 'Plataforma disponible',
    available: true,
    glow: 'rgba(170, 59, 255, 0.15)',
  },
  {
    label: 'AI',
    color: '#737373',
    border: '#404040',
    title: 'Artificial Intelligence',
    description: 'Modelos de IA propios que analizan, clasifican y predicen riesgos regulatorios antes de que se materialicen.',
    status: 'Disponible',
    available: true,
    glow: 'rgba(59, 130, 246, 0.15)',
  },
  {
    label: 'Cyber',
    color: '#ffffff',
    border: '#a3a3a3',
    title: 'Cybersecurity',
    description: 'Protección proactiva de activos digitales con monitorización continua, detección de amenazas y respuesta automatizada.',
    status: 'En desarrollo',
    available: false,
    glow: 'rgba(6, 182, 212, 0.15)',
  },
  {
    label: 'Data',
    color: '#737373',
    border: '#404040',
    title: 'Data Intelligence',
    description: 'Análisis avanzado de datos para la toma de decisiones estratégicas con dashboards en tiempo real e informes automatizados.',
    status: 'En desarrollo',
    available: false,
    glow: 'rgba(16, 185, 129, 0.15)',
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

function App() {
  const [showSplash, setShowSplash] = useState(true)
  const isMobile = useIsMobile()
  const panelSteps = isMobile ? panels.length : panels.length - 1
  const totalSections = 1 + panelSteps + circleQuarters.length + 2

  const [sectionIndex, setSectionIndex] = useState(0)
  const currentIndex = useRef(0)
  const lastScrollTime = useRef(0)
  const touchStartY = useRef(0)
  const touchMoved = useRef(false)
  const heroRef = useRef(null)
  const panelsContainerRef = useRef(null)
  const circleRef = useRef(null)
  const formRef = useRef(null)
  const footerRef = useRef(null)

  const goToSection = useCallback((index) => {
    const clamped = Math.max(0, Math.min(totalSections - 1, index))
    if (clamped === currentIndex.current) return

    lastScrollTime.current = Date.now()
    currentIndex.current = clamped
    setSectionIndex(clamped)

    let target
    if (clamped === 0) {
      target = heroRef.current
    } else if (clamped >= 1 && clamped <= panelSteps) {
      target = panelsContainerRef.current
    } else if (clamped >= panelSteps + 1 && clamped <= panelSteps + circleQuarters.length) {
      target = circleRef.current
    } else if (clamped === panelSteps + circleQuarters.length + 1) {
      target = formRef.current
    } else {
      target = footerRef.current
    }

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [totalSections, panelSteps])

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

  // Horizontal panels: which step (0 to panelSteps-1)
  const activePanelIndex = sectionIndex >= 1 && sectionIndex <= panelSteps
    ? sectionIndex - 1
    : sectionIndex > panelSteps
      ? panelSteps - 1
      : 0

  // Circle: which step (0-3)
  const circleStartIndex = panelSteps + 1
  const circleStep = sectionIndex >= circleStartIndex && sectionIndex < circleStartIndex + circleQuarters.length
    ? sectionIndex - circleStartIndex
    : sectionIndex >= circleStartIndex + circleQuarters.length
      ? circleQuarters.length - 1
      : 0

  return (
    <div>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      {/* Section 0: Hero */}
      <section
        ref={heroRef}
        className="h-screen flex flex-col relative overflow-hidden bg-black"
      >
        <BubblesBackground />

        <Navbar />

        <div className="relative z-10 flex-1 flex flex-col justify-center items-center md:items-start px-8 md:px-20 gap-5 w-full md:max-w-[50%] text-center md:text-left">
          <h1 className="text-[clamp(56px,10vw,120px)] font-bold leading-none tracking-[-3px] text-white">
            avson
          </h1>
          <Typewriter
            words={['Governance', 'Artificial Intelligence', 'Cybersecurity']}
            className="text-xl md:text-3xl font-semibold text-gray-400 h-10 md:h-12"
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-2 pb-8 text-gray-500 text-xs uppercase tracking-widest opacity-50">
          <span>Scroll</span>
          <div className="w-px h-8 bg-gray-500 animate-pulse" />
        </div>
      </section>

      {/* Sections 1-4: Horizontal carousel */}
      <section
        ref={panelsContainerRef}
        className="h-screen relative overflow-hidden bg-black"
      >
        <div
          className="flex h-full transition-transform duration-700 ease-in-out will-change-transform"
          style={{
            width: `${panels.length * (isMobile ? 100 : 50)}vw`,
            transform: `translateX(-${activePanelIndex * (isMobile ? 100 : 50)}vw)`,
          }}
        >
          {panels.map((panel, i) => (
            <div
              key={i}
              className="w-screen md:w-[50vw] h-full flex items-center justify-center relative shrink-0"
              style={{ backgroundColor: panel.bg }}
            >
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 md:gap-20 px-8 md:px-16 max-w-3xl w-full">
                <div className={`text-[80px] md:text-[140px] font-bold leading-none tracking-tighter ${panel.iconColor}`}>
                  {panel.icon}
                </div>
                <div className="flex-1 text-left">
                  <h2 className={`text-2xl md:text-4xl font-bold tracking-tight mb-2 ${panel.textColor}`}>
                    {panel.title}
                  </h2>
                  {panel.subtitle && (
                    <p className={`text-sm md:text-base mb-5 ${panel.subtitleColor}`}>{panel.subtitle}</p>
                  )}
                  {panel.bullets ? (
                    <ul className="space-y-3">
                      {panel.bullets.map((b, idx) => (
                        <li key={idx} className={`flex items-start gap-3 text-sm md:text-base leading-relaxed ${panel.bulletColor}`}>
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className={`text-sm md:text-base max-w-lg leading-relaxed ${panel.bulletColor}`}>
                      {panel.description}
                    </p>
                  )}
                  {panel.link ? (
                    <Link to={panel.link} className={`inline-block mt-6 border text-sm font-medium px-6 py-2.5 rounded-lg hover:border-accent hover:text-accent transition-all ${panel.bg === '#ffffff' ? 'border-gray-300 text-gray-900' : 'border-white/20 text-white'}`}>
                      Saber más
                    </Link>
                  ) : (
                    <a href="#contacto" className={`inline-block mt-6 border text-sm font-medium px-6 py-2.5 rounded-lg hover:border-accent hover:text-accent transition-all ${panel.bg === '#ffffff' ? 'border-gray-300 text-gray-900' : 'border-white/20 text-white'}`}>
                      Saber más
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* Sections 5-8: Circle rotation */}
      <section
        ref={circleRef}
        className="h-screen relative overflow-hidden bg-black flex items-center justify-center px-8 md:px-20"
      >
        {/* Animated horizontal light lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute h-px w-[40%] transition-all duration-[1500ms] ease-in-out"
            style={{ top: `${12 + circleStep * 8}%`, left: `${5 + circleStep * 20}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
          <div className="absolute h-px w-[55%] transition-all duration-[1500ms] ease-in-out"
            style={{ top: `${25 + circleStep * 15}%`, left: `${15 + circleStep * 12}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.09), transparent)' }} />
          <div className="absolute h-px w-[35%] transition-all duration-[1500ms] ease-in-out"
            style={{ top: `${38 + circleStep * 5}%`, right: `${10 + circleStep * 18}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />
          <div className="absolute h-px w-[45%] transition-all duration-[1500ms] ease-in-out"
            style={{ top: `${52 - circleStep * 6}%`, left: `${20 - circleStep * 5}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)' }} />
          <div className="absolute h-px w-[30%] transition-all duration-[1500ms] ease-in-out"
            style={{ top: `${65 - circleStep * 10}%`, right: `${5 + circleStep * 15}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
          <div className="absolute h-px w-[50%] transition-all duration-[1500ms] ease-in-out"
            style={{ top: `${78 - circleStep * 12}%`, left: `${8 + circleStep * 10}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent)' }} />
          <div className="absolute h-px w-[25%] transition-all duration-[1500ms] ease-in-out"
            style={{ top: `${88 - circleStep * 8}%`, right: `${15 + circleStep * 8}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full gap-8 md:gap-20">
          {/* Left: text content */}
          <div className="flex-1 relative min-h-[150px] md:min-h-[200px] text-center md:text-left">
            {circleQuarters.map((q, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ${
                  i === circleStep
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8 pointer-events-none absolute inset-0'
                }`}
              >
                <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">{q.label}</p>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
                  {q.title}
                </h2>
                <p className="text-lg md:text-xl text-gray-400 max-w-lg leading-relaxed">
                  {q.description}
                </p>
                <span className={`inline-block mt-5 text-sm font-medium px-4 py-1.5 rounded-full ${
                  q.available
                    ? 'bg-green-500/15 text-green-400'
                    : 'bg-yellow-500/15 text-yellow-400'
                }`}>
                  {q.status}
                </span>
              </div>
            ))}
          </div>

          {/* Right: circle */}
          <div className="relative w-[200px] h-[200px] md:w-[380px] md:h-[380px] shrink-0">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full transition-transform duration-700 ease-in-out will-change-transform"
              style={{ transform: `rotate(${circleStep * 90}deg)` }}
            >
              {circleQuarters.map((q, i) => {
                const r = 70
                const gap = -0.5
                const startAngle = i * 90 + gap / 2
                const endAngle = (i + 1) * 90 - gap / 2
                const startRad = (startAngle - 90) * Math.PI / 180
                const endRad = (endAngle - 90) * Math.PI / 180
                const x1 = 100 + r * Math.cos(startRad)
                const y1 = 100 + r * Math.sin(startRad)
                const x2 = 100 + r * Math.cos(endRad)
                const y2 = 100 + r * Math.sin(endRad)
                const d = `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`
                return (
                  <g key={i}>
                    <path d={d} fill="none" stroke={q.border} strokeWidth="34" strokeLinecap="butt" />
                    <path d={d} fill="none" stroke={q.color} strokeWidth="24" strokeLinecap="butt" />
                  </g>
                )
              })}
            </svg>
          </div>
        </div>

        {/* Step indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {circleQuarters.map((_, j) => (
            <div
              key={j}
              className={`h-1 rounded-full transition-all duration-500 ${
                j === circleStep ? 'w-8 bg-accent' : 'w-3 bg-white/20'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Section 9: Contact form */}
      <section
        ref={formRef}
        id="contacto"
        className="h-screen bg-black flex items-center justify-center px-6 md:px-20"
      >
        <div className="max-w-2xl w-full">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3 text-center">
              Contacto
            </h2>
            <p className="text-gray-400 mb-10 text-center">
              Cuéntanos sobre tu proyecto y te respondemos en menos de 24h.
            </p>
          <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1">
                <label className="text-sm text-gray-400 mb-1.5 block">Nombre completo <span className="text-accent">*</span></label>
                <input
                  type="text"
                  placeholder="Tu nombre"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm text-gray-400 mb-1.5 block">Email corporativo <span className="text-accent">*</span></label>
                <input
                  type="email"
                  placeholder="nombre@empresa.com"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="flex-1">
                <label className="text-sm text-gray-400 mb-1.5 block">Organización</label>
                <input
                  type="text"
                  placeholder="Nombre de tu organización"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-accent transition-colors"
                />
              </div>
              <div className="flex-1">
                <label className="text-sm text-gray-400 mb-1.5 block">Área de interés estratégico</label>
                <select
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-500 outline-none focus:border-accent transition-colors appearance-none"
                >
                  <option value="">Selecciona área estratégica</option>
                  <option value="grc">GRC Estratégico</option>
                  <option value="ai">Inteligencia Artificial Aplicada</option>
                  <option value="cyber">Ciberseguridad Ejecutiva</option>
                  <option value="intel">Inteligencia & Defensa</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-1.5 block">Desafíos estratégicos</label>
              <textarea
                placeholder="Describe brevemente los retos de tu organización"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-accent transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-accent text-white py-3.5 rounded-lg text-base font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all mt-2"
            >
              Enviar mensaje
            </button>
          </form>
          </div>
        </div>
      </section>

      {/* Section 10: Footer */}
      <Footer ref={footerRef} />
    </div>
  )
}

export default App
