"use client";

import {
  HiOutlineClipboardDocumentCheck,
  HiOutlineDocumentText,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { FaFaucetDrip } from "react-icons/fa6";
import type { ResolvedSiteData } from "@/lib/types";

const ACCENT = "#1052E0";
const NAVY = "#0a1f44";

/** One clear icon per step — inspect → quote → clean → quality */
const STEP_ICONS = [
  HiOutlineClipboardDocumentCheck,
  HiOutlineDocumentText,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
] as const;

export default function WorkingProcess({ data }: { data: ResolvedSiteData }) {
  const process = data.propertyProcess as {
    pretitle?: string;
    title?: string;
    steps?: { title: string; desc: string; step?: string }[];
  };

  const pretitle = process.pretitle || "HOW WE WORK";
  const title = process.title || "Standard Working Process";
  const steps = (process.steps || []).slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-14">
      <FaFaucetDrip
        className="pointer-events-none absolute top-6 right-8 text-[5.5rem] text-[#1052E0]/10"
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-310 px-4 sm:px-6 lg:px-8">
        <div className="mb-9 text-center">
          <div className="flex items-center justify-center gap-2.5">
            <FaFaucetDrip className="text-sm" style={{ color: ACCENT }} aria-hidden />
            <span
              className="text-[12px] font-bold uppercase tracking-[0.16em]"
              style={{ color: ACCENT }}
            >
              {pretitle}
            </span>
            <FaFaucetDrip className="text-sm" style={{ color: ACCENT }} aria-hidden />
          </div>
          <h2
            className="mt-2 text-[1.65rem] font-extrabold tracking-tight sm:text-[2rem]"
            style={{ color: NAVY }}
          >
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-12 pt-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-y-0 lg:pt-14">
          {steps.map((step, i) => {
            const Icon = STEP_ICONS[i % STEP_ICONS.length];
            const raised = i % 2 === 1;

            return (
              <div
                key={step.title}
                className={`relative flex flex-col items-center text-center ${
                  raised ? "lg:-translate-y-8" : ""
                }`}
              >
                <div className="relative w-36">
                  <span className="pointer-events-none absolute -top-4 left-0 z-0 select-none text-[36px] font-black leading-none text-[#1052E0]/15">
                    {step.step || String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10 mx-auto flex h-32 w-32 items-center justify-center rounded-full bg-white shadow-[0_12px_32px_rgba(10,31,68,0.08)]">
                    <div
                      className="flex h-24 w-24 items-center justify-center rounded-full"
                      style={{ backgroundColor: `${ACCENT}14`, color: ACCENT }}
                    >
                      <Icon className="h-9 w-9 stroke-[1.5]" aria-hidden />
                    </div>
                  </div>
                </div>

                <h3
                  className="mt-5 text-[16px] font-extrabold tracking-tight"
                  style={{ color: NAVY }}
                >
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[180px] text-[12.5px] font-medium leading-relaxed text-[#94a3b8]">
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
