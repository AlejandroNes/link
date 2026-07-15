/**
 * ═══════════════════════════════════════════════════════════
 *  i18n Engine — AlejandroNes Linktree
 * ═══════════════════════════════════════════════════════════
 *
 *  HOW TO ADD A NEW LANGUAGE:
 *  1. Create locales/<lang-code>.js (e.g. locales/fr.js)
 *  2. Link it in index.html BEFORE app.js: <script src="locales/fr.js"></script>
 *  3. Add the lang code to AVAILABLE_LANGS below
 *  4. Done! The selector and translations will load automatically.
 * ═══════════════════════════════════════════════════════════
 */

'use strict';

// ── Config ────────────────────────────────────────────────
const AVAILABLE_LANGS = ['es', 'en'];
const DEFAULT_LANG = 'es';
const COOKIE_NAME = 'nes_lang';
const COOKIE_DAYS = 365;

// ── Service card SVG icons (keyed by index) ────────────────
const SERVICE_ICONS = [
  `<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.8"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.5 3h2l2.6 12.6a2 2 0 0 0 2 1.6h8.5a2 2 0 0 0 2-1.5l1.6-7.7H6"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 2a5 5 0 0 0-5 5c0 2.4 1.5 3.6 2.3 4.9.5.8.7 1.4.7 2.1h4c0-.7.2-1.3.7-2.1.8-1.3 2.3-2.5 2.3-4.9a5 5 0 0 0-5-5z"/><path d="M10 19h4M11 22h2"/></svg>`,
  `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>`,
];

// ── Cookie utilities ───────────────────────────────────────
const Cookie = {
  set(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
  },
  get(name) {
    return document.cookie
      .split('; ')
      .find(row => row.startsWith(name + '='))
      ?.split('=')[1]
      .split(';')[0]
      .trim()
      .replace(/^"|"$/g, '') || null;
  },
};

// ── Translation lookup (dot-notation key) ─────────────────
function t(translations, key) {
  if (!translations || !key) return null;
  return key.split('.').reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : null), translations);
}

// ── Apply translations to all [data-i18n] elements ────────
function applyTranslations(translations) {
  if (!translations) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const value = t(translations, key);
    if (value === null) return;

    // Section labels contain a styled "·" dot — preserve the span
    if (el.classList.contains('section-label')) {
      el.innerHTML = value.replace('·', '<span class="n">·</span>');
    } else {
      el.innerHTML = value; // innerHTML allows bold tags if needed
    }
  });

  // Handle placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const value = t(translations, key);
    if (value !== null) {
      el.setAttribute('placeholder', value);
    }
  });

  // Render testimonials carousel dynamically
  renderTestimonials(translations);

  // Update html[lang] for accessibility
  document.documentElement.lang = translations.meta.lang;
}

// ── Render testimonials ────────────────────────────────────
function renderTestimonials(translations) {
  const carousel = document.getElementById('testimonials-carousel');
  if (!carousel || !Array.isArray(translations.testimonials)) return;

  // Star SVG
  const starSvg = `<svg viewBox="0 0 20 20" fill="currentColor" style="width:14px; height:14px; color:#F59E0B;"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>`;

  // Create cards
  const cardsHtml = translations.testimonials.map((t, i) => {
    return `
    <div class="testimonial-card">
      <div class="testimonial-stars">
        ${starSvg.repeat(t.rating)}
      </div>
      <div class="link-text" style="width: 100%;">
        <div class="link-title" style="margin-bottom: 6px;">${t.name}</div>
        <div class="link-sub" style="white-space: normal; line-height: 1.4;">"${t.description}"</div>
      </div>
    </div>`;
  }).join('');

  carousel.innerHTML = cardsHtml;
}

// ── Build language selector UI ─────────────────────────────
function renderLangSwitch(allTranslations, currentLang) {
  const container = document.getElementById('lang-switch');
  if (!container) return;

  container.innerHTML = AVAILABLE_LANGS.map(code => {
    const meta = allTranslations[code]?.meta;
    const isActive = code === currentLang;
    const flagImg = code === 'es' ? 'images/idioma español.png' : 'images/idioma ingles.png';
    return `
      <button
        class="lang-btn${isActive ? ' active' : ''}"
        data-lang="${code}"
        aria-pressed="${isActive}"
        title="${meta?.label || code}"
      ><img src="${flagImg}" alt="${code}" style="width:16px; height:16px; border-radius:50%; object-fit:cover;"> ${code.toUpperCase()}</button>`;
  }).join('');

  // Attach click handlers
  container.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      switchLanguage(lang, allTranslations);
    });
  });
}

// ── Switch active language ─────────────────────────────────
function switchLanguage(lang, allTranslations) {
  if (!allTranslations[lang]) return;

  // Persist choice in cookie
  Cookie.set(COOKIE_NAME, lang, COOKIE_DAYS);

  // Update active button state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive);
  });

  applyTranslations(allTranslations[lang]);
}




// ── Detect preferred language ──────────────────────────────
function detectLang() {
  // 1. Cookie preference (user's explicit choice)
  const fromCookie = Cookie.get(COOKIE_NAME);
  if (fromCookie && AVAILABLE_LANGS.includes(fromCookie)) return fromCookie;

  // 2. Browser language
  const browserLang = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
  if (AVAILABLE_LANGS.includes(browserLang)) return browserLang;

  // 3. Default
  return DEFAULT_LANG;
}

// ── Number Counter Animation for Stats ─────────────────────
function initStatsAnimation() {
  const statsContainer = document.querySelector('.stats');
  if (!statsContainer) return;

  const animateNumbers = (el) => {
    const text = el.innerText;
    // Extract the numeric part and the suffix (+, %, etc)
    const match = text.match(/^(\d+)(.*)$/);
    if (!match) return;

    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const duration = 2000; // 2 seconds
    const fps = 60;
    const frames = duration / (1000 / fps);
    let currentFrame = 0;

    // Set initial text to 0 + suffix
    el.innerText = '0' + suffix;

    const counter = setInterval(() => {
      currentFrame++;
      // Easing out function for smooth deceleration
      const progress = 1 - Math.pow(1 - currentFrame / frames, 3);
      const currentVal = Math.floor(target * progress);

      el.innerText = currentVal + suffix;

      if (currentFrame >= frames) {
        clearInterval(counter);
        el.innerText = target + suffix; // Ensure exact final value
      }
    }, 1000 / fps);
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate all stat numbers when the container enters the viewport
        statsContainer.querySelectorAll('.stat-num').forEach(el => animateNumbers(el));
        obs.unobserve(entry.target); // Only animate once
      }
    });
  }, { threshold: 0.3 });

  observer.observe(statsContainer);
}

// ── WhatsApp Floating Modal ──────────────────────────────
function initWhatsAppModal() {
  const btn = document.getElementById('wa-float-btn');
  const modal = document.getElementById('wa-modal');
  const closeBtn = document.getElementById('wa-modal-close');
  const form = document.getElementById('wa-form');

  const tooltip = document.getElementById('wa-tooltip');

  if (!btn || !modal || !form) return;

  // Hide tooltip after 4 seconds automatically
  if (tooltip) {
    setTimeout(() => {
      tooltip.classList.add('hidden');
    }, 4000);
  }

  btn.addEventListener('click', () => {
    modal.classList.toggle('active');
    if (tooltip) tooltip.classList.add('hidden');
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('wa-name').value.trim();
    const select = document.getElementById('wa-select').value;

    if (name && select) {
      const phone = "59178790800";
      const message = `Hola Alejandro. Mi nombre es ${name} y te escribo desde tu sitio web.\n\nMe pongo en contacto contigo por el siguiente motivo: *${select}*.\n\nMe gustaría conversar al respecto, por favor. ¡Muchas gracias!`;
      const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
      window.open(url, '_blank');
      modal.classList.remove('active');
      form.reset();
    }
  });
}

// ── Bootstrap ─────────────────────────────────────────────
function init() {
  // window.locales is loaded from locales/es.js and locales/en.js
  const allTranslations = window.locales || {};
  const lang = detectLang();

  renderLangSwitch(allTranslations, lang);
  applyTranslations(allTranslations[lang] || allTranslations[DEFAULT_LANG]);

  initStatsAnimation();
  initWhatsAppModal();

  window.__i18n = { switch: (l) => switchLanguage(l, allTranslations), current: () => Cookie.get(COOKIE_NAME) || DEFAULT_LANG };
}

// Execute initialization immediately to prevent translation flashing
init();
