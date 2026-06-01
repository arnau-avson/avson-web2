import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function ContactoPage() {
  const navigate = useNavigate()
  const [necesidad, setNecesidad] = useState('')
  const [activeBtn, setActiveBtn] = useState<string | null>(null)

  const pickQ = (val: string) => {
    setNecesidad(val)
    setActiveBtn(val)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('nombre') as string
    const email = formData.get('email') as string
    navigate(`/gracias?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`)
  }

  return (
    <>
      <main className="cmain">
        <div className="fomo-bar">&#9888; El 85% de empresas sin ENS pierde sus licitaciones</div>

        <div className="card">
          <span className="badge">&#x1F7E2; Te llamamos hoy mismo</span>
          <h1 className="card-title">Habla con un experto.</h1>
          <p className="card-sub">Gratuito &middot; Sin compromiso &middot; En 30 min sabr&aacute;s exactamente qu&eacute; necesitas</p>

          <p className="qual-label">&iquest;Qu&eacute; necesitas?</p>
          <div className="qual-grid">
            <button
              type="button"
              className={`qual-btn qual-btn--urgent${activeBtn === 'ENS Express urgente' ? ' qual-btn--active' : ''}`}
              onClick={() => pickQ('ENS Express urgente')}
            >
              &#9889; ENS urgente
            </button>
            <button
              type="button"
              className={`qual-btn${activeBtn === 'ENS estándar' ? ' qual-btn--active' : ''}`}
              onClick={() => pickQ('ENS estándar')}
            >
              ENS est&aacute;ndar
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
              className={`qual-btn${activeBtn === 'ISO 22301' ? ' qual-btn--active' : ''}`}
              onClick={() => pickQ('ISO 22301')}
            >
              ISO 22301
            </button>
            <button
              type="button"
              className={`qual-btn${activeBtn === 'DORA' ? ' qual-btn--active' : ''}`}
              onClick={() => pickQ('DORA')}
            >
              DORA
            </button>
            <button
              type="button"
              className={`qual-btn${activeBtn === 'No lo sé aún' ? ' qual-btn--active' : ''}`}
              onClick={() => pickQ('No lo sé aún')}
            >
              No lo s&eacute; a&uacute;n
            </button>
            <button
              type="button"
              className={`qual-btn${activeBtn === 'Otras' ? ' qual-btn--active' : ''}`}
              onClick={() => pickQ('Otras')}
            >
              Otras
            </button>
          </div>

          <form id="contactForm" onSubmit={handleSubmit} noValidate>
            <input type="hidden" name="necesidad" value={necesidad} />
            <div className="form-group">
              <input
                type="text"
                name="nombre"
                placeholder="Tu nombre *"
                autoComplete="given-name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Tu email *"
                autoComplete="email"
                required
              />
            </div>
            <div className="rgpd">
              <input type="checkbox" id="cRgpd" required />
              <label htmlFor="cRgpd">
                Al enviar, acepto que Avson me contacte para responder mi consulta.{' '}
                <Link to="/privacidad" target="_blank">
                  Pol&iacute;tica de privacidad
                </Link>
              </label>
            </div>
            <button type="submit" className="btn-cta">
              Habla con un experto &rarr;
            </button>
            <p className="lock-text">&#128274; Gratuito &middot; Sin compromiso &middot; Confidencial</p>
          </form>

          <div className="alt-phone">
            <span>&iquest;Prefieres escribirnos?</span>
            <a href="mailto:hello@avson.eu">hello@avson.eu</a>
          </div>
        </div>

        <div className="trust-strip">
          <span>355+ empresas certificadas</span>
          <span>100% de &eacute;xito</span>
          <span>Garant&iacute;a por escrito</span>
        </div>
      </main>
    </>
  )
}
