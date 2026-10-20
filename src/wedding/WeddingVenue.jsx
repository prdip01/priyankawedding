import React, { useRef, useState, useEffect } from "react";

// Official Google Maps Direction URL to specific destination
// Fallback array ensures that on any browser or mobile OS, clicking opens cleanly
const MAPS_DIR_LINK = "https://www.google.com/maps/dir/?api=1&destination=M7F9%2BJ53%2C+Unnamed+Road%2C+Pailadi%2C+Jharkhand+827013";
const MAPS_APP_SHORTLINK = "https://maps.app.goo.gl/oWwtSVsoanPMJpqu6";
const OSM_EMBED = "https://www.openstreetmap.org/export/embed.html?bbox=86.2629175%2C23.6710187%2C86.2729175%2C23.6770187&layer=mapnik&marker=23.6740187%2C86.2679175";

function useInView(ref) {
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setV(true);
        obs.disconnect();
      }
    }, { threshold: 0.08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return v;
}

export default function WeddingVenue() {
  const headRef = useRef(null);
  const headVis = useInView(headRef);
  const secRef = useRef(null);
  const secVis = useInView(secRef);

  const handleOpenDirections = (e) => {
    // Allows seamless redirection on all mobile browsers (Chrome, Safari, Firefox, in-app browsers)
    window.open(MAPS_DIR_LINK, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="venue" style={{
      padding: "80px 0",
      background: "linear-gradient(180deg,#1a0a00 0%,#0d0500 100%)",
      position: "relative",
      overflow: "hidden"
    }}>
      <div style={{ maxWidth: "680px", margin: "0 auto", padding: "0 16px" }}>

        {/* Heading */}
        <div ref={headRef} style={{
          textAlign: "center",
          marginBottom: "40px",
          opacity: headVis ? 1 : 0,
          transform: headVis ? "translateY(0)" : "translateY(28px)",
          transition: "all 0.7s ease"
        }}>
          <div style={{ fontSize: "2.2rem", marginBottom: "8px", color: "#d4a017" }}>📍</div>
          <h2 style={{
            fontFamily: "'Cormorant Garamond',Georgia,serif",
            fontStyle: "italic",
            fontSize: "clamp(2rem,7vw,3rem)",
            color: "#f5e6c8",
            margin: "0 0 8px",
            textShadow: "0 0 30px rgba(212,160,23,0.3)"
          }}>Venue & Directions</h2>
          <p style={{
            fontSize: "clamp(0.6rem,2.5vw,0.72rem)",
            letterSpacing: "0.3em",
            color: "#c8a96e",
            margin: "0 0 12px"
          }}>WEDDING VENUE · MANSHA MANDIR</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            <div style={{ height: "1px", width: "50px", background: "linear-gradient(to right,transparent,#d4a017)" }} />
            <span style={{ color: "#d4a017" }}>✿</span>
            <div style={{ height: "1px", width: "50px", background: "linear-gradient(to left,transparent,#d4a017)" }} />
          </div>
        </div>

        {/* Venue card */}
        <div ref={secRef} style={{
          opacity: secVis ? 1 : 0,
          transform: secVis ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s ease"
        }}>
          {/* Info block */}
          <div style={{
            borderRadius: "20px",
            padding: "24px 20px",
            marginBottom: "20px",
            background: "rgba(212,160,23,0.07)",
            border: "1.5px solid rgba(212,160,23,0.25)",
            backdropFilter: "blur(8px)"
          }}>
            {/* Venue title */}
            <div style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "20px" }}>
              <div style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "1.6rem",
                background: "rgba(212,160,23,0.15)",
                border: "1px solid rgba(212,160,23,0.4)"
              }}>🛕</div>
              <div>
                <h3 style={{ fontSize: "clamp(1.1rem,4.5vw,1.35rem)", fontWeight: 600, color: "#f5e6c8", margin: 0 }}>
                  Mansha Mandir
                </h3>
                <p style={{ fontSize: "0.75rem", color: "#a88050", margin: "2px 0 0", letterSpacing: "0.1em" }}>
                  Official Wedding Ceremony & Reception
                </p>
              </div>
            </div>

            {/* Details list */}
            <div style={{ display: "flex", flexDirection: "column", gap: "14px", marginBottom: "24px" }}>
              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.3rem", marginTop: "2px", flexShrink: 0 }}>🗓️</span>
                <div>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#a88050", margin: "0 0 3px" }}>WEDDING DATE</p>
                  <p style={{ fontSize: "clamp(0.85rem,3.2vw,0.95rem)", color: "#f5e6c8", margin: 0, fontWeight: 600 }}>
                    Tuesday, 24 November 2026
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.3rem", marginTop: "2px", flexShrink: 0 }}>📍</span>
                <div>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#a88050", margin: "0 0 3px" }}>EXACT VENUE ADDRESS</p>
                  <p style={{ fontSize: "clamp(0.85rem,3.2vw,0.95rem)", color: "#f5e6c8", margin: 0, fontWeight: 600 }}>
                    M7F9+J53, Unnamed Road, Pailadi, Jharkhand 827013
                  </p>
                  <p style={{ fontSize: "0.75rem", color: "#d4a017", margin: "4px 0 0" }}>
                    Mansha Mandir Grounds
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", gap: "12px", alignItems: "flex-start" }}>
                <span style={{ fontSize: "1.3rem", marginTop: "2px", flexShrink: 0 }}>🛕</span>
                <div>
                  <p style={{ fontSize: "0.65rem", letterSpacing: "0.2em", color: "#a88050", margin: "0 0 3px" }}>CEREMONY VENUE</p>
                  <p style={{ fontSize: "clamp(0.85rem,3.2vw,0.95rem)", color: "#f5e6c8", margin: 0, fontWeight: 500 }}>
                    Sacred Temple Grounds & Mandap
                  </p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "0 0 20px" }}>
              <div style={{ height: "1px", flex: 1, background: "rgba(212,160,23,0.2)" }} />
              <span style={{ color: "#d4a017", fontSize: "0.8rem" }}>✦</span>
              <div style={{ height: "1px", flex: 1, background: "rgba(212,160,23,0.2)" }} />
            </div>

            {/* BIG PROMINENT GET DIRECTIONS BUTTON */}
            <a
              href={MAPS_DIR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleOpenDirections}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                width: "100%",
                padding: "18px 20px",
                borderRadius: "16px",
                fontWeight: 700,
                letterSpacing: "0.05em",
                fontSize: "clamp(0.95rem,3.8vw,1.05rem)",
                background: "linear-gradient(135deg,#e5a919 0%,#c47f00 100%)",
                color: "#1a0800",
                textDecoration: "none",
                boxShadow: "0 0 35px rgba(212,160,23,0.5),0 6px 20px rgba(0,0,0,0.5)",
                WebkitTapHighlightColor: "transparent",
                cursor: "pointer",
                textAlign: "center",
                boxSizing: "border-box"
              }}
            >
              <span style={{ fontSize: "1.3rem" }}>📍</span>
              <span>Get Directions · Wedding Location</span>
            </a>
            <p style={{ textAlign: "center", fontSize: "0.74rem", color: "#e8c87a", margin: "10px 0 0" }}>
              Click to get directions to the wedding location & address
            </p>
          </div>

          {/* Interactive preview map */}
          <div style={{
            borderRadius: "20px",
            overflow: "hidden",
            border: "1.5px solid rgba(212,160,23,0.25)",
            boxShadow: "0 0 30px rgba(212,160,23,0.08)",
            marginBottom: "16px",
            background: "#160a00"
          }}>
            <iframe
              title="Mansha Mandir Location Map"
              src={OSM_EMBED}
              width="100%"
              height="260"
              style={{ border: "none", display: "block" }}
              loading="lazy"
            />
          </div>

          {/* Quick dual buttons: Google Maps Dir + Shortlink */}
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", marginBottom: "20px" }}>
            <a
              href={MAPS_DIR_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 20px",
                borderRadius: "50px",
                fontSize: "0.85rem",
                fontWeight: 600,
                border: "1.5px solid rgba(212,160,23,0.4)",
                color: "#d4a017",
                background: "rgba(212,160,23,0.08)",
                textDecoration: "none",
                WebkitTapHighlightColor: "transparent"
              }}
            >
              <span>🚗</span>
              <span>Start GPS Navigation</span>
            </a>

            <a
              href={MAPS_APP_SHORTLINK}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "12px 20px",
                borderRadius: "50px",
                fontSize: "0.85rem",
                fontWeight: 600,
                border: "1.5px solid rgba(212,160,23,0.25)",
                color: "#c8a96e",
                background: "rgba(255,255,255,0.03)",
                textDecoration: "none",
                WebkitTapHighlightColor: "transparent"
              }}
            >
              <span>🗺️</span>
              <span>Open in Google Maps App</span>
            </a>
          </div>

          {/* Travel Tips */}
          <div style={{
            borderRadius: "16px",
            padding: "18px 20px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(212,160,23,0.12)"
          }}>
            <p style={{ fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.2em", color: "#c8a96e", margin: "0 0 12px" }}>
              VENUE & TRAVEL GUIDE
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", gap: "10px", fontSize: "0.82rem", color: "#a88050", alignItems: "flex-start" }}>
                <span>📍</span>
                <span>Address: M7F9+J53, Unnamed Road, Pailadi, Jharkhand 827013</span>
              </div>
              <div style={{ display: "flex", gap: "10px", fontSize: "0.82rem", color: "#a88050", alignItems: "flex-start" }}>
                <span>🚗</span>
                <span>Dedicated visitor and family parking available on premises.</span>
              </div>
              <div style={{ display: "flex", gap: "10px", fontSize: "0.82rem", color: "#a88050", alignItems: "flex-start" }}>
                <span>🚉</span>
                <span>Nearest Railway Junction: Dhanbad Junction (turn-by-turn navigation available).</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
