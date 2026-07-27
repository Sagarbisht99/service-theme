"use client";

import Link from "next/link";
import { FaArrowUp } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

const THEME = "template-1" as const;
const ACCENT = "#1052E0";
const NAVY = "#0a1f44";
const LIME = "#9fd40b";

export default function Portfolio({ data }: { data: ResolvedSiteData }) {
  const { latestProjects } = data;
  const projects = (latestProjects?.projectItems || []).slice(0, 3);

  if (!projects.length) return null;

  return (
    <section className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-310 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="text-[12px] font-bold uppercase tracking-[0.16em]"
            style={{ color: ACCENT }}
          >
            Featured Projects
          </p>
          <h2
            className="mt-2 text-[1.65rem] font-extrabold tracking-tight sm:text-[2rem]"
            style={{ color: NAVY }}
          >
            {latestProjects?.title || "Recent jobs we're proud of"}
          </h2>
          {latestProjects?.desc && (
            <p className="mx-auto mt-2.5 max-w-xl text-[14px] leading-relaxed text-[#64748b]">
              {latestProjects.desc}
            </p>
          )}
        </div>

        <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug || project.title}
              href={withTheme(
                project.href || `/projects/${project.slug || ""}`,
                THEME,
              )}
              className="group overflow-hidden rounded-2xl border border-[#eef2f7] bg-white transition hover:-translate-y-0.5 hover:shadow-[0_12px_30px_rgba(10,31,68,0.08)]"
            >
              <div className="relative h-52 overflow-hidden sm:h-56">
                <MediaImage
                  themeId={data.themeId}
                  src={project.image}
                  alt={project.alt || project.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span
                  className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full opacity-0 transition group-hover:opacity-100"
                  style={{ backgroundColor: LIME, color: NAVY }}
                >
                  <FaArrowUp className="rotate-45 text-xs" aria-hidden />
                </span>
              </div>
              <div className="p-5">
                {project.location && (
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-[#94a3b8]">
                    {project.location}
                  </p>
                )}
                <h3
                  className="mt-1 text-[15px] font-extrabold leading-snug"
                  style={{ color: NAVY }}
                >
                  {project.title}
                </h3>
                <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-[#64748b]">
                  {project.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {latestProjects?.button?.href && (
          <div className="mt-8 flex justify-center">
            <Link
              href={withTheme(latestProjects.button.href, THEME)}
              className="inline-flex items-center rounded-xl px-6 py-3 text-[13px] font-bold text-white transition hover:opacity-90"
              style={{ backgroundColor: ACCENT }}
            >
              {latestProjects.button.label || "View all works"}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
