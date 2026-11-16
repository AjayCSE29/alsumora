import { LanguageSwitcher } from '../components/LanguageSwitcher';
import { useStoreTranslation } from './useStoreTranslation';

export function StoreFooter() {
  const { t } = useStoreTranslation();

  return (
    <footer className="store-footer">
      <div className="store-shell store-footer__inner">
        <div className="store-footer__meta">
          <p>{t.footer.copyright}</p>
        </div>
        <div className="store-footer__language">
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
