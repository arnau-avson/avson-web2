import { Link } from 'react-router-dom'

export default function AnnounceBar() {
  return (
    <div className="announce-bar">
      🔒 <strong>Nueva normativa ENS en vigor</strong> &nbsp;·&nbsp; Diagnóstico gratuito para saber qué categoría necesitas &nbsp;·&nbsp; <Link to="/contacto">Solicitar ahora →</Link>
    </div>
  )
}
