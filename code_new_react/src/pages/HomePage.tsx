import { useState, useRef, FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const navigate = useNavigate()
  const nombreRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)

  const handleHeroSubmit = (e: FormEvent) => {
    e.preventDefault()
    const nombre = nombreRef.current?.value || ''
    navigate(`/gracias?nombre=${encodeURIComponent(nombre)}&source=hero`)
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* ══════════════════════════════════
           HERO
      ══════════════════════════════════ */}
      <section className="v3-hero">
        <div className="v3-hero__inner">

          <div className="v3-hero__left">
            {/* Sectors: WHO this is for — before the H1 */}
            <div className="v3-hero__sectors v3-hero__sectors--top">
              <span>Tecnología</span><span>Cloud</span><span>Software</span><span>Telecomunicaciones</span><span>Consultoría</span><span>Mantenimiento</span>
            </div>
            <div className="v3-fomo-chip">⚠ El 85% de empresas sin ENS pierde sus licitaciones públicas</div>
            <h1 className="v3-hero__h1">
              Tu certificado ENS,<br />
              <em>con garantía de devolución.</em>
            </h1>
            <p className="v3-hero__sub">
              <strong>Los únicos del mercado que lo garantizan por escrito.</strong> Si no obtienes el certificado ENS, te devolvemos el dinero. Firmado en el contrato.
            </p>
          </div>

          <div className="v3-hero__right">
            <div className="v3-lead-card">
              <div className="v3-lead-card__header">
                <span className="v3-live-badge">🟢 Te llamamos hoy mismo</span>
                <p className="v3-lead-card__title">Habla con un experto</p>
                <p className="v3-lead-card__sub">Gratuito · Sin compromiso · En 30 minutos sabrás qué necesitas</p>
              </div>
              <form className="v3-form" id="heroForm" onSubmit={handleHeroSubmit}>
                <input type="text" id="fNombre" name="nombre" placeholder="Tu nombre *" autoComplete="given-name" required className="v3-form__input" ref={nombreRef} />
                <input type="email" id="fEmail" name="email" placeholder="Tu email *" autoComplete="email" required className="v3-form__input" ref={emailRef} />
                <div className="v3-form__rgpd">
                  <input type="checkbox" id="fRgpd" required />
                  <label htmlFor="fRgpd">Al enviar, acepto que Avson me contacte para responder mi consulta. <Link to="/privacidad" target="_blank">Política de privacidad</Link></label>
                </div>
                <button type="submit" className="v3-btn v3-btn--gold v3-btn--full v3-btn--xl v3-btn--pulse">Habla con un experto →</button>
                <p className="v3-form__lock">🔒 Gratuito · Sin compromiso · Confidencial</p>
              </form>
              <div className="v3-lead-card__phone">
                ¿Prefieres escribirnos? <a href="mailto:hello@avson.eu">hello@avson.eu</a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════
           STATS — cada dato aparece UNA VEZ
      ══════════════════════════════════ */}
      {/* Tira única de confianza (stats + valoración fusionados) */}
      <div className="v3-stats">
        <div className="v3-stats__item">
          <strong className="v3-counter" data-target="355" data-suffix="+">355+</strong><span>empresas certificadas</span>
        </div>
        <div className="v3-stats__sep"></div>
        <div className="v3-stats__item">
          <strong>100%</strong><span>tasa de éxito</span>
        </div>
        <div className="v3-stats__sep"></div>
        <div className="v3-stats__item">
          <strong>4.9★</strong><span>valoración de clientes</span>
        </div>
        <div className="v3-stats__sep"></div>
        <div className="v3-stats__item">
          <strong>30 días</strong><span>con ENS Express</span>
        </div>
      </div>

      {/* ══════════════════════════════════
           ¿QUÉ ES EL ENS? — para el que no sabe nada
      ══════════════════════════════════ */}
      <section className="v3-section v3-section--pearl">
        <div className="v3-container">
          <div className="v3-ens-explain">
            <div className="v3-ens-explain__text">
              <span className="v3-label">¿Qué es el ENS?</span>
              <h2 className="v3-h2">El certificado que el Estado exige para vender al sector público.</h2>
              <p><strong>Sin él, tu oferta no se abre.</strong> Sin excepciones. Sin importar lo buena que sea tu propuesta.</p>
              <p>Obligatorio para: tecnología, cloud, software, telecomunicaciones, consultoría, mantenimiento y seguridad para organismos públicos.</p>
              <Link to="/packs" className="v3-btn v3-btn--navy">Calcula tu presupuesto →</Link>
            </div>
            <div className="v3-ens-explain__fear">
              <div className="v3-fear-card">
                <div className="v3-fear-card__num">85%</div>
                <p>de empresas sin ENS pierde licitaciones antes de que lean su oferta</p>
              </div>
              <div className="v3-fear-card">
                <div className="v3-fear-card__num">3.200M€</div>
                <p>mueve el sector TIC público en España. Sin ENS, no entras.</p>
              </div>
              <div className="v3-fear-card">
                <div className="v3-fear-card__num">4 de cada 5</div>
                <p>pliegos TIC lo exigen como requisito eliminatorio. El resto, lo valorará.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
           ENS EXPRESS — producto estrella
           (urgencia aparece UNA VEZ, aquí)
      ══════════════════════════════════ */}
      <section className="v3-express-hero">
        <div className="v3-container">
          <div className="v3-express-inner">
            <div className="v3-express-text">
              <span className="v3-label v3-label--gold">⚡ Producto estrella</span>
              <h2 className="v3-h2 v3-h2--white">ENS Express.<br />Para cuando no puedes esperar.</h2>
              <p className="v3-express-sub">¿Tienes un pliego que cierra pronto? Equipo dedicado exclusivamente a tu proyecto. Arranque en 24 horas.</p>
              <Link to="/contacto" className="v3-btn v3-btn--gold v3-btn--lg">Lo necesito urgente →</Link>
            </div>
            <div className="v3-express-card">
              <p className="v3-express-card__label">¿Cuándo lo necesitas?</p>
              <div className="v3-express-urgency">
                <div className="v3-urgency-item v3-urgency-item--red">
                  <span className="v3-urgency-dot"></span>
                  <div>
                    <strong>Urgente</strong>
                    <span>Pliego cierra en menos de 8 semanas → ENS Express</span>
                  </div>
                </div>
                <div className="v3-urgency-item">
                  <span className="v3-urgency-dot v3-urgency-dot--amber"></span>
                  <div>
                    <strong>Sin urgencia</strong>
                    <span>Sin pliego inminente → ENS estándar</span>
                  </div>
                </div>
              </div>
              <Link to="/ens-express" className="v3-btn v3-btn--gold v3-btn--full" style={{marginTop:'20px'}}>Ver cómo funciona →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
           PACKS — directo, sin chapa
      ══════════════════════════════════ */}
      <section className="v3-section v3-section--white" id="packs">
        <div className="v3-container">
          <span className="v3-label">Packs de certificación</span>
          <h2 className="v3-h2">Elige tu pack.<br /><em>Empezamos hoy.</em></h2>
          <div className="v3-packs">

            <article className="v3-pack-card">
              <span className="v3-pack-badge">Acceso al sector público</span>
              <h3>ENS</h3>
              <p>Básica · Media · Alta según tu pliego</p>
              <Link to="/contacto" className="v3-btn v3-btn--gold v3-btn--full">Me interesa →</Link>
            </article>

            <article className="v3-pack-card v3-pack-card--featured">
              <span className="v3-pack-badge v3-pack-badge--gold">⭐ El más solicitado</span>
              <h3>ENS + ISO 27001</h3>
              <p>Dos certificaciones, un proyecto. Ahorro real.</p>
              <Link to="/contacto" className="v3-btn v3-btn--gold v3-btn--full">Me interesa →</Link>
            </article>

            <article className="v3-pack-card">
              <span className="v3-pack-badge">Servicios críticos</span>
              <h3>ENS + ISO 22301</h3>
              <p>Continuidad de negocio certificada</p>
              <Link to="/contacto" className="v3-btn v3-btn--gold v3-btn--full">Me interesa →</Link>
            </article>

            <article className="v3-pack-card">
              <span className="v3-pack-badge">Cobertura total</span>
              <h3>Pack Triple</h3>
              <p>ENS + ISO 27001 + ISO 22301</p>
              <Link to="/contacto" className="v3-btn v3-btn--gold v3-btn--full">Me interesa →</Link>
            </article>

          </div>
          <p className="v3-packs-note">¿DORA, NIS2 o TISAX? <Link to="/contacto">Pregúntanos →</Link></p>
        </div>
      </section>

      {/* ══════════════════════════════════
           TESTIMONIOS — resultados reales
      ══════════════════════════════════ */}
      <section className="v3-section v3-section--pearl">
        <div className="v3-container">
          <span className="v3-label">Lo que dicen nuestros clientes</span>
          <h2 className="v3-h2">Resultados reales.<br /><em>0 fracasos.</em></h2>
          <div className="v3-testimonials">

            <article className="v3-testi">
              <div className="v3-testi__stars">★★★★★</div>
              <blockquote>"Llevábamos dos años perdiendo licitaciones por no tener el ENS. Avson nos lo resolvió en <strong>9 semanas</strong>. Al siguiente concurso, ganamos el contrato."</blockquote>
              <footer>
                <div className="v3-testi__avatar">JM</div>
                <div>
                  <strong>Javier M.</strong>
                  <span>Director de Sistemas · Integradora TIC, Madrid</span>
                </div>
                <div className="v3-testi__result">ENS Media ✓</div>
              </footer>
            </article>

            <article className="v3-testi">
              <div className="v3-testi__stars">★★★★★</div>
              <blockquote>"Otros consultores nos dijeron que tardaría un año. Avson lo hizo en <strong>14 semanas</strong> y superamos la auditoría ENAC a la primera."</blockquote>
              <footer>
                <div className="v3-testi__avatar v3-testi__avatar--navy">SR</div>
                <div>
                  <strong>Silvia R.</strong>
                  <span>CISO · Proveedor cloud sector público</span>
                </div>
                <div className="v3-testi__result">ENS Alta + ISO 27001 ✓</div>
              </footer>
            </article>

            <article className="v3-testi">
              <div className="v3-testi__stars">★★★★★</div>
              <blockquote>"Ningún otro proveedor ponía la garantía por escrito. Avson sí. El proceso duró <strong>7 semanas</strong> y sin una sola incidencia en la auditoría."</blockquote>
              <footer>
                <div className="v3-testi__avatar v3-testi__avatar--green">AD</div>
                <div>
                  <strong>Andrés D.</strong>
                  <span>CEO · Consultora tecnológica</span>
                </div>
                <div className="v3-testi__result">ENS Básica ✓</div>
              </footer>
            </article>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
           FAQ — maneja objeciones
      ══════════════════════════════════ */}
      <section className="v3-section v3-section--white">
        <div className="v3-container v3-faq-wrap">
          <div className="v3-faq-header">
            <span className="v3-label">Preguntas frecuentes</span>
            <h2 className="v3-h2">Lo que todos<br /><em>preguntan primero.</em></h2>
            <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',color:'var(--text-muted)',lineHeight:1.6,marginTop:'8px'}}>¿No está tu pregunta? <Link to="/contacto" style={{color:'var(--navy)',fontWeight:600}}>Habla con un experto →</Link></p>
          </div>
          <div className="v3-faq-list">
            <div className={`v3-faq-q${openFaq === 0 ? ' open' : ''}`}>
              <button onClick={() => toggleFaq(0)}>¿Cuánto cuesta la consultoría ENS? <span>{openFaq === 0 ? '−' : '+'}</span></button>
              <div className="v3-faq-a" hidden={openFaq !== 0}><p>El coste depende del tamaño de la empresa, la categoría ENS (Básica, Media o Alta) y los sistemas en alcance. No publicamos tarifas fijas porque cada proyecto es diferente. En la llamada gratuita de 30 minutos te orientamos el presupuesto. Proyectos adaptados a pymes y a enterprise.</p></div>
            </div>
            <div className={`v3-faq-q${openFaq === 1 ? ' open' : ''}`}>
              <button onClick={() => toggleFaq(1)}>¿Qué incluye exactamente la garantía de éxito? <span>{openFaq === 1 ? '−' : '+'}</span></button>
              <div className="v3-faq-a" hidden={openFaq !== 1}><p>Si no superas la auditoría de certificación por causas imputables a nuestra consultoría, te devolvemos el dinero. Sin letra pequeña. Consta por escrito en el contrato desde el primer día. Somos los únicos del mercado que ofrecen esta garantía firmada.</p></div>
            </div>
            <div className={`v3-faq-q${openFaq === 2 ? ' open' : ''}`}>
              <button onClick={() => toggleFaq(2)}>Si ya tengo ISO 27001, ¿cuánto trabajo queda para el ENS? <span>{openFaq === 2 ? '−' : '+'}</span></button>
              <div className="v3-faq-a" hidden={openFaq !== 2}><p>El 65-70% del trabajo ya está hecho. ISO 27001 e ENS comparten la mayoría de controles y documentación. El proceso de adaptación es significativamente más corto y económico que empezar desde cero.</p></div>
            </div>
            <div className={`v3-faq-q${openFaq === 3 ? ' open' : ''}`}>
              <button onClick={() => toggleFaq(3)}>¿Es obligatorio el ENS para proveedores del sector público? <span>{openFaq === 3 ? '−' : '+'}</span></button>
              <div className="v3-faq-a" hidden={openFaq !== 3}><p>Sí. El RD 311/2022 lo establece como requisito para la Administración Pública y sus proveedores TIC. Más del 80% de los pliegos TIC ya incluyen el ENS como criterio eliminatorio. Sin él, tu oferta no se abre.</p></div>
            </div>
            <div className={`v3-faq-q${openFaq === 4 ? ' open' : ''}`}>
              <button onClick={() => toggleFaq(4)}>¿Qué diferencia hay entre el ENS y la ISO 27001? <span>{openFaq === 4 ? '−' : '+'}</span></button>
              <div className="v3-faq-a" hidden={openFaq !== 4}><p>El ENS es obligatorio para vender al sector público español. La ISO 27001 es el estándar internacional reconocido en el mercado privado y en contratos enterprise europeos. Comparten el 65% de controles. Muchas empresas implementan ambos en un solo proyecto con Avson, ahorrando tiempo y coste.</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════
           CTA FINAL — ángulo distinto al hero
           (facilidad del siguiente paso)
      ══════════════════════════════════ */}
      <section className="v3-section v3-section--navy v3-cta-final">
        <div className="v3-container">
          <h2 className="v3-h2 v3-h2--white">Un experto te responde hoy.<br /><em>Sin papeles. Sin esperar.</em></h2>
          <p className="v3-cta-final__sub">En 30 minutos sabes exactamente qué necesitas y cuándo lo tienes.</p>
          <Link to="/contacto" className="v3-btn v3-btn--gold v3-btn--xl v3-btn--pulse">Habla con un experto →</Link>
        </div>
      </section>
    </>
  )
}
