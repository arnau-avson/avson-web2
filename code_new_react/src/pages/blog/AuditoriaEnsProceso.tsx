import { Link } from 'react-router-dom'

export default function AuditoriaEnsProceso() {
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
      <span style={{color:'var(--navy)',fontWeight:'500'}}>Auditor&iacute;a ENS: proceso paso a paso</span>
    </nav>
  </div>
</div>

<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">ENS &middot; Auditor&iacute;a &middot; Actualizado mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        Auditor&iacute;a ENS: qu&eacute; es, c&oacute;mo funciona y c&oacute;mo preparar a tu empresa.
      </h1>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        La auditor&iacute;a de certificaci&oacute;n ENS es el momento de la verdad. Esta gu&iacute;a explica exactamente qu&eacute; ocurre en cada fase, qu&eacute; miran los auditores y c&oacute;mo garantizar que tu empresa la supera en el primer intento.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>&#9201; Lectura: 10 minutos</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>&#128197; Actualizado: mayo 2026</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>&#9997;&#65039; Laura S&aacute;nchez &middot; Directora de Consultor&iacute;a GRC</span>
      </div>
    </div>
  </div>
</section>

<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <h2>Qu&eacute; es la auditor&iacute;a de certificaci&oacute;n ENS</h2>

    <p>La <strong>auditor&iacute;a de certificaci&oacute;n ENS</strong> es el proceso mediante el cual una entidad independiente acreditada por ENAC verifica que los sistemas de informaci&oacute;n de una organizaci&oacute;n cumplen con los requisitos del Esquema Nacional de Seguridad establecidos en el RD 311/2022. Es el paso previo e imprescindible para obtener el certificado ENS, y su resultado determina si la organizaci&oacute;n supera o no el proceso de certificaci&oacute;n.</p>

    <p>Es importante distinguir entre dos tipos de auditor&iacute;a en el contexto del ENS. La <strong>auditor&iacute;a interna</strong> es la que realiza la propia organizaci&oacute;n &mdash;o una consultora en su nombre&mdash; para evaluar el estado de los controles y preparar la certificaci&oacute;n. Tiene un car&aacute;cter preparatorio y no produce el certificado. La <strong>auditor&iacute;a de certificaci&oacute;n</strong> es la que realiza la entidad acreditada por ENAC, y su informe positivo es el que habilita la emisi&oacute;n del certificado.</p>

    <p>El objeto de la auditor&iacute;a es verificar que la organizaci&oacute;n ha implementado las medidas de seguridad del Anexo II del RD 311/2022 correspondientes a la categor&iacute;a declarada (B&aacute;sica, Media o Alta) y que dichas medidas funcionan de forma efectiva y sostenida, no solo en papel. Esta distinci&oacute;n entre &quot;estar documentado&quot; y &quot;funcionar en la pr&aacute;ctica&quot; es la que provoca la mayor&iacute;a de las no conformidades.</p>

    <h2>Qui&eacute;n puede realizar la auditor&iacute;a ENS</h2>

    <p>Solo pueden emitir el certificado ENS las entidades de certificaci&oacute;n acreditadas por <strong>ENAC (Entidad Nacional de Acreditaci&oacute;n)</strong> bajo el esquema espec&iacute;fico de certificaci&oacute;n del Esquema Nacional de Seguridad. ENAC es el organismo nacional de acreditaci&oacute;n en Espa&ntilde;a, reconocido por el Reglamento (CE) 765/2008, y la acreditaci&oacute;n garantiza la competencia t&eacute;cnica e imparcialidad de la entidad certificadora.</p>

    <p>Entre las entidades acreditadas por ENAC para el ENS figuran algunas de las principales firmas de certificaci&oacute;n de nivel internacional: <strong>Bureau Veritas</strong>, <strong>AENOR</strong>, <strong>SGS</strong>, <strong>Applus+</strong> y <strong>BSI Group</strong>, entre otras. El CCN publica en su web el listado actualizado de entidades habilitadas. La elecci&oacute;n de la entidad certificadora es libre, pero conviene tener en cuenta su experiencia en el sector de actividad de la organizaci&oacute;n y los plazos disponibles para la auditor&iacute;a.</p>

    <p>Una consultora de implantaci&oacute;n como Avson GRC no puede emitir el certificado ENS porque no es una entidad de certificaci&oacute;n; su funci&oacute;n es preparar a la organizaci&oacute;n para superar la auditor&iacute;a con la m&aacute;xima probabilidad de &eacute;xito. La relaci&oacute;n entre consultora y entidad certificadora es de complementariedad, no de sustituci&oacute;n.</p>

    <h2>Fases de la auditor&iacute;a ENS</h2>

    <p>La auditor&iacute;a de certificaci&oacute;n ENS se estructura en cuatro fases diferenciadas, con objetivos y metodolog&iacute;a distintos en cada una:</p>

    <h3>Fase 1: revisi&oacute;n documental</h3>
    <p>Los auditores analizan la documentaci&oacute;n del sistema de gesti&oacute;n de seguridad: Pol&iacute;tica de Seguridad de la Informaci&oacute;n, an&aacute;lisis de riesgos, Declaraci&oacute;n de Aplicabilidad, Plan de Tratamiento de Riesgos, procedimientos operativos (gesti&oacute;n de incidentes, copias de seguridad, control de accesos, gesti&oacute;n de parches, continuidad del servicio) y registros de actividad. Esta fase se realiza habitualmente en remoto, antes de la visita presencial.</p>

    <h3>Fase 2: visita in situ (o auditor&iacute;a t&eacute;cnica remota)</h3>
    <p>Los auditores comprueban que los controles documentados est&aacute;n realmente implementados. Entrevistan al personal clave (responsable de seguridad, administradores de sistemas, responsable de continuidad), inspeccionan las instalaciones f&iacute;sicas (control de acceso a CPD, protecci&oacute;n de equipos, sistemas de detecci&oacute;n de incendios y agua), y realizan comprobaciones t&eacute;cnicas en los sistemas: configuraciones de seguridad, registros de autenticaci&oacute;n, cifrado de datos en tr&aacute;nsito y en reposo, gesti&oacute;n de vulnerabilidades y test de restauraci&oacute;n de copias de seguridad.</p>

    <h3>Fase 3: informe de auditor&iacute;a</h3>
    <p>Tras la visita, la entidad certificadora elabora un informe detallado con los hallazgos: controles que cumplen, no conformidades menores (desviaciones que no afectan al cumplimiento global pero deben corregirse) y no conformidades mayores (incumplimientos que impiden la certificaci&oacute;n hasta que se subsanan). La organizaci&oacute;n dispone de un plazo &mdash;habitualmente 30 a 90 d&iacute;as&mdash; para corregir las no conformidades y presentar evidencias de subsanaci&oacute;n.</p>

    <h3>Fase 4: certificaci&oacute;n</h3>
    <p>Si el informe de subsanaci&oacute;n es satisfactorio, la entidad certificadora emite el certificado ENS con una vigencia de 2 a&ntilde;os. El certificado se registra en el sistema del CCN y puede ser verificado p&uacute;blicamente por los organismos p&uacute;blicos que liciten.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>Avson GRC prepara a tu empresa para la auditor&iacute;a ENS con una tasa de &eacute;xito del 100%. Trabajamos con empresas en toda Espa&ntilde;a, presencial y remoto.</span>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Pide presupuesto &rarr;</Link>
    </div>

    <h2>Qu&eacute; comprueban los auditores en cada dimensi&oacute;n</h2>

    <p>El ENS eval&uacute;a los sistemas en cinco <strong>dimensiones de seguridad</strong>, y los auditores comprueban controles espec&iacute;ficos en cada una de ellas:</p>

    <ul>
      <li><strong>Confidencialidad:</strong> los auditores verifican que solo las personas autorizadas acceden a la informaci&oacute;n. Comprueban el control de accesos (matrices de permisos, principio de m&iacute;nimo privilegio), el cifrado de datos sensibles tanto en tr&aacute;nsito como en reposo, la clasificaci&oacute;n de la informaci&oacute;n y los procedimientos de gesti&oacute;n de usuarios (altas, bajas y cambios de permisos).</li>
      <li><strong>Integridad:</strong> se verifica que la informaci&oacute;n no puede modificarse de forma no autorizada o inadvertida. Los auditores comprueban los controles de integridad de datos, el registro de auditor&iacute;a (logs de acceso y modificaci&oacute;n), la gesti&oacute;n de cambios en sistemas y la separaci&oacute;n de entornos de desarrollo y producci&oacute;n.</li>
      <li><strong>Disponibilidad:</strong> se verifica la capacidad de los sistemas para estar operativos cuando se necesitan. Los auditores comprueban los planes de continuidad del servicio, la frecuencia y verificaci&oacute;n de las copias de seguridad, los procedimientos de recuperaci&oacute;n ante desastres y las m&eacute;tricas de disponibilidad hist&oacute;ricas.</li>
      <li><strong>Autenticidad:</strong> los auditores verifican que se puede confirmar la identidad de los actores que interact&uacute;an con el sistema. Comprueban los mecanismos de autenticaci&oacute;n (especialmente la autenticaci&oacute;n multifactor, obligatoria en categor&iacute;a Media y Alta), la gesti&oacute;n de certificados digitales y los controles de acceso f&iacute;sico.</li>
      <li><strong>Trazabilidad:</strong> se verifica que todas las acciones relevantes sobre el sistema quedan registradas y son atribuibles a un usuario concreto. Los auditores comprueban los sistemas de logging, la integridad de los logs (que no puedan ser manipulados), la retenci&oacute;n de registros y los procedimientos de revisi&oacute;n peri&oacute;dica de logs.</li>
    </ul>

    <h2>Los errores m&aacute;s frecuentes que provocan no conformidades</h2>

    <p>Tras acompa&ntilde;ar a m&aacute;s de 90 empresas en sus procesos de certificaci&oacute;n ENS, en Avson GRC hemos identificado los errores que con m&aacute;s frecuencia provocan no conformidades en la auditor&iacute;a:</p>

    <ul>
      <li><strong>Documentaci&oacute;n desactualizada:</strong> la Pol&iacute;tica de Seguridad o el an&aacute;lisis de riesgos se elaboraron hace m&aacute;s de un a&ntilde;o y no reflejan cambios significativos en los sistemas (nuevos servidores, migraci&oacute;n a cloud, nuevos empleados). Los auditores comprueban las fechas de revisi&oacute;n de todos los documentos.</li>
      <li><strong>Copias de seguridad no verificadas:</strong> existen procedimientos de backup documentados pero nunca se ha realizado una prueba de restauraci&oacute;n real. Es uno de los hallazgos m&aacute;s habituales y m&aacute;s graves.</li>
      <li><strong>Gesti&oacute;n de parches deficiente:</strong> los sistemas tienen vulnerabilidades cr&iacute;ticas conocidas sin parchear, o no existe un proceso formal de gesti&oacute;n de actualizaciones de seguridad con plazos m&aacute;ximos establecidos.</li>
      <li><strong>Control de accesos inadecuado:</strong> usuarios con privilegios de administrador innecesarios, cuentas de exempleados activas, ausencia de revisiones peri&oacute;dicas de permisos o contrase&ntilde;as d&eacute;biles sin pol&iacute;tica de complejidad.</li>
      <li><strong>Ausencia de doble factor de autenticaci&oacute;n:</strong> obligatorio para accesos privilegiados en categor&iacute;a Media y para todos los accesos remotos. Es un hallazgo frecuente en empresas con infraestructura heredada.</li>
      <li><strong>Plan de continuidad no probado:</strong> el plan existe en papel pero nunca se ha ejecutado un simulacro, o el &uacute;ltimo simulacro data de hace m&aacute;s de 12 meses.</li>
      <li><strong>Formaci&oacute;n en seguridad no documentada:</strong> el personal recibe formaci&oacute;n informal pero no existe registro de las sesiones, los contenidos ni los asistentes.</li>
    </ul>

    <h2>C&oacute;mo preparar la documentaci&oacute;n antes de la auditor&iacute;a</h2>

    <p>La preparaci&oacute;n documental es la parte del proceso sobre la que m&aacute;s control tiene la organizaci&oacute;n antes de la auditor&iacute;a. Un conjunto de documentos bien elaborado y coherente entre s&iacute; es el mejor punto de partida para una auditor&iacute;a exitosa.</p>

    <p>El <strong>inventario de activos</strong> debe estar completo y actualizado: hardware, software, datos, servicios y personas vinculadas al sistema en alcance. Cada activo debe tener un responsable asignado y una valoraci&oacute;n de su criticidad en las dimensiones de seguridad.</p>

    <p>El <strong>an&aacute;lisis de riesgos</strong> debe cubrir las amenazas relevantes para el sector y los activos identificados, con la probabilidad e impacto de cada amenaza y las medidas de tratamiento aplicadas o previstas. La metodolog&iacute;a debe ser reconocible (MAGERIT, ISO 27005 o metodolog&iacute;a propia documentada) y los resultados deben estar actualizados respecto al alcance real del sistema.</p>

    <p>La <strong>Declaraci&oacute;n de Aplicabilidad</strong> debe incluir todos los controles del Anexo II del RD 311/2022 aplicables a la categor&iacute;a, con su estado de implementaci&oacute;n (implementado, en curso, no aplicable con justificaci&oacute;n) y las referencias a la documentaci&oacute;n o evidencias que demuestran su cumplimiento.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>&iquest;Tienes una auditor&iacute;a ENS pr&oacute;xima? Realizamos un simulacro previo para detectar cualquier gap antes de que lo encuentren los auditores. Disponible para empresas de toda Espa&ntilde;a.</span>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Solicitar simulacro &rarr;</Link>
    </div>

    <h2>Qu&eacute; pasa si no superas la auditor&iacute;a</h2>

    <p>No superar la auditor&iacute;a en el primer intento no equivale a un fracaso definitivo; es parte del proceso para muchas organizaciones, especialmente las que se certifican por primera vez. El procedimiento de subsanaci&oacute;n est&aacute; regulado y ofrece una segunda oportunidad.</p>

    <p>Cuando la auditor&iacute;a detecta <strong>no conformidades menores</strong> &mdash;desviaciones que no comprometen la efectividad global del sistema de seguridad&mdash;, la organizaci&oacute;n puede corregirlas y presentar evidencias de subsanaci&oacute;n dentro del plazo acordado (habitualmente 30-60 d&iacute;as). Si la subsanaci&oacute;n es aceptada, el certificado se emite sin necesidad de repetir la auditor&iacute;a completa.</p>

    <p>Cuando se detectan <strong>no conformidades mayores</strong> &mdash;incumplimientos graves que comprometen la seguridad del sistema&mdash;, la organizaci&oacute;n debe subsanarlas y someterse a una nueva auditor&iacute;a parcial o completa, seg&uacute;n el criterio de la entidad certificadora. El plazo de subsanaci&oacute;n es de 90 d&iacute;as en la mayor&iacute;a de los casos.</p>

    <p>Si transcurrido el plazo de subsanaci&oacute;n los hallazgos no se han corregido satisfactoriamente, la entidad certificadora cierra el expediente con resultado negativo y la organizaci&oacute;n debe iniciar un nuevo proceso de certificaci&oacute;n.</p>

    <h2>La garant&iacute;a de Avson: si no superamos la auditor&iacute;a, repetimos sin coste</h2>

    <p>En Avson GRC somos los &uacute;nicos en el mercado que ofrecen una <strong>garant&iacute;a de &eacute;xito por escrito</strong> en el proceso de certificaci&oacute;n ENS. Si siguiendo nuestro plan de adecuaci&oacute;n y nuestras recomendaciones tu empresa no supera la auditor&iacute;a de certificaci&oacute;n, volvemos a prepararte y repetimos el proceso sin coste adicional.</p>

    <p>Esta garant&iacute;a no es marketing: es el resultado de un proceso de trabajo riguroso que incluye un gap analysis exhaustivo al inicio, un plan de adecuaci&oacute;n detallado y priorizado, la elaboraci&oacute;n de toda la documentaci&oacute;n requerida, la implementaci&oacute;n asistida de los controles t&eacute;cnicos, una auditor&iacute;a interna previa al estilo de la auditor&iacute;a de certificaci&oacute;n, y el acompa&ntilde;amiento durante la auditor&iacute;a externa para responder las preguntas de los auditores y gestionar la entrega de evidencias.</p>

    <p>Trabajamos con empresas en toda Espa&ntilde;a, tanto de forma presencial &mdash;desplaz&aacute;ndonos a las instalaciones del cliente&mdash; como en formato completamente remoto mediante herramientas colaborativas. Nuestra experiencia cubre todos los sectores que trabajan con la Administraci&oacute;n P&uacute;blica: tecnolog&iacute;a, salud, educaci&oacute;n, defensa, utilities, administraci&oacute;n local y servicios financieros.</p>

    <section style={{margin:'64px 0'}}>
      <h2 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(20px,2.5vw,26px)',fontWeight:'400',color:'#1A2744',marginBottom:'24px'}}>Art&iacute;culos relacionados</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'16px'}}>
        <Link to="/ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Certificaci&oacute;n ENS: todo lo que necesitas saber</p>
        </Link>
        <Link to="/blog/que-es-el-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS &middot; Gu&iacute;a</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Qu&eacute; es el ENS: gu&iacute;a completa del Esquema Nacional de Seguridad</p>
        </Link>
        <Link to="/blog/renovacion-certificado-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS &middot; Renovaci&oacute;n</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Renovaci&oacute;n del certificado ENS: cu&aacute;ndo y c&oacute;mo hacerlo</p>
        </Link>
        <Link to="/blog/declaracion-conformidad-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Declaraci&oacute;n de conformidad ENS vs certificado: diferencias</p>
        </Link>
      </div>
    </section>

    <h2>Preguntas frecuentes sobre la auditor&iacute;a ENS</h2>

    <div className="faq-article">
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Cu&aacute;nto tiempo dura la auditor&iacute;a ENS?</div>
        <div className="faq-article-a">La duraci&oacute;n var&iacute;a seg&uacute;n la categor&iacute;a y el tama&ntilde;o del sistema en alcance. Para categor&iacute;a B&aacute;sica en una pyme, la auditor&iacute;a documental y la visita t&eacute;cnica pueden completarse en 2-3 d&iacute;as h&aacute;biles. Para categor&iacute;a Media en una empresa mediana, puede extenderse a 5-8 d&iacute;as h&aacute;biles. La categor&iacute;a Alta requiere habitualmente entre 2 y 4 semanas de auditor&iacute;a intensiva.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;La auditor&iacute;a ENS se hace de forma remota o presencial?</div>
        <div className="faq-article-a">Ambas modalidades son v&aacute;lidas. La revisi&oacute;n documental siempre puede hacerse en remoto. La auditor&iacute;a t&eacute;cnica in situ puede hacerse tambi&eacute;n en remoto mediante acceso controlado a los sistemas, aunque para categor&iacute;as Media y Alta los auditores suelen preferir o exigir visita presencial para comprobar las instalaciones f&iacute;sicas, el control de accesos y la segregaci&oacute;n de redes.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Qu&eacute; documentos hay que tener listos para la auditor&iacute;a ENS?</div>
        <div className="faq-article-a">La documentaci&oacute;n m&iacute;nima incluye: Pol&iacute;tica de Seguridad de la Informaci&oacute;n aprobada por la direcci&oacute;n, an&aacute;lisis de riesgos actualizado, Declaraci&oacute;n de Aplicabilidad, Plan de Tratamiento de Riesgos, procedimientos operativos de seguridad (gesti&oacute;n de incidentes, copias de seguridad, control de accesos, gesti&oacute;n de parches), registros de auditor&iacute;a de los sistemas, plan de continuidad del servicio y documentaci&oacute;n de formaci&oacute;n del personal.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Cu&aacute;nto cuesta la auditor&iacute;a externa ENS?</div>
        <div className="faq-article-a">El coste var&iacute;a seg&uacute;n la entidad certificadora, la categor&iacute;a y el tama&ntilde;o del alcance. Como referencia orientativa: ENS B&aacute;sico en una pyme, entre 3.000 y 6.000 euros; ENS Medio, entre 6.000 y 15.000 euros; ENS Alto, entre 15.000 y 40.000 euros o m&aacute;s. Estos costes son independientes de los honorarios de la consultora de implantaci&oacute;n.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Con qu&eacute; frecuencia hay que repetir la auditor&iacute;a ENS?</div>
        <div className="faq-article-a">El certificado ENS tiene una vigencia de 2 a&ntilde;os, por lo que la auditor&iacute;a de renovaci&oacute;n debe realizarse antes de la caducidad. Adicionalmente, el RD 311/2022 exige auditor&iacute;as de mantenimiento peri&oacute;dicas (al menos anuales) para verificar que los controles se mantienen en el nivel requerido, aunque estas no sustituyen a la auditor&iacute;a de certificaci&oacute;n bienal.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>&iquest;Tienes una auditor&iacute;a ENS por delante?</h3>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Te preparamos con garant&iacute;a de &eacute;xito por escrito &middot; Toda Espa&ntilde;a &middot; Respuesta en 24 horas</p>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar presupuesto sin compromiso &rarr;</Link>
    </div>

  </div>
</article></>
  )
}
