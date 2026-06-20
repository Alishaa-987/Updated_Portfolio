import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionLabel } from './About';

const experiences = [
  {
    role: 'Section Leader — Code in Place',
    org: 'Stanford University',
    period: '2026',
    location: 'Remote',
    accent: 'purple',
    bullets: [
      'Selected from thousands of global applicants as one of ~2,000 Section Leaders to teach Python fundamentals to beginners worldwide.',
      'Facilitated weekly live coding sections covering functions, loops, conditionals, and problem decomposition for a global cohort.',
      'Provided 1-on-1 mentorship across time zones, guiding students through assignments and debugging sessions.',
      'Helped students build confidence and complete final projects within one of the world\'s largest free CS education initiatives.',
    ],
  },
  {
    role: 'Moderator & Trainer',
    org: 'iCodeGuru',
    period: '2025 – Present',
    location: 'Remote, Pakistan',
    accent: 'cyan',
    bullets: [
      'Platform trains Pakistani students for international tech careers and fully funded US scholarship opportunities.',
      'Managed community sessions and supported students across the iCodeGuru Slack workspace as Moderator.',
      'Taught DSA, Python, and competitive programming to students preparing for technical interviews and coding contests.',
    ],
  },
  {
    role: 'Selected Open-Source Contributor',
    org: 'GirlScript Summer of Code (GSSoC \'25)',
    period: '2026',
    location: 'Remote',
    accent: 'purple',
    bullets: [
      'Competitively selected for GSSoC \'25, one of the world\'s largest open-source programmes by GirlScript Foundation.',
      'Onboarded to contribute to open-source projects with active contributions in progress.',
    ],
  },
  {
    role: 'MERN Stack & DSA Fellow — Bronze Certificate',
    org: 'Dev Weekends Fellowship',
    period: '2025',
    location: 'Remote',
    accent: 'cyan',
    bullets: [
      'Completed an intensive fellowship covering full-stack MERN development and Data Structures & Algorithms across structured weekend sessions.',
      'Awarded Bronze Certificate for consistent performance, problem-solving ability, and project delivery.',
    ],
  },
];

export default function Experience() {
  const { ref, inView } = useInView();

  return (
    <section id="experience" className="py-28 px-6 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/8 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionLabel number="04" label="Experience" />
        <h2 className="text-3xl md:text-5xl font-black text-white mb-14">
          Where I've <span className="text-gradient">contributed</span>
        </h2>

        <div ref={ref} className="relative max-w-3xl">
          {/* Timeline spine */}
          <div className="absolute left-3 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-cyan-500/20 to-transparent" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.org + exp.period}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1 }}
                className="relative pl-10"
              >
                {/* Timeline node */}
                <div
                  className="absolute left-0 top-5 w-7 h-7 rounded-full border-2 border-[#030712] flex items-center justify-center"
                  style={{
                    background: exp.accent === 'purple'
                      ? 'linear-gradient(135deg, #a855f7, #c084fc)'
                      : 'linear-gradient(135deg, #06b6d4, #67e8f9)',
                  }}
                >
                  <span className="text-[9px] font-black text-white">{String(i + 1).padStart(2, '0')}</span>
                </div>

                <div className="glass glass-hover rounded-2xl p-6">
                  {/* Meta row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <h3 className="text-base font-bold text-white leading-snug">{exp.role}</h3>
                      <p
                        className="text-sm font-semibold mt-0.5"
                        style={{
                          background: exp.accent === 'purple'
                            ? 'linear-gradient(135deg, #a855f7, #c084fc)'
                            : 'linear-gradient(135deg, #06b6d4, #67e8f9)',
                          WebkitBackgroundClip: 'text',
                          WebkitTextFillColor: 'transparent',
                        }}
                      >
                        {exp.org}
                      </p>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono border border-white/8 text-slate-400 bg-white/3">
                        {exp.period}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono border border-white/8 text-slate-500 bg-white/3">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 text-sm text-slate-400 leading-relaxed">
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full shrink-0"
                          style={{
                            background: exp.accent === 'purple' ? '#a855f7' : '#06b6d4',
                          }}
                        />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
