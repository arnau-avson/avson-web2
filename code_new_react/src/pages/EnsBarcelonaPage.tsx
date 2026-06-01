import { Link } from 'react-router-dom'
import FadeIn from '../components/FadeIn'

const pageStyles = `
  .hero { background:var(--navy); padding:100px 0 80px; }
  .container { max-width:1320px; margin:0 auto; padding:0 40px; }
  .container--narrow { max-width:900px; }
  .breadcrumb { display:flex; gap:8px; list-style:none; font-size:12px; color:rgba(255,255,255,.5); font-family:'Inter',sans-serif; margin-bottom:32px; }
  .breadcrumb a { color:rgba(255,255,255,.5); text-decoration:none; }
  .breadcrumb .sep { color:rgba(255,255,255,.3); }
  .breadcrumb .current { color:var(--gold); }
  .hero__badges { display:flex; gap:12px; flex-wrap:wrap; margin-bottom:20px; }
  .hero__badge { background:rgba(201,168,76,.15); border:1px solid rgba(201,168,76,.4); color:var(--gold); font-family:'Inter',sans-serif; font-size:11px; font-weight:600; letter-spacing:.08em; text-transform:uppercase; padding:5px 14px; }
  .hero__h1 { font-family:'Cormorant Garamond',serif; font-size:clamp(32px,4.5vw,58px); font-weight:600; color:#fff; line-height:1.08; margin-bottom:24px; }
  .hero__h1 em { font-style:italic; font-weight:300; }
  .hero__sub { font-family:'Inter',sans-serif; font-size:16px; color:rgba(255,255,255,.75); line-height:1.7; max-width:680px; margin-bottom:40px; }
  .hero__form { display:flex; gap:12px; flex-wrap:wrap; max-width:520px; }
  .hero__form input[type=email] { flex:1; min-width:220px; padding:14px 18px; font-family:'Inter',sans-serif; font-size:14px; border:1px solid rgba(255,255,255,.2); background:rgba(255,255,255,.08); color:#fff; outline:none; }
  .hero__form input::placeholder { color:rgba(255,255,255,.4); }
  .hero__form input:focus { border-color:var(--gold); }
  .hero__form button { padding:14px 28px; background:var(--gold); color:var(--white); font-family:'Inter',sans-serif; font-size:13px; font-weight:600; letter-spacing:.06em; text-transform:uppercase; cursor:pointer; border:none; transition:background .2s; }
  .hero__form button:hover { background:#a8883a; }
  .hero__note { margin-top:12px; font-size:12px; color:rgba(255,255,255,.45); font-family:'Inter',sans-serif; }
  .section { padding:88px 0; }
  .section--white { background:var(--white); }
  .section--pearl { background:var(--pearl); }
  .section--navy { background:var(--navy); }
  .section__label { font-family:'Inter',sans-serif; font-size:11px; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:var(--gold); margin-bottom:14px; }
  .section__h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(26px,3.2vw,42px); font-weight:600; color:var(--navy); line-height:1.1; margin-bottom:20px; }
  .section__h2--white { color:#fff; }
  .section__lead { font-family:'Inter',sans-serif; font-size:16px; color:#5a6478; line-height:1.7; max-width:680px; margin-bottom:40px; }
  .section__lead--white { color:rgba(255,255,255,.75); }
  .section__body { font-family:'Inter',sans-serif; font-size:15px; color:#5a6478; line-height:1.75; margin-bottom:20px; }
  .gold-line { width:40px; height:3px; background:var(--gold); margin-bottom:20px; }
  .gold-line--center { margin:0 auto 20px; }
  .text-center { text-align:center; }
  .national-msg { background:var(--navy); border-left:4px solid var(--gold); padding:28px 36px; margin:40px 0; }
  .national-msg p { font-family:'Inter',sans-serif; font-size:15px; font-weight:500; color:rgba(255,255,255,.9); line-height:1.7; }
  .process-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:24px; margin-top:48px; }
  .process-card { background:var(--white); border:1px solid var(--border); padding:28px; }
  .process-card__num { font-family:'Cormorant Garamond',serif; font-size:2.4rem; font-weight:300; color:var(--gold); opacity:.5; line-height:1; margin-bottom:12px; }
  .process-card__title { font-family:'Cormorant Garamond',serif; font-size:1.1rem; font-weight:600; color:var(--navy); margin-bottom:10px; }
  .process-card__text { font-family:'Inter',sans-serif; font-size:13px; color:#5a6478; line-height:1.65; }
  .faq-list { max-width:800px; margin:0 auto; }
  .faq-item { border-bottom:1px solid var(--border); }
  .faq-item__q { display:flex; justify-content:space-between; align-items:center; gap:20px; padding:22px 0; cursor:pointer; font-family:'Inter',sans-serif; font-size:15px; font-weight:500; color:var(--navy); background:none; border:none; width:100%; text-align:left; }
  .faq-item__q:hover { color:var(--gold); }
  .faq-item__icon { font-size:22px; font-weight:300; color:var(--gold); flex-shrink:0; transition:transform .3s; }
  .faq-item.open .faq-item__icon { transform:rotate(45deg); }
  .faq-item__a { display:none; padding:0 0 22px; font-family:'Inter',sans-serif; font-size:14px; color:#5a6478; line-height:1.75; }
  .faq-item.open .faq-item__a { display:block; }
  .cta-form { display:flex; gap:12px; flex-wrap:wrap; justify-content:center; max-width:520px; margin:0 auto; }
  .cta-form input[type=email] { flex:1; min-width:220px; padding:14px 18px; font-family:'Inter',sans-serif; font-size:14px; border:1px solid rgba(255,255,255,.2); background:rgba(255,255,255,.1); color:#fff; outline:none; }
  .cta-form input::placeholder { color:rgba(255,255,255,.4); }
  .cta-form button { padding:14px 28px; background:var(--gold); color:var(--white); font-family:'Inter',sans-serif; font-size:13px; font-weight:600; letter-spacing:.06em; text-transform:uppercase; cursor:pointer; border:none; }
  .cta-form button:hover { background:#a8883a; }
  .price-box { background:var(--pearl); border:1px solid var(--border); border-left:4px solid var(--gold); padding:32px; }
  @media(max-width:900px) { .process-grid { grid-template-columns:repeat(2,1fr); } }
  @media(max-width:640px) { .container { padding:0 20px; } .section { padding:64px 0; } .hero { padding:80px 0 60px; } .process-grid { grid-template-columns:1fr; } }
`

export default function EnsBarcelonaPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: pageStyles }} />

      <section className="hero">
        <div className="container container--narrow">
          <ol className="breadcrumb">
            <li><Link to="/">Inicio</Link></li>
            <li className="sep">/</li>
            <li><Link to="/ens">ENS</Link></li>
            <li className="sep">/</li>
            <li className="current">ENS en Barcelona</li>
          </ol>
          <div className="hero__badges">
            <span className="hero__badge">Cobertura Nacional</span>
            <span className="hero__badge">Equipo en Cataluña</span>
          </div>
          <h1 className="hero__h1">Certificado ENS en Barcelona —<br /><em>Consultoría con Equipo en Cataluña</em></h1>
          <p className="hero__sub">Avson GRC trabaja de forma presencial en Barcelona y toda Cataluña, y en remoto con la misma metodología y los mismos resultados garantizados para cualquier empresa de España.</p>
          <form className="hero__form" action="/contacto" method="get">
            <input type="email" name="email" placeholder="tu@empresa.com" required />
            <button type="submit">Diagnóstico gratuito →</button>
          </form>
          <p className="hero__note">Sin compromiso · Respuesta en 48h · Presencial en Barcelona o en remoto</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="gold-line"></div>
          <p className="section__label">Cobertura nacional — No solo Barcelona</p>
          <h2 className="section__h2">Somos una consultora nacional con presencia en Cataluña</h2>
          <div className="national-msg">
            <p>Avson GRC es una consultoría nacional con presencia en toda España. Trabajamos de forma presencial en cualquier ciudad y en remoto con la misma metodología y los mismos resultados.</p>
          </div>
          <p className="section__body">Aunque nuestra oficina principal está en Madrid, disponemos de consultores que se desplazan regularmente a Barcelona y toda Cataluña para reuniones, talleres y auditorías presenciales. La mayor parte del proyecto ENS se gestiona en remoto a través de nuestra plataforma colaborativa, lo que nos permite mantener los mismos estándares de calidad en todo el territorio español.</p>
          <p className="section__body">Esta página está orientada a empresas de Barcelona y Cataluña que buscan certificación ENS. Si tu empresa está en otra ciudad, puedes consultar nuestra <Link to="/consultoria-ens-espana" style={{ color: 'var(--gold)', fontWeight: 500 }}>cobertura nacional completa</Link>.</p>
        </div>
      </section>

      <section className="section section--pearl">
        <div className="container">
          <div className="gold-line"></div>
          <p className="section__label">Contexto local</p>
          <h2 className="section__h2">ENS en Barcelona: el hub tecnológico que lidera la demanda</h2>
          <p className="section__lead">Barcelona concentra el ecosistema tecnológico más dinámico de España, con una alta concentración de startups, scaleups y empresas TIC que necesitan el ENS para acceder a contratos públicos.</p>
          <p className="section__body">El ecosistema tecnológico catalán es el más activo de España en número de startups y scaleups tecnológicas. Muchas de estas empresas, a medida que escalan y comienzan a contratar con administraciones públicas catalanas, necesitan el certificado ENS como requisito previo a cualquier licitación pública digital.</p>
          <p className="section__body">La Generalitat de Catalunya, el Ayuntamiento de Barcelona, el Consorci de l'Administració Oberta de Catalunya (AOC) y todos los organismos públicos dependientes exigen ENS a sus proveedores TIC. El RD 311/2022 es de aplicación en toda España, incluida Cataluña, y la Generalitat lo ha reforzado con sus propias instrucciones técnicas de seguridad.</p>
          <p className="section__body">Además, el creciente sector de las administraciones locales catalanas —municipios, diputaciones y consorcios— está incorporando progresivamente el ENS a sus pliegos de contratación. Para las empresas tecnológicas catalanas, la certificación ENS se está convirtiendo en un requisito indispensable para operar en el mercado público regional.</p>
          <p className="section__body">El sector tecnológico catalán destaca también por su vocación internacional, lo que hace especialmente relevante combinar el ENS con certificaciones como ISO 27001, que abre puertas en el mercado privado y europeo. Avson GRC ofrece ambas certificaciones y puede gestionar el proceso conjunto de forma eficiente.</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="gold-line"></div>
          <p className="section__label">Proceso de certificación</p>
          <h2 className="section__h2">De cero al certificado ENS en 4 pasos</h2>
          <div className="process-grid">
            <FadeIn>
              <div className="process-card__num">01</div>
              <div className="process-card__title">Diagnóstico</div>
              <p className="process-card__text">Analizamos tu situación: nivel ENS requerido, sistemas en alcance y brechas a cubrir. Entregamos informe con plan de acción personalizado en 48h.</p>
            </FadeIn>
            <FadeIn>
              <div className="process-card__num">02</div>
              <div className="process-card__title">Implementación</div>
              <p className="process-card__text">Desarrollamos toda la documentación del SGSI, implementamos los controles técnicos y formamos a tu equipo. Gestión vía plataforma colaborativa.</p>
            </FadeIn>
            <FadeIn>
              <div className="process-card__num">03</div>
              <div className="process-card__title">Auditoría</div>
              <p className="process-card__text">Coordinamos con la entidad certificadora acreditada por ENAC. Pre-auditoría interna para garantizar el éxito. Tasa de éxito del 98% en primera auditoría.</p>
            </FadeIn>
            <FadeIn>
              <div className="process-card__num">04</div>
              <div className="process-card__title">Certificado</div>
              <p className="process-card__text">Obtienes el certificado ENS e inscripción en el Registro Nacional. Avson te acompaña en el mantenimiento continuo durante los 2 años de vigencia.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section--pearl">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="gold-line"></div>
          <p className="section__label">Inversión</p>
          <h2 className="section__h2">¿Cuánto cuesta el ENS en Barcelona?</h2>
          <FadeIn className="anim-fade-up price-box">
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '15px', color: '#3a4557', lineHeight: 1.75, marginBottom: '16px' }}>El coste de la consultoría ENS en Barcelona es el mismo que en cualquier otra ciudad española. Trabajamos con tarifas nacionales uniformes:</p>
            <ul style={{ listStyle: 'none', fontFamily: "'Inter',sans-serif", fontSize: '15px', color: '#3a4557', lineHeight: 1.75 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}><span style={{ color: 'var(--gold)', fontWeight: 600 }}>→</span> ENS Básico: desde 4.000 €</li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}><span style={{ color: 'var(--gold)', fontWeight: 600 }}>→</span> ENS Medio: desde 9.000 €</li>
              <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--gold)', fontWeight: 600 }}>→</span> ENS Alto: desde 18.000 €</li>
            </ul>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '13px', color: '#999', marginTop: '16px' }}>Todos los presupuestos incluyen nuestra garantía de éxito por escrito. Consulta el <Link to="/precio" style={{ color: 'var(--gold)' }}>detalle de precios</Link> o solicita el diagnóstico gratuito.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <div className="gold-line gold-line--center"></div>
            <p className="section__label">Preguntas frecuentes</p>
            <h2 className="section__h2">ENS en Barcelona — Preguntas frecuentes</h2>
          </div>
          <div className="faq-list">
            <FadeIn className="anim-fade-up faq-item">
              <button className="faq-item__q" onClick={(e) => e.currentTarget.closest('.faq-item').classList.toggle('open')}>
                ¿Tienen oficina en Barcelona?
                <span className="faq-item__icon">+</span>
              </button>
              <div className="faq-item__a">
                <p>Avson GRC no tiene oficina física permanente en Barcelona, pero trabaja de forma presencial en Barcelona y toda Cataluña desplazando a su equipo consultor cuando el proyecto lo requiere. La mayor parte del proceso ENS se gestiona en remoto con plena eficacia, y coordinamos visitas presenciales para las fases clave como el diagnóstico inicial o la preparación de la auditoría.</p>
              </div>
            </FadeIn>
            <FadeIn className="anim-fade-up faq-item">
              <button className="faq-item__q" onClick={(e) => e.currentTarget.closest('.faq-item').classList.toggle('open')}>
                ¿Cuánto cuesta la consultoría ENS en Barcelona?
                <span className="faq-item__icon">+</span>
              </button>
              <div className="faq-item__a">
                <p>El coste es el mismo que en cualquier otra ciudad española: desde 4.000 € para ENS básico hasta más de 18.000 € para ENS alto. No aplicamos recargos por desplazamiento para proyectos en Cataluña. El <Link to="/contacto" style={{ color: 'var(--gold)' }}>diagnóstico gratuito</Link> incluye propuesta personalizada sin compromiso.</p>
              </div>
            </FadeIn>
            <FadeIn className="anim-fade-up faq-item">
              <button className="faq-item__q" onClick={(e) => e.currentTarget.closest('.faq-item').classList.toggle('open')}>
                ¿El ENS es obligatorio para las empresas que trabajan con la Generalitat de Catalunya?
                <span className="faq-item__icon">+</span>
              </button>
              <div className="faq-item__a">
                <p>Sí. La Generalitat de Catalunya, el Ayuntamiento de Barcelona y todos los organismos públicos dependientes exigen el certificado ENS a sus proveedores TIC. El RD 311/2022 es de aplicación en toda España, incluida Cataluña. Si tu empresa presta servicios digitales a cualquier entidad pública catalana, necesitas el certificado ENS.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <div className="gold-line gold-line--center"></div>
          <h2 className="section__h2 section__h2--white">¿Tu empresa en Barcelona necesita el ENS?</h2>
          <p className="section__lead section__lead--white" style={{ margin: '0 auto 36px' }}>Escríbenos tu email y te enviamos un diagnóstico gratuito en 48 horas. Reunión por videollamada o presencial en Barcelona.</p>
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
