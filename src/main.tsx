import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource/cormorant-garamond/latin-300.css';
import '@fontsource/cormorant-garamond/latin-400.css';
import './styles.css';
import { App } from './App';
import { LanguageProvider } from './i18n/LanguageContext';
import { RouterProvider } from './router/Router';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Root element not found');
}

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </RouterProvider>
  </StrictMode>,
);
