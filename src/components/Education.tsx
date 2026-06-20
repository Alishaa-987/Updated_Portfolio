import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionLabel } from './About';
import { BookOpen } from 'lucide-react';

const coursework = [
  'Data Structures & Algorithms',
  'Web Technologies',
  'Database Systems',
  'Object-Oriented Programming',
  'Computer Networks',
  'Operating Systems',
  'Software Engineering',
];

export default function Education() {
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/8 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionLabel number="06" label="Education" />
        <h2 className="text-3xl md:text-5xl font-black text-white mb-14">
          Academic <span className="text-gradient">background</span>
        </h2>

        <div ref={ref} className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="glass rounded-2xl overflow-hidden"
          >
            {/* Gradient header bar */}
            <div
              className="px-8 py-6"
              style={{ background: 'linear-gradient(135deg, rgba(168,85,247,0.12) 0%, rgba(6,182,212,0.08) 100%)' }}
            >
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <h3 className="text-xl font-black text-white">
                    B.Sc. Computer Science
                  </h3>
                  <p
                    className="text-sm font-bold mt-1"
                    style={{
                      background: 'linear-gradient(135deg, #a855f7, #06b6d4)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    University of Agriculture, Faisalabad (UAF)
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">Faisalabad, Pakistan</p>
                </div>
                <span className="px-4 py-2 rounded-xl glass border border-purple-500/20 text-sm font-mono text-purple-300">
                  2023 – 2027
                </span>
              </div>
            </div>

            {/* Coursework */}
            <div className="px-8 py-6 border-t border-white/5">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen size={13} className="text-slate-500" />
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Relevant Coursework</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span
                    key={c}
                    className="px-3 py-1.5 rounded-lg text-xs border border-white/6 text-slate-400 bg-white/2 hover:border-purple-500/25 hover:text-purple-200 transition-all duration-200 cursor-default"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
