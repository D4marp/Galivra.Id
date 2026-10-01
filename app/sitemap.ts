import type { MetadataRoute } from 'next';
import { SERVICES } from '@/lib/data';
import { PORTFOLIO_PROJECTS } from '@/lib/portfolio';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.galivra.web.id';
  const lastMod = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: lastMod, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/karya`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/tentang`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/harga`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/kontak`, lastModified: lastMod, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/privacy-policy`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: lastMod, changeFrequency: 'yearly', priority: 0.3 },
  ];

  const services: MetadataRoute.Sitemap = SERVICES.map((service) => ({
    url: `${baseUrl}/layanan/${service.slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const portfolios: MetadataRoute.Sitemap = PORTFOLIO_PROJECTS.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: lastMod,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...services, ...portfolios];
}
