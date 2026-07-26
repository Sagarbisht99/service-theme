import StubPage from "@/themes/template-1/pages/StubPage";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

export default function BlogDetail({
  data,
  theme,
}: {
  data: ResolvedSiteData;
  theme: ThemeId;
  slug: string;
}) {
  return (
    <StubPage
      data={data}
      theme={theme}
      title="Blog Detail"
    />
  );
}
