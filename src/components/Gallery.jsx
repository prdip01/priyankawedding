import React, { useState } from 'react';
import { Image, Maximize2, X, Sparkles, Layers } from 'lucide-react';
import { audioFx } from '../utils/audio';

export default function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: 'DermAI CNN Classifier Output',
      category: 'Research',
      caption: 'HAM10000 Skin Lesion Feature Extraction Map & Diagnostic Matrix (93% Accuracy).',
      bgGradient: 'from-[#00f3ff]/40 to-[#9d4edd]/40',
      icon: '🔬',
    },
    {
      id: 2,
      title: 'LoRA PEFT LLM Fine-Tuning Benchmarks',
      category: 'Research',
      caption: 'Low-rank matrix decomposition parameter graph reducing VRAM consumption by 90%.',
      bgGradient: 'from-[#9d4edd]/40 to-[#ff007f]/40',
      icon: '⚡',
    },
    {
      id: 3,
      title: 'Full-Stack Web App Telemetry',
      category: 'Web Dev',
      caption: 'Live streaming WebSocket dashboard with low latency metrics rendering.',
      bgGradient: 'from-[#00ff88]/40 to-[#00f3ff]/40',
      icon: '🌐',
    },
    {
      id: 4,
      title: '10+ Live Apps Showcase Architecture',
      category: 'Projects',
      caption: 'Modular micro-frontend web applications built with React, Vite, and REST APIs.',
      bgGradient: 'from-[#ff007f]/40 to-[#ffd700]/40',
      icon: '🚀',
    },
    {
      id: 5,
      title: 'AI Machine Learning Pipeline Workflow',
      category: 'AI Pipeline',
      caption: 'Data cleaning, feature scaling, model training, and automated evaluation loop.',
      bgGradient: 'from-[#00f3ff]/40 to-[#ff007f]/40',
      icon: '🤖',
    },
    {
      id: 6,
      title: 'Python & PyTorch Data Science Notebooks',
      category: 'Data Science',
      caption: 'Exploratory data analysis, statistical tests, and loss curve visualizations.',
      bgGradient: 'from-[#9d4edd]/40 to-[#00ff88]/40',
      icon: '📊',
    },
  ];

  return (
    <section id="gallery" className="py-24 relative z-10 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#00f3ff]/40 text-[#00f3ff] text-xs font-mono font-bold mb-4">
            <Image className="w-4 h-4" />
            <span>VISUAL HIGHLIGHTS GALLERY</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Visual <span className="text-gradient-cyber">Showcase</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            High-resolution visual snapshots of research models, web interfaces, and analytics tools.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                audioFx.playClick();
                setSelectedImg(item);
              }}
              onMouseEnter={() => audioFx.playHover()}
              className="group cursor-pointer rounded-3xl glass-panel border border-white/10 p-6 relative overflow-hidden h-64 flex flex-col justify-between transition-all duration-300 hover:scale-[1.03] hover:border-[#00f3ff]/50 hover:shadow-[0_0_30px_rgba(0,243,255,0.25)]"
            >
              {/* Background Art Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.bgGradient} opacity-30 group-hover:opacity-60 transition-opacity`} />
              <div className="absolute inset-0 bg-cyber-grid opacity-20" />

              <div className="relative z-10 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-slate-950/80 border border-white/10 font-mono text-[10px] font-bold text-[#00f3ff]">
                  {item.category}
                </span>
                <div className="p-2 rounded-xl bg-slate-950/80 text-white group-hover:text-[#00f3ff] transition-colors">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="relative z-10">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <h3 className="text-xl font-bold font-display text-white group-hover:text-[#00f3ff] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-2 mt-1 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImg && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-2xl">
          <div className="max-w-3xl w-full bg-[#08091a] border border-[#00f3ff]/50 rounded-3xl p-8 relative shadow-[0_0_50px_rgba(0,243,255,0.4)]">
            <button
              onClick={() => setSelectedImg(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className={`w-full h-64 rounded-2xl bg-gradient-to-br ${selectedImg.bgGradient} flex items-center justify-center text-6xl mb-6 relative overflow-hidden border border-white/10`}>
              <div className="absolute inset-0 bg-cyber-grid opacity-30" />
              <span>{selectedImg.icon}</span>
            </div>

            <span className="px-3 py-1 rounded-full bg-[#00f3ff]/10 text-[#00f3ff] font-mono text-xs font-bold mb-3 inline-block">
              {selectedImg.category}
            </span>
            <h3 className="text-3xl font-extrabold font-display text-white mb-3">
              {selectedImg.title}
            </h3>
            <p className="text-slate-300 text-base leading-relaxed">
              {selectedImg.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
