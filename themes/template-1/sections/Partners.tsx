"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import type { ResolvedSiteData } from "@/lib/types";

export default function Partners({ data }: { data: ResolvedSiteData }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth / 2
          : scrollLeft + clientWidth / 2;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section className="bg-white py-10 border-b border-gray-100/50">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        {/* Centered Heading */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-[2px] bg-[#0a1f44] rounded-full" />
            <span className="text-[13px] sm:text-[14px] font-extrabold text-[#0a1f44] tracking-widest uppercase">
              TRUSTED BY
            </span>
            <span className="w-12 h-[2px] bg-[#0a1f44] rounded-full" />
          </div>
          <h2 className="mt-3.5 font-sans text-3xl md:text-[2.25rem] font-extrabold text-[#001b3d] tracking-tight">
            Trusted by Our Partners
          </h2>
          <p className="mt-3 text-[15px] text-gray-500 max-w-xl mx-auto leading-relaxed">
            We are proud to work with leading brands who trust our expertise and services.
          </p>
        </div>

        {/* Carousel Row */}
        <div className="relative flex items-center">
          {/* Left Navigation Arrow */}
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 lg:-left-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-md transition hover:border-[#0a1f44] hover:text-[#0a1f44] focus:outline-none"
            aria-label="Previous partners"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          {/* Scrolling Logos Wrapper */}
          <div
            ref={scrollRef}
            className="scrollbar-hide flex w-full gap-5 overflow-x-auto px-12 py-5 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Logo 1: HÄFELE */}
            <div className="flex h-24 min-w-[200px] flex-1 shrink-0 items-center justify-center rounded-2xl border border-gray-100/95 bg-white px-8 py-5 shadow-[0_10px_35px_rgba(0,0,0,0.015)] transition hover:border-gray-200 hover:shadow-[0_10px_35px_rgba(0,0,0,0.025)]">
              <div className="flex items-center font-sans tracking-[0.15em] text-xl sm:text-2xl font-black select-none">
                <span className="text-[#e2001a]">H</span>
                <span className="text-[#3a3a3a] text-lg sm:text-xl font-black">ÄFELE</span>
              </div>
            </div>

            {/* Logo 2: JAQUAR GROUP */}
            <div className="flex h-24 min-w-[200px] flex-1 shrink-0 items-center justify-center rounded-2xl border border-gray-100/95 bg-white px-8 py-5 shadow-[0_10px_35px_rgba(0,0,0,0.015)] transition hover:border-gray-200 hover:shadow-[0_10px_35px_rgba(0,0,0,0.025)]">
              <div className="flex flex-col items-center select-none">
                <div className="flex items-center gap-2">
                  <svg className="h-6 w-6 text-[#008080] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                  </svg>
                  <span className="text-[14px] sm:text-[16px] font-black tracking-wider text-[#001b3d]">
                    JAQUAR
                  </span>
                </div>
                <span className="text-[8px] font-extrabold text-gray-400 tracking-[0.2em] uppercase mt-1 leading-none">
                  GROUP
                </span>
              </div>
            </div>

            {/* Logo 3: ASTRAL PIPES */}
            <div className="flex h-24 min-w-[200px] flex-1 shrink-0 items-center justify-center rounded-2xl border border-gray-100/95 bg-white px-8 py-5 shadow-[0_10px_35px_rgba(0,0,0,0.015)] transition hover:border-gray-200 hover:shadow-[0_10px_35px_rgba(0,0,0,0.025)]">
              <div className="flex items-center gap-2 select-none">
                <div className="flex flex-col items-center justify-center border-2 border-red-500 rounded-md p-1 bg-red-50">
                  <span className="text-[10px] font-black text-red-600 leading-none px-0.5">A</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[14px] sm:text-[16px] font-black tracking-tight text-[#003c96] leading-none">
                    ASTRAL
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-extrabold text-[#003c96] tracking-[0.15em] leading-none mt-1">
                    PIPES
                  </span>
                </div>
              </div>
            </div>

            {/* Logo 4: FINOLEX */}
            <div className="flex h-24 min-w-[200px] flex-1 shrink-0 items-center justify-center rounded-2xl border border-gray-100/95 bg-white px-8 py-5 shadow-[0_10px_35px_rgba(0,0,0,0.015)] transition hover:border-gray-200 hover:shadow-[0_10px_35px_rgba(0,0,0,0.025)]">
              <div className="flex flex-col items-center select-none">
                <span className="text-[18px] sm:text-[20px] font-black italic text-[#0b5cff] tracking-tight leading-none">
                  Finolex
                </span>
                <span className="text-[8px] sm:text-[9px] font-extrabold text-[#0b5cff]/80 tracking-[0.12em] uppercase mt-1 leading-none">
                  Pipes & Fittings
                </span>
              </div>
            </div>

            {/* Logo 5: CERA */}
            <div className="flex h-24 min-w-[200px] flex-1 shrink-0 items-center justify-center rounded-2xl border border-gray-100/95 bg-white px-8 py-5 shadow-[0_10px_35px_rgba(0,0,0,0.015)] transition hover:border-gray-200 hover:shadow-[0_10px_35px_rgba(0,0,0,0.025)]">
              <div className="text-[21px] sm:text-[24px] font-black text-[#005ea6] tracking-[0.18em] select-none">
                CERA
              </div>
            </div>

            {/* Logo 6: ASIAN PAINTS */}
            <div className="flex h-24 min-w-[200px] flex-1 shrink-0 items-center justify-center rounded-2xl border border-gray-100/95 bg-white px-8 py-5 shadow-[0_10px_35px_rgba(0,0,0,0.015)] transition hover:border-gray-200 hover:shadow-[0_10px_35px_rgba(0,0,0,0.025)]">
              <div className="flex items-center gap-1.5 select-none">
                <span className="text-red-500 font-extrabold text-lg sm:text-xl italic leading-none">
                  ap
                </span>
                <span className="text-[14px] sm:text-[15px] font-bold text-gray-700 tracking-tight leading-none mt-1">
                  asianpaints
                </span>
              </div>
            </div>
          </div>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 lg:-right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-md transition hover:border-[#0a1f44] hover:text-[#0a1f44] focus:outline-none"
            aria-label="Next partners"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
