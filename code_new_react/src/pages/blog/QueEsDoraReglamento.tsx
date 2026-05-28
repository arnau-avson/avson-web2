import { Link } from 'react-router-dom'

export default function QueEsDoraReglamento() {
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
    <nav style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Blog</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>Qué es DORA</span>
    </nav>
  </div>
</div>


<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">DORA · Reglamento UE 2022/2554 · Obligatorio desde enero 2025</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        Qué es DORA: el reglamento europeo que transforma la resiliencia digital en finanzas.
      </h1>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        DORA es obligatorio desde el 17 de enero de 2025 para todas las entidades financieras de la UE. Esta guía explica qué es, a quién aplica, qué exige y cómo cumplirlo de forma eficiente.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>⏱ Lectura: 10 minutos</span>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>📅 Actualizado: mayo 2026</span>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>✍️ Por el equipo de Avson GRC</span>
      </div>
    </div>
  </div>
</section>


<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <div className="toc">
      <div className="toc-title">Contenido de este artículo</div>
      <ol>
        <li><a href="#que-es">Qué es DORA (Reglamento UE 2022/2554)</a></li>
        <li><a href="#a-quien-aplica">¿A quién aplica DORA?</a></li>
        <li><a href="#cinco-pilares">Los 5 pilares de DORA</a></li>
        <li><a href="#requisitos">Principales requisitos de DORA</a></li>
        <li><a href="#dora-vs-nis2">DORA vs NIS2: diferencias</a></li>
        <li><a href="#fechas">Fechas clave: DORA ya es obligatorio</a></li>
        <li><a href="#sanciones">Sanciones por incumplimiento</a></li>
        <li><a href="#hoja-de-ruta">Cómo cumplir con DORA: hoja de ruta</a></li>
        <li><a href="#faq">Preguntas frecuentes</a></li>
      </ol>
    </div>

    <h2 id="que-es">Qué es DORA (Reglamento UE 2022/2554)</h2>

    <p>El <strong>Reglamento DORA</strong> (Digital Operational Resilience Act, Reglamento UE 2022/2554) es el marco legal europeo que establece los requisitos de resiliencia operacional digital para el sector financiero. Fue adoptado por el Parlamento Europeo y el Consejo de la Unión Europea en noviembre de 2022, publicado en el Diario Oficial de la UE el 27 de diciembre de 2022 y pasó a ser obligatorio el <strong>17 de enero de 2025</strong>.</p>

    <p>DORA responde a una realidad que los reguladores europeos identificaron como riesgo sistémico: el sector financiero depende cada vez más de sistemas tecnológicos complejos y de proveedores TIC externos, y un fallo tecnológico en una entidad relevante puede tener consecuencias en cascada sobre la estabilidad financiera de la UE. Un ciberataque a un proveedor de infraestructura de pagos crítico, por ejemplo, puede paralizar simultáneamente a cientos de entidades financieras que comparten ese proveedor.</p>

    <p>A diferencia de muchas directivas europeas, DORA es un <strong>Reglamento</strong> de aplicación directa en todos los estados miembros, sin necesidad de transposición nacional. Esto significa que sus requisitos son idénticos para una entidad financiera española, francesa o alemana: no hay margen para interpretaciones nacionales divergentes. Los estándares técnicos de implementación (RTS e ITS) desarrollados por las Autoridades Supervisoras Europeas (EBA, ESMA, EIOPA) completan el marco normativo con requisitos técnicos específicos.</p>

    <p>En su alcance, DORA cubre cinco grandes ámbitos: la <strong>gestión de riesgos TIC</strong>, la <strong>gestión y notificación de incidentes</strong>, las <strong>pruebas de resiliencia operacional digital</strong> (incluyendo el TLPT), la <strong>gestión de riesgos de terceros TIC</strong> y el <strong>intercambio de información</strong> sobre ciberamenazas. Estos cinco pilares forman un marco integrado que va mucho más allá de las obligaciones de ciberseguridad preexistentes.</p>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Necesitas cumplir con DORA?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Diagnóstico gratuito en 24 horas. Sin compromiso.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Hablar con un experto →</Link>
    </div>

    <h2 id="a-quien-aplica">¿A quién aplica DORA? Entidades financieras e ICT providers</h2>

    <p>El ámbito de aplicación de DORA es uno de los más amplios de la regulación financiera europea. El artículo 2 del Reglamento enumera 21 tipos de entidades sujetas a sus requisitos:</p>

    <ul>
      <li>Entidades de crédito (bancos)</li>
      <li>Empresas de inversión</li>
      <li>Entidades de pago e instituciones de dinero electrónico</li>
      <li>Gestoras de fondos de inversión alternativa (GFIA) y SGIIC</li>
      <li>Empresas de seguros y reaseguros</li>
      <li>Fondos de pensiones de empleo</li>
      <li>Agencias de calificación crediticia</li>
      <li>Plataformas de negociación e infraestructuras de mercado</li>
      <li>Repositorios de operaciones</li>
      <li>Proveedores de servicios de criptoactivos (bajo MiCA)</li>
      <li>Plataformas de financiación participativa (crowdfunding)</li>
      <li>Proveedores de servicios de información</li>
    </ul>

    <p>Además de las entidades financieras en sentido estricto, DORA incluye a los <strong>proveedores TIC críticos</strong> que les prestan servicios. Estos proveedores —que pueden ser empresas de cloud computing, plataformas SaaS financieras, proveedores de centros de datos o empresas de software para entidades financieras— pueden ser designados por las ESAs como "críticos" y quedar sujetos a un <strong>régimen de supervisión directa</strong> por parte de las autoridades europeas, con inspecciones, requerimientos de información y sanciones directas.</p>

    <p>La norma incluye un mecanismo de proporcionalidad: las microempresas (menos de 10 empleados y menos de 2 millones de euros de volumen de negocio) están sujetas a una versión simplificada de los requisitos. Sin embargo, la mayoría de las entidades financieras relevantes quedan fuera de esta excepción.</p>

    <h2 id="cinco-pilares">Los 5 pilares de DORA</h2>

    <p>DORA estructura sus requisitos en torno a cinco pilares fundamentales que deben implantarse de forma integrada:</p>

    <p><strong>Pilar 1 — Gestión de riesgos TIC:</strong> las entidades deben disponer de un marco de gestión de riesgos TIC robusto, con una estrategia de resiliencia digital aprobada por el órgano de dirección, políticas de seguridad de la información, gestión de activos TIC, protección y prevención, detección de anomalías, respuesta y recuperación, y comunicación. Este pilar es el más cercano a lo que exige ISO 27001 en términos de gestión de riesgos de seguridad.</p>

    <p><strong>Pilar 2 — Gestión y notificación de incidentes TIC:</strong> las entidades deben clasificar los incidentes TIC según criterios armonizados a nivel europeo (definidos en los RTS de la EBA) y notificar los incidentes graves a sus supervisores nacionales dentro de plazos estrictos: notificación inicial en 4 horas, informe intermedio en 72 horas e informe final en un mes. La gestión de incidentes debe estar formalizada en procedimientos documentados y probados.</p>

    <p><strong>Pilar 3 — Pruebas de resiliencia operacional digital:</strong> DORA exige un programa continuo de pruebas que incluye evaluaciones de vulnerabilidad, pruebas de seguridad de aplicaciones, revisiones de configuración y, para las entidades más significativas, pruebas TLPT (Threat-Led Penetration Testing) basadas en el marco TIBER-EU. Las pruebas TLPT son ejercicios de ataque realistas realizados por equipos externos especializados con conocimiento del adversario.</p>

    <p><strong>Pilar 4 — Gestión de riesgos de terceros TIC:</strong> es posiblemente el pilar más exigente operativamente. Las entidades deben identificar y gestionar todos sus proveedores TIC, clasificarlos por criticidad, disponer de contratos con cláusulas obligatorias definidas por DORA (incluyendo SLAs, derechos de auditoría, planes de salida), realizar due diligence antes de contratar y monitorizar continuamente el riesgo de los proveedores críticos. La concentración de riesgo en pocos proveedores TIC es un foco especial de supervisión.</p>

    <p><strong>Pilar 5 — Intercambio de información:</strong> DORA fomenta la creación de acuerdos voluntarios de intercambio de información sobre ciberamenazas e inteligencia de amenazas entre entidades financieras. Este intercambio, cuando se produce bajo los mecanismos previstos por DORA, no genera responsabilidades legales adicionales para las entidades participantes.</p>

    <h2 id="requisitos">Principales requisitos de DORA</h2>

    <p>Más allá de los cinco pilares, DORA impone requisitos concretos que toda entidad en su ámbito debe implementar:</p>

    <p><strong>Gobernanza TIC:</strong> el órgano de dirección (consejo de administración o equivalente) es directamente responsable de la gestión del riesgo TIC. No puede delegarse completamente en el CIO o el CISO. Los miembros del órgano de dirección deben mantener conocimientos y capacidades actualizadas en riesgos TIC y participar activamente en la supervisión del marco de gestión de riesgos.</p>

    <p><strong>Clasificación de activos TIC:</strong> todas las entidades deben mantener un inventario actualizado de sus activos TIC (hardware, software, aplicaciones, datos) y clasificarlos según su criticidad para los procesos de negocio.</p>

    <p><strong>Continuidad de negocio TIC:</strong> las entidades deben disponer de políticas y planes de continuidad específicos para las TIC, con objetivos de tiempo de recuperación (RTO) y punto de recuperación (RPO) definidos para los sistemas críticos, probados al menos anualmente.</p>

    <p><strong>Pruebas anuales obligatorias:</strong> todas las entidades deben realizar pruebas de sus sistemas TIC al menos anualmente, incluyendo análisis de vulnerabilidades, pruebas de penetración básicas y revisiones de configuración. Las entidades significativas están obligadas adicionalmente a realizar TLPT cada 3 años.</p>

    <p><strong>Gestión de proveedores TIC críticos:</strong> los contratos con proveedores TIC que soportan funciones críticas deben incluir cláusulas mínimas sobre niveles de servicio, auditoría, seguridad de los datos, notificación de incidentes y planes de salida. La entidad debe ser capaz de terminar el contrato sin comprometer la continuidad de sus servicios.</p>

    <h2 id="dora-vs-nis2">DORA vs NIS2: diferencias clave</h2>

    <p>La confusión entre DORA y NIS2 es frecuente, especialmente entre entidades financieras que se preguntan qué norma deben aplicar. La respuesta es relativamente clara:</p>

    <p><strong>NIS2</strong> (Directiva UE 2022/2555, transpuesta en España mediante la Ley de Ciberseguridad) es una directiva de ciberseguridad de alcance horizontal que cubre sectores esenciales e importantes: energía, transporte, sanidad, infraestructuras digitales, agua, administración pública, servicios postales y sector financiero. Su nivel de prescripción es relativamente general.</p>

    <p><strong>DORA</strong> es un Reglamento específico para el sector financiero con un nivel de detalle y prescripción mucho mayor que NIS2. Regula no solo la ciberseguridad sino la resiliencia operacional digital en su conjunto: gestión de riesgos TIC, continuidad, pruebas de resiliencia, gestión de proveedores y notificación de incidentes con plazos y formatos específicos.</p>

    <p>El principio de <strong>lex specialis</strong> resuelve el solapamiento: las entidades financieras sujetas a DORA están exentas de los requisitos equivalentes de NIS2, dado que DORA establece normas más específicas y exigentes. Sin embargo, existen áreas donde ambas normas pueden coexistir, y la planificación del cumplimiento debe tener en cuenta ambas normativas para identificar sinergias y evitar duplicidades.</p>

    <p>Si quieres profundizar en NIS2 y su impacto en tu organización, puedes consultar nuestro artículo sobre <Link to="/nis2">NIS2 para empresas españolas</Link> en la sección de certificaciones (próximamente también disponible en el blog: que-es-nis2-directiva.html).</p>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿DORA, NIS2 o ambas te aplican?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Te ayudamos a identificarlo y a diseñar la hoja de ruta más eficiente.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Hablar con un experto →</Link>
    </div>

    <h2 id="fechas">Fechas clave: DORA ya es obligatorio desde enero de 2025</h2>

    <p>El calendario regulatorio de DORA ha seguido un proceso escalonado que conviene conocer para entender el contexto actual de cumplimiento:</p>

    <ul>
      <li><strong>27 de diciembre de 2022:</strong> publicación del Reglamento DORA (UE 2022/2554) en el Diario Oficial de la UE.</li>
      <li><strong>16 de enero de 2023:</strong> entrada en vigor del Reglamento DORA (20 días tras su publicación).</li>
      <li><strong>2023-2024:</strong> las Autoridades Supervisoras Europeas (EBA, ESMA, EIOPA) desarrollaron los estándares técnicos de regulación (RTS) e implementación (ITS) que concretan los requisitos técnicos de DORA en materia de gestión de riesgos TIC, clasificación de incidentes, pruebas TLPT y requisitos contractuales para proveedores TIC.</li>
      <li><strong>17 de enero de 2025:</strong> fecha de aplicación de DORA. A partir de este día, todas las entidades en su ámbito deben cumplir íntegramente con todos los requisitos del Reglamento y sus estándares técnicos. Este es el momento en que el incumplimiento genera responsabilidades sancionables.</li>
    </ul>

    <p>En la práctica, muchas entidades financieras están aún en proceso de implementación completa de todos los requisitos, especialmente en los ámbitos más complejos: la gestión exhaustiva de proveedores TIC y las pruebas TLPT. Los supervisores nacionales (Banco de España, CNMV, DGSFP en España) están llevando a cabo supervisiones iniciales con un enfoque orientado a evaluar el estado de implementación y los planes de cumplimiento, más que a aplicar sanciones inmediatas. Sin embargo, este período de gracia informal es limitado y las entidades deben avanzar con urgencia.</p>

    <h2 id="sanciones">Sanciones por incumplimiento de DORA</h2>

    <p>DORA establece un régimen sancionador que, aunque deja margen a los estados miembros para su desarrollo normativo nacional, incluye elementos directamente aplicables por las autoridades supervisoras europeas y nacionales:</p>

    <p>Para las <strong>entidades financieras</strong>, las sanciones por incumplimiento de DORA son competencia de los supervisores nacionales (Banco de España para entidades de crédito, CNMV para empresas de inversión, DGSFP para seguros). El Reglamento exige que los estados miembros garanticen sanciones efectivas, proporcionales y disuasorias, y establece que las multas deben poder alcanzar cantidades significativas en función del tipo de infracción y del tamaño de la entidad.</p>

    <p>Para los <strong>proveedores TIC críticos designados</strong> que quedan bajo supervisión directa de las ESAs, el Reglamento establece un régimen más detallado: multas de hasta el <strong>1% de su facturación media diaria mundial</strong> durante el período de incumplimiento, con un máximo de 5 millones de euros para multas individuales. Adicionalmente, las ESAs pueden imponer <strong>multas periódicas coercitivas</strong> de hasta 100.000 euros por día durante hasta 6 meses para forzar el cumplimiento.</p>

    <p>Más allá de las multas, las sanciones potenciales incluyen la prohibición de prestar determinados servicios, la restricción de actividades, la publicidad del incumplimiento (naming and shaming) y la exigencia de planes de remediación vinculantes con plazos supervisados. Para las entidades que compiten en mercados regulados, la sola publicidad de una sanción por incumplimiento de DORA tiene un impacto reputacional que puede superar el valor económico de la multa.</p>

    <h2 id="hoja-de-ruta">Cómo cumplir con DORA: hoja de ruta</h2>

    <p>El cumplimiento de DORA no es un proyecto puntual: es un programa de transformación de la gestión del riesgo TIC que requiere planificación estructurada y un enfoque por fases. Una hoja de ruta típica incluye las siguientes etapas:</p>

    <ol>
      <li><strong>Diagnóstico de madurez:</strong> evaluación del estado actual de la organización frente a los cinco pilares de DORA. Identificación de brechas prioritarias y estimación del esfuerzo de remediación. El diagnóstico debe incluir una revisión de los contratos vigentes con proveedores TIC para identificar las cláusulas que deben actualizarse.</li>
      <li><strong>Gobernanza y mandato:</strong> obtención del compromiso formal del órgano de dirección, asignación de responsabilidades (rol de CISO, comité de riesgos TIC, función de gestión de proveedores) y aprobación de la política de gestión de riesgos TIC.</li>
      <li><strong>Marco de gestión de riesgos TIC:</strong> implementación o actualización del marco de gestión de riesgos TIC, incluyendo inventario de activos, metodología de evaluación de riesgos, controles de protección y detección, y procedimientos de respuesta y recuperación. Si la entidad ya tiene ISO 27001, este pilar es el más avanzado.</li>
      <li><strong>Gestión de incidentes:</strong> diseño e implementación del proceso de clasificación y notificación de incidentes TIC según los criterios armonizados de los RTS, con procedimientos, responsables y plantillas de notificación preparadas para activarse dentro de los plazos regulatorios.</li>
      <li><strong>Programa de pruebas:</strong> diseño del plan anual de pruebas de resiliencia, incluyendo análisis de vulnerabilidades, pruebas de penetración y, si aplica, planificación del TLPT. Documentación de resultados y planes de remediación.</li>
      <li><strong>Gestión de proveedores TIC:</strong> inventario completo de proveedores TIC, clasificación por criticidad, revisión contractual y actualización de cláusulas, procesos de due diligence para nuevos proveedores y monitorización continua de los críticos.</li>
      <li><strong>Mejora continua y reporte a supervisor:</strong> implementación de indicadores de seguimiento del programa DORA, reporting interno al órgano de dirección y preparación para las supervisiones de las autoridades competentes.</li>
    </ol>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Necesitas cumplir con DORA?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Diagnóstico gratuito en 24 horas. Sin compromiso.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Solicitar diagnóstico gratuito →</Link>
    </div>

    <h2 id="faq">Preguntas frecuentes sobre DORA</h2>

    <div className="faq-article">
      <div className="faq-article-item">
        <div className="faq-article-q">¿DORA aplica a mi empresa?</div>
        <div className="faq-article-a">DORA aplica a las entidades financieras reguladas en la UE: bancos, empresas de inversión, entidades de pago, entidades de dinero electrónico, gestoras de fondos, aseguradoras, reaseguradoras, fondos de pensiones, agencias de calificación crediticia, plataformas de crowdfunding, proveedores de servicios de criptoactivos y los proveedores TIC críticos que les prestan servicios. Si tu empresa es alguna de estas entidades o les presta servicios tecnológicos que soportan funciones críticas, DORA muy probablemente te aplica. El diagnóstico es el primer paso para confirmarlo.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿DORA es lo mismo que NIS2?</div>
        <div className="faq-article-a">No. DORA (Reglamento UE 2022/2554) es una norma específica para el sector financiero con requisitos mucho más detallados y prescriptivos en resiliencia operacional digital. NIS2 es una directiva de ciberseguridad de aplicación horizontal que cubre sectores críticos más ampliamente. Las entidades financieras sujetas a DORA están exentas de NIS2 en las materias cubiertas por DORA, según el principio lex specialis. Existen, sin embargo, áreas de solapamiento que conviene mapear en el diseño del programa de cumplimiento.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Cuándo entró en vigor DORA?</div>
        <div className="faq-article-a">El Reglamento DORA (UE 2022/2554) se publicó en el Diario Oficial de la UE el 27 de diciembre de 2022 y entró en vigor formalmente el 16 de enero de 2023. Sin embargo, su aplicación obligatoria —la fecha a partir de la cual las entidades deben cumplir íntegramente todos sus requisitos y quedan expuestas a sanciones— fue el 17 de enero de 2025, tras un período de transición de 24 meses para la implementación.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Qué sanciones tiene el incumplimiento de DORA?</div>
        <div className="faq-article-a">Las sanciones varían según el tipo de entidad y el supervisor competente. Para las entidades financieras reguladas en España, los supervisores nacionales (Banco de España, CNMV, DGSFP) pueden imponer multas significativas y medidas correctivas. Para los proveedores TIC críticos bajo supervisión directa de las ESAs, las multas pueden alcanzar hasta el 1% de su facturación media diaria mundial, con multas periódicas coercitivas de hasta 100.000 euros diarios. Adicionalmente, las sanciones no económicas (restricciones de actividad, publicidad del incumplimiento) pueden tener impacto reputacional severo.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Cuánto tiempo lleva cumplir con DORA?</div>
        <div className="faq-article-a">El tiempo depende de la madurez de la entidad y de su tamaño. Para una entidad mediana que parte de cero, el cumplimiento integral puede llevar entre 6 y 18 meses. Con el acompañamiento de una consultora especializada y aprovechando sinergias con marcos previos (ISO 27001, ISO 22301), el proceso puede acelerarse a 4-6 meses para los requisitos más críticos. Lo importante es comenzar por un diagnóstico de madurez que priorice las brechas más urgentes y permita demostrar ante el supervisor un plan de cumplimiento estructurado.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>¿Tu entidad necesita cumplir con DORA?</h3>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Diagnóstico gratuito · Sin compromiso · Respuesta en 24 horas</p>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar diagnóstico gratuito →</Link>
    </div>

    <div style={{marginTop:'48px',paddingTop:'32px',borderTop:'1px solid var(--border)'}}>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'var(--text-muted)'}}>Artículos relacionados:</p>
      <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginTop:'12px'}}>
        <Link to="/dora-entidades-financieras" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>DORA para entidades financieras →</Link>
        <Link to="/dora" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Cumplimiento DORA con Avson →</Link>
        <Link to="/nis2" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>NIS2 para empresas →</Link>
      </div>
    </div>

  </div>
</article></>
  )
}
