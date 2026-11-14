export interface NavLinkItem {
  label: string;
  href: string;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName: 'cart' | 'track' | 'shield' | 'preorder';
}

export interface AppScreenItem {
  id: string;
  label: string;
  title: string;
  caption: string;
  imageSrc: string;
  imageAlt: string;
}

export interface LegalLinkItem {
  label: string;
  href: string;
}

export const UNBOX_CONTACT = {
  brandName: 'Unbox Your Desire',
  shortName: 'UnboxRTN',
  address: 'Agashe Empire, Nachane, Ratnagiri, 415612',
  email: 'unboxrtn@gmail.com',
  phoneDisplay: '8767461499',
  phoneHref: 'tel:8767461499',
  whatsappHref: 'https://wa.me/918767461499',
  whatsappNumber: '918767461499',
  googlePlayUrl: 'https://play.google.com/store/apps/details?id=com.aaryaksolutions.unbox',
  appStoreUrl: 'https://apps.apple.com/in/app/unboxrtn-food-delivery/id1559733578',
  developerName: 'Aaryak Solutions Pvt. Ltd.',
  developerUrl: 'https://aaryaksolutions.com/',
  fssaiLicense: '10020022011823',
  gstin: '27AJRPA9812A2ZC',
  mapEmbedUrl:
    'https://maps.google.com/maps?q=Agashe+Foodcourt,+Nachane,+Ratnagiri,+Maharashtra+415612&t=&z=16&ie=UTF8&iwloc=&output=embed',
  mapDirectUrl:
    'https://www.google.com/maps/search/?api=1&query=Agashe+Empire+Nachane+Ratnagiri+Maharashtra+415612',
  social: {
    facebook: 'https://www.facebook.com/unboxratnagiri',
    instagram: 'https://www.instagram.com/unboxratnagiri',
    twitter: 'https://twitter.com/URatnagiri?s=08',
  },
} as const;

export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Why Unbox', href: '#why-unbox' },
  { label: 'Download App', href: '#download-app' },
  { label: 'Contact Us', href: '#contact' },
];

export const BUSINESS_HOURS = [
  { days: 'Monday - Saturday', hours: '9:00 AM - 9:00 PM' },
  { days: 'Sunday', hours: '10:00 AM - 8:00 PM' },
  { days: 'Customer Support', hours: 'Support 24/7 via Call.' },
] as const;

export const ABOUT_PARAGRAPHS: readonly string[] = [
  'Unbox- Your Desire is the pioneering Food Delivery Application in Ratnagiri launched by the Ratnagiri-kars. As all the business were hit during the Covid 19 and the subsequent lockdown, the economy of the small towns like Ratnagiri suffered significantly.',
  'Prime Minister Narendra Modi backed the concept of “Atmanirbhar”, being self-sufficient. Unbox was a step ahead in this being vocal for the local, the app was launched to give maximum exposure to the local vendors. The digital platform has created a place for all the resident business in Ratnagiri. The main object for this app was to create employment opportunities and give quality assured service to the customers. The app is developed locally by our own software team and employs youth from the city.',
  'Even though, the un-lockdown phase has started, some of the merchants and professional are still facing several restrictions. Unbox is a platform for such businesses. Unbox started its journey from Food Delivery. However, we aim to push our limits further and add various delivery options through app. We want to encourage small-time business owners, and they can establish their business. We also wish to partner with various women empowerment groups, and bring their business on a digital platform.',
];

export const WHY_UNBOX_FEATURES: FeatureItem[] = [
  {
    id: 'no-min-cart',
    title: 'No Min Cart Value',
    description:
      'Order food from listed hotels for any amount. No minimum cart value is needed.',
    iconName: 'cart',
  },
  {
    id: 'track-order',
    title: 'Track Your Order',
    description:
      'Easily track your order status using the app. Get notified on each status.',
    iconName: 'track',
  },
  {
    id: 'secured-delivery',
    title: 'Ontime & Secured Delivery',
    description:
      "Get your food delivered to your doorstep with Unbox's high security delivery box partner.",
    iconName: 'shield',
  },
  {
    id: 'pre-orders',
    title: 'Control Pre-Orders',
    description:
      'First in-app pre-order deliveries at your doorstep. Completely control your deliveries using your fingertips.',
    iconName: 'preorder',
  },
];

export const GENUINE_APP_SCREENS: AppScreenItem[] = [
  {
    id: 'restaurants',
    label: 'Local Restaurants',
    title: 'Browse Ratnagiri Restaurants Nearby',
    caption:
      'Discover popular local eateries, filter by Pure Veg, Non Veg, or Ratings 4+, and order with zero minimum cart value.',
    imageSrc: '/images/app-screen-1.jpg',
    imageAlt: 'UnboxRTN mobile app showing Ratnagiri restaurants nearby and Only on Unbox listings',
  },
  {
    id: 'services',
    label: 'All Services',
    title: 'Food Delivery & Everyday Local Services',
    caption:
      'Access Food Delivery, Unbox Services, Online Medicine, Grocery, Senior Citizen support, and more from one home screen.',
    imageSrc: '/images/app-screen-2.jpg',
    imageAlt: 'UnboxRTN app home screen showing Food Delivery, Unbox Services, Online Medicine, and Grocery',
  },
  {
    id: 'menu',
    label: 'Live Menus',
    title: 'Detailed Menus & Easy Dish Search',
    caption:
      'Search dishes by veg or non-veg preferences, view preparation times, and add local favourites directly to your bag.',
    imageSrc: '/images/app-screen-3.jpg',
    imageAlt: 'UnboxRTN app showing Agashe Foodcourt menu with Amboli Chutney Bhaji and Cheese Masala Dosa',
  },
  {
    id: 'signin',
    label: 'Quick Onboarding',
    title: 'Fast +91 Mobile Verification',
    caption:
      'Sign in quickly with your mobile number and jump straight into Food Delivery, Aagashe Store, or Unbox Services.',
    imageSrc: '/images/app-screen-4.jpg',
    imageAlt: 'UnboxRTN app login screen with +91 mobile number input and Explore Our Services',
  },
  {
    id: 'account',
    label: 'Profile & Policies',
    title: 'Transparent Addresses, Offers & Policies',
    caption:
      'Manage saved delivery addresses, offers, and access transparent privacy, refund, and terms policies anytime.',
    imageSrc: '/images/app-screen-5.jpg',
    imageAlt: 'UnboxRTN app account screen showing Offers, Addresses, Contact Us, and Legal Policies',
  },
];

export const LEGAL_LINKS: LegalLinkItem[] = [
  {
    label: 'Privacy Policy',
    href: 'https://unboxrtn.com/static-pages/privacy-policy.html',
  },
  {
    label: 'Refund & Cancellation',
    href: 'https://unboxrtn.com/static-pages/refund-policy.html',
  },
  {
    label: 'Terms & Conditions',
    href: 'https://unboxrtn.com/static-pages/terms-and-conditions.html',
  },
  {
    label: 'Services',
    href: 'https://unboxrtn.com/static-pages/services-pages/services-privacy-policy.html',
  },
  {
    label: 'Contact Us',
    href: 'https://unboxrtn.com/contactus.html',
  },
];

export const FOOTER_QUOTE =
  'Delivering Food is like delivering life and Joy. In Indian culture helping someone has the highest moral values.';
