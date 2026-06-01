import { Link } from 'react-router-dom'

export default function GapAnalysisEns() {
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
      <span style={{color:'var(--navy)',fontWeight:'500'}}>Gap Analysis ENS</span>
    </nav>
  </div>
</div>

<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">ENS &middot; An&aacute;lisis de Brecha &middot; Actualizado mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        Gap analysis ENS: el primer paso para saber cu&aacute;nto te falta para el certificado.
      </h1>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        Iniciar un proyecto ENS sin un gap analysis es como emprender un viaje sin saber desde d&oacute;nde partes. Esta gu&iacute;a explica en qu&eacute; consiste el an&aacute;lisis de brecha, qu&eacute; incluye un buen informe y qu&eacute; hacer con los resultados.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>&#9201; Lectura: 9 minutos</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>&#128197; Actualizado: mayo 2026</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>&#9997;&#65039; Laura S&aacute;nchez &middot; Directora de Consultor&iacute;a GRC</span>
      </div>
    </div>
  </div>
</section>

<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <h2>Qu&eacute; es el gap analysis en el contexto del ENS</h2>

    <p>El <strong>gap analysis ENS</strong> &mdash;tambi&eacute;n llamado an&aacute;lisis de brecha o an&aacute;lisis de diferencias&mdash; es el proceso mediante el cual se eval&uacute;a el estado actual de los controles de seguridad de una organizaci&oacute;n y se compara con los requisitos que establece el Esquema Nacional de Seguridad en el RD 311/2022 para la categor&iacute;a aplicable (B&aacute;sica, Media o Alta). El resultado es un mapa detallado de lo que ya se cumple, lo que falta por implementar y lo que existe pero necesita mejorarse.</p>

    <p>En t&eacute;rminos pr&aacute;cticos, el gap analysis responde a tres preguntas fundamentales. <strong>&iquest;D&oacute;nde estamos?</strong> Cu&aacute;l es el estado real de los controles de seguridad: qu&eacute; documentaci&oacute;n existe, qu&eacute; controles t&eacute;cnicos est&aacute;n activos, qu&eacute; procesos de seguridad funcionan en la pr&aacute;ctica. <strong>&iquest;D&oacute;nde tenemos que estar?</strong> Cu&aacute;les son los requisitos del ENS para la categor&iacute;a del sistema en alcance. <strong>&iquest;Cu&aacute;nto nos falta?</strong> La diferencia entre los dos estados anteriores: los gaps, clasificados por dominio de seguridad, gravedad y esfuerzo de cierre.</p>

    <p>Es importante distinguir el gap analysis del diagn&oacute;stico inicial, que es una versi&oacute;n m&aacute;s superficial con un alcance de alto nivel. El gap analysis profundo implica revisar documentaci&oacute;n real, entrevistar al personal clave, comprobar configuraciones de sistemas y contrastar todo ello con los controles del Anexo II del RD 311/2022 de forma sistem&aacute;tica y exhaustiva.</p>

    <h2>Por qu&eacute; es el primer paso obligatorio antes de cualquier proyecto ENS</h2>

    <p>La raz&oacute;n m&aacute;s importante es econ&oacute;mica: sin un gap analysis, es imposible dimensionar correctamente el proyecto de certificaci&oacute;n. Las empresas que inician la implantaci&oacute;n ENS sin un an&aacute;lisis previo incurren sistem&aacute;ticamente en uno de estos dos errores opuestos: infraestiman el trabajo (y acaban con proyectos que se extienden m&aacute;s del doble del plazo previsto y con sobrecostes significativos) o sobreestiman los gaps (y destinan recursos a &aacute;reas ya conformes mientras descuidan los gaps reales).</p>

    <p>La segunda raz&oacute;n es estrat&eacute;gica: el gap analysis determina la <strong>categor&iacute;a real del sistema</strong>. Muchas empresas asumen que necesitan una categor&iacute;a cuando en realidad les corresponde otra. Una valoraci&oacute;n incorrecta de la categor&iacute;a puede llevar a implementar controles innecesariamente exigentes (desperdiciando recursos) o a presentarse a la auditor&iacute;a con una categor&iacute;a inferior a la que realmente corresponde al sistema (con el riesgo de que los auditores detecten la discrepancia).</p>

    <p>La tercera raz&oacute;n es operativa: el gap analysis produce el <strong>inventario de activos</strong> y la valoraci&oacute;n de riesgos que son la base del an&aacute;lisis de riesgos formal requerido por el ENS. Hacerlos en paralelo con la implantaci&oacute;n, en lugar de como punto de partida, genera inconsistencias que los auditores detectan.</p>

    <p>Por &uacute;ltimo, el gap analysis es la base del <strong>Plan de Adecuaci&oacute;n</strong>: el documento que estructura todas las acciones necesarias para cerrar los gaps, con responsables, plazos, recursos y criterios de &eacute;xito. Sin el gap analysis, el plan de adecuaci&oacute;n es, en el mejor caso, una estimaci&oacute;n; en el peor, una lista de deseos sin conexi&oacute;n con la realidad.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>Diagn&oacute;stico inicial gratuito en 5 d&iacute;as h&aacute;biles. Saber desde d&oacute;nde partes no tiene coste. Avson GRC trabaja con empresas en toda Espa&ntilde;a, presencial y remoto.</span>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Solicitar diagn&oacute;stico &rarr;</Link>
    </div>

    <h2>Qu&eacute; analiza un gap analysis ENS</h2>

    <p>Un gap analysis ENS completo cubre tres grandes &aacute;reas de evaluaci&oacute;n:</p>

    <h3>Sistemas en alcance</h3>
    <p>El primer paso es identificar con precisi&oacute;n qu&eacute; sistemas de informaci&oacute;n entran dentro del alcance de la certificaci&oacute;n. Esto incluye: servidores (f&iacute;sicos y virtuales, on-premise y cloud), aplicaciones (propias y de terceros), bases de datos, redes y comunicaciones, dispositivos de usuario final, y los proveedores de servicios externos que tienen acceso a esos sistemas o a los datos que manejan. Un alcance mal definido es uno de los problemas m&aacute;s frecuentes: demasiado amplio genera trabajo innecesario; demasiado estrecho puede dejar fuera sistemas que los auditores exigir&aacute;n incluir.</p>

    <h3>Controles actuales</h3>
    <p>Para cada control del Anexo II del RD 311/2022 aplicable a la categor&iacute;a, el gap analysis eval&uacute;a: si el control existe y est&aacute; documentado, si existe y est&aacute; documentado pero no se aplica consistentemente en la pr&aacute;ctica, si existe parcialmente (por ejemplo, el control t&eacute;cnico existe pero falta la documentaci&oacute;n o los registros), o si no existe en absoluto. Esta distinci&oacute;n entre &quot;en papel&quot; y &quot;en la pr&aacute;ctica&quot; es cr&iacute;tica para predecir lo que encontrar&aacute; la auditor&iacute;a.</p>

    <h3>Categor&iacute;a aplicable</h3>
    <p>La valoraci&oacute;n de activos y el an&aacute;lisis de impacto en las cinco dimensiones de seguridad (confidencialidad, integridad, disponibilidad, autenticidad, trazabilidad) permiten determinar la categor&iacute;a del sistema con rigor metodol&oacute;gico. El gap analysis valida si la categor&iacute;a asumida por la organizaci&oacute;n corresponde a la que resultar&iacute;a de una valoraci&oacute;n objetiva, y en caso de discrepancia, recomienda la categor&iacute;a correcta con la justificaci&oacute;n t&eacute;cnica correspondiente.</p>

    <h2>C&oacute;mo se estructura el informe de gap analysis</h2>

    <p>Un informe de gap analysis ENS bien estructurado incluye los siguientes apartados:</p>

    <ul>
      <li><strong>Resumen ejecutivo:</strong> una valoraci&oacute;n de alto nivel del estado de madurez de la organizaci&oacute;n, la categor&iacute;a recomendada y una estimaci&oacute;n del esfuerzo total de adecuaci&oacute;n (en meses y nivel de inversi&oacute;n). Es el &uacute;nico apartado que lee la direcci&oacute;n.</li>
      <li><strong>Inventario de sistemas en alcance:</strong> listado de activos con su valoraci&oacute;n en cada dimensi&oacute;n de seguridad y la justificaci&oacute;n de la categor&iacute;a resultante.</li>
      <li><strong>An&aacute;lisis control por control:</strong> para cada control del Anexo II aplicable, estado actual (cumple / cumple parcialmente / no cumple / no aplica), descripci&oacute;n del gap (si existe) y evidencias revisadas.</li>
      <li><strong>Nivel de madurez por dominio:</strong> visi&oacute;n gr&aacute;fica del estado de cumplimiento por familia de controles (marco organizativo, control de acceso, explotaci&oacute;n, protecci&oacute;n de comunicaciones, etc.). Permite identificar de un vistazo cu&aacute;les son los dominios m&aacute;s maduros y cu&aacute;les requieren mayor atenci&oacute;n.</li>
      <li><strong>Clasificaci&oacute;n de gaps por criticidad:</strong> los gaps identificados se clasifican en tres niveles &mdash; cr&iacute;ticos (no conformidades mayores seguras en auditor&iacute;a), importantes (no conformidades menores probables) y menores (observaciones o mejoras recomendadas).</li>
      <li><strong>Roadmap de adecuaci&oacute;n:</strong> plan de trabajo priorizado con las acciones para cerrar cada gap, el esfuerzo estimado (horas/d&iacute;as), los recursos necesarios (internos y externos) y el plazo objetivo. Es el documento que transforma el gap analysis en un plan de acci&oacute;n ejecutable.</li>
    </ul>

    <h2>Diferencia entre gap analysis b&aacute;sico y profundo</h2>

    <p>En la pr&aacute;ctica existen dos modalidades de gap analysis con objetivos y profundidad distintos. El <strong>gap analysis b&aacute;sico o diagn&oacute;stico inicial</strong> es una revisi&oacute;n de alto nivel que se realiza en 1-2 d&iacute;as mediante entrevistas con los responsables t&eacute;cnicos y de seguridad, revisi&oacute;n de documentaci&oacute;n existente a nivel de &iacute;ndice (sin an&aacute;lisis profundo de contenidos) y una valoraci&oacute;n aproximada del nivel de madurez por dominio. Su objetivo es determinar si la organizaci&oacute;n est&aacute; en condiciones de iniciar el proyecto de certificaci&oacute;n de forma inmediata o si necesita un an&aacute;lisis m&aacute;s profundo. En Avson GRC, esta modalidad es gratuita.</p>

    <p>El <strong>gap analysis profundo</strong> incluye la revisi&oacute;n detallada de toda la documentaci&oacute;n de seguridad existente (no solo su &iacute;ndice), entrevistas estructuradas con el personal de cada &aacute;rea (TI, recursos humanos, operaciones, direcci&oacute;n), comprobaci&oacute;n t&eacute;cnica de configuraciones de sistemas (firewalls, directorio activo, sistemas de backup, logs), valoraci&oacute;n completa de activos en todas las dimensiones, y la elaboraci&oacute;n del informe completo con roadmap priorizado. Este an&aacute;lisis puede durar de 3 a 10 d&iacute;as h&aacute;biles seg&uacute;n la complejidad del entorno y es la base sobre la que se construye el proyecto de certificaci&oacute;n.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>&iquest;Ya tienes una auditor&iacute;a ENS pr&oacute;xima o un pliego que cumplir? Nuestro gap analysis expr&eacute;s te da el estado real de tus controles en 72 horas. Disponible en toda Espa&ntilde;a.</span>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Solicitar gap analysis &rarr;</Link>
    </div>

    <h2>Cu&aacute;nto tiempo lleva un gap analysis ENS</h2>

    <p>La duraci&oacute;n del gap analysis depende principalmente de tres factores: el tama&ntilde;o y complejidad del entorno tecnol&oacute;gico en alcance, la disponibilidad del equipo interno para facilitar informaci&oacute;n y atender entrevistas, y la profundidad del an&aacute;lisis contratado.</p>

    <p>Para una pyme tecnol&oacute;gica con un entorno relativamente homog&eacute;neo (pocos servidores, una o dos aplicaciones en alcance, infraestructura cloud est&aacute;ndar), un gap analysis b&aacute;sico puede completarse en 1-2 d&iacute;as h&aacute;biles y un gap analysis profundo en 3-5 d&iacute;as. Para una empresa mediana con entorno h&iacute;brido (on-premise y cloud), m&uacute;ltiples aplicaciones en alcance, varias delegaciones o trabajo con subcontratistas, el gap analysis profundo puede extenderse a 7-12 d&iacute;as h&aacute;biles.</p>

    <p>El factor limitante m&aacute;s habitual no es la capacidad del equipo consultor, sino la disponibilidad del personal interno para las entrevistas y la facilidad de acceso a la documentaci&oacute;n y a los sistemas. Las organizaciones con documentaci&oacute;n ordenada y un interlocutor t&eacute;cnico dedicado acortan los plazos significativamente.</p>

    <h2>Qu&eacute; hacer con los resultados del gap analysis</h2>

    <p>El informe de gap analysis no es el destino; es el mapa de inicio del viaje. Los siguientes pasos inmediatos tras recibir el informe son:</p>

    <ol>
      <li><strong>Validar la categor&iacute;a:</strong> confirmar con los responsables de la organizaci&oacute;n que la categor&iacute;a resultante del an&aacute;lisis es la correcta y que el alcance definido es el adecuado para los objetivos de negocio (licitaciones previstas, contratos actuales).</li>
      <li><strong>Priorizar los gaps cr&iacute;ticos:</strong> los gaps clasificados como cr&iacute;ticos son los que generar&aacute;n no conformidades mayores en la auditor&iacute;a. Deben atacarse primero, incluso antes de tener el plan de adecuaci&oacute;n completo.</li>
      <li><strong>Definir el Plan de Adecuaci&oacute;n:</strong> con el roadmap del informe como base, se concreta el plan de trabajo con fechas, responsables y recursos. Este plan es el contrato de trabajo del proyecto de certificaci&oacute;n.</li>
      <li><strong>Comunicar a la direcci&oacute;n:</strong> el resumen ejecutivo del gap analysis es el documento para conseguir el compromiso de la direcci&oacute;n con el proyecto: necesitan entender el nivel de inversi&oacute;n requerido, el plazo realista y las consecuencias de no actuar.</li>
    </ol>

    <h2>El gap analysis de Avson: gratuito en el diagn&oacute;stico inicial</h2>

    <p>En Avson GRC hemos desarrollado una metodolog&iacute;a propia de gap analysis ENS que combina la revisi&oacute;n documental, las entrevistas estructuradas y la verificaci&oacute;n t&eacute;cnica automatizada de configuraciones para producir un informe fiable en el menor tiempo posible. Nuestra experiencia en m&aacute;s de 90 proyectos de certificaci&oacute;n ENS nos ha permitido afinar la lista de controles cr&iacute;ticos y los patrones de gap m&aacute;s frecuentes por sector y tama&ntilde;o de empresa.</p>

    <p>El diagn&oacute;stico inicial es gratuito y sin compromiso: en una sesi&oacute;n de trabajo de 2-3 horas con los responsables t&eacute;cnicos de tu empresa, evaluamos el estado de los controles m&aacute;s relevantes y producimos un informe de alto nivel con la categor&iacute;a recomendada, los gaps principales identificados y una estimaci&oacute;n del plazo y la inversi&oacute;n para obtener el certificado. Trabajamos con empresas en toda Espa&ntilde;a, tanto en formato presencial como completamente remoto.</p>

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
        <Link to="/blog/auditoria-ens-proceso" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS &middot; Auditor&iacute;a</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Auditor&iacute;a ENS: proceso paso a paso y c&oacute;mo prepararse</p>
        </Link>
        <Link to="/blog/cuanto-cuesta-certificado-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS &middot; Precio</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Cu&aacute;nto cuesta el certificado ENS en 2026</p>
        </Link>
      </div>
    </section>

    <h2>Preguntas frecuentes sobre el gap analysis ENS</h2>

    <div className="faq-article">
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;El gap analysis es obligatorio para obtener el ENS?</div>
        <div className="faq-article-a">El gap analysis no aparece como requisito expl&iacute;cito en el RD 311/2022, pero es considerado en la pr&aacute;ctica como el primer paso imprescindible de cualquier proyecto de implantaci&oacute;n ENS serio. Sin &eacute;l, es imposible saber cu&aacute;nto trabajo real hay por delante, qu&eacute; recursos se necesitan y en qu&eacute; plazo realista se puede obtener el certificado. Las organizaciones que intentan iniciar la implantaci&oacute;n sin un gap analysis previo incurren habitualmente en infraestimaciones que comprometen el proyecto.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Cu&aacute;nto cuesta un gap analysis ENS?</div>
        <div className="faq-article-a">El coste var&iacute;a seg&uacute;n el tama&ntilde;o de la organizaci&oacute;n y la complejidad del entorno tecnol&oacute;gico. En Avson GRC, el diagn&oacute;stico inicial &mdash;revisi&oacute;n de alto nivel del estado de los controles ENS&mdash; es gratuito y permite determinar si se necesita un an&aacute;lisis m&aacute;s profundo. Para entornos complejos o h&iacute;bridos, el gap analysis profundo puede tener un coste separado que habitualmente se descontar&aacute; del precio total del proyecto de certificaci&oacute;n.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Puedo hacer el gap analysis yo mismo sin consultor&iacute;a?</div>
        <div className="faq-article-a">T&eacute;cnicamente s&iacute;, con herramientas como PILAR del CCN. El problema es que sin experiencia previa en auditor&iacute;as ENS, es dif&iacute;cil valorar correctamente el estado real de los controles: hay tendencia a ser m&aacute;s optimista de lo que la realidad justifica. Un gap analysis externo aporta una visi&oacute;n objetiva que aumenta significativamente la fiabilidad de los resultados y la planificaci&oacute;n posterior.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;El gap analysis ENS equivale al gap analysis ISO 27001?</div>
        <div className="faq-article-a">Son conceptualmente similares pero con diferencias importantes en el contenido. El gap analysis ENS eval&uacute;a el cumplimiento frente al Anexo II del RD 311/2022. El gap analysis ISO 27001 eval&uacute;a el cumplimiento frente al Anexo A de la norma ISO 27001:2022. Aunque hay una alineaci&oacute;n significativa entre ambos marcos, no son id&eacute;nticos. Si ya tienes ISO 27001, el gap analysis ENS suele revelar un punto de partida mucho m&aacute;s avanzado, pero siempre hay gaps espec&iacute;ficos del ENS que deben cerrarse.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Qu&eacute; pasa si el gap analysis revela muchos gaps?</div>
        <div className="faq-article-a">Un gap analysis con muchos hallazgos es una se&ntilde;al de que el trabajo por delante es significativo, pero es exactamente la informaci&oacute;n que necesitabas antes de comprometerte con un plazo y un presupuesto. Con esa visi&oacute;n clara, el plan de adecuaci&oacute;n puede dise&ntilde;arse de forma realista, priorizando los gaps cr&iacute;ticos. En Avson GRC hemos certificado empresas con niveles de madurez inicial muy bajos en plazos de 4-5 meses gracias a una buena planificaci&oacute;n post-gap.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>&iquest;Quieres saber cu&aacute;nto te falta para el ENS?</h3>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Pide presupuesto &middot; Sin compromiso &middot; Respuesta en 24 horas &middot; Toda Espa&ntilde;a</p>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar presupuesto sin compromiso &rarr;</Link>
    </div>

  </div>
</article></>
  )
}
