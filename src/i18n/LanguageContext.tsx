import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { languageMeta, translations, type Language, type TextDirection, type Translation } from './translations';

const STORAGE_KEY = 'al-sumora.language';

type LanguageContextValue = {
  language: Language;
  direction: TextDirection;
  translation: Translation;
  setLanguage: (language: Language) => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en';
  }

  try {
    const storedLanguage = window.localStorage.getItem(STORAGE_KEY);
    if (storedLanguage === 'en' || storedLanguage === 'ar' || storedLanguage === 'ta') {
      return storedLanguage;
    }
  } catch {
    return 'en';
  }

  return 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => getInitialLanguage());

  const setLanguage = useCallback((nextLanguage: Language) => {
    setLanguageState(nextLanguage);

    try {
      window.localStorage.setItem(STORAGE_KEY, nextLanguage);
    } catch {
      // Local storage can be unavailable in private browsing contexts.
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.lang = language;
    root.dir = languageMeta[language].direction;
    root.dataset.language = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      direction: languageMeta[language].direction,
      translation: translations[language],
      setLanguage,
    }),
    [language, setLanguage],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
