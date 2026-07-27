"use client";

import type { ResolvedSiteData } from "@/lib/types";

export default function Stats({ data }: { data: ResolvedSiteData }) {
  const stats = data.companyStatistics?.stats?.slice(0, 4);
  if (!stats?.length) return null;

  return (
    <section className="bg-[#0a1f44] py-12 md:py-14">
      <div className="mx-auto max-w-310 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4 lg:gap-6">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-[2rem] font-extrabold tracking-tight text-white sm:text-[2.35rem]">
                {item.stat}
              </p>
              <p className="mt-1.5 text-[14px] font-bold text-white sm:text-[15px]">
                {item.label}
              </p>
              {item.desc && (
                <p className="mt-1 text-[12.5px] leading-snug text-white/50">
                  {item.desc}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
