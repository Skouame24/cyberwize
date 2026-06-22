import { notFound } from "next/navigation";
import { plans } from "@/lib/plans";
import { OffreDetailContent } from "@/components/pages/OffreDetailContent";

export default async function OffreDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const plan = plans.find((p) => p.id === id);

  if (!plan) {
    notFound();
  }

  return <OffreDetailContent plan={plan} />;
}
