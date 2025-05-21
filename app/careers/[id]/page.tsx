import CareerDetail from "@/components/common/career-detail";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ id: string }>;
}
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
