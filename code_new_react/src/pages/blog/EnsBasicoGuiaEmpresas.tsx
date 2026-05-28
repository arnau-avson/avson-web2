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
    <nav style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Blog</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>ENS Básico: guía completa para pymes</span>
    </nav>
  </div>
</div>


<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">ENS Básico · Pymes · Actualizado mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        ENS Básico: la guía completa para pymes que quieren licitar con la Administración.
      </h1>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        Si tu empresa es una pyme tecnológica que quiere acceder a contratos públicos, el ENS Básico es probablemente el punto de entrada. Esta guía explica qué es, qué exige, cuánto cuesta y cómo conseguirlo en 3-4 meses.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>⏱ Lectura: 11 minutos</span>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>📅 Actualizado: mayo 2026</span>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>✍️ Laura Sánchez · Directora de Consultoría GRC</span>
      </div>
    </div>
  </div>
</section>


<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <h2>Qué es el ENS Básico y por qué es el punto de entrada para las pymes</h2>

    <p>El <strong>ENS Básico</strong> —o categoría Básica del Esquema Nacional de Seguridad— es el nivel de certificación ENS que aplica a los sistemas de información cuyo compromiso tendría un impacto limitado sobre los servicios o los ciudadanos. Es el nivel de entrada del ENS, el menos exigente de los tres (Básico, Medio y Alto), y es el que aplica a la mayoría de las pequeñas y medianas empresas que trabajan con la Administración Pública española en servicios tecnológicos de apoyo.</p>

    <p>Para una pyme tecnológica que se plantea por primera vez vender servicios al sector público, el ENS Básico es habitualmente la primera certificación que necesita. Si tu empresa desarrolla software para la administración local, presta servicios de soporte IT a entidades públicas, ofrece soluciones en la nube para organismos públicos o gestiona datos de la Administración con carácter auxiliar, es probable que la categoría Básica sea la que te aplica.</p>

    <p>El ENS Básico no es un requisito menor: exige implementar un conjunto significativo de controles de seguridad organizativos y técnicos, documentarlos correctamente y demostrar en una auditoría que funcionan en la práctica. La diferencia respecto a las categorías superiores está en el nivel de exigencia de cada control, no en la ausencia de controles. Una empresa con el ENS Básico ha demostrado a sus clientes públicos que tiene una gestión de la seguridad de la información seria y sistemática.</p>

    <h2>¿Tu empresa necesita ENS Básico o una categoría superior? Cómo saberlo</h2>

    <p>La categoría ENS que te aplica depende del impacto que tendría un incidente de seguridad en los sistemas de información que van a estar en el alcance de la certificación. El proceso formal es un análisis de valoración de activos en cinco dimensiones (confidencialidad, integridad, disponibilidad, autenticidad y trazabilidad). El resultado determina la categoría.</p>

    <p>Como guía orientativa —no sustituta del análisis formal— la categoría Básica suele aplicar cuando:</p>

    <ul>
      <li>Tu empresa procesa datos de la Administración que no son especialmente sensibles (datos de gestión administrativa, información pública, datos estadísticos anonimizados).</li>
      <li>Una interrupción de tu servicio no afectaría a la prestación de servicios esenciales a ciudadanos (son servicios de apoyo interno, no servicios de cara al ciudadano).</li>
      <li>Tu empresa actúa como proveedor auxiliar de una entidad pública, no como proveedor de infraestructura crítica.</li>
      <li>Los datos personales que procesas no son de categorías especiales (salud, ideología, datos biométricos).</li>
    </ul>

    <p>Si alguna de estas condiciones no se cumple, es posible que necesites la categoría Media. La categoría Alta queda reservada para sistemas de infraestructura crítica, defensa nacional y servicios esenciales del Estado.</p>

    <p>Lo más prudente es no asumir la categoría sin un análisis: hay pymes que asumen Básico cuando la categoría correcta es Media (lo que puede provocar que la auditoría rechace el alcance) y empresas que asumen Media cuando Básico sería suficiente (desperdiciando recursos en controles innecesarios).</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>¿ENS Básico o Medio? Te lo decimos gratis en 24 horas. Avson GRC atiende pymes de toda España en formato presencial y remoto.</span>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Consultar categoría →</Link>
    </div>

    <h2>Requisitos del ENS Básico: los controles que debe implementar tu empresa</h2>

    <p>El Anexo II del RD 311/2022 define el catálogo de medidas de seguridad del ENS. Para la categoría Básica, las medidas se aplican en su nivel bajo (L), que es el menos exigente de los tres niveles (L, M, H). Aun así, el conjunto de controles requerido es sustancial:</p>

    <h3>Marco organizativo</h3>
    <p>La organización debe tener una <strong>Política de Seguridad de la Información</strong> aprobada por la dirección, una normativa de seguridad interna (conjunto de normas que regulan el uso de los sistemas por parte del personal), y un conjunto de procedimientos de seguridad que desarrollen la política: procedimiento de gestión de incidentes, procedimiento de copias de seguridad, procedimiento de control de accesos, etc. La política debe estar firmada por el máximo responsable de la organización y revisada al menos una vez al año.</p>

    <h3>Análisis de riesgos</h3>
    <p>El ENS Básico exige un análisis de riesgos formal que identifique los activos en alcance, las amenazas que les afectan, la probabilidad e impacto de cada amenaza y las medidas de tratamiento aplicadas. La metodología más utilizada en España es MAGERIT (desarrollada por el Ministerio de Hacienda), aunque se aceptan otras metodologías compatibles como ISO 27005. El resultado del análisis de riesgos alimenta el Plan de Tratamiento de Riesgos (PTR) y la Declaración de Aplicabilidad.</p>

    <h3>Controles técnicos principales</h3>
    <ul>
      <li><strong>Control de accesos:</strong> autenticación de todos los usuarios (contraseñas con política de complejidad mínima), gestión de cuentas (altas, bajas y modificaciones formalizadas), principio de mínimo privilegio (cada usuario solo tiene acceso a lo que necesita).</li>
      <li><strong>Gestión de parches y vulnerabilidades:</strong> proceso formal de actualización de sistemas operativos y aplicaciones, con plazos máximos para parches críticos.</li>
      <li><strong>Protección frente a código dañino:</strong> antimalware actualizado en todos los equipos, control de dispositivos extraíbles.</li>
      <li><strong>Copias de seguridad:</strong> política de backup con frecuencia mínima definida, almacenamiento en ubicación separada, procedimiento y registros de pruebas periódicas de restauración.</li>
      <li><strong>Registro de actividad (logs):</strong> los sistemas deben generar logs de acceso y actividad que sean conservados durante el tiempo mínimo establecido.</li>
      <li><strong>Continuidad del servicio:</strong> plan básico de continuidad que establezca los tiempos máximos de recuperación (RTO) y los puntos de recuperación (RPO) para los servicios en alcance.</li>
      <li><strong>Protección de las comunicaciones:</strong> cifrado de las comunicaciones externas (HTTPS/TLS), protección de las redes mediante firewall.</li>
      <li><strong>Formación y concienciación:</strong> el personal con acceso a los sistemas debe recibir formación en seguridad de la información al menos una vez al año, con registro de asistencia.</li>
    </ul>

    <h2>Proceso paso a paso para obtener el ENS Básico</h2>

    <ol>
      <li><strong>Análisis GAP inicial (semanas 1-2):</strong> evaluación del estado actual de los controles frente a los requisitos ENS Básico. Identificación de brechas y estimación del esfuerzo de adecuación.</li>
      <li><strong>Definición de alcance y categoría (semana 2):</strong> identificación de los sistemas en alcance, valoración de activos y confirmación de la categoría Básica mediante análisis de riesgo.</li>
      <li><strong>Plan de Adecuación (semana 3):</strong> elaboración del plan de trabajo detallado con acciones, responsables, plazos y recursos. Es el roadmap del proyecto.</li>
      <li><strong>Implantación de controles (semanas 4-10):</strong> ejecución del plan de adecuación. Elaboración de la documentación (política, procedimientos, análisis de riesgos, declaración de aplicabilidad) e implementación de los controles técnicos pendientes.</li>
      <li><strong>Formación del personal (semana 10-11):</strong> sesión de formación en seguridad de la información para todo el personal con acceso a los sistemas en alcance. Registro de asistencia y material formativo.</li>
      <li><strong>Auditoría interna previa (semana 11-12):</strong> revisión exhaustiva del estado de todos los controles, verificación de que la documentación está completa y coherente, comprobación técnica de las configuraciones. Subsanación de cualquier desviación detectada.</li>
      <li><strong>Auditoría de certificación (semana 13-14):</strong> auditoría por entidad acreditada por ENAC. Revisión documental y comprobación técnica.</li>
      <li><strong>Obtención del certificado (semana 15-16):</strong> resolución de eventuales no conformidades menores y emisión del certificado ENS Básico con vigencia de 2 años.</li>
    </ol>

    <h2>Cuánto cuesta el ENS Básico para una pyme</h2>

    <p>El coste total del proceso de certificación ENS Básico para una pyme tiene dos componentes: los honorarios de la consultora de implantación y el coste de la auditoría de la entidad certificadora.</p>

    <p>Los <strong>honorarios de consultoría</strong> dependen de la madurez de partida (cuántos controles ya están implementados), la complejidad del entorno (número de sistemas en alcance, arquitectura tecnológica) y el tamaño de la organización. Como referencia orientativa para una pyme de entre 5 y 30 empleados con un entorno tecnológico estándar, los honorarios de implantación suelen situarse entre 4.000 y 10.000 euros. Las empresas con controles de seguridad ya maduros (por ejemplo, las que ya tienen certificación ISO 27001 o que aplican buenas prácticas de desarrollo seguro) pueden estar en el extremo inferior del rango.</p>

    <p>El <strong>coste de la auditoría externa</strong> con una entidad acreditada por ENAC para ENS Básico en una pyme se sitúa habitualmente entre 3.000 y 6.000 euros, dependiendo de la entidad elegida y el alcance de la auditoría.</p>

    <p>El coste total del proceso —consultoría más auditoría— para una pyme estándar se sitúa por tanto entre 7.000 y 16.000 euros. Hay que contextualizar este coste: el valor del primer contrato público que la certificación ENS permite ganar o mantener es habitualmente muy superior a esta inversión. El coste de no tener el ENS cuando lo exige el pliego es perder la licitación.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>Solicita un presupuesto personalizado para tu pyme. Sin compromiso, en 24 horas. Avson GRC trabaja con empresas de toda España, en persona y en remoto.</span>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Solicitar presupuesto →</Link>
    </div>

    <h2>Cuánto tiempo lleva: cronograma realista de 3-4 meses</h2>

    <p>Con el acompañamiento de una consultora especializada, el proceso completo desde el inicio del proyecto hasta la recepción del certificado ENS Básico dura entre <strong>3 y 4 meses</strong> para una pyme estándar. Este es el plazo más habitual en nuestros proyectos en Avson GRC.</p>

    <p>Los factores que pueden acortar el plazo: que la empresa ya tenga documentación de seguridad existente (aunque sea incompleta), que el equipo interno tenga disponibilidad alta para las tareas del proyecto, y que el entorno tecnológico sea sencillo (pocos sistemas, infraestructura cloud estándar).</p>

    <p>Los factores que pueden alargarlo: entorno tecnológico complejo o heredado que requiere actualizaciones técnicas significativas (cambio de sistemas de autenticación, implementación de backup en cloud, despliegue de herramientas de monitorización), alta rotación de personal durante el proyecto, o disponibilidad limitada del equipo interno para participar en las sesiones de trabajo.</p>

    <p>Sin consultoría especializada, el plazo habitual se extiende a 9-12 meses, principalmente por la curva de aprendizaje en la interpretación de los controles del RD 311/2022 y los errores en la elaboración de la documentación que deben corregirse antes de la auditoría.</p>

    <h2>ENS Básico: declaración de conformidad vs certificado</h2>

    <p>En el ENS Básico existe la posibilidad teórica de emitir una declaración de conformidad —un documento autodeclarado de cumplimiento— en lugar de obtener el certificado de una entidad acreditada. Sin embargo, en la práctica esta opción es cada vez menos viable para empresas que quieren licitar activamente con la Administración.</p>

    <p>La razón es sencilla: la mayoría de los pliegos de contratación pública de organismos con cualquier nivel de sofisticación digital ya exigen el certificado de entidad acreditada, no la declaración de conformidad. Incluso para categoría Básica. Presentar la declaración cuando el pliego pide el certificado equivale a la exclusión directa de la licitación.</p>

    <p>La declaración de conformidad tiene sentido en casos muy concretos: contratos con administraciones muy pequeñas que la aceptan explícitamente, o como paso transitorio mientras se tramita la auditoría de certificación. Para cualquier empresa con ambición real de crecer en el mercado público, el certificado es la inversión correcta.</p>

    <h2>Los 5 errores más comunes de las pymes al buscar el ENS Básico</h2>

    <ol>
      <li><strong>Asumir la categoría sin análisis formal.</strong> Muchas pymes asumen que les corresponde la categoría Básica sin hacer un análisis de valoración de activos. Esto puede llevar a que la auditoría rechace el alcance o que los auditores determinen que la categoría correcta es Media, invalidando todo el trabajo previo.</li>
      <li><strong>Documentar sin implementar.</strong> Elaborar una Política de Seguridad brillante y un análisis de riesgos impecable, pero sin que los controles técnicos estén realmente activos en los sistemas. Los auditores comprueban la implementación real, no solo los documentos.</li>
      <li><strong>Olvidar la prueba de restauración de copias de seguridad.</strong> Es el hallazgo más frecuente en las auditorías ENS. Puede existir el backup, pero si nunca se ha probado que funciona (restaurando datos reales), el auditor lo marcará como no conformidad.</li>
      <li><strong>Incluir demasiados sistemas en el alcance.</strong> Por intentar cubrir toda la empresa, se incluye en el alcance más sistemas de los necesarios, lo que aumenta el trabajo y la complejidad de la auditoría. Un alcance bien definido y justificado es más eficiente y más fácil de certificar.</li>
      <li><strong>Infravalorar la disponibilidad interna necesaria.</strong> El proyecto ENS requiere tiempo del equipo interno: reuniones, revisión de documentación, implementación de controles, respuesta a preguntas de auditores. Las empresas que no reservan ese tiempo en la agenda del equipo acaban retrasando el proyecto o llegando a la auditoría sin estar preparadas.</li>
    </ol>

    
    <section style={{margin:'64px 0'}}>
      <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(20px,2.5vw,26px)',fontWeight:'400',color:'#1A2744',marginBottom:'24px'}}>Artículos relacionados</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'16px'}}>
        <Link to="/ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Certificación ENS: todo lo que necesitas saber</p>
        </Link>
        <Link to="/declaracion-conformidad-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Declaración de conformidad ENS vs certificado: diferencias</p>
        </Link>
        <Link to="/cuanto-cuesta-certificado-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS · Precio</p>
          <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Cuánto cuesta el certificado ENS en 2026</p>
        </Link>
        <Link to="/gap-analysis-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS · Gap Analysis</p>
          <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Gap analysis ENS: el primer paso para el certificado</p>
        </Link>
      </div>
    </section>

    <h2>Preguntas frecuentes sobre el ENS Básico para pymes</h2>

    <div className="faq-article">
      <div className="faq-article-item">
        <div className="faq-article-q">¿Puedo obtener el ENS Básico sin consultoría externa?</div>
        <div className="faq-article-a">Técnicamente sí, pero en la práctica es muy difícil sin experiencia previa en sistemas de gestión de seguridad. Los principales obstáculos son la interpretación correcta de los controles del RD 311/2022, la elaboración de un análisis de riesgos metodológicamente válido, y la preparación de la documentación con el nivel de detalle que exigen los auditores. Las empresas que lo intentan sin apoyo suelen tardar el doble del tiempo y muchas no superan la auditoría en el primer intento.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿El ENS Básico sirve para contratos con el Ayuntamiento de mi ciudad?</div>
        <div className="faq-article-a">Depende del ayuntamiento y del tipo de contrato. Los ayuntamientos grandes ya exigen el certificado ENS en la mayoría de sus licitaciones TIC. Los medianos están incorporando el requisito. En cualquier caso, tener el ENS Básico es una ventaja competitiva significativa en cualquier licitación pública, independientemente de si el pliego lo exige formalmente, ya que transmite confianza y seriedad al órgano contratante.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Cuántos empleados tiene que tener mi empresa para el ENS Básico?</div>
        <div className="faq-article-a">El ENS no establece ningún umbral de tamaño ni de número de empleados. Lo que determina si una empresa necesita el ENS es si presta servicios TIC a organismos del sector público. Hemos certificado en ENS Básico empresas desde 2 empleados hasta grandes corporaciones. El tamaño sí influye en la complejidad del proceso: una empresa pequeña con pocos sistemas en alcance puede completarlo de forma más ágil.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿El ENS Básico tiene que renovarse?</div>
        <div className="faq-article-a">Sí. El certificado ENS Básico tiene una vigencia de 2 años. Transcurrido ese plazo, debe renovarse mediante una nueva auditoría de certificación. Es recomendable iniciar el proceso de renovación 3-4 meses antes de la fecha de caducidad para evitar periodos sin certificado vigente que podrían afectar a contratos o licitaciones activas.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Si tengo el ENS Básico, puedo ampliar a Medio más adelante?</div>
        <div className="faq-article-a">Sí, y es el camino natural para muchas empresas. Partir del ENS Básico y ampliar a Medio cuando sea necesario es perfectamente posible. El proceso de ampliación consiste en implementar los controles adicionales que exige la categoría Media, actualizar la documentación y someterse a una nueva auditoría de certificación. La base documental y los controles del ENS Básico siguen siendo válidos y se amplían, no se sustituyen.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>¿Lista tu pyme para el ENS Básico?</h3>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Diagnóstico gratuito · Sin compromiso · Respuesta en 24 horas · Toda España, presencial y remoto</p>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar diagnóstico gratuito →</Link>
    </div>

  </div>
</article></>
  )
}
