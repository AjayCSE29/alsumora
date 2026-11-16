import { AccessibilityToggle } from './AccessibilityToggle';
import { FooterColumn } from './FooterColumn';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Newsletter } from './Newsletter';
import { useLanguage } from '../i18n/LanguageContext';

type FooterProps = {
  highContrast: boolean;
  onHighContrastChange: (value: boolean) => void;
};

export function Footer({ highContrast, onHighContrastChange }: FooterProps) {
  const { translation } = useLanguage();

  return (
    <footer className="footer" aria-label={translation.footer.navLabel}>
      <div className="footer__container">
        <div className="footer__top">
          <Newsletter />
          <AccessibilityToggle highContrast={highContrast} onHighContrastChange={onHighContrastChange} />
        </div>

        <nav className="footer__nav" aria-label={translation.footer.navLabel}>
          <div className="footer__columns">
            {translation.footer.columns.map((column) => (
              <FooterColumn key={column.heading} heading={column.heading} links={column.links} />
            ))}
          </div>
        </nav>

        <div className="footer__bottom">
          <div className="footer__social">
            <p className="footer__label">{translation.footer.socialLabel}</p>
            <ul className="footer__social-links">
              {translation.footer.social.map((social) => (
                <li key={social.label}>
                  <a className="footer__social-link" href={social.href}>
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <p className="footer__brand" aria-hidden="true">
            {translation.brand}
          </p>

          <div className="footer__language">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
