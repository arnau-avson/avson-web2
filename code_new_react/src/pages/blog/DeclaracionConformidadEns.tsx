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
    <nav style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>&rsaquo;</span>
      <Link to="/blog" style={{color:'var(--text-muted)',textDecoration:'none'}}>Blog</Link>
      <span style={{margin:'0 8px'}}>&rsaquo;</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>Declaraci&oacute;n de Conformidad ENS vs Certificado ENS</span>
    </nav>
  </div>
</div>

<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">ENS &middot; Certificaci&oacute;n &middot; Actualizado mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        Declaraci&oacute;n de conformidad ENS vs certificado ENS: no son la misma cosa.
      </h1>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        Muchas empresas confunden estos dos documentos y presentan la declaraci&oacute;n cuando el pliego exige el certificado. El resultado es la exclusi&oacute;n de la licitaci&oacute;n. Esta gu&iacute;a explica las diferencias con precisi&oacute;n.
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

    <h2>Qu&eacute; es la declaraci&oacute;n de conformidad ENS</h2>

    <p>La <strong>declaraci&oacute;n de conformidad ENS</strong> es un documento elaborado y firmado por la propia organizaci&oacute;n en el que se afirma que sus sistemas de informaci&oacute;n cumplen con los requisitos del Esquema Nacional de Seguridad. Es, en esencia, una autodeclaraci&oacute;n: no requiere que ning&uacute;n tercero independiente verifique que los controles est&aacute;n realmente implantados.</p>

    <p>El RD 311/2022 contempla este mecanismo exclusivamente para sistemas de <strong>categor&iacute;a B&aacute;sica</strong>. Para emitirla v&aacute;lidamente, la organizaci&oacute;n debe haber realizado previamente un an&aacute;lisis de riesgos, haber implantado las medidas de seguridad del Anexo II del RD 311/2022 aplicables a la categor&iacute;a B&aacute;sica, y haber documentado todo ello de forma coherente y verificable.</p>

    <p>El proceso de elaboraci&oacute;n incluye: identificar los sistemas en alcance, valorar los activos y determinar la categor&iacute;a (que debe resultar B&aacute;sica), implementar los controles requeridos, documentar el estado de cada control y firmar la declaraci&oacute;n ante el responsable de seguridad de la organizaci&oacute;n. La declaraci&oacute;n debe incluir una referencia expl&iacute;cita al RD 311/2022, la descripci&oacute;n del sistema en alcance y la fecha de elaboraci&oacute;n.</p>

    <p>Desde el punto de vista legal, la declaraci&oacute;n de conformidad tiene el mismo valor que cualquier otra declaraci&oacute;n responsable en el ordenamiento administrativo espa&ntilde;ol: quien la firma asume la responsabilidad de su veracidad y puede incurrir en responsabilidad administrativa o penal si resulta falsa. No es un documento menor ni una formalidad vac&iacute;a.</p>

    <h2>Qu&eacute; es el certificado ENS</h2>

    <p>El <strong>certificado ENS</strong> es el documento expedido por una entidad de certificaci&oacute;n acreditada por ENAC (Entidad Nacional de Acreditaci&oacute;n) que acredita que el sistema de informaci&oacute;n auditado cumple con los requisitos del ENS en la categor&iacute;a y dimensiones declaradas. A diferencia de la declaraci&oacute;n de conformidad, el certificado requiere una <strong>auditor&iacute;a independiente</strong> realizada por profesionales externos que comprueban de forma objetiva e imparcial el estado real de los controles.</p>

    <p>El proceso de certificaci&oacute;n incluye dos fases de auditor&iacute;a: la revisi&oacute;n documental (en la que los auditores analizan la pol&iacute;tica de seguridad, el an&aacute;lisis de riesgos, los procedimientos y los registros de controles) y la auditor&iacute;a t&eacute;cnica in situ o remota (en la que se comprueban los controles t&eacute;cnicos implementados: configuraciones, accesos, logs, cifrado, continuidad). Una vez completada la auditor&iacute;a sin no conformidades abiertas, la entidad emite el certificado.</p>

    <p>El certificado ENS tiene una <strong>vigencia de 2 a&ntilde;os</strong> a partir de la fecha de emisi&oacute;n. Transcurrido ese plazo, debe renovarse mediante una nueva auditor&iacute;a. Entre las entidades acreditadas por ENAC para emitir certificados ENS figuran Bureau Veritas, AENOR, SGS, Applus+ y BSI, entre otras. El certificado identifica expl&iacute;citamente la organizaci&oacute;n certificada, los sistemas en alcance, la categor&iacute;a, las dimensiones de seguridad evaluadas, la fecha de emisi&oacute;n y la fecha de caducidad, y puede verificarse en el registro p&uacute;blico del CCN.</p>

    <h2>Diferencias clave: tabla comparativa</h2>

    <table className="comparison-table">
      <thead>
        <tr>
          <th>Criterio</th>
          <th>Declaraci&oacute;n de conformidad</th>
          <th>Certificado ENS</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Qui&eacute;n la emite</td>
          <td>La propia organizaci&oacute;n (autoevaluaci&oacute;n)</td>
          <td>Entidad acreditada por ENAC (tercero independiente)</td>
        </tr>
        <tr>
          <td>Auditor&iacute;a externa</td>
          <td>No requerida</td>
          <td>Obligatoria</td>
        </tr>
        <tr>
          <td>Categor&iacute;as aplicables</td>
          <td>Solo B&aacute;sica</td>
          <td>B&aacute;sica, Media y Alta</td>
        </tr>
        <tr>
          <td>Vigencia formal</td>
          <td>No establecida (revisi&oacute;n continua)</td>
          <td>2 a&ntilde;os</td>
        </tr>
        <tr>
          <td>Registro p&uacute;blico CCN</td>
          <td>No</td>
          <td>S&iacute;, verificable</td>
        </tr>
        <tr>
          <td>Aceptaci&oacute;n en pliegos</td>
          <td>Cada vez m&aacute;s limitada</td>
          <td>Universalmente aceptada</td>
        </tr>
        <tr>
          <td>Credibilidad ante el cliente p&uacute;blico</td>
          <td>Limitada</td>
          <td>Alta</td>
        </tr>
      </tbody>
    </table>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>&iquest;Tu pliego pide certificado o declaraci&oacute;n? Avson GRC analiza tu caso en 24 horas. Trabajamos con empresas en toda Espa&ntilde;a, en formato presencial y remoto.</span>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Consultar ahora &rarr;</Link>
    </div>

    <h2>&iquest;Qu&eacute; piden los pliegos en la pr&aacute;ctica?</h2>

    <p>La pr&aacute;ctica real de contrataci&oacute;n p&uacute;blica en Espa&ntilde;a muestra una <strong>tendencia inequ&iacute;voca hacia el certificado</strong> emitido por entidad acreditada, incluso para sistemas de categor&iacute;a B&aacute;sica. Esta tendencia se ha acelerado desde la entrada en vigor del RD 311/2022 y los plazos transitorios que ya han concluido.</p>

    <p>Los Ministerios y organismos de la Administraci&oacute;n General del Estado, los grandes hospitales p&uacute;blicos, las universidades p&uacute;blicas y las comunidades aut&oacute;nomas m&aacute;s avanzadas en madurez digital exigen sistem&aacute;ticamente el certificado de entidad acreditada en sus pliegos. La Administraci&oacute;n local presenta mayor heterogeneidad, pero los ayuntamientos grandes tambi&eacute;n tienden al certificado.</p>

    <p>Los pliegos suelen referirse al certificado ENS usando expresiones como: &quot;certificado ENS emitido por entidad de certificaci&oacute;n acreditada por ENAC&quot;, &quot;certificaci&oacute;n de conformidad con el ENS emitida por tercero independiente&quot; o &quot;certificado de seguridad del ENS&quot;. Cuando aparece la expresi&oacute;n &quot;declaraci&oacute;n de conformidad&quot; de forma expl&iacute;cita, s&iacute; suele admitirse ese mecanismo para categor&iacute;a B&aacute;sica, pero cada vez es menos frecuente.</p>

    <p>Un error muy habitual es leer el pliego r&aacute;pidamente y asumir que cualquier &quot;documento ENS&quot; sirve. Los pliegos m&aacute;s modernos son expl&iacute;citos: exigen el certificado y especifican que la entidad emisora debe estar acreditada por ENAC. Presentar &uacute;nicamente la declaraci&oacute;n de conformidad en esos casos es motivo de exclusi&oacute;n autom&aacute;tica.</p>

    <h2>&iquest;Cu&aacute;ndo tiene sentido la declaraci&oacute;n de conformidad?</h2>

    <p>La declaraci&oacute;n de conformidad tiene sentido en un n&uacute;mero reducido de situaciones. El primer escenario es el de la empresa que quiere establecer una <strong>base de cumplimiento interno</strong> antes de iniciar el proceso de certificaci&oacute;n: la declaraci&oacute;n act&uacute;a como un objetivo intermedio que fuerza a la organizaci&oacute;n a implementar los controles y a documentarlos, facilitando despu&eacute;s la transici&oacute;n al certificado.</p>

    <p>El segundo escenario es el de contratos con organismos p&uacute;blicos de peque&ntilde;o tama&ntilde;o &mdash;algunos ayuntamientos rurales, entidades locales menores&mdash; que a&uacute;n no exigen el certificado formal y aceptan la declaraci&oacute;n. Es importante verificar caso a caso, porque la tendencia es hacia el certificado.</p>

    <p>El tercer escenario es la <strong>urgencia extrema</strong>: una empresa que tiene un contrato en tramitaci&oacute;n con un plazo muy ajustado y cuyos controles est&aacute;n implementados pero a&uacute;n no ha pasado por la auditor&iacute;a externa. En ese caso, la declaraci&oacute;n puede ser una soluci&oacute;n temporal, siempre que el pliego la acepte expl&iacute;citamente.</p>

    <p>Lo que nunca tiene sentido es usar la declaraci&oacute;n de conformidad como sustituto permanente del certificado cuando la empresa tiene vocaci&oacute;n de licitadora habitual. El coste de perder una sola licitaci&oacute;n importante supera con creces el coste de obtener el certificado.</p>

    <h2>Riesgos de presentar la declaraci&oacute;n cuando el pliego pide certificado</h2>

    <p>Presentar una declaraci&oacute;n de conformidad en un proceso de licitaci&oacute;n que exige certificado tiene consecuencias concretas. El primer riesgo es la <strong>exclusi&oacute;n directa</strong>: la mesa de contrataci&oacute;n descalificar&aacute; la oferta por no cumplir los requisitos t&eacute;cnicos m&iacute;nimos del pliego. No hay recurso posible si el pliego era claro.</p>

    <p>El segundo riesgo es la p&eacute;rdida de contratos en renovaci&oacute;n: si la empresa ya tiene un contrato vigente y el organismo actualiza sus requisitos de seguridad exigiendo el certificado en la renovaci&oacute;n, la empresa puede perder esa renovaci&oacute;n. Es m&aacute;s habitual de lo que parece en contratos de mantenimiento y soporte IT a largo plazo.</p>

    <p>El tercer riesgo afecta a la reputaci&oacute;n: en un mercado de proveedores TIC para la Administraci&oacute;n relativamente peque&ntilde;o, una exclusi&oacute;n por requisitos de cumplimiento normativo genera una percepci&oacute;n negativa que puede afectar a futuras relaciones comerciales.</p>

    <p>Por &uacute;ltimo, existe un riesgo jur&iacute;dico: si la empresa presenta una declaraci&oacute;n de conformidad que no refleja fielmente el estado de sus controles, incurre en una declaraci&oacute;n falsa con potenciales consecuencias administrativas y, en casos extremos, penales.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>M&aacute;s de 90 empresas ya tienen su certificado ENS con Avson. Tiempo medio: 3,5 meses. Garant&iacute;a de &eacute;xito por escrito. Toda Espa&ntilde;a.</span>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Empezar ahora &rarr;</Link>
    </div>

    <h2>C&oacute;mo obtener el certificado ENS con garant&iacute;a</h2>

    <p>El proceso para pasar de cero &mdash;o de una declaraci&oacute;n de conformidad existente&mdash; al certificado ENS tiene unas fases bien definidas. El punto de partida es el <strong>an&aacute;lisis GAP</strong>, que eval&uacute;a el estado actual de los controles frente a los requisitos ENS de la categor&iacute;a aplicable y cuantifica el trabajo pendiente.</p>

    <p>Con los resultados del an&aacute;lisis GAP, se elabora un plan de adecuaci&oacute;n detallado que cubre la documentaci&oacute;n necesaria &mdash;pol&iacute;tica de seguridad, an&aacute;lisis de riesgos, procedimientos operativos, plan de continuidad, gesti&oacute;n de incidentes&mdash; y la implantaci&oacute;n de controles t&eacute;cnicos: doble factor de autenticaci&oacute;n, cifrado, monitorizaci&oacute;n, gesti&oacute;n de parches y copias de seguridad verificadas.</p>

    <p>Antes de la auditor&iacute;a de certificaci&oacute;n, se realiza una <strong>auditor&iacute;a interna previa</strong> para identificar y corregir cualquier desviaci&oacute;n. Es el ensayo general que garantiza que la organizaci&oacute;n llega a la auditor&iacute;a externa sin sorpresas.</p>

    <p>En Avson GRC acompa&ntilde;amos el proceso completo desde el diagn&oacute;stico inicial hasta la recepci&oacute;n del certificado, trabajando con empresas en toda Espa&ntilde;a tanto de forma presencial como en formato remoto. Nuestra garant&iacute;a es simple: si siguiendo nuestro plan de adecuaci&oacute;n no superas la auditor&iacute;a, la repetimos sin coste adicional. Es una garant&iacute;a que hemos dado en m&aacute;s de 90 proyectos y que, hasta la fecha, no hemos tenido que ejecutar.</p>

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
        <Link to="/blog/certificado-ens-media-alta" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>ENS Media y Alta: requisitos adicionales y c&oacute;mo certificarse</p>
        </Link>
        <Link to="/blog/auditoria-ens-proceso" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid #C9A84C',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:"'Inter',sans-serif",fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'#C9A84C',marginBottom:'8px'}}>ENS &middot; Auditor&iacute;a</p>
          <p style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'17px',color:'#1A2744',lineHeight:'1.4',margin:'0'}}>Auditor&iacute;a ENS: proceso, entidades acreditadas y c&oacute;mo prepararse</p>
        </Link>
      </div>
    </section>

    <h2>Preguntas frecuentes sobre la declaraci&oacute;n de conformidad ENS</h2>

    <div className="faq-article">
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Puede una empresa de cualquier tama&ntilde;o hacer la declaraci&oacute;n de conformidad?</div>
        <div className="faq-article-a">S&iacute;. El RD 311/2022 no establece ning&uacute;n requisito de tama&ntilde;o para emitir la declaraci&oacute;n de conformidad. Cualquier empresa que haya implementado los controles ENS de categor&iacute;a B&aacute;sica puede elaborarla. Sin embargo, el tama&ntilde;o no exime de la responsabilidad de que los controles est&eacute;n realmente implantados: la declaraci&oacute;n es una afirmaci&oacute;n jur&iacute;dica que puede verificarse en una auditor&iacute;a posterior.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;La declaraci&oacute;n de conformidad tiene fecha de caducidad?</div>
        <div className="faq-article-a">El RD 311/2022 no fija una vigencia m&aacute;xima expl&iacute;cita para la declaraci&oacute;n de conformidad, pero exige que se mantenga actualizada y que refleje el estado real del sistema. Cualquier cambio significativo en el sistema obliga a revisar y actualizar la declaraci&oacute;n. Muchas organizaciones la revisan anualmente como m&iacute;nimo.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Los pliegos siempre especifican si quieren certificado o declaraci&oacute;n?</div>
        <div className="faq-article-a">No siempre con la claridad deseable. Algunos pliegos usan expresiones ambiguas como &apos;acreditaci&oacute;n ENS&apos; o &apos;cumplimiento ENS&apos; sin especificar. En esos casos, lo m&aacute;s prudente es solicitar al organismo contratante que aclare si acepta la declaraci&oacute;n de conformidad o si exige el certificado de entidad acreditada. Presentar la declaraci&oacute;n cuando se exige el certificado es motivo de exclusi&oacute;n.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Si tengo la declaraci&oacute;n, puedo convertirla en certificado f&aacute;cilmente?</div>
        <div className="faq-article-a">Si la declaraci&oacute;n se elabor&oacute; correctamente y los controles est&aacute;n realmente implementados, el camino hacia el certificado es mucho m&aacute;s corto que partir de cero. Lo que a&ntilde;ade el proceso de certificaci&oacute;n es la auditor&iacute;a de una entidad acreditada por ENAC. Con Avson GRC, las empresas que parten de una declaraci&oacute;n s&oacute;lida tardan habitualmente entre 6 y 8 semanas en obtener el certificado.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;La declaraci&oacute;n de conformidad vale para ENS Medio?</div>
        <div className="faq-article-a">No. La declaraci&oacute;n de conformidad solo es v&aacute;lida para sistemas de categor&iacute;a B&aacute;sica. Para categor&iacute;as Media y Alta, el RD 311/2022 exige obligatoriamente la auditor&iacute;a de una entidad acreditada por ENAC y la obtenci&oacute;n del certificado formal. No existe la opci&oacute;n de autodeclaraci&oacute;n para estas categor&iacute;as.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>&iquest;Necesitas el certificado ENS con urgencia?</h3>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Pide presupuesto &middot; Sin compromiso &middot; Respuesta en 24 horas &middot; Empresas en toda Espa&ntilde;a</p>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar presupuesto sin compromiso &rarr;</Link>
    </div>

  </div>
</article></>
  )
}
