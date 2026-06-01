import { useState, useRef, FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function UnetePage() {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const nombreRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  const posicionRef = useRef<HTMLSelectElement>(null)
  const enlaceRef = useRef<HTMLInputElement>(null)
  const mensajeRef = useRef<HTMLTextAreaElement>(null)

  const handleApply = (e: FormEvent) => {
    e.preventDefault()
    const email = emailRef.current?.value || ''
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Introduce un email válido.')
      return
    }
    const data: Record<string, string> = {
      nombre: nombreRef.current?.value || '',
      email,
      posicion: posicionRef.current?.value || '',
      enlace: enlaceRef.current?.value || '',
      mensaje: mensajeRef.current?.value || '',
      source: 'careers',
      page: window.location.pathname,
      ts: new Date().toISOString()
    }
    if ((window as any).avsonTrack) {
      (window as any).avsonTrack('career_application', { posicion: data.posicion })
    }
    const ep = (window as any).AVSON_CONFIG && (window as any).AVSON_CONFIG.LEAD_ENDPOINT
    if (ep) {
      fetch(ep, {
        method: (window as any).AVSON_CONFIG.ENDPOINT_METHOD,
        headers: (window as any).AVSON_CONFIG.ENDPOINT_HEADERS,
        body: JSON.stringify(data)
      }).catch((err: Error) => {
        console.error('[Avson] Error candidatura:', err)
      })
    } else {
      console.info('[Avson] Candidatura (modo validación · sin endpoint):', data)
    }
    setFormSubmitted(true)
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .grow-kpis { display:flex; gap:40px; flex-wrap:wrap; margin-top:30px; }
        .grow-kpi strong { font-family:'Cormorant Garamond',serif; font-size:46px; font-weight:300; color:var(--navy); line-height:1; display:block; }
        .grow-kpi span { font-family:'Inter',sans-serif; font-size:11px; color:var(--text-muted); letter-spacing:.07em; text-transform:uppercase; }
        .why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; margin-top:44px; }
        @media(max-width:860px){ .why-grid{ grid-template-columns:1fr; } }
        .why-card { background:#fff; border:1px solid #E8E4DD; border-radius:14px; padding:30px 26px; }
        .why-card h3 { font-family:'Cormorant Garamond',serif; font-size:22px; font-weight:500; color:var(--navy); margin:0 0 10px; }
        .why-card p { font-family:'Inter',sans-serif; font-size:14px; line-height:1.6; color:var(--text-body); margin:0; }
        .why-card .ic { font-size:22px; color:#C9A84C; margin-bottom:10px; display:block; }
        .jobs { display:flex; flex-direction:column; gap:14px; margin-top:40px; }
        .job { display:flex; align-items:center; justify-content:space-between; gap:20px; flex-wrap:wrap;
          background:#fff; border:1px solid #E8E4DD; border-left:3px solid #C9A84C; border-radius:12px; padding:24px 28px;
          transition:box-shadow .18s, transform .18s; }
        .job:hover { box-shadow:0 16px 38px rgba(26,39,68,0.10); transform:translateY(-2px); }
        .job__t { font-family:'Cormorant Garamond',serif; font-size:23px; font-weight:500; color:var(--navy); margin:0 0 4px; }
        .job__meta { font-family:'Inter',sans-serif; font-size:12.5px; color:var(--text-muted); }
        .job__meta b { color:#B68F2E; font-weight:600; }
        .perks { display:grid; grid-template-columns:repeat(2,1fr); gap:14px 32px; margin-top:36px; max-width:760px; }
        @media(max-width:700px){ .perks{ grid-template-columns:1fr; } }
        .perk { display:flex; gap:12px; align-items:flex-start; font-family:'Inter',sans-serif; font-size:15px; color:var(--text-body); line-height:1.5; }
        .perk span { color:#C9A84C; font-weight:700; flex-shrink:0; }
        .apply-input { width:100%; padding:13px 16px; border:1.5px solid #E5E5E0; border-radius:8px; font-family:'Inter',sans-serif; font-size:15px; color:#1A2744; outline:none; background:#fff; }
        .apply-input:focus { border-color:var(--navy); }
      `}} />

      {/* Top bar */}
      <div style={{ background: '#1A2744', color: 'rgba(255,255,255,0.85)', fontFamily: "'Inter',sans-serif", fontSize: '12px', fontWeight: 400, letterSpacing: '0.04em', textAlign: 'center', padding: '10px 40px', position: 'relative', zIndex: 200 }}>
        &#128640; <strong>Estamos creciendo</strong> &nbsp;&middot;&nbsp; Buscamos a los mejores perfiles en GRC &nbsp;&middot;&nbsp; <a href="#posiciones" style={{ color: '#C9A84C', textDecoration: 'none', fontWeight: 500 }}>Ver posiciones &rarr;</a>
      </div>

      {/* HERO */}
      <section className="section section--pearl" style={{ paddingTop: '150px', paddingBottom: '72px' }}>
        <div className="container">
          <span className="label-tag">Trabaja con nosotros</span>
          <div className="gold-line"></div>
          <h1 className="display-title" style={{ maxWidth: '760px' }}>Estamos creciendo.<br /><em>Crece con nosotros.</em></h1>
          <p className="body-large mt-24" style={{ maxWidth: '580px', color: 'var(--text-body)' }}>Buscamos consultores y consultoras de GRC que quieran hacer las cosas bien: especialización real, proyectos con impacto y un equipo del que aprender. Si te apasiona el cumplimiento de verdad — no el papeleo —, hablemos.</p>
          <div className="grow-kpis">
            <div className="grow-kpi"><strong>15</strong><span>personas en el equipo</span></div>
            <div className="grow-kpi"><strong>355+</strong><span>proyectos gestionados</span></div>
            <div className="grow-kpi"><strong>5</strong><span>posiciones abiertas</span></div>
          </div>
          <div style={{ marginTop: '34px' }}>
            <a href="#posiciones" className="v3-btn v3-btn--gold v3-btn--lg v3-btn--pulse">Ver posiciones abiertas &rarr;</a>
          </div>
        </div>
      </section>

      {/* POR QUE AVSON */}
      <section className="section section--white">
        <div className="container">
          <span className="label-tag">Por qué Avson</span>
          <div className="gold-line"></div>
          <h2 className="section-title" style={{ maxWidth: '560px' }}>Un sitio donde se hace<br /><em>GRC de verdad.</em></h2>
          <div className="why-grid">
            <div className="why-card">
              <span className="ic">&#10022;</span>
              <h3>Especialización real</h3>
              <p>Aquí solo se hace GRC: ENS, ISO 27001, ISO 22301, DORA y NIS2. No aprenderás "de paso" mientras haces otra cosa. Te conviertes en experto de verdad.</p>
            </div>
            <div className="why-card">
              <span className="ic">&#10022;</span>
              <h3>Tu proyecto, de principio a fin</h3>
              <p>Un consultor lleva la relación completa con el cliente: del diagnóstico a la auditoría. Nada de cadenas de subcontratas ni "eso lo lleva otro".</p>
            </div>
            <div className="why-card">
              <span className="ic">&#10022;</span>
              <h3>Impacto que se nota</h3>
              <p>Tu trabajo hace que una empresa gane el concurso público al que no podía presentarse. Resultados reales, no carpetas que nadie abre.</p>
            </div>
            <div className="why-card">
              <span className="ic">&#10022;</span>
              <h3>Formación y certificaciones</h3>
              <p>Te pagamos las certificaciones oficiales (ISO 27001 Lead Auditor, CISM, CISA, CRISC...). Tu crecimiento es parte del plan, no un extra.</p>
            </div>
            <div className="why-card">
              <span className="ic">&#10022;</span>
              <h3>Plan de carrera claro</h3>
              <p>De analista a consultor senior a responsable de área. Sabes hacia dónde puedes crecer y qué necesitas para llegar.</p>
            </div>
            <div className="why-card">
              <span className="ic">&#10022;</span>
              <h3>Equipo senior</h3>
              <p>Trabajas codo con codo con gente que conoce a fondo MAGERIT, el CCN-STIC y cómo piensan los auditores. Se aprende todos los días.</p>
            </div>
          </div>
        </div>
      </section>

      {/* POSICIONES */}
      <section className="section section--pearl" id="posiciones">
        <div className="container">
          <span className="label-tag">Posiciones abiertas</span>
          <div className="gold-line"></div>
          <h2 className="section-title" style={{ maxWidth: '560px' }}>Estas son las plazas<br /><em>que buscamos cubrir.</em></h2>

          <div className="jobs">
            <div className="job">
              <div>
                <p className="job__t">Consultor/a GRC Senior</p>
                <p className="job__meta"><b>Madrid &middot; Híbrido</b> &nbsp;&middot;&nbsp; ENS &middot; ISO 27001 &middot; 3+ años de experiencia</p>
              </div>
              <a href="#candidatura" className="v3-btn v3-btn--gold v3-btn--sm">Aplicar &rarr;</a>
            </div>
            <div className="job">
              <div>
                <p className="job__t">Consultor/a ENS</p>
                <p className="job__meta"><b>Madrid &middot; Remoto</b> &nbsp;&middot;&nbsp; Esquema Nacional de Seguridad &middot; sector público</p>
              </div>
              <a href="#candidatura" className="v3-btn v3-btn--gold v3-btn--sm">Aplicar &rarr;</a>
            </div>
            <div className="job">
              <div>
                <p className="job__t">Consultor/a de Continuidad (ISO 22301)</p>
                <p className="job__meta"><b>Remoto</b> &nbsp;&middot;&nbsp; SGCN &middot; BIA &middot; planes de continuidad</p>
              </div>
              <a href="#candidatura" className="v3-btn v3-btn--gold v3-btn--sm">Aplicar &rarr;</a>
            </div>
            <div className="job">
              <div>
                <p className="job__t">Analista GRC Junior</p>
                <p className="job__meta"><b>Madrid &middot; Híbrido</b> &nbsp;&middot;&nbsp; Primer empleo &middot; te formamos desde dentro</p>
              </div>
              <a href="#candidatura" className="v3-btn v3-btn--gold v3-btn--sm">Aplicar &rarr;</a>
            </div>
            <div className="job">
              <div>
                <p className="job__t">Business Development</p>
                <p className="job__meta"><b>Madrid &middot; Remoto</b> &nbsp;&middot;&nbsp; Desarrollo de negocio &middot; sector público y privado</p>
              </div>
              <a href="#candidatura" className="v3-btn v3-btn--gold v3-btn--sm">Aplicar &rarr;</a>
            </div>
          </div>

          <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '14px', color: 'var(--text-muted)', marginTop: '28px' }}>¿No ves tu perfil pero crees que encajas? Envíanos una <a href="#candidatura" style={{ color: 'var(--navy)', fontWeight: 600 }}>candidatura espontánea &rarr;</a></p>
        </div>
      </section>

      {/* QUE OFRECEMOS */}
      <section className="section section--white">
        <div className="container">
          <span className="label-tag">Lo que ofrecemos</span>
          <div className="gold-line"></div>
          <h2 className="section-title" style={{ maxWidth: '560px' }}>Más que un trabajo.<br /><em>Un sitio para crecer.</em></h2>
          <div className="perks">
            <div className="perk"><span>&#10003;</span> Certificaciones oficiales pagadas por la empresa</div>
            <div className="perk"><span>&#10003;</span> Proyectos reales de principio a fin, no tareas sueltas</div>
            <div className="perk"><span>&#10003;</span> Trabajo híbrido y opciones de remoto</div>
            <div className="perk"><span>&#10003;</span> Plan de carrera definido y revisión periódica</div>
            <div className="perk"><span>&#10003;</span> Salario competitivo según experiencia</div>
            <div className="perk"><span>&#10003;</span> Equipo senior del que aprender cada día</div>
          </div>
        </div>
      </section>

      {/* CANDIDATURA */}
      <section className="section section--pearl" id="candidatura">
        <div className="container" style={{ maxWidth: '680px' }}>
          <span className="label-tag">Tu candidatura</span>
          <div className="gold-line"></div>
          <h2 className="section-title">Cuéntanos quién eres.</h2>
          <p className="body-large mt-16" style={{ color: 'var(--text-body)' }}>Déjanos tus datos y un enlace a tu LinkedIn o CV. Revisamos cada candidatura y te respondemos.</p>

          <div style={{ background: '#fff', border: '1px solid #E5E5E0', borderRadius: '14px', padding: '30px', marginTop: '28px', boxShadow: '0 12px 36px rgba(26,39,68,0.08)' }}>
            {!formSubmitted ? (
              <form ref={formRef} onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '13px' }}>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <input className="apply-input" style={{ flex: 1, minWidth: '180px' }} type="text" ref={nombreRef} name="nombre" placeholder="Tu nombre y apellidos *" required />
                  <input className="apply-input" style={{ flex: 1, minWidth: '180px' }} type="email" ref={emailRef} name="email" placeholder="Tu email *" required />
                </div>
                <select className="apply-input" ref={posicionRef} name="posicion" required defaultValue="">
                  <option value="" disabled>¿A qué posición aplicas? *</option>
                  <option>Consultor/a GRC Senior</option>
                  <option>Consultor/a ENS</option>
                  <option>Consultor/a de Continuidad (ISO 22301)</option>
                  <option>Analista GRC Junior</option>
                  <option>Business Development</option>
                  <option>Candidatura espontánea</option>
                </select>
                <input className="apply-input" type="url" ref={enlaceRef} name="enlace" placeholder="Enlace a tu LinkedIn o CV (https://...)" />
                <textarea className="apply-input" ref={mensajeRef} name="mensaje" rows={4} placeholder="Cuéntanos brevemente por qué quieres unirte (opcional)"></textarea>
                <div style={{ display: 'flex', gap: '9px', alignItems: 'flex-start' }}>
                  <input type="checkbox" required style={{ width: '15px', height: '15px', flexShrink: 0, marginTop: '3px', accentColor: '#1A2744' }} />
                  <label style={{ fontFamily: "'Inter',sans-serif", fontSize: '12px', color: '#7A8499', lineHeight: 1.4 }}>Acepto que Avson trate mis datos para gestionar mi candidatura. <Link to="/privacidad" target="_blank" style={{ color: '#1A2744' }}>Política de privacidad</Link></label>
                </div>
                <button type="submit" className="v3-btn v3-btn--gold v3-btn--full v3-btn--xl v3-btn--pulse">Enviar candidatura &rarr;</button>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '11px', color: '#B0B8C4', textAlign: 'center', margin: 0 }}>&#128274; Confidencial &middot; Solo lo usamos para tu proceso de selección</p>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '18px 6px' }}>
                <div style={{ fontSize: '40px', color: '#C9A84C' }}>&#10022;</div>
                <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '26px', color: 'var(--navy)', margin: '8px 0 6px' }}>¡Gracias! Hemos recibido tu candidatura.</p>
                <p style={{ fontFamily: "'Inter',sans-serif", fontSize: '14px', color: 'var(--text-muted)', margin: 0 }}>La revisamos con calma y te escribimos pronto a tu email. Si quieres adjuntar el CV, puedes enviarlo a <a href="mailto:hello@avson.eu" style={{ color: 'var(--navy)', fontWeight: 600 }}>hello@avson.eu</a>.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
