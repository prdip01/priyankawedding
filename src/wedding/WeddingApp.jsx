import React, { useState, useEffect } from "react";
import WeddingHero from "./WeddingHero";
import WeddingCouple from "./WeddingCouple";
import WeddingCeremony from "./WeddingCeremony";
import WeddingEvents from "./WeddingEvents";
import WeddingVenue from "./WeddingVenue";
import WeddingBlessings from "./WeddingBlessings";
import WeddingFooter from "./WeddingFooter";
import FloatingPetals from "./FloatingPetals";
import "./wedding.css";

export default function WeddingApp() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="wedding-root min-h-screen overflow-x-hidden">
      <FloatingPetals />
      <WeddingHero scrollY={scrollY} />
      <WeddingCouple />
      <WeddingCeremony />
      <WeddingEvents />
      <WeddingVenue />
      <WeddingBlessings />
      <WeddingFooter />
    </div>
  );
}
