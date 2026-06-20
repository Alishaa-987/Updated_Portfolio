import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionLabel } from './About';

const skillGroups = [
  {
    label: 'Frontend',
    color: 'purple',
    items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'React Hook Form', 'Zod', 'Redux'],
  },
  {
    label: 'Backend',
    color: 'cyan',
    items: ['Node.js', 'Express.js', 'FastAPI', 'REST APIs', 'WebSockets'],
  },
  {
    label: 'Databases & ORM',
    color: 'purple',
    items: ['MongoDB', 'PostgreSQL', 'Prisma ORM', 'Supabase'],
  },
  {
    label: 'Auth & Security',
    color: 'cyan',
    items: ['JWT Authentication', 'Clerk', 'NextAuth.js'],
  },
  {
    label: 'AI & Python',
    color: 'purple',
    items: ['Python', 'FastAPI', 'LangChain', 'Groq API', 'OpenAI', 'Whisper', 'Streamlit'],
  },
  {
    label: 'Tools & DevOps',
    color: 'cyan',
    items: ['Git', 'GitHub', 'Docker', 'VS Code', 'Vercel', 'Linux'],
  },
];

export default function Skills() {
  const { ref, inView } = useInView();

  return (
    <section id="skills" className="py-28 px-6 relative">
      {/* subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionLabel number="02" label="Skills" />
        <h2 className="text-3xl md:text-5xl font-black text-white mb-14">
          What I work <span className="text-gradient">with</span>
        </h2>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.label}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: gi * 0.07 }}
              className="glass glass-hover rounded-2xl p-6"
            >
              {/* Header */}
              <div className="flex items-center gap-2.5 mb-5">
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{
                    background: group.color === 'purple'
                      ? 'linear-gradient(135deg, #a855f7, #c084fc)'
                      : 'linear-gradient(135deg, #06b6d4, #67e8f9)',
                  }}
                />
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">{group.label}</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium border transition-colors duration-200 cursor-default ${
                      group.color === 'purple'
                        ? 'border-purple-500/15 text-purple-200 bg-purple-500/6 hover:border-purple-500/35 hover:bg-purple-500/12'
                        : 'border-cyan-500/15 text-cyan-200 bg-cyan-500/6 hover:border-cyan-500/35 hover:bg-cyan-500/12'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
