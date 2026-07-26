import Link from "next/link";
import PageBanner from "@/themes/template-1/pages/PageBanner";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

const THEME = "template-1" as const;

type Props = { data: ResolvedSiteData; theme: ThemeId };

export default function SitemapPage({ data, theme }: Props) {
  const page = data.sitemapPage;
  const groups = page?.groups || [];

  return (
    <>
      <PageBanner
        theme={theme}
        eyebrow={page?.pretitle || "Sitemap"}
        title={page?.title || "Sitemap"}
        desc={page?.desc}
        breadcrumb={page?.breadcrumb}
      />
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {groups.map((group) => (
              <div key={group.title}>
                <h2 className="text-[15px] font-extrabold text-[#0a1f44] tracking-tight">
                  {group.title}
                </h2>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {(group.links || []).map((link) => (
                    <li key={link.href}>
                      <Link
                        href={withTheme(link.href, THEME)}
                        className="text-[13.5px] font-medium text-[#0a1f44]/60 transition hover:text-[#0a1f44]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
