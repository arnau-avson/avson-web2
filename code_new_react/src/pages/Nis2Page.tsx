import { Link } from 'react-router-dom'

export default function Nis2Page() {
  return (
    <>
<div style={{background:'#1A2744',color:'rgba(255,255,255,0.85)',fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'400',letterSpacing:'0.04em',textAlign:'center',padding:'10px 40px',position:'relative',zIndex:'200'}}>
  🔒 <strong>Garantía de éxito al 100% por escrito</strong>  ·  Diagnóstico gratuito sin compromiso · Respuesta en 24h  ·  <Link to="/contacto" style={{color:'#C9A84C',textDecoration:'none',fontWeight:'500'}}>Contactar →</Link>
</div>

<section className="section section--pearl" style={{paddingTop:'160px',paddingBottom:'100px'}}>
  <div className="container">
    <span className="label-tag">NIS2 · Directiva EU 2022/2555 · Transposición pendiente en España</span>
    <div className="gold-line"></div>
    <h1 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(48px,6vw,80px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 32px',maxWidth:'720px'}}>
      NIS2: ciberseguridad obligatoria<br /><em>en sectores críticos.</em>
    </h1>
    <p className="body-large" style={{maxWidth:'620px',marginBottom:'32px'}}>
      La Directiva NIS2 (Network and Information Security 2) eleva significativamente los requisitos de ciberseguridad para entidades esenciales e importantes en sectores críticos de la UE. España está en proceso de transposición. Prepararse ahora es una ventaja competitiva: las empresas que anticipen el cumplimiento evitarán la presión regulatoria y estarán mejor posicionadas cuando entre en vigor la ley española.
    </p>
    <div style={{background:'#fff3cd',border:'1px solid var(--gold)',padding:'20px 28px',marginBottom:'40px',maxWidth:'640px',borderLeft:'4px solid var(--gold)'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'var(--navy)',marginBottom:'6px'}}>Atención: NIS2 ya está en vigor en la UE</p>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.6'}}>La Directiva NIS2 ya está en vigor en la UE. España debe completar su transposición. Las empresas afectadas que no se preparen se exponen a sanciones de hasta 10 millones de euros o el 2% de su facturación global anual.</p>
    </div>
    <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginBottom:'52px'}}>
      <Link to="/contacto" className="btn-primary">Diagnóstico NIS2 gratuito →</Link>
      <Link to="/packs" className="btn-text">Ver pack ENS + NIS2 →</Link>
    </div>
    <div style={{display:'flex',gap:'40px',flexWrap:'wrap'}}>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>18</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>sectores afectados</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>10M€</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>sanción máxima</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>50%</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>cubierto por ENS + ISO 27001</span>
      </div>
      <div style={{display:'flex',flexDirection:'column'}}>
        <span style={{fontFamily:'var(--font-serif)',fontSize:'36px',fontWeight:'300',color:'var(--navy)'}}>24h</span>
        <span style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',letterSpacing:'0.08em',textTransform:'uppercase'}}>para notificar incidentes</span>
      </div>
    </div>

<div style={{display:'inline-flex',alignItems:'center',gap:'10px',border:'1px solid #C9A84C',padding:'10px 18px',marginTop:'24px'}}>
  <span style={{fontSize:'18px',color:'#C9A84C'}}>✦</span>
  <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.08em',textTransform:'uppercase',color:'#1A2744',lineHeight:'1.4'}}>Garantía de éxito<br />al 100% por escrito</span>
</div>
  </div>
</section>


<section className="section section--white" id="que-es">
  <div className="container">
    <span className="label-tag">NIS2 · Qué es</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'580px'}}>Más alcance, más requisitos,<br /><em>más sanciones.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'60px',marginTop:'52px'}}>
      <div>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          La Directiva NIS2 (Network and Information Systems Directive 2), formalmente la Directiva (UE) 2022/2555, es la revisión en profundidad de la Directiva NIS original de 2016. Amplía drásticamente el alcance de los requisitos de ciberseguridad en la UE, pasando de 7 a 18 sectores cubiertos y estableciendo una distinción entre entidades esenciales (mayor impacto sistémico) y entidades importantes (menor pero significativo impacto).
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',marginBottom:'24px'}}>
          Los cambios más significativos respecto a NIS1 son el alcance mucho más amplio (se estima que NIS2 afecta a diez veces más entidades que NIS1 en Europa), la responsabilidad personal de la dirección en el cumplimiento de los requisitos de ciberseguridad, las sanciones significativamente más elevadas, los plazos de notificación de incidentes más estrictos y la extensión de los requisitos a la cadena de suministro.
        </p>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)'}}>
          Para las empresas que ya tienen el <Link to="/ens">ENS</Link> o <Link to="/iso27001">ISO 27001</Link>, la adecuación a NIS2 es mucho más accesible de lo que parece: el solapamiento de controles con ISO 27001 es de aproximadamente el 60-70%. Lo nuevo de NIS2 es la obligación de notificación formal al regulador, la responsabilidad directiva explícita y la extensión de los requisitos a la cadena de suministro.
        </p>
      </div>
      <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--navy)',letterSpacing:'0.08em',textTransform:'uppercase',marginBottom:'4px'}}>NIS1 vs NIS2 — Los cambios clave</h3>
        <div style={{background:'var(--pearl)',padding:'0'}}>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr'}}>
            <div style={{padding:'20px 24px',borderRight:'1px solid rgba(0,0,0,0.08)'}}>
              <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--text-muted)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'12px'}}>NIS1 (2016)</p>
              <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-body)',lineHeight:'1.7'}}>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>7 sectores</li>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>Solo operadores de servicios esenciales</li>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>Sanciones bajas y variables</li>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(0,0,0,0.06)'}}>Sin responsabilidad directiva explícita</li>
                <li style={{padding:'5px 0'}}>Sin requisitos cadena de suministro</li>
              </ul>
            </div>
            <div style={{padding:'20px 24px',background:'var(--navy)'}}>
              <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.06em',marginBottom:'12px'}}>NIS2 (2022)</p>
              <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'12px',color:'rgba(255,255,255,0.8)',lineHeight:'1.7'}}>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>18 sectores</li>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Esenciales + Importantes</li>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Hasta 10M€ o 2% facturación global</li>
                <li style={{padding:'5px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Responsabilidad personal de directivos</li>
                <li style={{padding:'5px 0'}}>Cadena de suministro incluida</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="sectores">
  <div className="container">
    <span className="label-tag">¿Te aplica NIS2?</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>18 sectores bajo<br /><em>la lupa de NIS2.</em></h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'var(--text-body)',maxWidth:'640px',marginBottom:'52px'}}>
      La distinción entre entidades esenciales e importantes determina el nivel de supervisión y las sanciones aplicables. Las entidades esenciales tienen requisitos más exigentes y están sujetas a supervisión proactiva, mientras que las importantes están sujetas a supervisión reactiva (el regulador actúa principalmente cuando se detectan incidentes o incumplimientos).
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'32px'}}>
      <div>
        <div style={{background:'var(--navy)',padding:'8px 20px',marginBottom:'0',display:'inline-block'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em'}}>Entidades esenciales — 11 sectores</p>
        </div>
        <div style={{background:'var(--white)',padding:'28px 32px',border:'1px solid var(--border)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'16px'}}>Sanción máxima: 10M€ o 2% facturación global</p>
          <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.7'}}>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Energía (electricidad, gas, calefacción, petróleo, hidrógeno)</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Transporte (aéreo, ferroviario, marítimo, por carretera)</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Banca y entidades de crédito</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Infraestructuras de mercados financieros</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Sector sanitario (hospitales, laboratorios, I+D)</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Agua potable</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Aguas residuales</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Infraestructuras digitales (IXPs, DNS, cloud, CDN, datacenters)</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Gestión de servicios TIC entre empresas (MSPs, MSSPs)</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Administración pública (nacional y regional)</li>
            <li style={{padding:'8px 0',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Espacio (operadores de infraestructuras terrestres)</li>
          </ul>
        </div>
      </div>
      <div>
        <div style={{background:'var(--gold)',padding:'8px 20px',marginBottom:'0',display:'inline-block'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'#fff',textTransform:'uppercase',letterSpacing:'0.08em'}}>Entidades importantes — 7 sectores</p>
        </div>
        <div style={{background:'var(--white)',padding:'28px 32px',border:'1px solid var(--border)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'12px',color:'var(--text-muted)',marginBottom:'16px'}}>Sanción máxima: 7M€ o 1,4% facturación global</p>
          <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'14px',color:'var(--text-body)',lineHeight:'1.7'}}>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Servicios postales y mensajería</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Gestión de residuos</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Fabricación y distribución de productos químicos</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Producción y distribución de alimentos</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Fabricación (médicos, informáticos, electrónica, maquinaria, vehículos)</li>
            <li style={{padding:'8px 0',borderBottom:'1px solid var(--border)',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Proveedores de servicios digitales (marketplaces, motores de búsqueda, redes sociales)</li>
            <li style={{padding:'8px 0',display:'flex',gap:'12px'}}><span style={{color:'var(--gold)',fontWeight:'600',flexShrink:'0'}}>→</span>Investigación (organizaciones de investigación)</li>
          </ul>
        </div>
      </div>
    </div>
    <div style={{background:'var(--white)',padding:'24px 32px',marginTop:'24px',border:'1px solid var(--border)'}}>
      <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}><strong style={{color:'var(--navy)'}}>Umbrales de tamaño:</strong> En general, NIS2 aplica a organizaciones medianas (50+ empleados o 10M€+ de facturación) y grandes en los sectores listados. Sin embargo, hay excepciones para ciertos tipos de entidades que quedan incluidas independientemente de su tamaño (infraestructuras críticas específicas, administración pública, proveedores de servicios de confianza, etc.).</p>
    </div>

<div style={{background:'#F7F7F5',border:'1px solid #E5E5E0',borderLeft:'3px solid #C9A84C',padding:'32px 36px',display:'flex',alignItems:'center',justifyContent:'space-between',gap:'32px',flexWrap:'wrap',marginTop:'48px'}}>
  <span style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'22px',fontWeight:'400',color:'#1A2744',lineHeight:'1.3',flex:'1',minWidth:'200px'}}>"Si ya tienes ENS, el 50% del trabajo para NIS2 está hecho. Te decimos exactamente qué falta."</span>
  <Link to="/contacto" className="btn-primary">Análisis de brecha gratuito →</Link>
</div>
  </div>
</section>


<section className="section section--white" id="requisitos">
  <div className="container">
    <span className="label-tag">Obligaciones NIS2</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>Qué exige NIS2<br /><em>a tu organización.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'32px'}}>
        <div style={{width:'40px',height:'40px',background:'var(--gold)',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff'}}>01</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Gobierno y gestión del riesgo</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7'}}>Políticas de seguridad de la información aprobadas formalmente por el órgano de dirección. Los directivos deben recibir formación en ciberseguridad y asumir responsabilidad personal en el cumplimiento de NIS2. El incumplimiento puede acarrear inhabilitación temporal para ejercer funciones directivas.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'32px'}}>
        <div style={{width:'40px',height:'40px',background:'var(--gold)',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff'}}>02</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Gestión de incidentes</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7'}}>Notificación al INCIBE-CERT o al organismo supervisor competente en plazos muy estrictos: alerta temprana en 24 horas desde la detección del incidente significativo, notificación completa en 72 horas, e informe final en 1 mes. Los criterios de "incidente significativo" quedan definidos en normas técnicas europeas.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'32px'}}>
        <div style={{width:'40px',height:'40px',background:'var(--gold)',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff'}}>03</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Continuidad del negocio</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7'}}>Planes de continuidad de negocio documentados y probados, gestión de crisis, procedimientos de recuperación ante desastres y copias de seguridad. ISO 22301 cubre este requisito de forma integral. NIS2 exige que estos planes se revisen periódicamente y que el equipo de dirección participe en ejercicios de crisis.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'32px'}}>
        <div style={{width:'40px',height:'40px',background:'var(--gold)',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff'}}>04</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Seguridad de la cadena de suministro</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7'}}>Evaluación de la seguridad de los proveedores y los acuerdos contractuales que garanticen el nivel adecuado de seguridad en toda la cadena. Esto incluye due diligence de proveedores, revisión de cláusulas de seguridad en contratos y la gestión de los riesgos asociados a las dependencias de proveedores críticos de software y hardware.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'32px'}}>
        <div style={{width:'40px',height:'40px',background:'var(--gold)',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff'}}>05</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Seguridad en el desarrollo</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7'}}>Prácticas de desarrollo y mantenimiento de sistemas de información seguras: gestión de vulnerabilidades técnicas, ciclo de vida de desarrollo seguro (SDL), pruebas de penetración periódicas y gestión del ciclo de vida de los activos tecnológicos. Especialmente relevante para entidades con desarrollo de software propio.</p>
      </div>
      <div className="anim-fade-up" style={{background:'var(--pearl)',padding:'32px'}}>
        <div style={{width:'40px',height:'40px',background:'var(--gold)',marginBottom:'20px',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'600',color:'#fff'}}>06</span>
        </div>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'15px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Formación y concienciación</h3>
        <p style={{fontFamily:'var(--font-sans)',fontSize:'13px',color:'var(--text-body)',lineHeight:'1.7'}}>Programas de formación en ciberseguridad para todos los empleados y programas específicos para la dirección. NIS2 hace explícita la obligación de que los órganos de dirección sean formados en gestión del riesgo de ciberseguridad, con énfasis en las responsabilidades personales que les aplican.</p>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy" id="sinergias">
  <div className="container">
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>Sinergias con marcos existentes</span>
    <div className="gold-line"></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'0 0 32px',maxWidth:'680px'}}>
      ENS + ISO 27001 cubren<br />entre el 60% y el 70% de NIS2.
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'16px',lineHeight:'1.8',color:'rgba(255,255,255,0.7)',maxWidth:'640px',marginBottom:'48px'}}>
      NIS2 no inventa nuevos controles de ciberseguridad: codifica en ley las buenas prácticas que ISO 27001 ya implementa. La diferencia es que ahora son obligatorias para los sectores en alcance y las sanciones por incumplimiento son significativas.
    </p>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginBottom:'40px'}}>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Lo que ya cubre ENS + ISO 27001 (60-70%)</h3>
        <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:'1.8'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Análisis y tratamiento de riesgos de seguridad</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Políticas de seguridad aprobadas por la dirección</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Gestión de incidentes de seguridad</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Control de acceso y gestión de identidades</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Copias de seguridad y continuidad básica</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Cifrado y seguridad de comunicaciones</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Gestión de vulnerabilidades técnicas</li>
          <li style={{padding:'6px 0'}}>Formación y concienciación del personal</li>
        </ul>
      </div>
      <div style={{background:'rgba(255,255,255,0.06)',padding:'32px',border:'1px solid rgba(255,255,255,0.12)'}}>
        <h3 style={{fontFamily:'var(--font-sans)',fontSize:'13px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'20px'}}>Lo específico de NIS2 (30-40% adicional)</h3>
        <ul style={{listStyle:'none',padding:'0',margin:'0',fontFamily:'var(--font-sans)',fontSize:'14px',color:'rgba(255,255,255,0.7)',lineHeight:'1.8'}}>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Registro como entidad afectada ante el regulador</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Notificación formal de incidentes en 24/72h</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Responsabilidad personal documentada de directivos</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Evaluación formal de seguridad de la cadena de suministro</li>
          <li style={{padding:'6px 0',borderBottom:'1px solid rgba(255,255,255,0.08)'}}>Formación específica de la dirección en NIS2</li>
          <li style={{padding:'6px 0'}}>Revisión periódica por autoridad supervisora</li>
        </ul>
      </div>
    </div>
    <Link to="/packs" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff'}}>Ver pack ENS + NIS2 →</Link>
  </div>
</section>


<section className="section section--pearl" id="proceso">
  <div className="container">
    <span className="label-tag">Nuestro proceso</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'520px'}}>De la incertidumbre al<br /><em>cumplimiento en 4–6 meses.</em></h2>
    <div style={{display:'flex',flexDirection:'column',gap:'0',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 1–2</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 01</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Análisis de alcance NIS2</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Determinamos si la organización está en el ámbito de NIS2 y qué clasificación le corresponde (esencial o importante). Analizamos el sector, el tamaño y las actividades específicas para una clasificación precisa. Si hay incertidumbre, evaluamos los criterios de la directiva y la normativa española de transposición para dar una respuesta definitiva.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 3–5</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 02</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Gap analysis respecto a NIS2</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Evaluamos el estado actual de los controles de seguridad frente a los requisitos de NIS2. Si ya tienes el ENS o ISO 27001, identificamos qué está cubierto y qué gaps específicos de NIS2 quedan por abordar. El resultado es un informe de gaps priorizado por riesgo regulatorio y operativo, que sirve de base para el plan de adecuación.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 6–8</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 03</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Plan de adecuación</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Diseñamos el plan de adecuación con los proyectos, responsables, plazos y recursos necesarios para cerrar cada gap. El plan incluye las acciones para la gobernanza (implicación de la dirección, asignación de responsabilidades), las medidas técnicas, los procedimientos de notificación de incidentes y la estrategia para la cadena de suministro.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0',borderBottom:'1px solid rgba(0,0,0,0.08)'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 9–20</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 04</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Implementación</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Implementamos los controles, procedimientos y mecanismos de gobierno definidos en el plan de adecuación. Incluye la formación de directivos en sus responsabilidades NIS2, el establecimiento de los procedimientos de notificación de incidentes al regulador, la revisión de contratos con proveedores críticos y el diseño del programa de pruebas de resiliencia.</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{display:'grid',gridTemplateColumns:'140px 1fr',gap:'0'}}>
        <div style={{padding:'32px 24px 32px 0',borderRight:'2px solid var(--gold)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',fontWeight:'600',color:'var(--gold)',textTransform:'uppercase',letterSpacing:'0.08em',marginBottom:'4px'}}>Semanas 21–24</p>
          <p style={{fontFamily:'var(--font-serif)',fontSize:'28px',fontWeight:'300',color:'var(--navy)'}}>Fase 05</p>
        </div>
        <div style={{padding:'32px 0 32px 32px'}}>
          <h3 style={{fontFamily:'var(--font-sans)',fontSize:'16px',fontWeight:'600',color:'var(--navy)',marginBottom:'12px'}}>Validación y registro ante el regulador</h3>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',lineHeight:'1.7',color:'var(--text-body)'}}>Revisamos la conformidad de la implementación con los requisitos de NIS2, documentamos las evidencias de cumplimiento y preparamos el registro ante el organismo supervisor competente (que NIS2 exige a las entidades afectadas). Establecemos el proceso de mantenimiento continuo del cumplimiento, incluyendo la revisión anual del estado de adecuación.</p>
        </div>
      </div>
    </div>
  </div>
</section>


<section className="section section--pearl" id="casos">
  <div className="container">
    <span className="label-tag">NIS2 · Casos de éxito</span>
    <div className="gold-line"></div>
    <h2 className="section-title" style={{maxWidth:'560px'}}>Lo que dicen nuestros<br /><em>clientes.</em></h2>
    <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'24px',marginTop:'52px'}}>
      <div className="anim-fade-up" style={{background:'var(--navy)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'#fff',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Nuestra sede central en Europa exigió que todas las filiales se adecuaran a NIS2 antes de que terminara el ejercicio. Avson hizo el gap analysis en dos semanas y nos presentó un plan de adecuación que aprovechaba el 65% del ENS que ya teníamos. Cumplimos el plazo con margen.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid rgba(255,255,255,0.15)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'#fff',margin:'0'}}>Peter Eriksen</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'rgba(255,255,255,0.45)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>IT Security Director · Grupo industrial europeo · Filial España</p>
        </div>
      </div>
      <div className="anim-fade-up" style={{background:'var(--white)',border:'1px solid var(--border)',padding:'48px 40px',display:'flex',flexDirection:'column',justifyContent:'space-between',minHeight:'280px'}}>
        <blockquote style={{fontFamily:'var(--font-serif)',fontSize:'22px',fontWeight:'300',color:'var(--navy)',lineHeight:'1.5',margin:'0',fontStyle:'italic'}}>&ldquo;Somos una empresa mediana de infraestructuras digitales y NIS2 nos afecta como entidad esencial. Avson nos aclaró desde el primer día exactamente qué debíamos hacer, sin alarmismos ni vender más de lo necesario. Un año después tenemos el cumplimiento completamente implantado.&rdquo;</blockquote>
        <div style={{marginTop:'32px',paddingTop:'24px',borderTop:'1px solid var(--border)'}}>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'14px',fontWeight:'500',color:'var(--navy)',margin:'0'}}>Marta Verstegen</p>
          <p style={{fontFamily:'var(--font-sans)',fontSize:'11px',color:'var(--text-muted)',margin:'4px 0 0',letterSpacing:'0.06em',textTransform:'uppercase'}}>COO · Proveedor de infraestructura digital · Madrid</p>
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
    <h2 className="section-title" style={{maxWidth:'480px'}}>Todo sobre<br /><em>NIS2.</em></h2>
    <div style={{marginTop:'48px'}}>
      <div className="faq-item">
        <div className="faq-item__question">¿NIS2 ya está en vigor en España?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>La Directiva NIS2 (UE 2022/2555) entró en vigor a nivel europeo en enero de 2023 con un plazo de transposición de 21 meses para los estados miembros (hasta octubre de 2024). España, como otros estados miembros, está en proceso de finalizar su transposición al ordenamiento jurídico nacional. Aunque la ley española aún no está en vigor, las empresas en los sectores afectados deben prepararse: una vez publicada la ley, el plazo para cumplir puede ser muy corto. Las empresas que anticipen el cumplimiento evitarán la presión regulatoria y estarán en mejor posición.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuáles son las sanciones de NIS2?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Las sanciones de NIS2 son significativamente más elevadas que las de NIS1. Para las entidades esenciales: hasta 10 millones de euros o el 2% de la facturación global anual total de la empresa, lo que sea mayor. Para las entidades importantes: hasta 7 millones de euros o el 1,4% de la facturación global anual total, lo que sea mayor. Además, NIS2 prevé la posibilidad de suspensión temporal de licencias o autorizaciones para entidades esenciales que incumplan de forma reiterada, y la responsabilidad personal de los directivos que puedan ser inhabilitados temporalmente.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cómo sé si soy entidad esencial o importante?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>La clasificación depende del sector en el que operas y del tamaño de tu organización. En general, las organizaciones medianas y grandes (más de 50 empleados o más de 10 millones de euros de facturación) en los 18 sectores cubiertos por NIS2 quedan afectadas. La distinción entre esencial e importante depende del sector específico y en algunos casos del impacto sistémico de la organización. Ofrecemos un diagnóstico gratuito de alcance NIS2 en el que analizamos tu situación y te damos una clasificación definitiva.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué diferencia NIS2 de ISO 27001?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>ISO 27001 es un estándar internacional voluntario de buenas prácticas en seguridad de la información. NIS2 es una directiva europea de obligado cumplimiento para las entidades en su ámbito de aplicación. La diferencia principal es la obligatoriedad y las sanciones. Sin embargo, ISO 27001 cubre el 60-70% de los requisitos técnicos de NIS2, lo que hace de la certificación ISO 27001 la forma más eficiente de demostrar el cumplimiento técnico de NIS2. Lo que NIS2 añade sobre ISO 27001 son principalmente las obligaciones de notificación formal al regulador y la responsabilidad directiva explícita.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿DORA y NIS2 se solapan?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>Sí, pero DORA es lex specialis respecto a NIS2 para el sector financiero. Esto significa que las entidades financieras cumplen NIS2 cumpliendo DORA, que establece requisitos más específicos y detallados para ese sector. Para las entidades no financieras que quedan en el ámbito de NIS2 y también son proveedores de servicios digitales o infraestructuras digitales, los requisitos de NIS2 y DORA pueden coexistir, aunque el solapamiento es muy significativo.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Qué responsabilidad tiene la dirección en NIS2?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>NIS2 introduce por primera vez una responsabilidad personal explícita de los órganos de dirección en el cumplimiento de los requisitos de ciberseguridad. Los directivos deben aprobar formalmente las medidas de seguridad, recibir formación periódica en gestión del riesgo de ciberseguridad y pueden ser considerados personalmente responsables en caso de incumplimiento grave. La directiva prevé la posibilidad de inhabilitación temporal para ejercer funciones de dirección como sanción adicional a las multas a la entidad.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Cuánto tiempo lleva la adecuación a NIS2?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>El plazo depende principalmente del punto de partida. Para organizaciones que ya tienen el ENS o ISO 27001, la adecuación específica a NIS2 puede realizarse en 3-4 meses adicionales. Para organizaciones que parten de cero, el plazo completo es de 5-6 meses. Avson puede ajustar la metodología para acelerar el proceso cuando hay urgencia, concentrando los recursos en los gaps de mayor riesgo regulatorio primero.</p></div>
      </div>
      <div className="faq-item">
        <div className="faq-item__question">¿Hay una certificación formal NIS2?<div className="faq-item__icon">+</div></div>
        <div className="faq-item__answer"><p>No existe una certificación formal de NIS2 equivalente a la certificación ISO 27001. El cumplimiento de NIS2 se demuestra ante el organismo supervisor competente (en España, el INCIBE-CERT para entidades privadas y el CCN-CERT para la administración pública y sus proveedores) a través de evidencias de implementación de las medidas requeridas y del registro como entidad afectada. ISO 27001 es el estándar más reconocido para demostrar el nivel técnico de seguridad que NIS2 exige.</p></div>
      </div>
    </div>
  </div>
</section>


<section className="section section--navy">
  <div className="container" style={{textAlign:'center'}}>
    <span className="label-tag" style={{borderColor:'rgba(255,255,255,0.2)',color:'rgba(255,255,255,0.6)'}}>NIS2 · Diagnóstico gratuito</span>
    <div className="gold-line" style={{margin:'20px auto 0'}}></div>
    <h2 style={{fontFamily:'var(--font-serif)',fontSize:'clamp(36px,4.5vw,58px)',fontWeight:'300',color:'#fff',lineHeight:'1.15',margin:'32px 0 24px'}}>
      ¿NIS2 aplica<br /><em>a tu empresa?</em>
    </h2>
    <p style={{fontFamily:'var(--font-sans)',fontSize:'17px',color:'rgba(255,255,255,0.65)',maxWidth:'520px',margin:'0 auto 40px',lineHeight:'1.7'}}>
      Diagnóstico gratuito de alcance NIS2. En 48 horas te decimos si aplica a tu organización, qué clasificación te corresponde y cuánto esfuerzo requiere la adecuación desde tu situación actual.
    </p>
    <Link to="/contacto" className="btn-primary" style={{borderColor:'var(--gold)',color:'#fff',fontSize:'15px',padding:'18px 36px'}}>Solicitar diagnóstico NIS2 gratuito →</Link>
  </div>
</section><div id="stickyBar" style={{display:'none',position:'fixed',bottom:'0',left:'0',right:'0',zIndex:'500',background:'#1A2744',borderTop:'1px solid rgba(255,255,255,0.08)',padding:'14px 20px',justifyContent:'space-between',gap:'12px',alignItems:'center'}}>
  <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'rgba(255,255,255,0.7)'}}>¿Necesitas certificarte?</span>
  <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#fff',border:'1px solid #fff',padding:'10px 20px',textDecoration:'none',whiteSpace:'nowrap'}}>Diagnóstico gratuito →</Link>
</div>
    </>
  )
}
