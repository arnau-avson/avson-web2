import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
<section className="hero">
  <div className="hero__inner">
    <div className="hero__left anim-fade-up">
      <span className="label-tag">Consultoría GRC · Certificado ENS · Certificación Garantizada</span>
      <h1 className="display-title">El ENS es el pasaporte<br /><em>al sector público.</em></h1>
      <p className="body-large mt-32" style={{maxWidth:'480px'}}>Obligatorio desde 2022 para licitar con la Administración Pública. Te certificamos en 3–4 meses. Con garantía de éxito por escrito.</p>
      <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/contacto.html' }} style={{display:'flex',gap:'0',marginTop:'32px',marginBottom:'16px',maxWidth:'480px',boxShadow:'0 4px 24px rgba(26,39,68,0.12)'}}>
        <input type="email" id="heroEmail" required placeholder="tu@empresa.com"
          style={{flex:'1',padding:'16px 20px',border:'none',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',minWidth:'0'}} />
        <button type="submit"
          style={{background:'var(--gold)',color:'var(--navy)',border:'none',padding:'16px 24px',fontFamily:'var(--font-sans)',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.04em',cursor:'pointer',whiteSpace:'nowrap',transition:'opacity 0.2s'}}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.88')} onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}>
          Diagnóstico gratis →
        </button>
      </form>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'0.78rem',color:'var(--navy-60)',marginTop:'0',marginBottom:'24px'}}>Sin compromiso · Respuesta en 24h</p>
      <div className="flex gap-24 mt-40" style={{flexWrap:'wrap'}}>
        <Link to="/contacto" className="btn-primary">Conseguir mi ENS →</Link>
        <Link to="/packs" className="btn-text">Ver packs de certificación →</Link>
      </div>
      <div className="guarantee-seal mt-32">
        <span className="guarantee-seal__icon">✦</span>
        <span className="guarantee-seal__text">Garantía de éxito<br />al 100% por escrito</span>
      </div>
      <div className="hero__stats mt-40">
        <span className="hero__stat">87+ empresas certificadas</span>
        <span className="hero__stat">100% de éxito</span>
        <span className="hero__stat">Respuesta en 24h</span>
      </div>
    </div>
    <div className="hero__right">
      <div>
        <blockquote className="hero__quote">
          "El ENS no es un coste.<br />Es la puerta a nuevos contratos."
        </blockquote>
        <p className="hero__quote-author">— Pablo García, CEO Avson</p>
      </div>
      <div className="hero__logos mt-48">
        <div className="hero__logo-item">Empresas TIC</div>
        <div className="hero__logo-item">Integradores</div>
        <div className="hero__logo-item">Consultoras</div>
        <div className="hero__logo-item">Proveedores cloud</div>
      </div>
    </div>
  </div>
</section>


<div className="trust-strip">
  <div className="trust-strip__inner">
    <div className="trust-strip__item">
      <span className="trust-strip__item-icon">✦</span>
      <span>100% de éxito garantizado por escrito</span>
    </div>
    <div className="trust-strip__divider"></div>
    <div className="trust-strip__item">
      <span className="trust-strip__item-icon">⟶</span>
      <span>3–4 meses (vs 6–12 del mercado)</span>
    </div>
    <div className="trust-strip__divider"></div>
    <div className="trust-strip__item">
      <span className="trust-strip__item-icon">◎</span>
      <span>87+ empresas certificadas</span>
    </div>
    <div className="trust-strip__divider"></div>
    <div className="trust-strip__item">
      <span className="trust-strip__item-icon">↩</span>
      <span>Diagnóstico gratuito · Respuesta en 24h</span>
    </div>
  </div>
</div>



<section style={{background:'linear-gradient(90deg,#1a1f2e 0%,#1A2744 100%)',padding:'0'}}>
  <div className="container">
    <div style={{display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap',padding:'28px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
      <div style={{display:'flex',alignItems:'center',gap:'20px',flexWrap:'wrap'}}>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'700',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--gold)',whiteSpace:'nowrap'}}>📋 Próximas licitaciones</span>
        <div style={{display:'flex',gap:'24px',flexWrap:'wrap'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>🔴 <strong style={{color:'white'}}>MINECO · Marco TIC 2026</strong> — Cierre estimado Oct 2026</span>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>🟡 <strong style={{color:'white'}}>CCAA · Plataformas Sanitarias</strong> — Publicación Q3 2026</span>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>🟡 <strong style={{color:'white'}}>Defensa · Servicios Cloud</strong> — Convocatoria Q4 2026</span>
        </div>
      </div>
      <Link to="/ens-express" style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'var(--gold)',textDecoration:'none',letterSpacing:'0.04em',whiteSpace:'nowrap'}}>¿Tienes el ENS? →</Link>
    </div>
  </div>
</section>

<div style={{background:'var(--pearl)',borderTop:'1px solid var(--border)',borderBottom:'1px solid var(--border)',padding:'24px 0'}}>
  <div className="container">
    <div style={{display:'flex',gap:'24px',alignItems:'center',flexWrap:'wrap',justifyContent:'center'}}>
      <span style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.06em',textTransform:'uppercase'}}>Herramientas gratuitas:</span>
      <Link to="/diagnostico" style={{display:'inline-flex',alignItems:'center',gap:'8px',fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'500',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 20px',background:'var(--white)',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>🎯 ¿Qué certificación necesito?</Link>
      <Link to="/calculadora-roi" style={{display:'inline-flex',alignItems:'center',gap:'8px',fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'500',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 20px',background:'var(--white)',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>📊 ¿Cuánto pierdes sin el ENS?</Link>
    </div>
  </div>
</div>


<div className="marquee">
  <div className="marquee__track">
    <span className="marquee__item marquee__item--gold">ENS</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">ISO 27001</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">ISO 22301</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">DORA</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">NIS2</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">TISAX</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">ISO 9001</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">ISO 14001</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item marquee__item--gold">ENS</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">ISO 27001</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">ISO 22301</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">DORA</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">NIS2</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">TISAX</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">ISO 9001</span>
    <span className="marquee__item">·</span>
    <span className="marquee__item">ISO 14001</span>
    <span className="marquee__item">·</span>
  </div>
</div>


<section className="section section--pearl deco-section">
  <div className="deco-number">01</div>
  <div className="container">
    <div className="grid-7-5">
      <div className="anim-fade-up">
        <span className="label-tag">Por qué ahora</span>
        <div className="gold-line"></div>
        <h2 className="section-title">Licitar sin ENS ya no<br />es una opción en España.</h2>
        <p className="body-large mt-24">El Real Decreto 311/2022 establece el Esquema Nacional de Seguridad como requisito obligatorio para cualquier empresa que preste servicios tecnológicos a la Administración Pública española. Sin él, quedas excluido de las licitaciones.</p>
        <div className="mini-points">
          <div className="mini-point">
            <div className="mini-point__title">Exclusión directa en pliegos</div>
            <div className="mini-point__text">Los organismos públicos incluyen el ENS como requisito eliminatorio en sus concursos TIC desde 2022. Sin certificado, tu oferta no se abre.</div>
          </div>
          <div className="mini-point">
            <div className="mini-point__title">Ventana de adaptación cerrada</div>
            <div className="mini-point__text">El periodo transitorio terminó. Las empresas sin ENS ya están perdiendo contratos frente a competidores certificados.</div>
          </div>
          <div className="mini-point">
            <div className="mini-point__title">La categoría importa</div>
            <div className="mini-point__text">Básica, Media o Alta según el impacto de tus servicios. Un <Link to="/contacto">diagnóstico gratuito</Link> te dice exactamente qué nivel necesitas y en cuánto tiempo lo alcanzas.</div>
          </div>
          <div className="mini-point">
            <div className="mini-point__title">El certificado ENS: documento acreditativo</div>
            <div className="mini-point__text">El <strong>certificado ENS</strong> emitido por entidad acreditada ENAC es el único documento que acredita tu conformidad con el RD 311/2022. Para ENS Básica existe también la Declaración de Conformidad, pero cada vez más pliegos exigen el certificado completo.</div>
          </div>
        </div>
      </div>
      <div className="anim-fade-up delay-2">
        <div style={{background:'var(--navy)',padding:'40px 36px',color:'var(--white)'}}>
          <span className="label-tag">Requisito legal</span>
          <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'13px',color:'rgba(255,255,255,0.4)',marginBottom:'20px',fontStyle:'italic'}}>RD 311/2022 — BOE-A-2022-7191</p>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,0.6)',lineHeight:'1.7',marginBottom:'32px'}}>"Las entidades del sector público y sus proveedores de sistemas y servicios aplicarán el ENS en el diseño y aplicación de sus sistemas de información."</p>
          <div style={{borderTop:'1px solid rgba(255,255,255,0.1)',paddingTop:'28px'}}>
            <span className="label-tag" style={{marginBottom:'20px'}}>Categorías ENS</span>
            <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 0',borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
                <span style={{fontSize:'13px',fontWeight:'500',color:'rgba(255,255,255,0.8)'}}>BÁSICA</span>
                <span style={{fontSize:'11px',color:'rgba(255,255,255,0.35)',letterSpacing:'0.06em'}}>45 medidas</span>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 0',borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
                <span style={{fontSize:'13px',fontWeight:'500',color:'rgba(255,255,255,0.8)'}}>MEDIA</span>
                <span style={{fontSize:'11px',color:'rgba(255,255,255,0.35)',letterSpacing:'0.06em'}}>60 medidas</span>
              </div>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 0'}}>
                <span style={{fontSize:'13px',fontWeight:'500',color:'rgba(255,255,255,0.8)'}}>ALTA</span>
                <span style={{fontSize:'11px',color:'rgba(255,255,255,0.35)',letterSpacing:'0.06em'}}>75 medidas</span>
              </div>
            </div>
          </div>
          <Link to="/ens" className="btn-primary btn-primary--white mt-32" style={{marginTop:'32px'}}>Saber más sobre el ENS →</Link>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">
    <span className="label-tag">Nuestro proceso</span>
    <div className="gold-line"></div>
    <h2 className="section-title">De diagnóstico a certificado ENS<br />en 3–4 meses.</h2>
    <div className="timeline mt-64">
      <div className="timeline__step anim-fade-up">
        <div className="timeline__number">01</div>
        <div className="timeline__week">Semana 1</div>
        <div className="timeline__title">Diagnóstico gratuito</div>
        <div className="timeline__desc">Analizamos tu situación actual respecto al ENS: sistemas en alcance, madurez de controles existentes y categoría aplicable. Sin compromiso.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-1">
        <div className="timeline__number">02</div>
        <div className="timeline__week">Semana 2</div>
        <div className="timeline__title">Plan de implementación</div>
        <div className="timeline__desc">Diseñamos un roadmap personalizado con prioridades, responsables y cronograma detallado. Incluye análisis de diferencias y plan de tratamiento.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-2">
        <div className="timeline__number">03</div>
        <div className="timeline__week">Semanas 3–10</div>
        <div className="timeline__title">Implementación con herramientas especializadas de IA</div>
        <div className="timeline__desc">Ejecutamos la implementación apoyados en herramientas especializadas de IA: documentación automatizada, gestión de riesgos y seguimiento en tiempo real.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-3">
        <div className="timeline__number">04</div>
        <div className="timeline__week">Semanas 11–14</div>
        <div className="timeline__title">Auditoría y certificación</div>
        <div className="timeline__desc">Coordinamos la auditoría externa con entidad acreditada ENAC. Nuestra tasa de éxito en primera convocatoria es del 100%.</div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <span className="label-tag">Certificaciones</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Del certificado ENS a un ecosistema GRC completo.</h2>
    <p className="body-large mt-16" style={{maxWidth:'600px'}}>El ENS comparte hasta un 65% de requisitos con ISO 27001. Una vez certificado, el resto del camino es más corto y mucho más económico. Descubre nuestras <Link to="/packs">certificaciones en cascada</Link>.</p>
    <div className="grid-4 mt-48" style={{gridTemplateColumns:'repeat(4,1fr)'}}>
      <div className="card anim-fade-up">
        <div className="card__title">ENS</div>
        <p className="card__body">Esquema Nacional de Seguridad. Obligatorio para proveedores del sector público español.</p>
        <Link to="/ens" className="card__link">Saber más →</Link>
      </div>
      <div className="card anim-fade-up delay-1">
        <div className="card__title">ISO 27001</div>
        <p className="card__body">El estándar internacional de seguridad de la información. Reconocido globalmente.</p>
        <Link to="/iso27001" className="card__link">Saber más →</Link>
      </div>
      <div className="card anim-fade-up delay-2">
        <div className="card__title">ISO 22301</div>
        <p className="card__body">Continuidad de negocio. Garantiza que tu empresa sigue operando ante cualquier incidente.</p>
        <Link to="/iso22301" className="card__link">Saber más →</Link>
      </div>
      <div className="card anim-fade-up delay-3">
        <div className="card__title">DORA</div>
        <p className="card__body">Resiliencia operativa digital para empresas con dependencia crítica de las TIC. Obligatorio en la UE.</p>
        <Link to="/dora" className="card__link">Saber más →</Link>
      </div>
      <div className="card anim-fade-up">
        <div className="card__title">NIS2</div>
        <p className="card__body">Directiva europea de ciberseguridad. Afecta a más de 160.000 entidades en España.</p>
        <Link to="/nis2" className="card__link">Saber más →</Link>
      </div>
      <div className="card anim-fade-up delay-1">
        <div className="card__title">TISAX</div>
        <p className="card__body">Estándar de seguridad para empresas en cadenas de suministro con requisitos de confidencialidad.</p>
        <Link to="/tisax" className="card__link">Saber más →</Link>
      </div>
      <div className="card anim-fade-up delay-2">
        <div className="card__title">Otras ISOs</div>
        <p className="card__body">ISO 9001, ISO 14001, ISO 45001 y más. Integramos todos los marcos en un SGSI cohesionado.</p>
        <Link to="/otras" className="card__link">Saber más →</Link>
      </div>
      <div className="card anim-fade-up delay-3" style={{background:'var(--pearl)',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',textAlign:'center',gap:'12px'}}>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'36px',fontWeight:'300',color:'var(--gold)'}}>87+</div>
        <div style={{fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.06em',textTransform:'uppercase',fontWeight:'500'}}>Empresas certificadas</div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy">
  <div className="container">
    <span className="label-tag">Packs GRC</span>
    <div className="gold-line"></div>
    <h2 className="section-title section-title--white">Certifícate en varios marcos.<br /><em>A coste marginal.</em></h2>
    <p className="mt-16" style={{fontSize:'17px',color:'rgba(255,255,255,0.55)',maxWidth:'560px',lineHeight:'1.65'}}>El ENS ya hace el 65% del trabajo para ISO 27001. No tiene sentido certificarse por separado. Aprovecha la sinergia.</p>
    <div className="pack-grid mt-48">
      <div className="pack-card anim-fade-up">
        <div className="pack-card__label">Pack Starter</div>
        <div className="pack-card__title">ENS Starter</div>
        <div className="pack-card__tags">
          <span className="pack-card__tag">ENS Básica / Media</span>
        </div>
        <p className="pack-card__desc">Para empresas que quieren certificarse por primera vez. Incluye diagnóstico, implementación completa y acompañamiento en auditoría.</p>
        <Link to="/contacto" className="btn-primary">Solicitar precio →</Link>
      </div>
      <div className="pack-card anim-fade-up delay-1">
        <div className="pack-card__label">Pack más solicitado</div>
        <div className="pack-card__title">ENS + ISO 27001</div>
        <div className="pack-card__tags">
          <span className="pack-card__tag">ENS</span>
          <span className="pack-card__tag">ISO 27001</span>
        </div>
        <p className="pack-card__desc">Seguridad completa: cumples con la AAPP y tienes el estándar internacional reconocido globalmente. El combo más demandado por pymes tecnológicas.</p>
        <Link to="/contacto" className="btn-primary">Solicitar precio →</Link>
      </div>
      <div className="pack-card anim-fade-up delay-2">
        <div className="pack-card__label">Servicios críticos</div>
        <div className="pack-card__title">ENS + ISO 22301</div>
        <div className="pack-card__tags">
          <span className="pack-card__tag">ENS</span>
          <span className="pack-card__tag">ISO 22301</span>
        </div>
        <p className="pack-card__desc">Continuidad garantizada para proveedores de servicios críticos a la administración. Ideal para empresas que no pueden permitirse interrupciones.</p>
        <Link to="/contacto" className="btn-primary">Solicitar precio →</Link>
      </div>
      <div className="pack-card anim-fade-up delay-3" style={{borderColor:'var(--gold)'}}>
        <div className="pack-card__label" style={{color:'var(--navy)'}}>Hoja de ruta completa</div>
        <div className="pack-card__title">Pack Triple</div>
        <div className="pack-card__tags">
          <span className="pack-card__tag">ENS</span>
          <span className="pack-card__tag">ISO 27001</span>
          <span className="pack-card__tag">ISO 22301</span>
        </div>
        <p className="pack-card__desc">El ecosistema GRC completo. Máxima competitividad en licitaciones, reconocimiento internacional y continuidad certificada. Precio significativamente inferior a tres proyectos separados.</p>
        <Link to="/contacto" className="btn-primary">Solicitar precio →</Link>
      </div>
    </div>
    <div className="mt-48" style={{textAlign:'center',paddingTop:'40px',borderTop:'1px solid rgba(255,255,255,0.08)'}}>
      <p style={{fontSize:'16px',color:'rgba(255,255,255,0.55)',marginBottom:'20px'}}>¿Necesitas algo más específico? Diseñamos el pack a tu medida.</p>
      <Link to="/contacto" className="btn-primary btn-primary--white">Diseñar mi pack personalizado →</Link>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">
    <span className="label-tag">Por qué Avson</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Lo que nos diferencia<br />de la competencia.</h2>
    <div className="mt-48">
      <table className="compare-table">
        <thead>
          <tr>
            <th style={{width:'40%'}}></th>
            <th style={{width:'30%'}}>Avson GRC</th>
            <th style={{width:'30%'}}>Competencia típica</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Tiempo de certificación</td>
            <td><span className="check-yes">3–4 meses</span></td>
            <td className="check-no">6–12 meses</td>
          </tr>
          <tr>
            <td>Garantía de éxito</td>
            <td><span className="check-yes">✓ Por escrito</span></td>
            <td className="check-no">✗ No existe</td>
          </tr>
          <tr>
            <td>IA en implementación</td>
            <td><span className="check-yes">✓ Herramientas IA</span></td>
            <td className="check-no">✗ Procesos manuales</td>
          </tr>
          <tr>
            <td>Packs combinados</td>
            <td><span className="check-yes">✓ Coste marginal</span></td>
            <td className="check-no">✗ Precio por proyecto</td>
          </tr>
          <tr>
            <td>Soporte post-certificación</td>
            <td><span className="check-yes">✓ Incluido</span></td>
            <td className="check-no">✗ Precio adicional</td>
          </tr>
          <tr>
            <td>Especialización ENS</td>
            <td><span className="check-yes">✓ Especialistas puros</span></td>
            <td className="check-no">✗ Generalistas</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


<section className="section section--white" id="casos">
  <div className="container">
    <span className="label-tag">Casos de éxito</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'600px'}}>Empresas que ya tienen<br /><em>su certificación ENS.</em></h2>

    <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0',marginTop:'60px',border:'1px solid var(--border)'}}>
      <div style={{background:'var(--navy)',padding:'56px 48px',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
        <div>
          <span className="label-tag" style={{color:'var(--gold)'}}>ENS Media · ISO 27001</span>
          <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'#fff',lineHeight:'1.5',margin:'20px 0 0',fontStyle:'italic'}}>
            &ldquo;Habíamos pedido presupuesto a otras dos consultoras y los plazos que nos daban eran de más de un año. Con Avson firmamos en octubre y en febrero ya teníamos el ENS. Cuatro meses. Lo que más me convenció fue que me lo pusieron por escrito: si no pasamos la auditoría, repiten sin coste. Eso no lo ofrecía nadie más. Ahora estamos terminando el ISO 27001 aprovechando todo el trabajo previo — nos han dicho que el 60% ya estaba hecho.&rdquo;
          </blockquote>
        </div>
        <div style={{marginTop:'40px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'#fff',margin:'0'}}>J. Castellano</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.45)',margin:'4px 0 0',letterSpacing:'0.05em',textTransform:'uppercase'}}>CEO · Empresa de servicios TIC · Castilla y León</p>
        </div>
      </div>
      <div style={{background:'var(--pearl)',padding:'56px 48px'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'500',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--text-muted)',marginBottom:'32px'}}>Resultados</p>
        <div style={{display:'flex',flexDirection:'column',gap:'28px'}}>
          <div>
            <p style={{fontFamily:'var(--font-serif)',fontSize:'44px',fontWeight:'300',color:'var(--navy)',margin:'0',lineHeight:'1'}}>4 meses</p>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',margin:'6px 0 0'}}>De contrato a certificado ENS Media</p>
          </div>
          <div style={{width:'100%',height:'1px',background:'var(--border)'}}></div>
          <div>
            <p style={{fontFamily:'var(--font-serif)',fontSize:'44px',fontWeight:'300',color:'var(--navy)',margin:'0',lineHeight:'1'}}>60% hecho</p>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',margin:'6px 0 0'}}>Del camino para ISO 27001 al terminar el ENS</p>
          </div>
          <div style={{width:'100%',height:'1px',background:'var(--border)'}}></div>
          <div>
            <p style={{fontFamily:'var(--font-serif)',fontSize:'44px',fontWeight:'300',color:'var(--navy)',margin:'0',lineHeight:'1'}}>2 años</p>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',margin:'6px 0 0'}}>Llevamos trabajando juntos y seguimos</p>
          </div>
        </div>
      </div>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginTop:'24px'}}>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px 36px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'19px',fontWeight:'300',color:'var(--navy)',lineHeight:'1.55',margin:'0 0 24px',fontStyle:'italic'}}>
          &ldquo;Teníamos miedo de que fuera un proceso lleno de papel y reuniones infinitas. No fue así. Nos marcaron un ritmo claro desde el principio y cuando llegó la auditoría sabíamos exactamente qué iba a pasar. Pasamos a la primera.&rdquo;
        </blockquote>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'500',color:'var(--navy)',margin:'0'}}>R. Morales</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',margin:'4px 0 0',letterSpacing:'0.04em',textTransform:'uppercase'}}>Directora de Operaciones · Consultora tecnológica · Madrid</p>
      </div>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px 36px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'19px',fontWeight:'300',color:'var(--navy)',lineHeight:'1.55',margin:'0 0 24px',fontStyle:'italic'}}>
          &ldquo;Empezamos solo con el ENS porque era lo urgente. Cuando vimos cómo trabajaban decidimos quedarnos con ellos para el ISO 22301. El precio fue marginal comparado con empezar desde cero — y el equipo ya nos conocía.&rdquo;
        </blockquote>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'500',color:'var(--navy)',margin:'0'}}>A. Vidal</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',margin:'4px 0 0',letterSpacing:'0.04em',textTransform:'uppercase'}}>CTO · Proveedor de software para AAPP · Andalucía</p>
      </div>
    </div>

    <div style={{textAlign:'center',marginTop:'56px'}}>
      <Link to="/contacto" className="btn-primary">Empieza tu certificaci&oacute;n →</Link>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">
    <span className="label-tag">Formación</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Webinars gratuitos para<br />entender la normativa.</h2>
    <div className="grid-3 mt-48">
      <div className="webinar-card anim-fade-up">
        <span className="webinar-card__date">25 Jun 2026 · 17:00h</span>
        <h3 className="webinar-card__title">ENS 2026: Todo lo que necesitas saber para licitar</h3>
        <div className="webinar-card__meta">
          <span>60 minutos</span>
          <span>·</span>
          <span>Gratuito</span>
        </div>
        <Link to="/webinars" className="btn-primary mt-8" style={{marginTop:'8px'}}>Reservar plaza →</Link>
      </div>
      <div className="webinar-card anim-fade-up delay-1">
        <span className="webinar-card__date">2 Jul 2026 · 17:00h</span>
        <h3 className="webinar-card__title">ISO 27001 en 2026: Cambios y oportunidades</h3>
        <div className="webinar-card__meta">
          <span>60 minutos</span>
          <span>·</span>
          <span>Gratuito</span>
        </div>
        <Link to="/webinars" className="btn-primary mt-8" style={{marginTop:'8px'}}>Reservar plaza →</Link>
      </div>
      <div className="webinar-card anim-fade-up delay-2">
        <span className="webinar-card__date">9 Jul 2026 · 17:00h</span>
        <h3 className="webinar-card__title">NIS2: ¿Afecta a tu empresa? Claves prácticas</h3>
        <div className="webinar-card__meta">
          <span>60 minutos</span>
          <span>·</span>
          <span>Gratuito</span>
        </div>
        <Link to="/webinars" className="btn-primary mt-8" style={{marginTop:'8px'}}>Reservar plaza →</Link>
      </div>
    </div>
    <div className="mt-40 text-center">
      <Link to="/webinars" className="btn-text">Ver todos los webinars →</Link>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <span className="label-tag">El equipo</span>
    <div className="gold-line"></div>
    <h2 className="section-title">12 expertos GRC<br />a tu servicio.</h2>
    <div className="team-grid mt-48" style={{gridTemplateColumns:'repeat(4,1fr)'}}>
      <div className="team-member anim-fade-up">
        <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Pablo García" className="team-member__photo" />
        <span className="team-member__cert">ISO 27001 Lead Auditor</span>
        <h3 className="team-member__name">Pablo García</h3>
        <span className="team-member__role">CEO & Fundador</span>
        <p className="team-member__bio">Especialista en ENS y gestión del riesgo en entornos de licitación pública.</p>
      </div>
      <div className="team-member anim-fade-up delay-1">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Laura Sánchez" className="team-member__photo" />
        <span className="team-member__cert">ENS Expert</span>
        <h3 className="team-member__name">Laura Sánchez</h3>
        <span className="team-member__role">Directora de Proyectos</span>
        <p className="team-member__bio">Lead Auditor ISO 27001/22301. +40 certificaciones ENS lideradas.</p>
      </div>
      <div className="team-member anim-fade-up delay-2">
        <img src="https://randomuser.me/api/portraits/women/44.jpg2" alt="Carlos Jiménez" className="team-member__photo" loading="lazy" />
        <span className="team-member__cert">CISM</span>
        <h3 className="team-member__name">Carlos Jiménez</h3>
        <span className="team-member__role">Senior GRC Consultant</span>
        <p className="team-member__bio">Especializado en DORA y NIS2. Trabaja con empresas que necesitan adaptarse a la regulación europea.</p>
      </div>
      <div className="team-member anim-fade-up delay-3">
        <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="Ana Rodríguez" className="team-member__photo" loading="lazy" />
        <span className="team-member__cert">Auditora ENAC</span>
        <h3 className="team-member__name">Ana Rodríguez</h3>
        <span className="team-member__role">Especialista ENS</span>
        <p className="team-member__bio">Auditora ENS acreditada. +40 certificaciones ENS.</p>
      </div>
    </div>
    <div className="mt-48 text-center">
      <Link to="/equipo" className="btn-text">Conocer al equipo completo →</Link>
    </div>
  </div>
</section>



<section className="section section--pearl" style={{padding:'80px 0'}}>
  <div className="container">
    <div className="anim-fade-up" style={{textAlign:'center',marginBottom:'64px'}}>
      <span className="label-tag">No actuar también tiene un coste</span>
      <div className="gold-line gold-line--center"></div>
      <h2 className="section-title">Lo que pierdes cada mes<br /><em>sin el certificado ENS.</em></h2>
    </div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))',gap:'24px',maxWidth:'960px',margin:'0 auto 48px'}}>
      <div className="anim-fade-up" style={{background:'var(--white)',border:'1px solid var(--border)',borderTop:'3px solid #dc2626',padding:'36px 32px'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'52px',fontWeight:'300',color:'#dc2626',lineHeight:'1',marginBottom:'16px'}}>1/3</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>de los pliegos TIC lo exigen como eliminatorio</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Sin ENS, tu oferta no se abre. No hay puntuación, no hay valoración. Quedas fuera antes de empezar.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',border:'1px solid var(--border)',borderTop:'3px solid #dc2626',padding:'36px 32px'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'52px',fontWeight:'300',color:'#dc2626',lineHeight:'1',marginBottom:'16px'}}>6–12</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>meses espera la media en el mercado</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Cada mes que pospones el certificado es un mes más de licitaciones a las que no puedes acceder. Con Avson: 3-4 meses.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',border:'1px solid var(--border)',borderTop:'3px solid #dc2626',padding:'36px 32px'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'52px',fontWeight:'300',color:'#dc2626',lineHeight:'1',marginBottom:'16px'}}>180k€</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>valor medio de un contrato TIC público en España</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>¿Cuántos de estos contratos se ha llevado ya tu competencia mientras tú esperas? Calcula tu pérdida →</p>
      </div>
    </div>
    
    <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px 48px',maxWidth:'760px',margin:'0 auto',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap'}}>
      <div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'8px'}}>⚡ ¿Tu licitación es urgente?</p>
        <p style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'400',color:'var(--white)',marginBottom:'4px',lineHeight:'1.2'}}>ENS Express: certificado en 30 días.</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.55)'}}>Para pliegues que cierran en menos de 8 semanas. Solo 4 plazas por mes.</p>
      </div>
      <Link to="/ens-express" className="btn-primary btn-primary--white" style={{whiteSpace:'nowrap'}}>Ver ENS Express →</Link>
    </div>
  </div>
</section>

<section className="section section--pearl" id="preguntas-frecuentes">
  <div className="container">
    <span className="label-tag">Preguntas frecuentes</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Las dudas más habituales<br /><em>antes de certificarse.</em></h2>
    <div className="faq-grid mt-48" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'0',border:'1px solid var(--border)'}}>
      <div className="faq-item" style={{borderRight:'1px solid var(--border)',borderBottom:'1px solid var(--border)',padding:'0'}}>
        <div className="faq-item__question" style={{padding:'28px 32px'}}>"¿Cuánto cuesta la certificación ENS?"<div className="faq-item__icon"></div></div>
        <div className="faq-item__answer" style={{padding:'0 32px 28px'}}>El coste varía según la categoría (Básica, Media o Alta) y el punto de partida de tu empresa. Lo que sí sabemos es que el coste de no tener el ENS — contratos perdidos, licitaciones excluidas — es mucho mayor. El diagnóstico gratuito incluye una propuesta económica sin compromiso. La mayoría de nuestros clientes recuperan la inversión en el primer contrato público que consiguen gracias al certificado.</div>
      </div>
      <div className="faq-item" style={{borderBottom:'1px solid var(--border)',padding:'0'}}>
        <div className="faq-item__question" style={{padding:'28px 32px'}}>"¿Cuánto tiempo va a quitarnos esto?"<div className="faq-item__icon"></div></div>
        <div className="faq-item__answer" style={{padding:'0 32px 28px'}}>Con Avson, el proceso completo dura entre 3 y 4 meses. Y tu equipo interno dedica mucho menos tiempo del que imaginas: gestionamos toda la documentación, la coordinación con la entidad auditora y el seguimiento semanal. Tu papel principal es facilitar el acceso a sistemas y validar decisiones. El resto lo llevamos nosotros.</div>
      </div>
      <div className="faq-item" style={{borderRight:'1px solid var(--border)',borderBottom:'1px solid var(--border)',padding:'0'}}>
        <div className="faq-item__question" style={{padding:'28px 32px'}}>"¿El ENS es realmente obligatorio para mi empresa?"<div className="faq-item__icon"></div></div>
        <div className="faq-item__answer" style={{padding:'0 32px 28px'}}>Si tu empresa presta cualquier servicio tecnológico a organismos públicos españoles — desde software hasta cloud o consultoría IT — sí, el ENS es obligatorio desde el RD 311/2022. No es una recomendación: es un requisito eliminatorio en los pliegos de contratación. Si tienes dudas sobre si te afecta, el diagnóstico gratuito te lo resuelve en 5 días hábiles sin ningún compromiso.</div>
      </div>
      <div className="faq-item" style={{borderBottom:'1px solid var(--border)',padding:'0'}}>
        <div className="faq-item__question" style={{padding:'28px 32px'}}>"¿Es un proceso muy complicado internamente?"<div className="faq-item__icon"></div></div>
        <div className="faq-item__answer" style={{padding:'0 32px 28px'}}>No, si tienes el acompañamiento adecuado. Avson gestiona el 90% del proceso: análisis GAP, documentación, políticas, formación al equipo y preparación para la auditoría. Usamos herramientas especializadas de IA que automatizan la generación de documentación y el seguimiento de evidencias. Tú validas y decides; nosotros ejecutamos.</div>
      </div>
      <div className="faq-item" style={{borderRight:'1px solid var(--border)',padding:'0'}}>
        <div className="faq-item__question" style={{padding:'28px 32px'}}>"¿Qué pasa si no pasamos la auditoría?"<div className="faq-item__icon"></div></div>
        <div className="faq-item__answer" style={{padding:'0 32px 28px'}}>Si no superas la auditoría habiendo seguido nuestro plan al 100%, cubrimos el coste de la segunda sin cargo adicional. Lo ponemos por escrito desde el primer día. Nuestra tasa de éxito en primera convocatoria es del 100% en más de 87 certificaciones. Nadie más en el mercado ofrece esta garantía. No porque sea fácil, sino porque estamos seguros de nuestro proceso.</div>
      </div>
      <div className="faq-item" style={{padding:'0'}}>
        <div className="faq-item__question" style={{padding:'28px 32px'}}>"¿Qué diferencia hay entre ENS Básica, Media y Alta?"<div className="faq-item__icon"></div></div>
        <div className="faq-item__answer" style={{padding:'0 32px 28px'}}>La categoría depende del impacto potencial de un incidente en los sistemas que gestionas. La Básica (45 medidas) aplica a la mayoría de pymes TIC. La Media (60 medidas) requiere doble factor de autenticación y monitorización periódica — es la más habitual en proveedores de tamaño medio. La Alta (75 medidas) se aplica a infraestructuras críticas. El diagnóstico gratuito determina tu categoría exacta y el camino más eficiente para alcanzarla.</div>
      </div>
    </div>
    <div style={{textAlign:'center',marginTop:'40px'}}>
      <Link to="/ens" className="btn-text">Ver todas las preguntas sobre el ENS →</Link>
    </div>
  </div>
</section>


<section className="section section--navy" style={{textAlign:'center'}}>
  <div className="container">
    <div style={{maxWidth:'640px',margin:'0 auto'}}>
      <span className="label-tag" style={{textAlign:'center'}}>Dar el primer paso</span>
      <div className="gold-line gold-line--center"></div>
      <h2 className="section-title section-title--white">¿Listo para conseguir<br /><em>tu certificación?</em></h2>
      <p className="mt-24" style={{fontSize:'17px',color:'rgba(255,255,255,0.5)',lineHeight:'1.65'}}>Diagnóstico gratuito. Sin compromiso. Respuesta en 24 horas.</p>
      <div className="flex gap-24 mt-40" style={{justifyContent:'center',flexWrap:'wrap'}}>
        <Link to="/contacto" className="btn-primary btn-primary--white">Solicitar consulta gratuita</Link>
        <Link to="/packs" className="btn-text btn-text--white">Ver nuestros packs →</Link>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
