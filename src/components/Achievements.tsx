import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionLabel } from './About';

const achievements = [
  {
    emoji: '🎓',
    title: 'Section Leader — Code in Place',
    org: 'Stanford University',
    year: '2026',
    desc: 'One of ~2,000 Section Leaders selected globally from thousands of applicants to teach Python fundamentals through Stanford\'s worldwide free CS initiative.',
    accent: 'purple',
  },
  {
    emoji: '🏆',
    title: 'CS50 Puzzle Day — 2× Winner',
    org: 'Harvard University',
    year: '2024 & 2025',
    desc: 'Solved all 9/9 puzzles for two consecutive years, demonstrating strong logic, CS fundamentals, and systematic problem-solving under time constraints.',
    accent: 'cyan',
  },
  {
    emoji: '⚡',
    title: 'Meta Hacker Cup — Round 1 Qualifier',
    org: 'Meta',
    year: '2025',
    desc: 'Qualified for Round 1 of Meta\'s global competitive programming contest, showcasing algorithmic thinking and problem-solving under pressure.',
    accent: 'purple',
  },
];

export default function Achievements() {
  const { ref, inView } = useInView();

  return (
    <section id="achievements" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="05" label="Achievements" />
        <h2 className="text-3xl md:text-5xl font-black text-white mb-14">
          Recognition & <span className="text-gradient">awards</span>
        </h2>

        <div ref={ref} className="grid md:grid-cols-3 gap-5">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.12 }}
              className="group glass glass-hover rounded-2xl p-7 relative overflow-hidden"
            >
              {/* Accent corner glow */}
              <div
                className="absolute -top-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{ background: item.accent === 'purple' ? '#a855f7' : '#06b6d4' }}
              />

              <div className="relative z-10">
                <div className="text-3xl mb-5">{item.emoji}</div>

                <div className="mb-4">
                  <span
                    className="text-[10px] font-mono uppercase tracking-widest"
                    style={{
                      background: item.accent === 'purple'
                        ? 'linear-gradient(135deg, #a855f7, #c084fc)'
                        : 'linear-gradient(135deg, #06b6d4, #67e8f9)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {item.org} · {item.year}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-3 leading-snug">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
