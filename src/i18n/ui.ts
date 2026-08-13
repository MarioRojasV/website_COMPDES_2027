/**
 * COMPDES 2027 — i18n dictionaries (single source of truth for all copy).
 *
 * Every translatable string lives here, keyed by a stable identifier. Components
 * look up keys with `useTranslations(Astro.currentLocale)` at build time, and the
 * instant language toggle swaps the same keys on the client (see LangToggle).
 *
 * Rule: an element with a `data-i18n` attribute MUST also render the same key
 * server-side, so the initial HTML is always correct and works without JS.
 */

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es';

export const ui = {
  es: {
    // Common
    'common.skipLink': 'Saltar al contenido',
    'common.openMenu': 'Abrir menú',
    'common.closeMenu': 'Cerrar menú',
    'common.langToggle': 'Idioma: English',
    'common.navAria': 'Navegación principal',
    'common.comingSoon': 'Contenido próximamente.',

    // Navigation
    'nav.home': 'Inicio',
    'nav.inscripcion': 'Inscripción y participación',
    'nav.preinscripcion': 'Pre-inscripción',
    'nav.areas': 'Áreas de interés',
    'nav.cronograma': 'Cronograma',
    'nav.hospedaje': 'Hospedaje',
    'nav.turismo': 'Turismo',
    'nav.organizacion': 'Organización',
    'nav.patrocinadores': 'Patrocinadores',

    // Footer
    'footer.tagline': 'Congreso académico y tecnológico — Sede San Carlos.',
    'footer.copyright': '© 2027 COMPDES — Todos los derechos reservados',

    // Hero
    'hero.eyebrow': 'Instituto Tecnológico de Costa Rica · Sede San Carlos',
    'hero.title': 'COMPDES 2027',
    'hero.lede': 'Ciencia, tecnología y academia desde el corazón de la zona norte de Costa Rica.',
    'hero.cta.cronograma': 'Ver cronograma',
    'hero.cta.inscripcion': 'Inscripción',
    'hero.scrollAria': 'Desplazarse a la siguiente sección',

    // Home sections
    //Qué es COMPDES?
    'home.about.eyebrow': 'Bienvenida',
    'home.about.title': '¿Qué es COMPDES?',
    'home.about.intro':
      '<a href="https://compdes.org" target="_blank" rel="noopener noreferrer" class="underline hover:text-accent" style="font-weight: bold;">COMPDES</a> \
      es una red iberoamericana integrada por diez Universidades públicas de Costa Rica, El Salvador, España, Guatemala, Honduras y Nicaragua. \
      Su propósito es promover el intercambio de conocimiento entre estudiantes, profesionales, docentes e \
      investigadores vinculados con el uso de la computación y las tecnologías de información y comunicación \
      para el desarrollo de sus países y de la región.\
      <br /><br />Los <a href="https://compdes.org/#conferences" target="_blank" rel="noopener noreferrer" class="underline hover:text-accent" style="font-weight: bold;">congresos COMPDES</a> \
      son la actividad más notoria de la red y se celebran anualmente en una de las Universidades que la conforman.',
    // Información general
    'home.info.eyebrow': 'Información',
    'home.info.title': 'Información general',
    'home.info.intro':
      'El <strong>XX Congreso Iberoamericano de Computación para el Desarrollo — COMPDES2027 —</strong> se \
      desarrollará del 21 al 23 de julio de 2027, organizado por el Instituto Tecnológico de Costa Rica (Sede de San Carlos) \
      en el marco de actividades de la RED COMPDES. La sede del evento será el cantón de San Carlos, Costa Rica, en el \
      distrito de Santa Clara.<br /><br />Adicionalmente, este año el congreso alcanzará un hito histórico en su evolución. \
      Por primera vez con publicaciones indexadas internacionalmente en <strong>IEEE</strong>.',
    // IEEE
    'home.ieee_info.eyebrow': 'Publicaciones IEEE',
    'home.ieee_info.title': '¡¡¡Indexados a IEEE!!!',
    // Contacto
    'home.contact.eyebrow': 'Contacto',
    'home.contact.title': 'Póngase en contacto',
    'home.contact.email': 'Correo electrónico',
    'home.contact.phone': 'Teléfono',
    'home.contact.social': 'Redes sociales',
    'home.contact.emailValue': 'compdes2027@example.com',
    'home.contact.phoneValue': '+506 9999 9999',
    'home.contact.socialValue': '@compdes2027 en Facebook, X (Twitter) e Instagram',
    // Sede
    'home.venue.eyebrow': 'Sede',
    'home.venue.title': 'Lugar del evento',
    'home.venue.intro': 'La información de la sede del congreso estará disponible próximamente.',

    // Page titles
    'page.title.home': 'COMPDES 2027 — Inicio',
    'page.title.preinscripcion': 'COMPDES 2027 — Pre-inscripción',
    'page.title.inscripcion': 'COMPDES 2027 — Inscripción y participación',
    'page.title.areas': 'COMPDES 2027 — Áreas de interés',
    'page.title.cronograma': 'COMPDES 2027 — Cronograma',
    'page.title.hospedaje': 'COMPDES 2027 — Hospedaje',
    'page.title.turismo': 'COMPDES 2027 — Turismo',
    'page.title.organizacion': 'COMPDES 2027 — Organización',
    'page.title.patrocinadores': 'COMPDES 2027 — Patrocinadores',

    // Meta descriptions
    'meta.desc.home':
      'Congreso COMPDES 2027 del Instituto Tecnológico de Costa Rica, Sede San Carlos: ciencia, tecnología y academia.',
    'meta.desc.preinscripcion': 'Información y requisitos para la pre-inscripción al Congreso COMPDES 2027.',
    'meta.desc.inscripcion': 'Modalidades de inscripción y participación en el Congreso COMPDES 2027.',
    'meta.desc.areas': 'Áreas de interés y líneas temáticas del Congreso COMPDES 2027.',
    'meta.desc.cronograma': 'Fechas importantes y programación del Congreso COMPDES 2027.',
    'meta.desc.hospedaje': 'Opciones de hospedaje para asistentes al Congreso COMPDES 2027 en San Carlos.',
    'meta.desc.turismo': 'Turismo y actividades en la región de San Carlos durante el Congreso COMPDES 2027.',
    'meta.desc.organizacion': 'Comité organizador del Congreso COMPDES 2027.',
    'meta.desc.patrocinadores': 'Instituciones patrocinadoras y aliadas del Congreso COMPDES 2027.',
  },
  en: {
    // Common
    'common.skipLink': 'Skip to content',
    'common.openMenu': 'Open menu',
    'common.closeMenu': 'Close menu',
    'common.langToggle': 'Language: Español',
    'common.navAria': 'Main navigation',
    'common.comingSoon': 'Content coming soon.',

    // Navigation
    'nav.home': 'Home',
    'nav.inscripcion': 'Registration and participation',
    'nav.preinscripcion': 'Pre-registration',
    'nav.areas': 'Areas of interest',
    'nav.cronograma': 'Schedule',
    'nav.hospedaje': 'Accommodation',
    'nav.turismo': 'Tourism',
    'nav.organizacion': 'Organization',
    'nav.patrocinadores': 'Sponsors',

    // Footer
    'footer.tagline': 'Academic and technology conference — San Carlos Campus.',
    'footer.copyright': '© 2027 COMPDES — All rights reserved',

    // Hero
    'hero.eyebrow': 'Costa Rica Institute of Technology · San Carlos Campus',
    'hero.title': 'COMPDES 2027',
    'hero.lede': 'Science, technology and academia from the heart of Costa Rica’s northern region.',
    'hero.cta.cronograma': 'View schedule',
    'hero.cta.inscripcion': 'Registration',
    'hero.scrollAria': 'Scroll to the next section',

    // Home sections
    // What is COMPDES?
    'home.about.eyebrow': 'Welcome',
    'home.about.title': 'What is COMPDES?',
    'home.about.intro':
      '<a href="https://compdes.org" target="_blank" rel="noopener noreferrer" class="underline hover:text-accent" style="font-weight: bold;">COMPDES</a> \
      is an Ibero-American network made up of public universities from Costa Rica, El Salvador, Spain, Guatemala, \
      Honduras, and Nicaragua. Its purpose is to promote the exchange of knowledge, experiences, and initiatives among \
      students, professionals, faculty members, and researchers involved in the use of computing and information and \
      communication technologies to support the development of their countries and the region.\
      <br /><br />Its main activity is the \
      <a href="https://compdes.org/#conferences" target="_blank" rel="noopener noreferrer" class="underline hover:text-accent" style="font-weight: bold;">COMPDES Conference</a> \
      , an annual event organized by one of the Network’s member universities.',
    // General information
    'home.info.eyebrow': 'Information',
    'home.info.title': 'General information',
    'home.info.intro':
      'The <strong>20th Ibero-American Conference on Computing for Development — COMPDES2027 —</strong> will \
      take place from July 21 to 23, 2027, organized by the Costa Rica Institute of Technology (San Carlos Campus) \
      as part of the COMPDES NETWORK’s activities. The event will be held in the canton of San Carlos, Costa Rica, in the \
      district of Santa Clara.<br /><br />Additionally, this year the conference will reach a historic milestone in its evolution, \
      featuring internationally indexed publications in <strong>IEEE</strong> for the first time.',
    // IEEE
    'home.ieee_info.eyebrow': 'Publicaciones IEEE',
    'home.ieee_info.title': '¡¡¡Indexados a IEEE!!!',
    // Contact
    'home.contact.eyebrow': 'Contact',
    'home.contact.title': 'Get in touch',
    'home.contact.email': 'Email',
    'home.contact.phone': 'Phone',
    'home.contact.social': 'Social media',
    'home.contact.emailValue': 'compdes2027@example.com',
    'home.contact.phoneValue': '+506 9999 9999',
    'home.contact.socialValue': '@compdes2027 on Facebook, X (Twitter) and Instagram',
    // Venue
    'home.venue.eyebrow': 'Venue',
    'home.venue.title': 'Event location',
    'home.venue.intro': 'Information about the conference venue will be available soon.',

    // Page titles
    'page.title.home': 'COMPDES 2027 — Home',
    'page.title.preinscripcion': 'COMPDES 2027 — Pre-registration',
    'page.title.inscripcion': 'COMPDES 2027 — Registration and participation',
    'page.title.areas': 'COMPDES 2027 — Areas of interest',
    'page.title.cronograma': 'COMPDES 2027 — Schedule',
    'page.title.hospedaje': 'COMPDES 2027 — Accommodation',
    'page.title.turismo': 'COMPDES 2027 — Tourism',
    'page.title.organizacion': 'COMPDES 2027 — Organization',
    'page.title.patrocinadores': 'COMPDES 2027 — Sponsors',

    // Meta descriptions
    'meta.desc.home':
      'COMPDES 2027 conference at Costa Rica Institute of Technology, San Carlos Campus: science, technology and academia.',
    'meta.desc.preinscripcion': 'Information and requirements to pre-register for the COMPDES 2027 conference.',
    'meta.desc.inscripcion': 'Registration and participation options for the COMPDES 2027 conference.',
    'meta.desc.areas': 'Areas of interest and thematic tracks of the COMPDES 2027 conference.',
    'meta.desc.cronograma': 'Important dates and program of the COMPDES 2027 conference.',
    'meta.desc.hospedaje': 'Accommodation options for COMPDES 2027 attendees in San Carlos.',
    'meta.desc.turismo': 'Tourism and activities in the San Carlos region during COMPDES 2027.',
    'meta.desc.organizacion': 'Organizing committee of the COMPDES 2027 conference.',
    'meta.desc.patrocinadores': 'Sponsoring and partner institutions of the COMPDES 2027 conference.',
  },
} as const;

export type UiKey = keyof typeof ui['es'];

/** Translation helper for server-side rendering. */
export function useTranslations(lang: string) {
  const dict = (ui as Record<string, Record<UiKey, string>>)[lang] ?? ui[defaultLang];
  return function t(key: UiKey): string {
    return dict[key] ?? ui[defaultLang][key];
  };
}

/** Resolve the current locale from a URL path ('/en/...' -> 'en', else 'es'). */
export function getLangFromUrl(pathname: string): 'es' | 'en' {
  return pathname.startsWith('/en') ? 'en' : 'es';
}

/**
 * Return the same path in the given language. Works whether the input is the
 * Spanish path (no prefix) or the English path (/en prefix).
 */
export function localizedUrl(pathname: string, lang: 'es' | 'en'): string {
  const p = pathname.length > 1 && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
  const stripped = p.replace(/^\/en(?=\/|$)/, '');
  const esUrl = stripped === '' ? '/' : stripped;
  if (lang === 'es') return esUrl;
  return esUrl === '/' ? '/en' : `/en${esUrl}`;
}
