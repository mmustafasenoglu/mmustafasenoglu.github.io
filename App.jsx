import { useState, useEffect, useCallback } from "react";
import { HashRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";

import IntroScreen from "./IntroScreen";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import ExperiencePage from "./ExperiencePage";
import WorkPage from "./WorkPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";
import Footer from "./Footer";

const PAGES = [
  { path: "/", label: "Home" },
  { path: "/work", label: "Work" },
  { path: "/about", label: "About" },
  { path: "/experience", label: "Experience" },
  { path: "/skills", label: "Skills" },
  { path: "/contact", label: "Contact" },
];

function Navigation({ active, onNavigate, dark, toggleDark }) {
  const navLinks = PAGES;
  const bg = dark ? "#0B0B0C" : "#FFFFFF";
  const text = dark ? "#F4F4F5" : "#111112";
  const subText = dark ? "#A1A1AA" : "#52525B";
  const border = dark ? "#27272A" : "#E4E4E7";

  return (
    <nav
      style={{
        position: "relative",
        zIndex: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px clamp(20px, 5vw, 64px)",
        borderBottom: `1px solid ${border}`,
        background: bg,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          fontWeight: 700,
          fontSize: 17,
        }}
      >
        <span style={{ color: "#3FB950" }}>✦</span>
        mustafa
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "clamp(20px, 3vw, 40px)",
        }}
      >
        {navLinks.map((link) => (
          <button
            key={link.path}
            onClick={() => onNavigate(link.path)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: 15,
              padding: 0,
              color: active === link.path ? text : subText,
              fontWeight: active === link.path ? 600 : 500,
              transition: "color 200ms ease",
            }}
          >
            {link.label}
          </button>
        ))}

        <button
          onClick={toggleDark}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            background: "none",
            border: `1px solid ${border}`,
            borderRadius: 999,
            padding: "6px 14px",
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: 13,
            color: subText,
          }}
        >
          {dark ? "🌙" : "☀️"} {dark ? "Night mode" : "Day mode"}
        </button>
      </div>
    </nav>
  );
}

function MainLayout({ children, dark, toggleDark, onNavigate }) {
  const location = useLocation();
  const active = location.pathname;

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navigation
        active={active}
        onNavigate={onNavigate}
        dark={dark}
        toggleDark={toggleDark}
      />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer dark={dark} onToggleDark={toggleDark} />
    </div>
  );
}

function AppInner() {
  const [showIntro, setShowIntro] = useState(true);
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      setDark(saved === "true");
    } else if (typeof window !== "undefined") {
      setDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("darkMode", dark.toString());
    }
  }, [dark, mounted]);

  const toggleDark = useCallback(() => setDark((d) => !d), []);

  const handleNavigate = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );

  const handleIntroDone = useCallback(() => {
    setShowIntro(false);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: dark ? "#0B0B0C" : "#FFFFFF",
        color: dark ? "#F4F4F5" : "#111112",
        fontFamily:
          "'Inter', ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif",
        transition: "background 300ms ease, color 300ms ease",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        html { scroll-behavior: smooth; }
      `}</style>

      {showIntro && (
        <IntroScreen onDone={handleIntroDone} />
      )}

      {!showIntro && (
        <MainLayout
          dark={dark}
          toggleDark={toggleDark}
          onNavigate={handleNavigate}
        >
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  dark={dark}
                  onToggleDark={toggleDark}
                  onNavigate={handleNavigate}
                />
              }
            />
            <Route
              path="/work"
              element={
                <WorkPage
                  dark={dark}
                  onToggleDark={toggleDark}
                  onNavigate={handleNavigate}
                />
              }
            />
            <Route
              path="/about"
              element={
                <AboutPage
                  dark={dark}
                  onToggleDark={toggleDark}
                  onNavigate={handleNavigate}
                />
              }
            />
            <Route
              path="/experience"
              element={
                <ExperiencePage
                  dark={dark}
                  onToggleDark={toggleDark}
                  onNavigate={handleNavigate}
                />
              }
            />
            <Route
              path="/skills"
              element={
                <SkillsPage
                  dark={dark}
                  onToggleDark={toggleDark}
                  onNavigate={handleNavigate}
                />
              }
            />
            <Route
              path="/contact"
              element={
                <ContactPage
                  dark={dark}
                  onToggleDark={toggleDark}
                  onNavigate={handleNavigate}
                />
              }
            />
          </Routes>
        </MainLayout>
      )}
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <AppInner />
    </HashRouter>
  );
}