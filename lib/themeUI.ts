import type { ThemeId } from "@/lib/types";

/** Shared UI tokens so inner pages match each homepage theme */
export type ThemeUI = {
  isDark: boolean;
  accent: string;
  accentSoft: string;
  iconBg: string;
  card: string;
  title: string;
  muted: string;
  subtle: string;
  btn: string;
  btnSecondary: string;
  input: string;
  badge: string;
  badgeDark: string;
  border: string;
  /** Absolute header on home — inner pages need sticky instead */
  overlayHeader: boolean;
  page: string;
  intro: string;
  section: string;
  grid: string;
  cardPad: string;
  banner: string;
};

export const themeUI: Record<ThemeId, ThemeUI> = {
  service: {
    isDark: false,
    accent: "text-[#9fd40b]",
    accentSoft: "bg-[#9fd40b]/15 text-[#0b1f3a]",
    iconBg: "bg-[#9fd40b]/15 text-[#9fd40b]",
    card: "bg-white shadow-sm rounded-2xl",
    title: "text-[#0b1f3a]",
    muted: "text-[#0b1f3a]/65",
    subtle: "text-[#0b1f3a]/45",
    btn: "bg-[#9fd40b] hover:bg-[#8fc00a] text-[#0b1f3a] rounded-xl font-semibold",
    btnSecondary:
      "border border-[#0b1f3a]/15 text-[#0b1f3a] hover:bg-[#0b1f3a]/5 rounded-xl",
    input: "border-[#0b1f3a]/15 bg-white text-[#0b1f3a] placeholder:text-[#0b1f3a]/40",
    badge: "bg-[#9fd40b] text-[#0b1f3a]",
    badgeDark: "bg-[#0b1f3a] text-white",
    border: "border-[#0b1f3a]/10",
    overlayHeader: false,
    page: "mx-auto max-w-7xl px-4 py-10 md:py-14",
    intro: "mb-8 max-w-2xl",
    section: "mt-10",
    grid: "gap-6",
    cardPad: "p-6",
    banner: "bg-[#0b1f3a] py-10 md:py-14",
  },
  "template-1": {
    isDark: false,
    accent: "text-[#0a1f44]",
    accentSoft: "bg-[#0a1f44]/10 text-[#0a1f44]",
    iconBg: "bg-[#0a1f44]/10 text-[#0a1f44]",
    card: "bg-white shadow-md rounded-3xl border border-gray-100/80",
    title: "text-[#0a1f44]",
    muted: "text-[#0a1f44]/70",
    subtle: "text-[#0a1f44]/50",
    btn: "bg-[#9fd40b] hover:bg-[#8fc00a] text-[#0a1f44] rounded-full font-bold shadow-md shadow-[#9fd40b]/25",
    btnSecondary:
      "border border-[#0a1f44]/15 text-[#0a1f44] hover:bg-[#0a1f44]/5 rounded-full font-semibold",
    input: "border-gray-200 bg-white text-[#0a1f44] placeholder:text-gray-400 rounded-full px-5",
    badge: "bg-[#0a1f44] text-white",
    badgeDark: "bg-[#0a1f44] text-white",
    border: "border-gray-100",
    overlayHeader: false,
    page: "mx-auto max-w-7xl px-4 py-8 md:py-12",
    intro: "mb-6 max-w-2xl",
    section: "mt-8",
    grid: "gap-5",
    cardPad: "p-5",
    banner: "bg-[#0a1f44] py-12 md:py-16 text-white",
  },
};

export function getThemeUI(theme: ThemeId): ThemeUI {
  return themeUI[theme];
}
