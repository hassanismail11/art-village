import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './locales/en/translation.json'
import arTranslation from './locales/ar/translation.json'
import { getLangFromPath } from './utils/paths'

// Detect language from URL path
const detectLanguage = () => {
  const pathname = window.location.pathname;
  const lang = getLangFromPath(pathname);
  return lang;
};

// Get initial language from URL or localStorage or default to 'en'
const getInitialLanguage = () => {
  const urlLang = detectLanguage();
  if (urlLang) return urlLang;
  
  // Check localStorage
  const storedLang = localStorage.getItem('i18nextLng');
  if (storedLang && (storedLang === 'en' || storedLang === 'ar')) {
    return storedLang;
  }
  
  return 'en'; // Default
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      ar: {
        translation: arTranslation
      }
    },
    lng: getInitialLanguage(),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  })

// Listen to language changes and update localStorage
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('i18nextLng', lng);
});

export default i18n

