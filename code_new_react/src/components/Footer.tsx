import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="v3-footer">
      <div className="v3-container">
        <div className="v3-footer__grid">

          <div className="v3-footer__brand">
            <span className="v3-footer__logo">AVSON<span>·</span>GRC</span>
            <p>La consultora ENS más rápida de España. 355+ empresas certificadas.</p>
            <div className="v3-footer__contact">
              <a href="mailto:hola@avson.eu">hola@avson.eu</a>
              <span>Calle Pedro Muñoz Seca 2 (Madrid) · Plaza Francesc Macià 7 (Barcelona)</span>
              <a href="https://www.linkedin.com/company/avson-grc" target="_blank" rel="noopener">LinkedIn · Avson GRC</a>
            </div>
          </div>

          <div className="v3-footer__col">
            <strong>Certificaciones</strong>
            <ul>
              <li><Link to="/ens">ENS</Link></li>
              <li><Link to="/ens-express">⚡ ENS Express</Link></li>
              <li><Link to="/iso27001">ISO 27001</Link></li>
              <li><Link to="/iso22301">ISO 22301</Link></li>
              <li><Link to="/dora">DORA</Link></li>
              <li><Link to="/nis2">NIS2</Link></li>
            </ul>
          </div>

          <div className="v3-footer__col">
            <strong>Empresa</strong>
            <ul>
              <li><Link to="/packs">Packs GRC</Link></li>
              <li><Link to="/equipo">Equipo</Link></li>
              <li><Link to="/unete">Únete al equipo</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
            <Link to="/contacto" className="v3-btn v3-btn--gold v3-btn--sm" style={{marginTop:'28px',display:'inline-flex'}}>Habla con un experto →</Link>
          </div>

        </div>

        <div className="v3-footer__bottom">
          <span>© 2026 Avson Consultoría Estratégica SLU · CIF B10560795</span>
          <ul>
            <li><Link to="/privacidad">Privacidad</Link></li>
            <li><Link to="/cookies">Cookies</Link></li>
            <li><Link to="/privacidad">Aviso legal</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}
