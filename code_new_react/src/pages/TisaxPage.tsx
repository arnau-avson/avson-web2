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

export default function TisaxPage() {
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
        <span className="label-tag">TISAX · Seguridad del sector automocion</span>
        <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(40px,5.2vw,68px)',fontWeight:300,color:'var(--navy)',lineHeight:1.08,margin:'14px 0 18px'}}>
          Sin TISAX no trabajas<br /><em>con la automocion.</em>
        </h1>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',lineHeight:1.6,color:'var(--text-body)',maxWidth:'520px',margin:0}}>
          El estandar que exigen los OEMs (BMW, Volkswagen, Mercedes...) y sus tier-1 a sus proveedores. <strong style={{color:'var(--navy)'}}>Te llevamos al assessment con garantia.</strong>
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
          <em>"Un OEM aleman nos exigio TISAX AL2 con tres meses de margen para seguir como proveedor. Avson lo saco adelante a tiempo."</em> -- Director de Operaciones
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
          <button type="submit" className="v3-btn v3-btn--gold v3-btn--full v3-btn--xl v3-btn--pulse">Quiero mi TISAX &#x2192;</button>
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

{/* QUE ES TISAX */}
<section className="section section--white" id="que-es">
  <div className="container">
    <span className="label-tag">TISAX · Que es</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'600px'}}>El assessment de seguridad<br /><em>que abre puertas en automocion.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'60px',marginTop:'52px',alignItems:'start'}}>
      <div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'var(--text-body)',marginBottom:'24px'}}>
          TISAX nacio de una necesidad concreta: los fabricantes de automoviles europeos (OEMs) necesitaban un mecanismo comun para evaluar la seguridad de la informacion de sus miles de proveedores sin que cada uno tuviera que someterse a auditorias independientes para cada cliente. La solucion fue crear un estandar sectorial unico, basado en el VDA ISA (cuestionario de seguridad de la asociacion alemana de la industria automotriz VDA), gestionado por ENX Association.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'var(--text-body)',marginBottom:'24px'}}>
          El resultado del assessment TISAX se registra en la plataforma ENX y puede compartirse digitalmente con cualquier cliente OEM o tier-1 que lo solicite, sin necesidad de repetir el proceso para cada cliente. Un solo assessment, valido para toda la cadena de suministro del sector durante tres anos.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'var(--text-body)'}}>
          El cuestionario VDA ISA en el que se basa TISAX esta muy alineado con <Link to="/iso27001">ISO 27001</Link>, con un solapamiento de controles cercano al 70%. Para empresas que ya tienen <Link to="/iso27001">ISO 27001</Link>, el esfuerzo adicional para TISAX es principalmente la adaptacion a los requisitos especificos del sector automovilistico: seguridad de datos de prototipos, vehiculos conectados y datos personales de automocion.
        </p>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:600,color:'var(--navy)',letterSpacing:'0.08em',textTransform:'uppercase'}}>Los tres niveles de assessment</h3>
        <div style={{background:'var(--pearl)',padding:'28px',borderLeft:'3px solid rgba(0,0,0,0.1)'}}>
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'12px'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:700,color:'var(--text-muted)',background:'rgba(0,0,0,0.08)',padding:'4px 10px',letterSpacing:'0.06em'}}>AL1</span>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'var(--navy)',margin:0}}>Autoassessment</p>
          </div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.6}}>La empresa realiza el cuestionario de forma autonoma, sin auditoria externa. Aplica a informacion de baja sensibilidad. En la practica, muy pocos OEMs lo aceptan sin auditoria.</p>
        </div>
        <div style={{background:'var(--navy)',padding:'28px',position:'relative'}}>
          <div style={{position:'absolute',top:0,right:0,background:'var(--gold)',padding:'4px 12px',fontFamily:'var(--font-sans)',fontSize:'9px',fontWeight:600,color:'#fff',letterSpacing:'0.08em',textTransform:'uppercase'}}>El mas habitual</div>
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'12px'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:700,color:'var(--navy)',background:'var(--gold)',padding:'4px 10px',letterSpacing:'0.06em'}}>AL2</span>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'#fff',margin:0}}>Assessment con auditoria remota</p>
          </div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)',lineHeight:1.6}}>Para informacion sensible: datos de prototipos, informacion de precios y costes, datos personales de empleados de la cadena de suministro. Es el nivel mas solicitado por OEMs para la mayoria de proveedores tecnologicos, de ingenieria y de software.</p>
        </div>
        <div style={{background:'var(--pearl)',padding:'28px',borderLeft:'3px solid var(--gold)'}}>
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'12px'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:700,color:'#fff',background:'var(--navy)',padding:'4px 10px',letterSpacing:'0.06em'}}>AL3</span>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'var(--navy)',margin:0}}>Assessment con auditoria presencial</p>
          </div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.6}}>Para informacion de muy alta sensibilidad: datos de crash tests, prototipos de vehiculos altamente confidenciales, informacion estrategica de producto. El auditor de ENX realiza la auditoria in situ en las instalaciones del proveedor.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* QUIEN NECESITA TISAX */}
<section className="section section--pearl" id="quien-necesita">
  <div className="container">
    <span className="label-tag">&#191;Te aplica TISAX?</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'620px'}}>Si trabajas con OEMs europeos,<br /><em>probablemente necesitas TISAX.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'var(--text-body)',maxWidth:'640px',marginBottom:'48px'}}>
      El ambito de TISAX se ha ido ampliando con los anos. Inicialmente afectaba solo a proveedores de componentes fisicos, pero hoy alcanza a cualquier empresa que maneje informacion sensible del sector automovilistico, sea cual sea su tipo de servicio.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px'}}>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
        <div style={{width:'44px',height:'44px',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
          <span style={{color:'var(--gold)',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:'14px'}}>T1</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'var(--navy)'}}>Tier-1, Tier-2 y Tier-3</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:1.6}}>Proveedores directos e indirectos de componentes y sistemas para fabricantes de vehiculos. Los OEMs exigen TISAX en toda la cadena de suministro, no solo al proveedor directo.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
        <div style={{width:'44px',height:'44px',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
          <span style={{color:'var(--gold)',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:'14px'}}>ENG</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'var(--navy)'}}>Consultoras de ingenieria</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:1.6}}>Empresas de ingenieria que participan en el diseno y desarrollo de vehiculos o componentes. Manejan datos tecnicos muy sensibles (planos, especificaciones, protocolos de prueba).</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
        <div style={{width:'44px',height:'44px',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
          <span style={{color:'var(--gold)',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:'14px'}}>SW</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'var(--navy)'}}>Proveedores de software</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:1.6}}>Empresas que desarrollan o mantienen software embebido, sistemas ADAS, plataformas de conectividad, aplicaciones de vehiculos o sistemas de gestion de concesionarios.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
        <div style={{width:'44px',height:'44px',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
          <span style={{color:'var(--gold)',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:'14px'}}>LAB</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'var(--navy)'}}>Laboratorios de pruebas</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:1.6}}>Laboratorios de homologacion, pruebas de crash, ensayos de componentes y verificacion de normativas. Manejan datos de prototipos extremadamente confidenciales y suelen requerir AL3.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
        <div style={{width:'44px',height:'44px',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
          <span style={{color:'var(--gold)',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:'14px'}}>MKT</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'var(--navy)'}}>Agencias de marketing y diseno</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:1.6}}>Agencias que trabajan con imagenes o informacion de vehiculos no comercializados. Los OEMs son extraordinariamente sensibles a cualquier filtracion de informacion de nuevos modelos antes del lanzamiento.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
        <div style={{width:'44px',height:'44px',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}}>
          <span style={{color:'var(--gold)',fontFamily:'var(--font-sans)',fontWeight:600,fontSize:'14px'}}>LOG</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:600,color:'var(--navy)'}}>Logistica y transporte especializado</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:1.6}}>Empresas de logistica que transportan prototipos o componentes confidenciales, o que gestionan sistemas de trazabilidad integrados con los sistemas de informacion del fabricante.</p>
      </div>
    </div>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'32px 36px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap',marginTop:'48px'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'22px',fontWeight:400,color:'#1A2744',lineHeight:1.3,flex:1,minWidth:'200px'}}>"TISAX no es una certificacion que se publica. Pero sin ella, perderas contratos con OEMs. Te explicamos que nivel necesitas."</span>
      <Link to="/contacto" className="btn-primary">Consulta gratuita TISAX &#x2192;</Link>
    </div>
  </div>
</section>

{/* PROCESO TISAX */}
<section className="section section--white" id="proceso">
  <div className="container">
    <span className="label-tag">Nuestro proceso TISAX</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'520px'}}>De cero al assessment<br /><em>en 3-4 meses.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'var(--text-body)',maxWidth:'640px',marginBottom:'52px'}}>
      El proceso TISAX tiene sus propias particularidades respecto a otras certificaciones: no hay un "certificado" en el sentido tradicional, sino un resultado de assessment registrado en la plataforma ENX. Avson conoce los requisitos especificos del VDA ISA y acompana al cliente en todo el proceso, desde el registro hasta la obtencion del resultado satisfactorio.
    </p>
    <div style={{display:'flex',flexDirection:'column',gap:0}}>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0,borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semana 1</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 01</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Registro en el portal ENX</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>La empresa se registra en el portal de ENX Association, selecciona el nivel de assessment requerido (AL1, AL2 o AL3) y los objetivos del assessment (informacion normal, informacion confidencial de prototipos, o datos personales). Avson acompana en el proceso de registro, que puede ser confuso para quienes acceden por primera vez, y asesora sobre la seleccion correcta de objetivos segun lo que solicita el OEM o tier-1 cliente.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0,borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 2-4</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 02</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Gap analysis frente al VDA ISA</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Realizamos un gap analysis exhaustivo de los controles del VDA ISA (Information Security Assessment) frente al estado actual de la organizacion. El cuestionario VDA ISA tiene mas de 200 preguntas organizadas en dominios de seguridad similares a los de ISO 27001. Identificamos los controles que ya cumplen, los que son parcialmente conformes y los que requieren implementacion. Si la empresa tiene ISO 27001, el porcentaje de controles ya cubiertos es habitualmente superior al 70%.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0,borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 5-12</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 03</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Implementacion de controles VDA ISA</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Implementamos los controles pendientes y completamos la documentacion de los controles existentes en el formato que requiere el VDA ISA. Los controles especificos del sector automovilistico que suelen requerir mayor atencion son: seguridad en el manejo de datos de prototipos (fisicos y digitales), gestion de activos de informacion en la cadena de suministro, y los controles de seguridad para el desarrollo de software de vehiculos conectados cuando aplica.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0,borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 13-14</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 04</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Preparacion para el assessment ENX</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>Realizamos un mock assessment completo utilizando el cuestionario VDA ISA para simular el proceso real. Revisamos todas las respuestas, verificamos la consistencia de la documentacion de evidencias y preparamos al equipo para las entrevistas con el auditor ENX. Esta fase es especialmente importante: el assessment ENX evalua tanto la implementacion real de los controles como la capacidad del equipo de explicar y demostrar su funcionamiento.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:0}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 15-16</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)'}}>Fase 05</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:600,color:'var(--navy)',marginBottom:'12px'}}>Assessment ENX</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:1.7,color:'var(--text-body)'}}>El assessment es realizado por un auditor acreditado por ENX Association, no por Avson (por razones de independencia). Para AL2, el assessment se realiza de forma remota mediante videoconferencia y revision de documentacion. Para AL3, el auditor se desplaza a las instalaciones del proveedor. Una vez completado con resultado satisfactorio, el informe de assessment queda registrado en la plataforma ENX y puede compartirse con los OEMs y tier-1 que lo soliciten durante tres anos. Avson acompana al equipo durante el assessment y gestiona cualquier punto de accion posterior.</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* RELACION CON ISO 27001 */}
<section className="section section--navy" id="sinergias">
  <div className="container">
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>Sinergias TISAX · ISO 27001</span>
    <div className="gold-line"></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:300,color:'#fff',lineHeight:1.15,margin:'0 0 32px',maxWidth:'680px'}}>
      ISO 27001 como<br />base del TISAX.
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:1.8,color:'rgba(255,255,255,0.7)',maxWidth:'640px',marginBottom:'48px'}}>
      El VDA ISA en el que se basa TISAX fue disenado tomando como referencia ISO 27001. El solapamiento de controles es superior al 70%. Para empresas con ISO 27001 certificado, el esfuerzo para superar el assessment TISAX se reduce muy significativamente.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginBottom:'40px'}}>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Lo que se comparte con ISO 27001 (+70%)</h3>
        <ul style={{listStyle:'none',padding:0,margin:0,fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:1.8}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Analisis y tratamiento de riesgos de seguridad</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Politicas y procedimientos de seguridad</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Control de acceso fisico y logico</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Gestion de incidentes de seguridad</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Copias de seguridad y recuperacion</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Formacion y concienciacion</li>
          <li style={{padding:'6px 0'}}>Gestion de proveedores y terceros</li>
        </ul>
      </div>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:600,color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Lo especifico de TISAX (~30%)</h3>
        <ul style={{listStyle:'none',padding:0,margin:0,fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:1.8}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Seguridad fisica y logica de datos de prototipos</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Controles para fotografia y filmacion de prototipos</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Gestion de datos de vehiculos conectados</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Formato especifico VDA ISA de documentacion</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Registro en plataforma ENX</li>
          <li style={{padding:'6px 0'}}>Evaluacion de madurez segun escala VDA ISA</li>
        </ul>
      </div>
    </div>
    <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff'}}>Solicitar diagnostico TISAX &#x2192;</Link>
  </div>
</section>

{/* PACKS */}
<section className="section section--pearl" id="packs">
  <div className="container">
    <span className="label-tag">Packs TISAX</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Elige tu<br /><em>punto de partida.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',background:'var(--white)',padding:'40px',display:'flex',flexDirection:'column'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Empiezo desde cero</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)',marginBottom:'8px'}}>TISAX AL2</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'28px'}}>Preparacion completa para assessment AL2</p>
        <ul style={{listStyle:'none',padding:0,margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.7,flex:1}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Gap analysis frente a VDA ISA</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Implementacion de controles pendientes</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Documentacion completa VDA ISA</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Mock assessment simulado</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Acompanamiento assessment ENX remoto</li>
          <li style={{padding:'6px 0'}}>Garantia de exito incluida</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'8px'}}>Plazo: 3-4 meses</p>
        <Link to="/contacto" className="btn-text">Habla con un experto &#x2192;</Link>
      </div>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',display:'flex',flexDirection:'column',position:'relative'}}>
        <div style={{position:'absolute',top:0,right:0,background:'var(--gold)',padding:'6px 16px',fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:600,color:'#fff',letterSpacing:'0.08em',textTransform:'uppercase'}}>Mas eficiente</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'rgba(255,255,255,0.5)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Ya tengo ISO 27001</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'#fff',marginBottom:'8px'}}>ISO 27001 + TISAX</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.5)',marginBottom:'28px'}}>Aprovecha el 70% de solapamiento</p>
        <ul style={{listStyle:'none',padding:0,margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)',lineHeight:1.7,flex:1}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>ISO 27001 como base documentada</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Gap analysis de los controles especificos TISAX</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Solo el 30% de trabajo diferencial</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Adaptacion formato VDA ISA</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Assessment ENX AL2 acompanado</li>
          <li style={{padding:'6px 0'}}>Ahorro estimado del 45% vs desde cero</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.5)',marginBottom:'8px'}}>Plazo: 6-8 semanas adicionales</p>
        <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',textAlign:'center',justifyContent:'center'}}>Habla con un experto &#x2192;</Link>
      </div>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',background:'var(--white)',padding:'40px',display:'flex',flexDirection:'column'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:600,color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Alta sensibilidad</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:300,color:'var(--navy)',marginBottom:'8px'}}>TISAX AL3</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'28px'}}>Para prototipos y datos de muy alta sensibilidad</p>
        <ul style={{listStyle:'none',padding:0,margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:1.7,flex:1}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Todo lo del pack AL2</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Controles adicionales para AL3</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Seguridad fisica reforzada para prototipos</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Preparacion especifica auditoria presencial</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Acompanamiento in situ durante el assessment</li>
          <li style={{padding:'6px 0'}}>Para laboratorios y proveedores tier-1 de alto nivel</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'8px'}}>Plazo: 4-5 meses</p>
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
    <h2 className="section-title" style={{maxWidth:'480px'}}>Todo sobre<br /><em>TISAX.</em></h2>
    <div style={{marginTop:'48px'}}>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Que es ENX Association?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>ENX Association es la organizacion europea sin animo de lucro que gestiona el programa TISAX. Fue fundada por los principales fabricantes de automoviles europeos (Volkswagen Group, BMW Group, Mercedes-Benz, Stellantis, Renault Group) y sus asociaciones de proveedores (VDA en Alemania, SMMT en UK, FIEV en Francia, ANFAC en Espana) para establecer un estandar comun de intercambio de assessments de seguridad de la informacion. La plataforma ENX es el repositorio centralizado donde se registran y comparten los resultados de los assessments TISAX.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Que nivel TISAX necesito?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El nivel que necesitas lo determina el OEM o tier-1 que te lo exige, en funcion del tipo de informacion que intercambias con ellos. AL1 (autoassessment) es para informacion de baja sensibilidad y raramente lo aceptan los grandes OEMs como suficiente. AL2 (auditoria remota) es el mas habitual para proveedores de tecnologia, ingenieria, software y marketing. AL3 (auditoria presencial) se exige para el manejo de prototipos fisicos o datos de muy alta confidencialidad. Si tienes dudas sobre que nivel te piden, Avson puede ayudarte a interpretar los requisitos de tu cliente.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;TISAX es una certificacion o un assessment?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Tecnicamente, TISAX es un assessment, no una certificacion. La diferencia es que no se emite un certificado publico: el resultado del assessment queda registrado en la plataforma ENX y se comparte directamente y de forma controlada con las empresas que el proveedor autoriza a verlo. Esto es una ventaja: un unico assessment sirve para todos los OEMs y tier-1 con los que trabajas, sin necesidad de compartir documentacion sensible con cada uno por separado. En el sector, sin embargo, es habitual hablar de "certificacion TISAX" en sentido coloquial.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Cuanto tiempo dura el resultado TISAX?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El resultado del assessment TISAX tiene una validez de 3 anos. Durante ese periodo, puede compartirse con todos los OEMs y tier-1 que lo soliciten a traves de la plataforma ENX, sin necesidad de repetir el assessment. Al final del periodo de 3 anos, debe renovarse con un nuevo assessment. Avson ofrece un bono de mantenimiento para gestionar la renovacion y mantener los controles al dia durante la vigencia del resultado.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;ISO 27001 me ayuda para TISAX?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Si, de forma muy significativa. El VDA ISA en el que se basa TISAX fue disenado con ISO 27001 como referencia principal. El solapamiento de controles es superior al 70%. Para empresas con ISO 27001, el esfuerzo adicional para superar el assessment TISAX se concentra en los controles especificos del sector automovilistico (principalmente la seguridad de datos de prototipos) y en la adaptacion de la documentacion al formato VDA ISA. El time-to-assessment para empresas con ISO 27001 es de 6-8 semanas, frente a los 3-4 meses que requiere partir de cero.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Quien hace el assessment? &#191;Lo hace Avson?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>No. El assessment es realizado por auditores independientes acreditados por ENX Association. Avson prepara al cliente para el assessment y le acompana durante el proceso, pero no puede realizar el assessment porque ENX requiere que sea realizado por una entidad independiente del consultor que ha preparado al cliente. Esta separacion garantiza la objetividad del resultado. Los auditores ENX son expertos en VDA ISA y conocen bien los requisitos del sector automovilistico.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Cuanto cuesta el TISAX?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El coste total del TISAX incluye dos componentes: el coste de la consultoria de preparacion (que gestiona Avson) y el coste del assessment propio de ENX (que se paga directamente a ENX o al auditor acreditado). El coste de la consultoria depende del punto de partida (si ya tienes ISO 27001 o partes de cero) y del nivel de assessment (AL2 o AL3). El coste del assessment ENX depende del tamano de la organizacion y el nivel. Ofrecemos un presupuesto sin compromiso para darte una estimacion completa antes de comprometerte con nada.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>&#191;Como se comparte el resultado con los OEMs?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El resultado del assessment queda registrado en la plataforma ENX. Cuando un OEM o tier-1 solicita ver el resultado, el proveedor recibe una notificacion y puede autorizar o rechazar el acceso. El proceso es completamente digital y no implica enviar documentacion sensible por email ni por otros canales. Cuando la autorizacion es concedida, el cliente puede ver el resultado directamente en la plataforma ENX. Este mecanismo es una de las grandes ventajas del sistema: un solo assessment, compartido de forma segura con todos los clientes que lo necesiten.</p></div>
      </div>
    </div>
  </div>
</section>

{/* FINAL CTA */}
<section className="section section--navy">
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>TISAX · Pide presupuesto</span>
    <div className="gold-line" style={{margin:'20px auto 0'}}></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:300,color:'#fff',lineHeight:1.15,margin:'32px 0 24px'}}>
      &#191;Tu cliente te pide<br /><em>el TISAX?</em>
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',color:'rgba(255,255,255,0.65)',maxWidth:'520px',margin:'0 auto 40px',lineHeight:1.7}}>
      Pide presupuesto. Te decimos que nivel necesitas, cuanto tiempo llevara y como aprovechar lo que ya tienes para reducir el esfuerzo al minimo.
    </p>
    <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',fontSize:'15px',padding:'18px 36px'}}>Solicitar diagnostico TISAX gratuito &#x2192;</Link>
  </div>
</section>
    </>
  )
}
