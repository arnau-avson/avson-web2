import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function WebinarsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [nlNombre, setNlNombre] = useState('')
  const [nlEmail, setNlEmail] = useState('')
  const [nlTopics, setNlTopics] = useState<Record<string, boolean>>({ ens: false, iso27001: false, nis2: false, dora: false })

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx)
  }

  const handleNewsletterSubmit = (e: FormEvent) => {
    e.preventDefault()
    alert('¡Suscripción recibida! Te avisaremos del próximo webinar.')
  }

  const faqs = [
    { q: '¿Son realmente gratuitos?', a: 'Sí, completamente gratuitos. No hay costes de inscripción, no hay suscripciones de pago requeridas, ni "freemium" que te bloquee el acceso al contenido más relevante. Solo necesitas registrarte con tu email para recibir el enlace de acceso. Las grabaciones también son gratuitas.' },
    { q: '¿Hay que registrarse?', a: 'Sí, el registro previo es necesario para gestionar el enlace de acceso a la sala virtual y para enviarte el aviso de recordatorio antes de la sesión. El registro solo requiere nombre y email. No compartimos los datos con terceros.' },
    { q: '¿Puedo ver las grabaciones después?', a: 'Sí. Todas las sesiones se graban y quedan disponibles en nuestra biblioteca de grabaciones. Si no pudiste asistir en directo o quieres revisar un contenido específico, puedes solicitar acceso a la grabación a través del formulario de contacto o del enlace directo en cada ficha de sesión anterior. El acceso es gratuito.' },
    { q: '¿Los imparten consultores reales?', a: 'Sí. Todos los webinars son impartidos por consultores del equipo de Avson que trabajan a diario en proyectos de certificación. No son comerciales ni community managers. El contenido de cada webinar está basado en la experiencia práctica real de implementar y auditar los marcos que se explican.' },
    { q: '¿Puedo hacer preguntas durante el webinar?', a: 'Sí. Todas las sesiones tienen un bloque de Q&A al final donde los asistentes pueden hacer preguntas directamente al consultor. También hay un chat durante toda la sesión donde puedes dejar preguntas que el conductor irá respondiendo en el Q&A final. La interacción es uno de los puntos más valorados de las sesiones.' },
    { q: '¿Con qué frecuencia hay webinars?', a: 'Durante los meses de junio y julio de 2025 hay una sesión semanal (los domingos, según la agenda publicada). El resto del año, la frecuencia es mensual, con sesiones los terceros jueves de cada mes. Suscribiéndote recibirás un aviso una semana antes de cada sesión para que puedas apuntarla en tu agenda.' },
  ]

  return (
    <>

<section className="section section--pearl" style={{paddingTop:'160px',paddingBottom:'100px'}}>
  <div className="container">
    <span className="label-tag">Formación GRC · Acceso gratuito</span>
    <div className="gold-line"></div>
    <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(48px,6vw,80px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 32px',maxWidth:'760px'}}>
      Webinars gratuitos sobre<br /><em>ENS, ISO 27001 y cumplimiento GRC.</em>
    </h1>
    <p className="body-large" style={{maxWidth:'640px',marginBottom:'40px'}}>
      Webinar gratuito mensual impartido por los consultores de Avson. Sin slides corporativas, sin ventas disfrazadas de formación. Solo contenido útil sobre ENS, ISO 27001, NIS2 y DORA para que tomes decisiones informadas sobre el cumplimiento normativo de tu empresa.
    </p>
    <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginBottom:'52px'}}>
      <a href="#proximos" className="btn-primary">Ver próximos webinars →</a>
      <a href="#grabaciones" className="btn-text">Acceder a grabaciones →</a>
    </div>
    <div style={{display:'flex',gap:'40px',flexWrap:'wrap'}}>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>100%</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>gratuito siempre</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>6</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>sesiones próximas</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>3.500+</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>visualizaciones grabaciones</span>
      </div>
    </div>
  </div>
</section>


<section className="section section--white" id="proximos">
  <div className="container">
    <span className="label-tag">Agenda 2026</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Próximas<br /><em>sesiones.</em></h2>
    <div style={{background:'var(--navy)',padding:'40px',display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',backgroundColor:'rgba(255,255,255,0.08)',marginBottom:'48px',marginTop:'40px'}}>
      <div style={{background:'var(--navy)',padding:'28px 24px',textAlign:'center'}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'40px',fontWeight:'300',color:'#C9A84C'}}>60</div>
        <div style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',color:'rgba(255,255,255,0.5)',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:'6px'}}>minutos por sesión</div>
      </div>
      <div style={{background:'var(--navy)',padding:'28px 24px',textAlign:'center'}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'40px',fontWeight:'300',color:'#C9A84C'}}>100%</div>
        <div style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',color:'rgba(255,255,255,0.5)',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:'6px'}}>gratuitos</div>
      </div>
      <div style={{background:'var(--navy)',padding:'28px 24px',textAlign:'center'}}>
        <div style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'40px',fontWeight:'300',color:'#C9A84C'}}>Q&A</div>
        <div style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',color:'rgba(255,255,255,0.5)',letterSpacing:'0.08em',textTransform:'uppercase',marginTop:'6px'}}>en vivo incluido</div>
      </div>
    </div>
    <div style={{display:'flex',flexDirection:'column',gap:'24px',marginTop:'0'}}>

      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'120px 1fr auto',gap:'0',background:'var(--pearl)',overflow:'hidden'}}>
        <div style={{background:'var(--navy)',padding:'24px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--gold)',lineHeight:'1',marginBottom:'4px'}}>25</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.6)',textTransform:'uppercase',letterSpacing:'0.06em'}}>Jun 2026</p>
        </div>
        <div style={{padding:'28px 32px'}}>
          <div style={{display:'flex',gap:'8px',marginBottom:'12px',flexWrap:'wrap'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'#fff',background:'var(--navy)',padding:'3px 10px',textTransform:'uppercase',letterSpacing:'0.06em'}}>ENS</span>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',padding:'3px 10px',border:'1px solid var(--border)'}}>60 min</span>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',padding:'3px 10px',border:'1px solid var(--border)'}}>Nivel básico</span>
          </div>
          <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'400',color:'var(--navy)',marginBottom:'8px'}}>ENS 2026: Todo lo que necesitas saber para licitar</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6',marginBottom:'12px'}}>Explicación completa del ENS: qué es, quién lo necesita, categorías (Básica, Media, Alta), proceso de certificación, plazos y cómo aprovecharlo para otras certificaciones. Ideal para empresas que se plantean certificarse por primera vez o que tienen un plazo de licitación próximo.</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Impartido por <strong style={{color:'var(--navy)'}}>Laura Sánchez</strong> · Directora de Proyectos GRC · Avson</p>
        </div>
        <div style={{padding:'28px 24px',display:'flex',alignItems:'center'}}>
          <Link to="/contacto" className="btn-primary" style={{fontSize:'12px',whiteSpace:'nowrap'}}>Registrarme →</Link>
        </div>
      </div>

      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'120px 1fr auto',gap:'0',background:'var(--pearl)',overflow:'hidden'}}>
        <div style={{background:'var(--navy)',padding:'24px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--gold)',lineHeight:'1',marginBottom:'4px'}}>2</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.6)',textTransform:'uppercase',letterSpacing:'0.06em'}}>Jul 2026</p>
        </div>
        <div style={{padding:'28px 32px'}}>
          <div style={{display:'flex',gap:'8px',marginBottom:'12px',flexWrap:'wrap'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'#fff',background:'var(--navy)',padding:'3px 10px',textTransform:'uppercase',letterSpacing:'0.06em'}}>ISO 27001</span>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',padding:'3px 10px',border:'1px solid var(--border)'}}>75 min</span>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',padding:'3px 10px',border:'1px solid var(--border)'}}>Nivel intermedio</span>
          </div>
          <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'400',color:'var(--navy)',marginBottom:'8px'}}>ISO 27001 en 2026: Cambios y oportunidades</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6',marginBottom:'12px'}}>Análisis detallado de los cambios de la versión 2022 respecto a la 2013: los nuevos controles (inteligencia de amenazas, seguridad cloud, gestión de identidades), la nueva estructura de 4 bloques, y qué significa esto para empresas que aún tienen la versión 2013 o que quieren certificarse por primera vez.</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Impartido por <strong style={{color:'var(--navy)'}}>Miguel Torres</strong> · Consultor ISO 27001 · Avson</p>
        </div>
        <div style={{padding:'28px 24px',display:'flex',alignItems:'center'}}>
          <Link to="/contacto" className="btn-primary" style={{fontSize:'12px',whiteSpace:'nowrap'}}>Registrarme →</Link>
        </div>
      </div>

      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'120px 1fr auto',gap:'0',background:'var(--pearl)',overflow:'hidden'}}>
        <div style={{background:'var(--navy)',padding:'24px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--gold)',lineHeight:'1',marginBottom:'4px'}}>9</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.6)',textTransform:'uppercase',letterSpacing:'0.06em'}}>Jul 2026</p>
        </div>
        <div style={{padding:'28px 32px'}}>
          <div style={{display:'flex',gap:'8px',marginBottom:'12px',flexWrap:'wrap'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'#fff',background:'var(--navy)',padding:'3px 10px',textTransform:'uppercase',letterSpacing:'0.06em'}}>NIS2</span>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',padding:'3px 10px',border:'1px solid var(--border)'}}>60 min</span>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',padding:'3px 10px',border:'1px solid var(--border)'}}>Nivel básico</span>
          </div>
          <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'400',color:'var(--navy)',marginBottom:'8px'}}>NIS2: ¿Afecta a tu empresa? Claves prácticas</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6',marginBottom:'12px'}}>Metodología práctica para determinar si tu empresa es entidad esencial o importante según la Directiva NIS2. Análisis de los 18 sectores cubiertos, umbrales de tamaño, y excepciones. Casos prácticos en directo con participantes voluntarios del sector de los asistentes.</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Impartido por <strong style={{color:'var(--navy)'}}>Carlos Jiménez</strong> · Consultor Senior GRC · Avson</p>
        </div>
        <div style={{padding:'28px 24px',display:'flex',alignItems:'center'}}>
          <Link to="/contacto" className="btn-primary" style={{fontSize:'12px',whiteSpace:'nowrap'}}>Registrarme →</Link>
        </div>
      </div>

      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'120px 1fr auto',gap:'0',background:'var(--pearl)',overflow:'hidden'}}>
        <div style={{background:'var(--navy)',padding:'24px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--gold)',lineHeight:'1',marginBottom:'4px'}}>16</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.6)',textTransform:'uppercase',letterSpacing:'0.06em'}}>Jul 2026</p>
        </div>
        <div style={{padding:'28px 32px'}}>
          <div style={{display:'flex',gap:'8px',marginBottom:'12px',flexWrap:'wrap'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'#fff',background:'var(--navy)',padding:'3px 10px',textTransform:'uppercase',letterSpacing:'0.06em'}}>DORA</span>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',padding:'3px 10px',border:'1px solid var(--border)'}}>90 min</span>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',padding:'3px 10px',border:'1px solid var(--border)'}}>Nivel avanzado</span>
          </div>
          <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'400',color:'var(--navy)',marginBottom:'8px'}}>DORA para entidades financieras: requisitos clave</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6',marginBottom:'12px'}}>Los 5 pilares de DORA en profundidad: gestión del riesgo TIC, notificación de incidentes en 4/24/72h, pruebas de resiliencia, riesgo de terceros y cláusulas contractuales, e intercambio de información. Plazos, sanciones y cómo prepararse si eres proveedor TIC crítico del sector financiero.</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Impartido por <strong style={{color:'var(--navy)'}}>Carlos Jiménez</strong> · Consultor Senior GRC · Avson</p>
        </div>
        <div style={{padding:'28px 24px',display:'flex',alignItems:'center'}}>
          <Link to="/contacto" className="btn-primary" style={{fontSize:'12px',whiteSpace:'nowrap'}}>Registrarme →</Link>
        </div>
      </div>

      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'120px 1fr auto',gap:'0',background:'var(--pearl)',overflow:'hidden'}}>
        <div style={{background:'var(--navy)',padding:'24px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--gold)',lineHeight:'1',marginBottom:'4px'}}>23</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.6)',textTransform:'uppercase',letterSpacing:'0.06em'}}>Jul 2026</p>
        </div>
        <div style={{padding:'28px 32px'}}>
          <div style={{display:'flex',gap:'8px',marginBottom:'12px',flexWrap:'wrap'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'#fff',background:'var(--navy)',padding:'3px 10px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Packs GRC</span>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',padding:'3px 10px',border:'1px solid var(--border)'}}>60 min</span>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',padding:'3px 10px',border:'1px solid var(--border)'}}>Nivel básico</span>
          </div>
          <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'400',color:'var(--navy)',marginBottom:'8px'}}>Certificado ENS Media vs Alta: ¿cuál necesitas?</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6',marginBottom:'12px'}}>Caso práctico real: cómo una empresa TIC mediana consiguió ENS + ISO 27001 + ISO 22301 en diez meses aprovechando las sinergias entre marcos. Metodología, decisiones de alcance, solapamiento de controles y resultado final. Con números reales (anonimizados) de tiempo y coste.</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Impartido por <strong style={{color:'var(--navy)'}}>Pablo García</strong> · CEO y Fundador · Avson</p>
        </div>
        <div style={{padding:'28px 24px',display:'flex',alignItems:'center'}}>
          <Link to="/contacto" className="btn-primary" style={{fontSize:'12px',whiteSpace:'nowrap'}}>Registrarme →</Link>
        </div>
      </div>

      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'120px 1fr auto',gap:'0',background:'var(--pearl)',overflow:'hidden'}}>
        <div style={{background:'var(--navy)',padding:'24px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--gold)',lineHeight:'1',marginBottom:'4px'}}>30</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.6)',textTransform:'uppercase',letterSpacing:'0.06em'}}>Jul 2026</p>
        </div>
        <div style={{padding:'28px 32px'}}>
          <div style={{display:'flex',gap:'8px',marginBottom:'12px',flexWrap:'wrap'}}>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'#fff',background:'var(--navy)',padding:'3px 10px',textTransform:'uppercase',letterSpacing:'0.06em'}}>ISO 27001</span>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',padding:'3px 10px',border:'1px solid var(--border)'}}>90 min</span>
            <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',padding:'3px 10px',border:'1px solid var(--border)'}}>Nivel avanzado</span>
          </div>
          <h3 style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'400',color:'var(--navy)',marginBottom:'8px'}}>Pack ENS + ISO 27001: cómo certificarse en 5 meses</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6',marginBottom:'12px'}}>Taller práctico en directo: cómo hacer un análisis de riesgos real para un SGSI ISO 27001. Identificación de activos de información, amenazas y vulnerabilidades, cálculo del nivel de riesgo, y selección de controles del Anexo A. Ejercicio en directo con una empresa ficticia representativa.</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)'}}>Impartido por <strong style={{color:'var(--navy)'}}>Ana Rodríguez</strong> · Auditora ENS · Avson</p>
        </div>
        <div style={{padding:'28px 24px',display:'flex',alignItems:'center'}}>
          <Link to="/contacto" className="btn-primary" style={{fontSize:'12px',whiteSpace:'nowrap'}}>Registrarme →</Link>
        </div>
      </div>

    </div>

    <div style={{background:'var(--pearl)',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',padding:'32px 36px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap',marginTop:'48px'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'var(--navy)',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>¿Prefieres una consulta individual en lugar de un webinar? Sin compromiso, 30 minutos con un experto.</span>
      <Link to="/contacto" className="btn-primary">Solicitar consulta individual →</Link>
    </div>
  </div>
</section>


<section className="section section--pearl" id="grabaciones">
  <div className="container">
    <span className="label-tag">Grabaciones disponibles</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Accede a las sesiones<br /><em>anteriores.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'52px'}}>
      Todas las sesiones anteriores quedan grabadas y disponibles. Si no pudiste asistir en directo o quieres revisar algún contenido, accede a las grabaciones de forma gratuita.
    </p>
    <div style={{background:'var(--white)',overflow:'auto'}}>
      <table style={{width:'100%',borderCollapse:'collapse',fontFamily:'var(--font-sans)',fontSize:'14px'}}>
        <thead>
          <tr style={{borderBottom:'2px solid var(--border)'}}>
            <th style={{padding:'14px 20px',textAlign:'left',fontWeight:'600',color:'var(--navy)',fontSize:'11px',letterSpacing:'0.06em',textTransform:'uppercase'}}>Sesión</th>
            <th style={{padding:'14px 20px',textAlign:'left',fontWeight:'600',color:'var(--navy)',fontSize:'11px',letterSpacing:'0.06em',textTransform:'uppercase'}}>Duración</th>
            <th style={{padding:'14px 20px',textAlign:'left',fontWeight:'600',color:'var(--navy)',fontSize:'11px',letterSpacing:'0.06em',textTransform:'uppercase'}}>Visualizaciones</th>
            <th style={{padding:'14px 20px',textAlign:'left',fontWeight:'600',color:'var(--navy)',fontSize:'11px',letterSpacing:'0.06em',textTransform:'uppercase'}}>Acceso</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom:'1px solid var(--border)'}}>
            <td style={{padding:'16px 20px'}}><span style={{fontWeight:'500',color:'var(--navy)',display:'block'}}>ENS para principiantes: De cero a certificado</span><span style={{color:'var(--text-muted)',fontSize:'12px'}}>Nivel básico · ENS</span></td>
            <td style={{padding:'16px 20px',color:'var(--text-muted)'}}>58 min</td>
            <td style={{padding:'16px 20px',color:'var(--text-muted)'}}>847 visualizaciones</td>
            <td style={{padding:'16px 20px'}}><Link to="/contacto" className="btn-text" style={{fontSize:'12px'}}>Ver grabación →</Link></td>
          </tr>
          <tr style={{borderBottom:'1px solid var(--border)',background:'var(--pearl)'}}>
            <td style={{padding:'16px 20px'}}><span style={{fontWeight:'500',color:'var(--navy)',display:'block'}}>Pack ENS + ISO 27001: Caso práctico real</span><span style={{color:'var(--text-muted)',fontSize:'12px'}}>Nivel básico · Packs GRC</span></td>
            <td style={{padding:'16px 20px',color:'var(--text-muted)'}}>61 min</td>
            <td style={{padding:'16px 20px',color:'var(--text-muted)'}}>704 visualizaciones</td>
            <td style={{padding:'16px 20px'}}><Link to="/contacto" className="btn-text" style={{fontSize:'12px'}}>Ver grabación →</Link></td>
          </tr>
          <tr style={{borderBottom:'1px solid var(--border)'}}>
            <td style={{padding:'16px 20px'}}><span style={{fontWeight:'500',color:'var(--navy)',display:'block'}}>ISO 27001: El análisis de riesgos desde cero</span><span style={{color:'var(--text-muted)',fontSize:'12px'}}>Nivel intermedio · ISO 27001</span></td>
            <td style={{padding:'16px 20px',color:'var(--text-muted)'}}>72 min</td>
            <td style={{padding:'16px 20px',color:'var(--text-muted)'}}>623 visualizaciones</td>
            <td style={{padding:'16px 20px'}}><Link to="/contacto" className="btn-text" style={{fontSize:'12px'}}>Ver grabación →</Link></td>
          </tr>
          <tr style={{borderBottom:'1px solid var(--border)',background:'var(--pearl)'}}>
            <td style={{padding:'16px 20px'}}><span style={{fontWeight:'500',color:'var(--navy)',display:'block'}}>Auditoría ENS: Cómo prepararla y qué esperar</span><span style={{color:'var(--text-muted)',fontSize:'12px'}}>Nivel intermedio · ENS</span></td>
            <td style={{padding:'16px 20px',color:'var(--text-muted)'}}>55 min</td>
            <td style={{padding:'16px 20px',color:'var(--text-muted)'}}>445 visualizaciones</td>
            <td style={{padding:'16px 20px'}}><Link to="/contacto" className="btn-text" style={{fontSize:'12px'}}>Ver grabación →</Link></td>
          </tr>
          <tr style={{borderBottom:'1px solid var(--border)'}}>
            <td style={{padding:'16px 20px'}}><span style={{fontWeight:'500',color:'var(--navy)',display:'block'}}>NIS2 vs NIS1: Qué cambia y qué hacer ahora</span><span style={{color:'var(--text-muted)',fontSize:'12px'}}>Nivel básico · NIS2</span></td>
            <td style={{padding:'16px 20px',color:'var(--text-muted)'}}>65 min</td>
            <td style={{padding:'16px 20px',color:'var(--text-muted)'}}>512 visualizaciones</td>
            <td style={{padding:'16px 20px'}}><Link to="/contacto" className="btn-text" style={{fontSize:'12px'}}>Ver grabación →</Link></td>
          </tr>
          <tr style={{background:'var(--pearl)'}}>
            <td style={{padding:'16px 20px'}}><span style={{fontWeight:'500',color:'var(--navy)',display:'block'}}>DORA: Lo que necesitas saber si eres proveedor TIC</span><span style={{color:'var(--text-muted)',fontSize:'12px'}}>Nivel avanzado · DORA</span></td>
            <td style={{padding:'16px 20px',color:'var(--text-muted)'}}>88 min</td>
            <td style={{padding:'16px 20px',color:'var(--text-muted)'}}>389 visualizaciones</td>
            <td style={{padding:'16px 20px'}}><Link to="/contacto" className="btn-text" style={{fontSize:'12px'}}>Ver grabación →</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</section>


<section className="section section--navy" id="newsletter">
  <div className="container">
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'60px',alignItems:'center'}}>
      <div>
        <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>Avisos de webinar</span>
        <div className="gold-line"></div>
        <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(32px,4vw,50px)',fontWeight:'300',color:'#fff',lineHeight:'1.2',margin:'32px 0 20px'}}>
          No te pierdas el<br /><em>próximo webinar.</em>
        </h2>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',color:'rgba(255,255,255,0.65)',lineHeight:'1.7'}}>
          Avisamos con una semana de antelación. Sin spam. Solo cuando hay algo que merece tu tiempo. Puedes cancelar la suscripción en cualquier momento.
        </p>
      </div>
      <div>
        <div style={{background:'rgba(255,255,255,0.06)',padding:'40px',border:'1px solid rgba(255,255,255,0.12)'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff',marginBottom:'24px'}}>Recibir avisos de próximas sesiones</h3>
          <form onSubmit={handleNewsletterSubmit} style={{display:'flex',flexDirection:'column',gap:'16px'}}>
            <div>
              <label style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.6)',display:'block',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Nombre</label>
              <input type="text" placeholder="Tu nombre" value={nlNombre} onChange={(e) => setNlNombre(e.target.value)} style={{width:'100%',padding:'14px 16px',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',color:'#fff',fontFamily:'var(--font-sans)',fontSize:'14px',outline:'none',boxSizing:'border-box'}} />
            </div>
            <div>
              <label style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.6)',display:'block',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Email</label>
              <input type="email" placeholder="tu@empresa.com" value={nlEmail} onChange={(e) => setNlEmail(e.target.value)} style={{width:'100%',padding:'14px 16px',background:'rgba(255,255,255,0.08)',border:'1px solid rgba(255,255,255,0.15)',color:'#fff',fontFamily:'var(--font-sans)',fontSize:'14px',outline:'none',boxSizing:'border-box'}} />
            </div>
            <div>
              <label style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.6)',display:'block',marginBottom:'8px',textTransform:'uppercase',letterSpacing:'0.06em'}}>Temas de interés</label>
              <div style={{display:'flex',gap:'8px',flexWrap:'wrap'}}>
                <label style={{display:'flex',alignItems:'center',gap:'6px',fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.7)',cursor:'pointer'}}><input type="checkbox" style={{margin:'0'}} checked={nlTopics.ens} onChange={(e) => setNlTopics(prev => ({...prev, ens: e.target.checked}))} /> ENS</label>
                <label style={{display:'flex',alignItems:'center',gap:'6px',fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.7)',cursor:'pointer'}}><input type="checkbox" style={{margin:'0'}} checked={nlTopics.iso27001} onChange={(e) => setNlTopics(prev => ({...prev, iso27001: e.target.checked}))} /> ISO 27001</label>
                <label style={{display:'flex',alignItems:'center',gap:'6px',fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.7)',cursor:'pointer'}}><input type="checkbox" style={{margin:'0'}} checked={nlTopics.nis2} onChange={(e) => setNlTopics(prev => ({...prev, nis2: e.target.checked}))} /> NIS2</label>
                <label style={{display:'flex',alignItems:'center',gap:'6px',fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.7)',cursor:'pointer'}}><input type="checkbox" style={{margin:'0'}} checked={nlTopics.dora} onChange={(e) => setNlTopics(prev => ({...prev, dora: e.target.checked}))} /> DORA</label>
              </div>
            </div>
            <button type="submit" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',width:'100%',justifyContent:'center',padding:'16px'}}>Suscribirme →</button>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.4)',textAlign:'center'}}>Sin spam. Sin ventas. Solo avisos de webinars.</p>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="faq">
  <div className="container" style={{maxWidth:'760px'}}>
    <span className="label-tag">Preguntas frecuentes</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Sobre los<br /><em>webinars.</em></h2>
    <div style={{marginTop:'48px'}}>
      {faqs.map((faq, i) => (
        <div key={i} className={`faq-item${openFaq === i ? ' open' : ''}`}>
          <div className="faq-item__question" onClick={() => toggleFaq(i)}>{faq.q}<div className="faq-item__icon">{openFaq === i ? '\u00D7' : '+'}</div></div>
          <div className="faq-item__answer"><p>{faq.a}</p></div>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="section section--navy">
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>Webinars Avson GRC</span>
    <div className="gold-line" style={{margin:'20px auto 0'}}></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'32px 0 24px'}}>
      ¿Prefieres una consulta<br /><em>personalizada?</em>
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',color:'rgba(255,255,255,0.65)',maxWidth:'520px',margin:'0 auto 40px',lineHeight:'1.7'}}>
      Los webinars son para entender la normativa. La consulta gratuita es para resolver tu situación específica. Son complementarios. Regístrate en el webinar y, si quieres, pide también la consulta individual gratuita.
    </p>
    <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',fontSize:'15px',padding:'18px 36px'}}>Consulta individual gratuita →</Link>
  </div>
</section>
    </>
  )
}
