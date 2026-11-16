import { MediaPanel } from './MediaPanel';
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';
import { useLanguage } from '../i18n/LanguageContext';

const PANELS = [
  {
    id: 'fashion',
    posterSrc: '/assets/fashion/fashion-poster.jpg',
    videoSrc: '/assets/fashion/fashion-video.mp4',
    href: '/fashion',
  },
  {
    id: 'accessories',
    posterSrc: '/assets/accessories/accessories-poster.jpg',
    videoSrc: '/assets/accessories/accessories-video.mp4',
    href: '/accessories',
  },
] as const;

export function SplitHero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const { translation } = useLanguage();

  return (
    <main className="hero" aria-labelledby="brand-wordmark">
      <h1 id="brand-wordmark" className="hero__wordmark">
        {translation.brand}
      </h1>
      <div className="hero__panels">
        {PANELS.map((panel) => {
          const localizedPanel = translation.hero.panels[panel.id];
          return (
            <MediaPanel
              key={panel.id}
              id={panel.id}
              title={localizedPanel.title}
              cta={localizedPanel.cta}
              ctaAriaLabel={localizedPanel.ctaAriaLabel}
              posterSrc={panel.posterSrc}
              videoSrc={panel.videoSrc}
              href={panel.href}
              prefersReducedMotion={prefersReducedMotion}
            />
          );
        })}
      </div>
    </main>
  );
}
