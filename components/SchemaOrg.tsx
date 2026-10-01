export default function SchemaOrg() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.galivra.web.id';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}/#organization`,
    name: 'Galivra Innovation Solutions',
    alternateName: 'Galivra',
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/logo.png`,
    description:
      'Studio teknologi digital penyedia jasa pembuatan website, aplikasi mobile, sistem bisnis, dan otomasi AI.',
    priceRange: 'Rp50.000 - Rp10.000.000+',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Lamongan',
      addressRegion: 'Jawa Timur',
      addressCountry: 'ID',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -7.1189,
      longitude: 112.4158,
    },
    areaServed: [
      { '@type': 'Country', name: 'Indonesia' },
      { '@type': 'City', name: 'Surabaya' },
      { '@type': 'City', name: 'Lamongan' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Layanan Digital Galivra',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pengembangan Website',
            description: 'Website resmi, landing page, atau company profile.',
          },
          price: '500000',
          priceCurrency: 'IDR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Pengembangan Aplikasi Mobile',
            description: 'Aplikasi Android dan iOS berbasis Flutter.',
          },
          price: '2500000',
          priceCurrency: 'IDR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI & Otomasi',
            description: 'Integrasi chatbot, OCR, dan otomasi alur kerja bisnis.',
          },
          price: '750000',
          priceCurrency: 'IDR',
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
