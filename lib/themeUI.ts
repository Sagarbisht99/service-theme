import type { ThemeId } from "@/lib/types";

/** Shared UI tokens so inner pages match the homepage theme */
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
  "template-1": {
    isDark: false,
    accent: "text-[#1052E0]",
    accentSoft: "bg-[#eef5ff] text-[#1052E0]",
    iconBg: "bg-[#eef5ff] text-[#1052E0]",
    card: "bg-white shadow-md rounded-3xl border border-[#dbe7f6]/80",
    title: "text-[#0a1f44]",
    muted: "text-[#0a1f44]/70",
    subtle: "text-[#0a1f44]/50",
    btn: "bg-[#1052E0] hover:bg-[#0d46c2] text-white rounded-full font-bold shadow-md shadow-[#1052E0]/25",
    btnSecondary:
      "border border-[#1052E0]/20 text-[#0a1f44] hover:bg-[#1052E0]/5 rounded-full font-semibold",
    input: "border-[#dbe7f6] bg-white text-[#0a1f44] placeholder:text-gray-400 rounded-full px-5",
    badge: "bg-[#9fd40b] text-[#0a1f44]",
    badgeDark: "bg-[#0a1f44] text-white",
    border: "border-[#dbe7f6]",
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
  return themeUI[theme] ?? themeUI["template-1"];
}
