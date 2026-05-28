import { Link } from 'react-router-dom'

export default function PraesysPage() {
  return (
    <>
<section className="section--navy" style={{minHeight:'100vh',display:'flex',alignItems:'center',paddingTop:'68px'}}>
  <div className="container" style={{paddingTop:'80px',paddingBottom:'80px'}}>
    <div className="grid-7-5" style={{alignItems:'center'}}>
      <div className="anim-fade-up">
        <span className="label-tag">Software propio · Inteligencia artificial</span>
        <div className="gold-line"></div>
        <h1 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(64px,7vw,100px)',fontWeight:'300',color:'var(--white)',lineHeight:'0.95',letterSpacing:'-0.02em',marginBottom:'8px'}}>Praesys.</h1>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(22px,2.5vw,32px)',fontWeight:'300',fontStyle:'italic',color:'rgba(255,255,255,0.45)',marginBottom:'32px',lineHeight:'1.3'}}>IA para tu cumplimiento normativo.</h2>
        <p className="body-large" style={{color:'rgba(255,255,255,0.55)',maxWidth:'480px'}}>Análisis de riesgos automatizado, dashboards de cumplimiento en tiempo real y generación de documentación con inteligencia artificial. Lo que antes llevaba semanas, ahora son horas.</p>
        <div className="flex gap-24 mt-40" style={{flexWrap:'wrap'}}>
          <Link to="/contacto" className="btn-primary btn-primary--white">Solicitar demo →</Link>
          <a href="#features" className="btn-text btn-text--white">Ver funcionalidades →</a>
        </div>
        <div className="hero__stats mt-40">
          <span className="hero__stat" style={{color:'rgba(255,255,255,0.45)'}}>ENS · ISO 27001 · ISO 22301</span>
          <span className="hero__stat" style={{color:'rgba(255,255,255,0.45)'}}>DORA · NIS2 · TISAX</span>
        </div>
      </div>
      <div className="anim-fade-up delay-2">
        <div className="praesys-mockup">
          <div className="mockup-header">
            <div className="mockup-dot"></div><div className="mockup-dot"></div><div className="mockup-dot"></div>
            <span className="mockup-title">Praesys — Dashboard de cumplimiento</span>
          </div>
          <div className="mockup-row">
            <div className="mockup-block"><span className="mockup-label">Cumplimiento ENS</span><span className="mockup-value">94%</span><div className="mockup-bar-track"><div className="mockup-bar-fill" style={{width:'94%'}}></div></div></div>
            <div className="mockup-block"><span className="mockup-label">ISO 27001</span><span className="mockup-value">87%</span><div className="mockup-bar-track"><div className="mockup-bar-fill mockup-bar-fill--green" style={{width:'87%'}}></div></div></div>
          </div>
          <div className="mockup-row">
            <div className="mockup-block"><span className="mockup-label">ISO 22301</span><span className="mockup-value" style={{fontSize:'22px',color:'rgba(255,255,255,0.7)'}}>76%</span><div className="mockup-bar-track"><div className="mockup-bar-fill" style={{width:'76%',background:'#6B7FD4'}}></div></div></div>
            <div className="mockup-block"><span className="mockup-label">DORA</span><span className="mockup-value" style={{fontSize:'22px',color:'rgba(255,255,255,0.7)'}}>61%</span><div className="mockup-bar-track"><div className="mockup-bar-fill" style={{width:'61%',background:'rgba(255,255,255,0.15)'}}></div></div></div>
          </div>
          <div className="mockup-block mt-16" style={{marginTop:'12px'}}>
            <span className="mockup-label">Alertas pendientes</span>
            <div style={{display:'flex',flexDirection:'column',gap:'6px',marginTop:'8px'}}>
              <div style={{fontSize:'11px',color:'var(--gold)',padding:'6px 10px',background:'rgba(201,168,76,0.1)',borderLeft:'2px solid var(--gold)'}}>Política de backups — requiere actualización anual</div>
              <div style={{fontSize:'11px',color:'rgba(255,255,255,0.4)',padding:'6px 10px',background:'rgba(255,255,255,0.04)',borderLeft:'2px solid rgba(255,255,255,0.1)'}}>Auditoría interna ISO 22301 — programar en próximos 30 días</div>
            </div>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'8px',marginTop:'12px'}}>
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.06)',padding:'12px',textAlign:'center'}}><div style={{fontSize:'18px',fontWeight:'600',color:'var(--gold)',fontFamily:'\'Cormorant Garamond\',serif'}}>248</div><div style={{fontSize:'9px',letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)',marginTop:'2px'}}>Documentos</div></div>
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.06)',padding:'12px',textAlign:'center'}}><div style={{fontSize:'18px',fontWeight:'600',color:'#2A7D4F',fontFamily:'\'Cormorant Garamond\',serif'}}>12</div><div style={{fontSize:'9px',letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)',marginTop:'2px'}}>Riesgos activos</div></div>
            <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.06)',padding:'12px',textAlign:'center'}}><div style={{fontSize:'18px',fontWeight:'600',color:'rgba(255,255,255,0.7)',fontFamily:'\'Cormorant Garamond\',serif'}}>98%</div><div style={{fontSize:'9px',letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)',marginTop:'2px'}}>Evidencias OK</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">
    <div className="grid-7-5">
      <div className="anim-fade-up">
        <span className="label-tag">Qué es Praesys</span>
        <div className="gold-line"></div>
        <h2 className="section-title">La plataforma GRC<br />que acelera tu certificación.</h2>
        <p className="body-large mt-24">Praesys es la plataforma de inteligencia artificial desarrollada por Avson para gestionar el cumplimiento normativo de forma eficiente. Integra todos los marcos (ENS, ISO 27001, ISO 22301, DORA, NIS2) en una única vista.</p>
        <p className="mt-16" style={{fontSize:'15px',color:'var(--text-muted)',lineHeight:'1.7'}}>Diseñada por consultores GRC para consultores GRC y sus clientes. No es un software genérico adaptado: es una herramienta construida desde cero sobre las realidades del proceso de certificación en España.</p>
      </div>
      <div className="anim-fade-up delay-2">
        <div style={{display:'flex',flexDirection:'column',gap:'16px'}}>
          <div style={{border:'1px solid var(--border)',padding:'24px',display:'flex',alignItems:'flex-start',gap:'16px'}}>
            <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'32px',fontWeight:'300',color:'var(--gold)',lineHeight:'1',flexShrink:'0',width:'40px'}}>01</div>
            <div><div style={{fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'4px'}}>Semanas → Horas</div><div style={{fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>La documentación que antes llevaba semanas de trabajo manual, Praesys la genera en horas con IA.</div></div>
          </div>
          <div style={{border:'1px solid var(--border)',padding:'24px',display:'flex',alignItems:'flex-start',gap:'16px'}}>
            <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'32px',fontWeight:'300',color:'var(--gold)',lineHeight:'1',flexShrink:'0',width:'40px'}}>02</div>
            <div><div style={{fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'4px'}}>Multi-marco en una vista</div><div style={{fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Dashboard unificado para ENS, ISO 27001, ISO 22301, DORA y NIS2 sin cambiar de herramienta.</div></div>
          </div>
          <div style={{border:'1px solid var(--border)',padding:'24px',display:'flex',alignItems:'flex-start',gap:'16px'}}>
            <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'32px',fontWeight:'300',color:'var(--gold)',lineHeight:'1',flexShrink:'0',width:'40px'}}>03</div>
            <div><div style={{fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'4px'}}>Auditable desde el minuto 1</div><div style={{fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Toda la trazabilidad control → evidencia → documento lista para presentar al auditor.</div></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="features">
  <div className="container">
    <span className="label-tag">Funcionalidades</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Seis capacidades que<br /><em>transforman el cumplimiento.</em></h2>
    <div className="features-grid mt-48">
      <div className="feature-item anim-fade-up">
        <div className="feature-item__number">01</div>
        <div className="feature-item__title">Análisis de riesgos automatizado</div>
        <div className="feature-item__desc">Identificación y valoración automática de riesgos según metodología MAGERIT v3.1. Catálogo de amenazas actualizado. Plan de tratamiento generado automáticamente.</div>
      </div>
      <div className="feature-item anim-fade-up delay-1">
        <div className="feature-item__number">02</div>
        <div className="feature-item__title">Generación documental con IA</div>
        <div className="feature-item__desc">Políticas, procedimientos, registros e instrucciones técnicas generados por IA y adaptados a tu organización. 248 plantillas base incluidas.</div>
      </div>
      <div className="feature-item anim-fade-up delay-2">
        <div className="feature-item__number">03</div>
        <div className="feature-item__title">Dashboard multi-marco</div>
        <div className="feature-item__desc">Vista unificada del cumplimiento para todos los marcos normativos aplicables. Indicadores en tiempo real. Alertas y recordatorios automáticos.</div>
      </div>
      <div className="feature-item anim-fade-up">
        <div className="feature-item__number">04</div>
        <div className="feature-item__title">Gestión de evidencias</div>
        <div className="feature-item__desc">Repositorio centralizado de evidencias vinculadas a controles y requisitos normativos. Trazabilidad completa para auditoría. Exportación lista para auditor.</div>
      </div>
      <div className="feature-item anim-fade-up delay-1">
        <div className="feature-item__number">05</div>
        <div className="feature-item__title">Mapeo cruzado entre normas</div>
        <div className="feature-item__desc">Identificación automática de sinergias entre marcos. Un documento puede satisfacer requisitos de ENS, ISO 27001 y NIS2 simultáneamente. Sin duplicar trabajo.</div>
      </div>
      <div className="feature-item anim-fade-up delay-2">
        <div className="feature-item__number">06</div>
        <div className="feature-item__title">Reporting ejecutivo</div>
        <div className="feature-item__desc">Informes de cumplimiento para el comité de dirección, auditorías internas y revisiones por la dirección. Exportación en PDF con marca de agua y fecha.</div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy">
  <div className="container">
    <span className="label-tag">Cobertura normativa</span>
    <div className="gold-line"></div>
    <h2 className="section-title section-title--white">Seis marcos.<br /><em>Una sola plataforma.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'2px',marginTop:'48px'}}>
      <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',padding:'32px 28px'}}>
        <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'500',color:'var(--gold)',display:'block',marginBottom:'12px'}}>ENS</span>
        <span style={{fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)'}}>RD 311/2022</span>
        <p style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',marginTop:'12px',lineHeight:'1.65'}}>75 medidas cubiertas. Categorías Básica, Media y Alta. Integración con herramientas CCN-STIC.</p>
      </div>
      <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',padding:'32px 28px'}}>
        <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'500',color:'var(--gold)',display:'block',marginBottom:'12px'}}>ISO 27001</span>
        <span style={{fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)'}}>Ed. 2022</span>
        <p style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',marginTop:'12px',lineHeight:'1.65'}}>93 controles del Anexo A. SoA automatizada. Análisis de riesgos integrado. Revisión por dirección.</p>
      </div>
      <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',padding:'32px 28px'}}>
        <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'500',color:'var(--gold)',display:'block',marginBottom:'12px'}}>ISO 22301</span>
        <span style={{fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)'}}>Ed. 2019</span>
        <p style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',marginTop:'12px',lineHeight:'1.65'}}>BIA integrado. RTO/RPO tracking. Planes de continuidad versionados. Registro de pruebas.</p>
      </div>
      <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',padding:'32px 28px'}}>
        <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'500',color:'var(--gold)',display:'block',marginBottom:'12px'}}>DORA</span>
        <span style={{fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)'}}>EU 2022/2554</span>
        <p style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',marginTop:'12px',lineHeight:'1.65'}}>Gestión de riesgos TIC. Registro de incidentes. TLPT. Registro de terceros TIC críticos.</p>
      </div>
      <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',padding:'32px 28px'}}>
        <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'500',color:'var(--gold)',display:'block',marginBottom:'12px'}}>NIS2</span>
        <span style={{fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)'}}>Dir. EU 2022/2555</span>
        <p style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',marginTop:'12px',lineHeight:'1.65'}}>Clasificación de entidades esenciales e importantes. Medidas de gobernanza. Notificación de incidentes.</p>
      </div>
      <div style={{background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)',padding:'32px 28px'}}>
        <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'500',color:'var(--gold)',display:'block',marginBottom:'12px'}}>TISAX</span>
        <span style={{fontSize:'11px',letterSpacing:'0.12em',textTransform:'uppercase',color:'rgba(255,255,255,0.3)'}}>VDA ISA 6.0</span>
        <p style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',marginTop:'12px',lineHeight:'1.65'}}>Assessment levels 1, 2 y 3. Cuestionario VDA ISA integrado. Gestión de evidencias específicas automoción.</p>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <span className="label-tag">Acceso a Praesys</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Tres modalidades<br /><em>de acceso.</em></h2>
    <div className="pricing-grid mt-48">
      <div className="pricing-card anim-fade-up">
        <div className="pricing-card__tier">Incluido en proyectos</div>
        <div className="pricing-card__name">Praesys Project</div>
        <div className="pricing-card__desc">Acceso completo a Praesys durante todo el proyecto de certificación. Incluido sin coste adicional en todos los packs de Avson.</div>
        <div style={{fontSize:'14px',color:'var(--text-muted)',marginBottom:'24px'}}>Incluido en todos los packs</div>
        <Link to="/packs" className="btn-primary">Ver packs →</Link>
      </div>
      <div className="pricing-card pricing-card--featured anim-fade-up delay-1">
        <div className="pricing-card__tier">Más popular</div>
        <div className="pricing-card__name">Praesys Continuous</div>
        <div className="pricing-card__desc" style={{color:'rgba(255,255,255,0.55)'}}>Para empresas ya certificadas que quieren mantener el cumplimiento de forma continua. Actualizaciones normativas automáticas, alertas y reporting para auditorías de seguimiento.</div>
        <div style={{fontSize:'14px',color:'rgba(255,255,255,0.4)',marginBottom:'24px'}}>Contrato anual · precio según frameworks</div>
        <Link to="/contacto" className="btn-primary btn-primary--white">Solicitar precio →</Link>
      </div>
      <div className="pricing-card anim-fade-up delay-2">
        <div className="pricing-card__tier">Para consultoras</div>
        <div className="pricing-card__name">Praesys Partner</div>
        <div className="pricing-card__desc">Acceso multi-cliente para consultoras GRC que quieren ofrecer Praesys a sus clientes. Panel de gestión centralizado. White-label disponible.</div>
        <div style={{fontSize:'14px',color:'var(--text-muted)',marginBottom:'24px'}}>Precio personalizado según volumen</div>
        <Link to="/contacto" className="btn-primary">Hablar con ventas →</Link>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy" style={{textAlign:'center'}}>
  <div className="container">
    <div style={{maxWidth:'560px',margin:'0 auto'}}>
      <span className="label-tag">Ver Praesys en acción</span>
      <div className="gold-line gold-line--center"></div>
      <h2 className="section-title section-title--white">30 minutos.<br /><em>Tu cumplimiento, en vivo.</em></h2>
      <p className="mt-24" style={{fontSize:'16px',color:'rgba(255,255,255,0.5)',lineHeight:'1.65'}}>Te mostramos Praesys con datos reales de un proyecto similar al tuyo. Sin presentaciones genéricas. Sin demos enlatadas.</p>
      <Link to="/contacto" className="btn-primary btn-primary--white mt-40" style={{marginTop:'32px'}}>Solicitar demo personalizada →</Link>
    </div>
  </div>
</section>
    </>
  )
}
