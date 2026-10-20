import React, { useState, useEffect } from 'react';
import { Terminal, X, Sparkles, Command } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioFx } from '../utils/audio';

export default function EasterEggModal({ isOpen, onClose, matrixMode, setMatrixMode }) {
  const [inputVal, setInputVal] = useState('');
  const [logs, setLogs] = useState([
    '⚡ SYSTEM UNLOCKED: Pradeep Kumar Cyber Matrix Console v3.6',
    'Type "help" for a list of secret system commands.',
  ]);

  // Konami Code sequence listener
  useEffect(() => {
    const konamiCode = [
      'ArrowUp',
      'ArrowUp',
      'ArrowDown',
      'ArrowDown',
      'ArrowLeft',
      'ArrowRight',
      'ArrowLeft',
      'ArrowRight',
      'b',
      'a',
    ];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          audioFx.playSecret();
          confetti({ particleCount: 150, spread: 90, origin: { y: 0.5 } });
          setMatrixMode(true);
          setLogs((prev) => [
            ...prev,
            '🔥 KONAMI CODE ACTIVATED! Cyber Matrix Mode Unlocked!',
          ]);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [setMatrixMode]);

  const handleCommand = (e) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    audioFx.playClick();
    const cmd = inputVal.trim().toLowerCase();
    setInputVal('');

    let newLogs = [...logs, `> ${cmd}`];

    if (cmd === 'help') {
      newLogs.push('Available commands:');
      newLogs.push('  stats     - Print core engineering metrics');
      newLogs.push('  dermai    - Query DermAI CNN model status');
      newLogs.push('  matrix    - Toggle Cyber Matrix skin');
      newLogs.push('  clear     - Clear terminal history');
    } else if (cmd === 'stats') {
      newLogs.push('📊 METRICS:');
      newLogs.push('  - Live Applications Deployed: 10+');
      newLogs.push('  - Industry Internships Completed: 2');
      newLogs.push('  - DermAI Skin Cancer Model Accuracy: 93%');
    } else if (cmd === 'dermai') {
      newLogs.push('🔬 DermAI MODEL INFERENCE STATUS:');
      newLogs.push('  - HAM10000 Dataset: 10,015 Dermatoscopic Images');
      newLogs.push('  - Architecture: Custom ResNet/CNN Deep Network');
    } else if (cmd === 'matrix') {
      setMatrixMode(!matrixMode);
      newLogs.push(`Matrix mode toggled: ${!matrixMode ? 'ON' : 'OFF'}`);
    } else if (cmd === 'clear') {
      setLogs([]);
      return;
    } else {
      newLogs.push(`Unknown command "${cmd}". Type "help" for available commands.`);
    }

    setLogs(newLogs);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-2xl">
      <div className="max-w-2xl w-full bg-[#030d06] border border-[#00ff66]/50 rounded-3xl p-6 relative shadow-[0_0_50px_rgba(0,255,102,0.4)] font-mono text-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#00ff66]/30 text-[#00ff66]">
          <div className="flex items-center gap-2 font-bold">
            <Terminal className="w-4 h-4" />
            <span>PRADEEP_CYBER_TERMINAL_V3.6</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Terminal Output */}
        <div className="h-64 overflow-y-auto space-y-1.5 p-3 rounded-xl bg-black/60 border border-[#00ff66]/20 text-slate-200 mb-4">
          {logs.map((line, idx) => (
            <div key={idx} className={line.startsWith('>') ? 'text-[#00f3ff] font-bold' : 'text-[#00ff66]'}>
              {line}
            </div>
          ))}
        </div>

        {/* Input */}
        <form onSubmit={handleCommand} className="flex gap-2">
          <span className="text-[#00ff66] font-bold text-sm leading-10">&gt;</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            placeholder="Type 'help'..."
            className="flex-1 px-4 py-2 rounded-xl bg-black/60 border border-[#00ff66]/30 text-[#00ff66] placeholder-emerald-900 focus:outline-none focus:border-[#00ff66]"
          />
        </form>
      </div>
    </div>
  );
}
