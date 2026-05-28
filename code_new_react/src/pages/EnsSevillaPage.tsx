import { Link } from 'react-router-dom'

export default function EnsSevillaPage() {
  return (
    <>
<section className="hero">
    <div className="container container--narrow">
      <ol className="breadcrumb">
        <li><Link to="/">Inicio</Link></li>
        <li className="sep">/</li>
        <li><Link to="/ens.html">ENS</Link></li>
        <li className="sep">/</li>
        <li className="current">ENS en Sevilla</li>
      </ol>
      <div className="hero__badges">
        <span className="hero__badge">Cobertura Nacional</span>
        <span className="hero__badge">Equipo en Andalucía</span>
      </div>
      <h1 className="hero__h1">Certificado ENS en Sevilla —<br /><em>Consultoría GRC en Andalucía y Sur de España</em></h1>
      <p className="hero__sub">Avson GRC trabaja de forma presencial en Sevilla y toda Andalucía, y en remoto con la misma metodología y los mismos resultados garantizados para cualquier empresa de España.</p>
      <form className="hero__form" action="/contacto.html" method="get">
        <input type="email" name="email" placeholder="tu@empresa.com" required />
        <button type="submit">Diagnóstico gratuito →</button>
      </form>
      <p className="hero__note">Sin compromiso · Respuesta en 48h · Presencial en Sevilla o en remoto</p>
    </div>
  </section>

  <section className="section section--white">
    <div className="container">
      <div className="gold-line"></div>
      <p className="section__label">Cobertura nacional — No solo Sevilla</p>
      <h2 className="section__h2">Consultoría nacional con presencia en Andalucía</h2>
      <div className="national-msg">
        <p>Avson GRC es una consultoría nacional con presencia en toda España. Trabajamos de forma presencial en cualquier ciudad y en remoto con la misma metodología y los mismos resultados.</p>
      </div>
      <p className="section__body">Nuestro equipo se desplaza a Sevilla, Málaga, Granada, Córdoba, Almería, Cádiz, Huelva y Jaén para reuniones presenciales y preparación de auditorías. Las fases de implementación se gestionan principalmente en remoto con las mismas tasas de éxito que los proyectos presenciales.</p>
      <p className="section__body">Si tu empresa está en cualquier otra ciudad andaluza o en el sur de España, Avson GRC puede atenderte con el mismo nivel de servicio. Consulta nuestra <Link to="/consultoria-ens-espana.html" style={{color:'var(--gold)',fontWeight:'500'}}>cobertura nacional completa</Link>.</p>
    </div>
  </section>

  <section className="section section--pearl">
    <div className="container">
      <div className="gold-line"></div>
      <p className="section__label">Contexto local</p>
      <h2 className="section__h2">ENS en Sevilla: Junta de Andalucía, aeroespacial y administración local</h2>
      <p className="section__lead">Sevilla es la capital administrativa de Andalucía, la comunidad autónoma más grande de España, y un polo creciente del sector aeroespacial y tecnológico.</p>
      <p className="section__body">La Junta de Andalucía, con sede en Sevilla, es una de las administraciones autonómicas con mayor inversión en digitalización de España. La Agencia Digital de Andalucía (ADA) coordina la transformación digital de todos los organismos de la Junta y exige el cumplimiento del ENS a los proveedores TIC que accedan a los sistemas de información de la administración andaluza.</p>
      <p className="section__body">Sevilla alberga el centro de operaciones de Airbus en España, uno de los mayores empleadores industriales de Andalucía. El ecosistema aeroespacial sevillano —con empresas de fabricación, mantenimiento y logística aeronáutica— está sujeto a requisitos estrictos de seguridad de la información. Muchas de estas empresas combinan el ENS (para sus contratos con la administración) con TISAX o ISO 27001 (para sus relaciones con el sector privado aeronáutico).</p>
      <p className="section__body">La administración local andaluza —con 770 municipios y 8 diputaciones provinciales— está en proceso acelerado de digitalización. Las empresas que proveen software de gestión municipal, sistemas de tramitación electrónica o soluciones de sede electrónica a estos organismos necesitan el certificado ENS para acceder a los contratos.</p>
      <p className="section__body">Sevilla ha apostado también por el turismo inteligente y los sistemas de ciudad inteligente, creando demanda de proveedores tecnológicos certificados. El Ayuntamiento de Sevilla y el Consorcio de Turismo de Sevilla son ejemplos de organismos locales que están incorporando el ENS a sus licitaciones TIC.</p>
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
          <p className="process-card__text">Analizamos tu situación en Sevilla: nivel ENS requerido, sistemas en alcance y brechas. Informe con plan de acción personalizado en 48h.</p>
        </div>
        <div className="process-card anim-fade-up">
          <div className="process-card__num">02</div>
          <div className="process-card__title">Implementación</div>
          <p className="process-card__text">Documentación SGSI completa, implementación de controles técnicos y formación de tu equipo. Gestión en remoto o presencial en Sevilla según tu preferencia.</p>
        </div>
        <div className="process-card anim-fade-up">
          <div className="process-card__num">03</div>
          <div className="process-card__title">Auditoría</div>
          <p className="process-card__text">Coordinamos con entidad certificadora acreditada ENAC. Pre-auditoría interna para garantizar el éxito. 98% de empresas aprueban en primera auditoría.</p>
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
    <div className="container" style={{maxWidth:'800px'}}>
      <div className="gold-line"></div>
      <p className="section__label">Inversión</p>
      <h2 className="section__h2">¿Cuánto cuesta el ENS en Sevilla?</h2>
      <div className="price-box anim-fade-up">
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'#3a4557',lineHeight:'1.75',marginBottom:'16px'}}>El coste de la consultoría ENS en Sevilla es el mismo que en cualquier otra ciudad española. Tarifas nacionales uniformes sin recargos:</p>
        <ul style={{listStyle:'none',fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'#3a4557',lineHeight:'1.75'}}>
          <li style={{display:'flex',gap:'12px',marginBottom:'10px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span> ENS Básico: desde 4.000 €</li>
          <li style={{display:'flex',gap:'12px',marginBottom:'10px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span> ENS Medio: desde 9.000 €</li>
          <li style={{display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span> ENS Alto: desde 18.000 €</li>
        </ul>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'#999',marginTop:'16px'}}>Incluyen garantía de éxito por escrito. Ver <Link to="/precio.html" style={{color:'var(--gold)'}}>detalle de precios</Link>.</p>
      </div>
    </div>
  </section>

  <section className="section section--white">
    <div className="container">
      <div className="text-center" style={{marginBottom:'48px'}}>
        <div className="gold-line gold-line--center"></div>
        <p className="section__label">Preguntas frecuentes</p>
        <h2 className="section__h2">ENS en Sevilla — Preguntas frecuentes</h2>
      </div>
      <div className="faq-list">
        <div className="faq-item anim-fade-up">
          <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
            ¿Tienen oficina en Sevilla?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__a">
            <p>Avson GRC trabaja de forma presencial en Sevilla y toda Andalucía desplazando a su equipo consultor cuando el proyecto lo requiere. La mayor parte del proceso ENS se gestiona eficazmente en remoto. No hay recargos por desplazamiento a Sevilla.</p>
          </div>
        </div>
        <div className="faq-item anim-fade-up">
          <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
            ¿El ENS aplica a proveedores de la Junta de Andalucía?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__a">
            <p>Sí. La Junta de Andalucía y todos sus organismos dependientes exigen ENS a sus proveedores TIC según el RD 311/2022. La Agencia Digital de Andalucía (ADA) ha publicado instrucciones técnicas específicas sobre la aplicación del ENS en el ámbito de la administración andaluza.</p>
          </div>
        </div>
        <div className="faq-item anim-fade-up">
          <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
            ¿Cuánto cuesta el ENS en Sevilla?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__a">
            <p>El coste es el mismo que en cualquier otra ciudad española: desde 4.000 € para ENS básico hasta más de 18.000 € para ENS alto. No aplicamos recargos por desplazamiento a Sevilla. El <Link to="/contacto.html" style={{color:'var(--gold)'}}>diagnóstico gratuito</Link> incluye propuesta personalizada sin compromiso.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section section--navy">
    <div className="container" style={{textAlign:'center',maxWidth:'700px'}}>
      <div className="gold-line gold-line--center"></div>
      <h2 className="section__h2 section__h2--white">¿Tu empresa en Sevilla necesita el ENS?</h2>
      <p className="section__lead section__lead--white" style={{margin:'0 auto 36px'}}>Escríbenos tu email y te enviamos un diagnóstico gratuito en 48 horas. Reunión por videollamada o presencial en Sevilla.</p>
      <form className="cta-form" action="/contacto.html" method="get">
        <input type="email" name="email" placeholder="tu@empresa.com" required />
        <button type="submit">Solicitar diagnóstico →</button>
      </form>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'rgba(255,255,255,.35)',marginTop:'16px'}}>+34 648 41 48 63 · info@avson.eu · Toda España, presencial y remoto</p>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'rgba(255,255,255,.35)',marginTop:'8px'}}>
        Ver también: <Link to="/consultoria-ens-espana.html" style={{color:'var(--gold)'}}>Consultoría ENS España</Link> · <Link to="/ens.html" style={{color:'var(--gold)'}}>Servicio ENS completo</Link> · <Link to="/ens-express.html" style={{color:'var(--gold)'}}>ENS Express</Link>
      </p>
    </div>
  </section>

    </>
  )
}
