"use client";

import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import { withTheme } from "@/lib/theme";
import type { ResolvedSiteData } from "@/lib/types";

const THEME = "template-1" as const;

export default function Blog({ data }: { data: ResolvedSiteData }) {
  const gallery = data.gallery as any;
  const posts = (gallery?.galleryItems || []).slice(0, 4);
  const readMoreLabel =
    gallery?.buttons?.find((b: any) => /read/i.test(b.label))?.label ||
    "Read More";

  return (
    <section className="relative bg-[#f8fafd] py-16 overflow-hidden border-b border-gray-100">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        {/* Centered Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2.5">
            <span className="text-[#0a1f44]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C9 7 5 11 5 16a7 7 0 0 0 14 0c0-5-4-9-7-14z" />
              </svg>
            </span>
            <span className="text-[13px] sm:text-[14px] font-extrabold text-[#0a1f44] tracking-[0.18em] uppercase">
              {gallery?.pretitle || "LATEST BLOGS"}
            </span>
            <span className="text-[#0a1f44]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2C9 7 5 11 5 16a7 7 0 0 0 14 0c0-5-4-9-7-14z" />
              </svg>
            </span>
          </div>
          <h2 className="mt-3 font-sans text-3xl md:text-[2.5rem] font-extrabold text-[#1b2440] tracking-tight">
            {gallery?.title || "Plumbing Tips & Insights"}
          </h2>
        </div>

        {/* 4 Blog Cards */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post: any) => {
            const href = post.href || (post.slug ? `/blog/${post.slug}` : "/blog");
            return (
              <article
                key={post.title}
                className="group overflow-hidden rounded-2xl bg-white border border-gray-100/90 shadow-[0_10px_30px_rgba(0,27,61,0.05)] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,27,61,0.08)]"
              >
                <div className="relative h-[180px] w-full bg-[#eef3fa]">
                  <MediaImage
                    themeId={data.themeId}
                    src={post.image}
                    alt={post.alt || post.title}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>

                <div className="px-5 py-5">
                  {post.date && (
                    <p className="text-[12px] font-medium text-gray-400">
                      {post.date}
                    </p>
                  )}
                  <h3 className="mt-2 text-[15px] font-extrabold text-[#1b2440] leading-snug min-h-[44px]">
                    {post.title}
                  </h3>
                  <Link
                    href={withTheme(href, THEME)}
                    className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-extrabold text-[#0a1f44] transition hover:gap-2.5"
                  >
                    {readMoreLabel}
                    <FaArrowRight className="text-[10px]" aria-hidden />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
