"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaBath,
  FaBuilding,
  FaClipboardCheck,
  FaClock,
  FaFireAlt,
  FaHome,
  FaSink,
  FaSoap,
  FaTint,
  FaToilet,
  FaToolbox,
  FaWarehouse,
  FaWater,
  FaWrench,
} from "react-icons/fa";
import type { ResolvedSiteData } from "@/lib/types";
import { withTheme } from "@/lib/theme";

const THEME = "template-1" as const;
const NAVY = "#0a1f44";
const BLUE = "#1d6feb";

const iconMap: Record<string, typeof FaHome> = {
  FaKitchenSet: FaSink,
  FaBath,
  FaBuilding,
  FaHome,
  FaWarehouse,
  FaToolbox,
  FaTint,
  FaSink,
  FaToilet,
  FaShower: FaBath,
  FaFireAlt,
  FaWater,
  FaPipeLeak: FaWrench,
  FaPumpSoap: FaSoap,
  FaSoap,
  FaWrench,
  FaClock,
  FaClipboardCheck,
};

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServiceInfoBar({ data }: { data: ResolvedSiteData }) {
  const section = data.serviceInfoBar;
  if (!section?.items?.length) return null;

  return (
    <section className="relative overflow-hidden py-14 md:py-20" style={{ backgroundColor: NAVY }}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.h2
          className="mx-auto max-w-3xl text-center text-[1.6rem] font-extrabold leading-tight text-white sm:text-[2rem] md:text-[2.4rem]"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
        >
          {section.title}
        </motion.h2>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4 md:gap-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
        >
          {section.items.map((item) => {
            const Icon = iconMap[item.icon] ?? FaWrench;
            const href = item.href ? withTheme(item.href, THEME) : withTheme("/services", THEME);
            return (
              <motion.div
                key={item.label}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
                }}
              >
                <Link
                  href={href}
                  className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 transition hover:border-white/25 hover:bg-white/10"
                >
                  <span
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white transition group-hover:scale-105"
                    style={{ backgroundColor: BLUE }}
                  >
                    <Icon className="text-base" aria-hidden />
                  </span>
                  <span className="text-[14px] font-bold text-white md:text-[15px]">
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
