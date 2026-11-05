/**
 * COMPDES 2027 — Datos de hospedaje.
 *
 * ESTE ARCHIVO ES LA ÚNICA FUENTE DE VERDAD de la sección "Hospedaje".
 * Para actualizar el contenido NO hay que tocar ningún componente:
 * edita únicamente los objetos de abajo y vuelve a construir el sitio.
 *
 * Reglas:
 *  - Todo texto visible va como par bilingüe { es: '...', en: '...' }.
 *  - Nombres, direcciones, correos y teléfonos no se traducen.
 *  - `pricePerNight` es una tarifa de referencia por noche; la moneda real
 *    se indica en `currency` (verificar con el hotel al publicar).
 *  - `image` es opcional y apunta a un archivo dentro de `src/assets/`,
 *    para aprovechar el pipeline de imágenes de Astro (<Image />).
 */

import type { LocalText } from './types';

/** Moneda de la tarifa de referencia. */
export type Currency = 'CRC' | 'USD';

export interface Hotel {
  id: string;
  name: string;
  phone: string;
  email?: string;
  address: string;
  /** Tarifa de referencia por noche. */
  pricePerNight: number;
  currency: Currency;
  travelTime: LocalText;
  roomTypes: LocalText;
  amenities: LocalText;
  paymentMethods?: LocalText;
  cancellationPolicy?: LocalText;
  notes?: LocalText;
  /** Sitio web o red social del hotel. */
  website?: string;
  /** Nombre visible del enlace (Instagram, Facebook, sitio oficial…). */
  websiteLabel?: string;
  /** Enlace directo a Google Maps. */
  mapsUrl?: string;
  /** Imagen representativa dentro de src/assets/images/hoteles/ (webp recomendado).
   *  Opcional: si se omite o el archivo no existe, la tarjeta usa arte placeholder. */
  image?: string;
}

export const hoteles: Hotel[] = [
  {
    id: 'villa-blessed',
    name: 'Villa Blessed La Fortuna',
    phone: '+506 7226-1633',
    email: 'villabendecida@gmail.com',
    address: 'Provincia de Alajuela, Ulima',
    pricePerNight: 17,
    currency: 'USD', // verificar: la fuente original solo indica "17"
    travelTime: { es: '19 minutos', en: '19 minutes' },
    roomTypes: { es: 'Dobles', en: 'Double rooms' },
    amenities: {
      es: 'Desayuno · pase del día a balneario de aguas termales · atención de 4 p. m. a 10 p. m.',
      en: 'Breakfast · day pass to a hot-springs resort · open from 4 pm to 10 pm.',
    },
    website: 'https://www.instagram.com/villas_blessed_cr/',
    websiteLabel: 'Instagram · @villas_blessed_cr',
    mapsUrl: 'https://maps.app.goo.gl/bWVqjPYep1TJ7c5FA',
  },
  {
    id: 'la-hacienda',
    name: 'Hotel La Hacienda',
    phone: '+506 2475-6818',
    email: 'info@haciendacr.com',
    address: '700 metros norte de la Escuela de Platanar, Provincia de Alajuela, San Carlos',
    pricePerNight: 23,
    currency: 'USD', // verificar: la fuente original solo indica "23"
    travelTime: { es: '17 minutos', en: '17 minutes' },
    roomTypes: {
      es: 'Individuales, dobles, triples y familiares',
      en: 'Single, double, triple and family rooms',
    },
    amenities: { es: 'Wifi, piscina y aire acondicionado.', en: 'Wi-Fi, pool and air conditioning.' },
    paymentMethods: { es: 'Sinpe, transferencia y efectivo.', en: 'Sinpe, bank transfer and cash.' },
    cancellationPolicy: {
      es: 'Para reservar se abona un 50 %.',
      en: 'A 50% deposit is required to book.',
    },
    website: 'https://www.instagram.com/_hotel_la_hacienda_/',
    websiteLabel: 'Instagram · @_hotel_la_hacienda_',
    mapsUrl: 'https://maps.app.goo.gl/d7GRLW4K9vvoqeNdA',
  },
  {
    id: 'la-villa',
    name: 'Hotel La Villa',
    phone: '+506 2460-4539',
    email: 'reservaciones@hotellavillacr.com',
    address: 'De la entrada a Cedral, 300 metros norte y 50 metros este, Ciudad Quesada',
    pricePerNight: 17500,
    currency: 'CRC',
    travelTime: { es: '16 minutos', en: '16 minutes' },
    roomTypes: { es: 'Dobles', en: 'Double rooms' },
    amenities: { es: 'Wifi, desayuno y aire acondicionado.', en: 'Wi-Fi, breakfast and air conditioning.' },
    paymentMethods: {
      es: 'Transferencia, Sinpe, efectivo y tarjeta.',
      en: 'Bank transfer, Sinpe, cash and card.',
    },
    cancellationPolicy: {
      es: 'Grupos grandes reservan con un 50 %; individuales o parejas pagan en el hotel.',
      en: 'Large groups must book with a 50% deposit; singles or couples pay at the hotel.',
    },
    website: 'https://www.facebook.com/search/top?q=Hotel%20La%20Villa%20Ciudad%20Quesada',
    websiteLabel: 'Facebook · Hotel La Villa',
    mapsUrl: 'https://maps.app.goo.gl/4zKgsr8Dfoy1FzDg9',
  },
  {
    id: 'loma-verde',
    name: 'Hotel Loma Verde',
    phone: '+506 2460-1976',
    email: 'emilsemendez@gmail.com',
    address: 'Provincia de Alajuela, San Carlos, Barrio Cedral Sur',
    pricePerNight: 25000,
    currency: 'CRC',
    travelTime: { es: '17 minutos', en: '17 minutes' },
    roomTypes: {
      es: 'Individuales, dobles, triples y familiares',
      en: 'Single, double, triple and family rooms',
    },
    amenities: {
      es: 'Desayuno, aire acondicionado, wifi, piscina y yacusi.',
      en: 'Breakfast, air conditioning, Wi-Fi, pool and jacuzzi.',
    },
    paymentMethods: {
      es: 'Transferencia, Sinpe, efectivo y tarjeta.',
      en: 'Bank transfer, Sinpe, cash and card.',
    },
    cancellationPolicy: {
      es: 'Puede reservar con un 40 % u 50 %.',
      en: 'Bookings can be made with a 40% or 50% deposit.',
    },
    website: 'https://www.facebook.com/search/top?q=Loma%20Verde%20Hotel%20Ciudad%20Quesada',
    websiteLabel: 'Facebook · Loma Verde Hotel',
    mapsUrl: 'https://maps.app.goo.gl/bsnbABemYP9ddYz48',
  },
  {
    id: 'mi-linda-tierra',
    name: 'Hotel Mi Linda Tierra',
    phone: '+506 2461-2244',
    email: 'hotelmilindatierrareserva@hotmail.com',
    address: '800 metros del Hospital San Carlos, Provincia de Alajuela, Ciudad Quesada',
    pricePerNight: 25000,
    currency: 'CRC',
    travelTime: { es: '17 minutos', en: '17 minutes' },
    roomTypes: { es: 'Deluxe y Standard', en: 'Deluxe and Standard rooms' },
    amenities: { es: 'Wifi, desayuno y aire acondicionado.', en: 'Wi-Fi, breakfast and air conditioning.' },
    paymentMethods: { es: 'Sinpe, transferencia y efectivo.', en: 'Sinpe, bank transfer and cash.' },
    cancellationPolicy: {
      es: 'Reserva con un 50 %. Si cancela con más de 48 horas de anticipación se devuelve el dinero; dentro de las 48 horas solo se devuelve el 10 %.',
      en: 'Book with a 50% deposit. Full refund if cancelled more than 48 hours in advance; within 48 hours only 10% is refunded.',
    },
    notes: {
      es: 'Precios divididos en dos categorías. Deluxe (siempre incluyen desayuno): individual ₡39 550, doble ₡45 200, triple ₡58 700; tarifa corporativa para una persona ₡36 550. Standard: sencilla ₡22 000 sin desayuno o ₡25 000 con desayuno; sencilla doble (parejas) ₡25 000 sin desayuno o ₡31 000 con desayuno; doble estándar ₡31 500 sin desayuno o ₡36 500 con desayuno; triple ₡42 000 sin desayuno o ₡48 000 con desayuno. Persona adicional: ₡10 000 sin desayuno o ₡12 000 con desayuno.',
      en: 'Rates are split into two categories. Deluxe (breakfast always included): single CRC 39,550, double CRC 45,200, triple CRC 58,700; corporate rate for one person CRC 36,550. Standard: single CRC 22,000 without breakfast or CRC 25,000 with breakfast; single double (couples) CRC 25,000 without breakfast or CRC 31,000 with breakfast; standard double CRC 31,500 without breakfast or CRC 36,500 with breakfast; triple CRC 42,000 without breakfast or CRC 48,000 with breakfast. Extra person: CRC 10,000 without breakfast or CRC 12,000 with breakfast.',
    },
    website:
      'https://www.facebook.com/search/top?q=Hotel%20Mi%20Linda%20Tierra%20Ciudad%20Quesada',
    websiteLabel: 'Facebook · Hotel Mi Linda Tierra',
    mapsUrl: 'https://maps.app.goo.gl/cuWNQwU7KPaPQR6M9',
  },
  {
    id: 'terra-viva',
    name: 'Terra Viva Hotel',
    phone: '+506 2462-5000',
    email: 'reservaciones@terravivahotel.com',
    address: 'San Carlos, Provincia de Alajuela, Ciudad Quesada',
    pricePerNight: 36000,
    currency: 'CRC',
    travelTime: { es: '15 minutos', en: '15 minutes' },
    roomTypes: {
      es: 'Individuales, dobles, triples y familiares',
      en: 'Single, double, triple and family rooms',
    },
    amenities: {
      es: 'Aire acondicionado, wifi, estacionamiento, recepción 24 h y desayuno.',
      en: 'Air conditioning, Wi-Fi, parking, 24-hour front desk and breakfast.',
    },
    paymentMethods: { es: 'Sinpe, transferencia y efectivo.', en: 'Sinpe, bank transfer and cash.' },
    cancellationPolicy: {
      es: 'El pago se realiza al momento del ingreso.',
      en: 'Payment is made upon check-in.',
    },
    website: 'https://www.facebook.com/search/top?q=Terra%20Viva%20Hotel%20Ciudad%20Quesada',
    websiteLabel: 'Facebook · Terra Viva Hotel',
    mapsUrl: 'https://maps.app.goo.gl/uPrjD4a6epcF1KBg6',
  },
  {
    id: 'ventura',
    name: 'Hotel Ventura',
    phone: '+506 2460-5152',
    email: 'hotelventura.cr@gmail.com',
    address:
      '75 metros al oeste del Banco Popular y de Desarrollo Popular, Provincia de Alajuela, Ciudad Quesada, 21001',
    pricePerNight: 25000,
    currency: 'CRC',
    travelTime: { es: '19 minutos', en: '19 minutes' },
    roomTypes: { es: 'Dobles', en: 'Double rooms' },
    amenities: {
      es: 'Wifi, estacionamiento, recepción 24 h, servicio de automóvil privado y aire acondicionado.',
      en: 'Wi-Fi, parking, 24-hour front desk, private car service and air conditioning.',
    },
    paymentMethods: { es: 'Tarjeta, Sinpe y efectivo.', en: 'Card, Sinpe and cash.' },
    cancellationPolicy: {
      es: 'Puede reservar con la mitad o pagar completo al llegar al hotel.',
      en: 'Book with a half deposit or pay in full upon arrival at the hotel.',
    },
    website: 'https://www.facebook.com/search/top?q=Hotel%20Ventura%20Ciudad%20Quesada',
    websiteLabel: 'Facebook · Hotel Ventura',
    mapsUrl: 'https://maps.app.goo.gl/vPc11PyGWDKv74nm9',
  },
  {
    id: 'la-central',
    name: 'Hotel La Central',
    phone: '+506 2460-0301',
    email: 'hotel@lacentral.cr.com',
    address: 'Provincia de Alajuela, Ciudad Quesada',
    pricePerNight: 18000,
    currency: 'CRC',
    travelTime: { es: '18 minutos', en: '18 minutes' },
    roomTypes: {
      es: 'Individuales, dobles, triples y familiares',
      en: 'Single, double, triple and family rooms',
    },
    amenities: { es: 'Wifi y ventilador de techo.', en: 'Wi-Fi and ceiling fan.' },
    paymentMethods: {
      es: 'Tarjeta, Sinpe, efectivo y transferencia.',
      en: 'Card, Sinpe, cash and bank transfer.',
    },
    cancellationPolicy: { es: 'El pago se realiza en el hotel.', en: 'Pay at the hotel.' },
    website: 'https://www.facebook.com/search/top?q=Hotel%20La%20Central%20Ciudad%20Quesada',
    websiteLabel: 'Facebook · Hotel La Central',
    mapsUrl: 'https://maps.app.goo.gl/EB7AMMaEm5iaBskS9',
  },
  {
    id: 'tierra-de-volcanes',
    name: 'Hotel Tierra de Volcanes',
    phone: '+506 8324-4000',
    email: 'hoteltierradevolcanes@gmail.com',
    address: 'Provincia de Alajuela, La Fortuna, 20213',
    pricePerNight: 25000,
    currency: 'CRC',
    travelTime: { es: '25 minutos', en: '25 minutes' },
    roomTypes: {
      es: 'Individuales, dobles, triples y familiares',
      en: 'Single, double, triple and family rooms',
    },
    amenities: {
      es: 'Wifi, aire acondicionado, piscinas, masajes y desayuno.',
      en: 'Wi-Fi, air conditioning, pools, massages and breakfast.',
    },
    paymentMethods: {
      es: 'Tarjeta, Sinpe, efectivo y transferencia.',
      en: 'Card, Sinpe, cash and bank transfer.',
    },
    cancellationPolicy: {
      es: 'Dentro de las últimas 24 horas se debe pagar el 100 %.',
      en: 'Within the last 24 hours, 100% must be paid.',
    },
    website:
      'https://www.facebook.com/search/top?q=Hotel%20Tierra%20de%20Volcanes%20La%20Fortuna',
    websiteLabel: 'Facebook · Hotel Tierra de Volcanes',
    mapsUrl: 'https://maps.app.goo.gl/AGA2iSJwrqr7xnnC8',
  },
  {
    id: 'san-rafael-ecolodge',
    name: 'Hotel San Rafael Ecolodge',
    phone: '+506 8395-9787',
    email: 'hotelsanrafaelecolodge@gmail.com',
    address: '900 metros noroeste de la Iglesia Católica, Provincia de Alajuela, La Tigra, 21008',
    pricePerNight: 30000,
    currency: 'CRC',
    travelTime: { es: '21 minutos', en: '21 minutes' },
    roomTypes: { es: 'Individuales, dobles y triples', en: 'Single, double and triple rooms' },
    amenities: {
      es: 'Transporte, wifi, piscina, yoga y restaurante.',
      en: 'Shuttle service, Wi-Fi, pool, yoga and restaurant.',
    },
    paymentMethods: {
      es: 'Tarjeta, Sinpe, efectivo y transferencia.',
      en: 'Card, Sinpe, cash and bank transfer.',
    },
    cancellationPolicy: { es: '50 % para reservar.', en: '50% deposit to reserve.' },
    mapsUrl: 'https://maps.app.goo.gl/3XYvwA4TyV1KFkTZ9',
  },
  {
    id: 'monteriggioni',
    name: 'Hotel MonteRiggioni',
    phone: '+506 8355-7209',
    address: 'Sobre Ruta 35, en el centro de Florencia, Alajuela',
    pricePerNight: 17000,
    currency: 'CRC',
    travelTime: { es: '10 minutos', en: '10 minutes' },
    roomTypes: { es: 'Dobles y cuádruples', en: 'Double and quadruple rooms' },
    amenities: {
      es: 'Parqueo privado gratuito, wifi de cortesía y aire acondicionado.',
      en: 'Free private parking, complimentary Wi-Fi and air conditioning.',
    },
    paymentMethods: {
      es: 'Tarjetas de crédito y débito, efectivo, dólares estadounidenses y colones.',
      en: 'Credit and debit cards, cash, US dollars and colones.',
    },
    cancellationPolicy: {
      es: 'Reservas por el sitio oficial, WhatsApp, Booking o Expedia.',
      en: 'Book through the official site, WhatsApp, Booking or Expedia.',
    },
    website: 'https://www.instagram.com/hotelmonteriggionicr/',
    websiteLabel: 'Instagram · @hotelmonteriggionicr',
  },
];
