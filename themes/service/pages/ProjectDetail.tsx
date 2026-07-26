import StubPage from "@/themes/service/pages/StubPage";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

export default function ProjectDetail({
  data,
  theme,
  slug,
}: {
  data: ResolvedSiteData;
  theme: ThemeId;
  slug: string;
}) {
  const project = data.latestProjects.projectItems.find(
    (item) => item.slug === slug
  );
  return (
    <StubPage
      data={data}
      theme={theme}
      title={project?.title || "Completed work"}
    />
  );
}
