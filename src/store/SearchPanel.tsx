import { useEffect, useRef } from 'react';
import { CloseIcon, SearchIcon } from '../components/icons';
import { useStoreTranslation } from './useStoreTranslation';

type SearchPanelProps = {
  query: string;
  onQueryChange: (value: string) => void;
  onClose: () => void;
};

export function SearchPanel({ query, onQueryChange, onClose }: SearchPanelProps) {
  const { t } = useStoreTranslation();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return (
    <div className="store-search" id="store-search-panel">
      <form className="store-search__inner store-shell" role="search" onSubmit={(event) => event.preventDefault()}>
        <SearchIcon className="store-search__icon" />
        <label className="store-sr-only" htmlFor="store-search-input">
          {t.header.search}
        </label>
        <input
          ref={inputRef}
          id="store-search-input"
          className="store-search__input"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder={t.header.searchPlaceholder}
          autoComplete="off"
          spellCheck={false}
        />
        {query ? (
          <button type="button" className="store-search__clear" onClick={() => onQueryChange('')}>
            {t.collection.clear}
          </button>
        ) : null}
        <button type="button" className="store-search__close" onClick={onClose} aria-label={t.header.closeSearch}>
          <CloseIcon />
        </button>
      </form>
    </div>
  );
}
