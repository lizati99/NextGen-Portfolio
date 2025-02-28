import React, { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n"; // استيراد i18n

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language]);

  const changeLanguage = (lng) => {
    setLanguage(lng);
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
