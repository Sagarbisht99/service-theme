import type { ThemeId } from "@/lib/types";
import { template1Pack } from "@/themes/template-1/registry";
import type { ThemePack } from "@/themes/types";

export type { ThemePack } from "@/themes/types";

/**
 * Only template-1 is active. Legacy ?theme=service resolves here too.
 */
export const themePacks: Record<ThemeId, ThemePack> = {
  "template-1": template1Pack,
};

export function getThemePack(theme: ThemeId): ThemePack {
  return themePacks[theme] ?? themePacks["template-1"];
}

export { themeMap } from "@/themes/themeMap";
