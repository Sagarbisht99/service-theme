"use client";

import type { ReactNode } from "react";
import type { ResolvedSiteData } from "@/lib/types";

// Line-style blue icons matching the reference (one per step, keyed by index)
const STEP_ICONS: ReactNode[] = [
  // 1. Inspect & Analyse — document with magnifier
  <svg key="search" viewBox="0 0 48 48" className="h-11 w-11 text-[#0a1f44]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M14 6h13l7 7v18a3 3 0 0 1-3 3H14a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z" />
    <path d="M27 6v7h7" />
    <circle cx="21" cy="24" r="4.5" />
    <line x1="24.5" y1="27.5" x2="28" y2="31" />
  </svg>,
  // 2. Quote & Supply — gear/settings truck-ish blend (gear inside box)
  <svg key="quote" viewBox="0 0 48 48" className="h-11 w-11 text-[#0a1f44]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="9" y="12" width="30" height="24" rx="3" />
    <circle cx="24" cy="24" r="5" />
    <path d="M24 17v-2M24 33v-2M31 24h2M15 24h2M28.9 19.1l1.4-1.4M17.7 30.3l1.4-1.4M28.9 28.9l1.4 1.4M17.7 17.7l1.4 1.4" />
  </svg>,
  // 3. Clean Up & Finish — broom
  <svg key="clean" viewBox="0 0 48 48" className="h-11 w-11 text-[#0a1f44]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M30 8L20 18" />
    <path d="M18 20l10 10" />
    <path d="M28 30c-4 4-9 5-14 4l-3-3c-1-5 0-10 4-14z" />
    <path d="M14 34l-4 4M18 36l-3 3M22 38l-2 2" />
  </svg>,
  // 4. Quality Improve — award ribbon / medal
  <svg key="quality" viewBox="0 0 48 48" className="h-11 w-11 text-[#0a1f44]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="24" cy="19" r="9" />
    <path d="M24 15l1.6 3.2 3.5.5-2.5 2.5.6 3.5-3.2-1.7-3.2 1.7.6-3.5-2.5-2.5 3.5-.5z" />
    <path d="M19 27l-3 12 8-4 8 4-3-12" />
  </svg>,
];

export default function WorkingProcess({ data }: { data: ResolvedSiteData }) {
  const process = data.propertyProcess as any;

  const pretitle = process.pretitle || "WHO TO WORK";
  const title = process.title || "Standard Working Process";
  const steps = (process.steps || []).slice(0, 4);

  return (
    <section className="relative bg-[#f6f7fb] py-16 overflow-hidden border-b border-gray-100">
      {/* Faint decorative water splash top-right */}
      <svg
        className="pointer-events-none absolute top-4 right-6 h-28 w-28 text-[#0a1f44]/30 opacity-40"
        viewBox="0 0 100 100"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M50 8C40 26 26 40 26 58a24 24 0 0 0 48 0C74 40 60 26 50 8zm0 62a12 12 0 0 1-12-12c0-2 3-2 3 0a9 9 0 0 0 9 9c2 0 2 3 0 3z" />
      </svg>

      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-10 md:mb-14">
          <div className="flex items-center justify-center gap-2.5">
            <span className="text-[#0a1f44]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C9 7 5 11 5 16a7 7 0 0 0 14 0c0-5-4-9-7-14z" />
              </svg>
            </span>
            <span className="text-[13px] sm:text-[14px] font-extrabold text-[#0a1f44] tracking-[0.2em] uppercase">
              {pretitle}
            </span>
            <span className="text-[#0a1f44]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C9 7 5 11 5 16a7 7 0 0 0 14 0c0-5-4-9-7-14z" />
              </svg>
            </span>
          </div>
          <h2 className="mt-3 font-sans text-3xl md:text-[2.5rem] font-extrabold text-[#1b2440] tracking-tight">
            {title}
          </h2>
        </div>

        {/* Zigzag steps row — extra top padding so raised cards don't touch the heading */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 lg:gap-y-0 gap-x-6 pt-6 lg:pt-20">
          {steps.map((step: any, i: number) => {
            const icon = STEP_ICONS[i % STEP_ICONS.length];
            // Even steps sit lower, odd steps sit higher (zigzag) on desktop
            const raised = i % 2 === 1;
            return (
              <div
                key={step.title}
                className={`relative flex flex-col items-center text-center ${
                  raised ? "lg:-translate-y-10" : ""
                }`}
              >
                <div className="relative w-40">
                  {/* Small faint number at the circle's upper-left */}
                  <span className="absolute -top-5 left-0 text-[42px] font-black leading-none text-[#0a1f44]/12 select-none pointer-events-none z-0">
                    {step.step || String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Circle: outer light ring + soft lime inner */}
                  <div className="relative z-10 mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-white shadow-[0_15px_40px_rgba(10,31,68,0.10)]">
                    <div className="flex h-28 w-28 items-center justify-center rounded-full bg-[#eef6d6]">
                      {icon}
                    </div>
                  </div>
                </div>

                {/* Title + description */}
                <h3 className="mt-6 text-[17px] font-extrabold text-[#1b2440] tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[12.5px] leading-relaxed text-gray-400 font-medium max-w-[180px]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
