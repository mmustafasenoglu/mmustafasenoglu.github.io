import { useState } from "react";
import { Helmet } from "react-helmet-async";
import photo from "./medias/f6b266eb-35ba-4797-82ce-b91b9d92d1c4.jpeg";

const FOCUS_AREAS = [
  {
    icon: "🧠",
    title: "AI Infrastructure",
    desc: "Optimizing LLM inference and deployment pipelines with PyTorch, Triton and DeepSpeed",
  },
  {
    icon: "⚙️",
    title: "Backend & Systems",
    desc: "Building scalable APIs and distributed backends with FastAPI, Django and Kafka",
  },
  {
    icon: "🌐",
    title: "Open Source",
    desc: "200+ pull requests across projects like Apache AGE, Zephyr RTOS and Cesium",
  },
  {
    icon: "🎤",
    title: "Community & Research",
    desc: "Organizing GDG events, hosting Crossing Paths, and a TÜBİTAK-funded research grant",
  },
];

const HOBBY_SLOTS = [1, 2, 3];

export default function AboutPage({ dark: darkProp, onToggleDark, onNavigate = () => {} }) {
  const [localDark, setLocalDark] = useState(false);
  const dark = darkProp !== undefined ? darkProp : localDark;

  const bg = dark ? "#0B0B0C" : "#FFFFFF";
  const text = dark ? "#F4F4F5" : "#111112";
  const subText = dark ? "#A1A1AA" : "#52525B";
  const border = dark ? "#27272A" : "#E4E4E7";
  const cardBg = dark ? "#141416" : "#FAFAFA";
  const ghostBorder = dark ? "#3F3F46" : "#D4D4D8";
  const iconBg = dark ? "#1F1F23" : "#F0F0F3";

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

      <Helmet>
        <title>Hakkımda — Mustafa Şenoğlu | Software Engineer</title>
        <meta name="description" content="Mustafa Şenoğlu hakkında — Backend Systems ve AI Infrastructure konularında uzman yazılım mühendisi. CS öğrencisi, Microsoft stajyeri ve açık kaynak katkıcısı." />
      </Helmet>

      {/* page header */}
      <div
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          padding: "clamp(48px, 8vw, 88px) clamp(20px, 5vw, 64px) 0",
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
          ABOUT
        </div>
        <h1
          style={{
            fontSize: "clamp(2rem, 5vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Hakkımda
        </h1>
      </div>

      {/* my journey */}
      <section
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          padding: "48px clamp(20px, 5vw, 64px) 100px",
          display: "grid",
          gridTemplateColumns: "0.85fr 1.15fr",
          gap: "48px",
          alignItems: "start",
        }}
        className="journey-grid"
      >
        <style>{`
          @media (max-width: 760px) {
            .journey-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* photo */}
        <img
          src={photo}
          alt="Mustafa Şenoğlu"
          style={{
            borderRadius: 20,
            width: "min(220px, 60%)",
            aspectRatio: "1 / 1",
            objectFit: "cover",
            position: "sticky",
            top: 32,
          }}
        />

        <div>
          <h2
            style={{
              fontSize: "clamp(1.5rem, 3.4vw, 1.9rem)",
              fontWeight: 800,
              letterSpacing: "-0.01em",
              margin: 0,
              display: "inline-block",
              borderBottom: `3px solid ${text}`,
              paddingBottom: 6,
            }}
          >
            My Journey
          </h2>

          <p style={{ fontSize: 15.5, color: subText, lineHeight: 1.8, marginTop: 26 }}>
            I'm a 3rd-year Computer Engineering student at Adnan Menderes
            University, and my curiosity has always pulled me toward the
            same question: how do you build systems that actually hold up
            in production, at scale, under real users? That question is
            what pulled me from tutorials into shipping real software —
            and eventually into open source, where the stakes (and the
            code review) are very real.
          </p>

          <p style={{ fontSize: 15.5, color: subText, lineHeight: 1.8, marginTop: 18 }}>
            Right now I'm an AI Innovation Intern at Microsoft, working on
            AI infrastructure and LLM inference optimization — scalability,
            latency, GPU utilization, the kind of problems that don't have
            a clean answer in a textbook. Alongside that, I'm a Software
            Developer Intern at NeoOne Technology, and I lead TÜBİTAK-funded
            research on using graph attention networks to predict organ
            dysfunction in ICU patients earlier than traditional clinical
            scoring methods.
          </p>

          <p style={{ fontSize: 15.5, color: subText, lineHeight: 1.8, marginTop: 18 }}>
            Outside of internships, I founded AlgoForge, a platform for
            structured DSA and technical interview prep, and I host
            Crossing Paths — a weekly interview series where I talk to
            engineers from Microsoft, Amazon, and Meta about what it
            actually takes to work in Big Tech. And in whatever time is
            left, I'm chasing merged pull requests: 200+ opened across
            projects like Apache AGE, Zephyr RTOS, Cesium, and
            uptime-kuma. The goal behind all of it is the same — build
            real things, get them reviewed by people who know better, and
            eventually land a Software Engineering role at a Big Tech
            company.
          </p>

          {/* focus areas grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "28px 24px",
              marginTop: 40,
            }}
            className="focus-grid"
          >
            <style>{`
              @media (max-width: 520px) {
                .focus-grid { grid-template-columns: 1fr !important; }
              }
            `}</style>
            {FOCUS_AREAS.map((f) => (
              <div key={f.title} style={{ display: "flex", gap: 14 }}>
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    background: iconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 19,
                    flexShrink: 0,
                  }}
                >
                  {f.icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: 15.5, marginBottom: 4 }}>
                    {f.title}
                  </div>
                  <div style={{ fontSize: 13.5, color: subText, lineHeight: 1.6 }}>
                    {f.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* outside of coding */}
      <section
        style={{
          maxWidth: 1040,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 64px) 120px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(1.8rem, 4.4vw, 2.6rem)",
            fontWeight: 800,
            letterSpacing: "-0.01em",
            margin: 0,
          }}
        >
          Outside of Coding
        </h2>
        <div
          style={{
            width: 56,
            height: 3,
            background: ghostBorder,
            margin: "18px auto",
            borderRadius: 999,
          }}
        />
        <p style={{ fontSize: 15, color: subText, margin: "0 auto", maxWidth: 460 }}>
          A look at my interests and what keeps me inspired beyond the IDE —
          henüz eklenmedi, kanka birazdan doldurur.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 20,
            marginTop: 48,
          }}
          className="hobby-grid"
        >
          <style>{`
            @media (max-width: 700px) {
              .hobby-grid { grid-template-columns: 1fr !important; }
            }
          `}</style>
          {HOBBY_SLOTS.map((slot) => (
            <div
              key={slot}
              style={{
                border: `1.5px dashed ${ghostBorder}`,
                borderRadius: 18,
                background: cardBg,
                padding: "32px 20px",
                textAlign: "left",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: iconBg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  marginBottom: 16,
                  opacity: 0.6,
                }}
              >
                ✨
              </div>
              <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 6, opacity: 0.7 }}>
                Hobi eklenecek
              </div>
              <div style={{ fontSize: 13, color: subText, lineHeight: 1.6 }}>
                Bu alana ilgi alanın ve kısa açıklaman gelecek.
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
