import { Link } from 'react-router-dom'

export default function DeclaracionConformidadEns() {
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
    .faq-article-item.open .faq-article-a { display:block; }
    .comparison-table { width:100%; border-collapse:collapse; margin:32px 0; font-family:'Inter',sans-serif; font-size:14px; }
    .comparison-table th { background:#1A2744; color:#fff; padding:14px 18px; text-align:left; font-weight:500; }
    .comparison-table td { padding:14px 18px; border-bottom:1px solid #E5E5E0; color:#3A4560; vertical-align:top; }
    .comparison-table tr:nth-child(even) td { background:#F7F7F5; }` }} />
<div style={{background:'var(--white)',borderBottom:'1px solid var(--border)',padding:'12px 0',marginTop:'72px'}}>
  <div className="container">
    <nav style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Blog</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>Declaración de Conformidad ENS vs Certificado ENS</span>
    </nav>
  </div>
</div>


<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">ENS · Certificación · Actualizado mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        Declaración de conformidad ENS vs certificado ENS: no son la misma cosa.
      </h1>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        Muchas empresas confunden estos dos documentos y presentan la declaración cuando el pliego exige el certificado. El resultado es la exclusión de la licitación. Esta guía explica las diferencias con precisión.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>⏱ Lectura: 9 minutos</span>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>📅 Actualizado: mayo 2026</span>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>✍️ Laura Sánchez · Directora de Consultoría GRC</span>
      </div>
    </div>
  </div>
</section>


<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <h2>Qué es la declaración de conformidad ENS</h2>

    <p>La <strong>declaración de conformidad ENS</strong> es un documento elaborado y firmado por la propia organización en el que se afirma que sus sistemas de información cumplen con los requisitos del Esquema Nacional de Seguridad. Es, en esencia, una autodeclaración: no requiere que ningún tercero independiente verifique que los controles están realmente implantados.</p>

    <p>El RD 311/2022 contempla este mecanismo exclusivamente para sistemas de <strong>categoría Básica</strong>. Para emitirla válidamente, la organización debe haber realizado previamente un análisis de riesgos, haber implantado las medidas de seguridad del Anexo II del RD 311/2022 aplicables a la categoría Básica, y haber documentado todo ello de forma coherente y verificable.</p>

    <p>El proceso de elaboración incluye: identificar los sistemas en alcance, valorar los activos y determinar la categoría (que debe resultar Básica), implementar los controles requeridos, documentar el estado de cada control y firmar la declaración ante el responsable de seguridad de la organización. La declaración debe incluir una referencia explícita al RD 311/2022, la descripción del sistema en alcance y la fecha de elaboración.</p>

    <p>Desde el punto de vista legal, la declaración de conformidad tiene el mismo valor que cualquier otra declaración responsable en el ordenamiento administrativo español: quien la firma asume la responsabilidad de su veracidad y puede incurrir en responsabilidad administrativa o penal si resulta falsa. No es un documento menor ni una formalidad vacía.</p>

    <h2>Qué es el certificado ENS</h2>

    <p>El <strong>certificado ENS</strong> es el documento expedido por una entidad de certificación acreditada por ENAC (Entidad Nacional de Acreditación) que acredita que el sistema de información auditado cumple con los requisitos del ENS en la categoría y dimensiones declaradas. A diferencia de la declaración de conformidad, el certificado requiere una <strong>auditoría independiente</strong> realizada por profesionales externos que comprueban de forma objetiva e imparcial el estado real de los controles.</p>

    <p>El proceso de certificación incluye dos fases de auditoría: la revisión documental (en la que los auditores analizan la política de seguridad, el análisis de riesgos, los procedimientos y los registros de controles) y la auditoría técnica in situ o remota (en la que se comprueban los controles técnicos implementados: configuraciones, accesos, logs, cifrado, continuidad). Una vez completada la auditoría sin no conformidades abiertas, la entidad emite el certificado.</p>

    <p>El certificado ENS tiene una <strong>vigencia de 2 años</strong> a partir de la fecha de emisión. Transcurrido ese plazo, debe renovarse mediante una nueva auditoría. Entre las entidades acreditadas por ENAC para emitir certificados ENS figuran Bureau Veritas, AENOR, SGS, Applus+ y BSI, entre otras. El certificado identifica explícitamente la organización certificada, los sistemas en alcance, la categoría, las dimensiones de seguridad evaluadas, la fecha de emisión y la fecha de caducidad, y puede verificarse en el registro público del CCN.</p>

    <h2>Diferencias clave: tabla comparativa</h2>

    <table className="comparison-table">
      <thead>
        <tr>
          <th>Criterio</th>
          <th>Declaración de conformidad</th>
          <th>Certificado ENS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Quién la emite</td>
          <td>La propia organización (autoevaluación)</td>
          <td>Entidad acreditada por ENAC (tercero independiente)</td>
        </tr>
        <tr>
          <td>Auditoría externa</td>
          <td>No requerida</td>
          <td>Obligatoria</td>
        </tr>
        <tr>
          <td>Categorías aplicables</td>
          <td>Solo Básica</td>
          <td>Básica, Media y Alta</td>
        </tr>
        <tr>
          <td>Vigencia formal</td>
          <td>No establecida (revisión continua)</td>
          <td>2 años</td>
        </tr>
        <tr>
          <td>Registro público CCN</td>
          <td>No</td>
          <td>Sí, verificable</td>
        </tr>
        <tr>
          <td>Aceptación en pliegos</td>
          <td>Cada vez más limitada</td>
          <td>Universalmente aceptada</td>
        </tr>
        <tr>
          <td>Credibilidad ante el cliente público</td>
          <td>Limitada</td>
          <td>Alta</td>
        </tr>
      </tbody>
    </table>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>¿Tu pliego pide certificado o declaración? Avson GRC analiza tu caso en 24 horas. Trabajamos con empresas en toda España, en formato presencial y remoto.</span>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Consultar ahora →</Link>
    </div>

    <h2>¿Qué piden los pliegos en la práctica?</h2>

    <p>La práctica real de contratación pública en España muestra una <strong>tendencia inequívoca hacia el certificado</strong> emitido por entidad acreditada, incluso para sistemas de categoría Básica. Esta tendencia se ha acelerado desde la entrada en vigor del RD 311/2022 y los plazos transitorios que ya han concluido.</p>

    <p>Los Ministerios y organismos de la Administración General del Estado, los grandes hospitales públicos, las universidades públicas y las comunidades autónomas más avanzadas en madurez digital exigen sistemáticamente el certificado de entidad acreditada en sus pliegos. La Administración local presenta mayor heterogeneidad, pero los ayuntamientos grandes también tienden al certificado.</p>

    <p>Los pliegos suelen referirse al certificado ENS usando expresiones como: "certificado ENS emitido por entidad de certificación acreditada por ENAC", "certificación de conformidad con el ENS emitida por tercero independiente" o "certificado de seguridad del ENS". Cuando aparece la expresión "declaración de conformidad" de forma explícita, sí suele admitirse ese mecanismo para categoría Básica, pero cada vez es menos frecuente.</p>

    <p>Un error muy habitual es leer el pliego rápidamente y asumir que cualquier "documento ENS" sirve. Los pliegos más modernos son explícitos: exigen el certificado y especifican que la entidad emisora debe estar acreditada por ENAC. Presentar únicamente la declaración de conformidad en esos casos es motivo de exclusión automática.</p>

    <h2>¿Cuándo tiene sentido la declaración de conformidad?</h2>

    <p>La declaración de conformidad tiene sentido en un número reducido de situaciones. El primer escenario es el de la empresa que quiere establecer una <strong>base de cumplimiento interno</strong> antes de iniciar el proceso de certificación: la declaración actúa como un objetivo intermedio que fuerza a la organización a implementar los controles y a documentarlos, facilitando después la transición al certificado.</p>

    <p>El segundo escenario es el de contratos con organismos públicos de pequeño tamaño —algunos ayuntamientos rurales, entidades locales menores— que aún no exigen el certificado formal y aceptan la declaración. Es importante verificar caso a caso, porque la tendencia es hacia el certificado.</p>

    <p>El tercer escenario es la <strong>urgencia extrema</strong>: una empresa que tiene un contrato en tramitación con un plazo muy ajustado y cuyos controles están implementados pero aún no ha pasado por la auditoría externa. En ese caso, la declaración puede ser una solución temporal, siempre que el pliego la acepte explícitamente.</p>

    <p>Lo que nunca tiene sentido es usar la declaración de conformidad como sustituto permanente del certificado cuando la empresa tiene vocación de licitadora habitual. El coste de perder una sola licitación importante supera con creces el coste de obtener el certificado.</p>

    <h2>Riesgos de presentar la declaración cuando el pliego pide certificado</h2>

    <p>Presentar una declaración de conformidad en un proceso de licitación que exige certificado tiene consecuencias concretas. El primer riesgo es la <strong>exclusión directa</strong>: la mesa de contratación descalificará la oferta por no cumplir los requisitos técnicos mínimos del pliego. No hay recurso posible si el pliego era claro.</p>

    <p>El segundo riesgo es la pérdida de contratos en renovación: si la empresa ya tiene un contrato vigente y el organismo actualiza sus requisitos de seguridad exigiendo el certificado en la renovación, la empresa puede perder esa renovación. Es más habitual de lo que parece en contratos de mantenimiento y soporte IT a largo plazo.</p>

    <p>El tercer riesgo afecta a la reputación: en un mercado de proveedores TIC para la Administración relativamente pequeño, una exclusión por requisitos de cumplimiento normativo genera una percepción negativa que puede afectar a futuras relaciones comerciales.</p>

    <p>Por último, existe un riesgo jurídico: si la empresa presenta una declaración de conformidad que no refleja fielmente el estado de sus controles, incurre en una declaración falsa con potenciales consecuencias administrativas y, en casos extremos, penales.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>Más de 90 empresas ya tienen su certificado ENS con Avson. Tiempo medio: 3,5 meses. Garantía de éxito por escrito. Toda España.</span>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Empezar ahora →</Link>
    </div>

    <h2>Cómo obtener el certificado ENS con garantía</h2>

    <p>El proceso para pasar de cero —o de una declaración de conformidad existente— al certificado ENS tiene unas fases bien definidas. El punto de partida es el <strong>análisis GAP</strong>, que evalúa el estado actual de los controles frente a los requisitos ENS de la categoría aplicable y cuantifica el trabajo pendiente.</p>

    <p>Con los resultados del análisis GAP, se elabora un plan de adecuación detallado que cubre la documentación necesaria —política de seguridad, análisis de riesgos, procedimientos operativos, plan de continuidad, gestión de incidentes— y la implantación de controles técnicos: doble factor de autenticación, cifrado, monitorización, gestión de parches y copias de seguridad verificadas.</p>

    <p>Antes de la auditoría de certificación, se realiza una <strong>auditoría interna previa</strong> para identificar y corregir cualquier desviación. Es el ensayo general que garantiza que la organización llega a la auditoría externa sin sorpresas.</p>

    <p>En Avson GRC acompañamos el proceso completo desde el diagnóstico inicial hasta la recepción del certificado, trabajando con empresas en toda España tanto de forma presencial como en formato remoto. Nuestra garantía es simple: si siguiendo nuestro plan de adecuación no superas la auditoría, la repetimos sin coste adicional. Es una garantía que hemos dado en más de 90 proyectos y que, hasta la fecha, no hemos tenido que ejecutar.</p>

    
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
        <Link to="/certificado-ens-media-alta" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>ENS Media y Alta: requisitos adicionales y cómo certificarse</p>
        </Link>
        <Link to="/auditoria-ens-proceso" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS · Auditoría</p>
          <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Auditoría ENS: proceso, entidades acreditadas y cómo prepararse</p>
        </Link>
      </div>
    </section>

    <h2>Preguntas frecuentes sobre la declaración de conformidad ENS</h2>

    <div className="faq-article">
      <div className="faq-article-item">
        <div className="faq-article-q">¿Puede una empresa de cualquier tamaño hacer la declaración de conformidad?</div>
        <div className="faq-article-a">Sí. El RD 311/2022 no establece ningún requisito de tamaño para emitir la declaración de conformidad. Cualquier empresa que haya implementado los controles ENS de categoría Básica puede elaborarla. Sin embargo, el tamaño no exime de la responsabilidad de que los controles estén realmente implantados: la declaración es una afirmación jurídica que puede verificarse en una auditoría posterior.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿La declaración de conformidad tiene fecha de caducidad?</div>
        <div className="faq-article-a">El RD 311/2022 no fija una vigencia máxima explícita para la declaración de conformidad, pero exige que se mantenga actualizada y que refleje el estado real del sistema. Cualquier cambio significativo en el sistema obliga a revisar y actualizar la declaración. Muchas organizaciones la revisan anualmente como mínimo.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Los pliegos siempre especifican si quieren certificado o declaración?</div>
        <div className="faq-article-a">No siempre con la claridad deseable. Algunos pliegos usan expresiones ambiguas como 'acreditación ENS' o 'cumplimiento ENS' sin especificar. En esos casos, lo más prudente es solicitar al organismo contratante que aclare si acepta la declaración de conformidad o si exige el certificado de entidad acreditada. Presentar la declaración cuando se exige el certificado es motivo de exclusión.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Si tengo la declaración, puedo convertirla en certificado fácilmente?</div>
        <div className="faq-article-a">Si la declaración se elaboró correctamente y los controles están realmente implementados, el camino hacia el certificado es mucho más corto que partir de cero. Lo que añade el proceso de certificación es la auditoría de una entidad acreditada por ENAC. Con Avson GRC, las empresas que parten de una declaración sólida tardan habitualmente entre 6 y 8 semanas en obtener el certificado.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿La declaración de conformidad vale para ENS Medio?</div>
        <div className="faq-article-a">No. La declaración de conformidad solo es válida para sistemas de categoría Básica. Para categorías Media y Alta, el RD 311/2022 exige obligatoriamente la auditoría de una entidad acreditada por ENAC y la obtención del certificado formal. No existe la opción de autodeclaración para estas categorías.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>¿Necesitas el certificado ENS con urgencia?</h3>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Diagnóstico gratuito · Sin compromiso · Respuesta en 24 horas · Empresas en toda España</p>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar diagnóstico gratuito →</Link>
    </div>

  </div>
</article></>
  )
}
