import { Link } from 'react-router-dom'

export default function Iso22301Page() {
  return (
    <>
<section className="section section--pearl" style={{paddingTop:'160px',paddingBottom:'100px'}}>
  <div className="container">
    <span className="label-tag">ISO 22301:2019 · SGCN · BCP</span>
    <div className="gold-line"></div>
    <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(48px,6vw,80px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 32px',maxWidth:'720px'}}>
      ISO 22301: cuando parar<br /><em>no es una opción.</em>
    </h1>
    <p className="body-large" style={{maxWidth:'620px',marginBottom:'40px'}}>
      El Sistema de Gestión de Continuidad de Negocio (SGCN) certificado bajo ISO 22301 garantiza que tu empresa puede mantener sus operaciones críticas ante cualquier interrupción — un ciberataque, un fallo de infraestructura, una pandemia o un desastre natural. La norma más robusta del mundo para la resiliencia empresarial.
    </p>
    <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginBottom:'52px'}}>
      <Link to="/contacto" className="btn-primary">Diagnóstico gratuito →</Link>
      <Link to="/packs" className="btn-text">Ver packs ISO 22301 →</Link>
    </div>
    <div style={{display:'flex',gap:'40px',flexWrap:'wrap'}}>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>5–6</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>meses a certificado</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>55%</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>solapamiento con ENS</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>60%</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>solapamiento con ISO 27001</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>100%</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>garantía de éxito</span>
      </div>
    </div>
    <div style={{display:'inline-flex',alignItems:'center',gap:'10px',border:'1px solid #C9A84C',padding:'10px 18px',marginTop:'24px'}}>
      <span style={{fontSize:'18px',color:'#C9A84C'}}>✦</span>
      <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.08em',textTransform:'uppercase',color:'#1A2744',lineHeight:'1.4'}}>Garantía de éxito<br />al 100% por escrito</span>
    </div>
  </div>
</section>


<section className="section section--white" id="que-es">
  <div className="container">
    <span className="label-tag">ISO 22301 · Qué es</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'580px'}}>El estándar internacional<br /><em>de continuidad de negocio.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'60px',marginTop:'52px',alignItems:'start'}}>
      <div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          La norma ISO 22301:2019 establece los requisitos para implementar, mantener y mejorar un Sistema de Gestión de Continuidad de Negocio (SGCN). A diferencia de los planes de contingencia tradicionales, ISO 22301 exige un enfoque sistemático y basado en evidencias que garantiza que los planes funcionan realmente cuando se necesitan, y no solo cuando se diseñan.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          El marco se basa en el ciclo PDCA (Plan-Do-Check-Act), igual que ISO 27001 y el ENS, lo que facilita la integración en un sistema de gestión común. La norma exige que los planes de continuidad se pongan a prueba de forma regular, porque un plan que nunca se ha testado no es un plan: es un deseo.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>
          La versión 2019 actualizó la estructura de la norma para alinearla con el formato High Level Structure (HLS) de ISO, lo que facilita su integración con ISO 27001, ISO 9001 y otros estándares ISO. Las empresas que ya tienen uno de estos marcos implementado pueden certificar ISO 22301 aprovechando entre el 55% y el 65% del trabajo ya realizado.
        </p>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--navy)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'4px'}}>Conceptos clave de ISO 22301</h3>
        <div style={{background:'var(--pearl)',padding:'24px 28px',borderLeft:'3px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'6px'}}>BIA — Business Impact Analysis</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>Identifica los procesos críticos de la organización y evalúa el impacto operativo, financiero y reputacional de su interrupción en el tiempo. Es la base de todo el SGCN.</p>
        </div>
        <div style={{background:'var(--pearl)',padding:'24px 28px',borderLeft:'3px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'6px'}}>BCP — Business Continuity Plan</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>Define cómo la organización continuará operando durante una crisis. Incluye procedimientos de activación, roles de crisis, alternativas operativas y comunicaciones de emergencia.</p>
        </div>
        <div style={{background:'var(--pearl)',padding:'24px 28px',borderLeft:'3px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'6px'}}>DRP — Disaster Recovery Plan</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>Procedimientos técnicos específicos para recuperar sistemas, infraestructura y datos tras un incidente disruptivo. Complementa al BCP en el ámbito tecnológico.</p>
        </div>
        <div style={{background:'var(--pearl)',padding:'24px 28px',borderLeft:'3px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'6px'}}>RTO y RPO</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>Recovery Time Objective (tiempo máximo tolerable de interrupción) y Recovery Point Objective (punto máximo tolerable de pérdida de datos). Son los objetivos cuantitativos que determinan el nivel de resiliencia requerido.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="quien-necesita">
  <div className="container">
    <span className="label-tag">¿Te aplica?</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'580px'}}>Consultoría ISO 22301 y continuidad de negocio:<br /><em>empresas que no pueden permitirse parar.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'48px'}}>
      ISO 22301 es especialmente relevante para organizaciones cuyas operaciones tienen un impacto directo en terceros — clientes, pacientes, ciudadanos — o cuya interrupción generaría pérdidas económicas significativas o daño reputacional grave.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Proveedores cloud e infraestructura crítica</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Si tu servicio es el que mantiene funcionando los sistemas de tus clientes, tu continuidad es también la continuidad de ellos. Los grandes clientes exigen demostrarla.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Entidades financieras y de seguros</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>El Banco de España, la CNMV y los reguladores europeos (incluyendo DORA) exigen planes de continuidad documentados y testados. ISO 22301 es la forma más reconocida de demostrarlo.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Sector salud y servicios esenciales</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Hospitales, clínicas, laboratorios y proveedores de servicios de salud digitales necesitan garantizar la disponibilidad de sus sistemas y procesos en todo momento.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Empresas que han sufrido un incidente grave</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Un ransomware, una caída de sistemas prolongada o una crisis operativa es el detonador más habitual. ISO 22301 convierte la lección aprendida en un sistema formal que evita la repetición.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Empresas con requisitos contractuales de resiliencia</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Cada vez más contratos de gran volumen incluyen cláusulas de continuidad de negocio. ISO 22301 es la forma más eficiente de satisfacerlas a todos los clientes a la vez.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Empresas de manufactura con cadenas de suministro complejas</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>La pandemia demostró que la fragilidad de la cadena de suministro es uno de los mayores riesgos para la continuidad de las empresas industriales. ISO 22301 aborda este riesgo de forma sistemática.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Organismos públicos y entidades reguladas</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>El <Link to="/ens">ENS</Link> exige planes de continuidad en categoría Media y Alta. ISO 22301 eleva estos planes al nivel internacional y facilita la auditoría de los mismos.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Empresas de telecomunicaciones y medios digitales</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>La disponibilidad continua es el núcleo del negocio. <Link to="/iso22301">ISO 22301</Link> y <Link to="/nis2">NIS2</Link> conjuntamente cubren los requisitos de resiliencia que estos sectores deben demostrar.</p>
        </div>
      </div>
    </div>
    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'32px 36px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap',marginTop:'48px'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'22px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>"Si ya tienes ENS, el 55% del trabajo para ISO 22301 está hecho. El resto lo hacemos nosotros."</span>
      <Link to="/contacto" className="btn-primary">Diagnóstico gratuito →</Link>
    </div>
  </div>
</section>


<section className="section section--navy" id="sinergias">
  <div className="container">
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>Sinergias ISO 22301</span>
    <div className="gold-line"></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'0 0 32px',maxWidth:'620px'}}>
      ISO 22301 y ENS:<br />diseñados para complementarse.
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'rgba(255,255,255,0.7)',maxWidth:'620px',marginBottom:'52px'}}>
      Los tres marcos principales de seguridad y continuidad — ENS, ISO 27001 e ISO 22301 — comparten la misma arquitectura documental y la misma filosofía de gestión del riesgo. Certificarlos juntos no es multiplicar el esfuerzo: es aprovecharlo.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginBottom:'48px'}}>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)',textAlign:'center'}}>
        <p style={{fontFamily:'var(--font-serif)',fontSize:'52px',fontWeight:'300',color:'var(--gold)',marginBottom:'8px'}}>55%</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff',marginBottom:'8px'}}>ENS + ISO 22301</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.5)',lineHeight:'1.6'}}>Políticas, gestión de riesgos, gestión de incidentes y disponibilidad de sistemas ya están cubiertos por el ENS.</p>
      </div>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)',textAlign:'center'}}>
        <p style={{fontFamily:'var(--font-serif)',fontSize:'52px',fontWeight:'300',color:'var(--gold)',marginBottom:'8px'}}>60%</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff',marginBottom:'8px'}}>ISO 27001 + ISO 22301</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.5)',lineHeight:'1.6'}}>El análisis de riesgos, la gestión de incidentes y la continuidad desde la perspectiva de seguridad se reutilizan directamente.</p>
      </div>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)',textAlign:'center'}}>
        <p style={{fontFamily:'var(--font-serif)',fontSize:'52px',fontWeight:'300',color:'var(--gold)',marginBottom:'8px'}}>70%</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff',marginBottom:'8px'}}>ISO 22301 cubre DORA</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.5)',lineHeight:'1.6'}}>El reglamento <Link to="/dora">DORA</Link> exige planes de continuidad para entidades financieras. ISO 22301 cubre este pilar de DORA de forma muy significativa.</p>
      </div>
    </div>
    <Link to="/packs" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff'}}>Ver todos los packs disponibles →</Link>
  </div>
</section>


<section className="section section--pearl" id="proceso">
  <div className="container">
    <span className="label-tag">Nuestro proceso</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'520px'}}>De cero a certificado<br /><em>en 5–6 meses.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'52px'}}>
      La implementación de ISO 22301 empieza siempre por entender el negocio, no por copiar plantillas. Un plan de continuidad que no refleja la realidad operativa de tu empresa no te protegerá cuando lo necesites.
    </p>
    <div style={{display:'flex',flexDirection:'column',gap:'0'}}>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 1–3</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 01</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Business Impact Analysis (BIA)</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Identificamos todos los procesos de negocio, los clasificamos por criticidad y analizamos el impacto de su interrupción en diferentes horizontes temporales (1 hora, 4 horas, 24 horas, 72 horas, 1 semana). Definimos el RTO y el RPO para cada proceso crítico. El BIA es el documento más importante del SGCN: determina qué se protege, en qué orden y con qué nivel de inversión.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 4–6</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 02</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Análisis de riesgos de continuidad</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Identificamos las amenazas específicas que pueden interrumpir los procesos críticos definidos en el BIA: fallos tecnológicos, desastres naturales, ciberataques, fallos de proveedores críticos, pandemias o crisis de personal clave. Para cada amenaza, evaluamos la probabilidad y el impacto, y definimos las estrategias de continuidad más adecuadas.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 7–14</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 03</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Diseño y documentación del BCP y DRP</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Desarrollamos el Plan de Continuidad de Negocio (BCP) con los procedimientos de activación, los roles del equipo de crisis, las alternativas operativas para cada proceso crítico y los planes de comunicación de emergencia. Paralelamente, elaboramos el Plan de Recuperación ante Desastres (DRP) con los procedimientos técnicos específicos para recuperar sistemas e infraestructura en los RTOs definidos.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 15–18</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 04</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Ejercicios de prueba y simulacros</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>ISO 22301 exige demostrar que los planes funcionan. Diseñamos y ejecutamos ejercicios de escritorio (tabletop exercises) y simulacros técnicos para validar los RTOs y RPOs definidos, identificar gaps en los procedimientos y entrenar al equipo de crisis. Los resultados de los ejercicios se documentan y se incorporan como mejoras al plan. Esta fase es la que más diferencia a Avson de otros consultores: los planes se prueban de verdad.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 19–24</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 05</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Auditoría interna y certificación</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Realizamos la auditoría interna del SGCN para verificar su conformidad con la norma y preparar al equipo para la auditoría de certificación. La auditoría de certificación con entidad acreditada se desarrolla en dos fases: revisión documental y auditoría in situ. Avson acompaña al equipo en todo el proceso y, con nuestra garantía de éxito, si no superamos la primera auditoría cubrimos la siguiente sin coste adicional.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--white" id="packs">
  <div className="container">
    <span className="label-tag">Packs ISO 22301</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Elige cómo<br /><em>certificarte.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px',display:'flex',flexDirection:'column'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Opción A</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}>ISO 22301</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'28px'}}>Certificación ISO 22301:2019 completa</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7',flex:'1'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>BIA completo (Business Impact Analysis)</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Plan de Continuidad de Negocio (BCP)</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Plan de Recuperación ante Desastres (DRP)</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Ejercicios de prueba y simulacros</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Auditoría interna incluida</li>
          <li style={{padding:'6px 0'}}>Acompañamiento auditoría certificación</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'8px'}}>Plazo: 5–6 meses</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',marginBottom:'20px'}}>Para: empresas que no necesitan ENS</p>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',display:'flex',flexDirection:'column',position:'relative'}}>
        <div style={{position:'absolute',top:'0',right:'0',background:'var(--gold)',padding:'6px 16px',fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'#fff',letterSpacing:'0.08em',textTransform:'uppercase'}}>Más eficiente</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'rgba(255,255,255,0.5)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Opción B</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'#fff',marginBottom:'8px'}}>ENS + ISO 22301</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.5)',marginBottom:'28px'}}>Seguridad y continuidad en un solo proyecto.</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)',lineHeight:'1.7',flex:'1'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>ENS Media o Alta con continuidad incluida</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>ISO 22301 aprovechando el 55% del ENS</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Un solo sistema de gestión integrado</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Dos certificaciones por el precio de 1.4×</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Cubre requisitos de continuidad de NIS2</li>
          <li style={{padding:'6px 0'}}>Garantía de éxito en ambas auditorías</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.5)',marginBottom:'8px'}}>Plazo: 5–6 meses</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.4)',marginBottom:'20px'}}>Para: proveedores TIC y servicios esenciales</p>
        <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',textAlign:'center',justifyContent:'center'}}>Solicitar presupuesto →</Link>
      </div>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px',display:'flex',flexDirection:'column'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Opción C</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}>Pack Triple</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'28px'}}>ENS + ISO 27001 + ISO 22301</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7',flex:'1'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>ENS (Básica, Media o Alta)</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>ISO 27001:2022 seguridad de la información</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>ISO 22301 continuidad de negocio</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>La hoja de ruta GRC completa</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Ahorro estimado del 35% vs separados</li>
          <li style={{padding:'6px 0'}}>Base sólida para NIS2 y DORA</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'8px'}}>Plazo: 7–9 meses</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',marginBottom:'20px'}}>Para: organizaciones con máxima resiliencia</p>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="casos">
  <div className="container">
    <span className="label-tag">ISO 22301 · Casos de éxito</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>Lo que dicen nuestros<br /><em>clientes certificados.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'#fff',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Nuestro cliente más grande nos exigió ISO 22301 como condición para renovar un contrato de cinco años. Avson nos lo consiguió en cinco meses y medio, y el auditor no encontró ni una sola no conformidad mayor. La inversión se recuperó en el primer mes de contrato renovado.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid rgba(255,255,255,0.15)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'#fff',margin:'0'}}>Javier Olmedo</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.45)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>CEO · Proveedor de servicios cloud · Valencia</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',border:'1px solid var(--border)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'var(--navy)',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Después del ransomware que sufrimos en 2023, la dirección decidió que nunca más estaríamos en esa situación sin un plan. Avson diseñó el BCP y el DRP en paralelo con el ENS, y el resultado es un sistema de gestión que realmente usamos, no una carpeta guardada en un cajón.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid var(--border)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'var(--navy)',margin:'0'}}>Beatriz Sánchez</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>Directora de Operaciones · Empresa de logística · Bilbao</p>
        </div>
      </div>
    </div>
    <div style={{textAlign:'center',marginTop:'48px'}}><Link to="/contacto" className="btn-primary">Hablar con un experto →</Link></div>
  </div>
</section>


<section className="section section--pearl" id="faq">
  <div className="container" style={{maxWidth:'760px'}}>
    <span className="label-tag">Preguntas frecuentes</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'520px'}}>Todo sobre<br /><em>ISO 22301.</em></h2>
    <div style={{marginTop:'48px'}}>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué es exactamente el BCP y por qué es tan importante?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El Business Continuity Plan (Plan de Continuidad de Negocio) es el documento operativo que describe cómo la organización continuará funcionando durante una crisis o interrupción. Incluye los procedimientos de activación del plan, los roles y responsabilidades del equipo de crisis, las alternativas operativas para cada proceso crítico, los planes de comunicación interna y externa, y los criterios para declarar el fin de la emergencia y volver a la normalidad. Es el corazón del SGCN: sin un BCP funcional y probado, no hay continuidad.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto tiempo lleva el BIA?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El Business Impact Analysis es la fase más intensiva en términos de colaboración con el cliente. Requiere entrevistas con los responsables de cada área funcional y un análisis detallado de los procesos, las dependencias tecnológicas y los impactos en diferentes horizontes temporales. Normalmente dedicamos entre 2 y 4 semanas al BIA, dependiendo de la complejidad de la organización. Un BIA bien hecho es la inversión más importante del proyecto: determina el RTO y el RPO de cada proceso y, por tanto, el nivel de inversión en continuidad que se necesita.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto tiempo lleva la certificación ISO 22301?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Con la metodología de Avson, el proceso completo desde el kick-off hasta la obtención del certificado dura entre 5 y 6 meses. Si ya tienes el ENS o ISO 27001 certificados, podemos reducir este plazo aprovechando el 55-60% de documentación y controles que se comparten entre los marcos. El plazo es uno de nuestros principales diferenciadores: el mercado trabaja habitualmente en 8-14 meses para esta certificación.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué sectores tienen más necesidad de ISO 22301?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>ISO 22301 es especialmente relevante en sectores donde una interrupción tiene un impacto inmediato en clientes o ciudadanos: servicios financieros y de seguros, telecomunicaciones, salud y servicios sanitarios, administración pública, logística y transporte, energía y utilities, y proveedores de tecnología y cloud. También es cada vez más solicitada en empresas industriales con cadenas de suministro complejas, donde la pandemia y los conflictos geopolíticos han evidenciado la fragilidad de las operaciones ante interrupciones imprevistas.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué diferencia un plan de contingencia de un SGCN certificado?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>La diferencia fundamental es la sistematización, la evidencia y la mejora continua. Un plan de contingencia tradicional es un documento estático que rara vez se actualiza y casi nunca se prueba. Un SGCN certificado bajo ISO 22301 exige pruebas periódicas documentadas, revisiones por la dirección, análisis de la eficacia de los controles y mejoras continuas basadas en evidencias. Además, la certificación proporciona una validación externa independiente de que el sistema funciona realmente, no solo en papel.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿DORA exige ISO 22301?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>DORA no exige ISO 22301 específicamente, pero sí exige que las entidades financieras y sus proveedores TIC críticos tengan planes de continuidad del negocio documentados, probados y revisados periódicamente, lo que es exactamente lo que ISO 22301 certifica. Tener ISO 22301 es la forma más eficiente de demostrar el cumplimiento de los requisitos de continuidad de DORA. El solapamiento entre ISO 22301 y el pilar de continuidad de DORA es de aproximadamente el 70%.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto cuesta la certificación ISO 22301?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El coste depende del tamaño de la organización, la complejidad de los procesos críticos, el alcance del SGCN y si ya tienes otros marcos implementados. Ofrecemos un diagnóstico gratuito en el que analizamos tu situación y te damos un presupuesto detallado y transparente antes de firmar. Si ya tienes el ENS o ISO 27001, el coste de ISO 22301 se reduce significativamente gracias al solapamiento de controles y documentación.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto dura el certificado ISO 22301?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El certificado ISO 22301 tiene una vigencia de 3 años, con auditorías de seguimiento anuales en los años 1 y 2, y auditoría de renovación en el año 3. Avson ofrece un bono de mantenimiento anual para gestionar las auditorías periódicas, actualizar los planes cuando cambia la organización (nuevos sistemas, nuevos procesos, cambios de alcance) y asegurar que el SGCN se mantiene vivo y efectivo a lo largo del tiempo.</p></div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy">
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>ISO 22301 · Diagnóstico gratuito</span>
    <div className="gold-line" style={{margin:'20px auto 0'}}></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'32px 0 24px'}}>
      ¿Tu empresa puede<br /><em>permitirse parar?</em>
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',color:'rgba(255,255,255,0.65)',maxWidth:'520px',margin:'0 auto 40px',lineHeight:'1.7'}}>
      Diagnóstico gratuito. Sin compromiso. Un consultor senior analiza tu situación y te dice qué nivel de continuidad necesitas realmente y cómo conseguirlo en el menor tiempo posible.
    </p>
    <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',fontSize:'15px',padding:'18px 36px'}}>Solicitar diagnóstico gratuito →</Link>
  </div>
</section>


<div style={{display:'none',position:'fixed',bottom:'0',left:'0',right:'0',zIndex:'500',background:'#1A2744',borderTop:'1px solid rgba(255,255,255,0.08)',padding:'14px 20px',justifyContent:'space-between',gap:'12px',alignItems:'center'}} id="stickyBar">
  <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>¿Dudas sobre tu certificación?</span>
  <Link to="/contacto" className="btn-primary btn-primary--white" style={{fontSize:'11px',padding:'10px 20px',whiteSpace:'nowrap'}}>Diagnóstico gratuito →</Link>
</div>
    </>
  )
}
