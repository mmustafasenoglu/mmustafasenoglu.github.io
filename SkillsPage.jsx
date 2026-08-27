import { useState } from "react";

const LEVELS = {
  proficient: { label: "Proficient", color: "#3FB950" },
  intermediate: { label: "Intermediate", color: "#4C8DFF" },
  exploring: { label: "Exploring", color: "#8B5CF6" },
  familiar: { label: "Familiar", color: "#F5A524" },
};

const CATEGORIES = [
  {
    icon: "</>",
    title: "Languages & Core Tech",
    skills: [
      { name: "Python", icon: "🐍", level: "proficient" },
      { name: "JavaScript", icon: "🟨", level: "proficient" },
      { name: "Java", icon: "☕", level: "intermediate" },
      { name: "SQL", icon: "🗄️", level: "proficient" },
      { name: "C / C++", icon: "🔧", level: "familiar" },
      { name: "C#", icon: "🎯", level: "intermediate" },
    ],
  },
  {
    icon: "🧠",
    title: "AI / ML & Inference",
    skills: [
      { name: "PyTorch", icon: "🔥", level: "proficient" },
      { name: "Hugging Face Transformers", icon: "🤗", level: "intermediate" },
      { name: "DeepSpeed", icon: "⚡", level: "exploring" },
      { name: "Triton Inference Server", icon: "🔺", level: "exploring" },
      { name: "Pinecone (RAG)", icon: "🌲", level: "intermediate" },
      { name: "TensorFlow", icon: "🧮", level: "exploring" },
    ],
  },
  {
    icon: "🗄️",
    title: "Backend & Frameworks",
    skills: [
      { name: "FastAPI", icon: "⚡", level: "proficient" },
      { name: "Django", icon: "🎸", level: "intermediate" },
      { name: "ASP.NET", icon: "🔷", level: "exploring" },
      { name: "PHP", icon: "🐘", level: "familiar" },
      { name: "REST APIs", icon: "🔌", level: "proficient" },
      { name: "Kafka", icon: "📨", level: "intermediate" },
    ],
  },
  {
    icon: "🎨",
    title: "Frontend",
    skills: [
      { name: "React", icon: "⚛️", level: "proficient" },
      { name: "Vue.js", icon: "💚", level: "intermediate" },
      { name: "HTML5 / CSS3", icon: "🎨", level: "proficient" },
      { name: "Tailwind CSS", icon: "🌊", level: "proficient" },
    ],
  },
  {
    icon: "☁️",
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", icon: "🐳", level: "proficient" },
      { name: "Kubernetes", icon: "☸️", level: "intermediate" },
      { name: "GitHub Actions (CI/CD)", icon: "🔁", level: "proficient" },
      { name: "Linux", icon: "🐧", level: "proficient" },
      { name: "Cloudflare WAF / CDN", icon: "☁️", level: "exploring" },
    ],
  },
  {
    icon: "💾",
    title: "Databases",
    skills: [
      { name: "PostgreSQL", icon: "🐘", level: "proficient" },
      { name: "Redis", icon: "🟥", level: "intermediate" },
    ],
  },
  {
    icon: "🚀",
    title: "Leadership & Entrepreneurship",
    skills: [
      { name: "Founding & Building Teams", icon: "🚀", level: "proficient" },
      { name: "Team Leadership", icon: "🧑‍🤝‍🧑", level: "proficient" },
      { name: "Public Speaking & Hosting", icon: "🎙️", level: "proficient" },
      { name: "Community Building", icon: "🌍", level: "proficient" },
      { name: "Research & Mentorship", icon: "🔬", level: "intermediate" },
      { name: "Cross-functional Collaboration", icon: "🤝", level: "proficient" },
    ],
  },
];

export default function SkillsPage({ dark: darkProp, onToggleDark }) {
  const [localDark, setLocalDark] = useState(false);
  const dark = darkProp !== undefined ? darkProp : localDark;
  const toggleDark = onToggleDark || (() => setLocalDark((d) => !d));

  const bg = dark ? "#0A0A0B" : "#FFFFFF";
  const text = dark ? "#F4F4F5" : "#111112";
  const subText = dark ? "#9A9AA2" : "#5B5B63";
  const border = dark ? "#26262B" : "#E7E9EE";
  const cardBg = dark ? "#111113" : "#FFFFFF";
  const iconBg = dark ? "#1C1C20" : "#F0F0F3";

  function pillStyle(level) {
    const c = LEVELS[level].color;
    return {
      background: dark ? `${c}22` : `${c}17`,
      border: `1px solid ${c}55`,
      color: dark ? "#F4F4F5" : "#1F2430",
    };
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
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px clamp(20px, 5vw, 64px) 28px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Skills
        </h1>
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: subText, marginTop: 18, lineHeight: 1.6 }}>
          Technologies I build with, and the leadership habits I built
          alongside them.
        </p>
      </div>

      {/* legend */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "clamp(14px, 3vw, 28px)",
          flexWrap: "wrap",
          padding: "0 20px 48px",
        }}
      >
        {Object.entries(LEVELS).map(([key, v]) => (
          <div key={key} style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13.5, color: subText, fontWeight: 500 }}>
            <span style={{ width: 9, height: 9, borderRadius: "50%", background: v.color, display: "inline-block" }} />
            {v.label}
          </div>
        ))}
      </div>

      {/* category grid */}
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 64px) 120px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 24,
        }}
        className="skills-grid"
      >
        <style>{`
          @media (max-width: 760px) {
            .skills-grid { grid-template-columns: 1fr !important; }
            .skill-pills { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {CATEGORIES.map((cat) => (
          <div
            key={cat.title}
            style={{
              border: `1px solid ${border}`,
              borderRadius: 20,
              background: cardBg,
              padding: "30px 28px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 26 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 14,
                  background: iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  fontWeight: 700,
                  flexShrink: 0,
                }}
              >
                {cat.icon}
              </div>
              <h2 style={{ fontSize: "clamp(1.15rem, 2.6vw, 1.4rem)", fontWeight: 800, margin: 0 }}>
                {cat.title}
              </h2>
            </div>

            <div
              className="skill-pills"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              {cat.skills.map((s) => (
                <div
                  key={s.name}
                  style={{
                    ...pillStyle(s.level),
                    borderRadius: 12,
                    padding: "12px 14px",
                    fontSize: 14,
                    fontWeight: 600,
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                  }}
                >
                  <span style={{ fontSize: 15 }}>{s.icon}</span>
                  {s.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
