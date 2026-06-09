"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations, Language, TranslationKey } from "./translations";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationKey;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    // Try to load language preference from localStorage
    // const savedLang = localStorage.getItem("language") as Language;
    // if (savedLang && (savedLang === "en" || savedLang === "de")) {
    //   setLanguage(savedLang);
    // } else {
    //   // Default to browser language if available and supported
    //   const browserLang = navigator.language.split("-")[0];
    //   if (browserLang === "de") {
    //     setLanguage("de");
    //   }
    // }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    // setLanguage(lang);
    // localStorage.setItem("language", lang);
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
