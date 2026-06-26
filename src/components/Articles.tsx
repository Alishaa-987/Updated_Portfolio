import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';
import { ExternalLink, BookOpen } from 'lucide-react';

interface Article {
  title: string;
  summary: string;
  url: string;
  date: string;
  readTime: string;
  tag: string;
}

// Add your Medium articles here
const articles: Article[] = [
  {
    title: 'How I Became a Stanford Code in Place Section Leader',
    summary: 'My journey from beginner programmer to teaching Python to students worldwide as one of roughly 2,000 Section Leaders selected globally for Stanford\'s Code in Place 2026.',
    url: 'https://medium.com/@alishafatima6768',
    date: 'Jun 2026',
    readTime: '5 min read',
    tag: 'Teaching',
  },
  {
    title: 'Solving All 9 CS50 Puzzles — Twice',
    summary: 'A look at the logic, strategies, and mindset behind achieving a perfect 9/9 score at Harvard CS50 Puzzle Day for two consecutive years.',
    url: 'https://medium.com/@alishafatima6768',
    date: 'May 2026',
    readTime: '4 min read',
    tag: 'Competitive Programming',
  },
  {
    title: 'Building with Next.js 15: Lessons from School Hub',
    summary: 'Key architectural decisions, tradeoffs, and practical lessons from building a production-grade multi-role school management system with Next.js 15 and Prisma.',
    url: 'https://medium.com/@alishafatima6768',
    date: 'Apr 2026',
    readTime: '6 min read',
    tag: 'Web Development',
  },
];

export default function Articles() {
  const { ref, inView } = useInView();

  return (
    <section id="articles" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-10">
          <SectionHeading label="Writing" title="Articles and thoughts" />
          <a
            href="https://medium.com/@alishafatima6768"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary self-start mb-10 shrink-0"
          >
            <BookOpen size={12} /> All on Medium
          </a>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-3 items-stretch">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 14 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.35, delay: i * 0.07 }}
              className="card flex flex-col h-full p-5 group hover:border-[#6B7065]/50 transition-colors"
            >
              {/* Tag + read time */}
              <div className="flex items-center justify-between mb-3">
                <span className="tag">{article.tag}</span>
                <span className="text-[10px] text-[#4A4A4A] font-mono">{article.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-[#D0D0D0] leading-snug mb-2 group-hover:text-white transition-colors line-clamp-2">
                {article.title}
              </h3>

              {/* Summary */}
              <p className="text-xs text-[#6B7065] leading-relaxed line-clamp-3 mb-4">
                {article.summary}
              </p>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Footer */}
              <div className="flex items-center justify-between border-t border-[#4A4A4A]/35 pt-3">
                <span className="text-[10px] text-[#4A4A4A] font-mono">{article.date}</span>
                <ExternalLink size={11} className="text-[#4A4A4A] group-hover:text-[#6B7065] transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
