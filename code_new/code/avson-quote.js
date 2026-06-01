/* ════════════════════════════════════════════════════════════════════════
   AVSON GRC · MOTOR DE PRESUPUESTO ORIENTATIVO
   ────────────────────────────────────────────────────────────────────────
   ⚠️  INTERNO — NO PUBLICAR LA LÓGICA TAL CUAL EN PRODUCCIÓN.
       Este cálculo corre en el navegador, así que cualquiera puede leer los
       precios y los descuentos en el código fuente. Para la fase de
       validación privada es aceptable. ANTES DE HACER LA WEB PÚBLICA hay que
       mover `avsonComputeQuote()` al backend (detrás de LEAD_ENDPOINT) y que
       el servidor devuelva solo la cifra final. La estructura está pensada
       para que ese traslado sea copiar/pegar la función.

   Se ejecuta DESPUÉS de validar el formulario con email corporativo.
   Todas las cifras salen con el asterisco de "pendiente de validación".
   ════════════════════════════════════════════════════════════════════════ */

/* ╔══════════════════════════════════════════════════════════════════════╗
   ║  ⚠️  ATENCIÓN DESARROLLADOR — REGLA DE NEGOCIO INNEGOCIABLE            ║
   ║                                                                        ║
   ║  EL PRECIO SOLO SE ENTREGA TRAS VALIDAR UN EMAIL CORPORATIVO.          ║
   ║  Igual que las aseguradoras: nada de cifra hasta que el lead se        ║
   ║  identifica con el correo de su empresa (no @gmail, @hotmail, etc.).   ║
   ║                                                                        ║
   ║  • El gate vive en avsonQuoteSubmit() → avsonIsCorporateEmail().       ║
   ║  • Al migrar el cálculo al BACKEND, REPLICA ESTE GATE EN EL SERVIDOR:  ║
   ║    el endpoint NO debe devolver ningún precio si el dominio del email  ║
   ║    es de correo gratuito o no valida. La validación de cliente es solo ║
   ║    UX; la de verdad tiene que ser servidor.                            ║
   ║  • No expongas avsonComputeQuote() en un endpoint abierto sin ese      ║
   ║    control: regalarías tu tabla de precios a la competencia.           ║
   ╚══════════════════════════════════════════════════════════════════════╝ */

window.AVSON_PRICING = {
  // Precio base por tamaño. S = 1 ubicación · M = 2 ubicaciones.
  // (3+ ubicaciones = B → va a ventas, no se autocalcula.)
  norms: {
    ens:      { label: "ENS (Básica/Media)", S: 8000,  M: 10000 },
    iso9001:  { label: "ISO 9001",           S: 5000,  M: 7500  },
    iso14001: { label: "ISO 14001",          S: 7000,  M: 9000  },
    iso22301: { label: "ISO 22301",          S: 8000,  M: 10000 },
    iso27001: { label: "ISO 27001",          S: 8500,  M: 10500 },
    iso42001: { label: "ISO 42001",          S: 8500,  M: 10500 },
    iso50001: { label: "ISO 50001",          S: 8000,  M: 10000 },
    dora:     { label: "DORA",               S: 8500,  M: 10500 }
  },

  ensAltaSurcharge: 0.20,            // ENS categoría Alta: +20% sobre la base
  expressSurcharge: 0.30,           // Implementación + certificación <60 días: +30%
  multiNormFactors: [1.0, 0.5, 0.4],// 1ª norma 100% · 2ª 50% · 3ª y siguientes 40%

  incentives: {
    reserva48h: 0.05,               // pedido/reserva en <48h (o gancho "últimas plazas del mes")
    pago48h:    0.15                // pago en <48h
  },
  stackIncentives: false,           // ¿reserva + pago se acumulan? (PENDIENTE validar — por defecto no)

  // A futuro: on-premise sin migración a cloud = más trabajo → tratar S como M.
  // Por ahora desactivado (lo dejaste como decisión futura).
  bumpOnPremToM: false,

  disclaimer: "Precio orientativo, pendiente de validación con oferta formal y revisión del alcance."
};

/* ──────────────────────────────────────────────────────────────────────────
   CÁLCULO  (esta es la función que debe acabar en el backend)
   input = {
     norms: ["ens","iso27001", ...],      // claves de AVSON_PRICING.norms
     ensCategoria: "basica"|"media"|"alta",
     locations: 1|2|3,                     // 3 = "3 o más"
     infra: "cloud"|"onprem",
     migra: true|false,                    // si onprem, ¿planean migrar a cloud?
     express: true|false                   // <60 días
   }
   ────────────────────────────────────────────────────────────────────────── */
function avsonComputeQuote(input) {
  const P = window.AVSON_PRICING;
  const out = { routeToSales: false, reason: "", size: "", lines: [], subtotal: 0,
                expressApplied: false, base: 0, incentives: {}, notes: [] };

  // 1) Tamaño por nº de ubicaciones.
  const loc = parseInt(input.locations, 10) || 1;
  out.size = loc === 1 ? "S" : loc === 2 ? "M" : "B";
  if (out.size === "B") {
    out.routeToSales = true;
    out.reason = "3 o más ubicaciones — lo valora el equipo de ventas con un alcance a medida.";
    return out;
  }

  // 2) Tamaño efectivo (regla futura on-premise, desactivada por defecto).
  let effSize = out.size;
  if (P.bumpOnPremToM && input.infra === "onprem" && !input.migra && effSize === "S") {
    effSize = "M";
    out.notes.push("Infraestructura on-premise sin migración: tratado como M.");
  }

  // 3) Precio base de cada norma seleccionada.
  if (!input.norms || !input.norms.length) {
    out.routeToSales = true;
    out.reason = "No se ha seleccionado ninguna norma.";
    return out;
  }
  const lines = [];
  for (const key of input.norms) {
    const n = P.norms[key];
    if (!n) continue;
    let base = n[effSize];
    if (base == null) {                       // ISO 14001 u otra sin tarifa
      out.routeToSales = true;
      out.reason = "Incluye una norma sin tarifa publicada (" + n.label + ") — lo cierra ventas.";
      return out;
    }
    if (key === "ens" && (input.ensCategoria || "").toLowerCase() === "alta") {
      base = Math.round(base * (1 + P.ensAltaSurcharge));
      out.notes.push("ENS categoría Alta: +" + (P.ensAltaSurcharge * 100) + "%.");
    }
    lines.push({ key: key, label: n.label, base: base });
  }

  // 4) Descuento multinorma: la más cara al 100%, la 2ª al 50%, resto al 40%.
  lines.sort((a, b) => b.base - a.base);
  lines.forEach((l, i) => {
    l.factor = P.multiNormFactors[Math.min(i, P.multiNormFactors.length - 1)];
    l.price = Math.round(l.base * l.factor);
  });
  out.lines = lines;
  out.subtotal = lines.reduce((s, l) => s + l.price, 0);

  // 5) Express (+30% sobre el subtotal ya con descuentos).
  out.expressApplied = !!input.express;
  out.base = out.expressApplied ? Math.round(out.subtotal * (1 + P.expressSurcharge)) : out.subtotal;

  // 6) Incentivos por rapidez.
  const r = P.incentives.reserva48h, p = P.incentives.pago48h;
  out.incentives = {
    reserva48h: Math.round(out.base * (1 - r)),
    pago48h:    Math.round(out.base * (1 - p)),
    combinado:  P.stackIncentives ? Math.round(out.base * (1 - r) * (1 - p)) : null
  };
  return out;
}

/* ──────────────────────────────────────────────────────────────────────────
   PRESENTACIÓN del resultado dentro del contenedor #quoteResult
   ────────────────────────────────────────────────────────────────────────── */
function avsonRenderQuote(q, el) {
  const fmt = (n) => n.toLocaleString("es-ES") + " €";
  const P = window.AVSON_PRICING;

  if (q.routeToSales) {
    el.innerHTML =
      '<div style="background:#fff;border-radius:12px;padding:28px">' +
        '<p style="font-family:\'Cormorant Garamond\',serif;font-size:24px;color:#1A2744;margin:0 0 10px">Tu caso lo prepara un consultor.</p>' +
        '<p style="font-family:Inter,sans-serif;font-size:14px;color:#3D4A5C;line-height:1.6;margin:0 0 18px">' + q.reason + ' Te enviamos una propuesta a medida en 24h.</p>' +
        '<a href="contacto.html" class="v3-btn v3-btn--gold" style="justify-content:center">Hablar con un experto →</a>' +
      '</div>';
    el.style.display = "block";
    return;
  }

  const rows = q.lines.map(function (l) {
    const pct = Math.round(l.factor * 100);
    const tag = l.factor < 1 ? ' <span style="color:#16a34a;font-weight:600">(−' + (100 - pct) + '%)</span>' : '';
    return '<tr><td style="padding:6px 0;color:#3D4A5C">' + l.label + tag + '</td>' +
           '<td style="padding:6px 0;text-align:right;color:#1A2744;font-weight:600">' + fmt(l.price) + '</td></tr>';
  }).join("");

  const expressRow = q.expressApplied
    ? '<tr><td style="padding:6px 0;color:#3D4A5C">Express (&lt;60 días) <span style="color:#C9A84C;font-weight:600">+' + (P.expressSurcharge * 100) + '%</span></td><td></td></tr>'
    : '';

  el.innerHTML =
    '<div style="background:#fff;border-radius:12px;padding:28px">' +
      '<p style="font-family:Inter,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#C9A84C;margin:0 0 6px">Presupuesto orientativo · Empresa ' + q.size + '</p>' +
      '<table style="width:100%;border-collapse:collapse;font-family:Inter,sans-serif;font-size:14px;margin-bottom:8px">' +
        rows + expressRow +
      '</table>' +
      '<div style="display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid #E5E5E0;padding-top:12px;margin-top:4px">' +
        '<span style="font-family:Inter,sans-serif;font-size:13px;color:#7A8499">Total estimado</span>' +
        '<span style="font-family:\'Cormorant Garamond\',serif;font-size:34px;color:#1A2744;font-weight:600">' + fmt(q.base) + '<span style="color:#C9A84C">*</span></span>' +
      '</div>' +
      '<div style="background:#F7F7F5;border-radius:8px;padding:14px 16px;margin-top:16px">' +
        '<p style="font-family:Inter,sans-serif;font-size:13px;color:#1A2744;margin:0 0 6px;font-weight:600">Y si te decides ya:</p>' +
        '<p style="font-family:Inter,sans-serif;font-size:13px;color:#3D4A5C;margin:0;line-height:1.7">' +
          '⚡ Reservas plaza en 48h → <strong>' + fmt(q.incentives.reserva48h) + '</strong> (−' + (P.incentives.reserva48h * 100) + '%)<br>' +
          '✅ Pago en 48h → <strong style="color:#16a34a">' + fmt(q.incentives.pago48h) + '</strong> (−' + (P.incentives.pago48h * 100) + '%)' +
          (q.incentives.combinado ? '<br>🔥 Ambos → <strong>' + fmt(q.incentives.combinado) + '</strong>' : '') +
        '</p>' +
      '</div>' +
      '<p style="font-family:Inter,sans-serif;font-size:11px;color:#7A8499;line-height:1.5;margin:14px 0 0">* ' + P.disclaimer + '</p>' +
      '<a href="contacto.html" class="v3-btn v3-btn--gold" style="justify-content:center;width:100%;margin-top:16px">Quiero la oferta formal →</a>' +
    '</div>';
  el.style.display = "block";
}

/* ──────────────────────────────────────────────────────────────────────────
   SUBMIT del formulario de presupuesto: valida email corporativo → calcula →
   muestra el resultado → envía el lead (con el presupuesto) al endpoint.
   ────────────────────────────────────────────────────────────────────────── */
function avsonQuoteSubmit(event) {
  event.preventDefault();
  const form = event.target;

  // 1) Recoger inputs.
  const fd = new FormData(form);
  const norms = fd.getAll("norma");                 // checkboxes name="norma"
  const input = {
    norms: norms,
    ensCategoria: fd.get("ensCategoria") || "media",
    locations: fd.get("ubicaciones") || "1",
    infra: fd.get("infra") || "cloud",
    migra: fd.get("migra") === "si",
    express: fd.get("express") === "si"
  };

  // 2) GATE INNEGOCIABLE: el precio solo se da con email corporativo válido.
  //    Falla CERRADO — si la validación no está disponible, NO se muestra precio.
  const email = fd.get("email") || "";
  if (typeof avsonIsCorporateEmail !== "function" || !avsonIsCorporateEmail(email)) {
    avsonShowFieldError(form, "Para darte el presupuesto al instante necesitamos tu email de empresa (no @gmail, @hotmail…).");
    return false;
  }
  if (!norms.length) {
    avsonShowFieldError(form, "Selecciona al menos una norma.");
    return false;
  }

  // 3) Calcular y mostrar.
  const q = avsonComputeQuote(input);
  const el = document.getElementById("quoteResult");
  if (el) avsonRenderQuote(q, el);
  form.style.display = "none";

  // 4) Enviar el lead + el presupuesto al backend (si hay endpoint) y trackear.
  const lead = {
    nombre: fd.get("nombre"), email: email,
    normas: norms.join(","), ubicaciones: input.locations, infra: input.infra,
    migra: input.migra, express: input.express, ens_categoria: input.ensCategoria,
    size: q.size, presupuesto_base: q.base, route_to_sales: q.routeToSales,
    source: "presupuesto_packs", page: location.pathname, ts: new Date().toISOString()
  };
  if (typeof avsonTrack === "function") avsonTrack("quote_generated", { size: q.size, total: q.base, sales: q.routeToSales });
  const endpoint = window.AVSON_CONFIG && window.AVSON_CONFIG.LEAD_ENDPOINT;
  if (endpoint) {
    fetch(endpoint, {
      method: window.AVSON_CONFIG.ENDPOINT_METHOD,
      headers: window.AVSON_CONFIG.ENDPOINT_HEADERS,
      body: JSON.stringify(lead)
    }).catch(function (e) { console.error("[Avson] Error enviando el presupuesto:", e); });
  } else {
    console.info("[Avson] LEAD_ENDPOINT vacío — presupuesto no enviado (modo validación). Lead:", lead);
  }
  return false;
}
