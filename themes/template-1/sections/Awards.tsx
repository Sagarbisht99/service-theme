"use client";

import MediaImage from "@/components/MediaImage";
import type { ResolvedSiteData } from "@/lib/types";

export default function Awards({ data }: { data: ResolvedSiteData }) {
  const awards = data.awardsPage as any;
  const items = (awards?.awardItems || []).slice(0, 6);

  return (
    <section className="relative bg-[#f6f8fc] py-16 overflow-hidden border-b border-gray-100">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2.5">
            <span className="text-[#0a1f44]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C9 7 5 11 5 16a7 7 0 0 0 14 0c0-5-4-9-7-14z" />
              </svg>
            </span>
            <span className="text-[13px] sm:text-[14px] font-extrabold text-[#0a1f44] tracking-[0.18em] uppercase">
              {awards?.pretitle || "AWARDS & CERTIFICATIONS"}
            </span>
            <span className="text-[#0a1f44]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C9 7 5 11 5 16a7 7 0 0 0 14 0c0-5-4-9-7-14z" />
              </svg>
            </span>
          </div>
          <h2 className="mt-3 font-sans text-3xl md:text-[2.5rem] font-extrabold text-[#1b2440] tracking-tight">
            {awards?.title || "Our Achievements"}
          </h2>
        </div>

        {/* 6 Awards in a row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-4">
          {items.map((item: any) => (
            <div key={item.title} className="flex flex-col items-center text-center">
              <div className="mb-4 relative h-20 w-20">
                {item.image ? (
                  <MediaImage
                    themeId={data.themeId}
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                    sizes="80px"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-white border border-gray-200 text-[11px] font-bold text-gray-400">
                    {item.year || "Award"}
                  </div>
                )}
              </div>
              <h3 className="text-[14px] sm:text-[15px] font-extrabold text-[#1b2440] leading-snug">
                {item.title}
              </h3>
              <p className="mt-1.5 text-[12px] font-medium text-gray-400">
                {item.org}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
