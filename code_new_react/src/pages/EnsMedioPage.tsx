import { Link } from 'react-router-dom'

export default function EnsMedioPage() {
  return (
    <>
<section className="page-hero">
  <div className="container">
    <div className="page-hero__breadcrumb">
      <Link to="/">Inicio</Link>
      <span>/</span>
      <Link to="/ens">ENS</Link>
      <span>/</span>
      <span style={{color:'var(--navy)'}}>ENS Medio</span>
    </div>
    <div style={{maxWidth:'780px'}}>
      <span className="label-tag">Esquema Nacional de Seguridad · Categoría Media · RD 311/2022</span>
      <div className="gold-line"></div>
      <h1 className="display-title">Certificado ENS Medio: la categoría que exigen<br /><em>la mayoría de contratos públicos TIC.</em></h1>
      <div className="guarantee-seal" style={{marginBottom:'24px'}}>
        <span className="guarantee-seal__icon">✦</span>
        <span className="guarantee-seal__text">Garantía de éxito<br />al 100% por escrito</span>
      </div>
      <p className="body-large mt-32" style={{maxWidth:'620px'}}>La categoría Media del ENS es el estándar de facto del mercado de contratación pública TIC en España. Si quieres licitar a contratos de la AGE, ministerios o Comunidades Autónomas, necesitas el ENS Medio. Avson te certifica en 3-4 meses en toda España.</p>
      <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/contacto.html' }} style={{display:'flex',gap:'0',marginTop:'32px',marginBottom:'16px',maxWidth:'480px',boxShadow:'0 4px 24px rgba(26,39,68,0.12)'}}>
        <input type="email" id="heroEmail" required placeholder="tu@empresa.com"
          style={{flex:'1',padding:'16px 20px',border:'none',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',minWidth:'0'}} />
        <button type="submit"
          style={{background:'var(--gold)',color:'var(--navy)',border:'none',padding:'16px 24px',fontFamily:'var(--font-sans)',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.04em',cursor:'pointer',whiteSpace:'nowrap',transition:'opacity 0.2s'}}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.88')} onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}>
          Diagnóstico ENS gratis →
        </button>
      </form>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'0.78rem',color:'var(--navy-60)',marginTop:'0',marginBottom:'24px'}}>Sin compromiso · Respuesta en 24h · Servicio en toda España</p>
      <div className="flex gap-24 mt-16" style={{flexWrap:'wrap'}}>
        <Link to="/contacto" className="btn-primary">Hablar con un experto →</Link>
        <Link to="/ens" className="btn-text">Ver todas las categorías ENS →</Link>
      </div>
    </div>
  </div>
</section>


<section className="section section--white deco-section">
  <div style={{position:'absolute',top:'50%',left:'-40px',transform:'translateY(-50%)',fontFamily:'\'Cormorant Garamond\',serif',fontSize:'280px',fontWeight:'700',color:'var(--navy)',opacity:'0.025',lineHeight:'1',pointerEvents:'none',userSelect:'none'}}>M</div>
  <div className="container" style={{position:'relative',zIndex:'1'}}>
    <div className="grid-7-5">
      <div className="anim-fade-up">
        <span className="label-tag">Qué es el ENS Medio</span>
        <div className="gold-line"></div>
        <h2 className="section-title">La categoría Media del ENS:<br />cuando un fallo causa perjuicio grave.</h2>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>La categoría Media del Esquema Nacional de Seguridad aplica cuando un incidente de seguridad en los sistemas TIC podría causar un <strong>perjuicio grave</strong> a la organización, a los ciudadanos o al servicio público. Es la categoría de referencia para la mayoría de los contratos TIC de la Administración General del Estado, las Comunidades Autónomas y los organismos de carácter nacional, y la más demandada en los pliegos de contratación pública española.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>La fórmula de categorización del RD 311/2022 determina la categoría Media cuando el impacto más alto posible en alguna de las cinco dimensiones de seguridad —<strong>confidencialidad, integridad, disponibilidad, autenticidad o trazabilidad</strong>— alcanza el nivel "Medio". Esto ocurre, por ejemplo, cuando un sistema gestiona datos de ciudadanos a escala regional, procesa información sensible de cierta envergadura o da soporte a servicios públicos cuya interrupción afectaría de manera apreciable a la prestación del servicio.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>A diferencia de la categoría Básica, el ENS Medio no admite la Declaración de Conformidad como vía alternativa: siempre es obligatoria la auditoría externa realizada por una entidad de certificación acreditada por ENAC. Esto garantiza que el nivel de rigor en la evaluación sea homogéneo y verificable por los organismos que contratan los servicios.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>Avson presta servicios de consultoría ENS Medio en toda España, tanto en modalidad presencial como remota. La distancia geográfica no condiciona la calidad ni los plazos del proyecto: hemos certificado en ENS Medio a organizaciones en todas las comunidades autónomas del país.</p>
      </div>
      <div className="anim-fade-up delay-2">
        <div className="legal-box" style={{marginBottom:'24px'}}>
          <div className="legal-box__label">Marco legal</div>
          <div className="legal-box__text">Real Decreto 311/2022, de 3 de mayo. Artículos 40-43 y Anexo I (categorización) y Anexo II (medidas de seguridad nivel Medio).</div>
        </div>
        <div className="legal-box" style={{marginBottom:'24px'}}>
          <div className="legal-box__label">Impacto que determina categoría Media</div>
          <div className="legal-box__text">El máximo impacto potencial en alguna de las cinco dimensiones alcanza el nivel "Medio": perjuicio grave a la organización, ciudadanos o servicio público.</div>
        </div>
        <div className="legal-box">
          <div className="legal-box__label">Auditoría siempre obligatoria</div>
          <div className="legal-box__text">El ENS Medio no admite Declaración de Conformidad. Siempre requiere auditoría externa por entidad acreditada ENAC.</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <span className="label-tag">¿Te afecta?</span>
    <div className="gold-line"></div>
    <h2 className="section-title">¿Quién necesita el certificado ENS Medio?</h2>
    <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'720px',marginBottom:'48px'}}>El ENS Medio es el requisito estándar para acceder al núcleo del mercado de contratación pública TIC en España. Si tu empresa trabaja con organismos nacionales, regionales o locales de cierta entidad, y los sistemas implicados tienen impacto potencial grave en caso de incidente, esta es tu categoría. Los perfiles más habituales de nuestros clientes ENS Medio son:</p>
    <div className="grid-3" style={{gap:'32px'}}>
      <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
        <div style={{fontSize:'28px',marginBottom:'16px'}}>🏛️</div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Plataformas de tramitación electrónica</div>
        <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Proveedores de sede electrónica, registro electrónico, notificaciones electrónicas y portales de tramitación para organismos de la AGE y Comunidades Autónomas. Sistemas cuya caída afectaría al servicio público de forma grave.</p>
      </div>
      <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
        <div style={{fontSize:'28px',marginBottom:'16px'}}>🔐</div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Empresas de ciberseguridad para AAPP</div>
        <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Proveedores de servicios de ciberseguridad gestionada, SOC, SIEM o respuesta a incidentes para organismos de nivel nacional, autonómico o local de cierta criticidad operativa.</p>
      </div>
      <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
        <div style={{fontSize:'28px',marginBottom:'16px'}}>☁️</div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Cloud para ministerios y CCAA</div>
        <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Proveedores de servicios en la nube (IaaS, SaaS, PaaS) para ministerios, consejerías y organismos autonómicos que gestionan datos de ciudadanos o procesos administrativos relevantes.</p>
      </div>
      <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
        <div style={{fontSize:'28px',marginBottom:'16px'}}>👥</div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Datos de ciudadanos a gran escala</div>
        <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Empresas que procesan, almacenan o transmiten datos personales de un número significativo de ciudadanos en nombre de la Administración, donde la confidencialidad o integridad tiene impacto grave si se compromete.</p>
      </div>
      <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
        <div style={{fontSize:'28px',marginBottom:'16px'}}>🔗</div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Integradores TIC de la AGE</div>
        <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Empresas que integran sistemas de información de la Administración General del Estado, que desarrollan aplicaciones corporativas ministeriales o que mantienen infraestructuras tecnológicas de uso institucional.</p>
      </div>
      <div style={{border:'1px solid var(--border)',padding:'32px 28px',background:'var(--white)'}}>
        <div style={{fontSize:'28px',marginBottom:'16px'}}>🏥</div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Salud y servicios sociales digitales</div>
        <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Proveedores de sistemas de información clínica, historia de salud electrónica, gestión de servicios sociales y plataformas sanitarias para organismos autonómicos y estatales de salud pública.</p>
      </div>
    </div>
    <div className="cta-inline-box" style={{marginTop:'48px'}}>
      <span className="cta-inline-box__text">"Si tienes dudas sobre qué categoría necesitas, el diagnóstico gratuito de Avson te lo dice en 24h. En toda España."</span>
      <Link to="/contacto" className="btn-primary">Diagnóstico gratuito →</Link>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">
    <div className="grid-7-5">
      <div className="anim-fade-up">
        <span className="label-tag">Controles y medidas</span>
        <div className="gold-line"></div>
        <h2 className="section-title">Los controles del ENS Medio:<br />mayor exigencia, mayor protección.</h2>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>El ENS Medio exige la implementación de aproximadamente <strong>60 medidas de seguridad</strong> del Anexo II del RD 311/2022, notablemente más que las 45 del ENS Básico y con mayor nivel de exigencia en cada una de ellas. Los controles adicionales respecto a la categoría Básica se concentran en las áreas de mayor criticidad para la seguridad de los sistemas con impacto grave.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>En el marco operacional (mp.op), el ENS Medio incorpora requisitos adicionales en las dimensiones de <strong>autenticación robusta</strong> —el doble factor de autenticación es obligatorio para el acceso a sistemas en alcance—, <strong>monitorización continua</strong> de la seguridad con registros de actividad más detallados y períodos de retención superiores, y <strong>gestión formal de vulnerabilidades</strong> con análisis periódicos documentados.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>En las medidas de protección (mp.s), el ENS Medio añade requisitos más estrictos en protección de servicios web, gestión segura de correo electrónico, controles de acceso remoto y requisitos de cifrado en tránsito y en reposo. La gestión de incidentes debe ser más estructurada, con procedimientos formales de notificación, escalado y análisis post-incidente.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>La continuidad del servicio también recibe mayor atención en el ENS Medio: es necesario disponer de Planes de Continuidad documentados, probados y actualizados, con tiempos de recuperación definidos (RTO y RPO) y procedimientos de activación claros. En Avson implementamos todos estos controles con metodología probada y herramientas de IA especializadas, reduciendo los plazos sin comprometer la calidad.</p>
      </div>
      <div className="anim-fade-up delay-2">
        <div style={{background:'var(--navy)',padding:'40px 32px'}}>
          <span className="label-tag">Controles adicionales vs ENS Básico</span>
          <div style={{display:'flex',flexDirection:'column',gap:'16px',marginTop:'24px'}}>
            <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Doble factor de autenticación (2FA)</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Obligatorio para acceso a sistemas en alcance. No admite excepción en categoría Media.</div>
            </div>
            <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Monitorización continua</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Logs con mayor detalle y retención. Análisis periódico de eventos de seguridad documentado.</div>
            </div>
            <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Gestión formal de vulnerabilidades</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>Análisis de vulnerabilidades periódicos y documentados. Plan de remediación obligatorio.</div>
            </div>
            <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>Planes de continuidad probados</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>RTO/RPO definidos. Pruebas de recuperación periódicas documentadas y evidenciadas.</div>
            </div>
            <div style={{borderLeft:'2px solid rgba(201,168,76,0.4)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>~60 medidas aplicables</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.45)',lineHeight:'1.6'}}>15 controles adicionales respecto al ENS Básico, con mayor nivel de detalle y evidencia.</div>
            </div>
          </div>
          <Link to="/contacto" className="btn-primary btn-primary--white" style={{marginTop:'32px'}}>Analizar mi caso →</Link>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <span className="label-tag">El estándar del mercado</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Por qué el ENS Medio es el estándar de facto<br /><em>de la contratación pública TIC.</em></h2>
    <div className="grid-7-5" style={{marginTop:'48px'}}>
      <div>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>Aunque el RD 311/2022 establece que la categoría debe determinarse en función del impacto real de los sistemas, la realidad del mercado de contratación pública en España es que la mayoría de los pliegos TIC de cierta relevancia especifican el <strong>ENS Medio como requisito mínimo</strong>, con independencia de que los sistemas concretos pudieran catalogarse técnicamente como Básicos.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>La razón es pragmática: los gestores de compras públicas han aprendido que exigir ENS Medio como mínimo garantiza un nivel de madurez adecuado en los proveedores, reduce los riesgos de seguridad en los contratos y simplifica la evaluación de las ofertas. El ENS Medio actúa, en la práctica, como filtro de calidad y solvencia técnica para el proveedor.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>Esto significa que una empresa con solo ENS Básico puede estar perdiendo contratos que técnicamente podría ganar, simplemente porque el pliego impone ENS Medio aunque los sistemas no lo requieran estrictamente. Por eso en Avson recomendamos valorar siempre el mercado objetivo al que se quiere acceder, no solo la categoría técnica de los sistemas actuales.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>Además, el ENS Medio abre las puertas a contratos en toda España: AGE, Comunidades Autónomas, organismos autónomos, entidades públicas empresariales y cualquier organismo del sector público. Es la categoría que cubre el mayor número de oportunidades de licitación en el mercado público tecnológico español.</p>
      </div>
      <div>
        <div style={{background:'var(--navy)',padding:'40px 32px'}}>
          <span className="label-tag">¿Básico o Medio?</span>
          <div style={{display:'flex',flexDirection:'column',gap:'20px',marginTop:'24px'}}>
            <div style={{borderLeft:'2px solid rgba(201,168,76,0.3)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.85)',marginBottom:'4px'}}>ENS Básico te da acceso a...</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Pliegos de ayuntamientos, diputaciones y organismos locales pequeños que especifiquen categoría Básica.</div>
            </div>
            <div style={{borderLeft:'2px solid var(--gold)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.85)',marginBottom:'4px'}}>ENS Medio te da acceso a...</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Todo lo anterior más: AGE, ministerios, CCAA, organismos autónomos, empresas públicas, universidades y organismos de cualquier tamaño en toda España.</div>
            </div>
            <div style={{borderLeft:'2px solid rgba(201,168,76,0.3)',paddingLeft:'20px'}}>
              <div style={{fontSize:'14px',fontWeight:'600',color:'rgba(255,255,255,0.85)',marginBottom:'4px'}}>El ENS Medio incluye el Básico</div>
              <div style={{fontSize:'13px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Un certificado ENS Medio acredita el cumplimiento de los requisitos de categoría Básica. No necesitas los dos certificados.</div>
            </div>
          </div>
          <Link to="/contacto" className="btn-primary btn-primary--white" style={{marginTop:'32px'}}>Solicitar propuesta →</Link>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">
    <span className="label-tag">Sinergia con ISO 27001</span>
    <div className="gold-line"></div>
    <h2 className="section-title">ENS Medio e ISO 27001:<br /><em>el 65% del trabajo, compartido.</em></h2>
    <div className="grid-7-5" style={{marginTop:'48px'}}>
      <div>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>El ENS Medio y la ISO 27001 comparten una base conceptual y documental muy significativa. Aproximadamente el <strong>65% de los controles del ENS Medio se solapan o son equivalentes</strong> a los controles de la norma ISO/IEC 27001:2022. Esto tiene implicaciones prácticas muy relevantes para las empresas que buscan maximizar el retorno de su inversión en cumplimiento.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>Si tu empresa <strong>ya dispone de la certificación ISO 27001 activa</strong>, el proceso de certificación ENS Medio es significativamente más rápido y económico. El SGSI, el análisis de riesgos, los procedimientos de gestión de incidentes y la mayoría de la documentación ya existe y solo necesita adaptarse a los requisitos específicos del ENS. En Avson realizamos un análisis de diferencias (GAP) específico para clientes con ISO 27001, lo que permite diseñar un plan de implementación mucho más eficiente.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'20px'}}>En sentido inverso, si tu empresa <strong>comienza por el ENS Medio</strong>, habrá completado prácticamente dos tercios del camino hacia la ISO 27001. La estructura documental del SGSI ENS, el análisis de riesgos MAGERIT y los procedimientos de seguridad implementados son reutilizables y adaptables a los requisitos de la norma internacional. El proceso ISO 27001 posterior se convierte en un trámite de adaptación y auditoría, no en un proyecto desde cero.</p>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>Esta doble sinergia explica por qué el pack ENS + ISO 27001 es el más demandado de Avson: permite a las empresas acceder al máximo número de contratos públicos y privados, diferenciarse de la competencia con dos certificaciones internacionalmente reconocidas, y hacerlo con una inversión total significativamente menor que si se certificaran por separado.</p>
      </div>
      <div>
        <div style={{background:'var(--navy)',padding:'40px 32px'}}>
          <span className="label-tag">Roadmap de certificaciones</span>
          <div style={{display:'flex',flexDirection:'column',gap:'20px',marginTop:'24px'}}>
            <div style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:'0',fontSize:'12px',fontWeight:'700',color:'var(--navy)'}}>1</div>
              <div>
                <p style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>ENS Medio</p>
                <p style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>3–4 meses. Acceso al mercado público completo en España.</p>
              </div>
            </div>
            <div style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(201,168,76,0.2)',border:'1px solid var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:'0',fontSize:'12px',fontWeight:'700',color:'var(--gold)'}}>2</div>
              <div>
                <p style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>ISO 27001 — 65% hecho</p>
                <p style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>Con el ENS Medio, dos tercios del trabajo ISO 27001 ya está completado.</p>
              </div>
            </div>
            <div style={{display:'flex',gap:'16px',alignItems:'flex-start'}}>
              <div style={{width:'32px',height:'32px',borderRadius:'50%',background:'rgba(201,168,76,0.2)',border:'1px solid var(--gold)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:'0',fontSize:'12px',fontWeight:'700',color:'var(--gold)'}}>3</div>
              <div>
                <p style={{fontSize:'13px',fontWeight:'600',color:'rgba(255,255,255,0.9)',marginBottom:'4px'}}>NIS2 / DORA — 50% hecho</p>
                <p style={{fontSize:'12px',color:'rgba(255,255,255,0.4)',lineHeight:'1.6'}}>La base ENS acelera también el cumplimiento de directivas europeas.</p>
              </div>
            </div>
          </div>
          <Link to="/packs" className="btn-primary btn-primary--white" style={{marginTop:'32px'}}>Ver packs combinados →</Link>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="proceso">
  <div className="container">
    <span className="label-tag">Nuestro proceso</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Cómo obtenemos tu certificado ENS Medio<br /><em>en 3-4 meses con garantía.</em></h2>
    <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'680px',marginBottom:'48px'}}>El proceso ENS Medio con Avson sigue la misma metodología probada que aplica a todas las categorías, con mayor profundidad en la implementación de controles. Trabajamos en toda España en modalidad presencial, remota o mixta según tus necesidades.</p>
    <div className="timeline mt-32">
      <div className="timeline__step anim-fade-up">
        <div className="timeline__number">01</div>
        <div className="timeline__week">Semanas 1-2</div>
        <div className="timeline__title">Diagnóstico y GAP analysis ENS Medio</div>
        <div className="timeline__desc">Analizamos la situación actual respecto a los ~60 controles ENS Medio: sistemas en alcance, controles existentes, nivel de madurez y brechas específicas. Si ya tienes ISO 27001, adaptamos el análisis para maximizar la reutilización de lo existente.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-1">
        <div className="timeline__number">02</div>
        <div className="timeline__week">Semanas 3-12</div>
        <div className="timeline__title">Implementación de controles ENS Medio</div>
        <div className="timeline__desc">Implementamos todos los controles ENS Medio: SGSI completo, análisis de riesgos MAGERIT, implementación de 2FA, configuración de monitorización, gestión de vulnerabilidades, planes de continuidad y toda la documentación necesaria. Usamos herramientas de IA especializadas.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-2">
        <div className="timeline__number">03</div>
        <div className="timeline__week">Semanas 13-14</div>
        <div className="timeline__title">Auditoría interna y preparación</div>
        <div className="timeline__desc">Auditoría interna exhaustiva para detectar y corregir no conformidades. Preparación de evidencias y documentación de auditoría. Simulación de preguntas de la entidad certificadora y revisión final del sistema de gestión.</div>
      </div>
      <div className="timeline__step anim-fade-up delay-3">
        <div className="timeline__number">04</div>
        <div className="timeline__week">Semanas 15-18</div>
        <div className="timeline__title">Auditoría de certificación ENAC</div>
        <div className="timeline__desc">Coordinamos íntegramente la auditoría con la entidad acreditada ENAC. Respondemos a no conformidades detectadas. Garantía de éxito por escrito en primera convocatoria. Emisión del certificado ENS Medio.</div>
      </div>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">
    <span className="label-tag">Inversión y retorno</span>
    <div className="gold-line"></div>
    <h2 className="section-title">¿Cuánto cuesta el ENS Medio<br /><em>y cuánto vale el primer contrato público?</em></h2>
    <div className="grid-7-5" style={{marginTop:'48px'}}>
      <div>
        <p style={{fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>El coste del certificado ENS Medio depende de factores como el tamaño de la organización, la complejidad y número de sistemas en alcance, el nivel de madurez de partida y la existencia o no de certificaciones previas (ISO 27001). Como orientación general:</p>
        <div style={{display:'flex',flexDirection:'column',gap:'20px',marginBottom:'32px'}}>
          <div style={{border:'1px solid var(--border)',padding:'24px 28px'}}>
            <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>Pymes TIC (hasta 30 empleados)</div>
            <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>La inversión en consultoría ENS Medio es accesible y normalmente se recupera íntegramente con el primer contrato público conseguido. La tarifa de auditoría externa ENAC es el componente fijo más relevante.</p>
          </div>
          <div style={{border:'1px solid var(--gold)',padding:'24px 28px',background:'rgba(201,168,76,0.03)'}}>
            <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>Con ISO 27001 previa</div>
            <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Si ya tienes ISO 27001 activa, el coste de consultoría ENS Medio puede reducirse significativamente (hasta un 40%) al reutilizar la base documental y los controles existentes. Es la opción más eficiente.</p>
          </div>
          <div style={{border:'1px solid var(--border)',padding:'24px 28px'}}>
            <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'20px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>Empresa mediana (+50 empleados)</div>
            <p style={{fontSize:'14px',color:'var(--text-muted)',lineHeight:'1.7'}}>Mayor complejidad de alcance y mayor número de controles a implementar. La inversión es proporcional pero el impacto en la cartera de contratos públicos accesibles es también mayor.</p>
          </div>
        </div>
        <div className="urgency-box">
          <p className="urgency-box__text">El primer contrato público conseguido tras el ENS Medio suele recuperar la inversión completa del proceso de certificación. Las empresas certificadas en ENS Medio acceden a un mercado de licitación pública de cientos de millones de euros anuales que sin el certificado permanece cerrado. Solicita propuesta en 48h.</p>
        </div>
      </div>
      <div>
        <div style={{background:'var(--navy)',padding:'40px 32px',position:'sticky',top:'100px'}}>
          <span className="label-tag">Diagnóstico gratuito</span>
          <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'26px',fontWeight:'500',color:'var(--white)',lineHeight:'1.3',margin:'16px 0'}}>Propuesta ENS Medio<br />en 48 horas</h3>
          <p style={{fontSize:'14px',color:'rgba(255,255,255,0.45)',lineHeight:'1.65',marginBottom:'28px'}}>Diagnóstico gratuito, análisis de tu situación y propuesta personalizada. Servicio en toda España, presencial o remoto.</p>
          <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/contacto.html' }} style={{display:'flex',gap:'0',marginBottom:'16px',maxWidth:'480px',boxShadow:'0 4px 24px rgba(26,39,68,0.08)'}}>
            <input type="email" id="heroEmail2" required placeholder="tu@empresa.com"
              style={{flex:'1',padding:'16px 20px',border:'none',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',minWidth:'0'}} />
            <button type="submit"
              style={{background:'var(--gold)',color:'var(--navy)',border:'none',padding:'16px 24px',fontFamily:'var(--font-sans)',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.04em',cursor:'pointer',whiteSpace:'nowrap',transition:'opacity 0.2s'}}
              onMouseOver={(e) => (e.currentTarget.style.opacity = '0.88')} onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}>
              Solicitar →
            </button>
          </form>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'0.78rem',color:'rgba(255,255,255,0.5)'}}>+34 648 41 48 63 · info@avson.eu</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="faq">
  <div className="container">
    <span className="label-tag">Preguntas frecuentes</span>
    <div className="gold-line"></div>
    <h2 className="section-title">Preguntas frecuentes sobre<br />el certificado ENS Medio.</h2>
    <div className="faq-list mt-48" style={{maxWidth:'820px'}}>
      <div className="faq-item">
        <div className="faq-item__question">¿Cómo sé si mi empresa necesita ENS Básico o Medio?</div>
        <div className="faq-item__answer">La categoría se determina por el impacto potencial de un incidente de seguridad en los sistemas que prestan servicio a la Administración Pública. Si el impacto más alto posible en alguna de las cinco dimensiones —confidencialidad, integridad, disponibilidad, autenticidad o trazabilidad— es "Medio", la categoría es Media. En la práctica, también debes analizar qué contratos quieres conseguir: si los pliegos objetivo exigen ENS Medio, debes certificarte en Medio aunque tus sistemas pudieran ser técnicamente Básicos. Avson realiza este análisis de forma gratuita como parte del diagnóstico inicial.</div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿El ENS Medio sirve también para contratos que piden ENS Básico?</div>
        <div className="faq-item__answer">Sí. El ENS Medio es un nivel superior al Básico, por lo que un certificado ENS Medio acredita automáticamente el cumplimiento de los requisitos de categoría Básica. Si tienes el ENS Medio, puedes presentarte a cualquier contrato que exija ENS Básico o ENS Medio. No necesitas los dos certificados por separado. Esto hace al ENS Medio especialmente rentable: cubre el mayor abanico de oportunidades de licitación con una sola certificación.</div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto más exigente es el ENS Medio respecto al Básico?</div>
        <div className="faq-item__answer">El ENS Medio exige aproximadamente 60 medidas frente a las 45 del Básico, y con mayor nivel de detalle y evidencia en cada una. Las diferencias más relevantes son: el doble factor de autenticación (2FA) es obligatorio para el acceso a sistemas en alcance; la monitorización de la seguridad debe ser continua y documentada; se exige gestión formal de vulnerabilidades con análisis periódicos; los planes de continuidad del servicio deben estar documentados, probados y actualizados; y la gestión de incidentes requiere procedimientos formales de notificación y análisis post-incidente. El ENS Medio no admite la Declaración de Conformidad: siempre requiere auditoría externa ENAC.</div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Tengo que renovar el ENS Medio cada cierto tiempo?</div>
        <div className="faq-item__answer">Sí. El certificado ENS Medio tiene una vigencia de dos años desde la fecha de emisión. Antes del vencimiento es obligatorio someterse a una nueva auditoría de renovación para mantener la certificación vigente. Sin un certificado ENS en vigor, vuelves a quedar excluido de los pliegos que lo exigen. En Avson gestionamos proactivamente este proceso: te avisamos con seis meses de antelación y coordinamos todo el proceso de renovación como parte de nuestra relación continua con cada cliente.</div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">Si ya tengo ISO 27001, ¿cuánto tiempo me lleva el ENS Medio?</div>
        <div className="faq-item__answer">Si ya dispones de un SGSI certificado en ISO 27001 activo y maduro, el proceso ENS Medio puede reducirse significativamente. El 65% de los controles se solapan, lo que significa que gran parte de la documentación, los procedimientos y los controles técnicos ya existen. En Avson hacemos un análisis de diferencias (GAP) específico para clientes con ISO 27001 y diseñamos un plan que reutiliza al máximo lo existente. El tiempo total puede reducirse a 6-8 semanas en los mejores casos, frente a los 3-4 meses estándar para empresas sin base previa.</div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy">
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag">Categorías ENS</span>
    <div className="gold-line" style={{margin:'0 auto 24px'}}></div>
    <h2 className="section-title section-title--white">También te puede interesar</h2>
    <p style={{fontSize:'16px',color:'rgba(255,255,255,0.5)',maxWidth:'560px',margin:'0 auto 48px'}}>Explora todas las categorías del Esquema Nacional de Seguridad y el resto de certificaciones que ofrece Avson GRC.</p>
    <div style={{display:'flex',gap:'24px',justifyContent:'center',flexWrap:'wrap'}}>
      <Link to="/ens-basico" style={{display:'inline-block',padding:'20px 36px',border:'1px solid rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.75)',fontFamily:'var(--font-sans)',fontSize:'0.9rem',fontWeight:'600',textDecoration:'none',letterSpacing:'0.04em',transition:'all 0.2s'}} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}>ENS Básico →</Link>
      <Link to="/ens-medio" style={{display:'inline-block',padding:'20px 36px',border:'2px solid var(--gold)',color:'var(--gold)',fontFamily:'var(--font-sans)',fontSize:'0.9rem',fontWeight:'600',textDecoration:'none',letterSpacing:'0.04em',background:'rgba(201,168,76,0.08)'}}>ENS Medio (actual)</Link>
      <Link to="/ens-alto" style={{display:'inline-block',padding:'20px 36px',border:'1px solid rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.75)',fontFamily:'var(--font-sans)',fontSize:'0.9rem',fontWeight:'600',textDecoration:'none',letterSpacing:'0.04em',transition:'all 0.2s'}} onMouseOver={(e) => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.color = 'var(--gold)' }} onMouseOut={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.75)' }}>ENS Alto →</Link>
    </div>
    <div className="mt-48">
      <Link to="/ens" className="btn-text" style={{color:'rgba(255,255,255,0.5)'}}>← Ver resumen de todas las categorías ENS</Link>
    </div>
  </div>
</section>
    </>
  )
}
