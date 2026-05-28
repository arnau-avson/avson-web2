import { Link } from 'react-router-dom'

export default function EquipoPage() {
  return (
    <>
<div style={{background:'#1A2744',color:'rgba(255,255,255,0.85)',fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'400',letterSpacing:'0.04em',textAlign:'center',padding:'10px 40px',position:'relative',zIndex:'200'}}>
  🔒 <strong>Garantía de éxito al 100% por escrito</strong>  ·  Diagnóstico gratuito sin compromiso · Respuesta en 24h  ·  <Link to="/contacto" style={{color:'#C9A84C',textDecoration:'none',fontWeight:'500'}}>Contactar →</Link>
</div>


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
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'52px',fontWeight:'300',color:'var(--navy)',lineHeight:'1'}}>87+</div>
        <div style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:'8px'}}>Empresas certificadas</div>
      </div>
      <div style={{background:'var(--white)',padding:'36px 28px',textAlign:'center'}}>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'52px',fontWeight:'300',color:'var(--navy)',lineHeight:'1'}}>100%</div>
        <div style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:'8px'}}>Tasa de éxito</div>
      </div>
      <div style={{background:'var(--white)',padding:'36px 28px',textAlign:'center'}}>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'52px',fontWeight:'300',color:'var(--navy)',lineHeight:'1'}}>3–4</div>
        <div style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:'8px'}}>Meses promedio</div>
      </div>
      <div style={{background:'var(--white)',padding:'36px 28px',textAlign:'center'}}>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'52px',fontWeight:'300',color:'var(--navy)',lineHeight:'1'}}>12</div>
        <div style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:'8px'}}>Consultores especializados</div>
      </div>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">

    <div className="team-grid">

      
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Pablo García" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Pablo García</h3>
          <span className="team-role">CEO y Fundador</span>
          <span className="team-badge">ISO 27001 Lead Auditor</span>
          <p className="team-bio">Lleva años acompañando a empresas en sus procesos de certificación. Su especialidad es el ENS y la gestión del riesgo en entornos de licitación pública.</p>
        </div>
      </div>

      
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Laura Sánchez" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Laura Sánchez</h3>
          <span className="team-role">Directora de Proyectos GRC</span>
          <span className="team-badge">ENS · ISO 22301</span>
          <p className="team-bio">Coordina la entrega de proyectos de certificación de principio a fin. Ha liderado implantaciones en administraciones públicas y empresas TIC.</p>
        </div>
      </div>

      
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="https://randomuser.me/api/portraits/men/55.jpg" alt="Carlos Jiménez" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Carlos Jiménez</h3>
          <span className="team-role">Consultor Senior GRC</span>
          <span className="team-badge">CISM · DORA</span>
          <p className="team-bio">Especializado en DORA y NIS2. Trabaja principalmente con empresas con dependencia tecnológica y proveedores de infraestructuras críticas que necesitan adaptarse a la regulación europea.</p>
        </div>
      </div>

      
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="https://randomuser.me/api/portraits/women/26.jpg" alt="Ana Rodríguez" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Ana Rodríguez</h3>
          <span className="team-role">Especialista ENS</span>
          <span className="team-badge">Auditora ENAC</span>
          <p className="team-bio">Auditora acreditada de ENS. Conoce el proceso desde el lado del auditor, lo que le permite preparar a los clientes de forma muy precisa para superar la certificación.</p>
        </div>
      </div>

      
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Miguel Torres" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Miguel Torres</h3>
          <span className="team-role">Consultor ISO 27001</span>
          <span className="team-badge">CISA · CRISC</span>
          <p className="team-bio">Su foco es el análisis de riesgos y la implantación de sistemas de gestión de seguridad de la información. Trabaja con pymes y empresas medianas del sector tecnológico.</p>
        </div>
      </div>

      
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="https://randomuser.me/api/portraits/women/38.jpg" alt="Isabel Fernández" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Isabel Fernández</h3>
          <span className="team-role">Continuidad de Negocio</span>
          <span className="team-badge">ISO 22301 Lead Implementer</span>
          <p className="team-bio">Diseña planes de continuidad y recuperación ante desastres. Ha trabajado con organizaciones de sectores críticos donde la disponibilidad no es negociable.</p>
        </div>
      </div>

      
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="https://randomuser.me/api/portraits/men/41.jpg" alt="Alejandro Martín" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Alejandro Martín</h3>
          <span className="team-role">Responsable Técnico</span>
          <span className="team-badge">CEH · Cloud Security</span>
          <p className="team-bio">Se encarga de la parte técnica de las implementaciones: controles de seguridad, arquitectura, análisis de vulnerabilidades y gestión de evidencias para auditoría.</p>
        </div>
      </div>

      
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="https://randomuser.me/api/portraits/women/52.jpg" alt="Carmen López" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Carmen López</h3>
          <span className="team-role">Consultora GRC</span>
          <span className="team-badge">NIS2 · TISAX</span>
          <p className="team-bio">Especializada en regulación europea. Asesora a empresas del cadenas de suministro y empresas tecnológicas en el cumplimiento de NIS2, DORA y otras normativas europeas.</p>
        </div>
      </div>

      
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="https://randomuser.me/api/portraits/men/29.jpg" alt="David Sanz" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">David Sanz</h3>
          <span className="team-role">Técnico de Implementación</span>
          <span className="team-badge">CCSP</span>
          <p className="team-bio">Responsable de la documentación técnica y la configuración de controles. Apoya a los clientes durante todo el proceso de implantación hasta la auditoría.</p>
        </div>
      </div>

      
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="https://randomuser.me/api/portraits/women/61.jpg" alt="Marta Peña" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Marta Peña</h3>
          <span className="team-role">Formación y Comunicación</span>
          <span className="team-badge">Formadora Certificada</span>
          <p className="team-bio">Diseña y entrega los programas de formación y los webinars de Avson. Se asegura de que los equipos de los clientes entiendan la normativa y estén preparados para la auditoría.</p>
        </div>
      </div>

      
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="https://randomuser.me/api/portraits/men/48.jpg" alt="Roberto Núñez" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Roberto Núñez</h3>
          <span className="team-role">Especialista Regulación EU</span>
          <span className="team-badge">NIS2 · DORA</span>
          <p className="team-bio">Monitoriza los cambios normativos europeos y adapta el enfoque de los proyectos en curso. Es el punto de referencia del equipo en materia regulatoria.</p>
        </div>
      </div>

      
      <div className="team-card anim-fade-up">
        <div className="team-photo-wrap">
          <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="Sofía Blanco" className="team-photo" loading="lazy" />
        </div>
        <div className="team-info">
          <h3 className="team-name">Sofía Blanco</h3>
          <span className="team-role">Analista GRC</span>
          <span className="team-badge">Risk Management</span>
          <p className="team-bio">Elabora análisis de riesgos, informes de cumplimiento y cuadros de mando para los clientes. Lleva el seguimiento del estado de certificación de cada proyecto.</p>
        </div>
      </div>

    </div>
  </div>
</section>



<section className="section section--pearl" id="como-trabajamos">
  <div className="container">
    <span className="label-tag">Nuestra forma de trabajar</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>Un equipo pequeño que<br /><em>trabaja como uno grande.</em></h2>
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
        <div style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'rgba(255,255,255,0.6)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'12px'}}>Auditora Acreditada ENAC</div>
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
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'rgba(255,255,255,0.8)'}}>Garantía de éxito al 100% · Por escrito</span>
      </div>
      <div style={{display:'block'}}>
        <Link to="/contacto" className="btn-primary btn-primary--white">Hablar con el equipo →</Link>
      </div>
    </div>
  </div>
</section><div id="stickyBar" style={{display:'none',position:'fixed',bottom:'0',left:'0',right:'0',zIndex:'500',background:'#1A2744',borderTop:'1px solid rgba(255,255,255,0.08)',padding:'14px 20px',justifyContent:'space-between',gap:'12px',alignItems:'center'}}>
  <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>¿Necesitas certificarte?</span>
  <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#fff',border:'1px solid #fff',padding:'10px 20px',textDecoration:'none',whiteSpace:'nowrap'}}>Diagnóstico gratuito →</Link>
</div>
    </>
  )
}
