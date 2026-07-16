"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { locales } from "../locales";
import { getCookie, setCookie } from "../utils/cookies";

interface LanguageContextProps {
  lang: string;
  t: any;
  setLang: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export function LanguageProvider({
  children,
  initialLang,
}: {
  children: React.ReactNode;
  initialLang: string;
}) {
  const [lang, setLangState] = useState(initialLang);

  useEffect(() => {
    // Synchronize client side with cookie preference on mount
    const clientCookie = getCookie("nes_lang");
    if (clientCookie && clientCookie !== lang && locales[clientCookie]) {
      setLangState(clientCookie);
      document.documentElement.setAttribute("lang", clientCookie);
    } else {
      document.documentElement.setAttribute("lang", lang);
    }
  }, []);

  const setLang = (newLang: string) => {
    if (locales[newLang]) {
      setLangState(newLang);
      setCookie("nes_lang", newLang, 365);
      document.documentElement.setAttribute("lang", newLang);
    }
  };

  const t = locales[lang] || locales.es;

  return (
    <LanguageContext.Provider value={{ lang, t, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
