/**
 * COMPDES 2027 — Datos de áreas de interés.
 *
 * ESTE ARCHIVO ES LA ÚNICA FUENTE DE VERDAD de la sección "Áreas de interés".
 * Para actualizar el contenido NO hay que tocar ningún componente:
 * edita únicamente los arreglos de abajo y vuelve a construir el sitio.
 *
 * Reglas:
 *  - Todo texto visible va como par bilingüe { es: '...', en: '...' }.
 *  - `generalFields` son las áreas generales clásicas del congreso (nube de
 *    etiquetas); `tracks` son las líneas temáticas prioritarias de esta edición.
 *  - Cada track tiene grupos opcionales (`title`) con sus ítems; el id se usa
 *    como nombre de carpeta en el árbol del explorador.
 */

import type { LocalText } from './types';

export type AreaIcon =
  | 'cpu'
  | 'landmark'
  | 'languages'
  | 'heart'
  | 'sprout'
  | 'city'
  | 'shield'
  | 'antenna';

export interface AreaGroup {
  /** Subtema agrupador (opcional; si falta, los ítems van sueltos). */
  title?: LocalText;
  items: LocalText[];
}

export interface AreaTrack {
  /** Slug usado como nombre de carpeta en el árbol. */
  id: string;
  icon: AreaIcon;
  name: LocalText;
  groups: AreaGroup[];
}

/** Campos generales clásicos de las conferencias COMPDES. */
export const generalFields: LocalText[] = [
  { es: 'Inteligencia Artificial', en: 'Artificial Intelligence' },
  { es: 'Aplicaciones', en: 'Applications' },
  { es: 'Información y Conocimiento', en: 'Information and Knowledge' },
  { es: 'Cómputo Móvil', en: 'Mobile Computing' },
  { es: 'Redes', en: 'Networking' },
  { es: 'Programación de Sistemas', en: 'Systems Programming' },
  { es: 'Cómputo Web', en: 'Web Computing' },
  { es: 'Interfaces Avanzadas', en: 'Advanced Interfaces' },
  { es: 'Seguridad de la Información', en: 'Information Security' },
  { es: 'Internet de las Cosas', en: 'Internet of Things' },
  { es: 'Ciencia de Datos', en: 'Data Science' },
  { es: 'Enseñanza de la Computación', en: 'Computing Education' },
];

/** Líneas temáticas prioritarias de COMPDES 2027. */
export const areaTracks: AreaTrack[] = [
  {
    id: 'tecnologias-emergentes',
    icon: 'cpu',
    name: {
      es: 'Tecnologías emergentes aplicadas',
      en: 'Applied emerging technologies',
    },
    groups: [
      {
        title: { es: 'IA Generativa', en: 'Generative AI' },
        items: [
          { es: 'Creación de nuevo contenido educativo', en: 'Creation of new educational content' },
          { es: 'Asistentes inteligentes para la ciudadanía', en: 'Intelligent assistants for citizens' },
          { es: 'Mejora de procesos empresariales y gubernamentales', en: 'Improved business and government processes' },
          { es: 'Generación automática de código', en: 'Automatic code generation' },
        ],
      },
      {
        title: { es: 'Blockchain y economía digital', en: 'Blockchain and digital economy' },
        items: [
          { es: 'Usos más allá de las criptomonedas', en: 'Uses beyond cryptocurrencies' },
          { es: 'Trazabilidad de productos en cadenas de suministro', en: 'Product traceability in supply chains' },
          { es: 'Sistemas de voto seguro', en: 'Secure voting systems' },
          { es: 'Gestión segura de identidades digitales', en: 'Secure digital identity management' },
          { es: 'Certificaciones académicas seguras', en: 'Secure academic certifications' },
        ],
      },
      {
        title: { es: 'Gemelos digitales', en: 'Digital twins' },
        items: [
          { es: 'Simulación de ciudades y procesos industriales', en: 'Simulation of cities and industrial processes' },
          { es: 'Apoyo en la planificación de sistemas de salud', en: 'Healthcare system planning support' },
        ],
      },
    ],
  },
  {
    id: 'patrimonio-turismo',
    icon: 'landmark',
    name: {
      es: 'Preservación del patrimonio y promoción turística',
      en: 'Cultural heritage preservation and tourism promotion',
    },
    groups: [
      {
        title: { es: 'Digitalización del patrimonio', en: 'Heritage digitalization' },
        items: [
          { es: 'Museos virtuales', en: 'Virtual museums' },
          { es: 'Reconstrucción 3D de sitios arqueológicos', en: '3D reconstruction of archaeological sites' },
        ],
      },
      {
        title: { es: 'Tecnologías inmersivas para turismo', en: 'Immersive technologies for tourism' },
        items: [
          { es: 'Experiencias turísticas con realidad virtual y aumentada', en: 'Tourism experiences with virtual and augmented reality' },
          { es: 'Aplicaciones móviles para rutas turísticas', en: 'Mobile applications for tourist routes' },
        ],
      },
    ],
  },
  {
    id: 'linguistica-computacional',
    icon: 'languages',
    name: {
      es: 'Lingüística computacional y lenguas indígenas',
      en: 'Computational linguistics and indigenous languages',
    },
    groups: [
      {
        items: [
          { es: 'Herramientas para preservar lenguas indígenas', en: 'Tools to preserve indigenous languages' },
          { es: 'Reconocimiento de voz para lenguas de bajos recursos', en: 'Speech recognition for low-resource languages' },
          { es: 'Traducción automática y aplicaciones educativas', en: 'Machine translation and educational applications' },
        ],
      },
    ],
  },
  {
    id: 'informatica-salud',
    icon: 'heart',
    name: {
      es: 'Informática de la salud y bienestar social',
      en: 'Health informatics and social wellbeing',
    },
    groups: [
      {
        title: { es: 'Telemedicina y salud digital', en: 'Telemedicine and digital health' },
        items: [
          { es: 'Consultas médicas remotas', en: 'Remote medical consultations' },
          { es: 'Expedientes electrónicos compartibles', en: 'Shareable electronic health records' },
          { es: 'Gestión hospitalaria más eficiente', en: 'More efficient hospital management' },
        ],
      },
      {
        title: { es: 'Biosenales e imágenes médicas', en: 'Biosignal processing and medical imaging' },
        items: [
          { es: 'Diagnóstico asistido por computadora y a bajo costo', en: 'Affordable computer-assisted diagnostics' },
          { es: 'Detección temprana de enfermedades', en: 'Early detection of diseases' },
        ],
      },
      {
        title: { es: 'Tecnologías para la inclusión', en: 'Technologies for inclusion' },
        items: [
          { es: 'Soluciones tecnológicas para personas con discapacidad', en: 'Tech solutions for people with disabilities' },
          { es: 'Aplicaciones de apoyo a personas adultas mayores', en: 'Applications to assist elderly people' },
        ],
      },
    ],
  },
  {
    id: 'sostenibilidad-clima',
    icon: 'sprout',
    name: {
      es: 'Sostenibilidad, riesgo y resiliencia climática',
      en: 'Sustainability, risk and climate resilience',
    },
    groups: [
      {
        title: { es: 'Geoinformática para la gestión del riesgo', en: 'Geoinformatics for risk management' },
        items: [
          { es: 'Sistemas de alerta temprana ante desastres', en: 'Early warning systems for disasters' },
          { es: 'Modelado de desastres con datos satelitales e IA', en: 'Disaster modeling using satellite data and AI' },
        ],
      },
      {
        title: { es: 'Adaptación al cambio climático', en: 'Climate change adaptation technologies' },
        items: [
          { es: 'Agricultura inteligente con sensores y predicciones', en: 'Smart agriculture using sensors and predictions' },
          { es: 'Gestión eficiente del agua y la energía', en: 'Efficient management of water and energy' },
        ],
      },
    ],
  },
  {
    id: 'ciudades-inteligentes',
    icon: 'city',
    name: {
      es: 'Ciudades inteligentes y territorios sostenibles',
      en: 'Smart cities and sustainable territories',
    },
    groups: [
      {
        items: [
          { es: 'Movilidad urbana eficiente', en: 'Efficient urban mobility' },
          { es: 'Gestión de residuos', en: 'Waste management' },
          { es: 'Monitoreo de la calidad del aire', en: 'Air quality monitoring' },
        ],
      },
    ],
  },
  {
    id: 'gobierno-ciberseguridad',
    icon: 'shield',
    name: {
      es: 'Transformación digital del Estado, gobernanza y ciberseguridad',
      en: 'Digital transformation of the state, governance and cybersecurity',
    },
    groups: [
      {
        title: { es: 'Gobierno abierto y datos abiertos', en: 'Open government and open data' },
        items: [
          { es: 'Transparencia', en: 'Transparency' },
          { es: 'Participación ciudadana digital', en: 'Digital citizen participation' },
        ],
      },
      {
        title: { es: 'Ciberseguridad nacional', en: 'National cybersecurity' },
        items: [{ es: 'Protección de infraestructura crítica', en: 'Protection of critical infrastructure' }],
      },
      {
        title: { es: 'Identidad digital y servicios públicos', en: 'Digital identity and public services' },
        items: [{ es: 'Servicios centrados en la ciudadanía', en: 'Citizen-centric services' }],
      },
    ],
  },
  {
    id: 'redes-5g',
    icon: 'antenna',
    name: {
      es: 'Despliegue de redes 5G y tendencias futuras',
      en: '5G network deployment and future trends',
    },
    groups: [
      {
        items: [
          { es: 'AIoT (inteligencia artificial + IoT)', en: 'AIoT (artificial intelligence + IoT)' },
          { es: 'Automatización industrial', en: 'Industrial automation' },
          { es: 'Computación cuántica y acelerada', en: 'Quantum and accelerated computing' },
          { es: 'Edge computing y sostenibilidad', en: 'Edge computing and sustainability' },
        ],
      },
    ],
  },
];
