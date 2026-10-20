import React, { useState } from 'react';
import { ExternalLink, Github, Code, Sparkles, FolderGit2, X, Eye } from 'lucide-react';
import { audioFx } from '../utils/audio';

export default function ProjectVault() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'DermAI – Skin Cancer Diagnostic Engine',
      category: 'ai',
      desc: 'Deep Convolutional Neural Network trained on HAM10000 skin lesion dataset reaching 93% classification accuracy with real-time web inference UI.',
      tags: ['Python', 'PyTorch', 'CNN', 'React', 'FastAPI'],
      liveUrl: 'https://prradeepp.netlify.app/',
      githubUrl: 'https://github.com',
      stats: '93% Accuracy · 10k+ Images',
      gradient: 'from-[#00f3ff] via-[#9d4edd] to-[#ff007f]',
    },
    {
      id: 2,
      title: 'Low-Resource LLM LoRA Fine-Tuner',
      category: 'ai',
      desc: 'Parameter-Efficient Fine-Tuning pipeline using Quantized LoRA (QLoRA) enabling 7B LLM adaptation on single 8GB consumer GPUs.',
      tags: ['Python', 'HuggingFace', 'LoRA', 'PEFT', 'PyTorch'],
      liveUrl: 'https://prradeepp.netlify.app/',
      githubUrl: 'https://github.com',
      stats: '90% VRAM Reduction',
      gradient: 'from-[#9d4edd] via-[#ff007f] to-[#ffd700]',
    },
    {
      id: 3,
      title: 'AI Productivity Hub & Automation Workflows',
      category: 'web',
      desc: 'Full-stack Web Application featuring 10+ integrated web tools to simplify daily developer and data science workflows.',
      tags: ['React', 'JavaScript', 'Tailwind', 'REST APIs', 'Vite'],
      liveUrl: 'https://prradeepp.netlify.app/',
      githubUrl: 'https://github.com',
      stats: '10+ Live Apps Embedded',
      gradient: 'from-[#00ff88] via-[#00f3ff] to-[#9d4edd]',
    },
    {
      id: 4,
      title: 'Real-Time Data Science Dashboard',
      category: 'web',
      desc: 'Interactive visual telemetry platform rendering live streaming charts, anomaly detection, and predictive analytics insights.',
      tags: ['React', 'Chart.js', 'Python API', 'SQL', 'WebSockets'],
      liveUrl: 'https://prradeepp.netlify.app/',
      githubUrl: 'https://github.com',
      stats: '60 FPS Live Streaming',
      gradient: 'from-[#00f3ff] via-[#00ff88] to-[#9d4edd]',
    },
  ];

  const filtered = activeFilter === 'all' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#00f3ff]/40 text-[#00f3ff] text-xs font-mono font-bold mb-4">
              <FolderGit2 className="w-4 h-4" />
              <span>FEATURED WORK & APPS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight">
              Project <span className="text-gradient-cyber">Vault</span>
            </h2>
          </div>

          {/* Filter Chips */}
          <div className="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'ai', label: 'AI / Machine Learning' },
              { id: 'web', label: 'Web Applications' },
            ].map((chip) => (
              <button
                key={chip.id}
                onClick={() => {
                  audioFx.playClick();
                  setActiveFilter(chip.id);
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeFilter === chip.id
                    ? 'bg-gradient-to-r from-[#00f3ff] to-[#9d4edd] text-white shadow-[0_0_15px_rgba(0,243,255,0.3)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {chip.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((proj) => (
            <div
              key={proj.id}
              onMouseEnter={() => audioFx.playHover()}
              className="group rounded-3xl glass-panel glass-panel-hover border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-300"
            >
              {/* Top Accent Gradient Bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${proj.gradient}`} />

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono font-semibold text-[#00f3ff]">
                    {proj.stats}
                  </span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => {
                        audioFx.playClick();
                        setSelectedProject(proj);
                      }}
                      title="Quick Preview"
                      className="p-2 rounded-xl bg-white/5 hover:bg-[#00f3ff]/20 hover:text-[#00f3ff] text-slate-300 transition-colors"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => audioFx.playClick()}
                      title="View Live App"
                      className="p-2 rounded-xl bg-white/5 hover:bg-[#ff007f]/20 hover:text-[#ff007f] text-slate-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#00f3ff] transition-colors mb-3">
                  {proj.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                  {proj.desc}
                </p>
              </div>

              {/* Tag Badges */}
              <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/10">
                {proj.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-slate-900 border border-white/10 text-[11px] font-mono font-medium text-slate-300"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl">
          <div className="max-w-2xl w-full bg-[#08091a] border border-[#00f3ff]/40 rounded-3xl p-8 relative shadow-[0_0_50px_rgba(0,243,255,0.3)]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="inline-block px-3 py-1 rounded-full bg-[#00f3ff]/10 text-[#00f3ff] font-mono text-xs font-bold mb-4">
              PROJECT TELEMETRY PREVIEW
            </div>
            <h3 className="text-3xl font-extrabold font-display text-white mb-4">
              {selectedProject.title}
            </h3>
            <p className="text-slate-300 text-base leading-relaxed mb-6">
              {selectedProject.desc}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {selectedProject.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-[#00f3ff]">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <a
                href={selectedProject.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-xl font-bold text-center bg-gradient-to-r from-[#00f3ff] to-[#9d4edd] text-white shadow-lg flex items-center justify-center gap-2"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
