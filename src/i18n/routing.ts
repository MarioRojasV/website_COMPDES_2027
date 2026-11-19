/**
 * Routing / locale helpers shared by server components and the client toggle.
 *
 * This module intentionally has no dependency on the translation dictionary:
 * importing it from a client script must not pull the ~35 KB `ui.ts` payload
 * into the initial bundle. The dictionary is loaded on demand by LangToggle.
 */

export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es';

/** Base path del despliegue ('/compdes2027' en producción, '/' o '' en local sin base). */
const BASE = (import.meta.env.BASE_URL ?? '').replace(/\/+$/, '');

function stripBase(pathname: string): string {
  if (!BASE) return pathname;
  const bare = pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  return bare === '' ? '/' : bare;
}

function withBase(path: string): string {
  return BASE ? `${BASE}${path}` : path;
}

/** Resolve the current locale from a URL path ('/en/...' -> 'en', else 'es'). */
export function getLangFromUrl(pathname: string): 'es' | 'en' {
  return stripBase(pathname).startsWith('/en') ? 'en' : 'es';
}

/**
 * Return the same path in the given language. Works whether the input is the
 * Spanish path (no prefix) or the English path (/en prefix), always including
 * the deployment base (/compdes2027) when one is configured.
 */
export function localizedUrl(pathname: string, lang: 'es' | 'en'): string {
  const p = stripBase(pathname);
  const normalized = p.length > 1 && p.endsWith('/') ? p.slice(0, -1) : p;
  const stripped = normalized.replace(/^\/en(?=\/|$)/, '');
  const esUrl = stripped === '' ? '/' : stripped;
  const out = lang === 'es' ? esUrl : esUrl === '/' ? '/en' : `/en${esUrl}`;
  return withBase(out);
}
