document.getElementById('lang-toggle').addEventListener('click', toggleLang);
const hamburger = document.getElementById('hamburger');
const navLinksMenu = document.getElementById('nav-links');

let lang = 'es';

function toggleLang() {
  lang = lang === 'es' ? 'en' : 'es';
  document.querySelector('.lang-btn').textContent = lang === 'es' ? 'EN' : 'ES';
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-es]').forEach(el => {
    const val = el.getAttribute(`data-${lang}`);
    if (!val) return;
    if (['A', 'BUTTON', 'SPAN'].includes(el.tagName)) el.textContent = val;
    else el.innerHTML = val;
  });
}

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinksMenu.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', navLinksMenu.classList.contains('open'));
});

// Cierra el menú al tocar un link
navLinksMenu.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinksMenu.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const siblings = [...entry.target.parentElement.querySelectorAll('.reveal')];
    entry.target.style.transitionDelay = `${siblings.indexOf(entry.target) * 0.08}s`;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Scroll-spy del nav — un solo observer, varios targets
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section[id]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + entry.target.id ? 'var(--amber)' : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(section => sectionObserver.observe(section));

// Año de copyright dinámico
const copyrightYear = document.getElementById('copyright-year');
if (copyrightYear) copyrightYear.textContent = new Date().getFullYear();