import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <>
      <section className="error-hero">
        <p className="error-hero__number" aria-hidden="true">404</p>
        <div className="error-hero__content">
          <div className="error-hero__icon anim-fade-up">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </div>
          <h1 className="anim-fade-up">Esta página no existe.</h1>
          <p className="error-hero__desc anim-fade-up">Puede que el enlace haya cambiado o que hayas seguido un enlace desactualizado. Te llevamos a donde necesitas ir.</p>

          <form action="https://www.google.com/search" method="get" className="error-search anim-fade-up">
            <input type="hidden" name="sitesearch" value="avson.eu" />
            <input type="text" name="q" placeholder="Buscar en avson.eu..." autoComplete="off" />
            <button type="submit">Buscar</button>
          </form>
          <p className="error-search__hint anim-fade-up">Búsqueda directa en avson.eu via Google</p>
        </div>
      </section>

      <section className="error-nav">
        <div className="container" style={{ padding: '0 24px' }}>
          <h2 className="error-nav__title anim-fade-up">¿A dónde quieres ir?</h2>
          <div className="error-nav__grid">

            <Link to="/" className="error-nav-card anim-fade-up">
              <div className="error-nav-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A2744" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <div className="error-nav-card__body">
                <p className="error-nav-card__label">Principal</p>
                <h3 className="error-nav-card__title">Inicio</h3>
                <p className="error-nav-card__desc">Vuelve a la página principal de Avson GRC y descubre todos nuestros servicios de certificación.</p>
              </div>
            </Link>

            <Link to="/ens" className="error-nav-card anim-fade-up">
              <div className="error-nav-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A2744" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <div className="error-nav-card__body">
                <p className="error-nav-card__label">Servicio estrella</p>
                <h3 className="error-nav-card__title">Certificado ENS</h3>
                <p className="error-nav-card__desc">Todo sobre el Esquema Nacional de Seguridad: qué es, quién lo necesita y cómo obtenerlo en 3–4 meses.</p>
              </div>
            </Link>

            <Link to="/contacto" className="error-nav-card anim-fade-up">
              <div className="error-nav-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A2744" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <div className="error-nav-card__body">
                <p className="error-nav-card__label">Contactar</p>
                <h3 className="error-nav-card__title">Hablar con un consultor</h3>
                <p className="error-nav-card__desc">Pide presupuesto sin compromiso. Te respondemos en menos de 24 horas.</p>
              </div>
            </Link>

            <Link to="/diagnostico" className="error-nav-card anim-fade-up">
              <div className="error-nav-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A2744" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <div className="error-nav-card__body">
                <p className="error-nav-card__label">Herramienta</p>
                <h3 className="error-nav-card__title">¿Qué certificación necesito?</h3>
                <p className="error-nav-card__desc">Responde 10 preguntas y descubre qué certificados son obligatorios o recomendables para tu empresa.</p>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </>
  )
}
