import { FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function PacksPage() {
  const handleQuoteSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.location.href = '/gracias'
  }

  return (
    <>
      {/* HERO */}
      <section className="section section--pearl" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(44px,6vw,76px)', fontWeight: 300, color: 'var(--navy)', lineHeight: 1.1, margin: '0 0 20px', maxWidth: '700px' }}>
            Mas certificados.<br /><em>Un solo proyecto.</em>
          </h1>
          <p className="body-large" style={{ maxWidth: '500px', marginBottom: '36px', color: 'var(--text-body)' }}>
            Elige tu pack. Te llamamos hoy. Empezamos.
          </p>
          <Link to="/contacto" className="v3-btn v3-btn--gold btn-impact-lg">Habla con un experto &rarr;</Link>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px' }}>
            Garantia de exito al 100% por escrito · Arranque en 24h · 355+ empresas certificadas
          </p>
        </div>
      </section>

      {/* PRESUPUESTO INMEDIATO */}
      <section className="section section--navy" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container" style={{ maxWidth: '920px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: '48px', alignItems: 'start' }} className="presupuesto-grid">
            <div>
              <span className="label-tag" style={{ color: 'var(--gold)' }}>Presupuesto inmediato</span>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(30px,4vw,44px)', fontWeight: 300, color: '#fff', lineHeight: 1.15, margin: '14px 0 16px' }}>
                Sabe tu presupuesto<br /><em>sin llamar a nadie.</em>
              </h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, marginBottom: '20px' }}>
                Valida tu <strong style={{ color: '#fff' }}>email de empresa</strong> y te calculamos una horquilla orientativa al instante. Sin compromiso y sin presion comercial.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                <li style={{ marginBottom: '8px' }}>Adaptado al tamano y alcance de tu empresa</li>
                <li style={{ marginBottom: '8px' }}>Descuento real al combinar varias normas</li>
                <li>Lo revisa un consultor antes de la oferta formal</li>
              </ul>
            </div>
            <div>
              <div style={{ background: '#fff', borderRadius: '12px', padding: '28px' }}>
                <form onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <input type="text" name="nombre" placeholder="Tu nombre *" required
                      style={{ flex: 1, minWidth: 0, padding: '12px 14px', border: '1.5px solid #E5E5E0', borderRadius: '8px', fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#1A2744', outline: 'none' }} />
                    <input type="email" name="email" placeholder="Email de empresa *" required
                      style={{ flex: 1.2, minWidth: 0, padding: '12px 14px', border: '1.5px solid #E5E5E0', borderRadius: '8px', fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#1A2744', outline: 'none' }} />
                  </div>

                  <div>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7A8499', margin: '2px 0 8px' }}>Que normas necesitas? *</p>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 14px', fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#1A2744' }}>
                      <label style={{ display: 'flex', gap: '7px', alignItems: 'center', cursor: 'pointer' }}><input type="checkbox" name="norma" value="ens" style={{ accentColor: '#1A2744' }} />ENS</label>
                      <label style={{ display: 'flex', gap: '7px', alignItems: 'center', cursor: 'pointer' }}><input type="checkbox" name="norma" value="iso27001" style={{ accentColor: '#1A2744' }} />ISO 27001</label>
                      <label style={{ display: 'flex', gap: '7px', alignItems: 'center', cursor: 'pointer' }}><input type="checkbox" name="norma" value="iso22301" style={{ accentColor: '#1A2744' }} />ISO 22301</label>
                      <label style={{ display: 'flex', gap: '7px', alignItems: 'center', cursor: 'pointer' }}><input type="checkbox" name="norma" value="dora" style={{ accentColor: '#1A2744' }} />DORA</label>
                      <label style={{ display: 'flex', gap: '7px', alignItems: 'center', cursor: 'pointer' }}><input type="checkbox" name="norma" value="iso9001" style={{ accentColor: '#1A2744' }} />ISO 9001</label>
                      <label style={{ display: 'flex', gap: '7px', alignItems: 'center', cursor: 'pointer' }}><input type="checkbox" name="norma" value="iso14001" style={{ accentColor: '#1A2744' }} />ISO 14001</label>
                      <label style={{ display: 'flex', gap: '7px', alignItems: 'center', cursor: 'pointer' }}><input type="checkbox" name="norma" value="iso42001" style={{ accentColor: '#1A2744' }} />ISO 42001</label>
                      <label style={{ display: 'flex', gap: '7px', alignItems: 'center', cursor: 'pointer' }}><input type="checkbox" name="norma" value="iso50001" style={{ accentColor: '#1A2744' }} />ISO 50001</label>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '10px' }}>
                    <select name="ubicaciones" required style={{ flex: 1, minWidth: 0, padding: '11px 12px', border: '1.5px solid #E5E5E0', borderRadius: '8px', fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#1A2744', background: '#fff' }} defaultValue="">
                      <option value="" disabled>Ubicaciones *</option>
                      <option value="1">1 ubicacion</option>
                      <option value="2">2 ubicaciones</option>
                      <option value="3">3 o mas</option>
                    </select>
                    <select name="ensCategoria" defaultValue="media" style={{ flex: 1, minWidth: 0, padding: '11px 12px', border: '1.5px solid #E5E5E0', borderRadius: '8px', fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#1A2744', background: '#fff' }}>
                      <option value="media">ENS Basica/Media</option>
                      <option value="alta">ENS Alta</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <select name="infra" defaultValue="cloud" style={{ flex: 1, minWidth: '120px', padding: '11px 12px', border: '1.5px solid #E5E5E0', borderRadius: '8px', fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#1A2744', background: '#fff' }}>
                      <option value="cloud">Infra en cloud</option>
                      <option value="onprem">Infra on-premise</option>
                    </select>
                    <label style={{ display: 'flex', gap: '7px', alignItems: 'center', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#1A2744', flex: 1, minWidth: '120px' }}>
                      <input type="checkbox" name="express" value="si" style={{ accentColor: '#C9A84C' }} /> Lo necesito en {'<'}60 dias
                    </label>
                  </div>

                  <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                    <input type="checkbox" required style={{ width: '15px', height: '15px', flexShrink: 0, marginTop: '3px', accentColor: '#1A2744' }} />
                    <label style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#7A8499', lineHeight: 1.4 }}>
                      Al enviar, acepto que Avson me contacte para preparar mi presupuesto. <Link to="/privacidad" target="_blank" style={{ color: '#1A2744' }}>Politica de privacidad</Link>
                    </label>
                  </div>
                  <button type="submit" className="v3-btn v3-btn--gold v3-btn--pulse" style={{ width: '100%', justifyContent: 'center', padding: '15px' }}>Calcular mi presupuesto &rarr;</button>
                  <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#B0B8C4', textAlign: 'center', margin: 0 }}>Solo emails de empresa · Confidencial</p>
                </form>
              </div>
              <div id="quoteResult" style={{ display: 'none', marginTop: '16px' }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* LOS 8 PACKS */}
      <section className="section section--pearl" id="packs">
        <div className="container">
          <span className="label-tag">El catalogo completo</span>
          <div className="gold-line"></div>
          <h2 className="section-title" style={{ maxWidth: '520px' }}>Elige el pack<br /><em>que necesitas.</em></h2>

          <div style={{ background: '#F7F7F5', border: '1px solid #E5E5E0', borderLeft: '3px solid #C9A84C', padding: '32px 36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap', marginBottom: '48px' }}>
            <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '22px', fontWeight: 400, color: '#1A2744', lineHeight: 1.3, flex: 1, minWidth: '200px' }}>"No se que pack necesito." -- Cuentanos tu situacion en 5 minutos y te lo decimos gratis.</span>
            <Link to="/contacto" className="v3-btn v3-btn--gold">Habla con un experto &rarr;</Link>
          </div>

          <div className="anim-fade-up" style={{ background: 'var(--navy)', padding: '40px 48px', marginBottom: '48px', maxWidth: '820px' }}>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px' }}>Coste orientativo -- por separado vs. con pack</p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: 'var(--font-sans)', fontSize: '14px' }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: 'left', padding: '12px 16px', color: 'rgba(255,255,255,0.5)', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Certificaciones</th>
                    <th style={{ textAlign: 'right', padding: '12px 16px', color: 'rgba(255,255,255,0.5)', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Por separado</th>
                    <th style={{ textAlign: 'right', padding: '12px 16px', color: 'var(--gold)', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Con Avson Pack</th>
                    <th style={{ textAlign: 'right', padding: '12px 16px', color: '#4ade80', fontWeight: 600, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>Ahorro estimado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td style={{ padding: '16px', color: 'rgba(255,255,255,0.9)' }}>ENS solo (Basico-Medio)</td>
                    <td style={{ padding: '16px', textAlign: 'right', color: 'rgba(255,255,255,0.6)' }}>Base</td>
                    <td style={{ padding: '16px', textAlign: 'right', color: 'var(--white)', fontWeight: 600 }}>ENS Starter</td>
                    <td style={{ padding: '16px', textAlign: 'right', color: 'rgba(255,255,255,0.4)' }}>&mdash;</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td style={{ padding: '16px', color: 'rgba(255,255,255,0.9)' }}>ENS + ISO 27001</td>
                    <td style={{ padding: '16px', textAlign: 'right', color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through' }}>~2,3x el ENS</td>
                    <td style={{ padding: '16px', textAlign: 'right', color: 'var(--gold)', fontWeight: 700 }}>~1,3x el ENS</td>
                    <td style={{ padding: '16px', textAlign: 'right', color: '#4ade80', fontWeight: 600 }}>~1x el ENS</td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                    <td style={{ padding: '16px', color: 'rgba(255,255,255,0.9)' }}>ENS + ISO 22301</td>
                    <td style={{ padding: '16px', textAlign: 'right', color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through' }}>~2,1x el ENS</td>
                    <td style={{ padding: '16px', textAlign: 'right', color: 'var(--gold)', fontWeight: 700 }}>~1,35x el ENS</td>
                    <td style={{ padding: '16px', textAlign: 'right', color: '#4ade80', fontWeight: 600 }}>~0,75x el ENS</td>
                  </tr>
                  <tr>
                    <td style={{ padding: '16px', color: 'rgba(255,255,255,0.9)' }}>Pack Triple (ENS+27001+22301)</td>
                    <td style={{ padding: '16px', textAlign: 'right', color: 'rgba(255,255,255,0.5)', textDecoration: 'line-through' }}>~3,4x el ENS</td>
                    <td style={{ padding: '16px', textAlign: 'right', color: 'var(--gold)', fontWeight: 700 }}>~1,8x el ENS</td>
                    <td style={{ padding: '16px', textAlign: 'right', color: '#4ade80', fontWeight: 600 }}>~1,6x el ENS</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '16px', marginBottom: 0 }}>* Ratios orientativos sobre el coste del ENS solo. El precio exacto depende del tamano, categoria y punto de partida. Pide presupuesto con propuesta en 48h.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '52px' }}>

            {/* ENS Express */}
            <div className="anim-fade-up" style={{ background: 'linear-gradient(135deg,#1A2744 0%,#2d3f6b 100%)', border: '2px solid var(--gold)', padding: '36px', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--gold)', color: 'var(--navy)', fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '6px 18px' }}>URGENTE</div>
              <div style={{ position: 'absolute', bottom: '-40px', right: '-20px', fontSize: '120px', opacity: 0.05, color: 'var(--white)', fontFamily: 'var(--font-serif)', pointerEvents: 'none' }}>30</div>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600, color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.06em', background: 'rgba(201,168,76,0.15)', padding: '4px 10px', width: 'fit-content', marginBottom: '16px' }}>30 dias naturales</span>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: 'var(--white)', marginBottom: '8px' }}><Link to="/ens-express" style={{ color: 'inherit', textDecoration: 'none' }}>ENS Express</Link></h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>Para empresas con contratos publicos urgentes</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '24px', flex: 1 }}>Tienes un pliego que cierra en menos de 8 semanas? ENS Express te garantiza el certificado ENS Basico o Medio en 30 dias naturales. Equipo de 3 consultores dedicados, arranque en 24 horas, reuniones diarias, y la misma garantia de exito por escrito que nuestro servicio estandar.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}><span style={{ color: 'var(--gold)' }}>&#10022;</span> 3 consultores dedicados exclusivamente a tu proyecto</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}><span style={{ color: 'var(--gold)' }}>&#10022;</span> Arranque garantizado en 24 horas</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}><span style={{ color: 'var(--gold)' }}>&#10022;</span> Garantia de exito por escrito · tambien en Express</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}><span style={{ color: 'var(--gold)' }}>&#10022;</span> Solo 6 plazas Express disponibles por mes</div>
              </div>
              <Link to="/ens-express" className="btn-primary btn-primary--white" style={{ textAlign: 'center', justifyContent: 'center' }}>Ver ENS Express &rarr;</Link>
            </div>

            {/* Pack 01 */}
            <div className="anim-fade-up" style={{ background: 'var(--white)', padding: '40px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pack 01</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', background: 'var(--pearl)', padding: '4px 10px' }}>3-4 meses</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: 'var(--navy)', marginBottom: '8px' }}><Link to="/ens" style={{ color: 'inherit', textDecoration: 'none' }}>ENS Starter</Link></h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>Esquema Nacional de Seguridad -- Basica o Media</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '24px', flex: 1 }}>La base de todo. Para empresas que quieren licitar a la Administracion Publica espanola por primera vez o que necesitan el ENS como requisito de un contrato publico vigente. Incluye analisis de riesgos, implementacion de controles ENS, documentacion completa y acompanamiento en la auditoria de certificacion con entidad acreditada por ENAC.</p>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>Para: proveedores TIC del sector publico</div>
              <Link to="/contacto" className="btn-text">Habla con un experto &rarr;</Link>
            </div>

            {/* Pack 02 */}
            <div className="anim-fade-up" style={{ background: 'var(--navy)', padding: '40px', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-1px', left: '50%', transform: 'translateX(-50%)', background: 'var(--gold)', color: 'var(--navy)', fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 16px', whiteSpace: 'nowrap' }}>El mas solicitado</div>
              <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--gold)', padding: '6px 16px', fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Mas solicitado</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px', marginTop: '24px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pack 02</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.06em', background: 'rgba(255,255,255,0.08)', padding: '4px 10px' }}>5-6 meses</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: '#fff', marginBottom: '8px' }}><Link to="/ens" style={{ color: 'inherit', textDecoration: 'none' }}>ENS</Link> + <Link to="/iso27001" style={{ color: 'inherit', textDecoration: 'none' }}>ISO 27001</Link></h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}>El pack mas completo para el mercado TIC espanol</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '16px', flex: 1 }}>La combinacion perfecta para proveedores TIC que quieren cubrir tanto el mercado publico (ENS obligatorio) como el mercado privado e internacional (ISO 27001 exigida en contratos enterprise). Dos certificaciones por el precio de 1.3 veces el ENS solo, gracias al 65% de solapamiento. El mismo equipo, la misma documentacion, la misma vision del riesgo. Garantia de exito en ambas auditorias.</p>
              <div style={{ background: 'rgba(74,222,128,0.1)', borderLeft: '3px solid #4ade80', padding: '12px 16px', marginBottom: '16px' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#4ade80', margin: 0, fontWeight: 500 }}>Si lo contratas por separado, pagas el equivalente a ~1x el ENS de mas -- sin razon tecnica que lo justifique.</p>
              </div>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>Para: empresas TIC que venden a AAPP y a privados</div>
              <Link to="/contacto" className="v3-btn v3-btn--gold" style={{ borderColor: 'var(--gold)', color: '#fff', textAlign: 'center', justifyContent: 'center' }}>Habla con un experto &rarr;</Link>
            </div>

            {/* Pack 03 */}
            <div className="anim-fade-up" style={{ background: 'var(--white)', padding: '40px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pack 03</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', background: 'var(--pearl)', padding: '4px 10px' }}>5-6 meses</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: 'var(--navy)', marginBottom: '8px' }}><Link to="/ens" style={{ color: 'inherit', textDecoration: 'none' }}>ENS</Link> + <Link to="/iso22301" style={{ color: 'inherit', textDecoration: 'none' }}>ISO 22301</Link></h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>Para servicios que no pueden permitirse interrupciones</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '24px', flex: 1 }}>El ENS en categoria Media o Alta ya exige planes de continuidad. Este pack los eleva al nivel de certificacion ISO 22301, lo que anade valor comercial (clientes que exigen continuidad certificada) y regulatorio (NIS2, DORA). El solapamiento entre el ENS y la ISO 22301 es del 55%, lo que hace este pack especialmente eficiente en terminos de esfuerzo adicional.</p>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>Para: proveedores de servicios criticos, cloud, salud</div>
              <Link to="/contacto" className="btn-text">Habla con un experto &rarr;</Link>
            </div>

            {/* Pack 04 */}
            <div className="anim-fade-up" style={{ background: 'var(--white)', padding: '40px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pack 04</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', background: 'var(--pearl)', padding: '4px 10px' }}>7-9 meses</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: 'var(--navy)', marginBottom: '8px' }}>Pack Triple</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}><Link to="/ens">ENS</Link> + <Link to="/iso27001">ISO 27001</Link> + <Link to="/iso22301">ISO 22301</Link></p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '24px', flex: 1 }}>La hoja de ruta GRC completa para empresas TIC con ambicion de mercado. Tres certificaciones internacionales que cubren el 100% de los requisitos de seguridad y continuidad del mercado espanol y europeo. El ahorro estimado frente a proyectos separados es del 32-35%. Un solo Sistema de Gestion Integrado para los tres marcos.</p>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>Para: la hoja de ruta GRC completa de una empresa TIC</div>
              <Link to="/contacto" className="btn-text">Habla con un experto &rarr;</Link>
            </div>

            {/* Pack 05 */}
            <div className="anim-fade-up" style={{ background: 'var(--white)', padding: '40px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pack 05</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', background: 'var(--pearl)', padding: '4px 10px' }}>5-6 meses</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: 'var(--navy)', marginBottom: '8px' }}><Link to="/ens" style={{ color: 'inherit', textDecoration: 'none' }}>ENS</Link> + <Link to="/nis2" style={{ color: 'inherit', textDecoration: 'none' }}>NIS2</Link></h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>Para entidades afectadas por la Directiva NIS2</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '24px', flex: 1 }}>NIS2 aplica a 18 sectores criticos en la UE. Si ya tienes el ENS, el 50% del camino de adecuacion a NIS2 ya esta hecho. Este pack cubre los requisitos especificos de NIS2 que van mas alla del ENS: notificacion formal de incidentes al regulador, responsabilidad directiva documentada, y la evaluacion de la cadena de suministro segun la directiva europea.</p>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>Para: entidades esenciales e importantes en sectores NIS2</div>
              <Link to="/contacto" className="btn-text">Habla con un experto &rarr;</Link>
            </div>

            {/* Pack 06 */}
            <div className="anim-fade-up" style={{ background: 'var(--white)', padding: '40px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pack 06</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', background: 'var(--pearl)', padding: '4px 10px' }}>5-6 meses</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: 'var(--navy)', marginBottom: '8px' }}><Link to="/ens" style={{ color: 'inherit', textDecoration: 'none' }}>ENS</Link> + <Link to="/dora" style={{ color: 'inherit', textDecoration: 'none' }}>DORA</Link></h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>Para entidades financieras y sus proveedores TIC</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '24px', flex: 1 }}>DORA entro en vigor en enero 2025 y es de aplicacion directa en toda la UE. Si ya tienes el ENS, el 60% de los requisitos de DORA ya estan cubiertos. Este pack anade los cinco pilares especificos de DORA: marco de riesgo TIC, notificacion de incidentes al regulador financiero, pruebas de resiliencia, gestion de proveedores TIC con clausulas DORA, e intercambio de informacion.</p>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>Para: entidades financieras y proveedores TIC del sector</div>
              <Link to="/contacto" className="btn-text">Habla con un experto &rarr;</Link>
            </div>

            {/* Pack 07 */}
            <div className="anim-fade-up" style={{ background: 'var(--navy)', padding: '40px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pack 07</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.06em', background: 'rgba(255,255,255,0.08)', padding: '4px 10px' }}>9-12 meses</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: '#fff', marginBottom: '8px' }}>Pack Elite</h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'rgba(255,255,255,0.5)', marginBottom: '24px' }}><Link to="/ens" style={{ color: 'inherit', textDecoration: 'none' }}>ENS</Link> + <Link to="/iso27001" style={{ color: 'inherit', textDecoration: 'none' }}>ISO 27001</Link> + <Link to="/iso22301" style={{ color: 'inherit', textDecoration: 'none' }}>ISO 22301</Link> + <Link to="/nis2" style={{ color: 'inherit', textDecoration: 'none' }}>NIS2</Link></p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'rgba(255,255,255,0.75)', marginBottom: '24px', flex: 1 }}>Para organizaciones que quieren el maximo nivel de compliance posible. Cuatro marcos en un solo proyecto integrado, con el ahorro estimado del 40% frente a proyectos independientes. El resultado: una organizacion que puede demostrar ante cualquier cliente, regulador o auditor que su gestion de la seguridad esta al mas alto nivel internacional. Base solida para DORA si en el futuro tambien aplica.</p>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '16px' }}>Para: lideres de sector que quieren el maximo compliance</div>
              <Link to="/contacto" className="v3-btn v3-btn--gold" style={{ borderColor: 'var(--gold)', color: '#fff', textAlign: 'center', justifyContent: 'center' }}>Habla con un experto &rarr;</Link>
            </div>

            {/* Pack 08 */}
            <div className="anim-fade-up" style={{ background: 'var(--white)', padding: '40px', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Pack 08</span>
                <span style={{ fontFamily: 'var(--font-sans)', fontSize: '10px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', background: 'var(--pearl)', padding: '4px 10px' }}>5-6 meses</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 300, color: 'var(--navy)', marginBottom: '8px' }}><Link to="/iso27001" style={{ color: 'inherit', textDecoration: 'none' }}>ISO 27001</Link> + <Link to="/iso22301" style={{ color: 'inherit', textDecoration: 'none' }}>ISO 22301</Link></h3>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)', marginBottom: '24px' }}>Para empresas que ya tienen <Link to="/ens">ENS</Link> o no lo necesitan</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', lineHeight: 1.7, color: 'var(--text-body)', marginBottom: '24px', flex: 1 }}>Si ya estas certificado en el ENS o si no necesitas el ENS (porque no vendes a AAPP), este pack combina los dos estandares internacionales mas solicitados en contratos privados: seguridad de la informacion y continuidad de negocio. El solapamiento entre ISO 27001 e ISO 22301 es del 60%, lo que hace este pack muy eficiente para empresas internacionales o del sector privado.</p>
              <div style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)', marginBottom: '16px' }}>Para: empresas privadas, internacionales, ya con ENS</div>
              <Link to="/contacto" className="btn-text">Habla con un experto &rarr;</Link>
            </div>

          </div>
        </div>
      </section>

      {/* URGENCIA + ESCASEZ */}
      <section className="section section--white" id="urgencia">
        <div className="container" style={{ maxWidth: '860px' }}>

          <div className="anim-fade-up" style={{ background: 'var(--pearl)', border: '1px solid var(--border)', borderLeft: '4px solid var(--gold)', padding: '32px 40px', maxWidth: '820px', margin: '0 auto 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>Calendario de certificacion</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 400, color: 'var(--navy)', marginBottom: '8px', lineHeight: 1.3 }}>Para tener tu certificado antes de enero 2027,<br />el proyecto debe iniciarse antes de <strong>agosto 2026.</strong></p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)' }}>Los pliegos mas importantes de la Administracion Publica espanola suelen publicarse en Q1. Si quieres presentarte, necesitas el ENS antes de diciembre.</p>
            </div>
            <Link to="/contacto" className="v3-btn v3-btn--gold" style={{ whiteSpace: 'nowrap' }}>Habla con un experto &rarr;</Link>
          </div>

          <div className="anim-fade-up" style={{ background: 'var(--white)', border: '1px solid var(--border)', borderLeft: '4px solid #ff6b35', padding: '28px 40px', maxWidth: '820px', margin: '0 auto 0', display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '32px' }}>&#127919;</span>
            <div>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ff6b35', marginBottom: '4px' }}>Capacidad limitada</p>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 400, color: 'var(--navy)', marginBottom: '4px' }}>Solo admitimos 8 proyectos de pack nuevos por trimestre.</p>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: 'var(--text-muted)' }}>Para garantizar la calidad y la atencion personalizada, limitamos el numero de proyectos activos simultaneos. Si el trimestre esta completo, te ponemos en lista de espera con prioridad para el siguiente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS DE EXITO */}
      <section className="section section--pearl" id="casos">
        <div className="container">
          <span className="label-tag">Packs · Casos de exito</span>
          <div className="gold-line"></div>
          <h2 className="section-title" style={{ maxWidth: '560px' }}>Lo que dicen nuestros<br /><em>clientes.</em></h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '52px' }}>
            <div className="anim-fade-up" style={{ background: 'var(--navy)', padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}>
              <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 300, color: '#fff', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>&ldquo;Empezamos con el ENS porque lo necesitabamos para un pliego. Avson nos convencio de anadir el ISO 27001 al mismo proyecto. La diferencia de coste fue marginal y ahora tenemos dos certificaciones que nos han abierto el mercado privado tambien. Fue la mejor decision del ano.&rdquo;</blockquote>
              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, color: '#fff', margin: 0 }}>Marina Torres</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'rgba(255,255,255,0.45)', margin: '4px 0 0', letterSpacing: '0.06em', textTransform: 'uppercase' }}>CEO · Empresa de software de gestion · Madrid</p>
              </div>
            </div>
            <div className="anim-fade-up" style={{ background: 'var(--white)', border: '1px solid var(--border)', padding: '48px 40px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '280px' }}>
              <blockquote style={{ fontFamily: 'var(--font-serif)', fontSize: '22px', fontWeight: 300, color: 'var(--navy)', lineHeight: 1.5, margin: 0, fontStyle: 'italic' }}>&ldquo;Contratamos el Pack Triple porque queriamos cerrar el capitulo GRC de una vez. Un proyecto, un equipo, nueve meses de trabajo. Al final teniamos ENS, ISO 27001 e ISO 22301 certificadas, y el coste total fue un 35% menos de lo que nos habian presupuestado otros proveedores por los tres proyectos separados.&rdquo;</blockquote>
              <div style={{ marginTop: '32px', paddingTop: '24px', borderTop: '1px solid var(--border)' }}>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', fontWeight: 500, color: 'var(--navy)', margin: 0 }}>Sergio Mendez</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--text-muted)', margin: '4px 0 0', letterSpacing: '0.06em', textTransform: 'uppercase' }}>CTO · Proveedor de plataforma SaaS B2B · Barcelona</p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}><Link to="/contacto" className="v3-btn v3-btn--gold">Pide presupuesto &rarr;</Link></div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section section--pearl" id="faq">
        <div className="container" style={{ maxWidth: '760px' }}>
          <span className="label-tag">Preguntas frecuentes</span>
          <div className="gold-line"></div>
          <h2 className="section-title" style={{ maxWidth: '480px' }}>Todo sobre<br /><em>los packs.</em></h2>
          <div style={{ marginTop: '48px' }}>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Como funcionan los packs de certificacion?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>Los packs combinan multiples certificaciones en un solo proyecto integrado. El equipo de Avson disena el proyecto desde el principio para maximizar el solapamiento entre marcos: el analisis de riesgos se hace una sola vez para todos, las politicas se escriben de forma que cumplan con los requisitos de cada norma, y la auditoria interna cubre todos los marcos al mismo tiempo. El resultado es un ahorro estimado de entre el 25% y el 40% respecto a proyectos independientes, con un tiempo de dedicacion del cliente tambien significativamente menor.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Que esta incluido en el precio del pack?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>Todos los packs de Avson incluyen: gap analysis inicial, implementacion completa de controles, documentacion completa del sistema de gestion (politicas, procedimientos, registros), auditoria interna previa a la certificacion, acompanamiento durante la auditoria de certificacion con la entidad certificadora, y la garantia de exito. Lo que no esta incluido en el precio del pack es la tarifa de la entidad certificadora acreditada, que se paga directamente a la certificadora y depende del tamano de la empresa y el alcance. Avson te ayuda a seleccionar la certificadora y a negociar las condiciones.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Puedo anadir una certificacion mas tarde si empiezo con solo una?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>Si. Si empiezas con el ENS y despues decides anadir ISO 27001, el trabajo ya hecho para el ENS reduce significativamente el esfuerzo del proyecto ISO 27001. El ahorro no es tan grande como si hubieras empezado con el pack completo desde el principio (porque en el pack disenamos la documentacion para reutilizarla desde el inicio), pero sigue siendo mayor del 20% respecto a un proyecto ISO 27001 completamente nuevo. Muchos de nuestros clientes empiezan con una certificacion y van anadiendo mas a medida que crece su empresa.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Que pasa si ya tengo una certificacion de otra consultora?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>Podemos tomar el relevo y anadir el siguiente marco al que ya tienes. Empezamos con una revision del sistema de gestion existente para entender que esta implementado, que funciona bien y que tiene margen de mejora. A partir de ahi, disenamos el proyecto de ampliacion aprovechando el trabajo ya hecho. No es tan eficiente como haber empezado el pack desde cero con Avson, pero seguimos siendo capaces de extraer un solapamiento significativo del trabajo anterior.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>El plazo del pack es el tiempo total o los tiempos corren en paralelo?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>Los tiempos del pack son el plazo total del proyecto integrado, no la suma de los plazos individuales. En la mayoria de los packs, los marcos se implementan de forma secuencial o con solapamiento parcial, dependiendo de las dependencias entre ellos. El analisis de riesgos y la documentacion base se hacen al principio y sirven para todos los marcos. Las fases especificas de cada norma se desarrollan una vez establecida esa base. El resultado es que el Pack Triple (ENS + ISO 27001 + ISO 22301) tarda 7-9 meses, frente a los 12-15 meses que tardarian los tres proyectos por separado.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Hay formas de pago flexibles?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>Si. Trabajamos con pagos fraccionados adaptados al ritmo del proyecto. Habitualmente: un porcentaje al inicio del proyecto, otro porcentaje a mitad del proyecto, y el resto a la obtencion del certificado. Esta estructura de pagos alinea nuestros intereses con los del cliente: la mayor parte del pago se desbloquea cuando el objetivo esta logrado. Para proyectos con bonos de mantenimiento anuales, el bono se paga al inicio de cada ano de mantenimiento.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Que incluye exactamente la garantia de exito?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>La garantia de exito de Avson significa que si, siguiendo nuestra metodologia y el plan de trabajo acordado, no superamos la auditoria de certificacion en el primer intento, Avson cubre el coste de la segunda auditoria con la entidad certificadora sin cargo adicional para el cliente. Esta garantia aplica cuando el cliente ha seguido las recomendaciones del equipo de Avson y ha completado las fases del proyecto segun lo planificado. La garantia esta incluida en el contrato de todos los proyectos de certificacion, no es un add-on opcional.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Puedo empezar sin tener claro que pack necesito?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>Si. El presupuesto sin compromiso de Avson esta disenado precisamente para eso: analizar tu situacion, tus clientes, tus requisitos regulatorios y tus objetivos de negocio, y recomendarte el pack mas eficiente para tu caso concreto. Muchos clientes llegan sin saber exactamente que necesitan -- saben que necesitan "algo de certificaciones" pero no cuales ni en que orden. La primera reunion con el consultor resuelve esa duda en 45 minutos.</p></div>
            </div>
            <div className="faq-item">
              <div className="faq-item__question" onClick={(e) => (e.currentTarget as HTMLElement).closest('.faq-item')?.classList.toggle('open')}>Cuando debo contratar para tener el certificado antes de una licitacion especifica?<div className="faq-item__icon">+</div></div>
              <div className="faq-item__answer"><p>Para un proceso estandar de 3-4 meses (ENS Basico o Medio), necesitas contratar al menos 4 meses antes de la fecha en que necesitas presentar el certificado -- y algo mas si quieres margen de seguridad. Si tienes un pliego que cierra antes, existe el servicio <Link to="/ens-express">ENS Express</Link> (30 dias naturales), pero las plazas son muy limitadas: solo 6 proyectos Express por mes. Consulta disponibilidad lo antes posible -- cuantos mas dias tengamos, mejor resultado aseguramos y mas comoda es la implementacion para tu equipo.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="section section--navy">
        <div className="container" style={{ textAlign: 'center' }}>
          <span className="label-tag" style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'rgba(255,255,255,0.6)' }}>Packs GRC · Pide presupuesto</span>
          <div className="gold-line" style={{ margin: '20px auto 0' }}></div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px,4.5vw,58px)', fontWeight: 300, color: '#fff', lineHeight: 1.15, margin: '32px 0 24px' }}>
            Disenamos el pack<br /><em>a tu medida.</em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', color: 'rgba(255,255,255,0.65)', maxWidth: '520px', margin: '0 auto 40px', lineHeight: 1.7 }}>
            Pide presupuesto. Te decimos que pack tiene mas sentido para tu situacion, que marcos necesitas realmente, y cuanto costaria frente a hacer los proyectos por separado.
          </p>
          <Link to="/contacto" className="v3-btn v3-btn--gold" style={{ borderColor: 'var(--gold)', color: '#fff', fontSize: '15px', padding: '18px 36px' }}>Habla con un experto &rarr;</Link>
        </div>
      </section>
    </>
  )
}
