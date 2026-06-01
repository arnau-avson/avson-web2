import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'

const BASE_CONTRATOS: Record<string, number> = { micro: 120000, pequeña: 380000, mediana: 950000, grande: 2800000 }
const LICITA_MULT: Record<string, number> = { si: 1.4, intentado: 1.0, quiero: 0.7 }
const PERDIDO_MULT: Record<string, number> = { si_varios: 1.6, si_alguno: 1.2, no_sabemos: 0.9 }
const VALOR_MULT: Record<string, number> = { '50k': 0.7, '200k': 1.0, '500k': 1.5, '1m': 2.2 }

const fmt = new Intl.NumberFormat('es-ES', { style: 'currency', currency: 'EUR', maximumFractionDigits: 0 })

interface Selections {
  size: string
  sector: string
  licita: string
  perdido: string
  valor: string
}

export default function CalculadoraRoiPage() {
  const [step, setStep] = useState(1)
  const [sel, setSel] = useState<Partial<Selections>>({})
  const [sliderVal, setSliderVal] = useState(20)
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [result, setResult] = useState<{ perdida: number; potenciales: string; ens: string; formatted: string } | null>(null)
  const [showGate, setShowGate] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  function selectPill(group: keyof Selections, val: string) {
    setSel(prev => ({ ...prev, [group]: val }))
    const errMap: Record<string, string> = { size: 'err1', sector: 'err1', licita: 'err2', perdido: 'err3', valor: 'err3' }
    setErrors(prev => ({ ...prev, [errMap[group]]: false }))
  }

  function scrollToCalc() {
    if (containerRef.current) {
      const top = containerRef.current.getBoundingClientRect().top + window.scrollY - 120
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  function goStep(n: number) {
    if (n === 2 && !sel.size) { setErrors(prev => ({ ...prev, err1: true })); return }
    if (n === 3 && !sel.licita) { setErrors(prev => ({ ...prev, err2: true })); return }
    setStep(n)
    setTimeout(scrollToCalc, 50)
  }

  function calcular() {
    if (!sel.valor) { setErrors(prev => ({ ...prev, err3: true })); return }

    const pctSlider = sliderVal / 100
    const base = BASE_CONTRATOS[sel.size || 'pequeña'] || 380000

    let perdida = base * pctSlider * 0.35 * 0.18
    perdida *= (LICITA_MULT[sel.licita || ''] || 1.0)
    perdida *= (PERDIDO_MULT[sel.perdido || ''] || 0.9)
    perdida *= (VALOR_MULT[sel.valor || ''] || 1.0)
    perdida = Math.round(perdida / 1000) * 1000
    perdida = Math.max(perdida, 3000)

    const potenciales = fmt.format(Math.round((base * pctSlider) / 1000) * 1000)
    const ens = fmt.format(Math.round((base * pctSlider * 0.35) / 1000) * 1000)

    setResult({ perdida, potenciales, ens, formatted: fmt.format(perdida) })
    setShowGate(true)
  }

  function showResult() {
    setShowGate(false)
    setStep(4) // result step
    setTimeout(scrollToCalc, 50)
  }

  function reiniciar() {
    setSel({})
    setSliderVal(20)
    setErrors({})
    setResult(null)
    setStep(1)
    setTimeout(scrollToCalc, 50)
  }

  function handleLeadSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    showResult()
  }

  const progressClass = (n: number) => {
    if (step > n || step === 4) return 'calc-progress__step done'
    if (step === n) return 'calc-progress__step active'
    return 'calc-progress__step'
  }

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `/* ── Calculadora ROI ── */
    .calc-container { max-width: 720px; margin: 0 auto; padding: 0 40px; }
    .calc-progress { display: flex; align-items: flex-start; gap: 0; margin-bottom: 56px; }
    .calc-progress__step { flex: 1; position: relative; padding-top: 28px; }
    .calc-progress__step::before { content: ''; display: block; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: var(--border); transition: background 0.35s; }
    .calc-progress__step.active::before { background: var(--gold); }
    .calc-progress__step.done::before   { background: var(--navy); }
    .calc-progress__label { font-family: var(--font-sans); font-size: 10px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: var(--text-muted); transition: color 0.35s; }
    .calc-progress__step.active .calc-progress__label { color: var(--gold); }
    .calc-progress__step.done .calc-progress__label   { color: var(--navy); }
    .calc-step { animation: calcFadeIn 0.35s ease; }
    @keyframes calcFadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
    .pill-group { display: flex; flex-wrap: wrap; gap: 10px; margin-top: 16px; }
    .pill { font-family: var(--font-sans); font-size: 13px; font-weight: 400; color: var(--navy); border: 1px solid var(--border); padding: 10px 20px; cursor: pointer; transition: all 0.2s; background: var(--white); user-select: none; }
    .pill:hover { border-color: var(--gold); }
    .pill.selected { background: var(--navy); color: var(--white); border-color: var(--navy); }
    .calc-question { font-family: var(--font-sans); font-size: 12px; font-weight: 500; letter-spacing: 0.07em; text-transform: uppercase; color: var(--text-muted); margin-bottom: 4px; margin-top: 36px; }
    .calc-question:first-child { margin-top: 0; }
    .slider-wrap { margin-top: 16px; }
    .slider-val { font-family: var(--font-serif); font-size: 52px; font-weight: 300; color: var(--navy); line-height: 1; margin-bottom: 12px; }
    input[type=range] { width: 100%; accent-color: var(--gold); height: 4px; cursor: pointer; }
    .slider-labels { display: flex; justify-content: space-between; font-family: var(--font-sans); font-size: 11px; color: var(--text-muted); margin-top: 6px; }
    .calc-nav { display: flex; justify-content: space-between; align-items: center; margin-top: 56px; padding-top: 32px; border-top: 1px solid var(--border); }
    .btn-calc-next { font-family: var(--font-sans); font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: var(--white); background: var(--navy); border: none; padding: 14px 32px; cursor: pointer; transition: background 0.2s; }
    .btn-calc-next:hover { background: var(--navy-light); }
    .btn-calc-back { font-family: var(--font-sans); font-size: 12px; color: var(--text-muted); background: none; border: none; cursor: pointer; padding: 0; transition: color 0.2s; }
    .btn-calc-back:hover { color: var(--navy); }
    .result-number { font-family: var(--font-serif); font-size: clamp(52px, 8vw, 88px); font-weight: 300; color: var(--navy); line-height: 1; margin: 20px 0 6px; }
    .calc-error { font-family: var(--font-sans); font-size: 12px; color: #c0392b; margin-top: 12px; display: none; }
    .calc-error.visible { display: block; }
    .desglose-row { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px solid var(--border); font-family: var(--font-sans); font-size: 14px; color: var(--text-body); }
    .desglose-row:last-child { border-bottom: none; }
    .desglose-row strong { font-weight: 600; color: var(--navy); }
    @media (max-width: 600px) { .calc-container { padding: 0 20px; } .calc-question { margin-top: 28px; } .slider-val { font-size: 40px; } }` }} />

<section style={{background:'var(--navy)',padding:'100px 0 64px',textAlign:'center'}}>
  <div className="container">
    <span className="label-tag" style={{textAlign:'center',display:'block'}}>Herramienta gratuita</span>
    <div className="gold-line gold-line--center"></div>
    <h1 className="display-title" style={{color:'var(--white)',textAlign:'center',maxWidth:'700px',margin:'0 auto'}}>
      ¿Cuánto dinero pierde tu empresa<br /><em>sin el certificado ENS?</em>
    </h1>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',color:'rgba(255,255,255,0.5)',marginTop:'24px',maxWidth:'480px',marginLeft:'auto',marginRight:'auto',lineHeight:'1.65'}}>3 preguntas · 2 minutos · Resultado inmediato</p>
  </div>
</section>

<section style={{background:'var(--white)',padding:'80px 0 100px'}}>
  <div className="calc-container" ref={containerRef}>

    <div className="calc-progress" style={{opacity: step === 4 ? 0.3 : 1}}>
      <div className={progressClass(1)}>
        <span className="calc-progress__label">Tu empresa</span>
      </div>
      <div className={progressClass(2)}>
        <span className="calc-progress__label">Sector público</span>
      </div>
      <div className={progressClass(3)}>
        <span className="calc-progress__label">Contratos</span>
      </div>
    </div>

    {step === 1 && (
    <div className="calc-step" key="step1">
      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'32px',fontWeight:'400',color:'var(--navy)',marginBottom:'8px'}}>Cuéntanos sobre tu empresa</h2>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',color:'var(--text-muted)',lineHeight:'1.65',marginBottom:'40px'}}>Para calcular el impacto real, necesitamos entender el tamaño y tipo de actividad.</p>

      <div className="calc-question">¿Cuántos empleados tenéis?</div>
      <div className="pill-group">
        {[['micro','Menos de 10'],['pequeña','10 a 49'],['mediana','50 a 249'],['grande','250 o más']].map(([val,label]) => (
          <div key={val} className={`pill${sel.size === val ? ' selected' : ''}`} onClick={() => selectPill('size', val)}>{label}</div>
        ))}
      </div>

      <div className="calc-question">¿Cuál es vuestro sector principal?</div>
      <div className="pill-group">
        {[['software','Desarrollo de software'],['infra','Infraestructura y sistemas'],['consultoria','Consultoría TIC'],['cloud','Servicios cloud'],['otro','Otro sector TIC']].map(([val,label]) => (
          <div key={val} className={`pill${sel.sector === val ? ' selected' : ''}`} onClick={() => selectPill('sector', val)}>{label}</div>
        ))}
      </div>

      <p className={`calc-error${errors.err1 ? ' visible' : ''}`}>Selecciona el tamaño de tu empresa para continuar.</p>

      <div className="calc-nav">
        <span></span>
        <button className="btn-calc-next" onClick={() => goStep(2)}>Siguiente →</button>
      </div>
    </div>
    )}

    {step === 2 && (
    <div className="calc-step" key="step2">
      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'32px',fontWeight:'400',color:'var(--navy)',marginBottom:'8px'}}>Vuestra relación con el sector público</h2>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',color:'var(--text-muted)',lineHeight:'1.65',marginBottom:'40px'}}>El sector público TIC mueve más de 8.000 M€ anuales en España.</p>

      <div className="calc-question">¿Licitáis actualmente al sector público?</div>
      <div className="pill-group">
        {[['si','Sí, licitamos'],['intentado','Lo hemos intentado'],['quiero','Aún no, pero queremos']].map(([val,label]) => (
          <div key={val} className={`pill${sel.licita === val ? ' selected' : ''}`} onClick={() => selectPill('licita', val)}>{label}</div>
        ))}
      </div>

      <div className="calc-question" style={{marginTop:'36px'}}>¿Qué % de tu facturación podría venir del sector público?</div>
      <div className="slider-wrap">
        <div className="slider-val">{sliderVal}%</div>
        <input type="range" min={5} max={80} value={sliderVal} step={5}
               onChange={(e) => setSliderVal(Number(e.target.value))} />
        <div className="slider-labels"><span>5%</span><span>80%</span></div>
      </div>

      <p className={`calc-error${errors.err2 ? ' visible' : ''}`}>Selecciona tu relación con el sector público para continuar.</p>

      <div className="calc-nav">
        <button className="btn-calc-back" onClick={() => goStep(1)}>← Anterior</button>
        <button className="btn-calc-next" onClick={() => goStep(3)}>Siguiente →</button>
      </div>
    </div>
    )}

    {step === 3 && (
    <div className="calc-step" key="step3">
      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'32px',fontWeight:'400',color:'var(--navy)',marginBottom:'8px'}}>Contratos y oportunidades</h2>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',color:'var(--text-muted)',lineHeight:'1.65',marginBottom:'40px'}}>Último paso — casi hemos terminado.</p>

      <div className="calc-question">¿Habéis perdido algún contrato por no tener ENS?</div>
      <div className="pill-group">
        {[['si_alguno','Sí, alguno'],['si_varios','Sí, varios'],['no_sabemos','No lo sabemos']].map(([val,label]) => (
          <div key={val} className={`pill${sel.perdido === val ? ' selected' : ''}`} onClick={() => selectPill('perdido', val)}>{label}</div>
        ))}
      </div>

      <div className="calc-question">Valor medio de los contratos a los que licitáis</div>
      <div className="pill-group">
        {[['50k','Menos de 50.000 €'],['200k','50.000 – 200.000 €'],['500k','200.000 – 500.000 €'],['1m','Más de 500.000 €']].map(([val,label]) => (
          <div key={val} className={`pill${sel.valor === val ? ' selected' : ''}`} onClick={() => selectPill('valor', val)}>{label}</div>
        ))}
      </div>

      <p className={`calc-error${errors.err3 ? ' visible' : ''}`}>Selecciona al menos el valor medio de tus contratos para continuar.</p>

      <div className="calc-nav">
        <button className="btn-calc-back" onClick={() => goStep(2)}>← Anterior</button>
        <button className="btn-calc-next" onClick={() => calcular()}>Calcular mi resultado →</button>
      </div>
    </div>
    )}

    {step === 4 && result && (
    <div className="calc-step" key="stepResult">
      <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'500',letterSpacing:'0.15em',textTransform:'uppercase',color:'var(--gold)'}}>Tu resultado</p>
      <h2 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'8px 0'}}>Tu empresa pierde aproximadamente</h2>
      <div className="result-number">{result.formatted}</div>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',marginBottom:'40px'}}>al año en contratos públicos para los que no podéis licitar sin el certificado ENS.</p>

      <div style={{background:'var(--pearl)',padding:'28px 32px',marginBottom:'32px',borderLeft:'3px solid var(--gold)'}}>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--navy)',marginBottom:'20px',letterSpacing:'0.08em',textTransform:'uppercase'}}>Cómo se calcula</p>
        <div className="desglose-row"><span>Contratos TIC públicos potenciales para tu empresa</span><strong>{result.potenciales}</strong></div>
        <div className="desglose-row"><span>De los cuales exigen certificado ENS (~35%)</span><strong>{result.ens}</strong></div>
        <div className="desglose-row"><span>Tasa media de adjudicación por empresa</span><strong>~18%</strong></div>
        <div className="desglose-row" style={{background:'rgba(201,168,76,0.08)',margin:'0 -32px',padding:'12px 32px',borderBottom:'none'}}><span style={{fontWeight:'600',color:'var(--navy)'}}>Oportunidad perdida anual estimada</span><strong style={{fontSize:'16px',color:'var(--gold)'}}>{result.formatted}</strong></div>
      </div>

      <div style={{background:'var(--navy)',padding:'40px 40px 44px',textAlign:'center'}}>
        <p style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontStyle:'italic',color:'var(--white)',lineHeight:'1.45',marginBottom:'8px'}}>"La certificación ENS cuesta significativamente menos que un solo contrato perdido."</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.45)',marginBottom:'32px'}}>Avson GRC · Garantía de éxito al 100% por escrito · 3–4 meses</p>
        <Link to="/contacto" style={{display:'inline-block',fontFamily:'var(--font-sans)',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--navy)',background:'var(--gold)',border:'1px solid var(--gold)',padding:'16px 40px',textDecoration:'none',transition:'opacity 0.2s'}}>Recuperar esos contratos →</Link>
      </div>

      <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginTop:'16px',lineHeight:'1.65',fontStyle:'italic'}}>*Estimación basada en datos del Ministerio de Hacienda sobre contratación TIC pública en España (presupuesto anual ~8.000 M€). El ENS es requisito en aproximadamente el 35% de los contratos TIC. Tasa media de adjudicación estimada: 18%. No constituye garantía de resultados concretos.</p>

      <div style={{textAlign:'center',marginTop:'32px'}}>
        <button className="btn-calc-back" onClick={() => reiniciar()} style={{fontSize:'13px'}}>← Recalcular con otros datos</button>
      </div>
    </div>
    )}

  </div>
</section>

{showGate && (
<div style={{display:'flex',position:'fixed',inset:'0',background:'rgba(26,39,68,0.82)',zIndex:9999,alignItems:'center',justifyContent:'center',padding:'20px'}}>
  <div style={{background:'var(--white)',maxWidth:'480px',width:'100%',padding:'48px 40px',position:'relative'}}>
    <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.12em',textTransform:'uppercase',color:'var(--gold)',display:'block',marginBottom:'12px'}}>Tu análisis está listo</span>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(24px,3vw,32px)',fontWeight:'400',color:'var(--navy)',marginBottom:'12px',lineHeight:'1.2'}}>¿Dónde te enviamos el resultado?</h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'0.9rem',color:'var(--navy-60)',lineHeight:'1.6',marginBottom:'32px'}}>Te enviamos el análisis completo con el desglose de contratos en riesgo y la propuesta para tu sector específico.</p>
    <form onSubmit={handleLeadSubmit} style={{display:'flex',flexDirection:'column',gap:'16px'}}>
      <input type="text" placeholder="Tu nombre" required
        style={{width:'100%',padding:'14px 18px',border:'1.5px solid #D8D8D8',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',boxSizing:'border-box'}}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onBlur={(e) => (e.currentTarget.style.borderColor = '#D8D8D8')} />
      <input type="email" placeholder="tu@empresa.com" required
        style={{width:'100%',padding:'14px 18px',border:'1.5px solid #D8D8D8',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',boxSizing:'border-box'}}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onBlur={(e) => (e.currentTarget.style.borderColor = '#D8D8D8')} />
      <input type="text" placeholder="Nombre de tu empresa" required
        style={{width:'100%',padding:'14px 18px',border:'1.5px solid #D8D8D8',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',boxSizing:'border-box'}}
        onFocus={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onBlur={(e) => (e.currentTarget.style.borderColor = '#D8D8D8')} />
      <button type="submit" style={{background:'var(--navy)',color:'var(--white)',border:'none',padding:'18px 32px',fontFamily:'var(--font-sans)',fontSize:'0.95rem',fontWeight:'600',letterSpacing:'0.04em',cursor:'pointer',transition:'opacity 0.2s',width:'100%'}}>
        Ver mi análisis completo →
      </button>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'0.75rem',color:'var(--navy-60)',textAlign:'center',margin:'0'}}>Sin spam. Solo usamos tu email para enviarte el análisis.</p>
    </form>
  </div>
</div>
)}
    </>
  )
}
