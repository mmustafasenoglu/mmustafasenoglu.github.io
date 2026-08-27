import { useRef, useState } from "react";

const CATEGORIES = ["All Projects", "Full-Stack / Web", "AI & Data"];

const PROJECTS = [
  {
    title: "AI Algorithm Problem Generator",
    subtitle: "RAG-Powered DSA Question Engine",
    icon: "🤖",
    category: "AI & Data",
    desc: "Built a RAG pipeline generating 3,000+ algorithm problems with full test cases, solution stubs, and difficulty tags by querying a Pinecone vector database and prompting an LLM for novel variations.",
    tech: ["Python", "Groq", "Pinecone"],
    github: "", // add repo URL here
    live: "",
  },
  {
    title: "FileDrop",
    subtitle: "Anonymous Real-Time File Transfer",
    icon: "📡",
    category: "Full-Stack / Web",
    desc: "QR-code and 6-digit room-based file transfer tool that lets people share files on shared/public computers without logging into personal accounts — works across devices, no shared network required.",
    tech: ["JavaScript", "WebSockets"],
    github: "",
    live: "",
  },
  {
    title: "MikroBridge",
    subtitle: "E-Commerce → ERP Automation Platform",
    icon: "🚚",
    category: "Full-Stack / Web",
    desc: "A centralized desktop app that syncs real-time sales data from WooCommerce, Trendyol, and Hepsiburada into Mikro ERP — automating order processing and eliminating manual data entry.",
    tech: ["C#", "REST API", "WinForms"],
    github: "",
    live: "",
  },
];

export default function WorkPage({ dark: darkProp, onToggleDark }) {
  const [localDark, setLocalDark] = useState(false);
  const dark = darkProp !== undefined ? darkProp : localDark;
  const toggleDark = onToggleDark || (() => setLocalDark((d) => !d));

  const [category, setCategory] = useState("All Projects");
  const trackRef = useRef(null);

  const bg = dark ? "#0A0A0B" : "#FFFFFF";
  const text = dark ? "#F4F4F5" : "#111112";
  const subText = dark ? "#9A9AA2" : "#5B5B63";
  const border = dark ? "#26262B" : "#E7E9EE";
  const cardBg = dark ? "#111113" : "#FFFFFF";
  const iconBandBg = dark ? "#17171A" : "#F5F5F7";
  const pillActiveBg = dark ? "#F4F4F5" : "#111112";
  const pillActiveText = dark ? "#111112" : "#FFFFFF";
  const arrowBg = dark ? "#1C1C20" : "#FFFFFF";

  const filtered =
    category === "All Projects" ? PROJECTS : PROJECTS.filter((p) => p.category === category);

  function scrollByCard(dir) {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("[data-card]");
    const w = card ? card.getBoundingClientRect().width + 20 : 320;
    el.scrollBy({ left: dir * w, behavior: "smooth" });
  }

  function openProject(p) {
    const url = p.github || p.live;
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  }

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
        .proj-track::-webkit-scrollbar { display: none; }
      `}</style>

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
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px clamp(20px, 5vw, 64px) 32px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Featured Projects
        </h1>
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: subText, marginTop: 18, lineHeight: 1.6 }}>
          A showcase of full-stack applications, AI systems, and technical
          architecture.
        </p>
      </div>

      {/* category pills */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 10,
          flexWrap: "wrap",
          padding: "0 20px 44px",
        }}
      >
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            style={{
              background: category === c ? pillActiveBg : "none",
              color: category === c ? pillActiveText : text,
              border: `1px solid ${category === c ? pillActiveBg : border}`,
              borderRadius: 999,
              padding: "11px 22px",
              fontSize: 14,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 200ms ease",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* slider */}
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "0 20px 120px" }}>
        <button
          onClick={() => scrollByCard(-1)}
          aria-label="Previous"
          style={{
            position: "absolute",
            left: -4,
            top: "38%",
            transform: "translateY(-50%)",
            zIndex: 3,
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: `1px solid ${border}`,
            background: arrowBg,
            cursor: "pointer",
            fontSize: 18,
            color: text,
            boxShadow: dark ? "none" : "0 4px 14px rgba(0,0,0,0.08)",
          }}
        >
          ‹
        </button>
        <button
          onClick={() => scrollByCard(1)}
          aria-label="Next"
          style={{
            position: "absolute",
            right: -4,
            top: "38%",
            transform: "translateY(-50%)",
            zIndex: 3,
            width: 44,
            height: 44,
            borderRadius: "50%",
            border: `1px solid ${border}`,
            background: arrowBg,
            cursor: "pointer",
            fontSize: 18,
            color: text,
            boxShadow: dark ? "none" : "0 4px 14px rgba(0,0,0,0.08)",
          }}
        >
          ›
        </button>

        <div
          ref={trackRef}
          className="proj-track"
          style={{
            display: "flex",
            gap: 20,
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            padding: "4px 44px",
            scrollbarWidth: "none",
          }}
        >
          {filtered.map((p) => {
            const hasLink = Boolean(p.github || p.live);
            return (
              <div
                key={p.title}
                data-card
                onClick={() => openProject(p)}
                style={{
                  flex: "0 0 clamp(260px, 30vw, 340px)",
                  scrollSnapAlign: "start",
                  border: `1px solid ${border}`,
                  borderRadius: 18,
                  background: cardBg,
                  overflow: "hidden",
                  cursor: hasLink ? "pointer" : "default",
                  transition: "transform 200ms ease, box-shadow 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = dark
                    ? "0 8px 24px rgba(0,0,0,0.4)"
                    : "0 12px 28px rgba(0,0,0,0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    background: iconBandBg,
                    height: 150,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 46,
                    borderBottom: `1px solid ${border}`,
                  }}
                >
                  {p.icon}
                </div>

                <div style={{ padding: "22px 22px 24px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: 8,
                    }}
                  >
                    <h3 style={{ fontSize: 17.5, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
                      {p.title}
                    </h3>
                    {hasLink && (
                      <span style={{ fontSize: 15, color: subText, flexShrink: 0 }}>↗</span>
                    )}
                  </div>
                  <div style={{ fontSize: 13, color: subText, marginTop: 4, fontWeight: 500 }}>
                    {p.subtitle}
                  </div>
                  <p style={{ fontSize: 13.5, color: subText, lineHeight: 1.65, marginTop: 12 }}>
                    {p.desc}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontSize: 12,
                          fontWeight: 600,
                          color: text,
                          border: `1px solid ${border}`,
                          borderRadius: 999,
                          padding: "5px 12px",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  {!hasLink && (
                    <div style={{ fontSize: 11.5, color: subText, opacity: 0.6, marginTop: 14 }}>
                      link eklenecek
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
