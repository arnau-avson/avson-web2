import { Link } from 'react-router-dom'

export default function CertificadoEnsMediaAlta() {
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
    .comp-table { width:100%; border-collapse:collapse; margin:32px 0; font-family:'Inter',sans-serif; font-size:14px; }
    .comp-table th { background:#1A2744; color:#fff; padding:14px 16px; text-align:left; font-weight:500; letter-spacing:0.04em; }
    .comp-table td { padding:12px 16px; border-bottom:1px solid #E5E5E0; color:#3A4560; vertical-align:top; }
    .comp-table tr:nth-child(even) td { background:#F7F7F5; }
    .badge { display:inline-block; font-size:10px; font-weight:600; letter-spacing:0.08em; text-transform:uppercase; padding:3px 8px; border-radius:0; }
    .badge--basic { background:#E8F4F8; color:#1A6B8A; }
    .badge--media { background:#FFF3CD; color:#8A6800; }
    .badge--alta { background:#FFE8E8; color:#8A1A1A; }
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
      <span style={{color:'var(--navy)',fontWeight:'500'}}>ENS Media vs Alta</span>
    </nav>
  </div>
</div>

<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">ENS &middot; Categor&iacute;as &middot; Actualizado mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        Certificado ENS Media vs Alta: diferencias y c&oacute;mo saber cu&aacute;l necesitas
      </h1>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        La categor&iacute;a ENS determina el nivel de exigencia, el coste y el plazo de certificaci&oacute;n. Elegir la categor&iacute;a incorrecta puede invalidar tu certificado o hacerte pagar de m&aacute;s.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>&#9201; Lectura: 9 minutos</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>&#128197; Actualizado: mayo 2026</span>
      </div>
    </div>
  </div>
</section>

<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <h2>Las tres categor&iacute;as del ENS: B&aacute;sica, Media y Alta</h2>

    <p>El <strong>Esquema Nacional de Seguridad</strong> no es un marco de &quot;talla &uacute;nica&quot;. Reconoce que no todos los sistemas tienen el mismo impacto potencial si se ven comprometidos y, en consecuencia, establece tres niveles de exigencia: B&aacute;sica, Media y Alta.</p>

    <p>La categor&iacute;a de un sistema no la elige libremente la empresa ni su consultor: se determina mediante un proceso formal de <strong>valoraci&oacute;n de activos</strong> conforme a la metodolog&iacute;a recogida en el Anexo I del RD 311/2022. Este proceso analiza el impacto potencial de un incidente de seguridad sobre las cinco dimensiones de seguridad del sistema: disponibilidad, autenticidad, integridad, confidencialidad y trazabilidad (DAIC-T).</p>

    <p>Si el impacto en cualquiera de esas dimensiones se valora como <em>bajo</em>, el sistema es B&aacute;sico. Si alguna dimensi&oacute;n alcanza impacto <em>medio</em>, el sistema es de categor&iacute;a Media. Si se alcanza impacto <em>alto</em> o <em>muy alto</em>, la categor&iacute;a es Alta.</p>

    <p>La categor&iacute;a del sistema determina qu&eacute; medidas del cat&aacute;logo del Anexo II del RD 311/2022 deben aplicarse y con qu&eacute; nivel de intensidad (bajo, medio o alto). A mayor categor&iacute;a, mayor n&uacute;mero de medidas y mayor nivel de implementaci&oacute;n exigido.</p>

    <h2>Certificado ENS B&aacute;sica: cu&aacute;ndo aplica y qu&eacute; medidas exige</h2>

    <p>La categor&iacute;a <strong>ENS B&aacute;sica</strong> aplica cuando el impacto potencial de un incidente de seguridad en el sistema es <em>limitado</em>. En la pr&aacute;ctica, esto corresponde a sistemas que manejan informaci&oacute;n no especialmente sensible, que no soportan servicios esenciales y cuya interrupci&oacute;n no causar&iacute;a perjuicios graves a ciudadanos ni a la Administraci&oacute;n.</p>

    <p>Ejemplos t&iacute;picos de sistemas en categor&iacute;a B&aacute;sica: aplicaciones de gesti&oacute;n documental con datos administrativos no sensibles, sistemas de informaci&oacute;n internos de soporte a la actividad administrativa, portales web informativos, sistemas de gesti&oacute;n de registros sin datos de car&aacute;cter personal sensibles.</p>

    <p>Para ENS B&aacute;sica, el cat&aacute;logo de medidas exige la implementaci&oacute;n de controles en su <strong>nivel bajo (L)</strong>. Las medidas m&aacute;s relevantes incluyen:</p>

    <ul>
      <li>Pol&iacute;tica de Seguridad de la Informaci&oacute;n aprobada por la direcci&oacute;n</li>
      <li>An&aacute;lisis de riesgos b&aacute;sico documentado</li>
      <li>Control de acceso con autenticaci&oacute;n mediante usuario y contrase&ntilde;a robusta</li>
      <li>Gesti&oacute;n de privilegios de acceso (principio de m&iacute;nimo privilegio)</li>
      <li>Protecci&oacute;n frente a c&oacute;digo da&ntilde;ino (antivirus, EDR)</li>
      <li>Copias de seguridad y procedimiento de restauraci&oacute;n verificado</li>
      <li>Gesti&oacute;n b&aacute;sica de incidentes de seguridad con registro</li>
      <li>Formaci&oacute;n b&aacute;sica en seguridad de la informaci&oacute;n para el personal</li>
      <li>Inventario de activos documentado</li>
    </ul>

    <p>Una ventaja importante de la categor&iacute;a B&aacute;sica es que <strong>admite la Declaraci&oacute;n de Conformidad</strong> como mecanismo de acreditaci&oacute;n: la empresa puede autodeclarar su conformidad sin necesidad de una auditor&iacute;a externa. Sin embargo, como se ha explicado, cada vez m&aacute;s pliegos p&uacute;blicos exigen el certificado completo emitido por entidad acreditada ENAC incluso para categor&iacute;a B&aacute;sica.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>&iquest;No sabes qu&eacute; categor&iacute;a necesitas? El presupuesto sin compromiso de Avson lo determina con precisi&oacute;n en 5 d&iacute;as h&aacute;biles.</span>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Pide presupuesto &rarr;</Link>
    </div>

    <h2>Certificado ENS Media: qui&eacute;n lo necesita y qu&eacute; controles incluye</h2>

    <p>La categor&iacute;a <strong>ENS Media</strong> es la m&aacute;s frecuente entre las empresas proveedoras TIC del sector p&uacute;blico espa&ntilde;ol de tama&ntilde;o medio y grande. Aplica cuando el impacto potencial de un incidente de seguridad en alguna de las dimensiones del sistema es <em>grave</em>.</p>

    <p>Ejemplos de sistemas en categor&iacute;a Media: plataformas de tramitaci&oacute;n electr&oacute;nica con datos personales de ciudadanos, sistemas de gesti&oacute;n de expedientes administrativos, plataformas de contrataci&oacute;n p&uacute;blica, sistemas de soporte a servicios p&uacute;blicos de salud o educaci&oacute;n, infraestructuras cloud que alojan datos de car&aacute;cter personal sometidos al RGPD.</p>

    <p>Para ENS Media, las medidas del cat&aacute;logo deben aplicarse en su <strong>nivel medio (M)</strong>, que implica controles significativamente m&aacute;s exigentes que el nivel bajo:</p>

    <ul>
      <li><strong>Autenticaci&oacute;n de doble factor (MFA) obligatoria</strong> para accesos a sistemas con datos sensibles y accesos remotos</li>
      <li>An&aacute;lisis de riesgos formal con metodolog&iacute;a reconocida (compatible con PILAR, MAGERIT o similar)</li>
      <li>Plan de Tratamiento de Riesgos (PTR) actualizado y aprobado</li>
      <li>Gesti&oacute;n de vulnerabilidades con an&aacute;lisis peri&oacute;dico (al menos trimestral) y plan de parcheo</li>
      <li><strong>Monitorizaci&oacute;n de seguridad continua</strong> con sistema SIEM o equivalente</li>
      <li>Control de acceso privilegiado (PAM) para administradores de sistemas</li>
      <li>Gesti&oacute;n de la configuraci&oacute;n con l&iacute;neas de base de seguridad documentadas</li>
      <li>Plan de Continuidad del Servicio formalizado y probado</li>
      <li>Gesti&oacute;n de incidentes con equipo de respuesta y procedimientos documentados</li>
      <li>Auditor&iacute;a de accesos a sistemas cr&iacute;ticos con retenci&oacute;n de logs</li>
      <li>Cifrado de datos en tr&aacute;nsito y en reposo para informaci&oacute;n sensible</li>
      <li>Control de acceso a instalaciones f&iacute;sicas documentado</li>
    </ul>

    <p>El proceso de certificaci&oacute;n ENS Media <strong>requiere obligatoriamente una auditor&iacute;a por entidad acreditada ENAC</strong>. No es posible optar por la Declaraci&oacute;n de Conformidad. La auditor&iacute;a incluye revisi&oacute;n documental exhaustiva y comprobaciones t&eacute;cnicas de los controles implementados.</p>

    <h2>Certificado ENS Alta: para infraestructuras cr&iacute;ticas</h2>

    <p>La categor&iacute;a <strong>ENS Alta</strong> es la m&aacute;s exigente del esquema y aplica cuando el impacto potencial de un incidente de seguridad ser&iacute;a <em>muy grave o catastr&oacute;fico</em>. Es t&iacute;pica de infraestructuras cr&iacute;ticas designadas por el operador nacional, sistemas de defensa y seguridad, servicios esenciales del Estado (energ&iacute;a, agua, transporte), sistemas de informaci&oacute;n que manejan datos especialmente sensibles como informaci&oacute;n clasificada.</p>

    <p>Para ENS Alta, todas las medidas del cat&aacute;logo se aplican en su <strong>nivel alto (H)</strong>, el m&aacute;s exigente:</p>

    <ul>
      <li>Autenticaci&oacute;n multifactor con certificados digitales o tokens hardware (no solo TOTP software)</li>
      <li>Segregaci&oacute;n f&iacute;sica de redes para sistemas de alta criticidad</li>
      <li>Criptograf&iacute;a de alta resistencia con algoritmos aprobados por el CCN</li>
      <li>Auditor&iacute;as de penetraci&oacute;n (pentesting) regulares con correcci&oacute;n de hallazgos</li>
      <li>Gesti&oacute;n de incidentes con capacidades de respuesta avanzada (CSIRT interno o contratado)</li>
      <li>An&aacute;lisis forense de incidentes de seguridad</li>
      <li>Control de dispositivos extra&iacute;bles y medios de almacenamiento con cifrado obligatorio</li>
      <li>Revisi&oacute;n de c&oacute;digo de seguridad para aplicaciones cr&iacute;ticas</li>
      <li>Plan de Continuidad con RTO y RPO documentados y probados regularmente</li>
      <li>Evaluaci&oacute;n de la seguridad de proveedores de la cadena de suministro</li>
    </ul>

    <h2>C&oacute;mo determinar la categor&iacute;a ENS de tu empresa</h2>

    <p>El proceso formal de determinaci&oacute;n de categor&iacute;a sigue estos pasos:</p>

    <ol>
      <li><strong>Identificaci&oacute;n del alcance:</strong> determinar qu&eacute; sistemas de informaci&oacute;n quedan dentro del alcance de la certificaci&oacute;n. El alcance debe estar claramente definido y justificado.</li>
      <li><strong>Inventario de activos:</strong> identificar todos los activos que forman parte del sistema en alcance: informaci&oacute;n, servicios, software, hardware, redes, instalaciones y personal.</li>
      <li><strong>Valoraci&oacute;n de activos:</strong> asignar a cada activo un valor en las cinco dimensiones de seguridad (DAIC-T) mediante la escala del Anexo I del RD 311/2022. La herramienta <strong>PILAR</strong> del CCN facilita enormemente este proceso.</li>
      <li><strong>Determinaci&oacute;n de la categor&iacute;a:</strong> la categor&iacute;a del sistema es la mayor de las categor&iacute;as individuales de los activos que lo componen. Si el activo m&aacute;s cr&iacute;tico es Media, el sistema es Media.</li>
      <li><strong>Documentaci&oacute;n:</strong> todo el proceso debe quedar documentado en el Documento de Aplicabilidad y en la Declaraci&oacute;n de Aplicabilidad de las medidas ENS.</li>
    </ol>

    <p>Un error frecuente es intentar manipular la valoraci&oacute;n para obtener una categor&iacute;a m&aacute;s baja y reducir el esfuerzo de implementaci&oacute;n. Las entidades auditoras son expertas en detectar valoraciones inconsistentes, y un certificado emitido sobre una categor&iacute;a incorrecta puede ser impugnado.</p>

    <h2>Diferencias en el proceso de certificaci&oacute;n seg&uacute;n categor&iacute;a</h2>

    <table className="comp-table">
      <thead>
        <tr>
          <th>Aspecto</th>
          <th><span className="badge badge--basic">B&aacute;sica</span></th>
          <th><span className="badge badge--media">Media</span></th>
          <th><span className="badge badge--alta">Alta</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Acreditaci&oacute;n posible</strong></td>
          <td>DDC o Certificado</td>
          <td>Solo Certificado ENAC</td>
          <td>Solo Certificado ENAC</td>
        </tr>
        <tr>
          <td><strong>Auditor&iacute;a externa</strong></td>
          <td>Opcional (recomendada)</td>
          <td>Obligatoria</td>
          <td>Obligatoria + t&eacute;cnica avanzada</td>
        </tr>
        <tr>
          <td><strong>Profundidad del an&aacute;lisis de riesgos</strong></td>
          <td>B&aacute;sico</td>
          <td>Formal (MAGERIT/PILAR)</td>
          <td>Exhaustivo con PILAR</td>
        </tr>
        <tr>
          <td><strong>MFA obligatorio</strong></td>
          <td>No</td>
          <td>S&iacute;</td>
          <td>S&iacute; (con certificado digital)</td>
        </tr>
        <tr>
          <td><strong>Monitorizaci&oacute;n SIEM</strong></td>
          <td>No</td>
          <td>S&iacute;</td>
          <td>S&iacute; (avanzada)</td>
        </tr>
        <tr>
          <td><strong>Pentesting</strong></td>
          <td>No</td>
          <td>Recomendado</td>
          <td>Obligatorio</td>
        </tr>
        <tr>
          <td><strong>Vigencia del certificado</strong></td>
          <td>2 a&ntilde;os</td>
          <td>2 a&ntilde;os</td>
          <td>2 a&ntilde;os</td>
        </tr>
      </tbody>
    </table>

    <h2>Coste y tiempo seg&uacute;n categor&iacute;a</h2>

    <p>El coste y plazo de certificaci&oacute;n var&iacute;an significativamente seg&uacute;n la categor&iacute;a y el tama&ntilde;o de la organizaci&oacute;n. Como referencia general:</p>

    <p><strong>ENS B&aacute;sica:</strong> es la certificaci&oacute;n m&aacute;s accesible. Para una pyme de 10-30 empleados con alcance limitado a un sistema concreto, el proceso puede completarse en 2-3 meses. El n&uacute;mero de medidas y la profundidad exigida son menores, lo que reduce tanto el esfuerzo de implementaci&oacute;n como el coste de la auditor&iacute;a.</p>

    <p><strong>ENS Media:</strong> es el proceso m&aacute;s habitual y equilibrado. Para una empresa de 20-100 empleados, el proceso t&iacute;pico dura entre 3 y 4 meses. La mayor complejidad respecto a B&aacute;sica viene principalmente de los controles t&eacute;cnicos (MFA, SIEM, gesti&oacute;n de vulnerabilidades) y de la profundidad de la auditor&iacute;a. El coste es moderado para el valor que aporta en t&eacute;rminos de acceso a contratos p&uacute;blicos.</p>

    <p><strong>ENS Alta:</strong> es la certificaci&oacute;n m&aacute;s exigente y costosa. Suele requerirse en organizaciones con infraestructuras complejas y sistemas de alta criticidad. El plazo t&iacute;pico es de 4-6 meses y el coste es significativamente superior por la profundidad de los controles t&eacute;cnicos y la complejidad de la auditor&iacute;a.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>Certificaciones en cascada: ENS Media + ISO 27001 al 65% de coste gracias al solapamiento de requisitos.</span>
      <Link to="/packs" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Ver packs &rarr;</Link>
    </div>


<section style={{maxWidth:'800px',margin:'0 auto 64px',padding:'0 var(--pad-x)'}}>
  <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(20px,2.5vw,26px)',fontWeight:'400',color:'var(--navy)',marginBottom:'24px'}}>Art&iacute;culos relacionados</h2>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'16px'}}>
    <Link to="/blog/que-es-el-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS</p>
      <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>&iquest;Qu&eacute; es el ENS? Gu&iacute;a completa del Esquema Nacional de Seguridad</p>
    </Link>
    <Link to="/blog/certificado-ens-obligatorio" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS</p>
      <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>&iquest;Es obligatorio el certificado ENS? Qui&eacute;n debe cumplirlo</p>
    </Link>
    <Link to="/blog/renovacion-certificado-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS</p>
      <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>Renovaci&oacute;n del certificado ENS: proceso y plazos</p>
    </Link>
  </div>
</section>

<h2>Preguntas frecuentes</h2>

    <div className="faq-article">
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;C&oacute;mo s&eacute; si necesito ENS Media o Alta?</div>
        <div className="faq-article-a">La categor&iacute;a se determina valorando el impacto potencial de un incidente de seguridad en los sistemas en alcance usando la escala del Anexo I del RD 311/2022. Si el impacto en alguna dimensi&oacute;n ser&iacute;a grave, aplica Media; si ser&iacute;a muy grave o catastr&oacute;fico, aplica Alta. La herramienta PILAR del CCN facilita esta valoraci&oacute;n. Si hay duda, el presupuesto sin compromiso de Avson determina la categor&iacute;a correcta.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Puedo certificarme en Media si el pliego solo exige B&aacute;sica?</div>
        <div className="faq-article-a">S&iacute;, y puede ser ventajoso. Una certificaci&oacute;n en categor&iacute;a superior cubre los requisitos de la categor&iacute;a inferior. Adem&aacute;s, algunos pliegos punt&uacute;an positivamente certificaciones en categor&iacute;as superiores, lo que puede darte ventaja competitiva en la valoraci&oacute;n de la oferta t&eacute;cnica.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Cu&aacute;nto tiempo m&aacute;s lleva certificarse en ENS Alta respecto a Media?</div>
        <div className="faq-article-a">Un proyecto de ENS Alta puede requerir entre 1 y 2 meses adicionales respecto a Media, principalmente por la mayor complejidad t&eacute;cnica de algunos controles (criptograf&iacute;a avanzada, segregaci&oacute;n de redes, auditor&iacute;as de penetraci&oacute;n) y la profundidad mayor de la auditor&iacute;a de certificaci&oacute;n.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;Es posible ampliar la categor&iacute;a tras la certificaci&oacute;n?</div>
        <div className="faq-article-a">S&iacute;. Si la empresa gana contratos que exigen una categor&iacute;a superior, puede ampliar el alcance o la categor&iacute;a de su certificaci&oacute;n. Esto requiere una nueva auditor&iacute;a, pero el trabajo previo realizado es reutilizable en gran medida, lo que reduce el esfuerzo adicional.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item, .faq-article-item')?.classList.toggle('open')}>
        <div className="faq-article-q">&iquest;El ENS Media es compatible con ISO 27001?</div>
        <div className="faq-article-a">S&iacute;, y son altamente sin&eacute;rgicos. El ENS Media y la ISO 27001 comparten aproximadamente el 65% de sus requisitos. Una empresa certificada en ENS Media tiene ya implementada la mayor parte de los controles exigidos por ISO 27001, lo que permite obtener esta segunda certificaci&oacute;n a un coste marginal significativamente menor.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>&iquest;Qu&eacute; categor&iacute;a ENS necesitas?</h3>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Te lo decimos gratis en 5 d&iacute;as h&aacute;biles. Sin compromiso.</p>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar presupuesto sin compromiso &rarr;</Link>
    </div>

    <div style={{marginTop:'48px',paddingTop:'32px',borderTop:'1px solid var(--border)'}}>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'13px',color:'var(--text-muted)'}}>Art&iacute;culos relacionados:</p>
      <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginTop:'12px'}}>
        <Link to="/blog/que-es-el-ens" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Qu&eacute; es el ENS &rarr;</Link>
        <Link to="/blog/ens-vs-iso27001" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>ENS vs ISO 27001 &rarr;</Link>
        <Link to="/blog/renovacion-certificado-ens" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Renovaci&oacute;n del certificado ENS &rarr;</Link>
      </div>
    </div>

  </div>
</article></>
  )
}
