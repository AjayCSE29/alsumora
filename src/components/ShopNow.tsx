import { useLanguage } from '../i18n/LanguageContext';
import { Link } from '../router/Router';

const CATALOGUE_HREF = '/store';

export function ShopNow() {
  const { translation } = useLanguage();

  return (
    <section className="shop-now" aria-label={translation.shopNow}>
      <Link className="shop-now__link" to={CATALOGUE_HREF}>
        {translation.shopNow}
      </Link>
    </section>
  );
}
