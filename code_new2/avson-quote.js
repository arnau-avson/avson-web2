/* ════════════════════════════════════════════════════════════════════════
   AVSON GRC · PRESUPUESTO ORIENTATIVO (cliente)
   ────────────────────────────────────────────────────────────────────────
   El cálculo se realiza en el backend (/api/quote).
   Este fichero solo recoge el formulario, lo envía y muestra
   la confirmación de que el presupuesto se enviará por email.
   ════════════════════════════════════════════════════════════════════════ */

/* ──────────────────────────────────────────────────────────────────────────
   PRESENTACIÓN del resultado dentro del contenedor #quoteResult
   ────────────────────────────────────────────────────────────────────────── */
function avsonRenderQuote(result, el) {
  if (result.routeToSales) {
    el.innerHTML =
      '<div style="background:#fff;border-radius:12px;padding:28px">' +
        '<p style="font-family:\'Syne\',serif;font-size:24px;color:#1f2023;margin:0 0 10px">Tu caso lo prepara un consultor.</p>' +
        '<p style="font-family:Inter,sans-serif;font-size:14px;color:#3D4A5C;line-height:1.6;margin:0 0 18px">' + (result.reason || '') + ' Te enviamos una propuesta a medida en 24h.</p>' +
        '<a href="contacto.html" class="v3-btn v3-btn--gold" style="justify-content:center">Hablar con un experto &rarr;</a>' +
      '</div>';
    el.style.display = "block";
    return;
  }

  el.innerHTML =
    '<div style="background:#fff;border-radius:12px;padding:28px;text-align:center">' +
      '<p style="font-family:Inter,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#16a34a;margin:0 0 12px">Presupuesto en camino</p>' +
      '<p style="font-family:\'Syne\',serif;font-size:28px;font-weight:600;color:#1f2023;margin:0 0 16px;line-height:1.2">Te lo enviamos<br>por email.</p>' +
      '<p style="font-family:Inter,sans-serif;font-size:14px;color:#3D4A5C;line-height:1.7;margin:0 0 24px">' +
        'Recibirás en menos de 24h un presupuesto orientativo y no vinculante, ' +
        'pendiente de validación con oferta formal y revisión del alcance.' +
      '</p>' +
      '<a href="contacto.html" class="v3-btn v3-btn--gold" style="justify-content:center;width:100%">Hablar con un experto &rarr;</a>' +
    '</div>';
  el.style.display = "block";
}

/* ──────────────────────────────────────────────────────────────────────────
   SUBMIT: recoge formulario → envía a /api/quote → muestra confirmación
   ────────────────────────────────────────────────────────────────────────── */
function avsonQuoteSubmit(event) {
  event.preventDefault();
  const form = event.target;

  const fd = new FormData(form);
  const norms = fd.getAll("norma");
  const email = fd.get("email") || "";

  // Validación cliente (UX): email corporativo
  if (typeof avsonIsCorporateEmail !== "function" || !avsonIsCorporateEmail(email)) {
    avsonShowFieldError(form, "Para darte el presupuesto necesitamos tu email de empresa (no @gmail, @hotmail…).");
    return false;
  }
  if (!norms.length) {
    avsonShowFieldError(form, "Selecciona al menos una norma.");
    return false;
  }

  const payload = {
    nombre: fd.get("nombre"),
    email: email,
    telefono: fd.get("telefono") || "",
    norms: norms,
    ensCategoria: fd.get("ensCategoria") || "media",
    locations: fd.get("ubicaciones") || "1",
    infra: fd.get("infra") || "cloud",
    migra: fd.get("migra") === "si",
    express: fd.get("express") === "si",
    page: location.pathname
  };

  // Ocultar formulario y mostrar loading
  form.style.display = "none";
  const el = document.getElementById("quoteResult");
  if (el) {
    el.innerHTML = '<div style="background:#fff;border-radius:12px;padding:28px;text-align:center"><p style="font-family:Inter,sans-serif;font-size:14px;color:#3D4A5C">Procesando tu presupuesto…</p></div>';
    el.style.display = "block";
  }

  const endpoint = (window.AVSON_CONFIG && window.AVSON_CONFIG.LEAD_ENDPOINT)
    ? window.AVSON_CONFIG.LEAD_ENDPOINT.replace('/lead', '/quote')
    : '/api/quote';

  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(function (res) { return res.json(); })
    .then(function (result) {
      if (el) avsonRenderQuote(result, el);
      if (typeof avsonTrack === "function") avsonTrack("quote_generated", { sales: result.routeToSales });
    })
    .catch(function (err) {
      console.error("[Avson] Error enviando presupuesto:", err);
      if (el) {
        el.innerHTML = '<div style="background:#fff;border-radius:12px;padding:28px;text-align:center"><p style="font-family:Inter,sans-serif;font-size:14px;color:#e85838">Error al procesar. Inténtalo de nuevo o contacta con nosotros.</p><a href="contacto.html" class="v3-btn v3-btn--gold" style="justify-content:center;width:100%;margin-top:16px">Contactar &rarr;</a></div>';
      }
    });

  return false;
}
