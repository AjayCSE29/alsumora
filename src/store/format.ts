import type { Language } from '../i18n/translations';

export function formatNumber(language: Language, value: number): string {
  return new Intl.NumberFormat(language).format(value);
}
