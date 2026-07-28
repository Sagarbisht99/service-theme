"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaCheck,
  FaCalendarAlt,
  FaUsers,
  FaAward,
  FaHeadset,
  FaClock,
  FaCog,
} from "react-icons/fa";
import type { ResolvedSiteData } from "@/lib/types";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease },
  },
};

const stats = [
  { 
    icon: FaCalendarAlt, 
    value: "18", 
    label: "Year\nExperience", 
    iconBg: "bg-[#eef5ff]", 
    iconColor: "text-[#1052E0]" 
  },
  { 
    icon: FaUsers, 
    value: "4.3K", 
    label: "Happy\nClients", 
    iconBg: "bg-[#eef5ff]", 
    iconColor: "text-[#1052E0]" 
  },
  { 
    icon: FaAward, 
    value: "25", 
    label: "Qualified\nExperts", 
    iconBg: "bg-[#eef5ff]", 
    iconColor: "text-[#1052E0]" 
  },
];

const featureIcons = [FaCheck, FaHeadset, FaClock, FaCog];
const featureBgs = ["bg-[#1052E0]", "bg-[#eef5ff]", "bg-[#eef5ff]", "bg-[#eef5ff]"];
const featureIconColors = ["text-white", "text-[#1052E0]", "text-[#1052E0]", "text-[#1052E0]"];

export default function WhoWeAre({ data }: { data: ResolvedSiteData }) {
  const about = data.about;
  const aboutFeatures = about.features ?? [];
  return (
    <section className="relative bg-white py-12 md:py-14">
      {/* Background Soft Glow Texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 95% 100%, rgba(29,111,235,0.08) 0%, transparent 50%), radial-gradient(circle at 0% 0%, rgba(131,196,3,0.06) 0%, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-310 px-6 sm:px-10 lg:px-12">
        
        {/* Top Centered Header Section */}
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.div variants={fadeUp} className="inline-flex flex-col items-center">
            <span className="text-[13px] font-extrabold uppercase tracking-wide text-[#1052E0]">
              {about.pretitle || "About Us"}
            </span>
            <span className="mt-1 h-0.75 w-10 rounded-full bg-[#9fd40b]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-5 max-w-237.5 text-[26px] font-extrabold leading-[1.22] tracking-tight sm:text-[34px] md:text-[40px] text-[#0a1f44]"
          >
            {about.title || "Professional and Reliable Plumbing Services"}{" "}
            <span className="text-[#1052E0]">top-notch solutions.</span>
          </motion.h2>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Image Wrapper */}
          <motion.div
            className="relative lg:col-span-6 overflow-visible pl-4 pt-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            {/* 1. TOP-LEFT DOT GRID */}
            <div className="absolute -left-2 -top-2 z-0 grid grid-cols-6 gap-2.5 pointer-events-none">
              {[...Array(24)].map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-[#1052E0]" />
              ))}
            </div>

            {/* 2. BOTTOM-LEFT BLUE BASE ACCENT */}
            <div className="absolute -bottom-6 -left-2 z-0 h-36 w-36 rounded-2xl rounded-bl-[2.5rem] bg-[#1052E0]" />

            {/* 3. MAIN IMAGE CONTAINER */}
            <div className="relative z-10 aspect-4/3 w-full overflow-hidden rounded-tr-[2.5rem] rounded-br-[2.5rem] rounded-tl-[5rem] rounded-bl-none shadow-xl bg-slate-200">
              <Image
                src={about.sideImage || "/about-technician.jpg"}
                alt={about.sideImageTitle || "Aquafix professional consulting customer"}
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* 4. FLOATING BADGE (Centered at bottom border of image) */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-20 flex w-[85%] max-w-75 items-center gap-3.5 rounded-2xl bg-[#1052E0] p-4 text-white shadow-2xl border border-white/10">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#9fd40b] text-white shadow-sm">
                <FaCheck className="text-base" />
              </div>
              <div>
                <h4 className="text-[14px] font-bold leading-tight">
                  Trusted by Thousands
                </h4>
                <p className="mt-1 text-[11px] leading-snug text-white/80">
                  Delivering reliable service with complete satisfaction.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content + Stats */}
          <motion.div
            className="lg:col-span-6 lg:pl-6"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.12 } },
            }}
          >
            {/* Sub-heading Tag */}
            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <span className="text-[13px] font-extrabold uppercase tracking-wide text-[#1052E0]">
                {about.pretitle || "Who We Are"}
              </span>
              <span className="h-0.5 w-8 bg-[#9fd40b]" />
            </motion.div>

            {/* Title */}
            <motion.h3
              variants={fadeUp}
              className="mt-3 text-[28px] font-extrabold leading-[1.2] tracking-tight sm:text-[34px] text-[#0a1f44]"
            >
              {about.subtitle || "We focus on customer satisfaction and quality"}
            </motion.h3>

            {/* Paragraph Text */}
            <motion.p
              variants={fadeUp}
              className="mt-4 text-[13.5px] leading-relaxed text-slate-500 max-w-130"
            >
              {about.desc || "Our team of skilled professionals is dedicated to providing top-notch solutions and exceptional customer service."}
            </motion.p>

            {/* Stats Card */}
            <motion.div
              variants={fadeUp}
              className="mt-7 flex items-center justify-between rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] border border-slate-100"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${stat.iconBg}`}>
                      <Icon className={`text-xl ${stat.iconColor}`} />
                    </div>
                    <div>
                      <div className="flex items-baseline text-[22px] font-black text-[#1052E0] leading-none">
                        {stat.value}
                        <span className="text-[#9fd40b] font-bold text-[18px] ml-0.5">+</span>
                      </div>
                      <p className="mt-1 whitespace-pre-line text-[11px] font-medium text-slate-500 leading-tight">
                        {stat.label}
                      </p>
                    </div>
                    {index < stats.length - 1 && (
                      <div className="ml-2 h-10 w-px bg-slate-200/70" />
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeUp} className="mt-7">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full border-2 border-[#1052E0] px-7 py-3 text-[13.5px] font-bold text-[#1052E0] transition duration-200 hover:bg-[#1052E0] hover:text-white"
              >
                About Us
                <FaArrowRight className="text-[12px]" />
              </Link>
            </motion.div>
          </motion.div>

        </div>

        {/* Bottom Feature Bar */}
        <motion.div
          className="mt-16 rounded-3xl bg-white p-6 md:p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] border border-slate-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutFeatures.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <div key={feature.title} className="flex items-start gap-3.5">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${featureBgs[i % featureBgs.length]}`}>
                    <Icon className={`text-base ${featureIconColors[i % featureIconColors.length]}`} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#0a1f44]">
                      {feature.title}
                    </h4>
                    <p className="mt-1 text-[11.5px] leading-snug text-slate-500">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}