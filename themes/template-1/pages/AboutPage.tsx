"use client";

import Link from "next/link";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import PageBanner from "@/themes/template-1/pages/PageBanner";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";
import WhyChooseUs from "@/themes/template-1/sections/WhyChooseUs";
import WorkingProcess from "@/themes/template-1/sections/WorkingProcess";
import Stats from "@/themes/template-1/sections/Stats";

type Props = {
  data: ResolvedSiteData;
  theme: ThemeId;
};

const ACCENT = "#1052E0";

export default function AboutPage({ data, theme }: Props) {
  const about = data.aboutPage;
  const points = about.missionPoints || [];
  const ctaButton = about.ctaButton;

  return (
    <>
      <PageBanner
        theme={theme}
        eyebrow={about.pretitle || "About us"}
        title={about.title || "Repairs done with skill"}
        desc={about.desc}
        breadcrumb={about.breadcrumb}
      />

      {/* Single about section: left content + right photo */}
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            {/* Left content */}
            <div>
              <div className="flex items-center gap-2.5">
                <span className="h-0.5 w-8" style={{ backgroundColor: ACCENT }} aria-hidden />
                <span
                  className="text-[12px] font-extrabold uppercase tracking-[0.16em]"
                  style={{ color: ACCENT }}
                >
                  {about.pretitle || "About us"}
                </span>
              </div>

              <h2 className="mt-3 text-[1.65rem] font-extrabold leading-snug tracking-tight text-[#0a1f44] sm:text-[2rem]">
                {about.philosophyTitle || about.missionTitle || "Licensed technicians, clear quotes"}
              </h2>

              <p className="mt-3 text-[14px] leading-relaxed text-[#6b7280]">
                {about.philosophyDesc || about.desc2 || about.desc}
              </p>

              {about.missionDesc && (
                <p className="mt-3 text-[14px] leading-relaxed text-[#6b7280]">
                  {about.missionDesc}
                </p>
              )}

              {points.length > 0 && (
                <ul className="mt-6 space-y-3">
                  {points.map((p, i) => (
                    <li key={`${p.title}-${i}`} className="flex items-start gap-3">
                      <FaCheckCircle
                        className="mt-0.5 shrink-0 text-[15px]"
                        style={{ color: ACCENT }}
                        aria-hidden
                      />
                      <div>
                        <p className="text-[13.5px] font-extrabold text-[#0a1f44]">{p.title}</p>
                        <p className="mt-0.5 text-[12.5px] leading-relaxed text-[#8b93a7]">
                          {p.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {ctaButton?.href && (
                <Link
                  href={withTheme(ctaButton.href, theme)}
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1052E0] px-7 py-3 text-[13px] font-extrabold text-white transition hover:brightness-95"
                >
                  {ctaButton.label || "Book an appointment"}
                  <FaArrowRight className="text-[11px]" aria-hidden />
                </Link>
              )}
            </div>

            {/* Right photo */}
            <div className="relative overflow-hidden rounded-2xl border border-[#eef2f7] bg-white shadow-[0_12px_32px_rgba(10,31,68,0.08)]">
              <div className="relative aspect-4/3 w-full lg:aspect-auto lg:min-h-105">
                <MediaImage
                  themeId={data.themeId}
                  src={about.sideImage}
                  alt={about.sideImageTitle || "Technician at work"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUs data={data} />
      <WorkingProcess data={data} />
      <Stats data={data} />
    </>
  );
}
