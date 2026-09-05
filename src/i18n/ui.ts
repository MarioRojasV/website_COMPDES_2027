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
  es: "Español",
  en: "English",
} as const;

export const defaultLang = "es";

export const ui = {
  es: {
    // Common
    "common.skipLink": "Saltar al contenido",
    "common.openMenu": "Abrir menú",
    "common.closeMenu": "Cerrar menú",
    "common.langToggle": "Idioma: English",
    "common.navAria": "Navegación principal",
    "common.comingSoon": "Contenido próximamente.",

    "common.section": "sección",
    "common.inPreparation": "EN PREPARACIÓN",
    "common.sectionComingSoon":
      "Esta sección del sitio será actualizada próximamente con más información sobre esta área del congreso.",

    // PageHeader tags
    "pageheader.tag.areas": "temática",
    "pageheader.tag.cronograma": "agenda",
    "pageheader.tag.hospedaje": "alojamiento",
    "pageheader.tag.inscripcion": "participación",
    "pageheader.tag.organizacion": "comité",
    "pageheader.tag.patrocinadores": "auspicios",
    "pageheader.tag.turismo": "visitas",
    "pageheader.title.inscripcion": "Inscripción",
    "pageheader.desc.inscripcion":
      "Forma parte de COMPDES y participa como espectador, ponente o tallerista, compartiendo experiencias, conocimientos e ideas.",
    "pageheader.desc.turismo":
      "Explora la riqueza natural de Costa Rica y descubre paisajes llenos de vida, flora y fauna.",
    "pageheader.desc.cronograma":
      "Fechas clave, programa académico por día y agenda detallada de ponencias del XX Congreso COMPDES.",
    "pageheader.desc.hospedaje":
      "En esta sección encontrarás una variedad de opciones de alojamiento cerca del TEC para tu estadía durante el COMPDES 2027. Explora las opciones disponibles y elige la que mejor se adapte a tus necesidades.",
    "pageheader.desc.organizacion":
      "Las personas detrás del XX Congreso COMPDES: comités científico y organizador, la Comisión Permanente de la red y los representantes de sus universidades miembro.",
    "org.cientifico.eyebrow": "comite_cientifico",
    "org.cientifico.title": "Comité Científico",
    "org.cientifico.intro":
      "Responsable del proceso de arbitraje por pares y de la selección académica de los trabajos recibidos.",
    "org.organizador.eyebrow": "comite_organizador",
    "org.organizador.title": "Comité Organizador",
    "org.organizador.intro":
      "Equipo local anfitrión del Tecnológico de Costa Rica, encargado de la logística, la sede y la experiencia de las personas asistentes.",
    "org.comision.eyebrow": "comision_permanente",
    "org.comision.title": "Comisión Permanente de la Red COMPDES",
    "org.comision.intro":
      "Órgano estable de la red que vela por la continuidad académica del congreso entre ediciones.",
    "org.representantes.eyebrow": "representantes_red",
    "org.representantes.title": "Representantes de la Red COMPDES",
    "org.representantes.intro":
      "Un representante por cada universidad miembro, enlace entre su institución y la organización del congreso.",
    "tur.list.title": "Actividades disponibles",
    "tur.list.intro":
      "Atractivos turísticos en San Carlos y La Fortuna. Tarifas de referencia: confirma horarios, precios y reservación directamente con cada operador.",
    "tur.card.category": "Tipo",
    "tur.card.price": "Tarifa",
    "tur.card.hours": "Horario",
    "tur.card.travel": "desde el TEC",
    "tur.card.details": "+ más información",
    "tur.label.description": "Descripción",
    "tur.label.duration": "Duración estimada",
    "tur.label.email": "Correo",
    "tur.label.website": "Sitio web",
    "tur.card.map": "Cómo llegar",
    "areas.general.title": "Áreas de interés general",
    "areas.general.intro":
      "Desde su creación, las conferencias COMPDES son un foro para presentar y discutir trabajos de las Ciencias de la Computación, las Tecnologías de la Información y campos afines:",
    "areas.tracks.title": "Líneas temáticas prioritarias",
    "areas.tracks.intro":
      "Para esta edición se recibirán con especial interés trabajos vinculados a los siguientes ejes. Explora el árbol y abre cada módulo para ver sus subtemas.",
    "areas.explorer.hint": "$ selecciona un módulo del árbol",
    "pageheader.desc.areas":
      "Los ejes temáticos del XX Congreso COMPDES: las áreas generales de siempre y las líneas prioritarias de esta edición, listas para explorar módulo por módulo.",

    // Cronograma
    "cron.dates.eyebrow": "fechas clave",
    "cron.dates.title": "Fechas importantes",
    "cron.dates.intro":
      "El calendario oficial del congreso. Las fechas aún no definidas se anunciarán por este medio y en las redes oficiales de la red COMPDES.",
    "cron.dates.term": "[ fechas_clave ]",
    "cron.status.confirmed": "confirmado",
    "cron.status.tbd": "por anunciar",
    "cron.program.eyebrow": "programa",
    "cron.program.title": "Programa por día",
    "cron.program.intro":
      "Tres días de actividades: ponencias magistrales, sesiones técnicas, talleres, pausas y ceremonias. Selecciona un día para ver su programación.",
    "cron.program.tabsAria": "Seleccionar día del congreso",
    "cron.agenda.eyebrow": "ponencias",
    "cron.agenda.title": "Agenda de ponencias",
    "cron.agenda.intro":
      "Detalle de cada presentación: título, autoría, horario y sala. Usa el buscador para filtrar por nombre de la ponencia o de sus autores.",
    "cron.search.label": "grep_ponencias",
    "cron.search.placeholder": "Buscar por título o autor…",
    "cron.search.results": "ponencia(s) encontrada(s)",
    "cron.search.emptyTitle": "Sin resultados",
    "cron.search.emptyHint": "Intenta con otro término o revisa la ortografía.",
    "cron.kind.keynote": "magistral",
    "cron.kind.session": "sesión técnica",
    "cron.kind.workshop": "taller",
    "cron.kind.break": "pausa café",
    "cron.kind.lunch": "almuerzo",
    "cron.kind.ceremony": "ceremonia",
    "cron.kind.activity": "actividad",
    "cron.talk.type.keynote": "magistral",
    "cron.talk.type.talk": "ponencia",
    "cron.talk.type.workshop": "taller",

    // Navigation
    "nav.home": "Inicio",
    "nav.inscripcion": "Inscripción",
    "nav.areas": "Áreas de interés",
    "nav.cronograma": "Cronograma",
    "nav.hospedaje": "Hospedaje",
    "nav.turismo": "Turismo",
    "nav.organizacion": "Organización",
    "nav.patrocinadores": "Patrocinadores",

    // Footer
    "footer.tagline": "Congreso académico y tecnológico — Sede San Carlos.",
    "footer.copyright": "© 2027 COMPDES — Todos los derechos reservados",

    // Hero
    "hero.eyebrow": "Instituto Tecnológico de Costa Rica · Sede San Carlos",
    "hero.title": "COMPDES 2027",
    "hero.lede":
      "Ciencia, tecnología y academia desde el corazón de la zona norte de Costa Rica.",
    "hero.cta.cronograma": "Ver cronograma",
    "hero.cta.inscripcion": "Inscripción",
    "hero.scrollAria": "Desplazarse a la siguiente sección",

    // Home sections
    //Qué es COMPDES?
    "home.about.eyebrow": "Bienvenida",
    "home.about.title": "¿Qué es COMPDES?",
    "home.about.intro":
      '<a href="https://compdes.org" target="_blank" rel="noopener noreferrer" class="underline hover:text-accent" style="font-weight: bold;">COMPDES</a> \
      es una red iberoamericana integrada por diez Universidades públicas de Costa Rica, El Salvador, España, Guatemala, Honduras y Nicaragua. \
      Su propósito es promover el intercambio de conocimiento entre estudiantes, profesionales, docentes e \
      investigadores vinculados con el uso de la computación y las tecnologías de información y comunicación \
      para el desarrollo de sus países y de la región.\
      <br /><br />Los <a href="https://compdes.org/#conferences" target="_blank" rel="noopener noreferrer" class="underline hover:text-accent" style="font-weight: bold;">congresos COMPDES</a> \
      son la actividad más notoria de la red y se celebran anualmente en una de las Universidades que la conforman.',
    // Información general
    "home.info.eyebrow": "Información",
    "home.info.title": "Información general",
    "home.info.intro":
      "El <strong>XX Congreso Iberoamericano de Computación para el Desarrollo — COMPDES2027 —</strong> se \
      desarrollará del 21 al 23 de julio de 2027, organizado por el Instituto Tecnológico de Costa Rica (Sede de San Carlos) \
      en el marco de actividades de la RED COMPDES. La sede del evento será el cantón de San Carlos, Costa Rica, en el \
      distrito de Santa Clara.<br /><br />Además, esta edición marcará un hito histórico: por primera vez, sus \
      publicaciones estarán indexadas en <strong>IEEE</strong>.",
    // IEEE — indexación internacional
    "home.ieee.eyebrow": "Publicaciones",
    "home.ieee.title": "Por primera vez: indexados en IEEE",
    "home.ieee.intro":
      "En su edición 2027, el Congreso COMPDES alcanza un hito histórico: por primera vez en la historia de la red, \
      los trabajos aceptados contarán con publicación e indexación internacional a través de <strong>IEEE</strong>, \
      la asociación profesional más grande del mundo en ingeniería y computación.",
    "home.ieee.badge": "primera vez",
    "home.ieee.card.what.title": "¿Qué significa estar indexados?",
    "home.ieee.card.what.body":
      "Los artículos aceptados se publican en las memorias del congreso y quedan registrados en \
      <strong>IEEE Xplore</strong>, la biblioteca digital de referencia mundial en ingeniería y computación, donde \
      pueden ser consultados y citados por investigadores de todo el mundo.",
    "home.ieee.card.milestone.title": "Un hito para la red COMPDES",
    "home.ieee.card.milestone.body":
      "Desde sus primeras ediciones, el congreso ha sido un espacio abierto para compartir computación para el \
      desarrollo. Esta es la primera vez que sus publicaciones alcanzan indexación internacional: un salto de calidad \
      para autores, instituciones y toda la red.",
    "home.ieee.card.authors.title": "¿Qué gana quien publica?",
    "home.ieee.card.authors.body":
      "Publicar en COMPDES 2027 significa visibilidad internacional, trazabilidad formal del propio trabajo y la \
      solidez de un proceso editorial respaldado por IEEE. Una oportunidad ideal para estudiantes, docentes e \
      investigadores de la región.",
    "home.ieee.term.cmd": "compdes2027 --estado-publicaciones",
    "home.ieee.term.line1": "[ ok ] indexación internacional ......... IEEE",
    "home.ieee.term.line2": "[ ok ] biblioteca digital .............. IEEE Xplore",
    "home.ieee.term.line3": "[ ok ] alcance ......................... visible y citable a nivel global",
    "home.ieee.term.line4": "[ >> ] estado .......................... hito_historico // primera_vez_en_la_red",
    // Call for Papers — ficha oficial IEEE (el texto solo se traduce con su botón)
    "home.cfp.eyebrow": "llamada_a_trabajos",
    "home.cfp.title": "Call for Papers: envía tu trabajo",
    "home.cfp.intro":
      "Ficha oficial de publicación e indexación en IEEE Xplore. El texto del aviso se presenta en inglés tal como lo publica la conferencia; puedes traducirlo con el interruptor que aparece al pie de la ficha.",
    "home.cfp.statement":
      "Los trabajos aceptados serán sometidos para su inclusión en la <strong>Biblioteca Digital IEEE Xplore</strong>, conforme a la conferencia <span class=\"text-compdes-yellow\">#63158</span> — <strong>2024 6th International Conference on BioInspired Processing (BIP)</strong> —, sujetos a cumplir el alcance y los requisitos de calidad de <strong>IEEE Xplore</strong>.",
    "home.contact.eyebrow": "Contacto",
    "home.contact.title": "Póngase en contacto",
    "home.contact.email": "Correo electrónico",
    "home.contact.phone": "Teléfono",
    "home.contact.social": "Redes sociales",
    "home.contact.emailValue": "compdes2027@example.com",
    "home.contact.phoneValue": "+506 9999 9999",
    "home.contact.socialValue":
      "@compdes2027 en Facebook, X (Twitter) e Instagram",
    // Ubicación — San Carlos
    "home.location.eyebrow": "Ubicación",
    "home.location.title": "San Carlos, Costa Rica",
    "home.location.intro":
      "La sede del congreso está en el corazón de la zona norte del país: un territorio de llanuras, ríos y volcanes, \
      y la tierra agrícola más productiva de Costa Rica.",
    "home.location.body.sancarlos":
      "San Carlos es el cantón más extenso de Costa Rica y uno de los motores agroproductores del país: tierra de \
      lecherías y quesos, piña, caña, ganado y granos. También es la puerta de entrada al volcán Arenal y a La Fortuna, \
      dos de los íconos naturales del país.",
    "home.location.fact.size": "El cantón más extenso del país",
    "home.location.fact.agro": "Corazón agroproductor: leche, piña y carne",
    "home.location.fact.arenal": "Hogar del volcán Arenal",
    "home.location.fact.tec": "Campus del TEC en Santa Clara",
    "home.location.body.tec.title": "TEC · Sede San Carlos",
    "home.location.body.tec":
      "El congreso se realizará en el Campus Tecnológico Local San Carlos del Instituto Tecnológico de Costa Rica \
      (TEC), ubicado en el distrito de Santa Clara, a 18 km al norte de Ciudad Quesada. Su campus de 35 500 m² reúne \
      aulas, laboratorios, biblioteca, residencias estudiantiles y el centro CTEC, punto de encuentro académico y \
      tecnológico de la región.",
    "home.location.map.cta": "Abrir en Google Maps",

    // Page titles
    "page.title.home": "COMPDES 2027 — Inicio",
    "page.title.inscripcion": "COMPDES 2027 — Inscripción y participación",
    "page.title.areas": "COMPDES 2027 — Áreas de interés",
    "page.title.cronograma": "COMPDES 2027 — Cronograma",
    "page.title.hospedaje": "COMPDES 2027 — Hospedaje",
    "page.title.turismo": "COMPDES 2027 — Turismo",
    "page.title.organizacion": "COMPDES 2027 — Organización",
    "page.title.patrocinadores": "COMPDES 2027 — Patrocinadores",

    // Meta descriptions
    "meta.desc.home":
      "Congreso COMPDES 2027 del Instituto Tecnológico de Costa Rica, Sede San Carlos: ciencia, tecnología y academia.",
    "meta.desc.inscripcion":
      "Modalidades de inscripción y participación en el Congreso COMPDES 2027.",
    "meta.desc.areas":
      "Áreas de interés y líneas temáticas del Congreso COMPDES 2027.",
    "meta.desc.cronograma":
      "Fechas importantes y programación del Congreso COMPDES 2027.",
    "meta.desc.hospedaje":
      "Opciones de hospedaje para asistentes al Congreso COMPDES 2027 en San Carlos.",
    "hosp.list.title": "Hoteles disponibles",
    "hosp.list.intro":
      "<strong>En preparación:</strong> esta sección se seguirá actualizando próximamente con más información sobre el hospedaje. Mientras tanto, estos son los hoteles en Ciudad Quesada y alrededores; las tarifas son de referencia por noche, así que confirma disponibilidad y precio final directamente con cada hotel.",
    "hosp.card.travel": "desde el TEC",
    "hosp.card.rooms": "Habitaciones",
    "hosp.price.perNight": "/ noche",
    "hosp.card.details": "+ más información",
    "hosp.label.email": "Correo",
    "hosp.label.address": "Dirección",
    "hosp.label.amenities": "Servicios",
    "hosp.label.payment": "Formas de pago",
    "hosp.label.cancellation": "Política de cancelación",
    "hosp.label.notes": "Notas",
    "meta.desc.turismo":
      "Turismo y actividades en la región de San Carlos durante el Congreso COMPDES 2027.",
    "meta.desc.organizacion": "Comité organizador del Congreso COMPDES 2027.",
    "meta.desc.patrocinadores":
      "Instituciones patrocinadoras y aliadas del Congreso COMPDES 2027.",
  },
  en: {
    // Common
    "common.skipLink": "Skip to content",
    "common.openMenu": "Open menu",
    "common.closeMenu": "Close menu",
    "common.langToggle": "Language: Español",
    "common.navAria": "Main navigation",
    "common.comingSoon": "Content coming soon.",

    "common.section": "section",
    "common.inPreparation": "IN PREPARATION",
    "common.sectionComingSoon":
      "This section of the site will be updated soon with more information about this part of the conference.",

    // PageHeader tags
    "pageheader.tag.areas": "thematic area",
    "pageheader.tag.cronograma": "schedule",
    "pageheader.tag.hospedaje": "accommodation",
    "pageheader.tag.inscripcion": "participation",
    "pageheader.tag.organizacion": "committee",
    "pageheader.tag.patrocinadores": "sponsorship",
    "pageheader.tag.turismo": "visits",
    "pageheader.title.inscripcion": "Registration",
    "pageheader.desc.inscripcion":
      "Be part of COMPDES and participate as an attendee, speaker, or workshop facilitator, sharing experiences, knowledge, and ideas.",
    "pageheader.desc.turismo":
      "Explore Costa Rica's natural wealth and discover landscapes full of life, flora and fauna.",
    "pageheader.desc.cronograma":
      "Key dates, daily academic program, and detailed talk agenda of the 20th COMPDES Conference.",
    "pageheader.desc.hospedaje":
      "In this section, you'll find a variety of accommodation options near TEC for your stay during COMPDES 2027. Explore the available options and choose the one that best suits your needs.",
    "pageheader.desc.organizacion":
      "The people behind the 20th COMPDES Conference: scientific and organizing committees, the Network's Permanent Commission, and the representatives of its member universities.",
    "org.cientifico.eyebrow": "scientific_committee",
    "org.cientifico.title": "Scientific Committee",
    "org.cientifico.intro":
      "In charge of the peer-review process and the academic selection of submitted papers.",
    "org.organizador.eyebrow": "organizing_committee",
    "org.organizador.title": "Organizing Committee",
    "org.organizador.intro":
      "The local host team from Tecnológico de Costa Rica, in charge of logistics, venue, and the attendee experience.",
    "org.comision.eyebrow": "permanent_commission",
    "org.comision.title": "COMPDES Network Permanent Commission",
    "org.comision.intro":
      "A standing body of the network that safeguards the conference's academic continuity across editions.",
    "org.representantes.eyebrow": "network_representatives",
    "org.representantes.title": "Representatives of the COMPDES Network",
    "org.representantes.intro":
      "One representative per member university, serving as the liaison between their institution and the conference organization.",
    "tur.list.title": "Available activities",
    "tur.list.intro":
      "Tourist attractions in San Carlos and La Fortuna. Rates are reference prices: confirm schedules, pricing and bookings directly with each operator.",
    "tur.card.category": "Type",
    "tur.card.price": "Rate",
    "tur.card.hours": "Hours",
    "tur.card.travel": "from the TEC",
    "tur.card.details": "+ more information",
    "tur.label.description": "Description",
    "tur.label.duration": "Estimated duration",
    "tur.label.email": "Email",
    "tur.label.website": "Website",
    "tur.card.map": "Get directions",
    "areas.general.title": "General areas of interest",
    "areas.general.intro":
      "Since their creation, COMPDES conferences have served as a forum for presenting and discussing work in Computer Science, Information Technology, and related fields:",
    "areas.tracks.title": "Priority thematic tracks",
    "areas.tracks.intro":
      "For this edition, papers connected to the following tracks will be especially welcome. Explore the tree and open each module to see its subtopics.",
    "areas.explorer.hint": "$ select a module from the tree",
    "pageheader.desc.areas":
      "The thematic axes of the 20th COMPDES Conference: the classic general areas and this edition's priority tracks, ready to explore module by module.",

    // Schedule
    "cron.dates.eyebrow": "key dates",
    "cron.dates.title": "Important dates",
    "cron.dates.intro":
      "The official conference calendar. Dates that are not yet defined will be announced here and on the official COMPDES network social media.",
    "cron.dates.term": "[ key_dates ]",
    "cron.status.confirmed": "confirmed",
    "cron.status.tbd": "to be announced",
    "cron.program.eyebrow": "program",
    "cron.program.title": "Day-by-day program",
    "cron.program.intro":
      "Three days of activities: keynotes, technical sessions, workshops, breaks, and ceremonies. Select a day to view its schedule.",
    "cron.program.tabsAria": "Select conference day",
    "cron.agenda.eyebrow": "talks",
    "cron.agenda.title": "Talk agenda",
    "cron.agenda.intro":
      "Details for each presentation: title, authors, time, and room. Use the search box to filter by talk title or author names.",
    "cron.search.label": "grep_talks",
    "cron.search.placeholder": "Search by title or author…",
    "cron.search.results": "talk(s) found",
    "cron.search.emptyTitle": "No results",
    "cron.search.emptyHint": "Try another term or check the spelling.",
    "cron.kind.keynote": "keynote",
    "cron.kind.session": "technical session",
    "cron.kind.workshop": "workshop",
    "cron.kind.break": "coffee break",
    "cron.kind.lunch": "lunch",
    "cron.kind.ceremony": "ceremony",
    "cron.kind.activity": "activity",
    "cron.talk.type.keynote": "keynote",
    "cron.talk.type.talk": "talk",
    "cron.talk.type.workshop": "workshop",

    // Navigation
    "nav.home": "Home",
    "nav.inscripcion": "Registration",
    "nav.areas": "Areas of interest",
    "nav.cronograma": "Schedule",
    "nav.hospedaje": "Accommodation",
    "nav.turismo": "Tourism",
    "nav.organizacion": "Organization",
    "nav.patrocinadores": "Sponsors",

    // Footer
    "footer.tagline": "Academic and technology conference — San Carlos Campus.",
    "footer.copyright": "© 2027 COMPDES — All rights reserved",

    // Hero
    "hero.eyebrow": "Costa Rica Institute of Technology · San Carlos Campus",
    "hero.title": "COMPDES 2027",
    "hero.lede":
      "Science, technology and academia from the heart of Costa Rica’s northern region.",
    "hero.cta.cronograma": "View schedule",
    "hero.cta.inscripcion": "Registration",
    "hero.scrollAria": "Scroll to the next section",

    // Home sections
    // What is COMPDES?
    "home.about.eyebrow": "Welcome",
    "home.about.title": "What is COMPDES?",
    "home.about.intro":
      '<a href="https://compdes.org" target="_blank" rel="noopener noreferrer" class="underline hover:text-accent" style="font-weight: bold;">COMPDES</a> \
      is an Ibero-American network made up of public universities from Costa Rica, El Salvador, Spain, Guatemala, \
      Honduras, and Nicaragua. Its purpose is to promote the exchange of knowledge, experiences, and initiatives among \
      students, professionals, faculty members, and researchers involved in the use of computing and information and \
      communication technologies to support the development of their countries and the region.\
      <br /><br />Its main activity is the \
      <a href="https://compdes.org/#conferences" target="_blank" rel="noopener noreferrer" class="underline hover:text-accent" style="font-weight: bold;">COMPDES Conference</a> \
      , an annual event organized by one of the Network’s member universities.',
    // General information
    "home.info.eyebrow": "Information",
    "home.info.title": "General information",
    "home.info.intro":
      "The <strong>20th Ibero-American Conference on Computing for Development — COMPDES2027 —</strong> will \
      take place from July 21 to 23, 2027, organized by the Costa Rica Institute of Technology (San Carlos Campus) \
      as part of the COMPDES NETWORK’s activities. The event will be held in the canton of San Carlos, Costa Rica, in the \
      district of Santa Clara.<br /><br />In addition, this edition will mark a historic milestone: for the first time, \
      its publications will be indexed in <strong>IEEE</strong>.",
    // IEEE
    "home.ieee.eyebrow": "Publications",
    "home.ieee.title": "For the first time: indexed in IEEE",
    "home.ieee.intro":
      "In its 2027 edition, the COMPDES Conference reaches a historic milestone: for the first time in the network's \
      history, accepted papers will receive international publication and indexing through <strong>IEEE</strong>, the \
      world's largest professional association in engineering and computing.",
    "home.ieee.badge": "first time",
    "home.ieee.card.what.title": "What does indexing mean?",
    "home.ieee.card.what.body":
      "Accepted articles are published in the conference proceedings and registered in <strong>IEEE Xplore</strong>, \
      the world's reference digital library in engineering and computing, where they can be found and cited by \
      researchers everywhere.",
    "home.ieee.card.milestone.title": "A milestone for the COMPDES network",
    "home.ieee.card.milestone.body":
      "Since its earliest editions, the conference has been an open space for computing for development. This is the \
      first time its publications reach international indexing: a quality leap for authors, institutions, and the \
      entire network.",
    "home.ieee.card.authors.title": "What do authors gain?",
    "home.ieee.card.authors.body":
      "Publishing at COMPDES 2027 means international visibility, a formal record of your work, and the credibility of \
      an editorial process backed by IEEE. An ideal opportunity for students, faculty, and researchers across the \
      region.",
    "home.ieee.term.cmd": "compdes2027 --publication-status",
    "home.ieee.term.line1": "[ ok ] international indexing .......... IEEE",
    "home.ieee.term.line2": "[ ok ] digital library ................. IEEE Xplore",
    "home.ieee.term.line3": "[ ok ] reach ........................... visible and citable worldwide",
    "home.ieee.term.line4": "[ >> ] status .......................... historic_milestone // first_time_in_network",
    // Call for Papers — official IEEE notice (translated only via its own toggle)
    "home.cfp.eyebrow": "call_for_papers",
    "home.cfp.title": "Call for Papers: submit your work",
    "home.cfp.intro":
      "Official publication and IEEE Xplore indexing notice. The statement below is shown in English just as the conference publishes it; use the switch at the foot of the record to translate it.",
    "home.cfp.statement":
      "Accepted papers will be submitted for inclusion into <strong>IEEE Xplore Digital Library</strong> according to conference <span class=\"text-compdes-yellow\">#63158</span>, <strong>2024 6th International Conference on BioInspired Processing (BIP)</strong>, subject to meeting <strong>IEEE Xplore's</strong> scope and quality requirements.",
    "home.contact.eyebrow": "Contact",
    "home.contact.title": "Get in touch",
    "home.contact.email": "Email",
    "home.contact.phone": "Phone",
    "home.contact.social": "Social media",
    "home.contact.emailValue": "compdes2027@example.com",
    "home.contact.phoneValue": "+506 9999 9999",
    "home.contact.socialValue":
      "@compdes2027 on Facebook, X (Twitter) and Instagram",
    // Location — San Carlos
    "home.location.eyebrow": "Location",
    "home.location.title": "San Carlos, Costa Rica",
    "home.location.intro":
      "The conference venue lies in the heart of Costa Rica's northern region: a land of plains, rivers and volcanoes, \
      and the country's most productive farmland.",
    "home.location.body.sancarlos":
      "San Carlos is the largest canton in Costa Rica and one of the country's agricultural powerhouses: land of dairy \
      farms and cheese, pineapple, sugarcane, cattle and grains. It is also the gateway to Arenal Volcano and La \
      Fortuna, two of the country's natural icons.",
    "home.location.fact.size": "The country's largest canton",
    "home.location.fact.agro": "Agricultural heartland: dairy, pineapple and beef",
    "home.location.fact.arenal": "Home of Arenal Volcano",
    "home.location.fact.tec": "TEC campus in Santa Clara",
    "home.location.body.tec.title": "TEC · San Carlos Campus",
    "home.location.body.tec":
      "The conference will be held at the San Carlos Technology Campus of the Costa Rica Institute of Technology (TEC), \
      located in the district of Santa Clara, 18 km north of Ciudad Quesada. Its 35,500 m² campus brings together \
      classrooms, laboratories, a library, student residences and the CTEC center, an academic and technology hub for \
      the region.",
    "home.location.map.cta": "Open in Google Maps",

    // Page titles
    "page.title.home": "COMPDES 2027 — Home",
    "page.title.inscripcion": "COMPDES 2027 — Registration and participation",
    "page.title.areas": "COMPDES 2027 — Areas of interest",
    "page.title.cronograma": "COMPDES 2027 — Schedule",
    "page.title.hospedaje": "COMPDES 2027 — Accommodation",
    "page.title.turismo": "COMPDES 2027 — Tourism",
    "page.title.organizacion": "COMPDES 2027 — Organization",
    "page.title.patrocinadores": "COMPDES 2027 — Sponsors",

    // Meta descriptions
    "meta.desc.home":
      "COMPDES 2027 conference at Costa Rica Institute of Technology, San Carlos Campus: science, technology and academia.",
    "meta.desc.inscripcion":
      "Registration and participation options for the COMPDES 2027 conference.",
    "meta.desc.areas":
      "Areas of interest and thematic tracks of the COMPDES 2027 conference.",
    "meta.desc.cronograma":
      "Important dates and program of the COMPDES 2027 conference.",
    "meta.desc.hospedaje":
      "Accommodation options for COMPDES 2027 attendees in San Carlos.",
    "hosp.list.title": "Available hotels",
    "hosp.list.intro":
      "<strong>In preparation:</strong> this section will keep being updated soon with more accommodation information. In the meantime, these are the hotels in Ciudad Quesada and surroundings; rates are reference prices per night, so confirm availability and final pricing directly with each hotel.",
    "hosp.card.travel": "from the TEC",
    "hosp.card.rooms": "Rooms",
    "hosp.price.perNight": "/ night",
    "hosp.card.details": "+ more information",
    "hosp.label.email": "Email",
    "hosp.label.address": "Address",
    "hosp.label.amenities": "Amenities",
    "hosp.label.payment": "Payment methods",
    "hosp.label.cancellation": "Cancellation policy",
    "hosp.label.notes": "Notes",
    "meta.desc.turismo":
      "Tourism and activities in the San Carlos region during COMPDES 2027.",
    "meta.desc.organizacion":
      "Organizing committee of the COMPDES 2027 conference.",
    "meta.desc.patrocinadores":
      "Sponsoring and partner institutions of the COMPDES 2027 conference.",
  },
} as const;

export type UiKey = keyof (typeof ui)["es"];

/** Translation helper for server-side rendering. */
export function useTranslations(lang: string) {
  const dict =
    (ui as Record<string, Record<UiKey, string>>)[lang] ?? ui[defaultLang];
  return function t(key: UiKey): string {
    return dict[key] ?? ui[defaultLang][key];
  };
}

/** Base path del despliegue ('/compdes2027' en producción, '/' o '' en local sin base). */
const BASE = (import.meta.env.BASE_URL ?? "").replace(/\/+$/, "");

function stripBase(pathname: string): string {
  if (!BASE) return pathname;
  const bare = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  return bare === "" ? "/" : bare;
}

function withBase(path: string): string {
  return BASE ? `${BASE}${path}` : path;
}

/** Resolve the current locale from a URL path ('/en/...' -> 'en', else 'es'). */
export function getLangFromUrl(pathname: string): "es" | "en" {
  return stripBase(pathname).startsWith("/en") ? "en" : "es";
}

/**
 * Return the same path in the given language. Works whether the input is the
 * Spanish path (no prefix) or the English path (/en prefix), always including
 * the deployment base (/compdes2027) when one is configured.
 */
export function localizedUrl(pathname: string, lang: "es" | "en"): string {
  const p = stripBase(pathname);
  const normalized =
    p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
  const stripped = normalized.replace(/^\/en(?=\/|$)/, "");
  const esUrl = stripped === "" ? "/" : stripped;
  const out = lang === "es" ? esUrl : esUrl === "/" ? "/en" : `/en${esUrl}`;
  return withBase(out);
}
