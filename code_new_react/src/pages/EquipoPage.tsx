import { Link } from 'react-router-dom'

export default function EquipoPage() {
  return (
    <>

<section className="section section--pearl" style={{paddingTop:'160px',paddingBottom:'80px'}}>
  <div className="container">
    <span className="label-tag">El equipo</span>
    <div className="gold-line"></div>
    <h1 className="display-title" style={{maxWidth:'700px'}}>El equipo de consultoría GRC<br /><em>que garantiza tu certificación.</em></h1>
    <p className="body-large mt-24" style={{maxWidth:'580px',color:'var(--text-body)'}}>Consultores y expertos GRC certificados, especializados en normativa española y europea. Nuestro equipo reúne perfiles con certificaciones ISO 27001 Lead Auditor, CISM, CISA, CRISC y acreditaciones ENS, lo que nos permite acompañar proyectos de cualquier escala y sector. Conocemos el proceso desde dentro — muchos venimos del sector público y privado regulado.</p>
  </div>
</section>

<section className="section section--white" style={{paddingTop:'0',paddingBottom:'48px'}}>
  <div className="container">
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'1px',background:'var(--border)',border:'1px solid var(--border)'}}>
      <div style={{background:'var(--white)',padding:'36px 28px',textAlign:'center'}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'52px',fontWeight:'300',color:'var(--navy)',lineHeight:'1'}}>355+</div>
        <div style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:'8px'}}>ENS gestionados este año</div>
      </div>
      <div style={{background:'var(--white)',padding:'36px 28px',textAlign:'center'}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'52px',fontWeight:'300',color:'var(--navy)',lineHeight:'1'}}>100%</div>
        <div style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:'8px'}}>Tasa de éxito</div>
      </div>
      <div style={{background:'var(--white)',padding:'36px 28px',textAlign:'center'}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'52px',fontWeight:'300',color:'var(--navy)',lineHeight:'1'}}>Nº1</div>
        <div style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:'8px'}}>ENS en España</div>
      </div>
      <div style={{background:'var(--white)',padding:'36px 28px',textAlign:'center'}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'52px',fontWeight:'300',color:'var(--navy)',lineHeight:'1'}}>15</div>
        <div style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:'8px'}}>Personas en el equipo</div>
      </div>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">

    <div className="team-grid">

      {/* 1 - CEO */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/pablo-avson.svg" alt="Pablo — CEO y Fundador" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Pablo</h3>
          <span className="team-role">CEO y Fundador</span>
          <span className="team-badge">Estrategia · ENS · ISO 27001</span>
          <p className="team-bio">Fundador de Avson. Define la estrategia de la firma y acompaña los proyectos más críticos. Su obsesión: convertir el cumplimiento en una ventaja de negocio real para el cliente, no en papeleo.</p>
        </div>
      </div>

      {/* 2 - CFO */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/elena-navarro.svg" alt="Elena Navarro — CFO" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Elena Navarro</h3>
          <span className="team-role">CFO · Dirección Financiera</span>
          <span className="team-badge">Finanzas · Control de gestión</span>
          <p className="team-bio">Responsable de las finanzas y de un crecimiento sostenible. Garantiza que cada proyecto y cada incorporación se apoyan en una base financiera sólida.</p>
        </div>
      </div>

      {/* 3 - Business Development */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/daniel-romero.svg" alt="Daniel Romero — Business Development" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Daniel Romero</h3>
          <span className="team-role">Business Development</span>
          <span className="team-badge">Desarrollo de negocio · Alianzas</span>
          <p className="team-bio">Lidera el desarrollo de negocio y las alianzas estratégicas. Conecta las necesidades del sector público y privado con la propuesta de valor de Avson.</p>
        </div>
      </div>

      {/* 4 - Laura */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/laura-s-nchez.svg" alt="Laura Sánchez" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Laura Sánchez</h3>
          <span className="team-role">Directora de Proyectos GRC</span>
          <span className="team-badge">ENS · ISO 22301</span>
          <p className="team-bio">Coordina la entrega de proyectos de certificación de principio a fin. Ha liderado implantaciones en administraciones públicas y empresas TIC.</p>
        </div>
      </div>

      {/* 5 - Carlos */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/carlos-jim-nez.svg" alt="Carlos Jiménez" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Carlos Jiménez</h3>
          <span className="team-role">Consultor Senior GRC</span>
          <span className="team-badge">CISM · DORA</span>
          <p className="team-bio">Especializado en DORA y NIS2. Trabaja principalmente con empresas con dependencia tecnológica y proveedores de infraestructuras críticas que necesitan adaptarse a la regulación europea.</p>
        </div>
      </div>

      {/* 6 - Ana */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/ana-rodr-guez.svg" alt="Ana Rodríguez" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Ana Rodríguez</h3>
          <span className="team-role">Especialista ENS</span>
          <span className="team-badge">Auditora ENAC</span>
          <p className="team-bio">Auditora acreditada de ENS. Conoce el proceso desde el lado del auditor, lo que le permite preparar a los clientes de forma muy precisa para superar la certificación.</p>
        </div>
      </div>

      {/* 7 - Miguel */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/miguel-torres.svg" alt="Miguel Torres" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Miguel Torres</h3>
          <span className="team-role">Consultor ISO 27001</span>
          <span className="team-badge">CISA · CRISC</span>
          <p className="team-bio">Su foco es el análisis de riesgos y la implantación de sistemas de gestión de seguridad de la información. Trabaja con pymes y empresas medianas del sector tecnológico.</p>
        </div>
      </div>

      {/* 8 - Isabel */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/isabel-fern-ndez.svg" alt="Isabel Fernández" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Isabel Fernández</h3>
          <span className="team-role">Continuidad de Negocio</span>
          <span className="team-badge">ISO 22301 Lead Implementer</span>
          <p className="team-bio">Diseña planes de continuidad y recuperación ante desastres. Ha trabajado con organizaciones de sectores críticos donde la disponibilidad no es negociable.</p>
        </div>
      </div>

      {/* 9 - Alejandro */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/alejandro-mart-n.svg" alt="Alejandro Martín" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Alejandro Martín</h3>
          <span className="team-role">Responsable Técnico</span>
          <span className="team-badge">CEH · Cloud Security</span>
          <p className="team-bio">Se encarga de la parte técnica de las implementaciones: controles de seguridad, arquitectura, análisis de vulnerabilidades y gestión de evidencias para auditoría.</p>
        </div>
      </div>

      {/* 10 - Carmen */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/carmen-l-pez.svg" alt="Carmen López" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Carmen López</h3>
          <span className="team-role">Consultora GRC</span>
          <span className="team-badge">NIS2 · TISAX</span>
          <p className="team-bio">Especializada en regulación europea. Asesora a empresas del cadenas de suministro y empresas tecnológicas en el cumplimiento de NIS2, DORA y otras normativas europeas.</p>
        </div>
      </div>

      {/* 11 - David */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/david-sanz.svg" alt="David Sanz" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">David Sanz</h3>
          <span className="team-role">Técnico de Implementación</span>
          <span className="team-badge">CCSP</span>
          <p className="team-bio">Responsable de la documentación técnica y la configuración de controles. Apoya a los clientes durante todo el proceso de implantación hasta la auditoría.</p>
        </div>
      </div>

      {/* 12 - Marta */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/marta-pe-a.svg" alt="Marta Peña" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Marta Peña</h3>
          <span className="team-role">Formación y Comunicación</span>
          <span className="team-badge">Formadora Certificada</span>
          <p className="team-bio">Diseña y entrega los programas de formación y los webinars de Avson. Se asegura de que los equipos de los clientes entiendan la normativa y estén preparados para la auditoría.</p>
        </div>
      </div>

      {/* 13 - Roberto */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/roberto-n-ez.svg" alt="Roberto Núñez" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Roberto Núñez</h3>
          <span className="team-role">Especialista Regulación EU</span>
          <span className="team-badge">NIS2 · DORA</span>
          <p className="team-bio">Monitoriza los cambios normativos europeos y adapta el enfoque de los proyectos en curso. Es el punto de referencia del equipo en materia regulatoria.</p>
        </div>
      </div>

      {/* 14 - Sofía */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/sof-a-blanco.svg" alt="Sofía Blanco" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Sofía Blanco</h3>
          <span className="team-role">Analista GRC</span>
          <span className="team-badge">Risk Management</span>
          <p className="team-bio">Elabora análisis de riesgos, informes de cumplimiento y cuadros de mando para los clientes. Lleva el seguimiento del estado de certificación de cada proyecto.</p>
        </div>
      </div>

      {/* 15 - Nuria */}
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="/assets/team/nuria-gil.svg" alt="Nuria Gil" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Nuria Gil</h3>
          <span className="team-role">Consultora ENS</span>
          <span className="team-badge">ENS · Sector público</span>
          <p className="team-bio">Acompaña a empresas TIC proveedoras de la Administración en todo el proceso ENS, desde la categorización del sistema hasta la salida de la auditoría.</p>
        </div>
      </div>

    </div>
  </div>
</section>



<section className="section section--pearl" id="como-trabajamos">
  <div className="container">
    <span className="label-tag">Nuestra forma de trabajar</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>15 profesionales especializados.<br /><em>El equipo GRC que garantiza tu certificación.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'52px'}}>
      Avson es un equipo especializado, no una consultora de propósito general. Esa especialización tiene un precio — no hacemos de todo — pero también tiene una ventaja clara: cuando nos contratas para un proyecto GRC, estás trabajando con las personas que más proyectos de ese tipo han hecho en España.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px'}}>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'40px',borderLeft:'4px solid var(--gold)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'16px'}}>Un interlocutor por proyecto</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.8',color:'var(--text-body)'}}>Cada cliente tiene un consultor asignado que conoce el proyecto de principio a fin. No cambiamos de equipo a mitad del proceso. No tienes que repetir el contexto cada vez que llamas. El consultor que arranca el proyecto es el que lo termina. Esa continuidad se nota en la calidad del resultado y en la velocidad de ejecución.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'40px',borderLeft:'4px solid var(--gold)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'16px'}}>Transparencia total desde el primer día</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.8',color:'var(--text-body)'}}>Sabemos lo que te pides desde el primer día y te decimos si es alcanzable en tu plazo y con tu presupuesto. Si algo no es posible, te lo decimos antes de firmar, no tres meses después cuando ya has pagado la mitad. La honestidad sobre lo que es factible es el principio de todo proyecto que acaba bien.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'40px',borderLeft:'4px solid var(--gold)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'16px'}}>Garantía por escrito en cada proyecto</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.8',color:'var(--text-body)'}}>No firmamos ningún contrato de certificación sin incluir la garantía de éxito en la auditoría. Si siguiendo nuestra metodología no superamos la primera auditoría, cubrimos la segunda sin coste adicional. Es nuestra forma de alinear intereses: si tú no te certificas, nosotros no cobramos el proyecto completo. No podría ser más claro.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'40px',borderLeft:'4px solid var(--gold)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'16px'}}>Relación a largo plazo</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.8',color:'var(--text-body)'}}>El objetivo no es entregarte el certificado y desaparecer. El objetivo es ser tu equipo GRC de referencia a medida que tu empresa crece y añade marcos regulatorios. La mayoría de nuestros clientes repiten con nosotros: el segundo proyecto es más rápido, más barato y mejor que el primero porque ya nos conocemos.</p>
      </div>
    </div>
  </div>
</section>


<section className="section section--white" id="credenciales">
  <div className="container">
    <span className="label-tag">Credenciales</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'520px'}}>Las certificaciones<br /><em>que avalan al equipo.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'52px'}}>
      Un consultor GRC debe conocer la normativa que implementa desde dentro. Nuestro equipo mantiene activas certificaciones profesionales de referencia que garantizan que el conocimiento técnico está siempre al día.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'20px'}}>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'28px',textAlign:'center'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>ISO 27001</div>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'12px'}}>Lead Auditor</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',lineHeight:'1.5'}}>Auditoría de sistemas de gestión de seguridad de la información</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',marginTop:'8px'}}>IRCA / CQI</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'28px',textAlign:'center'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>ISO 22301</div>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'12px'}}>Lead Implementer</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',lineHeight:'1.5'}}>Implementación de sistemas de gestión de continuidad de negocio</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',marginTop:'8px'}}>PECB</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'28px',textAlign:'center'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>CISM</div>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'12px'}}>Certified Information Security Manager</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',lineHeight:'1.5'}}>Gobierno de la seguridad de la información a nivel directivo</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',marginTop:'8px'}}>ISACA</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'28px',textAlign:'center'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>CISA</div>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'12px'}}>Certified Information Systems Auditor</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',lineHeight:'1.5'}}>Auditoría de sistemas de información y control</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',marginTop:'8px'}}>ISACA</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'28px',textAlign:'center'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>CRISC</div>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'12px'}}>Certified in Risk and Information Systems Control</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',lineHeight:'1.5'}}>Gestión del riesgo en sistemas de información empresariales</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',marginTop:'8px'}}>ISACA</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'28px',textAlign:'center'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>CCSP</div>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'12px'}}>Certified Cloud Security Professional</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',lineHeight:'1.5'}}>Seguridad en entornos cloud y servicios en la nube</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',marginTop:'8px'}}>(ISC)²</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'28px',textAlign:'center'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>CEH</div>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'12px'}}>Certified Ethical Hacker</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',lineHeight:'1.5'}}>Hacking ético y pruebas de penetración</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',marginTop:'8px'}}>EC-Council</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'28px',textAlign:'center'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:'600',color:'var(--gold)',marginBottom:'8px'}}>ENS</div>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'rgba(255,255,255,0.6)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'12px'}}>Auditora Acreditada por ENAC</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.6)',lineHeight:'1.5'}}>Acreditación ENAC para auditorías oficiales del Esquema Nacional de Seguridad</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'rgba(255,255,255,0.4)',marginTop:'8px'}}>ENAC / CCN</p>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy" style={{textAlign:'center'}}>
  <div className="container">
    <div style={{maxWidth:'640px',margin:'0 auto'}}>
      <span className="label-tag" style={{textAlign:'center'}}>Nuestra promesa</span>
      <div className="gold-line gold-line--center"></div>
      <h2 className="section-title section-title--white">La única consultora GRC<br /><em>con garantía por escrito.</em></h2>
      <p style={{fontSize:'17px',color:'rgba(255,255,255,0.55)',lineHeight:'1.65',marginTop:'24px',maxWidth:'520px',marginLeft:'auto',marginRight:'auto'}}>Si nuestro equipo lleva tu proyecto y no supera la auditoría de certificación, la repetimos sin coste adicional. Sin letras pequeñas. Por escrito desde el primer día.</p>
      <div style={{display:'inline-flex',alignItems:'center',gap:'10px',border:'1px solid rgba(201,168,76,0.4)',padding:'14px 24px',marginTop:'32px',marginBottom:'40px'}}>
        <span style={{fontSize:'20px',color:'#C9A84C'}}>✦</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.8)'}}>Garantía de éxito al 100% · Por escrito</span>
      </div>
      <div style={{display:'block'}}>
        <Link to="/contacto" className="btn-primary btn-primary--white">Hablar con el equipo →</Link>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
