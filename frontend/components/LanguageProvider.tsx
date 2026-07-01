'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { translations, type Locale } from '../lib/i18n'

type LanguageContextValue = {
  locale: Locale
  setLocale: (l: Locale) => void
  t: typeof translations.fr
}

const LanguageContext = createContext<LanguageContextValue>({
  locale: 'fr',
  setLocale: () => {},
  t: translations.fr,
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('fr')

  useEffect(() => {
    const stored = localStorage.getItem('juntox_lang') as Locale | null
    if (stored === 'fr' || stored === 'en') {
      setLocaleState(stored)
      document.documentElement.lang = stored
    }
  }, [])

  function setLocale(l: Locale) {
    setLocaleState(l)
    localStorage.setItem('juntox_lang', l)
    document.documentElement.lang = l
  }

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] as unknown as typeof translations.fr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
