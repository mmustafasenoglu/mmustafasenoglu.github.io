import { useState, useEffect } from "react";

// "hello" in 20 languages
const GREETINGS = [
  "Merhaba",
  "Hello",
  "Hola",
  "Bonjour",
  "Hallo",
  "Ciao",
  "Olá",
  "Привет",
  "你好",
  "こんにちは",
  "안녕하세요",
  "مرحبا",
  "नमस्ते",
  "Γειά σου",
  "Hej",
  "Cześć",
  "Xin chào",
  "สวัสดี",
  "Sawubona",
  "Merhaba",
];

const TOTAL_MS = 3400;

export default function IntroScreen({ onDone } = {}) {
  const [index, setIndex] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const stepCount = GREETINGS.length - 1;
    let cancelled = false;
    const timers = [];

    // decelerating step schedule — fast at first, slows near the end
    const stepAt = (i) => {
      const t = i / stepCount;
      const eased = 1 - Math.pow(1 - t, 2.2);
      return eased * (TOTAL_MS - 400);
    };

    for (let i = 1; i <= stepCount; i++) {
      timers.push(
        setTimeout(() => {
          if (!cancelled) setIndex(i);
        }, stepAt(i))
      );
    }

    timers.push(
      setTimeout(() => {
        if (!cancelled) setExiting(true);
      }, TOTAL_MS + 500)
    );

    timers.push(
      setTimeout(() => {
        if (!cancelled && onDone) onDone();
      }, TOTAL_MS + 950)
    );

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, [onDone]);

  return (
    <div
      className={[
        "fixed inset-0 z-50 flex items-center justify-center bg-white",
        "transition-opacity duration-500 ease-out",
        exiting ? "opacity-0 pointer-events-none" : "opacity-100",
      ].join(" ")}
      aria-hidden={exiting}
    >
      <span
        key={index}
        className="intro-word text-6xl sm:text-7xl md:text-8xl font-semibold text-neutral-800 tracking-tight"
      >
        {GREETINGS[index]}
      </span>

      <style>{`
        @keyframes introFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .intro-word {
          display: inline-block;
          animation: introFade 0.18s ease-out;
        }
      `}</style>
    </div>
  );
}

// Standalone demo wrapper so this file previews on its own.
export function IntroScreenDemo() {
  const [showIntro, setShowIntro] = useState(true);
  return (
    <div className="min-h-screen bg-white">
      {showIntro && <IntroScreen onDone={() => setShowIntro(false)} />}
      {!showIntro && (
        <div className="min-h-screen flex items-center justify-center text-neutral-800">
          <div className="text-2xl font-medium">Ana sayfa</div>
        </div>
      )}
    </div>
  );
}
