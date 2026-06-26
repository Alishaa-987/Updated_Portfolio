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
  { value: '~2K', label: 'Stanford SL Global Pool' },
  { value: '2x', label: 'CS50 9/9 Solver' },
  { value: 'R1', label: 'Meta Hacker Cup' },
  { value: '29+', label: 'Public Repos' },
];

const highlights = [
  {
    year: '2026',
    title: 'Stanford University Section Leader',
    body: 'Selected as one of roughly 2,000 Section Leaders worldwide out of thousands of applicants for Code in Place, a free Python course offered globally by Stanford. Facilitated weekly live sessions and provided one-on-one mentorship across time zones.',
  },
  {
    year: '2024 & 2025',
    title: 'Harvard CS50 Puzzle Day — 9/9 Perfect Score',
    body: 'Solved all 9 puzzles at Harvard CS50 Puzzle Day for two consecutive years, placing in the top tier of participants worldwide. Each puzzle tests core computer science fundamentals and logical reasoning under time pressure.',
  },
  {
    year: '2025',
    title: 'Meta Hacker Cup — Round 1 Qualifier',
    body: 'Qualified for Round 1 of Meta\'s global competitive programming contest, competing against thousands of programmers internationally with algorithmic problem-solving under strict time constraints.',
  },
  {
    year: '2026',
    title: 'GirlScript Summer of Code Contributor',
    body: 'Selected as a contributor for GSSoC \'25, one of the world\'s largest open-source programmes run by GirlScript Foundation. Actively contributing to open-source repositories and onboarding into the global developer community.',
  },
  {
    year: '2025 – Present',
    title: 'iCodeGuru Moderator and Trainer',
    body: 'Moderating community sessions and training Pakistani students in DSA, Python, and competitive programming at iCodeGuru, an organisation preparing students for international tech careers and fully funded US scholarship opportunities.',
  },
  {
    year: '2025',
    title: 'Dev Weekends Fellowship — Bronze Certificate',
    body: 'Completed an intensive fellowship covering full-stack MERN development and Data Structures and Algorithms across structured weekend sessions. Awarded Bronze Certificate for consistent performance and project delivery.',
  },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />
        <SectionHeading label="About" title="Milestones and recognition" />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#4A4A4A]/30 border border-[#4A4A4A]/30 rounded-lg overflow-hidden mb-12"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-[#1C1C1C] px-5 py-4">
              <p className="text-2xl font-black text-[#D0D0D0]">{s.value}</p>
              <p className="text-[10px] text-[#6B7065] font-mono mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Achievement timeline */}
        <div ref={ref} className="space-y-0">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="grid sm:grid-cols-[120px_1fr] gap-4 py-6 border-b border-[#4A4A4A]/30 last:border-b-0"
            >
              <span className="text-[10px] text-[#4A4A4A] font-mono pt-0.5 shrink-0">{h.year}</span>
              <div>
                <p className="text-sm font-semibold text-[#D0D0D0] mb-1.5">{h.title}</p>
                <p className="text-xs text-[#6B7065] leading-[1.85]">{h.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
