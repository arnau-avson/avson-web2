import { Link } from 'react-router-dom'

export default function EnsExpressPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0.3} }
    .express-hero {
      background: var(--navy);
      padding: 140px 0 80px;
      position: relative;
      overflow: hidden;
    }
    .express-hero::before {
      content: 'EXPRESS';
      position: absolute;
      top: 50%;
      right: -40px;
      transform: translateY(-50%);
      font-family: 'Cormorant Garamond', serif;
      font-size: 260px;
      font-weight: 700;
      color: rgba(201,168,76,0.04);
      line-height: 1;
      pointer-events: none;
      user-select: none;
    }
    .express-hero h1 {
      font-family: 'Cormorant Garamond', serif;
      font-size: clamp(2.4rem, 5vw, 4rem);
      font-weight: 600;
      color: var(--white);
      line-height: 1.1;
      margin: 0 0 24px;
    }
    .express-hero h1 em {
      font-style: italic;
      color: var(--gold);
    }
    .express-hero .subtitle {
      font-family: var(--font-sans);
      font-size: 1.05rem;
      color: rgba(255,255,255,0.75);
      max-width: 580px;
      line-height: 1.75;
      margin-bottom: 36px;
    }
    .express-badge-guarantee {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: rgba(201,168,76,0.1);
      border: 1px solid var(--gold);
      padding: 10px 18px;
      margin-top: 16px;
      font-family: var(--font-sans);
      font-size: 12px;
      color: var(--gold);
      letter-spacing: 0.07em;
      text-transform: uppercase;
      font-weight: 600;
    }
    .fit-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
    }
    @media (max-width: 700px) { .fit-grid { grid-template-columns: 1fr; } }
    .fit-col { padding: 36px; }
    .fit-col--yes { background: #f0f8f0; border: 1.5px solid #4caf50; }
    .fit-col--no  { background: #fff8f6; border: 1.5px solid #e0e0e0; }
    .fit-col__title { font-family: var(--font-sans); font-size: 11px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 20px; }
    .fit-col--yes .fit-col__title { color: #2e7d32; }
    .fit-col--no .fit-col__title  { color: #777; }
    .fit-item { display: flex; align-items: flex-start; gap: 12px; margin-bottom: 14px; font-family: var(--font-sans); font-size: 14px; color: var(--navy); line-height: 1.55; }
    .fit-item__icon { flex-shrink: 0; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; margin-top: 1px; }
    .fit-item__icon--yes { background: #4caf50; color: white; }
    .fit-item__icon--no  { background: #e0e0e0; color: #777; }
    .timeline { position: relative; padding: 0; list-style: none; margin: 0; }
    .timeline::before { content: ''; position: absolute; left: 28px; top: 0; bottom: 0; width: 2px; background: linear-gradient(to bottom, var(--gold), rgba(201,168,76,0.1)); }
    .timeline-item { display: flex; gap: 24px; margin-bottom: 40px; position: relative; }
    .timeline-dot { flex-shrink: 0; width: 58px; height: 58px; border-radius: 50%; background: var(--navy); border: 2px solid var(--gold); display: flex; align-items: center; justify-content: center; font-family: var(--font-sans); font-size: 10px; font-weight: 600; color: var(--gold); letter-spacing: 0.04em; text-align: center; line-height: 1.2; z-index: 1; }
    .timeline-content { padding-top: 12px; }
    .timeline-content h3 { font-family: 'Cormorant Garamond', serif; font-size: 20px; font-weight: 600; color: var(--navy); margin: 0 0 6px; }
    .timeline-content p { font-family: var(--font-sans); font-size: 13px; color: var(--text-muted); line-height: 1.6; margin: 0; }
    .loss-cards { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    @media (max-width: 800px) { .loss-cards { grid-template-columns: 1fr; } }
    .loss-card { background: var(--white); border: 1px solid var(--border); padding: 36px 28px; text-align: center; }
    .loss-card__number { font-family: 'Cormorant Garamond', serif; font-size: 52px; font-weight: 700; color: var(--navy); line-height: 1; margin-bottom: 12px; }
    .loss-card__number span { color: var(--gold); }
    .loss-card__text { font-family: var(--font-sans); font-size: 14px; color: var(--navy); line-height: 1.65; margin-bottom: 8px; }
    .loss-card__source { font-family: var(--font-sans); font-size: 11px; color: var(--text-muted); font-style: italic; }
    .testimonial-express { background: var(--white); border: 1px solid var(--border); border-left: 3px solid var(--gold); padding: 36px 32px; }
    .testimonial-express__quote { font-family: 'Cormorant Garamond', serif; font-size: 19px; font-style: italic; color: var(--navy); line-height: 1.6; margin-bottom: 20px; }
    .testimonial-express__author { font-family: var(--font-sans); font-size: 12px; color: var(--text-muted); letter-spacing: 0.06em; text-transform: uppercase; }
    .scarcity-box { background: var(--navy); padding: 60px 40px; text-align: center; }
    .scarcity-box h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 3.5vw, 2.6rem); font-weight: 500; color: var(--white); margin: 0 0 16px; line-height: 1.2; }
    .scarcity-box p { font-family: var(--font-sans); font-size: 15px; color: rgba(255,255,255,0.7); max-width: 560px; margin: 0 auto 32px; line-height: 1.7; }
    .available-slots { display: inline-flex; align-items: center; gap: 12px; background: rgba(201,168,76,0.12); border: 1px solid var(--gold); padding: 14px 24px; margin-bottom: 32px; font-family: var(--font-sans); font-size: 13px; color: var(--gold); }
    .slot-count { font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 700; color: var(--gold); }
    .compare-table { width: 100%; border-collapse: collapse; font-family: var(--font-sans); }
    .compare-table th { background: var(--navy); color: var(--white); padding: 16px 20px; text-align: left; font-size: 13px; font-weight: 600; letter-spacing: 0.04em; }
    .compare-table th:first-child { color: rgba(255,255,255,0.6); font-weight: 400; }
    .compare-table th.col-express { color: var(--gold); }
    .compare-table td { padding: 14px 20px; font-size: 13px; color: var(--navy); border-bottom: 1px solid #eef0f3; vertical-align: middle; }
    .compare-table tr:nth-child(even) td { background: #f8f9fb; }
    .compare-table tr:nth-child(odd)  td { background: var(--white); }
    .compare-table td:first-child { font-weight: 500; color: #555; font-size: 12px; letter-spacing: 0.03em; }
    .compare-table td.col-express { font-weight: 600; color: var(--navy); }
    .compare-table td.check-gold { color: var(--gold); font-weight: 700; font-size: 16px; }
    .testimonials-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; }
    @media (max-width: 700px) { .testimonials-grid { grid-template-columns: 1fr; } }
    .roi-highlight { display: inline-block; background: var(--gold); color: var(--navy); font-family: 'Cormorant Garamond', serif; font-size: 28px; font-weight: 700; padding: 4px 12px; margin: 8px 0; }` }} />
<section className="express-hero">
  <div className="container" style={{position:'relative',zIndex:'1'}}>
    <div style={{display:'flex',alignItems:'center',gap:'8px',fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.45)',marginBottom:'36px',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'rgba(255,255,255,0.45)',textDecoration:'none'}}>Inicio</Link>
      <span>/</span>
      <Link to="/ens" style={{color:'rgba(255,255,255,0.45)',textDecoration:'none'}}>ENS</Link>
      <span>/</span>
      <span style={{color:'var(--gold)'}}>ENS Express</span>
    </div>
    <div style={{display:'inline-flex',alignItems:'center',gap:'10px',background:'rgba(201,168,76,0.15)',border:'1px solid var(--gold)',padding:'10px 20px',marginBottom:'32px'}}>
      <span style={{display:'inline-block',width:'8px',height:'8px',background:'#ff4444',borderRadius:'50%',animation:'blink 1s infinite'}}></span>
      <span style={{fontFamily:'Inter,sans-serif',fontSize:'12px',color:'var(--gold)',letterSpacing:'0.08em',textTransform:'uppercase',fontWeight:'600'}}>Solo quedan 2 plazas este mes</span>
    </div>
    <div style={{maxWidth:'700px'}}>
      <h1>Certificado ENS en 30 días.<br /><em>Para empresas que no pueden esperar.</em></h1>
      <p className="subtitle">Tienes un contrato público que cierra pronto. Sin el ENS, no puedes presentarte. ENS Express te garantiza el certificado en 30 días naturales, con un equipo de tres consultores dedicados exclusivamente a tu proyecto.</p>
      <form onSubmit={(e) => { e.preventDefault(); window.location.href = '/contacto.html' }} style={{display:'flex',gap:'0',marginBottom:'16px',maxWidth:'480px',boxShadow:'0 4px 24px rgba(0,0,0,0.25)'}}>
        <input type="email" id="heroEmail" required placeholder="tu@empresa.com"
          style={{flex:'1',padding:'16px 20px',border:'none',fontFamily:'var(--font-sans)',fontSize:'0.95rem',color:'var(--navy)',background:'var(--white)',outline:'none',minWidth:'0'}} />
        <button type="submit"
          style={{background:'var(--gold)',color:'var(--navy)',border:'none',padding:'16px 24px',fontFamily:'var(--font-sans)',fontSize:'0.85rem',fontWeight:'600',letterSpacing:'0.04em',cursor:'pointer',whiteSpace:'nowrap',transition:'opacity 0.2s'}}
          onMouseOver={(e) => (e.currentTarget.style.opacity = '0.88')} onMouseOut={(e) => (e.currentTarget.style.opacity = '1')}>
          Consultar disponibilidad →
        </button>
      </form>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'0.78rem',color:'rgba(255,255,255,0.45)',marginTop:'0',marginBottom:'28px'}}>Sin compromiso · Respuesta en 24h · Diagnóstico gratuito</p>
      <div className="express-badge-guarantee">
        <span style={{fontSize:'16px'}}>&#10022;</span>
        Garantía de éxito al 100% por escrito  ·  También en el Express
      </div>
    </div>
    <div style={{display:'flex',gap:'40px',flexWrap:'wrap',marginTop:'52px',paddingTop:'40px',borderTop:'1px solid rgba(255,255,255,0.1)'}}>
      <div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'36px',fontWeight:'700',color:'var(--gold)',lineHeight:'1'}}>30</div>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.5)',letterSpacing:'0.07em',textTransform:'uppercase',marginTop:'4px'}}>Días naturales</div>
      </div>
      <div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'36px',fontWeight:'700',color:'var(--gold)',lineHeight:'1'}}>48h</div>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.5)',letterSpacing:'0.07em',textTransform:'uppercase',marginTop:'4px'}}>Arranque del proyecto</div>
      </div>
      <div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'36px',fontWeight:'700',color:'var(--gold)',lineHeight:'1'}}>3</div>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.5)',letterSpacing:'0.07em',textTransform:'uppercase',marginTop:'4px'}}>Consultores dedicados</div>
      </div>
      <div>
        <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'36px',fontWeight:'700',color:'var(--gold)',lineHeight:'1'}}>4</div>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.5)',letterSpacing:'0.07em',textTransform:'uppercase',marginTop:'4px'}}>Plazas máx. por mes</div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <div className="anim-fade-up" style={{maxWidth:'640px',marginBottom:'48px'}}>
      <span className="label-tag">¿Es ENS Express para ti?</span>
      <div className="gold-line"></div>
      <h2 className="section-title">Si tienes un pliego que cierra pronto,<br />no hay tiempo para el servicio estándar.</h2>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',color:'var(--text-muted)',lineHeight:'1.7',marginTop:'16px'}}>ENS Express es un servicio premium diseñado para situaciones específicas. Comprueba en qué categoría estás tú.</p>
    </div>
    <div className="fit-grid anim-fade-up">
      <div className="fit-col fit-col--yes">
        <div className="fit-col__title">&#10003;  Sí es para ti si...</div>
        <div className="fit-item">
          <div className="fit-item__icon fit-item__icon--yes">&#10003;</div>
          <span>Tienes un pliego o concurso que cierra en menos de 8 semanas</span>
        </div>
        <div className="fit-item">
          <div className="fit-item__icon fit-item__icon--yes">&#10003;</div>
          <span>Has perdido contratos anteriores por no tener el ENS</span>
        </div>
        <div className="fit-item">
          <div className="fit-item__icon fit-item__icon--yes">&#10003;</div>
          <span>Tu competencia ya está certificada y tú no</span>
        </div>
        <div className="fit-item">
          <div className="fit-item__icon fit-item__icon--yes">&#10003;</div>
          <span>Necesitas renovar un contrato y el cliente exige ENS</span>
        </div>
        <div className="fit-item">
          <div className="fit-item__icon fit-item__icon--yes">&#10003;</div>
          <span>Tu empresa acaba de ganar una licitación y el pliego pide ENS como condición de inicio</span>
        </div>
      </div>
      <div className="fit-col fit-col--no">
        <div className="fit-col__title" style={{color:'#c0392b'}}>&#10005;  No es para ti si...</div>
        <div className="fit-item">
          <div className="fit-item__icon fit-item__icon--no">&#10005;</div>
          <span>Tu próxima licitación es dentro de más de 4 meses (el servicio estándar es más económico)</span>
        </div>
        <div className="fit-item">
          <div className="fit-item__icon fit-item__icon--no">&#10005;</div>
          <span>Tu empresa tiene más de 500 empleados o sistemas muy complejos (requiere análisis previo)</span>
        </div>
        <div className="fit-item">
          <div className="fit-item__icon fit-item__icon--no">&#10005;</div>
          <span>Buscas solo ISO 27001 sin ENS</span>
        </div>
        <div style={{marginTop:'24px',padding:'20px',background:'rgba(26,39,68,0.04)',border:'1px solid rgba(26,39,68,0.08)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--navy)',lineHeight:'1.6',margin:'0'}}>¿No estás seguro? Cuéntanos tu situación y te decimos en 24 horas qué servicio encaja mejor con tu caso — sin compromiso. <Link to="/contacto" style={{color:'var(--navy)',fontWeight:'600'}}>Consultar gratis →</Link></p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">
    <div className="anim-fade-up" style={{maxWidth:'600px',marginBottom:'48px'}}>
      <span className="label-tag">Comparativa</span>
      <div className="gold-line"></div>
      <h2 className="section-title">¿Qué es diferente en Express?</h2>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',color:'var(--text-muted)',lineHeight:'1.7',marginTop:'16px'}}>No es el mismo servicio acelerado. Es un modelo de trabajo completamente diferente, con más recursos y mayor intensidad desde el primer día.</p>
    </div>
    <div className="anim-fade-up" style={{overflowX:'auto'}}>
      <table className="compare-table">
        <thead>
          <tr>
            <th style={{width:'36%'}}></th>
            <th style={{width:'32%'}}>ENS Estándar</th>
            <th className="col-express" style={{width:'32%'}}>ENS Express &#9889;</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Duración del proyecto</td>
            <td>3–4 meses</td>
            <td className="col-express">30 días naturales</td>
          </tr>
          <tr>
            <td>Equipo asignado</td>
            <td>1 consultor principal</td>
            <td className="col-express">3 consultores dedicados</td>
          </tr>
          <tr>
            <td>Frecuencia de reuniones</td>
            <td>Semanales</td>
            <td className="col-express">Diarias (30 min)</td>
          </tr>
          <tr>
            <td>Arranque del proyecto</td>
            <td>5–7 días laborables</td>
            <td className="col-express">48 horas</td>
          </tr>
          <tr>
            <td>Trabajo en fines de semana</td>
            <td>No</td>
            <td className="col-express">Sí, si es necesario</td>
          </tr>
          <tr>
            <td>Prioridad en slot de auditoría</td>
            <td>Estándar</td>
            <td className="col-express">Prioritaria</td>
          </tr>
          <tr>
            <td>Garantía de éxito</td>
            <td className="check-gold">&#10003; Incluida</td>
            <td className="col-express check-gold">&#10003; Incluida</td>
          </tr>
          <tr>
            <td>Precio</td>
            <td>Base</td>
            <td className="col-express">Base + 60%</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="anim-fade-up" style={{marginTop:'28px',padding:'20px 24px',background:'rgba(201,168,76,0.07)',border:'1px solid var(--gold)',display:'inline-block'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--navy)',lineHeight:'1.6',margin:'0'}}>
        <strong>¿Por qué el sobrecoste del 60%?</strong> Porque durante 30 días tres consultores senior trabajan exclusivamente en tu proyecto, incluidos sábados y domingos si el calendario lo requiere. No hay otro proyecto que compita por su atención.
      </p>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <div className="anim-fade-up" style={{maxWidth:'600px',marginBottom:'56px'}}>
      <span className="label-tag">Metodología Express</span>
      <div className="gold-line"></div>
      <h2 className="section-title">Cómo funciona en 30 días.</h2>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',color:'var(--text-muted)',lineHeight:'1.7',marginTop:'16px'}}>Un plan de trabajo detallado, sin márgenes de improvisación. Cada fase tiene un entregable concreto y un responsable asignado.</p>
    </div>
    <div className="anim-fade-up">
      <ul className="timeline">
        <li className="timeline-item">
          <div className="timeline-dot">Días<br />1–2</div>
          <div className="timeline-content">
            <h3>Análisis de alcance exprés y firma de contrato</h3>
            <p>Inventariamos los sistemas en alcance, determinamos la categoría ENS aplicable y firmamos el contrato con la garantía de éxito. El equipo de tres consultores queda asignado al proyecto.</p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-dot">Días<br />3–5</div>
          <div className="timeline-content">
            <h3>Gap analysis y plan de acción</h3>
            <p>Evaluamos el nivel de cumplimiento actual frente a los controles ENS requeridos. Producimos un plan de acción priorizado que guiará las siguientes tres semanas.</p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-dot">Días<br />6–15</div>
          <div className="timeline-content">
            <h3>Implementación de controles prioritarios</h3>
            <p>Implementamos los controles técnicos y organizativos con mayor impacto en el resultado de la auditoría. Utilizamos herramientas especializadas de IA para acelerar la generación de documentación y la parametrización de herramientas.</p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-dot">Días<br />16–22</div>
          <div className="timeline-content">
            <h3>Documentación completa y auditoría interna</h3>
            <p>Completamos la documentación del SGSI conforme al ENS: política de seguridad, análisis de riesgos, plan de continuidad, inventario de activos y evidencias de los controles implementados.</p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-dot">Días<br />23–26</div>
          <div className="timeline-content">
            <h3>Pre-auditoría y corrección de hallazgos</h3>
            <p>Realizamos una auditoría interna simulando las condiciones de la auditoría de certificación. Corregimos los hallazgos identificados antes de que el auditor externo entre en escena.</p>
          </div>
        </li>
        <li className="timeline-item">
          <div className="timeline-dot">Días<br />27–28</div>
          <div className="timeline-content">
            <h3>Auditoría de certificación</h3>
            <p>La entidad acreditada ENAC realiza la auditoría de certificación. Nuestro equipo acompaña y da soporte técnico durante todo el proceso.</p>
          </div>
        </li>
        <li className="timeline-item" style={{marginBottom:'0'}}>
          <div className="timeline-dot" style={{background:'var(--gold)',borderColor:'var(--gold)'}}>
            <span style={{color:'var(--navy)',fontSize:'14px',fontWeight:'700'}}>D30</span>
          </div>
          <div className="timeline-content">
            <h3 style={{color:'var(--gold)'}}>Certificado ENS emitido.</h3>
            <p>Tu empresa dispone del certificado ENS Básico o Medio emitido por entidad acreditada ENAC. Puedes presentarte a la licitación.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</section>


<section className="section section--white">
  <div className="container">
    <div className="anim-fade-up" style={{maxWidth:'600px',marginBottom:'48px'}}>
      <span className="label-tag">El coste de esperar</span>
      <div className="gold-line"></div>
      <h2 className="section-title">Cada día sin ENS es un contrato<br />que ya no puedes ganar.</h2>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',color:'var(--text-muted)',lineHeight:'1.7',marginTop:'16px'}}>No tener el certificado ENS no es solo un problema de cumplimiento. Es un problema de negocio medible, en euros perdidos.</p>
    </div>
    <div className="loss-cards anim-fade-up">
      <div className="loss-card">
        <div className="loss-card__number">1<span>/3</span></div>
        <div className="loss-card__text">de los pliegos TIC en España exige ENS como <strong>requisito eliminatorio</strong>. Tu oferta no se abre siquiera.</div>
        <div className="loss-card__source">Fuente: Observatorio de Contratación Pública</div>
      </div>
      <div className="loss-card">
        <div className="loss-card__number"><span>65</span>%</div>
        <div className="loss-card__text">de las empresas sin ENS pierden al menos <strong>1 contrato público al año</strong> directamente por no tener la certificación.</div>
        <div className="loss-card__source">Análisis interno Avson GRC · 2024</div>
      </div>
      <div className="loss-card">
        <div className="loss-card__number" style={{fontSize:'38px'}}>180K€</div>
        <div className="loss-card__text">es el valor medio de un contrato TIC público en España. <strong>¿Cuántos contratos te puedes permitir perder</strong> este año?</div>
        <div className="loss-card__source">Fuente: Plataforma de Contratación del Sector Público</div>
      </div>
    </div>
    <div className="anim-fade-up" style={{marginTop:'40px',background:'var(--navy)',padding:'36px 40px',display:'flex',alignItems:'center',gap:'32px',flexWrap:'wrap'}}>
      <div style={{flex:'1',minWidth:'280px'}}>
        <p style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'22px',fontStyle:'italic',color:'var(--white)',lineHeight:'1.4',margin:'0'}}>
          "Si tienes un pliego que cierra en menos de 8 semanas, ENS Express es tu única opción viable."
        </p>
      </div>
      <div style={{flexShrink:'0'}}>
        <Link to="/contacto" className="btn-primary btn-primary--white">Consultar ahora →</Link>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl">
  <div className="container">
    <div className="anim-fade-up" style={{maxWidth:'600px',marginBottom:'48px'}}>
      <span className="label-tag">Casos Express</span>
      <div className="gold-line"></div>
      <h2 className="section-title">Empresas que lo consiguieron a tiempo.</h2>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'15px',color:'var(--text-muted)',lineHeight:'1.7',marginTop:'16px'}}>Estas son situaciones reales de empresas que llegaron al límite y salieron con el certificado en la mano.</p>
    </div>
    <div className="testimonials-grid anim-fade-up">
      <div className="testimonial-express">
        <div className="testimonial-express__quote">
          &#x201C;Nos llamaron el 15 de octubre. Teníamos un pliego de la Comunidad de Madrid que cerraba el 20 de noviembre. En 33 días teníamos el certificado ENS Medio. Presentamos la oferta. Ganamos el contrato. El retorno fue de 12x la inversión en la consultoría.&#x201D;
        </div>
        <div style={{marginBottom:'8px'}}>
          <div className="roi-highlight">12x ROI</div>
        </div>
        <div className="testimonial-express__author">Director de Operaciones · Empresa de software de gestión · Madrid</div>
      </div>
      <div className="testimonial-express">
        <div className="testimonial-express__quote">
          &#x201C;Sabíamos que necesitábamos el ENS pero lo fuimos posponiendo. Cuando salió una licitación de Renfe que nos interesaba, teníamos 6 semanas. Avson Express fue la única opción viable. Lo conseguimos con 4 días de margen.&#x201D;
        </div>
        <div style={{marginBottom:'8px'}}>
          <div className="roi-highlight">4 días de margen</div>
        </div>
        <div className="testimonial-express__author">CEO · Consultora de ciberseguridad · Barcelona</div>
      </div>
    </div>
    <div className="anim-fade-up" style={{marginTop:'32px',padding:'24px 28px',background:'var(--white)',border:'1px solid var(--border)',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'24px',flexWrap:'wrap'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--navy)',lineHeight:'1.6',margin:'0',maxWidth:'480px'}}>
        <strong>87+ empresas certificadas con Avson.</strong> En lo que va de 2025, 14 de ellas optaron por el servicio Express para cumplir con plazos de licitación críticos.
      </p>
      <Link to="/contacto" className="btn-primary">Ver si hay plazas disponibles →</Link>
    </div>
  </div>
</section>


<section className="section" style={{padding:'0'}}>
  <div className="scarcity-box anim-fade-up">
    <span className="label-tag">Disponibilidad limitada</span>
    <h2>Solo 4 proyectos Express al mes.<br />En este momento hay plazas disponibles.</h2>
    <div className="available-slots">
      <span style={{display:'inline-block',width:'8px',height:'8px',background:'#4caf50',borderRadius:'50%',animation:'blink 1.5s infinite'}}></span>
      <span className="slot-count">2</span>
      <span>plazas disponibles para el mes en curso</span>
    </div>
    <p>ENS Express acepta un máximo de 4 proyectos por mes para garantizar la calidad y la atención de un equipo dedicado. Cuando las 4 plazas están ocupadas, el siguiente proyecto comienza el mes siguiente — sin excepciones.</p>
    <Link to="/contacto" className="btn-primary btn-primary--white" style={{fontSize:'15px',padding:'16px 36px'}}>Consultar disponibilidad ahora →</Link>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.35)',marginTop:'20px',marginBottom:'0'}}>Sin compromiso · Diagnóstico gratuito · Propuesta en 24 horas</p>
  </div>
</section>


<section className="section section--white">
  <div className="container">
    <div className="anim-fade-up" style={{maxWidth:'600px',marginBottom:'48px'}}>
      <span className="label-tag">Preguntas frecuentes</span>
      <div className="gold-line"></div>
      <h2 className="section-title">Todo lo que necesitas saber<br />sobre ENS Express.</h2>
    </div>
    <div style={{maxWidth:'760px',margin:'0 auto'}} className="anim-fade-up">
      <div className="faq-item">
        <div className="faq-item__question">¿El ENS Express garantiza ENS Básico, Medio o Alto?</div>
        <div className="faq-item__answer" style={{padding:'0 32px 28px'}}>ENS Express cubre ENS Básico y ENS Medio. El ENS Alto requiere un análisis de seguridad más profundo que no puede completarse en 30 días sin comprometer la calidad del resultado. Si necesitas ENS Alto urgente, consúltanos — valoramos cada caso individualmente.</div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué pasa si no conseguimos el certificado en 30 días?</div>
        <div className="faq-item__answer" style={{padding:'0 32px 28px'}}>La garantía de éxito aplica también al Express. Si seguimos nuestra metodología y el plan de trabajo acordado y no superamos la auditoría, repetimos el proceso sin coste adicional. Esa es nuestra garantía por escrito, no una promesa de marketing.</div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué necesito preparar antes de empezar?</div>
        <div className="faq-item__answer" style={{padding:'0 32px 28px'}}>Muy poco. Necesitamos acceso a los sistemas en alcance, un interlocutor con autoridad para tomar decisiones, y disponibilidad para las reuniones diarias de 30 minutos. El resto lo gestionamos nosotros: documentación, implementación técnica, coordinación con la entidad auditora y respuesta a no conformidades.</div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Funciona para cualquier sector?</div>
        <div className="faq-item__answer" style={{padding:'0 32px 28px'}}>Sí. Hemos completado proyectos Express en sector TIC, defensa, sanidad y administración local. La categoría ENS que corresponde a tu organización la determinamos en el análisis inicial de las primeras 48 horas, antes de que empiece el trabajo intensivo.</div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto cuesta ENS Express?</div>
        <div className="faq-item__answer" style={{padding:'0 32px 28px'}}>El precio varía según la complejidad y el punto de partida de tu organización. El diagnóstico inicial es gratuito y te damos una propuesta en 24 horas. Como referencia, el Express tiene un sobrecoste del 50–70% sobre el servicio estándar, justificado por el equipo dedicado y la intensidad del proyecto. Cuando lo comparas con el valor del contrato público que estás en riesgo de perder, el retorno es inmediato.</div>
      </div>
    </div>
  </div>
</section>


<section className="section" style={{background:'var(--navy)',padding:'80px 0'}}>
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag">Actúa ahora</span>
    <h2 className="anim-fade-up" style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(2rem,4vw,3.2rem)',fontWeight:'500',color:'var(--white)',margin:'20px 0 16px',lineHeight:'1.15'}}>
      ¿Cuándo cierra tu pliego?<br /><em style={{color:'var(--gold)'}}>El reloj ya está corriendo.</em>
    </h2>
    <p className="anim-fade-up" style={{fontFamily:'var(--font-sans)',fontSize:'16px',color:'rgba(255,255,255,0.65)',maxWidth:'500px',margin:'0 auto 40px',lineHeight:'1.7'}}>Cuéntanos tu situación hoy. En 24 horas te decimos si podemos garantizarte el ENS a tiempo y te damos una propuesta de precio sin compromiso.</p>
    <div className="anim-fade-up" style={{display:'flex',gap:'16px',justifyContent:'center',flexWrap:'wrap'}}>
      <Link to="/contacto" className="btn-primary btn-primary--white" style={{fontSize:'15px',padding:'16px 36px'}}>Consultar disponibilidad Express →</Link>
      <Link to="/ens" className="btn-text" style={{color:'rgba(255,255,255,0.55)',fontSize:'14px',alignSelf:'center'}}>Ver servicio estándar ENS</Link>
    </div>
    <div className="available-slots anim-fade-up" style={{marginTop:'40px',display:'inline-flex'}}>
      <span style={{display:'inline-block',width:'8px',height:'8px',background:'#4caf50',borderRadius:'50%',animation:'blink 1.5s infinite'}}></span>
      <span className="slot-count">2</span>
      <span>plazas disponibles este mes</span>
    </div>
  </div>
</section>
    </>
  )
}
