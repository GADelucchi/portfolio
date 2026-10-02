import { getLang } from './i18n.js';

/** Crea un elemento con clase y texto opcionales. */
export function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text !== undefined) node.textContent = text;
  return node;
}

/** Crea un elemento traducible: guarda ambos idiomas en data-es / data-en. */
export function translatable(tag, className, text) {
  const node = el(tag, className, text[getLang()]);
  node.dataset.es = text.es;
  node.dataset.en = text.en;
  return node;
}
