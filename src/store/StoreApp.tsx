import { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { useRouter } from '../router/Router';
import { AboutPage } from './AboutPage';
import { CollectionView } from './CollectionView';
import { CollectionsIndex } from './CollectionsIndex';
import { getProductBySlug } from './data/catalog';
import { ProductDetail } from './ProductDetail';
import { collectionHref, parseStorePath } from './routes';
import { SearchPanel } from './SearchPanel';
import { StoreFooter } from './StoreFooter';
import { StoreHeader } from './StoreHeader';
import { StoreNotFound } from './StoreNotFound';
import { useStoreTranslation } from './useStoreTranslation';
import './store.css';

export function StoreApp() {
  const { pathname, navigate } = useRouter();
  const { translation } = useLanguage();
  const { t } = useStoreTranslation();
  const route = useMemo(() => parseStorePath(pathname), [pathname]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    let title = translation.brand;
    if (route.kind === 'collection') {
      const label = route.collectionId === 'all' ? t.nav.allCollections : t.categories[route.collectionId];
      title = `${label} — ${translation.brand}`;
    } else if (route.kind === 'product') {
      const product = getProductBySlug(route.slug);
      title = product
        ? `${product.name} — ${translation.brand}`
        : `${t.product.notFoundTitle} — ${translation.brand}`;
    } else if (route.kind === 'collections') {
      title = `${t.collections.title} — ${translation.brand}`;
    } else if (route.kind === 'about') {
      title = `${t.about.title} — ${translation.brand}`;
    }
    document.title = title;
  }, [route, t, translation.brand]);

  const handleQueryChange = (value: string) => {
    setQuery(value);
    if (!value || route.kind === 'collection') {
      return;
    }
    if (route.kind === 'product') {
      const product = getProductBySlug(route.slug);
      navigate(product ? collectionHref(product.categoryId) : '/store');
      return;
    }
    navigate('/store');
  };

  let view;
  switch (route.kind) {
    case 'collection':
      view = (
        <CollectionView
          collectionId={route.collectionId}
          query={query}
          onClearSearch={() => setQuery('')}
        />
      );
      break;
    case 'product':
      view = <ProductDetail slug={route.slug} />;
      break;
    case 'collections':
      view = <CollectionsIndex />;
      break;
    case 'about':
      view = <AboutPage />;
      break;
    default:
      view = <StoreNotFound />;
  }

  return (
    <div className="store">
      <StoreHeader
        route={route}
        searchOpen={searchOpen}
        onToggleSearch={() => {
          setMenuOpen(false);
          setSearchOpen((open) => !open);
        }}
        menuOpen={menuOpen}
        onToggleMenu={() => {
          setSearchOpen(false);
          setMenuOpen((open) => !open);
        }}
        onCloseMenu={() => setMenuOpen(false)}
      />
      {searchOpen ? (
        <SearchPanel query={query} onQueryChange={handleQueryChange} onClose={() => setSearchOpen(false)} />
      ) : null}
      {view}
      <StoreFooter />
    </div>
  );
}
