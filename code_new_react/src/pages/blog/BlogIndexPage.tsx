import { Link } from 'react-router-dom'

export default function BlogIndexPage() {
  return (
    <>
<div style={{background:'var(--white)',borderBottom:'1px solid var(--border)',padding:'12px 0',marginTop:'72px'}}>
  <div className="container">
    <nav style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>Blog</span>
    </nav>
  </div>
</div>


<section style={{background:'var(--pearl)',padding:'80px 0 60px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <span className="label-tag">Recursos GRC</span>
    <div className="gold-line"></div>
    <h1 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(40px,5vw,64px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 20px',maxWidth:'700px'}}>
      Blog GRC: guías prácticas para<br /><em>entender y cumplir la normativa.</em>
    </h1>
    <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'560px',margin:'0 0 40px'}}>
      Análisis técnicos, guías paso a paso y recursos prácticos escritos por los consultores GRC de Avson. Sin teoría innecesaria.
    </p>
    
    <div style={{display:'flex',flexWrap:'wrap',gap:'8px'}}>
      <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.08em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'8px 16px',cursor:'pointer'}}>Todos</span>
      <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.08em',textTransform:'uppercase',background:'var(--white)',color:'var(--text-muted)',border:'1px solid var(--border)',padding:'8px 16px',cursor:'pointer'}}>ENS</span>
      <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.08em',textTransform:'uppercase',background:'var(--white)',color:'var(--text-muted)',border:'1px solid var(--border)',padding:'8px 16px',cursor:'pointer'}}>ISO 27001</span>
      <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.08em',textTransform:'uppercase',background:'var(--white)',color:'var(--text-muted)',border:'1px solid var(--border)',padding:'8px 16px',cursor:'pointer'}}>ISO 22301</span>
      <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.08em',textTransform:'uppercase',background:'var(--white)',color:'var(--text-muted)',border:'1px solid var(--border)',padding:'8px 16px',cursor:'pointer'}}>DORA</span>
      <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.08em',textTransform:'uppercase',background:'var(--white)',color:'var(--text-muted)',border:'1px solid var(--border)',padding:'8px 16px',cursor:'pointer'}}>NIS2</span>
      <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.08em',textTransform:'uppercase',background:'var(--white)',color:'var(--text-muted)',border:'1px solid var(--border)',padding:'8px 16px',cursor:'pointer'}}>TISAX</span>
      <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.08em',textTransform:'uppercase',background:'var(--white)',color:'var(--text-muted)',border:'1px solid var(--border)',padding:'8px 16px',cursor:'pointer'}}>Normativa</span>
    </div>
  </div>
</section>


<section style={{padding:'80px 0'}}>
  <div className="container">
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:'24px'}}>

      <Link to="/ens-basico-guia-empresas" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>ENS Básico</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>ENS Básico: Guía Completa para Empresas Proveedoras de la Administración</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Todo lo que necesitas saber para obtener el certificado ENS de nivel Básico: requisitos, proceso, coste y plazos.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/ens-sector-salud" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>Sector Salud</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>ENS en el Sector Salud: Obligaciones para Hospitales y Clínicas</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>El sector sanitario que trabaja con la Administración debe cumplir el ENS. Descubre qué nivel aplica y cómo implementarlo.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/gap-analysis-ens" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>Metodología</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>Gap Analysis ENS: Cómo Identificar las Brechas de Cumplimiento</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>El análisis de brechas es el primer paso de toda implementación ENS. Aprende a realizarlo y qué esperar de él.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/auditoria-ens-proceso" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>Auditoría</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>La Auditoría ENS: Proceso, Fases y Cómo Superarla con Éxito</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Todo sobre el proceso de auditoría ENS: quién la realiza, qué se evalúa, cuánto dura y cómo prepararse.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/declaracion-conformidad-ens" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>ENS Básico</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>Declaración de Conformidad ENS: Qué Es y Cuándo Sustituye al Certificado</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>La declaración de conformidad ENS es una alternativa al certificado para nivel Básico. Descubre cuándo es válida y sus limitaciones.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/que-es-el-ens" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>ENS · Guía completa</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>Qué es el ENS: guía completa del Esquema Nacional de Seguridad</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Todo lo que necesitas saber sobre el RD 311/2022: qué es, a quién obliga, categorías y cómo obtener el certificado.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/certificado-ens-obligatorio" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>ENS · Obligatoriedad</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>El ENS es obligatorio: ¿tu empresa necesita certificarse?</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Qué empresas están obligadas, qué contratos lo exigen y qué consecuencias tiene no tenerlo en 2026.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/certificado-ens-media-alta" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>ENS · Categorías</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>Certificado ENS Media vs Alta: diferencias y cómo saber cuál necesitas</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Comparativa completa de las tres categorías ENS: requisitos, controles exigidos y proceso de certificación según nivel.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/ens-vs-iso27001" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>ENS · ISO 27001 · Comparativa</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>ENS vs ISO 27001: diferencias, similitudes y sinergia</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Por qué el ENS y la ISO 27001 comparten el 65% de requisitos y cómo aprovechar esa sinergia para certificarte en los dos a coste marginal.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/iso27001-pymes" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>ISO 27001 · Pymes</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>ISO 27001 para pymes: guía práctica y errores más comunes</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Requisitos, costes, plazos y los errores que cometen las pymes al implantar ISO 27001. Guía práctica para empresas de menos de 50 empleados.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/renovacion-certificado-ens" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>ENS · Renovación</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>Renovación del certificado ENS: todo lo que necesitas saber</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Plazos, proceso de auditoría y cómo mantener tu certificación ENS vigente sin sorpresas ni pérdida de contratos.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/cuanto-cuesta-certificado-ens" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>ENS · Precio</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>Cuánto cuesta el certificado ENS: precios reales 2026</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Rangos de precio reales según categoría y tamaño de empresa. Qué incluye la consultoría ENS y cómo calcular el ROI.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/iso27001-requisitos-certificacion" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>ISO 27001 · Requisitos</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>ISO 27001: requisitos y proceso de certificación en España</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Las 10 cláusulas, el Anexo A con 93 controles, la Declaración de Aplicabilidad y cómo funciona la auditoría de certificación.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/que-es-iso22301" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>ISO 22301 · Guía completa</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>Qué es ISO 22301: la norma de continuidad de negocio explicada</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Para qué sirve, quién debe certificarse, las 10 cláusulas de la norma y cómo obtener la certificación en España.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/plan-continuidad-negocio" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>ISO 22301 · BCP</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>Plan de continuidad de negocio: qué es y cómo implementarlo</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Guía práctica para crear un BCP desde cero: diferencia con DRP, metodología BIA y los 6 pasos del proceso.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/que-es-dora-reglamento" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>DORA · Guía completa</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>Qué es DORA: el reglamento europeo de resiliencia digital en finanzas</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>A quién aplica, los 5 pilares, sanciones y hoja de ruta para cumplir con el Reglamento UE 2022/2554 desde enero 2025.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/dora-entidades-financieras" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>DORA · Entidades financieras</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>DORA para entidades financieras: requisitos y cómo cumplir</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Bancos, aseguradoras y fintech: qué exige DORA concretamente, las pruebas TLPT y la gestión de proveedores TIC críticos.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/que-es-nis2-directiva" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>NIS2 · Guía completa</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>Qué es NIS2: directiva europea de ciberseguridad para empresas españolas</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Si te afecta, qué debes implementar, las diferencias con NIS1 y cuáles son las sanciones por incumplimiento en España.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

      <Link to="/que-es-tisax" style={{display:'block',border:'1px solid var(--border)',padding:'32px',textDecoration:'none',transition:'border-color 0.2s'}} onMouseOver={(e) => (e.currentTarget.style.borderColor = '#C9A84C')} onMouseOut={(e) => (e.currentTarget.style.borderColor = '#E5E5E0')}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'11px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',color:'#C9A84C',display:'block',marginBottom:'12px'}}>TISAX · Guía completa</span>
        <h2 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'24px',fontWeight:'400',color:'#1A2744',lineHeight:'1.2',marginBottom:'12px'}}>Qué es TISAX: certificación de seguridad para proveedores de automoción</h2>
        <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'#7A8499',lineHeight:'1.6',marginBottom:'20px'}}>Por qué Volkswagen, BMW y Mercedes lo exigen, los tres niveles de assessment (AL1, AL2, AL3) y cómo obtenerlo.</p>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',color:'#1A2744',letterSpacing:'0.06em'}}>Leer artículo →</span>
      </Link>

    </div>
  </div>
</section>


<section className="section section--navy" style={{textAlign:'center'}}>
  <div className="container">
    <div style={{maxWidth:'600px',margin:'0 auto'}}>
      <span className="label-tag">¿Tienes dudas?</span>
      <div className="gold-line gold-line--center"></div>
      <h2 className="section-title section-title--white">¿Listo para conseguir<br /><em>tu certificación?</em></h2>
      <p className="mt-24" style={{fontSize:'17px',color:'rgba(255,255,255,0.5)',lineHeight:'1.65'}}>Diagnóstico gratuito. Sin compromiso. Respuesta en 24 horas.</p>
      <div className="flex gap-24 mt-40" style={{justifyContent:'center',flexWrap:'wrap'}}>
        <Link to="/contacto" className="btn-primary btn-primary--white">Solicitar consulta gratuita</Link>
        <Link to="/packs" className="btn-text btn-text--white">Ver nuestros packs →</Link>
      </div>
    </div>
  </div>
</section>
    </>
  )
}
