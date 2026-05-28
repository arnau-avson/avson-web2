import { Link } from 'react-router-dom'

export default function GraciasPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `/* ===== GRACIAS PAGE SPECIFIC STYLES ===== */
    .gracias-hero {
      padding: 140px 0 80px;
      text-align: center;
      background: var(--pearl, #F5F3EE);
    }
    .gracias-hero__check {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background: rgba(201, 168, 76, 0.12);
      margin: 0 auto 32px;
    }
    .gracias-hero__check svg {
      display: block;
    }
    .gracias-hero h1 {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: clamp(2.2rem, 5vw, 3.6rem);
      font-weight: 600;
      color: var(--navy, #1A2744);
      margin: 0 0 20px;
      line-height: 1.2;
    }
    .gracias-hero__subtitle {
      font-family: 'Inter', sans-serif;
      font-size: 1.15rem;
      font-weight: 400;
      color: #4a4a4a;
      max-width: 560px;
      margin: 0 auto 48px;
      line-height: 1.65;
    }

    /* PASOS */
    .gracias-steps {
      background: var(--navy, #1A2744);
      padding: 60px 0;
    }
    .gracias-steps__title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--gold, #C9A84C);
      text-align: center;
      margin: 0 0 40px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
    }
    .gracias-steps__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 32px;
      max-width: 860px;
      margin: 0 auto;
    }
    .gracias-step {
      text-align: center;
      padding: 32px 24px;
      border: 1px solid rgba(201,168,76,0.25);
      border-radius: 4px;
    }
    .gracias-step__number {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 3rem;
      font-weight: 300;
      color: var(--gold, #C9A84C);
      line-height: 1;
      margin-bottom: 16px;
    }
    .gracias-step__text {
      font-family: 'Inter', sans-serif;
      font-size: 0.95rem;
      font-weight: 400;
      color: rgba(255,255,255,0.85);
      line-height: 1.6;
    }

    /* MIENTRAS TANTO */
    .gracias-meanwhile {
      padding: 80px 0;
      background: #fff;
    }
    .gracias-meanwhile__title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: clamp(1.6rem, 3vw, 2.4rem);
      font-weight: 600;
      color: var(--navy, #1A2744);
      text-align: center;
      margin: 0 0 12px;
    }
    .gracias-meanwhile__sub {
      font-family: 'Inter', sans-serif;
      font-size: 1rem;
      color: #6b6b6b;
      text-align: center;
      margin: 0 0 48px;
    }
    .gracias-cards {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      gap: 28px;
      max-width: 960px;
      margin: 0 auto;
    }
    .gracias-card {
      display: block;
      padding: 36px 28px;
      border: 1px solid var(--border, #E2DDD6);
      border-radius: 4px;
      text-decoration: none;
      transition: box-shadow 0.2s, border-color 0.2s, transform 0.2s;
      background: var(--pearl, #F5F3EE);
    }
    .gracias-card:hover {
      box-shadow: 0 8px 32px rgba(26,39,68,0.10);
      border-color: var(--gold, #C9A84C);
      transform: translateY(-3px);
    }
    .gracias-card__icon {
      width: 44px;
      height: 44px;
      background: rgba(201,168,76,0.12);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
    .gracias-card__label {
      font-family: 'Inter', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--gold, #C9A84C);
      margin-bottom: 8px;
    }
    .gracias-card__title {
      font-family: 'Cormorant Garamond', Georgia, serif;
      font-size: 1.3rem;
      font-weight: 600;
      color: var(--navy, #1A2744);
      margin-bottom: 10px;
      line-height: 1.3;
    }
    .gracias-card__desc {
      font-family: 'Inter', sans-serif;
      font-size: 0.9rem;
      color: #5a5a5a;
      line-height: 1.6;
    }
    .gracias-card__arrow {
      display: inline-block;
      margin-top: 16px;
      font-family: 'Inter', sans-serif;
      font-size: 13px;
      font-weight: 500;
      color: var(--gold, #C9A84C);
      letter-spacing: 0.04em;
    }

    /* Responsive */
    @media (max-width: 640px) {
      .gracias-hero { padding: 120px 24px 60px; }
      .gracias-steps { padding: 48px 24px; }
      .gracias-steps__grid { grid-template-columns: 1fr; gap: 20px; }
      .gracias-meanwhile { padding: 60px 24px; }
      .gracias-cards { grid-template-columns: 1fr; }
    }` }} />
<section className="gracias-hero">
    <div className="container" style={{maxWidth:'720px',padding:'0 24px'}}>
      <div className="gracias-hero__check anim-fade-up">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="23" stroke="#C9A84C" stroke-width="2"/>
          <path d="M13 24.5L20.5 32L35 17" stroke="#C9A84C" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
      <h1 className="anim-fade-up">Tu solicitud ha llegado.</h1>
      <p className="gracias-hero__subtitle anim-fade-up">Te contactamos en menos de 24 horas para organizar tu diagnóstico gratuito.</p>
    </div>
  </section>

  
  <section className="gracias-steps">
    <div className="container" style={{padding:'0 24px'}}>
      <p className="gracias-steps__title anim-fade-up">Los próximos pasos</p>
      <div className="gracias-steps__grid">
        <div className="gracias-step anim-fade-up">
          <div className="gracias-step__number">1</div>
          <p className="gracias-step__text">Revisamos tu solicitud hoy mismo y asignamos el consultor más adecuado a tu situación.</p>
        </div>
        <div className="gracias-step anim-fade-up">
          <div className="gracias-step__number">2</div>
          <p className="gracias-step__text">Te llamamos para entender tu situación en 15 minutos y confirmar el alcance del diagnóstico.</p>
        </div>
        <div className="gracias-step anim-fade-up">
          <div className="gracias-step__number">3</div>
          <p className="gracias-step__text">Te enviamos una propuesta personalizada con plan de trabajo, calendario y presupuesto en 48h.</p>
        </div>
      </div>
    </div>
  </section>

  
  <section className="gracias-meanwhile">
    <div className="container" style={{padding:'0 24px'}}>
      <h2 className="gracias-meanwhile__title anim-fade-up">Mientras esperas</h2>
      <p className="gracias-meanwhile__sub anim-fade-up">Saca partido al tiempo. Estos recursos te ayudarán a llegar mejor preparado a la primera reunión.</p>
      <div className="gracias-cards">

        <Link to="/diagnostico" className="gracias-card anim-fade-up">
          <div className="gracias-card__icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
            </svg>
          </div>
          <p className="gracias-card__label">Herramienta gratuita</p>
          <h3 className="gracias-card__title">Haz el autodiagnóstico ENS</h3>
          <p className="gracias-card__desc">Evalúa tu nivel de cumplimiento actual en 10 minutos. Sin registro, sin compromiso.</p>
          <span className="gracias-card__arrow">Comenzar →</span>
        </Link>

        <Link to="/blog/que-es-el-ens" className="gracias-card anim-fade-up">
          <div className="gracias-card__icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
            </svg>
          </div>
          <p className="gracias-card__label">Guía completa</p>
          <h3 className="gracias-card__title">¿Qué es el ENS y por qué importa?</h3>
          <p className="gracias-card__desc">Todo lo que necesitas saber sobre el Esquema Nacional de Seguridad: categorías, plazos y obligaciones.</p>
          <span className="gracias-card__arrow">Leer guía →</span>
        </Link>

        <Link to="/calculadora-roi" className="gracias-card anim-fade-up">
          <div className="gracias-card__icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
            </svg>
          </div>
          <p className="gracias-card__label">Calculadora</p>
          <h3 className="gracias-card__title">Calcula el impacto económico</h3>
          <p className="gracias-card__desc">Estima cuántos contratos públicos abre el certificado ENS y el retorno esperado de la inversión.</p>
          <span className="gracias-card__arrow">Calcular →</span>
        </Link>

      </div>
    </div>
  </section>
    </>
  )
}
