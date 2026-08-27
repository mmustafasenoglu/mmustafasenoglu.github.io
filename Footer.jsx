import { useState, useEffect, useRef } from "react";

const NAV_LINKS = ["Home", "About", "Experience", "Projects", "Open Source", "Contact"];

const CARS = [
  { color: "#E5484D", lane: 82, size: 1, duration: 22, delay: 0 },
  { color: "#4C8DFF", lane: 44, size: 1.1, duration: 26, delay: -6 },
  { color: "#F5A524", lane: 20, size: 0.95, duration: 19, delay: -12 },
  { color: "#8B5CF6", lane: 68, size: 1, duration: 24, delay: -3 },
  { color: "#2FBF71", lane: 30, size: 1.05, duration: 21, delay: -16 },
];

function Car({ color, lane, size, duration, delay, dark, reduced }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: lane,
        left: reduced ? `${(lane * 1.3) % 90}%` : "-12%",
        transform: `scale(${size})`,
        animation: reduced
          ? "none"
          : `carDrive ${duration}s linear ${delay}s infinite`,
        filter: dark ? "brightness(0.85)" : "none",
      }}
    >
      <svg width="72" height="34" viewBox="0 0 72 34" fill="none">
        <rect x="4" y="14" width="64" height="14" rx="6" fill={color} />
        <path d="M16 14 C20 4, 42 4, 48 14 Z" fill={color} />
        <path
          d="M20 13 C23 6, 40 6, 45 13 Z"
          fill={dark ? "#0B0F0D" : "#EAF2FF"}
          opacity="0.85"
        />
        <circle cx="18" cy="28" r="5.5" fill={dark ? "#0B0F0D" : "#1C1C1E"} />
        <circle cx="54" cy="28" r="5.5" fill={dark ? "#0B0F0D" : "#1C1C1E"} />
        <circle cx="18" cy="28" r="2" fill="#5A5A5C" />
        <circle cx="54" cy="28" r="2" fill="#5A5A5C" />
        <circle cx="67" cy="18" r="2" fill="#FFE28A" opacity={dark ? 1 : 0} />
      </svg>
    </div>
  );
}

function StreetLight({ left, dark }) {
  return (
    <div style={{ position: "absolute", bottom: 118, left, width: 2 }}>
      <div style={{ width: 2, height: 46, background: dark ? "#3A3A40" : "#B9C2CC" }} />
      <div
        style={{
          position: "absolute",
          top: -6,
          left: -6,
          width: 14,
          height: 8,
          borderRadius: 4,
          background: dark ? "#3A3A40" : "#B9C2CC",
        }}
      />
      {dark && (
        <div
          style={{
            position: "absolute",
            top: -2,
            left: -3,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#FFE28A",
            boxShadow: "0 0 12px 4px #FFE28A88",
          }}
        />
      )}
    </div>
  );
}

export default function Footer({ dark: darkProp, onToggleDark }) {
  const [localDark, setLocalDark] = useState(false);
  const dark = darkProp !== undefined ? darkProp : localDark;
  const toggle = onToggleDark || (() => setLocalDark((d) => !d));

  const reducedRef = useRef(false);
  useEffect(() => {
    reducedRef.current =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const skyTop = dark ? "#05060A" : "#FFFFFF";
  const skyMid = dark ? "#0E1220" : "#CFE7FB";
  const skyBottom = dark ? "#171B2E" : "#9FCFF2";
  const mountainBack = dark ? "#20263C" : "#8FA3B8";
  const mountainFront = dark ? "#141827" : "#5D7086";
  const roadColor = dark ? "#101014" : "#2B2E36";
  const pageBg = dark ? "#0B0B0C" : "#FFFFFF";
  const text = dark ? "#F4F4F5" : "#111112";
  const subText = dark ? "#9A9AA2" : "#5B5B63";
  const cardBg = dark ? "#16161A" : "#F4F6FB";
  const border = dark ? "#26262B" : "#E7E9EE";

  return (
    <footer
      style={{
        fontFamily:
          "'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        background: pageBg,
        transition: "background 400ms ease",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @keyframes carDrive {
          from { left: -12%; }
          to { left: 112%; }
        }
        @keyframes sunPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @media (prefers-reduced-motion: reduce) {
          * { animation: none !important; }
        }
      `}</style>

      {/* footer content */}
      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "48px clamp(20px, 5vw, 48px) 20px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1.2fr",
          gap: "32px",
        }}
        className="footer-grid"
      >
        <style>{`
          @media (max-width: 760px) {
            .footer-grid { grid-template-columns: 1fr 1fr !important; }
          }
        `}</style>

        <div>
          <div style={{ fontSize: 26, fontWeight: 800, color: "#4C8DFF", marginBottom: 12 }}>
            Mustafa
          </div>
          <p style={{ color: subText, fontSize: 14.5, lineHeight: 1.6, maxWidth: 260, margin: 0 }}>
            Building backends, AI infrastructure, and merged pull requests —
            one production system at a time.
          </p>
        </div>

        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: subText,
              marginBottom: 16,
            }}
          >
            NAVIGATION
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href="#"
                style={{ color: text, fontSize: 15, textDecoration: "none" }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: subText,
              marginBottom: 16,
            }}
          >
            CONNECT
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href="https://github.com/mmustafasenoglu"
              target="_blank"
              rel="noreferrer"
              style={{ color: text, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
            >
              <span>🐙</span> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/mustafasenoglu/"
              target="_blank"
              rel="noreferrer"
              style={{ color: text, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
            >
              <span>💼</span> LinkedIn
            </a>
            <a
              href="mailto:mmustafasenoglu0@gmail.com"
              style={{ color: text, fontSize: 15, textDecoration: "none", display: "flex", alignItems: "center", gap: 8 }}
            >
              <span>✉️</span> Email
            </a>
          </div>
        </div>

        <div>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              color: subText,
              marginBottom: 16,
            }}
          >
            CURRENTLY
          </div>
          <div
            style={{
              background: cardBg,
              border: `1px solid ${border}`,
              borderRadius: 14,
              padding: "16px 18px",
              fontSize: 14,
              lineHeight: 1.7,
              color: text,
            }}
          >
            🚀 Interning at <strong>Microsoft</strong> — AI infra &amp; LLM
            inference, and building{" "}
            <a href="#" style={{ color: "#4C8DFF", textDecoration: "none", fontWeight: 600 }}>
              AlgoForge
            </a>
            <br />
            <br />
            📍 Open to Software Engineering opportunities at Big Tech
            companies.
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          padding: "20px clamp(20px, 5vw, 48px) 8px",
          borderTop: `1px solid ${border}`,
          marginTop: 12,
          fontSize: 13,
          color: subText,
        }}
      >
        © 2026 Mustafa Şenoğlu — All Rights Reserved.
      </div>

      {/* illustrated scene — road & cars pinned to the very bottom */}
      <div
        style={{
          position: "relative",
          height: 260,
          overflow: "hidden",
          background: `linear-gradient(to bottom, ${skyTop} 0%, ${skyMid} 45%, ${skyBottom} 100%)`,
          transition: "background 500ms ease",
        }}
      >
        {/* toggle */}
        <button
          onClick={toggle}
          style={{
            position: "absolute",
            top: 18,
            right: 20,
            zIndex: 5,
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: dark ? "#1C1C22" : "#FFFFFFE0",
            border: `1px solid ${dark ? "#33333A" : "#E4E4E7"}`,
            borderRadius: 999,
            padding: "9px 16px",
            fontSize: 13.5,
            fontWeight: 600,
            color: text,
            cursor: "pointer",
            fontFamily: "inherit",
            boxShadow: "0 4px 14px rgba(0,0,0,0.06)",
          }}
        >
          {dark ? "Try Light Mode" : "Try Dark Mode"} {dark ? "☀️" : "🌙"}
        </button>

        {/* sun / moon */}
        <div
          style={{
            position: "absolute",
            top: 34,
            left: 48,
            width: 74,
            height: 74,
            borderRadius: "50%",
            background: dark
              ? "radial-gradient(circle at 35% 35%, #F4F4F8, #C9CBDA)"
              : "radial-gradient(circle at 35% 35%, #FFE9A8, #FF9D3D)",
            boxShadow: dark
              ? "0 0 40px 14px rgba(200,205,230,0.25)"
              : "0 0 46px 16px rgba(255,170,60,0.35)",
            animation: "sunPulse 5s ease-in-out infinite",
          }}
        />

        {/* stars */}
        {dark &&
          Array.from({ length: 22 }).map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                top: `${8 + ((i * 37) % 55)}%`,
                left: `${(i * 53) % 100}%`,
                width: 2,
                height: 2,
                borderRadius: "50%",
                background: "#fff",
                opacity: 0.4 + ((i * 13) % 6) / 10,
              }}
            />
          ))}

        {/* mountains back */}
        <svg
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          style={{ position: "absolute", bottom: 96, left: 0, width: "100%", height: 140 }}
        >
          <polygon
            points="0,200 90,70 180,200 260,90 340,200 430,60 520,200 610,100 700,200 790,55 880,200 970,95 1060,200 1150,75 1200,150 1200,200"
            fill={mountainBack}
            opacity="0.65"
          />
        </svg>
        {/* mountains front */}
        <svg
          viewBox="0 0 1200 160"
          preserveAspectRatio="none"
          style={{ position: "absolute", bottom: 96, left: 0, width: "100%", height: 110 }}
        >
          <polygon
            points="0,160 140,45 260,160 380,55 500,160 640,35 760,160 900,60 1020,160 1140,50 1200,110 1200,160"
            fill={mountainFront}
          />
          {[140, 380, 640, 900, 1140].map((x, i) => (
            <polygon
              key={i}
              points={`${x - 18},${i % 2 ? 62 : 52} ${x},${i % 2 ? 45 : 35} ${x + 18},${i % 2 ? 62 : 52}`}
              fill={dark ? "#3A3F55" : "#E9EEF3"}
              opacity="0.9"
            />
          ))}
        </svg>

        {/* street lights */}
        {[6, 22, 38, 54, 70, 86].map((left, i) => (
          <StreetLight key={i} left={`${left}%`} dark={dark} />
        ))}

        {/* road */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "100%",
            height: 96,
            background: roadColor,
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 22,
              left: 0,
              width: "100%",
              height: 2,
              backgroundImage:
                "repeating-linear-gradient(to right, #9A9AA0 0 24px, transparent 24px 48px)",
              opacity: 0.35,
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 47,
              left: 0,
              width: "100%",
              height: 3,
              backgroundImage:
                "repeating-linear-gradient(to right, #F5C542 0 26px, transparent 26px 52px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: 72,
              left: 0,
              width: "100%",
              height: 2,
              backgroundImage:
                "repeating-linear-gradient(to right, #9A9AA0 0 24px, transparent 24px 48px)",
              opacity: 0.35,
            }}
          />
          {CARS.map((c, i) => (
            <Car key={i} {...c} dark={dark} reduced={reducedRef.current} />
          ))}
        </div>
      </div>
    </footer>
  );
}

export function FooterDemo() {
  const [dark, setDark] = useState(false);
  return (
    <div>
      <div style={{ minHeight: 200, background: dark ? "#0B0B0C" : "#fff" }} />
      <Footer dark={dark} onToggleDark={() => setDark((d) => !d)} />
    </div>
  );
}
