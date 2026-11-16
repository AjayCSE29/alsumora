import { useLanguage } from '../i18n/LanguageContext';
import { storeTranslations, type StoreTranslation } from './translations';

export function useStoreTranslation(): { language: ReturnType<typeof useLanguage>['language']; t: StoreTranslation } {
  const { language } = useLanguage();
  return { language, t: storeTranslations[language] };
}
