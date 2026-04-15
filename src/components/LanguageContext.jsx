import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations } from "../translations";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    localStorage.getItem("portfolio-lang") || "en"
  );

  useEffect(() => {
    if (!translations[language]) {
      setLanguage("en");
      localStorage.setItem("portfolio-lang", "en");
      return;
    }

    localStorage.setItem("portfolio-lang", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language] || translations.en,
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}