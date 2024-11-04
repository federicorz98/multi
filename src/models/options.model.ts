// TODO - handle string[]
export type Options<T extends string | number> = Record<T, string>;

export function isOptions<T extends string | number>(obj: object): obj is Options<T> {
  return typeof obj === 'object' && Object.values(obj).every((val) => typeof val === 'string');
}

export type RichOptions<T extends string | number> = Record<T, { label: string; content: React.ReactNode }>;

// TODO - handle rich options
export type SelectInputOption<T extends string | number> = { label: string; value: T; key: string };

export function isRichOptions<T extends string | number>(obj: object): obj is RichOptions<T> {
  return typeof obj === 'object' && Object.values(obj).every((val) => typeof val === 'object' && 'label' in val && 'content' in val);
}
