/** Menú hamburguesa (mobile) y resaltado del link de la sección visible. */
export function initNav() {
  const hamburger = document.getElementById('hamburger');
  const menu = document.getElementById('nav-links');

  const setOpen = (open) => {
    hamburger.classList.toggle('active', open);
    menu.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  };

  hamburger.addEventListener('click', () => setOpen(!menu.classList.contains('open')));
  menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));

  // Scroll-spy: un solo observer para todas las secciones
  const links = menu.querySelectorAll('a');
  const spy = new IntersectionObserver(
    (entries) => {
      entries.filter((e) => e.isIntersecting).forEach((entry) => {
        links.forEach((a) => a.classList.toggle('active', a.hash === `#${entry.target.id}`));
      });
    },
    { threshold: 0.4 },
  );
  document.querySelectorAll('section[id]').forEach((section) => spy.observe(section));
}
