import { useState, useRef, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function EnsPpcPage() {
  const navigate = useNavigate()
  const [necesidad, setNecesidad] = useState('')
  const [activeBtn, setActiveBtn] = useState<string | null>(null)
  const nombreRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const rgpdRef = useRef<HTMLInputElement>(null)

  const pickQ = (val: string) => {
    setNecesidad(val)
    setActiveBtn(val)
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const nombre = nombreRef.current?.value || ''
    const email = emailRef.current?.value || ''
    if (!nombre || !email || !rgpdRef.current?.checked) return
    const d = { nombre, email, necesidad, source: 'ppc_ens' }
    if ((window as any).dataLayer) (window as any).dataLayer.push({ event: 'ppc_lead', ...d })
    navigate(`/gracias?nombre=${encodeURIComponent(d.nombre)}&source=ppc_ens`)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --navy:#1A2744; --gold:#C9A84C; --gold-h:#D9B84D;
          --pearl:#F7F7F5; --white:#FFFFFF; --border:#E5E5E0; --muted:#7A8499;
        }
        html { font-size:16px; -webkit-font-smoothing:antialiased; }
        body { font-family:'Inter',system-ui,sans-serif; background:var(--pearl); }

        /* Top bar */
        .top-bar {
          background:var(--navy); text-align:center;
          font-family:'Inter',sans-serif; font-size:13px; font-weight:500;
          color:rgba(255,255,255,0.9); padding:10px 20px;
        }
        .top-bar strong { color:var(--gold); }

        /* Header */
        .ppc-header {
          background:var(--white); border-bottom:1px solid var(--border);
          padding:16px 40px;
          display:flex; align-items:center; justify-content:space-between;
        }
        .ppc-logo {
          font-family:'Inter',sans-serif; font-size:15px; font-weight:700;
          letter-spacing:0.12em; text-transform:uppercase; color:var(--navy);
          text-decoration:none;
        }
        .ppc-logo span { color:var(--gold); }
        .ppc-contact {
          font-family:'Inter',sans-serif; font-size:14px; font-weight:600;
          color:var(--navy); text-decoration:none;
        }
        .ppc-contact:hover { color:var(--gold); }

        /* Hero */
        .ppc-hero {
          display:grid; grid-template-columns:1fr 1fr;
          max-width:1100px; margin:0 auto;
          gap:60px; padding:60px 40px;
          align-items:start;
        }

        .fomo { background:#FEF2F2; border:1px solid #FCA5A5; border-radius:8px;
          padding:8px 16px; font-size:12px; font-weight:700; color:#991B1B;
          display:inline-block; margin-bottom:20px;
        }

        .ppc-hero h1 {
          font-family:'Cormorant Garamond',serif;
          font-size:clamp(40px,4.5vw,64px); font-weight:400;
          color:var(--navy); line-height:1.1; margin-bottom:18px;
        }
        .ppc-hero h1 em { font-style:italic; }

        .hero-sub {
          font-size:17px; font-weight:400; color:#4a4a4a;
          line-height:1.65; margin-bottom:24px; max-width:480px;
        }
        .hero-sub strong { color:var(--navy); }

        .trust-row {
          display:flex; gap:20px; flex-wrap:wrap;
          font-size:13px; color:var(--muted);
        }
        .trust-row span::before { content:'\\2713  '; color:var(--gold); font-weight:700; }

        /* Stats */
        .ppc-stats {
          display:flex; gap:32px; margin-top:32px; padding-top:24px;
          border-top:1px solid var(--border);
        }
        .ppc-stat { text-align:center; }
        .ppc-stat strong {
          display:block; font-family:'Cormorant Garamond',serif;
          font-size:36px; font-weight:500; color:var(--navy); line-height:1;
        }
        .ppc-stat span { font-size:12px; color:var(--muted); }

        /* Form card */
        .form-card {
          background:var(--white); border-radius:16px;
          border:1px solid var(--border); padding:36px 32px;
          box-shadow:0 12px 40px rgba(26,39,68,0.12);
          position:sticky; top:20px;
        }
        .live-badge {
          display:inline-flex; align-items:center; gap:6px;
          background:#ECFDF5; color:#065F46; font-size:11px; font-weight:700;
          padding:5px 11px; border-radius:20px; margin-bottom:14px;
        }
        .form-title {
          font-family:'Cormorant Garamond',serif; font-size:26px;
          font-weight:400; color:var(--navy); margin-bottom:4px;
        }
        .form-sub { font-size:13px; color:var(--muted); margin-bottom:22px; }

        .qual-label { font-size:10px; font-weight:700; letter-spacing:0.1em;
          text-transform:uppercase; color:var(--muted); margin-bottom:8px; }
        .qual-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-bottom:16px; }
        .qual-btn {
          font-family:'Inter',sans-serif; font-size:12px; font-weight:600;
          padding:9px 6px; border:1.5px solid var(--border);
          background:var(--pearl); color:var(--navy); border-radius:6px;
          cursor:pointer; transition:all 0.15s;
        }
        .qual-btn:hover { border-color:var(--navy); }
        .qual-btn--urgent { border-color:#FCA5A5; background:#FEF2F2; color:#991B1B; }
        .qual-btn--active { background:var(--navy); border-color:var(--navy); color:var(--white); }

        .form-group { margin-bottom:10px; }
        .form-group input {
          width:100%; padding:13px 16px; border:1.5px solid var(--border);
          border-radius:8px; font-family:'Inter',sans-serif; font-size:15px;
          color:var(--navy); background:var(--white); outline:none;
          transition:border-color 0.15s;
        }
        .form-group input:focus { border-color:var(--navy); }
        .form-group input::placeholder { color:#B0B8C4; }

        .rgpd {
          display:flex; align-items:flex-start; gap:9px; font-size:11px;
          color:var(--muted); line-height:1.5; margin:12px 0 16px;
        }
        .rgpd input { width:15px; height:15px; flex-shrink:0; margin-top:1px;
          accent-color:var(--navy); cursor:pointer; }
        .rgpd a { color:var(--navy); }

        .btn-cta {
          width:100%; background:var(--gold); color:var(--navy);
          border:none; padding:17px; border-radius:10px;
          font-family:'Inter',sans-serif; font-size:16px; font-weight:700;
          cursor:pointer; transition:background 0.15s, transform 0.1s;
          animation:pulse 2.5s infinite;
        }
        .btn-cta:hover { background:var(--gold-h); transform:translateY(-1px); }
        @keyframes pulse {
          0%,100% { box-shadow:0 6px 20px rgba(201,168,76,0.45),0 0 0 0 rgba(201,168,76,0.25); }
          50%      { box-shadow:0 6px 20px rgba(201,168,76,0.45),0 0 0 8px rgba(201,168,76,0); }
        }
        .lock-text { font-size:11px; color:var(--muted); text-align:center; margin-top:10px; }
        .alt-contact {
          display:flex; align-items:center; justify-content:center; gap:8px;
          margin-top:16px; padding-top:16px; border-top:1px solid var(--border);
          font-size:13px; color:var(--muted);
        }
        .alt-contact a { font-weight:700; color:var(--navy); text-decoration:none; }
        .alt-contact a:hover { color:var(--gold); }

        /* Testimonials strip */
        .testi-strip {
          background:var(--white); border-top:1px solid var(--border);
          border-bottom:1px solid var(--border); padding:40px;
          display:grid; grid-template-columns:repeat(3,1fr); gap:32px;
          max-width:1100px; margin:0 auto;
        }
        .testi-stars { color:var(--gold); font-size:14px; letter-spacing:2px; margin-bottom:10px; }
        .testi-quote {
          font-family:'Cormorant Garamond',serif; font-size:16px;
          font-weight:300; font-style:italic; color:#333; line-height:1.6;
          margin-bottom:12px;
        }
        .testi-author { font-size:12px; color:var(--muted); font-weight:600; }
        .testi-result { font-size:11px; color:var(--gold); margin-top:4px; }

        /* Footer minimal */
        .ppc-footer {
          text-align:center; padding:24px; font-size:12px; color:var(--muted);
          border-top:1px solid var(--border);
        }
        .ppc-footer a { color:var(--muted); text-decoration:none; margin:0 8px; }
        .ppc-footer a:hover { color:var(--navy); }

        @media (max-width:768px) {
          .ppc-hero { grid-template-columns:1fr; padding:32px 20px; gap:32px; }
          .ppc-header { padding:14px 20px; }
          .testi-strip { grid-template-columns:1fr; padding:32px 20px; }
          .ppc-stats { gap:20px; }
          .form-card { position:static; }
        }
      `}} />

      <div className="top-bar">
        ⚠ <strong>El 85% de empresas sin ENS pierde sus licitaciones.</strong> Avson GRC — Certificado ENS con garantía de éxito por escrito.
      </div>

      <header className="ppc-header">
        <Link to="/" className="ppc-logo">AVSON<span> · </span>GRC</Link>
        <a href="mailto:hello@avson.eu" className="ppc-contact">hello@avson.eu</a>
      </header>

      <div className="ppc-hero">
        {/* Left: copy */}
        <div>
          <div className="fomo">⚠ Sin ENS tu oferta no se abre. Sin excepciones.</div>
          <h1>Certificado ENS.<br /><em>Con garantía de éxito<br />por escrito.</em></h1>
          <p className="hero-sub">
            Si no obtienes el certificado ENS, <strong>te devolvemos el dinero</strong>. Lo firmamos en el contrato. Los únicos del mercado que lo garantizan.
          </p>
          <div className="trust-row">
            <span>355+ empresas certificadas</span>
            <span>100% de éxito</span>
            <span>15 consultores especializados</span>
          </div>
          <div className="ppc-stats">
            <div className="ppc-stat"><strong>355+</strong><span>certificaciones</span></div>
            <div className="ppc-stat"><strong>100%</strong><span>tasa de éxito</span></div>
            <div className="ppc-stat"><strong>30 días</strong><span>con Express</span></div>
          </div>
        </div>

        {/* Right: form */}
        <div className="form-card">
          <span className="live-badge">🟢 Te llamamos hoy mismo</span>
          <p className="form-title">Habla con un experto</p>
          <p className="form-sub">Gratuito · Sin compromiso · 30 minutos</p>

          <p className="qual-label">¿Qué necesitas?</p>
          <div className="qual-grid">
            <button
              type="button"
              className={`qual-btn qual-btn--urgent${activeBtn === 'ENS Express urgente' ? ' qual-btn--active' : ''}`}
              onClick={() => pickQ('ENS Express urgente')}
            >
              ⚡ ENS urgente
            </button>
            <button
              type="button"
              className={`qual-btn${activeBtn === 'ENS estándar' ? ' qual-btn--active' : ''}`}
              onClick={() => pickQ('ENS estándar')}
            >
              ENS estándar
            </button>
            <button
              type="button"
              className={`qual-btn${activeBtn === 'ISO 27001' ? ' qual-btn--active' : ''}`}
              onClick={() => pickQ('ISO 27001')}
            >
              ISO 27001
            </button>
            <button
              type="button"
              className={`qual-btn${activeBtn === 'No lo sé aún' ? ' qual-btn--active' : ''}`}
              onClick={() => pickQ('No lo sé aún')}
            >
              No lo sé aún
            </button>
          </div>
          <input type="hidden" value={necesidad} />

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <input type="text" ref={nombreRef} name="nombre" placeholder="Tu nombre *" autoComplete="given-name" required />
            </div>
            <div className="form-group">
              <input type="email" ref={emailRef} name="email" placeholder="Tu email *" autoComplete="email" required />
            </div>
            <div className="rgpd">
              <input type="checkbox" ref={rgpdRef} id="pRgpd" required />
              <label htmlFor="pRgpd">
                Al enviar, acepto que Avson me contacte para responder mi consulta. <Link to="/privacidad" target="_blank">Política de privacidad</Link>
              </label>
            </div>
            <button type="submit" className="btn-cta">Habla con un experto →</button>
            <p className="lock-text">🔒 Gratuito · Sin compromiso · Confidencial</p>
          </form>

          <div className="alt-contact">
            <span>¿Prefieres escribirnos?</span>
            <a href="mailto:hello@avson.eu">hello@avson.eu</a>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="testi-strip">
        <div className="testi">
          <div className="testi-stars">★★★★★</div>
          <p className="testi-quote">
            "Llevábamos dos años perdiendo licitaciones. Avson nos lo resolvió en <strong>9 semanas</strong>. Al siguiente concurso, ganamos el contrato."
          </p>
          <p className="testi-author">Javier M. — Director de Sistemas · Integradora TIC, Madrid</p>
          <p className="testi-result">ENS Media certificado ✓</p>
        </div>
        <div className="testi">
          <div className="testi-stars">★★★★★</div>
          <p className="testi-quote">
            "Otros consultores decían un año. Avson lo hizo en <strong>14 semanas</strong> y superamos la auditoría ENAC a la primera."
          </p>
          <p className="testi-author">Silvia R. — CISO · Proveedor cloud sector público</p>
          <p className="testi-result">ENS Alta + ISO 27001 ✓</p>
        </div>
        <div className="testi">
          <div className="testi-stars">★★★★★</div>
          <p className="testi-quote">
            "La garantía por escrito fue lo que nos decidió. El proceso duró <strong>7 semanas</strong> sin una sola incidencia."
          </p>
          <p className="testi-author">Andrés D. — CEO · Consultora tecnológica</p>
          <p className="testi-result">ENS Básica certificado ✓</p>
        </div>
      </div>

      <footer className="ppc-footer">
        © 2026 Avson Consultoría Estratégica SLU · CIF B10560795 ·
        <Link to="/privacidad">Privacidad</Link> ·
        <Link to="/cookies">Cookies</Link>
      </footer>
    </>
  )
}