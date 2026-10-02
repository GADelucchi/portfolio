/**
 * Proyectos del portfolio, en el orden en que se muestran.
 * Para agregar uno nuevo: sumá un objeto acá y listo, no hay que tocar el HTML.
 *
 * - image:     captura en assets/imgs/projects (opcional; si falta se muestra el emoji)
 * - featured:  true para destacar la tarjeta con el halo ámbar
 * - theme:     degradé de fondo de la miniatura (ver .proj-thumb--* en css/projects.css)
 * - linkLabel: 'project' | 'demo' (texto del botón, ver LINK_LABELS)
 */
export const LINK_LABELS = {
  project: { es: 'Ver proyecto', en: 'View project' },
  demo: { es: 'Ver demo', en: 'View demo' },
};

export const projects = [
  {
    icon: '🔧',
    image: 'assets/imgs/projects/repairos.webp',
    featured: true,
    theme: 'cyan',
    tags: ['React', 'TypeScript', 'Express', 'MySQL'],
    name: { es: 'RepairOS', en: 'RepairOS' },
    description: {
      es: 'SaaS de gestión para servicios técnicos de electrónica. Ingreso con checklist, fotos y firma del cliente, claves de desbloqueo cifradas, presupuestos, historial de estados, remito en PDF, notificaciones por email y soporte multi-sucursal. Instalable como PWA.',
      en: 'Management SaaS for electronics repair shops. Intake checklist with photos and customer signature, encrypted unlock codes, quotes, full status history, PDF receipts, email notifications and multi-branch support. Installable as a PWA.',
    },
    url: 'https://proyectorepairoslanding.onrender.com',
    linkLabel: 'project',
  },
  {
    icon: '🗓️',
    image: 'assets/imgs/projects/turnero.webp',
    featured: true,
    theme: 'blue',
    tags: ['React', 'NestJS', 'MySQL'],
    name: { es: 'Turnero Dr. Delucchi', en: 'Dr. Delucchi Booking' },
    description: {
      es: 'Sistema de turnos médicos online para consultorio psiquiátrico. Verificación OTP por WhatsApp, panel privado para médicos y recepción, recordatorios automáticos y bloqueo de fechas.',
      en: 'Online appointment system for a psychiatric practice. WhatsApp OTP verification, private panels for doctors and reception staff, automatic reminders and date blocking.',
    },
    url: 'https://elpsiquiatra.ar',
    linkLabel: 'project',
  },
  {
    icon: '🏥',
    image: 'assets/imgs/projects/agisad.webp',
    featured: true,
    theme: 'teal',
    tags: ['React', 'Node.js', 'MySQL'],
    name: { es: 'Agisad', en: 'Agisad' },
    description: {
      es: 'Plataforma SaaS de turnos online para profesionales de la salud, con gestión de disponibilidad, recordatorios automáticos y panel administrativo multi-profesional.',
      en: 'Healthcare SaaS platform for online appointment scheduling for health professionals, featuring availability management, automated reminders, and a multi-professional admin panel.',
    },
    url: 'https://agisad.ar',
    linkLabel: 'project',
  },
  {
    icon: '🤝',
    image: 'assets/imgs/projects/redh.webp',
    theme: 'rose',
    // TODO: completar con el stack real de la fundación
    tags: ['Web App'],
    name: { es: 'Fundación REDH', en: 'REDH Foundation' },
    description: {
      es: 'Sitio institucional para una fundación colombiana que protege los derechos humanos de niñas, niños, adolescentes y mujeres. Líneas de trabajo, plataforma TRAMA, voluntariado y donaciones.',
      en: 'Institutional website for a Colombian foundation protecting the human rights of girls, boys, teenagers and women. Work areas, the TRAMA platform, volunteering and donations.',
    },
    // URL provisoria
    url: 'https://proyectoredh.onrender.com/',
    linkLabel: 'project',
  },
  {
    icon: '✨',
    image: 'assets/imgs/projects/mab.webp',
    theme: 'purple',
    tags: ['React', 'Vite', 'Node.js', 'MySQL'],
    name: { es: 'MAB Estética', en: 'MAB Estética' },
    description: {
      es: 'Plataforma de gestión para cosmetóloga. Fichas clínicas y diarias de pacientes, sistema de turnos y catálogo de productos. Panel de administración completo.',
      en: 'Management platform for a cosmetologist. Clinical and daily patient records, appointment system and product catalog. Full admin panel.',
    },
    url: 'https://mabestetica.onrender.com',
    linkLabel: 'project',
  },
  {
    icon: '🔐',
    image: 'assets/imgs/projects/cerratex.webp',
    theme: 'amber',
    tags: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
    name: { es: 'Cerratex', en: 'Cerratex' },
    description: {
      es: 'Carrito de compras para fábrica de cerraduras. El pedido se envía automáticamente por email al vendedor con los datos del cliente y el detalle del carrito para continuar la venta.',
      en: 'Shopping cart for a lock manufacturer. On checkout, the order is automatically emailed to the sales rep with customer info and cart details to close the sale.',
    },
    url: 'https://www.cerratex.com.ar',
    linkLabel: 'project',
  },
  {
    icon: '💱',
    image: 'assets/imgs/projects/calculadora.webp',
    theme: 'green',
    tags: ['HTML', 'CSS', 'JavaScript'],
    name: { es: 'Calculadora dólar blue', en: 'Blue Dollar Calculator' },
    description: {
      es: 'Herramienta interna para convertir precios en dólares a pesos. Aplica un spread sobre el dólar blue y calcula intereses automáticamente según el método de pago seleccionado.',
      en: 'Internal tool for converting USD prices to pesos. Applies a spread on the blue dollar rate and automatically calculates interest based on the selected payment method.',
    },
    url: 'https://calculadoraapple.onrender.com',
    linkLabel: 'demo',
  },
  {
    icon: '🎡',
    image: 'assets/imgs/projects/ruleta.webp',
    theme: 'orange',
    tags: ['HTML Canvas', 'JavaScript'],
    name: { es: 'Ruleta de premios', en: 'Prize Wheel' },
    description: {
      es: 'Ruleta interactiva con animación física y detección precisa del sector ganador. Personalizable en colores, sectores y premios. Ideal para sorteos y eventos.',
      en: 'Interactive prize wheel with physics-based animation and accurate winning sector detection. Customizable colors, sectors, and prizes. Ideal for draws and events.',
    },
    url: 'https://ruleta-di51.onrender.com',
    linkLabel: 'demo',
  },
];
