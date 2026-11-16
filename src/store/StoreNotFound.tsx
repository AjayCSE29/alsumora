import { Link } from '../router/Router';
import { useStoreTranslation } from './useStoreTranslation';

export function StoreNotFound() {
  const { t } = useStoreTranslation();

  return (
    <main className="store-main" id="store-main">
      <div className="store-shell store-empty">
        <h1 className="store-empty__title">{t.product.notFoundTitle}</h1>
        <p className="store-empty__body">{t.product.notFoundBody}</p>
        <Link className="store-link" to="/store/collections">
          {t.product.backToCollections}
        </Link>
      </div>
    </main>
  );
}
