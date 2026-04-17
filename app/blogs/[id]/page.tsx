// app/blog/[id]/page.tsx

import type { Metadata } from "next";
import BlogDetail from "@/components/common/blog-detail";
import { assets } from "@/public/assets";

interface Props {
  params: Promise<{ id: string }>;
}

const getBlogPost = async (id: string) => {
  try {
    const response = await fetch(
      `https://cms.jmassociates.co.ke/api/content/items/blogs`,
      { next: { revalidate: 3600 } }, // Optional: ISR - revalidate every hour
    );
    if (!response.ok) return null;
    const data = await response.json();
    const blog = data.find((item: { _id: string }) => item._id === id);
    console.log(
      `Fetching blog post with ID: ${id}`,
      "Response status:",
      response.status,
    );
    if (!blog) {
      console.warn(`Blog post with ID ${id} not found.`);
      return null;
    }

    return blog;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    return {
      title: "Blog Post Not Found | JM Associates LLP",
      description: "The requested article could not be found.",
    };
  }

  const postTitle = post.title || "Blog Article";
  const excerpt =
    post.excerpt ||
    post.description ||
    `Expert insights on audit, tax, and advisory topics from JM Associates LLP.`;

  return {
    title: `${postTitle} | JM Associates LLP`,
    description:
      excerpt.length > 160 ? excerpt.substring(0, 157) + "..." : excerpt,

    keywords: [
      "audit Kenya",
      "tax consultants Nairobi",
      "tax compliance Kenya",
      "advisory services Kenya",
      "JM Associates LLP",
      post.category ? `${post.category.toLowerCase()} Kenya` : "",
      "audit and assurance",
      "tax advisory",
    ].filter(Boolean),

    openGraph: {
      title: postTitle,
      description: excerpt,
      images: [
        {
          url:
            assets.logo || post.featuredImage || "/og-image-blog-default.jpg",
          width: 1200,
          height: 1200,
          alt: postTitle,
        },
      ],
      type: "article",
      publishedTime: post.createdAt || post.date,
      authors: ["JM Associates LLP"],
    },

    twitter: {
      card: "summary_large_image",
      title: postTitle,
      description: excerpt,
    },

    alternates: {
      canonical: `https://jmassociates.co.ke/blog/${id}`,
    },
  };
}

const BlogDetailPage = async ({ params }: Props) => {
  const { id } = await params;
  const post = await getBlogPost(id);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return <BlogDetail post={post} />;
};

export default BlogDetailPage;

export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://cms.jmassociates.co.ke/api/content/items/blogs",
    );

    if (!response.ok) return [];

    const blogs = await response.json();

    return blogs.map((blog: { _id: string }) => ({
      id: blog._id,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}
