"use client";

import Link from "next/link";
import MediaImage from "@/components/MediaImage";
import PageBanner from "@/themes/template-1/pages/PageBanner";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

type Props = { data: ResolvedSiteData; theme: ThemeId };

const NAVY = "#0a1f44";

export default function ServicesPage({ data, theme }: Props) {
  const page = data.servicePage;
  const listings = data.properties?.listings || [];
  const cards =
    listings.length > 0
      ? listings.map((item) => ({
          title: item.title,
          desc: item.description || item.infoTitle,
          image: item.image,
          alt: item.alt || item.title,
          href: item.slug
            ? `/services/${item.slug}`
            : item.button?.href || "/contact",
        }))
      : (page?.productItems || []).map((item) => ({
          title: item.title,
          desc: item.desc,
          image: item.image,
          alt: item.alt || item.title,
          href: item.href || item.link || "/contact",
        }));

  return (
    <>
      <PageBanner
        theme={theme}
        eyebrow={page?.pretitle || "Our Services"}
        title={page?.title || "Plumbing services you can trust"}
        desc={page?.desc}
        breadcrumb={page?.breadcrumb}
      />

      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={withTheme(card.href, theme)}
                className="group overflow-hidden rounded-md bg-white shadow-[0_4px_18px_rgba(10,31,68,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(10,31,68,0.12)]"
              >
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#f3f5f8]">
                  <MediaImage
                    themeId={data.themeId}
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                  />
                </div>

                <div className="px-4 py-4 text-center sm:px-5 sm:py-5">
                  <h2
                    className="text-[13px] font-extrabold uppercase tracking-[0.06em] sm:text-[14px]"
                    style={{ color: NAVY }}
                  >
                    {card.title}
                  </h2>
                  <p className="mx-auto mt-2 line-clamp-3 max-w-[260px] text-[12.5px] leading-relaxed text-[#8b93a7]">
                    {card.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {cards.length === 0 && (
            <p className="py-16 text-center text-[14px] text-[#64748b]">
              No services available yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
