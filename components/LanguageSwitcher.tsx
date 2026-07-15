"use client";

import { useState } from "react";
import { es } from "../locales/es";
import { en } from "../locales/en";

const locales: Record<string, any> = { es, en };

export default function LanguageSwitcher({
  currentLang,
  setLang,
}: {
  currentLang: string;
  setLang: (lang: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const activeLocale = locales[currentLang];
  const activeFlagUrl = activeLocale?.meta?.flagUrl || locales.es.meta.flagUrl;

  const handleSelect = (langKey: string) => {
    setLang(langKey);
    setIsOpen(false);
  };

  return (
    <div className={`lang-dropdown ${isOpen ? "open" : ""}`} style={{ position: "relative" }}>
      <button
        className="lang-btn"
        aria-label="Seleccionar idioma"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "#0B031A",
          border: "1px solid var(--line)",
          padding: "6px 12px",
          borderRadius: "999px",
          color: "var(--white)",
          fontSize: "12px",
          cursor: "pointer",
        }}
      >
        <img src={activeFlagUrl} alt="flag" style={{ width: "16px", height: "auto", borderRadius: "2px" }} />
        <svg
          viewBox="0 0 24 24"
          width="12"
          height="12"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          style={{ transition: "transform 0.2s", transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div
          className="lang-menu"
          style={{
            position: "absolute",
            top: "100%",
            right: 0,
            marginTop: "4px",
            background: "#0B031A",
            border: "1px solid var(--line)",
            borderRadius: "12px",
            padding: "4px",
            display: "flex",
            flexDirection: "column",
            gap: "2px",
            zIndex: 10,
            minWidth: "120px",
          }}
        >
          {Object.keys(locales).map((key) => {
            const loc = locales[key];
            return (
              <button
                key={key}
                className={`lang-option ${currentLang === key ? "active" : ""}`}
                onClick={() => handleSelect(key)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 12px",
                  background: currentLang === key ? "rgba(108, 58, 232, 0.2)" : "transparent",
                  border: "none",
                  borderRadius: "8px",
                  color: currentLang === key ? "var(--purple-glow)" : "var(--gray)",
                  fontSize: "12px",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <img src={loc.meta.flagUrl} alt={loc.meta.label} style={{ width: "16px", height: "auto", borderRadius: "2px" }} />
                <span>{loc.meta.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
