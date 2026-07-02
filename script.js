'use strict';

(function spawnStars() {
  const container = document.querySelector('.hero__stars');
  if (!container) return;

  const COUNT = 38;
  const TINTS = [
    { fill: '#ffffff', glow: 'rgba(255,230,160,0.6)' },
    { fill: '#ffe3b0', glow: 'rgba(255,210,130,0.65)' },
    { fill: '#ffd2c4', glow: 'rgba(235,140,120,0.55)' },
    { fill: '#c8ecec', glow: 'rgba(120,200,200,0.5)' }
  ];
  for (let i = 0; i < COUNT; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    const size = 2 + Math.random() * 3;          // 2–5px
    const x    = Math.random() * 100;             // % across
    const y    = Math.random() * 100;             // % down
    const dur  = 2.5 + Math.random() * 3.5;      // 2.5–6s
    const delay = Math.random() * 6;              // 0–6s stagger
    const peak = 0.45 + Math.random() * 0.45;    // 0.45–0.9 opacity peak
    const tint = TINTS[Math.floor(Math.random() * TINTS.length)];
    star.style.cssText = `
      width:${size}px; height:${size}px;
      left:${x}%; top:${y}%;
      background:${tint.fill};
      --dur:${dur.toFixed(2)}s;
      --delay:${delay.toFixed(2)}s;
      --peak:${peak.toFixed(2)};
      box-shadow: 0 0 ${size * 2}px ${tint.glow};
    `;
    container.appendChild(star);
  }
})();

(function scrollReveal() {
  const targets = document.querySelectorAll(
    '.two-column > *, .cards .card, .callout > *, .contact > *'
  );
  if (!targets.length || !('IntersectionObserver' in window)) return;

  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  targets.forEach((el) => observer.observe(el));
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
