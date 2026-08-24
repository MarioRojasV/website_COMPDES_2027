/**
 * COMPDES 2027 — Datos de organización.
 *
 * ESTE ARCHIVO ES LA ÚNICA FUENTE DE VERDAD de la sección "Organización".
 * Para actualizar el contenido NO hay que tocar ningún componente:
 * edita únicamente los arreglos de abajo y vuelve a construir el sitio.
 *
 * ⚠️ LAS LISTAS ACTUALES SON DATOS DE EJEMPLO con la estructura final.
 *    Reemplázalas con las listas oficiales cuando estén confirmadas.
 *
 * Reglas:
 *  - Nombres de personas e instituciones NO se traducen.
 *  - `role` es opcional y va como par bilingüe { es: '...', en: '...' }.
 */

import type { LocalText } from './types';

export type CommitteeId = 'cientifico' | 'organizador' | 'comision' | 'representantes';

export interface OrgMember {
  /** Nombre completo tal como se publicará. */
  name: string;
  /** Universidad / institución de origen (sin traducir). */
  affiliation: string;
  /** Cargo dentro del comité o de la red (opcional). */
  role?: LocalText;
}

export interface Committee {
  id: CommitteeId;
  members: OrgMember[];
}

/* [ com.01 ] Comité Científico — responsable del proceso de arbitraje. */
const comiteCientifico: OrgMember[] = [
  {
    name: 'Dra. María Fernanda Quesada',
    affiliation: 'Tecnológico de Costa Rica',
    role: { es: 'Presidencia', en: 'Chair' },
  },
  {
    name: 'Dr. Andrés Navarro',
    affiliation: 'Universidad Nacional de Costa Rica',
    role: { es: 'Coordinación de publicaciones', en: 'Publications coordinator' },
  },
  { name: 'Dra. Lucía Ramírez', affiliation: 'Universidad de Costa Rica' },
  { name: 'Dr. Carlos Mendoza', affiliation: 'Tecnológico de Costa Rica' },
  { name: 'MSc. Valeria Solano', affiliation: 'Universidad Estatal a Distancia' },
  { name: 'Dr. Jorge Ibáñez', affiliation: 'Universidad de Guayaquil, Ecuador' },
  { name: 'Dra. Paola Herrera', affiliation: 'Universidad Tecnológica de Panamá' },
];

/* [ com.02 ] Comité Organizador — equipo local anfitrión (TEC San Carlos). */
const comiteOrganizador: OrgMember[] = [
  {
    name: 'Dr. Rodrigo Álvarez',
    affiliation: 'Tecnológico de Costa Rica',
    role: { es: 'Presidencia del congreso', en: 'Conference chair' },
  },
  {
    name: 'MSc. Gabriela Chaves',
    affiliation: 'Tecnológico de Costa Rica',
    role: { es: 'Coordinación general', en: 'General coordination' },
  },
  {
    name: 'Ing. Luis Diego Montero',
    affiliation: 'Tecnológico de Costa Rica',
    role: { es: 'Logística y sede', en: 'Logistics and venue' },
  },
  {
    name: 'MSc. Priscilla Araya',
    affiliation: 'Tecnológico de Costa Rica',
    role: { es: 'Comunicación y registro', en: 'Communication and registration' },
  },
  {
    name: 'Lic. Kenneth Rojas',
    affiliation: 'Tecnológico de Costa Rica',
    role: { es: 'Relación con patrocinadores', en: 'Sponsor relations' },
  },
];

/* [ com.03 ] Comisión Permanente de la red COMPDES. */
const comisionPermanente: OrgMember[] = [
  {
    name: 'Dra. Elena Vargas',
    affiliation: 'Universidad de Oriente, Cuba',
    role: { es: 'Coordinación general de la red', en: 'Network general coordination' },
  },
  { name: 'Dr. Miguel Ángel Torres', affiliation: 'Universidad de las Ciencias Informáticas, Cuba' },
  { name: 'Dra. Carmen Silva', affiliation: 'Universidade Federal de Santa Maria, Brasil' },
  { name: 'Dr. Pablo Cevallos', affiliation: 'Escuela Superior Politécnica del Litoral, Ecuador' },
  { name: 'Dra. Ana Belén Ruiz', affiliation: 'Universidad de Jaén, España' },
];

/* [ com.04 ] Representantes de las universidades de la red COMPDES. */
const representantes: OrgMember[] = [
  { name: 'Dr. Esteban Fonseca', affiliation: 'Tecnológico de Costa Rica, Costa Rica' },
  { name: 'Dra. Silvia Castro', affiliation: 'Universidad Nacional de Costa Rica, Costa Rica' },
  { name: 'Dr. Óscar Núñez', affiliation: 'Universidad de Costa Rica, Costa Rica' },
  { name: 'MSc. Yadira Campos', affiliation: 'Universidad Estatal a Distancia, Costa Rica' },
  { name: 'Dr. Reinier González', affiliation: 'Universidad de Oriente, Cuba' },
  { name: 'Dra. Iliana Pérez', affiliation: 'Universidad Tecnológica de La Habana, Cuba' },
  { name: 'Dr. Marcos Vieira', affiliation: 'Universidade Federal de Santa Maria, Brasil' },
  { name: 'Dra. Lorena Cabrera', affiliation: 'Universidad Laica Vicente Rocafuerte, Ecuador' },
  { name: 'Dr. Iván Suárez', affiliation: 'Universidad Tecnológica de Panamá, Panamá' },
  { name: 'Dra. Marta Ortega', affiliation: 'Universidad de Jaén, España' },
];

export const committees: Committee[] = [
  { id: 'cientifico', members: comiteCientifico },
  { id: 'organizador', members: comiteOrganizador },
  { id: 'comision', members: comisionPermanente },
  { id: 'representantes', members: representantes },
];
