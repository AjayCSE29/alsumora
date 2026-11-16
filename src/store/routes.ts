import { categoryIds, type CollectionId } from './data/catalog';

export type StoreRoute =
  | { kind: 'collection'; collectionId: CollectionId }
  | { kind: 'product'; slug: string }
  | { kind: 'collections' }
  | { kind: 'about' }
  | { kind: 'not-found' };

export function collectionHref(collectionId: CollectionId): string {
  return collectionId === 'all' ? '/store' : `/store/${collectionId}`;
}

export function productHref(slug: string): string {
  return `/store/product/${slug}`;
}

export function parseStorePath(pathname: string): StoreRoute {
  const parts = pathname.split('/').filter(Boolean);
  if (parts[0] !== 'store') {
    return { kind: 'not-found' };
  }

  if (parts.length === 1) {
    return { kind: 'collection', collectionId: 'all' };
  }

  const [, first, second] = parts;

  if (parts.length === 2) {
    if (first === 'collections') return { kind: 'collections' };
    if (first === 'about') return { kind: 'about' };
    if (categoryIds.includes(first as (typeof categoryIds)[number])) {
      return { kind: 'collection', collectionId: first as CollectionId };
    }
    return { kind: 'not-found' };
  }

  if (parts.length === 3 && first === 'product' && second) {
    return { kind: 'product', slug: second };
  }

  return { kind: 'not-found' };
}
