import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext'

const Footer = forwardRef(function Footer(props, ref) {
  const { t } = useLanguage()
  return (
    <footer
      ref={ref}
      className="bg-black border-t border-white/10 py-12 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div>
          <span className="text-2xl font-semibold text-white tracking-tight">avson</span>
          <p className="text-gray-500 text-sm mt-2 max-w-xs">
            {t('footer.desc')}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
          <div>
            <h3 className="text-white font-medium mb-3 text-sm">{t('footer.solutions')}</h3>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li><Link to="/grc" className="hover:text-white transition-colors">GRC</Link></li>
              <li><Link to="/ai" className="hover:text-white transition-colors">Artificial Intelligence</Link></li>
              <li><Link to="/cyber" className="hover:text-white transition-colors">Cybersecurity</Link></li>
              <li><Link to="/intel" className="hover:text-white transition-colors">{t('nav.intel')} & {t('nav.contact') === 'Contact' ? 'Defense' : 'Defensa'}</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-3 text-sm">{t('footer.company')}</h3>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li><span className="cursor-pointer hover:text-white transition-colors">{t('footer.about')}</span></li>
              <li><span className="cursor-pointer hover:text-white transition-colors">{t('footer.contact')}</span></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-medium mb-3 text-sm">{t('footer.contact')}</h3>
            <ul className="flex flex-col gap-2 text-gray-500 text-sm">
              <li><a href="mailto:hello@avson.eu" className="hover:text-white transition-colors">hello@avson.eu</a></li>
              <li>Madrid & Barcelona</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-600 text-xs">
        <span>&copy; {new Date().getFullYear()} avson. {t('footer.rights')}</span>
        <div className="flex gap-3">
          <span className="cursor-pointer hover:text-white transition-colors">{t('footer.privacy')}</span>
          <span>·</span>
          <span className="cursor-pointer hover:text-white transition-colors">{t('footer.terms')}</span>
          <span>·</span>
          <span className="cursor-pointer hover:text-white transition-colors">{t('footer.cookies')}</span>
        </div>
      </div>
    </footer>
  )
})

export default Footer
