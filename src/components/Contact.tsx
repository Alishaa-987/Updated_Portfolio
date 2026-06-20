import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { SectionHeading } from './About';
import { Mail, Linkedin, Github, Send, CheckCircle2, AlertCircle, Download } from 'lucide-react';
import { supabase } from '../lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

const contacts = [
  { icon: <Mail size={14} />, label: 'Email', display: 'alishafatima6768@gmail.com', href: 'mailto:alishafatima6768@gmail.com' },
  { icon: <Linkedin size={14} />, label: 'LinkedIn', display: 'linkedin.com/in/alisha-fatima', href: 'https://www.linkedin.com/in/alisha-fatima-08416729a/' },
  { icon: <Github size={14} />, label: 'GitHub', display: 'github.com/Alishaa-987', href: 'https://github.com/Alishaa-987' },
];

export default function Contact() {
  const { ref, inView } = useInView();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const change = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    const { error } = await supabase.from('contact_messages').insert([{ name: form.name, email: form.email, message: form.message }]);
    if (error) setStatus('error');
    else { setStatus('success'); setForm({ name: '', email: '', message: '' }); }
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="divider mb-24" />
        <div ref={ref} className="grid lg:grid-cols-5 gap-10">
          <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4 }} className="lg:col-span-2">
            <SectionHeading label="Contact" title={<>Let's work<br />together</>} />
            <p className="text-xs text-[#6B7065] leading-[1.9] mb-6">
              I'm actively looking for internship opportunities and open-source collaborations. Reach out directly or use the form.
            </p>
            <div className="space-y-2.5 mb-6">
              {contacts.map(({ icon, label, display, href }) => (
                <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex items-center gap-2.5 group">
                  <span className="icon-btn shrink-0 group-hover:border-[#6B7065] group-hover:text-[#D0D0D0] transition-all">{icon}</span>
                  <div className="min-w-0">
                    <p className="section-label">{label}</p>
                    <p className="text-xs text-[#6B7065] group-hover:text-[#D0D0D0] transition-colors truncate">{display}</p>
                  </div>
                </a>
              ))}
            </div>
            <a href="/Resume.pdf" download className="btn-secondary w-full justify-center"><Download size={12} /> Download Resume</a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 14 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.4, delay: 0.1 }} className="lg:col-span-3">
            {status === 'success' ? (
              <div className="card h-full min-h-[280px] flex flex-col items-center justify-center gap-4 p-10 text-center">
                <CheckCircle2 size={36} className="text-[#6B7065]" />
                <div>
                  <h3 className="text-sm font-bold text-[#D0D0D0] mb-1">Message received</h3>
                  <p className="text-xs text-[#6B7065]">I'll respond within 24 hours.</p>
                </div>
                <button onClick={() => setStatus('idle')} className="text-[10px] text-[#4A4A4A] hover:text-[#6B7065] font-mono mt-1">Send another →</button>
              </div>
            ) : (
              <form onSubmit={submit} className="card p-6 space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { name: 'name', label: 'Name', placeholder: 'Jane Smith' },
                    { name: 'email', label: 'Email', placeholder: 'jane@company.com' },
                  ].map(({ name, label, placeholder }) => (
                    <div key={name}>
                      <label className="section-label block mb-1.5">{label}</label>
                      <input
                        type={name === 'email' ? 'email' : 'text'}
                        name={name}
                        value={form[name as keyof typeof form]}
                        onChange={change}
                        placeholder={placeholder}
                        required
                        className="w-full px-3 py-2.5 rounded bg-[#1C1C1C] border border-[#4A4A4A] text-[#D0D0D0] placeholder-[#4A4A4A] text-xs focus:outline-none focus:border-[#6B7065] transition-colors"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label className="section-label block mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={change}
                    placeholder="Tell me about your project..."
                    required
                    rows={5}
                    className="w-full px-3 py-2.5 rounded bg-[#1C1C1C] border border-[#4A4A4A] text-[#D0D0D0] placeholder-[#4A4A4A] text-xs focus:outline-none focus:border-[#6B7065] transition-colors resize-none"
                  />
                </div>
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-[#a05050] text-xs border border-[#4a3535] bg-[#1a1818] rounded px-3 py-2.5">
                    <AlertCircle size={12} className="shrink-0" />
                    Something went wrong. Email me directly at alishafatima6768@gmail.com
                  </div>
                )}
                <button type="submit" disabled={status === 'loading'} className="btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed">
                  {status === 'loading' ? (
                    <>
                      <span className="w-3 h-3 border-2 border-[#6B7065] border-t-[#1C1C1C] rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <><Send size={12} /> Send Message</>
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
