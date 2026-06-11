# Auditoría CRO · SEO · Google Ads — Avson web 2.0 (10/06/2026)

Tres auditorías de nivel experto + implementación inmediata de los hallazgos de mayor impacto.

## 1. CRO (conversión) — aplicado

La web ya estaba razonablemente limpia tras la v2.0; se eliminó la fricción restante. Un solo CTA primario por sección en todas las páginas de dinero. El sticky bar superior ahora diferencia canales: llama (tel:) arriba, deja datos (formulario) en el cuerpo — dos rutas, cero competencia. El banner ENS Express se movió a posición 2 en ens.html (la oferta premium se ve sin scroll) y se eliminaron sus duplicados. La checklist "¿necesitas ENS?" pasó de 6 items redundantes a 3 + autodiagnóstico. Las categorías ENS se recortaron a ~20 palabras por card. Microcopy de confianza ("Gratuito · Sin compromiso · Confidencial") bajo todos los botones de envío. El formulario de presupuesto de packs agrupa normas Principales/Otras. Botón flotante nuevo "Personas, no IA" en todo el sitio: despliega tarjeta ("tu consulta la lee un especialista y te contesta en cuanto llegue a la oficina") y lleva al formulario de la página.

Pendiente vuestro (no es código): vídeo de 90s de Pablo en home y ens.html (palanca nº1 que falta), live chat humano si queréis reforzar el mensaje "no IA", A/B del H1 cuando haya tráfico.

## 2. SEO — aplicado

sitemap.xml regenerado (52 URLs todas válidas, sin pt/, lastmod actualizado). robots.txt corregido (praesys y main.js ya no bloqueados; PPC bloqueadas). Cifras unificadas en todo el sitio: 355+ empresas · 100% tasa de certificación (antes convivían 400+, 98%, 87). Meta descriptions únicas por ciudad con referencia local (AGE, Generalitat, GVA, Junta, Gobierno Vasco). Titles anti-canibalización en ens-basico/medio/alto y consultoria-ens-espana. og:image real de marca (assets/og-avson.jpg, 1200×630) en todo el sitio — cero placeholders. hreflang recíproco completo es/en/de/fr/it con x-default. 19 titles del blog recortados a <60 caracteres. Claims sin fuente eliminados ("Nº1 en España", "el más rápido del sector").

Pendiente vuestro: dar de alta el sitio en Google Search Console y enviar el sitemap; el schema de reviews (4.9/355) solo debe quedarse si corresponde a reseñas reales; valorar traducir más páginas antes de invertir en SEO internacional.

## 3. Landing ENS Express para Google Ads — aplicado

Message match exacto: H1 "Certificado ENS en 30 días." (= el anuncio), title coherente. Bloque de Google Ads (AW) preparado y comentado en ambas landings, listo para pegar el conversion_id. El formulario ya empuja eventos a dataLayer (ppc_express_lead / ppc_lead) y gracias.html es la página de conversión. Móvil (70% del tráfico de Ads): botón fijo inferior "Dejar mis datos →" con scroll al formulario, campos de 52px. Claims seguros para políticas de Ads: "100% de las empresas que certificamos superaron la auditoría" (verificable), garantía "de devolución por escrito", sin "85% pierde licitaciones" sin fuente. Cero fugas: solo privacidad (RGPD), teléfono y gracias.html.

### Para encender la campaña (en este orden)
1. Pegar LEAD_ENDPOINT en avson-leads.js — sin esto los leads no llegan a ningún sitio.
2. Crear la campaña en Google Ads → copiar el AW-XXXXX en los bloques comentados de ens-express-ppc.html, ens-ppc.html, index.html y gracias.html (conversión = page_view de gracias.html o evento ppc_express_lead).
3. Sustituir CLARITY_ID por el real.
4. Probar una conversión completa: formulario → gracias.html → evento visible en Ads.
5. Apuntar el anuncio a https://avson.eu/ens-express-ppc.html (Express/urgencia) y https://avson.eu/ens-ppc.html (genérico "certificado ENS").
