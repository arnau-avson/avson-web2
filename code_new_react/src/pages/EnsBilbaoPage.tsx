import { Link } from 'react-router-dom'

export default function EnsBilbaoPage() {
  return (
    <>
      <section className="hero">
        <div className="container container--narrow">
          <ol className="breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li className="sep">/</li>
            <li><Link to="/ens">ENS</Link></li>
            <li className="sep">/</li>
            <li className="current">ENS en Bilbao</li>
          </ol>
          <div className="hero__badges">
            <span className="hero__badge">Cobertura Nacional</span>
            <span className="hero__badge">Equipo en País Vasco</span>
          </div>
          <h1 className="hero__h1">Certificado ENS en Bilbao —<br /><em>GRC para Empresas del País Vasco y Norte de España</em></h1>
          <p className="hero__sub">Avson GRC trabaja de forma presencial en Bilbao, el País Vasco y todo el norte de España, y en remoto con la misma metodología y los mismos resultados para cualquier empresa española.</p>
          <form className="hero__form" action="/contacto" method="get">
            <input type="email" name="email" placeholder="tu@empresa.com" required />
            <button type="submit">Pide presupuesto →</button>
          </form>
          <p className="hero__note">Sin compromiso · Respuesta en 48h · Presencial en Bilbao o en remoto</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="gold-line"></div>
          <p className="section__label">Cobertura nacional — No solo Bilbao</p>
          <h2 className="section__h2">Consultoría nacional con presencia en el País Vasco</h2>
          <div className="national-msg">
            <p>Avson GRC es una consultoría nacional con presencia en toda España. Trabajamos de forma presencial en cualquier ciudad y en remoto con la misma metodología y los mismos resultados.</p>
          </div>
          <p className="section__body">Nuestro equipo se desplaza a Bilbao, San Sebastián, Vitoria-Gasteiz y otras ciudades del norte de España para reuniones presenciales y preparación de auditorías. Las fases de implementación se gestionan en remoto con los mismos estándares de calidad.</p>
          <p className="section__body">Si tu empresa está en Navarra, La Rioja, Cantabria, Asturias o Galicia, Avson GRC puede atenderte con el mismo nivel de servicio. Consulta nuestra <Link to="/consultoria-ens-espana" style={{ color: 'var(--gold)', fontWeight: 500 }}>cobertura nacional completa</Link>.</p>
        </div>
      </section>

      <section className="section section--pearl">
        <div className="container">
          <div className="gold-line"></div>
          <p className="section__label">Contexto local</p>
          <h2 className="section__h2">ENS en Bilbao: industria vasca, sector financiero y energía</h2>
          <p className="section__lead">El País Vasco es una de las regiones más industrializadas de España, con un ecosistema financiero propio y un sector energético de referencia nacional, todos con alta demanda de certificaciones de seguridad.</p>
          <p className="section__body">El Gobierno Vasco, con sede en Vitoria-Gasteiz y con una fuerte presencia en Bilbao, ha establecido la EJIE (Sociedad Informática del Gobierno Vasco) como organismo coordinador de la digitalización y la seguridad de la información en el ámbito de la administración vasca. La EJIE ha sido pionera en la implementación del ENS en el ámbito autonómico y exige el certificado a todos sus proveedores TIC.</p>
          <p className="section__body">El sector financiero vasco —con instituciones como BBVA (fundado en Bilbao), Kutxabank, Laboral Kutxa y otras entidades— es uno de los más relevantes de España. Las empresas tecnológicas que proveen servicios a estas entidades financieras necesitan combinar el ENS (para contratos públicos) con regulaciones financieras como DORA y la normativa del Banco de España.</p>
          <p className="section__body">El sector energético vasco, con empresas como Iberdrola, Petronor e Ingeteam, opera infraestructuras críticas que requieren los más altos estándares de seguridad de la información. Las empresas tecnológicas que proveen sistemas SCADA, gestión de redes eléctricas o control industrial a este sector necesitan el ENS alto o equivalente para acceder a contratos con administraciones y entidades reguladas.</p>
          <p className="section__body">La industria manufacturera vasca —maquinaria, acero, química, automoción— está en un proceso de transformación digital que genera demanda de certificaciones de seguridad. Las empresas industriales que digitalizan sus procesos y necesitan conectar sistemas OT con TIC encuentran en el ENS un estándar de referencia para garantizar la seguridad de sus entornos industriales.</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="gold-line"></div>
          <p className="section__label">Proceso de certificación</p>
          <h2 className="section__h2">De cero al certificado ENS en 4 pasos</h2>
          <div className="process-grid">
            <div className="process-card anim-fade-up">
              <div className="process-card__num">01</div>
              <div className="process-card__title">Diagnóstico</div>
              <p className="process-card__text">Analizamos tu situación en el País Vasco: nivel ENS requerido, sistemas en alcance y brechas. Informe con plan de acción en 48h.</p>
            </div>
            <div className="process-card anim-fade-up">
              <div className="process-card__num">02</div>
              <div className="process-card__title">Implementación</div>
              <p className="process-card__text">Documentación SGSI completa, implementación de controles y formación de tu equipo. Gestión en remoto o presencial en Bilbao según tu preferencia.</p>
            </div>
            <div className="process-card anim-fade-up">
              <div className="process-card__num">03</div>
              <div className="process-card__title">Auditoría</div>
              <p className="process-card__text">Coordinamos con entidad certificadora acreditada por ENAC. Pre-auditoría interna para garantizar el éxito. 98% de empresas aprueban en primera auditoría.</p>
            </div>
            <div className="process-card anim-fade-up">
              <div className="process-card__num">04</div>
              <div className="process-card__title">Certificado</div>
              <p className="process-card__text">Certificado ENS e inscripción en el Registro Nacional. Avson te acompaña en el mantenimiento continuo durante los 2 años de vigencia.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--pearl">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="gold-line"></div>
          <p className="section__label">Inversión</p>
          <h2 className="section__h2">¿Cuánto cuesta el ENS en Bilbao?</h2>
          <div className="price-box anim-fade-up">
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '15px', color: '#3a4557', lineHeight: 1.75, marginBottom: '16px' }}>El coste de la consultoría ENS en Bilbao es el mismo que en cualquier otra ciudad española. Tarifas nacionales uniformes sin recargos:</p>
            <ul style={{ listStyle: 'none', fontFamily: "'Inter',sans-serif", fontSize: '15px', color: '#3a4557', lineHeight: 1.75 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}><span style={{ color: 'var(--gold)', fontWeight: 600 }}>→</span> ENS Básico: desde 4.000 €</li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}><span style={{ color: 'var(--gold)', fontWeight: 600 }}>→</span> ENS Medio: desde 9.000 €</li>
              <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--gold)', fontWeight: 600 }}>→</span> ENS Alto: desde 18.000 €</li>
            </ul>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '13px', color: '#999', marginTop: '16px' }}>Incluyen garantía de éxito por escrito. Ver <Link to="/precio" style={{ color: 'var(--gold)' }}>detalle de precios</Link>.</p>
          </div>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <div className="gold-line gold-line--center"></div>
            <p className="section__label">Preguntas frecuentes</p>
            <h2 className="section__h2">ENS en Bilbao — Preguntas frecuentes</h2>
          </div>
          <div className="faq-list">
            <div className="faq-item anim-fade-up">
              <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
                ¿Tienen oficina en Bilbao?
                <span className="faq-item__icon">+</span>
              </button>
              <div className="faq-item__a">
                <p>Avson GRC trabaja de forma presencial en Bilbao y todo el País Vasco desplazando a su equipo consultor cuando el proyecto lo requiere. La mayor parte del proceso ENS se gestiona eficazmente en remoto a través de nuestra plataforma colaborativa. Coordinamos visitas presenciales a Bilbao para las fases clave del proyecto. No hay recargos por desplazamiento.</p>
              </div>
            </div>
            <div className="faq-item anim-fade-up">
              <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
                ¿El ENS aplica a proveedores del Gobierno Vasco?
                <span className="faq-item__icon">+</span>
              </button>
              <div className="faq-item__a">
                <p>Sí. El Gobierno Vasco y todos sus organismos dependientes, así como las Diputaciones Forales de Álava, Guipúzcoa y Vizcaya, exigen ENS a sus proveedores TIC según el RD 311/2022. La EJIE (Sociedad Informática del Gobierno Vasco) coordina la aplicación del ENS en el ámbito de la administración vasca.</p>
              </div>
            </div>
            <div className="faq-item anim-fade-up">
              <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
                ¿Cuánto cuesta el ENS en Bilbao?
                <span className="faq-item__icon">+</span>
              </button>
              <div className="faq-item__a">
                <p>El coste es el mismo que en cualquier otra ciudad española: desde 4.000 € para ENS básico hasta más de 18.000 € para ENS alto. No aplicamos recargos por desplazamiento al País Vasco. El <Link to="/contacto" style={{ color: 'var(--gold)' }}>presupuesto sin compromiso</Link> incluye propuesta personalizada sin compromiso.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <div className="gold-line gold-line--center"></div>
          <h2 className="section__h2 section__h2--white">¿Tu empresa en Bilbao necesita el ENS?</h2>
          <p className="section__lead section__lead--white" style={{ margin: '0 auto 36px' }}>Escríbenos tu email y te enviamos un presupuesto sin compromiso en 48 horas. Reunión por videollamada o presencial en Bilbao.</p>
          <form className="cta-form" action="/contacto" method="get">
            <input type="email" name="email" placeholder="tu@empresa.com" required />
            <button type="submit">Solicitar diagnóstico →</button>
          </form>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: 'rgba(255,255,255,.35)', marginTop: '16px' }}>hello@avson.eu · Toda España, presencial y remoto</p>
          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: 'rgba(255,255,255,.35)', marginTop: '8px' }}>
            Ver también: <Link to="/consultoria-ens-espana" style={{ color: 'var(--gold)' }}>Consultoría ENS España</Link> · <Link to="/ens" style={{ color: 'var(--gold)' }}>Servicio ENS completo</Link> · <Link to="/ens-express" style={{ color: 'var(--gold)' }}>ENS Express</Link>
          </p>
        </div>
      </section>
    </>
  )
}
