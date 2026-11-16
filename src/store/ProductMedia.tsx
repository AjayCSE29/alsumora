import { useState } from 'react';
import { imageDimensions } from './data/imageDimensions';
import { useStoreTranslation } from './useStoreTranslation';

type ProductMediaProps = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
  onUnavailable?: (src: string) => void;
};

export function ProductMedia({ src, alt, className, eager = false, onUnavailable }: ProductMediaProps) {
  const { t } = useStoreTranslation();
  const [failed, setFailed] = useState(false);
  const dimensions = imageDimensions[src];

  if (failed) {
    return (
      <div className={`product-media product-media--missing ${className ?? ''}`} role="img" aria-label={t.product.photographUnavailable}>
        <span className="product-media__missing-text">{t.product.photographUnavailable}</span>
      </div>
    );
  }

  return (
    <img
      className={`product-media ${className ?? ''}`}
      src={src}
      alt={alt}
      width={dimensions?.width}
      height={dimensions?.height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => {
        setFailed(true);
        onUnavailable?.(src);
      }}
    />
  );
}
