import { Link } from 'react-router-dom'

export default function DoraPage() {
  return (
    <>
<section className="section section--pearl" style={{paddingTop:'160px',paddingBottom:'100px'}}>
  <div className="container">
    <span className="label-tag">DORA · Reglamento EU 2022/2554 · En vigor enero 2025</span>
    <div className="gold-line"></div>
    <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(48px,6vw,80px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 32px',maxWidth:'720px'}}>
      DORA: resiliencia digital<br /><em>obligatoria en finanzas.</em>
    </h1>
    <p className="body-large" style={{maxWidth:'620px',marginBottom:'40px'}}>
      El Reglamento DORA (Digital Operational Resilience Act) establece requisitos de resiliencia operacional digital para entidades financieras y sus proveedores TIC críticos en la Unión Europea. En vigor desde el 17 de enero de 2025, es de aplicación directa en España sin necesidad de transposición nacional.
    </p>
    <div style={{background:'var(--navy)',padding:'24px 32px',marginBottom:'40px',borderLeft:'4px solid var(--gold)',maxWidth:'640px'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--gold)',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.06em'}}>DORA ya está en vigor</p>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.8)',lineHeight:'1.6'}}>El Reglamento DORA entró en vigor el 17 de enero de 2025. Las entidades financieras y sus proveedores TIC que no hayan iniciado el proceso de adecuación están incumpliendo el reglamento europeo desde esa fecha.</p>
    </div>
    <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginBottom:'52px'}}>
      <Link to="/contacto" className="btn-primary">Diagnóstico DORA gratuito →</Link>
      <Link to="/packs" className="btn-text">Ver pack ENS + DORA →</Link>
    </div>
    <div style={{display:'flex',gap:'40px',flexWrap:'wrap'}}>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>5</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>pilares del reglamento</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>21</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>tipos de entidades afectadas</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>70%</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>cubierto por ENS + ISO 27001</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>4–6</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>meses de adecuación</span>
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
    <span className="label-tag">DORA · Qué es</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'640px'}}>El reglamento europeo que hace<br /><em>obligatoria la resiliencia digital.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'680px',marginBottom:'52px'}}>
      DORA (Digital Operational Resilience Act), formalmente el Reglamento (UE) 2022/2554, es el marco regulatorio europeo que establece requisitos uniformes de resiliencia operacional digital para el sector financiero. Su objetivo es garantizar que las entidades financieras y sus proveedores tecnológicos puedan resistir, responder y recuperarse ante interrupciones e incidentes TIC graves. El reglamento se estructura en torno a cinco pilares fundamentales que abordan el ciclo completo de la resiliencia digital.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',color:'#fff'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'40px',fontWeight:'300',color:'var(--gold)',lineHeight:'1'}}>01</span>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'#fff'}}>Gestión del riesgo TIC</h3>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'rgba(255,255,255,0.75)'}}>Marco formal de gestión del riesgo tecnológico con políticas, procedimientos y herramientas documentadas. Incluye la identificación y clasificación de activos TIC, la gestión de riesgos de terceros, las estrategias de protección y las capacidades de detección. El órgano de dirección debe aprobar el marco y asumir responsabilidad sobre él.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'40px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'40px',fontWeight:'300',color:'var(--gold)',lineHeight:'1'}}>02</span>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'var(--navy)'}}>Gestión y notificación de incidentes TIC</h3>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Proceso estructurado de clasificación, gestión y notificación de incidentes TIC significativos. Los plazos de notificación a los reguladores son estrictos: alerta temprana en 4 horas desde la detección, notificación completa en 24 horas, e informe final en 1 mes. La clasificación de incidentes como "mayor" o "menor" determina las obligaciones de reporte.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'40px'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'40px',fontWeight:'300',color:'var(--gold)',lineHeight:'1'}}>03</span>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'var(--navy)'}}>Pruebas de resiliencia operacional digital</h3>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Programa de pruebas periódicas que incluye pruebas de vulnerabilidades, ejercicios de continuidad y, para entidades de mayor tamaño e impacto sistémico, Threat-Led Penetration Testing (TLPT). Las TLPT son simulaciones de ataques reales dirigidos por inteligencia de amenazas y deben ser realizadas por proveedores certificados. La frecuencia y el alcance de las pruebas dependen de la clasificación de la entidad.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',color:'#fff'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'40px',fontWeight:'300',color:'var(--gold)',lineHeight:'1'}}>04</span>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'#fff'}}>Riesgo de terceros TIC</h3>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'rgba(255,255,255,0.75)'}}>Due diligence exhaustivo de los proveedores TIC, con especial atención a los considerados críticos. DORA exige contratos con cláusulas específicas de seguridad, auditoría y continuidad. Los registros de proveedores TIC deben mantenerse actualizados. Los reguladores europeos (ESAs) pueden designar a ciertos proveedores TIC como "críticos" y supervisarlos directamente.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'40px',gridColumn:'span 2'}}>
        <div style={{display:'flex',alignItems:'center',gap:'16px',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-serif)',fontSize:'40px',fontWeight:'300',color:'var(--gold)',lineHeight:'1'}}>05</span>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'var(--navy)'}}>Intercambio de información sobre amenazas</h3>
        </div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)',maxWidth:'700px'}}>DORA promueve el intercambio voluntario de información sobre ciberamenazas e incidentes entre entidades financieras a través de plataformas de threat intelligence. Este mecanismo de colaboración sectorial tiene como objetivo elevar el nivel colectivo de seguridad del sistema financiero europeo. Las entidades pueden participar en acuerdos de intercambio de información sin que ello implique responsabilidad por el uso que otros participantes hagan de dicha información.</p>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="quien-aplica">
  <div className="container">
    <span className="label-tag">¿Te aplica DORA?</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'580px'}}>Cumplir DORA en España:<br /><em>21 tipos de entidades bajo el alcance del reglamento.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'52px'}}>
      DORA tiene un alcance intencionadamente amplio. Afecta tanto a las entidades financieras directamente como a sus proveedores tecnológicos. Si tu empresa presta servicios TIC a alguna de las entidades listadas a continuación, probablemente estás en el ámbito del reglamento.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'32px'}}>
      <div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--navy)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'24px',paddingBottom:'12px',borderBottom:'2px solid var(--gold)'}}>Entidades financieras obligadas</h3>
        <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.7'}}>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span>Entidades de crédito (bancos)</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span>Entidades de pago y dinero electrónico</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span>Empresas de inversión y gestoras</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span>Empresas de seguros y reaseguros</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span>Intermediarios de seguros</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span>Infraestructuras de mercado financiero</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span>Repositorios de operaciones</li>
          <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span>Proveedores de servicios de criptoactivos</li>
          <li style={{padding:'8px 0',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span>Agencias de calificación crediticia y más</li>
        </ul>
      </div>
      <div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--navy)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'24px',paddingBottom:'12px',borderBottom:'2px solid var(--gold)'}}>Proveedores TIC en el ámbito</h3>
        <div style={{background:'var(--white)',padding:'28px',marginBottom:'16px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>Proveedores TIC críticos designados</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>Las Autoridades Europeas de Supervisión (ESAs) pueden designar a proveedores TIC como "críticos" y supervisarlos directamente. Estos proveedores quedan sujetos a supervisión directa por los reguladores europeos.</p>
        </div>
        <div style={{background:'var(--white)',padding:'28px',marginBottom:'16px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>Proveedores de servicios cloud</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>Si prestas servicios cloud (IaaS, PaaS, SaaS) a entidades financieras, debes incluir en tus contratos las cláusulas DORA y ser capaz de someterte a auditorías. El riesgo de concentración en pocos proveedores cloud es una preocupación explícita del reglamento.</p>
        </div>
        <div style={{background:'var(--white)',padding:'28px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>Cualquier proveedor TIC subcontratado</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>DORA establece una cadena de responsabilidad que se extiende a los subcontratistas. Si eres proveedor de un proveedor TIC que sirve a una entidad financiera, puedes quedar dentro del alcance contractual de DORA.</p>
        </div>
      </div>
    </div>
    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'32px 36px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap',marginTop:'48px'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'22px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>"Si ya tienes ENS, el 45% del trabajo para DORA está hecho. El resto lo hacemos nosotros."</span>
      <Link to="/contacto" className="btn-primary">Diagnóstico gratuito →</Link>
    </div>
  </div>
</section>


<section className="section section--navy" id="sinergias">
  <div className="container">
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>Sinergias con marcos existentes</span>
    <div className="gold-line"></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'0 0 32px',maxWidth:'680px'}}>
      ENS + ISO 27001 cubren<br />el 70% de DORA.
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'rgba(255,255,255,0.7)',maxWidth:'640px',marginBottom:'52px'}}>
      DORA no es un marco construido desde cero: se basa en los principios de gestión del riesgo que ISO 27001 y el ENS ya implementan. Si tu organización ya tiene alguno de estos marcos, el trabajo de adecuación a DORA es significativamente menor que empezar desde cero.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginBottom:'48px'}}>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'16px'}}>DORA Pilar 1 → ISO 27001</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff',marginBottom:'8px'}}>Gestión del riesgo TIC</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.6)',lineHeight:'1.6'}}>El análisis de riesgos, las políticas de seguridad y el marco de controles de ISO 27001 cumplen directamente los requisitos del pilar de gestión del riesgo TIC de DORA.</p>
      </div>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'16px'}}>DORA Pilar 2 → ENS</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff',marginBottom:'8px'}}>Gestión de incidentes</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.6)',lineHeight:'1.6'}}>El ENS exige procedimientos de gestión de incidentes de seguridad que cubren buena parte de los requisitos de clasificación y notificación de DORA. Solo hay que adaptar los plazos y el formato de reporte al regulador.</p>
      </div>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'16px'}}>DORA Pilar 4 → ISO 27001</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff',marginBottom:'8px'}}>Riesgo de terceros</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.6)',lineHeight:'1.6'}}>Los controles de gestión de proveedores de <Link to="/iso27001">ISO 27001</Link> (Anexo A, bloque organizacional) proporcionan la base del programa de gestión de riesgo de terceros TIC que DORA exige. Se complementan con las cláusulas contractuales específicas de DORA.</p>
      </div>
    </div>
    <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)',marginBottom:'40px'}}>
      <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'16px'}}>Lo específico de DORA (30% adicional)</h3>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>
        <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:'1.8'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Threat-Led Penetration Testing (TLPT) para entidades significativas</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Plazos específicos de notificación de incidentes al regulador financiero</li>
          <li style={{padding:'6px 0'}}>Registro obligatorio de proveedores TIC con clasificación de criticidad</li>
        </ul>
        <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:'1.8'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Cláusulas contractuales DORA en acuerdos con proveedores TIC</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Participación en esquemas de intercambio de información sectorial</li>
          <li style={{padding:'6px 0'}}>Informe anual de riesgo TIC al órgano de gobierno</li>
        </ul>
      </div>
    </div>
    <Link to="/packs" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff'}}>Ver pack ENS + DORA →</Link>
  </div>
</section>


<section className="section section--pearl" id="proceso">
  <div className="container">
    <span className="label-tag">Nuestro proceso</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'520px'}}>De la brecha al cumplimiento<br /><em>en 4–6 meses.</em></h2>
    <div style={{display:'flex',flexDirection:'column',gap:'0',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 1–2</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 01</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Análisis de alcance y gap analysis DORA</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Determinamos si la organización está en el ámbito de DORA, qué clasificación le corresponde (si aplica proporcionalidad) y realizamos un gap analysis exhaustivo de los cinco pilares del reglamento. Identificamos qué controles y procesos ya están cubiertos por los marcos existentes y qué gaps específicos de DORA deben abordarse.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 3–6</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 02</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Plan de adecuación y priorización</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Diseñamos el plan de adecuación con los gaps identificados, priorizados por riesgo regulatorio y operativo. Asignamos responsables, plazos y recursos. El plan incluye la hoja de ruta para los cinco pilares de DORA, con especial atención a la gestión del riesgo TIC, la clasificación de incidentes y el programa de pruebas de resiliencia.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 7–16</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 03</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Implementación de los cinco pilares</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Implementamos los controles y procesos específicos de DORA: marco de gestión del riesgo TIC, procedimientos de clasificación y notificación de incidentes, programa de pruebas de resiliencia, inventario y due diligence de proveedores TIC, revisión y actualización de contratos con cláusulas DORA, y establecimiento del proceso de intercambio de información si aplica.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 17–20</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 04</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Pruebas de resiliencia y simulacros</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Diseñamos y ejecutamos el programa de pruebas de resiliencia operacional digital exigido por DORA: pruebas de vulnerabilidades técnicas, ejercicios de respuesta a incidentes, y simulacros de continuidad. Para entidades que requieren TLPT, coordinamos con proveedores certificados. Toda la actividad de testing queda documentada como evidencia de cumplimiento.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 21–24</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 05</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Validación y reporte de conformidad</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Realizamos una revisión interna de conformidad con los requisitos de DORA y preparamos la documentación de evidencia. Avson elabora el informe de estado de adecuación que puede presentarse al regulador y al órgano de gobierno. Establecemos el proceso de monitorización continua y el calendario de revisiones periódicas para mantener el cumplimiento en el tiempo.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--white" id="packs">
  <div className="container">
    <span className="label-tag">Packs DORA</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Tu punto de partida<br /><em>determina tu pack.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px',display:'flex',flexDirection:'column'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Empiezo desde cero</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}>Adecuación DORA</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'28px'}}>Para entidades sin marcos GRC previos</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7',flex:'1'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Gap analysis completo de los 5 pilares DORA</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Marco de gestión del riesgo TIC</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Procedimientos de notificación de incidentes</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Inventario y due diligence de proveedores TIC</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Revisión de contratos con cláusulas DORA</li>
          <li style={{padding:'6px 0'}}>Programa de pruebas de resiliencia</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'8px'}}>Plazo: 5–6 meses</p>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',display:'flex',flexDirection:'column',position:'relative'}}>
        <div style={{position:'absolute',top:'0',right:'0',background:'var(--gold)',padding:'6px 16px',fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'#fff',letterSpacing:'0.08em',textTransform:'uppercase'}}>Más eficiente</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'rgba(255,255,255,0.5)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Ya tengo ENS</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'#fff',marginBottom:'8px'}}>ENS + DORA</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.5)',marginBottom:'28px'}}>Máxima eficiencia aprovechando el ENS</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)',lineHeight:'1.7',flex:'1'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>ENS como base del marco de riesgo TIC</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Gap analysis específico de DORA sobre ENS</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Sólo los gaps diferenciales de DORA</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Notificación de incidentes DORA adaptada</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Contratos con cláusulas DORA</li>
          <li style={{padding:'6px 0'}}>Ahorro estimado del 40% vs desde cero</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.5)',marginBottom:'8px'}}>Plazo: 3–4 meses adicionales</p>
        <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',textAlign:'center',justifyContent:'center'}}>Solicitar presupuesto →</Link>
      </div>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px',display:'flex',flexDirection:'column'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Máxima cobertura</p>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}>ENS + ISO 27001 + DORA</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'28px'}}>La solución completa para el sector financiero</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0 0 32px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7',flex:'1'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>ENS (si aplica) como base</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>ISO 27001 para el mercado privado</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>DORA completo sobre la base anterior</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>Un solo equipo, máxima sinergia</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid var(--border)'}}>70% de DORA cubierto por ENS + ISO 27001</li>
          <li style={{padding:'6px 0'}}>La posición más sólida del mercado</li>
        </ul>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'8px'}}>Plazo: 7–9 meses</p>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="casos">
  <div className="container">
    <span className="label-tag">DORA · Casos de éxito</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>Lo que dicen nuestros<br /><em>clientes.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'#fff',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Somos proveedores TIC de tres bancos medianos. Cuando entró en vigor DORA, nuestros clientes nos pidieron evidencias de cumplimiento en menos de un mes. Avson hizo el gap analysis en una semana y empezamos la implementación de inmediato. Sin su ayuda, habríamos perdido esos contratos.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid rgba(255,255,255,0.15)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'#fff',margin:'0'}}>Manuel Delgado</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.45)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>Director TI · Empresa de software financiero · Madrid</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',border:'1px solid var(--border)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'var(--navy)',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Teníamos el ENS certificado y pensábamos que DORA requería empezar desde cero. Avson nos demostró que el 60% ya estaba cubierto. Solo tuvimos que añadir los requisitos específicos del reglamento financiero. En cuatro meses estábamos completamente adecuados.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid var(--border)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'var(--navy)',margin:'0'}}>Patricia Soler</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>CISO · Fintech de medios de pago · Barcelona</p>
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
    <h2 className="section-title" style={{maxWidth:'480px'}}>Todo lo que necesitas<br /><em>saber sobre DORA.</em></h2>
    <div style={{marginTop:'48px'}}>
      <div className="faq-item">
        <div className="faq-item__question">¿A quién aplica exactamente el Reglamento DORA?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>DORA aplica a 21 tipos de entidades financieras definidas en el artículo 2 del reglamento: entidades de crédito, entidades de pago, entidades de dinero electrónico, empresas de inversión, proveedores de servicios de criptoactivos, gestoras de fondos de inversión alternativa, fondos de pensiones de empleo, empresas de seguros y reaseguros, intermediarios de seguros, plataformas de financiación participativa, repositorios de operaciones, infraestructuras de post-negociación, y otros. También aplica a sus proveedores TIC cuando son considerados críticos por los reguladores europeos, o cuando sus clientes financieros les exigen contractualmente cumplir con DORA.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuáles son las sanciones por incumplimiento de DORA?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>DORA no establece sanciones uniformes: remite a los regímenes sancionadores de cada estado miembro. En España, el Banco de España, la CNMV y la DGSFP son los supervisores competentes para sus respectivos tipos de entidades. Para los proveedores TIC críticos designados a nivel europeo, las Autoridades Europeas de Supervisión pueden imponer multas de hasta el 1% del volumen de negocio global diario durante un máximo de seis meses consecutivos, o retirar la posibilidad de prestar servicios a entidades financieras de la UE.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuándo entró en vigor DORA?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>DORA entró en vigor el 17 de enero de 2025. A diferencia de las directivas europeas, DORA es un reglamento de aplicación directa en todos los estados miembros de la UE, lo que significa que no requiere transposición nacional y se aplica de forma idéntica en España desde esa fecha. Las entidades financieras y sus proveedores TIC ya deben estar adecuados.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cómo se relacionan DORA y NIS2?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>DORA es lex specialis respecto a <Link to="/nis2">NIS2</Link> para el sector financiero. Esto significa que las entidades financieras cumplen con NIS2 cumpliendo DORA, que establece requisitos más específicos y detallados para el sector. No hay obligación de cumplir ambos marcos por separado: DORA prevalece para las entidades en su ámbito de aplicación.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué es el TLPT (Threat-Led Penetration Testing)?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El Threat-Led Penetration Testing es una prueba de penetración avanzada basada en inteligencia de amenazas reales, diseñada para simular los ataques más sofisticados y relevantes para una entidad financiera específica. DORA lo exige para las entidades más significativas (generalmente grandes bancos, infraestructuras de mercado sistémicas). Para la mayoría de entidades financieras y proveedores TIC, las pruebas de resiliencia requeridas son de naturaleza menos compleja: análisis de vulnerabilidades, pruebas de penetración estándar y ejercicios de continuidad.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué cláusulas contractuales exige DORA con proveedores TIC?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>DORA establece un conjunto mínimo de cláusulas que deben incluirse en los contratos entre entidades financieras y sus proveedores TIC: descripción completa de los servicios, indicadores de calidad y disponibilidad, localización y tratamiento de datos, procedimientos de gestión de incidentes, derechos de auditoría, planes de salida y portabilidad de datos, y notificación de subcontrataciones. Las entidades financieras son responsables de revisar sus contratos existentes y negociar los cambios necesarios con sus proveedores.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto tiempo lleva el proceso de adecuación a DORA?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El plazo depende del punto de partida de cada organización. Para entidades que ya tienen el ENS o ISO 27001 implementados, el proceso de adecuación específica a DORA puede realizarse en 3-4 meses adicionales. Para entidades que parten de cero, el plazo completo es de 5-6 meses. Avson puede ajustar la metodología y el equipo para acelerar el proceso cuando hay urgencia regulatoria o contractual.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Hay alguna certificación formal de DORA?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>No existe una certificación formal de DORA equivalente a la certificación ISO 27001. El cumplimiento de DORA es una obligación regulatoria que se demuestra ante el supervisor competente (Banco de España, CNMV, DGSFP) a través de evidencias de implementación, resultados de pruebas de resiliencia, registros de incidentes y contratos revisados. La adecuación a DORA se mantiene de forma continua, no se certifica puntualmente.</p></div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy">
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>DORA · Diagnóstico gratuito</span>
    <div className="gold-line" style={{margin:'20px auto 0'}}></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'32px 0 24px'}}>
      ¿Estás en el ámbito<br /><em>de DORA?</em>
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',color:'rgba(255,255,255,0.65)',maxWidth:'520px',margin:'0 auto 40px',lineHeight:'1.7'}}>
      Diagnóstico gratuito de alcance DORA. En 48 horas te decimos si aplica a tu organización, qué gaps tienes respecto a los marcos que ya tienes, y cuánto tiempo llevaría la adecuación.
    </p>
    <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',fontSize:'15px',padding:'18px 36px'}}>Solicitar diagnóstico DORA gratuito →</Link>
  </div>
</section>


<div style={{display:'none',position:'fixed',bottom:'0',left:'0',right:'0',zIndex:'500',background:'#1A2744',borderTop:'1px solid rgba(255,255,255,0.08)',padding:'14px 20px',justifyContent:'space-between',gap:'12px',alignItems:'center'}} id="stickyBar">
  <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>¿Dudas sobre tu certificación?</span>
  <Link to="/contacto" className="btn-primary btn-primary--white" style={{fontSize:'11px',padding:'10px 20px',whiteSpace:'nowrap'}}>Diagnóstico gratuito →</Link>
</div>
    </>
  )
}
