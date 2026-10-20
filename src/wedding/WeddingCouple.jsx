import React, { useRef, useState, useEffect } from "react";

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        obs.disconnect();
      }
    }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return v;
}

export default function WeddingCouple() {
  const headRef = useRef(null);
  const headVis = useInView(headRef);
  const cardRef = useRef(null);
  const cardVis = useInView(cardRef);

  return (
    <section id="couple" style={{
      padding: "70px 0 80px",
      background: "linear-gradient(180deg, #1a0800 0%, #2a0f02 50%, #1a0800 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Background soft ambient radial glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "min(90vw, 600px)",
        height: "min(90vw, 600px)",
        background: "radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 70%)",
        pointerEvents: "none"
      }} />

      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "0 16px", position: "relative", zIndex: 1 }}>
        {/* Section Heading */}
        <div ref={headRef} style={{
          textAlign: "center",
          marginBottom: "36px",
          opacity: headVis ? 1 : 0,
          transform: headVis ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.8s ease"
        }}>
          <div style={{ fontSize: "2rem", marginBottom: "6px", color: "#d4a017" }}>💐</div>
          <p style={{
            fontSize: "clamp(0.6rem,2.5vw,0.72rem)",
            letterSpacing: "0.3em",
            color: "#c8a96e",
            margin: "0 0 8px",
            fontWeight: 400
          }}>
            TOGETHER IN LOVE & SACRED BLESSINGS
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontStyle: "italic",
            fontSize: "clamp(2.2rem, 7.5vw, 3.4rem)",
            color: "#f5e6c8",
            margin: "0 0 10px",
            textShadow: "0 0 35px rgba(212,160,23,0.3)"
          }}>
            The Bride & The Groom
          </h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", margin: "0 auto" }}>
            <div style={{ height: "1px", width: "50px", background: "linear-gradient(to right, transparent, #d4a017)" }} />
            <span style={{ color: "#d4a017", fontSize: "0.9rem" }}>✦</span>
            <span style={{ color: "#d4a017", fontSize: "1.1rem" }}>✿</span>
            <span style={{ color: "#d4a017", fontSize: "0.9rem" }}>✦</span>
            <div style={{ height: "1px", width: "50px", background: "linear-gradient(to left, transparent, #d4a017)" }} />
          </div>
        </div>

        {/* Couple Showcase Card */}
        <div ref={cardRef} style={{
          opacity: cardVis ? 1 : 0,
          transform: cardVis ? "translateY(0) scale(1)" : "translateY(30px) scale(0.98)",
          transition: "all 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
          background: "linear-gradient(145deg, rgba(212,160,23,0.08), rgba(60,20,5,0.4))",
          borderRadius: "28px",
          border: "1.5px solid rgba(212,160,23,0.35)",
          boxShadow: "0 15px 45px rgba(0,0,0,0.5), 0 0 40px rgba(212,160,23,0.15)",
          padding: "clamp(18px, 4vw, 32px)",
          backdropFilter: "blur(10px)"
        }}>
          {/* Main Original Portrait Image without altering faces */}
          <div style={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(212,160,23,0.25)",
            boxShadow: "0 8px 30px rgba(0,0,0,0.35)"
          }}>
            <img
              src="/couple.png"
              alt="Prakash Kumar (Groom) and Priyanka Kumari (Bride)"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "contain"
              }}
              loading="eager"
            />
          </div>

          {/* Couple Names & Blessings Bar */}
          <div style={{
            marginTop: "24px",
            textAlign: "center",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr",
            alignItems: "center",
            gap: "12px",
            paddingTop: "14px",
            borderTop: "1px solid rgba(212,160,23,0.2)"
          }}>
            {/* Groom side */}
            <div>
              <p style={{
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                color: "#e5a919",
                margin: "0 0 4px",
                fontWeight: 600
              }}>
                GROOM
              </p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.1rem, 4vw, 1.6rem)",
                color: "#f5e6c8",
                margin: 0,
                fontStyle: "italic"
              }}>
                Prakash Kumar
              </h3>
            </div>

            {/* Sacred Knot Symbol */}
            <div style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              background: "rgba(212,160,23,0.15)",
              border: "1px solid rgba(212,160,23,0.45)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.2rem",
              color: "#d4a017",
              boxShadow: "0 0 20px rgba(212,160,23,0.3)"
            }}>
              ❤
            </div>

            {/* Bride side */}
            <div>
              <p style={{
                fontSize: "0.65rem",
                letterSpacing: "0.25em",
                color: "#ff8c94",
                margin: "0 0 4px",
                fontWeight: 600
              }}>
                BRIDE
              </p>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "clamp(1.1rem, 4vw, 1.6rem)",
                color: "#f5e6c8",
                margin: 0,
                fontStyle: "italic"
              }}>
                Priyanka Kumari
              </h3>
            </div>
          </div>

          {/* Sanskrit Vedic blessing banner */}
          <div style={{
            marginTop: "20px",
            borderRadius: "16px",
            padding: "12px 18px",
            textAlign: "center",
            background: "rgba(212,160,23,0.06)",
            border: "1px solid rgba(212,160,23,0.2)"
          }}>
            <p style={{
              fontFamily: "serif",
              fontSize: "clamp(0.95rem, 3.5vw, 1.15rem)",
              color: "#f5e6c8",
              margin: "0 0 4px"
            }}>
              ॥ ॐ श्री गणेशाय नमः ॥
            </p>
            <p style={{
              fontSize: "clamp(0.72rem, 2.5vw, 0.82rem)",
              color: "#c8a96e",
              margin: 0,
              fontStyle: "italic"
            }}>
              "Two souls united by destiny, blessed by tradition and bound in love forever."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
