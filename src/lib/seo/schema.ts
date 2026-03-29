/**
 * Schema.org structured data generators
 * Premium SEO markup for The Wild Dandelion Collective
 */

export interface LocalBusinessSchema {
  name: string;
  image: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  telephone: string;
  url: string;
  priceRange: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
  openingHours: Array<{
    dayOfWeek: string[];
    opens: string;
    closes: string;
  }>;
  sameAs?: string[];
}

export interface ServiceSchema {
  name: string;
  description: string;
  provider: string;
  areaServed: string;
  hasOfferCatalog?: {
    itemListElement: Array<{
      name: string;
      description: string;
      price: string;
      priceCurrency: string;
    }>;
  };
}

export interface FAQSchema {
  mainEntity: Array<{
    question: string;
    answer: string;
  }>;
}

export interface ReviewSchema {
  itemReviewed: {
    name: string;
    image?: string;
  };
  reviewRating: {
    ratingValue: number;
    bestRating: number;
  };
  author: {
    name: string;
  };
  reviewBody: string;
  datePublished: string;
}

export interface BreadcrumbSchema {
  itemListElement: Array<{
    position: number;
    name: string;
    item: string;
  }>;
}

/**
 * Generate LocalBusiness structured data
 */
export function generateLocalBusinessSchema(
  business: LocalBusinessSchema
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    '@id': business.url,
    name: business.name,
    image: business.image,
    address: {
      '@type': 'PostalAddress',
      ...business.address,
    },
    geo: {
      '@type': 'GeoCoordinates',
      ...business.geo,
    },
    telephone: business.telephone,
    url: business.url,
    priceRange: business.priceRange,
    ...(business.aggregateRating && {
      aggregateRating: {
        '@type': 'AggregateRating',
        ...business.aggregateRating,
      },
    }),
    openingHoursSpecification: business.openingHours.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    ...(business.sameAs && { sameAs: business.sameAs }),
    // Additional salon-specific properties
    currenciesAccepted: 'USD',
    paymentAccepted: 'Cash, Credit Card, Venmo',
    hasMap: `https://www.google.com/maps?q=413+Main+St+Longmont+CO+80501`,
    isAccessibleForFree: false,
    publicAccess: true,
  };
}

/**
 * Generate Service structured data
 */
export function generateServiceSchema(service: ServiceSchema): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'HairSalon',
      name: service.provider,
    },
    areaServed: {
      '@type': 'City',
      name: service.areaServed,
    },
    ...(service.hasOfferCatalog && {
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: `${service.name} Services`,
        itemListElement: service.hasOfferCatalog.itemListElement.map((item) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: item.name,
            description: item.description,
          },
          price: item.price.replace(/[^0-9.]/g, ''),
          priceCurrency: item.priceCurrency,
        })),
      },
    }),
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faq: FAQSchema): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.mainEntity.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

/**
 * Generate Review structured data
 */
export function generateReviewSchema(review: ReviewSchema): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Review',
    itemReviewed: {
      '@type': 'HairSalon',
      ...review.itemReviewed,
    },
    reviewRating: {
      '@type': 'Rating',
      ...review.reviewRating,
    },
    author: {
      '@type': 'Person',
      ...review.author,
    },
    reviewBody: review.reviewBody,
    datePublished: review.datePublished,
  };
}

/**
 * Generate Breadcrumb structured data
 */
export function generateBreadcrumbSchema(
  breadcrumb: BreadcrumbSchema
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumb.itemListElement.map((item) => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      item: item.item,
    })),
  };
}

/**
 * Generate WebSite structured data with search
 */
export function generateWebsiteSchema(
  siteUrl: string,
  siteName: string,
  searchUrl: string
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: searchUrl,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate WebPage structured data
 */
export function generateWebPageSchema(
  url: string,
  title: string,
  description: string,
  dateModified?: string
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    url,
    name: title,
    description,
    ...(dateModified && { dateModified }),
    isPartOf: {
      '@type': 'WebSite',
      name: 'The Wild Dandelion Collective',
      url: 'https://the-wild-dandelion-collective.netlify.app',
    },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80',
    },
  };
}

/**
 * Pre-configured schema for The Wild Dandelion
 */
export const wildDandelionBusiness = {
  name: 'The Wild Dandelion Collective',
  image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80',
  address: {
    streetAddress: '413 Main Street',
    addressLocality: 'Longmont',
    addressRegion: 'CO',
    postalCode: '80501',
    addressCountry: 'US',
  },
  geo: {
    latitude: 40.1672,
    longitude: -105.1028,
  },
  telephone: '+1-303-834-7572',
  url: 'https://the-wild-dandelion-collective.netlify.app',
  priceRange: '$$$',
  aggregateRating: {
    ratingValue: 5.0,
    reviewCount: 87,
  },
  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '19:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/thewilddandelioncollective',
    'https://www.facebook.com/thewilddandelioncollective',
    'https://www.yelp.com/biz/the-wild-dandelion-collective-longmont',
  ],
};

/**
 * Salon services schema data
 */
export const salonServices = [
  {
    name: 'Balayage',
    description: 'Hand-painted highlights for a natural, sun-kissed look with seamless grow-out',
    price: '$220+',
    duration: '3-4 hours',
  },
  {
    name: 'Lived-In Blonde',
    description: 'Dimensional blonde color designed for low-maintenance grow-out',
    price: '$200+',
    duration: '3-4 hours',
  },
  {
    name: 'Color Correction',
    description: 'Expert correction of at-home color disasters or unwanted tones',
    price: '$150/hr',
    duration: 'Varies',
  },
  {
    name: 'Bridal Styling',
    description: 'Wedding day hair including trial, day-of styling, and touch-up kit',
    price: '$175+',
    duration: '90 min',
  },
  {
    name: 'Precision Cut',
    description: 'Custom haircut tailored to your face shape, lifestyle, and hair texture',
    price: '$85+',
    duration: '60 min',
  },
  {
    name: 'Keratin Treatment',
    description: 'Smoothing treatment to eliminate frizz and reduce styling time',
    price: '$300+',
    duration: '3-4 hours',
  },
];
