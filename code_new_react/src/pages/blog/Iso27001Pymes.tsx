import { Link } from 'react-router-dom'

export default function Iso27001Pymes() {
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
    .error-box { background:#FFF8E8; border-left:3px solid #C9A84C; padding:16px 20px; margin:12px 0; font-family:'Inter',sans-serif; font-size:15px; color:#3A4560; }
    .faq-article { border-top:1px solid #E5E5E0; }
    .faq-article-item { border-bottom:1px solid #E5E5E0; }
    .faq-article-q { font-family:'Inter',sans-serif; font-size:16px; font-weight:500; color:#1A2744; padding:20px 0; cursor:pointer; display:flex; justify-content:space-between; align-items:center; }
    .faq-article-q::after { content:'＋'; font-size:20px; color:#C9A84C; flex-shrink:0; }
    .faq-article-item.open .faq-article-q::after { content:'－'; }
    .faq-article-a { font-family:'Inter',sans-serif; font-size:15px; color:#3A4560; line-height:1.75; padding:0 0 20px; display:none; }
    .faq-article-item.open .faq-article-a { display:block; }` }} />
<div style={{background:'var(--white)',borderBottom:'1px solid var(--border)',padding:'12px 0',marginTop:'72px'}}>
  <div className="container">
    <nav style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <Link to="/blog" style={{color:'var(--text-muted)',textDecoration:'none'}}>Blog</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>ISO 27001 para pymes</span>
    </nav>
  </div>
</div>

<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">ISO 27001 · Pymes · Guía práctica 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        ISO 27001 para pymes: guía práctica y errores más comunes
      </h1>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        Muchas pymes creen que ISO 27001 es solo para grandes empresas. Es un error costoso. Esta guía explica cómo hacerlo viable siendo pequeño, a qué errores prestar atención y cuánto cuesta realmente.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>⏱ Lectura: 9 minutos</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>📅 Actualizado: mayo 2026</span>
      </div>
    </div>
  </div>
</section>

<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <h2>¿Puede certificarse en ISO 27001 una pyme?</h2>

    <p>La respuesta es <strong>sí, absolutamente</strong>. Y de hecho, el número de pymes españolas certificadas en ISO 27001 ha crecido de forma sostenida en los últimos cinco años. El malentendido de que ISO 27001 es solo para grandes corporaciones tiene su origen en la percepción —errónea— de que implementar 93 controles de seguridad requiere un departamento de IT enorme y un presupuesto millonario.</p>

    <p>La realidad es distinta. La ISO 27001 es un estándar <strong>escalable</strong>: el nivel de complejidad de la implementación no depende del tamaño de la empresa, sino del <em>alcance del Sistema de Gestión de Seguridad de la Información (SGSI)</em> que se defina. Una pyme de 15 empleados puede perfectamente certificar su servicio de desarrollo de software o su plataforma SaaS bajo ISO 27001 con un alcance bien acotado.</p>

    <p>Lo que sí es cierto es que una pyme necesita más ayuda externa que una gran empresa para implementar ISO 27001 de manera eficiente. El conocimiento especializado en gestión de seguridad de la información no suele existir internamente en empresas pequeñas, y construirlo desde cero es prohibitivamente caro. La alternativa inteligente es apoyarse en una consultora especializada.</p>

    <h2>Ventajas de la ISO 27001 para pymes</h2>

    <p>Las pymes que obtienen la ISO 27001 reportan sistemáticamente las siguientes ventajas:</p>

    <ul>
      <li><strong>Acceso a nuevos clientes:</strong> clientes grandes (banca, aseguradoras, farmacéuticas, grandes corporaciones) y clientes internacionales exigen ISO 27001 a sus proveedores de servicios tecnológicos. El certificado abre puertas que antes estaban cerradas.</li>
      <li><strong>Ventaja en licitaciones:</strong> aunque el ENS es el requisito formal para contratos públicos en España, la ISO 27001 es valorada positivamente en muchos pliegos y puede otorgar puntuación adicional.</li>
      <li><strong>Reducción de riesgo real:</strong> el proceso de implementación obliga a identificar y gestionar los riesgos de seguridad de la información de forma sistemática. Muchas pymes descubren durante el proceso vulnerabilidades que desconocían y que podrían haber causado incidentes graves.</li>
      <li><strong>Confianza de clientes actuales:</strong> tener ISO 27001 reduce la presión de los clientes actuales para realizar auditorías de seguridad internas o exigir cuestionarios de seguridad extensos.</li>
      <li><strong>Mejora de procesos internos:</strong> la implementación de ISO 27001 fuerza a formalizar y documentar procesos que en una pyme suelen estar implícitos o en la cabeza de una sola persona. Esto reduce la dependencia de personas concretas y mejora la resiliencia operativa.</li>
      <li><strong>Preparación para el crecimiento:</strong> una pyme con ISO 27001 está mejor preparada para crecer: puede incorporar nuevos clientes, empleados y sistemas sin que la seguridad sea un freno.</li>
    </ul>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>¿Es viable la ISO 27001 para tu pyme? Pide presupuesto: te decimos si es el momento y cómo hacerlo en 3-4 meses.</span>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Pide presupuesto →</Link>
    </div>

    <h2>Alcance del SGSI: clave para que sea viable en pymes</h2>

    <p>El <strong>alcance del SGSI</strong> es la decisión más importante de todo el proceso de certificación ISO 27001. Define qué parte de la organización, qué servicios, qué sistemas de información y qué activos quedan dentro del ámbito de la certificación.</p>

    <p>Para una pyme, la tentación es incluir "todo" en el alcance para parecer más completos. Es un error estratégico. Un alcance demasiado amplio multiplica el número de controles a implementar, los sistemas a proteger, las personas a formar y las evidencias a generar para la auditoría. Puede triplicar el coste y el plazo de certificación.</p>

    <p>La estrategia correcta para una pyme es <strong>definir un alcance acotado y bien justificado</strong> en torno a los servicios o activos de mayor valor y mayor exposición a riesgos. Por ejemplo:</p>

    <ul>
      <li>Una empresa de desarrollo de software puede certificar exclusivamente su servicio de desarrollo y entrega de software, excluyendo actividades administrativas o de RRHH.</li>
      <li>Una empresa de consultoría IT puede certificar la prestación de servicios gestionados a clientes, excluyendo su propio backoffice.</li>
      <li>Un proveedor SaaS puede certificar la plataforma cloud que ofrece a clientes, con los sistemas y procesos que la soportan.</li>
    </ul>

    <p>El alcance debe quedar documentado en la <strong>Declaración de Alcance del SGSI</strong>, que es uno de los documentos obligatorios de la norma y será examinado por el auditor. Debe ser coherente, justificado y no dejar fuera actividades que claramente forman parte del servicio certificado.</p>

    <h2>Los 93 controles de ISO 27001 en lenguaje sencillo</h2>

    <p>La versión 2022 de ISO 27001 reorganizó su catálogo de controles en <strong>93 controles distribuidos en 4 grandes temas</strong> (en la versión 2013 eran 114 controles en 14 dominios). Esta reorganización simplificó la estructura y la alineó mejor con los marcos de ciberseguridad modernos.</p>

    <p>Los 4 temas son:</p>

    <ul>
      <li><strong>Controles organizativos (37 controles):</strong> políticas, roles, responsabilidades, seguridad en RRHH, gestión de activos, clasificación de información, gestión de proveedores, gestión de incidentes, planes de continuidad, cumplimiento legal.</li>
      <li><strong>Controles de personas (8 controles):</strong> selección de personal, condiciones de empleo, formación en seguridad, disciplina, telework, acuerdos de confidencialidad.</li>
      <li><strong>Controles físicos (14 controles):</strong> perímetros de seguridad física, control de acceso físico, protección de equipos, seguridad en el escritorio, protección de medios de almacenamiento.</li>
      <li><strong>Controles tecnológicos (34 controles):</strong> autenticación, control de acceso, cifrado, gestión de vulnerabilidades, protección frente a malware, monitorización, seguridad de redes, gestión de cambios, backup, logs de auditoría.</li>
    </ul>

    <p>No todos los controles son aplicables a todas las organizaciones. La norma exige elaborar una <strong>Declaración de Aplicabilidad (Statement of Applicability)</strong> que justifique para cada control si se aplica o no, y en caso negativo, la justificación de su exclusión. Para una pyme con alcance acotado, es habitual que entre el 15 y el 25% de los controles sean excluibles de forma justificada.</p>

    <h2>Cuánto cuesta la ISO 27001 para una pyme</h2>

    <p>El coste total de certificarse en ISO 27001 tiene tres componentes principales:</p>

    <p><strong>1. Coste de consultoría:</strong> los honorarios de la consultora que acompaña el proceso de implementación. Para una pyme de 10-50 empleados con alcance acotado, este coste suele estar entre 8.000 y 25.000 euros dependiendo del estado de partida de los controles existentes, la complejidad del alcance y el nivel de implicación requerido del equipo interno.</p>

    <p><strong>2. Coste de auditoría:</strong> los honorarios de la entidad de certificación acreditada que realiza la auditoría de certificación. Para pymes, suele estar entre 3.000 y 8.000 euros. El coste depende del tamaño del alcance y el número de días de auditoría necesarios.</p>

    <p><strong>3. Costes de implementación técnica:</strong> inversiones en herramientas, licencias o infraestructura necesarias para implementar ciertos controles técnicos (soluciones EDR, gestión de contraseñas, MFA, SIEM ligero, cifrado). Para una pyme, estas inversiones suelen estar entre 2.000 y 8.000 euros anuales, aunque muchos controles pueden implementarse con herramientas ya existentes o soluciones open source.</p>

    <p>En total, una pyme puede esperar un coste de primera certificación de entre <strong>15.000 y 40.000 euros</strong>, con una banda de variación amplia según el punto de partida. El coste de las auditorías de seguimiento anuales (año 2 y 3) es significativamente menor.</p>

    <p>Un factor importante: si la pyme también necesita o ya tiene el ENS, el coste combinado ENS + ISO 27001 mediante el enfoque de certificaciones en cascada es <strong>entre un 35-45% menor</strong> que hacer los dos proyectos de forma independiente.</p>

    <h2>Cuánto tiempo lleva certificarse: el proceso paso a paso</h2>

    <p>El proceso estándar de certificación ISO 27001 para una pyme con alcance acotado tiene las siguientes fases:</p>

    <ol>
      <li><strong>Análisis GAP (1-2 semanas):</strong> evaluación del estado actual frente a los requisitos de la norma. Identifica brechas y estima el esfuerzo de implementación.</li>
      <li><strong>Definición del alcance y política de seguridad (1-2 semanas):</strong> documentación del alcance del SGSI y elaboración de la Política de Seguridad de la Información aprobada por dirección.</li>
      <li><strong>Análisis de riesgos y Plan de Tratamiento (3-4 semanas):</strong> identificación de activos, valoración de amenazas y vulnerabilidades, cálculo del riesgo y definición de controles de tratamiento. Elaboración del PTR.</li>
      <li><strong>Declaración de Aplicabilidad (1-2 semanas):</strong> documentación justificada de aplicabilidad/exclusión de los 93 controles.</li>
      <li><strong>Implementación de controles (4-8 semanas):</strong> desarrollo de procedimientos, implementación de controles técnicos, formación al personal, evidencias.</li>
      <li><strong>Auditoría interna (1 semana):</strong> revisión interna exhaustiva antes de la auditoría de certificación.</li>
      <li><strong>Revisión por la dirección (1 sesión):</strong> reunión formal de revisión del SGSI requerida por la norma.</li>
      <li><strong>Auditoría de certificación (Fase 1 + Fase 2, 2-4 semanas):</strong> la entidad de certificación realiza primero una revisión documental (Fase 1) y posteriormente una auditoría in situ (Fase 2).</li>
      <li><strong>Certificación:</strong> emisión del certificado ISO 27001 con vigencia de 3 años (sujeto a auditorías anuales de seguimiento).</li>
    </ol>

    <p>El proceso completo para una pyme con alcance acotado tarda típicamente entre <strong>3 y 5 meses</strong> con una consultora eficiente.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>Con Avson GRC, garantizamos el éxito de la certificación por escrito. Incluso para pymes con cero experiencia previa en seguridad.</span>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Ver garantía →</Link>
    </div>

    <h2>Errores más comunes al implantar ISO 27001 en pymes</h2>

    <p>Estos son los errores que vemos repetidamente en proyectos ISO 27001 en pymes que llegan a nosotros tras haber fracasado con otro enfoque:</p>

    <div className="error-box">
      <strong>Error 1: Alcance demasiado amplio.</strong> Intentar certificar "toda la empresa" en la primera certificación. El resultado es un proyecto interminable y costoso que se abandona a medio camino. La solución: empezar con un alcance acotado al servicio o producto más crítico.
    </div>

    <div className="error-box">
      <strong>Error 2: Documentación de papel.</strong> Generar documentación extensa que nadie lee ni aplica. La ISO 27001 exige que los controles sean operativos, no que existan como documentos en un servidor. El auditor pregunta por evidencias de aplicación real.
    </div>

    <div className="error-box">
      <strong>Error 3: Ignorar la gestión de riesgos.</strong> Tratar el análisis de riesgos como un trámite administrativo en lugar de como el corazón del SGSI. Un análisis de riesgos superficial produce un Plan de Tratamiento de Riesgos inadecuado y no conformidades en auditoría.
    </div>

    <div className="error-box">
      <strong>Error 4: Falta de implicación de la dirección.</strong> La ISO 27001 exige compromiso real de la alta dirección: aprobación de políticas, asignación de recursos, revisión periódica del SGSI. Un SGSI sin respaldo directivo no supera la auditoría.
    </div>

    <div className="error-box">
      <strong>Error 5: Olvidarse del mantenimiento.</strong> Certificarse y luego no mantener el SGSI activo. ISO 27001 requiere auditorías de seguimiento anuales (años 1 y 2) y recertificación al cabo de 3 años. Un SGSI que no se mantiene deteriora su eficacia y pierde el certificado.
    </div>

    <div className="error-box">
      <strong>Error 6: Infravalorar los controles técnicos.</strong> Creer que con documentación y políticas es suficiente. La versión 2022 de ISO 27001 reforzó los controles tecnológicos. Algunos son de implementación compleja: MFA, SIEM, gestión de vulnerabilidades, cifrado en tránsito y en reposo.
    </div>

    <h2>ISO 27001 y ENS: el pack más demandado</h2>

    <p>Para las pymes tecnológicas españolas, la combinación ISO 27001 + ENS es la estrategia de certificación más inteligente. Las razones son claras:</p>

    <ul>
      <li>El ENS es obligatorio para contratos públicos y no puede sustituirse por ISO 27001.</li>
      <li>La ISO 27001 abre puertas en el sector privado nacional e internacional.</li>
      <li>Ambas certificaciones comparten el 65% de requisitos, lo que hace que certificarse en las dos de forma conjunta o secuencial sea mucho más eficiente que hacerlo por separado.</li>
      <li>Tener ambas certifca une postura de seguridad completa que diferencia a la empresa frente a competidores con solo una o ninguna.</li>
    </ul>

    <p>Avson GRC ha diseñado específicamente el <Link to="/packs">Pack ENS + ISO 27001</Link> para aprovechar esta sinergia. En un único proyecto coordinado, la empresa obtiene ambas certificaciones en un plazo total de 5-6 meses y a un coste total inferior al de hacerlas por separado con distintas consultoras.</p>

    <section style={{maxWidth:'800px',margin:'0 auto 64px',padding:'0 var(--pad-x)'}}>
      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(20px,2.5vw,26px)',fontWeight:'400',color:'var(--navy)',marginBottom:'24px'}}>Artículos relacionados</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'16px'}}>
        <Link to="/blog/ens-vs-iso27001" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS · ISO 27001</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>ENS vs ISO 27001: diferencias clave y cuál necesitas</p>
        </Link>
        <Link to="/blog/que-es-el-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>¿Qué es el ENS? Guía completa del Esquema Nacional de Seguridad</p>
        </Link>
      </div>
    </section>

    <h2>Preguntas frecuentes</h2>

    <div className="faq-article">
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿Puede una pyme de 10 empleados certificarse en ISO 27001?</div>
        <div className="faq-article-a">Sí. El tamaño no es un impedimento. La ISO 27001 es escalable: el alcance del SGSI puede definirse de forma acotada para que sea viable para una pyme. Lo crítico es definir bien el alcance desde el principio y no intentar abarcar toda la organización en la primera certificación.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿Cuánto cuesta certificarse en ISO 27001 siendo una pyme?</div>
        <div className="faq-article-a">El coste total (consultoría + auditoría + tecnología) para una pyme de 10-50 empleados con alcance acotado suele estar entre 15.000 y 40.000 euros dependiendo del punto de partida, el sector y la complejidad del alcance. Con el pack ENS + ISO 27001 de Avson, el coste combinado es significativamente menor.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿Cuánto tiempo dedica el equipo interno durante el proyecto?</div>
        <div className="faq-article-a">Con Avson GRC, el equipo interno dedica tipicamente entre 2 y 4 horas semanales durante el proyecto. El grueso del trabajo (documentación, coordinación con auditores, seguimiento de controles) lo gestiona la consultora. El cliente valida, aprueba y proporciona acceso a sistemas.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿Es necesario contratar tecnología cara para implementar ISO 27001?</div>
        <div className="faq-article-a">No necesariamente. Muchos controles pueden implementarse con herramientas ya existentes o de bajo coste. Sin embargo, algunos controles técnicos relevantes (MFA, gestión de vulnerabilidades, cifrado) requieren cierta inversión. El análisis GAP inicial identifica exactamente qué necesitas y qué ya tienes cubierto.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿Qué pasa si no supero la auditoría de certificación?</div>
        <div className="faq-article-a">Con Avson GRC, si no superas la auditoría de certificación habiendo seguido nuestro plan, repetimos el proceso sin coste adicional. Esta garantía por escrito es posible porque nuestro proceso de preparación para la auditoría es exhaustivo y nuestra tasa de éxito en primera convocatoria es del 100%.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>¿Lista tu pyme para ISO 27001?</h3>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Pide presupuesto · Sin compromiso · Respuesta en 24 horas</p>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar presupuesto sin compromiso →</Link>
    </div>

    <div style={{marginTop:'48px',paddingTop:'32px',borderTop:'1px solid var(--border)'}}>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'13px',color:'var(--text-muted)'}}>Artículos relacionados:</p>
      <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginTop:'12px'}}>
        <Link to="/blog/ens-vs-iso27001" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>ENS vs ISO 27001 →</Link>
        <Link to="/blog/certificado-ens-obligatorio" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>ENS obligatorio →</Link>
        <Link to="/blog/que-es-el-ens" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Qué es el ENS →</Link>
      </div>
    </div>

  </div>
</article></>
  )
}
