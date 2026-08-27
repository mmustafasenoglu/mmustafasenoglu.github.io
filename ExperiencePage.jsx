import { useState } from "react";

const EXPERIENCES = [
  {
    title: "AI Innovation Intern — AI Infra & LLM Systems",
    company: "Microsoft",
    location: "İstanbul, Türkiye · Hybrid",
    date: "May 2026 — Present",
    current: true,
    bullets: [
      "Develop AI infrastructure and LLM inference optimization systems focused on scalability, latency reduction, and GPU utilization.",
      "Optimize distributed AI model deployment and serving pipelines to maximize throughput and minimize resource overhead.",
      "Implement and experiment with LLM fine-tuning and alignment techniques to enhance domain-specific model performance.",
      "Work on distributed backend infrastructure to improve system reliability, efficiency, and throughput.",
      "Design and maintain automated MLOps workflows for continuous testing and deployment of ML services.",
    ],
    tech: ["PyTorch", "Kubernetes", "Triton Inference Server", "Docker", "Hugging Face Transformers", "DeepSpeed", "FastAPI", "Kafka", "GitHub Actions"],
  },
  {
    title: "Software Developer Intern",
    company: "NeoOne Technology",
    location: "İzmir, Türkiye · Hybrid",
    date: "Jul 2026 — Present",
    current: true,
    bullets: [
      "Assist the company in identifying and resolving software challenges across client-facing projects, contributing to reliable, production-ready digital solutions.",
      "Focus on writing clean, maintainable code and troubleshooting technical issues to support day-to-day development and delivery.",
    ],
    tech: [],
  },
  {
    title: "Founder",
    company: "AlgoForge",
    location: "San Jose, USA · Hybrid",
    date: "Feb 2026 — Present",
    current: true,
    bullets: [
      "Founded a developer platform bridging academia and industry, scaling global tech community outreach and structured DSA/technical interview prep.",
      "Directed high-profile challenges (Google Türkiye Algorithm Competition '26) and integrated AI-driven mock interview systems alongside live sessions with MAANG engineers.",
      "Co-developed the entire full-stack platform from scratch within a 2-person engineering team, architecting core backend systems and configuring secure SMTP protocols.",
    ],
    tech: ["Full-Stack Development", "SMTP"],
  },
  {
    title: "Big Tech Career & Technical Talks Host",
    company: "Crossing Paths (Kesişen Yollar)",
    location: "San Jose, USA · Remote",
    date: "Feb 2026 — Present",
    current: true,
    bullets: [
      "Produce and host a high-cadence live interview series on YouTube, Facebook, and LinkedIn featuring engineers from Microsoft, Amazon, Meta, and other leading tech companies.",
      "Manage end-to-end content pipeline: guest outreach, interview prep, live coordination, and community engagement.",
    ],
    tech: [],
  },
  {
    title: "UI Developer — Frontend & Data Integration",
    company: "Zada Combat UAV Team",
    location: "Aydın, Türkiye",
    date: "Jan 2025 — Present",
    current: true,
    bullets: [
      "Built a real-time telemetry ground control station with a live Leaflet map, attitude indicator, flight mode controls, and CSV logging.",
      "Developed command exchange UI enabling engineers to modify operational parameters in a safety-critical environment; collaborated across software, electronics, and aeronautics disciplines.",
    ],
    tech: ["PyQt6", "pymavlink"],
  },
  {
    title: "Full-Stack Developer",
    company: "Freelance Web Development",
    location: "Remote",
    date: "2025 — Present",
    current: true,
    bullets: [
      "Delivered 20+ client projects — WordPress, WooCommerce, SEO optimization, and ERP integrations; full ownership from requirements to deployment (via Bionluk).",
      "Sample projects: elektrikciburada.com, ceyhanda.com, ferittercan.com.",
    ],
    tech: ["WordPress", "WooCommerce", "SEO"],
    links: [
      { label: "elektrikciburada.com", href: "https://elektrikciburada.com" },
      { label: "ceyhanda.com", href: "https://ceyhanda.com" },
      { label: "ferittercan.com", href: "https://ferittercan.com" },
    ],
  },
];

export default function ExperiencePage({ dark: darkProp, onToggleDark }) {
  const [localDark, setLocalDark] = useState(true);
  const dark = darkProp !== undefined ? darkProp : localDark;
  const toggleDark = onToggleDark || (() => setLocalDark((d) => !d));

  const [expanded, setExpanded] = useState({});
  const VISIBLE_COUNT = 2;

  const bg = dark ? "#0A0A0B" : "#FFFFFF";
  const text = dark ? "#F4F4F5" : "#111112";
  const subText = dark ? "#9A9AA2" : "#5B5B63";
  const border = dark ? "#26262B" : "#E7E9EE";
  const cardBg = dark ? "#111113" : "#FFFFFF";
  const tagBg = dark ? "transparent" : "#FFFFFF";
  const lineColor = dark ? "#3A3A40" : "#D4D4D8";
  const logoBg = dark ? "#1C1C20" : "#F0F0F3";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: bg,
        color: text,
        fontFamily:
          "'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        transition: "background 300ms ease, color 300ms ease",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      `}</style>

      {/* dark mode toggle */}
      <div style={{ display: "flex", justifyContent: "flex-end", padding: "24px clamp(20px, 5vw, 64px) 0" }}>
        <button
          onClick={toggleDark}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: `1px solid ${border}`,
            background: cardBg,
            cursor: "pointer",
            fontSize: 16,
            color: text,
          }}
          aria-label="Toggle dark mode"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>

      {/* header */}
      <div
        style={{
          maxWidth: 900,
          margin: "0 auto",
          padding: "24px clamp(20px, 5vw, 64px) 60px",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Experience
        </h1>
        <p
          style={{
            fontSize: "clamp(1rem, 2vw, 1.15rem)",
            color: subText,
            marginTop: 18,
            lineHeight: 1.6,
          }}
        >
          My professional background building AI infrastructure, backend
          systems, and developer communities.
        </p>
      </div>

      {/* timeline */}
      <div
        style={{
          maxWidth: 820,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 64px) 120px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: "clamp(20px, 5vw, 64px) - 0px",
            top: 0,
            bottom: 0,
            width: 2,
            background: lineColor,
            marginLeft: 19,
          }}
        />

        {EXPERIENCES.map((exp, i) => {
          const isOpen = expanded[i];
          const visibleBullets = isOpen ? exp.bullets : exp.bullets.slice(0, VISIBLE_COUNT);
          const remaining = exp.bullets.length - VISIBLE_COUNT;

          return (
            <div key={i} style={{ position: "relative", paddingLeft: 56, marginBottom: 36 }}>
              {/* timeline marker */}
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 28,
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background: cardBg,
                  border: `2px solid ${exp.current ? "#3FB950" : lineColor}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 16,
                  zIndex: 2,
                }}
              >
                {i === 0 ? "🚀" : "●"}
              </div>

              <div
                style={{
                  border: `1px solid ${border}`,
                  borderRadius: 18,
                  background: cardBg,
                  padding: "28px 26px",
                  boxShadow: dark ? "none" : "0 1px 3px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ display: "flex", gap: 14 }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                      background: logoBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 15,
                      fontWeight: 700,
                      color: subText,
                      flexShrink: 0,
                      border: `1px dashed ${lineColor}`,
                    }}
                    title="Logo eklenecek"
                  >
                    {exp.company.slice(0, 2).toUpperCase()}
                  </div>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <h3 style={{ fontSize: "clamp(1.05rem, 2.4vw, 1.3rem)", fontWeight: 700, margin: 0 }}>
                      {exp.title}
                    </h3>
                    <div style={{ fontSize: 14.5, color: subText, marginTop: 4 }}>
                      {exp.company}
                    </div>
                    <div style={{ fontSize: 13, color: subText, marginTop: 10, display: "flex", gap: 16, flexWrap: "wrap" }}>
                      <span>📅 {exp.date}</span>
                      <span>📍 {exp.location}</span>
                    </div>

                    {exp.links && (
                      <div style={{ display: "flex", gap: 16, marginTop: 12, flexWrap: "wrap" }}>
                        {exp.links.map((l) => (
                          <a
                            key={l.href}
                            href={l.href}
                            target="_blank"
                            rel="noreferrer"
                            style={{
                              fontSize: 13,
                              fontWeight: 600,
                              color: text,
                              textDecoration: "none",
                              display: "flex",
                              alignItems: "center",
                              gap: 5,
                            }}
                          >
                            ↗ {l.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {exp.bullets.length > 0 && (
                  <div style={{ marginTop: 18, display: "flex", flexDirection: "column", gap: 10 }}>
                    {visibleBullets.map((b, bi) => (
                      <div key={bi} style={{ display: "flex", gap: 8, fontSize: 14, color: subText, lineHeight: 1.65 }}>
                        <span style={{ color: text, flexShrink: 0 }}>▸</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                )}

                {remaining > 0 && (
                  <button
                    onClick={() => setExpanded((e) => ({ ...e, [i]: !e[i] }))}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#4C8DFF",
                      fontSize: 13.5,
                      fontWeight: 600,
                      cursor: "pointer",
                      padding: 0,
                      marginTop: 12,
                      fontFamily: "inherit",
                    }}
                  >
                    {isOpen ? "Show less ▲" : `+${remaining} more details ▼`}
                  </button>
                )}

                {exp.tech.length > 0 && (
                  <div style={{ marginTop: 20 }}>
                    <div style={{ fontSize: 12, fontWeight: 700, color: subText, marginBottom: 10 }}>
                      Tech Stack:
                    </div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          style={{
                            fontSize: 12.5,
                            fontWeight: 600,
                            color: text,
                            border: `1px solid ${border}`,
                            background: tagBg,
                            borderRadius: 8,
                            padding: "6px 12px",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
