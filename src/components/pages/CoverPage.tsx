import React from "react";
import Image from "next/image";
import { restaurantInfo } from "@/data/menuData";

export default function CoverPage() {
  return (
    <div className="w-full h-full relative flex flex-col items-center justify-center overflow-hidden bg-[#0d0500]" style={{ borderRadius: 12 }}>
      {/* Background BBQ image */}
      <Image
        src="https://images.unsplash.com/photo-1558030006-450675393462?w=960&q=75&auto=format&fit=crop"
        alt="BBQ background"
        fill
        sizes="960px"
        className="object-cover opacity-30"
        priority
      />

      {/* Layered dark overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0d0500]/60 via-[#0d0500]/30 to-[#0d0500]/80" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(ellipse at 50% 75%, #ff4500 0%, #8b0000 35%, transparent 65%)",
        }}
      />

      {/* Top flame accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent opacity-80" />

      {/* Corner ornaments */}
      <div className="absolute top-5 left-5 w-10 h-10 border-t-2 border-l-2 border-[#d4af37] opacity-80" />
      <div className="absolute top-5 right-5 w-10 h-10 border-t-2 border-r-2 border-[#d4af37] opacity-80" />
      <div className="absolute bottom-5 left-5 w-10 h-10 border-b-2 border-l-2 border-[#d4af37] opacity-80" />
      <div className="absolute bottom-5 right-5 w-10 h-10 border-b-2 border-r-2 border-[#d4af37] opacity-80" />

      {/* Content */}
      <div className="relative z-10 text-center px-8 flex flex-col items-center gap-3">
        {/* Flame icon with glow */}
        <div
          className="text-5xl"
          style={{ filter: "drop-shadow(0 0 16px #ff6b35)" }}
        >
          🔥
        </div>

        {/* Restaurant name */}
        <h1
          className="text-4xl font-black text-[#d4af37] tracking-widest uppercase"
          style={{
            fontFamily: "var(--font-playfair)",
            textShadow: "0 2px 20px rgba(212,175,55,0.4)",
          }}
        >
          {restaurantInfo.name}
        </h1>

        <div className="w-48 gold-divider" />

        <p
          className="text-[#f5e6d3]/80 text-sm tracking-[0.35em] uppercase"
          style={{ fontFamily: "var(--font-lato)" }}
        >
          Nhà Hàng Thịt Nướng
        </p>

        <div className="w-28 gold-divider" />

        <p
          className="text-[#d4af37]/65 text-xs italic max-w-[190px] leading-relaxed"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          &ldquo;{restaurantInfo.slogan}&rdquo;
        </p>
      </div>

      {/* Bottom flame accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-[#ff6b35] to-transparent opacity-80" />
    </div>
  );
}
