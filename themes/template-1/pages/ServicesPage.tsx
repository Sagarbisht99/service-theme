"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import PageBanner from "@/themes/template-1/pages/PageBanner";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

type Props = { data: ResolvedSiteData; theme: ThemeId };

const NAVY = "#0a1f44";
const LIME = "#9fd40b";

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
          category: item.subtitle || item.category || "Service",
          price: item.price,
          statusText: item.statusText,
        }))
      : (page?.productItems || []).map((item) => ({
          title: item.title,
          desc: item.desc,
          image: item.image,
          alt: item.alt || item.title,
          href: item.href || item.link || "/contact",
          category: "Service",
          price: undefined as string | undefined,
          statusText: undefined as string | undefined,
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

      <section className="bg-[#f8fafc] py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {cards.map((card) => (
              <Link
                key={card.title}
                href={withTheme(card.href, theme)}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8edf4] bg-white shadow-[0_8px_28px_rgba(10,31,68,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#1052E0]/25 hover:shadow-[0_16px_40px_rgba(16,82,224,0.12)]"
              >
                <div className="relative aspect-16/10 w-full overflow-hidden bg-[#eef2f7]">
                  <MediaImage
                    themeId={data.themeId}
                    src={card.image}
                    alt={card.alt}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0a1f44]/55 via-[#0a1f44]/15 to-transparent"
                    aria-hidden
                  />

                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#0a1f44] shadow-sm backdrop-blur">
                    {card.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-5 py-5">
                  <span
                    className="mb-3 block h-1 w-10 rounded-full"
                    style={{ backgroundColor: LIME }}
                    aria-hidden
                  />
                  <h2
                    className="text-[15px] font-extrabold leading-snug sm:text-[16px]"
                    style={{ color: NAVY }}
                  >
                    {card.title}
                  </h2>
                  <p className="mt-2.5 line-clamp-2 flex-1 text-[13px] leading-relaxed text-[#64748b]">
                    {card.desc}
                  </p>

                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#eef2f7] pt-4">
                    {card.price ? (
                      <span className="text-[13px] font-extrabold text-[#1052E0]">
                        {card.price}
                      </span>
                    ) : (
                      <span className="text-[12px] font-semibold text-[#94a3b8]">
                        {card.statusText || "Book today"}
                      </span>
                    )}
                    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-extrabold text-[#0a1f44] transition group-hover:gap-2.5 group-hover:text-[#1052E0]">
                      View details
                      <FaArrowRight className="text-[10px]" aria-hidden />
                    </span>
                  </div>
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
