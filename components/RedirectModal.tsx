"use client";

import { useLanguage } from "../context/LanguageContext";

interface RedirectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function RedirectModal({ isOpen, onClose, onConfirm }: RedirectModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="redirect-modal-overlay" onClick={onClose}>
      <div className="redirect-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="redirect-modal-header">
          <h3>{t.redirect_modal.title}</h3>
          <button type="button" className="redirect-modal-close" onClick={onClose} aria-label="Close modal">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="redirect-modal-body">
          <p>{t.redirect_modal.message}</p>
        </div>
        <div className="redirect-modal-actions">
          <button type="button" className="redirect-modal-btn cancel-btn" onClick={onClose}>
            {t.redirect_modal.cancel}
          </button>
          <button type="button" className="redirect-modal-btn confirm-btn" onClick={onConfirm}>
            <span>{t.redirect_modal.confirm}</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" width="16" height="16">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
