export function HairSalonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HairSalon',
    name: 'The Wild Dandelion Collective',
    description:
      'A verdant space for beauty, art, and curated living in Longmont, Colorado. Professional hair care by Ashley Dania DeMarco with 20+ years of experience.',
    url: 'https://thewilddandelioncollective.com',
    telephone: '+1-303-000-0000',
    email: 'hello@thewilddandelioncollective.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '413 Main St',
      addressLocality: 'Longmont',
      addressRegion: 'CO',
      postalCode: '80501',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 40.1672,
      longitude: -105.1019,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '10:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '18:30',
      },
    ],
    priceRange: '$$',
    image: 'https://thewilddandelioncollective.com/images/ashley-portrait.webp',
    sameAs: [],
  };

  // JSON-LD schema markup — hardcoded data, no user input
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
