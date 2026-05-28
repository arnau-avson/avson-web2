import { Link } from 'react-router-dom'

export default function TisaxPage() {
  return (
    <>
<div style={{background:'#1A2744',color:'rgba(255,255,255,0.85)',fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'400',letterSpacing:'0.04em',textAlign:'center',padding:'10px 40px',position:'relative',zIndex:'200'}}>
  🔒 <strong>Garantía de éxito al 100% por escrito</strong>  ·  Diagnóstico gratuito sin compromiso · Respuesta en 24h  ·  <Link to="/contacto" style={{color:'#C9A84C',textDecoration:'none',fontWeight:'500'}}>Contactar →</Link>
</div>

<section className="section section--pearl" style={{paddingTop:'160px',paddingBottom:'100px'}}>
  <div className="container">
    <span className="label-tag">TISAX · Trusted Information Security Assessment Exchange · ENX Association</span>
    <div className="gold-line"></div>
    <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(48px,6vw,80px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 32px',maxWidth:'760px'}}>
      TISAX: el estándar de seguridad<br /><em>del sector automoción.</em>
    </h1>
    <p className="body-large" style={{maxWidth:'640px',marginBottom:'40px'}}>
      TISAX (Trusted Information Security Assessment Exchange) es el estándar de seguridad de la información específico del sector automovilístico europeo. Gestionado por ENX Association, es obligatorio para proveedores que intercambian información sensible con OEMs (BMW, Volkswagen, Mercedes, Stellantis, Renault, etc.) y sus tier-1. Sin TISAX, no puedes trabajar con ellos.
    </p>
    <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginBottom:'52px'}}>
      <Link to="/contacto" className="btn-primary">Diagnóstico TISAX gratuito →</Link>
      <Link to="/contacto" className="btn-text">Hablar con un experto →</Link>
    </div>
    <div style={{display:'flex',gap:'40px',flexWrap:'wrap'}}>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>3–4</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>meses al assessment</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>3</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>niveles de assessment</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>3 años</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>de validez del resultado</span>
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
    <span className="label-tag">TISAX · Qué es</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'600px'}}>El assessment de seguridad<br /><em>que abre puertas en automoción.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'60px',marginTop:'52px',alignItems:'start'}}>
      <div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          TISAX nació de una necesidad concreta: los fabricantes de automóviles europeos (OEMs) necesitaban un mecanismo común para evaluar la seguridad de la información de sus miles de proveedores sin que cada uno tuviera que someterse a auditorías independientes para cada cliente. La solución fue crear un estándar sectorial único, basado en el VDA ISA (cuestionario de seguridad de la asociación alemana de la industria automotriz VDA), gestionado por ENX Association.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          El resultado del assessment TISAX se registra en la plataforma ENX y puede compartirse digitalmente con cualquier cliente OEM o tier-1 que lo solicite, sin necesidad de repetir el proceso para cada cliente. Un solo assessment, válido para toda la cadena de suministro del sector durante tres años.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>
          El cuestionario VDA ISA en el que se basa TISAX está muy alineado con <Link to="/iso27001">ISO 27001</Link>, con un solapamiento de controles cercano al 70%. Para empresas que ya tienen <Link to="/iso27001">ISO 27001</Link>, el esfuerzo adicional para TISAX es principalmente la adaptación a los requisitos específicos del sector automovilístico: seguridad de datos de prototipos, vehículos conectados y datos personales de automoción.
        </p>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--navy)',letterSpacing:'0.08em',textTransform:'uppercase'}}>Los tres niveles de assessment</h3>
        <div style={{background:'var(--pearl)',padding:'28px',borderLeft:'3px solid rgba(0,0,0,0.1)'}}>
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'12px'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'700',color:'var(--text-muted)',background:'rgba(0,0,0,0.08)',padding:'4px 10px',letterSpacing:'0.06em'}}>AL1</span>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',margin:'0'}}>Autoassessment</p>
          </div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>La empresa realiza el cuestionario de forma autónoma, sin auditoría externa. Aplica a información de baja sensibilidad. En la práctica, muy pocos OEMs lo aceptan sin auditoría.</p>
        </div>
        <div style={{background:'var(--navy)',padding:'28px',position:'relative'}}>
          <div style={{position:'absolute',top:'0',right:'0',background:'var(--gold)',padding:'4px 12px',fontFamily:'var(--font-sans)',fontSize:'9px',fontWeight:'600',color:'#fff',letterSpacing:'0.08em',textTransform:'uppercase'}}>El más habitual</div>
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'12px'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'700',color:'var(--navy)',background:'var(--gold)',padding:'4px 10px',letterSpacing:'0.06em'}}>AL2</span>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff',margin:'0'}}>Assessment con auditoría remota</p>
          </div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)',lineHeight:'1.6'}}>Para información sensible: datos de prototipos, información de precios y costes, datos personales de empleados de la cadena de suministro. Es el nivel más solicitado por OEMs para la mayoría de proveedores tecnológicos, de ingeniería y de software.</p>
        </div>
        <div style={{background:'var(--pearl)',padding:'28px',borderLeft:'3px solid var(--gold)'}}>
          <div style={{display:'flex',alignItems:'center',gap:'12px',marginBottom:'12px'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'700',color:'#fff',background:'var(--navy)',padding:'4px 10px',letterSpacing:'0.06em'}}>AL3</span>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',margin:'0'}}>Assessment con auditoría presencial</p>
          </div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>Para información de muy alta sensibilidad: datos de crash tests, prototipos de vehículos altamente confidenciales, información estratégica de producto. El auditor de ENX realiza la auditoría in situ en las instalaciones del proveedor.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="quien-necesita">
  <div className="container">
    <span className="label-tag">¿Te aplica TISAX?</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'620px'}}>Si trabajas con OEMs europeos,<br /><em>probablemente necesitas TISAX.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'48px'}}>
      El ámbito de TISAX se ha ido ampliando con los años. Inicialmente afectaba solo a proveedores de componentes físicos, pero hoy alcanza a cualquier empresa que maneje información sensible del sector automovilístico, sea cual sea su tipo de servicio.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'20px'}}>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
        <div style={{width:'44px',height:'44px',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:'0'}}>
          <span style={{color:'var(--gold)',fontFamily:'var(--font-sans)',fontWeight:'600',fontSize:'14px'}}>T1</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)'}}>Tier-1, Tier-2 y Tier-3</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Proveedores directos e indirectos de componentes y sistemas para fabricantes de vehículos. Los OEMs exigen TISAX en toda la cadena de suministro, no solo al proveedor directo.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
        <div style={{width:'44px',height:'44px',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:'0'}}>
          <span style={{color:'var(--gold)',fontFamily:'var(--font-sans)',fontWeight:'600',fontSize:'14px'}}>ENG</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)'}}>Consultoras de ingeniería</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Empresas de ingeniería que participan en el diseño y desarrollo de vehículos o componentes. Manejan datos técnicos muy sensibles (planos, especificaciones, protocolos de prueba).</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
        <div style={{width:'44px',height:'44px',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:'0'}}>
          <span style={{color:'var(--gold)',fontFamily:'var(--font-sans)',fontWeight:'600',fontSize:'14px'}}>SW</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)'}}>Proveedores de software</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Empresas que desarrollan o mantienen software embebido, sistemas ADAS, plataformas de conectividad, aplicaciones de vehículos o sistemas de gestión de concesionarios.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
        <div style={{width:'44px',height:'44px',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:'0'}}>
          <span style={{color:'var(--gold)',fontFamily:'var(--font-sans)',fontWeight:'600',fontSize:'14px'}}>LAB</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)'}}>Laboratorios de pruebas</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Laboratorios de homologación, pruebas de crash, ensayos de componentes y verificación de normativas. Manejan datos de prototipos extremadamente confidenciales y suelen requerir AL3.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
        <div style={{width:'44px',height:'44px',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:'0'}}>
          <span style={{color:'var(--gold)',fontFamily:'var(--font-sans)',fontWeight:'600',fontSize:'14px'}}>MKT</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)'}}>Agencias de marketing y diseño</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Agencias que trabajan con imágenes o información de vehículos no comercializados. Los OEMs son extraordinariamente sensibles a cualquier filtración de información de nuevos modelos antes del lanzamiento.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px',display:'flex',flexDirection:'column',gap:'12px'}}>
        <div style={{width:'44px',height:'44px',background:'var(--navy)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:'0'}}>
          <span style={{color:'var(--gold)',fontFamily:'var(--font-sans)',fontWeight:'600',fontSize:'14px'}}>LOG</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)'}}>Logística y transporte especializado</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Empresas de logística que transportan prototipos o componentes confidenciales, o que gestionan sistemas de trazabilidad integrados con los sistemas de información del fabricante.</p>
      </div>
    </div>

<div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'32px 36px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap',marginTop:'48px'}}>
  <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'22px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>"TISAX no es una certificación que se publica. Pero sin ella, perderás contratos con OEMs. Te explicamos qué nivel necesitas."</span>
  <Link to="/contacto" className="btn-primary">Consulta gratuita TISAX →</Link>
</div>
  </div>
</section>


<section className="section section--white" id="proceso">
  <div className="container">
    <span className="label-tag">Nuestro proceso TISAX</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'520px'}}>De cero al assessment<br /><em>en 3–4 meses.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'52px'}}>
      El proceso TISAX tiene sus propias particularidades respecto a otras certificaciones: no hay un "certificado" en el sentido tradicional, sino un resultado de assessment registrado en la plataforma ENX. Avson conoce los requisitos específicos del VDA ISA y acompaña al cliente en todo el proceso, desde el registro hasta la obtención del resultado satisfactorio.
    </p>
    <div style={{display:'flex',flexDirection:'column',gap:'0'}}>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semana 1</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 01</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Registro en el portal ENX</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>La empresa se registra en el portal de ENX Association, selecciona el nivel de assessment requerido (AL1, AL2 o AL3) y los objetivos del assessment (información normal, información confidencial de prototipos, o datos personales). Avson acompaña en el proceso de registro, que puede ser confuso para quienes acceden por primera vez, y asesora sobre la selección correcta de objetivos según lo que solicita el OEM o tier-1 cliente.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 2–4</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 02</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Gap analysis frente al VDA ISA</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Realizamos un gap analysis exhaustivo de los controles del VDA ISA (Information Security Assessment) frente al estado actual de la organización. El cuestionario VDA ISA tiene más de 200 preguntas organizadas en dominios de seguridad similares a los de ISO 27001. Identificamos los controles que ya cumplen, los que son parcialmente conformes y los que requieren implementación. Si la empresa tiene ISO 27001, el porcentaje de controles ya cubiertos es habitualmente superior al 70%.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 5–12</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 03</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Implementación de controles VDA ISA</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Implementamos los controles pendientes y completamos la documentación de los controles existentes en el formato que requiere el VDA ISA. Los controles específicos del sector automovilístico que suelen requerir mayor atención son: seguridad en el manejo de datos de prototipos (físicos y digitales), gestión de activos de información en la cadena de suministro, y los controles de seguridad para el desarrollo de software de vehículos conectados cuando aplica.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 13–14</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 04</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Preparación para el assessment ENX</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Realizamos un mock assessment completo utilizando el cuestionario VDA ISA para simular el proceso real. Revisamos todas las respuestas, verificamos la consistencia de la documentación de evidencias y preparamos al equipo para las entrevistas con el auditor ENX. Esta fase es especialmente importante: el assessment ENX evalúa tanto la implementación real de los controles como la capacidad del equipo de explicar y demostrar su funcionamiento.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 15–16</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 05</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Assessment ENX</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>El assessment es realizado por un auditor acreditado por ENX Association, no por Avson (por razones de independencia). Para AL2, el assessment se realiza de forma remota mediante videoconferencia y revisión de documentación. Para AL3, el auditor se desplaza a las instalaciones del proveedor. Una vez completado con resultado satisfactorio, el informe de assessment queda registrado en la plataforma ENX y puede compartirse con los OEMs y tier-1 que lo soliciten durante tres años. Avson acompaña al equipo durante el assessment y gestiona cualquier punto de acción posterior.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy" id="sinergias">
  <div className="container">
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>Sinergias TISAX · ISO 27001</span>
    <div className="gold-line"></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'0 0 32px',maxWidth:'680px'}}>
      ISO 27001 como<br />base del TISAX.
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'rgba(255,255,255,0.7)',maxWidth:'640px',marginBottom:'48px'}}>
      El VDA ISA en el que se basa TISAX fue diseñado tomando como referencia ISO 27001. El solapamiento de controles es superior al 70%. Para empresas con ISO 27001 certificado, el esfuerzo para superar el assessment TISAX se reduce muy significativamente.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginBottom:'40px'}}>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Lo que se comparte con ISO 27001 (+70%)</h3>
        <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:'1.8'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Análisis y tratamiento de riesgos de seguridad</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Políticas y procedimientos de seguridad</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Control de acceso físico y lógico</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Gestión de incidentes de seguridad</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Copias de seguridad y recuperación</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Formación y concienciación</li>
          <li style={{padding:'6px 0'}}>Gestión de proveedores y terceros</li>
        </ul>
      </div>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Lo específico de TISAX (~30%)</h3>
        <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:'1.8'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Seguridad física y lógica de datos de prototipos</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Controles para fotografía y filmación de prototipos</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Gestión de datos de vehículos conectados</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Formato específico VDA ISA de documentación</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Registro en plataforma ENX</li>
          <li style={{padding:'6px 0'}}>Evaluación de madurez según escala VDA ISA</li>
        </ul>
      </div>
    </div>
    <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff'}}>Solicitar diagnóstico TISAX →</Link>
  </div>
</section>


<section className="section section--pearl" id="packs">
  <div className="container">
    <span className="label-tag">Packs TISAX</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Elige tu<br /><em>punto de partida.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',background:'var(--white)',padding:'40px',display:'flex',flexDirection:'column'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Empiezo desde cero</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}>TISAX AL2</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'28px'}}>Preparación completa para assessment AL2</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7',flex:'1'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Gap analysis frente a VDA ISA</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Implementación de controles pendientes</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Documentación completa VDA ISA</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Mock assessment simulado</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Acompañamiento assessment ENX remoto</li>
          <li style={{padding:'6px 0'}}>Garantía de éxito incluida</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'8px'}}>Plazo: 3–4 meses</p>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',display:'flex',flexDirection:'column',position:'relative'}}>
        <div style={{position:'absolute',top:'0',right:'0',background:'var(--gold)',padding:'6px 16px',fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'#fff',letterSpacing:'0.08em',textTransform:'uppercase'}}>Más eficiente</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'rgba(255,255,255,0.5)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Ya tengo ISO 27001</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'#fff',marginBottom:'8px'}}>ISO 27001 + TISAX</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.5)',marginBottom:'28px'}}>Aprovecha el 70% de solapamiento</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)',lineHeight:'1.7',flex:'1'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>ISO 27001 como base documentada</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Gap analysis de los controles específicos TISAX</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Solo el 30% de trabajo diferencial</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Adaptación formato VDA ISA</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Assessment ENX AL2 acompañado</li>
          <li style={{padding:'6px 0'}}>Ahorro estimado del 45% vs desde cero</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.5)',marginBottom:'8px'}}>Plazo: 6–8 semanas adicionales</p>
        <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',textAlign:'center',justifyContent:'center'}}>Solicitar presupuesto →</Link>
      </div>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',background:'var(--white)',padding:'40px',display:'flex',flexDirection:'column'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Alta sensibilidad</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}>TISAX AL3</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'28px'}}>Para prototipos y datos de muy alta sensibilidad</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7',flex:'1'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Todo lo del pack AL2</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Controles adicionales para AL3</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Seguridad física reforzada para prototipos</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Preparación específica auditoría presencial</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Acompañamiento in situ durante el assessment</li>
          <li style={{padding:'6px 0'}}>Para laboratorios y proveedores tier-1 de alto nivel</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'8px'}}>Plazo: 4–5 meses</p>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="casos">
  <div className="container">
    <span className="label-tag">TISAX · Casos de éxito</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>Lo que dicen nuestros<br /><em>clientes certificados.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'#fff',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Un OEM alemán nos exigió TISAX AL2 con tres meses de margen para poder continuar como proveedor homologado. Teníamos ISO 27001 pero no sabíamos cómo mapear los controles al VDA ISA. Avson lo hizo en semanas y pasamos el assessment sin incidencias.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid rgba(255,255,255,0.15)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'#fff',margin:'0'}}>Rafael Montoya</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.45)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>Director de Calidad · Tier-1 electrónica automoción · Navarra</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',border:'1px solid var(--border)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'var(--navy)',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Somos una agencia de diseño industrial. Trabamos con prototipos de varios fabricantes y nunca habíamos entendido exactamente qué nos exigían de seguridad. Avson nos explicó el TISAX con claridad y gestionó todo el proceso. Un año después tenemos tres clientes nuevos gracias al resultado ENX.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid var(--border)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'var(--navy)',margin:'0'}}>Laura Sáez</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>CEO · Agencia de diseño industrial · Valencia</p>
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
    <h2 className="section-title" style={{maxWidth:'480px'}}>Todo sobre<br /><em>TISAX.</em></h2>
    <div style={{marginTop:'48px'}}>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué es ENX Association?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>ENX Association es la organización europea sin ánimo de lucro que gestiona el programa TISAX. Fue fundada por los principales fabricantes de automóviles europeos (Volkswagen Group, BMW Group, Mercedes-Benz, Stellantis, Renault Group) y sus asociaciones de proveedores (VDA en Alemania, SMMT en UK, FIEV en Francia, ANFAC en España) para establecer un estándar común de intercambio de assessments de seguridad de la información. La plataforma ENX es el repositorio centralizado donde se registran y comparten los resultados de los assessments TISAX.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué nivel TISAX necesito?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El nivel que necesitas lo determina el OEM o tier-1 que te lo exige, en función del tipo de información que intercambias con ellos. AL1 (autoassessment) es para información de baja sensibilidad y raramente lo aceptan los grandes OEMs como suficiente. AL2 (auditoría remota) es el más habitual para proveedores de tecnología, ingeniería, software y marketing. AL3 (auditoría presencial) se exige para el manejo de prototipos físicos o datos de muy alta confidencialidad. Si tienes dudas sobre qué nivel te piden, Avson puede ayudarte a interpretar los requisitos de tu cliente.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿TISAX es una certificación o un assessment?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Técnicamente, TISAX es un assessment, no una certificación. La diferencia es que no se emite un certificado público: el resultado del assessment queda registrado en la plataforma ENX y se comparte directamente y de forma controlada con las empresas que el proveedor autoriza a verlo. Esto es una ventaja: un único assessment sirve para todos los OEMs y tier-1 con los que trabajas, sin necesidad de compartir documentación sensible con cada uno por separado. En el sector, sin embargo, es habitual hablar de "certificación TISAX" en sentido coloquial.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto tiempo dura el resultado TISAX?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El resultado del assessment TISAX tiene una validez de 3 años. Durante ese período, puede compartirse con todos los OEMs y tier-1 que lo soliciten a través de la plataforma ENX, sin necesidad de repetir el assessment. Al final del período de 3 años, debe renovarse con un nuevo assessment. Avson ofrece un bono de mantenimiento para gestionar la renovación y mantener los controles al día durante la vigencia del resultado.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿ISO 27001 me ayuda para TISAX?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Sí, de forma muy significativa. El VDA ISA en el que se basa TISAX fue diseñado con ISO 27001 como referencia principal. El solapamiento de controles es superior al 70%. Para empresas con ISO 27001, el esfuerzo adicional para superar el assessment TISAX se concentra en los controles específicos del sector automovilístico (principalmente la seguridad de datos de prototipos) y en la adaptación de la documentación al formato VDA ISA. El time-to-assessment para empresas con ISO 27001 es de 6-8 semanas, frente a los 3-4 meses que requiere partir de cero.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Quién hace el assessment? ¿Lo hace Avson?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>No. El assessment es realizado por auditores independientes acreditados por ENX Association. Avson prepara al cliente para el assessment y le acompaña durante el proceso, pero no puede realizar el assessment porque ENX requiere que sea realizado por una entidad independiente del consultor que ha preparado al cliente. Esta separación garantiza la objetividad del resultado. Los auditores ENX son expertos en VDA ISA y conocen bien los requisitos del sector automovilístico.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto cuesta el TISAX?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El coste total del TISAX incluye dos componentes: el coste de la consultoría de preparación (que gestiona Avson) y el coste del assessment propio de ENX (que se paga directamente a ENX o al auditor acreditado). El coste de la consultoría depende del punto de partida (si ya tienes ISO 27001 o partes de cero) y del nivel de assessment (AL2 o AL3). El coste del assessment ENX depende del tamaño de la organización y el nivel. Ofrecemos un diagnóstico gratuito para darte una estimación completa antes de comprometerte con nada.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cómo se comparte el resultado con los OEMs?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El resultado del assessment queda registrado en la plataforma ENX. Cuando un OEM o tier-1 solicita ver el resultado, el proveedor recibe una notificación y puede autorizar o rechazar el acceso. El proceso es completamente digital y no implica enviar documentación sensible por email ni por otros canales. Cuando la autorización es concedida, el cliente puede ver el resultado directamente en la plataforma ENX. Este mecanismo es una de las grandes ventajas del sistema: un solo assessment, compartido de forma segura con todos los clientes que lo necesiten.</p></div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy">
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>TISAX · Diagnóstico gratuito</span>
    <div className="gold-line" style={{margin:'20px auto 0'}}></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'32px 0 24px'}}>
      ¿Tu cliente te pide<br /><em>el TISAX?</em>
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',color:'rgba(255,255,255,0.65)',maxWidth:'520px',margin:'0 auto 40px',lineHeight:'1.7'}}>
      Diagnóstico gratuito. Te decimos qué nivel necesitas, cuánto tiempo llevará y cómo aprovechar lo que ya tienes para reducir el esfuerzo al mínimo.
    </p>
    <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',fontSize:'15px',padding:'18px 36px'}}>Solicitar diagnóstico TISAX gratuito →</Link>
  </div>
</section><div id="stickyBar" style={{display:'none',position:'fixed',bottom:'0',left:'0',right:'0',zIndex:'500',background:'#1A2744',borderTop:'1px solid rgba(255,255,255,0.08)',padding:'14px 20px',justifyContent:'space-between',gap:'12px',alignItems:'center'}}>
  <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>¿Necesitas certificarte?</span>
  <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#fff',border:'1px solid #fff',padding:'10px 20px',textDecoration:'none',whiteSpace:'nowrap'}}>Diagnóstico gratuito →</Link>
</div>
    </>
  )
}
