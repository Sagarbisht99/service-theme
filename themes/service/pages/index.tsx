import StubPage from "@/themes/service/pages/StubPage";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

type Props = { data: ResolvedSiteData; theme: ThemeId };

export function About(p: Props) {
  return <StubPage {...p} title="About" />;
}
export function Contact(p: Props) {
  return <StubPage {...p} title="Contact" />;
}
export function Properties(p: Props) {
  return <StubPage {...p} title="Services" />;
}
export function Blog(p: Props) {
  return <StubPage {...p} title="Blog" />;
}
export function Services(p: Props) {
  return <StubPage {...p} title="Services" />;
}
export function Privacy(p: Props) {
  return <StubPage {...p} title="Privacy Policy" />;
}
export function Terms(p: Props) {
  return <StubPage {...p} title="Terms & Conditions" />;
}
export function Gallery(p: Props) {
  return <StubPage {...p} title="Gallery" />;
}
export function Team(p: Props) {
  return <StubPage {...p} title="Team" />;
}
export function Awards(p: Props) {
  return <StubPage {...p} title="Awards" />;
}
export function Career(p: Props) {
  return <StubPage {...p} title="Careers" />;
}
export function Csr(p: Props) {
  return <StubPage {...p} title="CSR" />;
}
export function Mission(p: Props) {
  return <StubPage {...p} title="Mission" />;
}
export function WhyChooseUs(p: Props) {
  return <StubPage {...p} title="Why Choose Us" />;
}
export function EmiCalculator(p: Props) {
  return <StubPage {...p} title="EMI Calculator" />;
}
export function AreaConverter(p: Props) {
  return <StubPage {...p} title="Area Converter" />;
}
export function InvestmentTips(p: Props) {
  return <StubPage {...p} title="Investment Tips" />;
}
export function Sell(p: Props) {
  return <StubPage {...p} title="Sell" />;
}
export function Projects(p: Props) {
  return <StubPage {...p} title="Completed Works" />;
}
export function Disclaimer(p: Props) {
  return <StubPage {...p} title="Disclaimer" />;
}
export function CookiePolicy(p: Props) {
  return <StubPage {...p} title="Cookie Policy" />;
}
export function RefundPolicy(p: Props) {
  return <StubPage {...p} title="Refund Policy" />;
}
export function Sitemap(p: Props) {
  return <StubPage {...p} title="Sitemap" />;
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
      <p className="text-sm font-semibold text-[#9fd40b]">{info.code}</p>
      <h1 className="mt-3 text-3xl font-bold text-[#0b1f3a]">{info.title}</h1>
      <p className="mt-3 text-[#0b1f3a]/65">{info.description}</p>
    </section>
  );
}
