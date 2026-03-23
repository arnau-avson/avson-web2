import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function ContactModal({ open, onClose }) {
  const { t, ta } = useLanguage()

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div
      className={`fixed inset-0 z-[100] transition-all duration-500 ${
        open ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className={`absolute inset-x-0 top-0 bottom-0 overflow-y-auto transition-transform duration-500 ${
        open ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="min-h-full flex items-center justify-center px-6 py-16 md:py-20">
          <div className="max-w-2xl w-full relative">
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute -top-10 right-0 text-gray-500 hover:text-white transition-colors text-sm flex items-center gap-2 cursor-pointer"
            >
              {t('nav.close')} <span className="text-lg">&times;</span>
            </button>

            <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-3 text-center">
              {t('home.contactTitle')}
            </h2>
            <p className="text-gray-400 mb-10 text-center">
              {t('home.contactDesc')}
            </p>
            <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                <div className="flex-1">
                  <label className="text-sm text-gray-400 mb-1.5 block">{t('home.formName')} <span className="text-accent">*</span></label>
                  <input type="text" placeholder={t('home.formNamePh')} required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-accent transition-colors" />
                </div>
                <div className="flex-1">
                  <label className="text-sm text-gray-400 mb-1.5 block">{t('home.formEmail')} <span className="text-accent">*</span></label>
                  <input type="email" placeholder={t('home.formEmailPh')} required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-accent transition-colors" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-3 md:gap-5">
                <div className="flex-1">
                  <label className="text-sm text-gray-400 mb-1.5 block">{t('home.formOrg')}</label>
                  <input type="text" placeholder={t('home.formOrgPh')} required
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-accent transition-colors" />
                </div>
                <div className="flex-1">
                  <label className="text-sm text-gray-400 mb-1.5 block">{t('home.formArea')}</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-gray-500 outline-none focus:border-accent transition-colors appearance-none" required>
                    <option value="">{t('home.formAreaPh')}</option>
                    {ta('home.formAreaOpts').map((opt, idx) => (
                      <option key={idx} value={['grc','ai','cyber','intel'][idx]}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1.5 block">{t('home.formChallenges')}</label>
                <textarea placeholder={t('home.formChallengesPh')} rows={4} required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-600 outline-none focus:border-accent transition-colors resize-none" />
              </div>
              <button type="submit"
                className="bg-accent text-white py-3.5 rounded-lg text-base font-medium hover:opacity-90 hover:-translate-y-0.5 transition-all mt-2">
                {t('home.formSubmit')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
