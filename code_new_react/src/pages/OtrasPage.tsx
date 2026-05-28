import { Link } from 'react-router-dom'

export default function OtrasPage() {
  return (
    <>
<div style={{background:'#1A2744',color:'rgba(255,255,255,0.85)',fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'400',letterSpacing:'0.04em',textAlign:'center',padding:'10px 40px',position:'relative',zIndex:'200'}}>
  🔒 <strong>Garantía de éxito al 100% por escrito</strong>  ·  Diagnóstico gratuito sin compromiso · Respuesta en 24h  ·  <Link to="/contacto" style={{color:'#C9A84C',textDecoration:'none',fontWeight:'500'}}>Contactar →</Link>
</div>

<section className="section section--pearl" style={{paddingTop:'160px',paddingBottom:'100px'}}>
  <div className="container">
    <span className="label-tag">ISO 9001 · ISO 14001 · ISO 22000 · ISO 55001</span>
    <div className="gold-line"></div>
    <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(48px,6vw,80px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 32px',maxWidth:'720px'}}>
      Más certificaciones.<br /><em>A coste marginal.</em>
    </h1>
    <p className="body-large" style={{maxWidth:'640px',marginBottom:'40px'}}>
      Una vez certificado en <Link to="/ens">ENS</Link> o <Link to="/iso27001">ISO 27001</Link>, ampliar tu portfolio de certificaciones ISO es más fácil y económico de lo que parece. Los sistemas de gestión comparten estructura, metodología, documentación y procesos de revisión. Nosotros aprovechamos ese trabajo para que cada nueva certificación cueste una fracción de lo que costaría empezar desde cero.
    </p>
    <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginBottom:'52px'}}>
      <Link to="/contacto" className="btn-primary">Diagnóstico gratuito →</Link>
      <Link to="/packs" className="btn-text">Ver todos los packs →</Link>
    </div>
    <div style={{display:'flex',gap:'40px',flexWrap:'wrap'}}>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>4</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>certificaciones adicionales</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>3–4</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>meses por certificación</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>1</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>sistema integrado posible</span>
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


<section className="section section--white" id="certificaciones">
  <div className="container">
    <span className="label-tag">Las cuatro certificaciones</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>Qué ofrece cada<br /><em>norma ISO.</em></h2>

    
    <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:'60px',marginTop:'60px',paddingBottom:'60px',borderBottom:'1px solid var(--border)',alignItems:'start'}}>
      <div>
        <div style={{background:'var(--navy)',padding:'32px',textAlign:'center',marginBottom:'24px'}}>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'48px',fontWeight:'300',color:'var(--gold)',marginBottom:'4px'}}>9001</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'rgba(255,255,255,0.7)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Gestión de la Calidad</p>
        </div>
        <div style={{background:'var(--pearl)',padding:'20px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'8px'}}>Quién la necesita</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>Empresas que quieren licitar en el sector público, demostrar calidad a grandes clientes, o mejorar sus procesos internos de forma sistemática.</p>
        </div>
      </div>
      <div>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'20px'}}>ISO 9001:2015 — Sistema de Gestión de la Calidad</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>
          ISO 9001 es el estándar de gestión de la calidad más extendido del mundo, con más de un millón de organizaciones certificadas en todos los sectores. Establece los requisitos para que una organización demuestre su capacidad de proporcionar productos y servicios que satisfagan de forma consistente los requisitos del cliente y los legales y reglamentarios aplicables. Su enfoque basado en procesos y en el ciclo PDCA permite mejorar continuamente la eficiencia operativa.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          Los principios clave de ISO 9001 son el enfoque en el cliente (entender y superar sus expectativas), el liderazgo (la dirección debe comprometerse activamente), el enfoque a procesos (gestionar las actividades como procesos interrelacionados), la mejora (mejorar continuamente el rendimiento), las decisiones basadas en evidencia, y la gestión de las relaciones con las partes interesadas.
        </p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
          <div style={{background:'var(--pearl)',padding:'20px'}}>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Por qué certificarse</p>
            <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-body)',lineHeight:'1.7'}}>
              <li style={{padding:'4px 0'}}>Requisito habitual en licitaciones públicas</li>
              <li style={{padding:'4px 0'}}>Exigida por clientes grandes como mínimo de calidad</li>
              <li style={{padding:'4px 0'}}>Mejora real de procesos y reducción de errores</li>
              <li style={{padding:'4px 0'}}>Diferenciador comercial en mercados competitivos</li>
            </ul>
          </div>
          <div style={{background:'var(--pearl)',padding:'20px'}}>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Solapamiento con otros marcos</p>
            <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-body)',lineHeight:'1.7'}}>
              <li style={{padding:'4px 0'}}>~50% con <Link to="/iso27001">ISO 27001</Link> (estructura HLS idéntica)</li>
              <li style={{padding:'4px 0'}}>~40% con <Link to="/iso22301">ISO 22301</Link> (gestión de riesgos)</li>
              <li style={{padding:'4px 0'}}>~35% con <Link to="/ens">ENS</Link> (revisión por la dirección)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    
    <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:'60px',marginTop:'60px',paddingBottom:'60px',borderBottom:'1px solid var(--border)',alignItems:'start'}}>
      <div>
        <div style={{background:'var(--navy)',padding:'32px',textAlign:'center',marginBottom:'24px'}}>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'48px',fontWeight:'300',color:'var(--gold)',marginBottom:'4px'}}>14001</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'rgba(255,255,255,0.7)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Gestión Medioambiental</p>
        </div>
        <div style={{background:'var(--pearl)',padding:'20px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'8px'}}>Quién la necesita</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>Empresas con compromisos ESG, del sector industrial, construcción, manufactura, o cualquier empresa con impacto ambiental significativo o que quiera diferenciarse en sostenibilidad.</p>
        </div>
      </div>
      <div>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'20px'}}>ISO 14001:2015 — Sistema de Gestión Medioambiental</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>
          ISO 14001 establece los requisitos para implementar un Sistema de Gestión Medioambiental (SGMA) que ayuda a las organizaciones a mejorar su desempeño ambiental, cumplir con las obligaciones legales en materia medioambiental y alcanzar sus objetivos ambientales. La norma tiene un enfoque preventivo: en lugar de gestionar los problemas ambientales cuando ocurren, exige identificar los aspectos ambientales significativos y gestionarlos proactivamente.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          En el contexto actual de compromisos ESG (Environmental, Social, Governance), ISO 14001 es la evidencia más robusta y auditada del compromiso de una empresa con la gestión ambiental. Va más allá de cumplir la legislación: exige una perspectiva de ciclo de vida de los productos y servicios, incluyendo los impactos en la cadena de suministro y en el uso por el cliente final.
        </p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
          <div style={{background:'var(--pearl)',padding:'20px'}}>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Requisitos clave</p>
            <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-body)',lineHeight:'1.7'}}>
              <li style={{padding:'4px 0'}}>Identificación de aspectos e impactos ambientales</li>
              <li style={{padding:'4px 0'}}>Cumplimiento de requisitos legales ambientales</li>
              <li style={{padding:'4px 0'}}>Preparación ante emergencias ambientales</li>
              <li style={{padding:'4px 0'}}>Perspectiva de ciclo de vida de productos</li>
            </ul>
          </div>
          <div style={{background:'var(--pearl)',padding:'20px'}}>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Por qué certificarse</p>
            <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-body)',lineHeight:'1.7'}}>
              <li style={{padding:'4px 0'}}>Informes ESG y sostenibilidad corporativa</li>
              <li style={{padding:'4px 0'}}>Acceso a financiación verde y bonos sostenibles</li>
              <li style={{padding:'4px 0'}}>Requisito en cadenas de suministro de grandes grupos</li>
              <li style={{padding:'4px 0'}}>Reducción de costes energéticos y de residuos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    
    <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:'60px',marginTop:'60px',paddingBottom:'60px',borderBottom:'1px solid var(--border)',alignItems:'start'}}>
      <div>
        <div style={{background:'var(--navy)',padding:'32px',textAlign:'center',marginBottom:'24px'}}>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'48px',fontWeight:'300',color:'var(--gold)',marginBottom:'4px'}}>22000</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'rgba(255,255,255,0.7)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Seguridad Alimentaria</p>
        </div>
        <div style={{background:'var(--pearl)',padding:'20px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'8px'}}>Quién la necesita</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>Industria alimentaria, restauración, logística de alimentos, proveedores de envases alimentarios, distribuidores y cualquier empresa en la cadena de suministro alimentaria.</p>
        </div>
      </div>
      <div>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'20px'}}>ISO 22000:2018 — Sistema de Gestión de la Inocuidad Alimentaria</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>
          ISO 22000 establece los requisitos para un Sistema de Gestión de la Inocuidad Alimentaria (SGIA) aplicable a cualquier organización en la cadena alimentaria. Integra los principios del APPCC (Análisis de Peligros y Puntos Críticos de Control, o HACCP en inglés), los Programas de Prerrequisitos (PRPs) y un sistema de gestión basado en el enfoque por procesos de ISO. Es la norma más completa para la gestión de la seguridad alimentaria a nivel internacional.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          La versión 2018 actualizó la norma para alinearla con la estructura HLS de ISO (idéntica a la de ISO 9001 e ISO 14001), lo que facilita la integración en sistemas de gestión múltiples. Los requisitos específicos más exigentes de ISO 22000 respecto a otras normas son la obligatoriedad del análisis APPCC, la gestión de alérgenos, la trazabilidad de ingredientes y el control de peligros biológicos, químicos, físicos y alergénicos.
        </p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
          <div style={{background:'var(--pearl)',padding:'20px'}}>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Conceptos clave</p>
            <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-body)',lineHeight:'1.7'}}>
              <li style={{padding:'4px 0'}}>HACCP — Análisis de peligros alimentarios</li>
              <li style={{padding:'4px 0'}}>PRPs — Programas de prerrequisitos higiénicos</li>
              <li style={{padding:'4px 0'}}>Trazabilidad de ingredientes y producto</li>
              <li style={{padding:'4px 0'}}>Gestión de alérgenos y contaminación cruzada</li>
            </ul>
          </div>
          <div style={{background:'var(--pearl)',padding:'20px'}}>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Por qué certificarse</p>
            <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-body)',lineHeight:'1.7'}}>
              <li style={{padding:'4px 0'}}>Acceso a grandes distribuidores y supermercados</li>
              <li style={{padding:'4px 0'}}>Exportación a mercados internacionales exigentes</li>
              <li style={{padding:'4px 0'}}>Protección ante crisis alimentarias y retiradas</li>
              <li style={{padding:'4px 0'}}>Demostración de cumplimiento del Reglamento UE</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    
    <div style={{display:'grid',gridTemplateColumns:'1fr 2fr',gap:'60px',marginTop:'60px',alignItems:'start'}}>
      <div>
        <div style={{background:'var(--navy)',padding:'32px',textAlign:'center',marginBottom:'24px'}}>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'48px',fontWeight:'300',color:'var(--gold)',marginBottom:'4px'}}>55001</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'rgba(255,255,255,0.7)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Gestión de Activos</p>
        </div>
        <div style={{background:'var(--pearl)',padding:'20px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'8px'}}>Quién la necesita</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>Empresas de infraestructuras, utilities (agua, energía, telecomunicaciones), transporte, manufactura intensiva en activos físicos, y cualquier organización con un parque de activos físicos significativo.</p>
        </div>
      </div>
      <div>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'20px'}}>ISO 55001:2014 — Sistema de Gestión de Activos</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>
          ISO 55001 establece los requisitos para un Sistema de Gestión de Activos (SGA) que optimiza el valor que los activos físicos proporcionan a la organización a lo largo de su ciclo de vida completo: desde la planificación de la adquisición hasta la renovación o disposición final. La norma se basa en la premisa de que los activos físicos bien gestionados son una fuente de creación de valor, no simplemente un coste a minimizar.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          ISO 55001 exige la alineación de la gestión de activos con los objetivos estratégicos de la organización, la toma de decisiones basada en el riesgo sobre intervenciones en activos (mantenimiento, renovación, reemplazo), y la optimización del rendimiento de los activos considerando su coste total a lo largo del ciclo de vida. Es especialmente relevante para sectores regulados donde el rendimiento de los activos afecta directamente a la calidad del servicio que se presta a los ciudadanos o clientes.
        </p>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
          <div style={{background:'var(--pearl)',padding:'20px'}}>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Conceptos clave</p>
            <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-body)',lineHeight:'1.7'}}>
              <li style={{padding:'4px 0'}}>Plan Estratégico de Gestión de Activos (SAMP)</li>
              <li style={{padding:'4px 0'}}>Gestión del ciclo de vida completo del activo</li>
              <li style={{padding:'4px 0'}}>Decisiones de riesgo sobre intervenciones</li>
              <li style={{padding:'4px 0'}}>Optimización coste-rendimiento-riesgo</li>
            </ul>
          </div>
          <div style={{background:'var(--pearl)',padding:'20px'}}>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Por qué certificarse</p>
            <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-body)',lineHeight:'1.7'}}>
              <li style={{padding:'4px 0'}}>Requisito de reguladores en utilities y transporte</li>
              <li style={{padding:'4px 0'}}>Optimización del CAPEX y OPEX de mantenimiento</li>
              <li style={{padding:'4px 0'}}>Reducción de fallos inesperados y tiempos de parada</li>
              <li style={{padding:'4px 0'}}>Mejora de la fiabilidad del servicio prestado</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy" id="integrado">
  <div className="container">
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>Sistema de Gestión Integrado</span>
    <div className="gold-line"></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'0 0 32px',maxWidth:'680px'}}>
      Un sistema de gestión integrado<br />para todos tus marcos.
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'rgba(255,255,255,0.7)',maxWidth:'640px',marginBottom:'48px'}}>
      Todas las normas ISO de sistemas de gestión (ISO 9001, ISO 14001, ISO 22000, ISO 27001, ISO 22301, ISO 55001) comparten la misma estructura de alto nivel (HLS). Esto no es casualidad: ISO diseñó esta estructura precisamente para facilitar la integración. Un Sistema de Gestión Integrado (SGI) es la forma más eficiente de gestionar múltiples certificaciones.
    </p>

<div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'32px 36px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap',marginTop:'48px'}}>
  <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'22px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>"Integrar ISO 9001 con ENS e ISO 27001 en un sistema único ahorra tiempo y dinero. Te diseñamos el IMS a medida."</span>
  <Link to="/contacto" className="btn-primary">Diseñar mi IMS →</Link>
</div>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginBottom:'48px'}}>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'16px'}}>Una sola auditoría</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:'1.7'}}>Con un SGI bien diseñado, las auditorías de certificación pueden realizarse de forma conjunta por el mismo auditor, reduciendo el tiempo de auditoría y el coste de certificación de forma muy significativa. En lugar de tres auditorías independientes, una sola auditoría integrada.</p>
      </div>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'16px'}}>Una sola documentación</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:'1.7'}}>El manual del sistema, las políticas corporativas, los procedimientos de gestión de no conformidades, la metodología de análisis de riesgos y la revisión por la dirección son compartidos por todos los marcos integrados. Se eliminan las duplicidades y la burocracia redundante.</p>
      </div>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'16px'}}>Una sola revisión por la dirección</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:'1.7'}}>Todas las normas ISO exigen una revisión periódica del sistema por la alta dirección. Con un SGI, esta revisión se hace una sola vez, abarcando todos los marcos de gestión de forma integrada, con un único orden del día y un único acta de revisión.</p>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="portfolio">
  <div className="container">
    <span className="label-tag">¿Qué certificaciones necesitas?</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Elige tu<br /><em>combinación.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'48px'}}>
      No existe una combinación universalmente correcta. El portfolio óptimo depende del sector, de los clientes, de las exigencias regulatorias y de los objetivos de negocio. Estas son las combinaciones más habituales con las que trabajamos.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'20px'}}>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'32px',border:'1px solid var(--border)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'16px'}}>Empresa TIC</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'var(--navy)',marginBottom:'12px'}}><Link to="/ens" style={{color:'inherit',textDecoration:'none'}}>ENS</Link> + <Link to="/iso27001" style={{color:'inherit',textDecoration:'none'}}>ISO 27001</Link></h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6',marginBottom:'16px'}}>El estándar para proveedores de tecnología que trabajan con el sector público y con clientes enterprise privados. Cubre el 100% de los requisitos de seguridad del mercado TIC español.</p>
        <Link to="/iso27001" className="btn-text" style={{fontSize:'12px'}}>Ver más →</Link>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'32px',border:'1px solid var(--border)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'16px'}}>Empresa industrial o manufacturera</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'var(--navy)',marginBottom:'12px'}}>ISO 9001 + ISO 14001</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6',marginBottom:'16px'}}>La combinación más habitual para empresas industriales. Calidad y medio ambiente en un sistema integrado, con un solo ciclo de auditorías anuales y una sola revisión por la dirección.</p>
        <Link to="/contacto" className="btn-text" style={{fontSize:'12px'}}>Solicitar presupuesto →</Link>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'32px',border:'1px solid var(--border)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'16px'}}>Empresa del sector alimentario</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'var(--navy)',marginBottom:'12px'}}>ISO 22000 + ISO 14001</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6',marginBottom:'16px'}}>Seguridad alimentaria y gestión medioambiental, dos exigencias que van de la mano en la industria alimentaria moderna. El 40% de los requisitos se solapan entre ambas normas.</p>
        <Link to="/contacto" className="btn-text" style={{fontSize:'12px'}}>Solicitar presupuesto →</Link>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'32px',border:'1px solid var(--border)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'16px'}}>Empresa de infraestructuras o utilities</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'var(--navy)',marginBottom:'12px'}}>ISO 55001 + ISO 14001</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6',marginBottom:'16px'}}>Gestión de activos y gestión medioambiental, la combinación para empresas de utilities, transporte e infraestructuras con un parque de activos físicos extenso e impacto ambiental relevante.</p>
        <Link to="/contacto" className="btn-text" style={{fontSize:'12px'}}>Solicitar presupuesto →</Link>
      </div>
    </div>
  </div>
</section>


<section className="section section--white" id="proceso">
  <div className="container">
    <span className="label-tag">Cómo trabajamos</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'520px'}}>El mismo proceso<br /><em>para cada certificación.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr 1fr',gap:'20px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{textAlign:'center',padding:'32px 20px'}}>
        <div style={{width:'56px',height:'56px',background:'var(--navy)',margin:'0 auto 20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'300',color:'var(--gold)'}}>01</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Diagnóstico</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Analizamos el estado actual y lo que ya tienes implementado. Identificamos el solapamiento con otros marcos y definimos el alcance óptimo.</p>
      </div>
      <div className="anim-fade-up" style={{textAlign:'center',padding:'32px 20px'}}>
        <div style={{width:'56px',height:'56px',background:'var(--navy)',margin:'0 auto 20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'300',color:'var(--gold)'}}>02</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Gap analysis</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Evaluamos cada requisito de la norma frente a tu situación actual. El resultado es un plan de trabajo priorizado por impacto y plazo.</p>
      </div>
      <div className="anim-fade-up" style={{textAlign:'center',padding:'32px 20px'}}>
        <div style={{width:'56px',height:'56px',background:'var(--navy)',margin:'0 auto 20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'300',color:'var(--gold)'}}>03</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Implementación</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Implementamos los controles, desarrollamos la documentación y formamos al equipo. Sin burocracia innecesaria: solo lo que el auditor va a pedir.</p>
      </div>
      <div className="anim-fade-up" style={{textAlign:'center',padding:'32px 20px'}}>
        <div style={{width:'56px',height:'56px',background:'var(--navy)',margin:'0 auto 20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'24px',fontWeight:'300',color:'var(--gold)'}}>04</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Certificación</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Auditoría interna, acompañamiento en la auditoría de certificación, y garantía de éxito por escrito. Si no lo conseguimos, cubrimos la siguiente auditoría.</p>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="casos">
  <div className="container">
    <span className="label-tag">Otras ISOs · Casos de éxito</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>Lo que dicen nuestros<br /><em>clientes certificados.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'#fff',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Empezamos con el ENS y preguntamos a Avson si tendría sentido añadir el ISO 9001. En cuatro meses teníamos las dos certificaciones. El mismo equipo, el mismo sistema, y un coste total que era menos de lo que habríamos pagado por el ISO 9001 solo con otra consultora.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid rgba(255,255,255,0.15)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'#fff',margin:'0'}}>Isabel Vega</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.45)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>Directora de Operaciones · Empresa de servicios IT · Sevilla</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',border:'1px solid var(--border)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'var(--navy)',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Necesitábamos el ISO 14001 para entrar en la cadena de suministro de un grupo industrial europeo. Avson lo hizo en paralelo con el ISO 9001 que ya estaba en proceso. Los auditores vinieron una sola vez y certificaron las dos normas en la misma semana. Exactamente lo que necesitábamos.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid var(--border)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'var(--navy)',margin:'0'}}>Andrés Castillo</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>Gerente · Empresa de componentes industriales · Zaragoza</p>
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
    <h2 className="section-title" style={{maxWidth:'520px'}}>Certificaciones ISO:<br /><em>tus dudas resueltas.</em></h2>
    <div style={{marginTop:'48px'}}>
      <div className="faq-item">
        <div className="faq-item__question">¿Por qué ISO empezar si no tengo ninguna certificación?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Depende de tu sector y tus clientes. Si eres empresa tecnológica o proveedor de servicios digitales, empieza por el ENS (si vendes a la administración) o ISO 27001 (si vendes a empresas privadas). Si eres empresa industrial o de servicios, ISO 9001 es el punto de entrada más habitual porque es la más exigida en licitaciones y contratos. Si tienes impacto ambiental significativo o compromisos ESG, añade ISO 14001 al mismo tiempo. La consulta gratuita de Avson está diseñada precisamente para ayudarte a tomar esta decisión con toda la información.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto ahorro con un sistema de gestión integrado?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El ahorro depende de la combinación de normas, pero en general un Sistema de Gestión Integrado bien diseñado reduce el coste de implementación en un 25-35% respecto a implementar las normas de forma independiente, y el coste de mantenimiento anual (auditorías de seguimiento, revisiones por la dirección, actualización documental) en un 30-40%. El ahorro más significativo a largo plazo es el de las auditorías de seguimiento: en lugar de pagar tres auditorías anuales por separado, se hace una sola auditoría integrada.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Puedo certificar ISO 9001 e ISO 14001 al mismo tiempo?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Sí, es perfectamente posible y muy habitual. Ambas normas comparten la misma estructura de alto nivel (HLS), lo que significa que la política del sistema, el análisis de riesgos, el procedimiento de auditoría interna, el control de documentos y la revisión por la dirección son comunes a las dos. En la práctica, implementar ISO 9001 e ISO 14001 simultáneamente cuesta aproximadamente lo mismo que implementar una sola de ellas por separado, gracias al solapamiento de la estructura documental.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto tiempo lleva certificarse en ISO 9001?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Con la metodología de Avson, el proceso completo de implementación y certificación de ISO 9001 dura entre 3 y 4 meses. Si ya tienes otros marcos ISO implementados (ISO 27001, ISO 14001, ISO 22301), el plazo puede reducirse a 2-3 meses gracias al solapamiento de la estructura documental. El plazo incluye el gap analysis, la implementación, la auditoría interna y el acompañamiento en la auditoría de certificación.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿ISO 14001 es obligatoria?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>ISO 14001 es voluntaria desde el punto de vista legal. Sin embargo, en la práctica puede ser obligatoria contractualmente: muchos grandes grupos industriales la exigen a sus proveedores, aparece cada vez más en pliegos de contratación pública con criterios de sostenibilidad, y es prácticamente indispensable para acceder a determinados programas de financiación verde o bonos sostenibles. En el contexto de los informes ESG obligatorios para grandes empresas (Directiva CSRD), la certificación ISO 14001 proporciona evidencias objetivas para los indicadores de gestión ambiental.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué diferencia hay entre HACCP e ISO 22000?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>HACCP (Análisis de Peligros y Puntos Críticos de Control) es una metodología de análisis y control de peligros alimentarios. Es obligatoria por ley en la UE para todos los operadores de la cadena alimentaria (Reglamento CE 852/2004). ISO 22000 integra HACCP dentro de un sistema de gestión completo que añade los Programas de Prerrequisitos (buenas prácticas higiénicas, trazabilidad, gestión de alérgenos), el ciclo de mejora continua y el marco de gestión típico de los estándares ISO. ISO 22000 demuestra que el HACCP no es solo un documento, sino un sistema que funciona y mejora.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿ISO 55001 aplica solo a grandes empresas?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>No. ISO 55001 es escalable a cualquier tamaño de organización. Es cierto que es más habitual en empresas grandes de utilities, transporte e infraestructuras, donde el parque de activos físicos es extenso y la gestión del ciclo de vida tiene un impacto económico enorme. Pero también es aplicable y muy útil para empresas medianas con maquinaria industrial significativa, equipamiento médico o infraestructura de telecomunicaciones. El beneficio de ISO 55001 es siempre el mismo: optimizar el coste total de propiedad de los activos y reducir las paradas inesperadas.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Puedo añadir ISO 9001 si ya tengo ENS certificado?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Sí, y es una de las combinaciones más eficientes que ofrecemos. El ENS y la ISO 9001 comparten aproximadamente el 35% de la estructura documental (política del sistema, revisión por la dirección, gestión de no conformidades, auditoría interna). Partiendo del trabajo ya hecho para el ENS, la implementación de ISO 9001 requiere principalmente añadir los procesos específicos de calidad: mapa de procesos, indicadores de satisfacción del cliente, gestión de la cadena de suministro desde la perspectiva de calidad y el plan de diseño y desarrollo si aplica. El plazo desde el ENS a la certificación ISO 9001 es habitualmente de 2-3 meses.</p></div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy">
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>Otras ISOs · Diagnóstico gratuito</span>
    <div className="gold-line" style={{margin:'20px auto 0'}}></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'32px 0 24px'}}>
      ¿Qué certificaciones<br /><em>necesita tu empresa?</em>
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',color:'rgba(255,255,255,0.65)',maxWidth:'520px',margin:'0 auto 40px',lineHeight:'1.7'}}>
      Diagnóstico gratuito. Un consultor senior analiza tu situación, tus clientes y tus objetivos, y te recomienda el portfolio de certificaciones más eficiente para tu caso concreto.
    </p>
    <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',fontSize:'15px',padding:'18px 36px'}}>Solicitar diagnóstico gratuito →</Link>
  </div>
</section><div id="stickyBar" style={{display:'none',position:'fixed',bottom:'0',left:'0',right:'0',zIndex:'500',background:'#1A2744',borderTop:'1px solid rgba(255,255,255,0.08)',padding:'14px 20px',justifyContent:'space-between',gap:'12px',alignItems:'center'}}>
  <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>¿Necesitas certificarte?</span>
  <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#fff',border:'1px solid #fff',padding:'10px 20px',textDecoration:'none',whiteSpace:'nowrap'}}>Diagnóstico gratuito →</Link>
</div>
    </>
  )
}
