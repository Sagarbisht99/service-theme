"use client";

import { FaPhoneAlt, FaCheck } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import type { ResolvedSiteData } from "@/lib/types";

export default function About({ data }: { data: ResolvedSiteData }) {
  const about = data.about as any;

  const pretitle = about.pretitle || "Who We Are";
  const title = about.title || "Trusted Plumbing Experts Since 1996";
  const desc =
    about.desc ||
    "For over two decades, we have been providing exceptional plumbing services to homes and businesses. Our commitment to quality workmanship and customer satisfaction sets us apart.";

  const features = about.features || [
    {
      title: "Experienced Professionals",
      desc: "Our team consists of licensed, insured, and highly trained plumbers with years of experience.",
    },
    {
      title: "Comprehensive Solutions",
      desc: "From minor repairs to major installations, we handle all plumbing needs efficiently.",
    },
  ];

  const phone = about.phone || "+1 (578)-365-379";

  // Plumber shaking hand main image
  const mainImage =
    about.mainImage ||
    "https://images.unsplash.com/photo-1542013936693-8848e57423e1?w=800&q=80";

  // Plumber working under sink sub image
  const subImage =
    about.subImage ||
    "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80";

  return (
    <section className="relative bg-[#f8fafd] py-14 overflow-hidden border-b border-gray-100">
      <div className="mx-auto max-w-[1280px] px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 items-center">
          
          {/* Left Column: Content (Who We Are) */}
          <div className="lg:col-span-6 text-left">
            <span className="text-[13px] sm:text-[14px] font-extrabold text-gray-400 tracking-wider uppercase">
              {pretitle}
            </span>
            
            <h2 className="mt-3 font-sans text-3xl sm:text-[2.25rem] font-extrabold leading-tight text-[#001b3d] tracking-tight">
              {title}
            </h2>
            
            <p className="mt-5 text-[15px] sm:text-[16px] leading-relaxed text-gray-500 max-w-xl">
              {desc}
            </p>

            {/* Feature Bullet Points */}
            <div className="mt-8 flex flex-col gap-6">
              {features.map((item: any, i: number) => (
                <div key={item.title} className="flex gap-4 items-start">
                  {/* Round solid blue checkmark circle */}
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#9fd40b] text-[#0a1f44] mt-1 shadow-md shadow-[#9fd40b]/25">
                    <FaCheck className="text-[10px]" />
                  </span>
                  <div>
                    <h4 className="text-[16px] sm:text-[17px] font-extrabold text-[#001b3d] leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-[13px] sm:text-[14px] leading-relaxed text-gray-400 font-medium max-w-[420px]">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call Action Button */}
            <div className="mt-9">
              <a
                href={`tel:${phone}`}
                className="inline-flex items-center gap-3 rounded-full bg-[#0a1f44] hover:bg-[#071831] px-7 py-3.5 text-[13.5px] font-extrabold text-white shadow-lg shadow-[#0a1f44]/20 transition hover:scale-[1.02] focus:outline-none"
              >
                <FaPhoneAlt className="text-xs" />
                Call {phone}
              </a>
            </div>
          </div>

          {/* Right Column: Exact image layouts (Shaking hand main photo + overlapping working sub-photo) */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-6 pb-12 lg:py-0">
            {/* Main Shaking Hand Image wrapper */}
            <div className="relative w-full max-w-[480px] h-[300px] sm:h-[380px] rounded-[2rem] overflow-hidden shadow-xl border border-gray-100 bg-[#dfe7f2]">
              <MediaImage
                themeId={data.themeId}
                src={mainImage}
                alt="Expert plumber smiling and shaking hand with client"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Overlapping Bottom Right Sub-image (Plumber under sink) */}
            <div className="absolute bottom-0 right-4 lg:-right-4 w-[40%] sm:w-[35%] h-[160px] sm:h-[220px] rounded-2xl overflow-hidden shadow-2xl border-4 sm:border-[6px] border-white z-20 bg-white">
              <MediaImage
                themeId={data.themeId}
                src={subImage}
                alt="Professional technician working under kitchen sink pipes"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
