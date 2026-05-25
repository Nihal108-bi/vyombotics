/**
 * @copyright Copyright (c) 2026 Nihal Jaiswal
 * @author    Nihal Jaiswal
 * @license   MIT
 */

import { useState } from 'react';
import { Mail, ArrowRight, X, PlayCircle, Camera, Briefcase } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 circuit-bg opacity-40" />
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 50%, rgba(59,130,246,0.08) 0%, transparent 60%)',
      }} />

      {/* Decorative orbs */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl" />
      <div className="absolute -right-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-blue-300 text-sm font-medium mb-8">
          <Mail className="w-4 h-4" />
          Limited Spots Available
        </div>

        <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-6 leading-tight">
          Ready to Build{' '}
          <span className="gradient-text">the Future?</span>
        </h2>

        <p className="text-slate-400 text-xl mb-10 leading-relaxed">
          Join thousands of students already learning with Vyombotics. Be the first to know when we launch new courses.
        </p>

        {/* Email form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mb-10">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-5 py-4 rounded-xl glass border border-white/10 bg-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30 transition-all"
            />
            <button
              type="submit"
              className="btn-glow flex items-center justify-center gap-2 px-7 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl border border-blue-500 whitespace-nowrap"
            >
              Join Waitlist
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        ) : (
          <div className="glass rounded-2xl px-8 py-6 mb-10 max-w-lg mx-auto border border-green-500/30">
            <div className="text-green-400 font-bold text-lg mb-1">You're on the list!</div>
            <p className="text-slate-400 text-sm">We'll notify you as soon as we launch new courses.</p>
          </div>
        )}

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4">
          <p className="text-slate-500 text-sm">Follow us:</p>
          {[
            { Icon: X, label: 'Twitter/X', href: '#' },
            { Icon: PlayCircle, label: 'YouTube', href: '#' },
            { Icon: Camera, label: 'Instagram', href: '#' },
            { Icon: Briefcase, label: 'LinkedIn', href: '#' },
          ].map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-500/40 transition-all duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
