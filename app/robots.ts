import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://joseeugenio.com.br/sitemap.xml', // Substitua pelo domínio real
  };
}
