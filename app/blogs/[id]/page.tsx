import BlogDetail from "@/components/common/blog-detail";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{id:string}>
}

const BlogDetailPage = async({params}:Props) => {
  const {id} = await params;

  if (!id) return notFound();



  return (
   <BlogDetail id={id}/>
  );
};

export default BlogDetailPage;

export async function generateStaticParams() {
 
  return [
    {
      id: '780897de30366347c8000210'
    }
  ]
}
