'use strict';

(function spawnStars() {
  const container = document.querySelector('.hero__stars');
  if (!container) return;

  const COUNT = 38;
  for (let i = 0; i < COUNT; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    const size = 2 + Math.random() * 3;          // 2–5px
    const x    = Math.random() * 100;             // % across
    const y    = Math.random() * 100;             // % down
    const dur  = 2.5 + Math.random() * 3.5;      // 2.5–6s
    const delay = Math.random() * 6;              // 0–6s stagger
    const peak = 0.45 + Math.random() * 0.45;    // 0.45–0.9 opacity peak
    star.style.cssText = `
      width:${size}px; height:${size}px;
      left:${x}%; top:${y}%;
      --dur:${dur.toFixed(2)}s;
      --delay:${delay.toFixed(2)}s;
      --peak:${peak.toFixed(2)};
      box-shadow: 0 0 ${size * 2}px rgba(255,230,160,0.6);
    `;
    container.appendChild(star);
  }
})();

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
