import React, { createContext, useContext, useState, useEffect } from 'react';
import { safeStorage } from './storageService';

const LanguageContext = createContext({
  lang: "tr",
  setLang: () => {},
  isEn: false,
  t: (trText, enText) => trText
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => safeStorage.get("siyer_lang", "tr"));

  useEffect(() => {
    safeStorage.set("siyer_lang", lang);
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const isEn = lang === "en";
  const t = (trText, enText) => (lang === "en" && enText ? enText : trText);

  return (
    <LanguageContext.Provider value={{ lang, setLang, isEn, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

/**
 * Verilen öğe için dil İngilizceyse enMap[id] üzerindeki çeviriyi birleştirir,
 * Türkçe ise orijinal öğeyi döndürür.
 */
export function localizeItem(item, enMap, lang, keyOverride) {
  if (lang !== "en" || !item || !enMap) return item;
  const k = keyOverride !== undefined ? keyOverride : item.id;
  const trOverride = enMap[k];
  if (!trOverride) return item;
  return { ...item, ...trOverride };
}
