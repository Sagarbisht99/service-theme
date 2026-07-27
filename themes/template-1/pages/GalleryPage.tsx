"use client";

import { useMemo, useState } from "react";
import MediaImage from "@/components/MediaImage";
import PageBanner from "@/themes/template-1/pages/PageBanner";
import ImageLightbox from "@/themes/template-1/components/ImageLightbox";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

type Props = { data: ResolvedSiteData; theme: ThemeId };

export default function GalleryPage({ data, theme }: Props) {
  const page = data.galleryPage;
  const items = page?.galleryItems || [];
  const categories = page?.categories?.length
    ? page.categories
    : ["All", ...Array.from(new Set(items.map((i) => i.category).filter(Boolean)))];

  const [active, setActive] = useState(categories[0] || "All");
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const filtered = useMemo(() => {
    if (!active || active === "All") return items;
    return items.filter((item) => item.category === active);
  }, [active, items]);

  const lightboxItems = filtered.map((item) => ({
    image: item.image,
    title: item.title,
    alt: item.alt,
    meta: item.category,
  }));

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const prev = () =>
    setIndex((i) => (i - 1 + lightboxItems.length) % lightboxItems.length);
  const next = () => setIndex((i) => (i + 1) % lightboxItems.length);

  return (
    <>
      <PageBanner
        theme={theme}
        eyebrow={page?.pretitle || "Gallery"}
        title={page?.title || "Our Gallery"}
        desc={page?.desc}
        breadcrumb={page?.breadcrumb}
      />

      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2.5 mb-10">
            {categories.map((cat) => {
              const isActive = cat === active;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActive(cat)}
                  className={[
                    "rounded-full px-5 py-2.5 text-[13px] font-extrabold transition",
                    isActive
                      ? "bg-[#0a1f44] text-white"
                      : "bg-[#f3f5f8] text-[#0a1f44]/70 hover:bg-[#e8ecf2]",
                  ].join(" ")}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((item, i) => (
              <button
                key={`${item.title}-${item.image}`}
                type="button"
                onClick={() => openAt(i)}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-[0_10px_30px_rgba(10,31,68,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(10,31,68,0.1)]"
              >
                <div className="relative h-[240px] w-full overflow-hidden bg-[#f3f5f8]">
                  <MediaImage
                    themeId={data.themeId}
                    src={item.image}
                    alt={item.alt || item.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="px-5 py-4">
                  {item.category && (
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#9fd40b]">
                      {item.category}
                    </span>
                  )}
                  <h3 className="mt-1 text-[16px] font-extrabold text-[#0a1f44]">
                    {item.title}
                  </h3>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-[14px] text-[#0a1f44]/50 py-16">
              No gallery items in this category yet.
            </p>
          )}
        </div>
      </section>

      <ImageLightbox
        themeId={data.themeId}
        items={lightboxItems}
        index={index}
        open={open}
        onClose={() => setOpen(false)}
        onPrev={prev}
        onNext={next}
      />
    </>
  );
}
