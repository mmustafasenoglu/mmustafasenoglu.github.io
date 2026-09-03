import { useState, useEffect, useCallback } from "react";
import { HashRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const bg = dark ? "#0B0B0C" : "#FFFFFF";
  const text = dark ? "#F4F4F5" : "#111112";
  const subText = dark ? "#A1A1AA" : "#52525B";
  const border = dark ? "#27272A" : "#E4E4E7";

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleNav = (path) => {
    onNavigate(path);
    setMenuOpen(false);
  };

  return (
    <nav
      style={{
        position: "relative",
        zIndex: 10,
        padding: "20px clamp(20px, 5vw, 64px)",
        borderBottom: `1px solid ${border}`,
        background: bg,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
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

        {!isMobile && (
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
                onClick={() => handleNav(link.path)}
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
        )}

        {isMobile && (
          <button
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 4,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
            aria-label="Menu"
          >
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: text,
                borderRadius: 2,
                transition: "transform 200ms ease",
                transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: text,
                borderRadius: 2,
                transition: "opacity 200ms ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                width: 24,
                height: 2,
                background: text,
                borderRadius: 2,
                transition: "transform 200ms ease",
                transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              }}
            />
          </button>
        )}
      </div>

      {isMobile && menuOpen && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: bg,
            borderBottom: `1px solid ${border}`,
            padding: "12px clamp(20px, 5vw, 64px)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            zIndex: 20,
          }}
        >
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => handleNav(link.path)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: 16,
                padding: "4px 0",
                textAlign: "left",
                color: active === link.path ? text : subText,
                fontWeight: active === link.path ? 600 : 500,
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
              padding: "8px 14px",
              cursor: "pointer",
              fontFamily: "inherit",
              fontSize: 13,
              color: subText,
              width: "fit-content",
            }}
          >
            {dark ? "🌙" : "☀️"} {dark ? "Night mode" : "Day mode"}
          </button>
        </div>
      )}
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
    <HelmetProvider>
      <HashRouter>
        <AppInner />
      </HashRouter>
    </HelmetProvider>
  );
}