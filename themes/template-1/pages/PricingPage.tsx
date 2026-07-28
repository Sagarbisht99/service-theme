"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaCheck,
  FaCrown,
  FaPhoneAlt,
  FaPaperPlane,
  FaRegCircle,
  FaShieldAlt,
  FaStar,
} from "react-icons/fa";
import { BiCalendar, BiSupport, BiShield, BiTrophy } from "react-icons/bi";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

const THEME = "template-1" as const;
const BLUE = "#1052E0";

type Props = { data: ResolvedSiteData; theme: ThemeId };

const plans = [
  {
    icon: FaPaperPlane,
    title: "Basic Plan",
    desc: "Perfect for small jobs and basic services.",
    price: "$49",
    popular: false,
    features: [
      { label: "Basic Inspection", included: true },
      { label: "Standard Service", included: true },
      { label: "Up to 1 Hour", included: true },
      { label: "Qualified Technician", included: true },
      { label: "Priority Support", included: false },
    ],
  },
  {
    icon: FaStar,
    title: "Standard Plan",
    desc: "Ideal for regular maintenance and repair services.",
    price: "$99",
    popular: true,
    features: [
      { label: "All Basic Plan Features", included: true },
      { label: "Extended Inspection", included: true },
      { label: "Up to 2 Hours", included: true },
      { label: "Priority Support", included: true },
      { label: "Service Report", included: true },
    ],
  },
  {
    icon: FaCrown,
    title: "Premium Plan",
    desc: "Complete care for your home or business.",
    price: "$199",
    popular: false,
    features: [
      { label: "All Standard Plan Features", included: true },
      { label: "Advanced Inspection", included: true },
      { label: "Up to 4 Hours", included: true },
      { label: "24/7 Priority Support", included: true },
      { label: "Annual Maintenance Plan", included: true },
    ],
  },
];

const trust = [
  {
    icon: BiShield,
    title: "Licensed & Insured",
    desc: "All our technicians are licensed, insured & background checked.",
  },
  {
    icon: BiSupport,
    title: "24/7 Support",
    desc: "We are available around the clock for emergency support.",
  },
  {
    icon: BiTrophy,
    title: "Quality Guarantee",
    desc: "All our quality work with a 100% satisfaction guarantee.",
  },
  {
    icon: BiCalendar,
    title: "Flexible Scheduling",
    desc: "Book your service at a time that's most convenient for you.",
  },
];

export default function PricingPage({ data, theme }: Props) {
  const plumberImage =
    "https://ik.imagekit.io/0qbkwaf3x/image-removebg-preview%20(5).png";
  const faqItems = (data.faq?.faqItems ?? []).slice(0, 4);
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-white py-12 md:py-14">
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          aria-hidden
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 90% 10%, rgba(16,82,224,0.08), transparent 50%), radial-gradient(ellipse 60% 50% at 10% 90%, rgba(16,82,224,0.05), transparent 45%)",
          }}
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left text */}
            <div className="max-w-xl">
              <div className="flex items-center gap-3">
                <span className="h-0.5 w-8" style={{ backgroundColor: BLUE }} />
                <span
                  className="text-[12px] font-extrabold uppercase tracking-[0.18em]"
                  style={{ color: BLUE }}
                >
                  Pricing Plans
                </span>
              </div>

              <h1 className="mt-4 text-[2.1rem] font-extrabold leading-tight tracking-tight text-[#111827] sm:text-[2.8rem] md:text-[3rem]">
                Simple, Transparent Pricing for{" "}
                <span style={{ color: BLUE }}>Every Need</span>
              </h1>

              <p className="mt-4 max-w-lg text-[14.5px] leading-relaxed text-[#6b7280]">
                Choose the perfect plan for your requirements. All plans come
                with premium service and 100% satisfaction guarantee.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-5">
                <span className="flex items-center gap-2 text-[13.5px] font-bold text-[#111827]">
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white"
                    style={{ backgroundColor: BLUE }}
                  >
                    <FaCheck aria-hidden />
                  </span>
                  No Hidden Charges
                </span>
                <span className="flex items-center gap-2 text-[13.5px] font-bold text-[#111827]">
                  <span
                    className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] text-white"
                    style={{ backgroundColor: BLUE }}
                  >
                    <FaCheck aria-hidden />
                  </span>
                  100% Satisfaction Guarantee
                </span>
              </div>
            </div>

            {/* Right image */}
            {/* Right image container */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none flex justify-center items-end">
              {/* Curved Background Shape */}
              <div
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
                aria-hidden
              >
                <div className="absolute top-4 left-0 right-0 bottom-0 bg-white rounded-t-[100px] sm:rounded-t-[140px] lg:rounded-t-[160px]" />
              </div>

              {/* Plumber Image Container */}
              <div className="relative z-10 flex items-end justify-center w-full">
                <div className="relative aspect-4/5 w-72 sm:w-96">
                  <MediaImage
                    themeId={data.themeId}
                    src={plumberImage}
                    alt="Trusted technician with wrench"
                    fill
                    className="object-contain object-bottom"
                    sizes="(max-width: 1024px) 340px, 450px"
                    priority
                  />
                </div>

                {/* Floating "Trusted Service" Shield Badge */}
                <div className="absolute top-4 right-2 z-20 flex flex-col items-center justify-center rounded-[1.75rem] bg-white p-5 text-center shadow-[0_14px_36px_rgba(16,82,224,0.18)] ring-4 ring-[#eef5ff] sm:top-6 sm:right-4 sm:p-6 sm:rounded-[2rem]">
                  <div
                    className="flex h-24 w-20 flex-col items-center justify-center rounded-3xl text-white shadow-inner sm:h-28 sm:w-24"
                    style={{ backgroundColor: BLUE }}
                  >
                    <FaShieldAlt className="text-3xl sm:text-4xl" />
                    <span className="mt-2 px-1.5 text-[10px] font-black uppercase leading-tight tracking-wider sm:text-[11px]">
                      Trusted Service
                    </span>
                    <span
                      className="mt-2 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] sm:h-6 sm:w-6 sm:text-[11px]"
                      style={{ color: BLUE }}
                    >
                      <FaCheck />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="bg-transparent">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plans.map((plan) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.title}
                  className={[
                    "relative flex flex-col rounded-4xl bg-white p-7 text-center transition duration-300",
                    plan.popular
                      ? "border-2 shadow-[0_20px_40px_rgba(16,82,224,0.12)]"
                      : "border border-[#e2e8f0] shadow-sm hover:-translate-y-1 hover:shadow-md",
                  ].join(" ")}
                  style={plan.popular ? { borderColor: BLUE } : undefined}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                      <div
                        className="relative flex h-8 items-center justify-center px-8 text-[11px] font-black uppercase tracking-wider text-white"
                        style={{
                          backgroundColor: BLUE,
                          clipPath:
                            "polygon(0 0, 100% 0, calc(100% - 10px) 100%, 10px 100%)",
                        }}
                      >
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="mt-2 flex flex-col items-center">
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-full bg-[#eef5ff]"
                      style={{ color: BLUE }}
                    >
                      <Icon className="text-2xl" aria-hidden />
                    </span>

                    <h3 className="mt-5 text-[20px] font-bold text-[#0f172a]">
                      {plan.title}
                    </h3>
                    <p className="mt-1 text-[13px] text-[#64748b]">
                      {plan.desc}
                    </p>

                    <div className="mt-5 flex items-baseline justify-center gap-1">
                      <span className="text-[2.8rem] font-black tracking-tight text-[#0f172a]">
                        {plan.price}
                      </span>
                      <span className="text-[14px] font-semibold text-[#64748b]">
                        /visit
                      </span>
                    </div>
                  </div>

                  <ul className="mt-6 flex flex-col gap-3 text-left">
                    {plan.features.map((f) => (
                      <li
                        key={f.label}
                        className={[
                          "flex items-center gap-3 text-[13.5px] font-semibold",
                          f.included ? "text-[#0f172a]" : "text-[#94a3b8]",
                        ].join(" ")}
                      >
                        {f.included ? (
                          <span
                            className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full text-[10px] text-white"
                            style={{ backgroundColor: BLUE }}
                          >
                            <FaCheck aria-hidden />
                          </span>
                        ) : (
                          <span className="flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full border border-[#cbd5e1] text-[10px] text-[#cbd5e1]">
                            <FaRegCircle aria-hidden />
                          </span>
                        )}
                        {f.label}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 pt-2">
                    <Link
                      href={withTheme("/contact", THEME)}
                      className={[
                        "inline-flex w-full items-center justify-center rounded-2xl py-3.5 text-[14px] font-bold transition-all",
                        plan.popular
                          ? "text-white shadow-md hover:opacity-95"
                          : "border-2 bg-white hover:bg-[#f8fafc]",
                      ].join(" ")}
                      style={
                        plan.popular
                          ? { backgroundColor: BLUE }
                          : { borderColor: BLUE, color: BLUE }
                      }
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ + help CTA */}
      <section className="bg-white py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-start gap-6 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2">
                <span
                  className="h-0.5 w-10 rounded-full bg-[#9fd40b]"
                  aria-hidden
                />
                <span
                  className="text-[12px] font-extrabold uppercase tracking-[0.18em]"
                  style={{ color: BLUE }}
                >
                  Pricing FAQs
                </span>
                <span
                  className="h-0.5 w-10 rounded-full bg-[#9fd40b]"
                  aria-hidden
                />
              </div>

              <h2 className="mt-2 text-[20px] font-extrabold tracking-tight text-[#0a1f44]">
                Frequently Asked Questions
              </h2>

              <div className="mt-4 overflow-hidden rounded-2xl border border-[#e8edf4] bg-white">
                {faqItems.map((item, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={item.question}
                      className="border-b border-[#eef2f7] bg-white last:border-b-0"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={isOpen}
                      >
                        <span className="text-[13.5px] font-bold leading-snug text-[#0a1f44] sm:text-[14px]">
                          {item.question}
                        </span>
                        <span
                          className={[
                            "flex h-8 w-8 items-center justify-center rounded-full border text-[16px] leading-none transition",
                            isOpen
                              ? "border-[#1052E0] bg-[#1052E0] text-white"
                              : "border-[#dbe7f6] bg-white text-[#1052E0]",
                          ].join(" ")}
                          aria-hidden
                        >
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                      {isOpen && (
                        <p className="px-5 pb-5 text-[12.8px] leading-relaxed text-[#64748b]">
                          {item.answer}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl bg-[#1052E0] px-6 py-8 text-center text-white shadow-[0_18px_40px_rgba(16,82,224,0.18)]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12),transparent_55%)]" />
                <div className="relative">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-[#1052E0] shadow-md">
                    <FaPhoneAlt className="text-sm" aria-hidden />
                  </span>
                  <h3 className="mx-auto mt-4 max-w-xs text-[22px] font-extrabold leading-snug">
                    Not Sure Which Plan Is Right for You?
                  </h3>
                  <p className="mx-auto mt-3 max-w-sm text-[13px] leading-relaxed text-white/80">
                    Our team can help you choose the right pricing plan based
                    on your service needs and budget.
                  </p>
                  <Link
                    href={withTheme("/contact", theme)}
                    className="mt-5 inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-[12.5px] font-extrabold text-[#1052E0] transition hover:bg-[#f3f6fb]"
                  >
                    Contact Us Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="border-t border-[#eef2f7] bg-white py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 rounded-xl bg-white p-4 shadow-[0_4px_16px_rgba(10,31,68,0.04)]"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#eef5ff]"
                    style={{ color: BLUE }}
                  >
                    <Icon className="text-lg" aria-hidden />
                  </span>
                  <div>
                    <p className="text-[14px] font-extrabold text-[#0a1f44]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-[12px] leading-snug text-[#8b93a7]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
