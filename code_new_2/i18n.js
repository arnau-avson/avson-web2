// AVSON i18n — carga textos desde palabras.json
(function () {
  // Detectar idioma desde la URL: /en/webinars.html → "en", /webinars.html → "es"
  var pathParts = window.location.pathname.split('/').filter(Boolean);
  var LANG = (pathParts.length > 1 && pathParts[0].length === 2) ? pathParts[0] : 'es';

  // Detectar página desde el filename: webinars.html → "webinars"
  var lastPart = pathParts[pathParts.length - 1] || 'index';
  var PAGE = lastPart.replace(/\.html$/, '');

  // Ruta al JSON (relativa a la raíz)
  var jsonPath = LANG === 'es' ? './assets/palabras.json' : '/' + LANG + '/assets/palabras.json';

  fetch(jsonPath)
    .then(function (res) {
      if (!res.ok) throw new Error('HTTP ' + res.status);
      return res.json();
    })
    .then(function (data) {
      var langData = data[LANG];
      if (!langData || !langData[PAGE]) {
        console.warn('[i18n] No se encontró data["' + LANG + '"]["' + PAGE + '"]');
        return;
      }
      var t = langData[PAGE];
      applyTranslations(t);
      document.dispatchEvent(new Event('i18n:ready'));
    })
    .catch(function (err) {
      console.error('[i18n] Error cargando traducciones:', err);
    });

  function resolve(obj, key) {
    // Resuelve claves con punto: "hero.title" → obj["hero.title"] o obj.hero.title
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

    // 5. Listas dinámicas (upcoming.items, recordings.items, faq.items)
    document.querySelectorAll('[data-i18n-list]').forEach(function (container) {
      var listKey = container.getAttribute('data-i18n-list');
      var templateId = container.getAttribute('data-i18n-template');
      var items = resolve(t, listKey);
      var template = document.getElementById(templateId);
      if (!items || !Array.isArray(items) || !template) return;

      container.innerHTML = '';
      items.forEach(function (item, idx) {
        var html = template.innerHTML;
        // Reemplaza {{campo}} por el valor del item
        html = html.replace(/\{\{(\w+)\}\}/g, function (_, field) {
          return item[field] !== undefined ? item[field] : '';
        });
        // Reemplaza {{$index}} por el índice
        html = html.replace(/\{\{\$index\}\}/g, String(idx));
        container.insertAdjacentHTML('beforeend', html);
      });
    });
  }
}());
