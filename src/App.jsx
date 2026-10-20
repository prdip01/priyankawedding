import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutHighlights from './components/AboutHighlights';
import ResearchSimulator from './components/ResearchSimulator';
import ProjectVault from './components/ProjectVault';
import Timeline from './components/Timeline';
import FanZone from './components/FanZone';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import BackgroundCanvas from './components/BackgroundCanvas';
import EasterEggModal from './components/EasterEggModal';

export default function App() {
  const [isMuted, setIsMuted] = useState(true);
  const [matrixMode, setMatrixMode] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);

  useEffect(() => {
    if (matrixMode) {
      document.body.classList.add('matrix-mode');
    } else {
      document.body.classList.remove('matrix-mode');
    }
  }, [matrixMode]);

  return (
    <div className={`min-h-screen relative font-sans ${matrixMode ? 'matrix-mode' : ''}`}>
      {/* Background Particle Canvas */}
      <BackgroundCanvas matrixMode={matrixMode} />

      {/* Custom Desktop Cursor Ring */}
      <CustomCursor />

      {/* Navigation Header */}
      <Navbar
        isMuted={isMuted}
        setIsMuted={setIsMuted}
        matrixMode={matrixMode}
        setMatrixMode={() => setIsTerminalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero />
        <AboutHighlights />
        <ResearchSimulator />
        <ProjectVault />
        <Timeline />
        <FanZone />
        <Gallery />
      </main>

      {/* Cyberpunk Footer */}
      <Footer />

      {/* Secret Easter Egg Terminal */}
      <EasterEggModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        matrixMode={matrixMode}
        setMatrixMode={setMatrixMode}
      />
    </div>
  );
}
