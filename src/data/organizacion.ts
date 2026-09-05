/**
 * COMPDES 2027 — Datos de organización.
 *
 * ESTE ARCHIVO ES LA ÚNICA FUENTE DE VERDAD de la sección "Organización".
 * Para actualizar el contenido NO hay que tocar ningún componente:
 * edita únicamente los arreglos de abajo y vuelve a construir el sitio.
 *
 * ⚠️ El Comité Científico aún no tiene lista oficial: se muestra "EN
 *    PREPARACIÓN" (coming soon) hasta que la entregue la organización.
 *
 * Reglas:
 *  - Nombres de personas NO se traducen.
 *  - `affiliation` va como par bilingüe { es, en } (el nombre de la
 *    institución sí se traduce).
 *  - `role` es opcional y va como par bilingüe { es: '...', en: '...' }.
 */

import type { LocalText } from './types';

export type CommitteeId = 'cientifico' | 'organizador' | 'comision' | 'representantes';

export interface OrgMember {
  /** Nombre completo tal como se publicará. */
  name: string;
  /** Universidad / institución de origen (bilingüe, el nombre sí se traduce). */
  affiliation: LocalText;
  /** Cargo dentro del comité o de la red (opcional). */
  role?: LocalText;
}

export interface Committee {
  id: CommitteeId;
  members: OrgMember[];
}

type Affiliation = { es: string; en: string };

const TEC: Affiliation = {
  es: 'Instituto Tecnológico de Costa Rica (TEC)',
  en: 'Costa Rica Institute of Technology (TEC)',
};

const TEC_CR: Affiliation = {
  es: 'Instituto Tecnológico de Costa Rica (TEC) — Costa Rica',
  en: 'Costa Rica Institute of Technology (TEC) — Costa Rica',
};

const UAH_ES: Affiliation = {
  es: 'Universidad de Alcalá (UAH) — España',
  en: 'University of Alcalá (UAH) — Spain',
};

const UCR: Affiliation = {
  es: 'Universidad de Costa Rica (UCR)',
  en: 'University of Costa Rica (UCR)',
};

const UNAN_LEON: Affiliation = {
  es: 'Universidad Nacional Autónoma de Nicaragua, León (UNAN-León)',
  en: 'National Autonomous University of Nicaragua, León (UNAN-León)',
};

const UES: Affiliation = {
  es: 'Universidad de El Salvador (UES)',
  en: 'University of El Salvador (UES)',
};

const CUNOC_USAC: Affiliation = {
  es: 'Centro Universitario de Occidente, Universidad de San Carlos de Guatemala (CUNOC-USAC)',
  en: 'Western University Center, University of San Carlos of Guatemala (CUNOC-USAC)',
};

const UNI: Affiliation = {
  es: 'Universidad Nacional de Ingeniería (UNI)',
  en: 'National University of Engineering (UNI)',
};

const UNAH: Affiliation = {
  es: 'Universidad Nacional Autónoma de Honduras (UNAH)',
  en: 'National Autonomous University of Honduras (UNAH)',
};

const BICU: Affiliation = {
  es: 'Bluefields Indian & Caribbean University (BICU)',
  en: 'Bluefields Indian & Caribbean University (BICU)',
};

const UNAN_MANAGUA: Affiliation = {
  es: 'Universidad Nacional Autónoma de Nicaragua, Managua (UNAN-Managua)',
  en: 'National Autonomous University of Nicaragua, Managua (UNAN-Managua)',
};

/* [ com.01 ] Comité Científico — responsable del proceso de arbitraje.
   Lista oficial pendiente: la sección se muestra "EN PREPARACIÓN". */
const comiteCientifico: OrgMember[] = [];

/* [ com.02 ] Comité Organizador — equipo local anfitrión (TEC San Carlos). */
const comiteOrganizador: OrgMember[] = [
  { name: 'Alfaro Velasco, Jorge', affiliation: TEC },
  { name: 'Esquivel Vega, Gaudy', affiliation: TEC },
  { name: 'Jiménez Delgado, Efrén', affiliation: TEC },
  { name: 'Quirós Oviedo, Rocío', affiliation: TEC },
  { name: 'Treviño Villalobos, Marlen', affiliation: TEC },
];

/* [ com.03 ] Comisión Permanente de la red COMPDES. */
const comisionPermanente: OrgMember[] = [
  { name: 'López Villegas, Óscar', affiliation: TEC_CR },
  { name: 'Meziat Luna, Daniel', affiliation: UAH_ES },
  { name: 'Bengochea Martínez, Luis', affiliation: UAH_ES },
];

/* [ com.04 ] Representantes de las universidades de la red COMPDES (2026). */
const representantes: OrgMember[] = [
  {
    name: 'López Villegas, Óscar',
    affiliation: TEC_CR,
    role: { es: 'Presidente', en: 'President' },
  },
  {
    name: 'Meziat Luna, Daniel',
    affiliation: UAH_ES,
    role: { es: 'Presidente de Honor', en: 'Honorary President' },
  },
  { name: 'Amaya Briceño, Luis Eduardo', affiliation: UCR },
  { name: 'Bárcenas Lezama, Miguel Ángel', affiliation: UNAN_LEON },
  { name: 'Barrera Mancía, Luis Salvador', affiliation: UES },
  { name: 'Bengochea Martínez, Luis', affiliation: UAH_ES },
  { name: 'Carballo Ruiz, Elmer Arturo', affiliation: UES },
  { name: 'Carol Hernández, Víctor', affiliation: CUNOC_USAC },
  { name: 'Chávez Mairena, Luis Eduardo', affiliation: UNI },
  { name: 'Contreras Mercado, Arnoldo José', affiliation: UNAN_LEON },
  { name: 'Esquivel Vega, Gaudy', affiliation: TEC_CR },
  { name: 'González Rodríguez, César Augusto', affiliation: UES },
  { name: 'Gross, Eduardo', affiliation: UNAH },
  { name: 'Juárez, Nelson', affiliation: UNI },
  { name: 'López, Christian', affiliation: CUNOC_USAC },
  { name: 'López, Roy', affiliation: BICU },
  { name: 'López Poveda, Anayanci', affiliation: UNI },
  { name: 'Mejía Quiroz, Álvaro', affiliation: UNAN_MANAGUA },
  { name: 'Palma Mendoza, Raúl José', affiliation: UNAH },
  { name: 'Sambola, Dexon-McKensy', affiliation: BICU },
  { name: 'Sierra Pac, Oliver', affiliation: CUNOC_USAC },
];

export const committees: Committee[] = [
  { id: 'cientifico', members: comiteCientifico },
  { id: 'organizador', members: comiteOrganizador },
  { id: 'comision', members: comisionPermanente },
  { id: 'representantes', members: representantes },
];