"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

export default function Partners({ data }: { data: ResolvedSiteData }) {
  const section = data.featuredDevelopers;
  const items = section?.items ?? [];

  if (!items.length) return null;

  // infinite marquee (duplicate items)
  const loopItems = [...items, ...items];

  return (
    <section className="relative overflow-hidden bg-white py-12 md:py-14">
      <div className="pointer-events-none absolute -top-16 -left-10 h-64 w-64 rounded-full bg-[#1052E0]/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[#9fd40b]/15 blur-2xl" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-0.5 w-12 rounded-full bg-[#9fd40b]" />
            <span className="text-[13px] font-extrabold uppercase tracking-widest text-[#1052E0]">
              {section?.pretitle || "Trusted by"}
            </span>
            <span className="h-0.5 w-12 rounded-full bg-[#9fd40b]" />
          </div>

          <h2 className="mt-3.5 font-sans text-3xl font-extrabold tracking-tight text-[#0a1f44] md:text-[2.25rem]">
            {section?.title || "Trusted by Our Partners"}
          </h2>

          {section?.desc && (
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-gray-500">
              {section.desc}
            </p>
          )}
        </motion.div>

        <div className="relative overflow-hidden">
          <style jsx global>{`
            @keyframes partners-marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
          `}</style>

          <div
            className="flex w-max items-stretch gap-6 py-5"
            style={{ animation: "partners-marquee 26s linear infinite" }}
          >
            {loopItems.map((item, idx) => {
              const href = item.href
                ? withTheme(item.href, "template-1")
                : withTheme("/services", "template-1");

              return (
                <Link
                  key={`${item.name}-${idx}`}
                  href={href}
                  className="group block"
                >
                  <div className="flex h-32 w-[240px] flex-col items-center justify-center rounded-2xl border border-gray-100/95 bg-white/80 px-6 shadow-[0_10px_35px_rgba(0,0,0,0.015)] backdrop-blur transition hover:-translate-y-1 hover:border-[#1052E0]/25 hover:shadow-[0_16px_40px_rgba(16,82,224,0.12)]">
                    <div className="relative h-16 w-full">
                      {item.image ? (
                        <MediaImage
                          themeId={data.themeId}
                          src={item.image}
                          alt={item.alt || item.name}
                          fill
                          className="object-contain transition duration-300 group-hover:scale-[1.06]"
                          sizes="240px"
                        />
                      ) : (
                        <span className="text-[18px] font-black uppercase tracking-widest text-[#0a1f44]">
                          {item.name}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
