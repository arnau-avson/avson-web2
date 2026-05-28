import { Link } from 'react-router-dom'

export default function QueEsTisax() {
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
    .comp-table th { background:#1A2744; color:#fff; padding:14px 16px; text-align:left; font-weight:500; }
    .comp-table td { padding:12px 16px; border-bottom:1px solid #E5E5E0; color:#3A4560; vertical-align:top; }
    .comp-table tr:nth-child(even) td { background:#F7F7F5; }
    .faq-article { border-top:1px solid #E5E5E0; }
    .faq-article-item { border-bottom:1px solid #E5E5E0; }
    .faq-article-q { font-family:'Inter',sans-serif; font-size:16px; font-weight:500; color:#1A2744; padding:20px 0; cursor:pointer; display:flex; justify-content:space-between; align-items:center; }
    .faq-article-q::after { content:'＋'; font-size:20px; color:#C9A84C; flex-shrink:0; }
    .faq-article-item.open .faq-article-q::after { content:'－'; }
    .faq-article-a { font-family:'Inter',sans-serif; font-size:15px; color:#3A4560; line-height:1.75; padding:0 0 20px; display:none; }
    .faq-article-item.open .faq-article-a { display:block; }
    .cta-inline-box { background:#F7F7F5; border:1px solid #E5E5E0; border-left:3px solid #C9A84C; padding:28px 32px; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap; margin:40px 0; }` }} />
<div style={{background:'var(--white)',borderBottom:'1px solid var(--border)',padding:'12px 0',marginTop:'72px'}}>
  <div className="container">
    <nav style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Blog</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>Qué es TISAX</span>
    </nav>
  </div>
</div>

<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">TISAX · Automoción · Seguridad de la Información · Mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        Qué es TISAX y por qué es obligatorio para proveedores de la industria automotriz.
      </h1>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        Si suministras a Volkswagen, BMW, Mercedes, Stellantis o cualquier otro OEM europeo, es probable que ya tengas o vayas a recibir una solicitud de assessment TISAX. Aquí tienes todo lo que necesitas saber.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>⏱ Lectura: 11 minutos</span>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>📅 Actualizado: mayo 2026</span>
      </div>
    </div>
  </div>
</section>

<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <h2>Qué es TISAX (Trusted Information Security Assessment Exchange)</h2>

    <p><strong>TISAX</strong> (Trusted Information Security Assessment Exchange) es el estándar de seguridad de la información específico para la industria automotriz. Fue creado para responder a una necesidad muy concreta: los fabricantes de vehículos (OEMs) y sus proveedores manejan información extremadamente sensible —datos de prototipos, especificaciones técnicas confidenciales, datos personales de empleados y clientes, accesos a sistemas de producción— y necesitaban un mecanismo común y reconocido para verificar que toda la cadena de suministro protege adecuadamente esa información.</p>

    <p>TISAX no es una certificación en el sentido tradicional del término. Es un <em>assessment</em> (evaluación) cuyo resultado se registra en una plataforma centralizada —el ENX Portal— y puede compartirse con múltiples participantes (fabricantes, Tier 1, Tier 2) sin necesidad de repetir el proceso para cada cliente. Esta característica de "intercambio" es la que lo hace especialmente eficiente para una cadena de suministro tan compleja y multinivel como la del automóvil.</p>

    <p>El catálogo de requisitos sobre el que se basa TISAX es el <strong>VDA ISA</strong> (Verband der Automobilindustrie Information Security Assessment), publicado y mantenido por la asociación alemana de la industria automotriz VDA. Actualmente se encuentra en su versión 6.0, que introduce mejoras significativas en los módulos de protección de datos y seguridad de prototipos.</p>

    <h2>Por qué surgió TISAX y quién lo gestiona (ENX Association + VDA ISA)</h2>

    <p>Antes de TISAX, cada fabricante de automóviles realizaba sus propias auditorías de seguridad a sus proveedores. El resultado era un sistema ineficiente y costoso: un proveedor que suministraba a tres OEMs diferentes podía recibir tres auditorías distintas en el mismo año, con diferentes metodologías, criterios y auditores. El coste administrativo y operativo era enorme, y la comparabilidad entre resultados era prácticamente nula.</p>

    <p>En 2017, la <strong>ENX Association</strong> —una organización sin ánimo de lucro que agrupa a los principales OEMs y proveedores europeos del sector automotriz— lanzó TISAX como solución a este problema. La ENX Association gestiona la acreditación de los proveedores de assessment, administra el ENX Portal donde se registran y comparten los resultados, y supervisa la evolución del estándar en coordinación con la VDA.</p>

    <p>Hoy, TISAX es el estándar de facto para la seguridad de la información en la cadena de suministro automotriz europea, con más de 7.000 organizaciones registradas en el ENX Portal y presencia en más de 30 países. Su adopción ha crecido especialmente entre proveedores españoles tras el impulso de las plantas de Volkswagen en Navarra, Mercedes en Vitoria, Stellantis en Vigo y Zaragoza, y Ford en Valencia.</p>

    <h2>¿Quién necesita TISAX? Los OEMs que lo exigen</h2>

    <p>La pregunta más frecuente que recibimos de empresas españolas es: "¿Me afecta TISAX a mí?" La respuesta depende de si tu empresa es o aspira a ser proveedora de fabricantes de automóviles que exigen el estándar. Los principales OEMs que ya lo exigen o están en proceso de hacerlo obligatorio en toda su cadena de suministro incluyen:</p>

    <ul>
      <li><strong>Volkswagen Group</strong> (VW, Audi, SEAT/CUPRA, Porsche, Skoda): exige TISAX a todos los proveedores que manejan datos confidenciales del grupo.</li>
      <li><strong>BMW Group</strong> (BMW, MINI, Rolls-Royce): requiere TISAX para acceder a determinados sistemas de intercambio de datos y para proyectos de desarrollo conjunto.</li>
      <li><strong>Mercedes-Benz</strong>: exige TISAX para proveedores con acceso a información de prototipos y datos de clientes.</li>
      <li><strong>Stellantis</strong> (Peugeot, Citroën, Opel, Fiat, Alfa Romeo, Jeep): en proceso de implementación progresiva en su cadena de suministro.</li>
      <li><strong>Renault Group</strong> y <strong>Continental, Bosch, ZF</strong> (Tier 1): también exigen TISAX a sus propios proveedores (Tier 2 y Tier 3).</li>
    </ul>

    <p>En España, esto tiene un impacto directo en el ecosistema de proveedores en Navarra, País Vasco, Cataluña, Galicia, Castilla-La Mancha y Valencia, donde se concentran la mayoría de los suministradores de componentes para estas plantas.</p>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Tu empresa necesita cumplir TISAX?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Diagnóstico gratuito en 24 horas. Sin compromiso.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Hablar con un experto →</Link>
    </div>

    <h2>Diferencia entre TISAX y ISO 27001</h2>

    <table className="comp-table">
      <thead>
        <tr>
          <th>Característica</th>
          <th>TISAX</th>
          <th>ISO 27001</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Naturaleza</strong></td>
          <td>Assessment sectorial (no certificación formal)</td>
          <td>Certificación internacional de gestión</td>
        </tr>
        <tr>
          <td><strong>Ámbito sectorial</strong></td>
          <td>Exclusivo sector automotriz</td>
          <td>Cualquier sector y organización</td>
        </tr>
        <tr>
          <td><strong>Marco de referencia</strong></td>
          <td>VDA ISA (basado parcialmente en ISO 27001)</td>
          <td>ISO/IEC 27001:2022</td>
        </tr>
        <tr>
          <td><strong>Entidad evaluadora</strong></td>
          <td>Proveedores acreditados por ENX Association</td>
          <td>Entidades de certificación acreditadas por ENAC</td>
        </tr>
        <tr>
          <td><strong>Compartición de resultados</strong></td>
          <td>ENX Portal: un resultado, múltiples clientes</td>
          <td>Certificado individual, debe presentarse a cada cliente</td>
        </tr>
        <tr>
          <td><strong>Vigencia</strong></td>
          <td>3 años</td>
          <td>3 años (con auditorías anuales de seguimiento)</td>
        </tr>
        <tr>
          <td><strong>Reconocimiento</strong></td>
          <td>Industria automotriz europea</td>
          <td>Internacional, todos los sectores</td>
        </tr>
        <tr>
          <td><strong>Módulos específicos</strong></td>
          <td>Prototipos, datos de vehículos, protección de datos</td>
          <td>No tiene módulos sectoriales específicos</td>
        </tr>
      </tbody>
    </table>

    <p>La relación entre ambos estándares es de <strong>complementariedad, no de sustitución</strong>. Muchas empresas del sector automotriz tienen ISO 27001 y TISAX simultáneamente, ya que cada uno responde a necesidades distintas: ISO 27001 para el mercado general y licitaciones, TISAX para la cadena de suministro automotriz.</p>

    <h2>Los 3 niveles de TISAX Assessment (AL1, AL2, AL3)</h2>

    <p>TISAX define tres niveles de assessment (<em>Assessment Level</em>) en función de la sensibilidad de la información que maneja el proveedor y del nivel de protección requerido por el fabricante cliente:</p>

    <ul>
      <li><strong>AL1 (Assessment Level 1):</strong> Nivel básico para información de confidencialidad normal. El assessment se realiza mediante autoevaluación con plausibilidad check por parte del auditor. Es el nivel menos exigente y el más rápido de obtener.</li>
      <li><strong>AL2 (Assessment Level 2):</strong> Nivel estándar para información de alta confidencialidad. Incluye una auditoría presencial (on-site) en las instalaciones del proveedor. Es el nivel más frecuentemente exigido por los OEMs y cubre la mayoría de los supuestos habituales de intercambio de información.</li>
      <li><strong>AL3 (Assessment Level 3):</strong> Nivel máximo para información de muy alta confidencialidad, como datos de prototipos de vehículos pre-producción o datos de sistemas de conducción autónoma. Requiere dos auditorías presenciales realizadas por auditores independientes. Es el más exigente y costoso.</li>
    </ul>

    <p>El OEM cliente es quien especifica qué nivel de assessment requiere a su proveedor. En la práctica, la mayoría de los proveedores españoles de componentes y servicios de ingeniería deben alcanzar AL2. El nivel AL3 se reserva generalmente para proveedores con acceso a prototipos físicos o datos de alta sensibilidad relacionados con tecnologías de vanguardia.</p>

    <h2>Qué información protege TISAX</h2>

    <p>El catálogo VDA ISA sobre el que se basa TISAX está diseñado para proteger tipos muy específicos de información crítica en el sector automotriz:</p>

    <ul>
      <li><strong>Datos de prototipos:</strong> Especificaciones técnicas, diseños, fotografías e información de vehículos aún no presentados públicamente. Un filtrado de esta información puede tener un impacto enorme en la ventaja competitiva del fabricante.</li>
      <li><strong>Datos de clientes y empleados:</strong> Datos personales de compradores, empleados de la planta y personal de proveedores. Especialmente relevante desde la entrada en vigor del RGPD.</li>
      <li><strong>Propiedad intelectual e información de I+D:</strong> Patentes en desarrollo, algoritmos, software de control de vehículos, datos de simulaciones y pruebas.</li>
      <li><strong>Información de producción:</strong> Capacidades, precios, acuerdos de subcontratación, vulnerabilidades de la cadena de producción.</li>
      <li><strong>Datos de sistemas conectados:</strong> Con la creciente digitalización de los vehículos (ADAS, V2X, OTA updates), la seguridad de los datos de telemetría y las interfaces de conectividad es un área de creciente relevancia en las auditorías TISAX.</li>
    </ul>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Tu empresa necesita cumplir TISAX?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Diagnóstico gratuito en 24 horas. Sin compromiso.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Hablar con un experto →</Link>
    </div>

    <h2>Cómo obtener TISAX: proceso de assessment</h2>

    <p>El proceso de obtención de TISAX sigue una secuencia definida por ENX Association:</p>

    <ol>
      <li><strong>Registro en ENX Portal:</strong> La empresa debe registrarse en el portal de ENX Association (enx.com) y crear una cuenta de participante. Aquí se define el alcance del assessment (qué sistemas, qué ubicaciones, qué tipo de información).</li>
      <li><strong>Selección del proveedor de assessment:</strong> La empresa elige uno de los proveedores de assessment acreditados por ENX. Es recomendable hacer una consultoría previa de preparación (gap analysis) con una empresa especializada como Avson antes de contratar el assessment.</li>
      <li><strong>Preparación (gap analysis y remediation):</strong> Se analiza la situación actual de la organización frente a los requisitos VDA ISA del nivel de assessment requerido. Se implementan los controles faltantes, se actualiza la documentación y se forma al personal. Esta fase suele durar entre 2 y 4 meses.</li>
      <li><strong>Assessment propiamente dicho:</strong> Para AL1: autoevaluación con plausibilidad check remoto. Para AL2 y AL3: auditoría presencial en las instalaciones. El auditor evalúa la implementación de los controles, entrevista al personal y verifica evidencias.</li>
      <li><strong>Publicación del resultado en ENX Portal:</strong> Una vez completado el assessment con resultado satisfactorio, el proveedor de assessment registra el resultado en el ENX Portal. El proveedor puede entonces compartir su resultado con los OEMs clientes autorizando su acceso.</li>
    </ol>

    <h2>Tiempo y coste del assessment TISAX</h2>

    <p>El tiempo total desde el inicio de la preparación hasta la obtención del resultado depende principalmente del nivel de madurez de seguridad de la organización y del nivel de assessment requerido. Para una empresa sin base previa de seguridad:</p>

    <ul>
      <li><strong>AL1:</strong> Entre 1 y 2 meses de preparación + semanas para el assessment. Coste total de consultoría + assessment: entre 8.000 y 15.000 euros.</li>
      <li><strong>AL2:</strong> Entre 2 y 4 meses de preparación + auditoría presencial. Coste total de consultoría + assessment: entre 15.000 y 35.000 euros dependiendo del tamaño de la organización y el número de ubicaciones.</li>
      <li><strong>AL3:</strong> Entre 3 y 6 meses de preparación + dos auditorías presenciales. Coste más elevado por la doble auditoría y los controles adicionales requeridos.</li>
    </ul>

    <p>Si la empresa ya dispone de <Link to="/iso27001">certificación ISO 27001</Link>, los tiempos y costes se reducen significativamente: ISO 27001 cubre entre el 60% y el 70% de los controles VDA ISA, dejando un gap manejable que puede cerrarse en pocas semanas de trabajo adicional.</p>

    <div style={{marginTop:'64px',paddingTop:'32px',borderTop:'1px solid var(--border)'}}>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'var(--text-muted)'}}>Artículos relacionados:</p>
      <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginTop:'12px'}}>
        <Link to="/tisax" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Servicio TISAX →</Link>
        <Link to="/iso27001" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Servicio ISO 27001 →</Link>
        <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Contacto →</Link>
      </div>
    </div>

    <h2>Preguntas frecuentes sobre TISAX</h2>

    <div className="faq-article">
      <div className="faq-article-item">
        <div className="faq-article-q">¿TISAX es lo mismo que ISO 27001?</div>
        <div className="faq-article-a">No son lo mismo, aunque están estrechamente relacionados. TISAX se basa en el catálogo VDA ISA, que a su vez deriva en gran parte de ISO 27001. Sin embargo, TISAX incluye controles adicionales específicos del sector automotriz (protección de prototipos, datos de vehículos, seguridad en instalaciones de prueba) que no existen en ISO 27001. Tener ISO 27001 facilita mucho el proceso TISAX, pero no lo reemplaza.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Quién realiza los assessments TISAX?</div>
        <div className="faq-article-a">Los assessments TISAX solo pueden realizarlos auditores acreditados por ENX Association. En España hay varios proveedores de assessment acreditados: TÜV Rheinland, Bureau Veritas, SGS, DQS y otros. La consultora que prepara a la empresa (como Avson) es diferente del auditor que realiza el assessment, aunque puede acompañar durante el proceso.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Cuánto tiempo es válido un assessment TISAX?</div>
        <div className="faq-article-a">Los resultados TISAX tienen una validez de 3 años. Durante ese período, la organización puede compartir sus resultados con los participantes registrados en la plataforma ENX Portal sin necesidad de repetir el assessment completo. Al vencer los 3 años, debe renovarse el assessment.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Puedo compartir mi resultado TISAX con otros OEMs?</div>
        <div className="faq-article-a">Sí, y esta es una de las grandes ventajas de TISAX frente a las auditorías individuales de cada fabricante. El resultado del assessment se registra en el ENX Portal y el proveedor puede autorizar a varios participantes (fabricantes) a acceder a sus resultados simultáneamente. Esto evita tener que pasar múltiples auditorías para cada cliente OEM.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿TISAX cubre la protección de datos (RGPD)?</div>
        <div className="faq-article-a">TISAX incluye un módulo específico de protección de datos ('Data Protection') alineado con el RGPD, pero no reemplaza el cumplimiento del propio Reglamento. El módulo de protección de datos TISAX evalúa si la organización trata correctamente datos personales de acuerdo con los principios del RGPD. Es complementario, no sustitutivo.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>¿Tu OEM cliente ya te ha solicitado TISAX?</h3>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Analizamos tu nivel de madurez y diseñamos la hoja de ruta para alcanzar el nivel de assessment en el menor tiempo posible.</p>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar diagnóstico gratuito →</Link>
    </div>

  </div>
</article></>
  )
}
