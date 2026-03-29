import type { Metadata, Viewport } from 'next';
import { Header } from '@/design-system/components/Header/Header';
import { Footer } from '@/design-system/components/Footer';
import { HairSalonSchema } from '@/components/schema/HairSalonSchema';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#E07A5F',
};

export const metadata: Metadata = {
  title: {
    default: 'The Wild Dandelion Collective | Premium Hair Salon Longmont, CO',
    template: '%s | The Wild Dandelion Collective',
  },
  description:
    'Award-winning hair salon in Longmont, Colorado. Specializing in balayage, lived-in blonde, bridal styling, and sustainable beauty. 20+ years experience. Book with Ashley DeMarco.',
  keywords: [
    'hair salon longmont',
    'balayage longmont',
    'best hair salon 80501',
    'bridal hair colorado',
    'hair color specialist boulder county',
    'sustainable salon longmont',
    'blonde specialist colorado',
    'wedding hair longmont',
    'davines salon',
    'precision cuts longmont',
  ],
  metadataBase: new URL('https://the-wild-dandelion-collective.netlify.app'),
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'Ashley DeMarco' }],
  creator: 'Ashley DeMarco',
  publisher: 'The Wild Dandelion Collective',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://the-wild-dandelion-collective.netlify.app',
    siteName: 'The Wild Dandelion Collective',
    title: 'The Wild Dandelion Collective | Premium Hair Salon Longmont, CO',
    description:
      'Award-winning hair salon in Longmont, Colorado. Balayage, lived-in blonde, bridal styling & sustainable beauty. 20+ years experience.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'The Wild Dandelion Collective - Hair Salon in Longmont, Colorado',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Wild Dandelion Collective | Premium Hair Salon Longmont, CO',
    description:
      'Award-winning hair salon in Longmont. Balayage, bridal styling & sustainable beauty. Book with Ashley DeMarco.',
    images: ['https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80'],
    creator: '@wilddandelionco',
  },
  verification: {
    google: 'YOUR_GOOGLE_VERIFICATION_CODE', // Add when available
  },
  category: 'Beauty & Personal Care',
  classification: 'Hair Salon',
  other: {
    'geo.region': 'US-CO',
    'geo.placename': 'Longmont',
    'geo.position': '40.1672;-105.1028',
    'ICBM': '40.1672, -105.1028',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <HairSalonSchema />
        <Header />
        <div style={{ paddingTop: '80px' }}>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
