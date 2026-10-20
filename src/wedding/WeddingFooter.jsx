import React from "react";

const MAPS_LINK = "https://www.google.com/maps/dir/?api=1&destination=M7F9%2BJ53%2C+Unnamed+Road%2C+Pailadi%2C+Jharkhand+827013";

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#couple", label: "Bride & Groom" },
  { href: "#rituals", label: "Rituals" },
  { href: "#events", label: "Events" },
  { href: "#venue", label: "Venue" },
  { href: "#blessings", label: "Blessings" },
];

export default function WeddingFooter() {
  return (
    <footer className="relative py-14 px-4 text-center overflow-hidden"
      style={{ background: "linear-gradient(180deg,#1a0a00 0%,#0a0300 100%)" }}>

      {/* Top decorative wave */}
      <div className="absolute top-0 left-0 w-full leading-none">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: "35px" }}>
          <path d="M0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 0 L0 0 Z" fill="#1a0a00" opacity="0.6" />
        </svg>
      </div>

      <div className="relative z-10 max-w-xl mx-auto pt-6">
        {/* Om symbol */}
        <div className="text-3xl mb-3" style={{ color: "#d4a017", fontFamily: "serif" }}>ॐ</div>

        {/* Names */}
        <h2 className="font-serif italic mb-2" style={{
          fontSize: "clamp(2rem,6vw,3.2rem)",
          color: "#f5e6c8",
          textShadow: "0 0 30px rgba(212,160,23,0.3)"
        }}>
          Priyanka & Prakash
        </h2>
        <p className="text-xs tracking-[0.25em] mb-6" style={{ color: "#c8a96e" }}>
          KUMARI & KUMAR · 24 · 11 · 2026
        </p>

        {/* Divider */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="h-px w-16" style={{ background: "linear-gradient(to right,transparent,#d4a017)" }} />
          <span style={{ color: "#d4a017", fontSize: "0.8rem" }}>✦</span>
          <span style={{ color: "#d4a017", fontSize: "1rem" }}>✿</span>
          <span style={{ color: "#d4a017", fontSize: "0.8rem" }}>✦</span>
          <div className="h-px w-16" style={{ background: "linear-gradient(to left,transparent,#d4a017)" }} />
        </div>

        {/* Navigation links */}
        <nav className="flex flex-wrap gap-2 justify-center mb-6">
          {NAV.map(({ href, label }) => (
            <a
              key={label}
              href={href}
              className="px-4 py-2 rounded-full text-xs font-medium transition-all"
              style={{
                border: "1px solid rgba(212,160,23,0.25)",
                color: "#c8a96e",
                background: "rgba(212,160,23,0.06)",
                textDecoration: "none"
              }}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Directions CTA Button - labeled with Wedding Location */}
        <div className="mb-6">
          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs tracking-wider transition-all"
            style={{
              background: "linear-gradient(135deg,#d4a017,#c47f00)",
              color: "#1a0800",
              boxShadow: "0 0 25px rgba(212,160,23,0.4)",
              textDecoration: "none"
            }}
          >
            📍 Get Directions · Wedding Location
          </a>
        </div>

        {/* Wedding Address chip */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs" style={{
            border: "1px solid rgba(212,160,23,0.2)",
            color: "#a88050"
          }}>
            <span>📍</span>
            <span>Wedding Address: Pailadi, Jharkhand 827013</span>
            <span>·</span>
            <span>24 Nov 2026</span>
          </div>
        </div>

        {/* Clean footer line */}
        <div className="pt-4 border-t border-[rgba(212,160,23,0.15)]">
          <p className="text-sm font-medium tracking-wide" style={{ color: "#d4a017", margin: 0 }}>
            Made with love by Pradeep
          </p>
        </div>
      </div>
    </footer>
  );
}
