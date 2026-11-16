import type { Language } from '../i18n/translations';
import type { CategoryId } from './data/catalog';

export type StoreTranslation = {
  homeLabel: string;
  header: {
    search: string;
    searchPlaceholder: string;
    closeSearch: string;
    menu: string;
    closeMenu: string;
    primaryNav: string;
  };
  nav: {
    allCollections: string;
    outerwear: string;
    mensFootwear: string;
    womensFootwear: string;
    collections: string;
    about: string;
  };
  collection: {
    countOne: string;
    countOther: string;
    filter: string;
    filterHeading: string;
    clear: string;
    close: string;
    categoriesLabel: string;
    noResultsTitle: string;
    noResultsBody: string;
  };
  categories: Record<CategoryId, string>;
  product: {
    category: string;
    colour: string;
    style: string;
    fit: string;
    description: string;
    backTo: string;
    contactUs: string;
    photographUnavailable: string;
    viewPhotograph: string;
    notFoundTitle: string;
    notFoundBody: string;
    backToCollections: string;
  };
  collections: {
    eyebrow: string;
    title: string;
    intro: string;
    view: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
  };
  footer: {
    copyright: string;
  };
};

export const storeTranslations: Record<Language, StoreTranslation> = {
  en: {
    homeLabel: 'Al-Sumora — home',
    header: {
      search: 'Search',
      searchPlaceholder: 'Search the collection',
      closeSearch: 'Close search',
      menu: 'Menu',
      closeMenu: 'Close menu',
      primaryNav: 'Store navigation',
    },
    nav: {
      allCollections: 'All Collections',
      outerwear: 'Outerwear',
      mensFootwear: "Men's Footwear",
      womensFootwear: "Women's Footwear",
      collections: 'Collections',
      about: 'About Al-Sumora',
    },
    collection: {
      countOne: '{count} piece',
      countOther: '{count} pieces',
      filter: 'Filter',
      filterHeading: 'Category',
      clear: 'Clear',
      close: 'Close',
      categoriesLabel: 'Collections',
      noResultsTitle: 'No pieces found',
      noResultsBody: 'Try another category or clear your search.',
    },
    categories: {
      outerwear: 'Outerwear',
      'mens-footwear': "Men's Footwear",
      'womens-footwear': "Women's Footwear",
    },
    product: {
      category: 'Category',
      colour: 'Colour',
      style: 'Style',
      fit: 'Fit',
      description: 'Description',
      backTo: 'Back to {collection}',
      contactUs: 'Contact Us',
      photographUnavailable: 'Photograph not available',
      viewPhotograph: 'View photograph {index}',
      notFoundTitle: 'Piece not found',
      notFoundBody: 'This piece is not part of the current catalogue.',
      backToCollections: 'Back to the collections',
    },
    collections: {
      eyebrow: 'The Maison',
      title: 'The Collections',
      intro:
        'The launch collection, presented in three chapters: outerwear and footwear.',
      view: 'View collection',
    },
    about: {
      eyebrow: 'Heritage',
      title: 'About Al-Sumora',
      paragraphs: [
        'Al-Sumora is an accessible-luxury leather house built on patience: good hides, quiet lines and objects intended to be kept.',
        'Our atelier works with a small circle of tanneries and workshops. Each piece is cut, finished and inspected by hand, in limited runs.',
        'The launch collection moves between outerwear and footwear — a single wardrobe for a considered life.',
      ],
    },
    footer: {
      copyright: '© 2026 Al-Sumora. All rights reserved.',
    },
  },
  ar: {
    homeLabel: 'آل سومورا — الصفحة الرئيسية',
    header: {
      search: 'بحث',
      searchPlaceholder: 'ابحث في المجموعة',
      closeSearch: 'إغلاق البحث',
      menu: 'القائمة',
      closeMenu: 'إغلاق القائمة',
      primaryNav: 'روابط المتجر',
    },
    nav: {
      allCollections: 'كل المجموعات',
      outerwear: 'الملابس الخارجية',
      mensFootwear: 'أحذية رجالية',
      womensFootwear: 'أحذية نسائية',
      collections: 'المجموعات',
      about: 'عن آل سومورا',
    },
    collection: {
      countOne: '{count} قطعة',
      countOther: '{count} قطعة',
      filter: 'تصفية',
      filterHeading: 'الفئة',
      clear: 'مسح',
      close: 'إغلاق',
      categoriesLabel: 'المجموعات',
      noResultsTitle: 'لم يتم العثور على قطع',
      noResultsBody: 'جرّب فئة أخرى أو امسح البحث.',
    },
    categories: {
      outerwear: 'الملابس الخارجية',
      'mens-footwear': 'أحذية رجالية',
      'womens-footwear': 'أحذية نسائية',
    },
    product: {
      category: 'الفئة',
      colour: 'اللون',
      style: 'النمط',
      fit: 'القَصّة',
      description: 'الوصف',
      backTo: 'العودة إلى {collection}',
      contactUs: 'اتصل بنا',
      photographUnavailable: 'الصورة غير متوفرة',
      viewPhotograph: 'عرض الصورة {index}',
      notFoundTitle: 'لم يتم العثور على القطعة',
      notFoundBody: 'هذه القطعة ليست ضمن الكتالوج الحالي.',
      backToCollections: 'العودة إلى المجموعات',
    },
    collections: {
      eyebrow: 'الدار',
      title: 'المجموعات',
      intro: 'مجموعة الإطلاق، في ثلاثة فصول: الملابس الخارجية والأحذية.',
      view: 'عرض المجموعة',
    },
    about: {
      eyebrow: 'التراث',
      title: 'عن آل سومورا',
      paragraphs: [
        'آل سومورا دار جلدية فاخرة في متناول اليد، بُنيت على الصبر: جلود جيدة، وخطوط هادئة، وقطع صُممت لتبقى.',
        'يعمل أتيلييه الدار مع دائرة صغيرة من المدابغ والورش. تُقطع كل قطعة وتُنهى وتُفحص يدوياً، بكميات محدودة.',
        'تتنقل مجموعة الإطلاق بين الملابس الخارجية والأحذية — خزانة واحدة لحياة مدروسة.',
      ],
    },
    footer: {
      copyright: '© 2026 آل سومورا. جميع الحقوق محفوظة.',
    },
  },
  ta: {
    homeLabel: 'அல் சுமோரா — முகப்பு',
    header: {
      search: 'தேடு',
      searchPlaceholder: 'தொகுப்பில் தேடுங்கள்',
      closeSearch: 'தேடலை மூடு',
      menu: 'மெனு',
      closeMenu: 'மெனுவை மூடு',
      primaryNav: 'கடை வழிசெலுத்தல்',
    },
    nav: {
      allCollections: 'அனைத்து தொகுப்புகள்',
      outerwear: 'வெளிப்புற ஆடைகள்',
      mensFootwear: 'ஆண்கள் காலணிகள்',
      womensFootwear: 'பெண்கள் காலணிகள்',
      collections: 'தொகுப்புகள்',
      about: 'அல் சுமோரா பற்றி',
    },
    collection: {
      countOne: '{count} பொருள்',
      countOther: '{count} பொருட்கள்',
      filter: 'வடிகட்டி',
      filterHeading: 'வகை',
      clear: 'அழி',
      close: 'மூடு',
      categoriesLabel: 'தொகுப்புகள்',
      noResultsTitle: 'பொருட்கள் எதுவும் கிடைக்கவில்லை',
      noResultsBody: 'வேறு வகையை முயற்சிக்கவும் அல்லது தேடலை அழிக்கவும்.',
    },
    categories: {
      outerwear: 'வெளிப்புற ஆடைகள்',
      'mens-footwear': 'ஆண்கள் காலணிகள்',
      'womens-footwear': 'பெண்கள் காலணிகள்',
    },
    product: {
      category: 'வகை',
      colour: 'நிறம்',
      style: 'பாணி',
      fit: 'பொருத்தம்',
      description: 'விளக்கம்',
      backTo: '{collection} பகுதிக்குத் திரும்பு',
      contactUs: 'எங்களைத் தொடர்பு கொள்ளுங்கள்',
      photographUnavailable: 'புகைப்படம் கிடைக்கவில்லை',
      viewPhotograph: 'புகைப்படம் {index} பார்க்க',
      notFoundTitle: 'பொருள் கிடைக்கவில்லை',
      notFoundBody: 'இந்தப் பொருள் தற்போதைய தொகுப்பில் இல்லை.',
      backToCollections: 'தொகுப்புகளுக்குத் திரும்பு',
    },
    collections: {
      eyebrow: 'மேஸன்',
      title: 'தொகுப்புகள்',
      intro: 'தொடக்கத் தொகுப்பு, மூன்று அத்தியாயங்களில்: வெளிப்புற ஆடைகள் மற்றும் காலணிகள்.',
      view: 'தொகுப்பைப் பார்க்க',
    },
    about: {
      eyebrow: 'மரபு',
      title: 'அல் சுமோரா பற்றி',
      paragraphs: [
        'அல் சுமோரா நிதானத்தின் மீது கட்டப்பட்ட அணுகக்கூடிய ஆடம்பரத் தோல் இல்லம்: நல்ல தோல்கள், அமைதியான கோடுகள், நீண்டகாலம் தக்கவைக்கும் பொருட்கள்.',
        'எங்கள் அட்லியர் சில பதனிடும் தொழிற்சாலைகள் மற்றும் பட்டறைகளுடன் இணைந்து வேலை செய்கிறது. ஒவ்வொரு பொருளும் கைவினையாக வெட்டப்பட்டு, மெருகேற்றப்பட்டு, சரிபார்க்கப்படுகிறது.',
        'தொடக்கத் தொகுப்பு வெளிப்புற ஆடைகள் மற்றும் காலணிகள் இடையே நகர்கிறது — சிந்தனையுடன் வாழ ஒரு ஒற்றை அலமாரி.',
      ],
    },
    footer: {
      copyright: '© 2026 அல் சுமோரா. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    },
  },
};

export function fillTemplate(template: string, values: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (match, key: string) =>
    key in values ? String(values[key]) : match,
  );
}
