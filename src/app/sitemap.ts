import type { MetadataRoute } from 'next';
import { services } from '@/data/services';

const BASE_URL = 'https://thewilddandelioncollective.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${BASE_URL}/about`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE_URL}/services`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/gallery`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/shop`, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${BASE_URL}/collective`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/contact`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE_URL}/faq`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${BASE_URL}/book`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE_URL}/longmont`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${BASE_URL}/boulder`, changeFrequency: 'monthly', priority: 0.6 },
  ];

  const servicePages: MetadataRoute.Sitemap = services.map((service) => ({
    url: `${BASE_URL}/services/${service.slug}`,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
