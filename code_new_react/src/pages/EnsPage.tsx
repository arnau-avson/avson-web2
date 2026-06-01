import { Link } from 'react-router-dom'

export default function EnsPage() {
  return (
    <>
<section className="page-hero">
  <div className="container">
    <div className="page-hero__breadcrumb">
      <Link to="/">Inicio</Link>
      <span>/</span>
      <span style={{color:'var(--navy)'}}>ENS</span>
    </div>
    <div style={{maxWidth:'780px'}}>
      <span className="label-tag">Esquema Nacional de Seguridad · RD 311/2022</span>
      <div className="gold-line"></div>
      <h1 className="display-title">Sin ENS, no puedes licitar<br /><em>al sector público español.</em></h1>
      <div className="guarantee-seal" style={{marginBottom:'24px'}}>
        <span className="guarantee-seal__icon">✦</span>
        <span className="guarantee-seal__text">Garantía de éxito<br />al 100% por escrito</span>
      </div>
      <p className="body-large mt-32" style={{maxWidth:'600px'}}>La certificación ENS, regulada por el Real Decreto 311/2022, es obligatoria para todos los proveedores de servicios digitales a la Administración Pública española. Desde 2022, no es negociable.</p>
      <div className="urgency-box">
        <p className="urgency-box__text">⚠ Empresas sin la certificación ENS están perdiendo licitaciones públicas ahora mismo. Sin ella, no es posible presentarse a contratos con la Administración Pública española. Cada semana sin certificado es una oportunidad que gana tu competencia. En lo que va de 2025, más de 40 empresas han iniciado su certificación ENS con Avson. ¿Cuándo empieza la tuya?</p>
      </div>
      <div className="flex gap-24 mt-32" style={{flexWrap:'wrap'}}>
        <Link to="/contacto" className="btn-primary">Diagnóstico gratuito →</Link>
        <Link to="/packs" className="btn-text">Ver packs de certificación →</Link>
      </div>
    </div>
  </div>
</section>


<section className="section section--white deco-section">
  <div style={{position:'absolute',top:'50%',left:'-40px',transform:'translateY(-50%)',fontFamily:'\'Cormorant Garamond\',serif',fontSize:'280px',fontWeight:'700',color:'var(--navy)',opacity:'0.025',lineHeight:'1',pointerEvents:'none',userSelect:'none'}}>ENS</div>
  <div className="container" style={{position:'relative',zIndex:'1'}}>
    <div className="grid-7-5">
      <div className="anim-fade-up">
        <span className="label-tag">Qué es el ENS</span>
        <div className="gold-line"></div>
        <h2 className="section-title">El Esquema Nacional de Seguridad:<br />el marco obligatorio de la Administración española.</h2>
        <p className="body-large mt-24">El Esquema Nacional de Seguridad establece los principios y requisitos mínimos de seguridad de la información que deben cumplir los sistemas de información de las Administraciones Públicas y sus proveedores.</p>
        <p className="mt-24" style={{fontSize:'15px',color:'var(--text-muted)',lineHeight:'1.7'}}>Aprobado por el Real Decreto 311/2022, actualiza el anterior RD 3/2010 y se alinea con el Reglamento eIDAS y la Directiva NIS2. No es una recomendación: es un requisito legal con consecuencias directas sobre tu capacidad de contratar con el sector público. Descubre también cómo el ENS se convierte en la base para <Link to="/iso27001">ISO 27001</Link>, <Link to="/iso22301">ISO 22301</Link> y <Link to="/nis2">NIS2</Link>.</p>
      </div>
      <div className="anim-fade-up delay-2">
        <div className="legal-box" style={{marginBottom:'24px'}}>
          <div className="legal-box__label">Marco legal</div>
          <div className="legal-box__text">Real Decreto 311/2022, de 3 de mayo (BOE-A-2022-7191). Deroga el RD 3/2010 y es de aplicación inmediata.</div>
        </div>
        <div className="legal-box">
          <div className="legal-box__label">Ámbito de aplicación</div>
          <div className="legal-box__text">Administraciones Públicas y entidades de su sector público. Proveedores de sistemas de información, servicios cloud, software y datos para la AAPP.</div>
        </div>
      </div>
    </div>

    
    <div className="mt-64">
      <span className="label-tag">Categorías ENS</span>
      <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'500',color:'var(--navy)',marginBottom:'32px'}}>¿Qué categoría de certificación ENS necesitas?</h3>
      <div className="ens-categories">
        <div className="ens-cat">
          <div className="ens-cat__level">Categoría Básica</div>
          <div className="ens-cat__title">45 medidas</div>
          <div className="ens-cat__desc">Para sistemas con impacto limitado. Perjuicio a un número reducido de ciudadanos o a activos de valor bajo. La mayoría de pymes TIC proveedoras del sector público.</div>
        </div>
        <div className="ens-cat" style={{borderColor:'var(--gold)'}}>
          <div className="ens-cat__level">Categoría Media</div>
          <div className="ens-cat__title">60 medidas</div>
          <div className="ens-cat__desc">Para sistemas con impacto significativo. Afecta a un número importante de ciudadanos o a activos de valor medio. Requiere autenticación de doble factor y monitorización periódica.</div>
        </div>
        <div className="ens-cat">
          <div className="ens-cat__level">Categoría Alta</div>
          <div className="ens-cat__title">75 medidas</div>
          <div className="ens-cat__desc">Para infraestructuras críticas y servicios esenciales. Afecta a más de 100.000 ciudadanos. Requiere certificado digital, SIEM y grupo electrógeno con 2h de autonomía.</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <div className="grid-7-5">
      <div className="anim-fade-up">
        <span className="label-tag">¿Te afecta?</span>
        <div className="gold-line"></div>
        <h2 className="section-title">¿Tu empresa necesita la certificación ENS?<br />Compruébalo ahora.</h2>
        <div className="checklist mt-32">
          <div className="checklist__item">Desarrolla o mantiene software para Administraciones Públicas</div>
          <div className="checklist__item">Presta servicios cloud a organismos del sector público</div>
          <div className="checklist__item">Gestiona o procesa datos de ciudadanos en nombre de la AAPP</div>
          <div className="checklist__item">Quiere presentarse a licitaciones del sector público</div>
          <div className="checklist__item">Es proveedora TIC de ayuntamientos, CCAA o ministerios</div>
          <div className="checklist__item">Subcontrata servicios a empresas que trabajan para AAPP</div>
        </div>
        <div className="mt-40" style={{border:'1px solid var(--border)',padding:'28px 28px',background:'var(--white)'}}>
          <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'22px',fontWeight:'500',color:'var(--navy)',lineHeight:'1.3',marginBottom:'12px'}}>"Si marcas alguno de estos puntos, el ENS te afecta."</p>
          <p style={{fontSize:'14px',color:'var(--text-muted)'}}>La buena noticia: con Avson, puedes tener tu certificado en 3–4 meses y el diagnóstico es completamente gratuito.</p>
        </div>
        <p style={{fontSize:'15px',color:'var(--text-muted)',lineHeight:'1.7',marginTop:'24px'}}>
          El <strong>certificado ENS</strong> — en su categoría Básica, Media o Alta — es el documento que acredita que tu empresa cumple con el Esquema Nacional de Seguridad. A diferencia de la Declaración de Conformidad (válida para categoría Básica), el certificado ENS Media y el <strong>certificado ENS Alta</strong> requieren auditoría externa por entidad acreditada por ENAC. Avson gestiona este proceso íntegramente, incluida la coordinación con la entidad auditora y la respuesta a los informes de no conformidades.
        </p>
      </div>
      <div className="anim-fade-up delay-2">
        <div style={{background:'var(--navy)',padding:'40px 36px'}}>
          <span className="label-tag">Consecuencias sin ENS</span>
          <div style={{display:'flex',flexDirection:'column',gap:'20px',marginTop:'24px'}}>
            <div style={{borderLeft:'2px solid #C0392B',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.85)',marginBottom:'4px'}}>Exclusión de licitaciones</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Tu oferta no se abre si no aportas el certificado ENS. Sin excepciones.</div>
            </div>
            <div style={{borderLeft:'2px solid #E67E22',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.85)',marginBottom:'4px'}}>Contratos en riesgo</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Contratos existentes pueden ser rescindidos si el pliego lo exige y no cumples.</div>
            </div>
            <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.85)',marginBottom:'4px'}}>Pérdida competitiva</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Tu competencia certificada gana puntos técnicos adicionales que tú no puedes sumar.</div>
            </div>
          </div>
          <Link to="/contacto" className="btn-primary btn-primary--white mt-40" style={{marginTop:'32px'}}>Evitar estos riesgos →</Link>
        </div>
      </div>
    </div>

    
    <div className="cta-inline-box">
      <span className="cta-inline-box__text">"El diagnóstico es gratuito y te dice exactamente qué necesitas. Sin compromiso."</span>
      <Link to="/contacto" className="btn-primary">Diagnóstico gratuito →</Link>
    </div>
  </div>
</section>



<section className="section section--white" id="renovacion">
  <div className="container">
    <span className="label-tag">Mantenimiento y renovación</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Renovación del certificado ENS:<br /><em>cada 2 años, sin sorpresas.</em></h2>
    <div className="grid-7-5" style={{marginTop:'48px'}}>
      <div>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          El <strong>certificado ENS</strong> tiene una validez de dos años. Antes del vencimiento, la empresa debe someterse a una nueva auditoría de renovación para mantener la certificación vigente. Sin un certificado EN vigor, vuelves a quedar excluido de las licitaciones públicas.
        </p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          En Avson, la <strong>renovación del certificado ENS</strong> forma parte del ciclo de relación vitalicia con cada cliente. Nuestro equipo monitoriza la caducidad de tu certificación, te avisa con antelación y gestiona todo el proceso de <strong>auditoría ENS</strong> de renovación sin que tengas que preocuparte por los plazos.
        </p>
        <div className="mini-points">
          <div className="mini-point">
            <div className="mini-point__title">Alertas de caducidad</div>
            <div className="mini-point__text">Te avisamos 6 meses antes de que venza tu certificado ENS para iniciar el proceso de renovación con tiempo suficiente.</div>
          </div>
          <div className="mini-point">
            <div className="mini-point__title">Auditoría de renovación incluida</div>
            <div className="mini-point__text">Coordinamos la auditoría de renovación ENS con la entidad acreditada. La misma garantía de éxito que en la certificación inicial.</div>
          </div>
          <div className="mini-point">
            <div className="mini-point__title">Mantenimiento continuo</div>
            <div className="mini-point__text">Entre certificaciones, mantenemos actualizada la documentación del SGSI, el análisis de riesgos y los controles ENS aplicables.</div>
          </div>
        </div>
      </div>
      <div>
        <div style={{background:'var(--navy)',padding:'36px 32px'}}>
          <span className="label-tag">Ciclo de vida del certificado ENS</span>
          <div style={{display:'flex',flexDirection:'column',gap:'20px',marginTop:'24px'}}>
            <div style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:'0',fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'700',color:'var(--navy)'}}>1</div>
              <div><p style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Certificación inicial</p><p style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>3–4 meses. Auditoría ENAC. Certificado válido 2 años.</p></div>
            </div>
            <div style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(201,168,76,0.2)',border:'1px solid var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:'0',fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'700',color:'var(--gold)'}}>2</div>
              <div><p style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Mantenimiento anual</p><p style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Revisión de controles, actualización documental y adaptación a cambios regulatorios.</p></div>
            </div>
            <div style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(201,168,76,0.2)',border:'1px solid var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:'0',fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'700',color:'var(--gold)'}}>3</div>
              <div><p style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Renovación bienal</p><p style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Auditoría de renovación ENS. Avson gestiona todo. Mismo equipo que te conoce.</p></div>
            </div>
          </div>
          <Link to="/contacto" className="btn-primary btn-primary--white" style={{marginTop:'32px'}}>Consultar renovación →</Link>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy">
  <div className="container">
    <span className="label-tag">El ENS como punto de partida</span>
    <div className="gold-line"></div>
    <h2 className="section-title section-title--white">El ENS no es el destino.<br /><em>Es el punto de partida de tu GRC.</em></h2>
    <p className="mt-24" style={{fontSize:'17px',color:'rgba(255,255,255,0.5)',maxWidth:'560px',lineHeight:'1.65'}}>Una vez certificado en ENS, ya tienes entre el 60% y el 70% del trabajo hecho para otros marcos internacionales. Aprovecha la inversión con nuestras <Link to="/packs" style={{color:'var(--gold)'}}>certificaciones en cascada</Link>.</p>
    <div className="roadmap mt-64" style={{overflowX:'auto',paddingBottom:'8px'}}>
      <div className="roadmap__node">
        <div className="roadmap__box roadmap__box--active">
          <div className="roadmap__box-title">ENS</div>
          <div className="roadmap__box-sub">El inicio</div>
        </div>
      </div>
      <div className="roadmap__arrow"></div>
      <div className="roadmap__node">
        <div className="roadmap__box">
          <div className="roadmap__box-title">ISO 27001</div>
          <div className="roadmap__box-sub">65% hecho</div>
        </div>
      </div>
      <div className="roadmap__arrow"></div>
      <div className="roadmap__node">
        <div className="roadmap__box">
          <div className="roadmap__box-title">ISO 22301</div>
          <div className="roadmap__box-sub">55% hecho</div>
        </div>
      </div>
      <div className="roadmap__arrow"></div>
      <div className="roadmap__node">
        <div className="roadmap__box">
          <div className="roadmap__box-title">NIS2</div>
          <div className="roadmap__box-sub">50% hecho</div>
        </div>
      </div>
      <div className="roadmap__arrow"></div>
      <div className="roadmap__node">
        <div className="roadmap__box">
          <div className="roadmap__box-title">DORA</div>
          <div className="roadmap__box-sub">45% hecho</div>
        </div>
      </div>
    </div>
    <div className="mt-48 text-center">
      <Link to="/packs" className="btn-primary btn-primary--white">Ver packs combinados →</Link>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">
    <span className="label-tag">Nuestro proceso</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Cómo obtener el certificado ENS<br /><em>en 3–4 meses con garantía.</em></h2>
    <div className="timeline mt-64">
      <div className="timeline__step anim-fade-up">
        <div className="timeline__number">01</div>
        <div className="timeline__week">Semana 1</div>
        <div className="timeline__title">Diagnóstico gratuito</div>
        <div className="timeline__desc">Análisis de tu situación actual: sistemas en alcance, controles existentes y categoría ENS aplicable. Informe de diferencias (GAP analysis) incluido.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-1">
        <div className="timeline__number">02</div>
        <div className="timeline__week">Semana 2</div>
        <div className="timeline__title">Plan de implementación</div>
        <div className="timeline__desc">Roadmap detallado con todas las medidas ENS, priorización por criticidad, responsables asignados y cronograma semanal hasta la auditoría.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-2">
        <div className="timeline__number">03</div>
        <div className="timeline__week">Semanas 3–10</div>
        <div className="timeline__title">Implementación con herramientas especializadas de IA</div>
        <div className="timeline__desc">Aplicamos las 45–75 medidas ENS apoyados en herramientas especializadas de IA: documentación automatizada, análisis de riesgos MAGERIT y gestión de evidencias.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-3">
        <div className="timeline__number">04</div>
        <div className="timeline__week">Semanas 11–14</div>
        <div className="timeline__title">Auditoría y certificación ENS</div>
        <div className="timeline__desc">Coordinamos la auditoría con entidad acreditada ENAC. Te preparamos para cada sesión. Tasa de éxito en primera convocatoria: 100%.</div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <span className="label-tag">Packs de certificación ENS</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Elige el pack de consultoría ENS<br />que se ajusta a tu objetivo.</h2>
    <div className="pack-grid mt-48">
      <div className="pack-card">
        <div className="pack-card__label">Entrada al mercado público</div>
        <div className="pack-card__title">ENS Starter</div>
        <div className="pack-card__tags"><span className="pack-card__tag">ENS Básica</span></div>
        <p className="pack-card__desc">Para empresas que quieren licitar al sector público por primera vez. Todo lo que necesitas para empezar a optar a contratos públicos.</p>
        <Link to="/contacto" className="btn-primary">Solicitar precio →</Link>
      </div>
      <div className="pack-card" style={{borderColor:'var(--gold)'}}>
        <div className="pack-card__label">El más solicitado</div>
        <div className="pack-card__title">ENS + ISO 27001</div>
        <div className="pack-card__tags"><span className="pack-card__tag">ENS</span><span className="pack-card__tag">ISO 27001</span></div>
        <p className="pack-card__desc">Seguridad completa: cumples con la AAPP y tienes el estándar internacional. El combo más demandado por empresas tecnológicas españolas.</p>
        <Link to="/contacto" className="btn-primary">Solicitar precio →</Link>
      </div>
      <div className="pack-card">
        <div className="pack-card__label">Servicios críticos</div>
        <div className="pack-card__title">ENS + ISO 22301</div>
        <div className="pack-card__tags"><span className="pack-card__tag">ENS</span><span className="pack-card__tag">ISO 22301</span></div>
        <p className="pack-card__desc">Continuidad garantizada para proveedores de servicios críticos a la administración. Ideal para servicios que no pueden interrumpirse.</p>
        <Link to="/contacto" className="btn-primary">Solicitar precio →</Link>
      </div>
      <div className="pack-card">
        <div className="pack-card__label">Máxima cobertura</div>
        <div className="pack-card__title">Pack Triple</div>
        <div className="pack-card__tags"><span className="pack-card__tag">ENS</span><span className="pack-card__tag">ISO 27001</span><span className="pack-card__tag">ISO 22301</span></div>
        <p className="pack-card__desc">La hoja de ruta GRC completa. Máxima ventaja competitiva en licitaciones, reconocimiento internacional y continuidad certificada.</p>
        <Link to="/contacto" className="btn-primary">Solicitar precio →</Link>
      </div>
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
          <span className="label-tag" style={{color:'var(--gold)'}}>ENS Media</span>
          <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'#fff',lineHeight:'1.5',margin:'20px 0 0',fontStyle:'italic'}}>
            &ldquo;Nos dijeron que el ENS era cosa de seis meses mínimo. Avson lo hizo en catorce semanas. Y lo firmaron: si no pasamos la auditoría, sin coste adicional. Eso cambió completamente cómo veíamos el riesgo del proyecto. Al final entramos a la auditoría con todo controlado y salimos certificados el primer intento.&rdquo;
          </blockquote>
        </div>
        <div style={{marginTop:'40px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'#fff',margin:'0'}}>M. Rueda</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.45)',margin:'4px 0 0',letterSpacing:'0.05em',textTransform:'uppercase'}}>Director General · Integradora de sistemas · Comunidad de Madrid</p>
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
            <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',margin:'6px 0 0'}}>Auditoría superada sin incidencias</p>
          </div>
          <div style={{width:'100%',height:'1px',background:'var(--border)'}}></div>
          <div>
            <p style={{fontFamily:'var(--font-serif)',fontSize:'44px',fontWeight:'300',color:'var(--navy)',margin:'0',lineHeight:'1'}}>Garantía</p>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',margin:'6px 0 0'}}>Por escrito desde el primer día</p>
          </div>
        </div>
      </div>
    </div>

    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginTop:'24px'}}>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px 36px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'19px',fontWeight:'300',color:'var(--navy)',lineHeight:'1.55',margin:'0 0 24px',fontStyle:'italic'}}>
          &ldquo;Lo que no esperábamos era lo bien que aprovechamos ese trabajo para lo siguiente. Cuando meses después arrancamos el ISO 27001, el equipo de Avson ya tenía casi toda la documentación. Fue otra forma de ver la inversión.&rdquo;
        </blockquote>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'500',color:'var(--navy)',margin:'0'}}>C. Herrero</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',margin:'4px 0 0',letterSpacing:'0.04em',textTransform:'uppercase'}}>Responsable de Seguridad · Empresa de desarrollo software · Cataluña</p>
      </div>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px 36px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'19px',fontWeight:'300',color:'var(--navy)',lineHeight:'1.55',margin:'0 0 24px',fontStyle:'italic'}}>
          &ldquo;Llevábamos tiempo dándole vueltas pero no nos decidíamos. La primera reunión con ellos fue sin compromiso y en una hora nos explicaron exactamente qué necesitábamos, qué no, y cuánto iba a tardar. Esa claridad nos hizo firmar.&rdquo;
        </blockquote>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'500',color:'var(--navy)',margin:'0'}}>T. Iglesias</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',margin:'4px 0 0',letterSpacing:'0.04em',textTransform:'uppercase'}}>CEO · Empresa de consultoría IT · País Vasco</p>
      </div>
    </div>

    <div style={{textAlign:'center',marginTop:'56px'}}>
      <Link to="/contacto" className="btn-primary">Empieza tu certificaci&oacute;n ENS →</Link>
    </div>
  </div>
</section>



<section style={{background:'var(--navy)',padding:'60px 0'}}>
  <div className="container">
    <div style={{maxWidth:'860px',margin:'0 auto'}}>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',alignItems:'center'}}>
        <div>
          <span className="label-tag" style={{background:'rgba(201,168,76,0.15)',color:'var(--gold)',borderColor:'rgba(201,168,76,0.3)'}}>Urgencia real</span>
          <div className="gold-line"></div>
          <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(28px,3.5vw,40px)',fontWeight:'300',color:'var(--white)',marginBottom:'16px',lineHeight:'1.2'}}>¿Tienes un pliego que<br /><em>cierra pronto?</em></h2>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.65)',lineHeight:'1.7',marginBottom:'24px'}}>
            El ENS estándar tarda 3-4 meses. Si tu licitación es antes, el servicio Express lo resuelve en 30 días naturales con un equipo de tres consultores dedicados.
          </p>
          <div style={{display:'flex',flexDirection:'column',gap:'12px',marginBottom:'32px'}}>
            <div style={{display:'flex',alignItems:'center',gap:'12px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)'}}>
              <span style={{color:'var(--gold)',fontSize:'16px'}}>✦</span> Arranque garantizado en 48 horas
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'12px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)'}}>
              <span style={{color:'var(--gold)',fontSize:'16px'}}>✦</span> 3 consultores dedicados exclusivamente a tu proyecto
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'12px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)'}}>
              <span style={{color:'var(--gold)',fontSize:'16px'}}>✦</span> La misma garantía de éxito por escrito
            </div>
            <div style={{display:'flex',alignItems:'center',gap:'12px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)'}}>
              <span style={{color:'var(--gold)',fontSize:'16px'}}>✦</span> Solo 4 plazas disponibles por mes
            </div>
          </div>
          <Link to="/ens-express" className="btn-primary btn-primary--white">Ver ENS Express →</Link>
        </div>
        <div style={{borderLeft:'1px solid rgba(255,255,255,0.1)',paddingLeft:'48px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'24px'}}>Calendario orientativo 2026</p>
          <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',paddingBottom:'12px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
              <span style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>Para licitar en Oct–Dic 2026</span>
              <span style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'#fbbf24'}}>Iniciar ya</span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',paddingBottom:'12px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
              <span style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>Para licitar en Ene–Mar 2027</span>
              <span style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'#86efac'}}>Iniciar antes de sep</span>
            </div>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'baseline',paddingBottom:'12px',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>
              <span style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>Para licitar en Abr–Jun 2027</span>
              <span style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'#86efac'}}>Iniciar antes de dic</span>
            </div>
            <div style={{marginTop:'8px',padding:'16px',background:'rgba(255,255,255,0.05)'}}>
              <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.5)',lineHeight:'1.5',margin:'0'}}>⚡ ¿Tu fecha es antes de octubre? Pregúntanos por <Link to="/ens-express" style={{color:'var(--gold)',textDecoration:'none'}}>ENS Express</Link> (30 días).</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section className="section section--white">
  <div className="container">
    <div className="anim-fade-up" style={{maxWidth:'860px',margin:'0 auto'}}>
      <span className="label-tag">Una distinción importante</span>
      <div className="gold-line"></div>
      <h2 className="section-title" style={{maxWidth:'680px'}}>Declaración de conformidad vs<br /><em>certificado ENS: no son lo mismo.</em></h2>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',color:'var(--text-body)',lineHeight:'1.75',marginBottom:'32px'}}>El RD 311/2022 contempla dos formas de acreditar el cumplimiento del ENS, y muchas empresas no conocen la diferencia hasta que es demasiado tarde.</p>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'32px',marginBottom:'40px'}}>
        <div style={{border:'1px solid var(--border)',padding:'32px'}}>
          <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px'}}>Declaración de Conformidad</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.7',marginBottom:'16px'}}>Es una auto-declaración del propio proveedor. La empresa declara que cumple los requisitos del ENS <em>sin que una entidad externa lo verifique</em>. Solo es válida para la categoría Básica y tiene menor peso en los pliegos.</p>
          <ul style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.8',paddingLeft:'20px'}}>
            <li>Solo válida para ENS Básico</li>
            <li>No requiere auditoría externa</li>
            <li>Menor credibilidad ante los organismos</li>
            <li>Muchos pliegos la rechazan explícitamente</li>
          </ul>
        </div>
        <div style={{border:'2px solid var(--gold)',padding:'32px',background:'var(--pearl)'}}>
          <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'400',color:'var(--navy)',marginBottom:'16px'}}>Certificado ENS ❖</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.7',marginBottom:'16px'}}>Emitido por una entidad de certificación acreditada por ENAC tras una auditoría independiente. Es el estándar que exigen la mayoría de pliegos relevantes y el único que da plena seguridad jurídica.</p>
          <ul style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.8',paddingLeft:'20px'}}>
            <li>Válido para Básico, Medio y Alto</li>
            <li>Verificado por entidad externa acreditada</li>
            <li>Aceptado en todos los pliegos</li>
            <li>Único reconocido en contratos de alta criticidad</li>
          </ul>
        </div>
      </div>
      <div style={{background:'var(--navy)',padding:'24px 32px',display:'flex',alignItems:'center',gap:'20px',flexWrap:'wrap'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.75)',margin:'0',flex:'1'}}>Avson gestiona el proceso completo de certificación ENS con entidades ENAC acreditadas: Bureau Veritas, SGS, AENOR, Applus+ y BSI.</p>
        <Link to="/contacto" className="btn-primary btn-primary--white" style={{whiteSpace:'nowrap'}}>Consultar qué necesito →</Link>
      </div>
    </div>
  </div>
</section>

<section className="section section--pearl">
  <div className="container">
    <div className="anim-fade-up" style={{maxWidth:'860px',margin:'0 auto'}}>
      <span className="label-tag">El ecosistema de certificación</span>
      <div className="gold-line"></div>
      <h2 className="section-title" style={{maxWidth:'640px'}}>¿Quién emite el certificado ENS<br /><em>y cómo se elige?</em></h2>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',color:'var(--text-body)',lineHeight:'1.75',marginBottom:'32px'}}>El certificado ENS lo emiten entidades de certificación acreditadas por ENAC (Entidad Nacional de Acreditación), el organismo español que supervisa que las auditorías se realizan con rigor e independencia. No todas las entidades certifican todas las categorías — la elección importa.</p>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))',gap:'16px',marginBottom:'40px'}}>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'24px',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'4px'}}>Bureau Veritas</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Básico · Medio · Alto</p>
        </div>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'24px',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'4px'}}>AENOR</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Básico · Medio · Alto</p>
        </div>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'24px',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'4px'}}>SGS</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Básico · Medio</p>
        </div>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'24px',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'4px'}}>Applus+</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Básico · Medio · Alto</p>
        </div>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'24px',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'4px'}}>BSI Group</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Básico · Medio</p>
        </div>
      </div>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.75'}}>Avson trabaja con todas las entidades acreditadas. En función de la categoría, el tamaño del proyecto y los plazos, recomendamos la entidad más adecuada y coordinamos directamente la reserva del slot de auditoría. El cliente no tiene que gestionar esta parte.</p>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <div className="grid-7-5">
      <div>
        <span className="label-tag">Preguntas frecuentes</span>
        <div className="gold-line"></div>
        <h2 className="section-title">Todo lo que necesitas<br />saber sobre la certificación ENS.</h2>
        <div className="faq-list mt-40">
          <div className="faq-item">
            <div className="faq-item__question">¿Qué es exactamente el ENS?<div className="faq-item__icon"></div></div>
            <div className="faq-item__answer">El Esquema Nacional de Seguridad (ENS) es un marco normativo español establecido por el RD 311/2022 que define los requisitos mínimos de seguridad que deben cumplir los sistemas de información de las AAPP y sus proveedores. Es equivalente en el sector público español a lo que ISO 27001 es en el mercado privado.</div>
          </div>
          <div className="faq-item">
            <div className="faq-item__question">¿Mi empresa necesita obligatoriamente el ENS?<div className="faq-item__icon"></div></div>
            <div className="faq-item__answer">Sí, si prestas servicios TIC, cloud, software o de gestión de información a cualquier organismo público español. Desde 2022 es un requisito eliminatorio en la mayoría de pliegos de contratación pública. Sin él, tu oferta ni siquiera se evalúa.</div>
          </div>
          <div className="faq-item">
            <div className="faq-item__question">¿Qué diferencia hay entre categoría Básica, Media y Alta?<div className="faq-item__icon"></div></div>
            <div className="faq-item__answer">La categoría depende del impacto potencial de un incidente de seguridad. Básica afecta a pocos ciudadanos o activos de bajo valor (45 medidas). Media afecta a un número significativo o activos importantes (60 medidas, exige 2FA). Alta afecta a infraestructuras críticas o más de 100.000 ciudadanos (75 medidas, exige SIEM y certificado digital). Tu categoría exacta la determinamos en el diagnóstico gratuito.</div>
          </div>
          <div className="faq-item">
            <div className="faq-item__question">¿Cuánto tiempo tarda la certificación ENS?<div className="faq-item__icon"></div></div>
            <div className="faq-item__answer">Con Avson, entre 3 y 4 meses para categoría Básica o Media. El proceso incluye: diagnóstico (semana 1), plan de implementación (semana 2), implementación y documentación (semanas 3–10) y auditoría de certificación (semanas 11–14). Para categoría Alta, entre 4 y 6 meses.</div>
          </div>
          <div className="faq-item">
            <div className="faq-item__question">¿Qué garantía ofrecéis en la consultoría ENS?<div className="faq-item__icon"></div></div>
            <div className="faq-item__answer">Ofrecemos garantía de éxito por escrito. Si tu empresa no supera la auditoría de certificación en primera convocatoria habiendo seguido nuestro plan al 100%, cubrimos el coste de la segunda auditoría sin cargo adicional. Nuestra tasa de éxito en primera convocatoria es del 100% en 87+ certificaciones realizadas.</div>
          </div>
          <div className="faq-item">
            <div className="faq-item__question">¿Qué incluye el diagnóstico gratuito?<div className="faq-item__icon"></div></div>
            <div className="faq-item__answer">El diagnóstico incluye: revisión de tu infraestructura tecnológica y procesos actuales, determinación de la categoría ENS aplicable a tus sistemas, análisis de diferencias (GAP analysis) respecto a los requisitos ENS, estimación de esfuerzo e inversión necesaria, y una propuesta de proyecto personalizada. Todo en 5 días hábiles sin ningún compromiso.</div>
          </div>
          <div className="faq-item">
            <div className="faq-item__question">¿Qué pasa si ya tengo ISO 27001?<div className="faq-item__icon"></div></div>
            <div className="faq-item__answer">Excelente punto de partida. ISO 27001 e ENS comparten entre el 60% y el 65% de requisitos. Si ya estás certificado en ISO 27001, el proceso ENS se puede completar en 6–8 semanas en lugar de 3–4 meses, y la inversión es significativamente menor. Solicita un diagnóstico específico para tu situación.</div>
          </div>
          <div className="faq-item">
            <div className="faq-item__question">¿Con qué entidades auditoras trabajáis?<div className="faq-item__icon"></div></div>
            <div className="faq-item__answer">Trabajamos con entidades auditoras acreditadas por ENAC (Entidad Nacional de Acreditación) para la certificación ENS. Coordinamos todo el proceso: selección de entidad, preparación de la empresa para la auditoría y acompañamiento durante las sesiones de auditoría.</div>
          </div>
        </div>
      </div>
      <div style={{paddingTop:'80px'}}>
        <div style={{background:'var(--navy)',padding:'40px 32px',position:'sticky',top:'100px'}}>
          <span className="label-tag">¿Tienes más preguntas?</span>
          <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'26px',fontWeight:'500',color:'var(--white)',lineHeight:'1.3',margin:'16px 0'}}>Habla con un especialista ENS en Madrid</h3>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,0.45)',lineHeight:'1.65',marginBottom:'28px'}}>Respuesta en menos de 24 horas. Sin presiones. Solo información útil para tu proyecto.</p>
          <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/contacto' }} style={{display:'flex',gap:'0',marginTop:'0',marginBottom:'16px',maxWidth:'480px',boxShadow:'0 4px 24px rgba(26,39,68,0.08)'}}>
            <input type="email" id="heroEmail" required placeholder="tu@empresa.com"
              style={{flex:'1',padding:'16px 20px',border:'none',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',minWidth:'0'}} />
            <button type="submit"
              style={{background:'var(--gold)',color:'var(--navy)',border:'none',padding:'16px 24px',fontFamily:'var(--font-sans)',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.04em',cursor:'pointer',whiteSpace:'nowrap',transition:'opacity 0.2s'}}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '0.88')} onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}>
              Diagnóstico ENS gratis →
            </button>
          </form>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'0.78rem',color:'rgba(255,255,255,0.5)',marginTop:'0',marginBottom:'24px'}}>Sin compromiso · Respuesta en 24h · Te llamamos nosotros</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
