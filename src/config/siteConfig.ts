/**
 * ============================================================================
 * MAD DETAILING — EDITABLE SITE CONFIGURATION
 * ============================================================================
 * Edit business details, copy, colours, services, reviews, and image paths
 * below. No changes to component code are required for routine updates.
 *
 * ----------------------------------------------------------------------------
 * ASSETS TO UPLOAD (when replacing SVG before/after placeholders with photos):
 * ----------------------------------------------------------------------------
 * Place real photos inside the `public/images/` folder so they resolve cleanly
 * via relative paths (`./images/...`) in preview and on any hosting platform:
 *
 *   1. ./images/before-1.webp  — Recommended: 1200 x 900 px (4:3), <= 250 KB
 *      Alt example: "Sedan exterior paint with swirl marks before detailing"
 *   2. ./images/after-1.webp   — Recommended: 1200 x 900 px (4:3), <= 250 KB
 *      Alt example: "Sedan exterior paint after machine polish and ceramic gloss"
 *   3. ./images/before-2.webp  — Recommended: 1200 x 900 px (4:3), <= 250 KB
 *      Alt example: "Car interior seats and carpet before deep steam clean"
 *   4. ./images/after-2.webp   — Recommended: 1200 x 900 px (4:3), <= 250 KB
 *      Alt example: "Car interior seats and console restored after full detail"
 *   5. ./images/before-3.webp  — Recommended: 1200 x 900 px (4:3), <= 250 KB
 *      Alt example: "Oxidised cloudy headlight lens before restoration"
 *   6. ./images/after-3.webp   — Recommended: 1200 x 900 px (4:3), <= 250 KB
 *      Alt example: "Crystal-clear restored headlight lens after UV coating"
 *
 * To activate a photo, set `beforeImage` / `afterImage` on any showcase item
 * below from `""` to `"./images/before-1.webp"`. Leave as `""` to keep the
 * built-in styled SVG/CSS placeholder.
 * ============================================================================
 */

export type ServiceIconId =
  | 'interior'
  | 'wash'
  | 'full-detail'
  | 'polish'
  | 'ceramic'
  | 'headlight'
  | 'upholstery'
  | 'odour';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ServiceIconId;
}

export interface ShowcasePair {
  id: string;
  title: string;
  subtitle: string;
  beforeLabel: string;
  afterLabel: string;
  /** Leave empty ("") to render the styled SVG/CSS placeholder, or set e.g. "./images/before-1.webp" */
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  sourceLabel: string;
  quote: string;
  dateLabel?: string;
}

export const SITE_CONFIG = {
  brand: {
    name: 'Mad Detailing',
    category: 'Car Detailing',
    tagline: 'Top-Notch Detailing. Showroom Results.',
    copyrightYear: '2025',
    shortFooterDescription:
      'Professional car detailing in Canberra, ACT. Delivering showroom-quality finishes with meticulous attention to detail.',
  },

  /** Brand palette reference — matches the chrome & black MAD Detailing logo */
  colors: {
    primaryBlack: '#000000',
    obsidian: '#0A0A0A',
    graphiteCard: '#141414',
    graphiteElevated: '#1C1C1C',
    lightSection: '#F2F2F2',
    chromeHighlight: '#F2F2F2',
    chromeMid: '#C4C8CD',
    chromeSteel: '#8E939A',
    chromeDark: '#5A5E64',
    softGreyText: '#A8ABB0',
    subtleRedAccent: '#E10600',
  },

  contact: {
    phoneDisplay: '0430 026 563',
    phoneHref: 'tel:+61430026563',
    smsHref: 'sms:+61430026563',
    /** Edit placeholder email below */
    email: 'info@yourdomain.com',
    /** Set `isMobileService: true` if you travel to customers across Canberra, or replace `streetAddress` with your workshop address */
    isMobileService: false,
    streetAddress: '[Street address], Canberra ACT',
    cityRegion: 'Canberra, ACT',
    serviceAreaNote: 'Serving Canberra & surrounding ACT suburbs',
    /** Replace with a real address string (e.g. "123 Example St, Fyshwick ACT 2609") and set `useLiveMapIframe: true` to display a live Google Maps embed */
    mapQueryAddress: 'Canberra ACT Australia',
    useLiveMapIframe: false,
    directionsUrl: 'https://www.google.com/maps/search/?api=1&query=Canberra+ACT+Australia',
    hours: [
      { days: 'Mon – Fri', time: '8:00 AM – 5:00 PM' },
      { days: 'Saturday', time: '8:00 AM – 4:00 PM' },
      { days: 'Sunday', time: 'By Appointment' },
    ],
    hoursNote: 'Hours shown are editable placeholders — update in siteConfig.ts.',
    socials: [
      {
        id: 'instagram',
        label: 'Instagram',
        handle: '@yourinstagram',
        url: 'https://instagram.com/',
      },
      {
        id: 'facebook',
        label: 'Facebook',
        handle: 'Mad Detailing Canberra',
        url: 'https://facebook.com/',
      },
      {
        id: 'tiktok',
        label: 'TikTok',
        handle: '@yourtiktok',
        url: 'https://tiktok.com/',
      },
    ],
  },

  navLinks: [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    headline: 'Detailing That Looks Better Than New.',
    subheadline:
      'Professional car detailing in Canberra, with great attention to detail and a showroom-quality finish.',
    primaryCtaLabel: 'Call 0430 026 563',
    secondaryCtaLabel: 'Get a Free Quote',
    badges: [
      { label: '5.0 ★ (1 Google Review)', emphasize: true },
      { label: 'Canberra, ACT', emphasize: false },
      { label: 'Professional Car Detailing', emphasize: false },
    ],
  },

  services: {
    heading: 'Car Detailing Services',
    subheading: 'Tailored Interior & Exterior Care',
    configNote:
      'Services shown are examples, so edit them in the config to match what you offer.',
    quoteNote:
      'Every vehicle and finish is unique — request a quote for tailored recommendations with no obligation.',
    items: [
      {
        id: 'full-interior-detail',
        title: 'Full Interior Detail',
        description:
          'Deep vacuum, steam sanitisation, trim dressing, and streak-free interior glass.',
        icon: 'interior',
      },
      {
        id: 'exterior-wash-hand-dry',
        title: 'Exterior Wash & Hand Dry',
        description:
          'pH-neutral snow foam, two-bucket contact wash, wheel cleaning, and plush towel dry.',
        icon: 'wash',
      },
      {
        id: 'full-interior-exterior-detail',
        title: 'Full Interior & Exterior Detail',
        description:
          'Complete inside-and-out restoration designed to bring back a dealership-fresh feel.',
        icon: 'full-detail',
      },
      {
        id: 'paint-polish-correction',
        title: 'Paint Polish & Correction',
        description:
          'Machine polishing to reduce swirl marks, light scratches, and haze for deep mirror gloss.',
        icon: 'polish',
      },
      {
        id: 'ceramic-coating-protection',
        title: 'Ceramic Coating & Paint Protection',
        description:
          'Hydrophobic protective layers guarding clear coat against UV, road grime, and wash marring.',
        icon: 'ceramic',
      },
      {
        id: 'headlight-restoration',
        title: 'Headlight Restoration',
        description:
          'Multi-stage wet sanding and polishing to clear yellowing and restore crisp nighttime clarity.',
        icon: 'headlight',
      },
      {
        id: 'upholstery-carpet-cleaning',
        title: 'Upholstery & Carpet Cleaning',
        description:
          'Hot-water extraction and fabric-safe agitation to lift embedded dirt from seats and mats.',
        icon: 'upholstery',
      },
      {
        id: 'odour-stain-removal',
        title: 'Odour & Stain Removal',
        description:
          'Targeted spot treatment and neutralisation for stubborn spills, pet marks, and lingering odours.',
        icon: 'odour',
      },
    ] as ServiceItem[],
  },

  whyChooseUs: {
    heading: 'Why Choose Mad Detailing',
    subheading: 'Meticulous Care. Dealership-Fresh Finish.',
    intro:
      'We take pride in treating every vehicle like our own—combining careful technique, quality products, and genuine professionalism so your car leaves looking as crisp and spotless as the day it rolled out of the dealership.',
    benefits: [
      {
        title: 'Great Attention to Detail',
        description:
          'Every seam, vent, badge, and panel edge is thoroughly cleaned and inspected before handover.',
      },
      {
        title: 'Professional Service',
        description:
          'Reliable communication, punctual appointments, and respectful care for your vehicle from start to finish.',
      },
      {
        title: 'Dealership-Fresh Results',
        description:
          'Deep gloss paintwork and spotless cabins designed to look better than the day you bought it.',
      },
      {
        title: 'Friendly Young Local Team',
        description:
          'Driven, hands-on Canberra business owners passionate about earning your trust through real workmanship.',
      },
      {
        title: 'Clear Quotes',
        description:
          'Straightforward recommendations tailored to your car’s condition with zero surprise add-ons.',
      },
      {
        title: 'Easy Booking',
        description:
          'Quick quote requests online or direct call and text support on 0430 026 563.',
      },
    ],
    workHeading: 'Our Work',
    workSubheading: 'Before & After Showcase',
    workNote:
      'Placeholder cards ready for your real Canberra detailing transformations — swap in local photos via siteConfig.ts.',
    showcasePairs: [
      {
        id: 'showcase-1',
        title: 'Exterior Gloss & Paint Polish',
        subtitle: 'Swirl removal & deep mirror reflection',
        beforeLabel: 'Before photo coming soon',
        afterLabel: 'After photo coming soon',
        beforeImage: '',
        afterImage: '',
        beforeAlt: 'Vehicle paintwork before polishing showing surface haze',
        afterAlt: 'Vehicle paintwork after polishing with glossy reflection',
      },
      {
        id: 'showcase-2',
        title: 'Full Cabin & Trim Restoration',
        subtitle: 'Deep extraction & matte OEM finish',
        beforeLabel: 'Before photo coming soon',
        afterLabel: 'After photo coming soon',
        beforeImage: '',
        afterImage: '',
        beforeAlt: 'Car interior before deep detailing',
        afterAlt: 'Car interior restored to clean showroom finish',
      },
      {
        id: 'showcase-3',
        title: 'Headlight & Exterior Trim Revival',
        subtitle: 'Clarity restoration & UV protection',
        beforeLabel: 'Before photo coming soon',
        afterLabel: 'After photo coming soon',
        beforeImage: '',
        afterImage: '',
        beforeAlt: 'Cloudy headlight lens before restoration',
        afterAlt: 'Clear restored headlight lens after detailing',
      },
    ] as ShowcasePair[],
    stats: [
      { value: '5.0 ★', label: 'Google Rating' },
      { value: '1', label: 'Google Review' },
      { value: '[Edit]', label: 'Years in Business' },
    ],
  },

  reviews: {
    heading: 'Verified Customer Review',
    subheading: 'What Canberra Drivers Say',
    ratingValue: '5.0',
    summaryText: 'Based on 1 Google review',
    googleReviewUrl:
      'https://www.google.com/search?q=Mad+Detailing+Canberra+Australia',
    googleButtonLabel: 'Read our review on Google',
    items: [
      {
        id: 'review-1',
        author: 'Md Asik Miah',
        rating: 5,
        sourceLabel: 'Google review',
        quote:
          "Got my car detailed yesterday and it genuinely looks the best it has since leaving the dealership. Highly recommend Mad Detailing these young aspiring business owners provide truly top notch service with great attention to detail and professionalism. Couldn't be happier with the result.",
      },
    ] as ReviewItem[],
  },

  contactSection: {
    heading: 'Book Your Detail or Request a Free Quote',
    subheading: 'Fast Quotes Across Canberra',
    formIntro:
      'Tell us about your vehicle and what you need. We will get back to you promptly with a clear quote and available times.',
  },
} as const;
