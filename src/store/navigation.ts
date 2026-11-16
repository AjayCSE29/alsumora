import type { StoreRoute } from './routes';
import type { StoreTranslation } from './translations';

export type NavKey =
  | 'allCollections'
  | 'outerwear'
  | 'mensFootwear'
  | 'womensFootwear'
  | 'collections'
  | 'about';

export type StoreNavItem = {
  key: NavKey;
  label: string;
  href: string;
  active: boolean;
};

export function getNavItems(t: StoreTranslation, route: StoreRoute): StoreNavItem[] {
  const collection = route.kind === 'collection' ? route.collectionId : null;

  return [
    {
      key: 'allCollections',
      label: t.nav.allCollections,
      href: '/store',
      active: collection === 'all',
    },
    {
      key: 'outerwear',
      label: t.nav.outerwear,
      href: '/store/outerwear',
      active: collection === 'outerwear',
    },
    {
      key: 'mensFootwear',
      label: t.nav.mensFootwear,
      href: '/store/mens-footwear',
      active: collection === 'mens-footwear',
    },
    {
      key: 'womensFootwear',
      label: t.nav.womensFootwear,
      href: '/store/womens-footwear',
      active: collection === 'womens-footwear',
    },
    {
      key: 'collections',
      label: t.nav.collections,
      href: '/store/collections',
      active: route.kind === 'collections',
    },
    {
      key: 'about',
      label: t.nav.about,
      href: '/store/about',
      active: route.kind === 'about',
    },
  ];
}
