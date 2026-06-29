"use client";

import { motion } from "framer-motion";

interface NavBarProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
  isMobile?: boolean;
}

export default function NavBar({ currentPage, totalPages, onPrev, onNext, isMobile }: NavBarProps) {
  const isFirst = currentPage === 0;
  const isLast = currentPage >= totalPages - 1;

  const btnSize = isMobile ? "w-14 h-14" : "w-12 h-12";
  const iconSize = isMobile ? 22 : 18;
  const bottom = isMobile ? "bottom-5" : "bottom-8";

  return (
    <div className={`fixed ${bottom} left-1/2 -translate-x-1/2 z-50 flex items-center gap-5`}>
      {/* Back button */}
      <motion.button
        onClick={onPrev}
        disabled={isFirst}
        whileHover={!isFirst ? { scale: 1.1 } : {}}
        whileTap={!isFirst ? { scale: 0.92 } : {}}
        className={`${btnSize} rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
          isFirst
            ? "border-[#5c3317] text-[#5c3317] cursor-not-allowed opacity-40"
            : "border-[#d4af37] text-[#d4af37] cursor-pointer hover:bg-[#d4af37] hover:text-[#1a0a00]"
        }`}
        style={{ fontFamily: "var(--font-lato)", WebkitTapHighlightColor: "transparent" }}
        aria-label="Trang trước"
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </motion.button>

      {/* Page indicator */}
      <div
        className={`text-[#d4af37] ${isMobile ? "text-base" : "text-sm"} tracking-wider select-none min-w-[64px] text-center`}
        style={{ fontFamily: "var(--font-lato)" }}
      >
        <span className="opacity-90">{currentPage + 1}</span>
        <span className="opacity-40 mx-1">/</span>
        <span className="opacity-40">{totalPages}</span>
      </div>

      {/* Next button */}
      <motion.button
        onClick={onNext}
        disabled={isLast}
        whileHover={!isLast ? { scale: 1.1 } : {}}
        whileTap={!isLast ? { scale: 0.92 } : {}}
        className={`${btnSize} rounded-full flex items-center justify-center border-2 transition-all duration-200 ${
          isLast
            ? "border-[#5c3317] text-[#5c3317] cursor-not-allowed opacity-40"
            : "border-[#d4af37] text-[#d4af37] cursor-pointer hover:bg-[#d4af37] hover:text-[#1a0a00]"
        }`}
        style={{ fontFamily: "var(--font-lato)", WebkitTapHighlightColor: "transparent" }}
        aria-label="Trang tiếp"
      >
        <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </motion.button>
    </div>
  );
}
