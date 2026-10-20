import React from 'react';
import { ArrowUp, Github, Linkedin, Instagram, Mail, Sparkles, Heart } from 'lucide-react';
import { audioFx } from '../utils/audio';

export default function Footer() {
  const scrollToTop = () => {
    audioFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#04050e] border-t border-white/10 pt-16 pb-12 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 text-2xl font-bold font-display text-white">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00f3ff] via-[#9d4edd] to-[#ff007f] p-[2px]">
                <div className="w-full h-full bg-[#08091a] rounded-[10px] flex items-center justify-center font-mono font-extrabold text-[#00f3ff]">
                  PK
                </div>
              </div>
              <span className="text-gradient-cyber">PRADEEP KUMAR</span>
            </div>
            <p className="text-slate-300 text-sm max-w-md font-light leading-relaxed">
              Data Scientist & AI Builder specializing in Deep CNNs, LoRA PEFT LLM fine-tuning, and full-stack web applications.
            </p>
            <div className="text-xs text-slate-400 font-mono">
              &ldquo;Code. Create. Simplify. Building technology that makes everyday tasks easier.&rdquo;
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white font-display mb-4 text-base">Navigation Vault</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              {['about', 'research', 'projects', 'timeline', 'fanzone', 'gallery'].map((sec) => (
                <li key={sec}>
                  <a
                    href={`#${sec}`}
                    onClick={() => audioFx.playClick()}
                    onMouseEnter={() => audioFx.playHover()}
                    className="hover:text-[#00f3ff] transition-colors capitalize flex items-center gap-1.5"
                  >
                    <span className="text-[#00f3ff] font-mono">&gt;</span> {sec}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials & Official Links */}
          <div>
            <h4 className="font-bold text-white font-display mb-4 text-base">Connect & Live Sites</h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://prradeepp.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => audioFx.playClick()}
                onMouseEnter={() => audioFx.playHover()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs hover:border-[#00f3ff]/50 hover:bg-[#00f3ff]/10 transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#00f3ff]" />
                <span>Original Site (prradeepp.netlify.app)</span>
              </a>

              <div className="flex items-center gap-3 pt-2">
                {[
                  { icon: Github, href: 'https://github.com', label: 'GitHub' },
                  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
                  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
                  { icon: Mail, href: 'mailto:pradeep@example.com', label: 'Email' },
                ].map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={idx}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => audioFx.playClick()}
                      onMouseEnter={() => audioFx.playHover()}
                      title={s.label}
                      className="p-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00f3ff] hover:border-[#00f3ff]/40 hover:bg-[#00f3ff]/10 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-[#ff007f] text-[#ff007f]" />
            <span>for Pradeep Kumar · Data Scientist & AI Builder</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400 font-mono text-[11px]">
              Unofficial Interactive Fan Showcase & Portfolio
            </span>
            <button
              onClick={scrollToTop}
              title="Back to Top"
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-[#00f3ff] hover:border-[#00f3ff] transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
