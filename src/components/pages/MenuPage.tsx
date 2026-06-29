import React from "react";
import Image from "next/image";
import type { MenuItem } from "@/types/menu";

interface MenuPageProps {
  side: "left" | "right";
  pageNumber: number;
  category: string;
  title: string;
  /** Vietnamese subtitle shown large as design element */
  titleVi?: string;
  items: MenuItem[];
  /** Starting item number for badges (e.g. 1 → "01") */
  startNum?: number;
}

const TAG_COLORS: Record<string, string> = {
  "Bán chạy": "#ff6b35",
  "Đặc biệt": "#d4af37",
  "Tiết kiệm": "#16a34a",
  "Mới": "#0ea5e9",
  "Độc đáo": "#9333ea",
};

function ItemBadge({ n }: { n: number }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        width: 28,
        height: 28,
        borderRadius: "50%",
        background: "#e8251a",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          fontFamily: "var(--font-lato)",
          fontSize: 10,
          fontWeight: 700,
          color: "#fff",
          letterSpacing: "0.02em",
        }}
      >
        {String(n).padStart(2, "0")}
      </span>
    </div>
  );
}

function TagPill({ tag }: { tag: string }) {
  const color = TAG_COLORS[tag] ?? "#666";
  return (
    <span
      style={{
        fontFamily: "var(--font-lato)",
        fontSize: 9,
        fontWeight: 700,
        color: "#fff",
        background: color,
        padding: "2px 6px",
        borderRadius: 3,
        letterSpacing: "0.05em",
        textTransform: "uppercase",
        flexShrink: 0,
      }}
    >
      {tag}
    </span>
  );
}

/** Large hero card — top featured dish */
function HeroCard({ item, n, height }: { item: MenuItem; n: number; height: number }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 10,
        overflow: "hidden",
        flexShrink: 0,
        height,
      }}
    >
      <Image src={item.image} alt={item.name} fill sizes="440px" className="object-cover" priority />
      {/* Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
        }}
      />
      {/* Tag top-left */}
      {item.tag && (
        <div style={{ position: "absolute", top: 10, left: 10 }}>
          <TagPill tag={item.tag} />
        </div>
      )}
      {/* Bottom info */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "12px 14px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: 8, flex: 1, minWidth: 0 }}>
          <ItemBadge n={n} />
          <div style={{ minWidth: 0 }}>
            <p
              style={{
                fontFamily: "var(--font-playfair)",
                fontSize: 15,
                fontWeight: 700,
                color: "#fff",
                lineHeight: 1.3,
                margin: 0,
              }}
            >
              {item.name}
            </p>
            <p
              style={{
                fontFamily: "var(--font-lato)",
                fontSize: 11,
                color: "rgba(255,255,255,0.6)",
                marginTop: 3,
                lineHeight: 1.4,
                margin: "3px 0 0",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {item.desc}
            </p>
          </div>
        </div>
        <div style={{ flexShrink: 0, textAlign: "right" }}>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: 15,
              fontWeight: 700,
              color: "#ffd566",
              margin: 0,
              whiteSpace: "nowrap",
            }}
          >
            {item.price.toLocaleString("vi-VN")}
          </p>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: 9,
              color: "rgba(255,213,102,0.6)",
              margin: "2px 0 0",
            }}
          >
            đồng
          </p>
        </div>
      </div>
    </div>
  );
}

/** Small grid card — remaining dishes */
function GridCard({ item, n }: { item: MenuItem; n: number }) {
  return (
    <div
      style={{
        position: "relative",
        borderRadius: 8,
        overflow: "hidden",
        flex: 1,
        minHeight: 0,
      }}
    >
      <Image src={item.image} alt={item.name} fill sizes="220px" className="object-cover" />
      {/* Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
        }}
      />
      {/* Tag */}
      {item.tag && (
        <div style={{ position: "absolute", top: 7, right: 7 }}>
          <TagPill tag={item.tag} />
        </div>
      )}
      {/* Bottom info */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "8px 10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 4 }}>
          <ItemBadge n={n} />
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 12,
              fontWeight: 700,
              color: "#fff",
              margin: 0,
              lineHeight: 1.2,
              flex: 1,
              minWidth: 0,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {item.name}
          </p>
        </div>
        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontSize: 13,
            fontWeight: 700,
            color: "#ffd566",
            margin: 0,
          }}
        >
          {item.price.toLocaleString("vi-VN")}đ
        </p>
      </div>
    </div>
  );
}

export default function MenuPage({
  side,
  pageNumber,
  category,
  title,
  items,
  startNum = 1,
}: MenuPageProps) {
  const [featured, ...rest] = items;

  // Grid columns: 2 cols for 3+ items, else match count
  const gridCols = rest.length >= 3 ? 2 : rest.length;

  // Hero shorter when grid has 2 rows
  const heroHeight = rest.length >= 4 ? 185 : rest.length === 3 ? 200 : 220;

  const radius = side === "left" ? "12px 4px 4px 12px" : "4px 12px 12px 4px";

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #1e2124 0%, #161819 100%)",
        borderRadius: radius,
      }}
    >
      {/* Corner ornaments */}
      <div style={{ position: "absolute", top: 12, left: 12, width: 20, height: 20, borderTop: "1.5px solid rgba(212,175,55,0.5)", borderLeft: "1.5px solid rgba(212,175,55,0.5)" }} />
      <div style={{ position: "absolute", top: 12, right: 12, width: 20, height: 20, borderTop: "1.5px solid rgba(212,175,55,0.5)", borderRight: "1.5px solid rgba(212,175,55,0.5)" }} />
      <div style={{ position: "absolute", bottom: 20, left: 12, width: 20, height: 20, borderBottom: "1.5px solid rgba(212,175,55,0.5)", borderLeft: "1.5px solid rgba(212,175,55,0.5)" }} />
      <div style={{ position: "absolute", bottom: 20, right: 12, width: 20, height: 20, borderBottom: "1.5px solid rgba(212,175,55,0.5)", borderRight: "1.5px solid rgba(212,175,55,0.5)" }} />

      {/* Content */}
      <div
        style={{
          padding: "18px 18px 28px 18px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: 12,
          boxSizing: "border-box",
        }}
      >
        {/* ── Section header ── */}
        <div style={{ textAlign: "center", flexShrink: 0 }}>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: 9,
              letterSpacing: "0.4em",
              textTransform: "uppercase",
              color: "#ff6b35",
              margin: 0,
            }}
          >
            {category}
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 22,
              fontWeight: 900,
              color: "#fff",
              margin: "4px 0 0",
              lineHeight: 1.1,
              letterSpacing: "0.03em",
              textTransform: "uppercase",
            }}
          >
            {title}
          </h2>
          {/* Gold accent line */}
          <div
            style={{
              width: 40,
              height: 2,
              background: "#d4af37",
              margin: "8px auto 0",
              borderRadius: 1,
            }}
          />
        </div>

        {/* ── Hero card ── */}
        {featured && <HeroCard item={featured} n={startNum} height={heroHeight} />}

        {/* ── Grid ── */}
        {rest.length > 0 && (
          <div
            style={{
              flex: 1,
              minHeight: 0,
              display: "grid",
              gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
              gap: 8,
            }}
          >
            {rest.map((item, i) => (
              <GridCard key={item.name} item={item} n={startNum + 1 + i} />
            ))}
          </div>
        )}
      </div>

      {/* ── Page number ── */}
      <div
        style={{
          position: "absolute",
          bottom: 8,
          ...(side === "left" ? { left: 16 } : { right: 16 }),
          fontFamily: "var(--font-lato)",
          fontSize: 10,
          color: "rgba(212,175,55,0.5)",
        }}
      >
        {pageNumber}
      </div>
    </div>
  );
}
