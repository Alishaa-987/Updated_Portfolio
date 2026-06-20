import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';
import { Github, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { projects, type Project } from '../data/projects';

const categories = [
  { id: 'all', label: 'All' },
  { id: 'fullstack', label: 'Full-Stack' },
  { id: 'ai', label: 'AI / Python' },
  { id: 'systems', label: 'Systems' },
] as const;

function ProjectCard({ project }: { project: Project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-sm font-bold text-[#D0D0D0]">{project.name}</h3>
        <div className="flex gap-1.5 shrink-0">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="GitHub"><Github size={13} /></a>
          {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="icon-btn" aria-label="Live"><ExternalLink size={13} /></a>}
        </div>
      </div>

      <p className="text-xs text-[#6B7065] leading-relaxed mb-3">{project.problem}</p>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="overflow-hidden">
            <div className="mb-3 pt-1">
              <p className="section-label mb-1">Solution</p>
              <p className="text-xs text-[#6B7065] leading-relaxed">{project.solution}</p>
            </div>
            <div className="mb-3">
              <p className="section-label mb-1">Outcome</p>
              <p className="text-xs text-[#6B7065] leading-relaxed">{project.outcome}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.slice(0, 4).map((t) => <span key={t} className="tag">{t}</span>)}
        {project.tags.length > 4 && <span className="tag">+{project.tags.length - 4}</span>}
      </div>

      <div className="flex items-center justify-between border-t border-[#4A4A4A]/35 pt-4">
        <span className="text-[10px] text-[#4A4A4A] font-mono">{project.language}</span>
        <button onClick={() => setExpanded((v) => !v)} className="flex items-center gap-1 text-[10px] text-[#4A4A4A] hover:text-[#6B7065] font-mono">
          {expanded ? <><ChevronUp size={11} /> Less</> : <><ChevronDown size={11} /> More</>}
        </button>
      </div>
    </div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<'all' | 'fullstack' | 'ai' | 'systems'>('all');
  const { ref, inView } = useInView();

  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);
  const filtered = active === 'all' ? others : others.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <SectionHeading label="Projects" title="Selected work" />
          <a href="https://github.com/Alishaa-987" target="_blank" rel="noopener noreferrer" className="btn-secondary self-start mb-10">
            <Github size={12} /> All repos
          </a>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-3 mb-8">
          {featured.map((p, i) => (
            <motion.div key={p.id} initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.35, delay: i * 0.06 }}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id as typeof active)}
              className={`px-2.5 py-1.5 rounded text-[10px] font-mono transition-all border ${
                active === cat.id
                  ? 'bg-[#D0D0D0] text-[#1C1C1C] border-[#D0D0D0]'
                  : 'border-[#4A4A4A] text-[#6B7065] hover:border-[#6B7065] bg-transparent'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="popLayout">
          <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filtered.map((p, i) => (
              <motion.div key={p.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25, delay: i * 0.04 }}>
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
