import React, { useState } from 'react';
import { User, Award, CheckCircle2, Terminal, Code2, Database, Cpu, Layers } from 'lucide-react';
import { audioFx } from '../utils/audio';

export default function AboutHighlights() {
  const [activeTab, setActiveTab] = useState('all');

  const skills = [
    { name: 'Python', category: 'ai', icon: Code2, desc: 'Advanced Machine Learning & Data Analytics' },
    { name: 'Machine Learning', category: 'ai', icon: Cpu, desc: 'PyTorch, Scikit-Learn, Deep CNNs, PEFT' },
    { name: 'Data Science', category: 'ai', icon: Database, desc: 'Statistical Modeling, Pandas, Data Cleaning' },
    { name: 'React', category: 'web', icon: Layers, desc: 'Modern SPA UI, Hooks, State Management' },
    { name: 'JavaScript', category: 'web', icon: Code2, desc: 'ES6+ Async, DOM, Modern Web APIs' },
    { name: 'SQL', category: 'web', icon: Database, desc: 'Relational Schemas, Complex Queries' },
    { name: 'Git & GitHub', category: 'dev', icon: Terminal, desc: 'Version Control, Collaborative Workflows' },
    { name: 'Full-Stack Web Dev', category: 'web', icon: Layers, desc: 'End-to-End Responsive Applications' },
  ];

  const traits = [
    'Clean Code Architect',
    'Relentless Problem Solver',
    'Quick Learner & Adapter',
    'Collaborative Team Player',
  ];

  const filteredSkills = activeTab === 'all' ? skills : skills.filter((s) => s.category === activeTab);

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#9d4edd]/40 text-[#9d4edd] text-xs font-mono font-bold mb-4">
            <User className="w-4 h-4" />
            <span>BIOGRAPHY & SKILL MATRIX</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Architecting <span className="text-gradient-cyber">Intelligent Systems</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            B.Tech Computer Science student dedicated to creating elegant machine learning pipelines and high-performance web applications.
          </p>
        </div>

        {/* Overview Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Education & Focus */}
          <div
            onMouseEnter={() => audioFx.playHover()}
            className="p-8 rounded-3xl glass-panel glass-panel-hover border border-white/10 relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#00f3ff]/20 to-[#9d4edd]/20 border border-[#00f3ff]/30 flex items-center justify-center text-[#00f3ff] mb-6">
              <Award className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-3">Academic Excellence</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Pursuing B.Tech in Computer Science with focus on Machine Learning, Deep Neural Networks, and modern web architectures.
            </p>
            <div className="inline-block px-3 py-1 rounded-full bg-[#00f3ff]/10 text-[#00f3ff] font-mono text-xs font-semibold">
              B.Tech CS Student
            </div>
          </div>

          {/* Card 2: Industry Track Record */}
          <div
            onMouseEnter={() => audioFx.playHover()}
            className="p-8 rounded-3xl glass-panel glass-panel-hover border border-white/10 relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#9d4edd]/20 to-[#ff007f]/20 border border-[#ff007f]/30 flex items-center justify-center text-[#ff007f] mb-6">
              <Terminal className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-3">Proven Experience</h3>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              Completed 2 industry internships and 1 specialized AI & ML intensive training program, building 10+ production-ready apps.
            </p>
            <div className="inline-block px-3 py-1 rounded-full bg-[#ff007f]/10 text-[#ff007f] font-mono text-xs font-semibold">
              2 Internships Completed
            </div>
          </div>

          {/* Card 3: Core Traits */}
          <div
            onMouseEnter={() => audioFx.playHover()}
            className="p-8 rounded-3xl glass-panel glass-panel-hover border border-white/10 relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-[#00ff88]/20 to-[#00f3ff]/20 border border-[#00ff88]/30 flex items-center justify-center text-[#00ff88] mb-6">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold font-display text-white mb-3">Engineering Mindset</h3>
            <div className="space-y-2 mb-4">
              {traits.map((trait, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00ff88]" />
                  <span>{trait}</span>
                </div>
              ))}
            </div>
            <div className="inline-block px-3 py-1 rounded-full bg-[#00ff88]/10 text-[#00ff88] font-mono text-xs font-semibold">
              High Impact Delivery
            </div>
          </div>
        </div>

        {/* Skills Filter & Grid */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <h3 className="text-2xl font-bold font-display text-white">Technical Arsenal</h3>

            {/* Category Filter Chips */}
            <div className="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
              {[
                { id: 'all', label: 'All Skills' },
                { id: 'ai', label: 'AI & Data Science' },
                { id: 'web', label: 'Web Stack' },
                { id: 'dev', label: 'Tools' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    audioFx.playClick();
                    setActiveTab(tab.id);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-[#00f3ff] text-slate-950 shadow-[0_0_15px_#00f3ff]'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {filteredSkills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <div
                  key={idx}
                  onMouseEnter={() => audioFx.playHover()}
                  className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/10 group relative"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2.5 rounded-xl bg-white/5 text-[#00f3ff] group-hover:bg-[#00f3ff] group-hover:text-slate-950 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-white text-base group-hover:text-[#00f3ff] transition-colors">
                      {skill.name}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">{skill.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
