import { notFound } from "next/navigation";
import { resolveSiteData, resolveCategory } from "@/lib/data";
import { resolveTheme } from "@/lib/theme";
import { getThemePack } from "@/themes";
import ServiceDetail from "@/themes/template-1/pages/ServiceDetail";
import PropertyDetail from "@/themes/service/pages/PropertyDetail";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ theme?: string; category?: string }>;
};

export default async function Page({ params, searchParams }: Props) {
  const { slug } = await params;
  const query = await searchParams;
  const theme = resolveTheme(query.theme);
  const category = resolveCategory(query.category);
  const data = resolveSiteData(theme, category);
  const pack = getThemePack(theme);
  const { Header, Footer } = pack;

  if (!slug) notFound();

  const listing = data.properties?.listings?.find((item) => item.slug === slug);
  if (!listing && theme === "template-1") notFound();

  const Detail = theme === "template-1" ? ServiceDetail : PropertyDetail;

  return (
    <div id="top" className={pack.shellClass}>
      <Header data={data} variant="solid" />
      <main>
        <Detail data={data} theme={theme} slug={slug} />
      </main>
      <Footer data={data} />
    </div>
  );
}
