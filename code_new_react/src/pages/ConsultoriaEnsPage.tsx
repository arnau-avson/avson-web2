import { FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function ConsultoriaEnsPage() {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = '/gracias'
  }

  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ background: 'var(--navy)', padding: '100px 0 80px' }}>
        <div className="container container--narrow">
          <ol className="breadcrumb" style={{ display: 'flex', gap: '8px', listStyle: 'none', fontSize: '12px', color: 'rgba(255,255,255,.5)', fontFamily: "'Inter',sans-serif", letterSpacing: '.05em', marginBottom: '32px', padding: 0 }}>
            <li><Link to="/" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>Inicio</Link></li>
            <li className="sep" style={{ color: 'rgba(255,255,255,.3)' }}>/</li>
            <li><Link to="/ens" style={{ color: 'rgba(255,255,255,.5)', textDecoration: 'none' }}>ENS</Link></li>
            <li className="sep" style={{ color: 'rgba(255,255,255,.3)' }}>/</li>
            <li style={{ color: 'var(--gold)' }}>Consultoria ENS Espana</li>
          </ol>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>Esquema Nacional de Seguridad · Toda Espana</p>
          <h1 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(36px,5vw,64px)', fontWeight: 600, color: '#fff', lineHeight: 1.08, marginBottom: '24px' }}>Consultoria ENS en Espana --<br /><em style={{ fontStyle: 'italic', fontWeight: 300 }}>Certificacion para Toda la Nacion</em></h1>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '16px', color: 'rgba(255,255,255,.75)', lineHeight: 1.7, maxWidth: '680px', marginBottom: '40px' }}>Avson GRC es la consultora especializada en ENS con mayor tasa de exito de Espana. Trabajamos con empresas de cualquier ciudad, de forma presencial o en remoto, con la misma metodologia y los mismos resultados garantizados.</p>
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', maxWidth: '520px' }}>
            <input type="email" name="email" placeholder="tu@empresa.com" required style={{ flex: 1, minWidth: '220px', padding: '14px 18px', fontFamily: "'Inter',sans-serif", fontSize: '14px', border: '1px solid rgba(255,255,255,.2)', background: 'rgba(255,255,255,.08)', color: '#fff', outline: 'none' }} />
            <button type="submit" style={{ padding: '14px 28px', background: 'var(--gold)', color: 'var(--white)', fontFamily: "'Inter',sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', cursor: 'pointer', border: 'none' }}>Pide presupuesto &rarr;</button>
          </form>
          <p style={{ marginTop: '12px', fontSize: '12px', color: 'rgba(255,255,255,.45)', fontFamily: "'Inter',sans-serif" }}>Sin compromiso · Respuesta en 48h · Servicio en toda Espana</p>
        </div>
      </section>

      {/* STATS BAR */}
      <div style={{ background: 'var(--gold)' }}>
        <div style={{ maxWidth: '1320px', margin: '0 auto', padding: '0 40px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          <div style={{ padding: '28px 20px', textAlign: 'center', borderRight: '1px solid rgba(26,39,68,.15)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2.6rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1, marginBottom: '6px' }}>400+</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', fontWeight: 500, color: 'rgba(26,39,68,.75)', lineHeight: 1.4 }}>Empresas certificadas</div>
          </div>
          <div style={{ padding: '28px 20px', textAlign: 'center', borderRight: '1px solid rgba(26,39,68,.15)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2.6rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1, marginBottom: '6px' }}>98%</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', fontWeight: 500, color: 'rgba(26,39,68,.75)', lineHeight: 1.4 }}>Aprueban la auditoria a la primera</div>
          </div>
          <div style={{ padding: '28px 20px', textAlign: 'center', borderRight: '1px solid rgba(26,39,68,.15)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2.6rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1, marginBottom: '6px' }}>15 dias</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', fontWeight: 500, color: 'rgba(26,39,68,.75)', lineHeight: 1.4 }}>Media para inicio del proyecto</div>
          </div>
          <div style={{ padding: '28px 20px', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '2.6rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1, marginBottom: '6px' }}>ES</div>
            <div style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', fontWeight: 500, color: 'rgba(26,39,68,.75)', lineHeight: 1.4 }}>Presencia en toda Espana</div>
          </div>
        </div>
      </div>

      {/* COBERTURA NACIONAL */}
      <section className="section section--white">
        <div className="container">
          <div className="gold-line"></div>
          <p className="section__label" style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Cobertura nacional</p>
          <h2 className="section__h2" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.1, marginBottom: '20px' }}>Presencia en toda Espana</h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '17px', color: '#5a6478', lineHeight: 1.7, maxWidth: '680px', marginBottom: '48px' }}>Avson GRC no es una consultora local. Somos un equipo nacional que trabaja con empresas de cualquier punto de la geografia espanola.</p>
          <div style={{ background: 'var(--navy)', borderLeft: '4px solid var(--gold)', padding: '32px 40px', margin: '40px 0' }}>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '16px', fontWeight: 500, color: 'rgba(255,255,255,.9)', lineHeight: 1.7 }}>Avson GRC es una consultoria nacional con presencia en toda Espana. Trabajamos de forma presencial en cualquier ciudad y en remoto con la misma metodologia y los mismos resultados.</p>
          </div>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '15px', color: '#5a6478', lineHeight: 1.7, marginBottom: '32px' }}>Disponemos de consultores que se desplazan a cualquier ciudad espanola para reuniones, talleres y auditorias in situ. Para las fases de implementacion y seguimiento, utilizamos nuestra plataforma colaborativa online, que permite gestionar el proyecto con la misma eficiencia que si estuvieramos en la misma oficina. El 70% de nuestros proyectos ENS se realizan en modalidad mixta: reuniones clave presenciales, implementacion en remoto.</p>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '15px', color: '#5a6478', lineHeight: 1.7, marginBottom: '32px' }}>Hemos certificado empresas en mas de 40 ciudades espanolas. No importa si tu empresa esta en una capital de provincia o en una ciudad mediana: nuestro equipo puede atenderte con los mismos estandares de servicio.</p>
          <div className="city-grid anim-fade-up">
            {['Madrid','Barcelona','Valencia','Sevilla','Bilbao','Zaragoza','Malaga','Murcia','Palma de Mallorca','Las Palmas','Alicante','Valladolid','Cordoba','Granada','Vigo','Gijon','A Coruna','San Sebastian','Pamplona','Santander','Burgos','Almeria','Badajoz','Logrono'].map((city) => (
              <div key={city} className="city-item"><span className="city-dot"></span>{city}</div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFERENCIADORES */}
      <section className="section section--pearl">
        <div className="container">
          <div className="text-center" style={{ maxWidth: '700px', margin: '0 auto 56px', textAlign: 'center' }}>
            <div className="gold-line" style={{ margin: '0 auto 20px' }}></div>
            <p className="section__label" style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Diferenciadores</p>
            <h2 className="section__h2" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.1, marginBottom: '20px' }}>Por que Avson GRC?</h2>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '17px', color: '#5a6478', lineHeight: 1.7, maxWidth: '680px', marginBottom: '48px' }}>Llevamos mas de una decada certificando empresas en ENS. Hemos simplificado el proceso, reducido los plazos y garantizado el resultado por escrito.</p>
          </div>
          <div className="diff-grid">
            <div className="diff-card anim-fade-up">
              <svg className="diff-card__icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="24" cy="24" r="20" /><path d="M16 24l6 6 10-12" /></svg>
              <div className="diff-card__title">Garantia de exito por escrito</div>
              <p className="diff-card__text">Somos la unica consultora ENS de Espana que incluye en el contrato una garantia de exito en la auditoria. Si no apruebas, seguimos trabajando sin coste adicional hasta que obtengas el certificado. Sin letra pequena.</p>
            </div>
            <div className="diff-card anim-fade-up">
              <svg className="diff-card__icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><rect x="8" y="8" width="32" height="32" rx="2" /><path d="M16 20h16M16 28h10" /></svg>
              <div className="diff-card__title">Metodologia propia probada</div>
              <p className="diff-card__text">Nuestra metodologia Avson ENS Framework reduce los plazos de certificacion un 40% respecto al proceso estandar. Hemos refinado cada paso con mas de 400 certificaciones completadas en todos los sectores y niveles.</p>
            </div>
            <div className="diff-card anim-fade-up">
              <svg className="diff-card__icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><path d="M24 4L4 16v16l20 12 20-12V16L24 4z" /><path d="M24 4v40M4 16l20 12 20-12" /></svg>
              <div className="diff-card__title">Especialistas exclusivos en GRC</div>
              <p className="diff-card__text">No somos un bufete de abogados ni una auditora generalista. Todo nuestro equipo trabaja exclusivamente en GRC: ENS, ISO 27001, ISO 22301, DORA y NIS2. Esa especializacion se traduce en resultados mas rapidos y seguros para el cliente.</p>
            </div>
            <div className="diff-card anim-fade-up">
              <svg className="diff-card__icon" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="24" cy="18" r="8" /><path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" /></svg>
              <div className="diff-card__title">Equipo dedicado a tu proyecto</div>
              <p className="diff-card__text">Asignamos un consultor principal y un equipo dedicado desde el diagnostico hasta la auditoria final. No trabajaras con un equipo diferente en cada fase. Tu consultor conoce tu empresa de principio a fin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* NIVELES DE CERTIFICACION */}
      <section className="section section--white">
        <div className="container">
          <div className="gold-line"></div>
          <p className="section__label" style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Niveles de certificacion</p>
          <h2 className="section__h2" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.1, marginBottom: '20px' }}>ENS Basico vs. Medio vs. Alto</h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '17px', color: '#5a6478', lineHeight: 1.7, maxWidth: '680px', marginBottom: '48px' }}>El ENS se aplica en tres niveles de seguridad. La categoria aplicable depende del impacto que tendria un incidente sobre los servicios prestados al organismo publico.</p>
          <div style={{ overflowX: 'auto' }}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Criterio</th>
                  <th><span className="level-badge level-badge--basic">Basico</span></th>
                  <th><span className="level-badge level-badge--medio">Medio</span></th>
                  <th><span className="level-badge level-badge--alto">Alto</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Sectores tipicos</strong></td>
                  <td>Proveedores TIC generales, SaaS para AAPP, consultoras con acceso a datos no criticos</td>
                  <td>Integradores de sistemas, plataformas de tramitacion, gestion de datos sensibles de ciudadanos</td>
                  <td>Defensa, seguridad nacional, infraestructuras criticas, sistemas de salud de alto impacto</td>
                </tr>
                <tr>
                  <td><strong>Numero de controles</strong></td>
                  <td>~73 medidas de seguridad</td>
                  <td>~110 medidas de seguridad</td>
                  <td>~130 medidas + refuerzos especificos</td>
                </tr>
                <tr>
                  <td><strong>Tipo de auditoria</strong></td>
                  <td>Documental (puede ser autoevaluacion guiada)</td>
                  <td>Entidad certificadora acreditada por ENAC</td>
                  <td>Entidad certificadora acreditada por ENAC (mas exigente)</td>
                </tr>
                <tr>
                  <td><strong>Plazo estimado</strong></td>
                  <td>2 - 3 meses</td>
                  <td>3 - 5 meses</td>
                  <td>5 - 9 meses</td>
                </tr>
                <tr>
                  <td><strong>Coste orientativo</strong></td>
                  <td>Desde 4.000 &#8364;</td>
                  <td>Desde 9.000 &#8364;</td>
                  <td>Desde 18.000 &#8364;</td>
                </tr>
                <tr>
                  <td><strong>Renovacion</strong></td>
                  <td>Cada 2 anos (autoevaluacion anual)</td>
                  <td>Cada 2 anos (auditoria de seguimiento)</td>
                  <td>Cada 2 anos (auditoria de seguimiento completa)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#999', marginTop: '12px' }}>* Costes orientativos para organizaciones de tamano medio. El presupuesto sin compromiso incluye propuesta personalizada sin compromiso.</p>
        </div>
      </section>

      {/* METODOLOGIA REMOTA */}
      <section className="section section--pearl">
        <div className="container">
          <div className="gold-line"></div>
          <p className="section__label" style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Metodologia remota</p>
          <h2 className="section__h2" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.1, marginBottom: '20px' }}>Como trabajamos en remoto -- con los mismos resultados</h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '17px', color: '#5a6478', lineHeight: 1.7, maxWidth: '680px', marginBottom: '48px' }}>El 70% de nuestros proyectos ENS se realizan en remoto o en modalidad mixta, con las mismas tasas de exito que los proyectos totalmente presenciales. Asi funciona nuestro proceso:</p>
          <div className="steps-grid">
            <div className="step-card anim-fade-up">
              <div className="step-card__num" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '3rem', fontWeight: 300, color: 'var(--gold)', opacity: 0.5, lineHeight: 1, marginBottom: '16px' }}>01</div>
              <div className="step-card__title" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.2rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '10px' }}>Videoconferencia de diagnostico</div>
              <p className="step-card__text" style={{ fontFamily: "'Inter',sans-serif", fontSize: '14px', color: '#5a6478', lineHeight: 1.7 }}>Comenzamos con una sesion de diagnostico por videoconferencia (60-90 min) en la que analizamos el alcance, la categoria ENS aplicable y el estado actual de seguridad. Usamos herramientas colaborativas para completar el cuestionario de partida en tiempo real con tu equipo.</p>
            </div>
            <div className="step-card anim-fade-up">
              <div className="step-card__num" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '3rem', fontWeight: 300, color: 'var(--gold)', opacity: 0.5, lineHeight: 1, marginBottom: '16px' }}>02</div>
              <div className="step-card__title" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.2rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '10px' }}>Plataforma colaborativa Avson</div>
              <p className="step-card__text" style={{ fontFamily: "'Inter',sans-serif", fontSize: '14px', color: '#5a6478', lineHeight: 1.7 }}>Todo el proyecto se gestiona en nuestra plataforma online: documentacion, evidencias, plan de accion, seguimiento de controles y comunicacion directa con el equipo consultor. Tu equipo tiene acceso 24/7 para revisar el avance y subir evidencias sin necesidad de reuniones presenciales.</p>
            </div>
            <div className="step-card anim-fade-up">
              <div className="step-card__num" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '3rem', fontWeight: 300, color: 'var(--gold)', opacity: 0.5, lineHeight: 1, marginBottom: '16px' }}>03</div>
              <div className="step-card__title" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.2rem', fontWeight: 600, color: 'var(--navy)', marginBottom: '10px' }}>Auditoria in situ o documental</div>
              <p className="step-card__text" style={{ fontFamily: "'Inter',sans-serif", fontSize: '14px', color: '#5a6478', lineHeight: 1.7 }}>Para ENS basico, la auditoria puede ser completamente documental. Para ENS medio y alto, coordinamos con la entidad certificadora acreditada por ENAC la visita in situ (si procede) o la auditoria remota, cada vez mas aceptada por los organismos certificadores.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--white">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div className="gold-line" style={{ margin: '0 auto 20px' }}></div>
            <p className="section__label" style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>Preguntas frecuentes</p>
            <h2 className="section__h2" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 600, color: 'var(--navy)', lineHeight: 1.1, marginBottom: '20px' }}>Todo lo que necesitas saber sobre el ENS en Espana</h2>
          </div>
          <div className="faq-list" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="faq-item anim-fade-up">
              <div className="faq-item__q" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', padding: '22px 0', cursor: 'pointer', fontFamily: "'Inter',sans-serif", fontSize: '15px', fontWeight: 500, color: 'var(--navy)', background: 'none', border: 'none', width: '100%', textAlign: 'left' }} onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
                Que es el ENS y quien lo necesita?
                <span className="faq-item__icon" style={{ fontSize: '22px', fontWeight: 300, color: 'var(--gold)', flexShrink: 0 }}>+</span>
              </div>
              <div className="faq-item__a" style={{ display: 'none', padding: '0 0 22px', fontFamily: "'Inter',sans-serif", fontSize: '14px', color: '#5a6478', lineHeight: 1.75 }}>
                <p>El Esquema Nacional de Seguridad (ENS), regulado por el Real Decreto 311/2022, establece los requisitos de seguridad que deben cumplir los sistemas de informacion de las entidades publicas y los proveedores TIC que prestan servicios al sector publico. Necesitan el ENS todas las empresas que liciten con la Administracion Publica en contratos TIC, o que gestionen datos, sistemas o redes de organismos publicos espanoles.</p>
              </div>
            </div>
            <div className="faq-item anim-fade-up">
              <div className="faq-item__q" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', padding: '22px 0', cursor: 'pointer', fontFamily: "'Inter',sans-serif", fontSize: '15px', fontWeight: 500, color: 'var(--navy)', background: 'none', border: 'none', width: '100%', textAlign: 'left' }} onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
                Cuanto tiempo tarda la certificacion ENS?
                <span className="faq-item__icon" style={{ fontSize: '22px', fontWeight: 300, color: 'var(--gold)', flexShrink: 0 }}>+</span>
              </div>
              <div className="faq-item__a" style={{ display: 'none', padding: '0 0 22px', fontFamily: "'Inter',sans-serif", fontSize: '14px', color: '#5a6478', lineHeight: 1.75 }}>
                <p>El plazo habitual es de 3 a 4 meses para la mayoria de organizaciones de tamano medio, dependiendo del nivel ENS (basico, medio o alto), la madurez previa en seguridad y el tamano de la organizacion. Con <Link to="/ens-express" style={{ color: 'var(--gold)' }}>ENS Express</Link>, el plazo puede reducirse a 30 dias para el nivel basico.</p>
              </div>
            </div>
            <div className="faq-item anim-fade-up">
              <div className="faq-item__q" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', padding: '22px 0', cursor: 'pointer', fontFamily: "'Inter',sans-serif", fontSize: '15px', fontWeight: 500, color: 'var(--navy)', background: 'none', border: 'none', width: '100%', textAlign: 'left' }} onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
                Cuanto cuesta la consultoria ENS en Espana?
                <span className="faq-item__icon" style={{ fontSize: '22px', fontWeight: 300, color: 'var(--gold)', flexShrink: 0 }}>+</span>
              </div>
              <div className="faq-item__a" style={{ display: 'none', padding: '0 0 22px', fontFamily: "'Inter',sans-serif", fontSize: '14px', color: '#5a6478', lineHeight: 1.75 }}>
                <p>El coste varia segun el nivel ENS, el tamano de la organizacion y el punto de partida. El rango orientativo va desde 4.000 &#8364; para ENS basico en organizaciones pequenas hasta 25.000 &#8364; o mas para ENS alto en organizaciones complejas. El <Link to="/contacto" style={{ color: 'var(--gold)' }}>presupuesto sin compromiso</Link> incluye una propuesta economica personalizada sin compromiso.</p>
              </div>
            </div>
            <div className="faq-item anim-fade-up">
              <div className="faq-item__q" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', padding: '22px 0', cursor: 'pointer', fontFamily: "'Inter',sans-serif", fontSize: '15px', fontWeight: 500, color: 'var(--navy)', background: 'none', border: 'none', width: '100%', textAlign: 'left' }} onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
                Trabajan en toda Espana o solo en Madrid?
                <span className="faq-item__icon" style={{ fontSize: '22px', fontWeight: 300, color: 'var(--gold)', flexShrink: 0 }}>+</span>
              </div>
              <div className="faq-item__a" style={{ display: 'none', padding: '0 0 22px', fontFamily: "'Inter',sans-serif", fontSize: '14px', color: '#5a6478', lineHeight: 1.75 }}>
                <p>Avson GRC es una consultoria nacional con presencia en toda Espana. Trabajamos de forma presencial en cualquier ciudad espanola y en remoto con la misma metodologia y los mismos resultados. No hay ninguna limitacion geografica en nuestro servicio. Tenemos clientes certificados en mas de 40 ciudades espanolas.</p>
              </div>
            </div>
            <div className="faq-item anim-fade-up">
              <div className="faq-item__q" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '20px', padding: '22px 0', cursor: 'pointer', fontFamily: "'Inter',sans-serif", fontSize: '15px', fontWeight: 500, color: 'var(--navy)', background: 'none', border: 'none', width: '100%', textAlign: 'left' }} onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
                Que diferencia hay entre ENS basico, medio y alto?
                <span className="faq-item__icon" style={{ fontSize: '22px', fontWeight: 300, color: 'var(--gold)', flexShrink: 0 }}>+</span>
              </div>
              <div className="faq-item__a" style={{ display: 'none', padding: '0 0 22px', fontFamily: "'Inter',sans-serif", fontSize: '14px', color: '#5a6478', lineHeight: 1.75 }}>
                <p>Los tres niveles del ENS difieren en el impacto potencial de un incidente de seguridad sobre los servicios prestados. El nivel basico aplica a sistemas con impacto menor; el nivel medio a sistemas de impacto significativo; y el nivel alto a sistemas cuya interrupcion o compromiso tendria consecuencias graves para la mision de la organizacion o la seguridad publica. La categorizacion la determina la propia organizacion con el apoyo de la consultora.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--navy">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <div className="gold-line" style={{ margin: '0 auto 20px' }}></div>
          <h2 style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 'clamp(28px,3.5vw,46px)', fontWeight: 600, color: '#fff', lineHeight: 1.1, marginBottom: '20px' }}>Solicita tu presupuesto sin compromiso</h2>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '17px', color: 'rgba(255,255,255,.75)', lineHeight: 1.7, margin: '0 auto 36px', maxWidth: '680px' }}>Dinos tu email y te enviamos un presupuesto sin compromiso en 48 horas con la categoria ENS aplicable, el plan de certificacion y el presupuesto orientativo. Sin compromiso.</p>
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '520px', margin: '0 auto' }}>
            <input type="email" name="email" placeholder="tu@empresa.com" required style={{ flex: 1, minWidth: '220px', padding: '14px 18px', fontFamily: "'Inter',sans-serif", fontSize: '14px', border: '1px solid rgba(255,255,255,.2)', background: 'rgba(255,255,255,.1)', color: '#fff', outline: 'none' }} />
            <button type="submit" style={{ padding: '14px 28px', background: 'var(--gold)', color: 'var(--white)', fontFamily: "'Inter',sans-serif", fontSize: '13px', fontWeight: 600, letterSpacing: '.06em', textTransform: 'uppercase', cursor: 'pointer', border: 'none' }}>Habla con un experto &rarr;</button>
          </form>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: 'rgba(255,255,255,.35)', marginTop: '16px' }}>hello@avson.eu · Toda Espana, presencial y remoto</p>
        </div>
      </section>
    </>
  )
}
