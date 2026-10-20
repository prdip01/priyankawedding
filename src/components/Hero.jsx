import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight, Code, Brain, Cpu, Rocket, ChevronDown } from 'lucide-react';
import { audioFx } from '../utils/audio';

export default function Hero() {
  const titles = [
    'Data Scientist & AI Builder',
    'Full-Stack Web Developer',
    'CNN & DermAI 93% Specialist',
    'LLM LoRA & PEFT Researcher',
  ];

  const [titleIdx, setTitleIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIdx((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'Live Applications', value: '10+' },
    { label: 'Industry Internships', value: '02' },
    { label: 'DermAI CNN Accuracy', value: '93%' },
    { label: 'AI & ML Training', value: '01' },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex flex-col justify-center items-center overflow-hidden">
      {/* Glow Blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00f3ff]/20 via-[#9d4edd]/20 to-[#ff007f]/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[#00f3ff]/40 text-[#00f3ff] text-xs sm:text-sm font-semibold mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(0,243,255,0.25)] animate-float">
          <Sparkles className="w-4 h-4 animate-spin-slow" />
          <span>Interactive Fan Experience & Portfolio</span>
        </div>

        {/* Main Hero Title - Strictly PRADEEP KUMAR */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold font-display tracking-tight text-white mb-6 leading-tight">
          <span className="block text-gradient-cyber drop-shadow-[0_0_40px_rgba(0,243,255,0.4)]">
            PRADEEP KUMAR
          </span>
        </h1>

        {/* Animated Subtitle Switcher */}
        <div className="h-10 sm:h-12 flex items-center justify-center mb-8">
          <p className="text-xl sm:text-3xl font-medium text-slate-300 transition-all duration-500 ease-in-out">
            <span className="text-[#00f3ff] font-mono">&gt; </span>
            <span className="border-b-2 border-[#00f3ff] pb-1">{titles[titleIdx]}</span>
          </p>
        </div>

        {/* Quote / Mission Statement */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-light">
          &ldquo;Code. Create. Simplify. I build technology that makes everyday tasks easier.&rdquo;
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            onClick={() => audioFx.playClick()}
            onMouseEnter={() => audioFx.playHover()}
            className="group relative px-8 py-4 rounded-2xl bg-gradient-to-r from-[#00f3ff] via-[#9d4edd] to-[#ff007f] text-white font-bold text-base shadow-[0_0_30px_rgba(0,243,255,0.4)] hover:shadow-[0_0_50px_rgba(255,0,127,0.7)] hover:scale-105 active:scale-95 transition-all flex items-center gap-3 overflow-hidden"
          >
            <span>Explore Work Vault</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#fanzone"
            onClick={() => audioFx.playClick()}
            onMouseEnter={() => audioFx.playHover()}
            className="px-8 py-4 rounded-2xl bg-slate-900/80 border border-white/15 text-slate-200 hover:text-white font-bold text-base hover:bg-white/10 hover:border-[#00f3ff]/50 backdrop-blur-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-3"
          >
            <Brain className="w-5 h-5 text-[#00f3ff]" />
            <span>Launch Fan Zone</span>
          </a>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => audioFx.playHover()}
              className="p-5 rounded-2xl glass-panel glass-panel-hover border border-white/10 text-center relative overflow-hidden group"
            >
              <div className="absolute -right-6 -bottom-6 w-20 h-20 bg-[#00f3ff]/10 rounded-full blur-xl group-hover:bg-[#ff007f]/20 transition-colors" />
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-gradient-cyber mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Tech Decorative Badges */}
      <div className="hidden lg:block absolute left-10 top-1/3 p-4 rounded-2xl glass-panel border border-[#00f3ff]/30 text-[#00f3ff] animate-float shadow-[0_0_20px_rgba(0,243,255,0.2)]">
        <div className="flex items-center gap-2 font-mono text-xs font-bold">
          <Code className="w-4 h-4" />
          <span>Python · PyTorch</span>
        </div>
      </div>

      <div className="hidden lg:block absolute right-10 top-1/2 p-4 rounded-2xl glass-panel border border-[#ff007f]/30 text-[#ff007f] animate-float-delayed shadow-[0_0_20px_rgba(255,0,127,0.2)]">
        <div className="flex items-center gap-2 font-mono text-xs font-bold">
          <Cpu className="w-4 h-4" />
          <span>LoRA / PEFT LLMs</span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center text-slate-400 text-xs gap-2">
        <span className="tracking-widest uppercase text-[10px] font-mono text-[#00f3ff]">Scroll To Explore</span>
        <ChevronDown className="w-5 h-5 text-[#00f3ff] animate-bounce" />
      </div>
    </section>
  );
}
