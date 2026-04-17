import CareerDetail from "@/components/common/career-detail";
import { assets } from "@/public/assets";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}
export const metadata = {
  title: "Career Opportunity | Join Our Team at JM Associates LLP",
  description:
    "Explore exciting career opportunities at JM Associates LLP. Join our dynamic team of professionals in audit, tax, and advisory services. Apply now to be part of a leading consultancy firm in Nairobi.",
  keywords: [
    "careers at JM Associates",
    "job openings Nairobi",
    "audit jobs Kenya",
    "tax consultant careers",
    "advisory services jobs",
    "join JM Associates team",
    "professional growth opportunities",
  ],
  openGraph: {
    title: "Career Opportunities at JM Associates LLP | Join Our Team",
    description:
      "Discover rewarding career opportunities at JM Associates LLP. We are looking for talented professionals in audit, tax, and advisory services to join our team in Nairobi. Apply today and grow your career with us.",
    images: [
      {
        url: assets.logo, // Create a dedicated 1200x630 image for this page
        width: 1200,
        height: 1200,
        alt: "Join the Team at JM Associates LLP - Career Opportunities in Nairobi",
      },
    ],
    type: "website",
    locale: "en_KE",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Join Our Team at JM Associates LLP | Career Opportunities in Nairobi",
    description:
      "Explore rewarding career opportunities at JM Associates LLP. We are looking for talented professionals in audit, tax, and advisory services to join our team in Nairobi. Apply today and grow your career with us.",
  },
  alternates: {
    canonical: "https://jmassociates.co.ke/careers", // Very important for SEO
  },
  authors: [{ name: "JM Associates LLP" }],
};

const CareerDetailPage = async ({ params }: Props) => {
  const { id } = await params;

  if (!id) return notFound();

  return <CareerDetail id={id} />;
};

export default CareerDetailPage;

export async function generateStaticParams() {
  return [
    {
      id: "10",
    },
  ];
}
