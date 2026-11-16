/**
 * Editorial layout configuration for the product catalogue.
 *
 * Tile sizes are assigned by slot index (not by product), so the composition
 * survives filtering, catalogue growth and product replacement. The pattern
 * repeats when the catalogue grows beyond its length.
 */

export type TileSize = 'feature' | 'large' | 'wide' | 'standard';
export type LayoutBreakpoint = 'desktop' | 'tablet' | 'mobile';

export type LayoutSlot = {
  size: TileSize;
  span: number;
  columns: number;
};

type BreakpointConfig = {
  columns: number;
  gapX: number;
  gapY: number;
  spans: Record<TileSize, number>;
  pattern: TileSize[];
};

export const editorialLayout: Record<LayoutBreakpoint, BreakpointConfig> = {
  desktop: {
    columns: 12,
    gapX: 26,
    gapY: 58,
    spans: { feature: 6, large: 5, wide: 4, standard: 3 },
    pattern: [
      'feature',
      'standard',
      'standard',
      'large',
      'standard',
      'wide',
      'large',
      'wide',
      'standard',
      'standard',
      'feature',
      'standard',
    ],
  },
  tablet: {
    columns: 6,
    gapX: 20,
    gapY: 48,
    spans: { feature: 4, large: 3, wide: 3, standard: 2 },
    pattern: [
      'feature',
      'standard',
      'standard',
      'large',
      'standard',
      'wide',
      'standard',
      'large',
    ],
  },
  mobile: {
    columns: 2,
    gapX: 14,
    gapY: 38,
    spans: { feature: 2, large: 2, wide: 1, standard: 1 },
    pattern: [
      'feature',
      'standard',
      'standard',
      'large',
      'standard',
      'standard',
      'feature',
      'standard',
      'standard',
      'large',
    ],
  },
};

export function getLayoutBreakpoint(viewportWidth: number): LayoutBreakpoint {
  if (viewportWidth >= 1200) return 'desktop';
  if (viewportWidth >= 768) return 'tablet';
  return 'mobile';
}

export function getLayoutSlot(index: number, breakpoint: LayoutBreakpoint): LayoutSlot {
  const config = editorialLayout[breakpoint];
  const size = config.pattern[index % config.pattern.length] ?? 'standard';
  return {
    size,
    span: config.spans[size],
    columns: config.columns,
  };
}
