import InsightDetail from "@/components/common/insights-detail";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{id:string}>
}

const InsightDetailPage =  async({params}:Props) => {
  const {id} = await params;

  if (!id) return notFound();
  
  
  return (
    <InsightDetail id={id}/>
  );
};

export default InsightDetailPage;

export async function generateStaticParams() {
 
  return [
    {
      id: '407ccb606334646e4f00008b'
    },
    {
      id:'08518f9035643736ca0000c9'
    },
    {
      id: '082fa8f961373974ac000203'
    }
  ]
}