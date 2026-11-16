import { useEffect, useState } from 'react';
import { SplitHero } from '../components/SplitHero';
import { ShopNow } from '../components/ShopNow';
import { Footer } from '../components/Footer';

export function HomePage() {
  const [highContrast, setHighContrast] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('high-contrast', highContrast);
    return () => root.classList.remove('high-contrast');
  }, [highContrast]);

  return (
    <div className="page">
      <SplitHero />
      <ShopNow />
      <Footer highContrast={highContrast} onHighContrastChange={setHighContrast} />
    </div>
  );
}
