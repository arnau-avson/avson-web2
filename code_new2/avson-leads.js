/* ════════════════════════════════════════════════════════════════════════
   AVSON GRC · GESTIÓN DE LEADS — módulo compartido
   ────────────────────────────────────────────────────────────────────────
   ▸ PUNTO ÚNICO DE CONFIGURACIÓN DEL BACKEND.
     Hoy los formularios NO envían a ningún sitio: solo registran el evento y
     redirigen a gracias.html. Para activar el envío real de leads, rellena
     LEAD_ENDPOINT con la URL de tu servicio (Formspree, Web3Forms, un webhook
     de Zapier/Make, o tu propio endpoint de CRM). Nada más que tocar.

   ▸ Mientras LEAD_ENDPOINT esté vacío, la web funciona igual que ahora
     (modo validación privada): valida, registra el evento y redirige.
   ════════════════════════════════════════════════════════════════════════ */

window.AVSON_CONFIG = {
  // ⬇⬇⬇  PEGA AQUÍ LA URL DE TU ENDPOINT CUANDO LO TENGAS  ⬇⬇⬇
  LEAD_ENDPOINT: "/api/lead",
  // ⬆⬆⬆  ───────────────────────────────────────────────  ⬆⬆⬆

  // Si tu endpoint espera un método/headers concretos, ajústalos aquí:
  ENDPOINT_METHOD: "POST",
  ENDPOINT_HEADERS: { "Content-Type": "application/json", "Accept": "application/json" },

  // Página de agradecimiento a la que se redirige tras un envío correcto.
  THANK_YOU_PAGE: "gracias.html",

  // Teléfono de contacto (se reutiliza en mensajes).
  PHONE: "+34648414863",

  // Dominios de correo gratuito que NO se consideran "email de empresa".
  // Se usa para el flujo de "presupuesto inmediato" (solo con email corporativo).
  FREE_EMAIL_DOMAINS: [
    "gmail.com","googlemail.com","hotmail.com","hotmail.es","outlook.com","outlook.es",
    "live.com","live.es","msn.com","yahoo.com","yahoo.es","ymail.com","icloud.com",
    "me.com","mac.com","aol.com","protonmail.com","proton.me","gmx.com","gmx.es",
    "zoho.com","mail.com","yandex.com","terra.es","telefonica.net"
  ]
};

/* ──────────────────────────────────────────────────────────────────────────
   VALIDACIÓN DE EMAIL
   ────────────────────────────────────────────────────────────────────────── */

// ¿Es un email con formato válido?
function avsonIsValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test((email || "").trim());
}

// ¿Es un email CORPORATIVO? (formato válido + dominio que no es de correo gratuito)
// Se usa para gatear el "presupuesto inmediato": solo damos cifra a empresas que
// validan con su correo de empresa.
function avsonIsCorporateEmail(email) {
  email = (email || "").trim().toLowerCase();
  if (!avsonIsValidEmail(email)) return false;
  const domain = email.split("@")[1];
  if (!domain) return false;
  return !window.AVSON_CONFIG.FREE_EMAIL_DOMAINS.includes(domain);
}

/* ──────────────────────────────────────────────────────────────────────────
   ENVÍO CENTRALIZADO DE LEADS
   ────────────────────────────────────────────────────────────────────────────
   Uso en cualquier formulario:
       <form onsubmit="avsonSubmitLead(event, { source: 'hero' })"> ... </form>
   Los <input> deben tener name="nombre", name="email" (y opcionalmente más).
   ────────────────────────────────────────────────────────────────────────── */

async function avsonSubmitLead(event, opts) {
  if (event && event.preventDefault) event.preventDefault();
  opts = opts || {};
  const form = event && event.target ? event.target : null;
  if (!form) return false;

  // 1) Recoge todos los campos del formulario.
  const data = {};
  new FormData(form).forEach((v, k) => { data[k] = v; });
  data.source = opts.source || data.source || "web";
  data.page = window.location.pathname;
  data.ts = new Date().toISOString();

  // 2) Validación: campos required (incluido checkbox RGPD).
  const missingRequired = form.querySelectorAll('input[required], select[required], textarea[required]');
  for (const field of missingRequired) {
    if (field.type === 'checkbox' && !field.checked) {
      avsonShowFieldError(form, "Debes aceptar la política de privacidad.");
      return false;
    }
    if (field.type !== 'checkbox' && !field.value.trim()) {
      avsonShowFieldError(form, "Completa todos los campos obligatorios.");
      return false;
    }
  }
  if (!data.email || !avsonIsValidEmail(data.email)) {
    avsonShowFieldError(form, "Introduce un email válido.");
    return false;
  }
  // Si el formulario exige email corporativo (data-corp="1"), lo comprobamos.
  if (form.dataset.corp === "1" && !avsonIsCorporateEmail(data.email)) {
    avsonShowFieldError(form, "Para darte el presupuesto al instante necesitamos tu email de empresa (no @gmail, @hotmail…).");
    return false;
  }

  // 3) Feedback inmediato en el botón.
  const btn = form.querySelector('button[type="submit"], .btn-cta, .v3-btn');
  const btnText = btn ? btn.innerHTML : "";
  if (btn) { btn.disabled = true; btn.dataset.orig = btnText; btn.innerHTML = "Enviando…"; }

  // 4) Tracking (Clarity + dataLayer), pase lo que pase con el envío.
  avsonTrack(opts.event || "lead_submit", { source: data.source });

  // 5) Envío real SOLO si hay endpoint configurado. Si no, modo validación.
  const endpoint = window.AVSON_CONFIG.LEAD_ENDPOINT;
  try {
    if (endpoint) {
      const res = await fetch(endpoint, {
        method: window.AVSON_CONFIG.ENDPOINT_METHOD,
        headers: window.AVSON_CONFIG.ENDPOINT_HEADERS,
        body: JSON.stringify(data)
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
    } else {
      // ── MODO VALIDACIÓN PRIVADA: sin endpoint, no se envía nada. ──
      console.info("[Avson] LEAD_ENDPOINT vacío — lead no enviado (modo validación). Datos:", data);
    }
  } catch (err) {
    // No bloqueamos al usuario: registramos el fallo y seguimos al gracias.
    console.error("[Avson] Error enviando el lead:", err);
    avsonTrack("lead_submit_error", { message: String(err && err.message || err) });
  }

  // 6) Redirige a la página de gracias con el nombre para personalizar.
  const tParam = data.nombre ? "?nombre=" + encodeURIComponent(data.nombre) + "&source=" + encodeURIComponent(data.source)
                             : "?source=" + encodeURIComponent(data.source);
  window.location.href = window.AVSON_CONFIG.THANK_YOU_PAGE + tParam;
  return false;
}

/* ──────────────────────────────────────────────────────────────────────────
   FLUJO "PRESUPUESTO INMEDIATO" gateado por email corporativo
   ────────────────────────────────────────────────────────────────────────────
   Cómo funciona (front listo; el cálculo real lo hará tu backend):
     1. El usuario rellena nombre + email de empresa (+ nivel/alcance si lo pides).
     2. avsonSubmitLead valida que el email sea corporativo (data-corp="1").
     3. El lead se envía a tu endpoint, que debe devolver/calcular la horquilla
        y enviarla por email — o redirigimos a gracias.html con la promesa de
        "presupuesto en tu correo en minutos".
   El cálculo de la cifra NO se hace en el navegador a propósito: así no se
   expone tu lógica de precios ni se puede manipular desde el cliente.
   ────────────────────────────────────────────────────────────────────────── */

/* ──────────────────────────────────────────────────────────────────────────
   UTILIDADES
   ────────────────────────────────────────────────────────────────────────── */

function avsonShowFieldError(form, msg) {
  let el = form.querySelector(".avson-form-error");
  if (!el) {
    el = document.createElement("p");
    el.className = "avson-form-error";
    el.setAttribute("role", "alert");
    el.style.cssText = "color:#d04428;font-family:'DM Sans',sans-serif;font-size:13px;line-height:1.4;margin-top:8px";
    form.appendChild(el);
  }
  el.textContent = msg;
  // Restaura el botón si estaba en "Enviando…".
  const btn = form.querySelector('button[type="submit"], .btn-cta, .v3-btn');
  if (btn && btn.dataset.orig) { btn.disabled = false; btn.innerHTML = btn.dataset.orig; }
}

function avsonTrack(event, props) {
  props = props || {};
  if (window.dataLayer) window.dataLayer.push(Object.assign({ event }, props));
  if (window.clarity) { try { window.clarity("event", event); } catch (e) {} }
}

/* ──────────────────────────────────────────────────────────────────────────
   BOTÓN FLOTANTE "Habla con un experto" — fijo en el lado derecho, siempre
   visible. Se inyecta en todas las páginas que cargan este módulo.
   No aparece en contacto/gracias (destino/post-conversión) ni en las PPC
   (landings sin distracciones).
   ────────────────────────────────────────────────────────────────────────── */
(function () {
  /* v2.0 — DESACTIVADO por observación de Santiago (06/2026): CTA duplicado.
     El navbar y la sticky bar ya llevan "Habla con un experto"; la pestaña
     lateral saturaba. Para reactivarla, eliminar el return de la línea
     siguiente. */
  return;
  var p = (location.pathname || "").toLowerCase();
  if (/contacto|gracias|-ppc/.test(p)) return;

  function isMobile() { return window.matchMedia("(max-width: 768px)").matches; }

  function mount() {
    if (document.getElementById("avsonFloatCta")) return;
    // Si la página ya tiene su propio CTA flotante, no duplicamos.
    if (document.querySelector(".floating-cta")) return;
    // Si el usuario ya lo cerró en esta sesión, no lo mostramos.
    try { if (sessionStorage.getItem("avson_float_closed") === "1") return; } catch (e) {}

    // Contenedor (posiciona el botón + la X de cerrar).
    var wrap = document.createElement("div");
    wrap.id = "avsonFloatCta";
    wrap.style.cssText = [
      "position:fixed", "right:0", "top:50%", "transform:translateY(-50%)",
      "z-index:450", "display:flex", "flex-direction:column", "align-items:flex-end", "gap:4px"
    ].join(";");

    // Botón de cerrar (X) — solo en móvil.
    if (isMobile()) {
      var x = document.createElement("button");
      x.setAttribute("aria-label", "Cerrar");
      x.innerHTML = "&times;";
      x.style.cssText = [
        "width:24px", "height:24px", "border:none", "border-radius:50%",
        "background:#1f2023", "color:#fff", "font-size:16px", "line-height:1",
        "cursor:pointer", "box-shadow:-2px 0 10px rgba(0,0,0,0.25)", "padding:0"
      ].join(";");
      x.addEventListener("click", function (ev) {
        ev.preventDefault();
        wrap.remove();
        try { sessionStorage.setItem("avson_float_closed", "1"); } catch (e) {}
        if (typeof avsonTrack === "function") avsonTrack("float_cta_dismissed", {});
      });
      wrap.appendChild(x);
    }

    // Pestaña vertical "Habla con un experto".
    var a = document.createElement("a");
    a.href = "contacto.html";
    a.textContent = "Habla con un experto";
    a.setAttribute("aria-label", "Habla con un experto");
    a.style.cssText = [
      "background:#e85838", "color:#1f2023", "text-decoration:none",
      "font-family:Inter,system-ui,sans-serif", "font-size:13px", "font-weight:700",
      "letter-spacing:0.03em", "padding:18px 11px", "border-radius:10px 0 0 10px",
      "writing-mode:vertical-rl", "box-shadow:-3px 0 16px rgba(0,0,0,0.20)",
      "cursor:pointer", "transition:background .15s,padding .15s"
    ].join(";");
    a.onmouseover = function () { a.style.background = "#d04428"; a.style.paddingRight = "14px"; };
    a.onmouseout  = function () { a.style.background = "#e85838"; a.style.paddingRight = "11px"; };
    a.addEventListener("click", function () { if (typeof avsonTrack === "function") avsonTrack("float_cta_click", {}); });
    wrap.appendChild(a);

    document.body.appendChild(wrap);
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();

/* ──────────────────────────────────────────────────────────────────────────
   MENÚ: marca en rojo la entrada de la página actual.
   Mapea subpáginas a su entrada de menú (ej. ens-basico → ENS, dora → Otras).
   ────────────────────────────────────────────────────────────────────────── */
(function () {
  function markActive() {
    var path = (location.pathname.split("/").pop() || "index.html").toLowerCase();
    var map = path;
    if (/^ens-express/.test(path)) map = "ens-express.html";
    else if (/^(ens(\.|-)|consultoria-ens|precio\.)/.test(path)) map = "ens.html";
    else if (path === "iso22301.html") map = "iso22301.html";
    else if (path === "iso27001.html") map = "iso27001.html";
    else if (/^(otras|dora|nis2|tisax)\.html/.test(path)) map = "otras.html";
    document.querySelectorAll(".v3-nav__links a, .nav__links a").forEach(function (a) {
      var href = (a.getAttribute("href") || "").toLowerCase();
      if (href === map) a.classList.add("nav-active");
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", markActive);
  else markActive();
})();


/* ──────────────────────────────────────────────────────────────────────────
   CARRUSEL DE OPINIONES (.tcar) — autoavance + flechas + puntos
   ────────────────────────────────────────────────────────────────────────── */
(function () {
  function initCar(c) {
    var track = c.querySelector(".tcar__track");
    var slides = c.querySelectorAll(".tcar__slide");
    var dots = c.querySelectorAll(".tcar__dot");
    var i = 0, n = slides.length, timer;
    function go(k){ i=(k+n)%n; if(track) track.style.transform="translateX("+(-i*100)+"%)"; dots.forEach(function(d,j){d.classList.toggle("active",j===i);}); }
    function reset(){ clearInterval(timer); timer=setInterval(function(){go(i+1);},6000); }
    c.querySelectorAll(".tcar__arrow--prev").forEach(function(b){b.addEventListener("click",function(){go(i-1);reset();});});
    c.querySelectorAll(".tcar__arrow--next").forEach(function(b){b.addEventListener("click",function(){go(i+1);reset();});});
    dots.forEach(function(d,j){d.addEventListener("click",function(){go(j);reset();});});
    go(0); reset();
  }
  function init(){ document.querySelectorAll(".tcar").forEach(initCar); }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();

/* ──────────────────────────────────────────────────────────────────────────
   OVERRIDES: submitBlogPopup y submitLeadGate
   ──────────────────────────────────────────────────────────────────────────
   Estas funciones se definen inline en cada HTML. Las sobrescribimos aquí
   después de DOMContentLoaded para que envíen el lead al backend.
   ────────────────────────────────────────────────────────────────────────── */
(function () {
  function override() {
    // ── Blog popup (19 blog pages) ──
    if (document.getElementById('blogPopup')) {
      window.submitBlogPopup = function (e) {
        if (e && e.preventDefault) e.preventDefault();
        var email = (document.getElementById('popupEmail') || {}).value;
        var empresa = (document.getElementById('popupEmpresa') || {}).value;
        if (!email || !empresa) return;
        email = email.trim();
        empresa = empresa.trim();
        if (!avsonIsValidEmail(email)) return;

        var data = {
          email: email,
          empresa: empresa,
          source: 'blog_popup',
          page: window.location.pathname,
          ts: new Date().toISOString()
        };

        avsonTrack('lead_generated', { source: 'blog_popup' });

        var endpoint = window.AVSON_CONFIG.LEAD_ENDPOINT;
        if (endpoint) {
          fetch(endpoint, {
            method: window.AVSON_CONFIG.ENDPOINT_METHOD,
            headers: window.AVSON_CONFIG.ENDPOINT_HEADERS,
            body: JSON.stringify(data)
          }).catch(function () {});
        }

        document.getElementById('blogPopup').style.display = 'none';
        // Redirect relativo (funciona desde /blog/)
        window.location.href = (window.location.pathname.indexOf('/blog/') !== -1 ? '../' : '') + 'contacto.html';
      };
    }

    // ── Diagnostic lead gate (diagnostico.html) ──
    if (document.getElementById('leadGateModal')) {
      var originalSubmitLeadGate = window.submitLeadGate;
      window.submitLeadGate = function (e) {
        if (e && e.preventDefault) e.preventDefault();
        var nombre = (document.getElementById('gateNombre') || {}).value;
        var email = (document.getElementById('gateEmail') || {}).value;
        var empresa = (document.getElementById('gateEmpresa') || {}).value;
        if (!email) return;

        var data = {
          nombre: (nombre || '').trim(),
          email: email.trim(),
          empresa: (empresa || '').trim(),
          source: 'diagnostico',
          page: window.location.pathname,
          ts: new Date().toISOString()
        };

        avsonTrack('lead_generated', { source: 'diagnostico' });

        var endpoint = window.AVSON_CONFIG.LEAD_ENDPOINT;
        if (endpoint) {
          fetch(endpoint, {
            method: window.AVSON_CONFIG.ENDPOINT_METHOD,
            headers: window.AVSON_CONFIG.ENDPOINT_HEADERS,
            body: JSON.stringify(data)
          }).catch(function () {});
        }

        // Continuar con el flujo original del diagnóstico (mostrar resultado)
        if (typeof originalSubmitLeadGate === 'function') {
          originalSubmitLeadGate(e);
        } else {
          // Fallback: cerrar modal y mostrar resultado
          document.getElementById('leadGateModal').style.display = 'none';
        }
      };
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', override);
  } else {
    override();
  }
})();

/* ──────────────────────────────────────────────────────────────────────────
   NEWSLETTER FOOTER — captura el clic del botón → y envía el email
   ────────────────────────────────────────────────────────────────────────── */
(function () {
  function initNewsletter() {
    document.querySelectorAll('.footer__newsletter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var form = btn.closest('.footer__newsletter-form');
        if (!form) return;
        var input = form.querySelector('.footer__newsletter-input');
        if (!input) return;
        var email = (input.value || '').trim();

        if (!email || !avsonIsValidEmail(email)) {
          input.style.borderColor = '#d04428';
          input.setAttribute('placeholder', 'Introduce un email válido');
          return;
        }
        input.style.borderColor = '';

        btn.disabled = true;
        btn.textContent = '…';

        var data = {
          email: email,
          source: 'newsletter_footer',
          page: window.location.pathname,
          ts: new Date().toISOString()
        };

        avsonTrack('newsletter_subscribe', { source: 'footer' });

        var endpoint = window.AVSON_CONFIG.LEAD_ENDPOINT;
        if (endpoint) {
          fetch(endpoint, {
            method: window.AVSON_CONFIG.ENDPOINT_METHOD,
            headers: window.AVSON_CONFIG.ENDPOINT_HEADERS,
            body: JSON.stringify(data)
          }).then(function () {
            input.value = '';
            input.style.display = 'none';
            btn.style.display = 'none';
            var msg = document.createElement('p');
            msg.style.cssText = 'color:#16a34a;font-family:var(--font-sans),sans-serif;font-size:13px;margin:0';
            msg.textContent = '✓ Suscrito correctamente';
            form.appendChild(msg);
          }).catch(function () {
            btn.disabled = false;
            btn.textContent = '→';
            input.style.borderColor = '#d04428';
          });
        } else {
          console.info('[Avson] LEAD_ENDPOINT vacío — newsletter no enviado.');
          btn.disabled = false;
          btn.textContent = '→';
        }
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNewsletter);
  } else {
    initNewsletter();
  }
})();
