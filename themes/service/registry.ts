import type { ComponentType } from "react";
import type { LinkItem, ResolvedSiteData, ThemeId } from "@/lib/types";
import { themeShellClass } from "@/lib/theme";
import Home from "@/themes/service";
import Header from "@/themes/service/Header";
import Footer from "@/themes/service/Footer";
import PageBanner from "@/themes/service/pages/PageBanner";
import {
  About,
  Contact,
  Properties,
  Blog,
  Services,
  Privacy,
  Terms,
  ErrorPage,
  Gallery,
  Team,
  Awards,
  Career,
  Csr,
  Mission,
  WhyChooseUs,
  EmiCalculator,
  AreaConverter,
  InvestmentTips,
  Sell,
  Projects,
  Disclaimer,
  CookiePolicy,
  RefundPolicy,
  Sitemap,
} from "@/themes/service/pages";

type HeaderProps = { data: ResolvedSiteData; variant?: "overlay" | "solid" };
type FooterProps = { data: ResolvedSiteData };
type PageProps = { data: ResolvedSiteData; theme: ThemeId };
type ErrorProps = {
  theme: ThemeId;
  info: { code: string; title: string; description: string; cta: string };
  onRetry?: () => void;
};

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
    Csr?: ComponentType<PageProps>;
    Mission?: ComponentType<PageProps>;
    WhyChooseUs?: ComponentType<PageProps>;
    EmiCalculator?: ComponentType<PageProps>;
    AreaConverter?: ComponentType<PageProps>;
    InvestmentTips?: ComponentType<PageProps>;
    Sell?: ComponentType<PageProps>;
    Projects?: ComponentType<PageProps>;
    Disclaimer?: ComponentType<PageProps>;
    CookiePolicy?: ComponentType<PageProps>;
    RefundPolicy?: ComponentType<PageProps>;
    Sitemap?: ComponentType<PageProps>;
  };
};

export const servicePack: ThemePack = {
  id: "service",
  shellClass: themeShellClass.service,
  Home,
  Header,
  Footer,
  PageBanner,
  pages: {
    About,
    Contact,
    Properties,
    Blog,
    Services,
    Privacy,
    Terms,
    Error: ErrorPage,
    Gallery,
    Awards,
    Career,
    Csr,
    Mission,
    Team,
    WhyChooseUs,
    EmiCalculator,
    AreaConverter,
    InvestmentTips,
    Sell,
    Projects,
    Disclaimer,
    CookiePolicy,
    RefundPolicy,
    Sitemap,
  },
};
