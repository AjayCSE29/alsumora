import { useEffect, useRef } from 'react';
import { CloseIcon, MenuIcon, SearchIcon } from '../components/icons';
import { useLanguage } from '../i18n/LanguageContext';
import { Link } from '../router/Router';
import { getNavItems } from './navigation';
import type { StoreRoute } from './routes';
import { useStoreTranslation } from './useStoreTranslation';

type StoreHeaderProps = {
  route: StoreRoute;
  searchOpen: boolean;
  onToggleSearch: () => void;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
};

export function StoreHeader({
  route,
  searchOpen,
  onToggleSearch,
  menuOpen,
  onToggleMenu,
  onCloseMenu,
}: StoreHeaderProps) {
  const { translation } = useLanguage();
  const { t } = useStoreTranslation();
  const navItems = getNavItems(t, route);
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (headerRef.current && event.target instanceof Node && !headerRef.current.contains(event.target)) {
        onCloseMenu();
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onCloseMenu();
        menuButtonRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [menuOpen, onCloseMenu]);

  return (
    <header className="store-header" ref={headerRef}>
      <div className="store-header__bar store-shell">
        <button
          type="button"
          className={`store-header__search${searchOpen ? ' is-open' : ''}`}
          onClick={onToggleSearch}
          aria-label={t.header.search}
          aria-expanded={searchOpen}
          aria-controls="store-search-panel"
        >
          <SearchIcon />
          <span className="store-header__search-label">{t.header.search}</span>
        </button>

        <Link className="store-header__wordmark" to="/" aria-label={t.homeLabel}>
          {translation.brand}
        </Link>

        <div className="store-header__actions">
          <button
            ref={menuButtonRef}
            type="button"
            className="store-header__menu"
            onClick={onToggleMenu}
            aria-expanded={menuOpen}
            aria-controls="store-mobile-menu"
            aria-label={menuOpen ? t.header.closeMenu : t.header.menu}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      <nav className="store-nav store-shell" aria-label={t.header.primaryNav}>
        {navItems.map((item) => (
          <Link
            key={item.key}
            to={item.href}
            className={`store-nav__link${item.active ? ' is-active' : ''}`}
            aria-current={item.active ? 'page' : undefined}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      {menuOpen ? (
        <div className="store-mobile-menu" id="store-mobile-menu">
          <nav className="store-mobile-menu__nav" aria-label={t.header.primaryNav}>
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.href}
                className={`store-mobile-menu__link${item.active ? ' is-active' : ''}`}
                aria-current={item.active ? 'page' : undefined}
                onClick={onCloseMenu}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
