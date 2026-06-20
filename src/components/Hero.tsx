import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-14">
      <div className="max-w-5xl mx-auto w-full py-20">
        <div className="grid lg:grid-cols-[1fr_220px] gap-14 items-center">

          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#6B7065]" />
              <span className="section-label">Available for internships</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="text-4xl sm:text-5xl xl:text-6xl font-black text-[#D0D0D0] leading-[1.05] tracking-tight mb-4"
            >
              Alisha Fatima
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-base text-[#6B7065] font-medium mb-5"
            >
              Full-Stack Developer · CS Student at UAF · Stanford Section Leader
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="text-sm text-[#6B7065]/80 leading-[1.85] max-w-lg mb-4"
            >
              I build production web apps with Next.js and the MERN stack. Selected as a Stanford
              Code in Place Section Leader (2026). Two-time Harvard CS50 Puzzle Day 9/9 solver.
              Meta Hacker Cup Round 1 qualifier. Currently exploring AI applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="flex items-center gap-1.5 text-[#4A4A4A] text-xs mb-8"
            >
              <MapPin size={11} />
              Faisalabad, Pakistan
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="flex flex-wrap gap-2.5 mb-8"
            >
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="/Resume.pdf" download className="btn-secondary"><Download size={13} /> Resume</a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.26 }}
              className="flex items-center gap-2"
            >
              {[
                { href: 'https://github.com/Alishaa-987', icon: <Github size={14} />, label: 'GitHub' },
                { href: 'https://www.linkedin.com/in/alisha-fatima-08416729a/', icon: <Linkedin size={14} />, label: 'LinkedIn' },
                { href: 'mailto:alishafatima6768@gmail.com', icon: <Mail size={14} />, label: 'Email' },
              ].map(({ href, icon, label }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" aria-label={label} className="icon-btn">
                  {icon}
                </a>
              ))}
              <span className="ml-2 text-[#4A4A4A] text-[11px] font-mono">alishafatima6768@gmail.com</span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.12 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-[200px] sm:w-[220px]">
              <div className="w-full aspect-[3/4] rounded-lg overflow-hidden border border-[#4A4A4A] bg-[#2A2A2A]">
                <img
                  src="/images/WhatsApp_Image_2026-04-14_at_11.29.58_PM.jpeg"
                  alt="Alisha Fatima"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
