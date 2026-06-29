import React from "react";
import Image from "next/image";
import { restaurantInfo } from "@/data/menuData";

export default function BackCoverPage() {
  return (
    <div
      className="w-full h-full relative overflow-hidden flex flex-col"
      style={{ background: "#0d0500", borderRadius: 12 }}
    >
      {/* ── Background food photo — top 55% ── */}
      <div style={{ position: "relative", flex: "0 0 55%", overflow: "hidden" }}>
        <Image
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80&auto=format&fit=crop"
          alt="Restaurant atmosphere"
          fill
          sizes="500px"
          className="object-cover"
          priority
        />
        {/* Gradient — fade to dark bottom */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(13,5,0,0.1) 0%, rgba(13,5,0,0.5) 60%, rgba(13,5,0,1) 100%)",
          }}
        />
        {/* Side vignette */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(13,5,0,0.55) 0%, transparent 25%, transparent 75%, rgba(13,5,0,0.55) 100%)",
          }}
        />

        {/* Corner ornaments */}
        <div style={{ position: "absolute", top: 14, left: 14, width: 20, height: 20, borderTop: "1.5px solid rgba(212,175,55,0.6)", borderLeft: "1.5px solid rgba(212,175,55,0.6)" }} />
        <div style={{ position: "absolute", top: 14, right: 14, width: 20, height: 20, borderTop: "1.5px solid rgba(212,175,55,0.6)", borderRight: "1.5px solid rgba(212,175,55,0.6)" }} />
      </div>

      {/* ── Bottom info panel ── */}
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "0 24px 28px",
          gap: 16,
          position: "relative",
        }}
      >
        {/* Ember glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,107,53,0.12) 0%, transparent 65%)",
            pointerEvents: "none",
          }}
        />

        {/* Restaurant name */}
        <div style={{ textAlign: "center", position: "relative" }}>
          <p
            style={{
              fontFamily: "var(--font-lato)",
              fontSize: 9,
              letterSpacing: "0.45em",
              textTransform: "uppercase",
              color: "#ff6b35",
              margin: "0 0 8px",
            }}
          >
            Nhà Hàng Thịt Nướng
          </p>
          <h2
            style={{
              fontFamily: "var(--font-playfair)",
              fontSize: 26,
              fontWeight: 900,
              color: "#d4af37",
              margin: 0,
              lineHeight: 1.1,
              textShadow: "0 0 30px rgba(212,175,55,0.3)",
            }}
          >
            {restaurantInfo.name}
          </h2>
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

        {/* Contact info */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            width: "100%",
            fontFamily: "var(--font-lato)",
          }}
        >
          {[
            { icon: "📍", text: restaurantInfo.address },
            { icon: "📞", text: restaurantInfo.phone },
            { icon: "⏰", text: restaurantInfo.hours },
          ].map(({ icon, text }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(212,175,55,0.1)",
                borderRadius: 6,
                padding: "8px 12px",
              }}
            >
              <span style={{ fontSize: 14, flexShrink: 0, lineHeight: 1.5 }}>{icon}</span>
              <p
                style={{
                  fontSize: 11,
                  color: "rgba(245,230,211,0.85)",
                  margin: 0,
                  lineHeight: 1.6,
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Thank you line */}
        <p
          style={{
            fontFamily: "var(--font-playfair)",
            fontSize: 11,
            fontStyle: "italic",
            color: "rgba(212,175,55,0.55)",
            margin: 0,
          }}
        >
          Cảm ơn quý khách đã ghé thăm 🙏
        </p>

        {/* Bottom corner ornaments */}
        <div style={{ position: "absolute", bottom: 10, left: 14, width: 20, height: 20, borderBottom: "1.5px solid rgba(212,175,55,0.5)", borderLeft: "1.5px solid rgba(212,175,55,0.5)" }} />
        <div style={{ position: "absolute", bottom: 10, right: 14, width: 20, height: 20, borderBottom: "1.5px solid rgba(212,175,55,0.5)", borderRight: "1.5px solid rgba(212,175,55,0.5)" }} />
      </div>
    </div>
  );
}
