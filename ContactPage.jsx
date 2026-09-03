import { useState } from "react";
import { Helmet } from "react-helmet-async";

const EMAIL = "mmustafasenoglu0@gmail.com";
const GITHUB_URL = "https://github.com/mmustafasenoglu";
const LINKEDIN_URL = "https://www.linkedin.com/in/mustafasenoglu/";
// Add a real Calendly / cal.com link here when ready — falls back to email otherwise.
const SCHEDULE_URL = "";

export default function ContactPage({ dark: darkProp, onToggleDark }) {
  const [localDark, setLocalDark] = useState(false);
  const dark = darkProp !== undefined ? darkProp : localDark;
  const toggleDark = onToggleDark || (() => setLocalDark((d) => !d));

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const bg = dark ? "#0A0A0B" : "#FFFFFF";
  const text = dark ? "#F4F4F5" : "#111112";
  const subText = dark ? "#9A9AA2" : "#5B5B63";
  const border = dark ? "#26262B" : "#E7E9EE";
  const cardBg = dark ? "#111113" : "#FFFFFF";
  const iconBg = dark ? "#1C1C20" : "#F0F0F3";

  function handleSubmit() {
    const subject = encodeURIComponent(`Portfolio contact from ${form.name || "someone"}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name}\n${form.email}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }

  function handleSchedule() {
    if (SCHEDULE_URL) {
      window.open(SCHEDULE_URL, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        "Let's schedule a call"
      )}&body=${encodeURIComponent("Hi Mustafa, I'd like to schedule a call — here are a few times that work for me:")}`;
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
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');
        .term-input::placeholder { color: #4F6B5C; }
        .term-input:focus { outline: none; }
      `}</style>

      <Helmet>
        <title>İletişim — Mustafa Şenoğlu | Software Engineer</title>
        <meta name="description" content="Mustafa Şenoğlu ile iletişime geçin — mmustafasenoglu0@gmail.com | GitHub: github.com/mmustafasenoglu | LinkedIn: linkedin.com/in/mustafasenoglu" />
      </Helmet>

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
      <div style={{ maxWidth: 900, margin: "0 auto", padding: "16px clamp(20px, 5vw, 64px) 60px", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "clamp(2.4rem, 6vw, 4rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: 0,
          }}
        >
          Get In Touch
        </h1>
        <p style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)", color: subText, marginTop: 18, lineHeight: 1.6 }}>
          Let's talk about Software Engineering roles, open source
          collaboration, or your next big idea.
        </p>
      </div>

      {/* two columns */}
      <div
        style={{
          maxWidth: 1140,
          margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 64px) 120px",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 32,
          alignItems: "start",
        }}
        className="contact-grid"
      >
        <style>{`
          @media (max-width: 820px) {
            .contact-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>

        {/* left: info */}
        <div>
          <h2 style={{ fontSize: "clamp(1.4rem, 3vw, 1.7rem)", fontWeight: 800, margin: 0 }}>
            Ready to collaborate?
          </h2>
          <p style={{ fontSize: 14.5, color: subText, lineHeight: 1.7, marginTop: 14 }}>
            I'm currently interning at Microsoft and always open to new
            opportunities and collaborations. Whether it's a full-time role,
            an open source project, or just a technical question — I'll try
            my best to get back to you.
          </p>

          <InfoRow icon="✉️" label="EMAIL" value={EMAIL} cardBg={cardBg} border={border} iconBg={iconBg} subText={subText} text={text} href={`mailto:${EMAIL}`} />
          <InfoRow icon="📍" label="LOCATION" value="İstanbul, Türkiye" cardBg={cardBg} border={border} iconBg={iconBg} subText={subText} text={text} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginTop: 14 }}>
            <LinkCard icon="🐙" label="GITHUB" cardBg={cardBg} border={border} iconBg={iconBg} text={text} href={GITHUB_URL} />
            <LinkCard icon="💼" label="LINKEDIN" cardBg={cardBg} border={border} iconBg={iconBg} text={text} href={LINKEDIN_URL} />
          </div>

          {/* schedule a meeting — sits right under GitHub/LinkedIn */}
          <button
            onClick={handleSchedule}
            style={{
              width: "100%",
              marginTop: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 10,
              border: `1px solid ${border}`,
              borderRadius: 14,
              background: cardBg,
              padding: "16px",
              cursor: "pointer",
              fontFamily: "inherit",
            }}
          >
            <span
              style={{
                width: 34,
                height: 34,
                borderRadius: 10,
                background: iconBg,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 15,
              }}
            >
              📅
            </span>
            <span style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: "0.03em", color: text }}>
              SCHEDULE A MEETING
            </span>
          </button>

          <div
            style={{
              marginTop: 18,
              border: `1px dashed ${dark ? "#2E4A3A" : "#BEE8CE"}`,
              borderRadius: 14,
              padding: "16px 18px",
              background: dark ? "#0F1B15" : "#F3FBF6",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#3FB950", display: "inline-block" }} />
              <span style={{ color: subText }}>Status:</span>
              <strong>Available for Full-Time Roles</strong>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, color: subText }}>
              🕐 Avg Response: <strong style={{ color: text }}>&lt; 24 hours</strong>
            </div>
          </div>
        </div>

        {/* right: terminal form */}
        <div
          style={{
            borderRadius: 14,
            overflow: "hidden",
            border: `1px solid ${dark ? "#000" : "#000"}`,
            boxShadow: "0 20px 50px rgba(0,0,0,0.35)",
          }}
        >
          <div
            style={{
              background: "#1E1F22",
              padding: "10px 16px",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FF5F57" }} />
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#FEBC2E" }} />
            <span style={{ width: 11, height: 11, borderRadius: "50%", background: "#28C840" }} />
            <span
              style={{
                marginLeft: 12,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12.5,
                color: "#A8AEB8",
              }}
            >
              message_payload.sh
            </span>
          </div>

          <div style={{ background: "#050805", padding: "26px 26px 22px" }}>
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14,
                color: "#8CF5C4",
                marginBottom: 22,
                textShadow: "0 0 10px rgba(140,245,196,0.35)",
              }}
            >
              guest@mustafa:~$ sudo init contact --form
            </div>

            <Field
              label="NAME:"
              value={form.name}
              onChange={(v) => setForm((f) => ({ ...f, name: v }))}
              placeholder="Enter your name..."
            />
            <Field
              label="EMAIL:"
              value={form.email}
              onChange={(v) => setForm((f) => ({ ...f, email: v }))}
              placeholder="your@email.com"
            />
            <div style={{ marginBottom: 6 }}>
              <div
                style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: "#63E6FF",
                  marginBottom: 8,
                  textShadow: "0 0 10px rgba(99,230,255,0.35)",
                }}
              >
                MESSAGE:
              </div>
              <textarea
                className="term-input"
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                placeholder="Type your message here..."
                rows={6}
                style={{
                  width: "100%",
                  background: "transparent",
                  border: "none",
                  borderLeft: "2px solid #2A3D33",
                  paddingLeft: 14,
                  color: "#EAFFF4",
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 14.5,
                  lineHeight: 1.7,
                  resize: "vertical",
                }}
              />
            </div>

            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 12.5,
                color: "#5B7A6A",
                margin: "14px 0 22px",
              }}
            >
              /* Ready to deploy your message. */
            </div>

            <button
              onClick={handleSubmit}
              style={{
                width: "100%",
                background: "transparent",
                border: "1.5px solid #63E6FF",
                color: "#63E6FF",
                borderRadius: 8,
                padding: "16px",
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 14.5,
                fontWeight: 700,
                letterSpacing: "0.08em",
                cursor: "pointer",
                textShadow: "0 0 12px rgba(99,230,255,0.5)",
                boxShadow: "0 0 18px rgba(99,230,255,0.12) inset",
              }}
            >
              [ COMMIT &amp; PUSH ]
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, placeholder }) {
  return (
    <div style={{ marginBottom: 22 }}>
      <div
        style={{
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 13.5,
          fontWeight: 700,
          color: "#63E6FF",
          marginBottom: 8,
          textShadow: "0 0 10px rgba(99,230,255,0.35)",
        }}
      >
        {label}
      </div>
      <input
        className="term-input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          borderLeft: "2px solid #2A3D33",
          paddingLeft: 14,
          paddingBottom: 6,
          color: "#EAFFF4",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: 14.5,
        }}
      />
    </div>
  );
}

function InfoRow({ icon, label, value, cardBg, border, iconBg, subText, text, href }) {
  const content = (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 14,
        border: `1px solid ${border}`,
        borderRadius: 14,
        background: cardBg,
        padding: "16px 18px",
        marginTop: 14,
        textDecoration: "none",
        color: text,
      }}
    >
      <span
        style={{
          width: 40,
          height: 40,
          borderRadius: 10,
          background: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 17,
          flexShrink: 0,
        }}
      >
        {icon}
      </span>
      <div>
        <div style={{ fontSize: 11.5, fontWeight: 700, letterSpacing: "0.06em", color: subText }}>
          {label}
        </div>
        <div style={{ fontSize: 15, fontWeight: 600, marginTop: 2 }}>{value}</div>
      </div>
    </div>
  );
  return href ? (
    <a href={href} style={{ textDecoration: "none" }}>
      {content}
    </a>
  ) : (
    content
  );
}

function LinkCard({ icon, label, cardBg, border, iconBg, text, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        border: `1px solid ${border}`,
        borderRadius: 14,
        background: cardBg,
        padding: "16px",
        textDecoration: "none",
        color: text,
      }}
    >
      <span
        style={{
          width: 34,
          height: 34,
          borderRadius: 10,
          background: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 15,
        }}
      >
        {icon}
      </span>
      <span style={{ fontSize: 13.5, fontWeight: 700, letterSpacing: "0.03em" }}>{label}</span>
    </a>
  );
}
