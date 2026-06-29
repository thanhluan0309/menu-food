"use client";

import React from "react";
import Image from "next/image";
import { restaurantInfo } from "@/data/menuData";

interface Props {
  side: "left" | "right";
  pageNumber: number;
}

/* ─────────────────────────────────────────────────
   PAGE LEFT — Câu chuyện của chúng tôi
   Layout: hero photo top → story text → pull-quote
   Ghost year "2010" as background element
───────────────────────────────────────────────── */
export function IntroLeftPage({ side, pageNumber }: Props) {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #1e2124 0%, #141618 100%)",
        borderRadius: "12px 4px 4px 12px",
      }}
    >
      {/* Corner ornaments */}
      <Corners />

      {/* ── Hero photo ── */}
      <div style={{ position: "relative", height: "40%", width: "100%" }}>
        <Image
          src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=700&q=80&auto=format&fit=crop"
          alt="BBQ atmosphere"
          fill
          sizes="500px"
          className="object-cover"
          priority
        />
        {/* Gradient fade into page bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(20,22,24,0.15) 0%, rgba(20,22,24,0.5) 60%, rgba(20,22,24,1) 100%)",
          }}
        />
        {/* Side vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(20,22,24,0.6) 0%, transparent 30%, transparent 70%, rgba(20,22,24,0.6) 100%)",
          }}
        />
      </div>

      {/* ── Ghost year ── */}
      <div
        style={{
          position: "absolute",
          bottom: -10,
          right: -8,
          fontFamily: "var(--font-playfair)",
          fontSize: 130,
          fontWeight: 900,
          color: "rgba(255,255,255,0.03)",
          lineHeight: 1,
          userSelect: "none",
          pointerEvents: "none",
        }}
      >
        2010
      </div>

      {/* ── Content ── */}
      <div
        style={{
          position: "absolute",
          top: "36%",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "0 22px 28px",
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {/* Label */}
        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontSize: 9,
            letterSpacing: "0.45em",
            textTransform: "uppercase",
            color: "#ff6b35",
            margin: 0,
          }}
        >
          Câu chuyện của chúng tôi
        </p>

        {/* Restaurant name */}
        <div>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 26,
              fontWeight: 900,
              color: "#d4af37",
              margin: "0 0 10px",
              lineHeight: 1.15,
              textShadow: "0 0 40px rgba(212,175,55,0.25)",
            }}
          >
            Bếp Lửa Hồng
          </h1>
          <div
            style={{
              width: 44,
              height: 2,
              background: "linear-gradient(90deg, #ff6b35, #d4af37)",
              borderRadius: 1,
            }}
          />
        </div>

        {/* Story text */}
        <p
          style={{
            fontFamily: "var(--font-lato)",
            fontSize: 12,
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.85,
            margin: 0,
          }}
        >
          Ra đời từ năm{" "}
          <span style={{ color: "#d4af37", fontWeight: 700 }}>2010</span>,{" "}
          <strong style={{ color: "#fff" }}>Bếp Lửa Hồng</strong> mang trong
          mình khát vọng giữ gìn hương vị thịt nướng truyền thống Việt Nam —
          nơi than hoa cháy bập bùng, mùi thịt thơm lừng.
        </p>

        {/* Pull quote */}
        <div
          style={{
            borderLeft: "3px solid #ff6b35",
            paddingLeft: 14,
            marginTop: 4,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 12,
              fontStyle: "italic",
              color: "rgba(212,175,55,0.9)",
              lineHeight: 1.7,
              margin: "0 0 6px",
            }}
          >
            &ldquo;Thịt ngon bắt đầu từ nguyên liệu tươi, kết thúc bằng lửa
            than thật và tình yêu của người đứng bếp.&rdquo;
          </p>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: 10,
              color: "#ff6b35",
              margin: 0,
              letterSpacing: "0.05em",
            }}
          >
            — Bếp trưởng Nguyễn Văn Hùng
          </p>
        </div>
      </div>

      <PageNumber side={side} n={pageNumber} />
    </div>
  );
}

/* ─────────────────────────────────────────────────
   PAGE RIGHT — Cam kết chất lượng
   Layout: centered header → 2×2 pillar cards
   Each card has top accent bar + big ghost number
───────────────────────────────────────────────── */
const pillars = [
  {
    num: "01",
    title: "Nguyên Liệu",
    subtitle: "Tươi Sống Mỗi Ngày",
    desc: "Nhập trực tiếp từ trang trại mỗi sáng sớm, không qua kho lạnh công nghiệp.",
    accent: "#ff6b35",
  },
  {
    num: "02",
    title: "Than Hoa",
    subtitle: "100% Tự Nhiên",
    desc: "Không bếp gas, không bếp điện — chỉ than hoa thật mới tạo ra hương khói đặc trưng.",
    accent: "#d4af37",
  },
  {
    num: "03",
    title: "Ướp Thịt",
    subtitle: "Tối Thiểu 12 Tiếng",
    desc: "Gia vị tự phối theo công thức riêng, thấm đẫm từ trong ra ngoài, không bột ngọt.",
    accent: "#ff6b35",
  },
  {
    num: "04",
    title: "Rau Sạch",
    subtitle: "Vườn Đà Lạt",
    desc: "Tự trồng tại trang trại Đà Lạt, thu hoạch 2 lần/tuần, không thuốc trừ sâu.",
    accent: "#d4af37",
  },
] as const;

export function IntroRightPage({ side, pageNumber }: Props) {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: "linear-gradient(165deg, #1e2124 0%, #141618 100%)",
        borderRadius: "4px 12px 12px 4px",
      }}
    >
      <Corners />

      <div
        style={{
          padding: "20px 18px 28px",
          height: "100%",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        {/* ── Header ── */}
        <div style={{ textAlign: "center", flexShrink: 0 }}>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: 9,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: "#ff6b35",
              margin: "0 0 6px",
            }}
          >
            Cam kết chất lượng
          </p>
          <h1
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 22,
              fontWeight: 900,
              color: "#fff",
              margin: 0,
              lineHeight: 1.1,
              textTransform: "uppercase",
              letterSpacing: "0.04em",
            }}
          >
            Tiêu Chuẩn Vàng
          </h1>
          <div
            style={{
              width: 44,
              height: 2,
              background: "linear-gradient(90deg, #ff6b35, #d4af37)",
              borderRadius: 1,
              margin: "10px auto 0",
            }}
          />
        </div>

        {/* ── 2×2 Grid ── */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 10,
            minHeight: 0,
          }}
        >
          {pillars.map((p) => (
            <div
              key={p.num}
              style={{
                position: "relative",
                borderRadius: 8,
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(212,175,55,0.12)",
                borderTop: `3px solid ${p.accent}`,
                padding: "14px 12px 12px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Ghost number */}
              <span
                style={{
                  position: "absolute",
                  bottom: -6,
                  right: 6,
                  fontFamily: "var(--font-playfair)",
                  fontSize: 60,
                  fontWeight: 900,
                  color: p.accent,
                  opacity: 0.07,
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                {p.num}
              </span>

              <div style={{ position: "relative", zIndex: 1 }}>
                {/* Number badge */}
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: 10,
                    fontWeight: 700,
                    color: p.accent,
                    margin: "0 0 8px",
                    letterSpacing: "0.1em",
                  }}
                >
                  {p.num}  ·
                </p>

                {/* Title */}
                <p
                  style={{
                    fontFamily: "var(--font-playfair)",
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 2px",
                    lineHeight: 1.2,
                  }}
                >
                  {p.title}
                </p>

                {/* Subtitle */}
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: 10,
                    fontWeight: 600,
                    color: p.accent,
                    margin: "0 0 8px",
                  }}
                >
                  {p.subtitle}
                </p>

                {/* Description */}
                <p
                  style={{
                    fontFamily: "var(--font-lato)",
                    fontSize: 10,
                    color: "rgba(255,255,255,0.48)",
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Hours strip ── */}
        <div style={{ flexShrink: 0, textAlign: "center" }}>
          <div
            style={{
              height: 1,
              background:
                "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
              marginBottom: 10,
            }}
          />
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: 10,
              color: "rgba(212,175,55,0.7)",
              letterSpacing: "0.2em",
              margin: 0,
            }}
          >
            {restaurantInfo.hours}
          </p>
        </div>
      </div>

      <PageNumber side={side} n={pageNumber} />
    </div>
  );
}

/* ── Shared micro-components ── */

function Corners() {
  const s: React.CSSProperties = {
    position: "absolute",
    width: 18,
    height: 18,
  };
  const c = "1.5px solid rgba(212,175,55,0.45)";
  return (
    <>
      <div style={{ ...s, top: 12, left: 12, borderTop: c, borderLeft: c }} />
      <div style={{ ...s, top: 12, right: 12, borderTop: c, borderRight: c }} />
      <div style={{ ...s, bottom: 20, left: 12, borderBottom: c, borderLeft: c }} />
      <div style={{ ...s, bottom: 20, right: 12, borderBottom: c, borderRight: c }} />
    </>
  );
}

function PageNumber({ side, n }: { side: "left" | "right"; n: number }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 8,
        ...(side === "left" ? { left: 16 } : { right: 16 }),
        fontFamily: "var(--font-lato)",
        fontSize: 10,
        color: "rgba(212,175,55,0.45)",
      }}
    >
      {n}
    </div>
  );
}
