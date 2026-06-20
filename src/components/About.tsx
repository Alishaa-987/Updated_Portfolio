import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs text-purple-400">{number}.</span>
      <span className="font-mono text-xs text-slate-500 uppercase tracking-widest">{label}</span>
      <div className="flex-1 h-px bg-gradient-to-r from-purple-500/20 to-transparent" />
    </div>
  );
}

const stats = [
  { value: '3+', label: 'Live Projects' },
  { value: '2×', label: 'CS50 Puzzle Day Winner' },
  { value: '~2K', label: 'SL Pool (Stanford)' },
  { value: '29+', label: 'GitHub Repos' },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="01" label="About" />
        <h2 className="text-3xl md:text-5xl font-black text-white mb-14">
          A little about <span className="text-gradient">me</span>
        </h2>

        <div ref={ref} className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-slate-400 text-[15px] leading-[1.85]"
          >
            <p>
              I'm <span className="text-white font-semibold">Alisha Fatima</span>, a Computer Science student at
              the University of Agriculture Faisalabad (graduating 2027) and a full-stack developer
              focused on building thoughtful, production-ready web applications.
            </p>
            <p>
              I was selected as one of{' '}
              <span className="text-purple-300 font-medium">~2,000 Section Leaders globally</span> for
              Stanford University's Code in Place 2026 — teaching Python to beginners worldwide. I've
              solved all 9/9 puzzles at{' '}
              <span className="text-cyan-300 font-medium">Harvard CS50 Puzzle Day for two consecutive years</span>{' '}
              and qualified for <span className="text-purple-300 font-medium">Meta Hacker Cup Round 1 2025</span>.
            </p>
            <p>
              Outside of academics, I'm a trainer & moderator at{' '}
              <span className="text-white font-medium">iCodeGuru</span>, teaching DSA and Python to
              students preparing for international careers. I'm also an active{' '}
              <span className="text-white font-medium">GSSoC '25 open-source contributor</span> and a
              Dev Weekends MERN Stack Fellow (Bronze Certificate).
            </p>
            <p>
              Currently exploring <span className="text-purple-300 font-medium">Generative AI, LLMs,</span> and
              building AI-powered applications on top of my full-stack foundation.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
                className="glass glass-hover rounded-2xl p-5 text-center"
              >
                <p
                  className="text-2xl font-black mb-1"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
                >
                  {s.value}
                </p>
                <p className="text-xs text-slate-500 leading-snug">{s.label}</p>
              </motion.div>
            ))}

            {/* Currently learning card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.65 }}
              className="col-span-2 glass rounded-2xl p-5"
            >
              <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-3">Currently exploring</p>
              <div className="flex flex-wrap gap-2">
                {['Generative AI', 'LLMs', 'Prompt Engineering', 'Python for AI'].map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium border border-purple-500/20 text-purple-300 bg-purple-500/5"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
