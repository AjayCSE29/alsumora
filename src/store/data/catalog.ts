/**
 * Official Al-Sumora launch catalogue.
 * Six products only, sourced verbatim from the supplied catalogue document.
 * Image paths point at the local files supplied in public/assets/products.
 */

export const categoryIds = ['outerwear', 'mens-footwear', 'womens-footwear'] as const;
export type CategoryId = (typeof categoryIds)[number];

export const collectionIds = ['all', ...categoryIds] as const;
export type CollectionId = (typeof collectionIds)[number];

export type ProductImages = {
  main: string;
  gallery: string[];
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  categoryId: CategoryId;
  category: string;
  colour: string;
  style: string;
  fit: string;
  description: string[];
  images: ProductImages;
};

const base = (slug: string): string => `/assets/products/${slug}`;

export const products: Product[] = [
  {
    id: 'rebel-classic-distressed-leather-jacket',
    slug: 'rebel-classic-distressed-leather-jacket',
    name: 'Rebel Classic Distressed Leather Jacket',
    categoryId: 'outerwear',
    category: "Men's / Unisex Outerwear",
    colour: 'Distressed Black',
    style: 'Vintage / Grunge / Casual Streetwear',
    fit: 'Relaxed, slightly oversized',
    description: [
      'A vintage-inspired jacket featuring a distinctive worn-in appearance, textured surface and detailed stitching. Its relaxed construction and classic collar create an effortlessly rugged aesthetic.',
      'Designed to complement everyday streetwear, this jacket pairs particularly well with plain white T-shirts, light-wash jeans and chunky sneakers.',
    ],
    images: {
      main: `${base('rebel-classic-distressed-leather-jacket')}/main.jpg`,
      gallery: [
        `${base('rebel-classic-distressed-leather-jacket')}/detail-01.png`,
        `${base('rebel-classic-distressed-leather-jacket')}/detail-02.png`,
      ],
    },
  },
  {
    id: 'noir-essential-black-leather-jacket',
    slug: 'noir-essential-black-leather-jacket',
    name: 'Noir Essential Black Leather Jacket',
    categoryId: 'outerwear',
    category: "Men's / Unisex Outerwear",
    colour: 'Jet Black',
    style: 'Minimalist Vintage / Streetwear',
    fit: 'Relaxed, slightly oversized',
    description: [
      'A timeless black jacket designed for understated everyday styling. Featuring a relaxed silhouette, clean front detailing, zippered pockets and a versatile dark finish, this piece brings together contemporary streetwear and vintage-inspired fashion.',
      'Its minimal design makes it easy to pair with knitted sweaters, basic T-shirts, dark denim and tailored trousers.',
    ],
    images: {
      main: `${base('noir-essential-black-leather-jacket')}/main.jpg`,
      gallery: [
        `${base('noir-essential-black-leather-jacket')}/detail-01.png`,
        `${base('noir-essential-black-leather-jacket')}/detail-02.png`,
      ],
    },
  },
  {
    id: 'espresso-heritage-high-collar-jacket',
    slug: 'espresso-heritage-high-collar-jacket',
    name: 'Espresso Heritage High-Collar Jacket',
    categoryId: 'outerwear',
    category: 'Unisex Outerwear',
    colour: 'Dark Chocolate Brown',
    style: 'Vintage / Contemporary Streetwear',
    fit: 'Oversized',
    description: [
      'Make a statement with this distinctive chocolate-brown jacket. Designed with an exaggerated high collar, voluminous sleeves and prominent metallic detailing, it delivers a bold interpretation of vintage-inspired outerwear.',
      'The rich brown finish creates a sophisticated appearance, while the oversized construction makes it ideal for layered outfits.',
    ],
    images: {
      main: `${base('espresso-heritage-high-collar-jacket')}/main.jpg`,
      gallery: [
        `${base('espresso-heritage-high-collar-jacket')}/detail-01.png`,
        `${base('espresso-heritage-high-collar-jacket')}/detail-02.png`,
        `${base('espresso-heritage-high-collar-jacket')}/details-03.png`,
      ],
    },
  },
  {
    id: 'noir-terrain-chunky-sole-combat-boots',
    slug: 'noir-terrain-chunky-sole-combat-boots',
    name: 'Noir Terrain Chunky-Sole Combat Boots',
    categoryId: 'mens-footwear',
    category: 'Unisex Footwear / Boots',
    colour: 'Jet Black',
    style: 'Combat / Contemporary Urban Streetwear',
    fit: 'Ankle-Height',
    description: [
      'Step into bold everyday styling with the Noir Terrain Chunky-Sole Combat Boots. Designed with a sleek black finish, classic lace-up fastening and a striking chunky outsole, these boots bring together rugged aesthetics and contemporary streetwear.',
      'The structured ankle-height silhouette and bold lug sole create a distinctive look, making them an effortless addition to casual, vintage-inspired and urban outfits.',
    ],
    images: {
      main: `${base('noir-terrain-chunky-sole-combat-boots')}/main.jpg`,
      gallery: [
        `${base('noir-terrain-chunky-sole-combat-boots')}/detail-01.png`,
        `${base('noir-terrain-chunky-sole-combat-boots')}/detail-02.png`,
      ],
    },
  },
  {
    id: 'black-knee-high-stiletto-boots',
    slug: 'black-knee-high-stiletto-boots',
    name: 'Black Knee-High Stiletto Boots',
    categoryId: 'womens-footwear',
    category: "Women's Footwear / Knee-High Boots",
    colour: 'Black',
    style: 'Elegant / Contemporary / Minimalist',
    fit: 'Slim-Fit Knee-High Silhouette',
    description: [
      'Add a touch of sophistication to your wardrobe with these classic black knee-high boots. Featuring a sleek, elongated shaft, pointed-toe design and elegant stiletto heel, they create a refined silhouette suitable for a variety of occasions.',
      'The smooth black finish and minimalist construction make these boots easy to pair with dresses, skirts and tailored outfits.',
    ],
    images: {
      main: `${base('black-knee-high-stiletto-boots')}/main.png`,
      gallery: [
        `${base('black-knee-high-stiletto-boots')}/detail-01.png`,
        `${base('black-knee-high-stiletto-boots')}/detail-02.png`,
      ],
    },
  },
  {
    id: 'brown-pointed-toe-stiletto-ankle-boots',
    slug: 'brown-pointed-toe-stiletto-ankle-boots',
    name: 'Brown Pointed-Toe Stiletto Ankle Boots',
    categoryId: 'womens-footwear',
    category: "Women's Footwear / Ankle Boots",
    colour: 'Dark Chocolate Brown',
    style: 'Elegant / Contemporary / Minimalist Fashion',
    fit: 'Slim-Fit Ankle-Height Silhouette',
    description: [
      'Elevate your everyday wardrobe with these elegant dark chocolate-brown ankle boots. Designed with a sleek pointed-toe silhouette, refined stiletto heel and smooth exterior finish, they offer a sophisticated balance of modern style and timeless appeal.',
      'The streamlined ankle-length construction and rich brown colour create a versatile look, making these boots an excellent choice for tailored outfits, dresses and contemporary evening wear.',
    ],
    images: {
      main: `${base('brown-pointed-toe-stiletto-ankle-boots')}/main.png`,
      gallery: [
        `${base('brown-pointed-toe-stiletto-ankle-boots')}/detail-01.png`,
        `${base('brown-pointed-toe-stiletto-ankle-boots')}/detail-02.png`,
        `${base('brown-pointed-toe-stiletto-ankle-boots')}/detail-03.png`,
        `${base('brown-pointed-toe-stiletto-ankle-boots')}/detail-04.png`,
      ],
    },
  },
];

export function getProductBySlug(slug: string | undefined): Product | undefined {
  if (!slug) return undefined;
  return products.find((product) => product.slug === slug);
}

export function getCollectionProducts(collection: CollectionId): Product[] {
  if (collection === 'all') return products;
  return products.filter((product) => product.categoryId === collection);
}

export function getCategoryProducts(categoryId: CategoryId): Product[] {
  return getCollectionProducts(categoryId);
}

export function getCollectionCount(collection: CollectionId): number {
  return getCollectionProducts(collection).length;
}
