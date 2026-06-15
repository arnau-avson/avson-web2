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

});

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
