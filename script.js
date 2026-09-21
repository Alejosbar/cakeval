/* ═══════════════════════════════════════════════════
   NAV — Toggle menú móvil
   ═══════════════════════════════════════════════════ */
(function initMobileMenu() {
  const toggle = document.getElementById('menuToggle');
  const menu = document.getElementById('mobileMenu');
  const icon = document.getElementById('menuIcon');
  if (!toggle || !menu || !icon) return;

  const HAMBURGER = `
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="17" x2="20" y2="17" />
  `;
  const CLOSE = `<path d="M6 18L18 6M6 6l12 12" />`;

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    icon.innerHTML = open ? CLOSE : HAMBURGER;
  });

  menu.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      icon.innerHTML = HAMBURGER;
    })
  );
})();

/* ═══════════════════════════════════════════════════
   FORMULARIO DE CONTACTO
   ═══════════════════════════════════════════════════ */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form || !success) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    success.hidden = false;

    // Deshabilitar inputs después de enviar
    form.querySelectorAll('input, textarea, button').forEach((el) => {
      el.disabled = true;
    });

    // Resetear después de 4 segundos (demo)
    setTimeout(() => {
      form.reset();
      form.querySelectorAll('input, textarea, button').forEach((el) => {
        el.disabled = false;
      });
      success.hidden = true;
    }, 4000);
  });
})();

/* ═══════════════════════════════════════════════════
   FOOTER — Año dinámico
   ═══════════════════════════════════════════════════ */
(function initFooterYear() {
  const el = document.getElementById('footerCopy');
  if (!el) return;
  const year = new Date().getFullYear();
  el.textContent = `© ${year} Cakeval — Tabio, Cundinamarca. Todos los derechos reservados.`;
})();

/* ═══════════════════════════════════════════════════
   SMOOTH SCROLL con offset del navbar
   ═══════════════════════════════════════════════════ */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (!target) return;

      e.preventDefault();
      const nav = document.getElementById('nav');
      const offset = nav ? nav.offsetHeight : 0;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();

/* ═══════════════════════════════════════════════════
   REVEAL AL SCROLL
   ═══════════════════════════════════════════════════ */
(function initRevealOnScroll() {
  const elements = document.querySelectorAll(
    '.section-title, .section-p, .mission-img-wrap, .mission-text, .vision-text, .vision-img-wrap, .objective-card, .head-center'
  );
  if (!elements.length || !('IntersectionObserver' in window)) return;

  // Añadir estado inicial
  elements.forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  elements.forEach((el) => observer.observe(el));
})();