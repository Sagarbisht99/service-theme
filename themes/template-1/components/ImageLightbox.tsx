"use client";

import { useEffect, useCallback } from "react";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import MediaImage from "@/components/MediaImage";
import type { ThemeId } from "@/lib/types";

export type LightboxItem = {
  image: string;
  title: string;
  alt?: string;
  meta?: string;
  desc?: string;
};

type Props = {
  themeId: ThemeId;
  items: LightboxItem[];
  index: number;
  open: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

export default function ImageLightbox({
  themeId,
  items,
  index,
  open,
  onClose,
  onPrev,
  onNext,
}: Props) {
  const item = items[index];

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (!open) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    },
    [open, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKey);
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onKey, open]);

  if (!open || !item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-5 right-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition hover:bg-white/25"
        aria-label="Close"
      >
        <FaTimes />
      </button>

      {items.length > 1 && (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPrev();
            }}
            className="absolute left-3 sm:left-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0a1f44] shadow-lg transition hover:scale-105"
            aria-label="Previous"
          >
            <FaArrowLeft className="text-sm" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNext();
            }}
            className="absolute right-3 sm:right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white text-[#0a1f44] shadow-lg transition hover:scale-105"
            aria-label="Next"
          >
            <FaArrowRight className="text-sm" />
          </button>
        </>
      )}

      <div
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[50vh] sm:h-[60vh] w-full bg-[#0a1f44]/5">
          <MediaImage
            themeId={themeId}
            src={item.image}
            alt={item.alt || item.title}
            fill
            className="object-contain"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>
        <div className="px-5 py-4 sm:px-7 sm:py-5 text-center">
          {item.meta && (
            <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#1052E0]">
              {item.meta}
            </p>
          )}
          <h3 className="mt-1 text-[18px] sm:text-[20px] font-extrabold text-[#0a1f44]">
            {item.title}
          </h3>
          {item.desc && (
            <p className="mt-2 text-[13.5px] leading-relaxed text-[#0a1f44]/60 max-w-2xl mx-auto">
              {item.desc}
            </p>
          )}
          {items.length > 1 && (
            <p className="mt-3 text-[12px] font-semibold text-[#0a1f44]/35">
              {index + 1} / {items.length}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
