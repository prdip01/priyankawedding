import React, { useRef, useState, useEffect, useCallback } from "react";

const BLESSINGS = [
  "May your love be as eternal as the sacred fire. 🔥",
  "Wishing you seven lifetimes of happiness together. 💛",
  "May the divine shower you with prosperity and joy. 🌸",
  "May your bond be unbreakable as the stars are countless. ⭐",
  "May your home always be filled with love and laughter. 🏡",
  "Congratulations! May your union be blessed abundantly. 🙏",
];

const SHLOKAS = [
  {
    text: "दाम्पत्यो क्रमागत सुखसौभाग्यसम्पदः।",
    translation: "May this couple be blessed with lifelong happiness, good fortune, and mutual prosperity.",
  },
  {
    text: "सुखस्य मूलं धर्मः।",
    translation: "Righteousness and devotion are the foundational pillars of endless joy and harmony.",
  },
];

function useInView(ref) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setInView(true); obs.disconnect(); }
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return inView;
}

export default function WeddingBlessings() {
  const headRef = useRef(null);
  const headVisible = useInView(headRef);
  const [wishText, setWishText] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState([]);
  const [showThanks, setShowThanks] = useState(false);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    if (!wishText.trim()) return;
    setSubmitted(prev => [...prev, { name: name.trim() || "A Well-Wisher", msg: wishText.trim() }]);
    setWishText("");
    setName("");
    setShowThanks(true);
    setTimeout(() => setShowThanks(false), 3500);
  }, [wishText, name]);

  return (
    <section id="blessings" style={{
      padding: "70px 0",
      background: "linear-gradient(180deg,#0d0500 0%,#1a0a00 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{ maxWidth: "600px", margin: "0 auto", padding: "0 16px" }}>
        {/* Heading */}
        <div ref={headRef} style={{
          textAlign: "center",
          marginBottom: "36px",
          opacity: headVisible ? 1 : 0,
          transform: headVisible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.7s ease"
        }}>
          <div style={{ fontSize: "2rem", marginBottom: "8px", color: "#d4a017" }}>🙏</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond',Georgia,serif",
            fontStyle: "italic",
            fontSize: "clamp(1.9rem,6.5vw,2.8rem)",
            color: "#f5e6c8",
            margin: "0 0 8px",
            textShadow: "0 0 30px rgba(212,160,23,0.3)"
          }}>
            Blessings & Wishes
          </h2>
          <p style={{
            fontSize: "clamp(0.6rem,2.5vw,0.72rem)",
            letterSpacing: "0.25em",
            color: "#c8a96e",
            margin: "0 0 12px"
          }}>
            SHARE YOUR LOVE WITH THE COUPLE
          </p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <div style={{ height: "1px", width: "45px", background: "linear-gradient(to right,transparent,#d4a017)" }} />
            <span style={{ color: "#d4a017" }}>✿</span>
            <div style={{ height: "1px", width: "45px", background: "linear-gradient(to left,transparent,#d4a017)" }} />
          </div>
        </div>

        {/* Sanskrit Shlokas */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
          {SHLOKAS.map((s, i) => (
            <div key={i} style={{
              borderRadius: "16px",
              padding: "16px",
              textAlign: "center",
              background: "rgba(212,160,23,0.06)",
              border: "1px solid rgba(212,160,23,0.2)"
            }}>
              <div style={{
                fontSize: "clamp(1.05rem,4vw,1.35rem)",
                marginBottom: "6px",
                color: "#f5e6c8",
                fontFamily: "serif"
              }}>{s.text}</div>
              <p style={{
                fontSize: "0.78rem",
                lineHeight: 1.5,
                fontStyle: "italic",
                color: "#a88050",
                margin: 0
              }}>{s.translation}</p>
            </div>
          ))}
        </div>

        {/* Blessing Pills (horizontal touch scroll on mobile) */}
        <div style={{
          overflowX: "auto",
          WebkitOverflowScrolling: "touch",
          paddingBottom: "10px",
          marginBottom: "28px",
          scrollbarWidth: "none"
        }}>
          <div style={{ display: "flex", gap: "10px", width: "max-content" }}>
            {BLESSINGS.map((b, i) => (
              <div key={i} style={{
                borderRadius: "50px",
                padding: "8px 16px",
                fontSize: "0.78rem",
                background: "rgba(212,160,23,0.08)",
                border: "1px solid rgba(212,160,23,0.25)",
                color: "#c8a96e",
                whiteSpace: "nowrap"
              }}>
                {b}
              </div>
            ))}
          </div>
        </div>

        {/* Wish form */}
        <div style={{
          borderRadius: "20px",
          padding: "22px 18px",
          background: "rgba(212,160,23,0.06)",
          border: "1.5px solid rgba(212,160,23,0.25)"
        }}>
          <h3 style={{
            fontFamily: "'Cormorant Garamond',Georgia,serif",
            fontStyle: "italic",
            fontSize: "clamp(1.2rem,4.5vw,1.5rem)",
            margin: "0 0 16px",
            textAlign: "center",
            color: "#f5e6c8"
          }}>
            Leave Your Blessing 🪷
          </h3>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <input
              type="text"
              placeholder="Your Name (optional)"
              value={name}
              onChange={e => setName(e.target.value)}
              style={{
                width: "100%",
                borderRadius: "12px",
                padding: "12px 14px",
                fontSize: "0.85rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(212,160,23,0.25)",
                color: "#f5e6c8",
                outline: "none",
                boxSizing: "border-box"
              }}
            />
            <textarea
              placeholder="Write your wishes for Priyanka & Prakash..."
              value={wishText}
              onChange={e => setWishText(e.target.value)}
              rows={3}
              style={{
                width: "100%",
                borderRadius: "12px",
                padding: "12px 14px",
                fontSize: "0.85rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(212,160,23,0.25)",
                color: "#f5e6c8",
                outline: "none",
                resize: "none",
                boxSizing: "border-box"
              }}
            />
            <button
              type="submit"
              style={{
                width: "100%",
                padding: "14px 20px",
                borderRadius: "12px",
                fontWeight: 700,
                letterSpacing: "0.08em",
                fontSize: "0.9rem",
                background: "linear-gradient(135deg,#d4a017,#c47f00)",
                color: "#1a0800",
                border: "none",
                cursor: "pointer",
                boxShadow: "0 0 20px rgba(212,160,23,0.3)"
              }}
            >
              Send Blessings 🙏
            </button>
          </form>

          {/* Thanks message */}
          {showThanks && (
            <div style={{
              marginTop: "14px",
              textAlign: "center",
              borderRadius: "12px",
              padding: "10px",
              fontSize: "0.8rem",
              background: "rgba(212,160,23,0.12)",
              color: "#e8c87a",
              border: "1px solid rgba(212,160,23,0.35)"
            }}>
              🙏 Thank you! Your blessings are received with warmth and gratitude.
            </div>
          )}

          {/* User Submitted wishes */}
          {submitted.length > 0 && (
            <div style={{ marginTop: "16px", display: "flex", flexDirection: "column", gap: "10px" }}>
              {submitted.map((w, i) => (
                <div key={i} style={{
                  borderRadius: "12px",
                  padding: "10px 14px",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(212,160,23,0.12)"
                }}>
                  <p style={{ fontSize: "0.72rem", margin: "0 0 4px", color: "#d4a017", fontWeight: 600 }}>
                    💛 {w.name}
                  </p>
                  <p style={{ fontSize: "0.82rem", margin: 0, color: "#c8a96e" }}>{w.msg}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
