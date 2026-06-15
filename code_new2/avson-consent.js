/* ════════════════════════════════════════════════════════════════════════
   AVSON — Cookie consent (RGPD compliant)
   ────────────────────────────────────────────────────────────────────────
   - Bloquea analytics/tracking hasta que el usuario acepte
   - Inyecta el banner dinámicamente (no hace falta HTML en cada página)
   - Usa localStorage key unificada: 'avson_cookies'
   - Si el usuario acepta → carga Clarity/GTM/LinkedIn
   - Si rechaza → no carga nada
   ════════════════════════════════════════════════════════════════════════ */
(function () {
  var CONSENT_KEY = 'avson_cookies';
  var consent = localStorage.getItem(CONSENT_KEY);

  // ── Analytics loaders (solo se ejecutan tras aceptar) ──
  function loadClarity(id) {
    if (!id || id === 'CLARITY_ID') return;
    (function (c, l, a, r, i, t, y) {
      c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
      t = l.createElement(r); t.async = 1; t.src = 'https://www.clarity.ms/tag/' + i;
      y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
    })(window, document, 'clarity', 'script', id);
  }

  function loadGTM(id) {
    if (!id || id === 'GTM_ID') return;
    (function (w, d, s, l, i) {
      w[l] = w[l] || []; w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
      var f = d.getElementsByTagName(s)[0], j = d.createElement(s);
      j.async = true; j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i;
      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', id);
  }

  function loadAnalytics() {
    var clarityId = window.AVSON_CLARITY_ID || 'x7fqbxtfze';
    var gtmId = window.AVSON_GTM_ID || 'GTM-T6KDZDV6';
    if (clarityId) loadClarity(clarityId);
    if (gtmId) loadGTM(gtmId);
  }

  // ── Si ya aceptó, cargar analytics directamente ──
  if (consent === 'accept') {
    loadAnalytics();
    return;
  }

  // ── Si ya rechazó, no hacer nada ──
  if (consent === 'decline') return;

  // ── Sin decisión: mostrar banner ──
  function showBanner() {
    var banner = document.createElement('div');
    banner.id = 'avsonCookieBanner';
    banner.style.cssText = 'position:fixed;bottom:0;left:0;right:0;z-index:9999;background:#1f2023;color:#fff;padding:18px 24px;display:flex;align-items:center;justify-content:center;gap:16px;flex-wrap:wrap;font-family:Inter,DM Sans,sans-serif;font-size:13px;line-height:1.5;box-shadow:0 -4px 24px rgba(0,0,0,0.2)';

    var text = document.createElement('p');
    text.style.cssText = 'margin:0;flex:1;min-width:240px';
    text.innerHTML = 'Usamos cookies propias y de terceros para analítica. <a href="cookies.html" style="color:#e85838;text-decoration:underline">Más info</a>';

    var decline = document.createElement('button');
    decline.textContent = 'Rechazar';
    decline.style.cssText = 'background:transparent;border:1px solid rgba(255,255,255,0.3);color:#fff;padding:8px 18px;border-radius:8px;cursor:pointer;font-family:inherit;font-size:13px;white-space:nowrap';

    var accept = document.createElement('button');
    accept.textContent = 'Aceptar';
    accept.style.cssText = 'background:#e85838;border:none;color:#fff;padding:8px 18px;border-radius:8px;cursor:pointer;font-family:inherit;font-size:13px;font-weight:600;white-space:nowrap';

    decline.addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'decline');
      banner.remove();
    });

    accept.addEventListener('click', function () {
      localStorage.setItem(CONSENT_KEY, 'accept');
      banner.remove();
      loadAnalytics();
    });

    banner.appendChild(text);
    banner.appendChild(decline);
    banner.appendChild(accept);
    document.body.appendChild(banner);
  }

  // Esperar a que el DOM esté listo
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', showBanner);
  } else {
    showBanner();
  }
})();
