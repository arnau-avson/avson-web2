import { Link } from 'react-router-dom'

export default function EnsBasicoPage() {
  return (
    <>
<section className="page-hero">
  <div className="container">
    <div className="page-hero__breadcrumb">
      <Link to="/">Inicio</Link>
      <span>/</span>
      <Link to="/ens">ENS</Link>
      <span>/</span>
      <span style={{color:'var(--navy)'}}>ENS Básico</span>
    </div>
    <div style={{maxWidth:'780px'}}>
      <span className="label-tag">Esquema Nacional de Seguridad · Categoría Básica · RD 311/2022</span>
      <div className="gold-line"></div>
      <h1 className="display-title">Certificado ENS Básico: qué es, quién lo necesita<br /><em>y cómo obtenerlo.</em></h1>
      <div className="guarantee-seal" style={{marginBottom:'24px'}}>
        <span className="guarantee-seal__icon">✦</span>
        <span className="guarantee-seal__text">Garantía de éxito<br />al 100% por escrito</span>
      </div>
      <p className="body-large mt-32" style={{maxWidth:'620px'}}>La categoría Básica del ENS es la puerta de entrada al mercado de contratación pública. En Avson GRC te acompañamos en todo el proceso, desde el diagnóstico hasta la emisión del certificado, en toda España, en 3-4 meses.</p>
      <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/contacto.html' }} style={{display:'flex',gap:'0',marginTop:'32px',marginBottom:'16px',maxWidth:'480px',boxShadow:'0 4px 24px rgba(26,39,68,0.12)'}}>
        <input type="email" id="heroEmail" required placeholder="tu@empresa.com"
          style={{flex:'1',padding:'16px 20px',border:'none',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',minWidth:'0'}} />
        <button type="submit"
          style={{background:'var(--gold)',color:'var(--navy)',border:'none',padding:'16px 24px',fontFamily:'var(--font-sans)',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.04em',cursor:'pointer',whiteSpace:'nowrap',transition:'opacity 0.2s'}}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.88')} onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}>
          Diagnóstico ENS gratis →
        </button>
      </form>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'0.78rem',color:'var(--navy-60)',marginTop:'0',marginBottom:'24px'}}>Sin compromiso · Respuesta en 24h · Servicio en toda España</p>
      <div className="flex gap-24 mt-16" style={{flexWrap:'wrap'}}>
        <Link to="/contacto" className="btn-primary">Hablar con un experto →</Link>
        <Link to="/ens" className="btn-text">Ver todas las categorías ENS →</Link>
      </div>
    </div>
  </div>
</section>


<section className="section section--white deco-section">
  <div style={{position:'absolute',top:'50%',left:'-40px',transform:'translateY(-50%)',fontFamily:'\'Cormorant Garamond\',serif',fontSize:'280px',fontWeight:'700',color:'var(--navy)',opacity:'0.025',lineHeight:'1',pointerEvents:'none',userSelect:'none'}}>B</div>
  <div className="container" style={{position:'relative',zIndex:'1'}}>
    <div className="grid-7-5">
      <div className="anim-fade-up">
        <span className="label-tag">Qué es el ENS Básico</span>
        <div className="gold-line"></div>
        <h2 className="section-title">La categoría Básica del ENS:<br />para sistemas con impacto limitado.</h2>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>La categoría Básica del Esquema Nacional de Seguridad aplica cuando un incidente de seguridad en los sistemas TIC de una organización afectaría de forma <strong>limitada</strong> a la misma, sin consecuencias graves para los ciudadanos ni para el funcionamiento ordinario de la Administración Pública. Es, por definición, la categoría de menor impacto potencial de las tres que contempla el RD 311/2022.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>La fórmula de categorización del RD 311/2022 se basa en la valoración del impacto de un incidente de seguridad sobre cada una de las cinco dimensiones: <strong>confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad</strong>. Si el impacto más alto que se podría producir es "Bajo", el sistema se categoriza como Básico. Si es "Medio", la categoría será Media; si es "Alto", Alta. Esta valoración determina de forma objetiva qué controles son obligatorios para cada sistema.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>Esta valoración no es arbitraria: debe realizarse mediante un análisis de riesgos formal, habitualmente siguiendo la metodología MAGERIT, y documentarse en la Política de Seguridad de la organización. En la práctica, la categoría Básica es la más común entre los proveedores de servicios digitales que trabajan con administraciones locales, municipios pequeños y medianos, y organismos de menor criticidad a lo largo de toda la geografía española.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>Una misma empresa puede tener sistemas de categoría Básica para ciertos contratos y de categoría Media para otros. La categoría la determina el sistema que se pone en el alcance de la certificación, no la empresa en sí. Por eso el primer paso siempre es el análisis del alcance, que en Avson realizamos de forma gratuita y sin compromiso.</p>
      </div>
      <div className="anim-fade-up delay-2">
        <div className="legal-box" style={{marginBottom:'24px'}}>
          <div className="legal-box__label">Marco legal</div>
          <div className="legal-box__text">Real Decreto 311/2022, de 3 de mayo. Artículos 40-43 y Anexo I (categorización) y Anexo II (medidas de seguridad).</div>
        </div>
        <div className="legal-box" style={{marginBottom:'24px'}}>
          <div className="legal-box__label">Dimensiones de seguridad</div>
          <div className="legal-box__text">Confidencialidad · Integridad · Disponibilidad · Autenticidad · Trazabilidad. El nivel más alto en cualquiera de ellas determina la categoría del sistema.</div>
        </div>
        <div className="legal-box">
          <div className="legal-box__label">Impacto en categoría Básica</div>
          <div className="legal-box__text">El máximo impacto potencial de un incidente en cualquiera de las dimensiones no supera el nivel "Bajo" según la escala del RD 311/2022.</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <span className="label-tag">¿Te afecta?</span>
    <div className="gold-line"></div>
    <h2 className="section-title">¿Quién necesita el certificado ENS Básico?</h2>
    <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'720px',marginBottom:'48px'}}>El ENS Básico es la vía de entrada al mercado público para cientos de empresas TIC en España. Avson presta servicio de consultoría ENS en toda España, tanto de forma presencial como remota, cubriendo desde grandes ciudades hasta organismos de cualquier comunidad autónoma. Estos son los perfiles más habituales que se certifican en categoría Básica:</p>
    <div className="grid-3" style={{gap:'32px'}}>
      <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
        <div style={{fontSize:'28px',marginBottom:'16px'}}>💻</div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Software de gestión municipal</div>
        <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Proveedores de aplicaciones de gestión de padrón, licencias, tributos locales o portales de transparencia para ayuntamientos. Sus sistemas gestionan datos relevantes pero con un impacto potencial limitado sobre el servicio público.</p>
      </div>
      <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
        <div style={{fontSize:'28px',marginBottom:'16px'}}>📡</div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Comunicaciones para AAPP locales</div>
        <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Empresas que proveen servicios de conectividad, centralitas IP, videoconferencia o gestión de redes para concejos, mancomunidades y pequeños organismos locales. Infraestructuras cuyo fallo no comprometería servicios esenciales.</p>
      </div>
      <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
        <div style={{fontSize:'28px',marginBottom:'16px'}}>☁️</div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Cloud para organismos locales</div>
        <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Proveedores de servicios en la nube (IaaS, SaaS, PaaS) para entidades locales con volúmenes de datos bajos o sistemas administrativos de soporte, donde la disponibilidad o confidencialidad tiene impacto limitado.</p>
      </div>
      <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
        <div style={{fontSize:'28px',marginBottom:'16px'}}>🔧</div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Consultoras TIC de diputaciones</div>
        <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Empresas de consultoría tecnológica que prestan servicios de soporte, desarrollo o mantenimiento de sistemas para diputaciones provinciales, consorcios y entidades supramunicipales de carácter no crítico.</p>
      </div>
      <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
        <div style={{fontSize:'28px',marginBottom:'16px'}}>📋</div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Gestión documental y firma digital</div>
        <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Proveedores de sistemas de gestión de expedientes, archivo electrónico o firma digital para administraciones de menor escala, donde el volumen de documentación y su criticidad son bajos o moderados.</p>
      </div>
      <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
        <div style={{fontSize:'28px',marginBottom:'16px'}}>🏫</div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>EdTech y plataformas educativas</div>
        <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Empresas que proveen plataformas LMS, herramientas de gestión escolar o soluciones tecnológicas para centros de educación pública, donde los datos gestionados son relevantes pero el impacto de un incidente sería limitado.</p>
      </div>
    </div>
    <div className="cta-inline-box" style={{marginTop:'48px'}}>
      <span className="cta-inline-box__text">"¿No sabes si necesitas ENS Básico o Medio? El diagnóstico gratuito de Avson te lo dice en 24h."</span>
      <Link to="/contacto" className="btn-primary">Diagnóstico gratuito →</Link>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">
    <div className="grid-7-5">
      <div className="anim-fade-up">
        <span className="label-tag">Controles y medidas</span>
        <div className="gold-line"></div>
        <h2 className="section-title">Los controles del ENS Básico:<br />qué tienes que implementar.</h2>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>El ENS Básico exige la aplicación de aproximadamente <strong>45 medidas de seguridad</strong> del Anexo II del RD 311/2022. Estas medidas cubren las cinco dimensiones de seguridad —confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad— y se organizan en tres grandes marcos: medidas del marco organizativo (org), del marco operacional (op) y medidas de protección (mp). Cada control especifica el nivel de aplicación requerido: "aplica" significa obligatorio; "refuerzo" significa opcional pero recomendable.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>En el marco organizativo, la categoría Básica requiere tener definida una Política de Seguridad documentada y aprobada, procedimientos básicos de gestión de riesgos y normativas de uso aceptable de los sistemas. En el marco operacional, se exigen controles de planificación de la seguridad, control de acceso, gestión básica de configuraciones, continuidad del servicio y procedimientos de gestión de incidentes.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>La diferencia respecto a las categorías superiores no reside solo en el número de controles, sino en su nivel de exigencia. En categoría Básica, la autenticación puede resolverse con usuario y contraseña robusta, mientras que en Media se exige doble factor. Los registros de actividad deben conservarse durante períodos más cortos y con menos detalle que en categorías superiores. Los requisitos de monitorización continua y gestión de vulnerabilidades son significativamente menos estrictos.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>En Avson utilizamos herramientas especializadas de IA para acelerar la implementación documental —Política de Seguridad, Plan de Tratamiento de Riesgos, procedimientos operativos— y el análisis de riesgos MAGERIT. Esto nos permite reducir los plazos de implementación sin sacrificar la calidad ni la solidez de la documentación ante la auditoría.</p>
      </div>
      <div className="anim-fade-up delay-2">
        <div style={{background:'var(--navy)',padding:'40px 32px'}}>
          <span className="label-tag">Áreas de control ENS Básico</span>
          <div style={{display:'flex',flexDirection:'column',gap:'16px',marginTop:'24px'}}>
            <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Marco organizativo (org)</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Política de seguridad, normativa de uso, procedimientos y roles de seguridad definidos.</div>
            </div>
            <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Marco operacional (op)</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Planificación, control de acceso, gestión de configuraciones, continuidad y gestión de incidentes.</div>
            </div>
            <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Medidas de protección (mp)</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Instalaciones, personal, equipamiento, comunicaciones, soportes, aplicaciones y servicios.</div>
            </div>
            <div style={{borderLeft:'2px solid rgba(201,168,76,0.4)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>~45 medidas aplicables</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Subconjunto del total de 75 controles del Anexo II. Nivel de exigencia inferior a Medio y Alto.</div>
            </div>
          </div>
          <Link to="/contacto" className="btn-primary btn-primary--white" style={{marginTop:'32px'}}>Analizar mi caso →</Link>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <span className="label-tag">Declaración de Conformidad vs. Certificado</span>
    <div className="gold-line"></div>
    <h2 className="section-title">¿Declaración de Conformidad o certificado ENS Básico?<br /><em>La diferencia importa.</em></h2>
    <div className="grid-7-5" style={{marginTop:'48px'}}>
      <div>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>El RD 311/2022 introduce una particularidad importante para la categoría Básica: la posibilidad de acreditar el cumplimiento mediante una <strong>Declaración de Conformidad</strong>, es decir, una auto-declaración firmada por la propia organización sin necesidad de auditoría externa por entidad acreditada ENAC. Esta opción no existe para las categorías Media y Alta, donde el certificado emitido por entidad auditora es siempre obligatorio.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>La Declaración de Conformidad puede parecer más económica y rápida en apariencia. Sin embargo, en la práctica presenta limitaciones significativas que conviene conocer antes de optar por ella:</p>
        <div className="checklist mt-16">
          <div className="checklist__item">La mayoría de pliegos de contratación pública exigen explícitamente el <strong>certificado ENS</strong> emitido por entidad auditora acreditada ENAC, aunque el sistema sea de categoría Básica. En esos casos, la Declaración de Conformidad no es aceptada.</div>
          <div className="checklist__item">La Declaración de Conformidad tiene menor valor jurídico y de mercado: no demuestra la intervención de un tercero independiente que valide el cumplimiento efectivo de los controles.</div>
          <div className="checklist__item">En licitaciones competitivas, disponer del certificado ENS frente a una mera declaración puede suponer una ventaja en la puntuación técnica del sobre de criterios valorables.</div>
          <div className="checklist__item">Si en el futuro amplías el alcance de tu certificación o tus sistemas aumentan de categoría, deberás transitar al certificado de todas formas. Es mejor partir directamente de la base correcta.</div>
        </div>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginTop:'24px'}}>En Avson analizamos el pliego concreto de cada cliente antes de recomendar una u otra opción. Como norma general, si hay posibilidad de que los pliegos a los que se quiera optar exijan el certificado, recomendamos ir directamente a la certificación completa. La diferencia de coste y plazo es menor de lo que habitualmente se piensa, y la diferencia en valor y apertura de mercado es muy superior.</p>
      </div>
      <div>
        <div style={{background:'var(--white)',border:'1px solid var(--border)',padding:'36px 32px',marginBottom:'24px'}}>
          <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'22px',fontWeight:'600',color:'var(--navy)',marginBottom:'20px'}}>Declaración de Conformidad</div>
          <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
            <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}><span style={{color:'#27AE60',fontSize:'16px',flexShrink:'0'}}>✓</span><span style={{fontSize:'14px',color:'var(--text-muted)'}}>Más rápida y económica inicialmente</span></div>
            <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}><span style={{color:'#27AE60',fontSize:'16px',flexShrink:'0'}}>✓</span><span style={{fontSize:'14px',color:'var(--text-muted)'}}>No requiere auditoría externa ENAC</span></div>
            <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}><span style={{color:'#C0392B',fontSize:'16px',flexShrink:'0'}}>✗</span><span style={{fontSize:'14px',color:'var(--text-muted)'}}>No aceptada en la mayoría de pliegos relevantes</span></div>
            <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}><span style={{color:'#C0392B',fontSize:'16px',flexShrink:'0'}}>✗</span><span style={{fontSize:'14px',color:'var(--text-muted)'}}>Menor credibilidad ante la Administración</span></div>
            <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}><span style={{color:'#C0392B',fontSize:'16px',flexShrink:'0'}}>✗</span><span style={{fontSize:'14px',color:'var(--text-muted)'}}>Sin validación de tercero independiente</span></div>
          </div>
        </div>
        <div style={{background:'var(--navy)',padding:'36px 32px'}}>
          <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'22px',fontWeight:'600',color:'var(--white)',marginBottom:'20px'}}>Certificado ENS Básico</div>
          <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
            <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}><span style={{color:'var(--gold)',fontSize:'16px',flexShrink:'0'}}>✓</span><span style={{fontSize:'14px',color:'rgba(255,255,255,0.7)'}}>Aceptado en todos los pliegos ENS Básico</span></div>
            <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}><span style={{color:'var(--gold)',fontSize:'16px',flexShrink:'0'}}>✓</span><span style={{fontSize:'14px',color:'rgba(255,255,255,0.7)'}}>Auditoría por entidad acreditada ENAC</span></div>
            <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}><span style={{color:'var(--gold)',fontSize:'16px',flexShrink:'0'}}>✓</span><span style={{fontSize:'14px',color:'rgba(255,255,255,0.7)'}}>Máxima credibilidad ante la Administración</span></div>
            <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}><span style={{color:'var(--gold)',fontSize:'16px',flexShrink:'0'}}>✓</span><span style={{fontSize:'14px',color:'rgba(255,255,255,0.7)'}}>Validez bienal reconocida en toda España</span></div>
            <div style={{display:'flex',gap:'12px',alignItems:'flex-start'}}><span style={{color:'var(--gold)',fontSize:'16px',flexShrink:'0'}}>✓</span><span style={{fontSize:'14px',color:'rgba(255,255,255,0.7)'}}>Base para ENS Medio, ISO 27001 y NIS2</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--white" id="proceso">
  <div className="container">
    <span className="label-tag">Nuestro proceso</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Cómo obtenemos tu certificado ENS Básico<br /><em>en 3-4 meses con garantía.</em></h2>
    <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'680px',marginBottom:'48px'}}>El proceso de certificación ENS Básico con Avson sigue una metodología probada con más de 80 proyectos completados. Trabajamos en toda España, de forma presencial o remota según tu preferencia, con el mismo nivel de excelencia y la misma garantía de éxito por escrito en todos los casos.</p>
    <div className="timeline mt-32">
      <div className="timeline__step anim-fade-up">
        <div className="timeline__number">01</div>
        <div className="timeline__week">Semanas 1-2</div>
        <div className="timeline__title">Diagnóstico y análisis de alcance</div>
        <div className="timeline__desc">Analizamos tu situación actual: sistemas en alcance, controles existentes, nivel de madurez y categoría ENS aplicable. Entregamos un GAP analysis detallado con las brechas identificadas y un plan de trabajo personalizado. Completamente gratuito y sin compromiso.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-1">
        <div className="timeline__number">02</div>
        <div className="timeline__week">Semanas 3-10</div>
        <div className="timeline__title">Implementación de controles</div>
        <div className="timeline__desc">Implementamos las ~45 medidas ENS Básico: documentación del SGSI, análisis de riesgos MAGERIT, procedimientos operativos, controles técnicos y evidencias requeridas. Usamos herramientas de IA especializadas para acelerar la documentación sin sacrificar calidad.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-2">
        <div className="timeline__number">03</div>
        <div className="timeline__week">Semanas 11-12</div>
        <div className="timeline__title">Auditoría interna y preauditoría</div>
        <div className="timeline__desc">Realizamos una auditoría interna completa para detectar y corregir cualquier no conformidad antes de la auditoría externa. Te preparamos para cada sesión con la entidad auditora acreditada ENAC, anticipando las preguntas y validando las evidencias.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-3">
        <div className="timeline__number">04</div>
        <div className="timeline__week">Semanas 13-16</div>
        <div className="timeline__title">Auditoría de certificación ENAC</div>
        <div className="timeline__desc">Coordinamos todo el proceso con la entidad auditora acreditada ENAC. Respondemos a los informes de no conformidades. Tasa de éxito en primera convocatoria: 100%. Garantía de éxito por escrito incluida en todos nuestros proyectos.</div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <div className="grid-7-5">
      <div className="anim-fade-up">
        <span className="label-tag">Entidades acreditadas ENAC</span>
        <div className="gold-line"></div>
        <h2 className="section-title">¿Quién puede auditar el ENS Básico?</h2>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>La auditoría de certificación ENS debe realizarla una <strong>entidad de certificación acreditada por ENAC</strong> (Entidad Nacional de Acreditación) para el esquema ENS, o auditores habilitados con la cualificación técnica requerida por el CCN (Centro Criptológico Nacional). Esta acreditación es el requisito que da validez jurídica al certificado ante los organismos públicos en toda España.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>En España operan varias entidades de certificación acreditadas ENAC para auditar el ENS: <strong>Bureau Veritas, SGS, AENOR, Applus+ y BSI</strong> son las más conocidas, aunque existen otras entidades especializadas con acreditación válida. Cada una tiene sus propios plazos, metodología y tarifas, lo que hace relevante la elección de la entidad auditora en función del perfil de cada cliente.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>En Avson gestionamos íntegramente la relación con la entidad auditora: seleccionamos la entidad más adecuada para tu perfil, coordinamos todas las sesiones de auditoría, respondemos a los informes de no conformidades y hacemos seguimiento hasta la emisión del certificado definitivo. Nuestros clientes no tienen que gestionar directamente esta relación.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>Esta coordinación integral es uno de los valores diferenciadores de Avson. El resultado es un proceso menos estresante, más rápido y con mayor tasa de éxito en primera convocatoria que cuando la empresa gestiona la auditoría de forma independiente.</p>
      </div>
      <div className="anim-fade-up delay-2">
        <div style={{background:'var(--navy)',padding:'40px 32px'}}>
          <span className="label-tag">Entidades auditoras habituales</span>
          <div style={{display:'flex',flexDirection:'column',gap:'12px',marginTop:'24px'}}>
            <div style={{display:'flex',gap:'16px',alignItems:'center',padding:'14px 16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
              <div style={{fontSize:'20px'}}>🏢</div>
              <div>
                <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)'}}>Bureau Veritas</div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.4)'}}>Acreditada ENAC · ENS Básico, Medio y Alto</div>
              </div>
            </div>
            <div style={{display:'flex',gap:'16px',alignItems:'center',padding:'14px 16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
              <div style={{fontSize:'20px'}}>🏢</div>
              <div>
                <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)'}}>SGS</div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.4)'}}>Acreditada ENAC · ENS todas las categorías</div>
              </div>
            </div>
            <div style={{display:'flex',gap:'16px',alignItems:'center',padding:'14px 16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
              <div style={{fontSize:'20px'}}>🏢</div>
              <div>
                <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)'}}>AENOR</div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.4)'}}>Acreditada ENAC · ENS todas las categorías</div>
              </div>
            </div>
            <div style={{display:'flex',gap:'16px',alignItems:'center',padding:'14px 16px',background:'rgba(255,255,255,0.04)',border:'1px solid rgba(255,255,255,0.08)'}}>
              <div style={{fontSize:'20px'}}>🏢</div>
              <div>
                <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)'}}>Applus+ / BSI</div>
                <div style={{fontSize:'12px',color:'rgba(255,255,255,0.4)'}}>Acreditadas ENAC · ENS todas las categorías</div>
              </div>
            </div>
          </div>
          <p style={{fontSize:'12px',color:'rgba(255,255,255,0.3)',marginTop:'20px',lineHeight:'1.6'}}>Avson coordina la relación con la entidad auditora. Tú no tienes que gestionarla directamente.</p>
          <Link to="/contacto" className="btn-primary btn-primary--white" style={{marginTop:'24px'}}>Solicitar propuesta →</Link>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">
    <span className="label-tag">Inversión y ROI</span>
    <div className="gold-line"></div>
    <h2 className="section-title">¿Cuánto cuesta el certificado ENS Básico?<br /><em>Menos de lo que pierdes sin él.</em></h2>
    <div className="grid-7-5" style={{marginTop:'48px'}}>
      <div>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>El coste total de la certificación ENS Básico varía según el tamaño de la organización, la complejidad de los sistemas en alcance, el número de ubicaciones y el nivel de madurez de seguridad de partida. No publicamos tarifas cerradas porque cada proyecto es distinto, pero ofrecemos orientación general:</p>
        <div style={{display:'flex',flexDirection:'column',gap:'20px',marginBottom:'32px'}}>
          <div style={{border:'1px solid var(--border)',padding:'24px 28px',display:'flex',gap:'24px',alignItems:'center'}}>
            <div style={{textAlign:'center',minWidth:'80px'}}>
              <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'32px',fontWeight:'700',color:'var(--navy)'}}>S</div>
              <div style={{fontSize:'11px',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.05em'}}>Hasta 10 empleados</div>
            </div>
            <div>
              <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Empresas pequeñas con alcance reducido y pocos sistemas. Proceso más ágil y documentación más ligera. La tarifa de auditoría externa es el componente principal del coste total.</p>
            </div>
          </div>
          <div style={{border:'1px solid var(--gold)',padding:'24px 28px',display:'flex',gap:'24px',alignItems:'center',background:'rgba(201,168,76,0.03)'}}>
            <div style={{textAlign:'center',minWidth:'80px'}}>
              <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'32px',fontWeight:'700',color:'var(--navy)'}}>M</div>
              <div style={{fontSize:'11px',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.05em'}}>10-50 empleados</div>
            </div>
            <div>
              <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>El rango más habitual entre nuestros clientes. La inversión se recupera típicamente con el primer contrato público obtenido tras la certificación, que suele superar con creces el coste del proceso.</p>
            </div>
          </div>
          <div style={{border:'1px solid var(--border)',padding:'24px 28px',display:'flex',gap:'24px',alignItems:'center'}}>
            <div style={{textAlign:'center',minWidth:'80px'}}>
              <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'32px',fontWeight:'700',color:'var(--navy)'}}>L</div>
              <div style={{fontSize:'11px',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.05em'}}>+50 empleados</div>
            </div>
            <div>
              <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Mayor complejidad de alcance. Si ya existen medidas de seguridad implementadas, el coste de consultoría se reduce. Puede haber sinergias con ISO 27001 si se trabaja en paralelo.</p>
            </div>
          </div>
        </div>
        <div className="urgency-box">
          <p className="urgency-box__text">Cada semana sin el certificado ENS Básico es una licitación a la que no puedes presentarte. La inversión en la certificación no es un coste: es el precio de acceder al mercado público. Solicita tu diagnóstico gratuito y recibe propuesta personalizada en 48 horas.</p>
        </div>
      </div>
      <div>
        <div style={{background:'var(--navy)',padding:'40px 32px',position:'sticky',top:'100px'}}>
          <span className="label-tag">Diagnóstico gratuito</span>
          <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'26px',fontWeight:'500',color:'var(--white)',lineHeight:'1.3',margin:'16px 0'}}>Propuesta personalizada<br />en 48 horas</h3>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,0.45)',lineHeight:'1.65',marginBottom:'28px'}}>Sin compromiso. Solo información útil sobre tu proyecto ENS Básico. Servicio en toda España, presencial o remoto.</p>
          <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/contacto.html' }} style={{display:'flex',gap:'0',marginBottom:'16px',maxWidth:'480px',boxShadow:'0 4px 24px rgba(26,39,68,0.08)'}}>
            <input type="email" id="heroEmail2" required placeholder="tu@empresa.com"
              style={{flex:'1',padding:'16px 20px',border:'none',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',minWidth:'0'}} />
            <button type="submit"
              style={{background:'var(--gold)',color:'var(--navy)',border:'none',padding:'16px 24px',fontFamily:'var(--font-sans)',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.04em',cursor:'pointer',whiteSpace:'nowrap',transition:'opacity 0.2s'}}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '0.88')} onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}>
              Solicitar →
            </button>
          </form>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'0.78rem',color:'rgba(255,255,255,0.5)'}}>+34 648 41 48 63 · info@avson.eu</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="faq">
  <div className="container">
    <span className="label-tag">Preguntas frecuentes</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Preguntas frecuentes sobre<br />el certificado ENS Básico.</h2>
    <div className="faq-list mt-48" style={{maxWidth:'820px'}}>
      <div className="faq-item">
        <div className="faq-item__question">¿Es suficiente la Declaración de Conformidad o necesito el certificado ENS Básico?</div>
        <div className="faq-item__answer">Depende del pliego concreto al que quieras optar. El RD 311/2022 permite la Declaración de Conformidad para la categoría Básica como alternativa al certificado formal, pero la gran mayoría de organismos públicos exigen expresamente el certificado emitido por entidad acreditada ENAC, especialmente en contratos de cierta cuantía o con componente competitivo. En Avson siempre analizamos el pliego específico antes de recomendar, aunque como norma general recomendamos ir directamente al certificado: la diferencia de coste es pequeña y la diferencia en valor de mercado es enorme.</div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿El ENS Básico caduca?</div>
        <div className="faq-item__answer">Sí. El certificado ENS Básico tiene una vigencia de dos años desde su emisión. Pasado ese plazo, es necesario someterse a una nueva auditoría de renovación para mantener la certificación vigente. En Avson monitorizamos proactivamente la caducidad de tu certificado y te avisamos con seis meses de antelación para iniciar el proceso de renovación con tiempo suficiente. La Declaración de Conformidad, por su parte, no tiene un plazo de caducidad estrictamente definido, pero debe revisarse cuando cambian los sistemas o el contexto de riesgo.</div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuántos controles tiene el ENS Básico?</div>
        <div className="faq-item__answer">El ENS Básico requiere la implementación de aproximadamente 45 medidas de seguridad del Anexo II del RD 311/2022. Son un subconjunto del total de 75 controles, aplicados con un nivel de exigencia inferior al de las categorías Media (aproximadamente 60 medidas) y Alta (las 75 medidas en nivel máximo). La selección exacta de controles aplicables en cada caso concreto depende del análisis de riesgos, el alcance definido y las características específicas de los sistemas de la organización.</div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué diferencia hay entre ENS Básico y ENS Medio?</div>
        <div className="faq-item__answer">La diferencia fundamental es el nivel de impacto que un incidente de seguridad podría causar sobre la organización, los ciudadanos o el servicio público. El Básico aplica cuando el impacto sería limitado; el Medio cuando podría ser grave. En términos de controles, el ENS Medio exige medidas adicionales que no son obligatorias en Básico: autenticación de doble factor (2FA), monitorización continua de la seguridad, gestión formal y documentada de incidentes, mayor exigencia en continuidad del servicio y planes de recuperación más detallados. Además, el ENS Medio no admite la Declaración de Conformidad: siempre requiere auditoría externa por entidad acreditada ENAC.</div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿El ENS Básico sirve para cualquier licitación pública?</div>
        <div className="faq-item__answer">No. El ENS Básico solo es válido para pliegos de contratación pública que especifiquen explícitamente esa categoría o que no exijan una categoría superior. Muchos contratos relevantes de la Administración General del Estado, ministerios y Comunidades Autónomas exigen ENS Medio como mínimo, independientemente del tamaño del contrato. Por eso es fundamental revisar el pliego concreto antes de iniciar el proceso de certificación. El diagnóstico gratuito de Avson incluye siempre este análisis del pliego y la recomendación de la categoría adecuada.</div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy">
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag">Categorías ENS</span>
    <div className="gold-line" style={{margin:'0 auto 24px'}}></div>
    <h2 className="section-title section-title--white">También te puede interesar</h2>
    <p style={{fontSize:'16px',color:'rgba(255,255,255,0.5)',maxWidth:'560px',margin:'0 auto 48px'}}>Conoce todas las categorías del Esquema Nacional de Seguridad y elige la que corresponde a tu organización y a los contratos que quieres conseguir.</p>
    <div style={{display:'flex',gap:'24px',justifyContent:'center',flexWrap:'wrap'}}>
      <Link to="/ens-basico" style={{display:'inline-block',padding:'20px 36px',border:'2px solid var(--gold)',color:'var(--gold)',fontFamily:'var(--font-sans)',fontSize:'0.9rem',fontWeight:'600',textDecoration:'none',letterSpacing:'0.04em',background:'rgba(201,168,76,0.08)'}}>ENS Básico (actual)</Link>
      <Link to="/ens-medio" style={{display:'inline-block',padding:'20px 36px',border:'1px solid rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.75)',fontFamily:'var(--font-sans)',fontSize:'0.9rem',fontWeight:'600',textDecoration:'none',letterSpacing:'0.04em',transition:'all 0.2s'}} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}>ENS Medio →</Link>
      <Link to="/ens-alto" style={{display:'inline-block',padding:'20px 36px',border:'1px solid rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.75)',fontFamily:'var(--font-sans)',fontSize:'0.9rem',fontWeight:'600',textDecoration:'none',letterSpacing:'0.04em',transition:'all 0.2s'}} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}>ENS Alto →</Link>
    </div>
    <div className="mt-48">
      <Link to="/ens" className="btn-text" style={{color:'rgba(255,255,255,0.5)'}}>← Ver resumen de todas las categorías ENS</Link>
    </div>
  </div>
</section>
    </>
  )
}
