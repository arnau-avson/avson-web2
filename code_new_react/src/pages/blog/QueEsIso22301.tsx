import { Link } from 'react-router-dom'

export default function QueEsIso22301() {
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
    .cta-inline-box { background:#F7F7F5; border:1px solid #E5E5E0; border-left:3px solid #C9A84C; padding:28px 32px; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap; margin:40px 0; }
    .faq-article { border-top:1px solid #E5E5E0; }
    .faq-article-item { border-bottom:1px solid #E5E5E0; }
    .faq-article-q { font-family:'Inter',sans-serif; font-size:16px; font-weight:500; color:#1A2744; padding:20px 0; cursor:pointer; display:flex; justify-content:space-between; align-items:center; }
    .faq-article-q::after { content:'＋'; font-size:20px; color:#C9A84C; flex-shrink:0; }
    .faq-article-item.open .faq-article-q::after { content:'－'; }
    .faq-article-a { font-family:'Inter',sans-serif; font-size:15px; color:#3A4560; line-height:1.75; padding:0 0 20px; display:none; }
    .faq-article-item.open .faq-article-a { display:block; }
    .toc { background:#F7F7F5; border:1px solid #E5E5E0; padding:28px 32px; margin:0 0 48px; }
    .toc-title { font-family:'Inter',sans-serif; font-size:11px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:#C9A84C; margin-bottom:16px; }
    .toc ol { margin:0 0 0 20px; padding:0; }
    .toc li { font-family:'Inter',sans-serif; font-size:14px; color:#3A4560; margin-bottom:8px; }
    .toc a { color:#1A2744; text-decoration:none; border-bottom:none; }
    .toc a:hover { color:#C9A84C; }` }} />
<div style={{background:'var(--white)',borderBottom:'1px solid var(--border)',padding:'12px 0',marginTop:'72px'}}>
  <div className="container">
    <nav style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <Link to="/blog" style={{color:'var(--text-muted)',textDecoration:'none'}}>Blog</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>Qué es ISO 22301</span>
    </nav>
  </div>
</div>


<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">ISO 22301 · Continuidad de Negocio · Actualizado mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        Qué es ISO 22301: la norma de continuidad de negocio explicada paso a paso.
      </h1>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        ISO 22301 es la norma internacional que define cómo implantar y certificar un Sistema de Gestión de la Continuidad de Negocio. Esta guía explica qué exige, quién debe certificarse y cómo funciona el proceso en España.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>⏱ Lectura: 10 minutos</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>📅 Actualizado: mayo 2026</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>✍️ Por el equipo de Avson GRC</span>
      </div>
    </div>
  </div>
</section>


<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <div className="toc">
      <div className="toc-title">Contenido de este artículo</div>
      <ol>
        <li><a href="#que-es">Qué es la norma ISO 22301</a></li>
        <li><a href="#para-que-sirve">Para qué sirve: objetivos del SGCN</a></li>
        <li><a href="#quien-debe">¿Quién debe certificarse?</a></li>
        <li><a href="#clausulas">Requisitos principales: las 10 cláusulas</a></li>
        <li><a href="#diferencia-iso27001">Diferencia entre ISO 22301 e ISO 27001</a></li>
        <li><a href="#sinergia-ens">ISO 22301 y ENS: sinergia del 55%</a></li>
        <li><a href="#como-obtener">Cómo obtener la certificación en España</a></li>
        <li><a href="#tiempo-coste">Tiempo y coste de certificación</a></li>
        <li><a href="#faq">Preguntas frecuentes</a></li>
      </ol>
    </div>

    <h2 id="que-es">Qué es la norma ISO 22301</h2>

    <p>La <strong>ISO 22301</strong> es la norma internacional publicada por la Organización Internacional de Normalización (ISO) que especifica los requisitos para planificar, establecer, implementar, operar, monitorizar, revisar, mantener y mejorar continuamente un <strong>Sistema de Gestión de la Continuidad de Negocio (SGCN)</strong>. Su versión más reciente es la ISO 22301:2019, que reemplazó a la edición de 2012 con una estructura de alto nivel alineada con otras normas ISO de gestión.</p>

    <p>En términos prácticos, la norma responde a una pregunta fundamental: ¿qué haría tu organización si mañana dejara de funcionar durante horas, días o semanas? No se trata de un ejercicio teórico. Los incidentes que interrumpen operaciones son inevitables: ciberataques de ransomware, fallos en proveedores críticos, incendios, inundaciones, cortes de suministro eléctrico, pandemias. ISO 22301 obliga a las organizaciones a tener respuestas concretas, probadas y documentadas antes de que esos eventos ocurran.</p>

    <p>La norma pertenece a la familia de normas ISO de sistemas de gestión y comparte la <strong>estructura de alto nivel (HLS)</strong> con ISO 27001, ISO 9001 e ISO 14001. Esto significa que sus cláusulas siguen el mismo esquema Planificar-Hacer-Verificar-Actuar (PDCA), lo que facilita la integración con otros sistemas de gestión ya implantados en la organización. Si una empresa ya tiene ISO 27001, la curva de aprendizaje para ISO 22301 es significativamente menor.</p>

    <p>El término oficial en castellano es <strong>Gestión de la Continuidad del Negocio (GCN)</strong>, aunque en la práctica se usan indistintamente Business Continuity Management (BCM), continuidad de negocio, continuidad operacional y gestión de crisis. ISO 22301 cubre todos estos conceptos dentro de un marco integrado y auditable.</p>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Necesitas la certificación ISO 22301?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Pide presupuesto en 24 horas. Sin compromiso.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Pide presupuesto →</Link>
    </div>

    <h2 id="para-que-sirve">Para qué sirve ISO 22301: objetivos del SGCN</h2>

    <p>El objetivo central de ISO 22301 es garantizar que una organización pueda <strong>continuar operando durante y después de una interrupción grave</strong>, protegiendo a sus empleados, clientes, activos y reputación. Pero más allá de este objetivo general, la norma persigue resultados concretos y medibles que una certificación acredita ante terceros.</p>

    <p>En primer lugar, el SGCN ayuda a la organización a <strong>identificar sus procesos críticos</strong> y a comprender exactamente qué dejaría de funcionar y con qué impacto si cada proceso se interrumpiera. Este análisis, conocido como BIA (Business Impact Analysis), suele revelar dependencias ocultas y puntos únicos de fallo que ningún otro proceso de gestión había detectado antes.</p>

    <p>En segundo lugar, ISO 22301 obliga a establecer <strong>estrategias de continuidad y recuperación</strong> para cada proceso crítico. Esto incluye alternativas de operación manual o remota, acuerdos con proveedores alternativos, sitios de respaldo, sistemas de replicación de datos y planes de comunicación de crisis. La norma no prescribe soluciones específicas; exige que existan soluciones adecuadas al contexto y al nivel de riesgo de cada organización.</p>

    <p>En tercer lugar, la norma exige que esas estrategias se traduzcan en <strong>planes documentados y probados periódicamente</strong> mediante ejercicios y simulacros. Un plan que nunca se ha probado es un plan que probablemente falle cuando más se necesite. La cadencia de pruebas y los registros de sus resultados son uno de los puntos más revisados en las auditorías de certificación.</p>

    <p>Finalmente, la certificación ISO 22301 sirve como <strong>señal de confianza</strong> hacia clientes, socios, reguladores e inversores. Acredita que la organización ha sometido su sistema de continuidad a una auditoría independiente y que cumple con los estándares internacionales más exigentes. En sectores como el financiero, el sanitario, el tecnológico y la administración pública, esta acreditación tiene un peso cada vez mayor en las decisiones de contratación y renovación de contratos.</p>

    <h2 id="quien-debe">¿Quién debe certificarse en ISO 22301?</h2>

    <p>ISO 22301 es aplicable a cualquier organización, independientemente de su tamaño, sector o naturaleza jurídica. Sin embargo, en la práctica, la presión para certificarse proviene de cuatro fuentes principales que conviene conocer:</p>

    <p><strong>Regulación sectorial:</strong> el sector financiero es el más activo en este sentido. El reglamento <Link to="/dora">DORA</Link> (Digital Operational Resilience Act), en vigor desde enero de 2025, exige a bancos, aseguradoras, gestoras y fintech que dispongan de sistemas de gestión de la continuidad y la resiliencia operacional que son, en la práctica, equivalentes a lo que exige ISO 22301. La Ley PIC (Protección de Infraestructuras Críticas) establece obligaciones similares para operadores de infraestructuras críticas en sectores como energía, transporte, agua y sanidad.</p>

    <p><strong>Requisitos contractuales:</strong> muchas grandes empresas y grupos corporativos imponen a sus proveedores estratégicos la obligación de estar certificados en ISO 22301. Si uno de tus clientes más importantes sufre una interrupción causada por un fallo en tu cadena de suministro, las consecuencias legales y reputacionales pueden ser devastadoras. La certificación es la forma más eficiente de demostrar que tu continuidad está gestionada de forma rigurosa.</p>

    <p><strong>Licitaciones públicas:</strong> los pliegos de condiciones de contratos públicos en sectores críticos (TIC, sanidad, infraestructuras) incorporan con frecuencia ISO 22301 como criterio de valoración o requisito mínimo. Al igual que ocurre con el <Link to="/ens">ENS</Link>, la certificación se convierte en un activo comercial necesario para competir en determinados mercados.</p>

    <p><strong>Decisión estratégica:</strong> organizaciones que han experimentado una interrupción grave o que operan en entornos de alta exposición al riesgo (dependencia de un único datacenter, proveedor concentrado, zona geográfica propensa a desastres naturales) deciden certificarse como parte de su madurez organizativa, sin esperar a que un regulador o cliente se lo exija.</p>

    <h2 id="clausulas">Requisitos principales de ISO 22301: las 10 cláusulas</h2>

    <p>ISO 22301:2019 se estructura en diez cláusulas. Las tres primeras (1 a 3) son introductorias y no generan requisitos auditables directos. Las siete cláusulas siguientes (4 a 10) contienen todos los requisitos del Sistema de Gestión:</p>

    <p><strong>Cláusula 4 — Contexto de la organización:</strong> la organización debe comprender su contexto interno y externo, identificar las partes interesadas relevantes y sus expectativas en materia de continuidad, y definir el alcance del SGCN. Esta cláusula es el punto de partida: sin un alcance bien definido y fundamentado en el contexto real de la organización, el resto del sistema no tiene base sólida.</p>

    <p><strong>Cláusula 5 — Liderazgo:</strong> la alta dirección debe demostrar compromiso activo con el SGCN: asignando roles y responsabilidades claras, aprobando la política de continuidad de negocio, asegurando los recursos necesarios y promoviendo la cultura de continuidad en toda la organización. No basta con que exista un responsable de continuidad; la norma exige implicación real y verificable de los niveles más altos.</p>

    <p><strong>Cláusula 6 — Planificación:</strong> incluye la identificación y evaluación de riesgos y oportunidades para el SGCN, los objetivos de continuidad medibles y la planificación de los cambios necesarios para alcanzarlos. Los objetivos deben estar alineados con las necesidades del negocio y ser consistentes con los resultados del BIA.</p>

    <p><strong>Cláusula 7 — Apoyo:</strong> define los recursos humanos, tecnológicos e infraestructurales necesarios, las competencias del personal involucrado, la concienciación y la formación, los mecanismos de comunicación interna y externa durante una crisis, y los requisitos de gestión documental. La documentación del SGCN es un pilar fundamental de la auditoría.</p>

    <p><strong>Cláusula 8 — Operación:</strong> es la cláusula más extensa y exigente. Contiene todos los requisitos operacionales del SGCN: el Análisis de Impacto en el Negocio (BIA), la evaluación de riesgos de continuidad, la definición de estrategias y soluciones, la elaboración de los planes (BCP, DRP, Plan de Gestión de Crisis) y los requisitos de ejercicios, pruebas y actualización periódica de planes.</p>

    <p><strong>Cláusula 9 — Evaluación del desempeño:</strong> la organización debe monitorizar y medir el rendimiento del SGCN, realizar auditorías internas periódicas y ejecutar revisiones formales por la dirección. Es el mecanismo que garantiza que el sistema no queda en papel y que mejora continuamente en función de los resultados obtenidos.</p>

    <p><strong>Cláusula 10 — Mejora:</strong> define cómo gestionar las no conformidades identificadas (en auditorías, ejercicios o incidentes reales), las acciones correctivas asociadas y los procesos de mejora continua del SGCN. Cada incidente o simulacro que revele debilidades debe traducirse en acciones de mejora documentadas y verificadas.</p>

    <h2 id="diferencia-iso27001">Diferencia entre ISO 22301 e ISO 27001</h2>

    <p>Esta es una de las preguntas más frecuentes entre los responsables de seguridad y cumplimiento. Ambas normas son complementarias y comparten la misma estructura de alto nivel, pero tienen objetos de gestión y focos distintos:</p>

    <p><strong>ISO 27001</strong> gestiona la seguridad de la información. Su objetivo es proteger la confidencialidad, integridad y disponibilidad de los activos de información ante amenazas. Cubre un espectro amplio de controles de seguridad (93 controles en el Anexo A de ISO 27001:2022, organizados en cuatro dominios) que van desde la criptografía hasta la seguridad física, la gestión de accesos o el desarrollo seguro de software. Su alcance es la información y los sistemas que la procesan.</p>

    <p><strong>ISO 22301</strong> gestiona la continuidad operacional de los procesos de negocio. Su objetivo es garantizar que la organización pueda seguir funcionando durante y después de una interrupción, independientemente de cuál sea la causa: no solo cibernética, sino también física, natural, humana o de cadena de suministro. Se centra en los procesos de negocio y en la capacidad de la organización para mantener o restaurar sus funciones críticas dentro de plazos predefinidos.</p>

    <p>La intersección entre ambas normas es significativa. La disponibilidad de los sistemas de información es tanto un objetivo de ISO 27001 como un elemento central de los planes de continuidad de ISO 22301. El control A.5.30 de ISO 27001:2022 aborda explícitamente la preparación de las TIC para la continuidad de negocio y remite a ISO 22301 como norma de referencia. En la práctica, muchas organizaciones implementan ambas de forma integrada, aprovechando la documentación, la gestión de riesgos y la estructura de gobernanza comunes para reducir el esfuerzo total.</p>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿ISO 22301 e ISO 27001 a la vez?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Nuestros packs de certificación en cascada reducen el tiempo y coste hasta un 40%.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Ver packs →</Link>
    </div>

    <h2 id="sinergia-ens">ISO 22301 y ENS: sinergia del 55%</h2>

    <p>Si tu organización ya está certificada en el <Link to="/ens">Esquema Nacional de Seguridad (ENS)</Link> de categoría media o alta, tienes una ventaja considerable a la hora de abordar ISO 22301. El análisis comparativo de los controles de ambos marcos revela que aproximadamente el <strong>55% de los requisitos de ISO 22301</strong> están cubiertos, total o parcialmente, por los controles que ya debes tener implantados bajo el ENS.</p>

    <p>Los solapamientos más relevantes se producen en varias áreas clave. El <strong>marco organizativo del ENS</strong> —política de seguridad, normativa interna, roles y responsabilidades, formación y concienciación— cumple directamente con los requisitos de las cláusulas 5 y 7 de ISO 22301 sobre liderazgo y apoyo. Las medidas operacionales del ENS relacionadas con la <strong>continuidad del servicio</strong> (familia op.cont del Anexo II del RD 311/2022) incluyen análisis de impacto, plan de continuidad, pruebas periódicas y plan de recuperación, que se corresponden directamente con los requisitos centrales de la cláusula 8 de ISO 22301.</p>

    <p>Asimismo, la <strong>gestión de incidentes del ENS</strong> (op.exp.7) y los controles de detección y respuesta son equivalentes a los requisitos de ISO 22301 sobre activación de planes y gestión de crisis. La gestión de riesgos estructurada que exige el ENS (op.pl.1) proporciona una base directamente reutilizable para el análisis de riesgos de continuidad.</p>

    <p>El trabajo adicional para alcanzar ISO 22301 desde una base ENS se concentra en tres áreas concretas: el BIA formal con RTOs y RPOs explícitos por proceso de negocio, los planes de continuidad con el nivel de detalle operativo que exige ISO 22301 (más granular y orientado a procesos que el ENS), y la evidencia de ejercicios y pruebas con los registros requeridos por la norma internacional. Esta sinergia es la base del enfoque de <strong>certificación en cascada</strong> que permite reducir significativamente el tiempo y el coste del proyecto frente a una implementación desde cero.</p>

    <h2 id="como-obtener">Cómo obtener la certificación ISO 22301 en España: proceso paso a paso</h2>

    <p>El proceso de certificación ISO 22301 tiene unas fases bien definidas. Con el acompañamiento adecuado, el proceso completo puede completarse en 3-4 meses:</p>

    <ol>
      <li><strong>Análisis GAP inicial:</strong> se evalúa el estado actual de la organización frente a los requisitos de ISO 22301. Se identifican las brechas en documentación, procesos, planes y cultura de continuidad. Este diagnóstico determina el alcance real del proyecto y permite estimar el esfuerzo y coste necesarios.</li>
      <li><strong>Definición de alcance y contexto:</strong> se define qué procesos, servicios y unidades organizativas entran en el alcance del SGCN. Un alcance bien delimitado es crucial: demasiado amplio encarece el proyecto; demasiado estrecho puede no satisfacer los requisitos contractuales o regulatorios que motivaron la certificación.</li>
      <li><strong>BIA (Business Impact Analysis):</strong> pieza central del proyecto. Se entrevista a los responsables de cada proceso para determinar el impacto de su interrupción a lo largo del tiempo y se establecen el RTO y el RPO para cada proceso crítico. El BIA orienta todas las decisiones posteriores de estrategia de continuidad.</li>
      <li><strong>Evaluación de riesgos de continuidad:</strong> se identifican las amenazas que podrían interrumpir los procesos críticos y se evalúa su probabilidad e impacto. Los riesgos más críticos determinan las prioridades de inversión en estrategias de continuidad.</li>
      <li><strong>Definición de estrategias de continuidad:</strong> para cada proceso crítico y cada escenario de riesgo relevante, se definen las estrategias de respuesta: alternativas de operación manual o remota, proveedores alternativos, sitios de respaldo, sistemas de replicación de datos, etc.</li>
      <li><strong>Elaboración de planes:</strong> se documentan el Plan de Continuidad de Negocio (BCP), el Plan de Recuperación ante Desastres (DRP) y el Plan de Gestión de Crisis. Estos documentos deben ser operacionales: guiones de actuación paso a paso, con responsables, recursos y criterios de activación claramente definidos.</li>
      <li><strong>Ejercicios y pruebas:</strong> ISO 22301 exige que los planes se prueben antes de la auditoría. Los ejercicios pueden ser de escritorio, simulacros funcionales o pruebas técnicas reales. Cada ejercicio debe generar un informe con resultados y acciones de mejora identificadas.</li>
      <li><strong>Auditoría interna y revisión por la dirección:</strong> se verifica la conformidad del SGCN antes de la auditoría externa, y la alta dirección revisa formalmente el estado del sistema y aprueba las decisiones de mejora necesarias.</li>
      <li><strong>Auditoría de certificación (Fase 1 y Fase 2):</strong> la entidad certificadora realiza primero una auditoría documental (Fase 1) para verificar que la documentación del SGCN es conforme con la norma. Posteriormente realiza la auditoría de implementación (Fase 2), verificando que los controles documentados están efectivamente en funcionamiento.</li>
      <li><strong>Emisión del certificado:</strong> una vez cerradas las no conformidades detectadas, se emite el certificado ISO 22301 con una vigencia de 3 años, sujeto a auditorías de seguimiento anuales.</li>
    </ol>

    <h2 id="tiempo-coste">Tiempo y coste de certificación ISO 22301</h2>

    <p>El tiempo necesario para certificarse en ISO 22301 depende de varios factores: la madurez inicial de la organización en materia de continuidad, el alcance del SGCN, el tamaño de la empresa y la disponibilidad del equipo interno para participar en el proyecto.</p>

    <p><strong>Organizaciones sin gestión de continuidad previa:</strong> el proceso desde cero hasta certificado suele durar entre 6 y 12 meses con recursos internos propios, o entre 3 y 5 meses con el acompañamiento de una consultora especializada. La diferencia radica en la eficiencia metodológica: una consultora con experiencia en ISO 22301 tiene plantillas, metodologías y un proceso optimizado que evita los errores y retrabajos que alargan los proyectos internos.</p>

    <p><strong>Organizaciones con ENS o ISO 27001 previos:</strong> gracias a la sinergia de controles, el tiempo se reduce a 2-3 meses en muchos casos. La reutilización de la gestión de riesgos, la estructura documental y los controles de continuidad ya implantados acelera considerablemente el proyecto sin sacrificar la calidad de la implementación.</p>

    <p>Respecto al <strong>coste</strong>, intervienen tres partidas principales: los honorarios de consultoría (implementación del SGCN, elaboración del BIA, planes y formación), los honorarios de la entidad certificadora (auditorías de Fase 1, Fase 2 y seguimiento anual), y los costes internos de dedicación del equipo. La inversión varía según el tamaño y complejidad de la organización. Como referencia de valor, el coste de la certificación es habitualmente inferior al impacto económico de una sola interrupción grave no gestionada.</p>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Necesitas la certificación ISO 22301?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Garantía de éxito al 100% por escrito. Tiempo medio: 3-4 meses.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Solicitar presupuesto sin compromiso →</Link>
    </div>

    <h2 id="faq">Preguntas frecuentes sobre ISO 22301</h2>

    <div className="faq-article">
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿Es obligatoria la ISO 22301 en España?</div>
        <div className="faq-article-a">ISO 22301 no es una norma de obligado cumplimiento legal con carácter general en España. Sin embargo, determinados sectores como el financiero (DORA), el de infraestructuras críticas (Ley PIC) o las entidades sujetas al ENS de categoría media o alta la exigen de facto o la recomiendan con fuerza. Muchos concursos públicos y contratos corporativos la incorporan como requisito o criterio de valoración, por lo que en la práctica puede ser obligatoria para acceder a determinados mercados.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿Cuánto tiempo lleva certificarse en ISO 22301?</div>
        <div className="faq-article-a">Con el acompañamiento de una consultora especializada, el proceso desde diagnóstico hasta certificado tarda entre 3 y 4 meses. Sin asesoramiento experto, el plazo puede extenderse a 9-12 meses, principalmente debido a la complejidad del BIA, la elaboración de planes de continuidad operativos y la preparación para los ejercicios y pruebas requeridos por la norma. El punto más crítico en tiempo es el BIA, que requiere entrevistar a los responsables de todos los procesos críticos y construir los análisis de impacto desde cero.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿ISO 22301 y continuidad de negocio son lo mismo?</div>
        <div className="faq-article-a">No exactamente. La continuidad de negocio es la disciplina de gestión orientada a mantener las operaciones durante disrupciones. ISO 22301 es la norma internacional que estandariza cómo implementar y certificar un Sistema de Gestión de la Continuidad de Negocio (SGCN). Tener un plan de continuidad no equivale a estar certificado en ISO 22301; la norma exige un enfoque sistémico con ciclo de vida PDCA, evidencias auditables de implementación, pruebas periódicas documentadas y mejora continua verificable.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿Qué es el BIA en ISO 22301?</div>
        <div className="faq-article-a">El BIA (Business Impact Analysis o Análisis de Impacto en el Negocio) es el análisis central de ISO 22301. Consiste en identificar los procesos críticos de la organización, determinar el impacto que su interrupción causaría a lo largo del tiempo —financiero, reputacional, legal, operativo— y establecer los parámetros de recuperación: el RTO (Recovery Time Objective, tiempo máximo de recuperación tolerable antes de que el impacto sea inaceptable) y el RPO (Recovery Point Objective, máxima pérdida de datos tolerable). El BIA es la base sobre la que se diseñan todas las estrategias y planes de continuidad.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>Si ya tengo ENS, ¿cuánto me falta para ISO 22301?</div>
        <div className="faq-article-a">Si tu organización ya está certificada en ENS de categoría media o alta, tienes cubierto aproximadamente el 55% de los requisitos de ISO 22301. Los controles de gestión de incidentes, continuidad del servicio, gestión de riesgos y estructura documental del ENS son directamente reutilizables. El trabajo adicional se concentra en el BIA formal con RTOs y RPOs explícitos por proceso, los planes de continuidad con el nivel de detalle operativo que exige ISO 22301 y la evidencia documentada de ejercicios y pruebas periódicas.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>¿Listo para certificarte en ISO 22301?</h3>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Pide presupuesto · Sin compromiso · Respuesta en 24 horas</p>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar presupuesto sin compromiso →</Link>
    </div>

    <div style={{marginTop:'48px',paddingTop:'32px',borderTop:'1px solid var(--border)'}}>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'13px',color:'var(--text-muted)'}}>Artículos relacionados:</p>
      <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginTop:'12px'}}>
        <Link to="/blog/que-es-el-ens" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Qué es el ENS: guía completa →</Link>
        <Link to="/blog/ens-vs-iso27001" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>ENS vs ISO 27001 →</Link>
        <Link to="/blog/plan-continuidad-negocio" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Plan de continuidad de negocio →</Link>
      </div>
    </div>

  </div>
</article></>
  )
}
