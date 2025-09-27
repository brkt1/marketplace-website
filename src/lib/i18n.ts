import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

// Import translation files
import ar from '../locales/ar.json'
import de from '../locales/de.json'
import en from '../locales/en.json'
import es from '../locales/es.json'
import fr from '../locales/fr.json'
import it from '../locales/it.json'
import ja from '../locales/ja.json'
import ko from '../locales/ko.json'
import pt from '../locales/pt.json'
import zh from '../locales/zh.json'

const resources = {
  en: { translation: en },
  es: { translation: es },
  fr: { translation: fr },
  de: { translation: de },
  it: { translation: it },
  pt: { translation: pt },
  ar: { translation: ar },
  zh: { translation: zh },
  ja: { translation: ja },
  ko: { translation: ko },
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  })

export default i18n
