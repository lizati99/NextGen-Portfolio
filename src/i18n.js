import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) 
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    supportedLngs: ["en", "ar", "de"],
    fallbackLng: "en",
    detection: {
      order: ["localStorage", "navigator"], 
      caches: ["localStorage"],
    },
    backend: {
      loadPath: process.env.PUBLIC_URL + "/locales/{{lng}}/translation.json",
    },
  });

  console.log( process.env.PUBLIC_URL);
export default i18n;
