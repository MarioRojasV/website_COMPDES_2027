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
  /** Slug estable usado como clave del árbol (data-attr y carpeta). */
  id: string;
  /** Nombre breve de carpeta que se muestra en el árbol, bilingüe. */
  label: LocalText;
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
    id: 'ia-ciencia-datos',
    label: { es: 'ia-ciencia-datos', en: 'ai-data-science' },
    icon: 'cpu',
    name: {
      es: 'Inteligencia Artificial y Ciencia de Datos',
      en: 'Artificial Intelligence and Data Science',
    },
    groups: [
      {
        items: [
          { es: 'Modelos de aprendizaje profundo y generativo.', en: 'Deep and generative learning models.' },
          { es: 'Aplicaciones de IA en educación, salud, industria y servicios.', en: 'AI applications in education, health, industry and services.' },
          { es: 'Ética y gobernanza de los algoritmos.', en: 'Ethics and governance of algorithms.' },
          { es: 'Analítica avanzada de datos, minería de datos y visualización.', en: 'Advanced data analytics, data mining and visualization.' },
        ],
      },
    ],
  },
  {
    id: 'computacion-verde',
    label: { es: 'computacion-verde', en: 'green-computing' },
    icon: 'sprout',
    name: {
      es: 'Computación Verde y Sostenibilidad Tecnológica',
      en: 'Green Computing and Technological Sustainability',
    },
    groups: [
      {
        items: [
          { es: 'Eficiencia energética en centros de datos y sistemas distribuidos.', en: 'Energy efficiency in data centers and distributed systems.' },
          { es: 'Impacto ambiental de la tecnología y estrategias de mitigación.', en: 'Environmental impact of technology and mitigation strategies.' },
          { es: 'Tecnologías emergentes para la sostenibilidad.', en: 'Emerging technologies for sustainability.' },
        ],
      },
    ],
  },
  {
    id: 'ciberseguridad',
    label: { es: 'ciberseguridad', en: 'cybersecurity' },
    icon: 'shield',
    name: {
      es: 'Ciberseguridad y Confianza Digital',
      en: 'Cybersecurity and Digital Trust',
    },
    groups: [
      {
        items: [
          { es: 'Seguridad en la nube y entornos híbridos.', en: 'Security in the cloud and hybrid environments.' },
          { es: 'Protección de datos personales y privacidad.', en: 'Protection of personal data and privacy.' },
          { es: 'Ciber resiliencia e inteligencia de amenazas.', en: 'Cyber resilience and threat intelligence.' },
        ],
      },
    ],
  },
  {
    id: 'transformacion-digital',
    label: { es: 'transformacion-digital', en: 'digital-transformation' },
    icon: 'city',
    name: {
      es: 'Transformación Digital y Gobierno de TI',
      en: 'Digital Transformation and IT Governance',
    },
    groups: [
      {
        items: [
          { es: 'Estrategias de digitalización empresarial.', en: 'Business digitalization strategies.' },
          { es: 'Gobernanza de datos, interoperabilidad y gestión del cambio.', en: 'Data governance, interoperability and change management.' },
          { es: 'Competencias digitales y cultura organizacional.', en: 'Digital skills and organizational culture.' },
        ],
      },
    ],
  },
  {
    id: 'infraestructura-digital',
    label: { es: 'infraestructura-digital', en: 'digital-infrastructure' },
    icon: 'antenna',
    name: {
      es: 'Infraestructura Digital Avanzada',
      en: 'Advanced Digital Infrastructure',
    },
    groups: [
      {
        items: [
          { es: 'Redes 5G, 6G y aplicaciones del Internet de las Cosas (IoT).', en: '5G and 6G networks and Internet of Things (IoT) applications.' },
          { es: 'Edge computing y virtualización de redes.', en: 'Edge computing and network virtualization.' },
          { es: 'Arquitecturas abiertas y automatización de servicios.', en: 'Open architectures and service automation.' },
        ],
      },
    ],
  },
  {
    id: 'software-devops',
    label: { es: 'software-devops', en: 'software-devops' },
    icon: 'cpu',
    name: {
      es: 'Desarrollo de Software, DevOps y Calidad',
      en: 'Software Development, DevOps and Quality',
    },
    groups: [
      {
        items: [
          { es: 'Ingeniería de software basada en IA.', en: 'AI-based software engineering.' },
          { es: 'Automatización de pruebas, integración continua y despliegue ágil.', en: 'Test automation, continuous integration and agile deployment.' },
          { es: 'Experiencia del usuario y evaluación de la calidad del software.', en: 'User experience and software quality assessment.' },
        ],
      },
    ],
  },
  {
    id: 'realidad-extendida',
    label: { es: 'realidad-extendida', en: 'extended-reality' },
    icon: 'landmark',
    name: {
      es: 'Realidad Extendida y Tecnologías Inmersivas',
      en: 'Extended Reality and Immersive Technologies',
    },
    groups: [
      {
        items: [
          { es: 'Realidad virtual, aumentada y mixta en educación y turismo.', en: 'Virtual, augmented and mixed reality in education and tourism.' },
          { es: 'Gemelos digitales e interfaces humano-computadora.', en: 'Digital twins and human-computer interfaces.' },
          { es: 'Experiencias inmersivas para la divulgación científica y cultural.', en: 'Immersive experiences for science and cultural outreach.' },
        ],
      },
    ],
  },
  {
    id: 'computacion-sociedad',
    label: { es: 'computacion-sociedad', en: 'computing-society' },
    icon: 'heart',
    name: {
      es: 'Computación Aplicada a la Sociedad',
      en: 'Computing Applied to Society',
    },
    groups: [
      {
        items: [
          { es: 'Tecnología e inclusión digital.', en: 'Technology and digital inclusion.' },
          { es: 'Innovación social y emprendimiento tecnológico.', en: 'Social innovation and technological entrepreneurship.' },
          { es: 'Inteligencia artificial para el desarrollo sostenible.', en: 'Artificial intelligence for sustainable development.' },
          { es: 'Educación digital y transformación del currículo en la era de la IA.', en: 'Digital education and curriculum transformation in the AI era.' },
          { es: 'Estrategias educativas y competencias digitales para la formación en TIC.', en: 'Educational strategies and digital skills for ICT training.' },
          { es: 'Acreditación y aseguramiento de la calidad en programas de computación.', en: 'Accreditation and quality assurance in computing programs.' },
          { es: 'Experiencias y buenas prácticas en enseñanza de la informática y la ingeniería.', en: 'Experiences and good practices in teaching computer science and engineering.' },
        ],
      },
    ],
  },
  {
    id: 'innovacion-emprendimiento',
    label: { es: 'innovacion-emprendimiento', en: 'innovation-entrepreneurship' },
    icon: 'sprout',
    name: {
      es: 'Innovación, Emprendimiento y Transferencia Tecnológica',
      en: 'Innovation, Entrepreneurship and Technology Transfer',
    },
    groups: [
      {
        items: [
          { es: 'Startups tecnológicas y ecosistemas de innovación.', en: 'Tech startups and innovation ecosystems.' },
          { es: 'Emprendimientos digitales en regiones rurales.', en: 'Digital ventures in rural regions.' },
          { es: 'Vinculación universidad–empresa–sociedad.', en: 'University–industry–society collaboration.' },
          { es: 'Modelos de incubación de ideas en computación aplicada al desarrollo.', en: 'Idea incubation models in computing for development.' },
          { es: 'Semilleros de investigación y desarrollo tecnológico.', en: 'Research seedbeds and technological development.' },
        ],
      },
    ],
  },
];