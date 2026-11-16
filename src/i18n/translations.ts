export const languages = ['en', 'ar', 'ta'] as const;

export type Language = (typeof languages)[number];
export type TextDirection = 'ltr' | 'rtl';

export const languageMeta: Record<Language, { nativeLabel: string; direction: TextDirection }> = {
  en: { nativeLabel: 'English', direction: 'ltr' },
  ar: { nativeLabel: 'العربية', direction: 'rtl' },
  ta: { nativeLabel: 'தமிழ்', direction: 'ltr' },
};

type FooterLink = {
  label: string;
  href: string;
};

export type Translation = {
  brand: string;
  hero: {
    panels: Record<'fashion' | 'accessories', { title: string; cta: string; ctaAriaLabel: string }>;
  };
  shopNow: string;
  newsletter: {
    heading: string;
    emailLabel: string;
    placeholder: string;
    confirm: string;
    success: string;
    error: string;
  };
  accessibility: {
    label: string;
    description: string;
  };
  footer: {
    navLabel: string;
    columns: Array<{
      heading: string;
      links: FooterLink[];
    }>;
    socialLabel: string;
    social: FooterLink[];
  };
  languageSwitcher: {
    label: string;
  };
};

export const translations: Record<Language, Translation> = {
  en: {
    brand: 'Al Sumora',
    hero: {
      panels: {
        fashion: { title: 'Fashion', cta: 'Shop now', ctaAriaLabel: 'Shop Fashion' },
        accessories: { title: 'Accessories', cta: 'Shop now', ctaAriaLabel: 'Shop Accessories' },
      },
    },
    shopNow: 'SHOP NOW',
    newsletter: {
      heading: 'Inspire me with all the latest Al-Sumora news',
      emailLabel: 'Email address',
      placeholder: 'Your email address',
      confirm: 'Confirm',
      success: 'Thank you. Your details have been received.',
      error: 'Please enter a valid email address.',
    },
    accessibility: {
      label: 'Accessibility',
      description: 'High contrast display',
    },
    footer: {
      navLabel: 'Footer',
      columns: [
        {
          heading: 'Client Services',
          links: [
            { label: 'Contact', href: '#' },
            { label: 'FAQ', href: '#' },
          ],
        },
        {
          heading: 'The Maison',
          links: [
            { label: 'Heritage', href: '#' },
            { label: 'Our Philosophy', href: '#' },
            { label: 'Craftsmanship', href: '#' },
            { label: 'Sustainability', href: '#' },
          ],
        },
        {
          heading: 'Le Maison de Al Sumora',
          links: [
            { label: 'Our Story', href: '#' },
            { label: 'Our Collections', href: '#' },
            { label: 'Careers', href: '#' },
          ],
        },
        {
          heading: 'Legal Terms',
          links: [
            { label: 'Legal Terms', href: '#' },
            { label: 'Privacy Notice', href: '#' },
            { label: 'Your Privacy Choices & Cookies', href: '#' },
            { label: 'Sitemap', href: '#' },
          ],
        },
      ],
      socialLabel: 'Follow Us',
      social: [
        { label: 'LinkedIn', href: '#' },
        { label: 'Instagram', href: '#' },
      ],
    },
    languageSwitcher: {
      label: 'Switch Language',
    },
  },
  ar: {
    brand: 'آل سومورا',
    hero: {
      panels: {
        fashion: { title: 'أزياء', cta: 'اشترِ الآن', ctaAriaLabel: 'اشترِ من قسم الأزياء' },
        accessories: { title: 'إكسسوارات', cta: 'اشترِ الآن', ctaAriaLabel: 'اشترِ من قسم الإكسسوارات' },
      },
    },
    shopNow: 'تسوق الآن',
    newsletter: {
      heading: 'ألهمني بكل أخبار آل سومورا الجديدة',
      emailLabel: 'البريد الإلكتروني',
      placeholder: 'عنوان بريدك الإلكتروني',
      confirm: 'تأكيد',
      success: 'شكراً لك. تم استلام تفاصيلك.',
      error: 'يرجى إدخال بريد إلكتروني صحيح.',
    },
    accessibility: {
      label: 'إمكانية الوصول',
      description: 'عرض عالي التباين',
    },
    footer: {
      navLabel: 'روابط التذييل',
      columns: [
        {
          heading: 'خدمات العملاء',
          links: [
            { label: 'اتصل بنا', href: '#' },
            { label: 'الأسئلة الشائعة', href: '#' },
          ],
        },
        {
          heading: 'الدار',
          links: [
            { label: 'التراث', href: '#' },
            { label: 'فلسفتنا', href: '#' },
            { label: 'الحرف', href: '#' },
            { label: 'الاستدامة', href: '#' },
          ],
        },
        {
          heading: 'دار آل سومورا',
          links: [
            { label: 'قصتنا', href: '#' },
            { label: 'مجموعاتنا', href: '#' },
            { label: 'وظائف', href: '#' },
          ],
        },
        {
          heading: 'الشروط القانونية',
          links: [
            { label: 'الشروط القانونية', href: '#' },
            { label: 'إشعار الخصوصية', href: '#' },
            { label: 'خيارات الخصوصية وملفات تعريف الارتباط', href: '#' },
            { label: 'خريطة الموقع', href: '#' },
          ],
        },
      ],
      socialLabel: 'تابعنا',
      social: [
        { label: 'LinkedIn', href: '#' },
        { label: 'Instagram', href: '#' },
      ],
    },
    languageSwitcher: {
      label: 'تغيير اللغة',
    },
  },
  ta: {
    brand: 'அல் சுமோரா',
    hero: {
      panels: {
        fashion: { title: 'ஃபேஷன்', cta: 'இப்போது வாங்குங்கள்', ctaAriaLabel: 'ஃபேஷன் பிரிவில் வாங்குங்கள்' },
        accessories: { title: 'அணிகலன்கள்', cta: 'இப்போது வாங்குங்கள்', ctaAriaLabel: 'அணிகலன்கள் பிரிவில் வாங்குங்கள்' },
      },
    },
    shopNow: 'இப்போது வாங்குங்கள்',
    newsletter: {
      heading: 'அல் சுமோராவின் சமீபத்திய செய்திகள் என்னை ஊக்குவிக்கட்டும்',
      emailLabel: 'மின்னஞ்சல் முகவரி',
      placeholder: 'உங்கள் மின்னஞ்சல் முகவரி',
      confirm: 'உறுதிப்படுத்து',
      success: 'நன்றி. உங்கள் விவரங்கள் பெறப்பட்டன.',
      error: 'சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.',
    },
    accessibility: {
      label: 'அணுகல்',
      description: 'உயர் மாறுபாடு காட்சி',
    },
    footer: {
      navLabel: 'மின்னணு அடிக்குறிப்பு',
      columns: [
        {
          heading: 'வாடிக்கையாளர் சேவைகள்',
          links: [
            { label: 'தொடர்பு', href: '#' },
            { label: 'அடிக்கடி கேட்கப்படும் கேள்விகள்', href: '#' },
          ],
        },
        {
          heading: 'மேஸன்',
          links: [
            { label: 'மரபு', href: '#' },
            { label: 'எங்கள் தத்துவம்', href: '#' },
            { label: 'கைவினை', href: '#' },
            { label: 'நிலைத்தன்மை', href: '#' },
          ],
        },
        {
          heading: 'அல் சுமோரா மேஸன்',
          links: [
            { label: 'எங்கள் கதை', href: '#' },
            { label: 'எங்கள் தொகுப்புகள்', href: '#' },
            { label: 'வேலைவாய்ப்புகள்', href: '#' },
          ],
        },
        {
          heading: 'சட்ட விதிமுறைகள்',
          links: [
            { label: 'சட்ட விதிமுறைகள்', href: '#' },
            { label: 'தனியுரிமை அறிவிப்பு', href: '#' },
            { label: 'உங்கள் தனியுரிமை தேர்வுகள் மற்றும் குக்கீகள்', href: '#' },
            { label: 'தள வரைபடம்', href: '#' },
          ],
        },
      ],
      socialLabel: 'பின்தொடரவும்',
      social: [
        { label: 'LinkedIn', href: '#' },
        { label: 'Instagram', href: '#' },
      ],
    },
    languageSwitcher: {
      label: 'மொழியை மாற்றவும்',
    },
  },
};
