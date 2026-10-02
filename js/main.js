import { initI18n } from './i18n.js';
import { renderProjects, renderSkills } from './render.js';
import { initNav } from './nav.js';
import { initReveal } from './reveal.js';
import { initScrollTop } from './scroll-top.js';

// El contenido se renderiza primero para que reveal y scroll-top lo encuentren.
renderSkills();
renderProjects();

initI18n();
initNav();
initReveal();
initScrollTop();

document.getElementById('copyright-year').textContent = new Date().getFullYear();
