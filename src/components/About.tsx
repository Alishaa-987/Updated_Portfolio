import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';

export function SectionHeading({ label, title }: { label: string; title: React.ReactNode }) {
  return (
    <div className="mb-10">
      <p className="section-label mb-2">{label}</p>
      <h2 className="text-2xl sm:text-3xl font-black text-[#D0D0D0] leading-tight">{title}</h2>
    </div>
  );
}

const stats = [
  { value: '3+', label: 'Live Apps' },
  { value: '~2K', label: 'Stanford SL' },
  { value: '2×', label: 'CS50 9/9' },
  { value: '29+', label: 'GitHub Repos' },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />
        <SectionHeading label="About" title="Who I am" />

        <div ref={ref} className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="lg:col-span-3 space-y-4 text-sm text-[#6B7065] leading-[1.9]"
          >
            <p>
              <span className="text-[#D0D0D0] font-semibold">Alisha Fatima</span> is a Computer Science student at UAF (Class of 2027) and a full-stack web developer with production-deployed applications.
            </p>
            <p>
              Selected as one of <span className="text-[#D0D0D0]">~2,000 Section Leaders globally</span> for Stanford's Code in Place 2026, teaching Python to students across multiple time zones.
            </p>
            <p>
              Solved all <span className="text-[#D0D0D0]">9/9 puzzles at Harvard CS50 Puzzle Day</span> for two consecutive years (2024 & 2025). Qualified for Meta Hacker Cup Round 1 (2025).
            </p>
            <p>
              Currently training students in DSA and Python at iCodeGuru while exploring AI application development.
            </p>

            <div className="pt-4 border-t border-[#4A4A4A]/35">
              <p className="section-label mb-2.5">Currently exploring</p>
              <div className="flex flex-wrap gap-1.5">
                {['Generative AI', 'LLMs', 'RAG'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 grid grid-cols-2 gap-2.5"
          >
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 10 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.05 }}
                className="card p-5 text-center"
              >
                <p className="text-xl font-black text-[#D0D0D0] mb-1">{s.value}</p>
                <p className="text-[10px] text-[#6B7065] font-mono">{s.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
