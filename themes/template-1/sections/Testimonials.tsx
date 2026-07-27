"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import type { ResolvedSiteData } from "@/lib/types";

export default function Testimonials({ data }: { data: ResolvedSiteData }) {
  const { testimonial } = data;
  const items = testimonial.testimonialItems || [];
  const [index, setIndex] = useState(0);

  if (items.length === 0) return null;

  const active = items[index % items.length];
  // Floating avatars use the other testimonial photos
  const others = items.filter((_, i) => i !== index % items.length);

  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);
  const next = () => setIndex((i) => (i + 1) % items.length);

  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-12 md:py-14">
      {/* Decorative water drops top-right */}
      <svg
        className="pointer-events-none absolute -top-4 right-8 h-40 w-40 text-[#dbe8fb]"
        viewBox="0 0 120 120"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M45 0C36 16 24 28 24 44a21 21 0 0 0 42 0C66 28 54 16 45 0z" />
        <path d="M85 28c-7 13-17 23-17 36a17 17 0 0 0 34 0c0-13-10-23-17-36z" opacity="0.6" />
      </svg>

      {/* Decorative plumber + sink image (bottom-left) */}
      <Image
        src="/illustrations/plumber-sink.png"
        alt=""
        width={220}
        height={170}
        className="pointer-events-none absolute bottom-2 left-2 h-28 w-auto sm:h-36 object-contain select-none"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8 relative z-10">
        {/* Centered Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2.5">
            <span className="text-[#0a1f44]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C9 7 5 11 5 16a7 7 0 0 0 14 0c0-5-4-9-7-14z" />
              </svg>
            </span>
            <span className="text-[13px] sm:text-[14px] font-extrabold text-[#0a1f44] tracking-[0.2em] uppercase">
              {testimonial.pretitle || "TESTIMONIALS"}
            </span>
            <span className="text-[#0a1f44]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C9 7 5 11 5 16a7 7 0 0 0 14 0c0-5-4-9-7-14z" />
              </svg>
            </span>
          </div>
          <h2 className="mt-3 font-sans text-3xl md:text-[2.5rem] font-extrabold text-[#1b2440] tracking-tight">
            {testimonial.title || "What Our Clients Say"}
          </h2>
        </div>

        {/* Quote card wrapper (relative for floating avatars) */}
        <div className="relative mx-auto max-w-4xl">
          {/* Floating avatar — top-left, overlapping card top edge */}
          {others[0] && (
            <div className="absolute -top-6 left-[6%] z-20 h-14 w-14 rounded-full border-2 border-[#bfd3f5] bg-white p-0.5 shadow-md overflow-hidden sm:h-16 sm:w-16">
              <div className="relative h-full w-full rounded-full overflow-hidden">
                <MediaImage themeId={data.themeId} src={others[0].image} alt={others[0].name} fill className="object-cover" sizes="64px" />
              </div>
            </div>
          )}

          {/* Floating avatar — right edge */}
          {others[1] && (
            <div className="absolute top-[38%] -right-5 z-20 h-14 w-14 rounded-full border-2 border-[#bfd3f5] bg-white p-0.5 shadow-md overflow-hidden sm:h-16 sm:w-16">
              <div className="relative h-full w-full rounded-full overflow-hidden">
                <MediaImage themeId={data.themeId} src={others[1].image} alt={others[1].name} fill className="object-cover" sizes="64px" />
              </div>
            </div>
          )}

          {/* Floating avatar — bottom-left below the card */}
          {others[2] && (
            <div className="absolute -bottom-8 left-[8%] z-20 h-14 w-14 rounded-full border-2 border-[#bfd3f5] bg-white p-0.5 shadow-md overflow-hidden sm:h-16 sm:w-16">
              <div className="relative h-full w-full rounded-full overflow-hidden">
                <MediaImage themeId={data.themeId} src={others[2].image} alt={others[2].name} fill className="object-cover" sizes="64px" />
              </div>
            </div>
          )}

          {/* Floating avatar — bottom-right below the card */}
          {others[3] && (
            <div className="absolute -bottom-8 right-[16%] z-20 h-14 w-14 rounded-full border-2 border-[#bfd3f5] bg-white p-0.5 shadow-md overflow-hidden sm:h-16 sm:w-16">
              <div className="relative h-full w-full rounded-full overflow-hidden">
                <MediaImage themeId={data.themeId} src={others[3].image} alt={others[3].name} fill className="object-cover" sizes="64px" />
              </div>
            </div>
          )}

          {/* The light blue quote card */}
          <div className="rounded-[2rem] bg-white px-6 py-10 sm:px-14 sm:py-12 text-center shadow-[0_15px_45px_rgba(10,31,68,0.05)] ring-1 ring-[#eef2f7]">
            {/* Blue quote mark */}
            <svg className="mx-auto h-9 w-9 text-[#0a1f44]" viewBox="0 0 36 28" fill="currentColor" aria-hidden="true">
              <path d="M0 28V16C0 7 5 1.5 14 0v6c-4 1-6 3.5-6 7h6v15H0zm22 0V16c0-9 5-14.5 14-16v6c-4 1-6 3.5-6 7h6v15H22z" />
            </svg>

            {/* Quote text */}
            <p className="mt-6 text-[14px] sm:text-[15.5px] leading-relaxed text-[#1b2440] font-medium max-w-3xl mx-auto">
              {active.quote}
            </p>
          </div>

          {/* Main active avatar overlapping the card bottom center */}
          <div className="relative z-20 -mt-9 flex flex-col items-center">
            <div className="h-16 w-16 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden sm:h-20 sm:w-20">
              <div className="relative h-full w-full rounded-full overflow-hidden">
                <MediaImage themeId={data.themeId} src={active.image} alt={active.name} fill className="object-cover" sizes="80px" />
              </div>
            </div>
            <h4 className="mt-3 text-[16px] font-extrabold text-[#1b2440]">
              {active.name}
            </h4>
            <p className="mt-1 text-[12px] text-gray-400 font-medium">
              {active.role}
            </p>

            {/* Prev / Next arrows */}
            <div className="mt-4 flex items-center gap-5">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="text-[#1b2440]/70 hover:text-[#0a1f44] transition"
              >
                <FaArrowLeft className="text-base" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="text-[#1b2440]/70 hover:text-[#0a1f44] transition"
              >
                <FaArrowRight className="text-base" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
