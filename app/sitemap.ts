
import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const baseUrl = "https://jmassociates.co.ke";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];


  let blogPosts: MetadataRoute.Sitemap = [];

  try {
    const response = await fetch(
      "https://cms.jmassociates.co.ke/api/content/items/blogs",
      {
        cache: "force-cache", 
      }
    );

    if (response.ok) {
      const data = await response.json();
      const blogs = Array.isArray(data) ? data : data.data || [];

      blogPosts = blogs.map((blog: any) => ({
        url: `${baseUrl}/blog/${blog._id}`,
        lastModified: blog._modified || blog._created || new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.error("Error fetching blogs for sitemap:", error);
  }


  let insightsPosts: MetadataRoute.Sitemap = [];

  try {
    const response = await fetch(
      "https://cms.jmassociates.co.ke/api/content/items/insights",
      {
        cache: "force-cache", 
      }
    );

    if (response.ok) {
      const data = await response.json();
      const insights = Array.isArray(data) ? data : data.data || [];

      insightsPosts = insights.map((insight: any) => ({
        url: `${baseUrl}/insights/${insight._id}`, 
        lastModified:
          insight._modified || insight._created || new Date(),
        changeFrequency: "weekly",
        priority: 0.8,
      }));
    }
  } catch (error) {
    console.error("Error fetching insights for sitemap:", error);
  }


  return [...staticPages, ...blogPosts, ...insightsPosts];
}