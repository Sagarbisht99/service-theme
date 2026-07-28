"use client";

import Link from "next/link";
import {
  FaArrowRight,
  FaBullseye,
  FaClock,
  FaGem,
  FaHeadset,
  FaTint,
  FaUsers,
} from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

const BLUE = "#1052E0";
const NAVY = "#0a1f44";
const LIME = "#9fd40b";

type Props = { data: ResolvedSiteData; theme: ThemeId };

const ICONS = [FaBullseye, FaUsers, FaGem, FaClock, FaHeadset];

export default function WhyChooseUsPage({ data, theme }: Props) {
  const page = data.whyChooseUsPage;
  const sectionItems = data.whyChooseUs?.whyChooseUsItems ?? [];
  const items = (page?.items?.length ? page.items : sectionItems).slice(0, 5);
  const ctaImage =
    page?.sideImage ||
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80";
  const title = page?.title || "We Deliver Value That Matters";

  return (
    <div className="bg-white">
      {/* Features */}
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <div className="flex items-center justify-center gap-2.5">
              <FaTint className="text-sm" style={{ color: BLUE }} aria-hidden />
              <p
                className="text-[12px] font-extrabold uppercase tracking-[0.16em]"
                style={{ color: BLUE }}
              >
                {page?.pretitle || "Why Choose Us"}
              </p>
              <FaTint className="text-sm" style={{ color: BLUE }} aria-hidden />
            </div>

            <h1
              className="mt-3 text-[1.65rem] font-extrabold tracking-tight text-[#0a1f44] sm:text-[2rem] md:text-[2.25rem]"
            >
              {title}
            </h1>
            <span
              className="mx-auto mt-3 block h-1 w-12 rounded-full"
              style={{ backgroundColor: LIME }}
              aria-hidden
            />
            {page?.desc ? (
              <p className="mt-4 text-[14px] leading-relaxed text-[#6b7280]">
                {page.desc}
              </p>
            ) : null}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5">
            {items.map((item, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-center rounded-2xl border border-[#eef2f7] bg-white px-4 py-7 text-center shadow-[0_8px_24px_rgba(10,31,68,0.05)] transition hover:-translate-y-0.5 hover:border-[#1052E0]/20 hover:shadow-[0_12px_28px_rgba(16,82,224,0.1)]"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eef5ff]"
                    style={{ color: BLUE }}
                  >
                    <Icon className="text-xl" aria-hidden />
                  </span>
                  <h3 className="mt-4 text-[14.5px] font-extrabold leading-snug text-[#0a1f44]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[12.5px] leading-relaxed text-[#64748b]">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA banner — navy + lime like site CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <MediaImage
            themeId={data.themeId}
            src={ctaImage}
            alt={page?.sideImageTitle || "Team collaboration"}
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0a1f44]/82" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 sm:px-6 md:flex-row md:items-center md:py-14 lg:px-8">
          <div className="max-w-xl">
            <span
              className="mb-3 block h-1 w-12 rounded-full"
              style={{ backgroundColor: LIME }}
              aria-hidden
            />
            <h2 className="text-[1.55rem] font-extrabold leading-snug tracking-tight text-white sm:text-[1.85rem] md:text-[2.05rem]">
              {page?.ctaTitle || "Let's Build Something Great Together"}
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-white/80">
              {page?.ctaDesc ||
                "Book a visit today and get clear, reliable plumbing help."}
            </p>
          </div>

          <Link
            href={withTheme(page?.ctaButton?.href || "/contact", theme)}
            className="inline-flex shrink-0 items-center gap-2 rounded-full px-7 py-3.5 text-[14px] font-extrabold shadow-md transition hover:brightness-95"
            style={{ backgroundColor: BLUE, color: "#ffffff" }}
          >
            {page?.ctaButton?.label || "Start Your Project"}
            <FaArrowRight className="text-[12px]" aria-hidden />
          </Link>
        </div>
      </section>
    </div>
  );
}
