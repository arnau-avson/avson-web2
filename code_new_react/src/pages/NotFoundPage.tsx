import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `/* ===== 404 PAGE SPECIFIC STYLES ===== */

    /* HERO 404 */
    .error-hero {
      padding: 120px 0 80px;
      background: var(--pearl, #F5F3EE);
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .error-hero__number {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: clamp(100px, 20vw, 200px);
      font-weight: 300;
      color: var(--navy, #1A2744);
      opacity: 0.08;
      line-height: 1;
      margin: 0;
      user-select: none;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      pointer-events: none;
    }
    .error-hero__content {
      position: relative;
      z-index: 1;
      padding: 40px 24px;
    }
    .error-hero__icon {
      width: 72px;
      height: 72px;
      background: rgba(201,168,76,0.10);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 32px;
    }
    .error-hero h1 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: clamp(2rem, 4vw, 3rem);
      font-weight: 600;
      color: var(--navy, #1A2744);
      margin: 0 0 20px;
      line-height: 1.2;
    }
    .error-hero__desc {
      font-family: 'Inter', sans-serif;
      font-size: 1.05rem;
      color: #5a5a5a;
      max-width: 540px;
      margin: 0 auto 48px;
      line-height: 1.7;
    }

    /* SEARCH BAR */
    .error-search {
      display: flex;
      gap: 0;
      max-width: 480px;
      margin: 0 auto 16px;
      box-shadow: 0 2px 20px rgba(26,39,68,0.10);
      border-radius: 3px;
      overflow: hidden;
    }
    .error-search input[type="text"] {
      flex: 1;
      border: 1.5px solid var(--border, #E2DDD6);
      border-right: none;
      border-radius: 3px 0 0 3px;
      padding: 14px 18px;
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      color: #333;
      background: #fff;
      outline: none;
      transition: border-color 0.2s;
    }
    .error-search input[type="text"]:focus {
      border-color: var(--gold, #C9A84C);
    }
    .error-search button {
      background: var(--navy, #1A2744);
      color: #fff;
      border: none;
      padding: 14px 22px;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 600;
      letter-spacing: 0.05em;
      cursor: pointer;
      border-radius: 0 3px 3px 0;
      transition: background 0.2s;
      white-space: nowrap;
    }
    .error-search button:hover {
      background: #0f1a33;
    }
    .error-search__hint {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      color: #aaa;
      text-align: center;
    }

    /* NAVIGATION CARDS */
    .error-nav {
      padding: 72px 0 80px;
      background: #fff;
    }
    .error-nav__title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: clamp(1.4rem, 2.5vw, 2rem);
      font-weight: 600;
      color: var(--navy, #1A2744);
      text-align: center;
      margin: 0 0 40px;
    }
    .error-nav__grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 24px;
      max-width: 760px;
      margin: 0 auto;
    }
    .error-nav-card {
      display: flex;
      align-items: flex-start;
      gap: 18px;
      padding: 28px 24px;
      border: 1px solid var(--border, #E2DDD6);
      border-radius: 4px;
      text-decoration: none;
      background: var(--pearl, #F5F3EE);
      transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
    }
    .error-nav-card:hover {
      box-shadow: 0 6px 28px rgba(26,39,68,0.10);
      border-color: var(--gold, #C9A84C);
      transform: translateY(-2px);
    }
    .error-nav-card__icon {
      width: 44px;
      height: 44px;
      min-width: 44px;
      background: rgba(26,39,68,0.07);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .error-nav-card__body {}
    .error-nav-card__label {
      font-family: 'Inter', sans-serif;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 0.10em;
      text-transform: uppercase;
      color: var(--gold, #C9A84C);
      margin-bottom: 4px;
    }
    .error-nav-card__title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--navy, #1A2744);
      margin: 0 0 6px;
      line-height: 1.3;
    }
    .error-nav-card__desc {
      font-family: 'Inter', sans-serif;
      font-size: 0.83rem;
      color: #6a6a6a;
      line-height: 1.55;
      margin: 0;
    }

    /* Responsive */
    @media (max-width: 600px) {
      .error-hero { padding: 100px 0 60px; }
      .error-hero__content { padding: 40px 20px; }
      .error-nav { padding: 56px 20px 60px; }
      .error-nav__grid {
        grid-template-columns: 1fr;
      }
      .error-search {
        flex-direction: column;
        box-shadow: none;
        border-radius: 0;
        overflow: visible;
      }
      .error-search input[type="text"] {
        border-right: 1.5px solid var(--border, #E2DDD6);
        border-radius: 3px;
        margin-bottom: 8px;
      }
      .error-search button {
        border-radius: 3px;
        padding: 14px;
      }
    }` }} />
<section className="error-hero">
    <p className="error-hero__number" aria-hidden="true">404</p>
    <div className="error-hero__content">
      <div className="error-hero__icon anim-fade-up">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
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
    <div className="container" style={{padding:'0 24px'}}>
      <h2 className="error-nav__title anim-fade-up">¿A dónde quieres ir?</h2>
      <div className="error-nav__grid">

        <Link to="/" className="error-nav-card anim-fade-up">
          <div className="error-nav-card__icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A2744" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
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
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A2744" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
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
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A2744" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </div>
          <div className="error-nav-card__body">
            <p className="error-nav-card__label">Contactar</p>
            <h3 className="error-nav-card__title">Hablar con un consultor</h3>
            <p className="error-nav-card__desc">Diagnóstico gratuito sin compromiso. Te respondemos en menos de 24 horas.</p>
          </div>
        </Link>

        <Link to="/diagnostico" className="error-nav-card anim-fade-up">
          <div className="error-nav-card__icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#1A2744" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>
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
