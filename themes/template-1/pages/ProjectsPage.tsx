"use client";

import { useState } from "react";
import MediaImage from "@/components/MediaImage";
import PageBanner from "@/themes/template-1/pages/PageBanner";
import ImageLightbox from "@/themes/template-1/components/ImageLightbox";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

type Props = { data: ResolvedSiteData; theme: ThemeId };

export default function ProjectsPage({ data, theme }: Props) {
  const page = data.projectsPage;
  const projects = data.latestProjects?.projectItems || [];
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const lightboxItems = projects.map((p) => ({
    image: p.image,
    title: p.title,
    alt: p.alt,
    meta: p.status || p.location,
    desc: p.desc,
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
        eyebrow={page?.pretitle || "Portfolio"}
        title={page?.title || "Our Portfolio"}
        desc={page?.desc || data.latestProjects?.desc}
        breadcrumb={page?.breadcrumb}
      />

      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, i) => (
              <button
                key={project.title}
                type="button"
                onClick={() => openAt(i)}
                className="group overflow-hidden rounded-2xl border border-gray-100 bg-white text-left shadow-[0_10px_30px_rgba(10,31,68,0.06)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(10,31,68,0.1)]"
              >
                <div className="relative h-[220px] w-full overflow-hidden bg-[#f3f5f8]">
                  <MediaImage
                    themeId={data.themeId}
                    src={project.image}
                    alt={project.alt || project.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="px-5 py-5">
                  {project.status && (
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#9fd40b]">
                      {project.status}
                    </span>
                  )}
                  <h3 className="mt-1 text-[17px] font-extrabold text-[#0a1f44] leading-snug">
                    {project.title}
                  </h3>
                  {project.location && (
                    <p className="mt-1.5 text-[12.5px] font-medium text-[#0a1f44]/45">
                      {project.location}
                    </p>
                  )}
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-[#0a1f44]/60 line-clamp-2">
                    {project.desc}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {projects.length === 0 && (
            <p className="text-center text-[14px] text-[#0a1f44]/50 py-16">
              {page?.emptyMessage || "No projects yet."}
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
