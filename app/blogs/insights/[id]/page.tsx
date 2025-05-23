import InsightDetail from "@/components/common/insights-detail";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

const InsightDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  if (!id) return notFound();

  return <InsightDetail id={id} />;
};

export default InsightDetailPage;

export async function generateStaticParams() {
  // Fetch the list of insights from your API or data source
  try {
    const response = await fetch(
      "https://cms.jmassociates.co.ke/api/content/items/insights"
    );
    const insights = await response.json();

    // Map the insights to generate static params
    return insights.map((insight: { _id: string }) => ({
      id: insight._id,
    }));
  } catch (error) {
    throw new Error("Error fetching insights:");
  }

  // return [
  //   {
  //     id: '407ccb606334646e4f00008b'
  //   },
  //   {
  //     id:'08518f9035643736ca0000c9'
  //   },
  //   {
  //     id: '082fa8f961373974ac000203'
  //   }
  // ]
}
