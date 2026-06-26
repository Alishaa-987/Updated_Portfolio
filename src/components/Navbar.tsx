import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Articles', href: '/articles' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  const NavLink = ({ label, href }: { label: string; href: string }) => {
    const isExternal = href.startsWith('/#');
    const isActive =
      href === '/projects'
        ? location.pathname === '/projects'
        : href === '/articles'
        ? location.pathname === '/articles'
        : false;

    const cls = `px-4 py-2 text-xs rounded transition-all tracking-wide ${
      isActive
        ? 'text-[#D0D0D0] bg-[#2A2A2A]/60'
        : 'text-[#6B7065] hover:text-[#D0D0D0] hover:bg-[#2A2A2A]/60'
    }`;

    // For anchor links on the home page, use native scroll
    if (isExternal && isHome) {
      return (
        <a href={href.replace('/', '')} className={cls}>
          {label}
        </a>
      );
    }

    // External section links from inner pages — full navigation with hash
    if (isExternal) {
      return <a href={href} className={cls}>{label}</a>;
    }

    return <Link to={href} className={cls}>{label}</Link>;
  };

  return (
    <motion.header
      initial={{ y: -48, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1C1C1C]/95 backdrop-blur border-b border-[#4A4A4A]/40' : ''
      }`}
    >
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="text-xs font-semibold text-[#6B7065] hover:text-[#D0D0D0] transition-colors tracking-widest uppercase">
          Alisha Fatima
        </Link>

        <ul className="hidden md:flex items-center">
          {links.map((l) => (
            <li key={l.href}>
              <NavLink label={l.label} href={l.href} />
            </li>
          ))}
        </ul>

        <a href="/Alisha_Fatima_Resume.pdf" download className="hidden md:inline-flex btn-primary text-xs">
          Resume
        </a>

        <button onClick={() => setOpen(!open)} className="md:hidden icon-btn" aria-label="Menu">
          {open ? <X size={15} /> : <Menu size={15} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1C1C1C] border-b border-[#4A4A4A]/40"
          >
            <ul className="px-6 py-4 space-y-1">
              {links.map((l) => (
                <li key={l.href}>
                  <NavLink label={l.label} href={l.href} />
                </li>
              ))}
              <li className="pt-2">
                <a href="/Alisha_Fatima_Resume.pdf" download className="btn-primary w-full justify-center text-xs">Resume</a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
