/** Anima los elementos .reveal al entrar en pantalla, escalonando a los hermanos. */
const STAGGER_SECONDS = 0.08;

export function initReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.filter((e) => e.isIntersecting).forEach(({ target }) => {
        const siblings = [...target.parentElement.querySelectorAll(':scope > .reveal')];
        target.style.transitionDelay = `${siblings.indexOf(target) * STAGGER_SECONDS}s`;
        target.classList.add('visible');
        observer.unobserve(target);
      });
    },
    { threshold: 0.1 },
  );
  document.querySelectorAll('.reveal').forEach((node) => observer.observe(node));
}
