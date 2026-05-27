// AVSON GRC - Shared JavaScript

// Mobile Menu
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('mobile-open');
}

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function() {
  // FAQ
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
  var orig = btn.textContent;
  btn.textContent = '✓ Enviado — Te contactamos en menos de 24h';
  btn.style.background = '#10b981';
  btn.disabled = true;
}

// Popup after 3 seconds (exit-intent concept)
setTimeout(function() {
  var modal = document.getElementById('exitModal');
  if (modal && !sessionStorage.getItem('avson-modal-shown') && !localStorage.getItem('avson-cookies')) {
    // Only show if user hasn't interacted with a form
    if (!document.querySelector('form:focus-within')) {
      // Don't show on contacto page
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

// ── Chat Widget ──
(function() {
  var chatUserName = '';
  var chatServices = [];
  var SERVICE_OPTIONS = [
    'Certificado ENS',
    'ISO 27001',
    'ISO 22301',
    'DORA',
    'NIS2',
    'TISAX',
    'Pack ENS + ISO 27001',
    'Otras normativas',
    'No sé todavía'
  ];

  function injectChatWidget() {
    // Don't inject on contacto or gracias pages
    if (window.location.pathname.includes('contacto') || window.location.pathname.includes('gracias')) return;

    var widget = document.createElement('div');
    widget.id = 'chatWidgetRoot';
    widget.innerHTML =
      '<button class="chat-toggle" id="chatToggle" aria-label="Abrir chat">' +
        '<svg class="chat-toggle__open" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.2L4 17.2V4h16v12z"/><path d="M7 9h10v2H7zm0-3h10v2H7z"/></svg>' +
        '<svg class="chat-toggle__close" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>' +
      '</button>' +
      '<div class="chat-panel" id="chatPanel">' +
        '<div class="chat-header">' +
          '<div class="chat-header__logo">AVSON <span>&middot;</span> GRC</div>' +
          '<div class="chat-header__status">En línea</div>' +
        '</div>' +
        '<div class="chat-body" id="chatBody"></div>' +
        '<div id="chatInputArea"></div>' +
      '</div>';
    document.body.appendChild(widget);

    var toggle = document.getElementById('chatToggle');
    var panel = document.getElementById('chatPanel');
    toggle.addEventListener('click', function() {
      var isOpen = panel.classList.contains('open');
      if (isOpen) {
        panel.classList.remove('open');
        toggle.classList.remove('active');
      } else {
        panel.classList.add('open');
        toggle.classList.add('active');
        if (!panel.dataset.started) {
          panel.dataset.started = '1';
          startChat();
        }
      }
    });
  }

  function addBotMsg(text, cb) {
    var body = document.getElementById('chatBody');
    var div = document.createElement('div');
    div.className = 'chat-msg chat-msg--bot';
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
    if (cb) setTimeout(cb, 400);
  }

  function addUserMsg(text) {
    var body = document.getElementById('chatBody');
    var div = document.createElement('div');
    div.className = 'chat-msg chat-msg--user';
    div.textContent = text;
    body.appendChild(div);
    body.scrollTop = body.scrollHeight;
  }

  function showTextInput(placeholder, onSubmit) {
    var area = document.getElementById('chatInputArea');
    area.innerHTML =
      '<div class="chat-input-area">' +
        '<input type="text" id="chatInput" placeholder="' + placeholder + '" autocomplete="off">' +
        '<button type="button" id="chatSendBtn" aria-label="Enviar">' +
          '<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>' +
        '</button>' +
      '</div>';
    var input = document.getElementById('chatInput');
    var btn = document.getElementById('chatSendBtn');
    function submit() {
      var val = input.value.trim();
      if (!val) return;
      input.value = '';
      onSubmit(val);
    }
    btn.addEventListener('click', submit);
    input.addEventListener('keydown', function(e) { if (e.key === 'Enter') submit(); });
    input.focus();
  }

  function showEmailInput(onSubmit) {
    var area = document.getElementById('chatInputArea');
    area.innerHTML =
      '<div class="chat-input-area">' +
        '<input type="email" id="chatInput" placeholder="tu@empresa.com" autocomplete="email">' +
        '<button type="button" id="chatSendBtn" aria-label="Enviar">' +
          '<svg viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>' +
        '</button>' +
      '</div>';
    var input = document.getElementById('chatInput');
    var btn = document.getElementById('chatSendBtn');
    function submit() {
      var val = input.value.trim();
      if (!val || !val.includes('@')) return;
      input.value = '';
      onSubmit(val);
    }
    btn.addEventListener('click', submit);
    input.addEventListener('keydown', function(e) { if (e.key === 'Enter') submit(); });
    input.focus();
  }

  function showServiceOptions() {
    var area = document.getElementById('chatInputArea');
    var html = '<div class="chat-options">';
    SERVICE_OPTIONS.forEach(function(opt, i) {
      html += '<label id="chatOpt' + i + '"><input type="checkbox" value="' + opt + '"> ' + opt + '</label>';
    });
    html += '<button class="chat-options__submit" id="chatOptSubmit" disabled>Continuar →</button>';
    html += '</div>';
    area.innerHTML = html;

    var checks = area.querySelectorAll('input[type="checkbox"]');
    var submitBtn = document.getElementById('chatOptSubmit');
    checks.forEach(function(chk) {
      chk.addEventListener('change', function() {
        var label = this.parentElement;
        if (this.checked) label.classList.add('selected');
        else label.classList.remove('selected');
        var any = Array.from(checks).some(function(c) { return c.checked; });
        submitBtn.disabled = !any;
      });
    });

    submitBtn.addEventListener('click', function() {
      chatServices = Array.from(checks).filter(function(c) { return c.checked; }).map(function(c) { return c.value; });
      addUserMsg(chatServices.join(', '));
      area.innerHTML = '';
      stepEmail();
    });

    // Scroll chat body
    var body = document.getElementById('chatBody');
    body.scrollTop = body.scrollHeight;
  }

  function startChat() {
    addBotMsg('¡Hola! Soy el asistente de Avson GRC.', function() {
      addBotMsg('¿Cómo te llamas?', function() {
        showTextInput('Tu nombre...', function(name) {
          chatUserName = name;
          addUserMsg(name);
          document.getElementById('chatInputArea').innerHTML = '';
          stepServices();
        });
      });
    });
  }

  function stepServices() {
    setTimeout(function() {
      addBotMsg('Encantados, ' + chatUserName + '. ¿En qué podemos ayudarte? (selecciona todo lo que necesites)', function() {
        showServiceOptions();
      });
    }, 300);
  }

  function stepEmail() {
    setTimeout(function() {
      addBotMsg('¿Cuál es tu email para que te contactemos?', function() {
        showEmailInput(function(email) {
          addUserMsg(email);
          document.getElementById('chatInputArea').innerHTML = '';
          stepDone(email);
        });
      });
    }, 300);
  }

  function stepDone(email) {
    setTimeout(function() {
      addBotMsg('¡Gracias, ' + chatUserName + '! Te contactamos en menos de 24 horas.', function() {
        // Track lead
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'lead_generated',
            form_type: 'chat_widget',
            servicios: chatServices.join(', '),
            email: email
          });
        }
        setTimeout(function() {
          window.location.href = (window.location.pathname.includes('/en/') ? 'contact.html' :
            window.location.pathname.includes('/fr/') ? 'contacto.html' : '/gracias.html') +
            '?name=' + encodeURIComponent(chatUserName) + '&email=' + encodeURIComponent(email);
        }, 2000);
      });
    }, 300);
  }

  // Init on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectChatWidget);
  } else {
    injectChatWidget();
  }
})();
