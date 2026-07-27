"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBath,
  FaBolt,
  FaBuilding,
  FaClipboardCheck,
  FaClock,
  FaFireAlt,
  FaHome,
  FaSink,
  FaSoap,
  FaTint,
  FaToilet,
  FaTools,
  FaWarehouse,
  FaWater,
  FaWrench,
} from "react-icons/fa";
import type { ResolvedSiteData } from "@/lib/types";
import { withTheme } from "@/lib/theme";

const THEME = "template-1" as const;
const NAVY = "#0a1f44";
const BLUE = "#1d6feb";
const LIME = "#9fd40b";

const iconMap: Record<string, typeof FaHome> = {
  FaKitchenSet: FaSink,
  FaBath,
  FaBuilding,
  FaHome,
  FaWarehouse,
  FaToolbox: FaTools,
  FaTint,
  FaSink,
  FaToilet,
  FaShower: FaBath,
  FaFireAlt,
  FaWater,
  FaPipeLeak: FaTools,
  FaPumpSoap: FaSoap,
  FaSoap,
  FaWrench,
  FaClock,
  FaClipboardCheck,
  FaBolt,
};

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

export default function ServiceIconGrid({ data }: { data: ResolvedSiteData }) {
  const section = data.serviceIconGrid;
  if (!section?.items?.length) return null;

  return (
    <section className="relative overflow-hidden bg-[#f8fafc] py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.p
            variants={fadeUp}
            className="text-[13px] font-extrabold uppercase tracking-wide text-[#1d6feb]"
          >
            {section.pretitle}
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-3 max-w-2xl text-[1.8rem] font-extrabold leading-tight text-[#0b1938] sm:text-[2.2rem] md:text-[2.6rem]"
          >
            {section.title}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-xl text-[14px] leading-relaxed text-slate-500"
          >
            {section.desc}
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
        >
          {section.items.map((item, index) => {
            const Icon = iconMap[item.icon] ?? FaTools;
            const isAccent = index % 4 === 0;
            return (
              <motion.div
                key={item.label}
                variants={fadeUp}
              >
                <Link
                  href={item.href ? withTheme(item.href, THEME) : withTheme("/services", THEME)}
                  className="group flex flex-col items-center rounded-2xl border border-slate-100 bg-white p-5 text-center shadow-[0_4px_20px_rgba(10,31,68,0.05)] transition hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(10,31,68,0.10)]"
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full text-[1.3rem] transition group-hover:scale-105"
                    style={{
                      color: isAccent ? NAVY : BLUE,
                      backgroundColor: isAccent ? LIME : "#e8f0fe",
                    }}
                  >
                    <Icon aria-hidden />
                  </span>
                  <span className="mt-3 text-[13px] font-bold text-[#0b1938]">
                    {item.label}
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
