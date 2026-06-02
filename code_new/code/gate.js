// AVSON Preview Gate — injected by nginx, runs synchronously
(function () {
  var PASS = 'Avson1234';
  var KEY  = 'avson-preview-auth';

  if (sessionStorage.getItem(KEY) === '1') return;
  if (document.getElementById('avson-gate')) return;

  var style = document.createElement('style');
  style.textContent =
    '#avson-gate{position:fixed;inset:0;z-index:99999;background:#1A2744;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif}' +
    '#avson-gate__box{background:#fff;border-radius:16px;padding:48px 40px;width:100%;max-width:400px;text-align:center;box-shadow:0 24px 64px rgba(0,0,0,.4)}' +
    '#avson-gate__logo{font-family:"Cormorant Garamond",serif;font-size:2rem;font-weight:600;color:#1A2744;letter-spacing:.05em;margin-bottom:8px}' +
    '#avson-gate__sub{font-size:.85rem;color:#6B7280;margin-bottom:32px}' +
    '#avson-gate__label{display:block;text-align:left;font-size:.8rem;font-weight:600;color:#374151;letter-spacing:.06em;text-transform:uppercase;margin-bottom:8px}' +
    '#avson-gate__input{width:100%;padding:12px 16px;border:2px solid #E5E7EB;border-radius:8px;font-size:1rem;outline:none;margin-bottom:16px;transition:border-color .2s}' +
    '#avson-gate__input:focus{border-color:#1A2744}' +
    '#avson-gate__btn{width:100%;padding:14px;background:#C6A96A;color:#fff;border:none;border-radius:8px;font-size:1rem;font-weight:600;cursor:pointer;transition:background .2s}' +
    '#avson-gate__btn:hover{background:#b5963a}' +
    '#avson-gate__err{color:#EF4444;font-size:.85rem;margin-top:12px;min-height:20px}';
  document.head.appendChild(style);

  var gate = document.createElement('div');
  gate.id = 'avson-gate';
  gate.innerHTML =
    '<div id="avson-gate__box">' +
      '<div id="avson-gate__logo">AVSON</div>' +
      '<p id="avson-gate__sub">Vista previa privada \u2014 Acceso restringido</p>' +
      '<label id="avson-gate__label">Contrase\u00F1a</label>' +
      '<input id="avson-gate__input" type="password" placeholder="Introduce la contrase\u00F1a" autocomplete="current-password"/>' +
      '<button id="avson-gate__btn">Entrar</button>' +
      '<p id="avson-gate__err"></p>' +
    '</div>';

  document.body.appendChild(gate);

  function tryUnlock() {
    var val = document.getElementById('avson-gate__input').value;
    if (val === PASS) {
      sessionStorage.setItem(KEY, '1');
      document.getElementById('avson-gate').remove();
    } else {
      document.getElementById('avson-gate__err').textContent = 'Contrase\u00F1a incorrecta. Int\u00E9ntalo de nuevo.';
      document.getElementById('avson-gate__input').value = '';
      document.getElementById('avson-gate__input').focus();
    }
  }

  document.getElementById('avson-gate__btn').addEventListener('click', tryUnlock);
  document.getElementById('avson-gate__input').addEventListener('keydown', function (e) {
    if (e.key === 'Enter') tryUnlock();
  });
}());
