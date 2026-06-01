import { Link } from 'react-router-dom'

export default function PlanContinuidadNegocio() {
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
      <span style={{color:'var(--navy)',fontWeight:'500'}}>Plan de Continuidad de Negocio</span>
    </nav>
  </div>
</div>

<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">Continuidad de Negocio · BCP · Guía práctica 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        Plan de continuidad de negocio: qué es y cómo implementarlo en tu empresa.
      </h1>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        Un Plan de Continuidad de Negocio (BCP) define cómo sobrevive tu empresa a una interrupción grave. Esta guía explica qué es, cómo hacerlo paso a paso y cómo se conecta con la certificación ISO 22301.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>Lectura: 9 minutos</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>Actualizado: mayo 2026</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>Por el equipo de Avson GRC</span>
      </div>
    </div>
  </div>
</section>

<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <div className="toc">
      <div className="toc-title">Contenido de este artículo</div>
      <ol>
        <li><a href="#que-es">Qué es un Plan de Continuidad de Negocio (BCP)</a></li>
        <li><a href="#por-que">Por qué tu empresa necesita un BCP</a></li>
        <li><a href="#diferencias">Diferencia entre BCP, DRP y SGCN</a></li>
        <li><a href="#como-hacer">Cómo hacer un BCP: 6 pasos</a></li>
        <li><a href="#bia">Qué es el BIA y cómo hacerlo</a></li>
        <li><a href="#iso22301">Plan de continuidad e ISO 22301</a></li>
        <li><a href="#errores">Errores comunes al implementar un BCP</a></li>
        <li><a href="#faq">Preguntas frecuentes</a></li>
      </ol>
    </div>

    <h2 id="que-es">Qué es un Plan de Continuidad de Negocio (BCP)</h2>

    <p>Un <strong>Plan de Continuidad de Negocio</strong> (BCP, del inglés Business Continuity Plan) es el documento que describe cómo una organización continuará operando durante y después de una interrupción grave. No es un manual teórico: es un guión operativo con instrucciones concretas, responsables identificados, recursos disponibles y criterios de activación claros.</p>

    <p>El BCP define, para cada proceso crítico de la organización, qué alternativas de operación existen cuando los medios habituales no están disponibles. Si los servidores están caídos, ¿cómo se atienden los pedidos? Si la oficina central es inaccesible, ¿desde dónde trabajan los empleados clave? Si el proveedor principal de un insumo esencial falla, ¿quién es el proveedor alternativo y cómo se activa el contrato? El BCP responde a estas preguntas antes de que sucedan, no durante la crisis.</p>

    <p>El término BCP se usa a veces de forma laxa para referirse a todo el conjunto de planificación de continuidad de una organización, pero en sentido estricto el BCP es uno de los varios planes que forman parte de un <strong>Sistema de Gestión de la Continuidad de Negocio (SGCN)</strong>. Los otros planes principales son el DRP (Disaster Recovery Plan, centrado en la recuperación de TI) y el Plan de Gestión de Crisis (centrado en la comunicación y la toma de decisiones durante el incidente). Los tres deben ser coherentes entre sí y activarse de forma coordinada.</p>

    <p>Un buen BCP no es un documento que se elabora una vez y se guarda en un cajón. Es un documento vivo que debe revisarse, actualizarse y probarse periódicamente para garantizar que sigue siendo relevante y que el personal que debe activarlo lo conoce y lo sabe ejecutar bajo presión.</p>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Necesitas un Plan de Continuidad de Negocio?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Pide presupuesto en 24 horas. Sin compromiso.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Pide presupuesto →</Link>
    </div>

    <h2 id="por-que">Por qué tu empresa necesita un BCP</h2>

    <p>La pregunta no es si tu empresa sufrirá alguna vez una interrupción grave. La pregunta es cuándo, con qué intensidad y si estará preparada para responder. Los datos del sector son inequívocos: según el Business Continuity Institute, el 74% de las organizaciones sufrió al menos una interrupción de negocio significativa en los últimos 12 meses, y el 43% de las empresas que experimentan una interrupción grave sin plan de recuperación cierran en los 3 años siguientes.</p>

    <p>Las causas de interrupción son más diversas de lo que solemos imaginar. Más allá de los desastres naturales espectaculares —inundaciones, terremotos, incendios— la mayoría de las interrupciones reales tienen causas más mundanas pero igualmente devastadoras: fallos en proveedores críticos de TI (un datacenter, una plataforma SaaS esencial), ciberataques de ransomware que cifran todos los sistemas, errores humanos que corrompen bases de datos críticas, pérdida repentina de personal clave o cortes en el suministro eléctrico prolongados. Ninguna de estas situaciones es extraordinaria; todas son escenarios que cualquier empresa mediana puede enfrentar en cualquier momento.</p>

    <p>Más allá de la resiliencia operacional, el BCP tiene una dimensión legal y contractual creciente. El reglamento <Link to="/dora">DORA</Link> exige a las entidades financieras planes de continuidad detallados. La Ley de Protección de Infraestructuras Críticas establece obligaciones similares para operadores críticos. Muchos contratos empresariales y pliegos de licitación pública incluyen ahora cláusulas que exigen acreditar que existe un BCP vigente y probado. En todos estos contextos, carecer de un BCP no es solo un riesgo operacional: es un riesgo legal y comercial.</p>

    <h2 id="diferencias">Diferencia entre BCP, DRP y SGCN</h2>

    <p>Estos tres términos se confunden con frecuencia, incluso entre profesionales del sector. Entender sus diferencias es fundamental para diseñar correctamente la arquitectura de continuidad de una organización:</p>

    <p><strong>BCP (Business Continuity Plan):</strong> es el plan que cubre la continuidad de los procesos de negocio en su conjunto. Incluye personas, comunicaciones, instalaciones alternativas, procesos manuales de respaldo, gestión de proveedores y clientes durante la crisis, y coordinación entre departamentos. Su alcance es el negocio como un todo, no solo la tecnología.</p>

    <p><strong>DRP (Disaster Recovery Plan):</strong> es el plan que cubre específicamente la recuperación de los sistemas de TI y la infraestructura tecnológica. Detalla los procedimientos para restaurar servidores, bases de datos, aplicaciones y redes dentro de los tiempos de recuperación definidos (RTO) y con la mínima pérdida de datos posible (RPO). El DRP es un componente técnico del BCP, no un sustituto.</p>

    <p><strong>SGCN (Sistema de Gestión de la Continuidad de Negocio):</strong> es el marco de gestión completo que engloba todos los planes, políticas, procesos, roles, auditorías y mecanismos de mejora continua de la continuidad. El SGCN es lo que certifica la norma <Link to="/blog/que-es-iso22301">ISO 22301</Link>. El BCP y el DRP son componentes del SGCN, junto con el BIA, el análisis de riesgos, los ejercicios de prueba y la revisión por la dirección.</p>

    <p>Una analogía útil: si el SGCN es el sistema de gestión de la seguridad vial de una empresa de transporte, el BCP es el protocolo de actuación ante un accidente, el DRP es el plan de reparación y sustitución de los vehículos, y el BIA es el análisis de qué rutas son críticas y qué impacto tendría su interrupción.</p>

    <h2 id="como-hacer">Cómo hacer un plan de continuidad de negocio: 6 pasos</h2>

    <p>Elaborar un BCP eficaz sigue una metodología clara. Estos son los seis pasos fundamentales:</p>

    <p><strong>Paso 1 — Obtener el mandato de la dirección:</strong> el BCP no puede ser un proyecto técnico liderado solo por IT o por el área de seguridad. Requiere el compromiso explícito de la alta dirección, que debe aprobar el proyecto, asignar recursos, designar un responsable de continuidad y participar en las decisiones sobre tolerancia al riesgo. Sin este mandato, el proyecto se paralizará en cuanto requiera recursos o decisiones difíciles.</p>

    <p><strong>Paso 2 — Definir alcance y política:</strong> se determina qué partes de la organización, qué procesos y qué ubicaciones estarán cubiertos por el BCP. Se elabora la política de continuidad de negocio, que establece el compromiso de la organización, los objetivos de continuidad y el marco de gobernanza del SGCN. Esta política debe ser aprobada formalmente por la dirección.</p>

    <p><strong>Paso 3 — Realizar el BIA (Business Impact Analysis):</strong> es la fase más crítica. Se identifican los procesos de negocio, se determina el impacto que su interrupción causaría en el tiempo y se establecen los RTOs y RPOs. El BIA es la base de todas las decisiones de estrategia de continuidad. Un BIA bien hecho revela qué procesos son realmente críticos (a menudo con sorpresas respecto a las asunciones iniciales) y cuánto tiempo puede tolerarse su interrupción.</p>

    <p><strong>Paso 4 — Analizar riesgos y definir estrategias:</strong> se identifican las amenazas que podrían interrumpir los procesos críticos y se evalúa su probabilidad e impacto. Para cada combinación proceso-amenaza relevante, se diseñan estrategias de continuidad: recursos alternativos, sitios de trabajo alternativos, proveedores de respaldo, acuerdos de reciprocidad, capacidades de operación manual. Las estrategias deben ser realistas y financieramente viables.</p>

    <p><strong>Paso 5 — Documentar los planes:</strong> se redactan el BCP, el DRP y el Plan de Gestión de Crisis. El nivel de detalle es clave: un plan demasiado genérico no sirve bajo presión; un plan demasiado detallado no se actualiza ni se usa. El equilibrio óptimo son guiones de actuación con responsables nominales, pasos ordenados, recursos específicos (no genéricos) y criterios de activación y desactivación claros.</p>

    <p><strong>Paso 6 — Probar, revisar y mantener:</strong> los planes deben probarse antes de necesitarlos. Los ejercicios pueden ser de escritorio (walk-through de escenarios), simulacros funcionales parciales o pruebas técnicas reales (failover de sistemas, activación del sitio alternativo). Cada ejercicio debe generar un informe con hallazgos y acciones de mejora. Los planes deben revisarse al menos anualmente y actualizarse tras cualquier cambio significativo en la organización.</p>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Quieres un BCP listo para auditoría?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Elaboramos y certificamos tu plan de continuidad en 3-4 meses con garantía de éxito.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Solicitar información →</Link>
    </div>

    <h2 id="bia">Qué es el BIA (Business Impact Analysis) y cómo hacerlo</h2>

    <p>El <strong>Business Impact Analysis (BIA)</strong> es el análisis que determina qué procesos de negocio son críticos, qué impacto causaría su interrupción en función del tiempo transcurrido y cuáles son los parámetros de recuperación aceptables. Es la pieza de información más importante para diseñar un BCP eficaz.</p>

    <p>La metodología estándar de un BIA tiene cuatro fases. En la <strong>fase de inventario</strong>, se identifican todos los procesos de negocio de la organización y se asignan a un responsable. En la <strong>fase de análisis de impacto</strong>, se entrevista a los responsables de cada proceso para determinar el impacto que su interrupción causaría a lo largo del tiempo, habitualmente en intervalos de 1 hora, 4 horas, 24 horas, 48 horas, 1 semana y 1 mes. El impacto se cuantifica en dimensiones financiera, operativa, legal/regulatoria y reputacional.</p>

    <p>En la <strong>fase de determinación de parámetros</strong>, se establecen para cada proceso crítico el <strong>RTO</strong> (Recovery Time Objective) —el tiempo máximo tolerable de interrupción antes de que el impacto sea inaceptable— y el <strong>RPO</strong> (Recovery Point Objective) —la cantidad máxima de datos que se puede perder, medida en tiempo desde el último punto de recuperación—. Estos parámetros son los que orientan el diseño de las estrategias y soluciones técnicas: un RTO de 2 horas exige soluciones de alta disponibilidad muy diferentes a un RTO de 24 horas.</p>

    <p>En la <strong>fase de priorización</strong>, los procesos se ordenan por criticidad, combinando el impacto de su interrupción y la urgencia de su recuperación. Esta priorización determina el orden en que deben recuperarse los procesos durante un incidente real y concentra los recursos de continuidad donde el impacto es mayor.</p>

    <p>Un BIA bien documentado también identifica las <strong>dependencias entre procesos</strong> —qué sistemas, datos, personas o proveedores externos son necesarios para cada proceso crítico— y el <strong>Minimum Business Continuity Objective (MBCO)</strong>, es decir, el nivel mínimo de servicio que debe mantenerse en modo de continuidad para que la organización pueda seguir siendo viable.</p>

    <h2 id="iso22301">Plan de continuidad de negocio e ISO 22301</h2>

    <p>La norma <Link to="/blog/que-es-iso22301">ISO 22301</Link> es el estándar internacional que certifica que el Sistema de Gestión de la Continuidad de Negocio de una organización cumple con los requisitos internacionales de gestión sistémica, auditabilidad y mejora continua. El BCP es uno de los productos documentales que el SGCN debe generar, pero la norma va mucho más allá del documento en sí.</p>

    <p>ISO 22301 exige que el BCP no sea solo un documento elaborado en un momento dado, sino el resultado de un proceso de gestión continuo: análisis de contexto, evaluación de riesgos, BIA formal, estrategias documentadas, planes probados periódicamente, auditorías internas, revisión por la dirección y mejora continua verificable. La diferencia entre tener un BCP y estar certificado en ISO 22301 es la diferencia entre tener un plan y tener un sistema de gestión que garantiza que ese plan es siempre relevante, probado y mejorado.</p>

    <p>Para las organizaciones que necesitan demostrar a clientes, reguladores o auditores que su gestión de continuidad es robusta, la certificación ISO 22301 es la forma más eficiente de hacerlo. El certificado emitido por una entidad acreditada tiene un peso objetivo que ningún documento interno puede igualar. Si tu organización ya tiene un BCP, el camino hasta ISO 22301 es más corto de lo que parece: el trabajo adicional se centra en formalizar el proceso de gestión, documentar el BIA y los análisis de riesgo, y evidenciar los ejercicios y pruebas.</p>

    <h2 id="errores">Errores comunes al implementar un BCP</h2>

    <p>La experiencia en proyectos de continuidad de negocio revela que los mismos errores se repiten con frecuencia. Conocerlos permite evitarlos:</p>

    <ul>
      <li><strong>BIA superficial o sesgado:</strong> el error más frecuente es construir el BIA desde el despacho, sin entrevistar realmente a los responsables de los procesos. El resultado es un análisis que no refleja la realidad operativa, con RTOs demasiado optimistas o procesos críticos no identificados. El BIA requiere trabajo de campo.</li>
      <li><strong>Planes demasiado genéricos:</strong> un BCP que dice "contactar al equipo de TI" sin nombrar a personas, sin incluir números de teléfono alternativos y sin detallar qué deben hacer exactamente es inútil bajo presión. Los planes deben ser ejecutables por personas que están bajo estrés y que pueden no haber participado en su elaboración.</li>
      <li><strong>Falta de pruebas:</strong> muchas organizaciones elaboran un BCP, lo aprueban y nunca lo prueban. Cuando ocurre un incidente real, descubren que el plan no funciona: los sistemas de respaldo no están actualizados, el sitio alternativo no tiene capacidad suficiente, o los empleados no saben qué deben hacer. Las pruebas periódicas son imprescindibles.</li>
      <li><strong>Planes desactualizados:</strong> las organizaciones cambian: nuevos sistemas, nuevos proveedores, reorganizaciones, nuevas regulaciones. Un BCP elaborado hace tres años sin revisión puede ser peor que no tener ninguno, porque genera una falsa sensación de seguridad. La actualización periódica es obligatoria.</li>
      <li><strong>Ausencia de comunicación de crisis:</strong> muchos BCP se centran en la recuperación técnica y olvidan que durante una crisis hay que comunicar: a empleados, clientes, proveedores, medios de comunicación y reguladores. El plan de comunicación de crisis debe ser un componente explícito del BCP.</li>
      <li><strong>Dependencia de una sola persona:</strong> si el plan solo lo conoce y lo puede activar una persona —el CISO, el CTO o el responsable de continuidad—, la organización está expuesta a un punto único de fallo humano. El BCP debe ser conocido y practicado por múltiples personas en cada área crítica.</li>
    </ul>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Necesitas revisar o crear tu plan de continuidad?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Pide presupuesto en 24 horas. Sin compromiso.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Pide presupuesto →</Link>
    </div>

    <h2 id="faq">Preguntas frecuentes sobre el plan de continuidad de negocio</h2>

    <div className="faq-article">
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿Qué diferencia hay entre un BCP y un DRP?</div>
        <div className="faq-article-a">El BCP (Business Continuity Plan) cubre la continuidad de los procesos de negocio en su conjunto: personas, comunicaciones, instalaciones, procesos manuales alternativos y relación con clientes y proveedores durante la crisis. El DRP (Disaster Recovery Plan) se centra específicamente en la recuperación de los sistemas de TI y la infraestructura tecnológica. El DRP es un componente técnico del BCP, no un sustituto. Una empresa puede tener un DRP excelente y carecer de BCP, lo que significa que sabe cómo recuperar sus sistemas pero no cómo operar mientras tanto.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿Cuánto tiempo lleva elaborar un BCP?</div>
        <div className="faq-article-a">Un BCP básico para una organización mediana puede elaborarse en 4-8 semanas con el acompañamiento de una consultora especializada. El tiempo depende principalmente del número de procesos críticos a analizar, la disponibilidad del equipo interno para participar en el BIA y la madurez previa de la organización en gestión de riesgos. Un BCP completo con evidencias de prueba y orientado a la certificación ISO 22301 requiere entre 3 y 4 meses.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿Es obligatorio tener un plan de continuidad de negocio en España?</div>
        <div className="faq-article-a">No existe una obligación legal general de tener un BCP en España. Sin embargo, sectores específicos sí tienen obligaciones: el financiero (DORA exige planes de continuidad desde enero 2025), operadores de infraestructuras críticas (Ley PIC), sector sanitario y administración pública. Adicionalmente, muchos contratos corporativos y pliegos de licitación pública incluyen la acreditación de un BCP vigente como requisito de contratación.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿El BCP necesita actualizarse?</div>
        <div className="faq-article-a">Sí, con periodicidad mínima anual y siempre que se produzcan cambios significativos en la organización: nuevos sistemas críticos, cambio de proveedores estratégicos, reorganizaciones, nuevas ubicaciones o cambios regulatorios relevantes. Un BCP desactualizado puede ser peor que no tener ninguno, porque genera una falsa sensación de seguridad y puede llevar a tomar decisiones erróneas durante una crisis real.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-article-item')?.classList.toggle('open')}>¿Qué es el RTO y el RPO en un plan de continuidad?</div>
        <div className="faq-article-a">El RTO (Recovery Time Objective) es el tiempo máximo tolerable que un proceso puede estar interrumpido antes de que el impacto sea inaceptable para la organización. Por ejemplo, un RTO de 4 horas para el sistema de facturación significa que ese sistema debe estar operativo en menos de 4 horas desde la interrupción. El RPO (Recovery Point Objective) es la cantidad máxima de datos que se puede perder, medida en tiempo: un RPO de 1 hora significa que los datos no pueden tener más de 1 hora de antigüedad en el momento de la recuperación. Ambos parámetros se definen en el BIA y determinan las soluciones técnicas necesarias.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>¿Listo para proteger la continuidad de tu negocio?</h3>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Pide presupuesto · Sin compromiso · Respuesta en 24 horas</p>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar presupuesto sin compromiso →</Link>
    </div>

    <div style={{marginTop:'48px',paddingTop:'32px',borderTop:'1px solid var(--border)'}}>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'13px',color:'var(--text-muted)'}}>Artículos relacionados:</p>
      <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginTop:'12px'}}>
        <Link to="/blog/que-es-iso22301" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Qué es ISO 22301 →</Link>
        <Link to="/blog/que-es-el-ens" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Qué es el ENS →</Link>
        <Link to="/iso22301" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Certificación ISO 22301 con Avson →</Link>
      </div>
    </div>

  </div>
</article>
    </>
  )
}
