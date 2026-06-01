import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://vinodsoba.co.uk";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/services/web-design`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/services/web-development`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/services/seo`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/services/website-maintenance-support`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/cv`,
      lastModified: new Date(),
    },

    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
    },
  ];
}