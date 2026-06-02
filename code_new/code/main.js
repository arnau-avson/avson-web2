// AVSON GRC - Shared JavaScript

// ── Preview Password Gate ──
(function() {
  var PASS = 'Avson1234';
  var KEY  = 'avson-preview-auth';

  if (sessionStorage.getItem(KEY) === '1') return;

  // Inject styles
  var style = document.createElement('style');
  style.textContent = [
    '#avson-gate{position:fixed;inset:0;z-index:99999;background:#1A2744;display:flex;align-items:center;justify-content:center;font-family:"Inter",sans-serif;}',
    '#avson-gate__box{background:#fff;border-radius:16px;padding:48px 40px;width:100%;max-width:400px;text-align:center;box-shadow:0 24px 64px rgba(0,0,0,0.4);}',
    '#avson-gate__logo{font-family:"Cormorant Garamond",serif;font-size:2rem;font-weight:600;color:#1A2744;letter-spacing:0.05em;margin-bottom:8px;}',
    '#avson-gate__sub{font-size:0.85rem;color:#6B7280;margin-bottom:32px;}',
    '#avson-gate__label{display:block;text-align:left;font-size:0.8rem;font-weight:600;color:#374151;letter-spacing:0.06em;text-transform:uppercase;margin-bottom:8px;}',
    '#avson-gate__input{width:100%;padding:12px 16px;border:2px solid #E5E7EB;border-radius:8px;font-size:1rem;outline:none;transition:border-color .2s;margin-bottom:16px;}',
    '#avson-gate__input:focus{border-color:#1A2744;}',
    '#avson-gate__btn{width:100%;padding:14px;background:#C6A96A;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;letter-spacing:0.03em;transition:background .2s;}',
    '#avson-gate__btn:hover{background:#b5963a;}',
    '#avson-gate__err{color:#EF4444;font-size:0.85rem;margin-top:12px;min-height:20px;}'
  ].join('');
  document.head.appendChild(style);

  // Inject HTML
  var gate = document.createElement('div');
  gate.id = 'avson-gate';
  gate.innerHTML =
    '<div id="avson-gate__box">' +
      '<div id="avson-gate__logo">AVSON</div>' +
      '<p id="avson-gate__sub">Vista previa privada &mdash; Acceso restringido</p>' +
      '<label id="avson-gate__label" for="avson-gate__pw">Contraseña</label>' +
      '<input id="avson-gate__input" type="password" placeholder="Introduce la contraseña" autocomplete="current-password" />' +
      '<button id="avson-gate__btn">Entrar</button>' +
      '<p id="avson-gate__err"></p>' +
    '</div>';

  (document.body || document.documentElement).appendChild(gate);

  function tryUnlock() {
    var val = document.getElementById('avson-gate__input').value;
    if (val === PASS) {
      sessionStorage.setItem(KEY, '1');
      document.getElementById('avson-gate').remove();
    } else {
      var err = document.getElementById('avson-gate__err');
      err.textContent = 'Contraseña incorrecta. Inténtalo de nuevo.';
      document.getElementById('avson-gate__input').value = '';
      document.getElementById('avson-gate__input').focus();
    }
  }

  document.getElementById('avson-gate__btn').addEventListener('click', tryUnlock);
  document.getElementById('avson-gate__input').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') tryUnlock();
  });
})();

// ── Language Switcher ──
function toggleLang() {
  var ls = document.getElementById('langSwitcher');
  if (ls) ls.classList.toggle('open');
}

// Close lang-switcher on outside click
document.addEventListener('click', function(e) {
  var ls = document.getElementById('langSwitcher');
  if (ls && !ls.contains(e.target)) ls.classList.remove('open');
});

// Inject lang-switcher into v3-nav if not already present
document.addEventListener('DOMContentLoaded', function() {
  var navInner = document.querySelector('.v3-nav__inner');
  if (!navInner || navInner.querySelector('.lang-switcher')) return;

  var cta = navInner.querySelector('.v3-nav__cta');
  if (!cta) return;

  var langDiv = document.createElement('div');
  langDiv.className = 'lang-switcher';
  langDiv.id = 'langSwitcher';
  langDiv.innerHTML =
    '<button class="lang-switcher__btn" onclick="toggleLang()" aria-label="Cambiar idioma">' +
      '<span class="lang-switcher__flag">\uD83C\uDF10</span>' +
      '<span id="langCurrent">ES</span>' +
      '<span class="lang-switcher__chevron">\u25BC</span>' +
    '</button>' +
    '<div class="lang-switcher__dropdown">' +
      '<a href="#" class="lang-switcher__item lang-switcher__item--active">' +
        '<span class="lang-switcher__item-flag">\uD83C\uDDEA\uD83C\uDDF8</span>' +
        '<span class="lang-switcher__item-label">Espa\u00F1ol</span>' +
        '<span class="lang-switcher__item-tag">ES</span>' +
      '</a>' +
    '</div>';

  navInner.insertBefore(langDiv, cta);

  // Also inject into mobile overlay if present
  var overlayLinks = document.getElementById('navOverlayLinks');
  var overlayCta = document.getElementById('navOverlayCta');
  if (overlayLinks && overlayCta) {
    var mobileLang = document.createElement('div');
    mobileLang.className = 'lang-switcher lang-switcher--mobile';
    mobileLang.innerHTML =
      '<a href="#" class="lang-switcher__item lang-switcher__item--active" style="justify-content:center;border:1px solid rgba(255,255,255,0.15);color:white;padding:12px 20px;">' +
        '<span class="lang-switcher__item-flag">\uD83C\uDDEA\uD83C\uDDF8</span>' +
        '<span class="lang-switcher__item-label" style="color:white;">Espa\u00F1ol</span>' +
        '<span class="lang-switcher__item-tag" style="color:rgba(255,255,255,0.5);">ES</span>' +
      '</a>';
    overlayCta.parentNode.insertBefore(mobileLang, overlayCta);
  }
});

// ── Mobile Menu (legacy) ──
function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  if (navLinks) navLinks.classList.toggle('mobile-open');
}

// ── FAQ Accordion ──
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.faq-question').forEach(function(q) {
    q.addEventListener('click', function() {
      var item = this.parentElement;
      var isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(function(i) { i.classList.remove('open'); });
      if (!isOpen) item.classList.add('open');
    });
  });

  // Intersection Observer for fade-in
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(function(el) { observer.observe(el); });

  // Cookie Banner
  if (!localStorage.getItem('avson-cookies')) {
    var banner = document.getElementById('cookieBanner');
    if (banner) banner.style.display = 'flex';
  }
});

function acceptCookies() {
  localStorage.setItem('avson-cookies', 'accepted');
  var banner = document.getElementById('cookieBanner');
  if (banner) banner.style.display = 'none';
}

function rejectCookies() {
  localStorage.setItem('avson-cookies', 'rejected');
  var banner = document.getElementById('cookieBanner');
  if (banner) banner.style.display = 'none';
}

// Form submission (placeholder)
function handleFormSubmit(e) {
  e.preventDefault();
  var btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '\u2713 Enviado \u2014 Te contactamos en menos de 24h';
  btn.style.background = '#10b981';
  btn.disabled = true;
}

// Popup after 15 seconds (exit-intent concept)
setTimeout(function() {
  var modal = document.getElementById('exitModal');
  if (modal && !sessionStorage.getItem('avson-modal-shown') && !localStorage.getItem('avson-cookies')) {
    if (!document.querySelector('form:focus-within')) {
      if (!window.location.pathname.includes('contacto')) {
        modal.classList.add('active');
        sessionStorage.setItem('avson-modal-shown', '1');
      }
    }
  }
}, 15000);

function closeModal(id) {
  var m = document.getElementById(id || 'exitModal');
  if (m) m.classList.remove('active');
}
