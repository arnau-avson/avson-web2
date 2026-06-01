# Avson GRC — Web 2.0 · Checklist antes de publicar

**Estado:** web optimizada para conversión, lista para **validación privada**.
Antes de pasarla a público, revisa estos tres bloques.

---

## 1. Conectar (técnico) — sin esto, la web no captura nada

| Qué | Dónde | Acción |
|-----|-------|--------|
| **Endpoint de leads** | `avson-leads.js` → `LEAD_ENDPOINT` | **CRÍTICO.** Hoy los formularios validan y redirigen a `gracias.html`, pero **no envían el lead a ningún sitio**. Pega aquí la URL de tu servicio (Formspree, Web3Forms, webhook de Zapier/Make, o tu CRM). Es el **único** punto que hay que tocar: todos los formularios del site ya pasan por ahí. |
| **Microsoft Clarity** | `CLARITY_ID` (todas las páginas) | Sustituir el placeholder por tu ID real de Clarity. |
| **LinkedIn Insight Tag** | `index.html` (comentado) | Añadir `partner_id` y descomentar cuando lo tengas. |
| **Google Ads** | `index.html` (comentado) | Añadir `conversion_id` y descomentar para remarketing/conversiones. |

> **Flujo "presupuesto inmediato"** (sección en `packs.html`): el front ya valida que el email
> sea corporativo (no @gmail/@hotmail…). El **cálculo y envío real de la cifra** lo tiene que hacer
> tu backend/endpoint — a propósito no se calcula en el navegador para no exponer tu lógica de precios.

---

## 1-bis. Motor de presupuesto (`avson-quote.js`) — CRÍTICO antes de publicar

El presupuesto se calcula **en el navegador** tras validar email corporativo. Funciona para la
fase de validación, pero:

- 🔒 **REGLA INNEGOCIABLE (modelo aseguradora): el precio SOLO se entrega tras validar un email
  corporativo.** El gate está en `avsonQuoteSubmit()` y **debe replicarse en el backend** — el
  endpoint no devuelve ninguna cifra si el dominio es de correo gratuito o no valida. La validación
  de cliente es solo UX; la real tiene que ser de servidor. (Hay una llamada de atención destacada
  en la cabecera de `avson-quote.js` y en el comentario del formulario en `packs.html`.)
- ⚠️ **La lógica de precios y descuentos queda visible en el código fuente.** Es justo lo que NO
  querías publicar. **Antes de hacer la web pública, mover `avsonComputeQuote()` al backend** (detrás
  de `LEAD_ENDPOINT`) y que el servidor devuelva solo la cifra. La función está aislada para que el
  traslado sea directo.
- ISO 14001 ya tiene tarifa (S 7.000 € · M 9.000 €). Todas las normas del autocálculo tienen precio.
- **Supuestos que apliqué (configurables en la cabecera de `avson-quote.js`)** — confírmalos:
  - Tamaño: **S = 1 ubicación, M = 2, B = 3 o más → ventas** (tu frase decía "M = 2 o 3" y "3+ = B";
    me quedé con el corte en 3).
  - Descuento multinorma: la norma **más cara al 100%**, 2ª al 50%, 3ª y siguientes al 40%.
  - Express: **+30% sobre el subtotal** ya con descuentos.
  - Incentivos −5% (reserva 48h) y −15% (pago 48h): **no acumulables** por defecto (`stackIncentives`).
  - On-premise sin migración → tratar como M: **desactivado** (lo dejaste como decisión futura;
    flag `bumpOnPremToM`).
- Todas las cifras salen con el asterisco *"pendiente de validación con oferta formal y revisión del
  alcance"*. **Las empresas B y las normas sin tarifa se derivan a ventas, no muestran precio.**

---

## 2. Contenido a confirmar o sustituir (provisional)

Marcado como provisional para esta fase. **Confirmar que refleja datos reales antes de publicar.**

- **Testimonios** (en **todas** las páginas de norma/nivel: home, `ens.html`, `ens-basico/medio/alto`,
  `ens-express*`, `ens-ppc`, `iso27001`, `iso22301`, `dora`, `nis2`, `tisax`, `otras`, `packs`):
  nombres, cargos y citas son **plantillas**. Sustituir por reseñas reales de clientes.
  Los bloques añadidos en esta pasada llevan el comentario `<!-- TESTIMONIOS (PROVISIONALES…) -->`.
  ⚠️ En la UE las reseñas inventadas presentadas como reales están prohibidas (Directiva Omnibus /
  Ley de Competencia Desleal). Publicar solo testimonios reales y con consentimiento del cliente.
- **Cifras**: `355+ empresas`, `4.9/5`, `100% de éxito`, `0 fracasos`, plazas Express
  (`2 plazas este mes`). Confirmar que son ciertas y actuales.
- **Schema de reseñas** en `index.html` (`AggregateRating` 4.9 / 355 + reviews con nombre):
  dejarlo **solo si** corresponde a reseñas reales. Si no, retirarlo — un schema de reviews falso
  arriesga penalización SEO de Google además del riesgo legal.

---

## 3. Recomendaciones de la agencia que NO son código (pendientes de vosotros)

- **Vídeo** (punto 28): un vídeo de 90s de Pablo explicando "cómo es trabajar con Avson" en
  `ens.html` y home. Es la palanca de conversión nº1 que falta.
- **Live chat** (punto 29): Intercom o Tidio (plan gratuito) para captar quien no quiere formulario.
- **A/B test del H1** (punto 13): montar la prueba en VWO u Optimize cuando haya tráfico.
- **Subir la comparativa Estándar vs Express** (punto 17): en `ens-express.html` la tabla está tras
  la sección de elegibilidad; moverla justo bajo el hero refuerza la venta del premium. (Mejora
  estructural recomendada, no aplicada para no alterar el layout sin validación.)
- **Lead-gates** `calculadora-roi.html` y `diagnostico.html`: conservan su propio desbloqueo de
  contenido inline; si quieres que esos leads también lleguen al endpoint, hay que cablearlos aparte.

---

## Convención de jerarquía de CTAs (mantener)

Para que los botones clave atraigan (feedback de Oscar): el dorado es **sólido y sin parpadeo**
por defecto, y **solo el CTA primario** de cada página lleva el parpadeo (`.v3-btn--pulse`, o
`animation:v3-gold-pulse` inline en plantillas con botón propio). **Máximo 1 primario por página**
(la home tiene 2 a propósito: captura del hero + cierre). Si se añaden páginas nuevas, respetar esto:
si todo vuelve a parpadear, se pierde el ancla y baja la conversión.

## Ya implementado en esta pasada

- **Backend de formularios unificado**: módulo `avson-leads.js` con punto único de configuración,
  validación de email (y de email corporativo para el presupuesto), fallback seguro en modo
  validación, y tracking. 11 formularios cableados en 10 páginas.
- **Sección "presupuesto inmediato"** gateada por email corporativo en `packs.html`.
- **Microcopy RGPD** con finalidad en las landings PPC (antes incompleto legalmente).
- **Claim "#1 más rápida" sin fuente** → sustituido por dato concreto ("30 días con ENS Express").
- **Contador "X consultaron hoy"** → determinista por fecha (ya no cambia al refrescar; deja de ser
  un dark pattern detectable). Sustituible por datos reales de Clarity/CRM.

*Verificado ya implementado por trabajo previo: cifras unificadas, CTAs unificados, formulario inline
en hero de ENS, `gracias.html` personalizado, `FAQPage` schema, `font-display:swap`, intro de
conversión y testimonios en ISO 27001.*
