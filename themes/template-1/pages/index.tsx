import LegalPage from "@/themes/template-1/pages/LegalPage";
import GalleryPage from "@/themes/template-1/pages/GalleryPage";
import ProjectsPage from "@/themes/template-1/pages/ProjectsPage";
import ServicesPage from "@/themes/template-1/pages/ServicesPage";
import BlogPage from "@/themes/template-1/pages/BlogPage";
import AboutPage from "@/themes/template-1/pages/AboutPage";
import SitemapPage from "@/themes/template-1/pages/SitemapPage";
import PricingPage from "@/themes/template-1/pages/PricingPage";
import AwardsPage from "@/themes/template-1/pages/AwardsPage";
import CareerPage from "@/themes/template-1/pages/CareerPage";
import WhyChooseUsPage from "@/themes/template-1/pages/WhyChooseUsPage";
import ContactPage from "@/themes/template-1/pages/ContactPage";
import TeamPage from "@/themes/template-1/pages/TeamPage";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

type Props = { data: ResolvedSiteData; theme: ThemeId };

export function Pricing(p: Props) {
  return <PricingPage data={p.data} theme={p.theme} />;
}

export function About(p: Props) {
  return <AboutPage data={p.data} theme={p.theme} />;
}

export function Contact(p: Props) {
  return <ContactPage data={p.data} theme={p.theme} />;
}

export function Properties(p: Props) {
  return <ServicesPage {...p} />;
}

export function Blog(p: Props) {
  return <BlogPage {...p} />;
}

export function Services(p: Props) {
  return <ServicesPage {...p} />;
}

export function Privacy(p: Props) {
  return <LegalPage {...p} page={p.data.privacyPage} />;
}

export function Terms(p: Props) {
  return <LegalPage {...p} page={p.data.termsPage} />;
}

export function Disclaimer(p: Props) {
  return <LegalPage {...p} page={p.data.disclaimerPage} />;
}

export function CookiePolicy(p: Props) {
  return <LegalPage {...p} page={p.data.cookiePolicyPage} />;
}

export function RefundPolicy(p: Props) {
  return <LegalPage {...p} page={p.data.refundPolicyPage} />;
}

export function Gallery(p: Props) {
  return <GalleryPage {...p} />;
}

export function Projects(p: Props) {
  return <ProjectsPage {...p} />;
}

export function Sitemap(p: Props) {
  return <SitemapPage {...p} />;
}

export function Team(p: Props) {
  return <TeamPage data={p.data} theme={p.theme} />;
}

export function Awards(p: Props) {
  return <AwardsPage data={p.data} theme={p.theme} />;
}

export function Career(p: Props) {
  return <CareerPage data={p.data} theme={p.theme} />;
}

export function WhyChooseUs(p: Props) {
  return <WhyChooseUsPage data={p.data} theme={p.theme} />;
}

export function ErrorPage({
  info,
}: {
  theme: ThemeId;
  info: { code: string; title: string; description: string; cta: string };
  onRetry?: () => void;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24 text-center">
      <p className="text-sm font-semibold text-[#1052E0]">{info.code}</p>
      <h1 className="mt-3 text-3xl font-bold text-[#0a1f44]">{info.title}</h1>
      <p className="mt-3 text-[#0a1f44]/65">{info.description}</p>
    </section>
  );
}
