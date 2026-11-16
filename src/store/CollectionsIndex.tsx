import { Link } from '../router/Router';
import { categoryIds, getCollectionProducts } from './data/catalog';
import { formatNumber } from './format';
import { ProductMedia } from './ProductMedia';
import { collectionHref } from './routes';
import { fillTemplate } from './translations';
import { useStoreTranslation } from './useStoreTranslation';

export function CollectionsIndex() {
  const { language, t } = useStoreTranslation();

  return (
    <main className="store-main" id="store-main">
      <div className="store-shell">
        <header className="store-page-heading">
          <p className="store-eyebrow">{t.collections.eyebrow}</p>
          <h1 className="store-page-heading__title">{t.collections.title}</h1>
          <p className="store-page-heading__intro">{t.collections.intro}</p>
        </header>

        <div className="store-collections">
          {categoryIds.map((categoryId) => {
            const items = getCollectionProducts(categoryId);
            const first = items[0];
            const label = t.categories[categoryId];
            return (
              <article className="store-collection-tile" key={categoryId}>
                <Link to={collectionHref(categoryId)} className="store-collection-tile__link">
                  {first ? <ProductMedia src={first.images.main} alt={first.name} /> : null}
                  <h2 className="store-collection-tile__title">{label}</h2>
                  <p className="store-collection-tile__count">
                    {fillTemplate(
                      new Intl.PluralRules(language).select(items.length) === 'one'
                        ? t.collection.countOne
                        : t.collection.countOther,
                      { count: formatNumber(language, items.length) },
                    )}
                  </p>
                  <span className="store-collection-tile__action">{t.collections.view}</span>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </main>
  );
}
