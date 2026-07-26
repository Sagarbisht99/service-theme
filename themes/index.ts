import type { ThemeId } from "@/lib/types";
import { servicePack, type ThemePack } from "@/themes/service/registry";
import { template1Pack } from "@/themes/template-1/registry";

/**
 * Theme registry.
 */
export const themePacks: Record<ThemeId, ThemePack> = {
  service: servicePack,
  "template-1": template1Pack,
};

export function getThemePack(theme: ThemeId): ThemePack {
  return themePacks[theme] ?? themePacks["template-1"];
}

export { themeMap } from "@/themes/themeMap";
export type { ThemePack };
