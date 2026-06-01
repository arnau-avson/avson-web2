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
  .process-card { background:var(--white); border:1px solid var(--border); padding:28px; position:relative; }
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

export default function EnsMadridPage() {
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
            <li className="current">ENS en Madrid</li>
          </ol>
          <div className="hero__badges">
            <span className="hero__badge">Cobertura Nacional</span>
            <span className="hero__badge">Equipo Local Madrid</span>
          </div>
          <h1 className="hero__h1">Certificado ENS en Madrid —<br /><em>Consultoría Nacional con Presencia Local</em></h1>
          <p className="hero__sub">Avson GRC tiene su oficina principal en Madrid (Calle Martínez Izquierdo 90) y equipo local para reuniones presenciales. Pero somos una consultoría nacional: trabajamos con empresas de toda España con los mismos resultados garantizados.</p>
          <form className="hero__form" action="/contacto" method="get">
            <input type="email" name="email" placeholder="tu@empresa.com" required />
            <button type="submit">Diagnóstico gratuito →</button>
          </form>
          <p className="hero__note">Sin compromiso · Respuesta en 48h · Presencial en Madrid o en remoto</p>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="gold-line"></div>
          <p className="section__label">Cobertura nacional — No solo Madrid</p>
          <h2 className="section__h2">Somos una consultora de Madrid que trabaja en toda España</h2>
          <div className="national-msg">
            <p>Avson GRC es una consultoría nacional con presencia en toda España. Trabajamos de forma presencial en cualquier ciudad y en remoto con la misma metodología y los mismos resultados.</p>
          </div>
          <p className="section__body">Nuestra base está en Madrid, pero nuestros clientes están en toda España. Hemos certificado empresas en Barcelona, Valencia, Sevilla, Bilbao, Zaragoza, Málaga y más de 40 ciudades españolas. Si tu empresa está fuera de Madrid, no te preocupes: nuestro equipo se desplaza o trabajamos en remoto con exactamente la misma metodología.</p>
          <p className="section__body">Esta página explica el contexto específico de Madrid — los sectores predominantes, los organismos que exigen ENS y el ecosistema local. Pero si tu empresa está en otra ciudad, puedes ver <Link to="/consultoria-ens-espana" style={{ color: 'var(--gold)', fontWeight: 500 }}>nuestra cobertura nacional completa</Link> o contactarnos directamente.</p>
        </div>
      </section>

      <section className="section section--pearl">
        <div className="container">
          <div className="gold-line"></div>
          <p className="section__label">Contexto local</p>
          <h2 className="section__h2">ENS en Madrid: el epicentro de la contratación pública TIC</h2>
          <p className="section__lead">Madrid concentra la mayor densidad de organismos públicos de España, lo que convierte a la capital en el mercado más relevante para empresas que necesitan el certificado ENS.</p>
          <p className="section__body">La Administración General del Estado tiene en Madrid la sede de todos sus ministerios, agencias y organismos autónomos. Esto convierte a la Comunidad de Madrid en el mayor mercado de contratación pública TIC del país. Las empresas tecnológicas con sede en Madrid que licitan con el Ayuntamiento de Madrid, la Comunidad de Madrid o con cualquier Ministerio de la AGE necesitan el certificado ENS como requisito de solvencia técnica.</p>
          <p className="section__body">Desde 2022, con la entrada en vigor del Real Decreto 311/2022, este requisito es eliminatorio: sin ENS no se entra siquiera en la valoración de la oferta. Los sectores con mayor demanda de ENS en Madrid son la administración central (AGE y sus organismos), el sector tecnológico y SaaS para AAPP, defensa y aeroespacial, el sector financiero regulado, y las empresas de ciberseguridad y consultoría TI.</p>
          <p className="section__body">El ecosistema ENAC en Madrid concentra a las principales entidades de certificación acreditadas para auditar ENS, lo que facilita la coordinación para la auditoría final. El CCN (Centro Criptológico Nacional), con sede en Madrid, es el organismo regulador del ENS y el referente técnico de referencia para cualquier duda sobre interpretación de controles.</p>
          <p className="section__body">Avson GRC, con oficina en Madrid y experiencia directa en los requisitos de los principales organismos madrileños, es el socio ideal para guiar a tu empresa a través del proceso de certificación ENS con la mayor eficiencia y garantías del mercado.</p>
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
              <p className="process-card__text">Analizamos tu situación actual: nivel ENS requerido, sistemas en alcance, controles existentes y brechas a cubrir. Te entregamos un informe de diagnóstico con el plan de acción personalizado en 48h.</p>
            </FadeIn>
            <FadeIn>
              <div className="process-card__num">02</div>
              <div className="process-card__title">Implementación</div>
              <p className="process-card__text">Nuestro equipo desarrolla toda la documentación del SGSI, implementa los controles técnicos y forma a tu equipo. Usamos nuestra plataforma colaborativa para gestionar el proyecto con total transparencia.</p>
            </FadeIn>
            <FadeIn>
              <div className="process-card__num">03</div>
              <div className="process-card__title">Auditoría</div>
              <p className="process-card__text">Coordinamos con la entidad certificadora acreditada por ENAC la auditoría ENS. Te preparamos con una preauditoría interna para garantizar el éxito. Nuestra tasa de éxito en primera auditoría es del 98%.</p>
            </FadeIn>
            <FadeIn>
              <div className="process-card__num">04</div>
              <div className="process-card__title">Certificado</div>
              <p className="process-card__text">Obtienes el certificado ENS y quedas inscrito en el Registro Nacional de Entidades de Certificación. El certificado tiene validez de 2 años. Avson te acompaña en el mantenimiento continuo.</p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section--pearl">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="gold-line"></div>
          <p className="section__label">Inversión</p>
          <h2 className="section__h2">¿Cuánto cuesta el ENS en Madrid?</h2>
          <FadeIn className="anim-fade-up price-box">
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '15px', color: '#3a4557', lineHeight: 1.75, marginBottom: '16px' }}>El coste de la consultoría ENS en Madrid no difiere del coste nacional: trabajamos con las mismas tarifas en toda España. El rango orientativo es:</p>
            <ul style={{ listStyle: 'none', fontFamily: "'Inter',sans-serif", fontSize: '15px', color: '#3a4557', lineHeight: 1.75 }}>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}><span style={{ color: 'var(--gold)', fontWeight: 600 }}>→</span> ENS Básico: desde 4.000 € (incluye documentación + acompañamiento en auditoría)</li>
              <li style={{ display: 'flex', gap: '12px', marginBottom: '10px' }}><span style={{ color: 'var(--gold)', fontWeight: 600 }}>→</span> ENS Medio: desde 9.000 € (implementación completa + certificadora ENAC)</li>
              <li style={{ display: 'flex', gap: '12px' }}><span style={{ color: 'var(--gold)', fontWeight: 600 }}>→</span> ENS Alto: desde 18.000 € (alcance complejo, auditoría más exigente)</li>
            </ul>
            <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '13px', color: '#999', marginTop: '16px' }}>Todos los presupuestos incluyen nuestra garantía de éxito por escrito. Consulta el <Link to="/precio" style={{ color: 'var(--gold)' }}>detalle de precios</Link> o pide tu diagnóstico gratuito para una propuesta personalizada.</p>
          </FadeIn>
        </div>
      </section>

      <section className="section section--white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '48px' }}>
            <div className="gold-line gold-line--center"></div>
            <p className="section__label">Preguntas frecuentes</p>
            <h2 className="section__h2">ENS en Madrid — Preguntas frecuentes</h2>
          </div>
          <div className="faq-list">
            <FadeIn className="anim-fade-up faq-item">
              <button className="faq-item__q" onClick={(e) => e.currentTarget.closest('.faq-item').classList.toggle('open')}>
                ¿Tienen oficina en Madrid?
                <span className="faq-item__icon">+</span>
              </button>
              <div className="faq-item__a">
                <p>Sí. La oficina principal de Avson GRC está en Calle Martínez Izquierdo 90, 28028 Madrid. Podemos celebrar reuniones presenciales en nuestra oficina o desplazarnos a las instalaciones del cliente en Madrid y la Comunidad de Madrid. También atendemos a empresas en toda España en remoto con los mismos resultados garantizados.</p>
              </div>
            </FadeIn>
            <FadeIn className="anim-fade-up faq-item">
              <button className="faq-item__q" onClick={(e) => e.currentTarget.closest('.faq-item').classList.toggle('open')}>
                ¿Cuánto tarda la certificación ENS en Madrid?
                <span className="faq-item__icon">+</span>
              </button>
              <div className="faq-item__a">
                <p>Entre 3 y 4 meses para la mayoría de empresas de tamaño medio. Para ENS básico urgente, ofrecemos <Link to="/ens-express" style={{ color: 'var(--gold)' }}>ENS Express en 30 días</Link>. El diagnóstico gratuito incluye una estimación personalizada para tu caso concreto.</p>
              </div>
            </FadeIn>
            <FadeIn className="anim-fade-up faq-item">
              <button className="faq-item__q" onClick={(e) => e.currentTarget.closest('.faq-item').classList.toggle('open')}>
                ¿Qué organismos de Madrid exigen el ENS a sus proveedores?
                <span className="faq-item__icon">+</span>
              </button>
              <div className="faq-item__a">
                <p>Los principales organismos públicos de Madrid que exigen ENS son: la Administración General del Estado (todos los ministerios y sus organismos autónomos), la Comunidad de Madrid, el Ayuntamiento de Madrid, el CNSC, el INTA, el SEPE, la TGSS y prácticamente cualquier entidad pública con sede en Madrid que contrate servicios TIC.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section section--navy">
        <div className="container" style={{ textAlign: 'center', maxWidth: '700px' }}>
          <div className="gold-line gold-line--center"></div>
          <h2 className="section__h2 section__h2--white">¿Tu empresa en Madrid necesita el ENS?</h2>
          <p className="section__lead section__lead--white" style={{ margin: '0 auto 36px' }}>Escríbenos tu email y te enviamos un diagnóstico gratuito en 48 horas. Sin compromiso. Puedes elegir reunión presencial en nuestra oficina de Madrid o videollamada.</p>
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
