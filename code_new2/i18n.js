// AVSON i18n — carga textos desde palabras.json
(function () {
  // 1. Detectar idioma: localStorage > navigator.language > default 'es'
  var SUPPORTED = ['es', 'en', 'fr', 'it'];
  var saved = localStorage.getItem('avson-lang');
  var browserLang = (navigator.language || '').split('-')[0];
  var LANG = saved || (SUPPORTED.indexOf(browserLang) !== -1 ? browserLang : 'es');

  // 2. Detectar página desde la URL: /blog/que-es-el-ens.html → "blog/que-es-el-ens"
  var pathParts = window.location.pathname.split('/').filter(Boolean);
  var pageParts = pathParts.slice();
  if (pageParts.length === 0) pageParts = ['index'];
  pageParts[pageParts.length - 1] = pageParts[pageParts.length - 1].replace(/\.html$/, '') || 'index';
  var PAGE = pageParts.join('/');

  // 3. Ruta al JSON (relativa, ajustada por profundidad de subdirectorio)
  var depth = pageParts.length - 1;
  var prefix = '';
  for (var i = 0; i < depth; i++) prefix += '../';
  var jsonPath = prefix + 'assets/palabras.json';

  fetch(jsonPath)
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function (data) {
      // Fallback: si no hay traducciones en el idioma elegido, usar 'es'
      var langData = data[LANG];
      if (!langData || !langData[PAGE]) {
        LANG = 'es';
        langData = data[LANG];
      }
      if (!langData || !langData[PAGE]) {
        console.warn('[i18n] No se encontró data["' + LANG + '"]["' + PAGE + '"]');
        return;
      }
      var t = langData[PAGE];
      applyTranslations(t);
      document.documentElement.lang = LANG;
      setupLangSwitch();
      document.dispatchEvent(new Event('i18n:ready'));
    })
    .catch(function (err) {
      console.error('[i18n] Error cargando traducciones:', err);
    });

  function resolve(obj, key) {
    if (obj[key] !== undefined) return obj[key];
    var parts = key.split('.');
    var val = obj;
    for (var i = 0; i < parts.length; i++) {
      if (val === undefined || val === null) return undefined;
      val = val[parts[i]];
    }
    return val;
  }

  function applyTranslations(t) {
    // 1. Meta tags
    if (t['meta.title']) document.title = t['meta.title'];

    var metaMap = {
      'meta.description': 'meta[name="description"]',
      'meta.keywords': 'meta[name="keywords"]',
      'meta.ogTitle': 'meta[property="og:title"]',
      'meta.ogDescription': 'meta[property="og:description"]',
      'meta.twitterTitle': 'meta[name="twitter:title"]',
      'meta.twitterDescription': 'meta[name="twitter:description"]'
    };
    for (var key in metaMap) {
      if (t[key]) {
        var el = document.querySelector(metaMap[key]);
        if (el) el.setAttribute('content', t[key]);
      }
    }

    // 2. Elementos con data-i18n (innerHTML)
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      var val = resolve(t, k);
      if (val !== undefined) el.innerHTML = val;
    });

    // 3. Elementos con data-i18n-text (textContent, sin HTML)
    document.querySelectorAll('[data-i18n-text]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-text');
      var val = resolve(t, k);
      if (val !== undefined) el.textContent = val;
    });

    // 4. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-placeholder');
      var val = resolve(t, k);
      if (val !== undefined) el.setAttribute('placeholder', val);
    });

    // 5. Listas dinámicas
    document.querySelectorAll('[data-i18n-list]').forEach(function (container) {
      var listKey = container.getAttribute('data-i18n-list');
      var templateId = container.getAttribute('data-i18n-template');
      var items = resolve(t, listKey);
      var template = document.getElementById(templateId);
      if (!items || !Array.isArray(items) || !template) return;

      container.innerHTML = '';
      items.forEach(function (item, idx) {
        var html = template.innerHTML;
        html = html.replace(/\{\{(\w+)\}\}/g, function (_, field) {
          return item[field] !== undefined ? item[field] : '';
        });
        html = html.replace(/\{\{\$index\}\}/g, String(idx));
        container.insertAdjacentHTML('beforeend', html);
      });
    });
  }

  // Lang switch: reescribir menú con ES/EN/FR y guardar preferencia
  function setupLangSwitch() {
    var others = SUPPORTED.filter(function (l) { return l !== LANG; });

    function makeSwitcher(lang) {
      return function (e) {
        e.preventDefault();
        localStorage.setItem('avson-lang', lang);
        location.reload();
      };
    }

    // Desktop: reemplazar contenido del menú dropdown
    document.querySelectorAll('.lang-switch__menu').forEach(function (menu) {
      menu.innerHTML = '';
      others.forEach(function (lang) {
        var a = document.createElement('a');
        a.href = '#';
        a.textContent = lang.toUpperCase();
        a.addEventListener('click', makeSwitcher(lang));
        menu.appendChild(a);
      });
    });

    // Mobile overlay: reemplazar los links de idioma
    document.querySelectorAll('.nav-overlay').forEach(function (overlay) {
      var allLinks = overlay.querySelectorAll('a');
      var langLinks = [];
      allLinks.forEach(function (a) {
        var href = a.getAttribute('href') || '';
        var text = a.textContent.trim().toUpperCase();
        if (a.hasAttribute('hreflang') || /\b(en|de|fr|it)\b/i.test(href) || /^(EN|DE|FR|IT|ES)$/.test(text)) {
          langLinks.push(a);
        }
      });
      // Reemplazar el primero y los siguientes con los idiomas disponibles
      others.forEach(function (lang, idx) {
        var a;
        if (idx < langLinks.length) {
          a = langLinks[idx];
        } else {
          a = document.createElement('a');
          a.style.fontSize = '15px';
          if (langLinks.length > 0) {
            langLinks[0].parentNode.appendChild(a);
          }
        }
        a.href = '#';
        a.textContent = lang.toUpperCase();
        a.style.fontSize = '15px';
        a.removeAttribute('hreflang');
        a.addEventListener('click', makeSwitcher(lang));
      });
      // Eliminar links sobrantes
      for (var i = others.length; i < langLinks.length; i++) {
        langLinks[i].remove();
      }
    });
  }
}());
