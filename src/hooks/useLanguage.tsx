
import React, { createContext, useState, useContext, ReactNode } from "react";
import { translations } from "@/translations";

type LanguageContextType = {
  currentLanguage: string;
  t: (key: string) => string;
  setLanguage: (lang: string) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const t = (key: string): string => {
    if (!translations[currentLanguage]) return key;
    return translations[currentLanguage][key] || translations["en"][key] || key;
  };

  const setLanguage = (lang: string) => {
    setCurrentLanguage(lang);
    document.documentElement.lang = lang;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
