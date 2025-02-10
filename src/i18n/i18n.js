import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Arquivos de tradução (você criará esses arquivos no próximo passo)
import translationEN from './locales/en/translation.json';
import translationPT from './locales/br/translation.json';

i18n
  .use(initReactI18next) // passa o i18n para react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN
      },
      pt: {
        translation: translationPT
      }
    },
    lng: 'en', // idioma padrão
    fallbackLng: 'en', // idioma de fallback se a tradução não for encontrada
    interpolation: {
      escapeValue: false // react já faz o escape
    }
  });

export default i18n;