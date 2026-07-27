"use client";

import { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import type { ResolvedSiteData } from "@/lib/types";

const PARTNER_LOGOS = [
  "https://i.pinimg.com/vwebp/1200x/e6/7c/8b/e67c8b4516476be9d44ddc5783998c5a.webp",
  "https://i.pinimg.com/1200x/2f/19/b9/2f19b9c9d492f8107fe26bd31bdfda5f.jpg",
  "https://i.pinimg.com/736x/33/6f/0c/336f0ce7bb4e6fd7a69f1f4f3d0022a7.jpg",
  "https://i.pinimg.com/736x/88/11/8c/88118cf627096054841395fff45bf8c3.jpg",
  "https://i.pinimg.com/1200x/28/1f/15/281f155364481628a2ab0450ea43f1ac.jpg",
  "https://i.pinimg.com/736x/b1/1e/34/b11e344bb4c24ee4e4a5aaa28473c9d7.jpg",
  "https://i.pinimg.com/736x/c1/49/5c/c1495cd73c38f31f312d2783305c5fde.jpg",
] as const;

export default function Partners({ data }: { data: ResolvedSiteData }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const partners = data.featuredDevelopers;
  const items =
    partners?.items?.map((item, index) => ({
      ...item,
      image: PARTNER_LOGOS[index] ?? item.image,
    })) ?? [];

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
            <span className="w-12 h-[2px] bg-[#9fd40b] rounded-full" />
            <span className="text-[13px] sm:text-[14px] font-extrabold text-[#2563eb] tracking-widest uppercase">
              {partners?.pretitle || "Trusted by"}
            </span>
            <span className="w-12 h-[2px] bg-[#9fd40b] rounded-full" />
          </div>
          <h2 className="mt-3.5 font-sans text-3xl md:text-[2.25rem] font-extrabold text-[#001b3d] tracking-tight">
            {partners?.title || "Trusted by Our Partners"}
          </h2>
          <p className="mt-3 text-[15px] text-gray-500 max-w-xl mx-auto leading-relaxed">
            {partners?.desc ||
              "We are proud to work with leading brands who trust our expertise and services."}
          </p>
        </div>

        {/* Carousel Row */}
        <div className="relative flex items-center">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 lg:-left-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-md transition hover:border-[#2563eb] hover:text-[#2563eb] focus:outline-none"
            aria-label="Previous partners"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          {/* Scrolling partner cards */}
          <div
            ref={scrollRef}
            className="scrollbar-hide flex w-full gap-5 overflow-x-auto px-12 py-5 scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((item) => (
              <div
                key={item.name}
                className="group flex min-w-[220px] flex-1 shrink-0 flex-col overflow-hidden rounded-2xl border border-gray-100/95 bg-white shadow-[0_10px_35px_rgba(0,0,0,0.015)] transition hover:border-gray-200 hover:shadow-[0_10px_35px_rgba(0,0,0,0.035)]"
              >
                <div className="relative h-28 w-full bg-white p-4">
                  <MediaImage
                    themeId={data.themeId}
                    src={item.image}
                    alt={item.alt || item.name}
                    fill
                    className="object-contain transition duration-300 group-hover:scale-105"
                    sizes="220px"
                  />
                </div>
                <div className="px-4 py-3.5 text-left">
                  <p className="text-[15px] font-black tracking-tight text-[#001b3d]">
                    {item.name}
                  </p>
                  <p className="mt-1 line-clamp-2 text-[12px] leading-relaxed text-gray-500">
                    {item.desc}
                  </p>
                  {item.projectsLabel && (
                    <p className="mt-2 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#2563eb]">
                      {item.projectsLabel}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 lg:-right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-md transition hover:border-[#2563eb] hover:text-[#2563eb] focus:outline-none"
            aria-label="Next partners"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
