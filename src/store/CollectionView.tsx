import { useEffect, useRef, useState } from 'react';
import { FilterIcon } from '../components/icons';
import { Link } from '../router/Router';
import {
  categoryIds,
  getCollectionProducts,
  type CollectionId,
  type Product,
} from './data/catalog';
import { formatNumber } from './format';
import { ProductGrid } from './ProductGrid';
import { collectionHref } from './routes';
import { StoreNotFound } from './StoreNotFound';
import { fillTemplate } from './translations';
import { useStoreTranslation } from './useStoreTranslation';

type CollectionViewProps = {
  collectionId: CollectionId;
  query: string;
  onClearSearch: () => void;
};

export function CollectionView({ collectionId, query, onClearSearch }: CollectionViewProps) {
  const { language, t } = useStoreTranslation();
  const [filterOpen, setFilterOpen] = useState(false);
  const filterButtonRef = useRef<HTMLButtonElement>(null);
  const filterPanelRef = useRef<HTMLDivElement>(null);

  const products = getCollectionProducts(collectionId);
  const title = collectionId === 'all' ? t.nav.allCollections : t.categories[collectionId];

  const collections = [
    { id: 'all' as const, label: t.nav.allCollections },
    ...categoryIds.map((id) => ({ id, label: t.categories[id] })),
  ];

  useEffect(() => {
    setFilterOpen(false);
  }, [collectionId]);

  useEffect(() => {
    if (!filterOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        filterPanelRef.current &&
        event.target instanceof Node &&
        !filterPanelRef.current.contains(event.target) &&
        !filterButtonRef.current?.contains(event.target)
      ) {
        setFilterOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setFilterOpen(false);
        filterButtonRef.current?.focus();
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [filterOpen]);

  if (products.length === 0) {
    return <StoreNotFound />;
  }

  const normalizedQuery = query.trim().toLocaleLowerCase(language);
  const filtered: Product[] = normalizedQuery
    ? products.filter((product) =>
        [
          product.name,
          product.category,
          product.colour,
          product.style,
          product.fit,
          product.description.join(' '),
        ]
          .join(' ')
          .toLocaleLowerCase(language)
          .includes(normalizedQuery),
      )
    : products;

  return (
    <main className="store-main" id="store-main">
      <div className="store-shell">
        <p className="store-breadcrumb">
          {collectionId === 'all' ? (
            <span aria-current="page">{t.nav.allCollections}</span>
          ) : (
            <>
              <Link to={collectionHref('all')}>{t.nav.allCollections}</Link>
              <span className="store-breadcrumb__separator" aria-hidden="true">
                /
              </span>
              <span aria-current="page">{title}</span>
            </>
          )}
        </p>

        <div className="store-collection__heading">
          <h1 className="store-collection__title">{title}</h1>
          <div className="store-collection__meta">
            <p className="store-collection__count" aria-live="polite">
              {fillTemplate(
                new Intl.PluralRules(language).select(filtered.length) === 'one'
                  ? t.collection.countOne
                  : t.collection.countOther,
                { count: formatNumber(language, filtered.length) },
              )}
            </p>
          </div>
        </div>

        <div className="store-collection__bar">
          <nav className="store-category-nav" aria-label={t.collection.categoriesLabel}>
            {collections.map((entry) => (
              <Link
                key={entry.id}
                to={collectionHref(entry.id)}
                className={`store-category-nav__link${entry.id === collectionId ? ' is-active' : ''}`}
                aria-current={entry.id === collectionId ? 'page' : undefined}
              >
                {entry.label}
              </Link>
            ))}
          </nav>

          <div className="store-tools">
            <div className="store-filter">
              <button
                ref={filterButtonRef}
                type="button"
                className={`store-tool${filterOpen ? ' is-open' : ''}`}
                onClick={() => setFilterOpen((open) => !open)}
                aria-expanded={filterOpen}
                aria-controls="store-filter-panel"
              >
                <FilterIcon />
                <span>{t.collection.filter}</span>
              </button>

              {filterOpen ? (
                <div
                  ref={filterPanelRef}
                  className="store-filter__panel"
                  id="store-filter-panel"
                  role="group"
                  aria-label={t.collection.filterHeading}
                >
                  <p className="store-filter__heading">{t.collection.filterHeading}</p>
                  <ul className="store-filter__list">
                    {collections.map((entry) => (
                      <li key={entry.id}>
                        <Link
                          to={collectionHref(entry.id)}
                          className={`store-filter__option${entry.id === collectionId ? ' is-active' : ''}`}
                          aria-current={entry.id === collectionId ? 'page' : undefined}
                          onClick={() => setFilterOpen(false)}
                        >
                          {entry.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        {filtered.length > 0 ? (
          <ProductGrid products={filtered} />
        ) : (
          <div className="store-empty">
            <h2 className="store-empty__title">{t.collection.noResultsTitle}</h2>
            <p className="store-empty__body">{t.collection.noResultsBody}</p>
            {query ? (
              <button type="button" className="store-empty__clear" onClick={onClearSearch}>
                {t.collection.clear}
              </button>
            ) : null}
          </div>
        )}
      </div>
    </main>
  );
}
