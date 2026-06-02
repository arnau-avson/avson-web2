// AVSON GRC - Shared JavaScript

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
