import { Link } from '../router/Router';
import { getProductBySlug } from './data/catalog';
import { ProductGallery } from './ProductGallery';
import { collectionHref } from './routes';
import { fillTemplate } from './translations';
import { useStoreTranslation } from './useStoreTranslation';
import { StoreNotFound } from './StoreNotFound';

const CONTACT_EMAIL = 'al.sumora.support@gmail.com';

export function ProductDetail({ slug }: { slug: string }) {
  const { t } = useStoreTranslation();
  const product = getProductBySlug(slug);

  if (!product) {
    return <StoreNotFound />;
  }

  const categoryLabel = t.categories[product.categoryId];

  return (
    <main className="store-main" id="store-main">
      <div className="store-shell">
        <p className="store-breadcrumb">
          <Link to={collectionHref('all')}>{t.nav.allCollections}</Link>
          <span className="store-breadcrumb__separator" aria-hidden="true">
            /
          </span>
          <Link to={collectionHref(product.categoryId)}>{categoryLabel}</Link>
          <span className="store-breadcrumb__separator" aria-hidden="true">
            /
          </span>
          <span aria-current="page" lang="en" dir="ltr">
            {product.name}
          </span>
        </p>

        <div className="product-detail">
          <ProductGallery name={product.name} main={product.images.main} gallery={product.images.gallery} />

          <div className="product-detail__info">
            <p className="store-eyebrow">{categoryLabel}</p>
            <h1 className="product-detail__title" lang="en" dir="ltr">
              {product.name}
            </h1>

            <dl className="product-detail__specs">
              <div>
                <dt>{t.product.category}</dt>
                <dd lang="en" dir="ltr">
                  {product.category}
                </dd>
              </div>
              <div>
                <dt>{t.product.colour}</dt>
                <dd lang="en" dir="ltr">
                  {product.colour}
                </dd>
              </div>
              <div>
                <dt>{t.product.style}</dt>
                <dd lang="en" dir="ltr">
                  {product.style}
                </dd>
              </div>
              <div>
                <dt>{t.product.fit}</dt>
                <dd lang="en" dir="ltr">
                  {product.fit}
                </dd>
              </div>
            </dl>

            <section className="product-detail__section">
              <h2 className="product-detail__section-title">{t.product.description}</h2>
              <div className="product-detail__description" lang="en" dir="ltr">
                {product.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>

            <a
              className="store-contact-button"
              href={`mailto:${CONTACT_EMAIL}`}
              aria-label={`${t.product.contactUs} — ${product.name}`}
            >
              {t.product.contactUs}
            </a>

            <div>
              <Link className="product-detail__back" to={collectionHref(product.categoryId)}>
                {fillTemplate(t.product.backTo, { collection: categoryLabel })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
