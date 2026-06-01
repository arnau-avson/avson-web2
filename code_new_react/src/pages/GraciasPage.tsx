import { Link, useSearchParams } from 'react-router-dom'

export default function GraciasPage() {
  const [searchParams] = useSearchParams()
  const nombre = searchParams.get('nombre')

  const displayTitle = nombre
    ? `${nombre.charAt(0).toUpperCase() + nombre.slice(1)}, tu solicitud ha llegado.`
    : 'Tu solicitud ha llegado.'

  return (
    <>
      <section className="gracias-hero">
        <div className="container" style={{ maxWidth: '720px', padding: '0 24px' }}>
          <div className="gracias-hero__check anim-fade-up">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M7 18.5L14.5 26L29 11" stroke="#C9A84C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="anim-fade-up">{displayTitle}<br /><em>Te llamamos hoy.</em></h1>
          <p className="gracias-hero__subtitle anim-fade-up">
            Te contactamos en menos de 24 horas para organizar tu diagnóstico gratuito.
          </p>
        </div>
      </section>

      <section className="gracias-steps">
        <div className="container" style={{ padding: '0 24px' }}>
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
        <div className="container" style={{ padding: '0 24px' }}>
          <h2 className="gracias-meanwhile__title anim-fade-up">Mientras esperas</h2>
          <p className="gracias-meanwhile__sub anim-fade-up">Saca partido al tiempo. Estos recursos te ayudarán a llegar mejor preparado a la primera reunión.</p>
          <div className="gracias-cards">

            <Link to="/diagnostico" className="gracias-card anim-fade-up">
              <div className="gracias-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11l3 3L22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </div>
              <p className="gracias-card__label">Herramienta gratuita</p>
              <h3 className="gracias-card__title">Haz el autodiagnóstico ENS</h3>
              <p className="gracias-card__desc">Evalúa tu nivel de cumplimiento actual en 10 minutos. Sin registro, sin compromiso.</p>
              <span className="gracias-card__arrow">Comenzar →</span>
            </Link>

            <Link to="/blog/que-es-el-ens" className="gracias-card anim-fade-up">
              <div className="gracias-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <p className="gracias-card__label">Guía completa</p>
              <h3 className="gracias-card__title">¿Qué es el ENS y por qué importa?</h3>
              <p className="gracias-card__desc">Todo lo que necesitas saber sobre el Esquema Nacional de Seguridad: categorías, plazos y obligaciones.</p>
              <span className="gracias-card__arrow">Leer guía →</span>
            </Link>

            <Link to="/calculadora-roi" className="gracias-card anim-fade-up">
              <div className="gracias-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" /><line x1="8" y1="21" x2="16" y2="21" /><line x1="12" y1="17" x2="12" y2="21" />
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
