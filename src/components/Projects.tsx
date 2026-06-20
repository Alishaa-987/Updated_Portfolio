import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionLabel } from './About';
import { Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'ai', label: 'AI / Python' },
] as const;

const langColor: Record<string, string> = {
  TypeScript: 'text-blue-300 bg-blue-500/8 border-blue-500/20',
  JavaScript: 'text-yellow-300 bg-yellow-500/8 border-yellow-500/20',
  Python: 'text-green-300 bg-green-500/8 border-green-500/20',
};

export default function Projects() {
  const [active, setActive] = useState<'all' | 'fullstack' | 'ai'>('all');
  const { ref, inView } = useInView();

  const featured = projects.filter((p) => p.featured);
  const filtered = active === 'all'
    ? projects.filter((p) => !p.featured)
    : projects.filter((p) => !p.featured && p.category === active);

  return (
    <section id="projects" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="03" label="Projects" />
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-5xl font-black text-white">
            Things I've <span className="text-gradient">built</span>
          </h2>
          <p className="text-xs font-mono text-slate-500 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            All repos from{' '}
            <a
              href="https://github.com/Alishaa-987"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
            >
              github.com/Alishaa-987
            </a>
          </p>
        </div>

        {/* Featured projects */}
        <div ref={ref} className="grid lg:grid-cols-3 gap-5 mb-14">
          {featured.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 32 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`group relative glass glass-hover rounded-2xl overflow-hidden flex flex-col ${
                i === 0 ? 'lg:col-span-2 lg:row-span-1' : ''
              }`}
            >
              {/* Gradient top bar */}
              <div
                className="h-0.5 w-full"
                style={{ background: 'linear-gradient(90deg, #a855f7, #06b6d4)' }}
              />

              <div className="p-6 flex flex-col flex-1">
                {/* Header row */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div>
                    <span className="text-[10px] font-mono text-purple-400 uppercase tracking-widest">
                      Featured Project
                    </span>
                    <h3 className="text-lg font-bold text-white mt-1 leading-snug">{project.name}</h3>
                  </div>
                  <div className="flex gap-2 shrink-0 mt-1">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-slate-500 hover:text-purple-300 hover:bg-purple-500/10 transition-all"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-500 hover:text-cyan-300 hover:bg-cyan-500/10 transition-all"
                        aria-label="Live demo"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-5 flex-1">{project.description}</p>

                {/* Language badge */}
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-mono border ${langColor[project.language] ?? 'text-slate-300 bg-white/4 border-white/10'}`}>
                    {project.language}
                  </span>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-cyan-400 hover:text-cyan-300 font-mono flex items-center gap-1 transition-colors"
                    >
                      Live demo <ExternalLink size={11} />
                    </a>
                  )}
                </div>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 6).map((t) => (
                    <span key={t} className="text-[11px] text-slate-600 font-mono">
                      {t}
                    </span>
                  ))}
                  {project.tags.length > 6 && (
                    <span className="text-[11px] text-slate-700 font-mono">+{project.tags.length - 6}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Filter tabs */}
        <div className="flex items-center gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id as typeof active)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                active === cat.id
                  ? 'text-white'
                  : 'glass border border-white/6 text-slate-400 hover:text-white hover:border-purple-500/20'
              }`}
              style={active === cat.id ? { background: 'linear-gradient(135deg, #a855f7, #06b6d4)' } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Other projects grid */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="group glass glass-hover rounded-2xl p-5 flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-mono border ${langColor[project.language] ?? 'text-slate-400 bg-white/4 border-white/10'}`}>
                    {project.language}
                  </span>
                  <div className="flex gap-1.5">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-purple-300 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github size={14} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-600 hover:text-cyan-300 transition-colors"
                        aria-label="Live"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>
                <h3 className="text-sm font-bold text-white mb-2 leading-snug">{project.name}</h3>
                <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-[10px] text-slate-600 font-mono">{t}</span>
                  ))}
                  {project.tags.length > 3 && <span className="text-[10px] text-slate-700 font-mono">+{project.tags.length - 3}</span>}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/Alishaa-987"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/8 text-sm text-slate-400 hover:text-white hover:border-purple-500/25 transition-all duration-200 font-medium"
          >
            <Github size={16} />
            View all 29+ repos on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
