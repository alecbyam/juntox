'use client'

import { useLanguage } from '../LanguageProvider'
import type { Locale } from '../../lib/i18n'

const OPTIONS: { code: Locale; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
]

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Language / Langue"
      className="flex items-center rounded-full border border-white/[0.08] bg-white/[0.02] p-0.5"
    >
      {OPTIONS.map((opt) => (
        <button
          key={opt.code}
          onClick={() => setLocale(opt.code)}
          aria-pressed={locale === opt.code}
          className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition ${
            locale === opt.code
              ? 'bg-primary/80 text-white'
              : 'text-neutral-500 hover:text-neutral-300'
          }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  )
}
