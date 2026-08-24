/**
 * COMPDES 2027 — Tipos compartidos de datos.
 *
 * Los archivos dentro de `src/data/` son LA ÚNICA FUENTE DE VERDAD del
 * contenido. Para actualizar el sitio NO hay que tocar ningún componente:
 * edita los datos y vuelve a construir.
 *
 * Reglas:
 *  - Todo texto visible va como par bilingüe { es: '...', en: '...' }.
 *  - Los nombres propios (hoteles, empresas), direcciones, correos, teléfonos
 *    y enlaces se mantienen tal cual: no se traducen.
 */

/** Texto visible bilingüe (español / inglés). */
export interface LocalText {
  es: string;
  en: string;
}
