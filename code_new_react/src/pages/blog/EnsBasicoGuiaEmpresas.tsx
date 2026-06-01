import { Link } from 'react-router-dom'

export default function EnsBasicoGuiaEmpresas() {
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
    <nav style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>&rsaquo;</span>
      <Link to="/blog" style={{color:'var(--text-muted)',textDecoration:'none'}}>Blog</Link>
      <span style={{margin:'0 8px'}}>&rsaquo;</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>ENS B&aacute;sico: gu&iacute;a completa para pymes</span>
    </nav>
  </div>
</div>

<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">ENS B&aacute;sico &middot; Pymes &middot; Actualizado mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        ENS B&aacute;sico: la gu&iacute;a completa para pymes que quieren licitar con la Administraci&oacute;n.
      </h1>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        Si tu empresa es una pyme tecnol&oacute;gica que quiere acceder a contratos p&uacute;blicos, el ENS B&aacute;sico es probablemente el punto de entrada. Esta gu&iacute;a explica qu&eacute; es, qu&eacute; exige, cu&aacute;nto cuesta y c&oacute;mo conseguirlo en 3-4 meses.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>&#9201; Lectura: 11 minutos</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>&#128197; Actualizado: mayo 2026</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>&#9997;&#65039; Laura S&aacute;nchez &middot; Directora de Consultor&iacute;a GRC</span>
      </div>
    </div>
  </div>
</section>

<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <h2>Qu&eacute; es el ENS B&aacute;sico y por qu&eacute; es el punto de entrada para las pymes</h2>

    <p>El <strong>ENS B&aacute;sico</strong> &mdash;o categor&iacute;a B&aacute;sica del Esquema Nacional de Seguridad&mdash; es el nivel de certificaci&oacute;n ENS que aplica a los sistemas de informaci&oacute;n cuyo compromiso tendr&iacute;a un impacto limitado sobre los servicios o los ciudadanos. Es el nivel de entrada del ENS, el menos exigente de los tres (B&aacute;sico, Medio y Alto), y es el que aplica a la mayor&iacute;a de las peque&ntilde;as y medianas empresas que trabajan con la Administraci&oacute;n P&uacute;blica espa&ntilde;ola en servicios tecnol&oacute;gicos de apoyo.</p>

    <p>Para una pyme tecnol&oacute;gica que se plantea por primera vez vender servicios al sector p&uacute;blico, el ENS B&aacute;sico es habitualmente la primera certificaci&oacute;n que necesita. Si tu empresa desarrolla software para la administraci&oacute;n local, presta servicios de soporte IT a entidades p&uacute;blicas, ofrece soluciones en la nube para organismos p&uacute;blicos o gestiona datos de la Administraci&oacute;n con car&aacute;cter auxiliar, es probable que la categor&iacute;a B&aacute;sica sea la que te aplica.</p>

    <p>El ENS B&aacute;sico no es un requisito menor: exige implementar un conjunto significativo de controles de seguridad organizativos y t&eacute;cnicos, documentarlos correctamente y demostrar en una auditor&iacute;a que funcionan en la pr&aacute;ctica. La diferencia respecto a las categor&iacute;as superiores est&aacute; en el nivel de exigencia de cada control, no en la ausencia de controles. Una empresa con el ENS B&aacute;sico ha demostrado a sus clientes p&uacute;blicos que tiene una gesti&oacute;n de la seguridad de la informaci&oacute;n seria y sistem&aacute;tica.</p>

    <h2>&iquest;Tu empresa necesita ENS B&aacute;sico o una categor&iacute;a superior? C&oacute;mo saberlo</h2>

    <p>La categor&iacute;a ENS que te aplica depende del impacto que tendr&iacute;a un incidente de seguridad en los sistemas de informaci&oacute;n que van a estar en el alcance de la certificaci&oacute;n. El proceso formal es un an&aacute;lisis de valoraci&oacute;n de activos en cinco dimensiones (confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad). El resultado determina la categor&iacute;a.</p>

    <p>Como gu&iacute;a orientativa &mdash;no sustituta del an&aacute;lisis formal&mdash; la categor&iacute;a B&aacute;sica suele aplicar cuando:</p>

    <ul>
      <li>Tu empresa procesa datos de la Administraci&oacute;n que no son especialmente sensibles (datos de gesti&oacute;n administrativa, informaci&oacute;n p&uacute;blica, datos estad&iacute;sticos anonimizados).</li>
      <li>Una interrupci&oacute;n de tu servicio no afectar&iacute;a a la prestaci&oacute;n de servicios esenciales a ciudadanos (son servicios de apoyo interno, no servicios de cara al ciudadano).</li>
      <li>Tu empresa act&uacute;a como proveedor auxiliar de una entidad p&uacute;blica, no como proveedor de infraestructura cr&iacute;tica.</li>
      <li>Los datos personales que procesas no son de categor&iacute;as especiales (salud, ideolog&iacute;a, datos biom&eacute;tricos).</li>
    </ul>

    <p>Si alguna de estas condiciones no se cumple, es posible que necesites la categor&iacute;a Media. La categor&iacute;a Alta queda reservada para sistemas de infraestructura cr&iacute;tica, defensa nacional y servicios esenciales del Estado.</p>

    <p>Lo m&aacute;s prudente es no asumir la categor&iacute;a sin un an&aacute;lisis: hay pymes que asumen B&aacute;sico cuando la categor&iacute;a correcta es Media (lo que puede provocar que la auditor&iacute;a rechace el alcance) y empresas que asumen Media cuando B&aacute;sico ser&iacute;a suficiente (desperdiciando recursos en controles innecesarios).</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>&iquest;ENS B&aacute;sico o Medio? Te lo decimos gratis en 24 horas. Avson GRC atiende pymes de toda Espa&ntilde;a en formato presencial y remoto.</span>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Consultar categor&iacute;a &rarr;</Link>
    </div>

    <h2>Requisitos del ENS B&aacute;sico: los controles que debe implementar tu empresa</h2>

    <p>El Anexo II del RD 311/2022 define el cat&aacute;logo de medidas de seguridad del ENS. Para la categor&iacute;a B&aacute;sica, las medidas se aplican en su nivel bajo (L), que es el menos exigente de los tres niveles (L, M, H). Aun as&iacute;, el conjunto de controles requerido es sustancial:</p>

    <h3>Marco organizativo</h3>
    <p>La organizaci&oacute;n debe tener una <strong>Pol&iacute;tica de Seguridad de la Informaci&oacute;n</strong> aprobada por la direcci&oacute;n, una normativa de seguridad interna (conjunto de normas que regulan el uso de los sistemas por parte del personal), y un conjunto de procedimientos de seguridad que desarrollen la pol&iacute;tica: procedimiento de gesti&oacute;n de incidentes, procedimiento de copias de seguridad, procedimiento de control de accesos, etc. La pol&iacute;tica debe estar firmada por el m&aacute;ximo responsable de la organizaci&oacute;n y revisada al menos una vez al a&ntilde;o.</p>

    <h3>An&aacute;lisis de riesgos</h3>
    <p>El ENS B&aacute;sico exige un an&aacute;lisis de riesgos formal que identifique los activos en alcance, las amenazas que les afectan, la probabilidad e impacto de cada amenaza y las medidas de tratamiento aplicadas. La metodolog&iacute;a m&aacute;s utilizada en Espa&ntilde;a es MAGERIT (desarrollada por el Ministerio de Hacienda), aunque se aceptan otras metodolog&iacute;as compatibles como ISO 27005. El resultado del an&aacute;lisis de riesgos alimenta el Plan de Tratamiento de Riesgos (PTR) y la Declaraci&oacute;n de Aplicabilidad.</p>

    <h3>Controles t&eacute;cnicos principales</h3>
    <ul>
      <li><strong>Control de accesos:</strong> autenticaci&oacute;n de todos los usuarios (contrase&ntilde;as con pol&iacute;tica de complejidad m&iacute;nima), gesti&oacute;n de cuentas (altas, bajas y modificaciones formalizadas), principio de m&iacute;nimo privilegio (cada usuario solo tiene acceso a lo que necesita).</li>
      <li><strong>Gesti&oacute;n de parches y vulnerabilidades:</strong> proceso formal de actualizaci&oacute;n de sistemas operativos y aplicaciones, con plazos m&aacute;ximos para parches cr&iacute;ticos.</li>
      <li><strong>Protecci&oacute;n frente a c&oacute;digo da&ntilde;ino:</strong> antimalware actualizado en todos los equipos, control de dispositivos extra&iacute;bles.</li>
      <li><strong>Copias de seguridad:</strong> pol&iacute;tica de backup con frecuencia m&iacute;nima definida, almacenamiento en ubicaci&oacute;n separada, procedimiento y registros de pruebas peri&oacute;dicas de restauraci&oacute;n.</li>
      <li><strong>Registro de actividad (logs):</strong> los sistemas deben generar logs de acceso y actividad que sean conservados durante el tiempo m&iacute;nimo establecido.</li>
      <li><strong>Continuidad del servicio:</strong> plan b&aacute;sico de continuidad que establezca los tiempos m&aacute;ximos de recuperaci&oacute;n (RTO) y los puntos de recuperaci&oacute;n (RPO) para los servicios en alcance.</li>
      <li><strong>Protecci&oacute;n de las comunicaciones:</strong> cifrado de las comunicaciones externas (HTTPS/TLS), protecci&oacute;n de las redes mediante firewall.</li>
      <li><strong>Formaci&oacute;n y concienciaci&oacute;n:</strong> el personal con acceso a los sistemas debe recibir formaci&oacute;n en seguridad de la informaci&oacute;n al menos una vez al a&ntilde;o, con registro de asistencia.</li>
    </ul>

    <h2>Proceso paso a paso para obtener el ENS B&aacute;sico</h2>

    <ol>
      <li><strong>An&aacute;lisis GAP inicial (semanas 1-2):</strong> evaluaci&oacute;n del estado actual de los controles frente a los requisitos ENS B&aacute;sico. Identificaci&oacute;n de brechas y estimaci&oacute;n del esfuerzo de adecuaci&oacute;n.</li>
      <li><strong>Definici&oacute;n de alcance y categor&iacute;a (semana 2):</strong> identificaci&oacute;n de los sistemas en alcance, valoraci&oacute;n de activos y confirmaci&oacute;n de la categor&iacute;a B&aacute;sica mediante an&aacute;lisis de riesgo.</li>
      <li><strong>Plan de Adecuaci&oacute;n (semana 3):</strong> elaboraci&oacute;n del plan de trabajo detallado con acciones, responsables, plazos y recursos. Es el roadmap del proyecto.</li>
      <li><strong>Implantaci&oacute;n de controles (semanas 4-10):</strong> ejecuci&oacute;n del plan de adecuaci&oacute;n. Elaboraci&oacute;n de la documentaci&oacute;n (pol&iacute;tica, procedimientos, an&aacute;lisis de riesgos, declaraci&oacute;n de aplicabilidad) e implementaci&oacute;n de los controles t&eacute;cnicos pendientes.</li>
      <li><strong>Formaci&oacute;n del personal (semana 10-11):</strong> sesi&oacute;n de formaci&oacute;n en seguridad de la informaci&oacute;n para todo el personal con acceso a los sistemas en alcance. Registro de asistencia y material formativo.</li>
      <li><strong>Auditor&iacute;a interna previa (semana 11-12):</strong> revisi&oacute;n exhaustiva del estado de todos los controles, verificaci&oacute;n de que la documentaci&oacute;n est&aacute; completa y coherente, comprobaci&oacute;n t&eacute;cnica de las configuraciones. Subsanaci&oacute;n de cualquier desviaci&oacute;n detectada.</li>
      <li><strong>Auditor&iacute;a de certificaci&oacute;n (semana 13-14):</strong> auditor&iacute;a por entidad acreditada por ENAC. Revisi&oacute;n documental y comprobaci&oacute;n t&eacute;cnica.</li>
      <li><strong>Obtenci&oacute;n del certificado (semana 15-16):</strong> resoluci&oacute;n de eventuales no conformidades menores y emisi&oacute;n del certificado ENS B&aacute;sico con vigencia de 2 a&ntilde;os.</li>
    </ol>

    <h2>Cu&aacute;nto cuesta el ENS B&aacute;sico para una pyme</h2>

    <p>El coste total del proceso de certificaci&oacute;n ENS B&aacute;sico para una pyme tiene dos componentes: los honorarios de la consultora de implantaci&oacute;n y el coste de la auditor&iacute;a de la entidad certificadora.</p>

    <p>Los <strong>honorarios de consultor&iacute;a</strong> dependen de la madurez de partida (cu&aacute;ntos controles ya est&aacute;n implementados), la complejidad del entorno (n&uacute;mero de sistemas en alcance, arquitectura tecnol&oacute;gica) y el tama&ntilde;o de la organizaci&oacute;n. Como referencia orientativa para una pyme de entre 5 y 30 empleados con un entorno tecnol&oacute;gico est&aacute;ndar, los honorarios de implantaci&oacute;n suelen situarse entre 4.000 y 10.000 euros. Las empresas con controles de seguridad ya maduros (por ejemplo, las que ya tienen certificaci&oacute;n ISO 27001 o que aplican buenas pr&aacute;cticas de desarrollo seguro) pueden estar en el extremo inferior del rango.</p>

    <p>El <strong>coste de la auditor&iacute;a externa</strong> con una entidad acreditada por ENAC para ENS B&aacute;sico en una pyme se sit&uacute;a habitualmente entre 3.000 y 6.000 euros, dependiendo de la entidad elegida y el alcance de la auditor&iacute;a.</p>

    <p>El coste total del proceso &mdash;consultor&iacute;a m&aacute;s auditor&iacute;a&mdash; para una pyme est&aacute;ndar se sit&uacute;a por tanto entre 7.000 y 16.000 euros. Hay que contextualizar este coste: el valor del primer contrato p&uacute;blico que la certificaci&oacute;n ENS permite ganar o mantener es habitualmente muy superior a esta inversi&oacute;n. El coste de no tener el ENS cuando lo exige el pliego es perder la licitaci&oacute;n.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>Solicita un presupuesto personalizado para tu pyme. Sin compromiso, en 24 horas. Avson GRC trabaja con empresas de toda Espa&ntilde;a, en persona y en remoto.</span>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Solicitar presupuesto &rarr;</Link>
    </div>

    <h2>Cu&aacute;nto tiempo lleva: cronograma realista de 3-4 meses</h2>

    <p>Con el acompa&ntilde;amiento de una consultora especializada, el proceso completo desde el inicio del proyecto hasta la recepci&oacute;n del certificado ENS B&aacute;sico dura entre <strong>3 y 4 meses</strong> para una pyme est&aacute;ndar. Este es el plazo m&aacute;s habitual en nuestros proyectos en Avson GRC.</p>

    <p>Los factores que pueden acortar el plazo: que la empresa ya tenga documentaci&oacute;n de seguridad existente (aunque sea incompleta), que el equipo interno tenga disponibilidad alta para las tareas del proyecto, y que el entorno tecnol&oacute;gico sea sencillo (pocos sistemas, infraestructura cloud est&aacute;ndar).</p>

    <p>Los factores que pueden alargarlo: entorno tecnol&oacute;gico complejo o heredado que requiere actualizaciones t&eacute;cnicas significativas (cambio de sistemas de autenticaci&oacute;n, implementaci&oacute;n de backup en cloud, despliegue de herramientas de monitorizaci&oacute;n), alta rotaci&oacute;n de personal durante el proyecto, o disponibilidad limitada del equipo interno para participar en las sesiones de trabajo.</p>

    <p>Sin consultor&iacute;a especializada, el plazo habitual se extiende a 9-12 meses, principalmente por la curva de aprendizaje en la interpretaci&oacute;n de los controles del RD 311/2022 y los errores en la elaboraci&oacute;n de la documentaci&oacute;n que deben corregirse antes de la auditor&iacute;a.</p>

    <h2>ENS B&aacute;sico: declaraci&oacute;n de conformidad vs certificado</h2>

    <p>En el ENS B&aacute;sico existe la posibilidad te&oacute;rica de emitir una declaraci&oacute;n de conformidad &mdash;un documento autodeclarado de cumplimiento&mdash; en lugar de obtener el certificado de una entidad acreditada. Sin embargo, en la pr&aacute;ctica esta opci&oacute;n es cada vez menos viable para empresas que quieren licitar activamente con la Administraci&oacute;n.</p>

    <p>La raz&oacute;n es sencilla: la mayor&iacute;a de los pliegos de contrataci&oacute;n p&uacute;blica de organismos con cualquier nivel de sofisticaci&oacute;n digital ya exigen el certificado de entidad acreditada, no la declaraci&oacute;n de conformidad. Incluso para categor&iacute;a B&aacute;sica. Presentar la declaraci&oacute;n cuando el pliego pide el certificado equivale a la exclusi&oacute;n directa de la licitaci&oacute;n.</p>

    <p>La declaraci&oacute;n de conformidad tiene sentido en casos muy concretos: contratos con administraciones muy peque&ntilde;as que la aceptan expl&iacute;citamente, o como paso transitorio mientras se tramita la auditor&iacute;a de certificaci&oacute;n. Para cualquier empresa con ambici&oacute;n real de crecer en el mercado p&uacute;blico, el certificado es la inversi&oacute;n correcta.</p>

    <h2>Los 5 errores m&aacute;s comunes de las pymes al buscar el ENS B&aacute;sico</h2>

    <ol>
      <li><strong>Asumir la categor&iacute;a sin an&aacute;lisis formal.</strong> Muchas pymes asumen que les corresponde la categor&iacute;a B&aacute;sica sin hacer un an&aacute;lisis de valoraci&oacute;n de activos. Esto puede llevar a que la auditor&iacute;a rechace el alcance o que los auditores determinen que la categor&iacute;a correcta es Media, invalidando todo el trabajo previo.</li>
      <li><strong>Documentar sin implementar.</strong> Elaborar una Pol&iacute;tica de Seguridad brillante y un an&aacute;lisis de riesgos impecable, pero sin que los controles t&eacute;cnicos est&eacute;n realmente activos en los sistemas. Los auditores comprueban la implementaci&oacute;n real, no solo los documentos.</li>
      <li><strong>Olvidar la prueba de restauraci&oacute;n de copias de seguridad.</strong> Es el hallazgo m&aacute;s frecuente en las auditor&iacute;as ENS. Puede existir el backup, pero si nunca se ha probado que funciona (restaurando datos reales), el auditor lo marcar&aacute; como no conformidad.</li>
      <li><strong>Incluir demasiados sistemas en el alcance.</strong> Por intentar cubrir toda la empresa, se incluye en el alcance m&aacute;s sistemas de los necesarios, lo que aumenta el trabajo y la complejidad de la auditor&iacute;a. Un alcance bien definido y justificado es m&aacute;s eficiente y m&aacute;s f&aacute;cil de certificar.</li>
      <li><strong>Infravalorar la disponibilidad interna necesaria.</strong> El proyecto ENS requiere tiempo del equipo interno: reuniones, revisi&oacute;n de documentaci&oacute;n, implementaci&oacute;n de controles, respuesta a preguntas de auditores. Las empresas que no reservan ese tiempo en la agenda del equipo acaban retrasando el proyecto o llegando a la auditor&iacute;a sin estar preparadas.</li>
    </ol>

    <section style={{margin:'64px 0'}}>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(20px,2.5vw,26px)',fontWeight:'400',color:'#1A2744',marginBottom:'24px'}}>Art&iacute;culos relacionados</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'16px'}}>
        <Link to="/ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Certificaci&oacute;n ENS: todo lo que necesitas saber</p>
        </Link>
        <Link to="/blog/declaracion-conformidad-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Declaraci&oacute;n de conformidad ENS vs certificado: diferencias</p>
        </Link>
        <Link to="/blog/cuanto-cuesta-certificado-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS &middot; Precio</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Cu&aacute;nto cuesta el certificado ENS en 2026</p>
        </Link>
        <Link to="/blog/gap-analysis-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS &middot; Gap Analysis</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Gap analysis ENS: el primer paso para el certificado</p>
        </Link>
      </div>
    </section>

    <h2>Preguntas frecuentes sobre el ENS B&aacute;sico para pymes</h2>

    <div className="faq-article">
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Puedo obtener el ENS B&aacute;sico sin consultor&iacute;a externa?</div>
        <div className="faq-article-a">T&eacute;cnicamente s&iacute;, pero en la pr&aacute;ctica es muy dif&iacute;cil sin experiencia previa en sistemas de gesti&oacute;n de seguridad. Los principales obst&aacute;culos son la interpretaci&oacute;n correcta de los controles del RD 311/2022, la elaboraci&oacute;n de un an&aacute;lisis de riesgos metodol&oacute;gicamente v&aacute;lido, y la preparaci&oacute;n de la documentaci&oacute;n con el nivel de detalle que exigen los auditores. Las empresas que lo intentan sin apoyo suelen tardar el doble del tiempo y muchas no superan la auditor&iacute;a en el primer intento.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;El ENS B&aacute;sico sirve para contratos con el Ayuntamiento de mi ciudad?</div>
        <div className="faq-article-a">Depende del ayuntamiento y del tipo de contrato. Los ayuntamientos grandes ya exigen el certificado ENS en la mayor&iacute;a de sus licitaciones TIC. Los medianos est&aacute;n incorporando el requisito. En cualquier caso, tener el ENS B&aacute;sico es una ventaja competitiva significativa en cualquier licitaci&oacute;n p&uacute;blica, independientemente de si el pliego lo exige formalmente, ya que transmite confianza y seriedad al &oacute;rgano contratante.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Cu&aacute;ntos empleados tiene que tener mi empresa para el ENS B&aacute;sico?</div>
        <div className="faq-article-a">El ENS no establece ning&uacute;n umbral de tama&ntilde;o ni de n&uacute;mero de empleados. Lo que determina si una empresa necesita el ENS es si presta servicios TIC a organismos del sector p&uacute;blico. Hemos certificado en ENS B&aacute;sico empresas desde 2 empleados hasta grandes corporaciones. El tama&ntilde;o s&iacute; influye en la complejidad del proceso: una empresa peque&ntilde;a con pocos sistemas en alcance puede completarlo de forma m&aacute;s &aacute;gil.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;El ENS B&aacute;sico tiene que renovarse?</div>
        <div className="faq-article-a">S&iacute;. El certificado ENS B&aacute;sico tiene una vigencia de 2 a&ntilde;os. Transcurrido ese plazo, debe renovarse mediante una nueva auditor&iacute;a de certificaci&oacute;n. Es recomendable iniciar el proceso de renovaci&oacute;n 3-4 meses antes de la fecha de caducidad para evitar periodos sin certificado vigente que podr&iacute;an afectar a contratos o licitaciones activas.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Si tengo el ENS B&aacute;sico, puedo ampliar a Medio m&aacute;s adelante?</div>
        <div className="faq-article-a">S&iacute;, y es el camino natural para muchas empresas. Partir del ENS B&aacute;sico y ampliar a Medio cuando sea necesario es perfectamente posible. El proceso de ampliaci&oacute;n consiste en implementar los controles adicionales que exige la categor&iacute;a Media, actualizar la documentaci&oacute;n y someterse a una nueva auditor&iacute;a de certificaci&oacute;n. La base documental y los controles del ENS B&aacute;sico siguen siendo v&aacute;lidos y se ampl&iacute;an, no se sustituyen.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>&iquest;Lista tu pyme para el ENS B&aacute;sico?</h3>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Pide presupuesto &middot; Sin compromiso &middot; Respuesta en 24 horas &middot; Toda Espa&ntilde;a, presencial y remoto</p>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar presupuesto sin compromiso &rarr;</Link>
    </div>

  </div>
</article></>
  )
}
