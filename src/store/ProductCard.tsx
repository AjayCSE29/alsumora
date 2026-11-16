import { Link } from '../router/Router';
import type { Product } from './data/catalog';
import { ProductMedia } from './ProductMedia';
import { productHref } from './routes';
import { useStoreTranslation } from './useStoreTranslation';

export function ProductCard({ product }: { product: Product }) {
  const { t } = useStoreTranslation();

  return (
    <article className="product-card">
      <Link className="product-card__link" to={productHref(product.slug)} aria-label={product.name}>
        <ProductMedia src={product.images.main} alt={product.name} />
        <div className="product-card__body">
          <p className="product-card__category">{t.categories[product.categoryId]}</p>
          <h3 className="product-card__name" lang="en" dir="ltr">
            {product.name}
          </h3>
          <p className="product-card__description" lang="en" dir="ltr">
            {product.description[0]}
          </p>
        </div>
      </Link>
    </article>
  );
}
