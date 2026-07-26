import StubPage from "@/themes/template-1/pages/StubPage";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

export default function PropertyDetail({
  data,
  theme,
  slug,
}: {
  data: ResolvedSiteData;
  theme: ThemeId;
  slug: string;
}) {
  const listing = data.properties.listings.find(
    (item) => item.slug === slug
  );
  return (
    <StubPage
      data={data}
      theme={theme}
      title={listing?.title || "Service detail"}
    />
  );
}
