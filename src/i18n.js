import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";

i18n
  .use(HttpBackend) // Load translations from external files
  .use(initReactI18next) // Bind i18next to React
  .init({
    fallbackLng: "en", // Default language
    lng: "en", // Initial language
    debug: true,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    backend: {
      loadPath: "/locales/{{lng}}.json", // Path to translation files
    },
  });

export default i18n;