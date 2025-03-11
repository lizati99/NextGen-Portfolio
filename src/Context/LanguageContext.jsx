import React, { createContext, useContext, useEffect, useState } from "react";
import i18n from "../i18n"; // استيراد i18n

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const [direction, setDirection] = useState(localStorage.getItem("direction") || "ltr");

  useEffect(() => {
    i18n.changeLanguage(language);
    const root = document.documentElement;
    root.style.setProperty("--dir", direction);
  }, [language, direction]);

  const changeLanguage = (lng) => {
    const newDirection = (lng==="ar") ? "rtl" : "ltr";
    setLanguage(lng);
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
    
    setDirection( newDirection );
    localStorage.setItem("direction", newDirection);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
