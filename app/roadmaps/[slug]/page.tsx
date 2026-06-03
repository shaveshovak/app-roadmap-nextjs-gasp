import { notFound } from "next/navigation";
import RoadmapDetailPage from "../../components/RoadmapDetailPage";
import { roadmaps } from "../data";

export function generateStaticParams() {
  return Object.keys(roadmaps).map((slug) => ({ slug }));
}

export default async function RoadmapPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const roadmap = roadmaps[slug];

  if (!roadmap) {
    notFound();
  }

  return <RoadmapDetailPage {...roadmap} />;
}
