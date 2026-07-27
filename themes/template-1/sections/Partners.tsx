"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Partners({ data }: { data: ResolvedSiteData }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const section = data.featuredDevelopers;
  const items = section?.items ?? [];

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

  if (!items.length) return null;

  return (
    <section className="border-b border-gray-100/50 bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          className="mb-8 text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
            }}
            className="flex items-center justify-center gap-3"
          >
            <span className="h-0.5 w-12 rounded-full bg-[#0a1f44]" />
            <span className="text-[13px] font-extrabold uppercase tracking-widest text-[#0a1f44]">
              {section?.pretitle || "Trusted by"}
            </span>
            <span className="h-0.5 w-12 rounded-full bg-[#0a1f44]" />
          </motion.div>
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 16 },
              show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
            }}
            className="mt-3.5 font-sans text-3xl font-extrabold tracking-tight text-[#001b3d] md:text-[2.25rem]"
          >
            {section?.title || "Trusted by Our Partners"}
          </motion.h2>
          {section?.desc && (
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
              }}
              className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-gray-500"
            >
              {section.desc}
            </motion.p>
          )}
        </motion.div>

        <div className="relative flex items-center">
          <button
            type="button"
            onClick={() => scroll("left")}
            className="absolute left-0 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-md transition hover:border-[#0a1f44] hover:text-[#0a1f44] focus:outline-none lg:-left-6"
            aria-label="Previous partners"
          >
            <FaChevronLeft className="text-sm" />
          </button>

          <div
            ref={scrollRef}
            className="scrollbar-hide flex w-full gap-5 overflow-x-auto scroll-smooth px-12 py-5"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {items.map((item) => {
              const href = item.href ? withTheme(item.href, "template-1") : withTheme("/services", "template-1");
              const content = (
                <div className="flex h-24 min-w-50 flex-1 shrink-0 flex-col items-center justify-center rounded-2xl border border-gray-100/95 bg-white px-8 py-5 shadow-[0_10px_35px_rgba(0,0,0,0.015)] transition hover:border-gray-200 hover:shadow-[0_10px_35px_rgba(0,0,0,0.025)]">
                  {item.image ? (
                    <div className="relative h-10 w-full grayscale transition hover:grayscale-0">
                      <MediaImage
                        themeId={data.themeId}
                        src={item.image}
                        alt={item.alt || item.name}
                        fill
                        className="object-contain"
                        sizes="200px"
                      />
                    </div>
                  ) : (
                    <span className="text-[18px] font-black uppercase tracking-widest text-[#0a1f44]">
                      {item.name}
                    </span>
                  )}
                </div>
              );
              return item.href ? (
                <Link key={item.name} href={href} className="block">
                  {content}
                </Link>
              ) : (
                <div key={item.name}>{content}</div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scroll("right")}
            className="absolute right-0 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-400 shadow-md transition hover:border-[#0a1f44] hover:text-[#0a1f44] focus:outline-none lg:-right-6"
            aria-label="Next partners"
          >
            <FaChevronRight className="text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
}
