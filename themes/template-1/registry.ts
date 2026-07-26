import type { ComponentType } from "react";
import type { LinkItem, ResolvedSiteData, ThemeId } from "@/lib/types";
import { themeShellClass } from "@/lib/theme";
import Home from "@/themes/template-1";
import Header from "@/themes/template-1/Header";
import Footer from "@/themes/template-1/Footer";
import PageBanner from "@/themes/template-1/pages/PageBanner";
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
} from "@/themes/template-1/pages";
import type { ThemePack } from "@/themes/index";

export const template1Pack: ThemePack = {
  id: "template-1",
  shellClass: themeShellClass["template-1"],
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
  },
};
