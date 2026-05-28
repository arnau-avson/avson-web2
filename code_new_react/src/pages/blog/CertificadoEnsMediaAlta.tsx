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
    <nav style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Blog</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>ENS Media vs Alta</span>
    </nav>
  </div>
</div>

<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">ENS · Categorías · Actualizado mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        Certificado ENS Media vs Alta: diferencias y cómo saber cuál necesitas
      </h1>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        La categoría ENS determina el nivel de exigencia, el coste y el plazo de certificación. Elegir la categoría incorrecta puede invalidar tu certificado o hacerte pagar de más.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>⏱ Lectura: 9 minutos</span>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>📅 Actualizado: mayo 2026</span>
      </div>
    </div>
  </div>
</section>

<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <h2>Las tres categorías del ENS: Básica, Media y Alta</h2>

    <p>El <strong>Esquema Nacional de Seguridad</strong> no es un marco de "talla única". Reconoce que no todos los sistemas tienen el mismo impacto potencial si se ven comprometidos y, en consecuencia, establece tres niveles de exigencia: Básica, Media y Alta.</p>

    <p>La categoría de un sistema no la elige libremente la empresa ni su consultor: se determina mediante un proceso formal de <strong>valoración de activos</strong> conforme a la metodología recogida en el Anexo I del RD 311/2022. Este proceso analiza el impacto potencial de un incidente de seguridad sobre las cinco dimensiones de seguridad del sistema: disponibilidad, autenticidad, integridad, confidencialidad y trazabilidad (DAIC-T).</p>

    <p>Si el impacto en cualquiera de esas dimensiones se valora como <em>bajo</em>, el sistema es Básico. Si alguna dimensión alcanza impacto <em>medio</em>, el sistema es de categoría Media. Si se alcanza impacto <em>alto</em> o <em>muy alto</em>, la categoría es Alta.</p>

    <p>La categoría del sistema determina qué medidas del catálogo del Anexo II del RD 311/2022 deben aplicarse y con qué nivel de intensidad (bajo, medio o alto). A mayor categoría, mayor número de medidas y mayor nivel de implementación exigido.</p>

    <h2>Certificado ENS Básica: cuándo aplica y qué medidas exige</h2>

    <p>La categoría <strong>ENS Básica</strong> aplica cuando el impacto potencial de un incidente de seguridad en el sistema es <em>limitado</em>. En la práctica, esto corresponde a sistemas que manejan información no especialmente sensible, que no soportan servicios esenciales y cuya interrupción no causaría perjuicios graves a ciudadanos ni a la Administración.</p>

    <p>Ejemplos típicos de sistemas en categoría Básica: aplicaciones de gestión documental con datos administrativos no sensibles, sistemas de información internos de soporte a la actividad administrativa, portales web informativos, sistemas de gestión de registros sin datos de carácter personal sensibles.</p>

    <p>Para ENS Básica, el catálogo de medidas exige la implementación de controles en su <strong>nivel bajo (L)</strong>. Las medidas más relevantes incluyen:</p>

    <ul>
      <li>Política de Seguridad de la Información aprobada por la dirección</li>
      <li>Análisis de riesgos básico documentado</li>
      <li>Control de acceso con autenticación mediante usuario y contraseña robusta</li>
      <li>Gestión de privilegios de acceso (principio de mínimo privilegio)</li>
      <li>Protección frente a código dañino (antivirus, EDR)</li>
      <li>Copias de seguridad y procedimiento de restauración verificado</li>
      <li>Gestión básica de incidentes de seguridad con registro</li>
      <li>Formación básica en seguridad de la información para el personal</li>
      <li>Inventario de activos documentado</li>
    </ul>

    <p>Una ventaja importante de la categoría Básica es que <strong>admite la Declaración de Conformidad</strong> como mecanismo de acreditación: la empresa puede autodeclarar su conformidad sin necesidad de una auditoría externa. Sin embargo, como se ha explicado, cada vez más pliegos públicos exigen el certificado completo emitido por entidad acreditada ENAC incluso para categoría Básica.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>¿No sabes qué categoría necesitas? El diagnóstico gratuito de Avson lo determina con precisión en 5 días hábiles.</span>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Diagnóstico gratuito →</Link>
    </div>

    <h2>Certificado ENS Media: quién lo necesita y qué controles incluye</h2>

    <p>La categoría <strong>ENS Media</strong> es la más frecuente entre las empresas proveedoras TIC del sector público español de tamaño medio y grande. Aplica cuando el impacto potencial de un incidente de seguridad en alguna de las dimensiones del sistema es <em>grave</em>.</p>

    <p>Ejemplos de sistemas en categoría Media: plataformas de tramitación electrónica con datos personales de ciudadanos, sistemas de gestión de expedientes administrativos, plataformas de contratación pública, sistemas de soporte a servicios públicos de salud o educación, infraestructuras cloud que alojan datos de carácter personal sometidos al RGPD.</p>

    <p>Para ENS Media, las medidas del catálogo deben aplicarse en su <strong>nivel medio (M)</strong>, que implica controles significativamente más exigentes que el nivel bajo:</p>

    <ul>
      <li><strong>Autenticación de doble factor (MFA) obligatoria</strong> para accesos a sistemas con datos sensibles y accesos remotos</li>
      <li>Análisis de riesgos formal con metodología reconocida (compatible con PILAR, MAGERIT o similar)</li>
      <li>Plan de Tratamiento de Riesgos (PTR) actualizado y aprobado</li>
      <li>Gestión de vulnerabilidades con análisis periódico (al menos trimestral) y plan de parcheo</li>
      <li><strong>Monitorización de seguridad continua</strong> con sistema SIEM o equivalente</li>
      <li>Control de acceso privilegiado (PAM) para administradores de sistemas</li>
      <li>Gestión de la configuración con líneas de base de seguridad documentadas</li>
      <li>Plan de Continuidad del Servicio formalizado y probado</li>
      <li>Gestión de incidentes con equipo de respuesta y procedimientos documentados</li>
      <li>Auditoría de accesos a sistemas críticos con retención de logs</li>
      <li>Cifrado de datos en tránsito y en reposo para información sensible</li>
      <li>Control de acceso a instalaciones físicas documentado</li>
    </ul>

    <p>El proceso de certificación ENS Media <strong>requiere obligatoriamente una auditoría por entidad acreditada ENAC</strong>. No es posible optar por la Declaración de Conformidad. La auditoría incluye revisión documental exhaustiva y comprobaciones técnicas de los controles implementados.</p>

    <h2>Certificado ENS Alta: para infraestructuras críticas</h2>

    <p>La categoría <strong>ENS Alta</strong> es la más exigente del esquema y aplica cuando el impacto potencial de un incidente de seguridad sería <em>muy grave o catastrófico</em>. Es típica de infraestructuras críticas designadas por el operador nacional, sistemas de defensa y seguridad, servicios esenciales del Estado (energía, agua, transporte), sistemas de información que manejan datos especialmente sensibles como información clasificada.</p>

    <p>Para ENS Alta, todas las medidas del catálogo se aplican en su <strong>nivel alto (H)</strong>, el más exigente:</p>

    <ul>
      <li>Autenticación multifactor con certificados digitales o tokens hardware (no solo TOTP software)</li>
      <li>Segregación física de redes para sistemas de alta criticidad</li>
      <li>Criptografía de alta resistencia con algoritmos aprobados por el CCN</li>
      <li>Auditorías de penetración (pentesting) regulares con corrección de hallazgos</li>
      <li>Gestión de incidentes con capacidades de respuesta avanzada (CSIRT interno o contratado)</li>
      <li>Análisis forense de incidentes de seguridad</li>
      <li>Control de dispositivos extraíbles y medios de almacenamiento con cifrado obligatorio</li>
      <li>Revisión de código de seguridad para aplicaciones críticas</li>
      <li>Plan de Continuidad con RTO y RPO documentados y probados regularmente</li>
      <li>Evaluación de la seguridad de proveedores de la cadena de suministro</li>
    </ul>

    <h2>Cómo determinar la categoría ENS de tu empresa</h2>

    <p>El proceso formal de determinación de categoría sigue estos pasos:</p>

    <ol>
      <li><strong>Identificación del alcance:</strong> determinar qué sistemas de información quedan dentro del alcance de la certificación. El alcance debe estar claramente definido y justificado.</li>
      <li><strong>Inventario de activos:</strong> identificar todos los activos que forman parte del sistema en alcance: información, servicios, software, hardware, redes, instalaciones y personal.</li>
      <li><strong>Valoración de activos:</strong> asignar a cada activo un valor en las cinco dimensiones de seguridad (DAIC-T) mediante la escala del Anexo I del RD 311/2022. La herramienta <strong>PILAR</strong> del CCN facilita enormemente este proceso.</li>
      <li><strong>Determinación de la categoría:</strong> la categoría del sistema es la mayor de las categorías individuales de los activos que lo componen. Si el activo más crítico es Media, el sistema es Media.</li>
      <li><strong>Documentación:</strong> todo el proceso debe quedar documentado en el Documento de Aplicabilidad y en la Declaración de Aplicabilidad de las medidas ENS.</li>
    </ol>

    <p>Un error frecuente es intentar manipular la valoración para obtener una categoría más baja y reducir el esfuerzo de implementación. Las entidades auditoras son expertas en detectar valoraciones inconsistentes, y un certificado emitido sobre una categoría incorrecta puede ser impugnado.</p>

    <h2>Diferencias en el proceso de certificación según categoría</h2>

    <table className="comp-table">
      <thead>
        <tr>
          <th>Aspecto</th>
          <th><span className="badge badge--basic">Básica</span></th>
          <th><span className="badge badge--media">Media</span></th>
          <th><span className="badge badge--alta">Alta</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Acreditación posible</strong></td>
          <td>DDC o Certificado</td>
          <td>Solo Certificado ENAC</td>
          <td>Solo Certificado ENAC</td>
        </tr>
        <tr>
          <td><strong>Auditoría externa</strong></td>
          <td>Opcional (recomendada)</td>
          <td>Obligatoria</td>
          <td>Obligatoria + técnica avanzada</td>
        </tr>
        <tr>
          <td><strong>Profundidad del análisis de riesgos</strong></td>
          <td>Básico</td>
          <td>Formal (MAGERIT/PILAR)</td>
          <td>Exhaustivo con PILAR</td>
        </tr>
        <tr>
          <td><strong>MFA obligatorio</strong></td>
          <td>No</td>
          <td>Sí</td>
          <td>Sí (con certificado digital)</td>
        </tr>
        <tr>
          <td><strong>Monitorización SIEM</strong></td>
          <td>No</td>
          <td>Sí</td>
          <td>Sí (avanzada)</td>
        </tr>
        <tr>
          <td><strong>Pentesting</strong></td>
          <td>No</td>
          <td>Recomendado</td>
          <td>Obligatorio</td>
        </tr>
        <tr>
          <td><strong>Vigencia del certificado</strong></td>
          <td>2 años</td>
          <td>2 años</td>
          <td>2 años</td>
        </tr>
      </tbody>
    </table>

    <h2>Coste y tiempo según categoría</h2>

    <p>El coste y plazo de certificación varían significativamente según la categoría y el tamaño de la organización. Como referencia general:</p>

    <p><strong>ENS Básica:</strong> es la certificación más accesible. Para una pyme de 10-30 empleados con alcance limitado a un sistema concreto, el proceso puede completarse en 2-3 meses. El número de medidas y la profundidad exigida son menores, lo que reduce tanto el esfuerzo de implementación como el coste de la auditoría.</p>

    <p><strong>ENS Media:</strong> es el proceso más habitual y equilibrado. Para una empresa de 20-100 empleados, el proceso típico dura entre 3 y 4 meses. La mayor complejidad respecto a Básica viene principalmente de los controles técnicos (MFA, SIEM, gestión de vulnerabilidades) y de la profundidad de la auditoría. El coste es moderado para el valor que aporta en términos de acceso a contratos públicos.</p>

    <p><strong>ENS Alta:</strong> es la certificación más exigente y costosa. Suele requerirse en organizaciones con infraestructuras complejas y sistemas de alta criticidad. El plazo típico es de 4-6 meses y el coste es significativamente superior por la profundidad de los controles técnicos y la complejidad de la auditoría.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>Certificaciones en cascada: ENS Media + ISO 27001 al 65% de coste gracias al solapamiento de requisitos.</span>
      <Link to="/packs" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Ver packs →</Link>
    </div>

    
<section style={{maxWidth:'800px',margin:'0 auto 64px',padding:'0 var(--pad-x)'}}>
  <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(20px,2.5vw,26px)',fontWeight:'400',color:'var(--navy)',marginBottom:'24px'}}>Artículos relacionados</h2>
  <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'16px'}}>
    <Link to="/que-es-el-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS</p>
      <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>¿Qué es el ENS? Guía completa del Esquema Nacional de Seguridad</p>
    </Link>
    <Link to="/certificado-ens-obligatorio" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS</p>
      <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>¿Es obligatorio el certificado ENS? Quién debe cumplirlo</p>
    </Link>
    <Link to="/renovacion-certificado-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS</p>
      <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>Renovación del certificado ENS: proceso y plazos</p>
    </Link>
  </div>
</section>

<h2>Preguntas frecuentes</h2>

    <div className="faq-article">
      <div className="faq-article-item">
        <div className="faq-article-q">¿Cómo sé si necesito ENS Media o Alta?</div>
        <div className="faq-article-a">La categoría se determina valorando el impacto potencial de un incidente de seguridad en los sistemas en alcance usando la escala del Anexo I del RD 311/2022. Si el impacto en alguna dimensión sería grave, aplica Media; si sería muy grave o catastrófico, aplica Alta. La herramienta PILAR del CCN facilita esta valoración. Si hay duda, el diagnóstico gratuito de Avson determina la categoría correcta.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Puedo certificarme en Media si el pliego solo exige Básica?</div>
        <div className="faq-article-a">Sí, y puede ser ventajoso. Una certificación en categoría superior cubre los requisitos de la categoría inferior. Además, algunos pliegos puntúan positivamente certificaciones en categorías superiores, lo que puede darte ventaja competitiva en la valoración de la oferta técnica.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Cuánto tiempo más lleva certificarse en ENS Alta respecto a Media?</div>
        <div className="faq-article-a">Un proyecto de ENS Alta puede requerir entre 1 y 2 meses adicionales respecto a Media, principalmente por la mayor complejidad técnica de algunos controles (criptografía avanzada, segregación de redes, auditorías de penetración) y la profundidad mayor de la auditoría de certificación.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Es posible ampliar la categoría tras la certificación?</div>
        <div className="faq-article-a">Sí. Si la empresa gana contratos que exigen una categoría superior, puede ampliar el alcance o la categoría de su certificación. Esto requiere una nueva auditoría, pero el trabajo previo realizado es reutilizable en gran medida, lo que reduce el esfuerzo adicional.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿El ENS Media es compatible con ISO 27001?</div>
        <div className="faq-article-a">Sí, y son altamente sinérgicos. El ENS Media y la ISO 27001 comparten aproximadamente el 65% de sus requisitos. Una empresa certificada en ENS Media tiene ya implementada la mayor parte de los controles exigidos por ISO 27001, lo que permite obtener esta segunda certificación a un coste marginal significativamente menor.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>¿Qué categoría ENS necesitas?</h3>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Te lo decimos gratis en 5 días hábiles. Sin compromiso.</p>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar diagnóstico gratuito →</Link>
    </div>

    <div style={{marginTop:'48px',paddingTop:'32px',borderTop:'1px solid var(--border)'}}>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'var(--text-muted)'}}>Artículos relacionados:</p>
      <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginTop:'12px'}}>
        <Link to="/que-es-el-ens" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Qué es el ENS →</Link>
        <Link to="/ens-vs-iso27001" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>ENS vs ISO 27001 →</Link>
        <Link to="/renovacion-certificado-ens" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Renovación del certificado ENS →</Link>
      </div>
    </div>

  </div>
</article></>
  )
}
