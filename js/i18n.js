/**
 * Cambio de idioma. Todo elemento con data-es / data-en se traduce al alternar.
 * Si el texto contiene HTML (ej. <strong>) se aplica con innerHTML.
 */
let lang = 'es';

export const getLang = () => lang;

function applyLang() {
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-es]').forEach((node) => {
    const value = node.dataset[lang];
    if (!value) return;
    if (value.includes('<')) node.innerHTML = value;
    else node.textContent = value;
  });
  // Links que cambian de destino según el idioma (ej. el CV)
  document.querySelectorAll('[data-href-es]').forEach((node) => {
    node.href = node.dataset[`href${lang === 'es' ? 'Es' : 'En'}`];
  });
}

export function initI18n() {
  const toggle = document.getElementById('lang-toggle');
  toggle.addEventListener('click', () => {
    lang = lang === 'es' ? 'en' : 'es';
    toggle.textContent = lang === 'es' ? 'EN' : 'ES';
    applyLang();
  });
}
