import { useEffect, useRef, useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ShieldBackground from '../components/ShieldBackground'
import SEO from '../components/SEO'
import GeoShape from '../components/GeoShape'
import { isMenuOpen } from '../utils/menuOpen'
import { useLanguage } from '../i18n/LanguageContext'

const services = [
  {
    title: 'CISO as a Service',
    subtitle: 'Nuestro servicio principal de ciberseguridad',
    description: 'Acceso inmediato a liderazgo ejecutivo especializado en ciberseguridad, sin las complejidades de contratación interna. Un equipo multidisciplinar que integra estrategia, gobierno y operaciones de seguridad avanzada.',
    items: [
      'Liderazgo Estratégico: Reporte directo a dirección ejecutiva',
      'Políticas & Governance: Desarrollo de marcos normativos completos',
      'Respuesta a Incidentes: Gestión integral de crisis y recuperación',
      'Experiencia ejecutiva inmediata: +25 años en organizaciones Fortune 500',
    ],
    bg: '#0f1b3d',
    textColor: 'text-white',
    descColor: 'text-blue-200/60',
    itemColor: 'text-blue-100/80',
    shapeColor: 'rgba(255,255,255,0.08)',
    shapes: ['hexagon-outline', 'circle', 'square-outline'],
  },
  {
    title: 'Threat Intelligence',
    subtitle: 'IA predictiva contra amenazas',
    description: 'IA avanzada que identifica patrones de ataque específicos para tu sector. Transforma datos en inteligencia accionable que fortalece tu postura defensiva.',
    items: [
      'Machine learning propietario para detección predictiva',
      'Feeds premium de inteligencia multifuente',
      'Contextualización específica por sector industrial',
      'Fuentes de inteligencia: +50',
    ],
    bg: '#ffffff',
    textColor: 'text-gray-900',
    descColor: 'text-gray-500',
    itemColor: 'text-gray-600',
    shapeColor: 'rgba(0,0,0,0.15)',
    shapes: ['circle-outline', 'square', 'hexagon'],
  },
  {
    title: 'CISO as a Service',
    subtitle: 'Tu Director de Seguridad Virtualizado',
    description: 'Un CISO es el ejecutivo responsable de establecer y mantener la visión, estrategia y programa de seguridad de la información. Es el puente entre el riesgo cibernético y las decisiones de negocio.',
    items: [
      'Desarrollo de estrategia de ciberseguridad',
      'Gestión de riesgos empresariales',
      'Cumplimiento normativo y regulatorio',
      'Comunicación ejecutiva y reporting',
    ],
    bg: '#0a2e1a',
    textColor: 'text-white',
    descColor: 'text-emerald-200/60',
    itemColor: 'text-emerald-100/80',
    shapeColor: 'rgba(255,255,255,0.07)',
    shapes: ['square', 'hexagon-outline', 'circle-outline'],
  },
  {
    title: 'Threat Intelligence',
    subtitle: 'IA Predictiva en Acción',
    description: 'Nuestra plataforma utiliza algoritmos propietarios para correlacionar patrones de amenazas con tu perfil de riesgo específico. Convertimos datos en decisiones.',
    items: [
      'Machine Learning avanzado: detección de amenazas emergentes por sector',
      'Feeds Premium: correlación de +50 fuentes especializadas',
      'Contextualización sectorial: IOCs y TTPs específicos por industria',
      'Normalización con taxonomías STIX/TLP/MITRE ATT&CK',
    ],
    bg: '#2d1b4e',
    textColor: 'text-white',
    descColor: 'text-purple-200/60',
    itemColor: 'text-purple-100/80',
    shapeColor: 'rgba(255,255,255,0.08)',
    shapes: ['hexagon', 'circle-outline', 'square-outline'],
  },
]

const details = [
  {
    tag: 'CISO as a Service',
    title: '¿Qué obtienes exactamente?',
    subtitle: 'Valor tangible desde el primer mes',
    items: [
      'Liderazgo estratégico en ciberseguridad con reporte directo a dirección',
      'Desarrollo e implementación de políticas y procedimientos de seguridad',
      'Gestión integral de riesgos cibernéticos y planes de respuesta a incidentes',
      'Supervisión de cumplimiento normativo (ISO 27001, NIS2, GDPR)',
      'Comunicación ejecutiva: traducimos complejidad técnica en decisiones de negocio',
      'Acceso a equipo especializado en forensia, threat intelligence y respuesta',
    ],
  },
  {
    tag: 'Threat Intelligence',
    title: 'Capacidades Técnicas',
    subtitle: 'Correlación, scoring y contextualización',
    items: [
      'Algoritmos propietarios de correlación y scoring de amenazas',
      'Ingesta de fuentes OSINT, comerciales y comunidades de investigación',
      'Normalización y enriquecimiento con STIX/TLP/MITRE ATT&CK',
      'Cobertura global: monitorización en +150 países',
      'Actualización continua: feeds cada 15 minutos, 24/7',
      'Contextualización por perfil de riesgo específico',
    ],
  },
  {
    tag: 'Impacto',
    title: 'Impacto Organizacional',
    subtitle: 'Protección integral y ventaja competitiva',
    items: [
      'Protección de activos críticos de información',
      'Continuidad del negocio ante ciberincidentes',
      'Confianza reforzada de clientes y stakeholders',
      'Ventaja competitiva sostenible en mercados regulados',
      'Escalamos recursos según necesidades, sin compromisos a largo plazo',
      'Integración con tu equipo interno para transferencia de conocimiento',
    ],
  },
]

const stats = [
  { value: '11s', label: 'Frecuencia de Ataques' },
  { value: '24/7', label: 'Monitoreo SOC' },
  { value: '99.9%', label: 'Prevención de Amenazas' },
  { value: '< 1min', label: 'Tiempo de Respuesta' },
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

export default function CyberPage() {
  const isMobile = useIsMobile()
  const { t } = useLanguage()
  const svcSteps = isMobile ? services.length : services.length - 1
  const detailSteps = details.length
  const totalSections = 1 + svcSteps + detailSteps + 1

  const [sectionIndex, setSectionIndex] = useState(0)
  const currentIndex = useRef(0)
  const lastScrollTime = useRef(0)
  const touchStartY = useRef(0)
  const touchMoved = useRef(false)

  const heroRef = useRef(null)
  const svcRef = useRef(null)
  const detailRef = useRef(null)
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
    } else if (clamped >= 1 && clamped <= svcSteps) {
      target = svcRef.current
    } else if (clamped >= svcSteps + 1 && clamped <= svcSteps + detailSteps) {
      target = detailRef.current
    } else {
      target = footerRef.current
    }

    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
    }
  }, [totalSections, svcSteps, detailSteps])

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

  const activeSvcIndex = sectionIndex >= 1 && sectionIndex <= svcSteps
    ? sectionIndex - 1
    : sectionIndex > svcSteps
      ? svcSteps - 1
      : 0

  const detailStartIndex = svcSteps + 1
  const activeDetailIndex = sectionIndex >= detailStartIndex && sectionIndex < detailStartIndex + detailSteps
    ? sectionIndex - detailStartIndex
    : sectionIndex >= detailStartIndex + detailSteps
      ? detailSteps - 1
      : 0

  return (
    <div>
      <SEO page="cyber" />
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

        <div className="flex-1 flex flex-col justify-center px-8 md:px-20 gap-5 w-full md:max-w-[50%] text-center md:text-left relative z-10">
          <div>
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white transition-colors mb-6">
              <span>&larr;</span> {t('cyber.back')}
            </Link>
            <p className="text-sm uppercase tracking-[0.3em] text-accent mb-3">{t('cyber.tag')}</p>
            <h1 className="text-4xl md:text-7xl font-bold text-white tracking-tight mb-3">
              Ciberseguridad
            </h1>
            <p className="text-sm md:text-base text-gray-500 mb-6">
              {t('cyber.subtitle')}
            </p>
            <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              {t('cyber.services')}
            </p>
          </div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-2 pb-8 text-gray-500 text-xs uppercase tracking-widest opacity-50">
          <span>{t('cyber.scroll')}</span>
          <div className="w-px h-8 bg-gray-500 animate-pulse" />
        </div>
      </section>

      {/* Services horizontal carousel */}
      <section
        ref={svcRef}
        className="h-screen relative overflow-hidden bg-black"
      >
        <div
          className="flex h-full transition-transform duration-700 ease-in-out will-change-transform"
          style={{
            width: `${services.length * (isMobile ? 100 : 50)}vw`,
            transform: `translateX(-${activeSvcIndex * (isMobile ? 100 : 50)}vw)`,
          }}
        >
          {services.map((svc, i) => (
            <div
              key={i}
              className="w-screen md:w-[50vw] h-full flex items-center justify-center relative shrink-0 px-8 md:px-16"
              style={{ backgroundColor: svc.bg }}
            >
              {/* Decorative light lines */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute h-px w-[40%] animate-[pulse_5s_ease-in-out_infinite]"
                  style={{ top: '15%', left: '5%', background: `linear-gradient(90deg, transparent, ${svc.shapeColor}, transparent)` }} />
                <div className="absolute h-px w-[30%] animate-[pulse_6s_ease-in-out_infinite_1s]"
                  style={{ top: '85%', right: '10%', background: `linear-gradient(90deg, transparent, ${svc.shapeColor}, transparent)` }} />
              </div>

              {/* Top-left tag */}
              <div className="absolute top-8 left-8 md:top-12 md:left-16 flex items-center gap-3">
                <span className={`text-xs font-mono uppercase tracking-widest ${svc.bg === '#ffffff' || svc.bg === '#d4a017' ? 'text-gray-400' : 'text-white/20'}`}>
                  {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                </span>
                <div className={`w-12 h-px ${svc.bg === '#ffffff' || svc.bg === '#d4a017' ? 'bg-gray-300' : 'bg-white/10'}`} />
              </div>

              <div className="max-w-2xl w-full flex flex-col gap-5">
                <div>
                  <p className={`text-sm uppercase tracking-widest mb-2 ${svc.descColor}`}>{t('cyber.svcTag')}</p>
                  <h2 className={`text-2xl md:text-3xl font-bold tracking-tight mb-2 ${svc.textColor}`}>
                    {svc.title}
                  </h2>
                  <div className={`h-px w-16 mb-4 ${svc.bg === '#ffffff' || svc.bg === '#d4a017' ? 'bg-gray-300' : 'bg-white/10'}`} />
                  <p className="text-sm text-accent mb-3">{svc.subtitle}</p>
                  <p className={`text-sm md:text-base leading-relaxed mb-4 ${svc.descColor}`}>
                    {svc.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {svc.items.map((it, idx) => (
                    <li key={idx} className={`flex items-center gap-3 text-sm ${svc.itemColor}`}>
                      <span className="w-5 h-5 rounded-full border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </span>
                      {it}
                    </li>
                  ))}
                </ul>

              </div>

              {/* Geometric shapes */}
              <div className="absolute bottom-8 right-8 md:bottom-12 md:right-12 opacity-60">
                <div className="flex flex-col items-end -space-y-3">
                  <div className="transition-transform duration-300 ease-out" style={{ transform: `rotate(${activeSvcIndex * (i % 2 === 0 ? 90 : -90)}deg)` }}>
                    <GeoShape type={svc.shapes[0]} color={svc.shapeColor} size={60} />
                  </div>
                  <div className="flex items-end -space-x-5">
                    <div className="transition-transform duration-300 ease-out" style={{ transform: `rotate(${activeSvcIndex * (i % 2 === 0 ? -90 : 90)}deg)` }}>
                      <GeoShape type={svc.shapes[1]} color={svc.shapeColor} size={75} />
                    </div>
                    <div className="transition-transform duration-300 ease-out" style={{ transform: `rotate(${activeSvcIndex * 90}deg)` }}>
                      <GeoShape type={svc.shapes[2]} color={svc.shapeColor} size={90} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Counter */}
              <div className={`absolute bottom-12 left-1/2 -translate-x-1/2 text-sm ${svc.descColor}`}>
                {String(i + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detail sections (scroll-driven) */}
      <section
        ref={detailRef}
        className="h-screen relative overflow-hidden bg-black flex items-center justify-center px-8 md:px-20"
      >
        {/* Particle cloud dimmed */}
        <div className="absolute inset-0 z-0 opacity-20">
          <ShieldBackground />
        </div>

        {/* Light lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute h-px w-[40%] transition-all duration-[1500ms] ease-in-out"
            style={{ top: `${15 + activeDetailIndex * 12}%`, left: `${8 + activeDetailIndex * 20}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)' }} />
          <div className="absolute h-px w-[50%] transition-all duration-[1500ms] ease-in-out"
            style={{ top: `${70 - activeDetailIndex * 10}%`, right: `${5 + activeDetailIndex * 15}%`,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)' }} />
        </div>

        <div className="max-w-6xl w-full relative z-10 flex flex-col md:flex-row gap-10 md:gap-20 items-center">
          {/* Left: active detail */}
          <div className="flex-1 relative min-h-[400px] overflow-hidden">
            {details.map((det, i) => (
              <div
                key={i}
                className={`transition-all duration-700 ease-in-out ${
                  i === activeDetailIndex
                    ? 'opacity-100 translate-y-0 translate-x-0'
                    : i < activeDetailIndex
                      ? 'opacity-0 -translate-y-full absolute inset-0 pointer-events-none'
                      : 'opacity-0 translate-x-full absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-5xl md:text-6xl font-bold text-white/5">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <p className="text-sm uppercase tracking-widest text-accent">{det.tag}</p>
                    <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
                      {det.title}
                    </h2>
                  </div>
                </div>
                <p className="text-base text-gray-400 mb-6 pl-1 border-l-2 border-accent/30 ml-1">{det.subtitle}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                  {det.items.map((it, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 border border-white/5 rounded-lg hover:border-white/10 transition-colors">
                      <span className="w-6 h-6 rounded-full border border-accent/30 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      </span>
                      <span className="text-sm text-gray-300">{it}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right: step indicators */}
          <div className="md:w-[280px] shrink-0 flex flex-col gap-3">
            {details.map((det, i) => (
              <div
                key={i}
                className={`p-4 border transition-all duration-500 ${
                  i === activeDetailIndex
                    ? 'border-accent/50 bg-accent/5'
                    : 'border-white/5 opacity-40'
                }`}
              >
                <p className={`text-xs font-medium mb-1 ${i === activeDetailIndex ? 'text-accent' : 'text-gray-600'}`}>
                  {det.tag}
                </p>
                <p className={`text-sm font-bold ${i === activeDetailIndex ? 'text-white' : 'text-gray-500'}`}>
                  {det.title}
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
