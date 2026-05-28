import { Link } from 'react-router-dom'

export default function QueEsElEns() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `.article-body { max-width:800px; margin:0 auto; padding:0 24px; }
    .article-body h2 { font-family:'Cormorant Garamond',serif; font-size:32px; font-weight:400; color:#1A2744; margin:56px 0 20px; line-height:1.2; }
    .article-body h3 { font-family:'Cormorant Garamond',serif; font-size:22px; font-weight:500; color:#1A2744; margin:36px 0 14px; }
    .article-body p { font-family:'Inter',sans-serif; font-size:16px; color:#3A4560; line-height:1.8; margin-bottom:20px; }
    .article-body ul, .article-body ol { font-family:'Inter',sans-serif; font-size:16px; color:#3A4560; line-height:1.8; margin:0 0 20px 24px; }
    .article-body li { margin-bottom:8px; }
    .article-body strong { color:#1A2744; font-weight:600; }
    .article-body a { color:#1A2744; border-bottom:1px solid #C9A84C; text-decoration:none; }
    .article-body a:hover { color:#C9A84C; }
    .faq-article { border-top:1px solid #E5E5E0; }
    .faq-article-item { border-bottom:1px solid #E5E5E0; }
    .faq-article-q { font-family:'Inter',sans-serif; font-size:16px; font-weight:500; color:#1A2744; padding:20px 0; cursor:pointer; display:flex; justify-content:space-between; align-items:center; }
    .faq-article-q::after { content:'＋'; font-size:20px; color:#C9A84C; flex-shrink:0; }
    .faq-article-item.open .faq-article-q::after { content:'－'; }
    .faq-article-a { font-family:'Inter',sans-serif; font-size:15px; color:#3A4560; line-height:1.75; padding:0 0 20px; display:none; }
    .faq-article-item.open .faq-article-a { display:block; }` }} />
<div style={{background:'var(--white)',borderBottom:'1px solid var(--border)',padding:'12px 0',marginTop:'72px'}}>
  <div className="container">
    <nav style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Blog</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>Qué es el ENS</span>
    </nav>
  </div>
</div>


<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">ENS · Guía completa · Actualizado mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        Qué es el ENS: guía completa del Esquema Nacional de Seguridad
      </h1>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        Si tu empresa presta cualquier servicio tecnológico a organismos públicos en España, el ENS no es opcional. Esta guía explica qué es, cómo funciona y qué necesitas para certificarte.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>⏱ Lectura: 8 minutos</span>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>📅 Actualizado: mayo 2026</span>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>✍️ Por el equipo de Avson GRC</span>
      </div>
    </div>
  </div>
</section>


<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <h2>Qué es el Esquema Nacional de Seguridad</h2>

    <p>El <strong>Esquema Nacional de Seguridad (ENS)</strong> es el marco normativo que establece los principios y requisitos mínimos de seguridad para los sistemas de información de las Administraciones Públicas españolas y para las empresas privadas que les prestan servicios TIC. Su objetivo principal es garantizar que los sistemas que manejan datos o prestan servicios a ciudadanos y organismos públicos cuentan con un nivel adecuado de protección frente a amenazas cibernéticas.</p>

    <p>En términos prácticos, el ENS define un catálogo de <strong>medidas de seguridad organizativas, operacionales y de protección</strong> que cualquier organización en su ámbito de aplicación debe implementar y mantener. Estas medidas abarcan desde la política de seguridad de la información y la gestión de riesgos hasta controles técnicos concretos como la autenticación, el cifrado y la gestión de incidentes.</p>

    <p>El ENS no es una norma voluntaria ni una recomendación de buenas prácticas: es de <strong>obligado cumplimiento</strong> según el Real Decreto 311/2022, que derogó y sustituyó al anterior RD 3/2010. El incumplimiento tiene consecuencias directas: exclusión de licitaciones públicas, imposibilidad de renovar contratos con la Administración y, en algunos casos, responsabilidades legales.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>¿No sabes si el ENS aplica a tu empresa? Un diagnóstico gratuito te lo resuelve en 5 días hábiles.</span>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Diagnóstico gratuito →</Link>
    </div>

    <h2>Historia y evolución del ENS: del RD 3/2010 al RD 311/2022</h2>

    <p>El ENS nació con el <strong>Real Decreto 3/2010, de 8 de enero</strong>, fruto del mandato de la Ley 11/2007 de acceso electrónico de los ciudadanos a los Servicios Públicos. Esa versión inicial estableció los fundamentos del marco: principios de seguridad, categorización de sistemas y un primer catálogo de medidas. Fue un punto de partida sólido para su época, pero el panorama de amenazas evolucionó rápidamente.</p>

    <p>En 2015, el <strong>RD 3/2010 fue modificado por el RD 951/2015</strong>, que introdujo ajustes relevantes en el procedimiento de auditoría y amplió el ámbito de aplicación. Sin embargo, la transformación digital de las AAPP, la proliferación del cloud computing, el teletrabajo y la aparición de amenazas más sofisticadas hicieron necesaria una revisión profunda.</p>

    <p>El <strong>Real Decreto 311/2022, de 3 de mayo</strong>, publicado en el BOE con referencia BOE-A-2022-7191, derogó completamente el RD 3/2010 y estableció el ENS en su versión actual. Las novedades más significativas fueron:</p>

    <ul>
      <li><strong>Extensión del ámbito a proveedores privados:</strong> cualquier empresa que preste servicios tecnológicos al sector público debe cumplir el ENS, no solo las propias administraciones.</li>
      <li><strong>Actualización del catálogo de medidas:</strong> se incorporaron controles alineados con las últimas amenazas (ransomware, supply chain attacks, vulnerabilidades en entornos cloud).</li>
      <li><strong>Nueva estructura de medidas:</strong> el Anexo II del RD 311/2022 organiza las medidas en tres familias — marco organizativo, marco operacional y medidas de protección — con niveles bajo, medio y alto según la categoría del sistema.</li>
      <li><strong>Refuerzo de la seguridad en la cadena de suministro:</strong> los proveedores de los proveedores también pueden estar afectados si manejan datos o sistemas del sector público.</li>
      <li><strong>Plazo de adecuación:</strong> el RD 311/2022 estableció un periodo transitorio de 24 meses para la adecuación, periodo que ya concluyó.</li>
    </ul>

    <p>La Guía CCN-STIC-800, publicada y actualizada periódicamente por el Centro Criptológico Nacional (CCN), desarrolla los criterios de aplicación del ENS y es la referencia técnica fundamental para cualquier proceso de implantación.</p>

    <h2>Para quién es obligatorio el ENS</h2>

    <p>El artículo 2 del RD 311/2022 delimita el ámbito de aplicación. El ENS es obligatorio para:</p>

    <ul>
      <li>Las Administraciones Públicas en sentido amplio: Administración General del Estado, Administraciones autonómicas, Administraciones locales, organismos públicos y entidades vinculadas o dependientes.</li>
      <li>Las <strong>empresas privadas</strong> que presten servicios o soluciones de tecnología de la información y comunicación al sector público español, en la medida en que esos servicios afecten a la seguridad de los sistemas de información de la Administración.</li>
      <li>Los subcontratistas de primer y segundo nivel cuando el servicio principal exija cumplimiento ENS.</li>
    </ul>

    <p>La clave práctica para una empresa privada es sencilla: si tu empresa licita o tiene contratos vigentes con organismos públicos en los que se gestionen, almacenen o transmitan datos de la Administración o se presten servicios TIC de cualquier tipo, el ENS te aplica. Esto incluye proveedores de software, integradores de sistemas, proveedores de servicios en la nube (IaaS, PaaS, SaaS), consultoras IT, empresas de telecomunicaciones y cualquier otro proveedor tecnológico.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>87 empresas ya tienen su certificado ENS con Avson. Tiempo medio: 3,5 meses. Tasa de éxito: 100%.</span>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Empezar ahora →</Link>
    </div>

    <h2>Categorías del ENS: Básica, Media y Alta</h2>

    <p>Uno de los elementos más importantes del ENS es su <strong>sistema de categorización</strong>. No todos los sistemas de información tienen el mismo impacto potencial si se ven comprometidos. El ENS establece tres categorías basadas en la valoración del impacto que un incidente de seguridad tendría sobre las dimensiones de seguridad del sistema:</p>

    <ul>
      <li><strong>Confidencialidad:</strong> ¿qué daño causaría que información no autorizada accediera a los datos?</li>
      <li><strong>Integridad:</strong> ¿qué impacto tendría la modificación indebida de los datos?</li>
      <li><strong>Trazabilidad:</strong> ¿qué consecuencias tendría no poder auditar quién accedió a qué?</li>
      <li><strong>Autenticidad:</strong> ¿qué pasaría si no se pudiera verificar la identidad de los actores?</li>
      <li><strong>Disponibilidad:</strong> ¿cuál sería el impacto de una interrupción del servicio?</li>
    </ul>

    <p>La categoría del sistema determina el nivel de exigencia de las medidas de seguridad:</p>

    <p><strong>Categoría BÁSICA:</strong> aplica cuando el impacto de un incidente sería limitado. Es la categoría más frecuente entre pymes tecnológicas proveedoras de servicios auxiliares. Exige la implementación de aproximadamente 45 medidas de seguridad en sus niveles más básicos. Para esta categoría es posible emitir una <em>Declaración de Conformidad</em> sin necesidad de auditoría externa, aunque cada vez más pliegos exigen el certificado completo.</p>

    <p><strong>Categoría MEDIA:</strong> aplica cuando el impacto sería grave. Es la categoría más común para proveedores TIC de tamaño medio y empresas que gestionan datos sensibles de ciudadanos o sistemas que soportan servicios públicos esenciales. Exige aproximadamente 60 medidas con controles más estrictos: doble factor de autenticación obligatorio, análisis de vulnerabilidades periódico, monitorización de seguridad continua y planes de continuidad formalizados.</p>

    <p><strong>Categoría ALTA:</strong> aplica cuando el impacto sería muy grave o catastrófico. Típica de infraestructuras críticas, sistemas de defensa nacional, servicios esenciales del Estado o sistemas que manejan información clasificada. Exige las 75 medidas en sus niveles más exigentes, incluyendo controles avanzados de criptografía, segregación física de redes, respuesta a incidentes formalizada y auditorías de penetración regulares.</p>

    <p>La determinación de la categoría es el primer paso crítico de cualquier proceso de implantación ENS. Herramientas como <strong>PILAR</strong> (desarrollada por el CCN) facilitan esta valoración mediante un análisis estructurado de activos y amenazas.</p>

    <h2>Qué medidas de seguridad exige el ENS</h2>

    <p>El Anexo II del RD 311/2022 recoge el <strong>catálogo de medidas de seguridad</strong> del ENS, organizado en tres marcos:</p>

    <p><strong>Marco Organizativo (org):</strong> establece los fundamentos de la gestión de la seguridad. Incluye la Política de Seguridad de la Información, la normativa de seguridad, los procedimientos de gestión de incidentes y la formación y concienciación del personal. Estas medidas deben estar documentadas y aprobadas al más alto nivel de la organización.</p>

    <p><strong>Marco Operacional (op):</strong> desarrolla los controles de gestión de la seguridad en el día a día. Se estructura en varias subfamilias: planificación (análisis de riesgos, arquitectura de seguridad, adquisición de nuevos componentes), control de acceso (identificación, autenticación, autorización), explotación (inventario de activos, configuración de seguridad, gestión de cambios, protección frente a código dañino, gestión de incidentes, continuidad del servicio) y servicios externos.</p>

    <p><strong>Medidas de Protección (mp):</strong> controles específicos para proteger categorías concretas de activos: instalaciones e infraestructura física, gestión del personal, protección de equipos, protección de comunicaciones (TLS/VPNs, segmentación de redes), protección de los soportes de información, protección de las aplicaciones informáticas y gestión de la información (clasificación, cifrado, copias de seguridad).</p>

    <p>Cada medida se aplica con distinta intensidad según el nivel de seguridad requerido por la categoría del sistema: nivel bajo (L), medio (M) o alto (H). Para categoría Básica se aplican solo los niveles bajos; para Media, los niveles medios y bajos; para Alta, todos los niveles.</p>

    <h2>Diferencia entre Declaración de Conformidad y Certificado ENS</h2>

    <p>Esta es una de las dudas más frecuentes entre las empresas que empiezan a explorar el ENS. Hay dos formas de acreditar el cumplimiento:</p>

    <p><strong>Declaración de Conformidad (DDC):</strong> es un documento elaborado por la propia organización en el que se declara que los sistemas en alcance cumplen con las medidas del ENS en categoría Básica. No requiere auditoría externa. Es válida como mecanismo de acreditación para sistemas de categoría Básica, pero tiene una limitación importante: un número creciente de organismos públicos y pliegos de contratación ya no la aceptan y exigen el <em>certificado completo</em>.</p>

    <p><strong>Certificado ENS:</strong> es el documento expedido por una <strong>entidad de certificación acreditada por ENAC</strong> (Entidad Nacional de Acreditación) tras una auditoría de segunda parte. El proceso incluye una auditoría documental y una auditoría técnica in situ (o remota). Es obligatorio para categorías Media y Alta, y cada vez más requerido también para Básica. El certificado tiene una validez de <strong>2 años</strong>, tras los cuales debe renovarse mediante una nueva auditoría.</p>

    <p>La entidad auditora debe estar acreditada por ENAC bajo el esquema específico de certificación del ENS. El CCN publica en su web el listado actualizado de entidades acreditadas.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>Garantía de éxito al 100% por escrito. Si no superas la auditoría siguiendo nuestro plan, repetimos sin coste.</span>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Ver garantía →</Link>
    </div>

    <h2>Cómo obtener el certificado ENS paso a paso</h2>

    <p>El proceso de certificación ENS tiene unas fases bien definidas:</p>

    <ol>
      <li><strong>Análisis GAP inicial:</strong> se evalúa el estado actual de los controles de seguridad de la organización frente a los requisitos ENS de la categoría aplicable. Este análisis identifica las brechas (gaps) existentes y cuantifica el esfuerzo necesario para cerrarlas.</li>
      <li><strong>Determinación de alcance y categoría:</strong> se definen qué sistemas y servicios quedan dentro del alcance de la certificación y se determina la categoría del sistema mediante la metodología de valoración de activos (habitualmente con la herramienta PILAR o metodologías compatibles).</li>
      <li><strong>Elaboración del Plan de Adecuación:</strong> con base en el análisis GAP, se diseña un plan detallado de implementación con actividades, responsables, plazos y recursos necesarios.</li>
      <li><strong>Implementación de controles:</strong> se ejecutan las acciones del Plan de Adecuación: elaboración de la Política de Seguridad, el Plan de Tratamiento de Riesgos (PTR), el documento de aplicabilidad, procedimientos operativos, formación al personal y despliegue de controles técnicos.</li>
      <li><strong>Auditoría interna previa:</strong> antes de la auditoría de certificación, se realiza una revisión interna exhaustiva para identificar y subsanar posibles desviaciones. Es la última oportunidad para detectar problemas.</li>
      <li><strong>Auditoría de certificación:</strong> una entidad acreditada por ENAC realiza la auditoría. Incluye revisión documental y comprobaciones técnicas. Si se detectan no conformidades, la organización dispone de un plazo para subsanarlas.</li>
      <li><strong>Emisión del certificado:</strong> una vez superada la auditoría sin no conformidades abiertas, la entidad emite el certificado ENS con una vigencia de 2 años.</li>
    </ol>

    <p>Con el acompañamiento de una consultora especializada como Avson GRC, este proceso completo tarda entre 3 y 4 meses. El factor más determinante del plazo no es la documentación — que puede generarse con eficiencia usando herramientas especializadas — sino la implementación de controles técnicos y la disponibilidad del equipo interno para validar y proporcionar evidencias.</p>

    
<section style={{maxWidth:'800px',margin:'0 auto 64px',padding:'0 var(--pad-x)'}}>
  <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(20px,2.5vw,26px)',fontWeight:'400',color:'var(--navy)',marginBottom:'24px'}}>Artículos relacionados</h2>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'16px'}}>
    <Link to="/certificado-ens-obligatorio" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS</p>
      <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>¿Es obligatorio el certificado ENS? Quién debe cumplirlo</p>
    </Link>
    <Link to="/ens-vs-iso27001" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS · ISO 27001</p>
      <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>ENS vs ISO 27001: diferencias clave y cuál necesitas</p>
    </Link>
    <Link to="/certificado-ens-media-alta" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS</p>
      <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>ENS Media y Alta: requisitos adicionales y cómo certificarse</p>
    </Link>
  </div>
</section>

<h2>Preguntas frecuentes sobre el ENS</h2>

    <div className="faq-article">
      <div className="faq-article-item">
        <div className="faq-article-q">¿Qué es el ENS exactamente?</div>
        <div className="faq-article-a">El ENS (Esquema Nacional de Seguridad) es el marco normativo español, establecido por el RD 311/2022, que regula la seguridad de los sistemas de información de las Administraciones Públicas y de sus proveedores TIC. Define los principios, requisitos y medidas de seguridad de obligado cumplimiento para garantizar la protección adecuada de los sistemas que soportan servicios públicos.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Es obligatorio el ENS para empresas privadas?</div>
        <div className="faq-article-a">Sí, para las empresas privadas que prestan servicios TIC a organismos del sector público español. El RD 311/2022 extiende la obligación a proveedores y subcontratistas. Si tu empresa vende software, servicios cloud, consultoría IT o cualquier servicio tecnológico a una Administración Pública, necesitas cumplir con el ENS en la categoría que corresponda.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Cuánto tiempo lleva obtener el certificado ENS?</div>
        <div className="faq-article-a">Con una consultora especializada como Avson GRC, el proceso completo desde diagnóstico hasta certificado dura entre 3 y 4 meses. Sin asesoramiento experto, puede extenderse a 12 meses o más, principalmente por los errores en la determinación del alcance, la generación de documentación incorrecta y la falta de preparación para la auditoría.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Qué diferencia hay entre Declaración de Conformidad y Certificado ENS?</div>
        <div className="faq-article-a">La Declaración de Conformidad es un documento autoevaluado válido solo para ENS Básica. El Certificado ENS es emitido por una entidad de certificación acreditada por ENAC tras una auditoría independiente. La mayoría de licitaciones públicas exigen el certificado completo, incluso para categoría Básica.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Cuánto cuesta obtener el certificado ENS?</div>
        <div className="faq-article-a">El coste depende de la categoría del sistema (Básica, Media o Alta), el número de sistemas en alcance, la madurez de los controles existentes y el tamaño de la organización. El diagnóstico gratuito de Avson incluye una propuesta económica personalizada. Como referencia, el coste es significativamente inferior al valor del primer contrato público que la certificación permite ganar.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿El certificado ENS tiene fecha de caducidad?</div>
        <div className="faq-article-a">Sí. El certificado ENS tiene una vigencia de 2 años a partir de la fecha de emisión. Transcurrido ese plazo, debe renovarse mediante una nueva auditoría de certificación. Es recomendable iniciar el proceso de renovación 3-4 meses antes de la caducidad para evitar periodos sin certificado vigente.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>¿Listo para certificarte en ENS?</h3>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Diagnóstico gratuito · Sin compromiso · Respuesta en 24 horas</p>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar diagnóstico gratuito →</Link>
    </div>

    <div style={{marginTop:'48px',paddingTop:'32px',borderTop:'1px solid var(--border)'}}>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'var(--text-muted)'}}>Artículos relacionados:</p>
      <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginTop:'12px'}}>
        <Link to="/certificado-ens-obligatorio" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>¿El ENS es obligatorio para mi empresa? →</Link>
        <Link to="/certificado-ens-media-alta" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>ENS Media vs Alta: diferencias →</Link>
        <Link to="/ens-vs-iso27001" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>ENS vs ISO 27001: sinergia →</Link>
      </div>
    </div>

  </div>
</article></>
  )
}
