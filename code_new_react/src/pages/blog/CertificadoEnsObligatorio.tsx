import { Link } from 'react-router-dom'

export default function CertificadoEnsObligatorio() {
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
    .faq-article-q::after { content:'\\FF0B'; font-size:20px; color:#C9A84C; flex-shrink:0; }
    .faq-article-item.open .faq-article-q::after { content:'\\FF0D'; }
    .faq-article-a { font-family:'Inter',sans-serif; font-size:15px; color:#3A4560; line-height:1.75; padding:0 0 20px; display:none; }
    .faq-article-item.open .faq-article-a { display:block; }
    .callout-box { background:#F7F7F5; border-left:3px solid #C9A84C; padding:24px 28px; margin:32px 0; }
    .callout-box p { margin:0; font-size:15px; }` }} />

{/* BREADCRUMB */}
<div style={{background:'var(--white)',borderBottom:'1px solid var(--border)',padding:'12px 0',marginTop:'72px'}}>
  <div className="container">
    <nav style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <Link to="/blog" style={{color:'var(--text-muted)',textDecoration:'none'}}>Blog</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>ENS obligatorio</span>
    </nav>
  </div>
</div>

{/* ARTICLE HERO */}
<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">ENS · Obligatoriedad · Actualizado mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        El ENS es obligatorio: ¿tu empresa necesita certificarse?
      </h1>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        Muchas empresas descubren que necesitan el ENS cuando ya han perdido una licitación. Esta guía explica con precisión a quién afecta, qué contratos lo exigen y qué ocurre si no lo tienes.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>Lectura: 7 minutos</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>Actualizado: mayo 2026</span>
        <span style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',color:'var(--text-muted)'}}>Por el equipo de Avson GRC</span>
      </div>
    </div>
  </div>
</section>

{/* ARTICLE BODY */}
<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <h2>El ENS es obligatorio desde 2022: ¿qué cambió?</h2>

    <p>El <strong>Real Decreto 311/2022, de 3 de mayo</strong>, que aprueba el Esquema Nacional de Seguridad, supuso un punto de inflexión respecto a la normativa anterior. Si el RD 3/2010 ya establecía la obligatoriedad del ENS para las Administraciones Públicas, el RD 311/2022 hizo dos cosas clave que afectan directamente a las empresas privadas.</p>

    <p>En primer lugar, <strong>amplió explícitamente el ámbito de aplicación a los proveedores privados</strong> de sistemas y servicios TIC. Antes, la obligación recaía principalmente sobre las propias administraciones; ahora, cualquier empresa privada que preste servicios tecnológicos al sector público está igualmente obligada a cumplir con el ENS en los sistemas afectados por esa prestación de servicios.</p>

    <p>En segundo lugar, <strong>estableció un periodo transitorio de 24 meses</strong> para que las organizaciones se adaptaran a los nuevos requisitos. Ese periodo finalizó en mayo de 2024. A partir de ese momento, no hay margen de tolerancia: las empresas sin certificado ENS que presten servicios TIC a la Administración están en situación de incumplimiento legal.</p>

    <div className="callout-box">
      <p><strong>Dato clave:</strong> el periodo transitorio del RD 311/2022 finalizó en mayo de 2024. No existe ningún mecanismo de prórroga adicional. Las empresas sin ENS que operen con la Administración Pública están en incumplimiento hoy.</p>
    </div>

    <h2>Qué empresas están obligadas a certificarse en ENS</h2>

    <p>El artículo 2 del RD 311/2022 delimita el ámbito de aplicación. Más allá de las propias Administraciones Públicas, las empresas privadas afectadas son aquellas que:</p>

    <ul>
      <li><strong>Prestan servicios de tecnología de la información y comunicación</strong> a organismos del sector público español. Esto incluye desarrollo de software, mantenimiento de aplicaciones, servicios cloud (IaaS, PaaS, SaaS), gestión de infraestructura, servicios de ciberseguridad, telecomunicaciones y cualquier otro servicio TIC.</li>
      <li><strong>Suministran soluciones tecnológicas</strong> para sistemas de información de las Administraciones Públicas, aunque no gestionen directamente dichos sistemas.</li>
      <li><strong>Proveen sistemas de comunicaciones</strong> utilizados por organismos del sector público.</li>
      <li><strong>Manejan, almacenan o transmiten datos</strong> de titularidad o responsabilidad de una Administración Pública, aunque sea de manera parcial o temporal.</li>
    </ul>

    <p>En la práctica, esto afecta a un espectro muy amplio de empresas: consultoras tecnológicas, integradores de sistemas, ISVs (fabricantes de software independientes), proveedores de servicios gestionados (MSP), empresas de hosting y cloud, operadores de telecomunicaciones con contratos públicos y empresas de formación tecnológica para empleados públicos, entre otras.</p>

    <p>La pregunta que toda empresa debería hacerse es: <em>¿alguno de nuestros clientes es un organismo del sector público y el servicio que prestamos implica acceso, tratamiento o gestión de sus sistemas de información o datos?</em> Si la respuesta es sí, el ENS te aplica.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>¿Tienes dudas sobre si el ENS te aplica? En 5 días hábiles te damos una respuesta clara y gratuita.</span>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Pide presupuesto →</Link>
    </div>

    <h2>Qué tipo de contratos públicos exigen el certificado ENS</h2>

    <p>El ENS aparece como requisito en los pliegos de contratación de la Administración Pública en diversas formas. Lo más habitual es encontrarlo como:</p>

    <p><strong>Requisito de aptitud o solvencia técnica:</strong> en los pliegos de cláusulas administrativas particulares se exige que el licitador acredite el cumplimiento del ENS en la categoría aplicable al objeto del contrato. Sin esta acreditación, la oferta es excluida en la fase de verificación de requisitos previos, antes incluso de que se evalúe el precio o la propuesta técnica.</p>

    <p><strong>Condición de ejecución del contrato:</strong> en algunos casos, el ENS no se exige en la fase de licitación sino como condición para iniciar o mantener la prestación del servicio. El contratista debe obtener la certificación dentro de un plazo establecido en el pliego o en el propio contrato.</p>

    <p><strong>Criterio de valoración:</strong> menos frecuente pero posible, el ENS (o su categoría) puede usarse como criterio de valoración que otorga puntuación adicional a los licitadores certificados en una categoría superior a la mínima exigida.</p>

    <p>Los contratos que más frecuentemente incluyen requisitos ENS son los de servicios TIC en general (desarrollo, mantenimiento, soporte), contratos de servicios cloud para la Administración, contratos de telecomunicaciones, servicios de ciberseguridad y monitorización, y contratos de consultoría tecnológica y transformación digital del sector público.</p>

    <p>La Plataforma de Contratación del Sector Público (PLACE) publica todos los pliegos. Un análisis de los contratos adjudicados en los últimos dos años en categorías TIC muestra que más del <strong>78% de los contratos superiores a 50.000 euros incluyen algún requisito ENS</strong>.</p>

    <h2>Consecuencias de no tener el ENS: contratos perdidos y sanciones</h2>

    <p>Las consecuencias del incumplimiento del ENS son múltiples y tienen distintos grados de gravedad:</p>

    <p><strong>Exclusión de licitaciones:</strong> es la consecuencia más inmediata y frecuente. Si el pliego exige el certificado ENS y no lo aportas, tu oferta es excluida automáticamente. No hay posibilidad de subsanar este requisito una vez que el plazo de presentación ha cerrado.</p>

    <p><strong>Resolución de contratos vigentes:</strong> si tienes contratos activos con Administraciones Públicas y no cumples con el ENS, el organismo contratante puede iniciar un expediente de incumplimiento que derive en la resolución del contrato, con las penalizaciones económicas correspondientes.</p>

    <p><strong>Imposibilidad de renovar contratos:</strong> los contratos públicos se renuevan periódicamente. En la fase de renovación o prórroga, cada vez más Administraciones verifican el cumplimiento ENS del contratista. Sin certificado, la renovación puede denegarse.</p>

    <p><strong>Responsabilidad frente a incidentes de seguridad:</strong> si un incidente de seguridad afecta a datos o sistemas de la Administración gestionados por un proveedor sin ENS, la responsabilidad del proveedor se agrava considerablemente. La falta de certificación puede ser considerada negligencia en el cumplimiento de las obligaciones contractuales y legales.</p>

    <p><strong>Impacto reputacional:</strong> en un mercado donde cada vez más empresas están certificadas, no tener el ENS genera desconfianza. Los departamentos de compras de las Administraciones Públicas —y de las grandes empresas privadas que exigen ENS a sus proveedores— lo perciben como una señal de madurez en seguridad insuficiente.</p>

    <div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'28px 32px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap',margin:'40px 0'}}>
      <span style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'20px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>Cada mes sin ENS es un contrato potencialmente perdido. El proceso con Avson dura 3-4 meses.</span>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#1A2744',border:'1px solid #C9A84C',padding:'12px 24px',textDecoration:'none',whiteSpace:'nowrap'}}>Empezar ahora →</Link>
    </div>

    <h2>¿Y si soy subcontratista de una empresa certificada?</h2>

    <p>Esta es una duda muy habitual entre las empresas que participan en proyectos públicos como subcontratistas de primer o segundo nivel. La respuesta depende de varios factores:</p>

    <p>Si como subcontratista accedes, manejas, almacenas o procesas datos o sistemas de la Administración Pública —aunque sea de manera indirecta o parcial— el ENS también te aplica. La cadena de custodia de la seguridad se extiende a lo largo de toda la cadena de suministro.</p>

    <p>En la práctica, el contratista principal (la empresa certificada en ENS) es responsable de garantizar que sus subcontratistas también cumplen con los requisitos de seguridad aplicables. Cada vez más contratos públicos incluyen cláusulas que obligan al contratista principal a exigir el ENS a sus subcontratistas críticos.</p>

    <p>La mejor forma de proteger tu posición como subcontratista —y de ganar nuevas oportunidades como tal— es obtener tu propio certificado ENS. Eso te hace más atractivo para las empresas certificadas que necesitan subcontratar, porque simplifica la cadena de responsabilidades de seguridad.</p>

    <h2>Plazos: ¿cuándo hay que tener el certificado?</h2>

    <p>La respuesta corta es: <strong>ahora mismo</strong>. El periodo transitorio del RD 311/2022 finalizó en mayo de 2024. Desde esa fecha, no existe ningún plazo adicional de adaptación.</p>

    <p>Sin embargo, la realidad práctica es algo más matizada. Existen tres situaciones distintas:</p>

    <p><strong>Empresas con contratos activos sin ENS:</strong> técnicamente están en incumplimiento. La velocidad con la que el organismo contratante actúa varía, pero el riesgo de requerimiento o resolución del contrato existe y es creciente. La solución es iniciar el proceso de certificación de forma inmediata.</p>

    <p><strong>Empresas que van a licitar próximamente:</strong> si el pliego exige el ENS, necesitas el certificado antes de la fecha de presentación de ofertas. Los procesos de licitación suelen anunciarse con 15-30 días de antelación. Con 3-4 meses de proceso de certificación, debes empezar mucho antes de que salga la licitación que te interesa.</p>

    <p><strong>Empresas que aún no tienen contratos públicos pero quieren tenerlos:</strong> el momento óptimo para certificarse es antes de que surja la oportunidad, no después. El coste de oportunidad de perder una licitación por no tener el ENS es casi siempre superior al coste de la certificación.</p>

    {/* RELATED ARTICLES */}
    <section style={{maxWidth:'800px',margin:'0 auto 64px',padding:'0 var(--pad-x)'}}>
      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(20px,2.5vw,26px)',fontWeight:'400',color:'var(--navy)',marginBottom:'24px'}}>Artículos relacionados</h2>
      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:'16px'}}>
        <Link to="/blog/que-es-el-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>¿Qué es el ENS? Guía completa del Esquema Nacional de Seguridad</p>
        </Link>
        <Link to="/blog/certificado-ens-media-alta" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>ENS Media y Alta: requisitos adicionales y cómo certificarse</p>
        </Link>
        <Link to="/blog/renovacion-certificado-ens" style={{display:'block',padding:'20px 24px',border:'1px solid var(--border)',borderLeft:'3px solid var(--gold)',textDecoration:'none',background:'var(--pearl)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',textTransform:'uppercase',letterSpacing:'0.08em',color:'var(--gold)',marginBottom:'8px'}}>ENS</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'17px',color:'var(--navy)',lineHeight:'1.4'}}>Renovación del certificado ENS: proceso y plazos</p>
        </Link>
      </div>
    </section>

    <h2>Preguntas frecuentes</h2>

    <div className="faq-article">
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).classList.toggle('open')}>
        <div className="faq-article-q">¿Desde cuándo es obligatorio el ENS?</div>
        <div className="faq-article-a">El ENS es obligatorio desde la aprobación del RD 3/2010, pero fue el RD 311/2022 el que extendió la obligación a los proveedores privados y estableció un periodo transitorio de 24 meses que concluyó en mayo de 2024. Desde esa fecha, no hay ningún margen adicional.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).classList.toggle('open')}>
        <div className="faq-article-q">¿Qué pasa si no tengo el ENS y presento a una licitación?</div>
        <div className="faq-article-a">Tu oferta será excluida automáticamente en la fase de verificación de requisitos mínimos. El ENS figura como requisito eliminatorio en los pliegos de prescripciones técnicas de la mayoría de contratos TIC con la Administración Pública española. No existe posibilidad de subsanación posterior.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).classList.toggle('open')}>
        <div className="faq-article-q">¿Tengo que certificarme si solo soy subcontratista?</div>
        <div className="faq-article-a">Depende de si accedes a datos o sistemas de la Administración. Si lo haces, el ENS te aplica. Además, los contratistas principales exigen cada vez más el ENS a sus subcontratistas para cumplir con sus propias obligaciones contractuales. Tener el ENS es una ventaja competitiva importante en la cadena de subcontratación pública.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).classList.toggle('open')}>
        <div className="faq-article-q">¿Qué categoría ENS necesito?</div>
        <div className="faq-article-a">La categoría (Básica, Media o Alta) depende de la valoración del impacto potencial de un incidente de seguridad en los sistemas en alcance. La mayoría de pymes TIC proveedoras del sector público necesitan ENS Básica o Media. El presupuesto sin compromiso de Avson determina exactamente qué categoría te aplica.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).classList.toggle('open')}>
        <div className="faq-article-q">¿Puedo usar una Declaración de Conformidad en lugar del certificado?</div>
        <div className="faq-article-a">Solo si la categoría de tus sistemas es Básica y el pliego específico lo acepta. Cada vez más Administraciones exigen el certificado completo emitido por entidad acreditada ENAC, incluso para categoría Básica. Si hay duda, lo más seguro es obtener el certificado completo.</div>
      </div>
      <div className="faq-article-item" onClick={(e) => (e.currentTarget as HTMLElement).classList.toggle('open')}>
        <div className="faq-article-q">¿Cuánto tiempo lleva obtener el ENS si empiezo ahora?</div>
        <div className="faq-article-a">Con Avson GRC, el proceso completo dura entre 3 y 4 meses desde el diagnóstico inicial hasta la emisión del certificado. El plazo depende principalmente de la categoría del sistema, el número de sistemas en alcance y la disponibilidad del equipo interno para implementar controles y generar evidencias.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:"'Cormorant Garamond',serif",fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>¿Listo para certificarte en ENS?</h3>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Pide presupuesto · Sin compromiso · Respuesta en 24 horas</p>
      <Link to="/contacto" style={{fontFamily:"'Inter',sans-serif",fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar presupuesto sin compromiso →</Link>
    </div>

    <div style={{marginTop:'48px',paddingTop:'32px',borderTop:'1px solid var(--border)'}}>
      <p style={{fontFamily:"'Inter',sans-serif",fontSize:'13px',color:'var(--text-muted)'}}>Artículos relacionados:</p>
      <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginTop:'12px'}}>
        <Link to="/blog/que-es-el-ens" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Qué es el ENS: guía completa →</Link>
        <Link to="/blog/certificado-ens-media-alta" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>ENS Media vs Alta: diferencias →</Link>
        <Link to="/blog/renovacion-certificado-ens" style={{fontFamily:"'Inter',sans-serif",fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Renovación del certificado ENS →</Link>
      </div>
    </div>

  </div>
</article>
    </>
  )
}
