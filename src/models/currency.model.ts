export type Currency = 'ARS' | 'USD' | 'EXT';
export type SimpleCurrency = Extract<Currency, 'ARS' | 'USD'>;