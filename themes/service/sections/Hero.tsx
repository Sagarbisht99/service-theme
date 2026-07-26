"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaFileAlt,
  FaShieldAlt,
  FaThumbsUp,
  FaTools,
  FaAward,
  FaClock,
} from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

const THEME = "service" as const;

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

const FEATURE_ICONS = [FaTools, FaClock, FaAward, FaThumbsUp];

export default function Hero({ data }: { data: ResolvedSiteData }) {
  const { banner, whyChooseUs, testimonial, companyStatistics } = data;
  const [primary, secondary] = banner.buttons;
  const features = whyChooseUs.whyChooseUsItems.slice(0, 4);
  const avatars = testimonial.testimonialItems.slice(0, 3);
  const clientsStat =
    companyStatistics.stats.find((s) =>
      /client|customer|job|satisf/i.test(s.label)
    ) ?? companyStatistics.stats[0];

  const isExactTitle = banner.title.includes("Top-Notch Plumbing") && banner.title.includes("Quality Work.");

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white to-[#f4f7fb] pt-6 pb-8">
      {/* Curved clip-path SVG definition */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="hero-curve" clipPathUnits="objectBoundingBox">
            <path d="M 0.25, 0 C 0.12, 0.25, 0.04, 0.75, 0.25, 1 L 1, 1 L 1, 0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div className="mx-auto grid max-w-[1280px] items-center gap-8 px-4 pb-20 pt-8 md:px-6 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:pt-8">
        {/* Left column / content */}
        <motion.div
          className="relative z-10 max-w-2xl lg:col-span-6"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
          }}
        >
          {banner.pretitle && (
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-full border border-[#dbe8ff] bg-[#f0f5ff] px-4 py-2 text-xs sm:text-sm font-extrabold text-[#2563eb]"
            >
              <FaShieldAlt className="text-xs sm:text-sm" aria-hidden />
              {banner.pretitle}
            </motion.div>
          )}

          {isExactTitle ? (
            <motion.h1
              variants={fadeUp}
              className="mt-5 font-sans text-[2.5rem] sm:text-5xl md:text-[3.5rem] lg:text-[3.8rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#001b3d]"
            >
              Top-Notch Plumbing & Repair Solutions,
              <span className="text-[#9fd40b] block mt-1.5">Quality Work.</span>
            </motion.h1>
          ) : (
            <motion.h1
              variants={fadeUp}
              className="mt-5 font-sans text-[2.5rem] sm:text-5xl md:text-[3.5rem] lg:text-[3.8rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#001b3d]"
            >
              {banner.title}
            </motion.h1>
          )}

          {banner.desc && (
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-xl text-[16px] sm:text-[17px] leading-relaxed text-[#001b3d]/70"
            >
              {banner.desc}
            </motion.p>
          )}

          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            {primary && (
              <Link
                href={withTheme(primary.href || "/contact", THEME)}
                className="inline-flex items-center gap-2 rounded-full bg-[#9fd40b] px-7 py-4 text-sm font-extrabold text-[#001b3d] shadow-[0_10px_24px_rgba(159,212,11,0.35)] transition hover:bg-[#8fc00a] hover:scale-[1.02]"
              >
                <FaFileAlt className="text-sm" aria-hidden />
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link
                href={withTheme(secondary.href || "/services", THEME)}
                className="inline-flex items-center gap-2 rounded-full border border-[#001b3d]/15 bg-white px-7 py-4 text-sm font-extrabold text-[#001b3d] transition hover:border-[#001b3d]/30 hover:bg-[#001b3d]/[0.02]"
              >
                {secondary.label}
                <FaArrowRight className="text-[11px]" aria-hidden />
              </Link>
            )}
          </motion.div>

          {/* Avatar and Clients Section (Pixel Perfect Match) */}
          <motion.div
            variants={fadeUp}
            className="mt-9 flex items-center gap-4"
          >
            <div className="flex items-center">
              {avatars.map((person, i) => (
                <div
                  key={person.name}
                  className="relative h-11 w-11 overflow-hidden rounded-full border-[3px] border-white bg-[#001b3d]"
                  style={{ marginLeft: i === 0 ? 0 : -14, zIndex: 10 - i }}
                >
                  <MediaImage
                    themeId={data.themeId}
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="44px"
                  />
                </div>
              ))}
              <div
                className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-[3px] border-white bg-[#001b3d] text-[11px] font-extrabold text-[#9fd40b]"
                style={{ marginLeft: -14 }}
              >
                {clientsStat?.stat?.toLowerCase() || "4.3k+"}
              </div>
            </div>

            {/* Vertical Divider Line */}
            <div className="h-8 w-[1.5px] bg-[#001b3d]/15" />

            <div className="flex flex-col justify-center">
              <p className="text-[20px] font-extrabold text-[#001b3d] leading-none">
                {clientsStat?.stat === "4.3k+" ? "4,300+" : (clientsStat?.stat || "4,300+")}
              </p>
              <p className="text-[12px] font-medium text-[#001b3d]/60 leading-none mt-1">
                {clientsStat?.label || "Satisfied Clients"}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side plumber image container & Feature bar overlay below it */}
        <div className="relative lg:col-span-6 w-full flex flex-col justify-between">
          <motion.div
            className="relative z-1 w-full h-[320px] md:h-[420px] lg:h-[480px]"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease }}
          >
            {/* Clipped image wrapper */}
            <div
              className="absolute inset-0 overflow-hidden bg-[#dfe7f2]"
              style={{ clipPath: "url(#hero-curve)" }}
            >
              <MediaImage
                themeId={data.themeId}
                src={banner.backgroundImage || data.template.image}
                alt={banner.backgroundImageTitle || banner.title}
                fill
                priority
                className="object-cover object-[center_20%]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Absolute matching SVG outline stroke */}
            <svg
              className="absolute inset-0 h-full w-full pointer-events-none z-10"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M 25,0 C 12,25 4,75 25,100"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
          </motion.div>

          {/* Feature bar overlapping bottom - Right Side Below Image */}
          {features.length > 0 && (
            <div className="relative mt-8 lg:mt-0 lg:absolute lg:bottom-0 lg:-left-12 lg:right-0 lg:z-20 lg:translate-y-1/2 px-0">
              <motion.div
                className="mx-auto w-full overflow-hidden rounded-[1.75rem] bg-[#001b3d] shadow-[0_20px_50px_rgba(11,31,58,0.28)]"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease }}
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
                  {features.map((item, i) => {
                    const Icon = FEATURE_ICONS[i % FEATURE_ICONS.length];
                    return (
                      <div
                        key={item.title}
                        className={[
                          "flex flex-col items-center text-center px-4 py-6 md:px-5 md:py-7",
                          i < 2 ? "border-b border-white/10 lg:border-b-0" : "",
                          i % 2 === 0 ? "border-r border-white/10" : "",
                          i < 3 ? "lg:border-r lg:border-white/10" : "lg:border-r-0",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#9fd40b]/15 text-[#9fd40b] mb-3.5 border border-[#9fd40b]/30">
                          <Icon className="text-sm" aria-hidden />
                        </span>
                        <div>
                          <h3 className="text-[14px] font-extrabold text-white leading-tight">
                            {item.title}
                          </h3>
                          <p className="mt-1.5 text-[11.5px] leading-snug text-white/50 max-w-[140px] mx-auto">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
