import { useState, FormEvent } from 'react'
import { Link } from 'react-router-dom'

export default function PacksPage() {
  const [showQuoteForm, setShowQuoteForm] = useState(true)
  const [quoteResult, setQuoteResult] = useState<null | { total: string; note: string }>(null)
  const [formData, setFormData] = useState({
    nombre: '', email: '', normas: [] as string[],
    ubicaciones: '1', ensCategoria: 'media', infra: 'cloud', express: false
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      if (name === 'express') {
        setFormData(prev => ({ ...prev, express: checked }))
      } else if (name === 'norma') {
        const norma = value
        setFormData(prev => ({
          ...prev,
          normas: checked ? [...prev.normas, norma] : prev.normas.filter(n => n !== norma)
        }))
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleQuoteSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Simular cálculo (esto debe ir al backend)
    const base = 8000
    const mult = formData.normas.length === 1 ? 1 : formData.normas.length === 2 ? 1.3 : 1.6
    const total = base * mult
    setQuoteResult({
      total: total.toLocaleString('es-ES') + ' €',
      note: 'Precio orientativo, pendiente de validación con oferta formal y revisión del alcance.'
    })
    setShowQuoteForm(false)
  }

  const resetQuote = () => {
    setShowQuoteForm(true)
    setQuoteResult(null)
  }

  return (
    <>
      <section className="section section--pearl" style={{ paddingTop: '160px', paddingBottom: '60px' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(44px,6vw,76px)', fontWeight: 300, color: 'var(--navy)', lineHeight: 1.1, margin: '0 0 20px', maxWidth: '700px' }}>
            Más certificados.<br /><em>Un solo proyecto.</em>
          </h1>
          <p className="body-large" style={{ maxWidth: '500px', marginBottom: '36px', color: 'var(--text-body)' }}>
            Elige tu pack. Te llamamos hoy. Empezamos.
          </p>
          <Link to="/contacto" className="v3-btn v3-btn--gold btn-impact-lg">Habla con un experto →</Link>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '12px' }}>
            ✅ Garantía de éxito al 100% por escrito · ⚡ Arranque en 24h · 355+ empresas certificadas
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
                Valida tu <strong style={{ color: '#fff' }}>email de empresa</strong> y te calculamos una horquilla orientativa al instante. Sin compromiso y sin presión comercial.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>
                <li style={{ marginBottom: '8px' }}>✓ Adaptado al tamaño y alcance de tu empresa</li>
                <li style={{ marginBottom: '8px' }}>✓ Descuento real al combinar varias normas</li>
                <li>✓ Lo revisa un consultor antes de la oferta formal</li>
              </ul>
            </div>
            <div>
              {showQuoteForm ? (
                <div style={{ background: '#fff', borderRadius: '12px', padding: '28px' }}>
                  <form onSubmit={handleQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <input type="text" name="nombre" placeholder="Tu nombre *" required onChange={handleInputChange} style={{ flex: 1, minWidth: 0, padding: '12px 14px', border: '1.5px solid #E5E5E0', borderRadius: '8px', fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#1A2744', outline: 'none' }} />
                      <input type="email" name="email" placeholder="Email de empresa *" required onChange={handleInputChange} style={{ flex: 1.2, minWidth: 0, padding: '12px 14px', border: '1.5px solid #E5E5E0', borderRadius: '8px', fontFamily: 'var(--font-sans)', fontSize: '14px', color: '#1A2744', outline: 'none' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#7A8499', margin: '2px 0 8px' }}>¿Qué normas necesitas? *</p>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 14px', fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#1A2744' }}>
                        {['ens', 'iso27001', 'iso22301', 'dora', 'iso9001', 'iso14001', 'iso42001', 'iso50001'].map(n => (
                          <label key={n} style={{ display: 'flex', gap: '7px', alignItems: 'center', cursor: 'pointer' }}>
                            <input type="checkbox" name="norma" value={n} onChange={handleInputChange} style={{ accentColor: '#1A2744' }} /> {n.toUpperCase()}
                          </label>
                        ))}
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px' }}>
                      <select name="ubicaciones" required onChange={handleInputChange} style={{ flex: 1, minWidth: 0, padding: '11px 12px', border: '1.5px solid #E5E5E0', borderRadius: '8px', fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#1A2744', background: '#fff' }} defaultValue="1">
                        <option value="1">1 ubicación</option>
                        <option value="2">2 ubicaciones</option>
                        <option value="3">3 o más</option>
                      </select>
                      <select name="ensCategoria" onChange={handleInputChange} style={{ flex: 1, minWidth: 0, padding: '11px 12px', border: '1.5px solid #E5E5E0', borderRadius: '8px', fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#1A2744', background: '#fff' }}>
                        <option value="media">ENS Básica/Media</option>
                        <option value="alta">ENS Alta</option>
                      </select>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                      <select name="infra" onChange={handleInputChange} style={{ flex: 1, minWidth: '120px', padding: '11px 12px', border: '1.5px solid #E5E5E0', borderRadius: '8px', fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#1A2744', background: '#fff' }}>
                        <option value="cloud">Infra en cloud</option>
                        <option value="onprem">Infra on-premise</option>
                      </select>
                      <label style={{ display: 'flex', gap: '7px', alignItems: 'center', cursor: 'pointer', fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#1A2744', flex: 1, minWidth: '120px' }}>
                        <input type="checkbox" name="express" onChange={handleInputChange} style={{ accentColor: '#C9A84C' }} /> ⚡ Lo necesito en &lt;60 días
                      </label>
                    </div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                      <input type="checkbox" required style={{ width: '15px', height: '15px', flexShrink: 0, marginTop: '3px', accentColor: '#1A2744' }} />
                      <label style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: '#7A8499', lineHeight: 1.4 }}>Al enviar, acepto que Avson me contacte para preparar mi presupuesto. <Link to="/privacidad" target="_blank" style={{ color: '#1A2744' }}>Política de privacidad</Link></label>
                    </div>
                    <button type="submit" className="v3-btn v3-btn--gold v3-btn--pulse" style={{ width: '100%', justifyContent: 'center', padding: '15px' }}>Calcular mi presupuesto →</button>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: '#B0B8C4', textAlign: 'center', margin: 0 }}>🔒 Solo emails de empresa · Confidencial</p>
                  </form>
                </div>
              ) : (
                <div id="quoteResult" style={{ display: 'block', marginTop: '16px' }}>
                  <div style={{ background: '#fff', borderRadius: '12px', padding: '28px' }}>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C' }}>Presupuesto orientativo</p>
                    <p style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', fontWeight: 300, color: '#1A2744' }}>{quoteResult?.total}<span style={{ color: '#C9A84C' }}>*</span></p>
                    <p style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', color: '#7A8499', marginTop: '8px' }}>{quoteResult?.note}</p>
                    <Link to="/contacto" className="v3-btn v3-btn--gold v3-btn--full" style={{ marginTop: '20px', justifyContent: 'center' }}>Solicitar oferta formal →</Link>
                    <button onClick={resetQuote} style={{ marginTop: '16px', background: 'none', border: 'none', color: '#7A8499', cursor: 'pointer' }}>← Volver a calcular</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* El resto de la página (packs) se mantiene igual que en tu archivo original, no lo repito aquí por brevedad */}
      <div className="section section--pearl" style={{ textAlign: 'center', padding: '40px' }}>
        <p>(Aquí iría el contenido de los packs, que ya tienes en tu archivo original)</p>
      </div>
    </>
  )
}