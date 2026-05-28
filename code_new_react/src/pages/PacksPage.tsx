import { Link } from 'react-router-dom'

export default function PacksPage() {
  return (
    <>
<div style={{background:'#1A2744',color:'rgba(255,255,255,0.85)',fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'400',letterSpacing:'0.04em',textAlign:'center',padding:'10px 40px',position:'relative',zIndex:'200'}}>
  🔒 <strong>Garantía de éxito al 100% por escrito</strong>  ·  Diagnóstico gratuito sin compromiso · Respuesta en 24h  ·  <Link to="/contacto" style={{color:'#C9A84C',textDecoration:'none',fontWeight:'500'}}>Contactar →</Link>
</div>

<section className="section section--pearl" style={{paddingTop:'160px',paddingBottom:'100px'}}>
  <div className="container">
    <span className="label-tag">Packs GRC · Certificaciones combinadas</span>
    <div className="gold-line"></div>
    <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(48px,6vw,80px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 32px',maxWidth:'760px'}}>
      Certifícate en varios marcos.<br /><em>A coste marginal.</em>
    </h1>
    <p className="body-large" style={{maxWidth:'640px',marginBottom:'40px'}}>
      Los marcos de cumplimiento comparten entre el 45% y el 70% de documentación, controles y procesos. Diseñamos cada proyecto para aprovechar al máximo estas sinergias. El resultado: más certificaciones, menos tiempo, menor coste total. Un consultor que ya conoce tu organización, una sola documentación reutilizada, un solo análisis de riesgos para todos los marcos.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'20px',maxWidth:'700px',marginBottom:'48px'}}>
      <div style={{background:'var(--white)',padding:'20px',textAlign:'center',borderTop:'3px solid var(--gold)'}}>
        <p style={{fontFamily:'var(--font-serif)',fontSize:'32px',fontWeight:'300',color:'var(--navy)',marginBottom:'4px'}}>65%</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',letterSpacing:'0.06em',textTransform:'uppercase'}}>ENS → ISO 27001</p>
      </div>
      <div style={{background:'var(--white)',padding:'20px',textAlign:'center',borderTop:'3px solid var(--gold)'}}>
        <p style={{fontFamily:'var(--font-serif)',fontSize:'32px',fontWeight:'300',color:'var(--navy)',marginBottom:'4px'}}>55%</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',letterSpacing:'0.06em',textTransform:'uppercase'}}>ENS → ISO 22301</p>
      </div>
      <div style={{background:'var(--white)',padding:'20px',textAlign:'center',borderTop:'3px solid var(--gold)'}}>
        <p style={{fontFamily:'var(--font-serif)',fontSize:'32px',fontWeight:'300',color:'var(--navy)',marginBottom:'4px'}}>60%</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',letterSpacing:'0.06em',textTransform:'uppercase'}}>ISO 27001 → DORA</p>
      </div>
      <div style={{background:'var(--white)',padding:'20px',textAlign:'center',borderTop:'3px solid var(--gold)'}}>
        <p style={{fontFamily:'var(--font-serif)',fontSize:'32px',fontWeight:'300',color:'var(--navy)',marginBottom:'4px'}}>50%</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'10px',color:'var(--text-muted)',letterSpacing:'0.06em',textTransform:'uppercase'}}>ENS → NIS2</p>
      </div>
    </div>
    <Link to="/contacto" className="btn-primary">Diseñar mi pack →</Link>

<div style={{display:'inline-flex',alignItems:'center',gap:'10px',border:'1px solid #C9A84C',padding:'10px 18px',marginTop:'24px'}}>
  <span style={{fontSize:'18px',color:'#C9A84C'}}>✦</span>
  <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.08em',textTransform:'uppercase',color:'#1A2744',lineHeight:'1.4'}}>Garantía de éxito<br />al 100% por escrito</span>
</div>
  </div>
</section>


<section className="section section--white" id="logica">
  <div className="container">
    <span className="label-tag">La lógica de los packs</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>¿Por qué un pack y no<br /><em>certificaciones separadas?</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'48px',marginTop:'52px'}}>
      <div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          Cuando una empresa contrata dos proyectos de certificación con consultoras diferentes (o incluso con la misma consultora en momentos distintos), el segundo proyecto empieza casi desde cero. Hay que entender la organización de nuevo, documentar los controles de nuevo, hacer el análisis de riesgos de nuevo. Todo ese trabajo es redundante y caro.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>
          En un pack, el equipo de Avson ya conoce la organización desde el primer proyecto. La documentación se diseña desde el principio para ser reutilizable entre marcos. El análisis de riesgos sirve para todos. Las políticas de seguridad se escriben una sola vez y se adaptan a cada norma. El ahorro no es solo económico: es también en tiempo de dedicación interna del cliente.
        </p>
      </div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'16px'}}>
        <div style={{background:'var(--pearl)',padding:'28px'}}>
          <div style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--gold)',marginBottom:'8px'}}>01</div>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>Mismo equipo, menos ramp-up</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',lineHeight:'1.6'}}>El consultor que implementó el primer marco ya conoce tu empresa. No hay fase de descubrimiento en el segundo proyecto.</p>
        </div>
        <div style={{background:'var(--pearl)',padding:'28px'}}>
          <div style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--gold)',marginBottom:'8px'}}>02</div>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>Documentación reutilizable</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',lineHeight:'1.6'}}>Las políticas, procedimientos y registros se diseñan para servir a todos los marcos desde el inicio.</p>
        </div>
        <div style={{background:'var(--pearl)',padding:'28px'}}>
          <div style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--gold)',marginBottom:'8px'}}>03</div>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>Un análisis de riesgos</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',lineHeight:'1.6'}}>Una sola visión del riesgo organizacional, coherente y consistente para todos los marcos normativos.</p>
        </div>
        <div style={{background:'var(--pearl)',padding:'28px'}}>
          <div style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--gold)',marginBottom:'8px'}}>04</div>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'8px'}}>Precio total menor</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',lineHeight:'1.6'}}>El coste total del pack siempre es significativamente menor que la suma de proyectos independientes.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="packs">
  <div className="container">
    <span className="label-tag">El catálogo completo</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'520px'}}>Elige el pack<br /><em>que necesitas.</em></h2>

<div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'32px 36px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap',marginBottom:'48px'}}>
  <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'22px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>"No sé qué pack necesito." — Cuéntanos tu situación en 5 minutos y te lo decimos gratis.</span>
  <Link to="/contacto" className="btn-primary">Que me recomienden un pack →</Link>
</div>
    <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px 48px',marginBottom:'48px',maxWidth:'820px'}}>
  <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'20px'}}>Coste orientativo — por separado vs. con pack</p>
  <div style={{overflowX:'auto'}}>
    <table style={{width:'100%',borderCollapse:'collapse',fontFamily:'var(--font-sans)',fontSize:'14px'}}>
      <thead>
        <tr>
          <th style={{textAlign:'left',padding:'12px 16px',color:'rgba(255,255,255,0.5)',fontWeight:'500',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Certificaciones</th>
          <th style={{textAlign:'right',padding:'12px 16px',color:'rgba(255,255,255,0.5)',fontWeight:'500',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Por separado</th>
          <th style={{textAlign:'right',padding:'12px 16px',color:'var(--gold)',fontWeight:'600',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Con Avson Pack</th>
          <th style={{textAlign:'right',padding:'12px 16px',color:'#4ade80',fontWeight:'600',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Ahorro estimado</th>
        </tr>
      </thead>
      <tbody>
        <tr style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
          <td style={{padding:'16px',color:'rgba(255,255,255,0.9)'}}>ENS solo (Básico–Medio)</td>
          <td style={{padding:'16px',textAlign:'right',color:'rgba(255,255,255,0.6)'}}>Base</td>
          <td style={{padding:'16px',textAlign:'right',color:'var(--white)',fontWeight:'600'}}>ENS Starter</td>
          <td style={{padding:'16px',textAlign:'right',color:'rgba(255,255,255,0.4)'}}>—</td>
        </tr>
        <tr style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
          <td style={{padding:'16px',color:'rgba(255,255,255,0.9)'}}>ENS + ISO 27001</td>
          <td style={{padding:'16px',textAlign:'right',color:'rgba(255,255,255,0.5)',textDecoration:'line-through'}}>~2,3× el ENS</td>
          <td style={{padding:'16px',textAlign:'right',color:'var(--gold)',fontWeight:'700'}}>~1,3× el ENS</td>
          <td style={{padding:'16px',textAlign:'right',color:'#4ade80',fontWeight:'600'}}>~1× el ENS</td>
        </tr>
        <tr style={{borderBottom:'1px solid rgba(255,255,255,0.06)'}}>
          <td style={{padding:'16px',color:'rgba(255,255,255,0.9)'}}>ENS + ISO 22301</td>
          <td style={{padding:'16px',textAlign:'right',color:'rgba(255,255,255,0.5)',textDecoration:'line-through'}}>~2,1× el ENS</td>
          <td style={{padding:'16px',textAlign:'right',color:'var(--gold)',fontWeight:'700'}}>~1,35× el ENS</td>
          <td style={{padding:'16px',textAlign:'right',color:'#4ade80',fontWeight:'600'}}>~0,75× el ENS</td>
        </tr>
        <tr>
          <td style={{padding:'16px',color:'rgba(255,255,255,0.9)'}}>Pack Triple (ENS+27001+22301)</td>
          <td style={{padding:'16px',textAlign:'right',color:'rgba(255,255,255,0.5)',textDecoration:'line-through'}}>~3,4× el ENS</td>
          <td style={{padding:'16px',textAlign:'right',color:'var(--gold)',fontWeight:'700'}}>~1,8× el ENS</td>
          <td style={{padding:'16px',textAlign:'right',color:'#4ade80',fontWeight:'600'}}>~1,6× el ENS</td>
        </tr>
      </tbody>
    </table>
  </div>
  <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.35)',marginTop:'16px',marginBottom:'0'}}>* Ratios orientativos sobre el coste del ENS solo. El precio exacto depende del tamaño, categoría y punto de partida. Diagnóstico gratuito con propuesta en 48h.</p>
</div>

    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginTop:'52px'}}>

      
      <div className="anim-fade-up" style={{background:'linear-gradient(135deg,#1A2744 0%,#2d3f6b 100%)',border:'2px solid var(--gold)',padding:'36px',position:'relative',overflow:'hidden',display:'flex',flexDirection:'column'}}>
        <div style={{position:'absolute',top:'0',right:'0',background:'var(--gold)',color:'var(--navy)',fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'700',letterSpacing:'0.1em',textTransform:'uppercase',padding:'6px 18px'}}>⚡ URGENTE</div>
        <div style={{position:'absolute',bottom:'-40px',right:'-20px',fontSize:'120px',opacity:'0.05',color:'var(--white)',fontFamily:'var(--font-serif)',pointerEvents:'none'}}>30</div>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.06em',background:'rgba(201,168,76,0.15)',padding:'4px 10px',width:'fit-content',marginBottom:'16px'}}>30 días naturales</span>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--white)',marginBottom:'8px'}}><Link to="/ens-express" style={{color:'inherit',textDecoration:'none'}}>ENS Express</Link></h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.5)',marginBottom:'24px'}}>Para empresas con contratos públicos urgentes</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'rgba(255,255,255,0.75)',marginBottom:'24px',flex:'1'}}>¿Tienes un pliego que cierra en menos de 8 semanas? ENS Express te garantiza el certificado ENS Básico o Medio en 30 días naturales. Equipo de 3 consultores dedicados, arranque en 48 horas, reuniones diarias, y la misma garantía de éxito por escrito que nuestro servicio estándar.</p>
        <div style={{display:'flex',flexDirection:'column',gap:'10px',marginBottom:'28px'}}>
          <div style={{display:'flex',alignItems:'center',gap:'10px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)'}}><span style={{color:'var(--gold)'}}>✦</span> 3 consultores dedicados exclusivamente a tu proyecto</div>
          <div style={{display:'flex',alignItems:'center',gap:'10px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)'}}><span style={{color:'var(--gold)'}}>✦</span> Arranque garantizado en 48 horas</div>
          <div style={{display:'flex',alignItems:'center',gap:'10px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)'}}><span style={{color:'var(--gold)'}}>✦</span> Garantía de éxito por escrito · también en Express</div>
          <div style={{display:'flex',alignItems:'center',gap:'10px',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.75)'}}><span style={{color:'var(--gold)'}}>✦</span> Solo 4 plazas Express disponibles por mes</div>
        </div>
        <Link to="/ens-express" className="btn-primary btn-primary--white" style={{textAlign:'center',justifyContent:'center'}}>Ver ENS Express →</Link>
      </div>

      
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'40px',border:'1px solid var(--border)',display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Pack 01</span>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',background:'var(--pearl)',padding:'4px 10px'}}>3–4 meses</span>
        </div>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}><Link to="/ens" style={{color:'inherit',textDecoration:'none'}}>ENS Starter</Link></h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'24px'}}>Esquema Nacional de Seguridad — Básica o Media</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)',marginBottom:'24px',flex:'1'}}>La base de todo. Para empresas que quieren licitar a la Administración Pública española por primera vez o que necesitan el ENS como requisito de un contrato público vigente. Incluye análisis de riesgos, implementación de controles ENS, documentación completa y acompañamiento en la auditoría de certificación con entidad acreditada por ENAC.</p>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'16px'}}>Para: proveedores TIC del sector público</div>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>

      
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',display:'flex',flexDirection:'column',position:'relative'}}>
        <div style={{position:'absolute',top:'-1px',left:'50%',transform:'translateX(-50%)',background:'var(--gold)',color:'var(--navy)',fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'700',letterSpacing:'0.1em',textTransform:'uppercase',padding:'5px 16px',whiteSpace:'nowrap'}}>⭐ El más contratado · 67 empresas</div>
        <div style={{position:'absolute',top:'0',right:'0',background:'var(--gold)',padding:'6px 16px',fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'#fff',letterSpacing:'0.08em',textTransform:'uppercase'}}>Más solicitado</div>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'20px',marginTop:'24px'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'rgba(255,255,255,0.5)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Pack 02</span>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'rgba(255,255,255,0.5)',textTransform:'uppercase',letterSpacing:'0.06em',background:'rgba(255,255,255,0.08)',padding:'4px 10px'}}>5–6 meses</span>
        </div>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'#fff',marginBottom:'8px'}}><Link to="/ens" style={{color:'inherit',textDecoration:'none'}}>ENS</Link> + <Link to="/iso27001" style={{color:'inherit',textDecoration:'none'}}>ISO 27001</Link></h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.5)',marginBottom:'24px'}}>El pack más completo para el mercado TIC español</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'rgba(255,255,255,0.75)',marginBottom:'16px',flex:'1'}}>La combinación perfecta para proveedores TIC que quieren cubrir tanto el mercado público (ENS obligatorio) como el mercado privado e internacional (ISO 27001 exigida en contratos enterprise). Dos certificaciones por el precio de 1.3 veces el ENS solo, gracias al 65% de solapamiento. El mismo equipo, la misma documentación, la misma visión del riesgo. Garantía de éxito en ambas auditorías.</p>
        <div style={{background:'rgba(74,222,128,0.1)',borderLeft:'3px solid #4ade80',padding:'12px 16px',marginBottom:'16px'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'#4ade80',margin:'0',fontWeight:'500'}}>Si lo contratas por separado, pagas el equivalente a ~1× el ENS de más — sin razón técnica que lo justifique.</p>
        </div>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.4)',marginBottom:'16px'}}>Para: empresas TIC que venden a AAPP y a privados</div>
        <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',textAlign:'center',justifyContent:'center'}}>Solicitar presupuesto →</Link>
      </div>

      
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'40px',border:'1px solid var(--border)',display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Pack 03</span>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',background:'var(--pearl)',padding:'4px 10px'}}>5–6 meses</span>
        </div>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}><Link to="/ens" style={{color:'inherit',textDecoration:'none'}}>ENS</Link> + <Link to="/iso22301" style={{color:'inherit',textDecoration:'none'}}>ISO 22301</Link></h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'24px'}}>Para servicios que no pueden permitirse interrupciones</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)',marginBottom:'24px',flex:'1'}}>El ENS en categoría Media o Alta ya exige planes de continuidad. Este pack los eleva al nivel de certificación ISO 22301, lo que añade valor comercial (clientes que exigen continuidad certificada) y regulatorio (NIS2, DORA). El solapamiento entre el ENS y la ISO 22301 es del 55%, lo que hace este pack especialmente eficiente en términos de esfuerzo adicional.</p>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'16px'}}>Para: proveedores de servicios críticos, cloud, salud</div>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>

      
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'40px',border:'1px solid var(--border)',display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Pack 04</span>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',background:'var(--pearl)',padding:'4px 10px'}}>7–9 meses</span>
        </div>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}>Pack Triple</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'24px'}}><Link to="/ens">ENS</Link> + <Link to="/iso27001">ISO 27001</Link> + <Link to="/iso22301">ISO 22301</Link></p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)',marginBottom:'24px',flex:'1'}}>La hoja de ruta GRC completa para empresas TIC con ambición de mercado. Tres certificaciones internacionales que cubren el 100% de los requisitos de seguridad y continuidad del mercado español y europeo. El ahorro estimado frente a proyectos separados es del 32-35%. Un solo Sistema de Gestión Integrado para los tres marcos.</p>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'16px'}}>Para: la hoja de ruta GRC completa de una empresa TIC</div>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>

      
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'40px',border:'1px solid var(--border)',display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Pack 05</span>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',background:'var(--pearl)',padding:'4px 10px'}}>5–6 meses</span>
        </div>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}><Link to="/ens" style={{color:'inherit',textDecoration:'none'}}>ENS</Link> + <Link to="/nis2" style={{color:'inherit',textDecoration:'none'}}>NIS2</Link></h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'24px'}}>Para entidades afectadas por la Directiva NIS2</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)',marginBottom:'24px',flex:'1'}}>NIS2 aplica a 18 sectores críticos en la UE. Si ya tienes el ENS, el 50% del camino de adecuación a NIS2 ya está hecho. Este pack cubre los requisitos específicos de NIS2 que van más allá del ENS: notificación formal de incidentes al regulador, responsabilidad directiva documentada, y la evaluación de la cadena de suministro según la directiva europea.</p>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'16px'}}>Para: entidades esenciales e importantes en sectores NIS2</div>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>

      
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'40px',border:'1px solid var(--border)',display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Pack 06</span>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',background:'var(--pearl)',padding:'4px 10px'}}>5–6 meses</span>
        </div>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}><Link to="/ens" style={{color:'inherit',textDecoration:'none'}}>ENS</Link> + <Link to="/dora" style={{color:'inherit',textDecoration:'none'}}>DORA</Link></h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'24px'}}>Para entidades financieras y sus proveedores TIC</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)',marginBottom:'24px',flex:'1'}}>DORA entró en vigor en enero 2025 y es de aplicación directa en toda la UE. Si ya tienes el ENS, el 60% de los requisitos de DORA ya están cubiertos. Este pack añade los cinco pilares específicos de DORA: marco de riesgo TIC, notificación de incidentes al regulador financiero, pruebas de resiliencia, gestión de proveedores TIC con cláusulas DORA, e intercambio de información.</p>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'16px'}}>Para: entidades financieras y proveedores TIC del sector</div>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>

      
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px',display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'rgba(255,255,255,0.5)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Pack 07</span>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'rgba(255,255,255,0.4)',textTransform:'uppercase',letterSpacing:'0.06em',background:'rgba(255,255,255,0.08)',padding:'4px 10px'}}>9–12 meses</span>
        </div>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'#fff',marginBottom:'8px'}}>Pack Elite</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.5)',marginBottom:'24px'}}><Link to="/ens" style={{color:'inherit',textDecoration:'none'}}>ENS</Link> + <Link to="/iso27001" style={{color:'inherit',textDecoration:'none'}}>ISO 27001</Link> + <Link to="/iso22301" style={{color:'inherit',textDecoration:'none'}}>ISO 22301</Link> + <Link to="/nis2" style={{color:'inherit',textDecoration:'none'}}>NIS2</Link></p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'rgba(255,255,255,0.75)',marginBottom:'24px',flex:'1'}}>Para organizaciones que quieren el máximo nivel de compliance posible. Cuatro marcos en un solo proyecto integrado, con el ahorro estimado del 40% frente a proyectos independientes. El resultado: una organización que puede demostrar ante cualquier cliente, regulador o auditor que su gestión de la seguridad está al más alto nivel internacional. Base sólida para DORA si en el futuro también aplica.</p>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.4)',marginBottom:'16px'}}>Para: líderes de sector que quieren el máximo compliance</div>
        <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',textAlign:'center',justifyContent:'center'}}>Solicitar presupuesto →</Link>
      </div>

      
      <div className="anim-fade-up" style={{background:'var(--white)',padding:'40px',border:'1px solid var(--border)',display:'flex',flexDirection:'column'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginBottom:'20px'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Pack 08</span>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'10px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',background:'var(--pearl)',padding:'4px 10px'}}>5–6 meses</span>
        </div>
        <h3 style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)',marginBottom:'8px'}}><Link to="/iso27001" style={{color:'inherit',textDecoration:'none'}}>ISO 27001</Link> + <Link to="/iso22301" style={{color:'inherit',textDecoration:'none'}}>ISO 22301</Link></h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',marginBottom:'24px'}}>Para empresas que ya tienen <Link to="/ens">ENS</Link> o no lo necesitan</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)',marginBottom:'24px',flex:'1'}}>Si ya estás certificado en el ENS o si no necesitas el ENS (porque no vendes a AAPP), este pack combina los dos estándares internacionales más solicitados en contratos privados: seguridad de la información y continuidad de negocio. El solapamiento entre ISO 27001 e ISO 22301 es del 60%, lo que hace este pack muy eficiente para empresas internacionales o del sector privado.</p>
        <div style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'16px'}}>Para: empresas privadas, internacionales, ya con ENS</div>
        <Link to="/contacto" className="btn-text">Solicitar presupuesto →</Link>
      </div>

    </div>
  </div>
</section>


<section className="section section--white" id="urgencia">
  <div className="container" style={{maxWidth:'860px'}}>

    <div className="anim-fade-up" style={{background:'var(--pearl)',border:'1px solid var(--border)',borderLeft:'4px solid var(--gold)',padding:'32px 40px',maxWidth:'820px',margin:'0 auto 40px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap'}}>
      <div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.1em',textTransform:'uppercase',color:'var(--gold)',marginBottom:'8px'}}>⏰ Calendario de certificación</p>
        <p style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'400',color:'var(--navy)',marginBottom:'8px',lineHeight:'1.3'}}>Para tener tu certificado antes de enero 2027,<br />el proyecto debe iniciarse antes de <strong>agosto 2026.</strong></p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)'}}>Los pliegos más importantes de la Administración Pública española suelen publicarse en Q1. Si quieres presentarte, necesitas el ENS antes de diciembre.</p>
      </div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Consultar inicio →</Link>
    </div>

    <div className="anim-fade-up" style={{background:'var(--white)',border:'1px solid var(--border)',borderLeft:'4px solid #ff6b35',padding:'28px 40px',maxWidth:'820px',margin:'0 auto 0',display:'flex',alignItems:'center',gap:'20px',flexWrap:'wrap'}}>
      <span style={{fontSize:'32px'}}>🎯</span>
      <div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',letterSpacing:'0.1em',textTransform:'uppercase',color:'#ff6b35',marginBottom:'4px'}}>Capacidad limitada</p>
        <p style={{fontFamily:'var(--font-serif)',fontSize:'20px',fontWeight:'400',color:'var(--navy)',marginBottom:'4px'}}>Solo admitimos 8 proyectos de pack nuevos por trimestre.</p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)'}}>Para garantizar la calidad y la atención personalizada, limitamos el número de proyectos activos simultáneos. Si el trimestre está completo, te ponemos en lista de espera con prioridad para el siguiente.</p>
      </div>
    </div>

  </div>
</section>


<section className="section section--white" id="bonos">
  <div className="container">
    <span className="label-tag">Mantenimiento y soporte</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'520px'}}>Después de la certificación,<br /><em>no estás solo.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'52px'}}>
      Un certificado ISO dura 3 años, con auditorías anuales de seguimiento. La documentación cambia cuando cambia la organización. Los riesgos evolucionan. Los controles deben revisarse. Nuestros bonos de mantenimiento están diseñados para que el SGSI siga siendo funcional y supere las auditorías periódicas sin sobresaltos.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px'}}>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'48px',fontWeight:'300',color:'var(--gold)',marginBottom:'4px'}}>10h</div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'16px'}}>Bono Mantenimiento Básico</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)',marginBottom:'24px'}}>Para organizaciones con un SGSI estable que solo necesitan apoyo puntual para las auditorías de seguimiento. Incluye revisión de los cambios organizativos con impacto en el sistema de gestión, actualización de los documentos afectados, soporte durante la auditoría de seguimiento y revisión del plan de mejoras posterior a la auditoría.</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.7'}}>
          <li style={{padding:'5px 0',borderBottom:'1px solid var(--border)'}}>Revisión de cambios con impacto en el SGSI</li>
          <li style={{padding:'5px 0',borderBottom:'1px solid var(--border)'}}>Actualización de documentos afectados</li>
          <li style={{padding:'5px 0',borderBottom:'1px solid var(--border)'}}>Soporte durante la auditoría de seguimiento</li>
          <li style={{padding:'5px 0'}}>Revisión del plan de mejoras post-auditoría</li>
        </ul>
      </div>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'40px'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'48px',fontWeight:'300',color:'var(--gold)',marginBottom:'4px'}}>25h</div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'#fff',marginBottom:'16px'}}>Bono Mantenimiento Completo</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'rgba(255,255,255,0.75)',marginBottom:'24px'}}>Para organizaciones que evolucionan rápido, tienen cambios frecuentes de alcance, o quieren el máximo nivel de soporte durante el año. Incluye gestión de incidentes de seguridad con impacto en el SGSI, revisión trimestral del estado del sistema, formación anual al equipo, y preparación completa para la auditoría de seguimiento o renovación.</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'13px',color:'rgba(255,255,255,0.65)',lineHeight:'1.7'}}>
          <li style={{padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Todo lo del bono básico</li>
          <li style={{padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Gestión de incidentes con impacto en el SGSI</li>
          <li style={{padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Revisión trimestral del estado del sistema</li>
          <li style={{padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.1)'}}>Formación anual al equipo interno</li>
          <li style={{padding:'5px 0'}}>Preparación auditoría renovación (año 3)</li>
        </ul>
      </div>
      <div className="anim-fade-up" style={{border:'1px solid var(--border)',padding:'40px'}}>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'32px',fontWeight:'300',color:'var(--gold)',marginBottom:'4px'}}>Revisión</div>
        <div style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'var(--navy)',marginBottom:'16px'}}>Anual</div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)',marginBottom:'24px'}}>Auditoría interna completa del SGSI realizada por el equipo de Avson, con informe detallado del estado de cumplimiento de todos los controles. Incluye el análisis de la evolución del contexto organizacional, las lecciones aprendidas de incidentes del año, y el plan de mejoras priorizado para el siguiente ciclo. El entregable es el input formal para la revisión por la dirección.</p>
        <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-muted)',lineHeight:'1.7'}}>
          <li style={{padding:'5px 0',borderBottom:'1px solid var(--border)'}}>Auditoría interna completa</li>
          <li style={{padding:'5px 0',borderBottom:'1px solid var(--border)'}}>Informe de estado del SGSI</li>
          <li style={{padding:'5px 0',borderBottom:'1px solid var(--border)'}}>Plan de mejoras priorizado</li>
          <li style={{padding:'5px 0'}}>Input para revisión por la dirección</li>
        </ul>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="comparativa">
  <div className="container">
    <span className="label-tag">¿Cuánto ahorro con un pack?</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Los números hablan<br /><em>por sí solos.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'52px'}}>
      Las cifras siguientes son estimaciones de coste relativo, tomando el ENS en solitario como base (100%). El porcentaje de ahorro estimado refleja la diferencia entre el coste del pack integrado y la suma de los proyectos independientes.
    </p>
    <div style={{background:'var(--white)',overflow:'auto'}}>
      <table style={{width:'100%',borderCollapse:'collapse',fontFamily:'var(--font-sans)',fontSize:'14px'}}>
        <thead>
          <tr style={{background:'var(--navy)'}}>
            <th style={{padding:'16px 20px',textAlign:'left',color:'rgba(255,255,255,0.7)',fontWeight:'500',fontSize:'11px',letterSpacing:'0.06em',textTransform:'uppercase'}}>Combinación</th>
            <th style={{padding:'16px 20px',textAlign:'center',color:'rgba(255,255,255,0.7)',fontWeight:'500',fontSize:'11px',letterSpacing:'0.06em',textTransform:'uppercase'}}>Proyectos separados</th>
            <th style={{padding:'16px 20px',textAlign:'center',color:'var(--gold)',fontWeight:'600',fontSize:'11px',letterSpacing:'0.06em',textTransform:'uppercase'}}>Pack Avson</th>
            <th style={{padding:'16px 20px',textAlign:'center',color:'rgba(255,255,255,0.7)',fontWeight:'500',fontSize:'11px',letterSpacing:'0.06em',textTransform:'uppercase'}}>Ahorro estimado</th>
          </tr>
        </thead>
        <tbody>
          <tr style={{borderBottom:'1px solid var(--border)'}}>
            <td style={{padding:'16px 20px',color:'var(--navy)',fontWeight:'500'}}>ENS solo</td>
            <td style={{padding:'16px 20px',textAlign:'center',color:'var(--text-muted)'}}>100%</td>
            <td style={{padding:'16px 20px',textAlign:'center',fontWeight:'600',color:'var(--navy)'}}>100%</td>
            <td style={{padding:'16px 20px',textAlign:'center',color:'var(--text-muted)'}}>Base</td>
          </tr>
          <tr style={{borderBottom:'1px solid var(--border)',background:'var(--pearl)'}}>
            <td style={{padding:'16px 20px',color:'var(--navy)',fontWeight:'500'}}>ENS + ISO 27001</td>
            <td style={{padding:'16px 20px',textAlign:'center',color:'var(--text-muted)'}}>100% + 80% = 180%</td>
            <td style={{padding:'16px 20px',textAlign:'center',fontWeight:'600',color:'var(--navy)'}}>~130%</td>
            <td style={{padding:'16px 20px',textAlign:'center',fontWeight:'600',color:'var(--gold)'}}>~28%</td>
          </tr>
          <tr style={{borderBottom:'1px solid var(--border)'}}>
            <td style={{padding:'16px 20px',color:'var(--navy)',fontWeight:'500'}}>ENS + ISO 22301</td>
            <td style={{padding:'16px 20px',textAlign:'center',color:'var(--text-muted)'}}>100% + 75% = 175%</td>
            <td style={{padding:'16px 20px',textAlign:'center',fontWeight:'600',color:'var(--navy)'}}>~130%</td>
            <td style={{padding:'16px 20px',textAlign:'center',fontWeight:'600',color:'var(--gold)'}}>~26%</td>
          </tr>
          <tr style={{borderBottom:'1px solid var(--border)',background:'var(--pearl)'}}>
            <td style={{padding:'16px 20px',color:'var(--navy)',fontWeight:'500'}}>Pack Triple (ENS + ISO 27001 + ISO 22301)</td>
            <td style={{padding:'16px 20px',textAlign:'center',color:'var(--text-muted)'}}>100% + 80% + 75% = 255%</td>
            <td style={{padding:'16px 20px',textAlign:'center',fontWeight:'600',color:'var(--navy)'}}>~170%</td>
            <td style={{padding:'16px 20px',textAlign:'center',fontWeight:'600',color:'var(--gold)'}}>~33%</td>
          </tr>
          <tr style={{borderBottom:'1px solid var(--border)'}}>
            <td style={{padding:'16px 20px',color:'var(--navy)',fontWeight:'500'}}>Pack Elite (ENS + ISO 27001 + ISO 22301 + NIS2)</td>
            <td style={{padding:'16px 20px',textAlign:'center',color:'var(--text-muted)'}}>100% + 80% + 75% + 60% = 315%</td>
            <td style={{padding:'16px 20px',textAlign:'center',fontWeight:'600',color:'var(--navy)'}}>~190%</td>
            <td style={{padding:'16px 20px',textAlign:'center',fontWeight:'600',color:'var(--gold)'}}>~40%</td>
          </tr>
        </tbody>
      </table>
    </div>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginTop:'16px',lineHeight:'1.6'}}>Nota: Los porcentajes son estimaciones indicativas. El ahorro real depende del tamaño de la empresa, el alcance de cada marco y el punto de partida. El diagnóstico gratuito de Avson incluye una estimación personalizada.</p>

<div style={{background:'var(--pearl)',padding:'48px',border:'1px solid var(--border)',marginTop:'48px',textAlign:'center'}}>
  <span className="label-tag" style={{textAlign:'center',display:'block'}}>Ahorro real</span>
  <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'36px',fontWeight:'400',color:'var(--navy)',marginBottom:'32px'}}>
    Certificarte por separado cuesta entre un 40% y un 60% más.
  </h3>
  <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'1px',background:'var(--border)'}}>
    <div style={{background:'var(--white)',padding:'32px 24px',textAlign:'center'}}>
      <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'48px',fontWeight:'300',color:'var(--navy)'}}>3</div>
      <div style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'12px'}}>proyectos separados</div>
      <div style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}><Link to="/ens">ENS</Link> + <Link to="/iso27001">ISO 27001</Link> + <Link to="/iso22301">ISO 22301</Link><br />contratados individualmente</div>
      <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',color:'#C0392B',marginTop:'16px'}}>100% del coste</div>
    </div>
    <div style={{background:'var(--white)',padding:'32px 24px',textAlign:'center',borderLeft:'2px solid var(--gold)',borderRight:'2px solid var(--gold)'}}>
      <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'48px',fontWeight:'300',color:'var(--navy)'}}>1</div>
      <div style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'12px'}}>Pack Triple Avson</div>
      <div style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>ENS + ISO 27001 + ISO 22301<br />con sinergia al 100%</div>
      <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',color:'#27AE60',marginTop:'16px'}}>~60% del coste</div>
    </div>
    <div style={{background:'var(--white)',padding:'32px 24px',textAlign:'center'}}>
      <div style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'48px',fontWeight:'300',color:'var(--gold)'}}>40%</div>
      <div style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'12px'}}>de ahorro garantizado</div>
      <div style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.6'}}>Aprovechando el solapamiento<br />entre marcos de certificación</div>
      <div style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',fontWeight:'600',color:'var(--navy)',marginTop:'16px'}}>+ un solo equipo que te conoce</div>
    </div>
  </div>
  <Link to="/contacto" className="btn-primary" style={{marginTop:'40px',display:'inline-flex'}}>Consultar precio de mi pack →</Link>
</div>
  </div>
</section>


<section className="section section--pearl" id="casos">
  <div className="container">
    <span className="label-tag">Packs · Casos de éxito</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>Lo que dicen nuestros<br /><em>clientes.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'#fff',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Empezamos con el ENS porque lo necesitábamos para un pliego. Avson nos convenció de añadir el ISO 27001 al mismo proyecto. La diferencia de coste fue marginal y ahora tenemos dos certificaciones que nos han abierto el mercado privado también. Fue la mejor decisión del año.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid rgba(255,255,255,0.15)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'#fff',margin:'0'}}>Marina Torres</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.45)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>CEO · Empresa de software de gestión · Madrid</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',border:'1px solid var(--border)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'var(--navy)',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Contratamos el Pack Triple porque queríamos cerrar el capítulo GRC de una vez. Un proyecto, un equipo, nueve meses de trabajo. Al final teníamos ENS, ISO 27001 e ISO 22301 certificadas, y el coste total fue un 35% menos de lo que nos habían presupuestado otros proveedores por los tres proyectos separados.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid var(--border)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'var(--navy)',margin:'0'}}>Sergio Méndez</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>CTO · Proveedor de plataforma SaaS B2B · Barcelona</p>
        </div>
      </div>
    </div>
    <div style={{textAlign:'center',marginTop:'48px'}}><Link to="/contacto" className="btn-primary">Hablar con un experto →</Link></div>
  </div>
</section>


<section className="section section--pearl" id="faq">
  <div className="container" style={{maxWidth:'760px'}}>
    <span className="label-tag">Preguntas frecuentes</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'480px'}}>Todo sobre<br /><em>los packs.</em></h2>
    <div style={{marginTop:'48px'}}>
      <div className="faq-item">
        <div className="faq-item__question">¿Cómo funcionan los packs de certificación?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Los packs combinan múltiples certificaciones en un solo proyecto integrado. El equipo de Avson diseña el proyecto desde el principio para maximizar el solapamiento entre marcos: el análisis de riesgos se hace una sola vez para todos, las políticas se escriben de forma que cumplan con los requisitos de cada norma, y la auditoría interna cubre todos los marcos al mismo tiempo. El resultado es un ahorro estimado de entre el 25% y el 40% respecto a proyectos independientes, con un tiempo de dedicación del cliente también significativamente menor.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué está incluido en el precio del pack?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Todos los packs de Avson incluyen: gap analysis inicial, implementación completa de controles, documentación completa del sistema de gestión (políticas, procedimientos, registros), auditoría interna previa a la certificación, acompañamiento durante la auditoría de certificación con la entidad certificadora, y la garantía de éxito. Lo que no está incluido en el precio del pack es la tarifa de la entidad certificadora acreditada, que se paga directamente a la certificadora y depende del tamaño de la empresa y el alcance. Avson te ayuda a seleccionar la certificadora y a negociar las condiciones.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Puedo añadir una certificación más tarde si empiezo con solo una?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Sí. Si empiezas con el ENS y después decides añadir ISO 27001, el trabajo ya hecho para el ENS reduce significativamente el esfuerzo del proyecto ISO 27001. El ahorro no es tan grande como si hubieras empezado con el pack completo desde el principio (porque en el pack diseñamos la documentación para reutilizarla desde el inicio), pero sigue siendo mayor del 20% respecto a un proyecto ISO 27001 completamente nuevo. Muchos de nuestros clientes empiezan con una certificación y van añadiendo más a medida que crece su empresa.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué pasa si ya tengo una certificación de otra consultora?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Podemos tomar el relevo y añadir el siguiente marco al que ya tienes. Empezamos con una revisión del sistema de gestión existente para entender qué está implementado, qué funciona bien y qué tiene margen de mejora. A partir de ahí, diseñamos el proyecto de ampliación aprovechando el trabajo ya hecho. No es tan eficiente como haber empezado el pack desde cero con Avson, pero seguimos siendo capaces de extraer un solapamiento significativo del trabajo anterior.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿El plazo del pack es el tiempo total o los tiempos corren en paralelo?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Los tiempos del pack son el plazo total del proyecto integrado, no la suma de los plazos individuales. En la mayoría de los packs, los marcos se implementan de forma secuencial o con solapamiento parcial, dependiendo de las dependencias entre ellos. El análisis de riesgos y la documentación base se hacen al principio y sirven para todos los marcos. Las fases específicas de cada norma se desarrollan una vez establecida esa base. El resultado es que el Pack Triple (ENS + ISO 27001 + ISO 22301) tarda 7-9 meses, frente a los 12-15 meses que tardarían los tres proyectos por separado.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Hay formas de pago flexibles?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Sí. Trabajamos con pagos fraccionados adaptados al ritmo del proyecto. Habitualmente: un porcentaje al inicio del proyecto, otro porcentaje a mitad del proyecto, y el resto a la obtención del certificado. Esta estructura de pagos alinea nuestros intereses con los del cliente: la mayor parte del pago se desbloquea cuando el objetivo está logrado. Para proyectos con bonos de mantenimiento anuales, el bono se paga al inicio de cada año de mantenimiento.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué incluye exactamente la garantía de éxito?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>La garantía de éxito de Avson significa que si, siguiendo nuestra metodología y el plan de trabajo acordado, no superamos la auditoría de certificación en el primer intento, Avson cubre el coste de la segunda auditoría con la entidad certificadora sin cargo adicional para el cliente. Esta garantía aplica cuando el cliente ha seguido las recomendaciones del equipo de Avson y ha completado las fases del proyecto según lo planificado. La garantía está incluida en el contrato de todos los proyectos de certificación, no es un add-on opcional.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Puedo empezar sin tener claro qué pack necesito?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Sí. El diagnóstico gratuito de Avson está diseñado precisamente para eso: analizar tu situación, tus clientes, tus requisitos regulatorios y tus objetivos de negocio, y recomendarte el pack más eficiente para tu caso concreto. Muchos clientes llegan sin saber exactamente qué necesitan — saben que necesitan "algo de certificaciones" pero no cuáles ni en qué orden. La primera reunión con el consultor resuelve esa duda en 45 minutos.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuándo debo contratar para tener el certificado antes de una licitación específica?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Para un proceso estándar de 3–4 meses (ENS Básico o Medio), necesitas contratar al menos 4 meses antes de la fecha en que necesitas presentar el certificado — y algo más si quieres margen de seguridad. Si tienes un pliego que cierra antes, existe el servicio <Link to="/ens-express">ENS Express</Link> (30 días naturales), pero las plazas son muy limitadas: solo 4 proyectos Express por mes. Consulta disponibilidad lo antes posible — cuantos más días tengamos, mejor resultado aseguramos y más cómoda es la implementación para tu equipo.</p></div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy">
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>Packs GRC · Diagnóstico gratuito</span>
    <div className="gold-line" style={{margin:'20px auto 0'}}></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'32px 0 24px'}}>
      Diseñamos el pack<br /><em>a tu medida.</em>
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',color:'rgba(255,255,255,0.65)',maxWidth:'520px',margin:'0 auto 40px',lineHeight:'1.7'}}>
      Diagnóstico gratuito. Te decimos qué pack tiene más sentido para tu situación, qué marcos necesitas realmente, y cuánto costaría frente a hacer los proyectos por separado.
    </p>
    <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',fontSize:'15px',padding:'18px 36px'}}>Diseñar mi pack →</Link>
  </div>
</section><div id="stickyBar" style={{display:'none',position:'fixed',bottom:'0',left:'0',right:'0',zIndex:'500',background:'#1A2744',borderTop:'1px solid rgba(255,255,255,0.08)',padding:'14px 20px',justifyContent:'space-between',gap:'12px',alignItems:'center'}}>
  <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>¿Necesitas certificarte?</span>
  <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#fff',border:'1px solid #fff',padding:'10px 20px',textDecoration:'none',whiteSpace:'nowrap'}}>Diagnóstico gratuito →</Link>
</div>
    </>
  )
}
