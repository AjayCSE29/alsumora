import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type AnchorHTMLAttributes,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
} from 'react';

type NavigateOptions = {
  replace?: boolean;
};

type RouterContextValue = {
  pathname: string;
  search: string;
  navigate: (to: string, options?: NavigateOptions) => void;
};

const RouterContext = createContext<RouterContextValue | null>(null);

function currentLocation(): { pathname: string; search: string } {
  if (typeof window === 'undefined') {
    return { pathname: '/', search: '' };
  }
  return { pathname: window.location.pathname, search: window.location.search };
}

function isExternalUrl(url: string): boolean {
  return /^[a-z][a-z\d+.-]*:/i.test(url) || url.startsWith('//');
}

export function RouterProvider({ children }: { children: ReactNode }) {
  const [location, setLocation] = useState(currentLocation);

  useEffect(() => {
    const handlePopState = () => setLocation(currentLocation());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((to: string, options: NavigateOptions = {}) => {
    if (isExternalUrl(to)) {
      window.location.href = to;
      return;
    }

    const url = new URL(to, window.location.origin);
    if (url.pathname === window.location.pathname && url.search === window.location.search && !url.hash) {
      return;
    }

    if (options.replace) {
      window.history.replaceState(null, '', url.pathname + url.search + url.hash);
    } else {
      window.history.pushState(null, '', url.pathname + url.search + url.hash);
    }
    setLocation(currentLocation());

    if (url.hash) {
      const target = document.getElementById(url.hash.slice(1));
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, []);

  const value = useMemo<RouterContextValue>(
    () => ({ pathname: location.pathname, search: location.search, navigate }),
    [location.pathname, location.search, navigate],
  );

  return <RouterContext.Provider value={value}>{children}</RouterContext.Provider>;
}

export function useRouter(): RouterContextValue {
  const context = useContext(RouterContext);
  if (!context) {
    throw new Error('useRouter must be used within a RouterProvider');
  }
  return context;
}

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  to: string;
  replace?: boolean;
};

export function Link({ to, replace, onClick, children, ...props }: LinkProps) {
  const { navigate } = useRouter();

  const handleClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (event.defaultPrevented) {
      return;
    }
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }
    if (props.target && props.target !== '_self') {
      return;
    }
    if (props.download || isExternalUrl(to)) {
      return;
    }
    event.preventDefault();
    navigate(to, { replace });
  };

  return (
    <a href={to} onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
