import { PlayCircle, Bot, Brain, Globe, Bell } from 'lucide-react';

const CHANNEL_URL = 'https://youtube.com/@vyombotics';

const featureCards = [
  {
    icon: Bot,
    title: 'Robotics Projects',
    desc: 'Watch real robot builds from scratch',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
  },
  {
    icon: Brain,
    title: 'AI & ML Tutorials',
    desc: 'Hands-on Python and AI coding sessions',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
  },
  {
    icon: Globe,
    title: 'Web & App Dev',
    desc: 'Build and deploy real projects with us',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
  },
];

export default function WatchAndLearn() {
  return (
    <section id="watch" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 60%)',
      }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-red-500/30 text-red-400 text-sm font-medium mb-4">
            <PlayCircle className="w-4 h-4" />
            Free Video Content
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4">
            Watch &amp; Learn{' '}
            <span style={{ background: 'linear-gradient(135deg, #ef4444, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              🎬
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Explore our free video lessons, project demos, and tutorials on our YouTube channel.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">

          {/* LEFT — YouTube channel card */}
          <div className="glass rounded-2xl p-8 flex flex-col justify-between" style={{
            background: 'rgba(239,68,68,0.05)',
            border: '1px solid rgba(239,68,68,0.2)',
            boxShadow: '0 0 40px rgba(239,68,68,0.08)',
          }}>
            <div>
              {/* YouTube icon + brand */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center" style={{
                  background: 'linear-gradient(135deg, #ef4444, #dc2626)',
                  boxShadow: '0 0 24px rgba(239,68,68,0.4)',
                }}>
                  <PlayCircle className="w-9 h-9 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Vyombotics on YouTube</h3>
                  <p className="text-slate-400 text-sm">Free tutorials • Project demos • Tech content</p>
                </div>
              </div>

              {/* Channel description */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-2xl">🤖</span>
                  <span className="text-slate-300 text-sm">Robotics builds, drone projects, automation demos</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-2xl">🧠</span>
                  <span className="text-slate-300 text-sm">AI, ML and Python coding walkthroughs</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-xl" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span className="text-2xl">🚀</span>
                  <span className="text-slate-300 text-sm">Join our growing community of learners</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href={CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl font-bold text-white text-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(239,68,68,0.5)]"
              style={{ background: 'linear-gradient(135deg, #dc2626, #ef4444)' }}
            >
              <PlayCircle className="w-5 h-5" />
              Visit Our Channel →
            </a>
          </div>

          {/* RIGHT — 3 feature cards */}
          <div className="flex flex-col gap-4 justify-between">
            {featureCards.map(({ icon: Icon, title, desc, color, bg, border }) => (
              <div
                key={title}
                className={`glass rounded-xl p-6 flex items-center gap-5 border ${border} hover:scale-[1.02] transition-transform duration-300`}
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${bg}`}>
                  <Icon className={`w-7 h-7 ${color}`} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
                  <p className="text-slate-400 text-sm">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom banner */}
        <div
          className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{
            background: 'linear-gradient(135deg, rgba(239,68,68,0.12), rgba(249,115,22,0.08))',
            border: '1px solid rgba(239,68,68,0.25)',
          }}
        >
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Bell className="w-5 h-5 text-red-400 flex-shrink-0 hidden sm:block" />
            <p className="text-white font-semibold">
              🎬 New videos every week — Subscribe so you never miss a lesson!
            </p>
          </div>
          <a
            href={CHANNEL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm transition-all duration-300 hover:shadow-[0_0_24px_rgba(239,68,68,0.6)] hover:scale-105"
            style={{ background: 'linear-gradient(135deg, #dc2626, #ef4444)' }}
          >
            <PlayCircle className="w-4 h-4" />
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
}
