import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Terminal, Menu, X, Sparkles } from 'lucide-react';
import { audioFx } from '../utils/audio';

export default function Navbar({ isMuted, setIsMuted, matrixMode, setMatrixMode }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Research', href: '#research' },
    { name: 'Projects', href: '#projects' },
    { name: 'Timeline', href: '#timeline' },
    { name: 'Fan Zone', href: '#fanzone' },
    { name: 'Gallery', href: '#gallery' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Scroll spy logic
      const sections = ['hero', 'about', 'research', 'projects', 'timeline', 'fanzone', 'gallery'];
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleAudioToggle = () => {
    const mutedState = audioFx.toggleMute();
    setIsMuted(mutedState);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    audioFx.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-[#08091a]/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          className="group flex items-center gap-3 text-xl font-bold font-display tracking-tight text-white"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00f3ff] via-[#9d4edd] to-[#ff007f] p-[2px] transition-transform duration-300 group-hover:scale-110">
            <div className="w-full h-full bg-[#08091a] rounded-[10px] flex items-center justify-center font-mono font-extrabold text-[#00f3ff]">
              PK
            </div>
          </div>
          <span className="bg-gradient-to-r from-white via-slate-200 to-[#00f3ff] bg-clip-text text-transparent group-hover:text-cyan-300 transition-colors">
            PRADEEP KUMAR
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-slate-900/40 p-1.5 rounded-full border border-white/10 backdrop-blur-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => audioFx.playHover()}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#00f3ff]/20 to-[#9d4edd]/20 rounded-full border border-[#00f3ff]/40 shadow-[0_0_15px_rgba(0,243,255,0.3)] -z-10" />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right Action Icons: Audio FX + Matrix Mode + Contact CTA */}
        <div className="flex items-center gap-3">
          {/* Sound Toggle */}
          <button
            onClick={handleAudioToggle}
            onMouseEnter={() => audioFx.playHover()}
            title={isMuted ? 'Enable Sound FX' : 'Mute Sound FX'}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 hover:border-[#00f3ff]/40 hover:bg-[#00f3ff]/10 text-slate-300 hover:text-[#00f3ff] transition-all"
          >
            {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5 text-[#00f3ff] animate-pulse" />}
          </button>

          {/* Matrix Secret Toggle */}
          <button
            onClick={() => {
              audioFx.playSecret();
              setMatrixMode(!matrixMode);
            }}
            onMouseEnter={() => audioFx.playHover()}
            title="Toggle Secret Matrix Skin"
            className={`p-2.5 rounded-xl border transition-all ${
              matrixMode
                ? 'bg-[#00ff66]/20 border-[#00ff66] text-[#00ff66] shadow-[0_0_15px_#00ff66]'
                : 'bg-white/5 border-white/10 hover:border-[#ff007f]/40 text-slate-300 hover:text-[#ff007f]'
            }`}
          >
            <Terminal className="w-5 h-5" />
          </button>

          {/* Primary CTA */}
          <a
            href="https://prradeepp.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => audioFx.playClick()}
            onMouseEnter={() => audioFx.playHover()}
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-[#00f3ff] via-[#9d4edd] to-[#ff007f] text-white shadow-[0_0_25px_rgba(0,243,255,0.4)] hover:shadow-[0_0_35px_rgba(255,0,127,0.6)] hover:scale-105 active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4" />
            <span>Main Website</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              audioFx.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#08091a]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-3 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-4 py-3 rounded-xl text-base font-semibold text-slate-200 hover:text-[#00f3ff] hover:bg-white/5 transition-all"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://prradeepp.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-xl font-bold text-center bg-gradient-to-r from-[#00f3ff] to-[#9d4edd] text-white shadow-lg"
            >
              Visit Original Site ↗
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
