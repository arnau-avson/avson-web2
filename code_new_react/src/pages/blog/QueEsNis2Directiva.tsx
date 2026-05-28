import { Link } from 'react-router-dom'

export default function QueEsNis2Directiva() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `.article-body { max-width:800px; margin:0 auto; padding:0 24px; }
    .article-body h2 { font-family:'Cormorant Garamond',serif; font-size:32px; font-weight:400; color:#1A2744; margin:56px 0 20px; line-height:1.2; }
    .article-body h3 { font-family:'Cormorant Garamond',serif; font-size:22px; font-weight:500; color:#1A2744; margin:36px 0 14px; }
    .article-body p { font-family:'Inter',sans-serif; font-size:16px; color:#3A4560; line-height:1.8; margin-bottom:20px; }
    .article-body ul, .article-body ol { font-family:'Inter',sans-serif; font-size:16px; color:#3A4560; line-height:1.8; margin:0 0 20px 24px; }
    .article-body li { margin-bottom:8px; }
    .article-body strong { color:#1A2744; font-weight:600; }
    .article-body a { color:#1A2744; border-bottom:1px solid #C9A84C; text-decoration:none; }
    .comp-table { width:100%; border-collapse:collapse; margin:32px 0; font-family:'Inter',sans-serif; font-size:14px; }
    .comp-table th { background:#1A2744; color:#fff; padding:14px 16px; text-align:left; font-weight:500; }
    .comp-table td { padding:12px 16px; border-bottom:1px solid #E5E5E0; color:#3A4560; vertical-align:top; }
    .comp-table tr:nth-child(even) td { background:#F7F7F5; }
    .faq-article { border-top:1px solid #E5E5E0; }
    .faq-article-item { border-bottom:1px solid #E5E5E0; }
    .faq-article-q { font-family:'Inter',sans-serif; font-size:16px; font-weight:500; color:#1A2744; padding:20px 0; cursor:pointer; display:flex; justify-content:space-between; align-items:center; }
    .faq-article-q::after { content:'＋'; font-size:20px; color:#C9A84C; flex-shrink:0; }
    .faq-article-item.open .faq-article-q::after { content:'－'; }
    .faq-article-a { font-family:'Inter',sans-serif; font-size:15px; color:#3A4560; line-height:1.75; padding:0 0 20px; display:none; }
    .faq-article-item.open .faq-article-a { display:block; }
    .cta-inline-box { background:#F7F7F5; border:1px solid #E5E5E0; border-left:3px solid #C9A84C; padding:28px 32px; display:flex; align-items:center; justify-content:space-between; gap:24px; flex-wrap:wrap; margin:40px 0; }` }} />
<div style={{background:'var(--white)',borderBottom:'1px solid var(--border)',padding:'12px 0',marginTop:'72px'}}>
  <div className="container">
    <nav style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)',letterSpacing:'0.04em'}}>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Inicio</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <Link to="/" style={{color:'var(--text-muted)',textDecoration:'none'}}>Blog</Link>
      <span style={{margin:'0 8px'}}>›</span>
      <span style={{color:'var(--navy)',fontWeight:'500'}}>Qué es NIS2</span>
    </nav>
  </div>
</div>

<section style={{background:'var(--pearl)',padding:'72px 0 56px',borderBottom:'1px solid var(--border)'}}>
  <div className="container">
    <div style={{maxWidth:'800px'}}>
      <span className="label-tag">NIS2 · Directiva Europea · Ciberseguridad · Mayo 2026</span>
      <div className="gold-line"></div>
      <h1 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'clamp(36px,5vw,56px)',fontWeight:'300',color:'var(--navy)',lineHeight:'1.1',margin:'0 0 24px'}}>
        NIS2: qué es la directiva europea de ciberseguridad y qué exige a tu empresa.
      </h1>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'17px',color:'var(--text-muted)',lineHeight:'1.65',maxWidth:'640px',margin:'0'}}>
        Miles de empresas españolas quedan por primera vez sujetas a obligaciones de ciberseguridad. Descubre si tu organización está afectada, qué medidas debes implementar y cuánto tiempo tienes.
      </p>
      <div style={{display:'flex',gap:'24px',marginTop:'28px',flexWrap:'wrap'}}>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>⏱ Lectura: 12 minutos</span>
        <span style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',color:'var(--text-muted)'}}>📅 Actualizado: mayo 2026</span>
      </div>
    </div>
  </div>
</section>

<article style={{padding:'72px 0 80px',background:'var(--white)'}}>
  <div className="article-body">

    <h2>Qué es la Directiva NIS2 (Directiva UE 2022/2555)</h2>

    <p>La <strong>Directiva NIS2</strong> (Network and Information Security 2), publicada como Directiva UE 2022/2555 del Parlamento Europeo y del Consejo, es el marco regulatorio de ciberseguridad más ambicioso aprobado por la Unión Europea hasta la fecha. Entró en vigor el 16 de enero de 2023, con obligación de transposición por los Estados miembros antes del 17 de octubre de 2024.</p>

    <p>Su objetivo es elevar el nivel general de ciberseguridad en toda la UE, garantizando que los sectores críticos y los prestadores de servicios digitales dispongan de medidas técnicas, operativas y organizativas suficientes para prevenir, detectar y responder a ciberincidentes. NIS2 no es una norma voluntaria: es legislación vinculante que los Estados deben incorporar a su ordenamiento jurídico y que las empresas afectadas deben cumplir bajo pena de sanción.</p>

    <p>En España, la transposición se realiza mediante la actualización de la Ley 9/2018 de Seguridad de las Redes y Sistemas de Información (Ley NIS). El proceso legislativo está en curso, pero las obligaciones de la directiva son aplicables desde que concluya la transposición nacional. Las empresas que no comiencen a prepararse ahora corren el riesgo de enfrentarse a plazos muy ajustados una vez publicada la ley española.</p>

    <h2>Diferencia entre NIS1 y NIS2: qué cambia</h2>

    <p>La primera Directiva NIS (2016) supuso un punto de partida importante pero con un alcance muy limitado: afectaba principalmente a operadores de servicios esenciales (OSE) y proveedores de servicios digitales (PSD) en sectores muy concretos, y su implementación fue desigual entre los Estados miembros.</p>

    <p>NIS2 supone un salto cualitativo en cuatro dimensiones clave:</p>

    <ul>
      <li><strong>Amplitud del ámbito:</strong> NIS2 incorpora 10 sectores de alta criticidad y 7 sectores importantes adicionales, multiplicando el número de entidades afectadas. Se estima que en España pasarán de varios cientos a varios miles las empresas obligadas.</li>
      <li><strong>Eliminación del criterio discrecional:</strong> Bajo NIS1, los Estados decidían qué entidades eran operadores de servicios esenciales. NIS2 establece criterios objetivos de tamaño (empresa mediana o grande) y sector que determinan automáticamente la inclusión.</li>
      <li><strong>Responsabilidad directiva:</strong> NIS2 introduce responsabilidad personal para los órganos de dirección de las entidades afectadas. Los consejos de administración deben aprobar las medidas de gestión de riesgos y pueden ser declarados responsables de incumplimientos graves.</li>
      <li><strong>Obligaciones reforzadas:</strong> Gestión de riesgos más estructurada, requisitos de notificación de incidentes más estrictos (alerta inicial en 24 horas, notificación completa en 72 horas), mayor énfasis en la seguridad de la cadena de suministro y mecanismos de supervisión más robustos por parte de las autoridades competentes.</li>
    </ul>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Tu empresa necesita cumplir NIS2?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Diagnóstico gratuito en 24 horas. Sin compromiso.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Hablar con un experto →</Link>
    </div>

    <h2>¿A qué empresas afecta NIS2 en España? Entidades esenciales vs importantes</h2>

    <p>NIS2 establece dos categorías de entidades afectadas con obligaciones y régimen sancionador diferenciados:</p>

    <p><strong>Entidades esenciales</strong> son las organizaciones de gran tamaño (más de 250 empleados o más de 50 millones de euros de facturación) que operan en los sectores de alta criticidad definidos por la directiva: energía, transporte, banca, infraestructuras de los mercados financieros, sector sanitario, agua potable, aguas residuales, infraestructura digital, gestión de servicios TIC (B2B) y sector espacial. También quedan incluidas automáticamente las administraciones públicas centrales y regionales, con independencia de su tamaño.</p>

    <p><strong>Entidades importantes</strong> son las empresas medianas (más de 50 empleados o más de 10 millones de euros de facturación) que operan en los sectores de alta criticidad antes mencionados, y también las empresas medianas y grandes de los sectores adicionales: servicios postales y de mensajería, gestión de residuos, fabricación/producción y distribución de productos químicos, producción/transformación y distribución de alimentos, fabricación (dispositivos médicos, equipos electrónicos, maquinaria, vehículos de motor), proveedores digitales (plataformas de redes sociales, motores de búsqueda, marketplaces) e investigación.</p>

    <p>La distinción es relevante porque las entidades esenciales están sometidas a supervisión ex-ante (las autoridades pueden inspeccionarlas en cualquier momento sin incidente previo), mientras que las entidades importantes están sujetas a supervisión ex-post (las autoridades actúan principalmente en respuesta a indicios de incumplimiento o tras un incidente).</p>

    <h2>Sectores incluidos en NIS2</h2>

    <table className="comp-table">
      <thead>
        <tr>
          <th>Sectores de alta criticidad (Anexo I)</th>
          <th>Sectores adicionales (Anexo II)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Energía (electricidad, petróleo, gas, hidrógeno)</td>
          <td>Servicios postales y de mensajería</td>
        </tr>
        <tr>
          <td>Transporte (aéreo, ferroviario, marítimo, por carretera)</td>
          <td>Gestión de residuos</td>
        </tr>
        <tr>
          <td>Banca e infraestructuras mercados financieros</td>
          <td>Fabricación/distribución de productos químicos</td>
        </tr>
        <tr>
          <td>Sector sanitario (hospitales, laboratorios, I+D farmacéutica)</td>
          <td>Producción/distribución de alimentos</td>
        </tr>
        <tr>
          <td>Agua potable y aguas residuales</td>
          <td>Fabricación (dispositivos médicos, equipos electrónicos, vehículos)</td>
        </tr>
        <tr>
          <td>Infraestructura digital (IXPs, DNS, TLD, proveedores cloud, CDN, datacenter)</td>
          <td>Proveedores digitales (marketplaces, buscadores, redes sociales)</td>
        </tr>
        <tr>
          <td>Gestión de servicios TIC (B2B: MSPs, MSSPs)</td>
          <td>Investigación (universidades, centros de I+D)</td>
        </tr>
        <tr>
          <td>Administraciones públicas (central y regional)</td>
          <td></td>
        </tr>
        <tr>
          <td>Sector espacial (operadores de infraestructura terrestre)</td>
          <td></td>
        </tr>
      </tbody>
    </table>

    <h2>Obligaciones concretas de NIS2</h2>

    <p>El artículo 21 de la Directiva NIS2 establece las medidas de gestión de riesgos de ciberseguridad que deben implementar las entidades afectadas. No se trata de una lista de verificación cerrada, sino de un marco de requisitos basado en riesgos que la organización debe adaptar a su contexto. Las medidas mínimas obligatorias incluyen:</p>

    <ul>
      <li><strong>Políticas de seguridad y análisis de riesgos:</strong> Política de seguridad de la información aprobada por la dirección y proceso documentado de análisis y gestión de riesgos, revisado periódicamente.</li>
      <li><strong>Gestión de incidentes:</strong> Procedimientos para detectar, clasificar, notificar y gestionar incidentes de seguridad. La notificación a la autoridad competente debe hacerse en plazos muy estrictos: alerta temprana en 24 horas, notificación formal en 72 horas e informe final en un mes.</li>
      <li><strong>Continuidad del negocio:</strong> Planes de continuidad operativa y de recuperación ante desastres que incluyan gestión de crisis y capacidad de restauración de sistemas y datos.</li>
      <li><strong>Seguridad de la cadena de suministro:</strong> Evaluación de la seguridad de proveedores y subcontratistas, incluyendo cláusulas contractuales de seguridad y procedimientos de verificación.</li>
      <li><strong>Seguridad en el desarrollo y mantenimiento de sistemas:</strong> Prácticas de desarrollo seguro, gestión de vulnerabilidades y política de divulgación coordinada.</li>
      <li><strong>Evaluación de la eficacia:</strong> Procedimientos para evaluar regularmente la efectividad de las medidas implementadas (auditorías, pruebas de penetración, ejercicios de simulación).</li>
      <li><strong>Prácticas básicas de ciberhigiene y formación:</strong> Formación del personal en ciberseguridad y políticas de uso de herramientas digitales.</li>
      <li><strong>Criptografía y cifrado:</strong> Uso de cifrado para proteger datos sensibles en reposo y en tránsito.</li>
      <li><strong>Control de acceso y autenticación:</strong> Gestión de identidades, autenticación multifactor y acceso con privilegios mínimos.</li>
    </ul>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Tu empresa necesita cumplir NIS2?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Diagnóstico gratuito en 24 horas. Sin compromiso.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Hablar con un experto →</Link>
    </div>

    <h2>Sanciones por incumplimiento de NIS2 en España</h2>

    <p>NIS2 establece un régimen sancionador significativamente más severo que su predecesora. Las sanciones máximas varían según la categoría de entidad:</p>

    <p>Para las <strong>entidades esenciales</strong>, las infracciones graves pueden acarrear multas de hasta <strong>10 millones de euros o el 2% del volumen de negocio anual mundial total</strong> del ejercicio anterior (se aplica el importe más elevado). Para las <strong>entidades importantes</strong>, el límite es de <strong>7 millones de euros o el 1,4% del volumen de negocio anual</strong>.</p>

    <p>Pero las sanciones económicas no son lo único relevante. NIS2 introduce, por primera vez en el ámbito de la ciberseguridad europea, la posibilidad de que las autoridades competentes impongan medidas no pecuniarias a las entidades esenciales, entre ellas: suspensión temporal de la certificación o autorización de los servicios prestados, prohibición temporal al directivo responsable de ejercer funciones directivas en la organización, y publicación de la resolución sancionadora (con el consiguiente impacto reputacional).</p>

    <p>En España, la autoridad supervisora para la mayoría de sectores será el INCIBE (para entidades privadas) y el CCN (para administraciones públicas y sus proveedores), con coordinación del DSN en materia de gestión de crisis.</p>

    <h2>NIS2 y ENS: la sinergia del 50%</h2>

    <p>Para las empresas españolas que ya disponen de certificación ENS, la adecuación a NIS2 es significativamente más llevadera. El ENS y NIS2 comparten aproximadamente el <strong>50% de sus requisitos y controles</strong>, ya que ambos marcos están orientados a la protección de sistemas de información críticos y beben de las mismas fuentes en términos de buenas prácticas de ciberseguridad.</p>

    <p>Los controles ENS directamente reutilizables para NIS2 incluyen, entre otros: la política de seguridad aprobada por la dirección, el análisis y gestión de riesgos (metodología MAGERIT compatible con NIS2), los controles de acceso y autenticación, la gestión de incidentes y el proceso de notificación, la seguridad en las comunicaciones y el cifrado, la gestión de continuidad del negocio, y la formación y concienciación del personal.</p>

    <p>La brecha entre ENS y NIS2 se concentra principalmente en: la gestión de la cadena de suministro (NIS2 es más exigente en este punto), la notificación de incidentes a la autoridad competente en plazos específicos (el protocolo ENS es diferente), y los requisitos de responsabilidad directiva. Una empresa con ENS Media o Alta puede completar su adecuación a NIS2 en pocas semanas adicionales de trabajo.</p>

    <h2>Cómo cumplir NIS2: hoja de ruta</h2>

    <p>El camino hacia el cumplimiento de NIS2 sigue una secuencia lógica que Avson ha desarrollado y validado en decenas de proyectos:</p>

    <ol>
      <li><strong>Verificación del ámbito (semanas 1-2):</strong> Confirmar si la organización queda dentro del ámbito de NIS2 en función de su sector, tamaño y actividad. Este paso es crítico para evitar tanto la infrapreparación como el sobrecoste de prepararse para obligaciones que no aplican.</li>
      <li><strong>Análisis de brechas (semanas 2-4):</strong> Comparar el estado actual de seguridad de la organización con los requisitos del artículo 21 de NIS2. Si existe ENS o ISO 27001, se parte de una base sólida.</li>
      <li><strong>Plan de tratamiento de brechas (semanas 4-6):</strong> Priorizar las medidas a implementar en función del riesgo, el impacto y los recursos disponibles. Incluye timeline, responsables y presupuesto.</li>
      <li><strong>Implementación de medidas (semanas 6-16):</strong> Despliegue de controles técnicos y organizativos: revisión de políticas, implantación de MFA, mejora de la gestión de vulnerabilidades, actualización de contratos con proveedores, elaboración o actualización de planes de continuidad.</li>
      <li><strong>Formación y concienciación (continuo):</strong> Formación específica NIS2 para el consejo de administración y para el personal técnico y de negocio.</li>
      <li><strong>Auditoría y mejora continua:</strong> Establecimiento de un ciclo de revisión periódica de la efectividad de las medidas y un proceso de mejora continua documentado.</li>
    </ol>

    <div className="cta-inline-box anim-fade-up">
      <div><strong style={{fontFamily:'var(--font-serif)',fontSize:'1.1rem'}}>¿Tu empresa necesita cumplir NIS2?</strong><p style={{marginTop:'8px',color:'var(--navy-60)'}}>Diagnóstico gratuito en 24 horas. Sin compromiso.</p></div>
      <Link to="/contacto" className="btn-primary" style={{whiteSpace:'nowrap'}}>Hablar con un experto →</Link>
    </div>

    <div style={{marginTop:'64px',paddingTop:'32px',borderTop:'1px solid var(--border)'}}>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'13px',color:'var(--text-muted)'}}>Artículos relacionados:</p>
      <div style={{display:'flex',gap:'16px',flexWrap:'wrap',marginTop:'12px'}}>
        <Link to="/que-es-el-ens" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Qué es el ENS →</Link>
        <Link to="/que-es-dora-reglamento" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Qué es DORA →</Link>
        <Link to="/nis2" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Servicio NIS2 →</Link>
        <Link to="/ens" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'14px',color:'var(--navy)',textDecoration:'none',border:'1px solid var(--border)',padding:'10px 18px'}}>Servicio ENS →</Link>
      </div>
    </div>

    <h2>Preguntas frecuentes sobre NIS2</h2>

    <div className="faq-article">
      <div className="faq-article-item">
        <div className="faq-article-q">¿NIS2 ya es obligatoria en España?</div>
        <div className="faq-article-a">La Directiva NIS2 (UE 2022/2555) entró en vigor el 16 de enero de 2023 y los Estados miembros debían transponerla antes del 17 de octubre de 2024. España está en proceso de transposición legislativa mediante la actualización de la Ley de Seguridad de las Redes y Sistemas de Información. Aunque la ley española definitiva aún está en trámite parlamentario, las empresas afectadas deben prepararse ahora para cumplir desde la entrada en vigor de la norma nacional.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Qué diferencia hay entre NIS2 y ENS?</div>
        <div className="faq-article-a">El ENS (Esquema Nacional de Seguridad) es el marco español obligatorio para organismos públicos y sus proveedores TIC. NIS2 es una directiva europea que amplía las obligaciones de ciberseguridad a operadores de sectores críticos (energía, transporte, banca, salud, etc.) tanto públicos como privados. Comparten aproximadamente el 50% de sus controles, por lo que tener ENS cubre la mitad del camino hacia NIS2.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Qué pasa si no cumplo NIS2?</div>
        <div className="faq-article-a">Las sanciones por incumplimiento de NIS2 son significativas: hasta 10 millones de euros o el 2% del volumen de negocio anual mundial para entidades esenciales, y hasta 7 millones de euros o el 1,4% del volumen de negocio para entidades importantes. Además, los directivos pueden incurrir en responsabilidad personal y la empresa puede quedar excluida de licitaciones y contratos con el sector público.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿NIS2 afecta a pymes?</div>
        <div className="faq-article-a">NIS2 afecta principalmente a empresas medianas (más de 50 empleados o más de 10 millones de euros de facturación) y grandes empresas de los sectores regulados. Sin embargo, pequeñas empresas que operen en sectores críticos o que sean proveedoras clave de infraestructuras esenciales también pueden estar incluidas. Es fundamental hacer una verificación caso a caso.</div>
      </div>
      <div className="faq-article-item">
        <div className="faq-article-q">¿Cuánto tiempo lleva cumplir con NIS2?</div>
        <div className="faq-article-a">Con una consultoría especializada como Avson, el proceso de adecuación a NIS2 lleva entre 3 y 5 meses dependiendo del punto de partida de la organización. Si la empresa ya dispone de certificación ENS o ISO 27001, el proceso se reduce significativamente gracias al solapamiento de controles. Sin base previa, el proceso incluye análisis de brechas, implementación de controles, formación y documentación.</div>
      </div>
    </div>

    <div style={{marginTop:'64px',padding:'40px',background:'var(--pearl)',border:'1px solid var(--border)',textAlign:'center'}}>
      <h3 style={{fontFamily:'\'Cormorant Garamond\',serif',fontSize:'28px',fontWeight:'400',color:'var(--navy)',margin:'0 0 16px'}}>¿Tu empresa está en el ámbito de NIS2?</h3>
      <p style={{fontFamily:'\'Inter\',sans-serif',fontSize:'15px',color:'var(--text-muted)',margin:'0 0 28px',maxWidth:'500px',marginLeft:'auto',marginRight:'auto'}}>Te hacemos el análisis de ámbito y el diagnóstico de brechas en 24 horas. Sin coste.</p>
      <Link to="/contacto" style={{fontFamily:'\'Inter\',sans-serif',fontSize:'12px',fontWeight:'500',letterSpacing:'0.1em',textTransform:'uppercase',background:'var(--navy)',color:'var(--white)',padding:'16px 32px',textDecoration:'none',display:'inline-block'}}>Solicitar diagnóstico gratuito →</Link>
    </div>

  </div>
</article></>
  )
}
