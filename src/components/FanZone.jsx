import React, { useState, useEffect } from 'react';
import { Heart, Trophy, HelpCircle, MessageSquare, Terminal as TermIcon, Send, Sparkles, Check, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { audioFx } from '../utils/audio';

export default function FanZone() {
  const [activeTab, setActiveTab] = useState('quiz');

  // Quiz State
  const quizQuestions = [
    {
      q: 'What classification accuracy did Pradeep achieve with DermAI on the HAM10000 dataset?',
      options: ['85%', '90%', '93%', '99%'],
      correct: 2,
    },
    {
      q: 'Which technique does Pradeep utilize for low-resource LLM fine-tuning?',
      options: ['LoRA / PEFT', 'RLHF only', 'Full 100% fine-tuning', 'Manual weights edit'],
      correct: 0,
    },
    {
      q: 'How many live applications has Pradeep built and deployed?',
      options: ['2 apps', '5 apps', '10+ apps', '100+ apps'],
      correct: 2,
    },
    {
      q: 'What is Pradeep’s primary academic background?',
      options: ['B.Tech Computer Science', 'B.Sc Physics', 'B.A Economics', 'MBA'],
      correct: 0,
    },
    {
      q: 'What is Pradeep’s core engineering philosophy quote?',
      options: [
        'Move fast and break things',
        'Code. Create. Simplify.',
        'Complex algorithms solve all problems',
        'No code is best code',
      ],
      correct: 1,
    },
  ];

  const [currentQ, setCurrentQ] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizFinished, setQuizFinished] = useState(false);

  const handleSelectAnswer = (optIdx) => {
    audioFx.playClick();
    const updated = { ...quizAnswers, [currentQ]: optIdx };
    setQuizAnswers(updated);

    if (currentQ < quizQuestions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setQuizFinished(true);
      audioFx.playChime();
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  const restartQuiz = () => {
    audioFx.playClick();
    setCurrentQ(0);
    setQuizAnswers({});
    setQuizFinished(false);
  };

  const calculateScore = () => {
    let score = 0;
    quizQuestions.forEach((q, idx) => {
      if (quizAnswers[idx] === q.correct) score++;
    });
    return score;
  };

  // Poll State
  const [pollVotes, setPollVotes] = useState({
    python: 42,
    react: 38,
    pytorch: 29,
    sql: 15,
  });
  const [votedPoll, setVotedPoll] = useState(false);

  const handleVote = (key) => {
    if (votedPoll) return;
    audioFx.playClick();
    setPollVotes((prev) => ({ ...prev, [key]: prev[key] + 1 }));
    setVotedPoll(true);
    confetti({ particleCount: 50, spread: 50 });
  };

  const totalVotes = Object.values(pollVotes).reduce((a, b) => a + b, 0);

  // Messages State
  const [messages, setMessages] = useState([
    { name: 'Alex M.', text: 'DermAI CNN model with 93% accuracy is super impressive!', likes: 12 },
    { name: 'Sarah K.', text: 'Love the LoRA PEFT research visualizer. Clean execution!', likes: 9 },
    { name: 'Rohan P.', text: '10+ live apps is a great milestone for a B.Tech CS student.', likes: 15 },
  ]);

  const [newName, setNewName] = useState('');
  const [newText, setNewText] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('pk_fan_messages');
    if (saved) {
      try {
        setMessages(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleAddMessage = (e) => {
    e.preventDefault();
    if (!newName.trim() || !newText.trim()) return;
    audioFx.playClick();

    const newMsg = { name: newName.trim(), text: newText.trim(), likes: 1 };
    const updated = [newMsg, ...messages];
    setMessages(updated);
    localStorage.setItem('pk_fan_messages', JSON.stringify(updated));
    setNewName('');
    setNewText('');
    confetti({ particleCount: 40, spread: 40 });
  };

  const handleLikeMessage = (idx) => {
    audioFx.playClick();
    const updated = [...messages];
    updated[idx].likes += 1;
    setMessages(updated);
    localStorage.setItem('pk_fan_messages', JSON.stringify(updated));
  };

  return (
    <section id="fanzone" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#ff007f]/40 text-[#ff007f] text-xs font-mono font-bold mb-4">
            <Heart className="w-4 h-4 fill-[#ff007f]" />
            <span>INTERACTIVE FAN HUB</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-display text-white tracking-tight mb-4">
            The Interactive <span className="text-gradient-cyber">Fan Zone</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Test your knowledge, vote in live tech polls, and leave a message on the community board!
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-1.5 rounded-2xl bg-slate-900 border border-white/10 backdrop-blur-xl">
            {[
              { id: 'quiz', label: 'Fan Quiz Challenge', icon: Trophy },
              { id: 'polls', label: 'Live Tech Polls', icon: HelpCircle },
              { id: 'wall', label: 'Fan Wall & Messages', icon: MessageSquare },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    audioFx.playClick();
                    setActiveTab(tab.id);
                  }}
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm transition-all ${
                    activeTab === tab.id
                      ? 'bg-gradient-to-r from-[#00f3ff] via-[#9d4edd] to-[#ff007f] text-white shadow-[0_0_20px_rgba(0,243,255,0.4)]'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Content 1: Quiz */}
        {activeTab === 'quiz' && (
          <div className="max-w-3xl mx-auto p-8 rounded-3xl glass-panel border border-white/10 relative overflow-hidden">
            {!quizFinished ? (
              <div>
                <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                  <span className="font-mono text-xs text-[#00f3ff] font-bold">
                    Question {currentQ + 1} of {quizQuestions.length}
                  </span>
                  <div className="flex gap-1">
                    {quizQuestions.map((_, i) => (
                      <div
                        key={i}
                        className={`w-6 h-1.5 rounded-full transition-all ${
                          i === currentQ
                            ? 'bg-[#00f3ff] shadow-[0_0_10px_#00f3ff]'
                            : i < currentQ
                            ? 'bg-emerald-400'
                            : 'bg-slate-800'
                        }`}
                      />
                    ))}
                  </div>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-8">
                  {quizQuestions[currentQ].q}
                </h3>

                <div className="space-y-4">
                  {quizQuestions[currentQ].options.map((opt, optIdx) => (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectAnswer(optIdx)}
                      onMouseEnter={() => audioFx.playHover()}
                      className="w-full p-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-[#00f3ff]/15 hover:border-[#00f3ff] text-left font-medium text-slate-200 hover:text-white transition-all flex items-center justify-between group"
                    >
                      <span className="text-sm sm:text-base">{opt}</span>
                      <span className="w-8 h-8 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center font-mono text-xs text-slate-400 group-hover:text-[#00f3ff] group-hover:border-[#00f3ff]">
                        {String.fromCharCode(65 + optIdx)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Trophy className="w-16 h-16 text-[#ffd700] mx-auto mb-4 animate-bounce" />
                <h3 className="text-3xl font-extrabold font-display text-white mb-2">Quiz Completed!</h3>
                <p className="text-slate-300 text-lg mb-6">
                  You scored <span className="text-gradient-cyber font-bold">{calculateScore()} / {quizQuestions.length}</span>!
                </p>

                <div className="inline-block px-4 py-2 rounded-2xl bg-white/5 border border-[#ffd700]/40 text-[#ffd700] font-mono text-xs font-bold mb-8">
                  🏆 UNLOCKED BADGE: {calculateScore() === 5 ? 'PRADEEP SUPERFAN ⚡' : 'AI & ML INSIDER 🤖'}
                </div>

                <div>
                  <button
                    onClick={restartQuiz}
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00f3ff] to-[#9d4edd] text-white font-bold text-sm shadow-lg hover:scale-105 transition-all inline-flex items-center gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    <span>Try Quiz Again</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Tab Content 2: Polls */}
        {activeTab === 'polls' && (
          <div className="max-w-3xl mx-auto p-8 rounded-3xl glass-panel border border-white/10">
            <h3 className="text-2xl font-bold font-display text-white mb-2">
              Community Poll: Favorite Tech Stack Component?
            </h3>
            <p className="text-slate-400 text-sm mb-8">
              Cast your vote for Pradeep&apos;s most influential skill set:
            </p>

            <div className="space-y-6">
              {[
                { key: 'python', label: 'Python & Data Science Pipelines', color: 'from-[#00f3ff] to-[#00ff88]' },
                { key: 'react', label: 'React & Modern Frontend Web Dev', color: 'from-[#9d4edd] to-[#ff007f]' },
                { key: 'pytorch', label: 'PyTorch & CNN Model Architecture', color: 'from-[#ff007f] to-[#ffd700]' },
                { key: 'sql', label: 'SQL & Relational Schemas', color: 'from-[#00f3ff] to-[#9d4edd]' },
              ].map((opt) => {
                const count = pollVotes[opt.key];
                const pct = Math.round((count / totalVotes) * 100);
                return (
                  <div key={opt.key} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <button
                        onClick={() => handleVote(opt.key)}
                        disabled={votedPoll}
                        className={`font-semibold text-left ${
                          votedPoll ? 'text-slate-200 cursor-default' : 'text-[#00f3ff] hover:underline'
                        }`}
                      >
                        {opt.label} {votedPoll && <Check className="inline w-4 h-4 text-emerald-400 ml-1" />}
                      </button>
                      <span className="font-mono text-xs text-slate-400">
                        {count} votes ({pct}%)
                      </span>
                    </div>

                    <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden p-0.5 border border-white/10">
                      <div
                        className={`h-full bg-gradient-to-r ${opt.color} rounded-full transition-all duration-700`}
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {votedPoll && (
              <p className="mt-8 text-center text-xs font-mono text-[#00ff88] font-bold">
                ✓ Thank you for voting in the live fan poll!
              </p>
            )}
          </div>
        )}

        {/* Tab Content 3: Fan Wall */}
        {activeTab === 'wall' && (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Post Message Form */}
            <form onSubmit={handleAddMessage} className="p-6 rounded-3xl glass-panel border border-white/10">
              <h3 className="text-xl font-bold font-display text-white mb-4">Post to the Fan Wall</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <input
                  type="text"
                  placeholder="Your Name / Handle"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00f3ff] text-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Message (e.g. Keep building awesome AI apps!)"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                  className="sm:col-span-2 px-4 py-3 rounded-xl bg-slate-900 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-[#00f3ff] text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#00f3ff] to-[#9d4edd] text-white font-bold text-sm shadow-lg hover:scale-105 transition-all flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Publish Message</span>
              </button>
            </form>

            {/* Message Stream */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {messages.map((msg, idx) => (
                <div key={idx} className="p-6 rounded-2xl glass-panel border border-white/10 flex flex-col justify-between">
                  <p className="text-slate-200 text-sm mb-4 leading-relaxed font-light">
                    &ldquo;{msg.text}&rdquo;
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs">
                    <span className="font-bold text-[#00f3ff] font-mono">— {msg.name}</span>
                    <button
                      onClick={() => handleLikeMessage(idx)}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 hover:bg-pink-500/20 text-slate-400 hover:text-pink-400 transition-colors"
                    >
                      <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                      <span className="font-mono font-bold">{msg.likes}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
