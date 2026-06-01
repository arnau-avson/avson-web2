import { Link } from 'react-router-dom'

export default function ConsultoriaEnsPage() {
  return (
    <>
<section className="hero">
    <div className="container container--narrow">
      <ol className="breadcrumb">
        <li><Link to="/">Inicio</Link></li>
        <li className="sep">/</li>
        <li><Link to="/ens">ENS</Link></li>
        <li className="sep">/</li>
        <li className="current">Consultoría ENS España</li>
      </ol>
      <p className="hero__label">Esquema Nacional de Seguridad · Toda España</p>
      <h1 className="hero__h1">Consultoría ENS en España —<br /><em>Certificación para Toda la Nación</em></h1>
      <p className="hero__sub">Avson GRC es la consultora especializada en ENS con mayor tasa de éxito de España. Trabajamos con empresas de cualquier ciudad, de forma presencial o en remoto, con la misma metodología y los mismos resultados garantizados.</p>
      <form className="hero__form" action="/contacto" method="get">
        <input type="email" name="email" placeholder="tu@empresa.com" required />
        <button type="submit">Diagnóstico gratuito →</button>
      </form>
      <p className="hero__note">Sin compromiso · Respuesta en 48h · Servicio en toda España</p>
    </div>
  </section>

  <div className="stats-bar">
    <div className="stats-bar__inner">
      <div className="stat-item">
        <div className="stat-item__number">400+</div>
        <div className="stat-item__label">Empresas certificadas</div>
      </div>
      <div className="stat-item">
        <div className="stat-item__number">98%</div>
        <div className="stat-item__label">Aprueban la auditoría a la primera</div>
      </div>
      <div className="stat-item">
        <div className="stat-item__number">15 días</div>
        <div className="stat-item__label">Media para inicio del proyecto</div>
      </div>
      <div className="stat-item">
        <div className="stat-item__number">ES</div>
        <div className="stat-item__label">Presencia en toda España</div>
      </div>
    </div>
  </div>

  <section className="section section--white">
    <div className="container">
      <div className="gold-line"></div>
      <p className="section__label">Cobertura nacional</p>
      <h2 className="section__h2">Presencia en toda España</h2>
      <p className="section__lead">Avson GRC no es una consultora local. Somos un equipo nacional que trabaja con empresas de cualquier punto de la geografía española.</p>
      <div className="national-msg">
        <p>Avson GRC es una consultoría nacional con presencia en toda España. Trabajamos de forma presencial en cualquier ciudad y en remoto con la misma metodología y los mismos resultados.</p>
      </div>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'#5a6478',lineHeight:'1.7',marginBottom:'32px'}}>Disponemos de consultores que se desplazan a cualquier ciudad española para reuniones, talleres y auditorías in situ. Para las fases de implementación y seguimiento, utilizamos nuestra plataforma colaborativa online, que permite gestionar el proyecto con la misma eficiencia que si estuviéramos en la misma oficina. El 70% de nuestros proyectos ENS se realizan en modalidad mixta: reuniones clave presenciales, implementación en remoto.</p>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'#5a6478',lineHeight:'1.7',marginBottom:'32px'}}>Hemos certificado empresas en más de 40 ciudades españolas. No importa si tu empresa está en una capital de provincia o en una ciudad mediana: nuestro equipo puede atenderte con los mismos estándares de servicio.</p>
      <div className="city-grid anim-fade-up">
        <div className="city-item"><span className="city-dot"></span>Madrid</div>
        <div className="city-item"><span className="city-dot"></span>Barcelona</div>
        <div className="city-item"><span className="city-dot"></span>Valencia</div>
        <div className="city-item"><span className="city-dot"></span>Sevilla</div>
        <div className="city-item"><span className="city-dot"></span>Bilbao</div>
        <div className="city-item"><span className="city-dot"></span>Zaragoza</div>
        <div className="city-item"><span className="city-dot"></span>Málaga</div>
        <div className="city-item"><span className="city-dot"></span>Murcia</div>
        <div className="city-item"><span className="city-dot"></span>Palma de Mallorca</div>
        <div className="city-item"><span className="city-dot"></span>Las Palmas</div>
        <div className="city-item"><span className="city-dot"></span>Alicante</div>
        <div className="city-item"><span className="city-dot"></span>Valladolid</div>
        <div className="city-item"><span className="city-dot"></span>Córdoba</div>
        <div className="city-item"><span className="city-dot"></span>Granada</div>
        <div className="city-item"><span className="city-dot"></span>Vigo</div>
        <div className="city-item"><span className="city-dot"></span>Gijón</div>
        <div className="city-item"><span className="city-dot"></span>A Coruña</div>
        <div className="city-item"><span className="city-dot"></span>San Sebastián</div>
        <div className="city-item"><span className="city-dot"></span>Pamplona</div>
        <div className="city-item"><span className="city-dot"></span>Santander</div>
        <div className="city-item"><span className="city-dot"></span>Burgos</div>
        <div className="city-item"><span className="city-dot"></span>Almería</div>
        <div className="city-item"><span className="city-dot"></span>Badajoz</div>
        <div className="city-item"><span className="city-dot"></span>Logroño</div>
      </div>
    </div>
  </section>

  <section className="section section--pearl">
    <div className="container">
      <div className="text-center" style={{maxWidth:'700px',margin:'0 auto 56px'}}>
        <div className="gold-line gold-line--center"></div>
        <p className="section__label">Diferenciadores</p>
        <h2 className="section__h2">¿Por qué Avson GRC?</h2>
        <p className="section__lead">Llevamos más de una década certificando empresas en ENS. Hemos simplificado el proceso, reducido los plazos y garantizado el resultado por escrito.</p>
      </div>
      <div className="diff-grid">
        <div className="diff-card anim-fade-up">
          <svg className="diff-card__icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="24" r="20"/><path d="M16 24l6 6 10-12"/></svg>
          <div className="diff-card__title">Garantía de éxito por escrito</div>
          <p className="diff-card__text">Somos la única consultora ENS de España que incluye en el contrato una garantía de éxito en la auditoría. Si no apruebas, seguimos trabajando sin coste adicional hasta que obtengas el certificado. Sin letra pequeña.</p>
        </div>
        <div className="diff-card anim-fade-up">
          <svg className="diff-card__icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><rect x="8" y="8" width="32" height="32" rx="2"/><path d="M16 20h16M16 28h10"/></svg>
          <div className="diff-card__title">Metodología propia probada</div>
          <p className="diff-card__text">Nuestra metodología Avson ENS Framework reduce los plazos de certificación un 40% respecto al proceso estándar. Hemos refinado cada paso con más de 400 certificaciones completadas en todos los sectores y niveles.</p>
        </div>
        <div className="diff-card anim-fade-up">
          <svg className="diff-card__icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><path d="M24 4L4 16v16l20 12 20-12V16L24 4z"/><path d="M24 4v40M4 16l20 12 20-12"/></svg>
          <div className="diff-card__title">Especialistas exclusivos en GRC</div>
          <p className="diff-card__text">No somos un bufete de abogados ni una auditora generalista. Todo nuestro equipo trabaja exclusivamente en GRC: ENS, ISO 27001, ISO 22301, DORA y NIS2. Esa especialización se traduce en resultados más rápidos y seguros para el cliente.</p>
        </div>
        <div className="diff-card anim-fade-up">
          <svg className="diff-card__icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" stroke-width="2"><circle cx="24" cy="18" r="8"/><path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16"/></svg>
          <div className="diff-card__title">Equipo dedicado a tu proyecto</div>
          <p className="diff-card__text">Asignamos un consultor principal y un equipo dedicado desde el diagnóstico hasta la auditoría final. No trabajarás con un equipo diferente en cada fase. Tu consultor conoce tu empresa de principio a fin.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="section section--white">
    <div className="container">
      <div className="gold-line"></div>
      <p className="section__label">Niveles de certificación</p>
      <h2 className="section__h2">ENS Básico vs. Medio vs. Alto</h2>
      <p className="section__lead">El ENS se aplica en tres niveles de seguridad. La categoría aplicable depende del impacto que tendría un incidente sobre los servicios prestados al organismo público.</p>
      <div style={{overflowX:'auto'}}>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Criterio</th>
              <th><span className="level-badge level-badge--basic">Básico</span></th>
              <th><span className="level-badge level-badge--medio">Medio</span></th>
              <th><span className="level-badge level-badge--alto">Alto</span></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Sectores típicos</strong></td>
              <td>Proveedores TIC generales, SaaS para AAPP, consultoras con acceso a datos no críticos</td>
              <td>Integradores de sistemas, plataformas de tramitación, gestión de datos sensibles de ciudadanos</td>
              <td>Defensa, seguridad nacional, infraestructuras críticas, sistemas de salud de alto impacto</td>
            </tr>
            <tr>
              <td><strong>Número de controles</strong></td>
              <td>~75 medidas de seguridad</td>
              <td>~110 medidas de seguridad</td>
              <td>~130 medidas + refuerzos específicos</td>
            </tr>
            <tr>
              <td><strong>Tipo de auditoría</strong></td>
              <td>Documental (puede ser autoevaluación guiada)</td>
              <td>Entidad certificadora acreditada ENAC</td>
              <td>Entidad certificadora acreditada ENAC (más exigente)</td>
            </tr>
            <tr>
              <td><strong>Plazo estimado</strong></td>
              <td>2 – 3 meses</td>
              <td>3 – 5 meses</td>
              <td>5 – 9 meses</td>
            </tr>
            <tr>
              <td><strong>Coste orientativo</strong></td>
              <td>Desde 4.000 €</td>
              <td>Desde 9.000 €</td>
              <td>Desde 18.000 €</td>
            </tr>
            <tr>
              <td><strong>Renovación</strong></td>
              <td>Cada 2 años (autoevaluación anual)</td>
              <td>Cada 2 años (auditoría de seguimiento)</td>
              <td>Cada 2 años (auditoría de seguimiento completa)</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'#999',marginTop:'12px'}}>* Costes orientativos para organizaciones de tamaño medio. El diagnóstico gratuito incluye propuesta personalizada sin compromiso.</p>
    </div>
  </section>

  <section className="section section--pearl">
    <div className="container">
      <div className="gold-line"></div>
      <p className="section__label">Metodología remota</p>
      <h2 className="section__h2">Cómo trabajamos en remoto — con los mismos resultados</h2>
      <p className="section__lead">El 70% de nuestros proyectos ENS se realizan en remoto o en modalidad mixta, con las mismas tasas de éxito que los proyectos totalmente presenciales. Así funciona nuestro proceso:</p>
      <div className="steps-grid">
        <div className="step-card anim-fade-up">
          <div className="step-card__num">01</div>
          <div className="step-card__title">Videoconferencia de diagnóstico</div>
          <p className="step-card__text">Comenzamos con una sesión de diagnóstico por videoconferencia (60-90 min) en la que analizamos el alcance, la categoría ENS aplicable y el estado actual de seguridad. Usamos herramientas colaborativas para completar el cuestionario de partida en tiempo real con tu equipo.</p>
        </div>
        <div className="step-card anim-fade-up">
          <div className="step-card__num">02</div>
          <div className="step-card__title">Plataforma colaborativa Avson</div>
          <p className="step-card__text">Todo el proyecto se gestiona en nuestra plataforma online: documentación, evidencias, plan de acción, seguimiento de controles y comunicación directa con el equipo consultor. Tu equipo tiene acceso 24/7 para revisar el avance y subir evidencias sin necesidad de reuniones presenciales.</p>
        </div>
        <div className="step-card anim-fade-up">
          <div className="step-card__num">03</div>
          <div className="step-card__title">Auditoría in situ o documental</div>
          <p className="step-card__text">Para ENS básico, la auditoría puede ser completamente documental. Para ENS medio y alto, coordinamos con la entidad certificadora acreditada por ENAC la visita in situ (si procede) o la auditoría remota, cada vez más aceptada por los organismos certificadores.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="section section--white">
    <div className="container">
      <div className="text-center" style={{marginBottom:'56px'}}>
        <div className="gold-line gold-line--center"></div>
        <p className="section__label">Preguntas frecuentes</p>
        <h2 className="section__h2">Todo lo que necesitas saber sobre el ENS en España</h2>
      </div>
      <div className="faq-list">
        <div className="faq-item anim-fade-up">
          <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
            ¿Qué es el ENS y quién lo necesita?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__a">
            <p>El Esquema Nacional de Seguridad (ENS), regulado por el Real Decreto 311/2022, establece los requisitos de seguridad que deben cumplir los sistemas de información de las entidades públicas y los proveedores TIC que prestan servicios al sector público. Necesitan el ENS todas las empresas que liciten con la Administración Pública en contratos TIC, o que gestionen datos, sistemas o redes de organismos públicos españoles.</p>
          </div>
        </div>
        <div className="faq-item anim-fade-up">
          <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
            ¿Cuánto tiempo tarda la certificación ENS?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__a">
            <p>El plazo habitual es de 3 a 4 meses para la mayoría de organizaciones de tamaño medio, dependiendo del nivel ENS (básico, medio o alto), la madurez previa en seguridad y el tamaño de la organización. Con <Link to="/ens-express" style={{color:'var(--gold)'}}>ENS Express</Link>, el plazo puede reducirse a 30 días para el nivel básico.</p>
          </div>
        </div>
        <div className="faq-item anim-fade-up">
          <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
            ¿Cuánto cuesta la consultoría ENS en España?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__a">
            <p>El coste varía según el nivel ENS, el tamaño de la organización y el punto de partida. El rango orientativo va desde 4.000 € para ENS básico en organizaciones pequeñas hasta 25.000 € o más para ENS alto en organizaciones complejas. El <Link to="/contacto" style={{color:'var(--gold)'}}>diagnóstico gratuito</Link> incluye una propuesta económica personalizada sin compromiso.</p>
          </div>
        </div>
        <div className="faq-item anim-fade-up">
          <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
            ¿Trabajan en toda España o solo en Madrid?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__a">
            <p>Avson GRC es una consultoría nacional con presencia en toda España. Trabajamos de forma presencial en cualquier ciudad española y en remoto con la misma metodología y los mismos resultados. No hay ninguna limitación geográfica en nuestro servicio. Tenemos clientes certificados en más de 40 ciudades españolas.</p>
          </div>
        </div>
        <div className="faq-item anim-fade-up">
          <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
            ¿Qué diferencia hay entre ENS básico, medio y alto?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__a">
            <p>Los tres niveles del ENS difieren en el impacto potencial de un incidente de seguridad sobre los servicios prestados. El nivel básico aplica a sistemas con impacto menor; el nivel medio a sistemas de impacto significativo; y el nivel alto a sistemas cuya interrupción o compromiso tendría consecuencias graves para la misión de la organización o la seguridad pública. La categorización la determina la propia organización con el apoyo de la consultora.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section section--navy">
    <div className="container" style={{textAlign:'center',maxWidth:'700px'}}>
      <div className="gold-line gold-line--center"></div>
      <h2 className="section__h2 section__h2--white">Solicita tu diagnóstico gratuito</h2>
      <p className="section__lead section__lead--white" style={{margin:'0 auto 36px'}}>Dinos tu email y te enviamos un diagnóstico gratuito en 48 horas con la categoría ENS aplicable, el plan de certificación y el presupuesto orientativo. Sin compromiso.</p>
      <form className="cta-form" action="/contacto" method="get">
        <input type="email" name="email" placeholder="tu@empresa.com" required />
        <button type="submit">Solicitar diagnóstico →</button>
      </form>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'rgba(255,255,255,.35)',marginTop:'16px'}}>hello@avson.eu · Toda España, presencial y remoto</p>
    </div>
  </section>

    </>
  )
}
