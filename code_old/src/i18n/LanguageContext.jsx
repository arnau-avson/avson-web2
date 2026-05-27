import { createContext, useContext, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => localStorage.getItem('avson-lang') || 'ES')

  const setLang = (l) => {
    setLangState(l)
    localStorage.setItem('avson-lang', l)
  }

  const lookup = (source, key) => {
    const keys = key.split('.')
    let val = source
    for (const k of keys) {
      if (val == null) return undefined
      val = val[k]
    }
    return val
  }

  const t = (key) => {
    const val = lookup(translations[lang], key)
    if (val != null) return val
    const fallback = lookup(translations.ES, key)
    return fallback ?? key
  }

  // For arrays (like bullet lists)
  const ta = (key) => {
    const result = t(key)
    if (Array.isArray(result)) return result
    const fallback = lookup(translations.ES, key)
    return Array.isArray(fallback) ? fallback : []
  }

  const isRTL = lang === 'HE' || lang === 'AR'

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, ta, isRTL }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
