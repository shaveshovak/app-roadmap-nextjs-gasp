import RoadmapDetailPage from "../components/RoadmapDetailPage";
import { roadmaps } from "../roadmaps/data";

export default function FrontendRoadmapPage() {
  return <RoadmapDetailPage {...roadmaps.frontend} />;
}
