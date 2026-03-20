'use strict';

(function setYear() {
  const year = document.getElementById('footerYear');
  if (year) {
    year.textContent = new Date().getFullYear();
  }
})();

(function initMenu() {
  const toggle = document.getElementById('menuToggle');
  const nav = document.getElementById('siteNav');

  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      toggle.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
})();
