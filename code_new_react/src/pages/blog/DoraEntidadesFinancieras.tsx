import { Link } from 'react-router-dom'

export default function DoraEntidadesFinancieras() {
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
      <span style={{color:'var(--navy)',fontWeight:'500'}}>DORA para Entidades Financieras</span>
    </nav>
  </div>
</div>


<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">DORA · Entidades Financieras · Guía práctica 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        DORA para entidades financieras: todo lo que necesitas saber para cumplir.
      </h1>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        Bancos, aseguradoras, fintech y gestoras tienen obligaciones concretas bajo DORA desde enero de 2025. Esta guía explica qué exige la norma a cada tipo de entidad, qué son las pruebas TLPT y cómo estructurar el cumplimiento.
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
        <li><a href="#alcance">DORA y las entidades financieras: alcance real</a></li>
        <li><a href="#tipos">Tipos de entidades afectadas por DORA</a></li>
        <li><a href="#bancos">Requisitos concretos para bancos y aseguradoras</a></li>
        <li><a href="#fintech">Requisitos para fintech y proveedores TIC críticos</a></li>
        <li><a href="#tlpt">Las pruebas TLPT</a></li>
        <li><a href="#terceros">Gestión de riesgos de terceros en DORA</a></li>
        <li><a href="#incidentes">Notificación de incidentes ICT bajo DORA</a></li>
        <li><a href="#hoja-de-ruta">Hoja de ruta de cumplimiento para una entidad financiera</a></li>
        <li><a href="#faq">Preguntas frecuentes</a></li>
      </ol>
    </div>

    <h2 id="alcance">DORA y las entidades financieras: alcance real</h2>

    <p>El <Link to="/que-es-dora-reglamento">Reglamento DORA</Link> (UE 2022/2554) establece desde el 17 de enero de 2025 un conjunto de obligaciones de resiliencia operacional digital que afectan a la práctica totalidad del ecosistema financiero europeo. Sin embargo, no todas las entidades tienen las mismas obligaciones: DORA aplica el principio de <strong>proporcionalidad</strong> para adaptar la intensidad de los requisitos al tamaño, perfil de riesgo y relevancia sistémica de cada entidad.</p>

    <p>La norma distingue, en términos generales, entre entidades de mayor significación sistémica —que deben cumplir el conjunto completo de requisitos, incluyendo las exigentes pruebas TLPT— y entidades más pequeñas o de menor impacto sistémico, que pueden acogerse a un <strong>marco simplificado de gestión de riesgos TIC</strong> definido en el artículo 16 de DORA. Este marco simplificado aplica a microempresas (menos de 10 empleados y menos de 2 millones de euros de volumen de negocio) y a determinadas categorías de entidades menores.</p>

    <p>En la práctica, la mayoría de las entidades financieras con actividad real en el mercado español quedan fuera del marco simplificado y están sujetas al conjunto completo de requisitos. Esto incluye a bancos de cualquier tamaño, empresas de seguros, gestoras de fondos, entidades de pago digitales y la gran mayoría de fintech con licencia regulatoria. El dato relevante no es el tamaño absoluto de la entidad, sino si está regulada y si sus riesgos TIC pueden tener impacto en sus clientes o en la estabilidad del sistema financiero.</p>

    <p>Para los <strong>proveedores TIC</strong> que sirven a estas entidades, DORA tiene también un impacto directo aunque diferente. En primer lugar, los proveedores deben adaptarse a los requisitos contractuales que DORA impone a las entidades financieras para sus contratos con proveedores TIC que soporten funciones críticas. En segundo lugar, los proveedores TIC de mayor relevancia sistémica pueden ser designados "críticos" por las Autoridades Supervisoras Europeas y quedar sujetos a supervisión directa.</p>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Tu entidad necesita cumplir con DORA?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Diagnóstico gratuito en 24 horas. Sin compromiso.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Hablar con un experto →</Link>
    </div>

    <h2 id="tipos">Tipos de entidades financieras afectadas por DORA</h2>

    <p>El artículo 2 de DORA enumera 21 tipos de entidades sujetas al Reglamento. Para el mercado español, los tipos más relevantes son:</p>

    <p><strong>Entidades supervisadas por el Banco de España:</strong> entidades de crédito (bancos, cajas de ahorros, cooperativas de crédito, establecimientos financieros de crédito), entidades de pago (incluyendo las que operan bajo PSD2), entidades de dinero electrónico y sucursales en España de entidades financieras de terceros países.</p>

    <p><strong>Entidades supervisadas por la CNMV:</strong> empresas de servicios de inversión (ESI), gestoras de instituciones de inversión colectiva (SGIIC), gestoras de fondos de pensiones en su función inversora, plataformas de negociación (mercados regulados, sistemas multilaterales de negociación), entidades de contrapartida central, depositarios centrales de valores, proveedores de servicios de criptoactivos bajo MiCA y plataformas de financiación participativa (crowdfunding) reguladas.</p>

    <p><strong>Entidades supervisadas por la DGSFP:</strong> empresas de seguros de vida y no vida, reaseguradoras, mutualidades de previsión social de tamaño relevante, y fondos de pensiones de empleo.</p>

    <p><strong>Proveedores TIC críticos:</strong> aunque no son entidades financieras en sentido estricto, los proveedores de servicios de tecnología que prestan servicios TIC que soportan funciones críticas o importantes de las entidades anteriores quedan sujetos al régimen contractual de DORA. Los que sean designados "críticos" por EBA, ESMA o EIOPA quedan sujetos adicionalmente al marco de supervisión directa de las ESAs.</p>

    <h2 id="bancos">Requisitos concretos para bancos y aseguradoras</h2>

    <p>Las entidades de crédito y las empresas de seguros son las entidades con mayor madurez regulatoria previa en materia TIC, pero DORA supone aun así un salto significativo en la formalización y el rigor de los requisitos. Los puntos donde la brecha suele ser mayor incluyen:</p>

    <p><strong>Gobernanza TIC reforzada:</strong> DORA exige que el órgano de dirección —el consejo de administración— sea directamente responsable de la gestión del riesgo TIC, no solo de supervisarlo. Los consejeros deben mantener conocimientos actualizados en riesgos TIC y participar activamente en la revisión del marco. En muchos bancos medianos y aseguradoras, la responsabilidad TIC ha residido históricamente en niveles directivos intermedios sin suficiente supervisión del consejo.</p>

    <p><strong>Marco de gestión de riesgos TIC integrado:</strong> los bancos deben disponer de un marco completo que incluya: estrategia de resiliencia digital aprobada por el consejo, política de seguridad de la información, gestión de activos TIC con inventario actualizado, metodología de análisis y evaluación de riesgos TIC, controles de protección y prevención, capacidades de detección y respuesta, y funciones de recuperación y comunicación. La mayoría de los bancos españoles cuentan con elementos de este marco bajo la supervisión del Banco Central Europeo (BCE) y el Banco de España, pero DORA requiere una formalización más explícita y documentada.</p>

    <p><strong>Continuidad TIC formalizada:</strong> los planes de continuidad de negocio TIC deben definir RTOs y RPOs para todos los sistemas que soportan funciones críticas, y deben probarse al menos anualmente. Los resultados de las pruebas y los planes de remediación deben documentarse y comunicarse al órgano de dirección.</p>

    <p><strong>Registro de todos los acuerdos con proveedores TIC:</strong> DORA exige mantener un registro completo y actualizado de todos los acuerdos contractuales con proveedores TIC, clasificados por criticidad. Este registro debe estar disponible para el supervisor en cualquier momento.</p>

    <h2 id="fintech">Requisitos para fintech y proveedores TIC críticos</h2>

    <p>Las fintech y los neobancos presentan un perfil diferente al de la banca tradicional: suelen ser organizaciones más ágiles, con mayor proporción de servicios en la nube, menor infraestructura propia y mayor dependencia de proveedores TIC externos. Esto las hace vulnerables a riesgos específicos que DORA aborda directamente.</p>

    <p>Para las fintech con licencia de entidad de pago o entidad de dinero electrónico, DORA se añade a las obligaciones de ciberseguridad de PSD2 (directamente aplicables) y a las guías de EBA sobre gestión de riesgos TIC y de seguridad. La diferencia es que DORA tiene carácter de Reglamento directamente aplicable, con requisitos más específicos y sanciones más claras.</p>

    <p>El punto más crítico para las fintech en materia DORA es la <strong>gestión de riesgos de terceros TIC</strong>. Una fintech típica opera sobre una pila tecnológica que incluye proveedores de cloud (AWS, Azure, GCP), plataformas de pagos (Stripe, Adyen), proveedores de KYC, gestores de claves criptográficas y docenas de APIs de terceros. DORA exige que cada uno de estos proveedores sea identificado, clasificado por criticidad, y que los contratos con los críticos incluyan las cláusulas obligatorias del Reglamento. Para una fintech que gestiona estos contratos informalmente (a través de condiciones generales de servicio del proveedor), la adaptación puede ser un proceso significativo.</p>

    <p>Los <strong>proveedores TIC que sirven a entidades financieras</strong> —empresas de software financiero, integradores de sistemas, proveedores de BPO tecnológico— deben entender que DORA les impacta de forma directa: sus clientes financieros exigirán actualizar los contratos para incluir las cláusulas obligatorias de DORA, y deberán estar preparados para auditorías y para proporcionar información sobre sus controles de seguridad y continuidad. Los proveedores que no se adapten a estas exigencias corren el riesgo de perder contratos con clientes financieros.</p>

    <h2 id="tlpt">Las pruebas TLPT (Threat-Led Penetration Testing)</h2>

    <p>Las <strong>TLPT (Threat-Led Penetration Testing)</strong> son el elemento más exigente y novedoso del programa de pruebas de DORA. Se trata de ejercicios avanzados de ataque realista realizados por equipos externos especializados (Red Team) sobre los sistemas en producción de la entidad, con autorización del supervisor competente y basados en inteligencia de amenazas relevante para el sector.</p>

    <p>Las TLPT se distinguen de las pruebas de penetración convencionales en varios aspectos fundamentales. En primer lugar, se ejecutan sobre los <strong>sistemas en producción real</strong>, no sobre entornos de test o sandbox. En segundo lugar, el equipo atacante (Red Team externo) recibe información de inteligencia sobre las amenazas más relevantes para la entidad (procedente de fuentes abiertas, del supervisor y de información de inteligencia comercial), de forma que sus ataques simulan el comportamiento de adversarios reales y sofisticados. En tercer lugar, el equipo defensor (Blue Team interno) opera sin conocimiento previo de que el ejercicio está ocurriendo, para simular las condiciones reales de un ataque.</p>

    <p>Las TLPT están basadas en el marco <strong>TIBER-EU</strong> (Threat Intelligence-Based Ethical Red-Teaming), desarrollado por el Banco Central Europeo y adoptado por varios bancos centrales europeos, incluyendo el Banco de España. Las entidades que ya han realizado ejercicios TIBER-EU previos tienen una ventaja significativa, ya que la metodología es compatible con los requisitos TLPT de DORA.</p>

    <p>En cuanto a la obligatoriedad, las TLPT son exigidas a las <strong>entidades financieras más significativas</strong> —en términos de tamaño, perfil de riesgo e impacto sistémico—, determinadas por los supervisores nacionales en coordinación con las ESAs. Para estas entidades, la frecuencia mínima es cada <strong>3 años</strong>. Las entidades no sujetas a TLPT deben igualmente realizar pruebas de penetración estándar al menos anualmente, como parte del programa básico de pruebas que DORA exige a todas las entidades.</p>

    <p>El proceso de una TLPT bajo DORA incluye tres fases: preparación (definición del alcance, selección del proveedor Red Team, notificación al supervisor y obtención de autorización), ejecución (la prueba propiamente dicha, que puede durar varias semanas) y cierre (elaboración del informe de resultados, plan de remediación y comunicación al supervisor). Los resultados y el plan de remediación deben enviarse al supervisor competente dentro del plazo establecido.</p>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Necesitas preparar tu entidad para DORA?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Diseñamos e implementamos el programa de cumplimiento DORA adaptado a tu entidad.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Solicitar información →</Link>
    </div>

    <h2 id="terceros">Gestión de riesgos de terceros en DORA</h2>

    <p>La gestión de riesgos de terceros TIC es, junto con las TLPT, el área donde las entidades financieras encuentran mayor dificultad de implementación. DORA introduce un régimen muy detallado que va mucho más allá de lo que exigían las guías previas de EBA y BCE.</p>

    <p>El punto de partida es el <strong>registro de acuerdos contractuales con proveedores TIC</strong>. Todas las entidades deben mantener un registro completo y actualizado de todos sus contratos con proveedores TIC, incluyendo: identificación del proveedor, descripción del servicio, clasificación de la función soportada (crítica/importante o no), tipo de datos accedidos y país de localización del servicio. Este registro debe estar disponible para el supervisor.</p>

    <p>Para los contratos que soportan <strong>funciones críticas o importantes</strong>, DORA establece un conjunto de cláusulas mínimas obligatorias que deben incluirse en los contratos (artículo 30 de DORA). Estas cláusulas incluyen: descripción precisa de los servicios y niveles de servicio (SLAs) con objetivos cuantificados de disponibilidad; derechos de auditoría e inspección del cliente, sus auditores y el supervisor sobre el proveedor; obligaciones de seguridad de la información alineadas con los estándares del cliente; procedimientos de notificación al cliente de incidentes TIC que puedan afectar a los servicios; obligaciones de continuidad del servicio en caso de interrupción; y cláusulas de salida con asistencia a la migración para garantizar la terminación ordenada del contrato sin comprometer la continuidad.</p>

    <p>Muchos contratos vigentes entre entidades financieras y sus proveedores TIC no incluyen todas estas cláusulas, especialmente los contratos con grandes proveedores de cloud y SaaS que operan bajo condiciones generales estandarizadas. Negociar la actualización de estos contratos —con proveedores tan poderosos como Microsoft Azure, AWS o Salesforce— es uno de los retos prácticos más complejos del cumplimiento DORA. Las entidades deben documentar sus esfuerzos de negociación y, en los casos en que el proveedor no acepta las cláusulas mínimas, escalar al supervisor con la documentación del intento.</p>

    <p>DORA también regula la <strong>concentración de riesgo en proveedores TIC</strong>. Las entidades deben evaluar y gestionar el riesgo que supone depender de un número reducido de proveedores críticos (por ejemplo, concentración excesiva en un solo proveedor de cloud), y deben tener estrategias de salida y alternativas documentadas.</p>

    <h2 id="incidentes">Notificación de incidentes ICT bajo DORA</h2>

    <p>DORA establece un régimen de clasificación y notificación de incidentes TIC que supone la mayor exigencia operacional en el día a día de las entidades. El régimen es prescriptivo en cuanto a plazos, formatos y canales de notificación, y su incumplimiento puede generar sanciones directas.</p>

    <p>El proceso comienza con la <strong>clasificación del incidente</strong> según los criterios armonizados definidos en los RTS de EBA. Los criterios de clasificación incluyen: número de clientes afectados, duración de la interrupción, impacto geográfico, impacto financiero, criticidad de los servicios afectados y tipo de datos comprometidos. Los incidentes clasificados como "graves" activan el proceso de notificación obligatoria al supervisor.</p>

    <p>El calendario de notificación para incidentes graves es estricto: <strong>notificación inicial</strong> al supervisor dentro de las <strong>4 horas</strong> desde la clasificación del incidente como grave (y en cualquier caso dentro de las 24 horas desde la detección), con la información disponible en ese momento aunque sea incompleta; <strong>informe intermedio</strong> dentro de las <strong>72 horas</strong> desde la notificación inicial, con una evaluación más completa del impacto y las medidas adoptadas; e <strong>informe final</strong> dentro de <strong>un mes</strong> desde la notificación inicial, con el análisis completo de causas raíz, impacto definitivo y medidas de remediación implementadas.</p>

    <p>Para que este proceso funcione bajo presión, las entidades deben tener preparados con antelación: procedimientos internos de escalado y clasificación de incidentes, plantillas de notificación en los formatos requeridos por el supervisor, roles y responsabilidades claramente definidos (quién decide la clasificación, quién notifica, quién autoriza), y canales de comunicación con el supervisor verificados y probados. Las entidades que no han preparado estos mecanismos antes de sufrir un incidente real lo aprenden de la peor manera posible.</p>

    <h2 id="hoja-de-ruta">Hoja de ruta de cumplimiento DORA para una entidad financiera</h2>

    <p>El diseño de una hoja de ruta de cumplimiento DORA debe partir de un diagnóstico honesto del estado actual de la entidad y priorizar las acciones en función del riesgo regulatorio y el esfuerzo de implementación. Una estructura de fases típica para una entidad financiera mediana sería:</p>

    <p><strong>Fase 0 — Diagnóstico de madurez (4-6 semanas):</strong> evaluación del estado actual de los cinco pilares de DORA: gestión de riesgos TIC, gestión de incidentes, pruebas de resiliencia, gestión de terceros e intercambio de información. Priorización de brechas por impacto regulatorio. Revisión del inventario de contratos con proveedores TIC y clasificación preliminar de criticidad. Este diagnóstico es la base para el diseño del programa de cumplimiento.</p>

    <p><strong>Fase 1 — Gobernanza y marco de riesgos TIC (2-3 meses):</strong> aprobación por el consejo de la estrategia de resiliencia digital y la política de gestión de riesgos TIC. Definición del modelo de gobernanza (roles, comités, reporting). Actualización o creación del marco de gestión de riesgos TIC con los componentes exigidos por DORA. Actualización del inventario de activos TIC y su clasificación.</p>

    <p><strong>Fase 2 — Incidentes y pruebas (2-3 meses):</strong> diseño e implementación del proceso de clasificación y notificación de incidentes TIC según los RTS de DORA. Preparación de plantillas y procedimientos de notificación. Diseño del programa anual de pruebas básicas de resiliencia. Realización de las primeras pruebas y documentación de resultados.</p>

    <p><strong>Fase 3 — Gestión de terceros TIC (3-4 meses):</strong> completar el inventario de proveedores TIC y clasificar por criticidad. Revisar todos los contratos con proveedores de funciones críticas e identificar las brechas respecto a las cláusulas obligatorias de DORA. Iniciar negociaciones de actualización contractual. Diseñar el proceso de due diligence y monitorización continua de proveedores críticos.</p>

    <p><strong>Fase 4 — TLPT y madurez avanzada (si aplica, 3-6 meses adicionales):</strong> para las entidades sujetas a TLPT, planificación y ejecución del primer ejercicio DORA-TLPT. Para todas las entidades, implementación de indicadores de seguimiento del programa DORA, reporting al consejo y preparación para la supervisión de las autoridades competentes.</p>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Necesitas tu hoja de ruta DORA?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Diagnóstico gratuito en 24 horas. Sin compromiso.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Solicitar diagnóstico gratuito →</Link>
    </div>

    <h2 id="faq">Preguntas frecuentes sobre DORA para entidades financieras</h2>

    <div className="faq-article">
      <div className="faq-article-item">
        <div className="faq-article-q">¿Qué entidades financieras están obligadas por DORA en España?</div>
        <div className="faq-article-a">En España, están sujetas a DORA todas las entidades reguladas por el Banco de España (bancos, entidades de crédito, entidades de pago, de dinero electrónico), la CNMV (empresas de inversión, gestoras, plataformas de negociación, proveedores de criptoactivos MiCA) y la DGSFP (aseguradoras, reaseguradoras, mutualidades, fondos de pensiones). También aplica a los proveedores TIC que les prestan servicios que soportan funciones críticas o importantes, que deben adaptar sus contratos a los requisitos del Reglamento.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Qué son las pruebas TLPT en DORA?</div>
        <div className="faq-article-a">Las TLPT (Threat-Led Penetration Testing) son pruebas avanzadas de resiliencia basadas en inteligencia de amenazas reales, realizadas por equipos Red Team externos sobre los sistemas en producción de la entidad, con autorización del supervisor. Simulan el comportamiento de adversarios sofisticados reales. Son obligatorias para las entidades financieras más significativas cada 3 años, y los resultados y planes de remediación deben comunicarse al supervisor competente. Se basan en la metodología TIBER-EU del Banco Central Europeo.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Los proveedores tecnológicos de bancos tienen que cumplir DORA?</div>
        <div className="faq-article-a">Sí, pero de formas distintas según su relevancia. Los proveedores TIC que prestan servicios que soportan funciones críticas o importantes de entidades financieras deben aceptar en sus contratos las cláusulas obligatorias que DORA impone (derechos de auditoría, SLAs, notificación de incidentes, planes de salida). Los proveedores designados "críticos" por las ESAs quedan sujetos adicionalmente a supervisión directa. Todos los proveedores que sirven al sector financiero deben revisar sus contratos y prepararse para las exigencias de sus clientes regulados.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Cómo afecta DORA a los contratos con proveedores cloud?</div>
        <div className="faq-article-a">DORA exige que los contratos con proveedores TIC de funciones críticas incluyan cláusulas mínimas: niveles de servicio cuantificados, derechos de auditoría e inspección para la entidad y sus supervisores, requisitos de seguridad de la información, procedimientos de notificación de incidentes al cliente, planes de salida con asistencia a la migración y obligaciones de continuidad de servicio. Los contratos vigentes que no incluyan estas cláusulas deben actualizarse. Negociar con grandes proveedores cloud (AWS, Azure, GCP) es uno de los retos más complejos del cumplimiento DORA.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Cuándo deben hacer las entidades financieras las primeras pruebas DORA?</div>
        <div className="faq-article-a">Todas las entidades sujetas a DORA debían tener un programa de pruebas básicas (análisis de vulnerabilidades, pruebas de penetración estándar) implementado desde el 17 de enero de 2025. Las pruebas TLPT para entidades significativas deben realizarse al menos cada 3 años; las primeras rondas están en curso durante 2025-2026 para las entidades que no realizaron ejercicios TIBER-EU previamente. Los resultados de todas las pruebas deben documentarse y comunicarse al órgano de dirección.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>¿Tu entidad financiera necesita cumplir con DORA?</h3>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Diagnóstico gratuito · Sin compromiso · Respuesta en 24 horas</p>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar diagnóstico gratuito →</Link>
    </div>

    <div style={{marginTop:'48px',paddingTop:'32px',borderTop:'1px solid var(--border)'}}>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'var(--text-muted)'}}>Artículos relacionados:</p>
      <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginTop:'12px'}}>
        <Link to="/que-es-dora-reglamento" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Qué es DORA: guía completa →</Link>
        <Link to="/dora" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Cumplimiento DORA con Avson →</Link>
        <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Hablar con un experto →</Link>
      </div>
    </div>

  </div>
</article></>
  )
}
