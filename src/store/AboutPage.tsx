import { Link } from '../router/Router';
import { useStoreTranslation } from './useStoreTranslation';

export function AboutPage() {
  const { t } = useStoreTranslation();

  return (
    <main className="store-main" id="store-main">
      <div className="store-shell store-about">
        <p className="store-breadcrumb">
          <Link to="/store/collections">{t.collections.title}</Link>
          <span className="store-breadcrumb__separator" aria-hidden="true">
            /
          </span>
          <span aria-current="page">{t.nav.about}</span>
        </p>

        <header className="store-page-heading">
          <p className="store-eyebrow">{t.about.eyebrow}</p>
          <h1 className="store-page-heading__title">{t.about.title}</h1>
        </header>

        <div className="store-about__body">
          {t.about.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </main>
  );
}
