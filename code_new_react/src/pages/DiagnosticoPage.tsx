import { useState, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'

const TOTAL_Q = 5

export default function DiagnosticoPage() {
  const [scores, setScores] = useState({ ens: 0, iso27001: 0, iso22301: 0, dora: 0 })
  const [tamano, setTamano] = useState('pequena')
  const [currentQ, setCurrentQ] = useState(1)
  const [selectedOptions, setSelectedOptions] = useState({})
  const [showResult, setShowResult] = useState(false)
  const [showProgressBar, setShowProgressBar] = useState(true)
  const [showLeadGate, setShowLeadGate] = useState(false)
  const [gateName, setGateName] = useState('')
  const [gateEmail, setGateEmail] = useState('')
  const [gateEmpresa, setGateEmpresa] = useState('')
  const containerRef = useRef(null)

  const scrollToQuiz = useCallback(() => {
    if (containerRef.current) {
      const top = containerRef.current.getBoundingClientRect().top + window.scrollY - 120
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }, [])

  const handleAnswer = (qNum, optionIndex, points) => {
    setSelectedOptions(prev => ({ ...prev, [qNum]: optionIndex }))

    setScores(prev => {
      const next = { ...prev }
      if (points.ens) next.ens += points.ens
      if (points.iso27001) next.iso27001 += points.iso27001
      if (points.iso22301) next.iso22301 += points.iso22301
      if (points.dora) next.dora += points.dora
      return next
    })

    if (points.tamano) setTamano(points.tamano)

    setTimeout(() => {
      if (qNum < TOTAL_Q) {
        setCurrentQ(qNum + 1)
        scrollToQuiz()
      } else {
        setShowLeadGate(true)
      }
    }, 380)
  }

  const handleShowResult = () => {
    setShowResult(true)
    setShowProgressBar(false)
    scrollToQuiz()
  }

  const handleLeadSubmit = (e) => {
    e.preventDefault()
    if (!gateName.trim() || !gateEmail.trim() || !gateEmpresa.trim()) return
    setShowLeadGate(false)
    handleShowResult()
  }

  const reiniciarQuiz = () => {
    setScores({ ens: 0, iso27001: 0, iso22301: 0, dora: 0 })
    setTamano('pequena')
    setCurrentQ(1)
    setSelectedOptions({})
    setShowResult(false)
    setShowProgressBar(true)
    scrollToQuiz()
  }

  const buildResult = () => {
    const recs = []
    if (scores.ens >= 3) {
      const nivel = tamano === 'micro' || tamano === 'pequena' ? 'Basica' : tamano === 'mediana' ? 'Media' : 'Media o Alta'
      recs.push({ key: 'ens', primary: true, badge: 'Recomendacion principal', title: `ENS — Categoria ${nivel}`, desc: `El Esquema Nacional de Seguridad es obligatorio para prestar servicios TIC a la Administracion Publica espanola. Con tu perfil, la categoria ${nivel} es la mas probable. Cubre el 35% de los contratos publicos TIC que exigen esta certificacion.`, link: '/ens', linkText: 'Mas sobre el ENS \u2192' })
    }
    if (scores.iso27001 >= 2) {
      recs.push({ key: 'iso27001', primary: scores.ens < 3, badge: scores.ens >= 3 ? 'Certificacion complementaria' : 'Recomendacion principal', title: 'ISO 27001', desc: 'El estandar internacional de seguridad de la informacion. Con la demanda que describes por parte de tus clientes, es practicamente un requisito de mercado. Abre puertas tanto en sector privado como en grandes corporaciones.', link: '/iso27001', linkText: 'Mas sobre ISO 27001 \u2192' })
    }
    if (scores.iso22301 >= 3) {
      recs.push({ key: 'iso22301', primary: false, badge: 'Certificacion recomendada', title: 'ISO 22301 — Continuidad de Negocio', desc: 'Dado el nivel de dependencia tecnologica que describes, un plan de continuidad de negocio certificado es fundamental. Protege a tu empresa ante interrupciones, reduce el RTO y el RPO, y demuestra resiliencia a tus clientes.', link: '/iso22301', linkText: 'Mas sobre ISO 22301 \u2192' })
    }
    if (scores.dora >= 3) {
      recs.push({ key: 'dora', primary: false, badge: 'Obligatorio para tu sector', title: 'DORA — Resiliencia Operacional Digital', desc: 'El Reglamento DORA es de cumplimiento obligatorio para entidades financieras y sus proveedores TIC criticos en la UE desde enero de 2025. Las sanciones por incumplimiento pueden alcanzar el 1% de la facturacion diaria.', link: '/dora', linkText: 'Mas sobre DORA \u2192' })
    }
    if (recs.length === 0) {
      recs.push({ key: 'iso27001', primary: true, badge: 'Punto de partida recomendado', title: 'ISO 27001', desc: 'Aunque tus respuestas no apuntan a una certificacion obligatoria inmediata, ISO 27001 es la base de cualquier programa de seguridad. Es el punto de partida mas versatil y el que mas valor aporta a largo plazo.', link: '/iso27001', linkText: 'Mas sobre ISO 27001 \u2192' })
    }
    return recs
  }

  const recs = showResult ? buildResult() : []
  const hasENS = recs.some(r => r.key === 'ens')
  const hasISO = recs.some(r => r.key === 'iso27001')

  const questions = [
    {
      id: 1,
      title: '\u00bfPrestais servicios tecnologicos a organismos publicos espanoles?',
      options: [
        { label: 'Si, es nuestro negocio principal', desc: 'La mayor parte de nuestros clientes son administraciones, organismos o entidades publicas', points: { ens: 4 } },
        { label: 'Si, pero es una parte pequena de nuestra facturacion', desc: 'Tenemos algun cliente publico pero no es nuestro perfil principal', points: { ens: 2 } },
        { label: 'No, trabajamos exclusivamente con el sector privado', desc: 'Todos nuestros clientes son empresas privadas', points: { iso27001: 2 } },
      ],
    },
    {
      id: 2,
      title: '\u00bfTus clientes os piden certificaciones de seguridad?',
      options: [
        { label: 'Si, cuestionarios de seguridad constantes', desc: 'Regularmente recibimos solicitudes de auditorias de seguridad o due diligence', points: { iso27001: 3 } },
        { label: 'Si, ya nos han pedido ISO 27001 especificamente', desc: 'Clientes concretos lo exigen como requisito para trabajar con nosotros', points: { iso27001: 4 } },
        { label: 'No todavia, pero lo anticipamos en el futuro', desc: 'Nuestro sector va en esa direccion o nuestros clientes crecen', points: { iso27001: 1 } },
        { label: 'No, nunca nos lo han pedido', desc: 'No es algo que surja en nuestras conversaciones comerciales', points: {} },
      ],
    },
    {
      id: 3,
      title: '\u00bfCuanto depende tu negocio de los sistemas TIC para operar?',
      options: [
        { label: 'Totalmente: una parada de 24h seria catastrofica', desc: 'Perdida de ingresos directa, incumplimiento de SLAs, impacto reputacional grave', points: { iso22301: 4 } },
        { label: 'Bastante, pero podriamos recuperarnos en dias', desc: 'Habria impacto importante pero sobreviviriamos con procesos manuales', points: { iso22301: 2 } },
        { label: 'Nuestras operaciones son bastante manuales o fisicas', desc: 'Un fallo de sistemas no seria un problema critico para nosotros', points: {} },
      ],
    },
    {
      id: 4,
      title: '\u00bfOperais en el sector financiero, seguros o sois proveedor TIC critico para esos sectores?',
      options: [
        { label: 'Si, somos entidad financiera o aseguradora', desc: 'Banco, aseguradora, gestora de fondos, plataforma de pagos u entidad supervisada por BCE/CNMV/DGS', points: { dora: 5 } },
        { label: 'Si, somos proveedor TIC critico para entidades financieras', desc: 'Proveemos software, cloud, infraestructura o servicios gestionados a bancos o aseguradoras', points: { dora: 3 } },
        { label: 'No, estamos en otro sector', desc: 'Nuestros clientes no son entidades supervisadas por reguladores financieros', points: {} },
      ],
    },
    {
      id: 5,
      title: '\u00bfCuantos empleados teneis actualmente?',
      options: [
        { label: 'Menos de 10 empleados', desc: 'Microempresa — ENS Basica, procesos agiles', points: { tamano: 'micro' } },
        { label: '10 a 49 empleados', desc: 'Pequena empresa — ENS Basica o Media segun servicios', points: { tamano: 'pequena' } },
        { label: '50 a 249 empleados', desc: 'Mediana empresa — ENS Media habitualmente', points: { tamano: 'mediana' } },
        { label: '250 o mas empleados', desc: 'Gran empresa — ENS Media o Alta, posible stack completo', points: { tamano: 'grande' } },
      ],
    },
  ]

  return (
    <>
      <style>{`
        .quiz-container { max-width: 700px; margin: 0 auto; padding: 0 40px; }
        .quiz-progress-bar { height: 3px; background: var(--border); margin-bottom: 56px; position: relative; overflow: hidden; }
        .quiz-progress-bar__fill { position: absolute; left: 0; top: 0; bottom: 0; background: var(--gold); transition: width 0.45s cubic-bezier(0.4,0,0.2,1); }
        .quiz-progress-label { font-family: var(--font-sans); font-size: 11px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--gold); margin-bottom: 12px; }
        .quiz-question { animation: quizFade 0.3s ease; }
        @keyframes quizFade { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .quiz-q-title { font-family: var(--font-serif); font-size: clamp(26px, 3.5vw, 40px); font-weight: 400; color: var(--navy); line-height: 1.2; margin-bottom: 40px; }
        .quiz-options { display: flex; flex-direction: column; gap: 12px; }
        .quiz-option { border: 1px solid var(--border); padding: 20px 24px; cursor: pointer; transition: all 0.2s; display: flex; align-items: center; gap: 16px; background: var(--white); }
        .quiz-option:hover { border-color: var(--gold); background: var(--pearl); }
        .quiz-option.selected { border-color: var(--navy); background: var(--pearl); }
        .quiz-option__radio { width: 20px; height: 20px; border: 1px solid var(--border); border-radius: 50%; flex-shrink: 0; transition: all 0.2s; position: relative; }
        .quiz-option.selected .quiz-option__radio { border-color: var(--navy); background: var(--navy); }
        .quiz-option.selected .quiz-option__radio::after { content: ''; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 8px; height: 8px; border-radius: 50%; background: var(--white); }
        .quiz-option__label { font-family: var(--font-sans); font-size: 15px; font-weight: 500; color: var(--navy); margin-bottom: 2px; }
        .quiz-option__desc { font-family: var(--font-sans); font-size: 13px; color: var(--text-muted); }
        .cert-card { border: 1px solid var(--border); padding: 28px 32px; margin-bottom: 16px; position: relative; transition: border-color 0.2s; }
        .cert-card--primary { border-color: var(--navy); border-left: 4px solid var(--gold); }
        .cert-card__badge { font-family: var(--font-sans); font-size: 10px; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: var(--white); background: var(--navy); padding: 3px 10px; margin-bottom: 12px; display: inline-block; }
        .cert-card--primary .cert-card__badge { background: var(--gold); color: var(--navy); }
        .cert-card__title { font-family: var(--font-serif); font-size: 26px; font-weight: 400; color: var(--navy); margin-bottom: 6px; }
        .cert-card__desc { font-family: var(--font-sans); font-size: 14px; color: var(--text-muted); line-height: 1.6; margin-bottom: 16px; }
        .cert-card__link { font-family: var(--font-sans); font-size: 12px; font-weight: 500; letter-spacing: 0.06em; color: var(--navy); text-decoration: none; border-bottom: 1px solid var(--gold); padding-bottom: 1px; transition: color 0.2s; }
        .cert-card__link:hover { color: var(--gold); }
        .synergy-box { background: linear-gradient(135deg, var(--navy) 0%, #2D3F6B 100%); padding: 32px 36px; margin: 32px 0; display: flex; align-items: flex-start; gap: 20px; }
        .synergy-box__icon { font-size: 28px; flex-shrink: 0; margin-top: 2px; }
        .synergy-box__title { font-family: var(--font-serif); font-size: 20px; font-weight: 400; color: var(--white); margin-bottom: 6px; }
        .synergy-box__text { font-family: var(--font-sans); font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.6; }
        @media (max-width: 600px) { .quiz-container { padding: 0 20px; } .quiz-option { padding: 16px 18px; } .cert-card { padding: 22px 20px; } .synergy-box { flex-direction: column; gap: 12px; } }
      `}</style>

      {/* HERO */}
      <section style={{ background: 'var(--navy)', padding: '100px 0 64px', textAlign: 'center' }}>
        <div className="container">
          <span className="label-tag" style={{ textAlign: 'center', display: 'block' }}>Autodiagnostico gratuito</span>
          <div className="gold-line gold-line--center"></div>
          <h1 className="display-title" style={{ color: 'var(--white)', textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
            \u00bfQue certificacion necesita<br /><em>tu empresa?</em>
          </h1>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', color: 'rgba(255,255,255,0.5)', marginTop: '24px', maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.65 }}>5 preguntas · 2 minutos · Hoja de ruta personalizada</p>
        </div>
      </section>

      {/* QUIZ */}
      <section style={{ background: 'var(--white)', padding: '80px 0 100px' }}>
        <div className="quiz-container" ref={containerRef}>

          {/* Progress */}
          {showProgressBar && (
            <>
              <div style={{ marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <p className="quiz-progress-label">Pregunta {currentQ} de {TOTAL_Q}</p>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', color: 'var(--text-muted)' }}>Tu resultado en 2 min</p>
              </div>
              <div className="quiz-progress-bar">
                <div className="quiz-progress-bar__fill" style={{ width: `${(currentQ / TOTAL_Q) * 100}%` }}></div>
              </div>
            </>
          )}

          {/* Questions */}
          {!showResult && questions.map((q) => (
            currentQ === q.id && (
              <div className="quiz-question" key={q.id}>
                <h2 className="quiz-q-title">{q.title}</h2>
                <div className="quiz-options">
                  {q.options.map((opt, oi) => (
                    <div
                      key={oi}
                      className={`quiz-option${selectedOptions[q.id] === oi ? ' selected' : ''}`}
                      onClick={() => handleAnswer(q.id, oi, opt.points)}
                    >
                      <div className="quiz-option__radio"></div>
                      <div>
                        <p className="quiz-option__label">{opt.label}</p>
                        <p className="quiz-option__desc">{opt.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}

          {/* RESULT */}
          {showResult && (
            <div className="quiz-question">
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '6px' }}>Tu hoja de ruta</p>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '36px', fontWeight: 400, color: 'var(--navy)', marginBottom: '8px', lineHeight: 1.1 }}>Tu empresa necesita...</h2>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'var(--text-muted)', marginBottom: '40px', lineHeight: 1.65 }}>Basado en tus respuestas, esta es la certificacion (o combinacion) mas adecuada para tu situacion.</p>

              {recs.map((r, i) => (
                <div key={i} className={`cert-card${r.primary ? ' cert-card--primary' : ''}`}>
                  <span className="cert-card__badge">{r.badge}</span>
                  <h3 className="cert-card__title">{r.title}</h3>
                  <p className="cert-card__desc">{r.desc}</p>
                  <Link to={r.link} className="cert-card__link">{r.linkText}</Link>
                </div>
              ))}

              {hasENS && hasISO && (
                <div className="synergy-box">
                  <div className="synergy-box__icon">{'\u2726'}</div>
                  <div>
                    <p className="synergy-box__title">El 65% del trabajo ya esta hecho si empiezas por el ENS</p>
                    <p className="synergy-box__text">ENS e ISO 27001 comparten la mayoria de controles. Si obtienes el ENS primero, la certificacion ISO 27001 requiere solo un esfuerzo incremental del 35% adicional. Avson gestiona ambas en un proceso unificado para maximizar eficiencia.</p>
                  </div>
                </div>
              )}

              <div style={{ background: 'var(--navy)', padding: '40px 40px 44px', textAlign: 'center', marginTop: '8px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '26px', fontWeight: 400, color: 'var(--white)', lineHeight: 1.3, marginBottom: '8px' }}>Confirma tu hoja de ruta<br /><em>con un consultor</em></h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6, marginBottom: '32px', maxWidth: '420px', marginLeft: 'auto', marginRight: 'auto' }}>Este autodiagnostico es una orientacion. En 30 minutos validamos tu situacion exacta y definimos el plan mas eficiente.</p>
                <Link to="/contacto" style={{ display: 'inline-block', fontFamily: 'var(--font-sans)', fontSize: '12px', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy)', background: 'var(--gold)', border: '1px solid var(--gold)', padding: '16px 40px', textDecoration: 'none', transition: 'opacity 0.2s' }}>Hablar con un consultor &rarr;</Link>
              </div>

              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)', marginTop: '16px', lineHeight: 1.65, fontStyle: 'italic' }}>*Las recomendaciones son orientativas y no sustituyen un diagnostico tecnico personalizado. La categoria ENS exacta depende de los sistemas y servicios que gestiona tu empresa.</p>

              <div style={{ textAlign: 'center', marginTop: '28px' }}>
                <button onClick={reiniciarQuiz} style={{ fontFamily: 'var(--font-sans)', fontSize: '12px', color: 'var(--text-muted)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>&larr; Volver a empezar</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* LEAD GATE MODAL */}
      {showLeadGate && (
        <div style={{ display: 'flex', position: 'fixed', inset: 0, background: 'rgba(26,39,68,0.82)', zIndex: 9999, alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div style={{ background: 'var(--white)', maxWidth: '480px', width: '100%', padding: '48px 40px', position: 'relative' }}>
            <span style={{ fontFamily: 'var(--font-sans)', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', display: 'block', marginBottom: '12px' }}>Tu diagnostico esta listo</span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px,3vw,32px)', fontWeight: 400, color: 'var(--navy)', marginBottom: '12px', lineHeight: 1.2 }}>\u00bfDonde te enviamos el resultado?</h2>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.9rem', color: 'var(--navy-60)', lineHeight: 1.6, marginBottom: '32px' }}>Te enviamos la hoja de ruta personalizada con las certificaciones recomendadas y los proximos pasos para tu empresa.</p>
            <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <input type="text" placeholder="Tu nombre" required value={gateName} onChange={e => setGateName(e.target.value)}
                style={{ width: '100%', padding: '14px 18px', border: '1.5px solid #D8D8D8', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--navy)', background: 'var(--white)', outline: 'none', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = '#C9A84C'} onBlur={e => e.target.style.borderColor = '#D8D8D8'} />
              <input type="email" placeholder="tu@empresa.com" required value={gateEmail} onChange={e => setGateEmail(e.target.value)}
                style={{ width: '100%', padding: '14px 18px', border: '1.5px solid #D8D8D8', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--navy)', background: 'var(--white)', outline: 'none', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = '#C9A84C'} onBlur={e => e.target.style.borderColor = '#D8D8D8'} />
              <input type="text" placeholder="Nombre de tu empresa" required value={gateEmpresa} onChange={e => setGateEmpresa(e.target.value)}
                style={{ width: '100%', padding: '14px 18px', border: '1.5px solid #D8D8D8', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', color: 'var(--navy)', background: 'var(--white)', outline: 'none', boxSizing: 'border-box' }}
                onFocus={e => e.target.style.borderColor = '#C9A84C'} onBlur={e => e.target.style.borderColor = '#D8D8D8'} />
              <button type="submit" style={{ background: 'var(--navy)', color: 'var(--white)', border: 'none', padding: '18px 32px', fontFamily: 'var(--font-sans)', fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.04em', cursor: 'pointer', transition: 'opacity 0.2s', width: '100%' }}
                onMouseOver={e => e.target.style.opacity = '0.88'} onMouseOut={e => e.target.style.opacity = '1'}>
                Ver mi hoja de ruta &rarr;
              </button>
              <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.75rem', color: 'var(--navy-60)', textAlign: 'center', margin: 0 }}>Sin spam. Solo usamos tu email para enviarte el diagnostico.</p>
            </form>
          </div>
        </div>
      )}
    </>
  )
}
