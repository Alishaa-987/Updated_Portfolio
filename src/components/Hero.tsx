import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, MapPin, Sparkles } from 'lucide-react';

const roles = [
  'Full-Stack Developer',
  'MERN Stack Engineer',
  'CS Student @ UAF',
  'Stanford Section Leader',
  'Open Source Contributor',
];

function Typewriter({ texts }: { texts: string[] }) {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [del, setDel] = useState(false);

  useEffect(() => {
    const cur = texts[idx];
    if (!del) {
      if (text.length < cur.length) {
        const t = setTimeout(() => setText(cur.slice(0, text.length + 1)), 65);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setDel(true), 2200);
      return () => clearTimeout(t);
    }
    if (text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), 28);
      return () => clearTimeout(t);
    }
    setDel(false);
    setIdx((i) => (i + 1) % texts.length);
  }, [text, del, idx, texts]);

  return (
    <span>
      <span className="text-gradient font-semibold">{text}</span>
      <span className="text-purple-400 animate-pulse ml-0.5">|</span>
    </span>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 pt-20">
      {/* Ambient background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-purple-600/8 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-cyan-500/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-purple-500/4 blur-[80px]" />
      </div>

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.018] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(168,85,247,1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

          {/* Left — text content */}
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/20 text-xs font-mono text-purple-300 mb-7"
            >
              <Sparkles size={12} className="text-purple-400" />
              Open to internships & collaborations
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.05] mb-5"
            >
              Alisha
              <br />
              <span className="text-gradient">Fatima</span>
            </motion.h1>

            {/* Role typewriter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-lg md:text-xl text-slate-400 font-mono mb-6 min-h-[1.8rem]"
            >
              <Typewriter texts={roles} />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="text-slate-400 text-base md:text-lg leading-relaxed max-w-xl mb-3"
            >
              CS student at UAF building production-grade full-stack web apps.
              Stanford Code in Place Section Leader 2026. Passionate about
              AI, open source, and elegant code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-2 text-slate-500 text-sm mb-9 justify-center lg:justify-start"
            >
              <MapPin size={13} className="text-purple-400" />
              Faisalabad, Pakistan
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-10"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white"
                style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)' }}
              >
                View Projects
              </a>
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border border-white/10 text-slate-300 text-sm font-semibold hover:border-purple-500/30 transition-all"
              >
                <Download size={15} />
                Resume
              </a>
            </motion.div>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              className="flex gap-3 justify-center lg:justify-start"
            >
              {[
                { href: 'https://github.com/Alishaa-987', icon: <Github size={18} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/alisha-fatima-08416729a/', icon: <Linkedin size={18} />, label: 'LinkedIn' },
                { href: 'mailto:alishafatima6768@gmail.com', icon: <Mail size={18} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl glass border border-white/8 text-slate-400 hover:text-purple-300 hover:border-purple-500/25 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — profile picture */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="order-1 lg:order-2 shrink-0"
          >
            <ProfilePicture />
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <div className="w-px h-10 bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />
        <a href="#about" className="text-[10px] font-mono text-slate-600 tracking-widest uppercase hover:text-slate-400 transition-colors">
          scroll
        </a>
      </motion.div>
    </section>
  );
}

function ProfilePicture() {
  return (
    <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px]">
      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-16px] rounded-full"
        style={{
          background: 'conic-gradient(from 0deg, transparent 60%, #a855f7 75%, #06b6d4 90%, transparent 100%)',
          opacity: 0.6,
        }}
      />

      {/* Second counter-rotating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 24, repeat: Infinity, ease: 'linear' }}
        className="absolute inset-[-8px] rounded-full"
        style={{
          background: 'conic-gradient(from 180deg, transparent 70%, #06b6d4 82%, #a855f7 95%, transparent 100%)',
          opacity: 0.4,
        }}
      />

      {/* Glow backdrop */}
      <div
        className="absolute inset-0 rounded-full blur-2xl opacity-30"
        style={{ background: 'radial-gradient(circle, #a855f7 0%, #06b6d4 60%, transparent 100%)' }}
      />

      {/* Glass ring */}
      <div className="absolute inset-0 rounded-full border border-white/10 bg-gradient-to-br from-white/5 to-transparent" />

      {/* Image */}
      <div className="absolute inset-[3px] rounded-full overflow-hidden">
        <img
          src="/images/WhatsApp_Image_2026-04-14_at_11.29.58_PM.jpeg"
          alt="Alisha Fatima"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Status badge */}
      <motion.div
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap flex items-center gap-1.5 px-4 py-1.5 rounded-full glass border border-purple-500/20 text-xs font-mono text-purple-300 shadow-lg shadow-purple-500/10"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Available for hire
      </motion.div>

      {/* Floating stat chips */}
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        className="absolute -left-8 top-1/4 px-3 py-2 rounded-xl glass border border-purple-500/15 text-center shadow-lg"
      >
        <p className="text-xs font-bold text-white">3+</p>
        <p className="text-[10px] text-slate-500">Live Apps</p>
      </motion.div>

      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute -right-8 top-1/3 px-3 py-2 rounded-xl glass border border-cyan-500/15 text-center shadow-lg"
      >
        <p className="text-xs font-bold text-white">29+</p>
        <p className="text-[10px] text-slate-500">Repos</p>
      </motion.div>
    </div>
  );
}
