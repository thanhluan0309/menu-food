"use client";

import React from "react";
import Image from "next/image";

interface DrinkItem {
  name: string;
  name_en: string;
  price: number;
  image: string;
  note?: string;
}

const u = (id: string) =>
  `https://images.unsplash.com/${id}?w=500&q=80&auto=format&fit=crop`;

const cocktails: DrinkItem[] = [
  {
    name: "Mocktail Dâu Dưa Lưới",
    name_en: "Strawberry Melon Mocktail",
    price: 80000,
    image: u("photo-1544145945-f90425340c7e"),
  },
  {
    name: "Nước Mơ Tắc Nha Đam",
    name_en: "Kumquat Plum & Aloe Vera",
    price: 70000,
    image: u("photo-1536935338788-846bb9981813"),
  },
  {
    name: "Soda Chanh Dây",
    name_en: "Passion Fruit Soda",
    price: 60000,
    image: u("photo-1553361371-9b22f78e8b1d"),
  },
];

const teas: DrinkItem[] = [
  {
    name: "Trà Đào Cam",
    name_en: "Peach Tea",
    price: 65000,
    image: u("photo-1576092768241-dec231879fc3"),
  },
  {
    name: "Trà Vải",
    name_en: "Lychee Tea",
    price: 68000,
    image: u("photo-1437418747212-8d9709afab22"),
  },
  {
    name: "Trà Lài Ổi",
    name_en: "Guava Jasmine Tea",
    price: 68000,
    image: u("photo-1567306226416-28f0efdc88ce"),
  },
];

const juices: DrinkItem[] = [
  {
    name: "Dừa Tươi",
    name_en: "Coconut",
    price: 50000,
    image: u("photo-1546173159-315724a31696"),
  },
  {
    name: "Ép Cam Hỗn Hợp",
    name_en: "Mix Juice (No sugar)",
    price: 90000,
    image: u("photo-1613478223719-2ab802602423"),
    note: "Đặc biệt",
  },
  {
    name: "Ép Ổi",
    name_en: "Guava Juice",
    price: 65000,
    image: u("photo-1622597467836-f3285f2131b8"),
  },
  {
    name: "Ép Cà Rốt",
    name_en: "Carrot Juice",
    price: 60000,
    image: u("photo-1610832958506-aa56368176cf"),
  },
  {
    name: "Ép Táo",
    name_en: "Apple Juice",
    price: 65000,
    image: u("photo-1570197788417-0e82375c9371"),
  },
  {
    name: "Ép Dưa Hấu",
    name_en: "Watermelon Juice",
    price: 60000,
    image: u("photo-1513558161293-cdaf765ed2fd"),
  },
];

const softDrinks = [
  { name: "Coca Cola", price: 35000 },
  { name: "Sprite", price: 35000 },
  { name: "Nước Suối", price: 25000 },
  { name: "Soda Chanh", price: 35000 },
  { name: "Trà Đen Đá", price: 22000 },
  { name: "Trà Đen Nóng", price: 22000 },
];

function fmt(price: number) {
  return (price / 1000).toFixed(0) + "K";
}

function Corners() {
  const c = "1.5px solid rgba(212,175,55,0.4)";
  return (
    <>
      <div style={{ position: "absolute", top: 12, left: 12, width: 16, height: 16, borderTop: c, borderLeft: c }} />
      <div style={{ position: "absolute", top: 12, right: 12, width: 16, height: 16, borderTop: c, borderRight: c }} />
      <div style={{ position: "absolute", bottom: 18, left: 12, width: 16, height: 16, borderBottom: c, borderLeft: c }} />
      <div style={{ position: "absolute", bottom: 18, right: 12, width: 16, height: 16, borderBottom: c, borderRight: c }} />
    </>
  );
}

function PageNum({ side, n }: { side: "left" | "right"; n: number }) {
  return (
    <div style={{
      position: "absolute", bottom: 7,
      ...(side === "left" ? { left: 16 } : { right: 16 }),
      fontFamily: "var(--font-lato)", fontSize: 10,
      color: "rgba(212,175,55,0.4)",
    }}>
      {n}
    </div>
  );
}

/* ─────────────────── LEFT PAGE — Cocktail & Trà Trái Cây ─────────────────── */
export function DrinkLeftPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1e2124 0%, #141618 100%)",
        borderRadius: "12px 4px 4px 12px",
      }}
    >
      <Corners />

      {/* Ghost "DRINK" watermark */}
      <div style={{
        position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)",
        fontFamily: "var(--font-playfair)", fontSize: 96, fontWeight: 900,
        color: "rgba(212,175,55,0.03)", lineHeight: 1,
        userSelect: "none", pointerEvents: "none", whiteSpace: "nowrap",
      }}>
        DRINK
      </div>

      {/* Left vertical strip */}
      <div style={{
        position: "absolute", left: 0, top: 0, bottom: 0, width: 26,
        background: "rgba(255,107,53,0.04)",
        borderRight: "1px solid rgba(255,107,53,0.1)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <p style={{
          fontFamily: "var(--font-lato)", fontSize: 8, letterSpacing: "0.28em",
          textTransform: "uppercase", color: "rgba(255,107,53,0.55)", margin: 0,
          writingMode: "vertical-rl" as React.CSSProperties["writingMode"],
          transform: "rotate(180deg)",
        }}>
          Đồ Uống Đặc Trưng
        </p>
      </div>

      {/* Content */}
      <div style={{
        position: "absolute", left: 26, right: 0, top: 0, bottom: 0,
        padding: "16px 14px 28px 12px",
        display: "flex", flexDirection: "column",
      }}>
        {/* ── COCKTAIL / MOCKTAIL ── */}
        <div style={{ flexShrink: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10 }}>
            <div style={{ width: 3, height: 11, background: "#ff6b35", borderRadius: 1 }} />
            <p style={{ fontFamily: "var(--font-lato)", fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#ff6b35", margin: 0 }}>
              Cocktail & Mocktail
            </p>
          </div>

          {/* Featured drink — horizontal */}
          <div style={{ display: "flex", gap: 10, marginBottom: 8 }}>
            <div style={{ position: "relative", width: 92, height: 82, borderRadius: 8, overflow: "hidden", flexShrink: 0 }}>
              <Image src={cocktails[0].image} alt={cocktails[0].name} fill sizes="100px" className="object-cover" />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, transparent 60%, rgba(20,22,24,0.7))" }} />
            </div>
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: 12.5, fontWeight: 700, color: "#fff", margin: "0 0 3px", lineHeight: 1.3 }}>
                {cocktails[0].name}
              </p>
              <p style={{ fontFamily: "var(--font-lato)", fontSize: 9, color: "rgba(255,107,53,0.8)", fontStyle: "italic", margin: "0 0 7px" }}>
                {cocktails[0].name_en}
              </p>
              <p style={{ fontFamily: "var(--font-playfair)", fontSize: 16, fontWeight: 700, color: "#d4af37", margin: 0 }}>
                {fmt(cocktails[0].price)}
              </p>
            </div>
          </div>

          {/* 2 smaller overlay cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 6, marginBottom: 14 }}>
            {cocktails.slice(1).map(item => (
              <div key={item.name} style={{ position: "relative", borderRadius: 8, overflow: "hidden", height: 78 }}>
                <Image src={item.image} alt={item.name} fill sizes="130px" className="object-cover" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,16,18,0.94) 0%, rgba(14,16,18,0.3) 55%, transparent 100%)" }} />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 8px 7px" }}>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: 9.5, color: "#fff", margin: "0 0 1px", fontWeight: 600, lineHeight: 1.2 }}>
                    {item.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-playfair)", fontSize: 13, color: "#d4af37", margin: 0, fontWeight: 700 }}>
                    {fmt(item.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)", marginBottom: 14, flexShrink: 0 }} />

        {/* ── TRÀ TRÁI CÂY ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, marginBottom: 10, flexShrink: 0 }}>
            <div style={{ width: 3, height: 11, background: "#d4af37", borderRadius: 1 }} />
            <p style={{ fontFamily: "var(--font-lato)", fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#d4af37", margin: 0 }}>
              Trà Trái Cây
            </p>
          </div>

          <div style={{ flex: 1, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6, minHeight: 0 }}>
            {teas.map(item => (
              <div key={item.name} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
                <div style={{ position: "relative", flex: 1, borderRadius: 8, overflow: "hidden", minHeight: 64 }}>
                  <Image src={item.image} alt={item.name} fill sizes="90px" className="object-cover" />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(14,16,18,0.1)" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: 9.5, color: "#fff", margin: "0 0 1px", fontWeight: 600, lineHeight: 1.2 }}>
                    {item.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: 8, color: "rgba(212,175,55,0.55)", fontStyle: "italic", margin: "0 0 2px" }}>
                    {item.name_en}
                  </p>
                  <p style={{ fontFamily: "var(--font-playfair)", fontSize: 13, color: "#d4af37", margin: 0, fontWeight: 700 }}>
                    {fmt(item.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PageNum side="left" n={pageNumber} />
    </div>
  );
}

/* ─────────────────── RIGHT PAGE — Fresh Juice & Soft Drink ─────────────────── */
export function DrinkRightPage({ pageNumber }: { pageNumber: number }) {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1e2124 0%, #141618 100%)",
        borderRadius: "4px 12px 12px 4px",
      }}
    >
      <Corners />

      <div style={{
        padding: "16px 14px 28px",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: 14,
      }}>
        {/* ── NƯỚC ÉP TƯƠI ── */}
        <div style={{ flexShrink: 0 }}>
          <div style={{ marginBottom: 10, textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#ff6b35", margin: "0 0 2px" }}>
              Nước Ép Tươi
            </p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: 20, fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.1, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Fresh Juice
            </h2>
            <div style={{ width: 30, height: 2, background: "linear-gradient(90deg, #ff6b35, #d4af37)", borderRadius: 1, margin: "6px auto 0" }} />
          </div>

          {/* 3 × 2 juice photo grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gridTemplateRows: "1fr 1fr", gap: 6, height: 216 }}>
            {juices.map(item => (
              <div key={item.name} style={{ position: "relative", borderRadius: 8, overflow: "hidden" }}>
                <Image src={item.image} alt={item.name} fill sizes="110px" className="object-cover" />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(14,16,18,0.95) 0%, rgba(14,16,18,0.25) 55%, transparent 100%)" }} />
                {item.note && (
                  <div style={{
                    position: "absolute", top: 5, right: 5,
                    background: "#ff6b35", borderRadius: 4, padding: "1px 5px",
                    fontFamily: "var(--font-lato)", fontSize: 7.5, color: "#fff", fontWeight: 700,
                  }}>
                    {item.note}
                  </div>
                )}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 7px 7px" }}>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: 9.5, color: "#fff", margin: "0 0 1px", fontWeight: 600, lineHeight: 1.2 }}>
                    {item.name}
                  </p>
                  <p style={{ fontFamily: "var(--font-lato)", fontSize: 7.5, color: "rgba(255,255,255,0.45)", fontStyle: "italic", margin: "0 0 2px" }}>
                    {item.name_en}
                  </p>
                  <p style={{ fontFamily: "var(--font-playfair)", fontSize: 13, color: "#d4af37", margin: 0, fontWeight: 700 }}>
                    {fmt(item.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.3), transparent)", flexShrink: 0 }} />

        {/* ── NƯỚC NGỌT / SOFT DRINK ── */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <div style={{ marginBottom: 10, flexShrink: 0, textAlign: "center" }}>
            <p style={{ fontFamily: "var(--font-lato)", fontSize: 9, letterSpacing: "0.4em", textTransform: "uppercase", color: "#d4af37", margin: "0 0 2px" }}>
              Nước Giải Khát
            </p>
            <h2 style={{ fontFamily: "var(--font-playfair)", fontSize: 16, fontWeight: 900, color: "#fff", margin: 0, lineHeight: 1.1, textTransform: "uppercase", letterSpacing: "0.04em" }}>
              Soft Drink
            </h2>
          </div>

          {/* 2-column list */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 16px" }}>
            {softDrinks.map(item => (
              <div
                key={item.name}
                style={{
                  display: "flex", alignItems: "center", justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(212,175,55,0.08)",
                }}
              >
                <p style={{ fontFamily: "var(--font-lato)", fontSize: 10.5, color: "rgba(255,255,255,0.72)", margin: 0 }}>
                  {item.name}
                </p>
                <p style={{ fontFamily: "var(--font-playfair)", fontSize: 12, color: "#d4af37", margin: 0, fontWeight: 700, flexShrink: 0, marginLeft: 6 }}>
                  {fmt(item.price)}
                </p>
              </div>
            ))}
          </div>

          {/* VAT note */}
          <p style={{
            fontFamily: "var(--font-lato)", fontSize: 8.5,
            color: "rgba(255,255,255,0.25)", fontStyle: "italic",
            margin: "auto 0 0", paddingTop: 10,
            textAlign: "center",
          }}>
            Giá chưa bao gồm VAT · Prices do not include VAT
          </p>
        </div>
      </div>

      <PageNum side="right" n={pageNumber} />
    </div>
  );
}
