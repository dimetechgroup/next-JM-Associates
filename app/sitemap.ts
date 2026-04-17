// app/sitemap.ts
import type { MetadataRoute } from 'next';

const baseUrl = 'https://jmassociates.co.ke';   // ← Change only if your domain is different

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static pages (always included)
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    // {
    //   url: `${baseUrl}/news`,           // or /insights if you use that route
    //   lastModified: new Date(),
    //   changeFrequency: 'daily' as const,
    //   priority: 0.8,
    // },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];

  // 2. Dynamic blog posts from your CMS
  let blogPosts: MetadataRoute.Sitemap = [];

  try {
    const response = await fetch(
      'https://cms.jmassociates.co.ke/api/content/items/blogs',
      { next: { revalidate: 3600 } }   // revalidate every hour (good for performance)
    );

    if (response.ok) {
      const data = await response.json();
      const blogs = Array.isArray(data) ? data : data.data || [];

      blogPosts = blogs.map((blog: any) => ({
        url: `${baseUrl}/blog/${blog._id}`,
        lastModified: blog._modified || blog._created || new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
    // Sitemap will still work — just without blog posts
  }
  // 3. Dynamic insights posts from your CMS (if you have a separate insights section)
  let insightsPost: MetadataRoute.Sitemap = [];

  try {
    const response = await fetch(
      'https://cms.jmassociates.co.ke/api/content/items/insights',
      { next: { revalidate: 3600 } }   // revalidate every hour (good for performance)
    );

    if (response.ok) {
      const data = await response.json();
      const insights = Array.isArray(data) ? data : data.data || [];

      insightsPost = insights.map((insight: any) => ({
        url: `${baseUrl}/blogs/insights/${insight._id}`,
        lastModified: insight._modified || insight._created || new Date(),
        changeFrequency: 'weekly' as const,
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.error('Error fetching blogs for sitemap:', error);
    // Sitemap will still work — just without blog posts
  }

  // Combine everything and return
  return [...staticPages, ...blogPosts, ...insightsPost];
}