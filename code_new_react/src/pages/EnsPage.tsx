import { useState, useEffect, FormEvent } from 'react'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    quote: '"Llevabamos dos anos perdiendo licitaciones por no tener el ENS. Avson nos lo resolvio en 9 semanas. Al siguiente concurso, ganamos el contrato."',
    author: '— Director de Sistemas · Integradora TIC, Madrid',
    result: 'ENS Media ✓',
  },
  {
    quote: '"Otros consultores nos decian un ano. Avson lo hizo en 14 semanas y superamos la auditoria a la primera, sin una sola no conformidad."',
    author: '— CISO · Proveedor cloud del sector publico',
    result: 'ENS Alta + ISO 27001 ✓',
  },
  {
    quote: '"Un cliente enterprise nos exigia la ISO 27001 para renovar el contrato. La certificamos en cuatro meses y medio sin parar el negocio."',
    author: '— CTO · Empresa de software de gestion',
    result: 'ISO 27001 ✓',
  },
  {
    quote: '"Despues del ransomware de 2023 la direccion quiso ISO 22301. Avson monto el plan de continuidad y certificamos sin sobresaltos."',
    author: '— Responsable de Riesgos · Servicios financieros',
    result: 'ISO 22301 ✓',
  },
  {
    quote: '"Somos proveedores TIC de tres bancos. Cuando entro DORA nos pidieron evidencias y Avson demostro que el 60% ya estaba hecho con el ENS."',
    author: '— CISO · Proveedor financiero',
    result: 'DORA ✓',
  },
  {
    quote: '"Lo que nos decidio fue la garantia por escrito. Cumplieron el plazo y el presupuesto que firmamos, sin una sola sorpresa."',
    author: '— CEO · Consultora tecnologica',
    result: 'ENS Basica ✓',
  },
]

export default function EnsPage() {
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
{/* ENS HERO */}
<section className="page-hero" style={{paddingBottom:'56px'}}>
  <div className="container">
    <div className="page-hero__breadcrumb">
      <Link to="/">Inicio</Link>
      <span>/</span>
      <span style={{color:'var(--navy)'}}>ENS</span>
    </div>
    <div className="hero-conv">

      {/* IZQUIERDA */}
      <div>
        <span className="ens-fomo-chip">⚠ El 85% de empresas sin ENS pierde sus licitaciones</span>
        <h1 className="display-title" style={{margin:'0'}}>Certificado ENS para vender<br /><em>al sector publico.</em></h1>
        <p className="body-large" style={{maxWidth:'540px',marginTop:'18px'}}>
          <strong style={{color:'var(--navy)'}}>Garantia de devolucion por escrito:</strong> si no lo conseguimos, te devolvemos el dinero. Los unicos del mercado que lo firman en el contrato.
        </p>

        <div className="hero-conv__kpis">
          <div className="hero-conv__kpi"><strong>355+</strong><span>empresas certificadas</span></div>
          <div className="hero-conv__kpi"><strong>100%</strong><span>tasa de exito</span></div>
          <div className="hero-conv__kpi"><strong>4.9★</strong><span>valoracion clientes</span></div>
        </div>

        <div style={{display:'inline-flex',alignItems:'center',gap:'8px',border:'1px solid #C9A84C',padding:'9px 16px',borderRadius:'8px'}}>
          <span style={{fontSize:'16px',color:'#C9A84C'}}>✦</span>
          <span style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',fontWeight:'600',letterSpacing:'0.06em',textTransform:'uppercase',color:'#1A2744'}}>Garantia de exito al 100% por escrito</span>
        </div>

        {/* Prueba social */}
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.6',margin:'20px 0 0',maxWidth:'480px'}}>
          <span style={{color:'#C9A84C',letterSpacing:'1px'}}>★★★★★</span><br />
          <em>"Llevabamos dos anos perdiendo licitaciones por no tener el ENS. Avson nos lo resolvio en 9 semanas. Al siguiente concurso, ganamos el contrato."</em> — Director de Sistemas, integradora TIC
        </p>
      </div>

      {/* DERECHA: formulario */}
      <div style={{background:'#fff',border:'1px solid #E5E5E0',borderRadius:'14px',padding:'30px',boxShadow:'0 18px 50px rgba(26,39,68,0.12)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'700',color:'#16a34a',margin:'0 0 4px'}}>🟢 Te llamamos hoy mismo</p>
        <p style={{fontFamily:'var(--font-serif)',fontSize:'27px',color:'var(--navy)',margin:'0 0 4px'}}>Habla con un experto</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',margin:'0 0 18px'}}>Gratuito · Sin compromiso · En 30 min sabes que necesitas</p>
        <form onSubmit={handleHeroSubmit} style={{display:'flex',flexDirection:'column',gap:'11px'}}>
          <input type="text" name="nombre" placeholder="Tu nombre *" required style={{padding:'13px 16px',border:'1.5px solid #E5E5E0',borderRadius:'8px',fontFamily:'var(--font-sans)',fontSize:'15px',color:'#1A2744',outline:'none'}} />
          <input type="email" name="email" placeholder="Tu email *" required style={{padding:'13px 16px',border:'1.5px solid #E5E5E0',borderRadius:'8px',fontFamily:'var(--font-sans)',fontSize:'15px',color:'#1A2744',outline:'none'}} />
          <div style={{display:'flex',alignItems:'flex-start',gap:'9px',fontFamily:'var(--font-sans)',fontSize:'11px',color:'#7A8499',lineHeight:'1.5'}}>
            <input type="checkbox" required style={{width:'15px',height:'15px',flexShrink:'0',marginTop:'1px',accentColor:'#1A2744'}} />
            <span>Al enviar, acepto que Avson me contacte para responder mi consulta. <Link to="/privacidad" target="_blank" style={{color:'#1A2744'}}>Politica de privacidad</Link></span>
          </div>
          <button type="submit" className="v3-btn v3-btn--gold v3-btn--full v3-btn--xl v3-btn--pulse">Quiero mi certificado ENS →</button>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'#B0B8C4',textAlign:'center',margin:'0'}}>🔒 Gratuito · Sin compromiso · Confidencial</p>
        </form>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',textAlign:'center',margin:'14px 0 0'}}>¿Prefieres escribirnos? <a href="mailto:hello@avson.eu" style={{color:'var(--navy)',fontWeight:'600'}}>hello@avson.eu</a></p>
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
      <button className="tcar__arrow tcar__arrow--prev" aria-label="Anterior" onClick={prevSlide}>‹</button>
      <button className="tcar__arrow tcar__arrow--next" aria-label="Siguiente" onClick={nextSlide}>›</button>
      <div className="tcar__view">
        <div className="tcar__track" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
          {testimonials.map((t, i) => (
            <div className="tcar__slide" key={i}>
              <div className="tcar__card">
                <div className="tcar__stars">★★★★★</div>
                <p className="tcar__quote">{t.quote}</p>
                <p className="tcar__author">{t.author}</p>
                <p className="tcar__result">{t.result}</p>
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

{/* ENS EXPRESS BANNER */}
<section style={{background:'linear-gradient(135deg,#dc2626 0%,#991B1B 100%)',padding:'28px 40px'}}>
  <div style={{maxWidth:'1100px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap'}}>
    <div>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'700',letterSpacing:'0.12em',textTransform:'uppercase',color:'rgba(255,255,255,0.7)',marginBottom:'6px'}}>⚡ ¿Tu licitacion cierra pronto?</p>
      <p style={{fontFamily:'var(--font-serif)',fontSize:'26px',fontWeight:'400',color:'#fff',lineHeight:'1.2',margin:'0'}}>ENS Express — Certificado en 30 dias.</p>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.7)',marginTop:'6px'}}>Solo 6 plazas al mes · Equipo dedicado · Misma garantia de exito</p>
    </div>
    <div style={{display:'flex',gap:'12px',flexWrap:'wrap',alignItems:'center'}}>
      <Link to="/ens-express" style={{background:'#fff',color:'#dc2626',fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'700',padding:'14px 28px',borderRadius:'8px',textDecoration:'none',whiteSpace:'nowrap'}}>Ver ENS Express →</Link>
      <Link to="/contacto" style={{background:'rgba(255,255,255,0.15)',color:'#fff',fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',padding:'14px 20px',borderRadius:'8px',textDecoration:'none',whiteSpace:'nowrap',border:'1px solid rgba(255,255,255,0.3)'}}>Habla con un experto</Link>
    </div>
  </div>
</section>

{/* CATEGORIES */}
<section className="section section--pearl">
  <div className="container">
    <div className="mt-64">
      <span className="label-tag">Categorias ENS</span>
      <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'28px',fontWeight:'500',color:'var(--navy)',marginBottom:'32px'}}>¿Que categoria de certificacion ENS necesitas?</h3>
      <div className="ens-categories">
        <div className="ens-cat">
          <div className="ens-cat__level">Categoria Basica</div>
          <div className="ens-cat__title">~45 medidas</div>
          <div className="ens-cat__desc">Para sistemas con impacto limitado. Perjuicio a un numero reducido de ciudadanos o a activos de valor bajo. La mayoria de pymes TIC proveedoras del sector publico.</div>
        </div>
        <div className="ens-cat" style={{borderColor:'var(--gold)'}}>
          <div className="ens-cat__level">Categoria Media</div>
          <div className="ens-cat__title">~60 medidas</div>
          <div className="ens-cat__desc">Para sistemas con impacto significativo. Afecta a un numero importante de ciudadanos o a activos de valor medio. Requiere autenticacion de doble factor y monitorizacion periodica.</div>
        </div>
        <div className="ens-cat">
          <div className="ens-cat__level">Categoria Alta</div>
          <div className="ens-cat__title">73 medidas</div>
          <div className="ens-cat__desc">Para infraestructuras criticas y servicios esenciales. Afecta a mas de 100.000 ciudadanos. Requiere certificado digital, SIEM y grupo electrogeno con 2h de autonomia.</div>
        </div>
      </div>
    </div>

    {/* SPEED BANNER AFTER CATEGORIES */}
    <div style={{background:'#ECFDF5',border:'2px solid #059669',borderRadius:'12px',padding:'24px 32px',margin:'32px 0',display:'flex',alignItems:'center',gap:'20px',flexWrap:'wrap'}}>
      <div style={{fontSize:'32px'}}>🛡️</div>
      <div>
        <div style={{fontSize:'18px',fontWeight:'700',color:'#065F46'}}>Como obtener el certificado ENS en semanas, no meses con garantia</div>
        <div style={{fontSize:'14px',color:'#047857',marginTop:'4px'}}>Proceso agil y sencillo. Nos encargamos de todo. Tu solo firmas el certificado.</div>
      </div>
      <Link to="/contacto" className="v3-btn v3-btn--gold" style={{marginLeft:'auto'}}>Habla con un experto →</Link>
    </div>
  </div>
</section>

{/* WHO NEEDS IT */}
<section className="section section--pearl">
  <div className="container">
    <div className="grid-7-5">
      <div className="anim-fade-up">
        <span className="label-tag">¿Te afecta?</span>
        <div className="gold-line"></div>
        <h2 className="section-title">¿Tu empresa necesita la certificacion ENS?<br />Compruebalo ahora.</h2>
        <div className="checklist mt-32">
          <div className="checklist__item">Desarrolla o mantiene software para Administraciones Publicas</div>
          <div className="checklist__item">Presta servicios cloud a organismos del sector publico</div>
          <div className="checklist__item">Gestiona o procesa datos de ciudadanos en nombre de la AAPP</div>
          <div className="checklist__item">Quiere presentarse a licitaciones del sector publico</div>
          <div className="checklist__item">Es proveedora TIC de ayuntamientos, CCAA o ministerios</div>
          <div className="checklist__item">Subcontrata servicios a empresas que trabajan para AAPP</div>
        </div>
        <div className="mt-40" style={{border:'1px solid var(--border)',padding:'28px 28px',background:'var(--white)'}}>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'22px',fontWeight:'500',color:'var(--navy)',lineHeight:'1.3',marginBottom:'12px'}}>"Si marcas alguno de estos puntos, el ENS te afecta."</p>
          <p style={{fontSize:'14px',color:'var(--text-muted)'}}>La buena noticia: con Avson, puedes tener tu certificado en semanas, no meses con garantia de exito por escrito. <Link to="/contacto" style={{color:'var(--navy)',fontWeight:'600'}}>Habla con un experto →</Link></p>
        </div>
        <p style={{fontSize:'15px',color:'var(--text-muted)',lineHeight:'1.7',marginTop:'24px'}}>
          El <strong>certificado ENS</strong> acredita que tu empresa cumple el ENS. Para categoria Media y Alta, requiere auditoria externa por entidad acreditada por ENAC. Avson gestiona todo el proceso, incluida la coordinacion con la auditora.
        </p>
      </div>
      <div className="anim-fade-up delay-2">
        <div style={{background:'var(--navy)',padding:'40px 36px'}}>
          <span className="label-tag">Consecuencias sin ENS</span>
          <div style={{display:'flex',flexDirection:'column',gap:'20px',marginTop:'24px'}}>
            <div style={{borderLeft:'2px solid #C0392B',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.85)',marginBottom:'4px'}}>Exclusion de licitaciones</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Tu oferta no se abre si no aportas el certificado ENS. Sin excepciones.</div>
            </div>
            <div style={{borderLeft:'2px solid #E67E22',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.85)',marginBottom:'4px'}}>Contratos en riesgo</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Contratos existentes pueden ser rescindidos si el pliego lo exige y no cumples.</div>
            </div>
            <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.85)',marginBottom:'4px'}}>Perdida competitiva</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Tu competencia certificada gana puntos tecnicos adicionales que tu no puedes sumar.</div>
            </div>
          </div>
          <Link to="/contacto" className="btn-primary btn-primary--white mt-40" style={{marginTop:'32px'}}>Evitar estos riesgos →</Link>
        </div>
      </div>
    </div>

    {/* INLINE CTA BOX */}
    <div className="cta-inline-box">
      <span className="cta-inline-box__text">"La consultora ENS mas rapida de Espana. Garantia de exito por escrito."</span>
      <Link to="/contacto" className="v3-btn v3-btn--gold">Habla con un experto →</Link>
    </div>
  </div>
</section>

{/* GARANTIA DE OBTENCION */}
<section style={{padding:'48px 24px',background:'var(--pearl)'}}>
  <div className="container">
    <section style={{background:'linear-gradient(135deg, #1B3A6B, #2D5FA6)',padding:'48px 32px',textAlign:'center',borderRadius:'16px',margin:'0 0 0 0'}}>
      <div style={{maxWidth:'700px',margin:'0 auto'}}>
        <div style={{fontSize:'48px',marginBottom:'16px'}}>🏆</div>
        <h2 style={{fontFamily:"'Space Grotesk',sans-serif",fontSize:'28px',fontWeight:'700',color:'#fff',marginBottom:'12px'}}>
          Garantia total de obtencion del certificado ENS
        </h2>
        <p style={{fontSize:'16px',color:'rgba(255,255,255,0.85)',marginBottom:'28px',lineHeight:'1.6'}}>
          Somos los unicos que lo ponemos por escrito en el contrato.<br />
          Si no obtienes el certificado ENS, te devolvemos el 100% del dinero.
        </p>
        <Link to="/contacto" className="v3-btn v3-btn--gold btn-impact-lg">Habla con un experto →</Link>
      </div>
    </section>
  </div>
</section>

{/* PROCESS TIMELINE */}
<section className="section section--white">
  <div className="container">
    <span className="label-tag">Nuestro proceso</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Como obtener el certificado ENS<br /><em>con garantia de exito.</em></h2>
    <div className="speed-badge" style={{marginBottom:'24px',fontSize:'14px'}}>
      ⚡ El proceso mas rapido del sector · Garantia de exito por escrito
    </div>
    <div className="timeline mt-64">
      <div className="timeline__step anim-fade-up">
        <div className="timeline__number">01</div>
        <div className="timeline__week">Semana 1</div>
        <div className="timeline__title">Pide presupuesto</div>
        <div className="timeline__desc">Analisis de tu situacion actual: sistemas en alcance, controles existentes y categoria ENS aplicable. Informe de diferencias (GAP analysis) incluido.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-1">
        <div className="timeline__number">02</div>
        <div className="timeline__week">Semana 2</div>
        <div className="timeline__title">Plan de implementacion</div>
        <div className="timeline__desc">Roadmap detallado con todas las medidas ENS, priorizacion por criticidad, responsables asignados y cronograma semanal hasta la auditoria.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-2">
        <div className="timeline__number">03</div>
        <div className="timeline__week">Semanas 3–10</div>
        <div className="timeline__title">Implementacion con herramientas especializadas de IA</div>
        <div className="timeline__desc">Aplicamos las 45–73 medidas ENS apoyados en herramientas especializadas de IA: documentacion automatizada, analisis de riesgos MAGERIT y gestion de evidencias.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-3">
        <div className="timeline__number">04</div>
        <div className="timeline__week">Semanas 11–14</div>
        <div className="timeline__title">Auditoria y certificacion ENS</div>
        <div className="timeline__desc">Coordinamos la auditoria con entidad acreditada por ENAC. Te preparamos para cada sesion. Tasa de exito en primera convocatoria: 100%.</div>
      </div>
    </div>

    <div style={{textAlign:'center',padding:'32px 0'}}>
      <Link to="/contacto" className="v3-btn v3-btn--gold">Habla con un experto →</Link>
      <p style={{fontSize:'12px',color:'#888',marginTop:'10px'}}>Sin compromiso · Respuesta en 24h · Garantia por escrito</p>
    </div>
  </div>
</section>

{/* PACKS ENS */}
<section className="section section--pearl">
  <div className="container">
    <span className="label-tag">Packs de certificacion ENS</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Elige el pack de consultoria ENS<br />que se ajusta a tu objetivo.</h2>
    <div className="pack-grid mt-48">
      <div className="pack-card">
        <div className="pack-card__label">Entrada al mercado publico</div>
        <div className="pack-card__title">ENS Starter</div>
        <div className="pack-card__tags"><span className="pack-card__tag">ENS Basica</span></div>
        <p className="pack-card__desc">Para empresas que quieren licitar al sector publico por primera vez. Todo lo que necesitas para empezar a optar a contratos publicos.</p>
        <Link to="/packs" className="v3-btn v3-btn--gold">Comprueba tu presupuesto →</Link>
      </div>
      <div className="pack-card" style={{borderColor:'var(--gold)'}}>
        <div className="pack-card__label">El mas solicitado</div>
        <div className="pack-card__title">ENS + ISO 27001</div>
        <div className="pack-card__tags"><span className="pack-card__tag">ENS</span><span className="pack-card__tag">ISO 27001</span></div>
        <p className="pack-card__desc">Seguridad completa: cumples con la AAPP y tienes el estandar internacional. El combo mas demandado por empresas tecnologicas espanolas.</p>
        <Link to="/packs" className="v3-btn v3-btn--gold">Comprueba tu presupuesto →</Link>
      </div>
      <div className="pack-card">
        <div className="pack-card__label">Servicios criticos</div>
        <div className="pack-card__title">ENS + ISO 22301</div>
        <div className="pack-card__tags"><span className="pack-card__tag">ENS</span><span className="pack-card__tag">ISO 22301</span></div>
        <p className="pack-card__desc">Continuidad garantizada para proveedores de servicios criticos a la administracion. Ideal para servicios que no pueden interrumpirse.</p>
        <Link to="/packs" className="v3-btn v3-btn--gold">Comprueba tu presupuesto →</Link>
      </div>
      <div className="pack-card">
        <div className="pack-card__label">Maxima cobertura</div>
        <div className="pack-card__title">Pack Triple</div>
        <div className="pack-card__tags"><span className="pack-card__tag">ENS</span><span className="pack-card__tag">ISO 27001</span><span className="pack-card__tag">ISO 22301</span></div>
        <p className="pack-card__desc">La hoja de ruta GRC completa. Maxima ventaja competitiva en licitaciones, reconocimiento internacional y continuidad certificada.</p>
        <Link to="/packs" className="v3-btn v3-btn--gold">Comprueba tu presupuesto →</Link>
      </div>
    </div>

    <div style={{textAlign:'center',padding:'32px 0'}}>
      <Link to="/packs" className="v3-btn v3-btn--gold">Comprueba tu presupuesto →</Link>
      <p style={{fontSize:'12px',color:'#888',marginTop:'10px'}}>Sin compromiso · Respuesta en 24h · Garantia por escrito</p>
    </div>
  </div>
</section>

{/* CASOS DE EXITO */}
<section className="section section--white" id="casos">
  <div className="container">
    <span className="label-tag">Casos de exito</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'600px'}}>Empresas que ya tienen<br /><em>su certificacion ENS.</em></h2>

    <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0',marginTop:'60px',border:'1px solid var(--border)'}}>
      <div style={{background:'var(--navy)',padding:'56px 48px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div>
          <span className="label-tag" style={{color:'var(--gold)'}}>ENS Media</span>
          <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'#fff',lineHeight:'1.5',margin:'20px 0 0',fontStyle:'italic'}}>
            &ldquo;Nos dijeron que el ENS era cosa de seis meses minimo. Avson lo hizo en catorce semanas. Y lo firmaron: si no pasamos la auditoria, sin coste adicional. Eso cambio completamente como veiamos el riesgo del proyecto. Al final entramos a la auditoria con todo controlado y salimos certificados el primer intento.&rdquo;
          </blockquote>
        </div>
        <div style={{marginTop:'40px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'#fff',margin:'0'}}>M. Rueda</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.45)',margin:'4px 0 0',letterSpacing:'0.05em',textTransform:'uppercase'}}>Director General &middot; Integradora de sistemas &middot; Comunidad de Madrid</p>
        </div>
      </div>
      <div style={{background:'var(--pearl)',padding:'56px 48px'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'500',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--text-muted)',marginBottom:'32px'}}>Resultados</p>
        <div style={{display:'flex',flexDirection:'column',gap:'28px'}}>
          <div>
            <p style={{fontFamily:'var(--font-serif)',fontSize:'44px',fontWeight:'300',color:'var(--navy)',margin:'0',lineHeight:'1'}}>14 semanas</p>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',margin:'6px 0 0'}}>Desde el arranque hasta el certificado ENS</p>
          </div>
          <div style={{width:'100%',height:'1px',background:'var(--border)'}}></div>
          <div>
            <p style={{fontFamily:'var(--font-serif)',fontSize:'44px',fontWeight:'300',color:'var(--navy)',margin:'0',lineHeight:'1'}}>1.ª convocatoria</p>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',margin:'6px 0 0'}}>Auditoria superada sin incidencias</p>
          </div>
          <div style={{width:'100%',height:'1px',background:'var(--border)'}}></div>
          <div>
            <p style={{fontFamily:'var(--font-serif)',fontSize:'44px',fontWeight:'300',color:'var(--navy)',margin:'0',lineHeight:'1'}}>Garantia</p>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',margin:'6px 0 0'}}>Por escrito desde el primer dia</p>
          </div>
        </div>
      </div>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginTop:'24px'}}>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px 36px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'19px',fontWeight:'300',color:'var(--navy)',lineHeight:'1.55',margin:'0 0 24px',fontStyle:'italic'}}>
          &ldquo;Lo que no esperabamos era lo bien que aprovechamos ese trabajo para lo siguiente. Cuando meses despues arrancamos el ISO 27001, el equipo de Avson ya tenia casi toda la documentacion. Fue otra forma de ver la inversion.&rdquo;
        </blockquote>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'500',color:'var(--navy)',margin:'0'}}>C. Herrero</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',margin:'4px 0 0',letterSpacing:'0.04em',textTransform:'uppercase'}}>Responsable de Seguridad &middot; Empresa de desarrollo software &middot; Cataluna</p>
      </div>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px 36px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'19px',fontWeight:'300',color:'var(--navy)',lineHeight:'1.55',margin:'0 0 24px',fontStyle:'italic'}}>
          &ldquo;Llevabamos tiempo dandole vueltas pero no nos decidiamos. La primera reunion con ellos fue sin compromiso y en una hora nos explicaron exactamente que necesitabamos, que no, y cuanto iba a tardar. Esa claridad nos hizo firmar.&rdquo;
        </blockquote>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'500',color:'var(--navy)',margin:'0'}}>T. Iglesias</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',margin:'4px 0 0',letterSpacing:'0.04em',textTransform:'uppercase'}}>CEO &middot; Empresa de consultoria IT &middot; Pais Vasco</p>
      </div>
    </div>

    <div style={{textAlign:'center',marginTop:'56px'}}>
      <Link to="/contacto" className="v3-btn v3-btn--gold">Habla con un experto →</Link>
    </div>
  </div>
</section>

{/* URGENCY STRIP + ENS EXPRESS */}
<section style={{background:'var(--navy)',padding:'60px 0'}}>
  <div className="container">
    <div style={{maxWidth:'860px',margin:'0 auto'}}>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',alignItems:'center'}}>
        <div>
          <span className="label-tag" style={{background:'rgba(201,168,76,0.15)',color:'var(--gold)',borderColor:'rgba(201,168,76,0.3)'}}>Urgencia real</span>
          <div className="gold-line"></div>
          <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(28px,3.5vw,40px)',fontWeight:'300',color:'var(--white)',marginBottom:'16px',lineHeight:'1.2'}}>¿Tienes un pliego que<br /><em>cierra pronto?</em></h2>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.65)',lineHeight:'1.7',marginBottom:'24px'}}>
            El ENS estandar tarda 3-4 meses. Si tu licitacion es antes, el servicio Express lo resuelve en 30 dias naturales con un equipo de tres consultores dedicados.
          </p>
          <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'32px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'12px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)'}}>
              <span style={{color:'var(--gold)',fontSize:'16px'}}>✦</span> Arranque garantizado en 24 horas
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'12px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)'}}>
              <span style={{color:'var(--gold)',fontSize:'16px'}}>✦</span> 3 consultores dedicados exclusivamente a tu proyecto
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'12px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)'}}>
              <span style={{color:'var(--gold)',fontSize:'16px'}}>✦</span> La misma garantia de exito por escrito
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'12px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)'}}>
              <span style={{color:'var(--gold)',fontSize:'16px'}}>✦</span> Solo 6 plazas disponibles por mes
            </div>
          </div>
          <Link to="/ens-express" className="btn-primary btn-primary--white">Ver ENS Express →</Link>
        </div>
        <div style={{borderLeft:'1px solid rgba(255,255,255,0.1)',paddingLeft:'48px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'24px'}}>Calendario orientativo 2026</p>
          <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',paddingBottom:'12px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
              <span style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>Para licitar en Oct–Dic 2026</span>
              <Link to="/contacto" style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'#fbbf24',textDecoration:'none'}}>Iniciar ya →</Link>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',paddingBottom:'12px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
              <span style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>Para licitar en Ene–Mar 2027</span>
              <Link to="/contacto" style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'#86efac',textDecoration:'none'}}>Iniciar antes de sep →</Link>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',paddingBottom:'12px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
              <span style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>Para licitar en Abr–Jun 2027</span>
              <Link to="/contacto" style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'#86efac',textDecoration:'none'}}>Iniciar antes de dic →</Link>
            </div>
            <div style={{marginTop:'8px',padding:'16px',background:'rgba(255,255,255,0.05)'}}>
              <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.5)',lineHeight:'1.5',margin:'0'}}>⚡ ¿Tu fecha es antes de octubre? Preguntanos por <Link to="/ens-express" style={{color:'var(--gold)',textDecoration:'none'}}>ENS Express</Link> (30 dias).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* DECLARACION VS CERTIFICADO */}
<section className="section section--white">
  <div className="container">
    <div className="anim-fade-up" style={{maxWidth:'860px',margin:'0 auto'}}>
      <span className="label-tag">Una distincion importante</span>
      <div className="gold-line"></div>
      <h2 className="section-title" style={{maxWidth:'680px'}}>Declaracion de conformidad vs<br /><em>certificado ENS: no son lo mismo.</em></h2>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',color:'var(--text-body)',lineHeight:'1.75',marginBottom:'32px'}}>Dos formas de acreditar el ENS — y muchas empresas no conocen la diferencia hasta que ya han perdido una licitacion.</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'32px',marginBottom:'40px'}}>
        <div style={{border:'1px solid var(--border)',padding:'32px'}}>
          <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px'}}>Declaracion de Conformidad</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.7',marginBottom:'16px'}}>Es una auto-declaracion del propio proveedor. La empresa declara que cumple los requisitos del ENS <em>sin que una entidad externa lo verifique</em>. Solo es valida para la categoria Basica y tiene menor peso en los pliegos.</p>
          <ul style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.8',paddingLeft:'20px'}}>
            <li>Solo valida para ENS Basico</li>
            <li>No requiere auditoria externa</li>
            <li>Menor credibilidad ante los organismos</li>
            <li>Muchos pliegos la rechazan explicitamente</li>
          </ul>
        </div>
        <div style={{border:'2px solid var(--gold)',padding:'32px',background:'var(--pearl)'}}>
          <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px'}}>Certificado ENS ❖</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.7',marginBottom:'16px'}}>Emitido por una entidad de certificacion acreditada por ENAC tras una auditoria independiente. Es el estandar que exigen la mayoria de pliegos relevantes y el unico que da plena seguridad juridica.</p>
          <ul style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.8',paddingLeft:'20px'}}>
            <li>Valido para Basico, Medio y Alto</li>
            <li>Verificado por entidad externa acreditada</li>
            <li>Aceptado en todos los pliegos</li>
            <li>Unico reconocido en contratos de alta criticidad</li>
          </ul>
        </div>
      </div>
      <div style={{background:'var(--navy)',padding:'24px 32px',display:'flex',alignItems:'center',gap:'20px',flexWrap:'wrap'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.75)',margin:'0',flex:'1'}}>Avson gestiona el proceso completo de certificacion ENS con entidades ENAC acreditadas: Bureau Veritas, SGS, AENOR, Applus+ y BSI.</p>
        <Link to="/contacto" className="btn-primary btn-primary--white" style={{whiteSpace:'nowrap'}}>Consultar que necesito →</Link>
      </div>
      <div style={{textAlign:'center',padding:'32px 0'}}>
        <Link to="/contacto" className="v3-btn v3-btn--gold">Habla con un experto →</Link>
        <p style={{fontSize:'12px',color:'#888',marginTop:'10px'}}>Sin compromiso · Respuesta en 24h · Garantia por escrito</p>
      </div>
    </div>
  </div>
</section>

{/* ECOSISTEMA DE CERTIFICACION */}
<section className="section section--pearl">
  <div className="container">
    <div className="anim-fade-up" style={{maxWidth:'860px',margin:'0 auto'}}>
      <span className="label-tag">El ecosistema de certificacion</span>
      <div className="gold-line"></div>
      <h2 className="section-title" style={{maxWidth:'640px'}}>¿Quien emite el certificado ENS<br /><em>y como se elige?</em></h2>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',color:'var(--text-body)',lineHeight:'1.75',marginBottom:'32px'}}>El certificado lo emiten entidades acreditadas por ENAC. Todas certifican las tres categorias (Basico, Medio y Alto), pero con tiempos y especialidades distintas — la eleccion importa. Avson te recomienda la mas adecuada y gestiona la reserva de auditoria.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'16px',marginBottom:'40px'}}>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'24px',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'4px'}}>Bureau Veritas</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Basico · Medio · Alto</p>
        </div>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'24px',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'4px'}}>AENOR</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Basico · Medio · Alto</p>
        </div>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'24px',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'4px'}}>SGS</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Basico · Medio · Alto</p>
        </div>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'24px',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'4px'}}>Applus+</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Basico · Medio · Alto</p>
        </div>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'24px',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'4px'}}>BSI Group</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Basico · Medio · Alto</p>
        </div>
      </div>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.75'}}>Avson trabaja con todas las entidades acreditadas y coordina directamente la reserva del slot de auditoria. El cliente no tiene que gestionar esta parte.</p>
    </div>
  </div>
</section>
    </>
  )
}
