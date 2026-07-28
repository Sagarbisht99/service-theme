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

const THEME = "template-1" as const;
const NAVY = "#0a1f44";
const BLUE = "#1052E0";
const LIME = "#9fd40b";

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

  return (
    <section className="relative overflow-hidden border-b border-[#dbe7f6] bg-white py-10 md:py-14 lg:py-16">
      <div className="mx-auto grid max-w-7xl items-center gap-6 px-4 pb-10 pt-0 md:px-6 lg:grid-cols-12 lg:gap-6 lg:px-8 lg:pb-14">
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
              className="inline-flex items-center gap-2 rounded-full border border-[#1052E0]/15 bg-white/70 px-4 py-2 text-xs sm:text-sm font-extrabold text-[#0a1f44] shadow-[0_6px_18px_rgba(16,82,224,0.08)] backdrop-blur"
            >
              <FaShieldAlt className="text-xs sm:text-sm text-[#1052E0]" aria-hidden />
              {banner.pretitle}
            </motion.div>
          )}

          <motion.h1
            variants={fadeUp}
            className="mt-4 font-sans text-[2.1rem] sm:text-4xl md:text-[2.85rem] lg:text-[3.15rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#0a1f44]"
          >
            {banner.title}
          </motion.h1>

          {banner.desc && (
            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-xl text-[15px] sm:text-[16px] leading-relaxed text-[#0a1f44]/68"
            >
              {banner.desc}
            </motion.p>
          )}

          <motion.div
            variants={fadeUp}
            className="mt-6 flex flex-wrap items-center gap-3"
          >
            {primary && (
              <Link
                href={withTheme(primary.href || "/contact", THEME)}
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-extrabold text-white shadow-[0_12px_28px_rgba(16,82,224,0.28)] transition hover:scale-[1.02] hover:brightness-95"
                style={{ backgroundColor: BLUE }}
              >
                <FaFileAlt className="text-sm" aria-hidden />
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link
                href={withTheme(secondary.href || "/services", THEME)}
                className="inline-flex items-center gap-2 rounded-full border border-[#1052E0]/20 bg-white px-6 py-3 text-sm font-extrabold text-[#0a1f44] transition hover:border-[#1052E0]/40 hover:bg-[#1052E0]/4"
              >
                {secondary.label}
                <FaArrowRight className="text-[11px]" aria-hidden />
              </Link>
            )}
          </motion.div>

          {/* Avatar and Clients Section */}
          <motion.div
            variants={fadeUp}
              className="mt-7 flex items-center gap-5"
          >
            <div className="flex items-center">
              {avatars.map((person, i) => (
                <div
                  key={person.name}
                  className="relative h-12 w-12 overflow-hidden rounded-full border-[3px] border-white bg-[#0a1f44]"
                  style={{ marginLeft: i === 0 ? 0 : -16, zIndex: 10 - i }}
                >
                  <MediaImage
                    themeId={data.themeId}
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
              ))}
              <div
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-white text-[11px] font-extrabold text-white"
                style={{ marginLeft: -16, backgroundColor: NAVY }}
              >
                {clientsStat?.stat}
              </div>
            </div>

            <div className="h-10 w-0.5 bg-[#0a1f44]/15" />

            <div className="flex flex-col justify-center">
              <p className="text-[20px] font-extrabold text-[#0a1f44] leading-none">
                {clientsStat?.stat}
              </p>
              <p className="text-[12px] font-medium text-[#0a1f44]/55 leading-none mt-1">
                {clientsStat?.label}
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side — curved (non-square) image + feature bar */}
        <div className="relative lg:col-span-6 w-full flex flex-col justify-between">
          <motion.div
            className="relative z-1 w-full h-75 md:h-100 lg:h-125"
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease }}
          >
            {/* SVG clip — curved left edge (not square) */}
            <svg width="0" height="0" className="absolute" aria-hidden>
              <defs>
                <clipPath id="hero-curve" clipPathUnits="objectBoundingBox">
                  <path d="M0.22,0 C0.06,0.22 0.02,0.38 0.02,0.5 C0.02,0.62 0.06,0.78 0.22,1 L1,1 L1,0 Z" />
                </clipPath>
              </defs>
            </svg>

            {/* Soft halo / border layer */}
            <div
              className="absolute -inset-2.5 bg-[#d4e4f7]"
              style={{ clipPath: "url(#hero-curve)" }}
              aria-hidden
            />

            {/* Main curved photo */}
            <div
              className="absolute inset-0 overflow-hidden shadow-[0_20px_50px_rgba(10,31,68,0.18)]"
              style={{ clipPath: "url(#hero-curve)" }}
            >
              <MediaImage
                themeId={data.themeId}
                src={banner.backgroundImage || data.template.image}
                alt={banner.backgroundImageTitle || banner.title}
                fill
                priority
                className="object-cover object-[70%_center]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* Feature bar overlapping bottom */}
          {features.length > 0 && (
            <div className="relative -translate-y-14 lg:translate-y-8 lg:absolute lg:bottom-0 lg:-left-10 lg:right-0 lg:z-20 px-0">
              <motion.div
                className="mx-auto w-full overflow-hidden rounded-3xl shadow-[0_20px_50px_rgba(10,31,68,0.28)]"
                style={{ backgroundColor: NAVY }}
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
                          "flex flex-col items-center text-center px-3 py-4 md:px-4 md:py-5",
                          i < 2 ? "border-b border-white/10 lg:border-b-0" : "",
                          i % 2 === 0 ? "border-r border-white/10" : "",
                          i < 3 ? "lg:border-r lg:border-white/10" : "lg:border-r-0",
                        ]
                          .filter(Boolean)
                          .join(" ")}
                      >
                        <span
                          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full mb-2.5"
                          style={{ backgroundColor: LIME, color: NAVY }}
                        >
                          <Icon className="text-xs" aria-hidden />
                        </span>
                        <div>
                          <h3 className="text-[13px] font-extrabold text-white leading-tight">
                            {item.title}
                          </h3>
                          <p className="mt-1 text-[11px] leading-snug text-white/50 max-w-32.5 mx-auto">
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