import { useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { StoreApp } from './store/StoreApp';
import { useRouter } from './router/Router';

export function App() {
  const { pathname, navigate } = useRouter();
  const isStore = pathname === '/store' || pathname.startsWith('/store/');
  const isHome = pathname === '/';

  useEffect(() => {
    if (!isHome && !isStore) {
      navigate('/', { replace: true });
    }
  }, [isHome, isStore, navigate]);

  useEffect(() => {
    if (isHome) {
      document.title = 'Al Sumora';
    }
  }, [isHome]);

  if (isStore) {
    return <StoreApp />;
  }
  if (isHome) {
    return <HomePage />;
  }
  return null;
}
