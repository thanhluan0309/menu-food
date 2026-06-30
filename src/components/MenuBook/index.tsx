"use client";

import React, { useRef, useState, useCallback, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { motion } from "framer-motion";

import CoverPage from "@/components/pages/CoverPage";
import { IntroLeftPage, IntroRightPage } from "@/components/pages/IntroPage";
import MenuPage from "@/components/pages/MenuPage";
import BackCoverPage from "@/components/pages/BackCoverPage";
import { DrinkLeftPage, DrinkRightPage } from "@/components/pages/DrinkSpreadPages";
import NavBar from "@/components/MenuBook/NavBar";

import {
  appetizers,
  beef,
  porkChicken,
  combos,
  drinks,
  desserts,
} from "@/data/menuData";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FlipBookRef = any;

const TOTAL_PAGES = 14;
const FLIP_MS = 500;
const MAX_QUEUE = 6;

function useWindowSize() {
  const [size, setSize] = useState({ w: 1280, h: 900 });
  useEffect(() => {
    const update = () => setSize({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return size;
}

export default function MenuBook() {
  const bookRef = useRef<FlipBookRef>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const { w, h } = useWindowSize();

  // Overlay ref — toggled via direct DOM style, no re-render needed
  const overlayRef = useRef<HTMLDivElement>(null);

  // Queue state — all refs so no re-renders during draining
  const queue = useRef<Array<"next" | "prev">>([]);
  const isFlipping = useRef(false);
  const drainTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  // Target page: tracks where we'll land after the queue drains (for boundary checks)
  const targetPage = useRef(0);

  // Block/unblock mouse interaction on the book without causing re-renders
  const setBookLocked = useCallback((locked: boolean) => {
    if (overlayRef.current) {
      overlayRef.current.style.pointerEvents = locked ? "all" : "none";
    }
  }, []);

  const handleChangeState = useCallback(
    (e: { data: string }) => {
      setBookLocked(e.data === "flipping");
    },
    [setBookLocked]
  );

  // Drain one item from queue, then schedule next drain after FLIP_MS
  const drain = useCallback(() => {
    if (queue.current.length === 0) {
      isFlipping.current = false;
      // Fallback sync: portrait mode may not fire onFlip reliably
      setCurrentPage(targetPage.current);
      return;
    }

    const dir = queue.current.shift()!;
    isFlipping.current = true;

    if (dir === "next") {
      bookRef.current?.pageFlip().flipNext();
    } else {
      bookRef.current?.pageFlip().flipPrev();
    }

    drainTimer.current = setTimeout(drain, FLIP_MS + 40);
  }, []);

  const enqueue = useCallback(
    (dir: "next" | "prev") => {
      const next =
        dir === "next"
          ? Math.min(targetPage.current + 1, TOTAL_PAGES - 1)
          : Math.max(targetPage.current - 1, 0);

      if (next === targetPage.current) return;
      if (queue.current.length >= MAX_QUEUE) return;

      targetPage.current = next;
      queue.current.push(dir);

      if (!isFlipping.current) {
        drain();
      }
    },
    [drain]
  );

  const goNext = useCallback(() => enqueue("next"), [enqueue]);
  const goPrev = useCallback(() => enqueue("prev"), [enqueue]);

  // onFlip from react-pageflip — sync both state and ref so they stay in agreement
  const handleFlip = useCallback((e: { data: number }) => {
    setCurrentPage(e.data);
    targetPage.current = e.data;
  }, []);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (drainTimer.current) clearTimeout(drainTimer.current);
    };
  }, []);

  // Responsive breakpoints
  const isMobile = w < 640;
  const isTablet = w >= 640 && w < 1024;

  // Reset queue + page when orientation mode changes
  useEffect(() => {
    queue.current = [];
    isFlipping.current = false;
    targetPage.current = 0;
    setCurrentPage(0);
  }, [isMobile]);

  const pageWidth = isMobile
    ? Math.floor(w * 0.94)
    : isTablet
    ? Math.min(Math.floor(w * 0.50), 480)
    : Math.min(Math.floor(w * 0.48), 540);

  const pageHeight = isMobile
    ? Math.floor(h * 0.72)
    : isTablet
    ? Math.min(Math.floor(h * 0.85), 740)
    : Math.min(Math.floor(h * 0.90), 840);

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center"
      style={{
        paddingBottom: isMobile ? 72 : 88,
        background:
          "radial-gradient(ellipse at 50% 40%, #2d1506 0%, #1a0a00 60%, #0d0500 100%)",
      }}
    >
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="flip-book-wrapper"
        style={{ position: "relative" }}
      >
        {/* Transparent overlay — blocks mouse events on the book while flipping */}
        <div
          ref={overlayRef}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 100,
            pointerEvents: "none",
            cursor: "default",
          }}
        />
        {/* @ts-expect-error react-pageflip lacks proper types */}
        <HTMLFlipBook
          key={isMobile ? "portrait" : "landscape"}
          ref={bookRef}
          width={pageWidth}
          height={pageHeight}
          showCover
          drawShadow={false}
          flippingTime={FLIP_MS}
          usePortrait={isMobile}
          startPage={0}
          minWidth={260}
          maxWidth={pageWidth}
          minHeight={380}
          maxHeight={pageHeight}
          onFlip={handleFlip}
          onChangeState={handleChangeState}
          className=""
          style={{}}
          startZIndex={20}
          autoSize={false}
          mobileScrollSupport
          swipeDistance={30}
          clickEventForward={false}
          useMouseEvents
        >
          {/* Page 1 — Cover */}
          <div><CoverPage /></div>

          {/* Page 2-3 — Intro */}
          <div><IntroLeftPage side="left" pageNumber={2} /></div>
          <div><IntroRightPage side="right" pageNumber={3} /></div>

          {/* Page 4-5 — Appetizers | Beef 1 */}
          <div>
            <MenuPage side="left" pageNumber={4} category="Khai Vị" title="Món Khai Vị" items={appetizers} startNum={1} />
          </div>
          <div>
            <MenuPage side="right" pageNumber={5} category="Thịt Nướng Bò" title="Bò Nướng" items={beef.slice(0, 3)} startNum={5} />
          </div>

          {/* Page 6-7 — Beef 2 | Heo & Gà 1 */}
          <div>
            <MenuPage side="left" pageNumber={6} category="Thịt Nướng Bò" title="Bò Đặc Biệt" items={beef.slice(3)} startNum={8} />
          </div>
          <div>
            <MenuPage side="right" pageNumber={7} category="Thịt Nướng Heo & Gà" title="Heo & Gà Nướng" items={porkChicken.slice(0, 3)} startNum={10} />
          </div>

          {/* Page 8-9 — Heo & Gà 2 | Combo */}
          <div>
            <MenuPage side="left" pageNumber={8} category="Thịt Nướng Heo & Gà" title="Thêm Lựa Chọn" items={porkChicken.slice(3)} startNum={13} />
          </div>
          <div>
            <MenuPage side="right" pageNumber={9} category="Set Combo & Lẩu" title="Set Combo" items={combos} startNum={15} />
          </div>

          {/* Page 10-11 — Drinks | Desserts */}
          <div>
            <MenuPage side="left" pageNumber={10} category="Đồ Uống" title="Thức Uống" items={drinks} startNum={19} />
          </div>
          <div>
            <MenuPage side="right" pageNumber={11} category="Tráng Miệng" title="Tráng Miệng" items={desserts} startNum={24} />
          </div>

          {/* Page 12-13 — Drink Spread */}
          <div><DrinkLeftPage pageNumber={12} /></div>
          <div><DrinkRightPage pageNumber={13} /></div>

          {/* Page 14 — Back cover */}
          <div><BackCoverPage /></div>
        </HTMLFlipBook>
      </motion.div>

      <NavBar
        currentPage={currentPage}
        totalPages={TOTAL_PAGES}
        onPrev={goPrev}
        onNext={goNext}
        isMobile={isMobile}
      />
    </div>
  );
}
