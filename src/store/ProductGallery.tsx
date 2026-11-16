import { useEffect, useState } from 'react';
import { imageDimensions } from './data/imageDimensions';
import { ProductMedia } from './ProductMedia';
import { fillTemplate } from './translations';
import { useStoreTranslation } from './useStoreTranslation';

type ProductGalleryProps = {
  name: string;
  main: string;
  gallery: string[];
};

export function ProductGallery({ name, main, gallery }: ProductGalleryProps) {
  const { t } = useStoreTranslation();
  const [failed, setFailed] = useState<Set<string>>(() => new Set());
  const [selected, setSelected] = useState(main);

  const available = [main, ...gallery].filter((src) => !failed.has(src));

  useEffect(() => {
    const remaining = [main, ...gallery].filter((src) => !failed.has(src));
    if (remaining.includes(selected)) return;
    setSelected(remaining[0] ?? main);
  }, [failed, selected, main, gallery]);

  const markFailed = (src: string) => {
    setFailed((previous) => {
      if (previous.has(src)) return previous;
      const next = new Set(previous);
      next.add(src);
      return next;
    });
  };

  if (available.length === 0) {
    return (
      <div className="product-gallery">
        <div className="product-media product-media--missing" role="img" aria-label={t.product.photographUnavailable}>
          <span className="product-media__missing-text">{t.product.photographUnavailable}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="product-gallery">
      <ProductMedia
        key={selected}
        src={selected}
        alt={name}
        className="product-gallery__main"
        eager
        onUnavailable={markFailed}
      />

      {available.length > 1 ? (
        <div className="product-gallery__thumbs" role="group" aria-label={name}>
          {available.map((src, index) => {
            const dimensions = imageDimensions[src];
            return (
              <button
                key={src}
                type="button"
                className={`product-gallery__thumb${src === selected ? ' is-active' : ''}`}
                aria-pressed={src === selected}
                aria-label={fillTemplate(t.product.viewPhotograph, { index: index + 1 })}
                onClick={() => setSelected(src)}
              >
                <img
                  src={src}
                  alt=""
                  width={dimensions?.width}
                  height={dimensions?.height}
                  loading="lazy"
                  decoding="async"
                  onError={() => markFailed(src)}
                />
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
