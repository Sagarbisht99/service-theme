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
    iconBg: "bg-[#e8f0fe]", 
    iconColor: "text-[#1d6feb]" 
  },
  { 
    icon: FaUsers, 
    value: "4.3K", 
    label: "Happy\nClients", 
    iconBg: "bg-[#eaf8e6]", 
    iconColor: "text-[#4caf50]" 
  },
  { 
    icon: FaAward, 
    value: "25", 
    label: "Qualified\nExperts", 
    iconBg: "bg-[#e8f0fe]", 
    iconColor: "text-[#1d6feb]" 
  },
];

const features = [
  {
    icon: FaCheck,
    title: "Quality Workmanship",
    desc: "We deliver reliable and long-lasting solutions.",
    bg: "bg-[#1d6feb]",
    iconColor: "text-white",
  },
  {
    icon: FaHeadset,
    title: "Customer First",
    desc: "Your satisfaction is our top priority.",
    bg: "bg-[#e6f7e2]",
    iconColor: "text-[#4caf50]",
  },
  {
    icon: FaClock,
    title: "On-Time Service",
    desc: "We value your time and always deliver on schedule.",
    bg: "bg-[#e8f0fe]",
    iconColor: "text-[#1d6feb]",
  },
  {
    icon: FaCog,
    title: "Expert Team",
    desc: "Skilled professionals with years of experience.",
    bg: "bg-[#e6f7e2]",
    iconColor: "text-[#4caf50]",
  },
];

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      {/* Background Soft Glow Texture */}

 <h1>Sagar is here</h1>

      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(circle at 95% 100%, rgba(29,111,235,0.08) 0%, transparent 50%), radial-gradient(circle at 0% 0%, rgba(131,196,3,0.06) 0%, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-4 md:px-6 lg:px-8">
        
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
            <span className="text-[13px] font-extrabold uppercase tracking-wide text-[#1d6feb]">
              Welcome to Aquafix
            </span>
            <span className="mt-1 h-[3px] w-10 rounded-full bg-[#83c403]" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-5 max-w-[950px] text-[26px] font-extrabold leading-[1.22] tracking-tight sm:text-[34px] md:text-[40px] text-[#0b1938]"
          >
            With years of industry experience, our team of skilled professionals is dedicated to providing{" "}
            <span className="text-[#1d6feb]">top-notch solutions.</span>
          </motion.h2>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Image with Custom Shapes */}
          <motion.div
            className="relative lg:col-span-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            {/* Top Left Dot Grid */}
            <div className="absolute -left-6 -top-6 -z-10 grid grid-cols-6 gap-2">
              {[...Array(24)].map((_, i) => (
                <span key={i} className="h-[5px] w-[5px] rounded-full bg-[#1d6feb]" />
              ))}
            </div>

            {/* Main Image with Exact Custom Curves */}
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden rounded-tr-[2.5rem] rounded-br-[2.5rem] rounded-tl-[5rem] rounded-bl-none shadow-lg">
              <Image
                src="/who-we-are.jpg"
                alt="Aquafix professional consulting a customer"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Bottom-Left Curved Blue Accent Shape */}
            <div className="absolute -bottom-6 -left-6 -z-10 h-32 w-32 rounded-bl-[2.5rem] bg-[#1d6feb]" />

            {/* Floating Badge */}
            <div className="absolute -bottom-5 left-8 z-20 flex max-w-[270px] items-center gap-3.5 rounded-2xl bg-[#1d6feb] p-4 text-white shadow-xl">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#83c403] text-white">
                <FaCheck className="text-lg" />
              </div>
              <div>
                <h4 className="text-[14px] font-bold leading-tight">
                  Trusted by Thousands
                </h4>
                <p className="mt-1 text-[11px] leading-tight text-white/80">
                  Delivering reliable service with complete satisfaction.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content + Stats */}
          <motion.div
            className="lg:col-span-6 lg:pl-4"
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
              <span className="text-[13px] font-extrabold uppercase tracking-wide text-[#1d6feb]">
                WHO WE ARE
              </span>
              <span className="h-[2px] w-8 bg-[#83c403]" />
            </motion.div>

            {/* Title */}
            <motion.h3
              variants={fadeUp}
              className="mt-3 text-[28px] font-extrabold leading-[1.2] tracking-tight sm:text-[34px] text-[#0b1938]"
            >
              We focus on customer satisfaction and quality
            </motion.h3>

            {/* Paragraph Text */}
            <motion.p
              variants={fadeUp}
              className="mt-4 text-[13.5px] leading-relaxed text-slate-500 max-w-[520px]"
            >
              Our team of skilled professionals is dedicated to providing top-notch solutions and exceptional customer service. Our commitment to quality workmanship, ensuring that every job is done right the first time.
            </motion.p>

            {/* Stats Card */}
            <motion.div
              variants={fadeUp}
              className="mt-7 flex items-center justify-between rounded-2xl bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-slate-100/80"
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center gap-3">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${stat.iconBg}`}>
                      <Icon className={`text-xl ${stat.iconColor}`} />
                    </div>
                    <div>
                      <div className="flex items-baseline text-[22px] font-black text-[#1d6feb] leading-none">
                        {stat.value}
                        <span className="text-[#83c403] font-bold text-[18px] ml-0.5">+</span>
                      </div>
                      <p className="mt-1 whitespace-pre-line text-[11px] font-medium text-slate-500 leading-tight">
                        {stat.label}
                      </p>
                    </div>
                    {index < stats.length - 1 && (
                      <div className="ml-2 h-10 w-[1px] bg-slate-200/70" />
                    )}
                  </div>
                );
              })}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={fadeUp} className="mt-7">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-full border-2 border-[#1d6feb] px-7 py-3 text-[13.5px] font-bold text-[#1d6feb] transition duration-200 hover:bg-[#1d6feb] hover:text-white"
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
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <div key={i} className="flex items-start gap-3.5">
                  <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${feature.bg}`}>
                    <Icon className={`text-base ${feature.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#0b1938]">
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