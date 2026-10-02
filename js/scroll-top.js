/** Botón "volver arriba": aparece al pasar la sección "Sobre mí". */
const OFFSET_PX = 100;

export function initScrollTop() {
  const button = document.getElementById('scroll-top');
  const threshold = document.getElementById('about').offsetTop - OFFSET_PX;

  window.addEventListener(
    'scroll',
    () => button.classList.toggle('visible', window.scrollY >= threshold),
    { passive: true },
  );
  button.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}
