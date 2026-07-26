import ServiceHome from "@/themes/service";
import Template1Home from "@/themes/template-1";
import type { ThemeId, ResolvedSiteData } from "@/lib/types";
import type { ComponentType } from "react";

/** Homepage-only map */
export const themeMap: Record<
  ThemeId,
  ComponentType<{ data: ResolvedSiteData }>
> = {
  service: ServiceHome,
  "template-1": Template1Home,
};
