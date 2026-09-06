/**
 * COMPDES 2027 — Datos del cronograma.
 *
 * ESTE ARCHIVO ES LA ÚNICA FUENTE DE VERDAD del programa académico.
 * Para actualizar el contenido NO hay que tocar ningún componente:
 * edita únicamente los objetos de abajo y vuelve a construir el sitio.
 *
 * Reglas:
 *  - Todo texto visible va como par bilingüe { es: '...', en: '...' }.
 *  - `start` / `end` usan formato 24 h ("08:30").
 *  - Una fecha sin definir se representa omitiendo `date` (muestra "por anunciar").
 */

export interface LocalText {
  es: string;
  en: string;
}

export type DayId = 'miercoles' | 'jueves' | 'viernes';

/** Tipos de bloque del programa diario. */
export type SlotKind =
  | 'keynote'
  | 'session'
  | 'workshop'
  | 'break'
  | 'lunch'
  | 'ceremony'
  | 'activity';

export interface ScheduleSlot {
  start: string;
  end: string;
  title: LocalText;
  kind: SlotKind;
}

export interface ScheduleDay {
  id: DayId;
  /** Etiqueta larga para la pestaña, ej. "Miércoles". */
  label: LocalText;
  /** Fecha corta, ej. "21 de julio". */
  date: LocalText;
  slots: ScheduleSlot[];
}

/** Tipos de ponencia en la agenda detallada. */
export type TalkType = 'keynote' | 'talk' | 'workshop';

export interface Talk {
  id: string;
  type: TalkType;
  title: LocalText;
  authors: string[];
  affiliation: string;
  day: DayId;
  start: string;
  end: string;
  room: string;
}

export interface KeyDate {
  id: string;
  label: LocalText;
  /** Tipo de aviso: define el color en la lista de fechas clave. */
  type: DateKind;
  /** Fecha en texto libre; omítela mientras no esté definida. */
  date?: LocalText;
  note?: LocalText;
}

/** Categoría del aviso: apertura (verde), fecha límite (rojo),
    notificación (amarillo) o congreso (neutro). */
export type DateKind = 'apertura' | 'limite' | 'notificacion' | 'congreso';

/* =========================================================================
   1) FECHAS CLAVE
   ========================================================================= */

export const keyDates: KeyDate[] = [
  {
    id: 'apertura',
    type: 'apertura',
    label: {
      es: 'Apertura de la recepción de papers y talleres',
      en: 'Opening of paper and workshop submissions',
    },
    date: {
      es: '10 de marzo de 2027',
      en: 'March 10, 2027',
    },
    note: {
      es: 'Se publicará el formulario y las normas de envío.',
      en: 'The submission form and guidelines will be published.',
    },
  },
  {
    id: 'limite',
    type: 'limite',
    label: {
      es: 'Fecha límite de recepción de papers y talleres',
      en: 'Deadline for paper and workshop submissions',
    },
    date: {
      es: '31 de marzo de 2027',
      en: 'March 31, 2027',
    },
  },
  {
    id: 'aceptacion',
    type: 'notificacion',
    label: {
      es: 'Notificación de aceptación de papers y talleres',
      en: 'Acceptance notification for papers and workshops',
    },
    date: {
      es: '30 de abril de 2027',
      en: 'April 30, 2027',
    },
  },
  {
    id: 'version-final',
    type: 'limite',
    label: {
      es: 'Envío de la versión final (camera-ready)',
      en: 'Camera-ready version submission',
    },
    date: {
      es: '10 — 30 de mayo de 2027',
      en: 'May 10 — 30, 2027',
    },
  },
  {
    id: 'congreso',
    type: 'congreso',
    label: {
      es: 'XX Congreso Iberoamericano COMPDES 2027',
      en: '20th Ibero-American COMPDES 2027 Conference',
    },
    date: {
      es: '21 — 23 de julio de 2027',
      en: 'July 21 — 23, 2027',
    },
    note: {
      es: 'TEC, Sede San Carlos · Santa Clara, Costa Rica.',
      en: 'TEC, San Carlos Campus · Santa Clara, Costa Rica.',
    },
  },
];

/* =========================================================================
   2) PROGRAMA POR DÍA
   ========================================================================= */

export const scheduleDays: ScheduleDay[] = [
  {
    id: 'miercoles',
    label: { es: 'Miércoles', en: 'Wednesday' },
    date: { es: '21 de julio', en: 'July 21' },
    slots: [
      {
        start: '08:00',
        end: '09:00',
        kind: 'activity',
        title: { es: 'Registro y bienvenida', en: 'Registration and welcome' },
      },
      {
        start: '09:00',
        end: '10:00',
        kind: 'ceremony',
        title: { es: 'Ceremonia de inauguración', en: 'Opening ceremony' },
      },
      {
        start: '10:00',
        end: '11:00',
        kind: 'keynote',
        title: {
          es: 'Ponencia magistral de apertura',
          en: 'Opening keynote',
        },
      },
      {
        start: '11:00',
        end: '11:30',
        kind: 'break',
        title: { es: 'Pausa café', en: 'Coffee break' },
      },
      {
        start: '11:30',
        end: '13:00',
        kind: 'session',
        title: { es: 'Sesiones técnicas — bloque I', en: 'Technical sessions — block I' },
      },
      {
        start: '13:00',
        end: '14:30',
        kind: 'lunch',
        title: { es: 'Almuerzo', en: 'Lunch' },
      },
      {
        start: '14:30',
        end: '16:00',
        kind: 'workshop',
        title: { es: 'Talleres — bloque I', en: 'Workshops — block I' },
      },
      {
        start: '16:00',
        end: '16:30',
        kind: 'break',
        title: { es: 'Pausa café', en: 'Coffee break' },
      },
      {
        start: '16:30',
        end: '18:00',
        kind: 'session',
        title: { es: 'Sesiones técnicas — bloque II', en: 'Technical sessions — block II' },
      },
    ],
  },
  {
    id: 'jueves',
    label: { es: 'Jueves', en: 'Thursday' },
    date: { es: '22 de julio', en: 'July 22' },
    slots: [
      {
        start: '08:30',
        end: '09:30',
        kind: 'keynote',
        title: { es: 'Ponencia magistral', en: 'Keynote' },
      },
      {
        start: '09:30',
        end: '11:00',
        kind: 'session',
        title: { es: 'Sesiones técnicas — bloque III', en: 'Technical sessions — block III' },
      },
      {
        start: '11:00',
        end: '11:30',
        kind: 'break',
        title: { es: 'Pausa café', en: 'Coffee break' },
      },
      {
        start: '11:30',
        end: '13:00',
        kind: 'workshop',
        title: { es: 'Talleres — bloque II', en: 'Workshops — block II' },
      },
      {
        start: '13:00',
        end: '14:30',
        kind: 'lunch',
        title: { es: 'Almuerzo', en: 'Lunch' },
      },
      {
        start: '14:30',
        end: '16:00',
        kind: 'session',
        title: { es: 'Mesa redonda con la red COMPDES', en: 'Round table with the COMPDES network' },
      },
      {
        start: '16:00',
        end: '16:30',
        kind: 'break',
        title: { es: 'Pausa café', en: 'Coffee break' },
      },
      {
        start: '16:30',
        end: '18:00',
        kind: 'session',
        title: { es: 'Sesiones técnicas — bloque IV', en: 'Technical sessions — block IV' },
      },
      {
        start: '19:00',
        end: '21:00',
        kind: 'ceremony',
        title: { es: 'Cena de gala', en: 'Gala dinner' },
      },
    ],
  },
  {
    id: 'viernes',
    label: { es: 'Viernes', en: 'Friday' },
    date: { es: '23 de julio', en: 'July 23' },
    slots: [
      {
        start: '08:30',
        end: '09:30',
        kind: 'keynote',
        title: { es: 'Ponencia magistral', en: 'Keynote' },
      },
      {
        start: '09:30',
        end: '11:00',
        kind: 'session',
        title: { es: 'Sesiones técnicas — bloque V', en: 'Technical sessions — block V' },
      },
      {
        start: '11:00',
        end: '11:30',
        kind: 'break',
        title: { es: 'Pausa café', en: 'Coffee break' },
      },
      {
        start: '11:30',
        end: '13:00',
        kind: 'session',
        title: { es: 'Sesiones técnicas — bloque VI', en: 'Technical sessions — block VI' },
      },
      {
        start: '13:00',
        end: '14:30',
        kind: 'lunch',
        title: { es: 'Almuerzo', en: 'Lunch' },
      },
      {
        start: '14:30',
        end: '15:30',
        kind: 'session',
        title: { es: 'Asamblea de la RED COMPDES', en: 'COMPDES network assembly' },
      },
      {
        start: '15:30',
        end: '16:00',
        kind: 'break',
        title: { es: 'Pausa café', en: 'Coffee break' },
      },
      {
        start: '16:00',
        end: '17:30',
        kind: 'ceremony',
        title: {
          es: 'Ceremonia de clausura y entrega de reconocimientos',
          en: 'Closing ceremony and awards',
        },
      },
    ],
  },
];

/* =========================================================================
   3) AGENDA DE PONENCIAS
   NOTA: los datos actuales son de ejemplo; reemplázalos por el programa real.
   ========================================================================= */

export const talks: Talk[] = [
  {
    id: 'keynote-1',
    type: 'keynote',
    title: {
      es: 'Computación sostenible para el desarrollo regional',
      en: 'Sustainable computing for regional development',
    },
    authors: ['Dra. María Fernanda López'],
    affiliation: 'Universidad de Costa Rica (UCR)',
    day: 'miercoles',
    start: '10:00',
    end: '11:00',
    room: 'Auditorio CTEC',
  },
  {
    id: 'talk-1',
    type: 'talk',
    title: {
      es: 'Telemetría de bajo costo para el monitoreo de cultivos en zonas rurales',
      en: 'Low-cost telemetry for crop monitoring in rural areas',
    },
    authors: ['Ing. José Andrés Mendoza', 'Lic. Karla Ruiz'],
    affiliation: 'Instituto Tecnológico de Costa Rica (TEC)',
    day: 'miercoles',
    start: '11:30',
    end: '12:10',
    room: 'Sala 1',
  },
  {
    id: 'talk-2',
    type: 'talk',
    title: {
      es: 'Plataformas de telemedicina para comunidades alejadas',
      en: 'Telemedicine platforms for remote communities',
    },
    authors: ['Dra. Ana Cecilia Ramírez'],
    affiliation: 'Universidad Nacional Autónoma de Honduras (UNAH)',
    day: 'miercoles',
    start: '12:20',
    end: '13:00',
    room: 'Sala 2',
  },
  {
    id: 'workshop-1',
    type: 'workshop',
    title: {
      es: 'Taller: prototipado rápido de APIs con herramientas abiertas',
      en: 'Workshop: rapid API prototyping with open tools',
    },
    authors: ['MSc. Luis Diego Salazar'],
    affiliation: 'Instituto Tecnológico de Costa Rica (TEC)',
    day: 'miercoles',
    start: '14:30',
    end: '16:00',
    room: 'Laboratorio de Cómputo 2',
  },
  {
    id: 'keynote-2',
    type: 'keynote',
    title: {
      es: 'Inteligencia artificial aplicada a la educación pública',
      en: 'Artificial intelligence applied to public education',
    },
    authors: ['Dr. Ernesto Castillo'],
    affiliation: 'Universidad de El Salvador (UES)',
    day: 'jueves',
    start: '08:30',
    end: '09:30',
    room: 'Auditorio CTEC',
  },
  {
    id: 'talk-3',
    type: 'talk',
    title: {
      es: 'Sistemas de información geográfica para la gestión de riesgos climáticos',
      en: 'Geographic information systems for climate risk management',
    },
    authors: ['Ing. Sofía Hernández', 'MSc. Pablo Zeledón'],
    affiliation: 'Universidad Nacional de Costa Rica (UNA)',
    day: 'jueves',
    start: '09:30',
    end: '10:10',
    room: 'Sala 1',
  },
  {
    id: 'talk-4',
    type: 'talk',
    title: {
      es: 'Gobierno electrónico local: lecciones desde municipios rurales',
      en: 'Local e-government: lessons from rural municipalities',
    },
    authors: ['MSc. Gabriela Ortiz'],
    affiliation: 'Universidad de San Carlos de Guatemala (USAC)',
    day: 'jueves',
    start: '10:20',
    end: '11:00',
    room: 'Sala 2',
  },
  {
    id: 'workshop-2',
    type: 'workshop',
    title: {
      es: 'Taller: ciencia de datos reproducible con cuadernos interactivos',
      en: 'Workshop: reproducible data science with interactive notebooks',
    },
    authors: ['Dra. Valeria Campos'],
    affiliation: 'Universidad Nacional de Ingeniería (Nicaragua)',
    day: 'jueves',
    start: '11:30',
    end: '13:00',
    room: 'Laboratorio de Cómputo 1',
  },
  {
    id: 'keynote-3',
    type: 'keynote',
    title: {
      es: 'Brecha digital e inclusión: retos pendientes en Iberoamérica',
      en: 'Digital divide and inclusion: pending challenges in Ibero-America',
    },
    authors: ['Dr. Ricardo Alvarado'],
    affiliation: 'Universidad Pública de Navarra (España)',
    day: 'viernes',
    start: '08:30',
    end: '09:30',
    room: 'Auditorio CTEC',
  },
  {
    id: 'talk-5',
    type: 'talk',
    title: {
      es: 'Software libre para la trazabilidad ganadera en la zona norte',
      en: 'Free software for livestock traceability in the northern zone',
    },
    authors: ['Ing. Marco Tulio Reyes', 'Bach. Laura Solano'],
    affiliation: 'Universidad Nacional Agraria (Nicaragua)',
    day: 'viernes',
    start: '09:30',
    end: '10:10',
    room: 'Sala 1',
  },
  {
    id: 'talk-6',
    type: 'talk',
    title: {
      es: 'Aulas virtuales accesibles para estudiantes con discapacidad visual',
      en: 'Accessible virtual classrooms for visually impaired students',
    },
    authors: ['MSc. Daniela Fuentes'],
    affiliation: 'Universidad de El Salvador (UES)',
    day: 'viernes',
    start: '10:20',
    end: '11:00',
    room: 'Sala 2',
  },
];

/** Normaliza texto para el buscador: minúsculas y sin tildes. */
export function normalizeForSearch(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}
