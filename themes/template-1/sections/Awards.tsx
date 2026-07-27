"use client";

import { FaAward, FaTint } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import type { ResolvedSiteData } from "@/lib/types";

const ACCENT = "#1052E0";
const NAVY = "#0a1f44";

export default function Awards({ data }: { data: ResolvedSiteData }) {
  const awards = data.awardsPage;
  const items = (awards?.awardItems || []).slice(0, 6);
  if (!items.length) return null;

  return (
    <section className="bg-white py-12 md:py-14">
      <div className="mx-auto max-w-310 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-2.5">
            <FaTint className="text-sm" style={{ color: ACCENT }} aria-hidden />
            <p
              className="text-[12px] font-bold uppercase tracking-[0.16em]"
              style={{ color: ACCENT }}
            >
              {awards?.pretitle || "Awards & Certifications"}
            </p>
            <FaTint className="text-sm" style={{ color: ACCENT }} aria-hidden />
          </div>
          <h2
            className="mt-2 text-[1.65rem] font-extrabold tracking-tight sm:text-[2rem]"
            style={{ color: NAVY }}
          >
            {awards?.title || "Our Achievements"}
          </h2>
        </div>

        <div className="mt-9 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
          {items.map((item) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div className="relative mb-3 flex h-16 w-16 items-center justify-center rounded-full border border-[#e8ecf2] bg-white">
                {item.image ? (
                  <MediaImage
                    themeId={data.themeId}
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain p-2"
                    sizes="64px"
                  />
                ) : (
                  <FaAward style={{ color: ACCENT }} aria-hidden />
                )}
              </div>
              <h3 className="text-[13px] font-extrabold leading-snug" style={{ color: NAVY }}>
                {item.title}
              </h3>
              {item.org && (
                <p className="mt-1 text-[12px] text-[#94a3b8]">{item.org}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
