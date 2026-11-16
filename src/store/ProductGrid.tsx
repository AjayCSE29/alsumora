import { useLayoutEffect, useRef } from 'react';
import type { Product } from './data/catalog';
import { editorialLayout, getLayoutBreakpoint, getLayoutSlot } from './layout';
import { ProductCard } from './ProductCard';
import { useStoreTranslation } from './useStoreTranslation';

type ProductGridProps = {
  products: Product[];
};

export function ProductGrid({ products }: ProductGridProps) {
  const { language } = useStoreTranslation();
  const gridRef = useRef<HTMLDivElement>(null);
  const itemKey = products.map((product) => product.id).join('|');

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    let frame = 0;
    let observer: ResizeObserver | null = null;
    let disposed = false;

    const layout = () => {
      if (!grid.isConnected) return;

      const items = Array.from(grid.children).filter(
        (child): child is HTMLElement => child instanceof HTMLElement,
      );
      if (items.length === 0) return;

      const width = grid.clientWidth;
      if (width === 0) return;

      const breakpoint = getLayoutBreakpoint(window.innerWidth);
      const config = editorialLayout[breakpoint];
      const columns = config.columns;
      const columnWidth = (width - config.gapX * (columns - 1)) / columns;

      grid.dataset.editorial = 'on';

      const slots = items.map((_, index) => getLayoutSlot(index, breakpoint));

      items.forEach((item, index) => {
        const slot = slots[index]!;
        item.dataset.tile = slot.size;
        const itemWidth = slot.span * columnWidth + (slot.span - 1) * config.gapX;
        item.style.width = `${itemWidth}px`;
      });

      const heights = new Array<number>(columns).fill(0);

      items.forEach((item, index) => {
        const slot = slots[index]!;
        const itemHeight = item.offsetHeight;

        let start = 0;
        let top = Number.POSITIVE_INFINITY;
        for (let candidate = 0; candidate <= columns - slot.span; candidate++) {
          let candidateTop = 0;
          for (let column = candidate; column < candidate + slot.span; column++) {
            candidateTop = Math.max(candidateTop, heights[column] ?? 0);
          }
          if (candidateTop < top - 0.5) {
            top = candidateTop;
            start = candidate;
          }
        }

        const left = start * (columnWidth + config.gapX);
        item.style.left = `${left}px`;
        item.style.top = `${top}px`;

        const nextHeight = top + itemHeight + config.gapY;
        for (let column = start; column < start + slot.span; column++) {
          heights[column] = nextHeight;
        }
      });

      const height = Math.max(0, Math.max(...heights) - config.gapY);
      const heightValue = `${Math.round(height)}px`;
      if (grid.style.height !== heightValue) grid.style.height = heightValue;
    };

    const schedule = () => {
      if (disposed) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(layout);
    };

    layout();

    observer = new ResizeObserver(schedule);
    observer.observe(grid);
    Array.from(grid.children).forEach((child) => {
      if (child instanceof HTMLElement) observer?.observe(child);
    });
    window.addEventListener('resize', schedule);
    void document.fonts.ready.then(schedule);

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer?.disconnect();
      window.removeEventListener('resize', schedule);
      grid.removeAttribute('data-editorial');
      grid.style.height = '';
      Array.from(grid.children).forEach((child) => {
        if (!(child instanceof HTMLElement)) return;
        child.style.width = '';
        child.style.left = '';
        child.style.top = '';
        delete child.dataset.tile;
      });
    };
  }, [itemKey, language]);

  return (
    <div className="product-grid" ref={gridRef}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
