import { projects, LINK_LABELS } from './data/projects.js';
import { skillGroups } from './data/skills.js';
import { el, translatable } from './dom.js';

function createThumb(project) {
  const thumb = el('div', `proj-thumb proj-thumb--${project.theme}`);
  if (!project.image) {
    thumb.textContent = project.icon;
    return thumb;
  }
  const img = el('img');
  img.src = project.image;
  img.alt = '';
  img.loading = 'lazy';
  thumb.append(img);
  return thumb;
}

function createProjectCard(project) {
  const card = el('div', `proj-card reveal${project.featured ? ' proj-card--featured' : ''}`);
  card.append(createThumb(project));

  const body = el('div', 'proj-body');

  const tags = el('div', 'proj-tags');
  tags.append(...project.tags.map((tag) => el('span', 'proj-tag', tag)));

  const link = translatable('a', 'proj-link', LINK_LABELS[project.linkLabel]);
  link.href = project.url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';

  body.append(
    tags,
    translatable('div', 'proj-name', project.name),
    translatable('p', 'proj-desc', project.description),
    link,
  );
  card.append(body);
  if (project.featured) {
    card.append(translatable('span', 'proj-badge', { es: 'Destacado', en: 'Featured' }));
  }
  return card;
}

function createSkillGroup(group) {
  const wrapper = el('div', 'skills-group');
  const chips = el('div', 'skills-chips');
  chips.append(...group.items.map((item) => el('span', 'chip', item)));
  wrapper.append(translatable('h4', '', group.label), chips);
  return wrapper;
}

export function renderProjects() {
  document.getElementById('projects-grid').append(...projects.map(createProjectCard));
}

export function renderSkills() {
  document.getElementById('skills').append(...skillGroups.map(createSkillGroup));
}
