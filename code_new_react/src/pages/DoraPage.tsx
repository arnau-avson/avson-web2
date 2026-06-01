import { useState, useEffect, FormEvent } from 'react'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    quote: '"Llevabamos dos anos perdiendo licitaciones por no tener el ENS. Avson nos lo resolvio en 9 semanas. Al siguiente concurso, ganamos el contrato."',
    author: '-- Director de Sistemas · Integradora TIC, Madrid',
    result: 'ENS Media',
  },
  {
    quote: '"Otros consultores nos decian un ano. Avson lo hizo en 14 semanas y superamos la auditoria a la primera, sin una sola no conformidad."',
    author: '-- CISO · Proveedor cloud del sector publico',
    result: 'ENS Alta + ISO 27001',
  },
  {
    quote: '"Un cliente enterprise nos exigia la ISO 27001 para renovar el contrato. La certificamos en cuatro meses y medio sin parar el negocio."',
    author: '-- CTO · Empresa de software de gestion',
    result: 'ISO 27001',
  },
  {
    quote: '"Despues del ransomware de 2023 la direccion quiso ISO 22301. Avson monto el plan de continuidad y certificamos sin sobresaltos."',
    author: '-- Responsable de Riesgos · Servicios financieros',
    result: 'ISO 22301',
  },
  {
    quote: '"Somos proveedores TIC de tres bancos. Cuando entro DORA nos pidieron evidencias y Avson demostro que el 60% ya estaba hecho con el ENS."',
    author: '-- CISO · Proveedor financiero',
    result: 'DORA',
  },
  {
    quote: '"Lo que nos decidio fue la garantia por escrito. Cumplieron el plazo y el presupuesto que firmamos, sin una sola sorpresa."',
    author: '-- CEO · Consultora tecnologica',
    result: 'ENS Basica',
  },
]

export default function DoraPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = testimonials.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(interval)
  }, [totalSlides])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const handleHeroSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const nombre = formData.get('nombre') as string
    const email = formData.get('email') as string
    window.location.href = '/contacto?nombre=' + encodeURIComponent(nombre || '') + '&email=' + encodeURIComponent(email || '')
  }

  return (
    <>
{/* HERO */}
<section className="section section--pearl" style={{paddingTop:'120px',paddingBottom:'64px'}}>
  <div className="container">
    <div className="hero-conv">

      <div>
        <span className="label-tag" style={{color:'#dc2626'}}>&#x26A0; DORA · En vigor desde enero 2025</span>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(40px,5.2vw,68px)',fontWeight:300,color:'var(--navy)',lineHeight:1.08,margin:'14px 0 18px'}}>
          Resiliencia digital<br /><em>obligatoria en finanzas.</em>
        </h1>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',lineHeight:1.6,color:'var(--text-body)',maxWidth:'520px',margin:0}}>
          DORA ya es obligatorio para entidades financieras y sus proveedores TIC. <strong style={{color:'var(--navy)'}}>Si ya tienes ENS + ISO 27001, el 70% esta cubierto.</strong>
        </p>

        <div className="hero-conv__kpis">
          <div className="hero-conv__kpi"><strong>355+</strong><span>empresas certificadas</span></div>
          <div className="hero-conv__kpi"><strong>100%</strong><span>tasa de exito</span></div>
          <div className="hero-conv__kpi"><strong>4.9&#x2605;</strong><span>valoracion clientes</span></div>
        </div>

        <div style={{display:'inline-flex',alignItems:'center',gap:'8px',border:'1px solid #C9A84C',padding:'9px 16px',borderRadius:'8px'}}>
          <span style={{fontSize:'16px',color:'#C9A84C'}}>&#x2726;</span>
          <span style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',fontWeight:600,letterSpacing:'0.06em',textTransform:'uppercase',color:'#1A2744'}}>Garantia de exito al 100% por escrito</span>
        </div>

        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:1.6,margin:'22px 0 0',maxWidth:'480px'}}>
          <span style={{color:'#C9A84C',letterSpacing:'1px'}}>&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</span><br />
          <em>"Somos proveedores TIC de tres bancos. Cuando entro DORA nos pidieron evidencias y Avson nos demostro que el 60% ya estaba con el ENS."</em> -- CISO, proveedor financiero
        </p>
      </div>

      <div style={{background:'#fff',border:'1px solid #E5E5E0',borderRadius:'14px',padding:'30px',boxShadow:'0 18px 50px rgba(26,39,68,0.12)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:700,color:'#16a34a',margin:'0 0 4px'}}>&#x1F7E2; Te respondemos hoy</p>
        <p style={{fontFamily:'var(--font-serif)',fontSize:'26px',color:'var(--navy)',margin:'0 0 4px'}}>Pide tu presupuesto</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',margin:'0 0 18px'}}>Gratuito · Sin compromiso · En 30 min sabes que necesitas</p>
        <form onSubmit={handleHeroSubmit} style={{display:'flex',flexDirection:'column',gap:'11px'}}>
          <input type="text" name="nombre" placeholder="Tu nombre *" required style={{padding:'13px 16px',border:'1.5px solid #E5E5E0',borderRadius:'8px',fontFamily:'var(--font-sans)',fontSize:'15px',color:'#1A2744',outline:'none'}} />
          <input type="email" name="email" placeholder="Tu email *" required style={{padding:'13px 16px',border:'1.5px solid #E5E5E0',borderRadius:'8px',fontFamily:'var(--font-sans)',fontSize:'15px',color:'#1A2744',outline:'none'}} />
          <div style={{display:'flex',gap:'8px',alignItems:'flex-start'}}>
            <input type="checkbox" required style={{width:'15px',height:'15px',flexShrink:0,marginTop:'3px',accentColor:'#1A2744'}} />
            <label style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'#7A8499',lineHeight:1.4}}>Al enviar, acepto que Avson me contacte para responder mi consulta. <Link to="/privacidad" target="_blank" style={{color:'#1A2744'}}>Politica de privacidad</Link></label>
          </div>
          <button type="submit" className="v3-btn v3-btn--gold v3-btn--full v3-btn--xl v3-btn--pulse">Quiero adecuarme a DORA &#x2192;</button>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'#B0B8C4',textAlign:'center',margin:0}}>&#x1F512; Gratuito · Sin compromiso · Confidencial</p>
        </form>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',textAlign:'center',margin:'14px 0 0'}}>&#191;Prefieres escribirnos? <a href="mailto:hello@avson.eu" style={{color:'var(--navy)',fontWeight:600}}>hello@avson.eu</a></p>
      </div>

    </div>
  </div>
</section>

{/* CARRUSEL OPINIONES */}
<section className="section section--white">
  <div className="container">
    <span className="label-tag" style={{display:'block',textAlign:'center'}}>Opiniones de clientes</span>
    <h2 className="section-title" style={{textAlign:'center',maxWidth:'640px',margin:'6px auto 0'}}>Lo que dicen quienes<br /><em>ya estan certificados.</em></h2>
    <div className="tcar" style={{marginTop:'36px'}}>
      <button className="tcar__arrow tcar__arrow--prev" aria-label="Anterior" onClick={prevSlide}>&#x2039;</button>
      <button className="tcar__arrow tcar__arrow--next" aria-label="Siguiente" onClick={nextSlide}>&#x203A;</button>
      <div className="tcar__view">
        <div className="tcar__track" style={{transform:`translateX(-${currentSlide * 100}%)`}}>
          {testimonials.map((t, i) => (
            <div className="tcar__slide" key={i}>
              <div className="tcar__card">
                <div className="tcar__stars">&#x2605;&#x2605;&#x2605;&#x2605;&#x2605;</div>
                <p className="tcar__quote">{t.quote}</p>
                <p className="tcar__author">{t.author}</p>
                <p className="tcar__result">{t.result} &#x2713;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="tcar__dots">
        {testimonials.map((_, i) => (
          <button
            key={i}
            className={`tcar__dot${i === currentSlide ? ' active' : ''}`}
            aria-label={`Opinion ${i + 1}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  </div>
</section>

{/* PROCESO */}
<section className="section section--pearl" id="proceso">
  <div className="container">
    <span className="label-tag">Nuestro proceso</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'520px'}}>De la brecha al cumplimiento<br /><em>en 4-6 meses.</em></h2>
    <div style={{display:'flex',flexDirection:'column',gap:0,marginTop:'52px'}}>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0,borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 1-2</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 01</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Analisis de alcance y gap analysis DORA</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Determinamos si la organizacion esta en el ambito de DORA, que clasificacion le corresponde (si aplica proporcionalidad) y realizamos un gap analysis exhaustivo de los cinco pilares del reglamento. Identificamos que controles y procesos ya estan cubiertos por los marcos existentes y que gaps especificos de DORA deben abordarse.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0,borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 3-6</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 02</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Plan de adecuacion y priorizacion</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Disenamos el plan de adecuacion con los gaps identificados, priorizados por riesgo regulatorio y operativo. Asignamos responsables, plazos y recursos. El plan incluye la hoja de ruta para los cinco pilares de DORA, con especial atencion a la gestion del riesgo TIC, la clasificacion de incidentes y el programa de pruebas de resiliencia.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0,borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 7-16</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 03</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Implementacion de los cinco pilares</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Implementamos los controles y procesos especificos de DORA: marco de gestion del riesgo TIC, procedimientos de clasificacion y notificacion de incidentes, programa de pruebas de resiliencia, inventario y due diligence de proveedores TIC, revision y actualizacion de contratos con clausulas DORA, y establecimiento del proceso de intercambio de informacion si aplica.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0,borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 17-20</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 04</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Pruebas de resiliencia y simulacros</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Disenamos y ejecutamos el programa de pruebas de resiliencia operacional digital exigido por DORA: pruebas de vulnerabilidades tecnicas, ejercicios de respuesta a incidentes, y simulacros de continuidad. Para entidades que requieren TLPT, coordinamos con proveedores certificados. Toda la actividad de testing queda documentada como evidencia de cumplimiento.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 21-24</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 05</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Validacion y reporte de conformidad</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Realizamos una revision interna de conformidad con los requisitos de DORA y preparamos la documentacion de evidencia. Avson elabora el informe de estado de adecuacion que puede presentarse al regulador y al organo de gobierno. Establecemos el proceso de monitorizacion continua y el calendario de revisiones periodicas para mantener el cumplimiento en el tiempo.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* QUE ES DORA */}
<section className="section section--white" id="que-es">
  <div className="container">
    <span className="label-tag">DORA · Que es</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'640px'}}>El reglamento europeo que hace<br /><em>obligatoria la resiliencia digital.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'var(--text-body)',maxWidth:'680px',marginBottom:'52px'}}>
      DORA (Digital Operational Resilience Act), formalmente el Reglamento (UE) 2022/2554, es el marco regulatorio europeo que establece requisitos uniformes de resiliencia operacional digital para el sector financiero. Su objetivo es garantizar que las entidades financieras y sus proveedores tecnologicos puedan resistir, responder y recuperarse ante interrupciones e incidentes TIC graves. El reglamento se estructura en torno a cinco pilares fundamentales que abordan el ciclo completo de la resiliencia digital.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',color:'#fff'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'40px',fontWeight:300,color:'var(--gold)',lineHeight:1}}>01</span>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'#fff'}}>Gestion del riesgo TIC</h3>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'rgba(255,255,255,0.75)'}}>Marco formal de gestion del riesgo tecnologico con politicas, procedimientos y herramientas documentadas. Incluye la identificacion y clasificacion de activos TIC, la gestion de riesgos de terceros, las estrategias de proteccion y las capacidades de deteccion. El organo de direccion debe aprobar el marco y asumir responsabilidad sobre el.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'40px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'40px',fontWeight:300,color:'var(--gold)',lineHeight:1}}>02</span>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'var(--navy)'}}>Gestion y notificacion de incidentes TIC</h3>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Proceso estructurado de clasificacion, gestion y notificacion de incidentes TIC significativos. Los plazos de notificacion a los reguladores son estrictos: alerta temprana en 4 horas desde la deteccion, notificacion completa en 24 horas, e informe final en 1 mes. La clasificacion de incidentes como "mayor" o "menor" determina las obligaciones de reporte.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'40px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'40px',fontWeight:300,color:'var(--gold)',lineHeight:1}}>03</span>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'var(--navy)'}}>Pruebas de resiliencia operacional digital</h3>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Programa de pruebas periodicas que incluye pruebas de vulnerabilidades, ejercicios de continuidad y, para entidades de mayor tamano e impacto sistemico, Threat-Led Penetration Testing (TLPT). Las TLPT son simulaciones de ataques reales dirigidos por inteligencia de amenazas y deben ser realizadas por proveedores certificados. La frecuencia y el alcance de las pruebas dependen de la clasificacion de la entidad.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',color:'#fff'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'40px',fontWeight:300,color:'var(--gold)',lineHeight:1}}>04</span>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'#fff'}}>Riesgo de terceros TIC</h3>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'rgba(255,255,255,0.75)'}}>Due diligence exhaustivo de los proveedores TIC, con especial atencion a los considerados criticos. DORA exige contratos con clausulas especificas de seguridad, auditoria y continuidad. Los registros de proveedores TIC deben mantenerse actualizados. Los reguladores europeos (ESAs) pueden designar a ciertos proveedores TIC como "criticos" y supervisarlos directamente.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'40px',gridColumn:'span 2'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'40px',fontWeight:300,color:'var(--gold)',lineHeight:1}}>05</span>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'var(--navy)'}}>Intercambio de informacion sobre amenazas</h3>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)',maxWidth:'700px'}}>DORA promueve el intercambio voluntario de informacion sobre ciberamenazas e incidentes entre entidades financieras a traves de plataformas de threat intelligence. Este mecanismo de colaboracion sectorial tiene como objetivo elevar el nivel colectivo de seguridad del sistema financiero europeo. Las entidades pueden participar en acuerdos de intercambio de informacion sin que ello implique responsabilidad por el uso que otros participantes hagan de dicha informacion.</p>
      </div>
    </div>
  </div>
</section>

{/* QUIEN APLICA */}
<section className="section section--pearl" id="quien-aplica">
  <div className="container">
    <span className="label-tag">&#191;Te aplica DORA?</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'580px'}}>Cumplir DORA en Espana:<br /><em>21 tipos de entidades bajo el alcance del reglamento.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'var(--text-body)',maxWidth:'640px',marginBottom:'52px'}}>
      DORA tiene un alcance intencionadamente amplio. Afecta tanto a las entidades financieras directamente como a sus proveedores tecnologicos. Si tu empresa presta servicios TIC a alguna de las entidades listadas a continuacion, probablemente estas en el ambito del reglamento.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'32px'}}>
      <div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:600,color:'var(--navy)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'24px',paddingBottom:'12px',borderBottom:'2px solid var(--gold)'}}>Entidades financieras obligadas</h3>
        <ul style={{listStyle:'none',padding:0,margin:0,fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:1.7}}>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600}}>&#x2192;</span>Entidades de credito (bancos)</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600}}>&#x2192;</span>Entidades de pago y dinero electronico</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600}}>&#x2192;</span>Empresas de inversion y gestoras</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600}}>&#x2192;</span>Empresas de seguros y reaseguros</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600}}>&#x2192;</span>Intermediarios de seguros</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600}}>&#x2192;</span>Infraestructuras de mercado financiero</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600}}>&#x2192;</span>Repositorios de operaciones</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600}}>&#x2192;</span>Proveedores de servicios de criptoactivos</li>
          <li style={{padding:'8px 0',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600}}>&#x2192;</span>Agencias de calificacion crediticia y mas</li>
        </ul>
      </div>
      <div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:600,color:'var(--navy)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'24px',paddingBottom:'12px',borderBottom:'2px solid var(--gold)'}}>Proveedores TIC en el ambito</h3>
        <div style={{background:'var(--white)',padding:'28px',marginBottom:'16px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'var(--navy)',marginBottom:'8px'}}>Proveedores TIC criticos designados</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.6}}>Las Autoridades Europeas de Supervision (ESAs) pueden designar a proveedores TIC como "criticos" y supervisarlos directamente. Estos proveedores quedan sujetos a supervision directa por los reguladores europeos.</p>
        </div>
        <div style={{background:'var(--white)',padding:'28px',marginBottom:'16px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'var(--navy)',marginBottom:'8px'}}>Proveedores de servicios cloud</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.6}}>Si prestas servicios cloud (IaaS, PaaS, SaaS) a entidades financieras, debes incluir en tus contratos las clausulas DORA y ser capaz de someterte a auditorias. El riesgo de concentracion en pocos proveedores cloud es una preocupacion explicita del reglamento.</p>
        </div>
        <div style={{background:'var(--white)',padding:'28px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'var(--navy)',marginBottom:'8px'}}>Cualquier proveedor TIC subcontratado</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.6}}>DORA establece una cadena de responsabilidad que se extiende a los subcontratistas. Si eres proveedor de un proveedor TIC que sirve a una entidad financiera, puedes quedar dentro del alcance contractual de DORA.</p>
        </div>
      </div>
    </div>
    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'32px 36px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap',marginTop:'48px'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'22px',fontWeight:400,color:'#1A2744',lineHeight:1.3,flex:1,minWidth:'200px'}}>"Si ya tienes ENS, el 45% del trabajo para DORA esta hecho. El resto lo hacemos nosotros."</span>
      <Link to="/packs" className="v3-btn v3-btn--gold">Calcula tu presupuesto &#x2192;</Link>
    </div>
  </div>
</section>

{/* SINERGIA ENS + ISO 27001 */}
<section className="section section--navy" id="sinergias">
  <div className="container">
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>Sinergias con marcos existentes</span>
    <div className="gold-line"></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:300,color:'#fff',lineHeight:1.15,margin:'0 0 32px',maxWidth:'680px'}}>
      ENS + ISO 27001 cubren<br />el 70% de DORA.
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'rgba(255,255,255,0.7)',maxWidth:'640px',marginBottom:'52px'}}>
      DORA no es un marco construido desde cero: se basa en los principios de gestion del riesgo que ISO 27001 y el ENS ya implementan. Si tu organizacion ya tiene alguno de estos marcos, el trabajo de adecuacion a DORA es significativamente menor que empezar desde cero.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginBottom:'48px'}}>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'16px'}}>DORA Pilar 1 &#x2192; ISO 27001</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'#fff',marginBottom:'8px'}}>Gestion del riesgo TIC</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.6)',lineHeight:1.6}}>El analisis de riesgos, las politicas de seguridad y el marco de controles de ISO 27001 cumplen directamente los requisitos del pilar de gestion del riesgo TIC de DORA.</p>
      </div>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'16px'}}>DORA Pilar 2 &#x2192; ENS</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'#fff',marginBottom:'8px'}}>Gestion de incidentes</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.6)',lineHeight:1.6}}>El ENS exige procedimientos de gestion de incidentes de seguridad que cubren buena parte de los requisitos de clasificacion y notificacion de DORA. Solo hay que adaptar los plazos y el formato de reporte al regulador.</p>
      </div>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'16px'}}>DORA Pilar 4 &#x2192; ISO 27001</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'#fff',marginBottom:'8px'}}>Riesgo de terceros</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.6)',lineHeight:1.6}}>Los controles de gestion de proveedores de <Link to="/iso27001" style={{color:'rgba(255,255,255,0.8)'}}>ISO 27001</Link> (Anexo A, bloque organizacional) proporcionan la base del programa de gestion de riesgo de terceros TIC que DORA exige. Se complementan con las clausulas contractuales especificas de DORA.</p>
      </div>
    </div>
    <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)',marginBottom:'40px'}}>
      <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'16px'}}>Lo especifico de DORA (30% adicional)</h3>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>
        <ul style={{listStyle:'none',padding:0,margin:0,fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:1.8}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Threat-Led Penetration Testing (TLPT) para entidades significativas</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Plazos especificos de notificacion de incidentes al regulador financiero</li>
          <li style={{padding:'6px 0'}}>Registro obligatorio de proveedores TIC con clasificacion de criticidad</li>
        </ul>
        <ul style={{listStyle:'none',padding:0,margin:0,fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:1.8}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Clausulas contractuales DORA en acuerdos con proveedores TIC</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Participacion en esquemas de intercambio de informacion sectorial</li>
          <li style={{padding:'6px 0'}}>Informe anual de riesgo TIC al organo de gobierno</li>
        </ul>
      </div>
    </div>
    <Link to="/packs" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff'}}>Ver pack ENS + DORA &#x2192;</Link>
  </div>
</section>

{/* PACKS */}
<section className="section section--white" id="packs">
  <div className="container">
    <span className="label-tag">Packs DORA</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Tu punto de partida<br /><em>determina tu pack.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px',display:'flex',flexDirection:'column'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Empiezo desde cero</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)',marginBottom:'8px'}}>Adecuacion DORA</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'28px'}}>Para entidades sin marcos GRC previos</p>
        <ul style={{listStyle:'none',padding:0,margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.7,flex:1}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Gap analysis completo de los 5 pilares DORA</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Marco de gestion del riesgo TIC</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Procedimientos de notificacion de incidentes</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Inventario y due diligence de proveedores TIC</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Revision de contratos con clausulas DORA</li>
          <li style={{padding:'6px 0'}}>Programa de pruebas de resiliencia</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'8px'}}>Plazo: 5-6 meses</p>
        <Link to="/contacto" className="btn-text">Habla con un experto &#x2192;</Link>
      </div>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',display:'flex',flexDirection:'column',position:'relative'}}>
        <div style={{position:'absolute',top:0,right:0,background:'var(--gold)',padding:'6px 16px',fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:600,color:'#fff',letterSpacing:'0.08em',textTransform:'uppercase'}}>Mas eficiente</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'rgba(255,255,255,0.5)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Ya tengo ENS</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'#fff',marginBottom:'8px'}}>ENS + DORA</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.5)',marginBottom:'28px'}}>Maxima eficiencia aprovechando el ENS</p>
        <ul style={{listStyle:'none',padding:0,margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)',lineHeight:1.7,flex:1}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>ENS como base del marco de riesgo TIC</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Gap analysis especifico de DORA sobre ENS</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Solo los gaps diferenciales de DORA</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Notificacion de incidentes DORA adaptada</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Contratos con clausulas DORA</li>
          <li style={{padding:'6px 0'}}>Ahorro estimado del 40% vs desde cero</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.5)',marginBottom:'8px'}}>Plazo: 3-4 meses adicionales</p>
        <Link to="/contacto" className="v3-btn v3-btn--gold" style={{borderColor:'var(--gold)',color:'#fff',textAlign:'center',justifyContent:'center'}}>Habla con un experto &#x2192;</Link>
      </div>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px',display:'flex',flexDirection:'column'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Maxima cobertura</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)',marginBottom:'8px'}}>ENS + ISO 27001 + DORA</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'28px'}}>La solucion completa para el sector financiero</p>
        <ul style={{listStyle:'none',padding:0,margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.7,flex:1}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>ENS (si aplica) como base</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>ISO 27001 para el mercado privado</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>DORA completo sobre la base anterior</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Un solo equipo, maxima sinergia</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>70% de DORA cubierto por ENS + ISO 27001</li>
          <li style={{padding:'6px 0'}}>La posicion mas solida del mercado</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'8px'}}>Plazo: 7-9 meses</p>
        <Link to="/contacto" className="btn-text">Habla con un experto &#x2192;</Link>
      </div>
    </div>
  </div>
</section>

{/* FAQ */}
<section className="section section--pearl" id="faq">
  <div className="container" style={{maxWidth:'760px'}}>
    <span className="label-tag">Preguntas frecuentes</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Todo lo que necesitas<br /><em>saber sobre DORA.</em></h2>
    <div style={{marginTop:'48px'}}>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;A quien aplica exactamente el Reglamento DORA?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>DORA aplica a 21 tipos de entidades financieras definidas en el articulo 2 del reglamento: entidades de credito, entidades de pago, entidades de dinero electronico, empresas de inversion, proveedores de servicios de criptoactivos, gestoras de fondos de inversion alternativa, fondos de pensiones de empleo, empresas de seguros y reaseguros, intermediarios de seguros, plataformas de financiacion participativa, repositorios de operaciones, infraestructuras de post-negociacion, y otros. Tambien aplica a sus proveedores TIC cuando son considerados criticos por los reguladores europeos, o cuando sus clientes financieros les exigen contractualmente cumplir con DORA.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Cuales son las sanciones por incumplimiento de DORA?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>DORA no establece sanciones uniformes: remite a los regimenes sancionadores de cada estado miembro. En Espana, el Banco de Espana, la CNMV y la DGSFP son los supervisores competentes para sus respectivos tipos de entidades. Para los proveedores TIC criticos designados a nivel europeo, las Autoridades Europeas de Supervision pueden imponer multas de hasta el 1% del volumen de negocio global diario durante un maximo de seis meses consecutivos, o retirar la posibilidad de prestar servicios a entidades financieras de la UE.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Cuando entro en vigor DORA?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>DORA entro en vigor el 17 de enero de 2025. A diferencia de las directivas europeas, DORA es un reglamento de aplicacion directa en todos los estados miembros de la UE, lo que significa que no requiere transposicion nacional y se aplica de forma identica en Espana desde esa fecha. Las entidades financieras y sus proveedores TIC ya deben estar adecuados.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Como se relacionan DORA y NIS2?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>DORA es lex specialis respecto a <Link to="/nis2">NIS2</Link> para el sector financiero. Esto significa que las entidades financieras cumplen con NIS2 cumpliendo DORA, que establece requisitos mas especificos y detallados para el sector. No hay obligacion de cumplir ambos marcos por separado: DORA prevalece para las entidades en su ambito de aplicacion.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Que es el TLPT (Threat-Led Penetration Testing)?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El Threat-Led Penetration Testing es una prueba de penetracion avanzada basada en inteligencia de amenazas reales, disenada para simular los ataques mas sofisticados y relevantes para una entidad financiera especifica. DORA lo exige para las entidades mas significativas (generalmente grandes bancos, infraestructuras de mercado sistemicas). Para la mayoria de entidades financieras y proveedores TIC, las pruebas de resiliencia requeridas son de naturaleza menos compleja: analisis de vulnerabilidades, pruebas de penetracion estandar y ejercicios de continuidad.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Que clausulas contractuales exige DORA con proveedores TIC?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>DORA establece un conjunto minimo de clausulas que deben incluirse en los contratos entre entidades financieras y sus proveedores TIC: descripcion completa de los servicios, indicadores de calidad y disponibilidad, localizacion y tratamiento de datos, procedimientos de gestion de incidentes, derechos de auditoria, planes de salida y portabilidad de datos, y notificacion de subcontrataciones. Las entidades financieras son responsables de revisar sus contratos existentes y negociar los cambios necesarios con sus proveedores.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Cuanto tiempo lleva el proceso de adecuacion a DORA?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El plazo depende del punto de partida de cada organizacion. Para entidades que ya tienen el ENS o ISO 27001 implementados, el proceso de adecuacion especifica a DORA puede realizarse en 3-4 meses adicionales. Para entidades que parten de cero, el plazo completo es de 5-6 meses. Avson puede ajustar la metodologia y el equipo para acelerar el proceso cuando hay urgencia regulatoria o contractual.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Hay alguna certificacion formal de DORA?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>No existe una certificacion formal de DORA equivalente a la certificacion ISO 27001. El cumplimiento de DORA es una obligacion regulatoria que se demuestra ante el supervisor competente (Banco de Espana, CNMV, DGSFP) a traves de evidencias de implementacion, resultados de pruebas de resiliencia, registros de incidentes y contratos revisados. La adecuacion a DORA se mantiene de forma continua, no se certifica puntualmente.</p></div>
      </div>
    </div>
  </div>
</section>

{/* FINAL CTA */}
<section className="section section--navy">
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>DORA · Pide presupuesto</span>
    <div className="gold-line" style={{margin:'20px auto 0'}}></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:300,color:'#fff',lineHeight:1.15,margin:'32px 0 24px'}}>
      &#191;Estas en el ambito<br /><em>de DORA?</em>
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',color:'rgba(255,255,255,0.65)',maxWidth:'520px',margin:'0 auto 40px',lineHeight:1.7}}>
      Pide presupuesto de alcance DORA. En 48 horas te decimos si aplica a tu organizacion, que gaps tienes respecto a los marcos que ya tienes, y cuanto tiempo llevaria la adecuacion.
    </p>
    <Link to="/contacto" className="v3-btn v3-btn--gold" style={{borderColor:'var(--gold)',color:'#fff',fontSize:'15px',padding:'18px 36px'}}>Habla con un experto &#x2192;</Link>
  </div>
</section>
    </>
  )
}
