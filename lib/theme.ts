import { ACTIVE_THEME, type ThemeId } from "@/lib/types";

const VALID: ThemeId[] = ["service", "template-1"];

export function resolveTheme(themeParam?: string | null): ThemeId {
  if (themeParam && VALID.includes(themeParam as ThemeId)) {
    return themeParam as ThemeId;
  }
  return ACTIVE_THEME;
}

export function withTheme(href: string, theme: ThemeId): string {
  if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
    return href;
  }
  if (href.startsWith("http")) return href;

  const [path, hash] = href.split("#");
  const url = new URL(path || "/", "http://local");
  url.searchParams.set("theme", theme);
  const search = url.searchParams.toString();
  const base = `${url.pathname}${search ? `?${search}` : ""}`;
  return hash ? `${base}#${hash}` : base;
}

export const themeShellClass: Record<ThemeId, string> = {
  service:
    "theme-service min-h-screen overflow-x-hidden bg-[#f4f7fb] text-[#0b1f3a]",
  "template-1":
    "theme-template-1 min-h-screen overflow-x-hidden bg-white text-[#0a1f44]",
};

export function cssVarsStyle(
  variables: Record<string, string>
): Record<string, string> {
  return variables;
}
