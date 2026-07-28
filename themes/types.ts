import type { ComponentType } from "react";
import type { LinkItem, ResolvedSiteData, ThemeId } from "@/lib/types";

type HeaderProps = { data: ResolvedSiteData; variant?: "overlay" | "solid" };
type FooterProps = { data: ResolvedSiteData };
type PageProps = { data: ResolvedSiteData; theme: ThemeId };
type ErrorProps = {
  theme: ThemeId;
  info: { code: string; title: string; description: string; cta: string };
  onRetry?: () => void;
};

/** Single theme pack contract — template-1 only */
export type ThemePack = {
  id: ThemeId;
  shellClass: string;
  Home: ComponentType<{ data: ResolvedSiteData }>;
  Header: ComponentType<HeaderProps>;
  Footer: ComponentType<FooterProps>;
  PageBanner: ComponentType<{
    theme: ThemeId;
    title: string;
    eyebrow?: string;
    desc?: string;
    breadcrumb?: LinkItem[];
  }>;
  pages: {
    About: ComponentType<PageProps>;
    Contact: ComponentType<PageProps>;
    Properties: ComponentType<PageProps>;
    Blog: ComponentType<PageProps>;
    Services: ComponentType<PageProps>;
    Privacy: ComponentType<PageProps>;
    Terms: ComponentType<PageProps>;
    Error: ComponentType<ErrorProps>;
    Gallery?: ComponentType<PageProps>;
    Team?: ComponentType<PageProps>;
    Awards?: ComponentType<PageProps>;
    Career?: ComponentType<PageProps>;
    WhyChooseUs?: ComponentType<PageProps>;
    Projects?: ComponentType<PageProps>;
    Disclaimer?: ComponentType<PageProps>;
    CookiePolicy?: ComponentType<PageProps>;
    RefundPolicy?: ComponentType<PageProps>;
    Sitemap?: ComponentType<PageProps>;
    Pricing?: ComponentType<PageProps>;
  };
};
