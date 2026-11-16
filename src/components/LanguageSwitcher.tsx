import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { languageMeta, languages } from '../i18n/translations';
import { ChevronIcon } from './icons';

export function LanguageSwitcher() {
  const { language, translation, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        event.target instanceof Node &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (nextLanguage: (typeof languages)[number]) => {
    setLanguage(nextLanguage);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <div className="language-switcher" ref={containerRef}>
      <button
        ref={triggerRef}
        type="button"
        className="language-switcher__trigger"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={translation.languageSwitcher.label}
        onClick={() => setIsOpen((value) => !value)}
      >
        <span className="language-switcher__label">
          {translation.languageSwitcher.label}
        </span>
        <span className="language-switcher__value">
          {languageMeta[language].nativeLabel}
        </span>
        <ChevronIcon className={`language-switcher__chevron${isOpen ? ' is-open' : ''}`} />
      </button>
      {isOpen && (
        <ul
          className="language-switcher__menu"
          role="listbox"
          aria-label={translation.languageSwitcher.label}
        >
          {languages.map((option) => (
            <li key={option}>
              <button
                type="button"
                role="option"
                aria-selected={option === language}
                className={`language-switcher__option${option === language ? ' is-selected' : ''}`}
                onClick={() => handleSelect(option)}
              >
                {languageMeta[option].nativeLabel}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
