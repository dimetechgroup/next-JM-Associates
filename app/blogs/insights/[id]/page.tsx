import InsightDetail from "@/components/common/insights-detail";
import { assets } from "@/public/assets";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}

let insightDetails: any = {};
console.log("Insight Details in page component:", insightDetails); // Debug log

export const metadata = {
  title: `${insightDetails.title || " Insights Details"} | Expert Perspectives from JM Associates LLP`,
  description:
    "Explore in-depth insights and expert perspectives on audit, tax, and advisory topics from JM Associates LLP. Stay informed with our latest analysis and thought leadership in the financial services industry.",
  keywords: [
    "audit insights Kenya",
    "tax insights Nairobi",
    "advisory insights Kenya",
    "business insights Kenya",
    "financial insights Nairobi",
    "JM Associates LLP insights",
    "expert perspectives audit tax advisory",
  ],
  openGraph: {
    title: `${insightDetails.title || " Insights Details"} | Expert Perspectives from JM Associates LLP`,
    description:
      "Explore in-depth insights and expert perspectives on audit, tax, and advisory topics from JM Associates LLP. Stay informed with our latest analysis and thought leadership in the financial services industry.",
    images: [
      {
        url: insightDetails.image || assets.logo, // Fallback to logo if no image in details
        width: 1200,
        height: 1200,
        alt: insightDetails.title || "Insight Details - JM Associates LLP",
      },
    ],
    type: "article",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title: `${insightDetails.title || " Insights Details"} | Expert Perspectives from JM Associates LLP`,
    description:
      "Explore in-depth insights and expert perspectives on audit, tax, and advisory topics from JM Associates LLP. Stay informed with our latest analysis and thought leadership in the financial services industry.",
  },
  alternates: {
    canonical: `https://jmassociates.co.ke/blogs/insights/${insightDetails.id || "insight-id"}`, // Update with actual insight ID
  },
  authors: [{ name: "JM Associates LLP" }],
};

const InsightDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  if (!id) return notFound();

  return <InsightDetail details={insightDetails} />;
};

export default InsightDetailPage;

export async function generateStaticParams() {
  // Fetch the list of insights from your API or data source
  try {
    const response = await fetch(
      "https://cms.jmassociates.co.ke/api/content/items/insights",
    );
    const insights = await response.json();

    // Map the insights to generate static params
    return insights.map((insight: { _id: string }) => ({
      id: insight._id,
    }));
  } catch (error) {
    throw new Error("Error fetching insights:");
  }
  return [];
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
