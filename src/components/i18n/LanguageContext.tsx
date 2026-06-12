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
    // Resolve the initial language from a saved preference, falling back to the
    // browser language. This reads client-only APIs (localStorage/navigator),
    // so it has to run after mount; the single setState here is intentional.
    const savedLang = localStorage.getItem("language") as Language;
    const browserLang = navigator.language.split("-")[0];
    const initialLang: Language =
      savedLang === "en" || savedLang === "de"
        ? savedLang
        : browserLang === "de"
          ? "de"
          : "en";
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLanguage(initialLang);
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
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
