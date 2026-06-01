import { useRef, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function EnsExpressPpcPage() {
  const navigate = useNavigate()
  const nombreRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const pliegoRef = useRef<HTMLInputElement>(null)
  const rgpdRef = useRef<HTMLInputElement>(null)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const nombre = nombreRef.current?.value || ''
    const email = emailRef.current?.value || ''
    const pliego = pliegoRef.current?.value || ''
    if (!nombre || !email || !rgpdRef.current?.checked) return
    const d = { nombre, email, pliego, source: 'ppc_ens_express' }
    if ((window as any).dataLayer) (window as any).dataLayer.push({ event: 'express_lead', ...d })
    navigate(`/gracias?nombre=${encodeURIComponent(d.nombre)}&source=express`)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        :root { --navy:#1A2744; --gold:#C9A84C; --red:#dc2626; --pearl:#F7F7F5; --white:#fff; --border:#E5E5E0; --muted:#7A8499; }
        html { font-size:16px; -webkit-font-smoothing:antialiased; }
        body { font-family:'Inter',system-ui,sans-serif; background:var(--navy); min-height:100vh; }

        /* Urgency bar */
        .urgency-bar {
          background:var(--red); text-align:center;
          font-family:'Inter',sans-serif; font-size:13px; font-weight:700;
          color:#fff; padding:10px 20px; letter-spacing:0.02em;
        }

        /* Header */
        .express-ppc-header {
          background:rgba(255,255,255,0.05); border-bottom:1px solid rgba(255,255,255,0.1);
          padding:16px 40px;
          display:flex; align-items:center; justify-content:space-between;
        }
        .express-ppc-logo { font-family:'Inter',sans-serif; font-size:15px; font-weight:700;
          letter-spacing:0.12em; text-transform:uppercase; color:#fff; text-decoration:none; }
        .express-ppc-logo span { color:var(--gold); }
        .header-contact { font-family:'Inter',sans-serif; font-size:14px; font-weight:600;
          color:var(--gold); text-decoration:none; }

        /* Hero */
        .express-ppc-hero {
          display:grid; grid-template-columns:1fr 1fr;
          max-width:1100px; margin:0 auto; gap:56px;
          padding:60px 40px; align-items:start;
        }

        .express-badge {
          display:inline-flex; align-items:center; gap:8px;
          background:rgba(220,38,38,0.2); border:1px solid rgba(220,38,38,0.5);
          color:#fca5a5; font-family:'Inter',sans-serif; font-size:12px; font-weight:700;
          padding:7px 16px; border-radius:20px; margin-bottom:24px;
          letter-spacing:0.04em; text-transform:uppercase;
        }

        .express-ppc-hero h1 {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(42px,5vw,68px); font-weight:400;
          color:#fff; line-height:1.05; margin-bottom:20px;
        }
        .express-ppc-hero h1 em { font-style:italic; color:var(--gold); }

        .hero-sub { font-size:17px; color:rgba(255,255,255,0.7); line-height:1.65; margin-bottom:28px; }
        .hero-sub strong { color:#fff; }

        /* How it works */
        .how { display:flex; gap:0; margin-bottom:36px; }
        .how-step {
          flex:1; background:rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.1); border-right:none;
          padding:16px 14px; text-align:center;
        }
        .how-step:last-child { border-right:1px solid rgba(255,255,255,0.1); }
        .how-step__num { font-family:'Cormorant Garamond',serif; font-size:28px;
          font-weight:300; color:var(--gold); }
        .how-step__text { font-family:'Inter',sans-serif; font-size:11px;
          color:rgba(255,255,255,0.6); margin-top:6px; line-height:1.4; }

        /* Form card */
        .form-card {
          background:var(--white); border-radius:16px;
          padding:36px 32px; box-shadow:0 20px 60px rgba(0,0,0,0.3);
          position:sticky; top:20px;
        }
        .live-badge {
          display:inline-flex; align-items:center; gap:6px;
          background:#ECFDF5; color:#065F46; font-size:11px; font-weight:700;
          padding:5px 11px; border-radius:20px; margin-bottom:14px;
        }
        .form-title { font-family:'Cormorant Garamond',serif; font-size:26px;
          font-weight:400; color:var(--navy); margin-bottom:4px; }
        .form-sub { font-size:13px; color:var(--muted); margin-bottom:8px; }
        .form-urgency { font-family:'Inter',sans-serif; font-size:12px; font-weight:700;
          color:var(--red); margin-bottom:20px; }

        .form-group { margin-bottom:10px; }
        .form-group input {
          width:100%; padding:13px 16px; border:1.5px solid var(--border); border-radius:8px;
          font-family:'Inter',sans-serif; font-size:15px; color:var(--navy);
          background:var(--white); outline:none; transition:border-color 0.15s;
        }
        .form-group input:focus { border-color:var(--navy); }
        .form-group input::placeholder { color:#B0B8C4; }

        .rgpd { display:flex; align-items:flex-start; gap:9px; font-size:11px;
          color:var(--muted); line-height:1.5; margin:12px 0 16px; }
        .rgpd input { width:15px; height:15px; flex-shrink:0; margin-top:1px;
          accent-color:var(--navy); cursor:pointer; }
        .rgpd a { color:var(--navy); }

        .btn-cta {
          width:100%; background:var(--red); color:#fff; border:none; padding:17px;
          border-radius:10px; font-family:'Inter',sans-serif; font-size:16px; font-weight:700;
          cursor:pointer; transition:background 0.15s, transform 0.1s;
          animation:pulse-red 2.2s infinite;
        }
        .btn-cta:hover { background:#b91c1c; transform:translateY(-1px); }
        @keyframes pulse-red {
          0%,100% { box-shadow:0 6px 20px rgba(220,38,38,0.45),0 0 0 0 rgba(220,38,38,0.25); }
          50%      { box-shadow:0 6px 20px rgba(220,38,38,0.45),0 0 0 8px rgba(220,38,38,0); }
        }

        .lock-text { font-size:11px; color:var(--muted); text-align:center; margin-top:10px; }
        .alt-contact { display:flex; align-items:center; justify-content:center; gap:8px;
          margin-top:16px; padding-top:16px; border-top:1px solid var(--border);
          font-size:13px; color:var(--muted); }
        .alt-contact a { font-weight:700; color:var(--navy); text-decoration:none; }

        /* Trust strip */
        .trust-strip {
          background:rgba(255,255,255,0.05); border-top:1px solid rgba(255,255,255,0.08);
          padding:28px 40px; display:flex; align-items:center;
          justify-content:center; gap:48px; flex-wrap:wrap;
        }
        .trust-item { text-align:center; }
        .trust-item strong { display:block; font-family:'Cormorant Garamond',serif;
          font-size:36px; font-weight:500; color:var(--gold); line-height:1; }
        .trust-item span { font-family:'Inter',sans-serif; font-size:12px; color:rgba(255,255,255,0.5); }

        /* Testimonials */
        .express-testi-card {
          background:#fff; border-radius:12px; padding:24px;
        }
        .express-testi-stars { color:var(--gold); font-size:14px; letter-spacing:2px; margin-bottom:10px; }
        .express-testi-text { font-family:'Inter',sans-serif; font-size:14px; color:var(--navy); line-height:1.6; margin:0 0 14px; }
        .express-testi-author { font-family:'Inter',sans-serif; font-size:12px; color:var(--muted); font-weight:600; margin:0; }
        .express-testi-result { font-family:'Inter',sans-serif; font-size:11px; color:var(--gold); margin:4px 0 0; }

        /* Footer */
        .ppc-footer { text-align:center; padding:20px; font-size:12px;
          color:rgba(255,255,255,0.3); border-top:1px solid rgba(255,255,255,0.08); }
        .ppc-footer a { color:rgba(255,255,255,0.3); text-decoration:none; margin:0 8px; }

        @media (max-width:768px) {
          .express-ppc-hero { grid-template-columns:1fr; padding:32px 20px; gap:32px; }
          .express-ppc-header { padding:14px 20px; }
          .trust-strip { gap:24px; padding:24px 20px; }
          .how { flex-direction:column; }
          .how-step { border-right:1px solid rgba(255,255,255,0.1); border-bottom:none; }
          .how-step:last-child { border-bottom:1px solid rgba(255,255,255,0.1); }
          .form-card { position:static; }
        }
      `}} />

      <div className="urgency-bar">&#9889; ENS Express — Para pliegos que cierran pronto. Arranque en 24 horas.</div>

      <header className="express-ppc-header">
        <Link to="/" className="express-ppc-logo">AVSON<span> &middot; </span>GRC</Link>
        <a href="mailto:hello@avson.eu" className="header-contact">hello@avson.eu</a>
      </header>

      <div className="express-ppc-hero">

        {/* Left */}
        <div>
          <div className="express-badge">&#9889; ENS Express — Plazos urgentes</div>
          <h1>Certificado ENS<br />cuando no puedes<br /><em>esperar.</em></h1>
          <p className="hero-sub">
            ¿Tu pliego cierra pronto? Equipo dedicado exclusivamente a tu proyecto. <strong>Arranque en 24 horas.</strong> Misma garantía de devolución que en nuestro servicio estándar.
          </p>

          <div className="how">
            <div className="how-step">
              <div className="how-step__num">48h</div>
              <p className="how-step__text">Arranque del proyecto</p>
            </div>
            <div className="how-step">
              <div className="how-step__num">1</div>
              <p className="how-step__text">Equipo dedicado exclusivo</p>
            </div>
            <div className="how-step">
              <div className="how-step__num">&#10003;</div>
              <p className="how-step__text">Misma garantía de devolución</p>
            </div>
          </div>

          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
            Disponible para: ENS Básica &middot; Media &middot; Alta según categoría del pliego
          </p>
        </div>

        {/* Right: form */}
        <div className="form-card">
          <span className="live-badge">&#x1F7E2; Verificamos disponibilidad hoy</span>
          <p className="form-title">Consultar disponibilidad</p>
          <p className="form-sub">Gratuito &middot; Sin compromiso</p>
          <p className="form-urgency">&#9889; Cuéntanos cuándo cierra tu pliego y te decimos si llegamos</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input type="text" ref={nombreRef} name="nombre" placeholder="Tu nombre *" autoComplete="given-name" required />
            </div>
            <div className="form-group">
              <input type="email" ref={emailRef} name="email" placeholder="Tu email *" autoComplete="email" required />
            </div>
            <div className="form-group">
              <input type="text" ref={pliegoRef} name="pliego" placeholder="¿Cuándo cierra el pliego? (ej: 15 julio)" autoComplete="off" />
            </div>
            <div className="rgpd">
              <input type="checkbox" ref={rgpdRef} id="eRgpd" required />
              <label htmlFor="eRgpd">Al enviar, acepto que Avson me contacte para responder mi consulta. <Link to="/privacidad" target="_blank">Política de privacidad</Link></label>
            </div>
            <button type="submit" className="btn-cta">&#9889; Verificar disponibilidad &rarr;</button>
            <p className="lock-text">&#128274; Sin presión &middot; Gratuito &middot; Te respondemos hoy</p>
          </form>

          <div className="alt-contact">
            <span>Urgente — escríbenos:</span>
            <a href="mailto:hello@avson.eu">hello@avson.eu</a>
          </div>
        </div>

      </div>

      <div className="trust-strip">
        <div className="trust-item"><strong>355+</strong><span>empresas certificadas</span></div>
        <div className="trust-item"><strong>100%</strong><span>tasa de éxito</span></div>
        <div className="trust-item"><strong>48h</strong><span>arranque garantizado</span></div>
        <div className="trust-item"><strong>30 días</strong><span>certificación Express</span></div>
      </div>

      {/* Testimonios */}
      <div style={{ maxWidth: '1080px', margin: '0 auto', padding: '8px 24px 56px' }}>
        <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '28px', fontWeight: 300, color: '#fff', textAlign: 'center', margin: '0 0 28px' }}>Pliegos salvados a contrarreloj.</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '20px' }}>
          <div className="express-testi-card">
            <div className="express-testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="express-testi-text">"El pliego cerraba en 5 semanas y no teníamos ENS. Pensábamos que era imposible. Avson arrancó en 48h y lo certificamos a tiempo. Presentamos la oferta y la ganamos."</p>
            <p className="express-testi-author">Javier M. — Director de Sistemas &middot; Integradora TIC</p>
            <p className="express-testi-result">ENS Express &#10003;</p>
          </div>
          <div className="express-testi-card">
            <div className="express-testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="express-testi-text">"Nos enteramos tarde de que la renovación exigía ENS. Express fue nuestra única opción. Tres consultores dedicados, 30 días, certificado en mano."</p>
            <p className="express-testi-author">Silvia R. — CISO &middot; Proveedor cloud sector público</p>
            <p className="express-testi-result">ENS Express &#10003;</p>
          </div>
          <div className="express-testi-card">
            <div className="express-testi-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <p className="express-testi-text">"Lo que nos decidió fue la garantía por escrito incluso en el formato urgente. Cumplieron el plazo sin una sola incidencia en la auditoría."</p>
            <p className="express-testi-author">Andrés D. — CEO &middot; Consultora tecnológica</p>
            <p className="express-testi-result">ENS Express &#10003;</p>
          </div>
        </div>
      </div>

      <footer className="ppc-footer">
        &copy; 2026 Avson Consultoría Estratégica SLU &middot; CIF B10560795 &middot;
        <Link to="/privacidad">Privacidad</Link> &middot;
        <Link to="/">Inicio</Link>
      </footer>
    </>
  )
}
