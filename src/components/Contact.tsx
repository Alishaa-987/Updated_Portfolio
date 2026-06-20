import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionLabel } from './About';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

const socials = [
  {
    icon: <Mail size={18} />,
    label: 'Email',
    value: 'alishafatima6768@gmail.com',
    href: 'mailto:alishafatima6768@gmail.com',
    accent: 'purple',
  },
  {
    icon: <Linkedin size={18} />,
    label: 'LinkedIn',
    value: '/in/alisha-fatima-08416729a',
    href: 'https://www.linkedin.com/in/alisha-fatima-08416729a/',
    accent: 'cyan',
  },
  {
    icon: <Github size={18} />,
    label: 'GitHub',
    value: 'github.com/Alishaa-987',
    href: 'https://github.com/Alishaa-987',
    accent: 'purple',
  },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase
      .from('contact_messages')
      .insert([{ name: form.name, email: form.email, message: form.message }]);

    if (error) {
      setStatus('error');
    } else {
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id="contact" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel number="07" label="Contact" />
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
          Let's <span className="text-gradient">connect</span>
        </h2>
        <p className="text-slate-500 text-base mb-14 max-w-lg">
          I'm looking for new opportunities. Whether you have a project, a question, or just want to say hello — reach out!
        </p>

        <div ref={ref} className="grid lg:grid-cols-5 gap-10">
          {/* Socials column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            {socials.map(({ icon, label, value, href, accent }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl glass glass-hover group"
              >
                <span
                  className="p-2.5 rounded-xl shrink-0 text-white transition-transform group-hover:scale-110"
                  style={{
                    background: accent === 'purple'
                      ? 'linear-gradient(135deg, rgba(168,85,247,0.25), rgba(168,85,247,0.1))'
                      : 'linear-gradient(135deg, rgba(6,182,212,0.25), rgba(6,182,212,0.1))',
                  }}
                >
                  {icon}
                </span>
                <div className="min-w-0">
                  <p className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">{label}</p>
                  <p className="text-sm text-slate-300 truncate">{value}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-xl p-5 mt-6">
              <p className="text-[10px] font-mono text-purple-400 uppercase tracking-widest mb-2">Response time</p>
              <p className="text-sm text-slate-400">I typically respond within <span className="text-white font-medium">24 hours</span>.</p>
            </div>
          </motion.div>

          {/* Form column */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-3"
          >
            {status === 'success' ? (
              <div className="h-full min-h-[320px] flex flex-col items-center justify-center gap-4 glass rounded-2xl p-10 text-center">
                <CheckCircle2 size={52} className="text-emerald-400" />
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Message sent!</h3>
                  <p className="text-slate-400 text-sm">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
                <button
                  onClick={() => setStatus('idle')}
                  className="text-sm text-purple-400 hover:text-purple-300 underline underline-offset-4 mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-7 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { name: 'name', label: 'Your Name', placeholder: 'Jane Doe', type: 'text' },
                    { name: 'email', label: 'Email Address', placeholder: 'jane@example.com', type: 'email' },
                  ].map(({ name, label, placeholder, type }) => (
                    <div key={name}>
                      <label className="block text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-2">
                        {label}
                      </label>
                      <input
                        type={type}
                        name={name}
                        value={form[name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={placeholder}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/7 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/15 transition-all"
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-500 uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hello..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl bg-white/3 border border-white/7 text-white placeholder-slate-700 text-sm focus:outline-none focus:border-purple-500/40 focus:ring-1 focus:ring-purple-500/15 transition-all resize-none"
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm glass border border-red-500/15 rounded-lg px-4 py-3">
                    <AlertCircle size={15} className="shrink-0" />
                    Something went wrong. Email me directly at alishafatima6768@gmail.com
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm text-white disabled:opacity-50 disabled:cursor-not-allowed transition-opacity"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #06b6d4)' }}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
