/**
 * COMPDES 2027 — Datos de turismo y actividades.
 *
 * ESTE ARCHIVO ES LA ÚNICA FUENTE DE VERDAD de la sección "Turismo".
 * Para actualizar el contenido NO hay que tocar ningún componente:
 * edita únicamente los objetos de abajo y vuelve a construir el sitio.
 *
 * Reglas:
 *  - Todo texto visible va como par bilingüe { es: '...', en: '...' }.
 *  - Nombres propios, direcciones, correos y teléfonos no se traducen.
 *  - `price` es un resumen legible de las tarifas; `description` detalla
 *    a quién aplica cada tarifa.
 *  - `travelTime` es el tiempo estimado en vehículo desde la sede del
 *    congreso (Santa Clara, San Carlos).
 *  - `image` es opcional y apunta a un archivo dentro de `src/assets/`,
 *    para aprovechar el pipeline de imágenes de Astro (<Image />).
 */

import type { LocalText } from './types';

export interface Activity {
  id: string;
  name: string;
  /** Tipo de atractivo, ej. "Puentes colgantes". */
  category: LocalText;
  description: LocalText;
  /** Resumen de tarifas de referencia. */
  price: LocalText;
  hours: LocalText;
  duration: LocalText;
  travelTime: LocalText;
  phone?: string;
  email?: string;
  address: string;
  website?: string;
  /** Enlace directo a Google Maps. */
  mapsUrl?: string;
  /** Imagen representativa dentro de src/assets (webp recomendado). */
  image?: string;
}

export const actividades: Activity[] = [
  {
    id: 'mystico-park',
    image: '/assets/images/actividades/mistico_park.webp',
    name: 'Mystico Park',
    category: { es: 'Puentes colgantes', en: 'Hanging bridges' },
    description: {
      es: 'Para nacionales: $21 sin guía y $36 con guía. Para extranjeros: $40 en la mañana y $35 en la tarde.',
      en: 'For residents: $21 without a guide and $36 with a guide. For foreign visitors: $40 in the morning and $35 in the afternoon.',
    },
    price: { es: '$21 – $40 por persona', en: '$21 – $40 per person' },
    hours: { es: '7:00 am a 9:30 pm', en: '7:00 am to 9:30 pm' },
    duration: { es: 'Entre 2 y 3 horas', en: '2 to 3 hours' },
    travelTime: { es: '1 h 12 min', en: '1 h 12 min' },
    phone: '+506 2479-8282',
    email: 'info@misticopark.com',
    address:
      '2 km este de la represa del Lago Arenal, La Fortuna, Provincia de Alajuela, La Fortuna, 21007',
    website: 'https://www.misticopark.com/',
    mapsUrl: 'https://maps.app.goo.gl/QCgmLui48M4bLJuw5',
  },
  {
    id: 'pn-volcan-arenal',
    image: '/assets/images/actividades/volcan_arenal.webp',
    name: 'Parque Nacional del Volcán Arenal',
    category: {
      es: 'Aventura y caminatas por la naturaleza',
      en: 'Adventure and nature hikes',
    },
    description: {
      es: 'Caminatas por los senderos y el mirador.',
      en: 'Hikes along the trails and the viewpoint.',
    },
    price: { es: '₡1 500 por persona', en: 'CRC 1,500 per person' },
    hours: { es: '8:00 am a 4:00 pm', en: '8:00 am to 4:00 pm' },
    duration: { es: 'Entre 3 y 4 horas', en: '3 to 4 hours' },
    travelTime: { es: '1 h 10 min', en: '1 h 10 min' },
    phone: '+506 2200-4192',
    email: 'acahn.pnvolcanarenal@sinac.go.cr',
    address: 'Provincia de Alajuela, El Castillo, Fortuna',
    website: 'https://www.sinac.go.cr/ES/ac/ACAHN/pnva/Paginas/default.aspx',
    mapsUrl: 'https://maps.app.goo.gl/ysHJYvrUgHY8eMZQ7',
  },
  {
    id: 'termales-laureles',
    image: '/assets/images/actividades/laureles.webp',
    name: 'Termales Los Laureles',
    category: { es: 'Piscinas termales', en: 'Thermal pools' },
    description: {
      es: 'El canopy junto con las piscinas cuesta ₡1 000 adicional.',
      en: 'The zipline together with the pools costs an additional CRC 1,000.',
    },
    price: { es: '₡5 000 por persona', en: 'CRC 5,000 per person' },
    hours: { es: '8:00 am a 8:00 pm', en: '8:00 am to 8:00 pm' },
    duration: { es: 'A elección del visitante', en: 'Up to the visitor' },
    travelTime: { es: '1 h', en: '1 hr' },
    phone: '+506 4020-1600',
    email: 'experiencia@termaleslaureles.com',
    address: 'Provincia de Alajuela, San Carlos',
    website: 'https://www.instagram.com/termaleslaureles',
    mapsUrl: 'https://maps.app.goo.gl/94y63PV799T1ZoN78',
  },
  {
    id: 'termales-kalambu',
    image: '/assets/images/actividades/kalambu.webp',
    name: 'Termales Kalambu',
    category: { es: 'Toboganes acuáticos', en: 'Water slides' },
    description: { es: 'Piscinas y canopy.', en: 'Pools and zipline.' },
    price: { es: '₡8 000 por persona', en: 'CRC 8,000 per person' },
    hours: { es: '9:00 am a 9:00 pm', en: '9:00 am to 9:00 pm' },
    duration: { es: 'A elección del visitante', en: 'Up to the visitor' },
    travelTime: { es: '55 min', en: '55 min' },
    phone: '+506 2479-0170',
    email: 'info@kalambu.com',
    address:
      'Frente a Baldi, del centro de La Fortuna, 4 km carretera al volcán, Provincia de Alajuela, La Fortuna, 21007',
    website: 'https://www.kalambu.com/',
    mapsUrl: 'https://maps.app.goo.gl/7YJ6WXSHaNVWBnj58',
  },
  {
    id: 'termalitas-el-arenal',
    image: '/assets/images/actividades/termales_del_arenal.webp',
    name: 'Termalitas El Arenal',
    category: {
      es: 'Piscinas con vista al volcán',
      en: 'Pools with volcano view',
    },
    description: { es: 'Piscinas termales.', en: 'Thermal pools.' },
    price: { es: '₡4 500 por persona', en: 'CRC 4,500 per person' },
    hours: { es: '9:00 am a 9:00 pm', en: '9:00 am to 9:00 pm' },
    duration: { es: 'A elección del visitante', en: 'Up to the visitor' },
    travelTime: { es: '50 min', en: '50 min' },
    phone: '+506 8740-4000',
    email: 'termalesdelarenal@gmail.com',
    address: 'Provincia de Alajuela, San Carlos',
    website: 'http://termalesdelarenal.com/',
    mapsUrl: 'https://maps.app.goo.gl/E8KfrRuCs4QtTZ1t8',
  },
  {
    id: 'baldi',
    image: '/assets/images/actividades/mistico_park.webp',
    name: 'Baldi Hot Springs',
    category: { es: 'Aguas termales y spa', en: 'Hot springs and spa' },
    description: { es: 'Piscinas termales.', en: 'Thermal pools.' },
    price: { es: '₡20 000 por persona', en: 'CRC 20,000 per person' },
    hours: { es: '9:00 am a 10:00 pm', en: '9:00 am to 10:00 pm' },
    duration: { es: 'A elección del visitante', en: 'Up to the visitor' },
    travelTime: { es: '51 min', en: '51 min' },
    phone: '+506 2479-2190',
    address: 'Provincia de Alajuela, San Carlos',
    website: 'https://www.baldihotsprings.cr/',
    mapsUrl: 'https://maps.app.goo.gl/8uSUALk7bj6mrETY6',
  },
  {
    id: 'arenal-observatory-lodge',
    image: '/assets/images/actividades/mistico_park.webp',
    name: "Arenal Observatory Lodge & Trails",
    category: { es: 'Senderos y vistas', en: 'Trails and viewpoints' },
    description: {
      es: 'Senderos y cataratas por ₡20 000 con almuerzo incluido.',
      en: 'Trails and waterfalls for CRC 20,000, lunch included.',
    },
    price: { es: '₡20 000 · almuerzo incluido', en: 'CRC 20,000 · lunch included' },
    hours: { es: '7:00 am a 10:00 pm', en: '7:00 am to 10:00 pm' },
    duration: { es: 'Entre 1 y 2 horas', en: '1 to 2 hours' },
    travelTime: { es: '1 h 20 min', en: '1 h 20 min' },
    phone: '+506 2290-7011',
    email: 'info@arenalobservatorylodge.com',
    address:
      '7 km sureste del Parque Nacional Volcán Arenal, Provincia de Alajuela, San Carlos, 21007',
    website: 'https://www.arenalobservatorylodge.com/',
    mapsUrl: 'https://maps.app.goo.gl/YX78NfXpWRbZUCMKA',
  },
  {
    id: 'sky-adventures',
    image: '/assets/images/actividades/mistico_park.webp',
    name: 'Sky Adventures',
    category: {
      es: 'Canopy y caminatas sobre la copa de los árboles',
      en: 'Zipline and treetop walks',
    },
    description: {
      es: 'Por persona: canopy $93, teleférico $51 y puentes colgantes $41; el combo con las 3 actividades cuesta $115.',
      en: 'Per person: zipline $93, aerial tram $51 and hanging bridges $41; the combo with all 3 activities costs $115.',
    },
    price: { es: '$41 – $115 por persona', en: '$41 – $115 per person' },
    hours: { es: '8:00 am a 3:15 pm', en: '8:00 am to 3:15 pm' },
    duration: { es: 'Entre 2 y 3 horas', en: '2 to 3 hours' },
    travelTime: { es: '1 h 20 min', en: '1 h 20 min' },
    phone: '+506 2479-4100',
    email: 'explore@skyadventures.travel',
    address: 'Provincia de Alajuela, La Fortuna, 21007',
    website: 'https://www.instagram.com/skyadventurescr',
    mapsUrl: 'https://maps.app.goo.gl/jjgeNimAHF4KjhmH8',
  },
  {
    id: 'mundo-de-perezosos',
    image: '/assets/images/actividades/mistico_park.webp',
    name: 'Tour Mundo de Perezosos',
    category: { es: 'Ecoturismo y vida silvestre', en: 'Ecotourism and wildlife' },
    description: {
      es: 'Tour guiado para observar animales.',
      en: 'Guided tour to observe animals.',
    },
    price: { es: '₡10 000 por persona', en: 'CRC 10,000 per person' },
    hours: { es: '8:00 am a 6:00 pm', en: '8:00 am to 6:00 pm' },
    duration: { es: 'Entre 1.5 y 2 horas', en: '1.5 to 2 hours' },
    travelTime: { es: '40 min', en: '40 min' },
    phone: '+506 8780-4312',
    email: 'info@mundodeperezosos.com',
    address: 'Provincia de Alajuela, La Fortuna, 21007',
    website: 'http://www.mundodeperezosos.com/',
    mapsUrl: 'https://maps.app.goo.gl/CQGANjBYdR6fxyddA',
  },
  {
    id: 'don-juan-tours',
    image: '/assets/images/actividades/mistico_park.webp',
    name: 'Don Juan Chocolate and Coffee Tours Arenal',
    category: { es: 'Gastronomía y cultura', en: 'Gastronomy and culture' },
    description: {
      es: '₡22 500 tour de café y chocolate; ₡25 000 caminata nocturna con chocolate.',
      en: 'CRC 22,500 coffee-and-chocolate tour; CRC 25,000 night walk with chocolate.',
    },
    price: { es: '₡22 500 – ₡25 000 por persona', en: 'CRC 22,500 – CRC 25,000 per person' },
    hours: { es: '8:00 am a 9:00 pm', en: '8:00 am to 9:00 pm' },
    duration: { es: '2 horas', en: '2 hours' },
    travelTime: { es: '45 min', en: '45 min' },
    phone: '+506 4000-0826',
    email: 'reservas@donjuantoursarenal.com',
    address: 'Av. 351, Provincia de Alajuela, La Fortuna, 21007',
    website: 'http://www.donjuantoursarenal.com/',
    mapsUrl: 'https://maps.app.goo.gl/a5spjcbHLE1eziqC7',
  },
  {
    id: 'rainforest-chocolate-tour',
    image: '/assets/images/actividades/mistico_park.webp',
    name: 'Rainforest Chocolate Tour',
    category: {
      es: 'Historia, cultura y tradición del cacao',
      en: 'Cocoa history, culture and tradition',
    },
    description: {
      es: '₡6 000 nacionales y ₡11 500 extranjeros. Caminata de chocolate.',
      en: 'CRC 6,000 for residents and CRC 11,500 for foreign visitors. Chocolate walk.',
    },
    price: { es: '₡6 000 / ₡11 500 por persona', en: 'CRC 6,000 / CRC 11,500 per person' },
    hours: { es: '8:00 am a 5:00 pm', en: '8:00 am to 5:00 pm' },
    duration: { es: 'Entre 1 hora y 90 minutos', en: 'Between 1 hour and 90 minutes' },
    travelTime: { es: '48 min', en: '48 min' },
    phone: '+506 2479-0090',
    email: 'info@rainforestchocolatetour.com',
    address: 'La Fortuna - Catarata Río Fortuna, Provincia de Alajuela, San Carlos',
    website: 'http://www.rainforestchocolatetour.com/',
    mapsUrl: 'https://maps.app.goo.gl/2QzcKuTaiqHpjjPp9',
  },
  {
    id: 'la-fortuna-hikes',
    image: '/assets/images/actividades/mistico_park.webp',
    name: "La Fortuna Hikes & Trails",
    category: {
      es: 'Senderismo, observación de fauna y experiencia cultural',
      en: 'Hiking, wildlife watching and cultural experience',
    },
    description: { es: 'Tour de perezosos.', en: 'Sloth-watching tour.' },
    price: { es: '₡16 000 por persona', en: 'CRC 16,000 per person' },
    hours: { es: '8:00 am a 10:00 pm', en: '8:00 am to 10:00 pm' },
    duration: { es: 'Varía según la actividad', en: 'Varies by activity' },
    travelTime: { es: '45 min', en: '45 min' },
    phone: '+506 6235-3697',
    email: 'lafortunahikesandtrails@gmail.com',
    address: '1 km norte del Banco Nacional, Provincia de Alajuela, La Fortuna, 21007',
    website: 'https://lafortunahikesandtrails.com/',
    mapsUrl: 'https://maps.app.goo.gl/nGuLDrmkVjnuZUN58',
  },
  {
    id: 'go-adventure',
    image: '/assets/images/actividades/mistico_park.webp',
    name: 'Go Adventure Parque Arenal',
    category: {
      es: 'Aventura, adrenalina, naturaleza y actividades al aire libre',
      en: 'Adventure, adrenaline, nature and outdoor activities',
    },
    description: {
      es: 'Canopy, monta de caballo y más actividades de aventura.',
      en: 'Ziplining, horseback riding and more adventure activities.',
    },
    price: { es: '₡25 000 – ₡50 000 por persona', en: 'CRC 25,000 – CRC 50,000 per person' },
    hours: { es: '7:00 am a 9:00 pm', en: '7:00 am to 9:00 pm' },
    duration: { es: 'Entre 2 y 3 horas', en: '2 to 3 hours' },
    travelTime: { es: '1 h', en: '1 hr' },
    phone: '+506 2479-0189',
    email: 'info@goadventurepark.com',
    address: 'Provincia de Alajuela, La Fortuna',
    website: 'https://goadventurepark.com/',
    mapsUrl: 'https://maps.app.goo.gl/dqHuAqSTDgXQcq4t8',
  },
  {
    id: 'lancheros-arenal',
    image: '/assets/images/actividades/mistico_park.webp',
    name: 'Asociación de Lancheros del Arenal, Pital y Boca Tapada',
    category: { es: 'Turismo deportivo y ecoturismo', en: 'Sports tourism and ecotourism' },
    description: {
      es: '₡35 000 paseo en lancha; el tour de pesca por hora cuesta ₡25 000 para nacionales y $225 para extranjeros.',
      en: 'CRC 35,000 boat ride; the fishing tour costs CRC 25,000 per hour for residents and $225 for foreign visitors.',
    },
    price: { es: '₡25 000 – ₡35 000 · $225', en: 'CRC 25,000 – CRC 35,000 · $225' },
    hours: { es: '8:00 am a 6:00 pm', en: '8:00 am to 6:00 pm' },
    duration: {
      es: 'Entre 1 y 3 horas según la actividad',
      en: '1 to 3 hours depending on the activity',
    },
    travelTime: { es: '1 h 12 min', en: '1 h 12 min' },
    phone: '+506 8389-2989',
    address: 'Unnamed Road, Provincia de Alajuela, San Carlos',
    mapsUrl: 'https://maps.app.goo.gl/uR4SjThL33tcHnAx6',
  },
  {
    id: 'pn-volcan-tenorio',
    image: '/assets/images/actividades/mistico_park.webp',
    name: 'Parque Nacional Volcán Tenorio',
    category: {
      es: 'Ecoturismo, fenómenos naturales, geología y biodiversidad',
      en: 'Ecotourism, natural phenomena, geology and biodiversity',
    },
    description: {
      es: '₡905 colones para nacionales y residentes; ₡6 800 para extranjeros.',
      en: 'CRC 905 for residents; CRC 6,800 for foreign visitors.',
    },
    price: { es: '₡905 nacionales · ₡6 800 extranjeros', en: 'CRC 905 residents · CRC 6,800 foreign visitors' },
    hours: { es: '8:00 am a 2:00 pm', en: '8:00 am to 2:00 pm' },
    duration: { es: 'Entre 2 y 3 horas', en: '2 to 3 hours' },
    travelTime: { es: '3 h 40 min', en: '3 h 40 min' },
    phone: '+506 2522-6500',
    email: 'infotenorio@sinac.go.cr',
    address: 'Katira centro, Provincia de Alajuela, Guatuso, 21504',
    website: 'http://www.rioceleste.cr/',
    mapsUrl: 'https://maps.app.goo.gl/E7eAcGhttGhWv22w5',
  },
  {
    id: 'pn-juan-castro-blanco',
    image: '/assets/images/actividades/mistico_park.webp',
    name: 'Parque Nacional Juan Castro Blanco',
    category: { es: 'Ecoturismo y naturaleza', en: 'Ecotourism and nature' },
    description: {
      es: '₡800 colones para nacionales y ₡5 000 para extranjeros.',
      en: 'CRC 800 for residents and CRC 5,000 for foreign visitors.',
    },
    price: { es: '₡800 nacionales · ₡5 000 extranjeros', en: 'CRC 800 residents · CRC 5,000 foreign visitors' },
    hours: { es: '8:00 am a 5:00 pm', en: '8:00 am to 5:00 pm' },
    duration: { es: 'Entre 3 y 4 horas', en: '3 to 4 hours' },
    travelTime: { es: '2 h 10 min', en: '2 h 10 min' },
    phone: '+506 2200-5644',
    email: 'acahn.pnajuancastroblanco@sinac.go.cr',
    address: 'Provincia de Alajuela, Sarchí',
    website: 'https://www.sinac.go.cr/',
    mapsUrl: 'https://maps.app.goo.gl/cASG6574iceqzps16',
  },
  {
    id: 'refugio-cano-negro',
    image: '/assets/images/actividades/mistico_park.webp',
    name: 'Refugio Nacional de Vida Silvestre Mixto Caño Negro',
    category: {
      es: 'Ecoturismo y observación de vida silvestre',
      en: 'Ecotourism and wildlife watching',
    },
    description: {
      es: '₡904 colones para nacionales y residentes; ₡2 500 para extranjeros.',
      en: 'CRC 904 for residents; CRC 2,500 for foreign visitors.',
    },
    price: { es: '₡904 nacionales · ₡2 500 extranjeros', en: 'CRC 904 residents · CRC 2,500 foreign visitors' },
    hours: { es: '8:00 am a 4:00 pm', en: '8:00 am to 4:00 pm' },
    duration: {
      es: 'Entre 2 y 5 horas según la actividad',
      en: '2 to 5 hours depending on the activity',
    },
    travelTime: { es: '4 h 19 min', en: '4 h 19 min' },
    phone: '+506 8705-2364',
    email: 'info@sinac.go.cr',
    address:
      'Caño Negro, Los Chiles, Alajuela, Provincia de Alajuela, Caño Negro, 21402',
    website: 'https://www.sinac.go.cr/ES/ac/ACAHN/rnvscn/Paginas/default.aspx',
    mapsUrl: 'https://maps.app.goo.gl/KGFvaqn7g3Ff8a2VA',
  },
];
