"use client";

import { useState } from "react";
import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import ImageLightbox from "@/themes/template-1/components/ImageLightbox";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

const THEME = "template-1" as const;

export default function Portfolio({ data }: { data: ResolvedSiteData }) {
  const { latestProjects } = data;
  const projects = (latestProjects?.projectItems || []).slice(0, 3);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const portfolioPretitle = "OUR PORTFOLIO";
  const portfolioTitle = "Featured Completed Works";
  const portfolioDesc =
    latestProjects?.desc ||
    "Explore our portfolio to see the high-quality plumbing projects we've completed. From emergency repairs to full-scale installations, our work demonstrates our commitment to excellence and customer satisfaction.";

  const lightboxItems = projects.map((p) => ({
    image: p.image,
    title: p.title === "Full bathroom re-pipe" ? "Bathroom Repair" : p.title,
    alt: p.alt,
    meta: p.status || p.location,
    desc: p.desc,
  }));

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <section className="bg-[#0a1f44] text-white py-14 overflow-hidden">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-12 items-end mb-10">
          <div className="md:col-span-6">
            <span className="text-[13px] sm:text-[14px] font-extrabold text-[#9fd40b] tracking-wider uppercase">
              {portfolioPretitle}
            </span>
            <h2 className="mt-2.5 font-sans text-3xl md:text-[2.5rem] font-extrabold leading-tight text-white tracking-tight">
              {portfolioTitle}
            </h2>
          </div>
          <div className="md:col-span-6 md:pl-6 lg:pl-12">
            <p className="text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/85">
              {portfolioDesc}
            </p>
          </div>
        </div>

        <div className="grid gap-6 grid-cols-12">
          {projects.map((project, i) => {
            const isFirst = i === 0;
            return (
              <button
                key={project.title}
                type="button"
                onClick={() => openAt(i)}
                className={`group relative overflow-hidden rounded-[2rem] bg-[#001b3d] text-left shadow-lg transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,27,61,0.3)] ${
                  isFirst
                    ? "col-span-12 lg:col-span-6 h-[300px] sm:h-[360px]"
                    : "col-span-12 sm:col-span-6 lg:col-span-3 h-[300px] sm:h-[360px]"
                }`}
              >
                <div className="relative w-full h-full overflow-hidden">
                  <MediaImage
                    themeId={data.themeId}
                    src={project.image}
                    alt={project.alt || project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent transition-all duration-500 group-hover:via-black/45" />
                </div>

                <div className="absolute top-5 right-5 z-20">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#9fd40b] text-[#0b1f3a] shadow-md transition-all duration-500 scale-90 opacity-0 translate-x-3 -translate-y-3 group-hover:scale-100 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
                    <FaArrowUp className="text-sm rotate-45 transition-transform duration-500 group-hover:rotate-90" />
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-left">
                  <h3 className="text-[18px] sm:text-[21px] font-extrabold text-white leading-tight tracking-tight">
                    {project.title === "Full bathroom re-pipe"
                      ? "Bathroom Repair"
                      : project.title}
                  </h3>
                  <p className="mt-2 text-[12px] sm:text-[13px] text-white/80 leading-relaxed font-medium line-clamp-2 max-w-[420px]">
                    {project.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href={withTheme("/projects", THEME)}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3.5 text-[13.5px] font-extrabold text-white transition hover:bg-white hover:text-[#0a1f44]"
          >
            View full portfolio
          </Link>
          <Link
            href={withTheme("/gallery", THEME)}
            className="ml-3 inline-flex items-center gap-2 rounded-full bg-[#9fd40b] px-7 py-3.5 text-[13.5px] font-extrabold text-[#0a1f44] transition hover:bg-[#8fc00a]"
          >
            Open gallery
          </Link>
        </div>
      </div>

      <ImageLightbox
        themeId={data.themeId}
        items={lightboxItems}
        index={index}
        open={open}
        onClose={() => setOpen(false)}
        onPrev={() =>
          setIndex((i) => (i - 1 + lightboxItems.length) % lightboxItems.length)
        }
        onNext={() => setIndex((i) => (i + 1) % lightboxItems.length)}
      />
    </section>
  );
}
