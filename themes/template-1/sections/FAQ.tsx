"use client";

import { useState } from "react";
import Link from "next/link";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

const THEME = "template-1" as const;

export default function FAQ({ data }: { data: ResolvedSiteData }) {
  const faq = data.faq as any;
  const items = faq?.faqItems || [];
  const [openIndex, setOpenIndex] = useState(0);

  const wrenchImage =
    faq?.sideImage ||
    "https://ik.imagekit.io/0qbkwaf3x/image-removebg-preview_Smi4TfObl.png";
  const wrenchAlt = faq?.sideImageTitle || "Pipe wrench";

  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-white py-12 md:py-14">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 items-start">
          
          {/* Left: Heading + CTA */}
          <div className="lg:col-span-4">
            <span className="text-[13px] sm:text-[14px] font-extrabold text-[#0a1f44] tracking-[0.18em] uppercase">
              {faq?.pretitle || "FAQS"}
            </span>
            <h2 className="mt-3 font-sans text-3xl md:text-[2.4rem] font-extrabold text-[#0a1f44] tracking-tight leading-tight">
              {faq?.title || "Frequently Asked Questions"}
            </h2>
            <Link
              href={withTheme("/contact", THEME)}
              className="mt-7 inline-flex items-center rounded-full border-2 border-[#0a1f44] px-7 py-3 text-[13px] font-extrabold text-[#0a1f44] transition hover:bg-[#0a1f44] hover:text-white"
            >
              View All FAQs
            </Link>
          </div>

          {/* Center: Accordion */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {items.map((item: any, i: number) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={item.question}
                  className={`rounded-2xl transition-all duration-300 ${
                    isOpen ? "bg-white px-5 py-4" : "bg-transparent px-5 py-3"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                    className="flex w-full items-start justify-between gap-4 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[14px] sm:text-[15px] font-extrabold text-[#0a1f44] leading-snug pr-2">
                      {item.question}
                    </span>
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#0a1f44] text-lg font-light leading-none transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <p className="mt-3 text-[13px] sm:text-[13.5px] leading-relaxed text-[#0a1f44]/65 font-medium max-w-md">
                      {item.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Wrench image */}
          <div className="lg:col-span-3 relative hidden lg:block">
            <div className="relative h-[340px] w-full">
              <MediaImage
                themeId={data.themeId}
                src={wrenchImage}
                alt={wrenchAlt}
                fill
                className="object-contain object-center"
                sizes="25vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
