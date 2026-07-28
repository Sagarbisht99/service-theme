"use client";

import Link from "next/link";
import { FaArrowRight, FaCalendarAlt } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import PageBanner from "@/themes/template-1/pages/PageBanner";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData, ThemeId } from "@/lib/types";

type Props = { data: ResolvedSiteData; theme: ThemeId };

const NAVY = "#0a1f44";
const BLUE = "#1052E0";
const LIME = "#9fd40b";

export default function BlogPage({ data, theme }: Props) {
  const gallery = data.gallery;
  const posts = gallery?.galleryItems ?? [];

  return (
    <>
      <PageBanner
        theme={theme}
        eyebrow={gallery?.pretitle || "Blog"}
        title={gallery?.title || "Plumbing Tips & Insights"}
        desc={gallery?.desc}
        breadcrumb={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
      />

      <section className="bg-[#f8fafc] py-12 md:py-14">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {posts.map((post) => {
              const href =
                post.href || (post.slug ? `/blog/${post.slug}` : "/blog");

              return (
                <Link
                  key={post.slug || post.title}
                  href={withTheme(href, theme)}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#e8edf4] bg-white shadow-[0_8px_28px_rgba(10,31,68,0.06)] transition duration-300 hover:-translate-y-1 hover:border-[#1052E0]/25 hover:shadow-[0_16px_40px_rgba(16,82,224,0.12)]"
                >
                  <div className="relative aspect-16/10 w-full overflow-hidden bg-[#eef2f7]">
                    <MediaImage
                      themeId={data.themeId}
                      src={post.image}
                      alt={post.alt || post.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 360px"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#0a1f44]/50 via-[#0a1f44]/10 to-transparent opacity-80 transition group-hover:opacity-100"
                      aria-hidden
                    />
                    {post.date && (
                      <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-[#0a1f44] shadow-sm backdrop-blur">
                        <FaCalendarAlt
                          className="text-[9px]"
                          style={{ color: BLUE }}
                          aria-hidden
                        />
                        {post.date}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col px-5 py-5">
                    <span
                      className="mb-3 block h-1 w-10 rounded-full"
                      style={{ backgroundColor: LIME }}
                      aria-hidden
                    />
                    <h2
                      className="line-clamp-2 text-[15px] font-extrabold leading-snug sm:text-[16px]"
                      style={{ color: NAVY }}
                    >
                      {post.title}
                    </h2>
                    {(post.body || post.alt) && (
                      <p className="mt-2.5 line-clamp-2 flex-1 text-[13px] leading-relaxed text-[#64748b]">
                        {post.body || post.alt}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-2 text-[13px] font-extrabold text-[#1052E0] transition group-hover:gap-3">
                      Read article
                      <FaArrowRight className="text-[10px]" aria-hidden />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          {posts.length === 0 && (
            <p className="py-16 text-center text-[14px] text-[#64748b]">
              No blog posts available yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
