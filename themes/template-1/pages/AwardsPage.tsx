"use client";

import {
  FaAward,
  FaCertificate,
  FaCheck,
  FaGlobeAmericas,
  FaShieldAlt,
  FaSmile,
  FaUsers,
} from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

const ACCENT = "#E53935";
const NAVY = "#111111";

type Props = { data: ResolvedSiteData; theme: ThemeId };

const STATS = [
  {
    icon: FaCertificate,
    value: "6+",
    label: "International Certifications",
  },
  {
    icon: FaUsers,
    value: "10+",
    label: "Years of Industry Experience",
  },
  {
    icon: FaGlobeAmericas,
    value: "500+",
    label: "Successful Projects",
  },
  {
    icon: FaSmile,
    value: "100%",
    label: "Client Satisfaction Rate",
  },
];

const FALLBACK_HERO =
  "https://ik.imagekit.io/0qbkwaf3x/Gemini_Generated_Image_jqxpb1jqxpb1jqxp.png";

export default function AwardsPage({ data }: Props) {
  const awards = data.awardsPage;
  const heroImage = awards?.sideImage || FALLBACK_HERO;
  const items = (awards?.awardItems || []).slice(0, 6);

  return (
    <div className="bg-white">
      {/* Hero — image from JSON as bg, left text over faded white */}
      <section className="relative aspect-[2.2/1] max-h-[360px] w-full overflow-hidden bg-white sm:max-h-[400px]">
        <div className="absolute inset-0">
          <MediaImage
            themeId={data.themeId}
            src={heroImage}
            alt={awards?.sideImageTitle || "Certifications"}
            fill
            className="object-contain object-center"
            sizes="100vw"
            priority
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(90deg,#ffffff_0%,#ffffff_36%,rgba(255,255,255,0.85)_48%,rgba(255,255,255,0.25)_64%,rgba(255,255,255,0)_78%)]"
          aria-hidden
        />

        <div className="relative z-[2] mx-auto flex h-full max-w-6xl items-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-[280px] sm:max-w-xs md:max-w-sm">
            <h1 className="text-[1.7rem] font-extrabold leading-[1.12] tracking-tight sm:text-[2.1rem] md:text-[2.35rem]">
              <span style={{ color: NAVY }}>Our </span>
              <span style={{ color: ACCENT }}>Certifications</span>
            </h1>
            <span
              className="mt-2 block h-1 w-12 rounded-full"
              style={{ backgroundColor: ACCENT }}
              aria-hidden
            />
            <p
              className="mt-3 text-[13.5px] font-semibold sm:text-[15px]"
              style={{ color: NAVY }}
            >
              Trusted. Certified. Committed to Excellence.
            </p>
            <p className="mt-2 max-w-sm text-[12.5px] leading-relaxed text-[#4b5563] sm:text-[13px]">
              {awards?.desc ||
                "Our certifications reflect our dedication to maintaining the highest standards in quality, security, and customer satisfaction."}
            </p>
          </div>
        </div>
      </section>

      {/* Certifications grid — images from JSON */}
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="text-[12px] font-extrabold uppercase tracking-[0.18em]"
              style={{ color: ACCENT }}
            >
              {awards?.pretitle || "Recognized for Excellence"}
            </p>
            <h2
              className="mt-2 text-[1.55rem] font-extrabold tracking-tight sm:text-[1.85rem]"
              style={{ color: NAVY }}
            >
              {awards?.title || "Our Certifications & Accreditations"}
            </h2>
            <span
              className="mx-auto mt-3 block h-1 w-14 rounded-full"
              style={{ backgroundColor: ACCENT }}
              aria-hidden
            />
            <p className="mt-4 text-[13.5px] leading-relaxed text-[#6b7280]">
              We are proud to be certified by leading global organizations that
              recognize our commitment to excellence, security, and quality.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
            {items.map((item) => (
              <div
                key={item.title}
                className="flex flex-col items-center rounded-2xl border border-[#eef2f7] bg-white px-3 py-6 text-center shadow-[0_8px_24px_rgba(10,31,68,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(10,31,68,0.08)]"
              >
                <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl bg-[#f8fafc] sm:h-28 sm:w-28">
                  {item.image ? (
                    <MediaImage
                      themeId={data.themeId}
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain p-1.5"
                      sizes="112px"
                    />
                  ) : (
                    <FaAward className="text-2xl" style={{ color: ACCENT }} aria-hidden />
                  )}
                </div>
                <h3
                  className="mt-4 text-[12.5px] font-extrabold leading-snug"
                  style={{ color: NAVY }}
                >
                  {item.title}
                </h3>
                <p className="mt-1 text-[11.5px] leading-snug text-[#94a3b8]">
                  {item.org}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust + stats bar */}
      <section className="border-t border-[#eef2f7] bg-white py-10 md:py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 rounded-2xl bg-[#fdf6f6] px-5 py-7 sm:px-8 lg:grid-cols-12 lg:gap-6 lg:py-8">
            <div className="flex items-start gap-4 lg:col-span-4">
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-md"
                style={{ backgroundColor: ACCENT }}
              >
                <span className="relative">
                  <FaShieldAlt className="text-xl" aria-hidden />
                  <FaCheck
                    className="absolute -right-1 -bottom-0.5 text-[9px] text-white"
                    aria-hidden
                  />
                </span>
              </span>
              <div>
                <h3
                  className="text-[16px] font-extrabold leading-snug"
                  style={{ color: NAVY }}
                >
                  Quality You Can Trust
                </h3>
                <p className="mt-1.5 text-[12.5px] leading-relaxed text-[#6b7280]">
                  Our certifications demonstrate our commitment to delivering
                  reliable, secure, and high-quality solutions for our clients
                  worldwide.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-4 lg:col-span-8 lg:gap-4">
              {STATS.map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="text-center sm:text-left">
                    <span
                      className="mx-auto mb-2 flex h-8 w-8 items-center justify-center sm:mx-0"
                      style={{ color: ACCENT }}
                    >
                      <Icon className="text-lg" aria-hidden />
                    </span>
                    <p
                      className="text-[20px] font-black leading-none"
                      style={{ color: ACCENT }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1.5 text-[11.5px] font-semibold leading-snug text-[#64748b]">
                      {stat.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
