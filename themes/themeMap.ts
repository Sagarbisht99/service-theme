import Template1Home from "@/themes/template-1";
import type { ThemeId, ResolvedSiteData } from "@/lib/types";
import type { ComponentType } from "react";

/** Homepage-only map — template-1 only */
export const themeMap: Record<
  ThemeId,
  ComponentType<{ data: ResolvedSiteData }>
> = {
  "template-1": Template1Home,
};
