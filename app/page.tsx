"use client";

import StatsCounter from "../components/StatsCounter";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import WhatsAppModal from "../components/WhatsAppModal";
import LanguageSwitcher from "../components/LanguageSwitcher";
import RedirectModal from "../components/RedirectModal";
import { useLanguage } from "../context/LanguageContext";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const { lang, t, setLang } = useLanguage();
  const [isRedirectOpen, setIsRedirectOpen] = useState(false);

  const phone = "59178790800";
  const ctaUrl = `https://wa.me/${phone}?text=${encodeURIComponent(t.cta.whatsapp_message)}`;

  return (
    <>
      <div className="page">
        {/* ── Language Selector ── */}
        <div className="lang-switch" role="navigation" aria-label="Language selector">
          <LanguageSwitcher currentLang={lang} setLang={setLang} />
        </div>

        {/* ── Profile ── */}
        <div className="profile">
          <div className="avatar-wrap">
            <div className="avatar-glow"></div>
            <div className="avatar-ring"></div>
            <Image
              className="avatar"
              src="/images/perfil Alejandro Nes (1).png"
              alt="Alejandro Nes"
              width={96}
              height={96}
              priority
            />
          </div>
          <div className="name">
            Alejandro Nes
            <svg className="verified" viewBox="0 0 16 16" fill="var(--purple-1)" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708" />
            </svg>
          </div>
          <div className="role">{t.profile.role}</div>
          <p className="bio">{t.profile.bio}</p>
        </div>

        {/* ── Socials ── */}
        <div className="section">
          <div className="section-label">{t.sections.socials}</div>
          <div className="social-row">
            <a href="https://www.linkedin.com/in/alejandronesdev/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.8-2 4.1 0 4.9 2.6 4.9 6v6.3h-4v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@alejandrones" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/alejandronesdev" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.7" r="1" />
              </svg>
            </a>
            <a href="https://www.facebook.com/digitalnestweb" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </a>
            <a href="https://github.com/AlejandroNes" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.7.5.9 5.3.9 11.6c0 5 3.2 9.2 7.7 10.7.6.1.8-.2.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10 10 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.5-1.5 7.7-5.7 7.7-10.7C23.1 5.3 18.3.5 12 .5z" />
              </svg>
            </a>
          </div>
          {/* Website CTA button */}
          <a href="https://alejandrones.com/" target="_blank" rel="noopener noreferrer" className="link-btn link-btn-whatsapp" id="btn-whatsapp">
            <div className="link-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-globe" viewBox="0 0 16 16">
                <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472M3.82 11a13.7 13.7 0 0 1-.312-2.5h-2.49c.062.89.291 1.733.656 2.5zm6.853 3.472A7 7 0 0 0 13.745 12H11.91a9.3 9.3 0 0 1-.64 1.539 7 7 0 0 1-.597.933M8.5 12v2.923c.67-.204 1.335-.82 1.887-1.855q.26-.487.468-1.068zm3.68-1h2.146c.365-.767.594-1.61.656-2.5h-2.49a13.7 13.7 0 0 1-.312 2.5m2.802-3.5a7 7 0 0 0-.656-2.5H12.18c.174.782.282 1.623.312 2.5zM11.27 2.461c.247.464.462.98.64 1.539h1.835a7 7 0 0 0-3.072-2.472c.218.284.418.598.597.933M10.855 4a8 8 0 0 0-.468-1.068C9.835 1.897 9.17 1.282 8.5 1.077V4z" />
              </svg>
            </div>
            <div className="link-text">
              <div className="link-title">{t.socials.whatsapp}</div>
              <div className="link-sub">{t.socials.whatsapp_sub}</div>
            </div>
            <svg className="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </a>
        </div>

        <div className="section">
          <div className="links-col">
            <a href="https://alejandrones.com/blog/" className="link-btn" target="_blank" rel="noopener noreferrer">
              <div className="link-icon alt">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div className="link-text">
                <div className="link-title">{t.links.portfolio.title}</div>
                <div className="link-sub">{t.links.portfolio.description}</div>
              </div>
              <svg className="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>

            <a href="#" className="link-btn">
              <div className="link-icon alt">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <div className="link-text">
                <div className="link-title">{t.links.company.title}</div>
                <div className="link-sub">{t.links.company.description}</div>
              </div>
              <svg className="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>

            <a href="#" className="link-btn">
              <div className="link-icon alt">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M12 18v-6" />
                  <path d="M9 15l3 3 3-3" />
                </svg>
              </div>
              <div className="link-text">
                <div className="link-title">{t.links.cv.title}</div>
                <div className="link-sub">{t.links.cv.description}</div>
              </div>
              <svg className="link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Testimonials Carousel ── */}
        <div className="section">
          <div className="section-label">{t.sections.testimonials}</div>
          <div className="carousel-wrapper">
            <TestimonialsCarousel />
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="section">
          <div className="section-label">{t.sections.stats}</div>
          <StatsCounter />
        </div>

        {/* ── CTA ── */}
        <div className="section">
          <div className="cta">
            <div className="cta-eyebrow">{t.cta.eyebrow}</div>
            <div className="cta-title">{t.cta.title}</div>
            <p className="cta-sub">{t.cta.subtitle}</p>
            <button
              type="button"
              className="cta-btn"
              id="cta-btn"
              onClick={() => setIsRedirectOpen(true)}
            >
              <span>{t.cta.button}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>

        <footer>
          <div className="footer-line"></div>
          <div className="footer-text">{t.footer}</div>
        </footer>
      </div>

      {/* ── Floating WhatsApp Button & Modal ── */}
      <div className="wa-float-container">
        <WhatsAppModal />
      </div>

      <RedirectModal
        isOpen={isRedirectOpen}
        onClose={() => setIsRedirectOpen(false)}
        onConfirm={() => {
          window.open(ctaUrl, "_blank");
          setIsRedirectOpen(false);
        }}
      />
    </>
  );
}
