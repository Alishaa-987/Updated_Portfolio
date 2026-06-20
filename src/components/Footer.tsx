import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <span>Designed & built by</span>
          <span
            className="font-bold"
            style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
          >
            Alisha Fatima
          </span>
          <span className="flex items-center gap-1">
            with <Heart size={12} className="text-red-400 fill-red-400 mx-0.5" /> using React & Framer Motion
          </span>
        </div>

        <p className="text-xs text-slate-700 font-mono">© {new Date().getFullYear()} All rights reserved.</p>

        <div className="flex gap-2">
          {[
            { href: 'https://github.com/Alishaa-987', icon: <Github size={16} />, label: 'GitHub' },
            { href: 'https://www.linkedin.com/in/alisha-fatima-08416729a/', icon: <Linkedin size={16} />, label: 'LinkedIn' },
            { href: 'mailto:alishafatima6768@gmail.com', icon: <Mail size={16} />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-2 rounded-lg text-slate-600 hover:text-purple-300 hover:bg-purple-500/5 transition-all"
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
