import BlogDetail from "@/components/common/blog-detail";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

const BlogDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  if (!id) return notFound();

  return <BlogDetail id={id} />;
};

export default BlogDetailPage;

export async function generateStaticParams() {
  try {
    const response = await fetch(
      "https://cms.jmassociates.co.ke/api/content/items/blogs"
    );
    const blogs = await response.json();

    // Map the blogs to generate static params
    return blogs.map((blog: { _id: string }) => ({
      id: blog._id,
    }));
  } catch (error) {
    throw new Error("Error fetching blogs:");
  }
}
