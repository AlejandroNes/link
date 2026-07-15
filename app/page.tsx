"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { es } from "../locales/es";
import { en } from "../locales/en";
import LanguageSwitcher from "../components/LanguageSwitcher";
import StatsCounter from "../components/StatsCounter";
import TestimonialsCarousel from "../components/TestimonialsCarousel";
import WhatsAppModal from "../components/WhatsAppModal";

const locales: Record<string, any> = { es, en };

export default function Home() {
  const [lang, setLang] = useState("es");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read from cookie on mount
    const match = document.cookie.match(new RegExp('(^| )lang=([^;]+)'));
    if (match) {
      setLang(match[2]);
    }
    // Fix iOS double-tap issues
    document.body.ontouchstart = () => {};
    setMounted(true);
  }, []);

  const handleSetLang = (newLang: string) => {
    setLang(newLang);
    document.cookie = `lang=${newLang}; max-age=31536000; path=/`;
    document.documentElement.lang = newLang;
  };

  const t = locales[lang];

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <>
      <div className="page">
        {/* ── Language Selector ── */}
        <div className="lang-switch" id="lang-switch" role="navigation" aria-label="Language selector">
          <LanguageSwitcher currentLang={lang} setLang={handleSetLang} />
        </div>

        {/* ── Profile ── */}
        <div className="profile">
          <div className="avatar-wrap">
            <div className="avatar-glow"></div>
            <div className="avatar-ring"></div>
            <img className="avatar" src="/images/perfil Alejandro Nes (1).png" alt="Alejandro Nes" />
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
            <a href="https://www.linkedin.com/in/alejandronesdev/" target="_blank" className="social-btn" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-1 1.9-2 3.8-2 4.1 0 4.9 2.6 4.9 6v6.3h-4v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9z" />
              </svg>
            </a>
            <a href="#" className="social-btn" aria-label="YouTube">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/alejandronesdev" target="_blank" className="social-btn" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.3" cy="6.7" r="1" />
              </svg>
            </a>
            <a href="https://www.facebook.com/digitalnestweb" target="_blank" className="social-btn" aria-label="Facebook">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
              </svg>
            </a>
            <a href="https://github.com/AlejandroNes" target="_blank" className="social-btn" aria-label="GitHub">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 .5C5.7.5.9 5.3.9 11.6c0 5 3.2 9.2 7.7 10.7.6.1.8-.2.8-.6v-2.2c-3.1.7-3.8-1.3-3.8-1.3-.5-1.3-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.5-.3-5.1-1.2-5.1-5.5 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.9 0 0 .9-.3 3 1.1a10 10 0 0 1 5.4 0c2.1-1.4 3-1.1 3-1.1.6 1.5.2 2.6.1 2.9.7.8 1.1 1.8 1.1 3 0 4.3-2.6 5.2-5.1 5.5.4.4.8 1.1.8 2.2v3.3c0 .4.2.7.8.6 4.5-1.5 7.7-5.7 7.7-10.7C23.1 5.3 18.3.5 12 .5z" />
              </svg>
            </a>
          </div>
          {/* WhatsApp CTA button */}
          <a href="https://alejandrones.com/" target="_blank" className="link-btn link-btn-whatsapp" id="btn-whatsapp">
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
            <a href="https://alejandrones.com/blog/" className="link-btn" target="_blank">
              <div className="link-icon alt">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" width="20" height="20" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
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

        {/* ── Tech Stack ── */}
        <div className="section">
          <div className="section-label">{t.sections.stack}</div>
          <div className="tech-grid">
            <div className="tech-chip">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" width="256" height="256" fill="none">
                <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
                <g stroke="#61DAFB" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg><span>REACT</span>
            </div>
            <div className="tech-chip">
              <svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <g strokeWidth="0"></g>
                <g strokeLinecap="round" strokeLinejoin="round"></g>
                <g>
                  <path d="M119.6 0.1C115.7 0.4 79.4 3.7 23.7 53.5C4 89.2 1.2 109.4 0 128C0 146.7 8.1 194.7 88.7 250.1C115.7 255.7 140.3 255.7 186.4 242.2C167.9 212.6 147.4 184.9 121.7 147C95.9 109 95.7 146.5 95.1 184.8C92.9 187.1 87.6 187.6 82.2 186.8C80.5 185 80 133.7 80 83.5C82.7 81 88.5 80.5 95.7 82.1C126.6 128.7 143.2 153.8 177.1 205.1C197.4 235.8 207.5 229.3 224.7 212.1C251.3 170.8 254.8 146.7 256 128C256 109.4 247.9 61.3 167.3 6C140.6 0.4 121.7 -0.1 119.6 0.1Z" fill="#ffffff"></path>
                  <path d="M172 77.5C174.5 80.4 174.7 95 174.7 126.3L166.7 159.2L158.8 114.3C158.8 93.2 159 80.7 161.5 77.6C166.8 77 171.2 77 172 77.5Z" fill="#ffffff"></path>
                </g>
              </svg><span>NEXT</span>
            </div>
            <div className="tech-chip">
              <svg viewBox="-4 0 264 264" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <path d="M255.9 59.6V117.3L206.4 148.2V202.4L105.3 263C104.3 263.4 102.2 263.4 101.2 263L2.1 205.9C0 203.8 0 202.4 0 32.7C0 30.2 1.6 29.4 2.1 29.1L51.6 0.6C55.7 0.6 105.3 29.1 106.5 30.2C107.2 31.6 107.4 32.7 107.4 138.7L148.6 114.9V60.7C148.6 57.5 150.3 57.1 150.7 57.1L200.3 28.6C204.4 28.6 253.9 57.1 255.2 58.3C255.7 59.3 255.9 59.6 255.9 59.6ZM247.7 114.9V67.8L230.4 77.8L206.4 91.6V138.7L247.7 114.9ZM198.2 199.9V152.9L174.6 166.4L107.3 204.8V252.3L198.2 199.9ZM8.3 39.8V199.9L99.1 252.3V204.8L51.6 177.9C49.7 175.4 49.5 174.3 49.5 63.6L25.6 49.8L8.3 39.8ZM53.7 8.9L12.4 32.7L53.7 56.4L94.9 32.7L53.7 8.9ZM75.1 157.2L99.1 143.4V39.8L81.7 49.8L57.8 63.6V167.2L75.1 157.2ZM202.3 36.9L161 60.7L202.3 84.5L243.6 60.7L202.3 36.9ZM198.2 91.6L174.2 77.8L156.9 67.8V114.9L180.8 128.7L198.2 91.6ZM103.2 197.6L163.7 163.1L194 145.8L152.8 122L105.3 149.4L62 174.3L103.2 197.6Z" fill="#FF2D20"></path>
              </svg><span>LARAVEL</span>
            </div>
            <div className="tech-chip">
              <svg viewBox="0 -17.5 256 256" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" fill="#000000">
                <path d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36z" fill="#41B883"></path>
                <path d="M0 0l128 220.8L256 0h-51.2L128 132.48 50.56 0H0z" fill="#41B883"></path>
                <path d="M50.56 0L128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56z" fill="#35495E"></path>
              </svg><span>VUE.JS</span>
            </div>
            <div className="tech-chip">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="#000000">
                <rect x="2" y="2" width="28" height="28" rx="1.312" style={{ fill: "#3178c6" }}></rect>
                <path d="M18.245,23.759v3.068a6.492,6.492,0,0,0,1.764.575,11.56,11.56,0,0,0,2.146.192,9.968,9.968,0,0,0,2.088-.211,5.11,5.11,0,0,0,1.735-.7,3.542,3.542,0,0,0,1.181-1.266,4.469,4.469,0,0,0,.186-3.394,3.409,3.409,0,0,0-.717-1.117,5.236,5.236,0,0,0-1.123-.877,12.027,12.027,0,0,0-1.477-.734q-.6-.249-1.08-.484a5.5,5.5,0,0,1-.813-.479,2.089,2.089,0,0,1-.516-.518,1.091,1.091,0,0,1-.181-.618,1.039,1.039,0,0,1,.162-.571,1.4,1.4,0,0,1,.459-.436,2.439,2.439,0,0,1,.726-.283,4.211,4.211,0,0,1,.956-.1,5.942,5.942,0,0,1,.808.058,6.292,6.292,0,0,1,.856.177,5.994,5.994,0,0,1,.836.3,4.657,4.657,0,0,1,.751.422V13.9a7.509,7.509,0,0,0-1.525-.4,12.426,12.426,0,0,0-1.9-.129,8.767,8.767,0,0,0-2.064.235,5.239,5.239,0,0,0-1.716.733,3.655,3.655,0,0,0-1.171,1.271,3.731,3.731,0,0,0-.431,1.845,3.588,3.588,0,0,0,.789,2.34,6,6,0,0,0,2.395,1.639q.63.26,1.175.509a6.458,6.458,0,0,1,.942.517,2.463,2.463,0,0,1,.626.585,1.2,1.2,0,0,1,.23.719,1.1,1.1,0,0,1-.144.552,1.269,1.269,0,0,1-.435.441,2.381,2.381,0,0,1-.726.292,4.377,4.377,0,0,1-1.018.105,5.773,5.773,0,0,1-1.969-.35A5.874,5.874,0,0,1,18.245,23.759Zm-5.154-7.638h4V13.594H5.938v2.527H9.92V27.375h3.171Z" style={{ fill: "#ffffff", fillRule: "evenodd" }}></path>
              </svg><span>TYPESCRIPT</span>
            </div>
            <div className="tech-chip">
              <svg fill="#ffa21f" viewBox="0 -8 72 72" xmlns="http://www.w3.org/2000/svg" stroke="#ffa21f">
                <path d="M36,4.07c-11.85,0-21.46,3.21-21.46,7.19v5.89c0,4,9.61,7.19,21.46,7.19s21.45-3.21,21.45-7.19V11.26C57.46,7.28,47.85,4.07,36,4.07Z"></path>
                <path d="M36,27.78c-11.32,0-20.64-2.93-21.46-6.66,0,.18,0,9.75,0,9.75,0,4,9.61,7.18,21.46,7.18s21.45-3.21,21.45-7.18c0,0,0-9.57,0-9.75C56.63,24.85,47.32,27.78,36,27.78Z"></path>
                <path d="M57.44,35c-.82,3.72-10.12,6.66-21.43,6.66S15.37,38.72,14.55,35v9.75c0,4,9.61,7.18,21.46,7.18s21.45-3.21,21.45-7.18Z"></path>
              </svg><span>SQL</span>
            </div>
            <div className="tech-chip">
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path fill="#2396ED" d="M12.342 4.536l.15-.227.262.159.116.083c.28.216.869.768.996 1.684.223-.04.448-.06.673-.06.534 0 .893.124 1.097.227l.105.057.068.045.191.156-.066.2a2.044 2.044 0 01-.47.73c-.29.299-.8.652-1.609.698l-.178.005h-.148c-.37.977-.867 2.078-1.702 3.066a7.081 7.081 0 01-1.74 1.488 7.941 7.941 0 01-2.549.968c-.644.125-1.298.187-1.953.185-1.45 0-2.73-.288-3.517-.792-.703-.449-1.243-1.182-1.606-2.177a8.25 8.25 0 01-.461-2.83.516.516 0 01.432-.516l.068-.005h10.54l.092-.007.149-.016c.256-.034.646-.11.92-.27-.328-.543-.421-1.178-.268-1.854a3.3 3.3 0 01.3-.81l.108-.187zM2.89 5.784l.04.007a.127.127 0 01.077.082l.006.04v1.315l-.006.041a.127.127 0 01-.078.082l-.039.006H1.478a.124.124 0 01-.117-.088l-.007-.04V5.912l.007-.04a.127.127 0 01.078-.083l.039-.006H2.89zm1.947 0l.039.007a.127.127 0 01.078.082l.006.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H3.424a.125.125 0 01-.117-.088L3.3 7.23V5.913a.13.13 0 01.085-.123l.039-.007h1.413zm1.976 0l.039.007a.127.127 0 01.077.082l.007.04v1.315l-.007.041a.127.127 0 01-.078.082l-.039.006H5.4a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.039-.006h1.413zm1.952 0l.039.007a.127.127 0 01.078.082l.007.04v1.315a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.412zm1.97 0l.039.007a.127.127 0 01.078.082l.006.04v1.315a.13.13 0 01-.085.123l-.039.006H9.322a.124.124 0 01-.117-.088l-.006-.04V5.912l.006-.04a.127.127 0 01.078-.083l.04-.006h1.411zM4.835 3.892l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H3.424a.125.125 0 01-.117-.09l-.007-.04V4.021a.13.13 0 01.085-.122l.039-.007h1.412zm1.976 0l.04.007a.127.127 0 01.077.081l.007.041v1.315a.13.13 0 01-.085.123l-.039.007H5.4a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.039-.007h1.412zm1.953 0c.054 0 .1.037.117.088l.007.041v1.315a.13.13 0 01-.085.123l-.04.007H7.353a.125.125 0 01-.117-.09l-.006-.04V4.021l.006-.04a.127.127 0 01.078-.082l.04-.007h1.412zm0-1.892c.054 0 .1.037.117.088l.007.04v1.316a.13.13 0 01-.085.123l-.04.006H7.353a.124.124 0 01-.117-.088l-.006-.04V2.128l.006-.04a.127.127 0 01.078-.082L7.353 2h1.412z"></path>
              </svg><span>DOCKER</span>
            </div>
            <div className="tech-chip">
              <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                <path fill="#6b24f0" fillRule="evenodd" d="M.5 2.75a2.25 2.25 0 114.28.97l1.345 1.344.284-.284a2.25 2.25 0 013.182 0l.284.284 1.344-1.344a2.25 2.25 0 111.06 1.06l-1.343 1.345.284.284a2.25 2.25 0 010 3.182l-.284.284 1.344 1.344a2.25 2.25 0 11-1.06 1.06l-1.345-1.343-.284.284a2.25 2.25 0 01-3.182 0l-.284-.284-1.344 1.344a2.25 2.25 0 11-1.06-1.06l1.343-1.345-.284-.284a2.25 2.25 0 010-3.182l.284-.284L3.72 4.781A2.25 2.25 0 01.5 2.75zM2.75 2a.75.75 0 100 1.5.75.75 0 000-1.5zm0 10.5a.75.75 0 100 1.5.75.75 0 000-1.5zm9.75.75a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM13.25 2a.75.75 0 100 1.5.75.75 0 000-1.5zM7.47 5.841a.75.75 0 011.06 0L10.16 7.47a.75.75 0 010 1.06L8.53 10.16a.75.75 0 01-1.06 0L5.84 8.53a.75.75 0 010-1.06L7.47 5.84z" clipRule="evenodd"></path>
              </svg><span>API</span>
            </div>
            <div className="tech-chip">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
                <path fill="#007BFF" d="M212 32C228 32 236 50 248 80C268 132 292 156 344 176C374 188 392 196 392 216C392 236 374 244 344 256C292 276 268 300 248 352C236 382 228 400 212 400C196 400 188 382 176 352C156 300 132 276 80 256C50 244 32 236 32 216C32 196 50 188 80 176C132 156 156 132 176 80C188 50 196 32 212 32Z" />
                <path fill="#FFFFFF" d="M394 246C402 246 408 258 414 274C424 300 438 314 462 324C478 330 480 338 480 346C480 354 478 362 462 368C438 378 424 392 414 418C408 434 402 446 394 446C386 446 380 434 374 418C364 392 350 378 326 368C310 362 308 354 308 346C308 338 310 330 326 324C350 314 364 300 374 274C380 258 386 246 394 246Z" />
              </svg><span>AI</span>
            </div>
            <div className="tech-chip">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="#D97854" d="M96 64H416V128H480V256H416V448H352V320H320V448H192V320H160V448H96V256H32V128H96Z" />
                <rect x="140" y="160" width="40" height="40" fill="#000" />
                <rect x="332" y="160" width="40" height="40" fill="#000" />
              </svg><span>CODE AI</span>
            </div>
          </div>
        </div>

        {/* ── Testimonials Carousel ── */}
        <div className="section">
          <div className="section-label">{t.sections.testimonials}</div>
          <div className="carousel-wrapper">
            <TestimonialsCarousel translations={t} />
          </div>
        </div>

        {/* ── Stats ── */}
        <div className="section">
          <div className="section-label">{t.sections.stats}</div>
          <StatsCounter translations={t} />
        </div>

        {/* ── CTA ── */}
        <div className="section">
          <div className="cta">
            <div className="cta-eyebrow">{t.cta.eyebrow}</div>
            <div className="cta-title">{t.cta.title}</div>
            <p className="cta-sub">{t.cta.subtitle}</p>
            <a href="https://wa.me/59178790800?text=¡Hola,%20Alejandro!%20👋%20Vi%20tu%20perfil%20y%20me%20interesa%20desarrollar%20un%20proyecto.%20Me%20gustaría%20agendar%20una%20videollamada%20gratuita%20de%2030%20minutos%20para%20conversar%20sobre%20mi%20idea%20y%20conocer%20cómo%20podemos%20trabajar%20juntos."
              target="_blank" className="cta-btn" id="cta-btn">
              <span>{t.cta.button}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>

        <footer>
          <div className="footer-line"></div>
          <div className="footer-text">{t.footer}</div>
        </footer>
      </div>

      {/* ── Floating WhatsApp Button & Modal ── */}
      <div className="wa-float-container">
        <WhatsAppModal translations={t} />
      </div>
    </>
  );
}
