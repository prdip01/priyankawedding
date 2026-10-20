import React, { useState } from 'react';
import { Microscope, Cpu, Sliders, CheckCircle, Activity, Sparkles, Layers } from 'lucide-react';
import { audioFx } from '../utils/audio';

export default function ResearchSimulator() {
  const [activeResearch, setActiveResearch] = useState('dermai');

  // DermAI Interactive State
  const [selectedSample, setSelectedSample] = useState(0);
  const dermSamples = [
    { name: 'Melanocytic Nevi (nv)', accuracy: 94.2, status: 'Benign', risk: 'Low', color: 'emerald' },
    { name: 'Melanoma (mel)', accuracy: 92.8, status: 'Malignant', risk: 'High', color: 'pink' },
    { name: 'Benign Keratosis (bkl)', accuracy: 93.6, status: 'Benign', risk: 'Low', color: 'cyan' },
  ];

  // LoRA PEFT Interactive State
  const [loraRank, setLoraRank] = useState(8);
  const [loraAlpha, setLoraAlpha] = useState(16);

  // Compute stats based on LoRA rank
  const paramReduction = Math.min(99.4, (100 - (loraRank / 64) * 8).toFixed(1));
  const vramSavings = (24 * (paramReduction / 100)).toFixed(1);

  return (
    <section id="research" className="py-24 relative z-10 bg-slate-950/60 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#00f3ff]/40 text-[#00f3ff] text-xs font-mono font-bold mb-4">
            <Microscope className="w-4 h-4" />
            <span>INTERACTIVE AI LAB & RESEARCH</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            Cutting-Edge <span className="text-gradient-cyber">AI Research</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Explore live interactive simulations of Pradeep&apos;s machine learning publications and custom model architectures.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-900 border border-white/10 backdrop-blur-xl">
            <button
              onClick={() => {
                audioFx.playClick();
                setActiveResearch('dermai');
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                activeResearch === 'dermai'
                  ? 'bg-gradient-to-r from-[#00f3ff] to-[#9d4edd] text-white shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>1. DermAI Skin Lesion CNN (93%)</span>
            </button>

            <button
              onClick={() => {
                audioFx.playClick();
                setActiveResearch('lora');
              }}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                activeResearch === 'lora'
                  ? 'bg-gradient-to-r from-[#9d4edd] to-[#ff007f] text-white shadow-[0_0_20px_rgba(255,0,127,0.4)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Cpu className="w-4 h-4" />
              <span>2. Low-Resource LoRA / PEFT LLM</span>
            </button>
          </div>
        </div>

        {/* Simulation Canvas 1: DermAI */}
        {activeResearch === 'dermai' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/50 p-8 rounded-3xl border border-white/10 glass-panel">
            {/* Left Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#00f3ff] uppercase tracking-widest">Publication #1</span>
                <h3 className="text-3xl font-extrabold text-white font-display mt-1 mb-3">
                  DermAI CNN Classifier
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Custom Convolutional Neural Network trained on the <strong>HAM10000</strong> dataset containing 10,000+ dermatoscopic skin lesion images, achieving an overall accuracy of <strong>93%</strong>.
                </p>
              </div>

              {/* Sample Selector Buttons */}
              <div className="space-y-3">
                <label className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                  Select Test Sample Image:
                </label>
                {dermSamples.map((sample, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      audioFx.playClick();
                      setSelectedSample(idx);
                    }}
                    onMouseEnter={() => audioFx.playHover()}
                    className={`w-full p-4 rounded-2xl border text-left flex items-center justify-between transition-all ${
                      selectedSample === idx
                        ? 'border-[#00f3ff] bg-[#00f3ff]/10 text-white shadow-[0_0_15px_rgba(0,243,255,0.2)]'
                        : 'border-white/10 bg-white/5 text-slate-300 hover:bg-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-[#00f3ff]" />
                      <span className="font-semibold text-sm">{sample.name}</span>
                    </div>
                    <span className="font-mono font-bold text-xs text-[#00f3ff]">
                      {sample.accuracy}%
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Right Visual Output */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950 border border-white/10 relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="ml-2 font-mono text-xs text-slate-400">CNN Inference Engine v2.4</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-[#00ff88]/20 text-[#00ff88] font-mono text-xs font-bold border border-[#00ff88]/40">
                  Model Status: ONLINE
                </div>
              </div>

              {/* CNN Output Visual */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                {/* Simulated Skin Scanner Grid */}
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-[#00f3ff]/40 flex flex-col items-center justify-center p-6 text-center overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-grid opacity-30" />
                  <div className="absolute inset-0 border-2 border-[#00f3ff]/60 animate-pulse rounded-2xl" />
                  <Sparkles className="w-12 h-12 text-[#00f3ff] mb-2 animate-bounce" />
                  <span className="text-xs font-mono text-slate-300">Feature Extraction Matrix</span>
                  <span className="text-xs font-mono text-[#00f3ff] mt-1">224 × 224 RGB Tensor</span>
                </div>

                {/* Diagnostics Output */}
                <div className="space-y-4">
                  <div>
                    <span className="text-xs text-slate-400 font-mono">Predicted Diagnosis:</span>
                    <h4 className="text-xl font-bold text-white font-display mt-0.5">
                      {dermSamples[selectedSample].name}
                    </h4>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-mono mb-1">
                      <span className="text-slate-400">Model Confidence</span>
                      <span className="text-[#00f3ff] font-bold">
                        {dermSamples[selectedSample].accuracy}%
                      </span>
                    </div>
                    <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/10">
                      <div
                        className="h-full bg-gradient-to-r from-[#00f3ff] to-[#00ff88] rounded-full transition-all duration-500 shadow-[0_0_10px_#00f3ff]"
                        style={{ width: `${dermSamples[selectedSample].accuracy}%` }}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] font-mono text-slate-400 block">Lesion Type</span>
                      <span className="text-xs font-bold text-slate-200">
                        {dermSamples[selectedSample].status}
                      </span>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[10px] font-mono text-slate-400 block">Risk Category</span>
                      <span
                        className={`text-xs font-bold ${
                          dermSamples[selectedSample].risk === 'High' ? 'text-pink-400' : 'text-emerald-400'
                        }`}
                      >
                        {dermSamples[selectedSample].risk} Risk
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Simulation Canvas 2: LoRA PEFT */}
        {activeResearch === 'lora' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/50 p-8 rounded-3xl border border-white/10 glass-panel">
            {/* Left Controls */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-mono text-[#ff007f] uppercase tracking-widest">Publication #2</span>
                <h3 className="text-3xl font-extrabold text-white font-display mt-1 mb-3">
                  Low-Resource NLP LoRA Simulator
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Parameter-Efficient Fine-Tuning (PEFT) using Low-Rank Adaptation (LoRA) to deploy 7B+ parameter LLMs on memory-constrained edge hardware.
                </p>
              </div>

              {/* Interactive Sliders */}
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                    <span className="flex items-center gap-1 font-bold">
                      <Sliders className="w-4 h-4 text-[#ff007f]" /> LoRA Rank (r):
                    </span>
                    <span className="text-[#ff007f] font-extrabold text-sm">{loraRank}</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="64"
                    step="2"
                    value={loraRank}
                    onChange={(e) => {
                      setLoraRank(Number(e.target.value));
                      audioFx.playHover();
                    }}
                    className="w-full accent-[#ff007f] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono text-slate-300 mb-2">
                    <span className="flex items-center gap-1 font-bold">
                      <Layers className="w-4 h-4 text-[#9d4edd]" /> LoRA Alpha (&alpha;):
                    </span>
                    <span className="text-[#9d4edd] font-extrabold text-sm">{loraAlpha}</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="128"
                    step="8"
                    value={loraAlpha}
                    onChange={(e) => {
                      setLoraAlpha(Number(e.target.value));
                      audioFx.playHover();
                    }}
                    className="w-full accent-[#9d4edd] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Right Visual Output */}
            <div className="lg:col-span-7 p-6 rounded-2xl bg-slate-950 border border-white/10 space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="font-mono text-xs text-slate-300 font-bold">PEFT Adapter Decomposition</span>
                <span className="text-xs font-mono text-[#ff007f]">W = W₀ + &Delta;W (A &times; B)</span>
              </div>

              {/* Live Metric Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[11px] text-slate-400 font-mono block">Trainable Params</span>
                  <span className="text-2xl font-extrabold font-mono text-gradient-cyber">
                    {paramReduction}%
                  </span>
                  <span className="text-[10px] text-emerald-400 font-mono block mt-1">Reduced</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center">
                  <span className="text-[11px] text-slate-400 font-mono block">VRAM Saved</span>
                  <span className="text-2xl font-extrabold font-mono text-pink-400">
                    {vramSavings} GB
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono block mt-1">Out of 24GB</span>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center col-span-2 sm:col-span-1">
                  <span className="text-[11px] text-slate-400 font-mono block">Target Hardware</span>
                  <span className="text-base font-bold text-white block mt-1">RTX 3060 / 4060</span>
                  <span className="text-[10px] text-[#00f3ff] font-mono block">Consumer Edge GPU</span>
                </div>
              </div>

              {/* Matrix Rank Formula Box */}
              <div className="p-4 rounded-xl bg-slate-900 border border-[#9d4edd]/30 flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span className="text-slate-200">Scaling Factor (&alpha; / r):</span>
                </div>
                <span className="font-bold text-[#9d4edd]">{(loraAlpha / loraRank).toFixed(2)}x</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
