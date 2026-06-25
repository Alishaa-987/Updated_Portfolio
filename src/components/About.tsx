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
  { value: '3+', label: 'Live Apps Deployed' },
  { value: '~2K', label: 'Stanford SL Pool' },
  { value: '2×', label: 'CS50 9/9 Solver' },
  { value: '29+', label: 'Public Repos' },
];

export default function About() {
  const { ref, inView } = useInView();

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />
        <SectionHeading label="About" title="Beyond the code" />

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-[#4A4A4A]/30 border border-[#4A4A4A]/30 rounded-lg overflow-hidden mb-10"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-[#1C1C1C] px-5 py-4">
              <p className="text-2xl font-black text-[#D0D0D0]">{s.value}</p>
              <p className="text-[10px] text-[#6B7065] font-mono mt-0.5">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <div ref={ref} className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="space-y-4 text-sm text-[#6B7065] leading-[1.9]"
          >
            <p>
              Out of roughly 110,000 applicants worldwide, Alisha was selected as one of{' '}
              <span className="text-[#D0D0D0]">~2,000 Section Leaders for Stanford Code in Place 2026</span>{' '}
              a role that involves teaching Python to hundreds of learners globally and shaping how beginners experience programming for the first time.
            </p>
            <p>
              A <span className="text-[#D0D0D0]">two-time Harvard CS50 Puzzle Day 9/9 solver</span> and{' '}
              <span className="text-[#D0D0D0]">Meta Hacker Cup Round 1 qualifier</span>, she competes consistently at the intersection of algorithms and speed. Her open-source contributions through GSSoC '25 and volunteer teaching at iCodeGuru reflect a genuine commitment to giving back to the community that shaped her.
            </p>
            <p>
              She participates in international hackathons on Lablab.ai and the Dev Weekends Fellowship, shipping working prototypes under tight deadlines. Her writing on cloud infrastructure and deployment reaches fellow developers on Medium, where she breaks down complex DevOps concepts for beginners.
            </p>

            <div className="pt-4 border-t border-[#4A4A4A]/35">
              <p className="section-label mb-2.5">Currently exploring</p>
              <div className="flex flex-wrap gap-1.5">
                {['Generative AI', 'LLMs', 'RAG', 'LangChain'].map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
