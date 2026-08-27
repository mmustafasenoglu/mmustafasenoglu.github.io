import { useState } from "react";
import photo from "./medias/f6b266eb-35ba-4797-82ce-b91b9d92d1c4.jpeg";

const PLACEHOLDER_PROJECTS = [{ slot: "01" }, { slot: "02" }, { slot: "03" }];

export default function HomePage({ dark, onToggleDark, onNavigate = () => {} }) {
  const [slide, setSlide] = useState(0);

  const bg = dark ? "#0B0B0C" : "#FFFFFF";
  const text = dark ? "#F4F4F5" : "#111112";
  const subText = dark ? "#A1A1AA" : "#52525B";
  const border = dark ? "#27272A" : "#E4E4E7";
  const pillBg = dark ? "#F4F4F5" : "#111112";
  const pillText = dark ? "#111112" : "#FFFFFF";
  const ghostPillBorder = dark ? "#3F3F46" : "#D4D4D8";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        color: text,
        fontFamily:
          "'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        transition: "background 300ms ease, color 300ms ease",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* faint grid background, top-left, fading out */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, ${dark ? "#ffffff14" : "#00000012"} 1px, transparent 1px),
            linear-gradient(to bottom, ${dark ? "#ffffff14" : "#00000012"} 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage:
            "radial-gradient(ellipse 900px 600px at 8% 10%, black 20%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 900px 600px at 8% 10%, black 20%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* WIP banner */}
      <div
        style={{
          background: "#F5C542",
          color: "#1A1400",
          fontSize: 13,
          fontWeight: 600,
          textAlign: "center",
          padding: "10px 16px",
          position: "relative",
          zIndex: 10,
        }}
      >
        🚧 WORK IN PROGRESS&nbsp;&nbsp;|&nbsp;&nbsp;
        <span style={{ fontWeight: 500 }}>
          Site is actively being built — some sections are still coming together.
        </span>
      </div>

      {/* hero */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 880,
          margin: "0 auto",
          padding: "clamp(48px, 8vw, 96px) clamp(20px, 5vw, 64px) 120px",
        }}
      >
        {/* photo */}
        <div style={{ position: "relative", width: 168, marginBottom: 36 }}>
          <img
            src={photo}
            alt="Mustafa Şenoğlu"
            style={{
              width: 168,
              height: 168,
              borderRadius: 20,
              objectFit: "cover",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -10,
              right: -10,
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: bg,
              border: `1px solid ${border}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            👋
          </div>
        </div>

        <h1
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.05,
            margin: 0,
          }}
        >
          Hello, I'm Mustafa.
        </h1>

        <p
          style={{
            fontSize: "clamp(1.05rem, 2.2vw, 1.3rem)",
            fontWeight: 600,
            marginTop: 20,
            marginBottom: 14,
            color: text,
          }}
        >
          Software Engineer — Backend Systems, AI Infra &amp; Open Source
        </p>

        <p
          style={{
            fontSize: "clamp(0.95rem, 1.6vw, 1.05rem)",
            color: subText,
            lineHeight: 1.6,
            maxWidth: 560,
            margin: 0,
          }}
        >
          CS student building production backends and AI infrastructure at
          Microsoft, and shipping merged pull requests to open source
          projects used by thousands. 202 PRs opened, 35 merged, and
          counting.
        </p>

        <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
          <a
            href="mailto:mmustafasenoglu0@gmail.com"
            style={{
              background: pillBg,
              color: pillText,
              border: "none",
              borderRadius: 999,
              padding: "13px 24px",
              fontWeight: 600,
              fontSize: 14.5,
              cursor: "pointer",
              textDecoration: "none",
              display: "inline-block",
            }}
          >
            Get in touch
          </a>
          <button
            onClick={() => setActive("Work")}
            style={{
              background: "none",
              color: text,
              border: `1.5px solid ${ghostPillBorder}`,
              borderRadius: 999,
              padding: "13px 24px",
              fontWeight: 600,
              fontSize: 14.5,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            View Work
          </button>
        </div>
      </div>

      {/* ===== FEATURED PROJECTS (placeholder slider) ===== */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 880,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 64px) 100px",
        }}
      >
        <div
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.1em",
            color: "#3FB950",
            marginBottom: 10,
          }}
        >
          WORK
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 28,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Featured Projects
          </h2>
          <button
            onClick={() => onNavigate("work")}
            style={{
              background: "none",
              border: "none",
              color: subText,
              fontFamily: "inherit",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              padding: 0,
            }}
          >
            View all work →
          </button>
        </div>

        <div style={{ position: "relative" }}>
          <div
            style={{
              border: `1.5px dashed ${ghostPillBorder}`,
              borderRadius: 20,
              background: dark ? "#141416" : "#FAFAFA",
              padding: "56px 32px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 28, opacity: 0.3, marginBottom: 10 }}>
              🧩
            </div>
            <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 6 }}>
              Project slot {PLACEHOLDER_PROJECTS[slide].slot}
            </div>
            <div style={{ fontSize: 13.5, color: subText }}>
              Real project coming soon — AI Algorithm Generator, FileDrop or
              MikroBridge will land here.
            </div>
          </div>

          <button
            onClick={() =>
              setSlide((s) => (s - 1 + PLACEHOLDER_PROJECTS.length) % PLACEHOLDER_PROJECTS.length)
            }
            aria-label="Previous project"
            style={{
              position: "absolute",
              left: -18,
              top: "50%",
              transform: "translateY(-50%)",
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: `1px solid ${border}`,
              background: bg,
              cursor: "pointer",
              fontSize: 16,
              color: text,
            }}
          >
            ‹
          </button>
          <button
            onClick={() => setSlide((s) => (s + 1) % PLACEHOLDER_PROJECTS.length)}
            aria-label="Next project"
            style={{
              position: "absolute",
              right: -18,
              top: "50%",
              transform: "translateY(-50%)",
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: `1px solid ${border}`,
              background: bg,
              cursor: "pointer",
              fontSize: 16,
              color: text,
            }}
          >
            ›
          </button>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 20 }}>
          {PLACEHOLDER_PROJECTS.map((p, i) => (
            <button
              key={p.slot}
              onClick={() => setSlide(i)}
              aria-label={`Go to slot ${p.slot}`}
              style={{
                width: i === slide ? 22 : 8,
                height: 8,
                borderRadius: 999,
                border: "none",
                background: i === slide ? text : ghostPillBorder,
                cursor: "pointer",
                transition: "width 200ms ease, background 200ms ease",
              }}
            />
          ))}
        </div>
      </section>

      {/* ===== WHO I AM ===== */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 1040,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 64px) 110px",
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: "40px",
        }}
        className="who-grid"
      >
        <style>{`
          @media (max-width: 760px) {
            .who-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        <h2
          style={{
            fontSize: "clamp(1.9rem, 4.4vw, 2.8rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            lineHeight: 1.12,
            margin: 0,
          }}
        >
          Backend systems &amp;{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #4C8DFF, #8B5CF6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI infrastructure
          </span>
          , shipped as open source.
        </h2>

        <div>
          <p style={{ fontSize: 15.5, color: subText, lineHeight: 1.75, margin: 0 }}>
            I'm a 3rd-year Computer Engineering student and AI Innovation
            Intern at Microsoft, where I work on AI infrastructure and LLM
            inference optimization. Outside of that I found AlgoForge, host
            technical career talks with engineers from Big Tech, and spend a
            lot of nights shipping merged pull requests to open source
            projects like Apache AGE, Zephyr RTOS, and Cesium.
          </p>
          <p style={{ fontSize: 15.5, color: subText, lineHeight: 1.75, marginTop: 14 }}>
            The goal is simple: land a Software Engineering role at a Big
            Tech company — and keep leveling up through real production
            systems until I get there.
          </p>
          <button
            onClick={() => onNavigate("about")}
            style={{
              marginTop: 22,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "none",
              border: `1.5px solid ${ghostPillBorder}`,
              color: text,
              borderRadius: 999,
              padding: "11px 22px",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Read my full story →
          </button>
        </div>
      </section>

      {/* ===== CURRENT ROLE ===== */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 880,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 64px) 110px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            marginBottom: 30,
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Current Role
          </h2>
          <button
            onClick={() => onNavigate("experience")}
            style={{
              background: "none",
              border: "none",
              color: subText,
              fontFamily: "inherit",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              padding: 0,
            }}
          >
            View all experience →
          </button>
        </div>

        <div style={{ display: "flex", gap: 18 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: text,
              marginTop: 8,
              flexShrink: 0,
            }}
          />
          <div style={{ flex: 1 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              <h3
                style={{
                  fontSize: "clamp(1.15rem, 2.6vw, 1.5rem)",
                  fontWeight: 700,
                  margin: 0,
                }}
              >
                AI Innovation Intern — AI Infra &amp; LLM Systems
              </h3>
              <span style={{ fontSize: 13.5, color: subText, whiteSpace: "nowrap" }}>
                May 2026 — Present
              </span>
            </div>
            <div style={{ fontSize: 14.5, color: subText, marginTop: 6 }}>
              Microsoft • İstanbul, Türkiye
            </div>
            <p style={{ fontSize: 14.5, color: subText, lineHeight: 1.7, marginTop: 14, maxWidth: 620 }}>
              Developing AI infrastructure and LLM inference optimization
              systems focused on scalability, latency reduction, and GPU
              utilization — plus distributed backend work and automated
              MLOps pipelines.
            </p>
            <div style={{ display: "flex", gap: 8, marginTop: 16, flexWrap: "wrap" }}>
              {["PyTorch", "Kubernetes", "Triton Inference Server", "FastAPI"].map((tag) => (
                <span
                  key={tag}
                  style={{
                    fontSize: 12.5,
                    fontWeight: 600,
                    color: text,
                    border: `1px solid ${border}`,
                    borderRadius: 999,
                    padding: "5px 12px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: 880,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 64px) 110px",
        }}
      >
        <div
          style={{
            borderRadius: 24,
            border: `1px solid ${border}`,
            background: dark
              ? "radial-gradient(ellipse at center, #17182A 0%, #101014 70%)"
              : "radial-gradient(ellipse at center, #EEF3FF 0%, #FFFFFF 70%)",
            padding: "clamp(40px, 8vw, 72px) 24px",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.6rem, 4.4vw, 2.4rem)",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              margin: 0,
            }}
          >
            Let's build something extraordinary.
          </h2>
          <p
            style={{
              fontSize: 15,
              color: subText,
              lineHeight: 1.7,
              maxWidth: 460,
              margin: "16px auto 0",
            }}
          >
            Currently interning at Microsoft and always up for talking open
            source, AI infrastructure, or a new collaboration.
          </p>
          <button
            onClick={() => onNavigate("contact")}
            style={{
              marginTop: 28,
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: pillBg,
              color: pillText,
              border: "none",
              borderRadius: 999,
              padding: "14px 28px",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            Get In Touch ✈️
          </button>
        </div>
      </section>
    </div>
  );
}
