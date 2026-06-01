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

export default function Nis2Page() {
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
        <span className="label-tag" style={{color:'#dc2626'}}>&#x26A0; NIS2 · Sanciones hasta 10 M&#x20AC;</span>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(40px,5.2vw,68px)',fontWeight:300,color:'var(--navy)',lineHeight:1.08,margin:'14px 0 18px'}}>
          Ciberseguridad obligatoria<br /><em>en sectores criticos.</em>
        </h1>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',lineHeight:1.6,color:'var(--text-body)',maxWidth:'520px',margin:0}}>
          NIS2 ya esta en vigor en la UE y Espana ultima su transposicion. <strong style={{color:'var(--navy)'}}>Si ya tienes ENS + ISO 27001, el 50% esta cubierto.</strong>
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
          <em>"Nuestra matriz europea exigio NIS2 a todas las filiales antes de fin de ano. Avson nos lo aclaro desde la primera reunion y llegamos a tiempo."</em> -- Responsable de Cumplimiento
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
          <button type="submit" className="v3-btn v3-btn--gold v3-btn--full v3-btn--xl v3-btn--pulse">Quiero cumplir NIS2 &#x2192;</button>
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
    <h2 className="section-title" style={{maxWidth:'520px'}}>De la incertidumbre al<br /><em>cumplimiento en 4-6 meses.</em></h2>
    <div style={{display:'flex',flexDirection:'column',gap:0,marginTop:'52px'}}>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0,borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 1-2</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 01</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Analisis de alcance NIS2</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Determinamos si la organizacion esta en el ambito de NIS2 y que clasificacion le corresponde (esencial o importante). Analizamos el sector, el tamano y las actividades especificas para una clasificacion precisa. Si hay incertidumbre, evaluamos los criterios de la directiva y la normativa espanola de transposicion para dar una respuesta definitiva.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0,borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 3-5</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 02</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Gap analysis respecto a NIS2</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Evaluamos el estado actual de los controles de seguridad frente a los requisitos de NIS2. Si ya tienes el ENS o ISO 27001, identificamos que esta cubierto y que gaps especificos de NIS2 quedan por abordar. El resultado es un informe de gaps priorizado por riesgo regulatorio y operativo, que sirve de base para el plan de adecuacion.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0,borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 6-8</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 03</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Plan de adecuacion</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Disenamos el plan de adecuacion con los proyectos, responsables, plazos y recursos necesarios para cerrar cada gap. El plan incluye las acciones para la gobernanza (implicacion de la direccion, asignacion de responsabilidades), las medidas tecnicas, los procedimientos de notificacion de incidentes y la estrategia para la cadena de suministro.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0,borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 9-20</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 04</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Implementacion</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Implementamos los controles, procedimientos y mecanismos de gobierno definidos en el plan de adecuacion. Incluye la formacion de directivos en sus responsabilidades NIS2, el establecimiento de los procedimientos de notificacion de incidentes al regulador, la revision de contratos con proveedores criticos y el diseno del programa de pruebas de resiliencia.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 21-24</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 05</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Validacion y registro ante el regulador</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Revisamos la conformidad de la implementacion con los requisitos de NIS2, documentamos las evidencias de cumplimiento y preparamos el registro ante el organismo supervisor competente (que NIS2 exige a las entidades afectadas). Establecemos el proceso de mantenimiento continuo del cumplimiento, incluyendo la revision anual del estado de adecuacion.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* QUE ES NIS2 */}
<section className="section section--white" id="que-es">
  <div className="container">
    <span className="label-tag">NIS2 · Que es</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'580px'}}>Mas alcance, mas requisitos,<br /><em>mas sanciones.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'60px',marginTop:'52px'}}>
      <div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'var(--text-body)',marginBottom:'24px'}}>
          La Directiva NIS2 (Network and Information Systems Directive 2), formalmente la Directiva (UE) 2022/2555, es la revision en profundidad de la Directiva NIS original de 2016. Amplia drasticamente el alcance de los requisitos de ciberseguridad en la UE, pasando de 7 a 18 sectores cubiertos y estableciendo una distincion entre entidades esenciales (mayor impacto sistemico) y entidades importantes (menor pero significativo impacto).
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'var(--text-body)',marginBottom:'24px'}}>
          Los cambios mas significativos respecto a NIS1 son el alcance mucho mas amplio (se estima que NIS2 afecta a diez veces mas entidades que NIS1 en Europa), la responsabilidad personal de la direccion en el cumplimiento de los requisitos de ciberseguridad, las sanciones significativamente mas elevadas, los plazos de notificacion de incidentes mas estrictos y la extension de los requisitos a la cadena de suministro.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'var(--text-body)'}}>
          Para las empresas que ya tienen el <Link to="/ens">ENS</Link> o <Link to="/iso27001">ISO 27001</Link>, la adecuacion a NIS2 es mucho mas accesible de lo que parece: el solapamiento de controles con ISO 27001 es de aproximadamente el 60-70%. Lo nuevo de NIS2 es la obligacion de notificacion formal al regulador, la responsabilidad directiva explicita y la extension de los requisitos a la cadena de suministro.
        </p>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:600,color:'var(--navy)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'4px'}}>NIS1 vs NIS2 -- Los cambios clave</h3>
        <div style={{background:'var(--pearl)',padding:0}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
            <div style={{padding:'20px 24px',borderRight:'1px solid rgba(0,0,0,0.08)'}}>
              <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'12px'}}>NIS1 (2016)</p>
              <ul style={{listStyle:'none',padding:0,margin:0,fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-body)',lineHeight:1.7}}>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>7 sectores</li>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>Solo operadores de servicios esenciales</li>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>Sanciones bajas y variables</li>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>Sin responsabilidad directiva explicita</li>
                <li style={{padding:'5px 0'}}>Sin requisitos cadena de suministro</li>
              </ul>
            </div>
            <div style={{padding:'20px 24px',background:'var(--navy)'}}>
              <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'12px'}}>NIS2 (2022)</p>
              <ul style={{listStyle:'none',padding:0,margin:0,fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.8)',lineHeight:1.7}}>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>18 sectores</li>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Esenciales + Importantes</li>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Hasta 10M&#x20AC; o 2% facturacion global</li>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Responsabilidad personal de directivos</li>
                <li style={{padding:'5px 0'}}>Cadena de suministro incluida</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* SECTORES */}
<section className="section section--pearl" id="sectores">
  <div className="container">
    <span className="label-tag">&#191;Te aplica NIS2?</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>18 sectores bajo<br /><em>la lupa de NIS2.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'var(--text-body)',maxWidth:'640px',marginBottom:'52px'}}>
      La distincion entre entidades esenciales e importantes determina el nivel de supervision y las sanciones aplicables. Las entidades esenciales tienen requisitos mas exigentes y estan sujetas a supervision proactiva, mientras que las importantes estan sujetas a supervision reactiva (el regulador actua principalmente cuando se detectan incidentes o incumplimientos).
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'32px'}}>
      <div>
        <div style={{background:'var(--navy)',padding:'8px 20px',marginBottom:0,display:'inline-block'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Entidades esenciales -- 11 sectores</p>
        </div>
        <div style={{background:'var(--white)',padding:'28px 32px',border:'1px solid var(--border)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'16px'}}>Sancion maxima: 10M&#x20AC; o 2% facturacion global</p>
          <ul style={{listStyle:'none',padding:0,margin:0,fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:1.7}}>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Energia (electricidad, gas, calefaccion, petroleo, hidrogeno)</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Transporte (aereo, ferroviario, maritimo, por carretera)</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Banca y entidades de credito</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Infraestructuras de mercados financieros</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Sector sanitario (hospitales, laboratorios, I+D)</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Agua potable</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Aguas residuales</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Infraestructuras digitales (IXPs, DNS, cloud, CDN, datacenters)</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Gestion de servicios TIC entre empresas (MSPs, MSSPs)</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Administracion publica (nacional y regional)</li>
            <li style={{padding:'8px 0',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Espacio (operadores de infraestructuras terrestres)</li>
          </ul>
        </div>
      </div>
      <div>
        <div style={{background:'var(--gold)',padding:'8px 20px',marginBottom:0,display:'inline-block'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'#fff',textTransform:'uppercase',letterSpacing:'0.08em'}}>Entidades importantes -- 7 sectores</p>
        </div>
        <div style={{background:'var(--white)',padding:'28px 32px',border:'1px solid var(--border)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'16px'}}>Sancion maxima: 7M&#x20AC; o 1,4% facturacion global</p>
          <ul style={{listStyle:'none',padding:0,margin:0,fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:1.7}}>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Servicios postales y mensajeria</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Gestion de residuos</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Fabricacion y distribucion de productos quimicos</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Produccion y distribucion de alimentos</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Fabricacion (medicos, informaticos, electronica, maquinaria, vehiculos)</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Proveedores de servicios digitales (marketplaces, motores de busqueda, redes sociales)</li>
            <li style={{padding:'8px 0',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:600,flexShrink:0}}>&#x2192;</span>Investigacion (organizaciones de investigacion)</li>
          </ul>
        </div>
      </div>
    </div>
    <div style={{background:'var(--white)',padding:'24px 32px',marginTop:'24px',border:'1px solid var(--border)'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}><strong style={{color:'var(--navy)'}}>Umbrales de tamano:</strong> En general, NIS2 aplica a organizaciones medianas (50+ empleados o 10M&#x20AC;+ de facturacion) y grandes en los sectores listados. Sin embargo, hay excepciones para ciertos tipos de entidades que quedan incluidas independientemente de su tamano (infraestructuras criticas especificas, administracion publica, proveedores de servicios de confianza, etc.).</p>
    </div>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'32px 36px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap',marginTop:'48px'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'22px',fontWeight:400,color:'#1A2744',lineHeight:1.3,flex:1,minWidth:'200px'}}>"Si ya tienes ENS, el 50% del trabajo para NIS2 esta hecho. Te decimos exactamente que falta."</span>
      <Link to="/packs" className="v3-btn v3-btn--gold">Calcula tu presupuesto &#x2192;</Link>
    </div>
  </div>
</section>

{/* REQUISITOS NIS2 */}
<section className="section section--white" id="requisitos">
  <div className="container">
    <span className="label-tag">Obligaciones NIS2</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>Que exige NIS2<br /><em>a tu organizacion.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'32px'}}>
        <div style={{width:'40px',height:'40px',background:'var(--gold)',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'#fff'}}>01</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Gobierno y gestion del riesgo</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.7}}>Politicas de seguridad de la informacion aprobadas formalmente por el organo de direccion. Los directivos deben recibir formacion en ciberseguridad y asumir responsabilidad personal en el cumplimiento de NIS2. El incumplimiento puede acarrear inhabilitacion temporal para ejercer funciones directivas.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'32px'}}>
        <div style={{width:'40px',height:'40px',background:'var(--gold)',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'#fff'}}>02</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Gestion de incidentes</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.7}}>Notificacion al INCIBE-CERT o al organismo supervisor competente en plazos muy estrictos: alerta temprana en 24 horas desde la deteccion del incidente significativo, notificacion completa en 72 horas, e informe final en 1 mes. Los criterios de "incidente significativo" quedan definidos en normas tecnicas europeas.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'32px'}}>
        <div style={{width:'40px',height:'40px',background:'var(--gold)',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'#fff'}}>03</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Continuidad del negocio</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.7}}>Planes de continuidad de negocio documentados y probados, gestion de crisis, procedimientos de recuperacion ante desastres y copias de seguridad. ISO 22301 cubre este requisito de forma integral. NIS2 exige que estos planes se revisen periodicamente y que el equipo de direccion participe en ejercicios de crisis.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'32px'}}>
        <div style={{width:'40px',height:'40px',background:'var(--gold)',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'#fff'}}>04</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Seguridad de la cadena de suministro</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.7}}>Evaluacion de la seguridad de los proveedores y los acuerdos contractuales que garanticen el nivel adecuado de seguridad en toda la cadena. Esto incluye due diligence de proveedores, revision de clausulas de seguridad en contratos y la gestion de los riesgos asociados a las dependencias de proveedores criticos de software y hardware.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'32px'}}>
        <div style={{width:'40px',height:'40px',background:'var(--gold)',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'#fff'}}>05</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Seguridad en el desarrollo</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.7}}>Practicas de desarrollo y mantenimiento de sistemas de informacion seguras: gestion de vulnerabilidades tecnicas, ciclo de vida de desarrollo seguro (SDL), pruebas de penetracion periodicas y gestion del ciclo de vida de los activos tecnologicos. Especialmente relevante para entidades con desarrollo de software propio.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'32px'}}>
        <div style={{width:'40px',height:'40px',background:'var(--gold)',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'#fff'}}>06</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Formacion y concienciacion</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.7}}>Programas de formacion en ciberseguridad para todos los empleados y programas especificos para la direccion. NIS2 hace explicita la obligacion de que los organos de direccion sean formados en gestion del riesgo de ciberseguridad, con enfasis en las responsabilidades personales que les aplican.</p>
      </div>
    </div>
  </div>
</section>

{/* SINERGIA ENS + ISO 27001 */}
<section className="section section--navy" id="sinergias">
  <div className="container">
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>Sinergias con marcos existentes</span>
    <div className="gold-line"></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:300,color:'#fff',lineHeight:1.15,margin:'0 0 32px',maxWidth:'680px'}}>
      ENS + ISO 27001 cubren<br />entre el 60% y el 70% de NIS2.
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'rgba(255,255,255,0.7)',maxWidth:'640px',marginBottom:'48px'}}>
      NIS2 no inventa nuevos controles de ciberseguridad: codifica en ley las buenas practicas que ISO 27001 ya implementa. La diferencia es que ahora son obligatorias para los sectores en alcance y las sanciones por incumplimiento son significativas.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginBottom:'40px'}}>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Lo que ya cubre ENS + ISO 27001 (60-70%)</h3>
        <ul style={{listStyle:'none',padding:0,margin:0,fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:1.8}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Analisis y tratamiento de riesgos de seguridad</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Politicas de seguridad aprobadas por la direccion</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Gestion de incidentes de seguridad</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Control de acceso y gestion de identidades</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Copias de seguridad y continuidad basica</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Cifrado y seguridad de comunicaciones</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Gestion de vulnerabilidades tecnicas</li>
          <li style={{padding:'6px 0'}}>Formacion y concienciacion del personal</li>
        </ul>
      </div>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Lo especifico de NIS2 (30-40% adicional)</h3>
        <ul style={{listStyle:'none',padding:0,margin:0,fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:1.8}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Registro como entidad afectada ante el regulador</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Notificacion formal de incidentes en 24/72h</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Responsabilidad personal documentada de directivos</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Evaluacion formal de seguridad de la cadena de suministro</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Formacion especifica de la direccion en NIS2</li>
          <li style={{padding:'6px 0'}}>Revision periodica por autoridad supervisora</li>
        </ul>
      </div>
    </div>
    <Link to="/packs" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff'}}>Ver pack ENS + NIS2 &#x2192;</Link>
  </div>
</section>

{/* FAQ */}
<section className="section section--pearl" id="faq">
  <div className="container" style={{maxWidth:'760px'}}>
    <span className="label-tag">Preguntas frecuentes</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Todo sobre<br /><em>NIS2.</em></h2>
    <div style={{marginTop:'48px'}}>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;NIS2 ya esta en vigor en Espana?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>La Directiva NIS2 (UE 2022/2555) entro en vigor a nivel europeo en enero de 2023 con un plazo de transposicion de 21 meses para los estados miembros (hasta octubre de 2024). Espana, como otros estados miembros, esta en proceso de finalizar su transposicion al ordenamiento juridico nacional. Aunque la ley espanola aun no esta en vigor, las empresas en los sectores afectados deben prepararse: una vez publicada la ley, el plazo para cumplir puede ser muy corto. Las empresas que anticipen el cumplimiento evitaran la presion regulatoria y estaran en mejor posicion.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Cuales son las sanciones de NIS2?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Las sanciones de NIS2 son significativamente mas elevadas que las de NIS1. Para las entidades esenciales: hasta 10 millones de euros o el 2% de la facturacion global anual total de la empresa, lo que sea mayor. Para las entidades importantes: hasta 7 millones de euros o el 1,4% de la facturacion global anual total, lo que sea mayor. Ademas, NIS2 preve la posibilidad de suspension temporal de licencias o autorizaciones para entidades esenciales que incumplan de forma reiterada, y la responsabilidad personal de los directivos que puedan ser inhabilitados temporalmente.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Como se si soy entidad esencial o importante?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>La clasificacion depende del sector en el que operas y del tamano de tu organizacion. En general, las organizaciones medianas y grandes (mas de 50 empleados o mas de 10 millones de euros de facturacion) en los 18 sectores cubiertos por NIS2 quedan afectadas. La distincion entre esencial e importante depende del sector especifico y en algunos casos del impacto sistemico de la organizacion. Ofrecemos un presupuesto sin compromiso de alcance NIS2 en el que analizamos tu situacion y te damos una clasificacion definitiva.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Que diferencia NIS2 de ISO 27001?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>ISO 27001 es un estandar internacional voluntario de buenas practicas en seguridad de la informacion. NIS2 es una directiva europea de obligado cumplimiento para las entidades en su ambito de aplicacion. La diferencia principal es la obligatoriedad y las sanciones. Sin embargo, ISO 27001 cubre el 60-70% de los requisitos tecnicos de NIS2, lo que hace de la certificacion ISO 27001 la forma mas eficiente de demostrar el cumplimiento tecnico de NIS2. Lo que NIS2 anade sobre ISO 27001 son principalmente las obligaciones de notificacion formal al regulador y la responsabilidad directiva explicita.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;DORA y NIS2 se solapan?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Si, pero DORA es lex specialis respecto a NIS2 para el sector financiero. Esto significa que las entidades financieras cumplen NIS2 cumpliendo DORA, que establece requisitos mas especificos y detallados para ese sector. Para las entidades no financieras que quedan en el ambito de NIS2 y tambien son proveedores de servicios digitales o infraestructuras digitales, los requisitos de NIS2 y DORA pueden coexistir, aunque el solapamiento es muy significativo.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Que responsabilidad tiene la direccion en NIS2?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>NIS2 introduce por primera vez una responsabilidad personal explicita de los organos de direccion en el cumplimiento de los requisitos de ciberseguridad. Los directivos deben aprobar formalmente las medidas de seguridad, recibir formacion periodica en gestion del riesgo de ciberseguridad y pueden ser considerados personalmente responsables en caso de incumplimiento grave. La directiva preve la posibilidad de inhabilitacion temporal para ejercer funciones de direccion como sancion adicional a las multas a la entidad.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Cuanto tiempo lleva la adecuacion a NIS2?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El plazo depende principalmente del punto de partida. Para organizaciones que ya tienen el ENS o ISO 27001, la adecuacion especifica a NIS2 puede realizarse en 3-4 meses adicionales. Para organizaciones que parten de cero, el plazo completo es de 5-6 meses. Avson puede ajustar la metodologia para acelerar el proceso cuando hay urgencia, concentrando los recursos en los gaps de mayor riesgo regulatorio primero.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Hay una certificacion formal NIS2?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>No existe una certificacion formal de NIS2 equivalente a la certificacion ISO 27001. El cumplimiento de NIS2 se demuestra ante el organismo supervisor competente (en Espana, el INCIBE-CERT para entidades privadas y el CCN-CERT para la administracion publica y sus proveedores) a traves de evidencias de implementacion de las medidas requeridas y del registro como entidad afectada. ISO 27001 es el estandar mas reconocido para demostrar el nivel tecnico de seguridad que NIS2 exige.</p></div>
      </div>
    </div>
  </div>
</section>

{/* FINAL CTA */}
<section className="section section--navy">
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>NIS2 · Pide presupuesto</span>
    <div className="gold-line" style={{margin:'20px auto 0'}}></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:300,color:'#fff',lineHeight:1.15,margin:'32px 0 24px'}}>
      &#191;NIS2 aplica<br /><em>a tu empresa?</em>
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',color:'rgba(255,255,255,0.65)',maxWidth:'520px',margin:'0 auto 40px',lineHeight:1.7}}>
      Pide presupuesto de alcance NIS2. En 48 horas te decimos si aplica a tu organizacion, que clasificacion te corresponde y cuanto esfuerzo requiere la adecuacion desde tu situacion actual.
    </p>
    <Link to="/contacto" className="v3-btn v3-btn--gold" style={{borderColor:'var(--gold)',color:'#fff',fontSize:'15px',padding:'18px 36px'}}>Habla con un experto &#x2192;</Link>
  </div>
</section>
    </>
  )
}
