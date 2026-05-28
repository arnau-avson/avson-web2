import { Link } from 'react-router-dom'

export default function Iso27001Page() {
  return (
    <>
<section className="section section--pearl" style={{paddingTop:'160px',paddingBottom:'100px'}}>
  <div className="container">
    <span className="label-tag">ISO 27001:2022 · 93 controles · Revisión 2022</span>
    <div className="gold-line"></div>
    <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(48px,6vw,80px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 32px',maxWidth:'720px'}}>
      ISO 27001: el SGSI que<br /><em>abre mercados.</em>
    </h1>
    <p className="body-large" style={{maxWidth:'600px',marginBottom:'40px'}}>
      El Sistema de Gestión de la Seguridad de la Información (SGSI) certificado bajo ISO 27001 es el estándar más reconocido del mundo en materia de seguridad de la información. Te permite demostrar a clientes, socios y reguladores que gestionas los riesgos de seguridad de forma sistemática y continua.
    </p>
    <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginBottom:'52px'}}>
      <Link to="/contacto" className="btn-primary">Diagnóstico gratuito →</Link>
      <Link to="/packs" className="btn-text">Ver packs ISO 27001 →</Link>
    </div>
    <div style={{display:'flex',gap:'40px',flexWrap:'wrap'}}>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>4–5</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>meses a certificado</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>93</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>controles en la norma</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>65%</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>solapamiento con ENS</span>
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
    <span className="label-tag">ISO 27001 · Qué es</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'580px'}}>El estándar internacional de<br /><em>seguridad de la información.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'60px',marginTop:'52px',alignItems:'start'}}>
      <div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          La norma ISO/IEC 27001:2022, publicada en octubre de 2022 por la Organización Internacional de Normalización (ISO) y la Comisión Electrotécnica Internacional (IEC), es el referente mundial para la gestión de la seguridad de la información. Define los requisitos para establecer, implementar, mantener y mejorar continuamente un Sistema de Gestión de la Seguridad de la Información (SGSI).
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          La versión 2022 supuso una revisión significativa respecto a su predecesora de 2013, actualizando y reorganizando los controles del Anexo A para reflejar la realidad de las amenazas actuales: ciberseguridad en la nube, teletrabajo, gestión de identidades digitales, inteligencia de amenazas y detección de incidentes proactiva.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>
          La norma adopta el ciclo PDCA (Planificar-Hacer-Verificar-Actuar) como base de su enfoque de mejora continua, y exige un enfoque basado en el riesgo para seleccionar los controles aplicables a cada organización. No hay dos SGSI iguales: el alcance, los controles y el nivel de profundidad se adaptan al contexto, los activos y los objetivos de negocio de cada empresa.
        </p>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'24px'}}>
        <div style={{background:'var(--pearl)',padding:'32px',borderLeft:'3px solid var(--gold)'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--navy)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'20px'}}>ISO 27001:2013 vs 2022 — Diferencias clave</h3>
          <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.7'}}>
            <li style={{padding:'8px 0',borderBottom:'1px solid rgba(0,0,0,0.07)'}}>114 controles en 14 categorías → 93 controles en 4 bloques temáticos</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid rgba(0,0,0,0.07)'}}>11 controles nuevos (inteligencia de amenazas, seguridad cloud, etc.)</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid rgba(0,0,0,0.07)'}}>Nuevos atributos de clasificación de controles</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid rgba(0,0,0,0.07)'}}>Mayor énfasis en gestión de identidades y acceso</li>
            <li style={{padding:'8px 0'}}>Plazo de migración desde 2013: caducado en octubre 2025</li>
          </ul>
        </div>
        <div style={{background:'var(--pearl)',padding:'32px',borderLeft:'3px solid var(--gold)'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--navy)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'20px'}}>Ámbito de certificación</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.7',marginBottom:'12px'}}>El alcance del SGSI puede cubrir:</p>
          <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.7'}}>
            <li style={{padding:'6px 0',paddingLeft:'16px',position:'relative'}}><span style={{position:'absolute',left:'0',color:'var(--gold)'}}>→</span> Toda la organización</li>
            <li style={{padding:'6px 0',paddingLeft:'16px',position:'relative'}}><span style={{position:'absolute',left:'0',color:'var(--gold)'}}>→</span> Un servicio o línea de negocio específica</li>
            <li style={{padding:'6px 0',paddingLeft:'16px',position:'relative'}}><span style={{position:'absolute',left:'0',color:'var(--gold)'}}>→</span> Una sede o unidad organizativa</li>
            <li style={{padding:'6px 0',paddingLeft:'16px',position:'relative'}}><span style={{position:'absolute',left:'0',color:'var(--gold)'}}>→</span> Un producto o plataforma tecnológica concreta</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="quien-necesita">
  <div className="container">
    <span className="label-tag">¿Te aplica?</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>Consultoría ISO 27001 en España:<br /><em>empresas que certifican con Avson.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'48px'}}>
      ISO 27001 es el estándar de seguridad de la información más solicitado en contratos privados y en pliegos de contratación internacional. Si alguna de estas situaciones te describe, probablemente necesitas la certificación.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Empresas TIC que responden cuestionarios de seguridad</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Si tus clientes corporativos te piden completar cuestionarios de seguridad trimestral o anualmente, la certificación ISO 27001 los elimina de raíz.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Proveedores SaaS o cloud con clientes enterprise</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Los clientes corporativos e institucionales exigen cada vez más que sus proveedores de software tengan ISO 27001 como requisito mínimo de contratación.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Empresas que quieren licitar contratos que exigen ISO 27001</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Muchos contratos privados de gran envergadura incluyen ISO 27001 como requisito en sus pliegos. También aparece en concursos internacionales.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Organizaciones post-incidente que quieren sistematizar la gestión</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Tras sufrir un ciberataque o una brecha de datos, la certificación ISO 27001 es el mecanismo más sólido para demostrar que el problema está estructuralmente resuelto.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Empresas con datos sensibles de clientes</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Si manejas datos de salud, financieros, legales o cualquier otro dato especialmente protegido, la certificación refuerza la confianza y reduce el riesgo regulatorio.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Startups tech que quieren acceder a clientes enterprise</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>ISO 27001 es la llave que abre los departamentos de compras de las grandes corporaciones. Elimina objeciones de seguridad en el proceso de venta.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Empresas que ya tienen ENS y quieren aprovechar el trabajo</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>Si ya estás certificado en el <Link to="/ens">ENS</Link>, el 65% del trabajo para ISO 27001 ya está hecho. Es la inversión con mayor retorno en tu portfolio GRC.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'28px 32px',display:'flex',gap:'20px',alignItems:'flex-start'}}>
        <span style={{color:'var(--gold)',fontSize:'20px',flexShrink:'0',marginTop:'2px'}}>✓</span>
        <div>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'500',color:'var(--navy)',marginBottom:'6px'}}>Organizaciones que necesitan cumplir con NIS2 o DORA</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.6'}}>ISO 27001 proporciona el marco de gestión del riesgo que ambas directivas exigen. Certificarte en ISO 27001 primero reduce significativamente el esfuerzo de adecuación posterior a <Link to="/nis2">NIS2</Link> o <Link to="/dora">DORA</Link>.</p>
        </div>
      </div>
    </div>
    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'32px 36px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap',marginTop:'48px'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'22px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>"Si ya tienes ENS, el 65% del trabajo para ISO 27001 está hecho. El resto lo hacemos nosotros."</span>
      <Link to="/contacto" className="btn-primary">Diagnóstico gratuito →</Link>
    </div>
  </div>
</section>


<section className="section section--white" id="controles">
  <div className="container">
    <span className="label-tag">ISO 27001:2022 · Estructura</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'580px'}}>93 controles organizados<br /><em>en 4 bloques temáticos.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'48px'}}>
      La revisión 2022 reorganizó completamente el Anexo A de la norma, pasando de 14 dominios con 114 controles a 4 bloques temáticos con 93 controles. Esta nueva estructura facilita la asignación de responsabilidades y la comprensión del alcance de cada control.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',color:'#fff'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'24px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'48px',fontWeight:'300',color:'var(--gold)',lineHeight:'1'}}>37</span>
          <div>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Controles Organizacionales</p>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.5)',letterSpacing:'0.06em'}}>BLOQUE A.5</p>
          </div>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'rgba(255,255,255,0.75)'}}>
          El bloque más amplio incluye los controles relacionados con la gestión y el gobierno de la seguridad de la información: políticas de seguridad, roles y responsabilidades, gestión de activos, clasificación y etiquetado de información, relaciones con proveedores, gestión de incidentes de seguridad, continuidad de negocio (<Link to="/iso22301">ISO 22301</Link>) desde la perspectiva de seguridad de la información, y cumplimiento con requisitos legales y regulatorios. Son los controles que establecen el marco de referencia sobre el que se construye todo el SGSI.
        </p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'40px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'24px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'48px',fontWeight:'300',color:'var(--gold)',lineHeight:'1'}}>8</span>
          <div>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--navy)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Controles sobre Personas</p>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.06em'}}>BLOQUE A.6</p>
          </div>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>
          El factor humano sigue siendo la principal vulnerabilidad en la mayoría de organizaciones. Este bloque aborda los controles relacionados con la selección de personal, las verificaciones previas a la contratación, los acuerdos de confidencialidad, los términos y condiciones de empleo, la formación y concienciación en seguridad, el proceso disciplinario, la gestión del cese o cambio de empleo, y las consideraciones de seguridad para el teletrabajo y el uso de dispositivos personales.
        </p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'40px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'24px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'48px',fontWeight:'300',color:'var(--gold)',lineHeight:'1'}}>14</span>
          <div>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--navy)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Controles Físicos</p>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.06em'}}>BLOQUE A.7</p>
          </div>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>
          La seguridad física sigue siendo esencial incluso en entornos altamente digitalizados. Este bloque incluye controles sobre el establecimiento de perímetros de seguridad física, el control de acceso a instalaciones, la seguridad de oficinas y despachos, la protección de equipos (incluyendo los usados fuera de las instalaciones), las políticas de escritorio limpio y pantalla bloqueada, la eliminación segura de activos y soportes de información, y el mantenimiento seguro de equipos.
        </p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',color:'#fff'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'24px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'48px',fontWeight:'300',color:'var(--gold)',lineHeight:'1'}}>34</span>
          <div>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Controles Tecnológicos</p>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.5)',letterSpacing:'0.06em'}}>BLOQUE A.8</p>
          </div>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'rgba(255,255,255,0.75)'}}>
          El bloque más técnico agrupa los controles relacionados con los sistemas y tecnologías de la información: autenticación y control de acceso lógico, gestión de identidades privilegiadas, cifrado y gestión de claves, gestión de vulnerabilidades técnicas, copias de seguridad, registro y monitorización de actividad, seguridad en redes y comunicaciones, seguridad en el desarrollo de software, protección contra código malicioso, seguridad en servicios cloud, y filtrado web. Incluye 11 controles completamente nuevos respecto a la versión 2013.
        </p>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy" id="ens-trampolín">
  <div className="container">
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>Sinergia ENS → ISO 27001</span>
    <div className="gold-line"></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'0 0 32px',maxWidth:'620px'}}>
      Si ya tienes el ENS,<br />el 65% está hecho.
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'rgba(255,255,255,0.7)',maxWidth:'620px',marginBottom:'52px'}}>
      El Esquema Nacional de Seguridad y la ISO 27001 comparten la misma filosofía de gestión del riesgo y una estructura documental prácticamente idéntica. Si ya has pasado por la certificación ENS, habrás construido el análisis de riesgos, el inventario de activos, la política de seguridad, los procedimientos operativos y el registro de tratamiento de riesgos que ISO 27001 también exige. El solapamiento no es superficial: es estructural.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginBottom:'48px'}}>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'36px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'24px'}}>Lo que se comparte (65%)</h3>
        <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:'1.8'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Análisis y tratamiento de riesgos</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Política de seguridad de la información</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Control de acceso lógico y físico</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Gestión de incidentes de seguridad</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Copias de seguridad y recuperación</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Gestión de vulnerabilidades técnicas</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Formación y concienciación</li>
          <li style={{padding:'6px 0'}}>Revisión por la dirección y auditoría interna</li>
        </ul>
      </div>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'36px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'24px'}}>Lo específico de ISO 27001 (35%)</h3>
        <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:'1.8'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Gestión formal de seguridad con proveedores</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Inventario formal de activos de información</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Seguridad de los recursos humanos (cese, disciplina)</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Gestión de identidades privilegiadas documentada</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Declaración de Aplicabilidad (SoA) formal</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Controles específicos de desarrollo seguro</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Inteligencia de amenazas (nuevo en v2022)</li>
          <li style={{padding:'6px 0'}}>Seguridad en la nube (nuevo en v2022)</li>
        </ul>
      </div>
    </div>
    <Link to="/packs" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff'}}>Ver pack ENS + ISO 27001 →</Link>
  </div>
</section>


<section className="section section--pearl" id="proceso">
  <div className="container">
    <span className="label-tag">Nuestro proceso</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'520px'}}>De cero a certificado<br /><em>en 4–5 meses.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'52px'}}>
      Nuestra metodología elimina el trabajo redundante y prioriza lo que realmente importa en la auditoría de certificación. Sin burocracia innecesaria, sin documentos que nadie leerá. Solo lo que necesitas para certificarte y para que el SGSI funcione de verdad.
    </p>
    <div style={{display:'flex',flexDirection:'column',gap:'0'}}>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 1–2</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 01</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Diagnóstico y definición del alcance</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Analizamos el contexto organizacional, identificamos las partes interesadas y sus requisitos de seguridad, y definimos con precisión el alcance del SGSI. Una definición correcta del alcance en esta fase es determinante para optimizar el coste y el plazo del proyecto. También realizamos el inventario inicial de activos de información y sistemas de soporte.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 3–4</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 02</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Análisis y tratamiento de riesgos</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Realizamos el análisis de riesgos de seguridad de la información con metodología cuantitativa y cualitativa. Identificamos amenazas, vulnerabilidades y calculamos el impacto potencial sobre la confidencialidad, la integridad y la disponibilidad de los activos. El resultado es el Plan de Tratamiento de Riesgos (PTR) con los controles seleccionados del Anexo A y su justificación en la Declaración de Aplicabilidad (SoA).</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 5–12</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 03</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Implementación de controles y documentación</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Implementamos los controles seleccionados y desarrollamos toda la documentación del SGSI: política de seguridad de la información, procedimientos operativos, registros de actividad, instrucciones técnicas y guías de usuario. Cada documento está diseñado para ser funcional, no decorativo. Paralelamente, llevamos a cabo los programas de formación y concienciación para el personal en alcance.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 13–16</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 04</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Auditoría interna y revisión por la dirección</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Realizamos una auditoría interna completa del SGSI para identificar y corregir cualquier no conformidad antes de la auditoría de certificación. La revisión por la dirección formaliza el compromiso de la organización con el sistema de gestión y proporciona el input necesario para la auditoría. Esta fase es crítica: es donde se identifican y resuelven los puntos débiles.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 17–20</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 05</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Auditoría de certificación</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>La auditoría de certificación se desarrolla en dos fases: la Fase 1 es una revisión documental en la que el auditor de la entidad certificadora acreditada verifica que el SGSI está correctamente diseñado y documentado. La Fase 2 es la auditoría in situ, donde se verifica la implementación efectiva de los controles. Avson acompaña al equipo durante todo el proceso de auditoría. Con nuestra garantía de éxito, si no superamos la auditoría, cubrimos la siguiente sin coste adicional.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--white" id="packs">
  <div className="container">
    <span className="label-tag">Packs ISO 27001</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Elige cómo<br /><em>certificarte.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px',display:'flex',flexDirection:'column'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Opción A</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}>ISO 27001</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'28px'}}>Certificación ISO 27001:2022 completa</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7',flex:'1'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Análisis de riesgos completo</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>93 controles Anexo A evaluados</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Declaración de Aplicabilidad (SoA)</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Documentación completa SGSI</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Auditoría interna incluida</li>
          <li style={{padding:'6px 0'}}>Acompañamiento auditoría certificación</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'8px'}}>Plazo: 4–5 meses</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',marginBottom:'20px'}}>Para: empresas que no necesitan ENS</p>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',display:'flex',flexDirection:'column',position:'relative'}}>
        <div style={{position:'absolute',top:'0',right:'0',background:'var(--gold)',padding:'6px 16px',fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'#fff',letterSpacing:'0.08em',textTransform:'uppercase'}}>Más solicitado</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'rgba(255,255,255,0.5)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Opción B</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'#fff',marginBottom:'8px'}}>ENS + ISO 27001</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.5)',marginBottom:'28px'}}>El pack más solicitado. Mercado público y privado.</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)',lineHeight:'1.7',flex:'1'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Todo lo del ENS (Básica o Media)</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>ISO 27001 completo aprovechando el 65%</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Un solo equipo, un solo proyecto</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Documentación unificada para ambos marcos</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Dos certificaciones por el precio de 1.3×</li>
          <li style={{padding:'6px 0'}}>Garantía de éxito en ambas auditorías</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.5)',marginBottom:'8px'}}>Plazo: 5–6 meses</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.4)',marginBottom:'20px'}}>Para: proveedores TIC públicos y privados</p>
        <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',textAlign:'center',justifyContent:'center'}}>Solicitar presupuesto →</Link>
      </div>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px',display:'flex',flexDirection:'column'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Opción C</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}>Pack Triple</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'28px'}}>ENS + ISO 27001 + ISO 22301</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7',flex:'1'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>ENS Básica o Media</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>ISO 27001:2022 completo</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>ISO 22301 continuidad de negocio</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Tres certificaciones con máxima sinergia</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Un sistema de gestión integrado</li>
          <li style={{padding:'6px 0'}}>Ahorro estimado del 35% vs proyectos separados</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'8px'}}>Plazo: 7–9 meses</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',marginBottom:'20px'}}>Para: la hoja de ruta GRC completa</p>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="casos">
  <div className="container">
    <span className="label-tag">ISO 27001 · Casos de éxito</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>Lo que dicen nuestros<br /><em>clientes certificados.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'#fff',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Llevábamos dos años diciendo que íbamos a certificar ISO 27001. Con Avson lo hicimos en cuatro meses y medio. Lo que más me sorprendió fue que el proceso no paralizó el negocio: trabajaron con lo que ya teníamos del ENS y añadieron lo que faltaba.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid rgba(255,255,255,0.15)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'#fff',margin:'0'}}>Santiago Blanco</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.45)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>CTO · Empresa de desarrollo de software · Madrid</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',border:'1px solid var(--border)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'var(--navy)',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Teníamos un cliente enterprise que nos exigía ISO 27001 para renovar el contrato. Teníamos tres meses. Avson lo hizo posible. No sé si otro proveedor lo habría conseguido en ese plazo, pero ellos sí lo consiguieron y sin incidencias en la auditoría.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid var(--border)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'var(--navy)',margin:'0'}}>Elena Fuertes</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>Directora General · Consultora de datos · Barcelona</p>
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
    <h2 className="section-title" style={{maxWidth:'480px'}}>Todo lo que necesitas<br /><em>saber sobre ISO 27001.</em></h2>
    <div style={{marginTop:'48px'}}>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto cuesta certificarse en ISO 27001?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El coste depende del tamaño de la empresa, la complejidad de los sistemas de información, el alcance del SGSI y si ya tienes otras certificaciones previas. Una empresa con ENS certificado puede acceder a ISO 27001 por una fracción del coste de partida cero, gracias al solapamiento del 65%. Ofrecemos un diagnóstico gratuito sin compromiso en el que analizamos tu situación y te damos un presupuesto personalizado y detallado antes de firmar nada.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto tiempo lleva la certificación ISO 27001?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Con la metodología de Avson GRC, el proceso completo desde el inicio hasta la obtención del certificado dura entre 4 y 5 meses. El mercado habitual trabaja en plazos de 6 a 12 meses. Nuestra ventaja radica en una metodología probada, plantillas reutilizables, y la experiencia de haber hecho este proceso decenas de veces. Si ya tienes el ENS, podemos reducir el plazo aún más al aprovechar la documentación existente.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿La ISO 27001:2022 obliga a migrar desde la versión 2013?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Sí. Las certificaciones emitidas bajo ISO 27001:2013 tuvieron un plazo de transición hasta octubre de 2025 para migrar a la versión 2022. A partir de esa fecha, todas las certificaciones vigentes deben ser bajo la versión 2022. Si tienes una certificación 2013 que no ha migrado, técnicamente ha expirado como certificación válida bajo el estándar actual. Todas las certificaciones nuevas que gestionamos en Avson son bajo la versión 2022 desde su publicación.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué diferencia hay entre ISO 27001 y ENS?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El ENS (Esquema Nacional de Seguridad) es un marco normativo de obligado cumplimiento para los proveedores TIC de la Administración Pública española, establecido por Real Decreto 311/2022. Es específico de España y está orientado al ámbito público. La ISO 27001 es un estándar internacional voluntario (aunque cada vez más exigido contractualmente) reconocido en todo el mundo, tanto en el sector público internacional como en el privado. Ambos comparten el 65% de los controles y la misma filosofía de gestión del riesgo, lo que los hace perfectamente complementarios.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué es el alcance del SGSI?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El alcance define qué partes de la organización, qué procesos, qué sistemas y qué servicios están cubiertos por la certificación ISO 27001. Un alcance bien definido es fundamental: demasiado amplio encarece el proyecto; demasiado estrecho puede no satisfacer las expectativas del cliente que exige la certificación. En Avson dedicamos una fase específica a definir el alcance óptimo para cada cliente, maximizando el valor comercial del certificado mientras se optimiza el coste y el plazo del proyecto.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Necesito personal técnico interno para implementar ISO 27001?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>No es estrictamente necesario tener un equipo técnico interno especializado. Avson gestiona íntegramente el proyecto de implementación y documentación. Lo que sí se necesita es el compromiso y la implicación de la dirección de la organización (la norma lo exige explícitamente) y un punto de contacto interno que pueda facilitar el acceso a la información y coordinar las revisiones internas. El tiempo de dedicación interna necesario es menor de lo que la mayoría de empresas espera.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿ISO 27001 sirve para cumplir con NIS2 o DORA?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Sí, de forma muy significativa. La ISO 27001 proporciona entre el 60 y el 70% de los controles y medidas que NIS2 exige a las entidades esenciales e importantes. Para DORA, ISO 27001 cubre de forma directa los requisitos del pilar de gestión del riesgo TIC y parte importante de la gestión de incidentes. Certificarse en ISO 27001 primero es la estrategia más eficiente si también necesitas adecuarte a NIS2 o DORA, ya que reduce el coste y el esfuerzo de adecuación posterior de forma muy significativa.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto dura la certificación ISO 27001?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El certificado ISO 27001 tiene una vigencia de 3 años, con auditorías de seguimiento anuales (en los años 1 y 2) y una auditoría de renovación en el año 3. Las auditorías de seguimiento verifican que el SGSI se mantiene activo y que los controles siguen siendo efectivos. Avson ofrece un bono de mantenimiento anual para gestionar las auditorías periódicas, actualizar la documentación cuando cambia el contexto de la organización y dar soporte continuo al equipo interno responsable del SGSI.</p></div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy">
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>ISO 27001 · Diagnóstico gratuito</span>
    <div className="gold-line" style={{margin:'20px auto 0'}}></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'32px 0 24px'}}>
      ¿Quieres saber si ISO 27001<br /><em>es lo que necesitas?</em>
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',color:'rgba(255,255,255,0.65)',maxWidth:'520px',margin:'0 auto 40px',lineHeight:'1.7'}}>
      Diagnóstico gratuito. Sin compromiso. Un consultor senior te explica exactamente qué necesitas y qué no, y si tiene sentido certificar ISO 27001 solo o combinado con el ENS.
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
