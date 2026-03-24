import { createContext, useContext, useState } from 'react'
import { translations } from './translations'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => localStorage.getItem('avson-lang') || 'ES')

  const setLang = (l) => {
    setLangState(l)
    localStorage.setItem('avson-lang', l)
  }

  const t = (key) => {
    const keys = key.split('.')
    let val = translations[lang]
    for (const k of keys) {
      if (val == null) return key
      val = val[k]
    }
    return val ?? key
  }

  // For arrays (like bullet lists)
  const ta = (key) => {
    const result = t(key)
    return Array.isArray(result) ? result : []
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, ta }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
