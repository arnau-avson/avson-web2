import { Link } from 'react-router-dom'

export default function EnsValenciaPage() {
  return (
    <>
<section className="hero">
    <div className="container container--narrow">
      <ol className="breadcrumb">
        <li><Link to="/">Inicio</Link></li>
        <li className="sep">/</li>
        <li><Link to="/ens.html">ENS</Link></li>
        <li className="sep">/</li>
        <li className="current">ENS en Valencia</li>
      </ol>
      <div className="hero__badges">
        <span className="hero__badge">Cobertura Nacional</span>
        <span className="hero__badge">Equipo en Valencia</span>
      </div>
      <h1 className="hero__h1">Certificado ENS en Valencia —<br /><em>Certificación para Empresas de la Comunitat</em></h1>
      <p className="hero__sub">Avson GRC trabaja de forma presencial en Valencia y toda la Comunitat Valenciana, y en remoto con la misma metodología y los mismos resultados para cualquier empresa de España.</p>
      <form className="hero__form" action="/contacto.html" method="get">
        <input type="email" name="email" placeholder="tu@empresa.com" required />
        <button type="submit">Diagnóstico gratuito →</button>
      </form>
      <p className="hero__note">Sin compromiso · Respuesta en 48h · Presencial en Valencia o en remoto</p>
    </div>
  </section>

  <section className="section section--white">
    <div className="container">
      <div className="gold-line"></div>
      <p className="section__label">Cobertura nacional — No solo Valencia</p>
      <h2 className="section__h2">Consultoría nacional con presencia en la Comunitat Valenciana</h2>
      <div className="national-msg">
        <p>Avson GRC es una consultoría nacional con presencia en toda España. Trabajamos de forma presencial en cualquier ciudad y en remoto con la misma metodología y los mismos resultados.</p>
      </div>
      <p className="section__body">Nuestro equipo se desplaza regularmente a Valencia y a otros municipios de la Comunitat Valenciana para reuniones presenciales, talleres de concienciación y preparación de auditorías. Las fases de implementación y seguimiento se gestionan principalmente en remoto a través de nuestra plataforma colaborativa, con las mismas tasas de éxito.</p>
      <p className="section__body">Si tu empresa está en Castellón, Alicante o cualquier otro municipio de la Comunitat Valenciana, Avson GRC puede atenderte con el mismo nivel de servicio. Consulta también nuestra <Link to="/consultoria-ens-espana.html" style={{color:'var(--gold)',fontWeight:'500'}}>cobertura nacional completa</Link>.</p>
    </div>
  </section>

  <section className="section section--pearl">
    <div className="container">
      <div className="gold-line"></div>
      <p className="section__label">Contexto local</p>
      <h2 className="section__h2">ENS en Valencia: administración, puertos y sector industrial</h2>
      <p className="section__lead">Valencia es la tercera ciudad más grande de España y sede de una administración autonómica activa en digitalización, además de uno de los principales núcleos logísticos e industriales del país.</p>
      <p className="section__body">La Generalitat Valenciana, a través de la Direcció General de Tecnologies de la Informació i les Comunicacions (DGTIC), ha impulsado fuertemente la transformación digital de sus servicios y exige el cumplimiento del ENS a todos sus proveedores TIC. El Ayuntamiento de Valencia, con su programa Valencia Smart City, es otro de los grandes demandantes de servicios digitales seguros.</p>
      <p className="section__body">El Puerto de Valencia, el más activo de España en tráfico de contenedores, ha incorporado progresivamente sistemas digitales de gestión logística que requieren altos estándares de seguridad. Las empresas tecnológicas que proveen sistemas de gestión portuaria, aduanas digitales o trazabilidad de mercancías necesitan el ENS para operar en este entorno.</p>
      <p className="section__body">El sector industrial valenciano —manufactura, automoción, cerámica y agroalimentación— está en proceso de digitalización acelerada. Las empresas industriales que integran sistemas OT (tecnología operacional) con sistemas TIC y quieren operar con la Administración necesitan el ENS como estándar de referencia para la seguridad de sus sistemas informáticos.</p>
      <p className="section__body">Valencia alberga también un vibrante ecosistema de startups y empresas tecnológicas en crecimiento, muchas de las cuales buscan en el mercado público valenciano su primer contrato relevante. Para estas empresas, la certificación ENS es el primer paso indispensable para competir en igualdad de condiciones en los pliegos de contratación.</p>
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
          <p className="process-card__text">Analizamos tu situación: nivel ENS requerido, sistemas en alcance y brechas a cubrir. Informe con plan de acción personalizado en 48h.</p>
        </div>
        <div className="process-card anim-fade-up">
          <div className="process-card__num">02</div>
          <div className="process-card__title">Implementación</div>
          <p className="process-card__text">Desarrollamos toda la documentación SGSI, implementamos controles técnicos y formamos a tu equipo en Valencia y la Comunitat.</p>
        </div>
        <div className="process-card anim-fade-up">
          <div className="process-card__num">03</div>
          <div className="process-card__title">Auditoría</div>
          <p className="process-card__text">Coordinamos con entidad certificadora acreditada ENAC. Pre-auditoría interna para garantizar el éxito. 98% de éxito en primera auditoría.</p>
        </div>
        <div className="process-card anim-fade-up">
          <div className="process-card__num">04</div>
          <div className="process-card__title">Certificado</div>
          <p className="process-card__text">Obtienes el certificado ENS e inscripción en el Registro Nacional. Avson te acompaña en el mantenimiento continuo bienal.</p>
        </div>
      </div>
    </div>
  </section>

  <section className="section section--pearl">
    <div className="container" style={{maxWidth:'800px'}}>
      <div className="gold-line"></div>
      <p className="section__label">Inversión</p>
      <h2 className="section__h2">¿Cuánto cuesta el ENS en Valencia?</h2>
      <div className="price-box anim-fade-up">
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'#3a4557',lineHeight:'1.75',marginBottom:'16px'}}>El coste de la consultoría ENS en Valencia es el mismo que en cualquier otra ciudad española. No hay recargos por desplazamiento:</p>
        <ul style={{listStyle:'none',fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'#3a4557',lineHeight:'1.75'}}>
          <li style={{display:'flex',gap:'12px',marginBottom:'10px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span> ENS Básico: desde 4.000 €</li>
          <li style={{display:'flex',gap:'12px',marginBottom:'10px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span> ENS Medio: desde 9.000 €</li>
          <li style={{display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600'}}>→</span> ENS Alto: desde 18.000 €</li>
        </ul>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'#999',marginTop:'16px'}}>Todos incluyen nuestra garantía de éxito por escrito. Ver <Link to="/precio.html" style={{color:'var(--gold)'}}>detalle de precios</Link>.</p>
      </div>
    </div>
  </section>

  <section className="section section--white">
    <div className="container">
      <div className="text-center" style={{marginBottom:'48px'}}>
        <div className="gold-line gold-line--center"></div>
        <p className="section__label">Preguntas frecuentes</p>
        <h2 className="section__h2">ENS en Valencia — Preguntas frecuentes</h2>
      </div>
      <div className="faq-list">
        <div className="faq-item anim-fade-up">
          <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
            ¿Tienen oficina en Valencia?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__a">
            <p>Avson GRC trabaja de forma presencial en Valencia y la Comunitat Valenciana desplazando a su equipo consultor. La mayor parte del proceso ENS se gestiona eficazmente en remoto a través de nuestra plataforma colaborativa. Coordinamos visitas presenciales a Valencia para las fases clave como el diagnóstico inicial o la preparación de la auditoría.</p>
          </div>
        </div>
        <div className="faq-item anim-fade-up">
          <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
            ¿El ENS es obligatorio para proveedores de la Generalitat Valenciana?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__a">
            <p>Sí. La Generalitat Valenciana y todos los organismos públicos de la Comunitat Valenciana exigen ENS a sus proveedores TIC según el RD 311/2022. La DGTIC (Direcció General de Tecnologies de la Informació i les Comunicacions) de la Generalitat ha publicado instrucciones específicas de aplicación del ENS en el ámbito autonómico.</p>
          </div>
        </div>
        <div className="faq-item anim-fade-up">
          <button className="faq-item__q" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>
            ¿Cuánto cuesta el ENS en Valencia?
            <span className="faq-item__icon">+</span>
          </button>
          <div className="faq-item__a">
            <p>El coste es el mismo que en cualquier otra ciudad española: desde 4.000 € para ENS básico hasta más de 18.000 € para ENS alto, dependiendo de la complejidad. No aplicamos recargos por desplazamiento a Valencia. El <Link to="/contacto.html" style={{color:'var(--gold)'}}>diagnóstico gratuito</Link> incluye propuesta personalizada sin compromiso.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section className="section section--navy">
    <div className="container" style={{textAlign:'center',maxWidth:'700px'}}>
      <div className="gold-line gold-line--center"></div>
      <h2 className="section__h2 section__h2--white">¿Tu empresa en Valencia necesita el ENS?</h2>
      <p className="section__lead section__lead--white" style={{margin:'0 auto 36px'}}>Escríbenos tu email y te enviamos un diagnóstico gratuito en 48 horas. Reunión por videollamada o presencial en Valencia.</p>
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
