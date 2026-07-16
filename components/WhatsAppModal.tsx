"use client";

import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function WhatsAppModal() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const [name, setName] = useState("");
  const [reason, setReason] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && reason) {
      const phone = "59178790800";
      const template = t.wa_modal.message_template || "Hola Alejandro. Mi nombre es {name} y te escribo desde tu sitio web.\n\nMe pongo en contacto contigo por el siguiente motivo: *{reason}*.\n\nMe gustaría conversar al respecto, por favor. ¡Muchas gracias!";
      const message = template.replace("{name}", name.trim()).replace("{reason}", reason);
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      setIsOpen(false);
      setName("");
      setReason("");
    }
  };

  return (
    <>
      <div className={`wa-modal ${isOpen ? "active" : ""}`} id="wa-modal">
        <div className="wa-modal-header">
          <h3>{t.wa_modal.title}</h3>
          <button type="button" className="wa-modal-close" id="wa-modal-close" aria-label="Close modal" onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form className="wa-form" id="wa-form" onSubmit={handleSubmit}>
          <div className="wa-field">
            <label htmlFor="wa-name" className="wa-label">{t.wa_modal.name_label}</label>
            <input
              type="text"
              id="wa-name"
              className="wa-input"
              placeholder={t.wa_modal.name_placeholder}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="wa-field">
            <label htmlFor="wa-select" className="wa-label">{t.wa_modal.service_label}</label>
            <select
              id="wa-select"
              className="wa-select"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            >
              <option value="" disabled hidden>{t.wa_modal.select_default}</option>
              <option value="Necesito un servicio">{t.wa_modal.opt_service}</option>
              <option value="Colaboración">{t.wa_modal.opt_collab}</option>
              <option value="Otro">{t.wa_modal.opt_other}</option>
            </select>
          </div>
          <button type="submit" className="wa-submit-btn">
            <span>{t.wa_modal.send}</span>
            <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
          <div className="wa-email-text">
            <span>{t.wa_modal.email_fallback}</span> <a href="mailto:contacto@alejandrones.com">contacto@alejandrones.com</a>
          </div>
        </form>
      </div>

      {showTooltip && (
        <div className="wa-tooltip" id="wa-tooltip">
          <span>{t.wa_modal.greeting}</span> 👋
        </div>
      )}

      <button
        type="button"
        className="wa-float-btn"
        id="wa-float-btn"
        aria-label="WhatsApp"
        onClick={() => {
          setIsOpen(!isOpen);
          setShowTooltip(false);
        }}
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M17.5 14.4c-.3-.1-1.7-.8-1.9-.9-.3-.1-.4-.1-.6.1-.2.3-.7.9-.8 1-.1.2-.3.2-.6.1-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.4-1.7-1.6-2-.1-.2 0-.4.1-.5l.4-.5c.1-.1.2-.3.2-.4.1-.2 0-.3 0-.4L9.7 7.6c-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s1 2.6 1.1 2.7c.1.2 2 3 4.8 4.2.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z" />
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.6 0-3.1-.4-4.5-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2z" />
        </svg>
      </button>
    </>
  );
}
