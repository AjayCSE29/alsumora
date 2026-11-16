/**
 * Intrinsic dimensions of the local product photographs, used only to reserve
 * the correct space before an image finishes loading (prevents layout shift in
 * the natural-height masonry grid). Photographs themselves remain untouched.
 */
export const imageDimensions: Record<string, { width: number; height: number }> = {
  '/assets/products/rebel-classic-distressed-leather-jacket/main.jpg': { width: 2000, height: 3000 },
  '/assets/products/rebel-classic-distressed-leather-jacket/detail-01.png': { width: 527, height: 700 },
  '/assets/products/rebel-classic-distressed-leather-jacket/detail-02.png': { width: 527, height: 700 },

  '/assets/products/noir-essential-black-leather-jacket/main.jpg': { width: 4160, height: 6240 },
  '/assets/products/noir-essential-black-leather-jacket/detail-01.png': { width: 533, height: 666 },
  '/assets/products/noir-essential-black-leather-jacket/detail-02.png': { width: 533, height: 666 },

  '/assets/products/espresso-heritage-high-collar-jacket/main.jpg': { width: 2977, height: 4467 },
  '/assets/products/espresso-heritage-high-collar-jacket/detail-01.png': { width: 609, height: 575 },
  '/assets/products/espresso-heritage-high-collar-jacket/detail-02.png': { width: 609, height: 575 },
  '/assets/products/espresso-heritage-high-collar-jacket/details-03.png': { width: 608, height: 613 },

  '/assets/products/noir-terrain-chunky-sole-combat-boots/main.jpg': { width: 4032, height: 3024 },
  '/assets/products/noir-terrain-chunky-sole-combat-boots/detail-01.png': { width: 459, height: 418 },
  '/assets/products/noir-terrain-chunky-sole-combat-boots/detail-02.png': { width: 459, height: 418 },

  '/assets/products/black-knee-high-stiletto-boots/main.png': { width: 565, height: 565 },
  '/assets/products/black-knee-high-stiletto-boots/detail-01.png': { width: 474, height: 500 },
  '/assets/products/black-knee-high-stiletto-boots/detail-02.png': { width: 474, height: 500 },

  '/assets/products/brown-pointed-toe-stiletto-ankle-boots/main.png': { width: 490, height: 490 },
  '/assets/products/brown-pointed-toe-stiletto-ankle-boots/detail-01.png': { width: 895, height: 804 },
  '/assets/products/brown-pointed-toe-stiletto-ankle-boots/detail-02.png': { width: 895, height: 804 },
  '/assets/products/brown-pointed-toe-stiletto-ankle-boots/detail-03.png': { width: 895, height: 804 },
  '/assets/products/brown-pointed-toe-stiletto-ankle-boots/detail-04.png': { width: 895, height: 852 },
};
