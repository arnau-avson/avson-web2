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
    <nav style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Blog</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>Auditoría ENS: proceso paso a paso</span>
    </nav>
  </div>
</div>


<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">ENS · Auditoría · Actualizado mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        Auditoría ENS: qué es, cómo funciona y cómo preparar a tu empresa.
      </h1>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        La auditoría de certificación ENS es el momento de la verdad. Esta guía explica exactamente qué ocurre en cada fase, qué miran los auditores y cómo garantizar que tu empresa la supera en el primer intento.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>⏱ Lectura: 10 minutos</span>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>📅 Actualizado: mayo 2026</span>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>✍️ Laura Sánchez · Directora de Consultoría GRC</span>
      </div>
    </div>
  </div>
</section>


<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <h2>Qué es la auditoría de certificación ENS</h2>

    <p>La <strong>auditoría de certificación ENS</strong> es el proceso mediante el cual una entidad independiente acreditada por ENAC verifica que los sistemas de información de una organización cumplen con los requisitos del Esquema Nacional de Seguridad establecidos en el RD 311/2022. Es el paso previo e imprescindible para obtener el certificado ENS, y su resultado determina si la organización supera o no el proceso de certificación.</p>

    <p>Es importante distinguir entre dos tipos de auditoría en el contexto del ENS. La <strong>auditoría interna</strong> es la que realiza la propia organización —o una consultora en su nombre— para evaluar el estado de los controles y preparar la certificación. Tiene un carácter preparatorio y no produce el certificado. La <strong>auditoría de certificación</strong> es la que realiza la entidad acreditada por ENAC, y su informe positivo es el que habilita la emisión del certificado.</p>

    <p>El objeto de la auditoría es verificar que la organización ha implementado las medidas de seguridad del Anexo II del RD 311/2022 correspondientes a la categoría declarada (Básica, Media o Alta) y que dichas medidas funcionan de forma efectiva y sostenida, no solo en papel. Esta distinción entre "estar documentado" y "funcionar en la práctica" es la que provoca la mayoría de las no conformidades.</p>

    <h2>Quién puede realizar la auditoría ENS</h2>

    <p>Solo pueden emitir el certificado ENS las entidades de certificación acreditadas por <strong>ENAC (Entidad Nacional de Acreditación)</strong> bajo el esquema específico de certificación del Esquema Nacional de Seguridad. ENAC es el organismo nacional de acreditación en España, reconocido por el Reglamento (CE) 765/2008, y la acreditación garantiza la competencia técnica e imparcialidad de la entidad certificadora.</p>

    <p>Entre las entidades acreditadas por ENAC para el ENS figuran algunas de las principales firmas de certificación de nivel internacional: <strong>Bureau Veritas</strong>, <strong>AENOR</strong>, <strong>SGS</strong>, <strong>Applus+</strong> y <strong>BSI Group</strong>, entre otras. El CCN publica en su web el listado actualizado de entidades habilitadas. La elección de la entidad certificadora es libre, pero conviene tener en cuenta su experiencia en el sector de actividad de la organización y los plazos disponibles para la auditoría.</p>

    <p>Una consultora de implantación como Avson GRC no puede emitir el certificado ENS porque no es una entidad de certificación; su función es preparar a la organización para superar la auditoría con la máxima probabilidad de éxito. La relación entre consultora y entidad certificadora es de complementariedad, no de sustitución.</p>

    <h2>Fases de la auditoría ENS</h2>

    <p>La auditoría de certificación ENS se estructura en cuatro fases diferenciadas, con objetivos y metodología distintos en cada una:</p>

    <h3>Fase 1: revisión documental</h3>
    <p>Los auditores analizan la documentación del sistema de gestión de seguridad: Política de Seguridad de la Información, análisis de riesgos, Declaración de Aplicabilidad, Plan de Tratamiento de Riesgos, procedimientos operativos (gestión de incidentes, copias de seguridad, control de accesos, gestión de parches, continuidad del servicio) y registros de actividad. Esta fase se realiza habitualmente en remoto, antes de la visita presencial.</p>

    <h3>Fase 2: visita in situ (o auditoría técnica remota)</h3>
    <p>Los auditores comprueban que los controles documentados están realmente implementados. Entrevistan al personal clave (responsable de seguridad, administradores de sistemas, responsable de continuidad), inspeccionan las instalaciones físicas (control de acceso a CPD, protección de equipos, sistemas de detección de incendios y agua), y realizan comprobaciones técnicas en los sistemas: configuraciones de seguridad, registros de autenticación, cifrado de datos en tránsito y en reposo, gestión de vulnerabilidades y test de restauración de copias de seguridad.</p>

    <h3>Fase 3: informe de auditoría</h3>
    <p>Tras la visita, la entidad certificadora elabora un informe detallado con los hallazgos: controles que cumplen, no conformidades menores (desviaciones que no afectan al cumplimiento global pero deben corregirse) y no conformidades mayores (incumplimientos que impiden la certificación hasta que se subsanan). La organización dispone de un plazo —habitualmente 30 a 90 días— para corregir las no conformidades y presentar evidencias de subsanación.</p>

    <h3>Fase 4: certificación</h3>
    <p>Si el informe de subsanación es satisfactorio, la entidad certificadora emite el certificado ENS con una vigencia de 2 años. El certificado se registra en el sistema del CCN y puede ser verificado públicamente por los organismos públicos que liciten.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>Avson GRC prepara a tu empresa para la auditoría ENS con una tasa de éxito del 100%. Trabajamos con empresas en toda España, presencial y remoto.</span>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Hablar con un experto →</Link>
    </div>

    <h2>Qué comprueban los auditores en cada dimensión</h2>

    <p>El ENS evalúa los sistemas en cinco <strong>dimensiones de seguridad</strong>, y los auditores comprueban controles específicos en cada una de ellas:</p>

    <ul>
      <li><strong>Confidencialidad:</strong> los auditores verifican que solo las personas autorizadas acceden a la información. Comprueban el control de accesos (matrices de permisos, principio de mínimo privilegio), el cifrado de datos sensibles tanto en tránsito como en reposo, la clasificación de la información y los procedimientos de gestión de usuarios (altas, bajas y cambios de permisos).</li>
      <li><strong>Integridad:</strong> se verifica que la información no puede modificarse de forma no autorizada o inadvertida. Los auditores comprueban los controles de integridad de datos, el registro de auditoría (logs de acceso y modificación), la gestión de cambios en sistemas y la separación de entornos de desarrollo y producción.</li>
      <li><strong>Disponibilidad:</strong> se verifica la capacidad de los sistemas para estar operativos cuando se necesitan. Los auditores comprueban los planes de continuidad del servicio, la frecuencia y verificación de las copias de seguridad, los procedimientos de recuperación ante desastres y las métricas de disponibilidad históricas.</li>
      <li><strong>Autenticidad:</strong> los auditores verifican que se puede confirmar la identidad de los actores que interactúan con el sistema. Comprueban los mecanismos de autenticación (especialmente la autenticación multifactor, obligatoria en categoría Media y Alta), la gestión de certificados digitales y los controles de acceso físico.</li>
      <li><strong>Trazabilidad:</strong> se verifica que todas las acciones relevantes sobre el sistema quedan registradas y son atribuibles a un usuario concreto. Los auditores comprueban los sistemas de logging, la integridad de los logs (que no puedan ser manipulados), la retención de registros y los procedimientos de revisión periódica de logs.</li>
    </ul>

    <h2>Los errores más frecuentes que provocan no conformidades</h2>

    <p>Tras acompañar a más de 90 empresas en sus procesos de certificación ENS, en Avson GRC hemos identificado los errores que con más frecuencia provocan no conformidades en la auditoría:</p>

    <ul>
      <li><strong>Documentación desactualizada:</strong> la Política de Seguridad o el análisis de riesgos se elaboraron hace más de un año y no reflejan cambios significativos en los sistemas (nuevos servidores, migración a cloud, nuevos empleados). Los auditores comprueban las fechas de revisión de todos los documentos.</li>
      <li><strong>Copias de seguridad no verificadas:</strong> existen procedimientos de backup documentados pero nunca se ha realizado una prueba de restauración real. Es uno de los hallazgos más habituales y más graves.</li>
      <li><strong>Gestión de parches deficiente:</strong> los sistemas tienen vulnerabilidades críticas conocidas sin parchear, o no existe un proceso formal de gestión de actualizaciones de seguridad con plazos máximos establecidos.</li>
      <li><strong>Control de accesos inadecuado:</strong> usuarios con privilegios de administrador innecesarios, cuentas de exempleados activas, ausencia de revisiones periódicas de permisos o contraseñas débiles sin política de complejidad.</li>
      <li><strong>Ausencia de doble factor de autenticación:</strong> obligatorio para accesos privilegiados en categoría Media y para todos los accesos remotos. Es un hallazgo frecuente en empresas con infraestructura heredada.</li>
      <li><strong>Plan de continuidad no probado:</strong> el plan existe en papel pero nunca se ha ejecutado un simulacro, o el último simulacro data de hace más de 12 meses.</li>
      <li><strong>Formación en seguridad no documentada:</strong> el personal recibe formación informal pero no existe registro de las sesiones, los contenidos ni los asistentes.</li>
    </ul>

    <h2>Cómo preparar la documentación antes de la auditoría</h2>

    <p>La preparación documental es la parte del proceso sobre la que más control tiene la organización antes de la auditoría. Un conjunto de documentos bien elaborado y coherente entre sí es el mejor punto de partida para una auditoría exitosa.</p>

    <p>El <strong>inventario de activos</strong> debe estar completo y actualizado: hardware, software, datos, servicios y personas vinculadas al sistema en alcance. Cada activo debe tener un responsable asignado y una valoración de su criticidad en las dimensiones de seguridad.</p>

    <p>El <strong>análisis de riesgos</strong> debe cubrir las amenazas relevantes para el sector y los activos identificados, con la probabilidad e impacto de cada amenaza y las medidas de tratamiento aplicadas o previstas. La metodología debe ser reconocible (MAGERIT, ISO 27005 o metodología propia documentada) y los resultados deben estar actualizados respecto al alcance real del sistema.</p>

    <p>La <strong>Declaración de Aplicabilidad</strong> debe incluir todos los controles del Anexo II del RD 311/2022 aplicables a la categoría, con su estado de implementación (implementado, en curso, no aplicable con justificación) y las referencias a la documentación o evidencias que demuestran su cumplimiento.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>¿Tienes una auditoría ENS próxima? Realizamos un simulacro previo para detectar cualquier gap antes de que lo encuentren los auditores. Disponible para empresas de toda España.</span>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Solicitar simulacro →</Link>
    </div>

    <h2>Qué pasa si no superas la auditoría</h2>

    <p>No superar la auditoría en el primer intento no equivale a un fracaso definitivo; es parte del proceso para muchas organizaciones, especialmente las que se certifican por primera vez. El procedimiento de subsanación está regulado y ofrece una segunda oportunidad.</p>

    <p>Cuando la auditoría detecta <strong>no conformidades menores</strong> —desviaciones que no comprometen la efectividad global del sistema de seguridad—, la organización puede corregirlas y presentar evidencias de subsanación dentro del plazo acordado (habitualmente 30-60 días). Si la subsanación es aceptada, el certificado se emite sin necesidad de repetir la auditoría completa.</p>

    <p>Cuando se detectan <strong>no conformidades mayores</strong> —incumplimientos graves que comprometen la seguridad del sistema—, la organización debe subsanarlas y someterse a una nueva auditoría parcial o completa, según el criterio de la entidad certificadora. El plazo de subsanación es de 90 días en la mayoría de los casos.</p>

    <p>Si transcurrido el plazo de subsanación los hallazgos no se han corregido satisfactoriamente, la entidad certificadora cierra el expediente con resultado negativo y la organización debe iniciar un nuevo proceso de certificación.</p>

    <h2>La garantía de Avson: si no superamos la auditoría, repetimos sin coste</h2>

    <p>En Avson GRC somos los únicos en el mercado que ofrecen una <strong>garantía de éxito por escrito</strong> en el proceso de certificación ENS. Si siguiendo nuestro plan de adecuación y nuestras recomendaciones tu empresa no supera la auditoría de certificación, volvemos a prepararte y repetimos el proceso sin coste adicional.</p>

    <p>Esta garantía no es marketing: es el resultado de un proceso de trabajo riguroso que incluye un gap analysis exhaustivo al inicio, un plan de adecuación detallado y priorizado, la elaboración de toda la documentación requerida, la implementación asistida de los controles técnicos, una auditoría interna previa al estilo de la auditoría de certificación, y el acompañamiento durante la auditoría externa para responder las preguntas de los auditores y gestionar la entrega de evidencias.</p>

    <p>Trabajamos con empresas en toda España, tanto de forma presencial —desplazándonos a las instalaciones del cliente— como en formato completamente remoto mediante herramientas colaborativas. Nuestra experiencia cubre todos los sectores que trabajan con la Administración Pública: tecnología, salud, educación, defensa, utilities, administración local y servicios financieros.</p>

    
    <section style={{margin:'64px 0'}}>
      <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(20px,2.5vw,26px)',fontWeight:'400',color:'#1A2744',marginBottom:'24px'}}>Artículos relacionados</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'16px'}}>
        <Link to="/ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Certificación ENS: todo lo que necesitas saber</p>
        </Link>
        <Link to="/que-es-el-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS · Guía</p>
          <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Qué es el ENS: guía completa del Esquema Nacional de Seguridad</p>
        </Link>
        <Link to="/renovacion-certificado-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS · Renovación</p>
          <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Renovación del certificado ENS: cuándo y cómo hacerlo</p>
        </Link>
        <Link to="/declaracion-conformidad-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Declaración de conformidad ENS vs certificado: diferencias</p>
        </Link>
      </div>
    </section>

    <h2>Preguntas frecuentes sobre la auditoría ENS</h2>

    <div className="faq-article">
      <div className="faq-article-item">
        <div className="faq-article-q">¿Cuánto tiempo dura la auditoría ENS?</div>
        <div className="faq-article-a">La duración varía según la categoría y el tamaño del sistema en alcance. Para categoría Básica en una pyme, la auditoría documental y la visita técnica pueden completarse en 2-3 días hábiles. Para categoría Media en una empresa mediana, puede extenderse a 5-8 días hábiles. La categoría Alta requiere habitualmente entre 2 y 4 semanas de auditoría intensiva.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿La auditoría ENS se hace de forma remota o presencial?</div>
        <div className="faq-article-a">Ambas modalidades son válidas. La revisión documental siempre puede hacerse en remoto. La auditoría técnica in situ puede hacerse también en remoto mediante acceso controlado a los sistemas, aunque para categorías Media y Alta los auditores suelen preferir o exigir visita presencial para comprobar las instalaciones físicas, el control de accesos y la segregación de redes.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Qué documentos hay que tener listos para la auditoría ENS?</div>
        <div className="faq-article-a">La documentación mínima incluye: Política de Seguridad de la Información aprobada por la dirección, análisis de riesgos actualizado, Declaración de Aplicabilidad, Plan de Tratamiento de Riesgos, procedimientos operativos de seguridad (gestión de incidentes, copias de seguridad, control de accesos, gestión de parches), registros de auditoría de los sistemas, plan de continuidad del servicio y documentación de formación del personal.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Cuánto cuesta la auditoría externa ENS?</div>
        <div className="faq-article-a">El coste varía según la entidad certificadora, la categoría y el tamaño del alcance. Como referencia orientativa: ENS Básico en una pyme, entre 3.000 y 6.000 euros; ENS Medio, entre 6.000 y 15.000 euros; ENS Alto, entre 15.000 y 40.000 euros o más. Estos costes son independientes de los honorarios de la consultora de implantación.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Con qué frecuencia hay que repetir la auditoría ENS?</div>
        <div className="faq-article-a">El certificado ENS tiene una vigencia de 2 años, por lo que la auditoría de renovación debe realizarse antes de la caducidad. Adicionalmente, el RD 311/2022 exige auditorías de mantenimiento periódicas (al menos anuales) para verificar que los controles se mantienen en el nivel requerido, aunque estas no sustituyen a la auditoría de certificación bienal.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>¿Tienes una auditoría ENS por delante?</h3>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Te preparamos con garantía de éxito por escrito · Toda España · Respuesta en 24 horas</p>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar diagnóstico gratuito →</Link>
    </div>

  </div>
</article></>
  )
}
