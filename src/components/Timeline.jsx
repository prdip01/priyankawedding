import React from 'react';
import { Calendar, Rocket, Award, GraduationCap, Briefcase, Sparkles, CheckCircle2 } from 'lucide-react';
import { audioFx } from '../utils/audio';

export default function Timeline() {
  const milestones = [
    {
      year: 'Milestone 01',
      title: 'Started B.Tech in Computer Science',
      desc: 'Embarked on CS engineering, focusing on core algorithms, object-oriented programming, database management systems, and full-stack web architectures.',
      icon: GraduationCap,
      color: '#00f3ff',
      badge: 'CS Foundation',
    },
    {
      year: 'Milestone 02',
      title: 'First Industry Software Internship',
      desc: 'Applied full-stack web development principles in a production environment, building responsive user interfaces and backend integrations.',
      icon: Briefcase,
      color: '#9d4edd',
      badge: 'Internship #1',
    },
    {
      year: 'Milestone 03',
      title: 'AI & Machine Learning Intensive Training',
      desc: 'Completed specialized training covering neural networks, deep learning frameworks, PyTorch model optimization, and data analytics pipelines.',
      icon: Award,
      color: '#ff007f',
      badge: 'AI/ML Training',
    },
    {
      year: 'Milestone 04',
      title: 'Second AI/ML Engineering Internship',
      desc: 'Engaged in real-world ML deployment, dataset curation, and building automated data cleaning and model validation pipelines.',
      icon: Briefcase,
      color: '#00ff88',
      badge: 'Internship #2',
    },
    {
      year: 'Milestone 05',
      title: 'DermAI CNN Research (93% Accuracy)',
      desc: 'Engineered a custom Convolutional Neural Network for dermatoscopic skin lesion classification, reaching 93% accuracy on HAM10000 dataset.',
      icon: Sparkles,
      color: '#00f3ff',
      badge: 'Key Publication',
    },
    {
      year: 'Milestone 06',
      title: '10+ Live Apps & LoRA PEFT Breakthrough',
      desc: 'Crossed 10+ live deployed applications milestone while researching parameter-efficient fine-tuning for low-resource LLM deployment.',
      icon: Rocket,
      color: '#ffd700',
      badge: '10+ Live Apps Deployed',
    },
  ];

  return (
    <section id="timeline" className="py-24 relative z-10 bg-slate-950/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#ffd700]/40 text-[#ffd700] text-xs font-mono font-bold mb-4">
            <Calendar className="w-4 h-4" />
            <span>JOURNEY & MILESTONES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            The Interactive <span className="text-gradient-gold">Timeline</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Tracking key moments, internships, research milestones, and production releases.
          </p>
        </div>

        {/* Vertical Timeline River */}
        <div className="relative border-l-2 border-white/10 ml-4 md:ml-1/2 md:-translate-x-1/2 space-y-12">
          {milestones.map((m, idx) => {
            const Icon = m.icon;
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                onMouseEnter={() => audioFx.playHover()}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Glowing Center Node Dot */}
                <div className="absolute -left-[17px] md:left-1/2 md:-translate-x-1/2 w-8 h-8 rounded-full bg-[#08091a] border-2 border-[#00f3ff] flex items-center justify-center shadow-[0_0_15px_#00f3ff] z-20">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00f3ff] animate-ping" />
                </div>

                {/* Content Box */}
                <div className="ml-8 md:ml-0 md:w-[45%] p-6 rounded-3xl glass-panel glass-panel-hover border border-white/10 relative group">
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="font-mono text-xs font-bold text-[#00f3ff] uppercase tracking-wider">
                      {m.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[10px] font-bold text-slate-300">
                      {m.badge}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl bg-white/5 text-white group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" style={{ color: m.color }} />
                    </div>
                    <h3 className="text-xl font-bold font-display text-white">{m.title}</h3>
                  </div>

                  <p className="text-slate-300 text-sm font-light leading-relaxed">{m.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
