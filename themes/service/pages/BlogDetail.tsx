import StubPage from "@/themes/service/pages/StubPage";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

export default function BlogDetail({
  data,
  theme,
  slug,
}: {
  data: ResolvedSiteData;
  theme: ThemeId;
  slug: string;
}) {
  const post = data.gallery.galleryItems.find((item) => item.slug === slug);
  return (
    <StubPage
      data={data}
      theme={theme}
      title={post?.title || "Blog article"}
    />
  );
}
