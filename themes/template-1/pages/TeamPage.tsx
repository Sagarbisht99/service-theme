"use client";

import PageBanner from "@/themes/template-1/pages/PageBanner";
import Team from "@/themes/template-1/sections/Team";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

type Props = { data: ResolvedSiteData; theme: ThemeId };

export default function TeamPage({ data, theme }: Props) {
  const team = data.team;

  return (
    <>
      <PageBanner
        theme={theme}
        eyebrow={team?.pretitle || "Our team"}
        title={team?.title || "Meet the technicians behind every job"}
        desc={team?.desc}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Team", href: "/team" },
        ]}
      />
      <Team data={data} />
    </>
  );
}
